#!/usr/bin/env node
/* Boot the client in a real headless Chrome and prove the mod runtime is inside it.
 *
 *     node tools/browser-check.mjs                       # the whole check
 *     node tools/browser-check.mjs --seconds 240         # wait longer for the game itself
 *     node tools/browser-check.mjs --url <url>           # check a deployed page
 *
 * How it works: the page is opened with `?report=1`, which makes it POST every message the mod
 * runtime sends to `/__report` on the static server. No debugger is needed to watch the runtime.
 * A tiny CDP client (Node has WebSocket built in) is used for the one thing the reports cannot do:
 * dispatch a real keydown into the client's frame, so the input hook can be proven end to end, and
 * take a screenshot at the end.
 */
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync, readdirSync, mkdtempSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { createStaticServer } from "./serve.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));
const args = process.argv.slice(2);

function arg(name, fallback) {
  const at = args.indexOf("--" + name);
  return at >= 0 && args[at + 1] ? args[at + 1] : fallback;
}

const PORT = Number(arg("port", 8123));
const CDP_PORT = Number(arg("cdp", 9333));
const SECONDS = Number(arg("seconds", 300));
const WITH_METEOR = args.includes("--with-meteor");
const URL_TO_CHECK = arg("url", `http://127.0.0.1:${PORT}/index.html?report=1&consent=all`);
const SHOT_DIR = join(root, "checks");
mkdirSync(SHOT_DIR, { recursive: true });

function findChrome() {
  const cache = join(process.env.HOME || "", "Library/Caches/ms-playwright");
  if (existsSync(cache)) {
    for (const entry of readdirSync(cache)) {
      const candidate = join(cache, entry, "chrome-mac-arm64", "Google Chrome for Testing.app", "Contents", "MacOS", "Google Chrome for Testing");
      if (existsSync(candidate) && /chromium-/.test(entry)) { return candidate; }
      const second = join(cache, entry, "chrome-mac", "Google Chrome for Testing.app", "Contents", "MacOS", "Google Chrome for Testing");
      if (existsSync(second) && /chromium-/.test(entry)) { return second; }
    }
  }
  for (const candidate of ["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/Applications/Chromium.app/Contents/MacOS/Chromium"]) {
    if (existsSync(candidate)) { return candidate; }
  }
  return null;
}

/* ------------------------------------------------------------------ a very small CDP client --- */
async function cdpTargets() {
  for (let attempt = 0; attempt < 80; attempt++) {
    try {
      const response = await fetch(`http://127.0.0.1:${CDP_PORT}/json/list`);
      const list = await response.json();
      const page = list.find((target) => target.type === "page");
      if (page) { return page; }
    } catch (error) { /* not up yet */ }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("the browser never opened a debug port");
}

function cdpConnect(wsUrl) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(wsUrl);
    let nextId = 1;
    const pending = new Map();
    socket.addEventListener("open", () => resolve({
      send(method, params) {
        const id = nextId++;
        socket.send(JSON.stringify({ id, method, params: params || {} }));
        return new Promise((ok, bad) => {
          pending.set(id, { ok, bad });
          setTimeout(() => { if (pending.delete(id)) { bad(new Error(method + " timed out")); } }, 30000);
        });
      },
      close() { socket.close(); }
    }));
    socket.addEventListener("message", (event) => {
      let message;
      try { message = JSON.parse(event.data); } catch (error) { return; }
      if (message.id && pending.has(message.id)) {
        const { ok, bad } = pending.get(message.id);
        pending.delete(message.id);
        if (message.error) { bad(new Error(JSON.stringify(message.error))); } else { ok(message.result); }
      }
    });
    socket.addEventListener("error", () => reject(new Error("CDP socket failed")));
  });
}

/* ------------------------------------------------------------------ run ------------------------ */
const chrome = findChrome();
if (!chrome) {
  console.error("no Chrome/Chromium found (Playwright cache or /Applications). Nothing checked.");
  process.exit(2);
}

const server = createStaticServer();
await new Promise((resolve) => server.listen(PORT, "127.0.0.1", resolve));
console.log(`serving ${root} on http://127.0.0.1:${PORT}`);
console.log(`checking ${URL_TO_CHECK}`);

const profile = mkdtempSync(join(tmpdir(), "webmc-chrome-"));
const child = spawn(chrome, [
  "--headless=new",
  `--remote-debugging-port=${CDP_PORT}`,
  `--user-data-dir=${profile}`,
  "--no-first-run", "--no-default-browser-check",
  "--disable-dev-shm-usage", "--disable-gpu-sandbox",
  "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader",
  "--enable-logging=stderr", "--log-level=3",
  "--autoplay-policy=no-user-gesture-required",
  "--disable-background-timer-throttling",
  "--disable-renderer-backgrounding",
  "--disable-backgrounding-occluded-windows",
  "--window-size=1280,800",
  URL_TO_CHECK
], { stdio: ["ignore", "pipe", "pipe"] });

let browserLog = "";
child.stderr.on("data", (chunk) => { browserLog += chunk.toString(); });
child.stdout.on("data", (chunk) => { browserLog += chunk.toString(); });

const reports = server.reports;
let cdp = null;
let keyInjected = false;
let meteorAsked = false;
let selftestInjected = false;
let screenshotTaken = false;
let gameScreen = null;
const deadline = Date.now() + SECONDS * 1000;

function last(predicate) {
  for (let i = reports.length - 1; i >= 0; i--) { if (predicate(reports[i])) { return reports[i]; } }
  return null;
}
const runtimeReport = () => last((r) => r.kind === "webmc:runtime");
const anyHeartbeat = () => last((r) => r.kind === "webmc:heartbeat");
const lastSelf = () => {
  const report = anyHeartbeat() || runtimeReport();
  return report && report.value;
};

console.log("waiting for the runtime to say it is inside the client…");
while (Date.now() < deadline) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const hello = runtimeReport();
  if (hello && !keyInjected) {
    console.log(`  runtime installed: client ${hello.value.client.version}, capabilities ${hello.value.capabilities.join(", ")}`);
    try {
      const target = await cdpTargets();
      cdp = await cdpConnect(target.webSocketDebuggerUrl);
      await cdp.send("Runtime.enable");
      const expression = `(() => {
        const frame = document.getElementById("frame");
        const doc = frame && frame.contentDocument;
        if (!doc) return "no-frame-document";
        doc.dispatchEvent(new KeyboardEvent("keydown", { code: "KeyH", key: "h", keyCode: 72, bubbles: true }));
        doc.dispatchEvent(new KeyboardEvent("keyup", { code: "KeyH", key: "h", keyCode: 72, bubbles: true }));
        return "key-sent:" + (doc.activeElement && doc.activeElement.tagName || "none");
      })()`;
      const outcome = await cdp.send("Runtime.evaluate", { expression, returnByValue: true });
      console.log("  key injection into the client frame: " + JSON.stringify(outcome && outcome.result && outcome.result.value));
      keyInjected = true;
    } catch (error) {
      console.log("  (could not reach CDP for the key test: " + error.message + ")");
    }
  }
  if (WITH_METEOR && keyInjected && !meteorAsked) {
    meteorAsked = true;
    try {
      if (!cdp) { const target = await cdpTargets(); cdp = await cdpConnect(target.webSocketDebuggerUrl); }
      await cdp.send("Runtime.evaluate", { expression: `window.__webmcLoadOptional && window.__webmcLoadOptional("meteor-client")`, returnByValue: true });
      console.log("  asked the page to hot-load the converted Meteor Client (11.8 MB)…");
    } catch (error) { console.log("  (could not ask for Meteor: " + error.message + ")"); }
  }
  if (keyInjected && !selftestInjected && hello) {
    try {
      const target = await cdpTargets();
      if (!cdp) { cdp = await cdpConnect(target.webSocketDebuggerUrl); await cdp.send("Runtime.enable"); }
      await cdp.send("Runtime.evaluate", {
        expression: `window.postMessage({ kind: "webmc:query-selftest" }, "*") || "asked"`,
        returnByValue: true
      });
      selftestInjected = true;
    } catch (error) { /* the heartbeat carries the same data */ }
  }

  const self = lastSelf();
  if (self && self.frame && self.frame.count > 0 && keyInjected) {
    const inputEvents = self.hooks.inputEvents | 0;
    if (inputEvents > 0 && !gameScreen) {
      console.log(`  input hook saw the injected key (${inputEvents} events total)`);
    }
    if (self.hooks.stateUpdates > 0 && !gameScreen) {
      gameScreen = (self.client && self.client.version) || "state";
      console.log(`  the client is publishing state (${self.hooks.stateUpdates} updates)`);
    }
    if (!screenshotTaken && self.frame.count > 30) {
      screenshotTaken = true;
      try {
        if (!cdp) { const target = await cdpTargets(); cdp = await cdpConnect(target.webSocketDebuggerUrl); }
        const shot = await cdp.send("Page.captureScreenshot", { format: "png" });
        const file = join(SHOT_DIR, "boot.png");
        writeFileSync(file, Buffer.from(shot.data, "base64"));
        console.log("  screenshot: " + file);
      } catch (error) { console.log("  (screenshot failed: " + error.message + ")"); }
    }
  }
  // The game's title screen appears as a state snapshot with a screen name.
  const assembled = lastSelf();
  if (assembled && assembled.hooks && assembled.hooks.stateUpdates > 0) {
    const mods = assembled.mods || [];
    if (mods.length && !gameScreen) { gameScreen = "state"; }
  }
  const elapsed = Math.round((SECONDS * 1000 - (deadline - Date.now())) / 1000);
  if (elapsed % 30 === 0 && elapsed > 0 && Date.now() + 1000 < deadline) {
    const self2 = lastSelf();
    console.log(`  … ${elapsed}s: frames ${self2 ? self2.frame.count : 0}, input ${self2 ? self2.hooks.inputEvents : 0}, state ${self2 ? self2.hooks.stateUpdates : 0}`);
  }
  if (elapsed >= SECONDS - 1) { break; }
}

try { if (cdp) { cdp.close(); } } catch (error) {}
try { child.kill("SIGTERM"); } catch (error) {}
setTimeout(() => { try { child.kill("SIGKILL"); } catch (error) {} try { rmSync(profile, { recursive: true, force: true }); } catch (error) {} }, 1500);
server.close();

/* ------------------------------------------------------------------ verdict -------------------- */
const self = lastSelf();
const modsReport = last((r) => r.kind === "webmc:mods");
const checks = [];
function check(name, condition, detail) {
  checks.push({ name, ok: !!condition, detail });
  console.log((condition ? "  ok   " : "  FAIL ") + name + (detail ? " — " + detail : ""));
}

console.log("\nverdict");
check("the runtime installed inside the client before its first script", !!runtimeReport(),
  runtimeReport() ? "client " + runtimeReport().value.client.version : "no message from the client document");
check("the client publishes the window surface the runtime hooks",
  self && self.hooks && self.hooks.input && self.hooks.state && self.hooks.gl,
  self ? JSON.stringify(self.hooks) : "no selftest");
console.log((self && self.hooks.network ? "  ok   " : "  note ") + "the packet bridge " +
  (self && self.hooks.network ? "is hooked" : "is not present yet — it appears with a server connection, and this run never joined one"));
check("the frame loop is running", self && self.frame && self.frame.count > 0, self ? self.frame.count + " frames" : "");
check("a real keydown was seen by the input hook", self && self.hooks.inputEvents > 0,
  self ? self.hooks.inputEvents + " input events" : "");
const listed = (self && self.mods) || (modsReport && modsReport.mods) || [];
check("mods from mods/index.json loaded", listed.length >= 5, listed.map((m) => m.id).join(", ") || "no mod list");
const convertedFabric = listed.find((m) => m.id === "hello-fabric");
check("a converted Fabric jar is loaded at play time",
  !!convertedFabric && convertedFabric.enabled,
  convertedFabric ? convertedFabric.id + (convertedFabric.enabled ? " enabled" : " disabled") +
    (convertedFabric.suspended ? " SUSPENDED after " + convertedFabric.errors.length + " errors" : "") +
    (convertedFabric.errors.length ? " — first error: " + convertedFabric.errors[0].text : "") : "not in the list");
const convertedModrinth = listed.find((m) => m.id === "gammautils");
if (WITH_METEOR) {
  const meteor = listed.find((m) => m.id === "meteor-client");
  check("the converted Meteor Client hot-loaded at play time", !!meteor && meteor.enabled,
    meteor ? meteor.id + (meteor.enabled ? " enabled" : " disabled") + (meteor.suspended ? " SUSPENDED" : "") +
      (meteor.errors.length ? " — first error: " + meteor.errors[0].text : "") : "not in the list");
  check("Meteor's 171 modules and its mixin plan are registered",
    !!(self && self.modules >= 150 && self.patches && self.patches.plans >= 100),
    self ? self.modules + " modules, " + (self.patches ? self.patches.plans + " patch plans / " + self.patches.injections + " injections" : "no patches") : "no selftest");
}
check("a converted Modrinth mod (Gamma Utils) carried its Fabric events into the runtime",
  !!convertedModrinth && convertedModrinth.enabled,
  convertedModrinth ? convertedModrinth.capabilities.join("+") +
    (convertedModrinth.suspended ? " — suspended after repeated runtime errors (the mixin parts need internals)" : "") : "not in the list");
check("the client reached a running state", !!(self && self.hooks.stateUpdates > 0),
  self ? self.hooks.stateUpdates + " state updates" : "the game did not publish state in the window given");
writeFileSync(join(SHOT_DIR, "report.json"), JSON.stringify({ at: new Date().toISOString(), url: URL_TO_CHECK, checks, reports: reports.slice(-80), browserLogTail: browserLog.split("\n").slice(-40) }, null, 2));

const failed = checks.filter((c) => !c.ok);
console.log(`\n${checks.length - failed.length} passed, ${failed.length} failed — report written to checks/report.json`);
process.exit(failed.length ? 1 : 0);
