# The WebMC JS mod API

Everything a mod can touch. The API is built per mod by `webmc.defineMod()`, and a mod only gets the
namespaces its manifest asked for.

```js
const mod = webmc.defineMod({ id, name, version, authors, description, capabilities, init? });
```

`init(api)` in the description is the same as `mod.on("init", fn)`. A mod file may define several
mods or return a description object instead of calling `defineMod`; both work.

## Capabilities

| capability | what it adds to the API |
| --- | --- |
| `hud` | `api.hud` — canvas overlay, text/rect/bar/line/image/crosshair, messages |
| `input` | `api.input` — key events, `isDown`, `bind` |
| `input.inject` | `api.input.press/type/click/injectKey` |
| `input.block` | `api.input.intercept` — stop an event reaching the game |
| `chat.write` | `api.chat.send`, `onSent` |
| `chat.read` | `api.chat.onMessage`, `history` |
| `commands` | `api.command`, `api.commands` |
| `storage` | `api.storage` — per-mod key/value in this browser |
| `settings` | `api.settings` — named, typed, persisted values |
| `modules` | `api.modules` — Meteor-style toggleable modules |
| `player.read` | `api.player.snapshot()` |
| `world.read` | `api.world.snapshot()`, `api.world.screen()` |
| `camera.read` | `api.camera.snapshot()` |
| `network.read` | `api.network.onSend/onDecode/channels/stats` |
| `network.write` | `api.network.send/interceptSend/raw` |
| `internals` | `api.internals` — only on a client that exposes its class table |

Default (no `capabilities` given): `hud, input, commands, storage, settings, modules,
player.read, world.read, camera.read, chat.write`.

Risky capabilities (`network.write`, `input.inject`, `input.block`, `internals`, `files`) prompt the
player once per mod; a "no" loads the mod without them and says so in the mods panel.

## Lifecycle and events

```js
mod.on("init", (api) => {});          // after the API is built
mod.on("tick", ({ tick, dt }) => {}); // 20/s, derived from the frame clock
mod.on("frame", ({ count, dt, fps }) => {});
mod.on("state", (snapshot) => {});    // every client state snapshot
mod.on("world:join" | "world:leave", (snapshot) => {});
mod.on("screen:open" | "screen:close", (screenName) => {});
mod.on("key", (event) => {});         // { key, keyName, action, shift, ctrl, alt, repeat }
mod.on("char", (event) => {});        // { codePoint, char }
mod.on("chat", ({ text, source }) => {});
mod.on("unload", () => {});
```

Every handler runs guarded: a mod that throws is reported by name and, after 25 failures, suspended.

## HUD

Coordinates are logical pixels — the same scale the game itself uses (`hud.width` × `hud.height`).

```js
const label = api.hud.text({ id: "fps", x: 4, y: 4, text: "…", color: "#a7f3d0", size: 9, z: 0 });
label.update({ text: "60 fps" });
label.visible = false;
label.remove();

api.hud.rect({ x, y, width, height, background, border, radius, alpha });
api.hud.bar({ x, y, width, height, value, max, color, background, border });
api.hud.line({ x, y, width, height, color, thickness });          // or image: [[x,y],…] for a polyline
api.hud.image({ x, y, width, height, image: "data:image/png;base64,…" });
api.hud.crosshair({ x, y, size, color });
api.hud.message("something happened", { color, ttl });
api.hud.clear();
```

`WebMC.hud` (the global object) also exposes `width`, `height`, `scale` and `prompt()`.

## Input

```js
api.input.onKey((event) => {});
api.input.isDown("right.shift");
api.input.downKeys();
api.input.keyCode("f6");                    // name -> GLFW code (numbers pass through)
api.input.keyName(295);
const bind = api.input.bind({ id: "toggle", key: "h", label: "Toggle", shift: false, handler: () => {} });
bind.setKey("g"); bind.setEnabled(false); bind.remove();
```

Key names: `a`–`z`, `0`–`9`, `f1`–`f12`, `space`, `enter`, `tab`, `escape`, `backspace`, `delete`,
arrows, `left.shift`/`right.shift`, `left.ctrl`/`right.ctrl`, `left.alt`/`right.alt`, `mouse.0`…

With `input.inject`:

```js
api.input.press("t");
api.input.type("hello");
api.input.click(0);
api.input.injectKey("enter", { action: 1, shift: true });
```

With `input.block`, `api.input.intercept((event) => event.key === 82 ? false : undefined)` drops
a key before the game sees it.

## Chat

```js
await api.chat.send("/gamemode creative");   // drives the game's own chat: open, type, enter
api.chat.onMessage(({ text, source }) => {});
api.chat.history();
```

Reading chat is a tap on decoded clientbound packets: chat is JSON inside them, and the tap looks
for it. It reports what it finds and nothing it does not.

## Commands

F7 opens the runtime's own prompt (the `.` key opens it too). A command handled here never reaches
the server.

```js
api.command({
  name: "home", aliases: ["h"], usage: "/home [name]",
  handler: (context) => {
    context.reply("no homes yet");        // message in the HUD
    context.error("nope");
    context.args;                          // parsed arguments
    context.player;                        // the player snapshot at call time
  }
});
webmc.commands.run("home base");           // programmatically
webmc.commands.list();
```

## Player / world / camera

```js
const p = api.player.snapshot();
// { present, inWorld, className, position: {x,y,z}, yaw, pitch, gameMode, onGround,
//   collisionFree, selectedItem: {slot,item,count}, screen, screenTitle, pause, running, health: null }

const w = api.world.snapshot();
// { present, inWorld, loadedChunks, hit, overlay, selection, dimension, time, noRender,
//   renderDistance, simulationDistance }

api.world.screen();   // { present, name, title, size, widgets }
api.camera.snapshot();
```

Fields the client does not publish are `null` — health is one of them; it is never invented.

## Network

```js
api.network.onSend((packet) => {});        // { channel, bytes, size, direction: "out" }
api.network.onDecode(({ name, args }) => {}); // the bridge's decode telemetry
api.network.channels();
api.network.stats();
api.network.send(channel, new Uint8Array([…]));   // network.write
api.network.interceptSend((packet) => false);     // block; return {bytes} to rewrite
api.network.raw();                                 // the bridge itself
```

The bridge only exists once a server connection does; on a title screen the capability is reported
missing with that reason.

## Storage and settings

```js
await api.storage.set("seen", true);
api.storage.get("seen", false);
api.storage.keys(); api.storage.remove("seen"); api.storage.clear();

const flag = api.settings.define({ key: "enabled", type: "boolean", default: true, label: "Enabled" });
flag.get(); flag.set(false); flag.onChange((value) => {});
```

Storage is per mod (`webmc.mod.<id>.<key>` in `localStorage`) and survives reloads.

## Modules (the Meteor shape)

```js
const module = api.modules.add({
  name: "Sprint", category: "Movement", description: "…",
  key: "v",                     // toggle key
  onEnable: (self) => {}, onDisable: (self) => {}, onTick: (payload, self) => {}
});
module.setEnabled(true); module.toggle(); module.settings; module.remove();
```

F8 opens the in-game module list; `api.modules.list()` is the same list.

## Patches (converted mixins)

A converted mod carries a plan for every mixin it had. The runtime records the plans and shows them:

```js
webmc.patches.add({ modId, mixin, targets, injections, accessors });
webmc.patches.list(); webmc.patches.summary();
```

Until the client-internals layer is installed, a plan is a record — `state: "planned"` — and the
runtime says so rather than pretending to have changed the game.

## Diagnostics

```js
webmc.selftest();          // capabilities, hooks, frame counts, mods, patches, client state
webmc.mods.list();         // every loaded mod with capabilities, errors, suspension
webmc.mods.unload("id");   // listeners, HUD, keybinds, commands and modules all go
webmc.capabilities;        // what this client really offers
webmc.missing;             // what it does not, and why
```
