# The Fabric → JS converter

A Fabric mod is Java bytecode plus metadata. A browser client compiled ahead of time has no class
loader, so the converter's job is not to run the jar — it is to read the jar as a **description of
what the mod does** and write that description as JavaScript that the runtime can load at play time.

```sh
node converter/convert.mjs <mod.jar> [--out dist-converted] [--json] [--no-internals]
node converter/convert.mjs --all              # every jar in converter/jars/
node converter/tools/fetch-mod.mjs appleskin  # fetch real mods from Modrinth first
```

Output, per mod, in `--out`:

| file | what it is |
| --- | --- |
| `<id>-<version>.jsmod` | the package a player adds (a zip: manifest + source + reports) |
| `<id>/webmc.mod.json` | the generated manifest, with the capabilities the mod needs |
| `<id>/index.js` | the generated mod (readable, all translation is visible) |
| `<id>/report.json` | machine-readable truth: every decision, every refusal |
| `<id>/REPORT.md` | the same truth for a human |

## What it reads

* **`fabric.mod.json`** — id, version, authors, environment, entrypoints (`main`, `client`),
  dependencies, and the mixin configs.
* **Every `.class` file**, including jars nested under `META-INF/jars/`. A reader written for this
  project parses the constant pool, fields, methods, annotations (including nested `@At` and
  parameter annotations), exception tables, and `BootstrapMethods`.
* **The bytecode itself** — a scanner decodes the instruction stream: constant pool references,
  string constants, field reads/writes, and `invokedynamic` bootstraps, which is how a lambda's real
  target method is found.
* **Mixin configs** (`*.mixins.json`) and mixin annotations — `@Mixin`, `@Inject`, `@Redirect`,
  `@ModifyArg(s)`, `@ModifyVariable`, `@ModifyConstant`, `@WrapOperation`, `@Overwrite`,
  `@Accessor`, `@Invoker`, `@Shadow`.
* **Mappings** — the join of Mojang's `client.txt` (obfuscated → named) and Fabric's
  `mappings.tiny` (obfuscated → intermediary), so `net/minecraft/class_310.method_1574` becomes
  `net/minecraft/client/Minecraft.tick`. See *Mappings* below.

## What it writes

**Entrypoints** become the generated mod's `init`. A `ClientModInitializer`'s
`onInitializeClient()` is transpiled and called with a `this` of the class's own instance, exactly
as Fabric would instantiate and call it.

**Fabric API events** become `mod.on(...)` registrations. `EVENT.register(lambda)` is paired by
reading the bytecode: the `getstatic` of the event field, the `invokedynamic` that builds the lambda
(the bootstrap resolves to the lambda's real method), and the `register` call. Event classes are
matched by simple name, so both the old (`client/tick/v1/ClientTickEvents`) and the new
(`client/event/tick/v1/ClientTickEvents`) layouts work.

| Fabric | WebMC JS |
| --- | --- |
| `ClientLifecycleEvents.CLIENT_STARTED` / `STOPPING` | `init` / `unload` |
| `ClientTickEvents.START_/END_CLIENT_TICK` | `tick` |
| `HudRenderCallback.EVENT` | `frame` |
| `ClientPlayConnectionEvents.JOIN` / `DISCONNECT` | `world:join` / `world:leave` |
| `ClientCommandRegistrationCallback.EVENT` | `command` registrations |
| `ClientReceiveMessageEvents.CHAT` / `GAME` | `chat` |
| `ClientEntityEvents.ENTITY_LOAD` / `UNLOAD` | `entity:load` / `entity:unload` |
| `UseBlockCallback`, `UseItemCallback`, `AttackBlockCallback`, `AttackEntityCallback`, `UseEntityCallback` | `player:*` |
| `WorldRenderEvents.*`, `EntityRendererRegistry.EVENT` | `world:render`, `entity:render` |
| `PlayerBlockBreakEvents.AFTER` | `player:break` |

**Keybinds** (`KeyBindingHelper.registerKeyBinding`) become `api.input.bind(...)`. The label comes
from the string constant in the registering method, and the GLFW code from the field reference —
including the common shape where the `KeyBinding` is a static field constructed in `<clinit>` and
the register method only passes the field.

**Commands**: the literal names in the registration lambda become `api.command(...)` entries. Their
bodies are Brigadier trees, which are not translated: the generated command says so, in the mod, at
call time.

**Meteor-style modules**: every class that extends a `Module` base is registered with
`api.modules.add(...)`, with its `onTick`/`onActivate` transpiled when they could be. Meteor Client
yields 171 modules.

**Mixins** become a patch plan: target class, method, injection point, cancellable flag, and
accessor descriptions — all named through the mappings. The plan is emitted into the mod as
`webmc.patches.add(...)`. It is a record until the client-internals layer exists; see the honesty
note at the end.

## The transpiler

Handler bodies are real Java methods, so they are compiled: each method becomes a small stack
machine in JavaScript — locals, an operand stack, a program counter and a `switch` — because that is
what the JVM does, and because it is honest about what it can and cannot carry over.

Supported today: constants, locals, arithmetic, conversions, comparisons and branches, fields,
arrays, `new`/`instanceof`/`checkcast`, virtual/static/interface calls, `invokedynamic` lambdas,
string concatenation (`StringConcatFactory`), and **exception handlers** (the catch table is emitted
as a `try/catch` that resumes at the handler with the exception on the stack).

Calls are routed by a generated `context`:

1. the mod's own methods (with superclass walking, mid-jar),
2. a table of JDK calls that map onto JavaScript (`String`, `StringBuilder`, `Math`, lists, maps,
   sets, iterators, optionals, `Function`/`Supplier`/`Consumer`, `Object.equals`, …),
3. a small mapped game surface (`ClientPlayerEntity.getX()`, …) that answers from the JS API,
4. **the client internals**, when the mod was granted that capability and the build has it,
5. otherwise the method is refused, with the exact call named in the report.

A method is only emitted when every call in it is placeable; a refusal names the first few reasons.
That is why the report's "left out" number is trustworthy: it is not a guess about difficulty.

## Mappings

The converter looks for `converter/mappings/<version>/client.txt` and `intermediary.tiny` and picks
the newest version present. Both are fetched per machine — Mojang's file may not be redistributed,
so it is gitignored:

```sh
# client.txt: the URL and sha1 are in the version's own JSON (downloads.client_mappings)
node tools/fetch-mappings.mjs --version-json webmc-port/work/client/1.21.11.json \
                              --intermediary webmc-port/work/fabric/intermediary-1.21.11-v2.jar \
                              --proxy socks5h://127.0.0.1:1080
```

Members are joined on **name and descriptor**, not name alone: an obfuscator may reuse a short name
for several overloads, and a name-only join silently picks the wrong one. When a mixin names a
method that lives on a superclass, a globally unique intermediary name is used as a fallback.

## What the numbers look like

Converted on this machine (2026-10-18), with mappings for 1.21.11:

| mod | classes | methods translated | Fabric events | keybinds | modules | mixin injections | verdict |
| --- | --- | --- | --- | --- | --- | --- | --- |
| hello-fabric (this project's example) | 2 | 2 / 2 | 0 | 0 | 0 | 0 | **runs** |
| Gamma Utils 2.5.10 (Modrinth) | 38 | 239 / 260 | 11 / 11 translated | 8 | 0 | 7 | runs-partial |
| AppleSkin 3.0.8 (Modrinth) | 98 | 426 / 626 | 0 | 0 | 0 | 10 | runs-partial |
| Shulker Box Tooltip 5.2.16 (Modrinth) | 208 | 825 / 1241 | 2 / 2 translated | 0 | 0 | 11 | runs-partial |
| Zoomify 2.15.2 (Modrinth) | 234 | 1272 / 1555 | 1 / 1 translated | 5 | 0 | 2 | runs-partial |
| Mod Menu 17.0.1 | 428 | 1486 / 2510 | 2 / 2 translated | 1 | 0 | 103 | runs-partial |
| BetterF3 17.0.0 | 824 | 4086 / 6191 | 0 | 0 | 0 | 13 | runs-partial |
| Fabric API 0.141.6 | 1830 | 4178 / 6850 | 2 / 2 translated | 0 | 0 | 457 | runs-partial |
| Meteor Client 1.21.11-86 | 2590 | 12656 / 17551 | 0 | 0 | 171 | 327 | runs-partial |

Across all 54 jars in `converter/jars/`, 29,464 methods are transpiled and 14,246 are left out with
the exact call named. Every jar converts without an error and produces a package and a report. (The
plain "runs" verdict means *nothing* was left out — only the tiniest mods reach it today, because a
single call into the game marks a mod runs-partial even when the call is never reached at play
time.)
All 46 jars in `converter/jars/` convert without an error; every one produces a package and a
report.

## Honesty note: what "runs-partial" means

A converted mod **loads and runs** at play time. Its entrypoint runs, its event handlers run, its
HUD lines draw, its keybinds respond, its commands appear, its modules toggle. What it cannot do
yet is change the game's own code: a mixin that redirects a method inside `Minecraft` needs the
client's compiled internals, and this client (the published build) does not expose them. Those
mixins are recorded as a named plan — `BlockBehaviour.getShadeBrightness`, `Minecraft.tick`,
`LevelRenderer.renderLevel`, … — and the runtime's `webmc.patches.summary()` says how many are
applied (zero) and why.

The internals layer is the next milestone: a derived client build that exposes its TeaVM class table
to the page, so a plan can be applied as a wrapper around the real method. The converter is already
written for it — `capabilities: ["internals"]`, the patch plan, and the report's list of calls that
need it.

## Tooling

```sh
node converter/tools/fetch-mod.mjs --list                     # what jars are here
node converter/tools/fetch-mod.mjs appleskin sodium           # fetch from Modrinth (via a proxy if needed)
node converter/convert.mjs --all --out dist-converted         # convert everything
node converter/test/run.mjs                                   # 10 checks, no browser
```
