#!/usr/bin/env node
/* Where each call inside a method actually is, in the compiled client.
 *
 *     node tools/build-sites.mjs --out client/1.21.11-internals/sites.json
 *
 * A mixin says `@Inject(at = @At(value = "INVOKE", target = "Lnet/minecraft/…;foo()V"))`: a call
 * *inside* a method, not the method. The runtime can stand in front of a function, but it has to know
 * which function — and naming the callee is only half of it: 341 of Meteor's injections are at a call
 * site, and most of those callees are ordinary methods no naming pass has reached.
 *
 * Both sides do know the *order* of the calls, though. The Java bytecode has its INVOKE instructions in
 * order; the compiled function has its `A.<fn>(…)` calls in order. Aligning the two sequences — by
 * arity, with already-paired calls as anchors — gives each call site its compiled function *without*
 * needing the callee named at all, and it makes the site exact instead of approximate: the ordinal of
 * the call is known, so a redirect lands on the call the mod named and not on every call to that
 * function inside the method.
 *
 * The output is small because it holds only what the alignment is sure about, and it is written next
 * to symbols.json as `sites.json`.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { readClient, findEmbedded, readStream } from "./lib/client-bundle.mjs";
import { readClientMappings, javaFingerprints, jsFingerprints, stringPool, countArgs } from "./align-methods.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));
const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const at = args.indexOf("--" + name);
  return at >= 0 && args[at + 1] && !args[at + 1].startsWith("--") ? args[at + 1] : fallback;
};
const jarPath = resolve(flag("jar", join(root, "..", "webmc-port", "work", "client", "1.21.11-j17.jar")));
const mappingsDir = resolve(flag("mappings", join(root, "converter", "mappings", "1.21.11")));
const jsDir = resolve(flag("js", join(root, "client", "1.21.11")));
const symbolsFile = resolve(flag("symbols", join(root, "client", "1.21.11-internals", "symbols.json")));
const outFile = resolve(flag("out", join(root, "client", "1.21.11-internals", "sites.json")));
const slotOutFile = resolve(flag("slots-out", join(root, "client", "1.21.11-internals", "slots.json")));
const verbose = args.includes("--verbose");

console.log("mappings: " + mappingsDir);
const mappings = readClientMappings(mappingsDir);

console.log("java: " + jarPath);
const java = javaFingerprints(readFileSync(jarPath), mappings);
console.log(`  ${java.methods.length} java methods`);

console.log("javascript: " + jsDir);
const { html } = readClient(jsDir);
const bounds = findEmbedded(html);
const text = readStream(bounds.object, "classes").bytes.toString("utf8");
const pool = stringPool(text);
const js = jsFingerprints(text, pool);
console.log(`  ${js.assignments} assignments, ${js.calleesBySym.size} functions with calls`);

const map = JSON.parse(readFileSync(symbolsFile, "utf8"));
const anchors = map.anchors || {};

/** Every named Java method, by the key the runtime can compute from a plan. */
const javaByKey = new Map();
const namedFn = new Map();                  // classSimple::method (or with descriptor) -> symbol
for (const [simple, methods] of Object.entries(anchors)) {
  for (const [method, entry] of Object.entries(methods)) {
    if (!entry || !entry.fn) { continue; }
    namedFn.set(simple + "::" + method, entry.fn);
  }
}
for (const method of java.methods) {
  if (!method.namedMethod) { continue; }
  javaByKey.set(method.obfClass + "." + method.obfMethod + method.descriptor, method);
}

/** Java INVOKEs of a method, in bytecode order, as the runtime's at-points describe them. */
function javaSites(method) {
  return (method.calls || []).map((call) => ({
    owner: call.owner,
    name: call.name,
    descriptor: call.descriptor,
    argCount: call.argCount + (call.isStatic ? 0 : 1),
    isStatic: call.isStatic
  }));
}

/** Every virtual-slot name the client's class tables use: `["q",L(A.fn)]`. A property call whose
 *  name is one of these is a virtual method call; any other `.name(` is something else. */
function slotNames(source) {
  const names = new Set();
  const pairRe = /"([A-Za-z0-9_$]{1,6})",\s*(?:(?:L|K|V|Bg|Bo|Cm2)\(A\.([A-Za-z0-9_$]+)\)|function\([^)]*\)\s*\{\s*return\s+A\.([A-Za-z0-9_$]+)\()/g;
  let match;
  while ((match = pairRe.exec(source)) !== null) { names.add(match[1]); }
  return names;
}
const SLOTS = slotNames(text);
console.log(`  ${SLOTS.size} virtual-slot names in the class tables`);

/** The class tables themselves: which class implements which slot with which function. */
function classSlots(source) {
  const rows = [];
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
      const pairs = [];
      const pairRe = /"([A-Za-z0-9_$]{1,6})",\s*(?:(?:L|K|V|Bg|Bo|Cm2)\(A\.([A-Za-z0-9_$]+)\)|function\([^)]*\)\s*\{\s*return\s+A\.([A-Za-z0-9_$]+)\()/g;
      let pair;
      while ((pair = pairRe.exec(body)) !== null) { pairs.push({ slot: pair[1], fn: pair[2] || pair[3] }); }
      if (pairs.length && !rows.some((row) => row.ctor === found[index][1])) { rows.push({ ctor: found[index][1], name: found[index][2], slots: pairs }); }
    }
  }
  return rows;
}
const slotsByClass = classSlots(text);
console.log(`  ${slotsByClass.length} classes with virtual tables`);

/** Compiled calls of a function, in textual order (which is the order TeaVM emitted them in). Direct
 *  calls are `A.<fn>(…)`, virtual ones are `<object>.<slot>(…)` — and both are calls the Java bytecode
 *  has an INVOKE for, so both belong in the sequence. Recognizing the virtual ones is what lets the
 *  alignment name a method that is only ever called through an object's table. */
function jsSites(sym) {
  const at = js.offsets.find((entry) => entry.sym === sym);
  if (!at) { return []; }
  const start = text.indexOf("{", at.at);
  if (start < 0) { return []; }
  let i = start, depth = 0, inString = false, escaped = false;
  for (; i < text.length; i++) {
    const c = text[i];
    if (inString) { if (escaped) { escaped = false; } else if (c === "\\") { escaped = true; } else if (c === '"') { inString = false; } continue; }
    if (c === '"') { inString = true; }
    else if (c === "{") { depth++; }
    else if (c === "}") { depth--; if (depth === 0) { break; } }
  }
  const body = text.slice(start, i + 1);
  const out = [];
  const callRe = /(?:\bA\.([A-Za-z0-9_$]+)|([A-Za-z0-9_$]+)\.([A-Za-z0-9_$]+))\s*\(/g;
  let match;
  while ((match = callRe.exec(body)) !== null) {
    if (match[1]) {
      const arity = js.arity.get(match[1]);
      out.push({ fn: match[1], arity: arity == null ? null : arity, kind: "direct" });
    } else if (SLOTS.has(match[3])) {
      out.push({ slot: match[3], arity: null, kind: "virtual" });
    }
  }
  return out;
}

/** Align the two sequences: a small LCS-style DP over "this Java call is that compiled call".
 *  A pair is allowed when the arities agree; already-paired calls score higher, because they are
 *  evidence, and a gap costs, so the alignment prefers to explain every Java call. */
function alignSites(a, b) {
  const n = a.length, m = b.length;
  if (!n || !m) { return null; }
  if (n > 60 || m > 90) { return null; }
  const known = (call, callee) => !!callee.fn && namedFn.get(String(call.owner).split("/").pop() + "::" + call.name) === callee.fn;
  const score = Array.from({ length: n + 1 }, () => new Float64Array(m + 1));
  const from = Array.from({ length: n + 1 }, () => new Int32Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      let best = Math.max(score[i + 1][j], score[i][j + 1]) - 0.35;
      let bestFrom = score[i + 1][j] >= score[i][j + 1] ? 1 : 2;
      const pair = (b[j].arity == null || a[i].argCount == null || b[j].arity === a[i].argCount || b[j].arity === a[i].argCount - 1)
        ? (known(a[i], b[j]) ? 3 : (b[j].kind === "virtual" ? 0.9 : 0.6))
        : -0.5;
      const withPair = score[i + 1][j + 1] + pair;
      if (withPair > best) { best = withPair; bestFrom = 3; }
      score[i][j] = best;
      from[i][j] = bestFrom;
    }
  }
  const pairs = [];
  const javaAt = new Int32Array(n).fill(-1);
  let i = 0, j = 0, matched = 0, anchored = 0;
  while (i < n && j < m) {
    const step = from[i][j];
    if (step === 3) { pairs.push({ javaIndex: i, jsIndex: j, java: a[i], js: b[j] }); javaAt[i] = j; if (known(a[i], b[j])) { anchored++; } matched++; i++; j++; }
    else if (step === 1) { i++; }
    else { j++; }
  }
  if (!matched) { return null; }
  return { pairs, javaAt, matched, anchored, total: n, jsTotal: m };
}

if (args.includes("--histogram")) {
  const hist = new Map();
  let equal = 0, aritySame = 0, counted = 0, javaCalls = 0, jsCalls = 0;
  for (const method of java.methods) {
    if (!method.namedMethod) { continue; }
    const targetFn = namedFn.get(method.simpleClass + "::" + method.namedMethod);
    if (!targetFn) { continue; }
    const a = javaSites(method), b = jsSites(targetFn);
    if (!a.length || !b.length) { continue; }
    counted++; javaCalls += a.length; jsCalls += b.length;
    if (a.length === b.length) { equal++; }
    const ka = a.map((x) => x.argCount).sort((x, y) => x - y).join(",");
    const kb = b.map((x) => x.arity).sort((x, y) => (x == null ? -1 : x) - (y == null ? -1 : y)).join(",");
    if (ka === kb) { aritySame++; }
    const key = Math.min(9, a.length) + "->" + Math.min(9, b.length);
    hist.set(key, (hist.get(key) || 0) + 1);
  }
  console.log(`histogram over ${counted} named methods with calls on both sides:`);
  console.log(`  java calls ${javaCalls}, compiled calls ${jsCalls} (ratio ${(jsCalls / javaCalls).toFixed(2)})`);
  console.log(`  same count: ${equal} (${(100 * equal / counted).toFixed(1)}%), same arity multiset: ${aritySame} (${(100 * aritySame / counted).toFixed(1)}%)`);
  const top = Array.from(hist.entries()).sort((x, y) => y[1] - x[1]).slice(0, 14);
  for (const [key, count] of top) { console.log("   " + key + ": " + count); }
  process.exit(0);
}

const sites = {};
const slotVotes = new Map();          // slot name -> Map("Owner::method" -> votes)
let methodsWritten = 0, sitesWritten = 0, exact = 0, anchoredTotal = 0, skipped = 0, considered = 0;
for (const method of java.methods) {
  if (!method.namedMethod) { continue; }
  const targetFn = namedFn.get(method.simpleClass + "::" + method.namedMethod);
  if (!targetFn) { continue; }
  const a = javaSites(method);
  if (!a.length) { continue; }
  const b = jsSites(targetFn);
  if (!b.length) { continue; }
  considered++;
  const aligned = alignSites(a, b);
  if (!aligned) { continue; }
  // TeaVM inlines small Java calls and adds its own (boxing, class initialisation), so the sequences
  // are not equal — but the *alignment has to survive being read backwards*, which is what catches
  // the dangerous case: two same-arity calls in a row that could be swapped without anything noticing.
  const reversed = alignSites(a.slice().reverse(), b.slice().reverse());
  const stable = reversed && aligned.pairs.every((pair) =>
    reversed.javaAt[aligned.total - 1 - pair.javaIndex] === aligned.jsTotal - 1 - pair.jsIndex);
  const explained = aligned.matched / aligned.total;
  if (!stable) { skipped++; continue; }
  // How much evidence does an alignment need? Three routes, in decreasing strength:
  //   * an already-paired call lines up (an anchor) and most Java calls are explained;
  //   * the two sequences have exactly the same length, and reading the alignment backwards gives the
  //     same answer — counts matching is strong on its own (TeaVM inlines calls, so it does not
  //     happen by accident);
  //   * every Java call is explained and the compiled side has no extra call.
  const anchored = aligned.anchored >= (aligned.total > 40 ? 2 : 1) && explained >= 0.7;
  const exactCount = aligned.jsTotal === aligned.total;
  const fullyExplained = explained >= 0.95 && aligned.jsTotal <= aligned.total;
  if (!anchored && !exactCount && !fullyExplained) { skipped++; continue; }
  if (aligned.jsTotal > aligned.total * 3 + 6) { skipped++; continue; }
  const list = [];
  for (const pair of aligned.pairs) {
    const calleeName = (pair.java.owner + "." + pair.java.name).replace(/\//g, ".");
    if (pair.js.fn) {
      list.push({ callee: calleeName, descriptor: pair.java.descriptor, fn: pair.js.fn, args: pair.java.argCount });
    } else if (pair.js.slot) {
      // A virtual call: the token is a slot name, which is exactly what the class tables key on. That
      // teaches `slot -> Java method`, and the pair is usable as a site too.
      list.push({ callee: calleeName, descriptor: pair.java.descriptor, slot: pair.js.slot, args: pair.java.argCount });
      const key = pair.js.slot;
      const tally = slotVotes.get(key) || new Map();
      const vote = String(pair.java.owner).split("/").pop() + "::" + pair.java.name;
      tally.set(vote, (tally.get(vote) || 0) + 1);
      slotVotes.set(key, tally);
    }
  }
  sites[method.simpleClass + "::" + method.namedMethod] = list;
  methodsWritten++;
  sitesWritten += list.length;
  anchoredTotal += aligned.anchored;
  exact++;
  if (verbose && methodsWritten < 10) { console.log(`  ${method.simpleClass}.${method.namedMethod}: ${list.length} call site(s)`); }
}

/* The slot dictionary: which Java method a virtual-slot name stands for, learned from the aligned
 * call sites. One vote is not evidence; two that agree are. */
const slotMethod = {};
for (const [slot, tally] of slotVotes) {
  const ranked = Array.from(tally.entries()).sort((a, b) => b[1] - a[1]);
  const total = ranked.reduce((sum, [, count]) => sum + count, 0);
  if (!ranked.length) { continue; }
  if (ranked.length === 1 && ranked[0][1] >= 2) { slotMethod[slot] = { where: ranked[0][0], votes: ranked[0][1], total }; }
  else if (ranked[0][1] / total >= 0.75 && ranked[0][1] >= 2) { slotMethod[slot] = { where: ranked[0][0], votes: ranked[0][1], total }; }
}
console.log(`slot dictionary: ${Object.keys(slotMethod).length} slot names learned from ${slotVotes.size} seen`);

/* And the resolution table: for every class the client registers, the compiled function of each of
 * its methods whose slot is now known. This is what `resolve(class, method)` consults when the symbol
 * map has nothing — the members mods actually name, in classes no naming pass reached. */
const resolved = {};
let resolvedCount = 0, alreadyNamed = 0;
for (const row of slotsByClass) {
  for (const entry of row.slots) {
    const learned = slotMethod[entry.slot];
    if (!learned) { continue; }
    const [owner, method] = learned.where.split("::");
    if (owner !== row.name) { continue; }
    const existing = (anchors[row.name] || {})[method];
    if (existing && existing.fn) { alreadyNamed++; continue; }
    resolved[row.name] = resolved[row.name] || {};
    if (resolved[row.name][method]) { continue; }
    resolved[row.name][method] = { fn: entry.fn, slot: entry.slot, why: `virtual slot ${entry.slot} learned from ${learned.votes}/${learned.total} call site(s)` };
    resolvedCount++;
  }
}
console.log(`slot resolution: ${resolvedCount} class+method pairs the symbol map does not have (${alreadyNamed} it does)`);
writeFileSync(slotOutFile, JSON.stringify({
  note: "Built by tools/build-sites.mjs: `slots` maps a virtual-slot name to the Java method it stands for (learned from aligned call sites); `methods` maps Class.method to the compiled function, for members the symbol map does not name.",
  stats: { slotsLearned: Object.keys(slotMethod).length, methods: resolvedCount, alreadyNamed },
  slots: slotMethod,
  methods: resolved
}, null, 1) + "\n");
console.log(`wrote ${slotOutFile}: ${resolvedCount} methods in ${Object.keys(resolved).length} classes`);

writeFileSync(outFile, JSON.stringify({
  note: "Built by tools/build-sites.mjs: the compiled function of each call inside a named Java method, by aligning the Java INVOKE order with the compiled call order. `callee` is the Java name a mixin writes, `fn` is the compiled function it is.",
  client: { bytes: text.length },
  stats: { methods: methodsWritten, sites: sitesWritten, anchored: anchoredTotal, considered, skipped },
  sites
}, null, 1) + "\n");
console.log(`wrote ${outFile}: call sites for ${methodsWritten} of ${considered} named methods (${sitesWritten} sites, ${anchoredTotal} anchor-confirmed, ${skipped} alignments refused)`);
