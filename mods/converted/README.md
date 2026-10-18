# Converted mods

These are **generated** files: `converter/convert.mjs` read the Fabric jars listed below and wrote
one JavaScript mod each. Nothing here was written by hand, and nothing here is a Fabric jar — the
runtime in this project cannot load Java.

| file | source | licence of the source | what conversion produced |
| --- | --- | --- | --- |
| `hello-fabric.js` | `webmc-port/mods/jars/hello-fabric.jar` (this project's own example mod) | this project's | 2/2 methods, verdict `runs` |
| `gammautils.js` | [Gamma Utils](https://modrinth.com/mod/gamma-utils) 2.5.10 for 1.21.11 | MIT | 239/260 methods, 11/11 Fabric events, 8 keybinds, 10 mixin classes planned |
| `meteor.js` | [Meteor Client](https://meteorclient.com/) 1.21.11-86 | GPL-3.0 | 3,134 reachable methods of 17,551, 171 modules, 236 mixin classes / 327 injections planned |

A converted file is a **derivative** of the jar it came from. If you redistribute this repository,
the licence of the source mod travels with its generated file: Meteor Client's converted output is
GPL-3.0, because Meteor Client is.

Each conversion has a full report next to it when you keep the converter's output directory
(`REPORT.md` and `report.json`); those name every method that was translated, every method that was
left out with the call that stopped it, and every mixin as a named patch plan.

Why the mods' mixins are **planned** and not applied: the compiled client that runs in the browser
does not expose its internals to the page, so a mixin has nothing to attach to yet. The converted
mods register their plans through `webmc.patches` and the runtime reports them as `planned`. That is
the next milestone, and the converter is already shaped for it (`capabilities: ["internals"]`).
