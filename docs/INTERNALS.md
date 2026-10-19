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

Today that is **17,727 methods in 6,401 classes**, written to `symbols.json` next to the patched
client. Five passes get there, and each one's output is the next one's seed:

| pass | what it uses | methods |
| --- | --- | --- |
| lambda anchors | TeaVM's `Owner$method$lambda$_<index>_<n>` names + the instantiation site | 762 |
| string alignment | interned literals (`G(index)`) matched against the Java constant pool, by rarest literal + arity | ~3,300 |
| virtual slots | the class tables' `[slot, function]` entries, with slot names learned from named pairs | ~2,600 |
| caller propagation | a named caller's compiled body says which functions it calls; the Java side says which methods | ~2,500 |
| per-class alignment | field ownership (constructor initialises a class's fields) + fields, literals, arity, callees | ~8,500 |

Two bugs were worth more than any heuristic here: **`client.txt` lists methods in class-file order
and obfuscated names repeat across overloads**, so names must be paired by position (this alone took
Meteor from 56 to 153 named injections); and the first Java-side pass *skipped every method without a
string literal*, which is most of the methods mods patch. Every entry records *why* it is believed — an anchor, a fingerprint with its score, or a
propagation step — so a wrong entry can be argued with:

```json
"Minecraft": { "tick": { "fn": "AEEo", "arity": 1, "why": "19 literal(s) shared, rarest in 1 Java method(s), arity 1", "score": 2.35 } }
```

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

8. **A conservative cap, and bisection.** At most 32 plans are applied; the rest stay records
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
