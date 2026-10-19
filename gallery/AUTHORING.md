# Write a mod for WebMC

A mod is JavaScript that calls `webmc.defineMod()`. It runs **in the player's tab**, inside the game
client, at play time — no rebuild, no installer, no packing tool required for a first version.

## The smallest mod

```js
const mod = webmc.defineMod({
  id: "you.example",
  name: "Example",
  version: "1.0.0",
  authors: ["you"],
  capabilities: ["hud", "input", "commands", "player.read"]
});

mod.on("init", (api) => {
  const label = api.hud.text({ id: "hello", x: 4, y: 4, text: "hello" });
  api.events.onTick(() => {
    const p = api.player.snapshot();
    label.update({ text: p.position ? `xyz ${p.position.x.toFixed(1)} ${p.position.y.toFixed(1)}` : "no world yet" });
  });
  api.input.bind({ key: "j", label: "Say hi", handler: () => api.hud.message("hi") });
  api.command({ name: "hi", handler: (ctx) => ctx.reply("hi from " + mod.name) });
});
```

Test it without touching this repository: open the client, open the **Mods** panel (F6) and drop the
file in. It loads immediately. The panel lists it with the capabilities it asked for; a mod that
throws is suspended by name instead of taking the game down.

## Sharing it

- **A single file** is enough to start: players drop the `.js` into the Mods panel.
- **A `.jsmod` package** is the shareable form: a zip with `webmc.mod.json` + `index.js`
  (+ anything else the mod needs). Players can drop it into the panel or add it to `mods/` and list
  it in `mods/index.json` so it appears here.
- If it is in this repository's `mods/index.json`, it shows up in the gallery and can be linked as
  `?load=<id>`.

## What a mod can do

| capability | what it adds |
| --- | --- |
| `hud` | text, rects, bars, lines, images, an on-screen message line |
| `input` | key events, keybinds; `input.inject` presses keys for you, `input.block` stops one |
| `chat.write` / `chat.read` | send through the game's own chat, read chat |
| `commands` | `/name` commands handled by the runtime (not sent to the server) |
| `storage`, `settings` | per-mod storage, typed settings with change events |
| `modules` | Meteor-style toggleable modules (F8 opens the list) |
| `player.read`, `world.read`, `camera.read` | the client's own state snapshots |
| `network.read` / `network.write` | packet traffic through the bridge (with a server connection) |
| `internals` | the compiled client's classes, named methods, fields, and `webmc.internals.wrap()` |

The full reference is `docs/API.md`. `docs/INTERNALS.md` explains the `internals` capability: which
methods are named (17,494 of them), how fields and accessors work, and which mixin kinds can be
applied.

## Rules the platform keeps

- A mod only gets the namespaces its manifest asked for; risky ones prompt the player once.
- A handler that throws is reported by name and, after 25 failures, switched off.
- Patch wrappers sample call rates and are rolled back if the client stops publishing state.
- Nothing runs on a server on the player's behalf. The game and the mods are in the player's tab.
