# How it works

Three files matter: `index.html` (the loader), `runtime/dist/webmc.js` (the modding API, injected
into the client), and whatever is inside `mods/`.

## 1. The loader verifies the client, then opens it in a frame

`index.html` reads `client/1.21.11/manifest.json`, fetches the six chunks **in parallel**, checks
each chunk's `sha256` before it is used, assembles them, and checks the `sha256` of the whole
client. The same integrity rule as the published page: bytes are never trusted, they are verified.

## 2. The bootstrap is spliced into the client's head

The client is a 108 MB HTML document. Turning it into a string to run a replace on is the one slow
thing in the page, so the splice happens on **bytes**: `<head>` is replaced, in place, with

```html
<head><script>globalThis.__webmcClient = { base, version }; globalThis.__webmcMods = [ …sources… ];</script>
<script src="…/runtime/dist/webmc.js"></script>
```

Two consequences, both wanted:

* the runtime is a **classic script in the head**, so the parser blocks until it has run — every
  hook is installed before the client's own first script;
* the mod sources travel **inside** the document, so nothing has to be fetched from inside a blob
  URL, and the mods that were in `mods/index.json` are already in memory when the game starts.

## 3. The runtime hooks the surface the client already publishes

The client is not patched. The 1.21.11 build (the "Gaius" lineage) keeps a set of `__gaius*` globals
on its window; the runtime watches for them with accessors and wraps them when they appear. What
each one gives, and what it really is (measured in a browser, not guessed):

| global | how it is used | what a mod gets |
| --- | --- | --- |
| `__gaiusGlfwEvents` | its `push()` is wrapped; the array is the input queue the client's own DOM listeners feed and Java drains | every key/mouse/wheel event, **before the game sees it**: observe, rewrite, drop |
| `__gaiusMinecraftState` | property setter | the client's own snapshot: screen, player position/rotation/game mode, loaded chunks, hit result, pause |
| `__gaiusWebGL` | the raw WebGL2 context; `clear`/`draw*` wrapped for counting | frame counting and GL telemetry |
| `__gaiusNettyBridge` | `send()` wrapped; decode telemetry wrapped | outbound packets (see, rewrite, block) and decoded-packet events; appears with a server connection |
| `__gaiusGlfwKeys` | read | the client's own key-state map, as a second opinion on `input.isDown` |

The input queue's tuple shape is the client's own, and the runtime speaks it:

```
1  key     [1, glfwKey, domKeyCode, action(1 down / 2 repeat / 0 up), mods, 0, 0]
2  char    [2, codePoint, mods, 0, 0, 0, 0]
3  mouse   [3, button, 1|0, mods, 0, x, y]
4  move    [4, 0, 0, 0, 0, x, y]
5  scroll  [5, 0, 0, 0, 0, dx, dy]
7  resize  [7, cssW, cssH, fbW, fbH, 0, 0]
```

Injecting a key is therefore not a synthetic DOM event that may or may not be handled — it is the
same tuple the client's own listener would have pushed. `webmc.input.type("hello")` pushes the char
tuples; `webmc.chat.send("/gamemode creative")` opens the game's chat with the `/` key, types the
rest, and presses Enter, so the server sees a real chat message.

## 4. The clock

The runtime runs its own `requestAnimationFrame` loop. `frame` is emitted once per rAF; `tick` is a
fixed 20/s accumulator (at most four catch-up ticks per frame), which is the client's own tick rate.
The HUD draws on a transparent 2D canvas above the game's canvas, in logical pixels — the same
GUI-scale computation Minecraft uses (1–4× so that 320×240 logical pixels fit).

## 5. What the client does *not* publish, and the runtime says so

`webmc.capabilities` is what is really installed; `webmc.missing` is the rest with a reason. On the
title screen of the published build the runtime reports:

```
capabilities: hud.draw, input.observe, input.block, graphics.read, state.read,
              player.read, world.read, camera.read
missing:      network.read  — the client never published `netty` here
```

No entity lists, no inventory, no chat text from the client's own models: those are exactly the
things the internals layer will add. Until then `player.snapshot().health` is `null`, not a number.

## 6. Mods, capabilities, failures

A mod is a source that calls `webmc.defineMod(...)`. The runtime builds a per-mod API object that
only carries the namespaces the manifest asked for; risky capabilities are asked about once per mod
and remembered in `localStorage`. Every handler the mod registers runs inside a guard: a throw is
reported with the mod's id, and after 25 throws the mod is suspended — the game keeps running.
Unloading is real: listeners, HUD elements, keybinds, commands, modules and patch plans all go.

## 7. Where the converted Fabric mods fit

The converter (`converter/`) reads a Fabric jar and writes a `.jsmod` whose `index.js` defines a mod
through this API: entrypoints, Fabric API event registrations (with the real lambda targets),
keybinds, commands, Meteor-style modules, and a named mixin patch plan. Such a mod is an ordinary
mod to this runtime — `mods/converted/gammautils.js` is one, and the browser check proves it loads
and its events are attached.

The plan a converted mod brings is registered through `webmc.patches.add(...)`. The runtime records
it, counts it, shows it in the panel, and marks it `planned` — never `applied` — until a client
build exposes its internals. `webmc.selftest().patches` is therefore an honest progress bar for the
next milestone.
