#!/usr/bin/env node
/* Check a *deployed* site with a real browser, without a report sink.
 *
 *     node tools/live-check.mjs                                  # the GitHub Pages site
 *     node tools/live-check.mjs --url https://…/ --with-meteor
 *
 * The local check (tools/browser-check.mjs) uses POSTed reports because a headless browser's
 * console is not readable from a shell. A deployed static host cannot accept POSTs, so this one
 * asks the page's own frame instead: the client runs in a same-origin blob frame, so the parent
 * can read `frame.contentWindow.webmc.selftest()` directly. That is the same self-test the runtime
 * prints locally, read from the live bytes.
 */
import { spawn } from "node:child_process";
import { existsSync, readdirSync, mkdirSync, writeFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));
const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const at = args.indexOf("--" + name);
  return at >= 0 && args[at + 1] && !args[at + 1].startsWith("--") ? args[at + 1] : fallback;
};
const URL_TO_CHECK = arg("url", "https://amphibiandev.github.io/webmc-jsmod/") + "?autoplay=1&consent=all";
const SECONDS = Number(arg("seconds", 240));
const WITH_METEOR = args.includes("--with-meteor");
const CDP_PORT = Number(arg("cdp", 9350));
const SHOTS = join(root, "checks");
mkdirSync(SHOTS, { recursive: true });

function findChrome() {
  const cache = join(process.env.HOME || "", "Library/Caches/ms-playwright");
  if (existsSync(cache)) {
    for (const entry of readdirSync(cache)) {
      const candidate = join(cache, entry, "chrome-mac-arm64", "Google Chrome for Testing.app", "Contents", "MacOS", "Google Chrome for Testing");
      if (existsSync(candidate) && /chromium-/.test(entry)) { return candidate; }
    }
  }
  return null;
}
const chrome = findChrome();
if (!chrome) { console.error("no Chrome/Chromium found"); process.exit(2); }

async function target() {
  for (let i = 0; i < 80; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${CDP_PORT}/json/list`)).json();
      const page = list.find((t) => t.type === "page");
      if (page) { return page; }
    } catch (error) { /* not yet */ }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error("the browser never opened a debug port");
}
function connect(url) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(url);
    let nextId = 1;
    const pending = new Map();
    socket.addEventListener("open", () => resolve({
      send(method, params) {
        const id = nextId++;
        socket.send(JSON.stringify({ id, method, params: params || {} }));
        return new Promise((ok, bad) => { pending.set(id, { ok, bad }); setTimeout(() => { if (pending.delete(id)) { bad(new Error(method + " timed out")); } }, 60000); });
      },
      close() { socket.close(); }
    }));
    socket.addEventListener("message", (event) => {
      let message; try { message = JSON.parse(event.data); } catch (error) { return; }
      if (message.id && pending.has(message.id)) {
        const { ok, bad } = pending.get(message.id);
        pending.delete(message.id);
        if (message.error) { bad(new Error(JSON.stringify(message.error))); } else { ok(message.result); }
      }
    });
    socket.addEventListener("error", () => reject(new Error("CDP socket failed")));
  });
}

const profile = join(tmpdir(), "webmc-live-" + Date.now());
console.log("checking " + URL_TO_CHECK);
const child = spawn(chrome, [
  "--headless=new", `--remote-debugging-port=${CDP_PORT}`, `--user-data-dir=${profile}`,
  "--no-first-run", "--disable-dev-shm-usage", "--disable-gpu-sandbox",
  "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader",
  "--disable-background-timer-throttling", "--disable-renderer-backgrounding", "--disable-backgrounding-occluded-windows",
  "--window-size=1280,800", URL_TO_CHECK
], { stdio: ["ignore", "pipe", "pipe"] });
let log = ""; child.stderr.on("data", (d) => { log += d.toString(); });

const page = await target();
const cdp = await connect(page.webSocketDebuggerUrl);
await cdp.send("Runtime.enable");
const evalIn = async (expression, awaitPromise = true) => {
  const result = await cdp.send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise });
  if (result.exceptionDetails) { throw new Error(JSON.stringify(result.exceptionDetails).slice(0, 300)); }
  return result.result.value;
};

const checks = [];
const check = (name, ok, detail) => { checks.push({ name, ok: !!ok }); console.log((ok ? "  ok   " : "  FAIL ") + name + (detail ? " — " + detail : "")); };

const deadline = Date.now() + SECONDS * 1000;
let selftest = null;
let pageError = null;
let asked = false;

while (Date.now() < deadline) {
  await new Promise((r) => setTimeout(r, 2000));
  try {
    pageError = await evalIn(`(function () { var w = document.getElementById('why'); var s = document.getElementById('status'); return (w && w.textContent) || ''; })()`, false);
    const ready = await evalIn(`(function () { var f = document.getElementById('frame'); var w = f && f.contentWindow; return !!(w && w.webmc && w.webmc.selftest); })()`, false);
    if (ready) {
      selftest = await evalIn(`JSON.stringify(document.getElementById('frame').contentWindow.webmc.selftest())`, false);
      selftest = JSON.parse(selftest);
      if (!asked && WITH_METEOR) {
        asked = true;
        console.log("  … asking the live page to hot-load the converted Meteor Client (11.8 MB)");
        await evalIn(`window.__webmcLoadOptional && window.__webmcLoadOptional("meteor-client")`, true).catch((e) => console.log("  (meteor ask failed: " + e.message + ")"));
      }
      const elapsed = Math.round((SECONDS * 1000 - (deadline - Date.now())) / 1000);
      if (elapsed % 30 < 2) {
        console.log("  … " + elapsed + "s: frames " + selftest.frame.count + ", input " + selftest.hooks.inputEvents +
          ", state " + selftest.hooks.stateUpdates + ", mods " + selftest.mods.length + ", modules " + selftest.modules +
          ", patches " + (selftest.patches ? selftest.patches.plans : 0) +
          (selftest.state.screen ? "  screen " + String(selftest.state.screen).split(".").pop() : ""));
      }
      // Stop early once the interesting conditions are all true.
      const meteorOk = !WITH_METEOR || selftest.mods.some((m) => m.id === "meteor-client" && m.enabled);
      if (selftest.frame.count > 60 && selftest.hooks.stateUpdates > 0 && selftest.mods.length >= 5 && meteorOk) { break; }
    }
  } catch (error) {
    /* the frame is not ready yet */
  }
}

try {
  const shot = await cdp.send("Page.captureScreenshot", { format: "png" });
  writeFileSync(join(SHOTS, "live.png"), Buffer.from(shot.data, "base64"));
} catch (error) { /* optional */ }
try { cdp.close(); } catch (error) {}
try { child.kill("SIGTERM"); } catch (error) {}

console.log("\nverdict");
const self = selftest;
check("the page loaded and the client frame opened", !!self, pageError ? "page says: " + pageError : (self ? "" : "no selftest from the frame"));
check("the client in the frame is the 1.21.11 build", self && /1\.21\.11/.test(self.client.version), self && self.client.version);
check("the runtime is installed before the client's scripts", self && self.runtime && self.runtime.version, self && self.runtime.version);
check("the hooks installed on the real client", self && self.hooks.input && self.hooks.state && self.hooks.gl, self && JSON.stringify(self.hooks));
check("the frame loop runs", self && self.frame.count > 60, self && self.frame.count + " frames");
check("the client reached a running state", self && self.hooks.stateUpdates > 0, self && self.hooks.stateUpdates + " state updates");
const mods = (self && self.mods) || [];
check("the converted Fabric jar and Modrinth mod are loaded", mods.some((m) => m.id === "hello-fabric" && m.enabled) && mods.some((m) => m.id === "gammautils" && m.enabled), mods.map((m) => m.id + (m.enabled ? "+" : "-")).join(", "));
if (WITH_METEOR) {
  const meteor = mods.find((m) => m.id === "meteor-client");
  check("the converted Meteor Client hot-loaded from the live site", !!meteor && meteor.enabled, meteor ? meteor.id + (meteor.suspended ? " SUSPENDED" : "") + (meteor.errors.length ? " errors: " + meteor.errors.length : "") : "not listed");
  check("Meteor's modules and its named mixin plan registered", !!(self && self.modules >= 150 && self.patches && self.patches.plans >= 100), self && self.modules + " modules, " + (self.patches && self.patches.plans) + " patch plans / " + (self.patches && self.patches.injections) + " injections, applied " + (self.patches && self.patches.applied));
}
check("no mod is suspended by its own errors", mods.every((m) => !m.suspended), mods.filter((m) => m.suspended).map((m) => m.id).join(", ") || "none");
writeFileSync(join(SHOTS, "live.json"), JSON.stringify({ at: new Date().toISOString(), url: URL_TO_CHECK, checks, selftest: self, browserLogTail: log.split("\n").slice(-20) }, null, 2));

const failed = checks.filter((c) => !c.ok);
console.log("\n" + (checks.length - failed.length) + " passed, " + failed.length + " failed — checks/live.json + checks/live.png");
process.exit(failed.length ? 1 : 0);
