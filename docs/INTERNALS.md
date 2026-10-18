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

Today that is **2,450 methods in 1,633 classes**, written to `symbols.json` next to the patched
client. Every entry records *why* it is believed — an anchor, a fingerprint with its score, or a
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

1. **Applied when the client is running**, not while it starts. Wrapping a method during static
   initialisation is how a client gets bricked.
2. **Sampling.** A wrapper starts as a pass-through and measures the call rate; past 40 calls/s it
   stays passive and says so once. A per-frame or per-particle method never enters a stack machine.
3. **A live budget** of 200 handler runs per second per method after sampling, and 48 wrapped
   methods at most.
4. **One wrap per method.** A second plan for the same method is refused by name instead of stacking
   wrappers.
5. A handler that throws is reported against its mixin and the original method still runs.

## What applies today, measured

| mod | injections with a name | applied in a live client |
| --- | --- | --- |
| Meteor Client 1.21.11-86 | 19 / 327 | **12, across 9 plans** |
| Gamma Utils 2.5.10 | 1 / 7 | 1 |
| hello-fabric | — | — |

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
