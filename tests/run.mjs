#!/usr/bin/env node
/* The runtime's own test suite: no browser, no network, no dependencies.
 *
 *     node tests/run.mjs
 *
 * A fake client window (tests/fake-window.mjs) publishes the same globals the compiled client
 * does, so a test is written the way the client behaves: install the globals, push a key tuple,
 * set a state snapshot, call the runtime's API and look at what happened.
 */
import { loadRuntime } from "./fake-window.mjs";

let passed = 0;
let failed = 0;
const failures = [];

const settle = () => new Promise((resolve) => setTimeout(resolve, 0));

async function test(name, fn) {
  try {
    await fn();
    passed++;
    console.log("  ok   " + name);
  } catch (error) {
    failed++;
    failures.push({ name, error });
    console.log("  FAIL " + name + "\n       " + (error && error.stack || error));
  }
}
function eq(actual, expected, what) {
  const a = JSON.stringify(actual);
  const b = JSON.stringify(expected);
  if (a !== b) { throw new Error((what || "value") + ": expected " + b + ", got " + a); }
}
function ok(value, what) { if (!value) { throw new Error(what || "expected a truthy value"); } }
function throws(fn, what) {
  let threw = false;
  try { fn(); } catch (error) { threw = true; }
  if (!threw) { throw new Error(what || "expected a throw"); }
}

console.log("webmc jsmod runtime\n");

/* ------------------------------------------------------------------ boot --------------------- */
await test("the runtime installs on a client window", async () => {
  const win = loadRuntime({ mods: [] }).__installClient();
  ok(win.webmc, "webmc is on the window");
  eq(win.webmc.apiVersion, 1, "apiVersion");
  const self = win.webmc.selftest();
  ok(self.ok, "selftest.ok");
  eq(self.client.version, "1.21.11", "client version comes from the bootstrap");
});

await test("the hooks install when the client publishes its globals", async () => {
  const win = loadRuntime().__installClient();
  const self = win.webmc.selftest();
  ok(self.hooks.input, "input hook installed");
  ok(self.hooks.state, "state hook installed");
  ok(self.hooks.network, "network hook installed");
  ok(self.hooks.gl, "gl hook installed");
  ok(self.capabilities.includes("hud.draw"), "hud.draw capability");
  ok(self.capabilities.includes("state.read"), "state.read capability");
});

/* ------------------------------------------------------------------ capabilities ------------- */
await test("a mod gets exactly the namespaces it asked for", async () => {
  const win = loadRuntime();
  win.__installClient();
  const seen = [];
  win.webmc.defineMod({ id: "caps", name: "Caps", capabilities: ["hud", "storage"] });
  await settle();
  const api = win.webmc.mods.get("caps").api;
  ok(api.hud, "hud present");
  ok(api.storage, "storage present");
  ok(!api.network, "network absent without the capability");
  ok(!api.player, "player absent without the capability");
  ok(!api.internals, "internals absent without the capability");
  eq(api.capabilities, ["hud", "storage"], "capabilities echoed");
});

await test("the default capability set is safe", async () => {
  const win = loadRuntime();
  win.__installClient();
  win.webmc.defineMod({ id: "default" });
  await settle();
  await settle();
  const api = win.webmc.mods.get("default").api;
  ok(api.hud, "hud by default");
  ok(api.input, "input by default");
  ok(!api.network, "no network by default");
  ok(!api.internals, "no internals by default");
  ok(!api.input.press, "no injection by default");
});

/* ------------------------------------------------------------------ HUD ---------------------- */
await test("HUD elements are added, drawn and removed", async () => {
  const win = loadRuntime();
  win.__installClient();
  win.webmc.defineMod({ id: "hudmod", capabilities: ["hud"] });
  await settle();
  const api = win.webmc.mods.get("hudmod").api;
  const label = api.hud.text({ id: "hello", x: 1, y: 2, text: "hi" });
  eq(win.webmc.hud.elements.size, 1, "one element");
  label.update({ text: "changed" });
  eq(label.element.text, "changed", "update");
  label.remove();
  eq(win.webmc.hud.elements.size, 0, "removed");
});

await test("unloading a mod removes its HUD elements", async () => {
  const win = loadRuntime();
  win.__installClient();
  win.webmc.defineMod({ id: "hudmod2", capabilities: ["hud"] });
  await settle();
  const api = win.webmc.mods.get("hudmod2").api;
  api.hud.text({ id: "x", text: "x" });
  api.hud.text({ id: "y", text: "y" });
  eq(win.webmc.hud.elements.size, 2, "two elements");
  win.webmc.mods.unload("hudmod2");
  eq(win.webmc.hud.elements.size, 0, "gone with the mod");
});

/* ------------------------------------------------------------------ input -------------------- */
function pushKey(win, tuple) { win.__gaiusGlfwEvents.push(tuple); }

await test("key events reach a mod's keybind", async () => {
  const win = loadRuntime();
  win.__installClient();
  win.webmc.defineMod({ id: "keys", capabilities: ["input"] });
  await settle();
  const api = win.webmc.mods.get("keys").api;
  let pressed = 0;
  api.input.bind({ id: "k", key: "h", handler: () => pressed++ });
  pushKey(win, [1, 72, 72, 1, 0, 0, 0]);      // H down
  pushKey(win, [1, 72, 72, 0, 0, 0, 0]);      // H up
  eq(pressed, 1, "pressed once");
});

await test("modifiers are respected", async () => {
  const win = loadRuntime();
  win.__installClient();
  win.webmc.defineMod({ id: "keys2", capabilities: ["input"] });
  await settle();
  const api = win.webmc.mods.get("keys2").api;
  let shiftOnly = 0, plain = 0;
  api.input.bind({ id: "s", key: "g", shift: true, handler: () => shiftOnly++ });
  api.input.bind({ id: "p", key: "g", handler: () => plain++ });
  pushKey(win, [1, 71, 71, 1, 1, 0, 0]);      // G with shift
  pushKey(win, [1, 71, 71, 1, 0, 0, 0]);      // G plain
  eq(shiftOnly, 1, "shift binding");
  eq(plain, 2, "plain binding sees both");
});

await test("input observation counts every event", async () => {
  const win = loadRuntime();
  win.__installClient();
  pushKey(win, [4, 0, 0, 0, 0, 5, 6]);
  pushKey(win, [5, 0, 0, 0, 0, 0, -1]);
  const self = win.webmc.selftest();
  eq(self.hooks.inputEvents, 2, "two events observed");
});

await test("key injection writes tuples the client's own loop would have written", async () => {
  const win = loadRuntime();
  win.__installClient();
  win.webmc.input.injectKey("t", { action: 1 });
  const last = win.__gaiusGlfwEvents[win.__gaiusGlfwEvents.length - 1];
  eq(last[0], 1, "key type");
  eq(last[1], 84, "T is GLFW 84");
  eq(last[3], 1, "press");
});

await test("chat.send drives open, type, enter", async () => {
  const win = loadRuntime();
  win.__installClient();
  const events = win.__gaiusGlfwEvents;
  await win.webmc.chat.send("/gamemode creative", { gap: 1 });
  const types = events.map((e) => [e[0], e[1]]);
  eq(types[0], [1, 47], "slash opens chat");
  eq(types.slice(1, 3), [[1, 47], [2, 103]], "slash release, then 'g' typed");
  const enter = types.filter(([type, code]) => type === 1 && code === 257);
  eq(enter.length, 2, "enter down and up");
});

/* ------------------------------------------------------------------ state -------------------- */
await test("world join and leave are derived from the client's snapshots", async () => {
  const win = loadRuntime();
  win.__installClient();
  const events = [];
  win.webmc.defineMod({ id: "world", capabilities: ["player.read"] });
  await settle();
  const mod = win.webmc.mods.get("world");
  mod.on("world:join", () => events.push("join"));
  mod.on("world:leave", () => events.push("leave"));
  win.__gaiusMinecraftState = { screen: null, level: true, player: { x: 1, y: 2, z: 3, yaw: 0, pitch: 0, gameMode: "survival" }, clientDistance: {} };
  win.__gaiusMinecraftState = { screen: null, level: false, player: null, clientDistance: {} };
  eq(events, ["join", "leave"], "join then leave");
});

await test("player snapshots read what the client published and invent nothing", async () => {
  const win = loadRuntime();
  win.__installClient();
  win.webmc.defineMod({ id: "snap", capabilities: ["player.read", "world.read"] });
  await settle();
  const api = win.webmc.mods.get("snap").api;
  eq(api.player.snapshot().present, false, "no state yet");
  win.__gaiusMinecraftState = { screen: "TitleScreen", level: true, player: { className: "LocalPlayer", x: 10, y: 64, z: -3, yaw: 90, pitch: 12, gameMode: "creative", collisionFree: false, selectedItem: { slot: 1, item: "stone", count: 64 } }, loadedChunkCount: 42, clientDistance: { effectiveRenderDistance: 12 } };
  const snap = api.player.snapshot();
  eq(snap.position, { x: 10, y: 64, z: -3 }, "position");
  eq(snap.yaw, 90, "yaw");
  eq(snap.gameMode, "creative", "game mode");
  eq(snap.health, null, "health is honestly null");
  eq(api.world.snapshot().loadedChunks, 42, "chunk count");
  eq(api.world.screen().name, "TitleScreen", "screen name");
});

/* ------------------------------------------------------------------ commands ----------------- */
await test("commands register, run and unload", async () => {
  const win = loadRuntime();
  win.__installClient();
  win.webmc.defineMod({ id: "cmd", capabilities: ["commands"] });
  await settle();
  const api = win.webmc.mods.get("cmd").api;
  const calls = [];
  api.command({ name: "kit", aliases: ["k"], handler: (ctx) => calls.push(ctx.args) });
  ok(win.webmc.commands.run("kit stone 64"), "handler ran");
  win.webmc.commands.run("k wood");
  eq(calls, [["stone", "64"], ["wood"]], "args parsed");
  eq(win.webmc.commands.list()[0].name, "kit", "listed");
  win.webmc.mods.unload("cmd");
  eq(win.webmc.commands.list().length, 0, "commands go with the mod");
});

/* ------------------------------------------------------------------ storage/settings --------- */
await test("storage is namespaced per mod", async () => {
  const win = loadRuntime();
  win.__installClient();
  win.webmc.defineMod({ id: "a", capabilities: ["storage"] });
  await settle();
  win.webmc.defineMod({ id: "b", capabilities: ["storage"] });
  await settle();
  const a = win.webmc.mods.get("a").api.storage;
  const b = win.webmc.mods.get("b").api.storage;
  a.set("k", 1);
  b.set("k", 2);
  eq(a.get("k"), 1, "a sees its own");
  eq(b.get("k"), 2, "b sees its own");
  eq(a.keys(), ["k"], "keys are namespaced");
});

await test("settings read, write and persist through storage", async () => {
  const win = loadRuntime();
  win.__installClient();
  win.webmc.defineMod({ id: "cfg", capabilities: ["storage", "settings"] });
  await settle();
  const api = win.webmc.mods.get("cfg").api;
  const flag = api.settings.define({ key: "sprint", type: "boolean", default: true });
  eq(flag.get(), true, "default");
  flag.set(false);
  eq(api.settings.get("sprint"), false, "through the registry");
  eq(api.storage.get("setting.sprint"), false, "persisted");
});

/* ------------------------------------------------------------------ modules ------------------ */
await test("modules toggle and tick", async () => {
  const win = loadRuntime();
  win.__installClient();
  win.webmc.defineMod({ id: "mod", capabilities: ["modules", "hud"] });
  await settle();
  const api = win.webmc.mods.get("mod").api;
  let ticks = 0;
  const module = api.modules.add({ name: "Sprint", category: "Movement", onTick: () => ticks++ });
  module.setEnabled(true);
  win.webmc.__internal.frameBus.emit("tick", { tick: 1, dt: 0.05 });
  eq(ticks, 1, "ticked once");
  module.setEnabled(false);
  win.webmc.__internal.frameBus.emit("tick", { tick: 2, dt: 0.05 });
  eq(ticks, 1, "disabled modules do not tick");
  eq(win.webmc.modules.list().length, 1, "listed");
  win.webmc.mods.unload("mod");
  eq(win.webmc.modules.list().length, 0, "modules go with the mod");
});

/* ------------------------------------------------------------------ error isolation ---------- */
await test("a throwing listener does not break the bus", async () => {
  const win = loadRuntime();
  win.__installClient();
  win.webmc.defineMod({ id: "bad", capabilities: ["hud"] });
  await settle();
  const mod = win.webmc.mods.get("bad");
  let good = 0;
  mod.on("boom", () => { throw new Error("nope"); });
  mod.on("boom", () => { good++; });
  mod.emit("boom");
  eq(good, 1, "the second listener still ran");
  ok(win.webmc.__internal.reports.length >= 1, "the error was reported");
});

await test("a repeatedly failing mod is suspended, not the game", async () => {
  const win = loadRuntime();
  win.__installClient();
  win.webmc.defineMod({ id: "verybad", capabilities: ["hud"] });
  await settle();
  const mod = win.webmc.mods.get("verybad");
  mod.on("boom", () => { throw new Error("nope"); });
  for (let i = 0; i < 30; i++) { mod.emit("boom"); }
  ok(mod.suspended, "suspended");
  ok(!mod.enabled, "disabled");
});

/* ------------------------------------------------------------------ mod loading -------------- */
await test("a source is a mod when it calls defineMod", async () => {
  const win = loadRuntime();
  win.__installClient();
  const result = win.webmc.mods.run("inline", "webmc.defineMod({ id: 'inline', capabilities: ['hud'] });");
  ok(result.ok, "loaded");
  eq(result.mods, ["inline"], "named");
});

await test("a source that defines nothing is refused with a reason", async () => {
  const win = loadRuntime();
  win.__installClient();
  const result = win.webmc.mods.run("empty", "var x = 1;");
  ok(!result.ok, "refused");
  ok(/never called webmc.defineMod/.test(result.error), "reason mentions defineMod");
});

await test("a source that throws is refused, and the runtime stays up", async () => {
  const win = loadRuntime();
  win.__installClient();
  const result = win.webmc.mods.run("broken", "throw new Error('bad mod');");
  ok(!result.ok, "refused");
  ok(win.webmc.selftest().ok, "runtime still answers");
});

await test("mods preloaded with the page load at boot", async () => {
  const win = loadRuntime({ mods: [{ id: "pre", source: "webmc.defineMod({ id: 'pre', capabilities: ['hud'] });" }] });
  win.__installClient();
  win.document.dispatch("DOMContentLoaded");
  eq(win.webmc.mods.list().map((m) => m.id), ["pre"], "preloaded mod is in the list");
});

/* ------------------------------------------------------------------ network ------------------ */
await test("network send is observable and blockable", async () => {
  const win = loadRuntime();
  win.__installClient();
  // Consent for risky capabilities is remembered per mod; grant it up front, the way the prompt would.
  win.localStorage.setItem("webmc.consent.v1.net", JSON.stringify({ hash: "network.read+network.write", allowed: true }));
  win.webmc.defineMod({ id: "net", capabilities: ["network.read", "network.write"] });
  await settle();
  await new Promise((resolve) => setTimeout(resolve, 5));
  const api = win.webmc.mods.get("net").api;
  const seen = [];
  api.network.onSend((packet) => seen.push(packet.channel));
  api.network.raw().send(7, new Uint8Array([1, 2, 3]));
  eq(seen, [7], "send observed");
  ok(win.webmc.__internal.net.sent >= 1, "counted");
  api.network.interceptSend(() => false);
  api.network.raw().send(8, new Uint8Array([4]));
  eq(win.webmc.__internal.net.bridge.sent.length, 1, "the blocked packet never reached the bridge");
});

/* ------------------------------------------------------------------ internals ---------------- */
await test("a patched client's internals are found, and a plan is refused with a reason without them", () => {
  const win = loadRuntime({ trustAll: true });
  win.__installClient();
  const summary = win.webmc.__internal.internals.summary();
  ok(!summary.available, "unpatched client: internals unavailable");
  ok(/patch it/.test(summary.reason), "the reason says how to get them");
  const plan = { targets: ["net.minecraft.client.Minecraft"], injections: [{ kind: "inject", method: ["tick"], at: ["HEAD"], run: () => {} }] };
  win.webmc.patches.add(plan);
  const applied = win.webmc.__internal.patches.summary();
  eq(applied.plans, 1, "the plan is recorded");
  eq(applied.applied, 0, "but nothing is applied");
});

await test("a patched client resolves an anchored method and applies an @Inject around it", async () => {
  const win = loadRuntime({ trustAll: true });
  win.__installClient();
  // A fake internals object shaped like the real one: a class constructor carrying teavm_meta, and
  // one function behind it.
  const meta = Symbol("teavm_meta");
  const calls = [];
  const ctor = function MinecraftClass() {};
  ctor[meta] = { name: "net.minecraft.client.Minecraft" };
  win.__gaiusTeaVM = {
    Bsp: ctor,
    IkAb: function (self) { calls.push(["tick", self && self.name]); return "original"; }
  };
  // The symbol map the build ships: TeaVM named the method because the class had a lambda in it.
  win.webmc.__internal.internals.state.symbols = { Minecraft: { tick: { fn: "IkAb", index: 7, arity: 0 } } };
  win.webmc.__internal.internals.state.symbolsLoaded = true;
  const available = win.webmc.__internal.internals.available();
  ok(available, "internals detect the patched build");

  let injected = 0;
  win.webmc.patches.add({
    targets: ["net.minecraft.client.Minecraft"],
    injections: [{
      kind: "inject", method: ["tick"], at: ["HEAD"], cancellable: true,
      run: (target, args, info) => { injected++; info.cancelled = true; info.returnValue = "cancelled"; }
    }]
  });
  const summary = win.webmc.__internal.patches.summary();
  eq(summary.applied, 1, "the injection applied");
  // The wrapper samples first: it passes through until it has measured the call rate, so a hot
  // method is never wrapped. Twenty-five calls is past the sampling window.
  let result = null;
  for (let i = 0; i < 25; i++) { result = win.__gaiusTeaVM.IkAb({ name: "the client" }); }
  ok(injected > 0, "the handler ran once the call rate was known to be low");
  eq(result, "cancelled", "cancel() short-circuited the original method");
});

await test("a plan whose method has no anchor is refused, not guessed", () => {
  const win = loadRuntime({ trustAll: true });
  win.__installClient();
  const meta = Symbol("teavm_meta");
  const ctor = function GuiClass() {};
  ctor[meta] = { name: "net.minecraft.client.gui.Gui" };
  win.__gaiusTeaVM = { X: ctor };
  win.webmc.__internal.internals.state.symbols = { Gui: { render: { fn: "Missing", index: 1, arity: 0 } } };
  win.webmc.__internal.internals.state.symbolsLoaded = true;
  win.webmc.patches.add({
    targets: ["net.minecraft.client.gui.Gui"],
    injections: [{ kind: "inject", method: ["render"], at: ["HEAD"], run: () => {} }]
  });
  const patches = win.webmc.__internal.patches.summary();
  eq(patches.applied, 0, "nothing applied");
  const summary = win.webmc.__internal.internals.summary();
  ok(summary.refusedReasons.some((why) => /anchor/.test(why)), "the reason names the missing anchor");
});

/* ------------------------------------------------------------------ report ------------------- */
console.log("\n" + passed + " passed, " + failed + " failed");
if (failed) {
  for (const failure of failures) { console.log("\n" + failure.name + "\n" + (failure.error && failure.error.stack || failure.error)); }
  process.exit(1);
}
