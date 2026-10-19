#!/usr/bin/env node
/* What a converted mod can actually reach, in one table.
 *
 *     node tools/coverage-report.mjs --mod mods/converted/meteor.js --mod mods/converted/flashback.js/flashback/index.js
 *
 * For each mod: every patch plan it registers, and — the part that matters — every *injection*, split
 * by mixin kind, on whether its target method is named in the symbol map:
 *
 *   * `@Inject` needs the target named (one name);
 *   * `@Redirect` / `@ModifyArg(s)` need the callee named too (two names, which is the second half of
 *     the wall — the first version of this report hid that by only counting targets);
 *   * `@Accessor` / `@Invoker` need a field or a method, and apply outside the patch budget.
 *
 * Printing the split is what turned "the mod does not work" into "the wall is naming".
 */
import { readFileSync, writeFileSync, statSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { loadRuntime } from "../tests/fake-window.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));
const args = process.argv.slice(2);
function flagAll(name) {
  const out = [];
  for (let i = 0; i < args.length; i++) { if (args[i] === "--" + name && args[i + 1]) { out.push(args[i + 1]); } }
  return out;
}
const mods = flagAll("mod");
const symbolsFile = resolve(flagAll("symbols")[0] || join(root, "client", "1.21.11-internals", "symbols.json"));
const sitesFile = resolve(flagAll("sites")[0] || join(root, "client", "1.21.11-internals", "sites.json"));
const outFile = flagAll("out")[0] || null;

if (!mods.length) {
  console.error("usage: node tools/coverage-report.mjs --mod <converted.js> [--mod …] [--symbols map.json] [--out report.json]");
  process.exit(2);
}
const map = JSON.parse(readFileSync(symbolsFile, "utf8"));
const anchors = map.anchors || {};
const siteMap = (() => { try { return JSON.parse(readFileSync(sitesFile, "utf8")).sites || {}; } catch (error) { return {}; } })();
const fields = map.fields || {};

/** Class names arrive as `net/minecraft/client/Minecraft`; the map is keyed by the simple name. */
const simpleOf = (name) => String(name || "").replace(/\//g, ".").split(".").pop();
const hasMethod = (className, method) => {
  if (!method) { return false; }
  const table = anchors[simpleOf(className)];
  return !!(table && table[method]);
};
const hasField = (className, field) => {
  if (!field) { return false; }
  const table = fields[simpleOf(className)];
  return !!(table && table[field]);
};

const report = { at: new Date().toISOString(), symbols: symbolsFile, named: Object.keys(anchors).reduce((sum, cls) => sum + Object.keys(anchors[cls]).length, 0), mods: [] };
const rows = [];

for (const file of mods) {
  const source = resolve(file);
  const win = loadRuntime({ trustAll: true });
  win.__installClient();
  const started = win.webmc.mods.run("coverage", readFileSync(source, "utf8"));
  if (!started.ok) { console.error(`  ${file}: ${started.error}`); continue; }
  await new Promise((resolveTurn) => setTimeout(resolveTurn, 200));
  const plans = win.webmc.__internal.patches.plans || [];

  const kinds = {};
  const missing = new Map();
  let injections = 0, injectionsNamed = 0;
  let plansApplying = 0, accessors = 0, accessorsResolved = 0, invokers = 0, invokersResolved = 0;
  let ownPlans = 0;
  for (const plan of plans) {
    const targets = plan.targets || [];
    let planApplies = false;
    // A plan against the mod's own classes needs nothing from the client; counting it as a failure
    // was reading a correct conversion as a missing target.
    if (plan.own && !(plan.accessors || []).length) { ownPlans++; plansApplying++; continue; }
    for (const injection of plan.injections || []) {
      injections++;
      const kind = injection.kind || "inject";
      const bucket = kinds[kind] || (kinds[kind] = { total: 0, targetNamed: 0, calleeNamed: 0, calleeViaSite: 0, withCallee: 0 });
      bucket.total++;
      const methods = Array.isArray(injection.method) ? injection.method : [injection.method];
      const named = targets.some((cls) => methods.some((method) => hasMethod(cls, method)));
      if (named) { bucket.targetNamed++; injectionsNamed++; planApplies = true; }
      for (const at of injection.at || []) {
        if (!at || !at.callee) { continue; }
        bucket.withCallee++;
        // A callee resolves either by name (the symbol map) or by call site (the site map, which does
        // not need the callee named at all).
        const byName = hasMethod(at.callee.owner, at.callee.name);
        let bySite = false;
        for (const target of targets) {
          const list = siteMap[`${simpleOf(target)}::${(Array.isArray(injection.method) ? injection.method : [injection.method])[0]}`] || [];
          if (list.some((entry) => simpleOf(String(entry.callee || "").replace(/\./g, "/").split(".").slice(0, -1).join("/")) === simpleOf(at.callee.owner) && String(entry.callee).endsWith("." + at.callee.name))) { bySite = true; }
        }
        if (byName) { bucket.calleeNamed++; } else if (bySite) { bucket.calleeViaSite++; }
      }
      if (!named) {
        for (const method of methods) {
          const key = `${simpleOf(targets[0])}::${method}`;
          const entry = missing.get(key) || { where: key, kind, count: 0 };
          entry.count++;
          missing.set(key, entry);
        }
      }
    }
    for (const accessor of plan.accessors || []) {
      if (accessor.kind === "invoker") {
        invokers++;
        if (targets.some((cls) => hasMethod(cls, accessor.rawName || accessor.name))) { invokersResolved++; planApplies = true; }
      } else {
        accessors++;
        if (targets.some((cls) => hasField(cls, accessor.field || accessor.name))) { accessorsResolved++; planApplies = true; }
      }
    }
    if (planApplies) { plansApplying++; }
  }
  const row = {
    mod: file,
    bytes: statSync(source).size,
    plans: plans.length,
    plansApplying,
    ownPlans,
    injections,
    injectionsNamed,
    accessors,
    accessorsResolved,
    invokers,
    invokersResolved,
    kinds,
    missingTop: Array.from(missing.values()).sort((a, b) => b.count - a.count).slice(0, 30)
  };
  report.mods.push(row);
  rows.push(row);
}

const pad = (text, width) => String(text).padEnd(width);
console.log(`symbol map: ${report.named} named methods in ${Object.keys(anchors).length} classes (${symbolsFile})`);
console.log(pad("mod", 40) + pad("plans ok", 10) + pad("injections", 12) + pad("accessors", 12) + "invokers");
for (const row of rows) {
  const name = row.mod.replace(root + "/", "");
  console.log(pad(name, 40) + pad(`${row.plansApplying}/${row.plans}`, 10) + (row.ownPlans ? "" : "".padEnd(0)) +
    pad(`${row.injectionsNamed}/${row.injections}`, 12) +
    pad(`${row.accessorsResolved}/${row.accessors}`, 12) +
    `${row.invokersResolved}/${row.invokers}`);
  const kindText = Object.entries(row.kinds)
    .filter(([, counts]) => counts.total)
    .map(([kind, counts]) => `${kind} ${counts.targetNamed}/${counts.total}` + (counts.withCallee ? ` (callee ${counts.calleeNamed}+${counts.calleeViaSite || 0}site/${counts.withCallee})` : ""))
    .join(", ");
  console.log("    " + kindText);
  if (row.missingTop.length) {
    console.log("    unnamed targets: " + row.missingTop.slice(0, 5).map((entry) => `${entry.where}×${entry.count}`).join(", ") +
      (row.missingTop.length > 5 ? ` … +${row.missingTop.length - 5} more` : ""));
  }
}
if (outFile) { writeFileSync(resolve(outFile), JSON.stringify(report, null, 1) + "\n"); console.log("wrote " + outFile); }
// The runtime installs timers in the fake window; leaving them running would keep node alive forever.
process.exit(0);
