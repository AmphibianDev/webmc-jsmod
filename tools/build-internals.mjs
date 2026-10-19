#!/usr/bin/env node
/* One command that produces the whole internals layer: patched client + symbol map.
 *
 *     node tools/build-internals.mjs                       # uses client/1.21.11 as the source
 *     node tools/build-internals.mjs --wanted mods/converted/meteor.js --wanted mods/converted/gammautils.js
 *
 * The steps, in order:
 *   1. patch the client so its compiled module exposes `__gaiusTeaVM` (tools/patch-client.mjs),
 *   2. name methods from TeaVM's lambda class names (tools/build-symbols.mjs): exact anchors,
 *   3. global string-constant alignment + propagation (tools/align-methods.mjs),
 *   4. per-class, virtual-slot, bootstrap and caller passes (tools/align-classes.mjs),
 *   5. repeat 3 and 4 while they keep finding names (each round's names are the next round's seeds).
 *
 * The loop matters: 762 anchors alone name nothing a mod wants; anchors + alignment + class
 * structure + callers name tens of thousands, which is what turns plans into wrappers.
 */
import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));
const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const at = args.indexOf("--" + name);
  return at >= 0 && args[at + 1] && !args[at + 1].startsWith("--") ? args[at + 1] : fallback;
};
const all = (name) => args.reduce((list, value, index) => (value === "--" + name && args[index + 1] ? list.concat([args[index + 1]]) : list), []);

const source = resolve(flag("in", join(root, "client", "1.21.11")));
const patched = resolve(flag("out", join(root, "client", "1.21.11-internals")));
const rounds = Number(flag("rounds", 4));
const wantedFiles = all("wanted").length ? all("wanted") : [join(root, "mods", "converted", "meteor.js"), join(root, "mods", "converted", "gammautils.js")];

const node = process.execPath;
function run(script, argv) {
  const started = Date.now();
  execFileSync(node, ["--max-old-space-size=6144", join(here, script), ...argv], { stdio: ["ignore", "inherit", "inherit"], cwd: root });
  return Math.round((Date.now() - started) / 1000);
}

console.log("=== 1/4 patch the client ===");
run("patch-client.mjs", ["--in", source, "--out", patched]);

console.log("\n=== 2/4 anchor map (lambda class names) ===");
const anchorsFile = join(patched, "anchors.json");
run("build-symbols.mjs", ["--in", source, "--out", anchorsFile]);

console.log("\n=== 3/4 wanted lists ===");
const wanted = [];
for (const file of wantedFiles) {
  if (!existsSync(file)) { console.log("  (no " + file + ")"); continue; }
  const out = join(patched, "wanted-" + file.split("/").pop() + ".json");
  run("wanted-from-mod.mjs", [file, "--out", out]);
  wanted.push(out);
}
const combined = join(patched, "wanted.json");
if (wanted.length) {
  const list = [];
  for (const file of wanted) { list.push(...(JSON.parse(readFileSync(file, "utf8")).wanted || [])); }
  const fs = await import("node:fs");
  fs.writeFileSync(combined, JSON.stringify({ wanted: list }, null, 1) + "\n");
}

console.log("\n=== 4/4 alignment rounds ===");
const symbolsFile = join(patched, "symbols.json");
let current = anchorsFile;
let previous = 0;
for (let round = 1; round <= rounds; round++) {
  const globalOut = join(patched, "symbols.global" + round + ".json");
  run("align-methods.mjs", ["--anchors", anchorsFile, "--merge", current, "--wanted", combined, "--out", globalOut]);
  const classOut = round === rounds ? symbolsFile : join(patched, "symbols.class" + round + ".json");
  run("align-classes.mjs", ["--symbols", globalOut, "--wanted", combined, "--out", classOut]);
  current = classOut;
  const stats = JSON.parse(readFileSync(classOut, "utf8")).stats || {};
  const named = stats.methodsNamed || 0;
  console.log(`round ${round}: ${named} methods named`);
  if (named === previous) { break; }
  previous = named;
}
console.log("\nwrote " + symbolsFile);
