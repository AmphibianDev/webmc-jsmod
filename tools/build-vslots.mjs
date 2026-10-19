#!/usr/bin/env node
/* The class tables' virtual-slot entries, turned into a resolution table.
 *
 *     node tools/build-vslots.mjs --out client/1.21.11-internals/vslots.json
 *
 * Every compiled class registers itself with a table of `[slot, function]` pairs — one per virtual
 * method it implements. A slot name is global for a method signature (`q` is `toString` wherever it
 * appears), which is what makes the table readable: pair each slot with the method names the symbol
 * map already knows for the functions it points at, take the consensus, and the slot names itself.
 *
 * With slot names known, the table answers the question a converted mod actually asks — "which
 * compiled function is `Camera.setPosition`?" — for a class and a method *without* needing either the
 * method or the class to have been named by the alignment passes. It costs nothing to build (the
 * bundle is the only input), it is exact when the slot is learned, and it is the largest remaining
 * source of reachable methods: 45,812 slot entries against 23,130 named methods.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { readClient, findEmbedded, readStream } from "./lib/client-bundle.mjs";
import { stringPool, jsFingerprints } from "./align-methods.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));
const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const at = args.indexOf("--" + name);
  return at >= 0 && args[at + 1] && !args[at + 1].startsWith("--") ? args[at + 1] : fallback;
};
const jsDir = resolve(flag("js", join(root, "client", "1.21.11")));
const symbolsFile = resolve(flag("symbols", join(root, "client", "1.21.11-internals", "symbols.json")));
const outFile = resolve(flag("out", join(root, "client", "1.21.11-internals", "vslots.json")));
const verbose = args.includes("--verbose");

console.log("reading " + jsDir);
const { html } = readClient(jsDir);
const bounds = findEmbedded(html);
const text = readStream(bounds.object, "classes").bytes.toString("utf8");
const pool = stringPool(text);
const js = jsFingerprints(text, pool);

/** The class registrations: `Co([ctor,"Name",packageIndex,…,[…,"slot",L(A.fn)…]])`. */
function classTables(source) {
  const rows = [];                        // { ctor, name, slots: [{ slot, fn }] }
  const callRe = /\bCo\(/g;
  let call;
  const entryRe = /(?:A\.)?([A-Za-z0-9_$]+),"([A-Za-z0-9_$]+)",(-?\d+),/g;
  while ((call = callRe.exec(source)) !== null) {
    const start = source.indexOf("[", call.index);
    if (start < 0) { continue; }
    let i = start, depth = 0, inString = false, escaped = false;
    for (; i < source.length; i++) {
      const c = source[i];
      if (inString) { if (escaped) { escaped = false; } else if (c === "\\") { escaped = true; } else if (c === '"') { inString = false; } continue; }
      if (c === '"') { inString = true; }
      else if (c === "[") { depth++; }
      else if (c === "]") { depth--; if (depth === 0) { break; } }
    }
    const slice = source.slice(start, i + 1);
    entryRe.lastIndex = 0;
    const found = [];
    let entry;
    while ((entry = entryRe.exec(slice)) !== null) {
      const rest = slice.slice(entry.index + entry[0].length, entry.index + entry[0].length + 12);
      if (Number(entry[3]) < 0 || /^\s*-/.test(rest)) { continue; }
      found.push(entry);
    }
    for (let index = 0; index < found.length; index++) {
      const from = found[index].index;
      const to = index + 1 < found.length ? found[index + 1].index : slice.length;
      const body = slice.slice(from, to);
      const slots = [];
      const pairRe = /"([A-Za-z0-9_$]+)",\s*(?:(?:L|K|V|Bg|Bo|Cm2)\(A\.([A-Za-z0-9_$]+)\)|function\([^)]*\)\s*\{\s*return\s+A\.([A-Za-z0-9_$]+)\()/g;
      let pair;
      while ((pair = pairRe.exec(body)) !== null) {
        const fn = pair[2] || pair[3];
        if (fn) { slots.push({ slot: pair[1], fn }); }
      }
      if (slots.length && !rows.some((row) => row.ctor === found[index][1])) {
        rows.push({ ctor: found[index][1], name: found[index][2], slots });
      }
    }
  }
  return rows;
}
const rows = classTables(text);
const slotEntries = rows.reduce((sum, row) => sum + row.slots.length, 0);
console.log(`  ${rows.length} classes with virtual tables, ${slotEntries} slot entries`);

const map = JSON.parse(readFileSync(symbolsFile, "utf8"));
const anchors = map.anchors || {};
const fnToMethod = new Map();              // compiled function -> the Java method it implements
for (const [simple, methods] of Object.entries(anchors)) {
  for (const [method, entry] of Object.entries(methods)) {
    if (entry && entry.fn) { fnToMethod.set(entry.fn, { simple, method, arity: entry.arity }); }
  }
}
console.log(`  ${fnToMethod.size} functions in the symbol map`);

/* Learn what each slot means: the function it points at is usually already named. */
const votes = new Map();                   // slot -> Map(methodName -> count)
for (const row of rows) {
  for (const entry of row.slots) {
    const known = fnToMethod.get(entry.fn);
    if (!known) { continue; }
    let tally = votes.get(entry.slot);
    if (!tally) { tally = new Map(); votes.set(entry.slot, tally); }
    tally.set(known.method, (tally.get(known.method) || 0) + 1);
  }
}
const slotName = new Map();
for (const [slot, tally] of votes) {
  const ranked = Array.from(tally.entries()).sort((a, b) => b[1] - a[1]);
  const total = ranked.reduce((sum, [, count]) => sum + count, 0);
  if (ranked.length && ranked[0][1] >= 2 && ranked[0][1] / total >= 0.8) { slotName.set(slot, ranked[0][0]); }
}
console.log(`  ${slotName.size} slots named by consensus (of ${votes.size} slots seen)`);

/* Resolve: class + method name -> function, from the class's own table. */
const table = {};
let added = 0, already = 0, conflicts = 0;
for (const row of rows) {
  const byMethod = new Map();
  for (const entry of row.slots) {
    const method = slotName.get(entry.slot);
    if (!method) { continue; }
    const known = fnToMethod.get(entry.fn);
    const arity = js.arity.get(entry.fn);
    // Two slots in one class can mean the same method name (overloads). The symbol map's own answer
    // wins where it exists; otherwise a slot is only taken when it is the only candidate.
    if (byMethod.has(method)) { conflicts++; continue; }
    byMethod.set(method, { slot: entry.slot, fn: entry.fn, arity: arity == null ? null : arity, known: !!(known && known.simple === row.name && known.method === method) });
  }
  const out = {};
  for (const [method, info] of byMethod) {
    const existing = (anchors[row.name] || {})[method];
    if (existing && existing.fn) {
      // A disagreement would be a bug in the alignment: report it, and keep the map's answer.
      if (existing.fn !== info.fn) { conflicts++; }
      already++;
      continue;
    }
    if (!info.known && !fnIsFunction(info.fn)) { continue; }
    out[method] = { fn: info.fn, slot: info.slot, arity: info.arity };
    added++;
  }
  if (Object.keys(out).length) { table[row.name] = out; }
}
function fnIsFunction(fn) {
  // A slot can point at a class factory or a static field: those have no parameters in the compiled
  // source, and the runtime would refuse them anyway. Arity is the cheap test.
  const arity = js.arity.get(fn);
  return arity != null && arity >= 1;
}
console.log(`  ${added} class+method pairs resolved that the symbol map does not have (${already} already known, ${conflicts} conflicts)`);

writeFileSync(outFile, JSON.stringify({
  note: "Built by tools/build-vslots.mjs from the compiled class tables' virtual-slot entries, with slot names learned from the symbol map. `fn` is the compiled function that implements `Class.method`.",
  stats: { classes: Object.keys(table).length, methods: added, slotEntries, slotsNamed: slotName.size, already, conflicts },
  vslots: table
}, null, 1) + "\n");
console.log(`wrote ${outFile}: ${added} methods in ${Object.keys(table).length} classes`);
if (verbose) {
  const first = Object.entries(table).slice(0, 5);
  for (const [cls, methods] of first) { console.log(`  ${cls}: ${Object.keys(methods).slice(0, 8).join(", ")}`); }
}
