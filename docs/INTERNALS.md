# The internals layer

A converted mod's mixins are a **plan**: target class, target method, injection point, handler. On a
client that exposes nothing, a plan is a record and the runtime says so. This is what makes the
plans real.

## What the build exposes

`tools/patch-client.mjs` rewrites exactly one stream of the published client — the compiled module —
to add two assignments at its end:

```js
globalThis.__gaiusTeaVM = A;      // every class, function and static in the build
globalThis.__gaiusExports = B;    // what the module exported
```

Everything else about the client is untouched. The patched copy gets its own manifest and chunk
hashes, and `tools/verify-client.mjs` checks them like any other build; the original whole-client
sha256 is recorded in the manifest's provenance line. The site's loader prefers
`client/1.21.11-internals/` when it is present and falls back to the pristine build otherwise.

That one assignment gives the page:

* **9,855 classes by name** (`net.minecraft.client.Minecraft`, `net.minecraft.client.gui.Gui`, …),
  with their constructors;
* **160,251 members** of the internals object — the compiled game's own functions;
* everything below.

## Naming methods: the alignment problem

TeaVM's JavaScript build has **no method-name table**. A method is `A.IkAb`, called as
`A.IkAb(this, …)`; nothing says `IkAb` is `Minecraft.tick`. Points of light:

1. **Lambda anchors** (`tools/build-symbols.mjs`). TeaVM names a lambda class
   `<Owner>$<method>$lambda$_<class-file method index>_<n>`, and instantiates it *inside the
   function that is that method*. Find the constructor symbol, find its `new`, take the enclosing
   assignment: **762 methods** named exactly, e.g. `Minecraft.buildInitialScreens`, `KeyMapping.registerMapping`.
2. **String-constant alignment** (`tools/align-methods.mjs`). TeaVM interns strings: a method reads
   `G(1234)`, and one call fills the pool. Both sides therefore know the literals a method uses —
   the Java class files in their constant pool, the compiled functions through their `G(index)`
   reads. A function is matched to a Java method when the rarest literal it uses occurs in few Java
   methods, its other literals are a subset of that method's, and the arity agrees (TeaVM emits
   `this` as the first parameter of instance methods). **+1,688 methods**, including
   `Minecraft.run`, `Minecraft.tick`, `Minecraft.close`, `SoundEngine.play`, `Options.load`.
3. **Targeted pass.** A converted mod says which methods it wants. For those, ambiguity is resolved
   *within the class*: the Java method whose literals are all present in a function, unique among
   the class's overloads.
4. **Propagation.** A named method's bytecode says which methods of its class it calls; its compiled
   body says which functions it calls; when the arities agree one-to-one, the callee is named.

5. **The call graph** (`tools/align-classes.mjs`, the last pass). The passes above match one method at
   a time, which leaves the methods with neither a distinctive literal nor a field of their own — the
   ordinary methods in the middle of the client, which is what a big mixin mod patches. Both sides
   have a *graph*, though: the Java class file says which methods a method calls, the compiled build
   says which functions a function calls. Once ~14,000 methods are paired, a method whose
   already-named callees are the functions this compiled function calls is that method. The pass runs
   to a fixed point and only accepts a pair when it is **mutually best** — the method's favourite
   function *and* that function's favourite method — with a clear margin over the runner-up, because a
   wrong name is worse than a missing one: the runtime would wrap the wrong function.

That is **20,962 methods in 6,966 classes**, written to `symbols.json` next to the patched client.
The passes get there in this order, each one's output the next one's seed:

| pass | what it uses | methods |
| --- | --- | --- |
| lambda anchors | TeaVM's `Owner$method$lambda$_<index>_<n>` names + the instantiation site | 762 |
| string alignment | interned literals (`G(index)`) matched against the Java constant pool, by rarest literal + arity | ~3,300 |
| virtual slots | the class tables' `[slot, function]` entries, with slot names learned from named pairs | ~2,600 |
| caller propagation | a named caller's compiled body says which functions it calls; the Java side says which methods | ~2,500 |
| per-class alignment | field ownership (constructor initialises a class's fields) + fields, literals, arity, callees | ~8,500 |
| **call graph** | paired callees and callers on both sides, arity, fields, literals — mutual best, to a fixed point | **+3,415** |

Two bugs were worth more than any heuristic here: **`client.txt` lists methods in class-file order
and obfuscated names repeat across overloads**, so names must be paired by position (this alone took
Meteor from 56 to 153 named injections); and the first Java-side pass *skipped every method without a
string literal*, which is most of the methods mods patch. Every entry records *why* it is believed — an anchor, a fingerprint with its score, or a
propagation step — so a wrong entry can be argued with:

```json
"Minecraft": { "tick": { "fn": "AEEo", "arity": 1, "why": "19 literal(s) shared, rarest in 1 Java method(s), arity 1", "score": 2.35 } }
```

## Virtual dispatch: why a patch could apply and never run

Compiled virtual calls do not call `A.foo`. They call `object.<slot>(…)`, where the class table built
the object's properties out of adapters:

```js
let L=f=>function(){return f(this);}, K=f=>function(p1){return f(this,p1);}, V=…, Bg=…, Bo=…
```

`K(A.foo)` captures the value of `A.foo` at class-registration time. Replacing `A.foo` later — how every
patch is installed — therefore changes nothing for a call made through an object's table, which is how
most client methods are called. `tools/patch-client.mjs` rewrites those five definitions to
`globalThis.__webmcSlot(f, arity)`, which returns the same adapter shape over a mutable slot; the
runtime refreshes the slot when a wrapper is installed or rolled back. The idle cost is one comparison
per virtual call (`(w||f)(this,p1)`), and `selftest().internals.dispatchPatchable` says whether the
client in front of you has the hook at all — a client patched by an older tool reports `false` and
silently patches nothing.

## Fields, accessors and invokers

The per-class pass also emits a **field map** (`fields` in `symbols.json`, 7,588 fields in 2,948
classes): Java field name -> the compiled object's own property, aligned by declaration order and
type kind. That makes `internals.getField/putField` real, and it makes `@Accessor`/`@Invoker` plans
real: Fabric *generates* those methods, so the plan installs a table entry — an accessor reads or
writes its field on the target object, an invoker calls the method it names. They wrap nothing, so
they are applied outside the wrapper budget.

For Meteor that is the difference between 16 and **69 of its 191 plans** on the running client, with
83 accessors installed and the client still publishing state at the control rate.

## Redirects, argument edits, overwrites — and injections *at* a call

`@Redirect`, `@ModifyArg`, `@ModifyArgs` and `@Inject(at = @At("INVOKE"))` are all "at a call" mixins,
and they share one mechanism: the target method is marked as *on the stack* while it runs, and the
callee's wrapper consults the mod's handler while that mark is up. What differs is what the handler
does:

| kind | handler | effect |
| --- | --- | --- |
| `@Redirect` | returns a value | the call's result is replaced and the call is skipped |
| `@ModifyArg` | returns one argument | that argument is rewritten, the call still happens |
| `@ModifyArgs` | writes into an `Args` box | any of the arguments are rewritten |
| `@Inject` at `INVOKE` | may cancel | the handler runs at the call; cancelling skips the call and uses `info.returnValue`; with `shift = AFTER` it runs after |

## Redirects, argument edits and overwrites

Not every mixin changes a method whole. `@Redirect` and `@ModifyArg(s)` change one *call* inside a
method, and `@Overwrite` replaces the body. There is no call-site map to rewrite, so the layer gets
the same effect at run time:

* **`@Overwrite`** — the target is wrapped and the handler's return value becomes the method's; if
  the handler throws, the original runs.
* **`@Redirect` / `@ModifyArg` / `@ModifyArgs`** — the *callee* is wrapped and the target is marked
  "on the stack" while it runs. When the callee is called from inside the target, the mod's handler
  is consulted: it supplies the call's result, or replaces one argument, or edits an `Args` object.
  This is an approximation — a callee called twice inside the same target is redirected both times —
  and every such plan says `approximate` in its report. It is exact enough for the way these mixins
  are written in practice.

Both are wrappers, so they are subject to the same sampling, rate limits, bisection and rollback as
`@Inject`. Plans whose at-point is a `FIELD`, `STORE`/`LOAD` or a constant are refused by name: a
field read is a property access in the compiled code and a local variable is a register, and neither
is a call this layer can stand in front of.

## Applying a plan

`@Inject` at `HEAD` or `RETURN`/`TAIL` is a wrapper around the target function. TeaVM calls methods
through the internals object, so replacing that property intercepts every call site.

```js
webmc.patches.add({
  targets: ["net/minecraft/client/Minecraft"],
  injections: [{ kind: "inject", method: ["tick"], at: ["HEAD"], cancellable: true, run: (self, args, info) => { … } }]
});
```

The generated handler *runs the converted Java*, and `CallbackInfo` (`cancel`, `isCancelled`,
`setReturnValue`, …) is a plain object the transpiled code can call, because the converter has
native entries for it.

## The safety valves (a mod platform must not brick the client)

Learned the hard way, in this order:

1. **Applied when the client is running and warm**, not while it starts. Wrapping a method during
   static initialisation is how a client gets bricked.
2. **Sampling.** A wrapper starts as a pass-through and measures the call rate; past 40 calls/s it
   stays passive and says so once. A per-frame or per-particle method never enters a stack machine.
3. **A live budget**: 200 handler runs/second per method, and 256 wrapped methods at most.
4. **One wrap per method.** A second plan for the same method is refused by name instead of stacking
   wrappers.
5. **Handler failure cutoff.** A handler that throws 25 times is switched off and named; a handler
   whose calls this build cannot satisfy fails on *every* invocation, and error flooding alone can
   stall a browser tab. `reportError` also caps itself at ten reports a second.
6. **`cancel()` is not honoured.** A converted handler that skips a client tick stops the client
   updating, and no rollback can undo a tick that never ran. The handler still runs, so its own work
   happens; it just cannot stop the game's method. `info.cancelIgnored` says so.
7. **Waves with a watchdog.** Plans are applied four at a time. After each wave the runtime asks
   whether the client is still publishing state; a wave that froze it is rolled back (wrappers are
   property assignments, so undo is exact) and no further waves are applied. A session-long watchdog
   does the same for cumulative freezes, rolling back the most recent wave until the client answers
   again. `?internals=off` switches the whole layer off, and `webmc.patches.setEnabled(false)` does
   it at run time.

8. **Accessors are free.** A plan that only installs accessors/invokers writes a table entry and
   wraps nothing, so it is applied outside the wrapper budget; a converted mod's field reads and
   writes depend on them.
9. **A conservative cap, and bisection.** At most 32 plans are applied; the rest stay records
   (`webmc.patches.setCap(n)`, or `?patches=200` to raise it). A batch that hurts the client is
   rolled back and re-tried in halves, so one bad wrapper costs its own plan rather than the set.

Measured, with a controlled comparison on the same page and the same mod:

| configuration | state snapshots in ~3 min | plans applied |
| --- | --- | --- |
| internals off (control) | 2,027 | 0 |
| capped at 32 plans | **2,674** | 16 |
| uncapped (~120–147 wrappers) | frozen after ~60 s | 70 |

Before these valves the uncapped client froze; with them the capped client publishes state at the
same rate as the control. The cap is the price of a client that stays alive, and it is a number
rather than a promise.

## What applies today, measured

Two numbers matter and they are different numbers: how many plans apply (a plan needs one named
method) and how many *injections* apply (an `@Inject` needs its target, an `@Redirect` needs the
callee too, an `@Accessor` needs a field). `tools/coverage-report.mjs` prints the split for any
converted mod, which is how "the mod does not work" turns into "this class's methods are unnamed":

| mod | injections with a name (offline) | applied in a live client |
| --- | --- | --- |
| Meteor Client 1.21.11-86 | 220 / 327 (78 plans) | **≈100 injections across ≈40 plans** |
| Gamma Utils 2.5.10 | 5 / 7 | 4 |
| hello-fabric | — | — |

The difference between "named" and "applied" is a deliberate safety policy, described next.

The rest are `planned` with their reason: `no anchor for <class>.<method>` (this build's symbol map
does not name it), `accessors need a field-name map` (a different alignment problem — fields), or
`@Redirect/Overwrite need call-site rewriting` (whole-method wrapping cannot rewrite a call inside a
method).

## What finishing this looks like

The mechanism is done; the *coverage* is the work left, and it is mechanical rather than
architectural:

* **Fields**, the same way as methods, with their own fingerprints — that turns the 83 accessor
  plans into real accessors.
* **Call-site rewriting** for `@Redirect`, `@ModifyArg`, `@ModifyVariable`, `@Overwrite` — a wasm-style
  wrapper at a call site rather than around a method.
* **More alignment**: the string pass refuses 1,006 ambiguous functions and leaves 17,015 without a
  usable literal; a global solver over the call graph (both sides' graphs are already extracted)
  is the next step.

None of that changes the shape of the API: `webmc.patches`, `internals.resolve`, and the report's
`applied` / `planned` counts stay exactly as they are, and they will keep saying `applied` only for
what really happened.
