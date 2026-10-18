# Progress

A running record: what works, what was proven, what is next. Every claim has a command next to it.

## 2026-10-18 — the folder, the runtime, the client

**The folder.** `webmc-jsmod/` is new, inside `webmc-port`'s parent. Nothing outside it was
modified. The 1.21.11 client chunks were copied out of `webmc-port/site/clients/1.21.11/` and are
byte-identical to the published build — `node tools/verify-client.mjs` checks every chunk hash and
the whole-client sha256 (`63cba134…`), and prints where the bytes came from.

**The client runs here.** `index.html` fetches the six chunks in parallel, verifies each, verifies
the whole, then splices a bootstrap into the client's `<head>`: the mod index and the mod runtime,
as a parser-blocking classic script. The runtime is installed **before the client's first line of
code**; nothing about the client itself is patched.

**Proven in a real browser** (`node tools/browser-check.mjs`, headless Chrome, the real client,
SwiftShader WebGL):

| check | result |
| --- | --- |
| runtime installed inside the client before its first script | ok — `Minecraft 1.21.11` |
| the client publishes the window surface the runtime hooks | ok — input, state, gl |
| a key dispatched into the client was seen by the input hook | ok |
| the frame loop is running | ok — ~7,800 frames in 150 s |
| mods from `mods/index.json` loaded | ok — 5 packages |
| a **converted Fabric jar** is loaded at play time | ok — `hello-fabric` enabled |
| a **converted Modrinth mod** (Gamma Utils) is loaded with its Fabric events | ok |
| every loaded mod ran with zero errors, and the converted mods' mixin plans were recorded | ok — 6 plans, 7 injections, `applied: 0` (honest: no internals yet) |
| the client reached a running state | ok — 1,886 state snapshots, `TitleScreen` |

`checks/boot.png` is a screenshot from that run; `checks/report.json` is the machine-readable
version of the table.

**The runtime** (`runtime/`, 8 sources → `dist/webmc.js`, ~105 KB, no dependencies):

| piece | what it gives mods |
| --- | --- |
| `10-hooks.js` | the platform seam: `__gaiusGlfwEvents` (input queue, before Java), `__gaiusMinecraftState`, `__gaiusWebGL`, `__gaiusNettyBridge` — observe, rewrite, drop; capability discovery with honest reasons |
| `20-hud.js` | a transparent canvas above the game's: text, rect, bar, line, image, crosshair, messages, and a real text prompt |
| `25-input.js` | keybinds with modifiers, key/mouse/char injection in the client's own tuple format, chat send through the game's own chat screen, command prompt (F7) |
| `30-api.js` | per-mod API factory: capabilities decide the namespaces; storage, settings, modules (Meteor shape), snapshots of player/world/camera/screen, network taps |
| `35-patches.js` | the door the converted mods' mixin plans go through — recorded, counted, never falsely "applied" |
| `40-mods.js` | `defineMod`, lifecycle, consent for risky capabilities, error isolation and suspension, real unloading |
| `50-boot.js` | preloading, the in-game module list (F8), `webmc.selftest()` |

**Tests:** `node tests/run.mjs` — 24 checks, no browser, no network. `node converter/test/run.mjs` —
10 checks. In-page: only the browser check above.

## 2026-10-18 — the converter

`converter/` turns a Fabric jar into a `.jsmod` that loads at play time. Node only, no dependencies.

* **Reads**: `fabric.mod.json`; every class file (constant pools, annotations including nested
  `@At`, exception tables, `BootstrapMethods`); the bytecode stream (so a lambda's real target is
  found, not guessed); mixin configs and all the common mixin annotations; nested jars under
  `META-INF/jars/`.
* **Writes**: entrypoints, Fabric API events as `mod.on(...)`, keybinds as `input.bind`, command
  literals, Meteor-style modules, and a named mixin patch plan — plus `report.json` / `REPORT.md`
  that name every refusal.
* **Transpiler**: Java method = operand stack + program counter in JavaScript. Locals, arithmetic,
  branches, fields, arrays, calls, `invokedynamic` lambdas, string concatenation, and **exception
  handlers** (the catch table becomes a `try/catch` that resumes at the handler). Call routing:
  the mod's own methods (with superclass walking) → JDK-on-JS natives (String, StringBuilder, Math,
  collections, iterators, optionals, functional interfaces) → a small mapped game surface → client
  internals → refused with the exact call named.
* **Mappings**: joins Mojang's `client.txt` with Fabric's intermediary `mappings.tiny`, on member
  *name and descriptor* (obfuscators reuse short names across overloads), with a global fallback for
  inherited methods. `class_310.method_1574` → `net/minecraft/client/Minecraft.tick`. Fetched per
  machine, gitignored (`tools/fetch-mappings.mjs`).

Real jars converted on this machine (all 46 in `converter/jars/` convert without error):

| mod | classes | translated | Fabric events | mixin injections | verdict |
| --- | --- | --- | --- | --- | --- |
| hello-fabric (this project's example) | 2 | 2/2 | — | — | **runs** |
| Gamma Utils 2.5.10 (Modrinth) | 38 | 239/260 | 11/11 handlers | 7 | runs-partial |
| AppleSkin 3.0.8 (Modrinth) | 98 | 426/626 | — | 10 | runs-partial |
| Shulker Box Tooltip 5.2.16 (Modrinth) | 208 | 825/1241 | 2/2 | 11 | runs-partial |
| Zoomify 2.15.2 (Modrinth) | 234 | 1272/1555 | 1/1 | 2 | runs-partial |
| Mod Menu 17.0.1 | 428 | 1486/2510 | 2/2 | 103 | runs-partial |
| BetterF3 17.0.0 | 824 | 4086/6191 | — | 13 | runs-partial |
| Fabric API 0.141.6 | 1830 | 4178/6850 | 2/2 | 457 | runs-partial |
| Meteor Client 1.21.11-86 | 2590 | 12656/17551 | — | 327 | runs-partial |

All 54 jars convert without an error; **29,464 methods are transpiled**, and the 14,246 left out are
each named with the call that stopped them.

Percentages are in `dist-converted/*/report.json`; the "left out" number is not a guess — a method
is only emitted when every call in it is placeable, and the report names the calls that are not.

## What "runs-partial" means, exactly

A converted mod **loads and runs**: entrypoint, event handlers, HUD, keybinds, commands, modules.
What it cannot do is change the game's own code, because a mixin needs the compiled client's
internals and the published build does not expose them. Those mixins are a **named plan**
(`Minecraft.tick`, `LevelRenderer.renderLevel`, `BlockBehaviour.getShadeBrightness`, …), recorded via
`webmc.patches.add(...)`; `webmc.selftest().patches` reports `applied: 0` and why. Nothing pretends
otherwise anywhere in the stack.

## 2026-10-18 — Meteor Client, at play time

The real `~/Downloads/meteor-client-1.21.11-86.jar` was converted and played with, in the real
browser, on the deployed site:

```sh
node converter/convert.mjs ~/Downloads/meteor-client-1.21.11-86.jar --out dist-converted
#   classes   2590, methods 17551
#   reachable   3134 of 17551 methods, from 24 entry points (pruned 1628 as unreachable)
#   translated 3134 methods, 1628 left out
#   modules 171, mixins 236 classes / 327 injections, verdict runs-partial
```

| check (live site, headless Chrome) | result |
| --- | --- |
| the converted Meteor Client hot-loaded at play time | ok — 11.8 MB, fetched on demand, loaded in ~365 ms of JS |
| Meteor's modules registered | ok — 171 (173 with the examples) |
| Meteor's mixin plan registered | ok — 191 plans / 334 injections, `applied: 0` |
| no mod suspended by its own errors | ok |
| the game kept running | ok — frames and state snapshots continue |

The new `tools/live-check.mjs` is how the deployed site is checked without a server to POST to: the
client runs in a same-origin blob frame, so the page's own `webmc.selftest()` is read over CDP.

Two things made Meteor practical: **reachability pruning** (the package went 33 MB → 11.8 MB by
emitting only what an entry point can reach) and **lazy loading** (an optional mod is a button in
the Mods panel, not 12 MB in every page load).

## The repository and the site

* <https://github.com/AmphibianDev/webmc-jsmod>
* <https://amphibiandev.github.io/webmc-jsmod/>

Pages is built by `.github/workflows/pages.yml`: the workflow downloads the client pack from the
repository's `client-1.21.11` release, verifies every chunk hash and the whole-client sha256, runs
the runtime's tests, and publishes only if they pass. The Minecraft client bytes are **not** in git
history; the manifest with the hashes is.

## 2026-10-18 (later) — the internals layer: mixins actually apply

The remaining gap was named in the last entry: a converted mod's mixins had nothing to attach to.
That is now built and measured.

* **`tools/patch-client.mjs`** rewrites one stream of the published client so its compiled module
  assigns `globalThis.__gaiusTeaVM` (every class, function and static) — two assignments, nothing
  else. The patched copy has its own manifest and hashes; `tools/verify-client.mjs` checks it, and
  the manifest records the original whole-client sha256.
* **Method naming** is the hard part, and it has three passes: TeaVM's lambda class names give 762
  exact anchors (`Minecraft.buildInitialScreens`, `KeyMapping.registerMapping`); string-constant
  alignment adds 1,688 more (`Minecraft.run`, `Minecraft.tick`, `Minecraft.close`,
  `SoundEngine.play`, `Options.load`); a targeted pass and call-graph propagation add the rest.
  **2,450 methods in 1,633 classes**, each entry carrying *why* it is believed.
* **Application**: `@Inject` at HEAD/RETURN wraps the compiled function; `CallbackInfo` is a plain
  object the transpiled handler can call; `@Redirect`/`@Overwrite` are refused by name because they
  need call-site rewriting.
* **Safety**: patches apply once the client is running, wrappers sample call rates (a method hotter
  than 40/s stays passive), 48 wrapped methods and 200 handler runs/second per method are the
  ceilings, and one method is wrapped once.

Live client, measured: **Meteor 12 injections across 9 plans applied** (19 have a name anchor of
327), Gamma Utils 1 of 7, and the client reaches the title screen with 2,128 state updates and no
suspension. The same result on the deployed site (`tools/live-check.mjs --with-meteor`): 11/11
checks, 9 applied / 182 planned, 2,450 methods named, 9,855 classes exposed. `webmc.selftest().internals` reports classes, named methods, resolutions, misses and the
refusal reasons; the browser check asserts the apply count so a regression is a red check, not a
silent one.

## Next

1. **The internals layer**: a derived client build that exposes its TeaVM class table
   (`__gaiusTeaVM`) and a wasm/JS method-wrapper, so `webmc.patches` can apply plans. The converter
   already emits everything needed (`internals` capability, patch plans, the report's unresolved
   calls). This is what turns Meteor's 327 mixins from a list into behaviour.
2. **More of the mapped game surface** in the converter (entities, inventory, chat text), so more
   handlers resolve without internals.
3. **A no-internals mode check in CI**: `--no-internals` conversions already run; a test that every
   jar still yields a loadable package with that flag keeps the honest path honest.
