#!/usr/bin/env node
/* Dump the methods a converted mod wants to patch, as a wanted-list for tools/align-methods.mjs.
 *
 *     node tools/wanted-from-mod.mjs mods/converted/meteor.js --out /tmp/wanted-meteor.json
 *
 * A converted mod's patch plans are ordinary objects in its own closure; running the mod in a fake
 * client window (tests/fake-window.mjs) is the least surprising way to read them.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { loadRuntime } from "../tests/fake-window.mjs";

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const at = args.indexOf("--" + name);
  return at >= 0 && args[at + 1] && !args[at + 1].startsWith("--") ? args[at + 1] : fallback;
};
const source = resolve(args.find((a) => !a.startsWith("--") && a.endsWith(".js")) || "");
const out = resolve(flag("out", "wanted.json"));

const win = loadRuntime({ trustAll: true });
win.__installClient();
const result = win.webmc.mods.run("wanted", readFileSync(source, "utf8"));
if (!result.ok) { console.error(result.error); process.exit(1); }
await new Promise((r) => setTimeout(r, 200));

const wanted = [];
const seen = new Set();
for (const plan of win.webmc.__internal.patches.plans) {
  for (const injection of plan.injections || []) {
    const methods = Array.isArray(injection.method) ? injection.method : [injection.method];
    for (const method of methods) {
      const key = (plan.targets || [])[0] + "::" + method;
      if (seen.has(key)) { continue; }
      seen.add(key);
      wanted.push({ className: (plan.targets || [])[0] || null, method });
    }
  }
}
writeFileSync(out, JSON.stringify({ note: "wanted patch targets", source, wanted }, null, 1) + "\n");
console.log(`${wanted.length} wanted methods -> ${out}`);
