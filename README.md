# webmc-jsmod — a JavaScript modding platform for the browser client

**Live: <https://amphibiandev.github.io/webmc-jsmod/>** — press Play. The Mods panel has a
**Load now** button for the converted **Meteor Client** (171 modules, 327 planned mixin injections,
11.8 MB, loaded in the running game).

Fabric at play time is gone: the compiled client that lives in a browser has no class loader, so a
Fabric jar cannot be loaded the way Fabric loads it, and a build-time bake cannot do what a runtime
loader does. This folder is the other route, self-contained:

* **the client runs in the page**, in an iframe, from chunks whose hashes are checked before they run
  (the copy of the published 1.21.11 build — see `tools/verify-client.mjs`);
* **mods are JavaScript**, loaded at play time, from a folder, a `.jsmod` package, a drag-and-drop or
  a URL — and they hook the client through the window surface it already publishes;
* **a converter turns Fabric jars into `.jsmod` packages**: entrypoints, Fabric API events, keybinds,
  commands, Meteor-style modules and a named patch plan for the mixins, with a report that says
  exactly what was translated and what still needs the client internals.

Nothing outside this folder is touched: `client/1.21.11/` was copied out of
`webmc-port/site/clients/1.21.11/` and is byte-identical to the published build.

```
webmc-jsmod/
  client/1.21.11/          the compiled client (chunks + manifest, hashes from the published build)
  index.html               the loader: verifies the client, injects the runtime, opens the frame
  runtime/                 the JS modding API (src/ + dist/webmc.js, ~105 KB, no dependencies)
  mods/                    what loads at play time: index.json, examples, converted/ (real jars)
  converter/               Fabric jar -> .jsmod + report (Node, no dependencies)
  tools/                   serve, browser check, client verify, mapping fetch
  tests/                   the runtime's own suite, in Node, with a fake client window
```

## Try it

```sh
node runtime/build.mjs                 # dist/webmc.js out of runtime/src/
node tests/run.mjs                     # the runtime: 24 checks, no browser
node converter/test/run.mjs            # the converter: 10 checks, no browser
node tools/serve.mjs                   # http://127.0.0.1:8099/ — press Play
```

A real-browser check (headless Chrome, the real client, a real key injected into it):

```sh
node tools/browser-check.mjs
node tools/live-check.mjs --with-meteor     # the deployed site, in a real browser
```

**Meteor Client works here** — the real `meteor-client-1.21.11-86.jar`, converted, hot-loaded into a
running client: 171 modules registered, 191 patch plans / 334 injections recorded, 0 errors, and
**about 100 injections across 40 plans applied to the running client** — Meteor's `@Inject` handlers
run inside the compiled game, while the client keeps publishing state (2,500 snapshots in three
minutes). The rest are `planned` with their reason (no name for that method yet, an accessor needing
the field map, or a redirect that needs call-site rewriting). **`docs/INTERNALS.md`** explains the
whole layer: the patched client, the five naming passes (17,727 methods), and the safety valves —
sampling, failure cutoffs, wave-by-wave application and rollback, and the deliberate refusal to
honour `cancel()` because a skipped tick cannot be undone.

It proves, with the bytes it actually ran: the runtime is installed inside the client **before the
client's first script**, the input hook sees a real key, the client publishes state, and mods from
`mods/index.json` — including a converted Fabric jar and a converted Modrinth mod — are loaded at
play time.

## What a mod looks like

```js
const mod = webmc.defineMod({
  id: "example.sprint",
  name: "Sprint",
  version: "1.0.0",
  capabilities: ["hud", "input", "storage", "settings", "player.read"]
});

mod.on("init", (api) => {
  const label = api.hud.text({ id: "sprint", x: 4, y: 4, text: "sprint off" });
  const enabled = api.settings.define({ key: "enabled", type: "boolean", default: false });

  api.input.bind({ key: "v", label: "Toggle sprint", handler: () => enabled.set(!enabled.get()) });
  api.events.onTick(() => {
    label.update({ text: "sprint " + (enabled.get() ? "on" : "off") });
    const p = api.player.snapshot();
    if (enabled.get() && p.position) { label.update({ text: "sprint on @ " + p.position.x.toFixed(1) }); }
  });
  api.command({ name: "sprint", handler: (context) => context.reply("sprint " + (enabled.get() ? "on" : "off")) });
});
```

The full reference is in **`docs/API.md`**. What the runtime can do on this client, measured rather
than claimed, is in **`docs/ARCHITECTURE.md`** and in `webmc.selftest()` at run time.

## Converting a Fabric mod

```sh
node converter/convert.mjs ~/Downloads/meteor-client-1.21.11-86.jar --out dist-converted
```

```
meteor-client 1.21.11-86  —  Meteor Client
  classes   2590, methods 17551
  translated 4959 methods, 12592 left out
  entrypoints 2 (0 translated)
  events      0 (0 handler translated)
  keybinds    0, commands 0, modules 171
  mixins      236 classes, 327 injections (inject=266, modifyArg=23, …)
  verdict     runs-partial (parts need the client internals)
```

The output is a `.jsmod` a player can add to `mods/`, plus `index.js`, `report.json` and
`REPORT.md`. **`docs/CONVERTER.md`** explains the translation, the mappings it needs, and exactly
which mixin behaviours still wait on the internals layer.

## Honesty notes

* Mods are ordinary JavaScript. Capabilities in a manifest decide which namespaces a mod's API
  object carries, and risky ones (packet writing, key injection, internals) are asked about once —
  but a "capability" is not a sandbox. Do not run a mod you do not trust.
* The client is not patched by the runtime. The mixin plans a converted mod brings are **records**
  until the internals layer (a patched client exposing the compiled class table) lands; the runtime
  never claims a patch it did not make.
* `converter/mappings/` holds Mojang's mapping file, which may not be redistributed. It is fetched
  per machine by `tools/fetch-mappings.mjs` and is gitignored.
