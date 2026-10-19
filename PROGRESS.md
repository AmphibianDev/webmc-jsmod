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

## 2026-10-19 — coverage, and a converter that carries more of a mod

The internals layer worked but covered 9 of Meteor's 191 plans. Three things fixed that, and one
kept the client alive while it happened.

**Naming (2,450 → 17,727 methods).** The two decisive bugs were both in the Java side's *names*:
`client.txt` lists methods in class-file order while obfuscated names repeat across overloads (so
names must be paired by position — this alone took Meteor from 56 to 153 named injections), and the
first pass skipped every method without a string literal, which is most of the methods mods patch.
On top of that: virtual-slot names learned from the class tables, caller propagation, and per-class
alignment using field ownership read from constructors.

**Applying (9 → ~100 injections, ~40 plans).** The map names 220 of Meteor's 327 injections; the
runtime applies about 100 of them and the client stays healthy. The gap is policy, not capability.

**The last root cause, and it was the important one.** `webmc.patches.add()` applied each plan the
moment it arrived — so a mod hot-loaded *after* boot (Meteor, from the Mods panel) bypassed the cap,
the waves and every liveness check. That is why the deployed site froze while the local one looked
fine: locally Meteor was hot-loaded into a fresh page, on the site the plan burst arrived while the
game was already running. `add()` now only *records*; application is the capped, wave-by-wave,
liveness-checked path, scheduled once per burst.

**Safety, learned by breaking the client several times.** A wave of patches that froze the client
was rolled back; a handler that cancelled a tick left the client frozen with nothing to undo; 147
handlers failing on every invocation flooded the console and stalled the tab. The rules now:
`cancel()` is ignored (a skipped tick cannot be undone), a handler that fails 25 times is switched
off, error reporting is throttled, patches go in four at a time with a liveness check after each
wave, and a session-long watchdog rolls back the most recent wave if the client stops publishing
state. `?internals=off` switches it all off.

**The converter carries more of each mod.** Switch statements, deferred bootstraps and deferred JDK
calls (a method is no longer refused because one exotic call inside it has no translation), many
more JDK natives, and a narrower pruning rule. Meteor: 3,134 → **4,468 methods translated**, 7,961
unreachable methods pruned, 1,662 call sites deferred to the internals layer instead of refusing the
method, and the verdict now says which.

## 2026-10-19 (later) — the safety policy, and the number it settles on

Every valve now has a measured reason to exist, and the shipped configuration is the conservative
one:

| configuration (same page, same mod) | state snapshots in ~4 min | plans applied |
| --- | --- | --- |
| internals off (control) | ~2,000 | 0 |
| **shipped: cap 32 plans, waves of 6, bisect on failure** (local) | **3,302** | **16** |
| the same on the deployed site | **3,680** | 7 |
| uncapped (before `add()` was fixed) | frozen | 66–147 |

The deployed site is the one that matters and it is now healthy: `node tools/live-check.mjs --with-meteor
--full` reports 11/11 checks, 3,680 state snapshots in under five minutes, no suspended mods, and the
symbol map naming 17,494 methods across 6,292 classes. Fewer plans apply there than locally (7 vs 16)
because the liveness checks are stricter on a busy page — which is the policy working as intended.

The client now publishes state at the control rate with patches applied. `?patches=200` or
`webmc.patches.setCap(200)` raises the cap; `?internals=off` or `webmc.patches.setEnabled(false)`
turns the layer off. The panel lists every plan with its state — applied, planned, rolled-back — and
the reason.

## 2026-10-19 (later still) — fields, accessors, and the Modrinth answer

Two things landed that change the picture.

**Fields and accessors.** The per-class pass now emits a **field map** (Java field name -> the
compiled object's property: 7,588 fields in 2,948 classes), `internals.getField/putField` use it, and
`@Accessor`/`@Invoker` plans install a table entry rather than being refused. Accessors wrap nothing,
so they apply outside the wrapper budget. Meteor: **16 -> 69 of 191 plans** applied, 83 accessors
live, client publishing state at the control rate.

**A real Modrinth corpus.** 65 jars fetched through a proxy and converted in one pass (~2 s); all 65
convert. The mixin counts are the interesting part: the famous "heavy" mods are not all heavy, and
the heavy ones are mostly renderer/perf mods:

| mod | classes | methods translated | mixin injections | Fabric events | keybinds |
| --- | --- | --- | --- | --- | --- |
| JEI | 4114 | 9032 | 17 | 11 | 0 |
| Litematica | 507 | 3105 | 45 | 0 | 0 |
| Iris | 1654 | 2208 | 224 | 0 | 1 |
| Flashback | 2744 | 1931 | 165 | 5 | 4 |
| Xaero's Minimap | 1048 | 1425 | 52 | 1 | 0 |
| Mod Menu | 428 | 1148 | 103 | 2 | 1 |
| Jade | 441 | 1089 | 12 | 11 | 1 |
| Sodium | 1233 | 1041 | 240 | 1 | 0 |
| BetterF3 | 824 | 546 | 13 | 0 | 0 |
| Shulker Box Tooltip | 208 | 444 | 11 | 2 | 0 |
| Zoomify | 234 | 371 | 2 | 2 | 5 |
| Lithium | 687 | 286 | 370 | 0 | 0 |
| AppleSkin | 98 | 149 | 10 | 0 | 0 |
| No Chat Reports | 64 | 128 | 34 | 2 | 0 |

And the part that matters: **in a real client, with zero errors** —

| mod | plans applied | of | accessors | notes |
| --- | --- | --- | --- | --- |
| Litematica | **37** | 37 | 20 | schematic mod: 25 named injections + its accessors |
| Jade | **12** | 12 | 4 | 11 Fabric events + its keybind |
| Zoomify | **1** | 1 | 0 | keybinds + events translate; the FOV hook applies |
| Gamma Utils | **6** | 6 | 0 | 11/11 events, 8 keybinds |

Client state with all of them loaded: 2,002 snapshots in under three minutes, no rollbacks, no
suspensions. Optional mods are now hot-loaded by reference (an 18 MB source inlined into the client
bootstrap made a 150 MB document; localStorage would refuse it anyway).

So the honest summary of "will mods work": **UI/QoL/info mods do** (JEI, Jade, Zoomify, Shulker,
AppleSkin, Mod Menu, Litematica's logic, Xaero partly); **renderer and perf mods do not** (Iris,
Sodium, Lithium — by nature, not by tuning); **deep client-hook mods are partial** (Meteor, Flashback).

## 2026-10-19 (later) — redirects, overwrites, and where the wall is

Runtime support for the other mixin kinds landed: `@Overwrite` (the handler's return value becomes
the method's), and `@Redirect`/`@ModifyArg`/`@ModifyArgs` implemented by wrapping the **callee** and
marking the target "on the stack" while it runs — an approximation that is exact for how these mixins
are written in practice, and reported as `approximate`. Two new tests cover redirect and modifyArg
end to end (29 runtime tests now).

With that, Meteor's own plan census reads:

| kind | injections | target named | callee named |
| --- | --- | --- | --- |
| `@Inject` | 266 | **190** | — |
| `@ModifyArg` | 23 | 9 | 5 |
| `@ModifyArgs` | 9 | 8 | 3 |
| `@Redirect` | 12 | 5 | 0 |
| `@ModifyVariable` / `@ModifyConstant` | 17 | 8 | — |
| accessors | 83 | — | — |

Applied in a live client: **56 plans / 57 injections + 83 accessors**, client publishing state at the
control rate. The wall is no longer mixin kinds — it is **naming**: 76 of Meteor's 266 `@Inject`
targets (and most of Flashback's) have no function yet, and a redirect needs *both* sides named.
Everything else is policy, and the policy is what keeps the client alive.

## 2026-10-19 (later) — the wall is naming, and it moved

The honest summary first: nothing here makes Iris or Sodium run — they rewrite the render pipeline.
What moved is everything upstream of that: how many of a heavy mod's patch targets can be *reached*,
and how honestly the platform reports what it could not do.

### Naming: 17,539 -> 23,130 methods (+32%)

The five passes that existed matched one method at a time, which leaves the ordinary methods in the
middle of the client — exactly what a big mixin mod patches. Both sides have a *graph*, though: a Java
class file says which methods a method calls; a compiled function says which functions it calls. So
the new pass (`tools/align-classes.mjs`) walks the two graphs against each other once ~14k methods are
paired, and accepts a pair only when it is **mutually best** — the method's favourite function *and*
that function's favourite method — with a margin over the runner-up. Wrong names are worse than
missing ones, so the rule is strict, and it still named **3,415 methods** the other passes could not.

Two bugs in the same area were worth more than the pass:

* the **field map was keyed by obfuscated names** (`F` instead of `hasCollision`), so every `@Accessor`
  asking for a Java field name resolved to null while the map looked complete;
* a **`@Overwrite` names no method** — the handler's own name *is* the target — so every overwrite said
  `<unspecified>`. Flashback's twenty overwrites and Lattice's fifteen were never unmapped methods.

### Call sites: injections *at* a call

`@Redirect`, `@ModifyArg(s)` and `@Inject(at = @At("INVOKE"))` all need to stand at a *call*. The
runtime does it by marking the target method as on the stack while it runs and consulting the mod's
handler while the callee is called — and the `@Inject` case is new: the handler runs at the call, can
cancel it, and honours `shift = AFTER`. 106 of Meteor's plans were refused for want of exactly this;
they are now applied where their callee can be resolved, and the refusals that remain say why
(`a field read is a property access`, `modifyVariable rewrites inside the target method`, …).

`tools/build-sites.mjs` goes further where it can: for a named method, it aligns the Java INVOKE order
with the compiled call order and writes `sites.json`, which resolves a call's compiled function
*without* naming the callee — exact about which call it is, because the ordinal is known. TeaVM inlines
small calls and splits methods into state machines, so only ~1,800 methods pass the strict acceptance
(every call explained, and the alignment has to survive being read backwards); where it applies, the
plan is marked `exact` instead of `approximate`.

### Measured

`tools/coverage-report.mjs` prints a converted mod's reach, split by mixin kind — this is the table
that turned "the mod does not work" into "these methods are unnamed":

| mod | plans that can apply | injections resolved | accessors |
| --- | --- | --- | --- |
| Meteor | 79 -> **113** / 185 | 220 -> **253** / 327 | 0 -> **30** / 71 |
| Flashback | 34 -> **53** / 93 | 54 -> **109** / 165 | — |
| Litematica | 11 -> **20** / 37 | 26 -> **35** / 45 | 0 -> **3** / 12 |
| JEI | 7 -> **8** / 10 | 12 -> **14** / 17 | — |

Live, in a browser, with Meteor Client hot-loaded into the running game: **12/12 checks**, 191 plans
registered, **133 applied** to the live client, and the client drawing at 60 fps throughout. The
remaining refusals are named in the panel, grouped by reason (14 still queued, 6 `@Inject` points with
no call to stand in front of, 5 `@ModifyVariable`, 4 redirect callees unnamed).

Two of those 133 came from bugs found by *reading the live numbers*, not by tests:

* the runtime compared an at-point **object** (`{ value: "HEAD", … }`, the converter's own shape)
  against the string "HEAD", so every `@Inject` at HEAD was refused — 94 of 240 plans on the deployed
  site, reported as "needs a call-site map", which was never the reason;
* the watchdog watched the **mod state bus** for liveness. A client sitting on a static screen at
  60 fps publishes no state change for minutes, so it "detected" a stall and dropped 81 good plans on
  a title screen. It watches the client's own clock now (frame counter and game tick), and a batch that
  does hurt the client is dropped wave by wave — newest first — until the client comes back, instead of
  all 134 plans going down with the one that hurt.

A converted handler is also on a budget now: one call taking > 60 ms, or a handler using more than 25 ms
of any second of client time, is switched off by name and the client keeps its frame rate.

### What the wall still is

Honest list, because these are the parts a mod author will hit:

* **76 of Meteor's 266 injections name a target no pass has reached.** The call graph is the tool for
  this; it runs to a fixed point, and every round of the pipeline names more.
* **Field/constant/store at-points have no call to stand in front of.** A field read is a property
  access and a local variable is a register in a state machine; `@ModifyVariable` and `@ModifyConstant`
  are refused with that sentence rather than pretended.
* **A callee reached through the object's slot table** (virtual dispatch) is compiled as a property
  lookup, so wrapping the function value does not intercept it. That is the next real piece of work.
* Iris, Sodium, Lithium: render pipelines and native code. Unchanged, and will stay unchanged.

## 2026-10-19 (deployed, measured) — the same set, before and after

The heavy set (Meteor + Litematica + Jade + Zoomify) on the deployed site, two rounds apart:

| | before this round | after |
| --- | --- | --- |
| symbol map | 17,539 methods | **23,130** methods in 7,300 classes |
| plans registered | 240 | 240 |
| plans applied | 75 | **154** |
| injections applied | 79 | **209** | 
| accessors installed | 107 | 107 |
| rolled back | — (everything, twice: a title screen was mistaken for a stall) | **0** |
| client | — | 48-60 fps, 3,962 state snapshots, 8/8 live checks |

The two biggest single wins were not naming at all: they were an at-point read as a string instead of an
object (94 plans), and a watchdog watching the wrong clock (81 plans dropped on a static screen). Both
were invisible to the test suite and obvious the moment the live numbers were read per plan.

## 2026-10-19 (final for now) — the deployed site, measured

Live check with **Meteor + Litematica + Jade + Zoomify** loaded together
(`tools/live-check.mjs --full --url ".../?load=meteor-client,litematica,jade,zoomify"`):

| | |
| --- | --- |
| plans registered | 240 (75 applied, the rest refused by name; see the reasons in the panel) |
| modules registered (Meteor) | 173 |
| state snapshots in 4 minutes | **3,173** (the client never stopped) |
| suspended mods | 0 |
| checks | 8/8 |

The Mods panel is the interface: anything optional loads on demand, every plan is listed with its
state and its reason, and the whole thing can be switched off with `?internals=off`.

**The mod gallery is live**: <https://amphibiandev.github.io/webmc-jsmod/gallery/> — 12 mods with
categories, sizes, search, a details dialog, "Play with it" (`?load=<id>`) and
`gallery/AUTHORING.md` for anyone writing their own. `tools/build-gallery.mjs` builds its index from
what the site actually ships, and the Pages workflow runs it on every deploy.

## Next

1. **The internals layer**: a derived client build that exposes its TeaVM class table
   (`__gaiusTeaVM`) and a wasm/JS method-wrapper, so `webmc.patches` can apply plans. The converter
   already emits everything needed (`internals` capability, patch plans, the report's unresolved
   calls). This is what turns Meteor's 327 mixins from a list into behaviour.
2. **More of the mapped game surface** in the converter (entities, inventory, chat text), so more
   handlers resolve without internals.
3. **A no-internals mode check in CI**: `--no-internals` conversions already run; a test that every
   jar still yields a loadable package with that flag keeps the honest path honest.
