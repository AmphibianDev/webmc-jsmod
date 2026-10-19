#!/usr/bin/env node
/* Align compiled functions with Java methods *inside each class*, using class membership as the
 * constraint.
 *
 *     node tools/align-classes.mjs --symbols client/1.21.11-internals/symbols.json \
 *                                  --out client/1.21.11-internals/symbols.json
 *
 * Why this pass exists: the global string alignment names 3,271 functions, and 1,006 more are
 * refused as ambiguous and 17,017 as weak (no distinctive literal). But a method belongs to a class,
 * and the compiled build says which class a function belongs to *if you ask its field accesses*:
 *
 *   * each class registration (`Co([ctor, "Name", packageIndex, …])`) names a constructor symbol;
 *   * a constructor initialises the class's fields (`a.jmy=null; a.jmz=null; …`), and TeaVM's field
 *     tokens are almost always unique to one class (14,721 of 15,809);
 *   * so a function that touches `a.jmy` is a method of that class (Minecraft's own `tick` touches
 *     22 of the 25 fields its constructor sets).
 *
 * With functions bucketed by class, matching a Java method to a function inside one class needs far
 * less evidence than a global match: a shared literal, a shared already-named callee, and arity are
 * enough, and a class with exactly one unnamed method and one unnamed function of the same arity is
 * a match on its own — which is how most accessors and small overrides get named.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { readClient, findEmbedded, readStream } from "./lib/client-bundle.mjs";
import {
  readClientMappings, javaFingerprints, jsFingerprints, stringPool, readZip
} from "./align-methods.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));
const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const at = args.indexOf("--" + name);
  return at >= 0 && args[at + 1] && !args[at + 1].startsWith("--") ? args[at + 1] : fallback;
};
const jsDir = resolve(flag("js", join(root, "client", "1.21.11")));
const jarPath = resolve(flag("jar", join(root, "..", "webmc-port", "work", "client", "1.21.11-j17.jar")));
const mappingsDir = resolve(flag("mappings", join(root, "converter", "mappings", "1.21.11")));
const symbolsFile = resolve(flag("symbols", join(root, "client", "1.21.11-internals", "symbols.json")));
const outFile = resolve(flag("out", symbolsFile));
const wantedFile = flag("wanted", null);
const verbose = args.includes("--verbose");

/* ------------------------------------------------------------------ the compiled side --------- */
console.log("reading " + jsDir);
const { html } = readClient(jsDir);
const bounds = findEmbedded(html);
const text = readStream(bounds.object, "classes").bytes.toString("utf8");
const pool = stringPool(text);
const js = jsFingerprints(text, pool);
console.log(`  ${js.assignments} assignments, ${js.stringsBySym.size} fingerprinted functions`);

/** Assignment regions: one per `A.<sym>=`, used to attribute a property access to a function. */
const offsets = js.offsets;
const ats = offsets.map((entry) => entry.at);
const offsetBySym = new Map();
for (const entry of offsets) { if (!offsetBySym.has(entry.sym)) { offsetBySym.set(entry.sym, entry.at); } }
function ownerOf(offset) {
  let low = 0, high = ats.length - 1, found = -1;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (ats[mid] <= offset) { found = mid; low = mid + 1; } else { high = mid - 1; }
  }
  return found >= 0 ? offsets[found].sym : null;
}

/* ------------------------------------------------------------------ classes -------------------- */
/** Every class registration entry: `Co([ctor,"Name",packageIndex,parent,flags,…])`. */
function classTuples(source) {
  const tuples = new Map();      // ctor symbol -> simple name
  const slots = new Map();       // ctor symbol -> [{ slot, fn }]
  const entryRe = /(?:A\.)?([A-Za-z0-9_$]+),"([A-Za-z0-9_$]+)",(-?\d+),/g;
  const callRe = /\bCo\(/g;
  let call;
  while ((call = callRe.exec(source)) !== null) {
    const start = source.indexOf("[", call.index);
    if (start < 0) { continue; }
    let i = start, depth = 0, inString = false, escaped = false;
    for (; i < source.length; i++) {
      const c = source[i];
      if (inString) {
        if (escaped) { escaped = false; }
        else if (c === "\\") { escaped = true; }
        else if (c === '"') { inString = false; }
        continue;
      }
      if (c === '"') { inString = true; }
      else if (c === "[") { depth++; }
      else if (c === "]") { depth--; if (depth === 0) { break; } }
    }
    const slice = source.slice(start, i + 1);
    entryRe.lastIndex = 0;
    const found = [];
    let entry;
    while ((entry = entryRe.exec(slice)) !== null) {
      const ctor = entry[1];
      const name = entry[2];
      const packageIndex = Number(entry[3]);
      // Package-table rows look like `1,"it",-1`; class rows have a parent symbol or 0 next.
      const rest = slice.slice(entry.index + entry[0].length, entry.index + entry[0].length + 12);
      if (packageIndex < 0 || /^\s*-/.test(rest)) { continue; }
      found.push(entry);
      if (!tuples.has(ctor)) { tuples.set(ctor, name); }
    }
    // Each class entry owns the text up to the next one: that is where its member table lives.
    for (let index = 0; index < found.length; index++) {
      const from = found[index].index;
      const to = index + 1 < found.length ? found[index + 1].index : slice.length;
      const body = slice.slice(from, to);
      const pairs = [];
      const pairRe = /"([A-Za-z0-9_$]+)",\s*(?:(?:L|K|V|Bg|Bo|Cm2)\(A\.([A-Za-z0-9_$]+)\)|function\([^)]*\)\s*\{\s*return\s+A\.([A-Za-z0-9_$]+)\()/g;
      let pair;
      while ((pair = pairRe.exec(body)) !== null) {
        const fn = pair[2] || pair[3];
        if (fn) { pairs.push({ slot: pair[1], fn }); }
      }
      if (pairs.length && !slots.has(found[index][1])) { slots.set(found[index][1], pairs); }
    }
  }
  return { tuples, slots };
}
const parsed = classTuples(text);
const tuples = parsed.tuples;
const slotsByCtor = parsed.slots;
let slotPairs = 0;
slotsByCtor.forEach((pairs) => { slotPairs += pairs.length; });
console.log(`  ${tuples.size} class constructors, ${slotPairs} virtual-slot entries`);

/** Constructor bodies -> the class's field tokens. */
const BLOCKED = new Set(["length", "name", "prototype", "call", "apply", "constructor", "data", "value", "index", "size", "push", "pop"]);
function bodyOf(sym) {
  // The assignment index is already built: scanning from 0 for every class was O(n²) and turned a
  // one-second pass into a thirteen-minute one.
  const at = offsetBySym.has(sym) ? offsetBySym.get(sym) : text.indexOf("A." + sym + "=");
  if (at < 0) { return null; }
  const start = text.indexOf("{", at);
  if (start < 0) { return null; }
  let i = start, depth = 0, inString = false, escaped = false;
  for (; i < text.length; i++) {
    const c = text[i];
    if (inString) {
      if (escaped) { escaped = false; }
      else if (c === "\\") { escaped = true; }
      else if (c === '"') { inString = false; }
      continue;
    }
    if (c === '"') { inString = true; }
    else if (c === "{") { depth++; }
    else if (c === "}") { depth--; if (depth === 0) { break; } }
  }
  return text.slice(start, i + 1);
}
const fieldsByCtor = new Map();          // ctor -> Set(token)
const fieldOrderByCtor = new Map();      // ctor -> [{ token, kind }] in initialisation order
function kindOfInitialiser(value) {
  const text = String(value).trim();
  if (/^null$/.test(text)) { return "object"; }
  if (/^!1$/.test(text)) { return "boolean"; }
  if (/^!0$/.test(text)) { return "boolean"; }
  if (/^""$|^''$/.test(text)) { return "string"; }
  if (/^-?\d+n$/.test(text)) { return "long"; }
  if (/^-?\d+\.\d|^-?\d+[eE]/.test(text)) { return "double"; }
  if (/^-?\d+$/.test(text)) { return "int"; }
  return "object";
}
for (const ctor of tuples.keys()) {
  const body = bodyOf(ctor);
  if (!body) { continue; }
  const aliasMatch = /\blet\s+([A-Za-z_$][\w$]*)\s*=\s*this/.exec(body);
  const alias = aliasMatch ? aliasMatch[1] : null;
  const fields = new Set();
  const ordered = [];
  const seen = new Set();
  const re = alias ? new RegExp("\\b" + alias + "\\.([A-Za-z0-9_$]{2,})\\s*=\\s*([^;]+);", "g") : /\b[a-zA-Z_$][\w$]*\.([A-Za-z0-9_$]{2,})\s*=\s*([^;]+);/g;
  let match;
  while ((match = re.exec(body)) !== null) {
    if (BLOCKED.has(match[1]) || seen.has(match[1])) { continue; }
    seen.add(match[1]);
    fields.add(match[1]);
    ordered.push({ token: match[1], kind: kindOfInitialiser(match[2]) });
  }
  if (fields.size) {
    fieldsByCtor.set(ctor, fields);
    fieldOrderByCtor.set(ctor, ordered);
  }
}
const fieldOwner = new Map();      // field token -> Map(ctor -> 1)
for (const [ctor, fields] of fieldsByCtor) {
  for (const field of fields) {
    let owners = fieldOwner.get(field);
    if (!owners) { owners = new Map(); fieldOwner.set(field, owners); }
    owners.set(ctor, 1);
  }
}
let uniqueFields = 0;
fieldOwner.forEach((owners) => { if (owners.size === 1) { uniqueFields++; } });
console.log(`  ${fieldOwner.size} field tokens (${uniqueFields} owned by exactly one class)`);

/** Bucket every function by the classes whose fields it touches. */
const propertyRe = /\.([A-Za-z0-9_$]{2,})\b/g;
const votes = new Map();          // ctor -> Map(fnSym -> votes)
const fieldTokensBySym = new Map();   // fnSym -> Set(token)
let propertyHits = 0;
let match;
while ((match = propertyRe.exec(text)) !== null) {
  const field = match[1];
  const owners = fieldOwner.get(field);
  if (!owners) { continue; }
  const sym = ownerOf(match.index);
  if (!sym) { continue; }
  propertyHits++;
  {
    let set = fieldTokensBySym.get(sym);
    if (!set) { set = new Set(); fieldTokensBySym.set(sym, set); }
    set.add(field);
  }
  owners.forEach((_, ctor) => {
    let table = votes.get(ctor);
    if (!table) { table = new Map(); votes.set(ctor, table); }
    table.set(sym, (table.get(sym) || 0) + 1);
  });
}
console.log(`  ${propertyHits} field accesses attributed to functions`);
const bucket = new Map();         // ctor -> Map(fnSym -> share of its accesses)
const functionClass = new Map();  // fnSym -> Map(ctor -> votes)
votes.forEach((table, ctor) => {
  table.forEach((count, sym) => {
    let entry = functionClass.get(sym);
    if (!entry) { entry = new Map(); functionClass.set(sym, entry); }
    entry.set(ctor, count);
  });
});
functionClass.forEach((entry, sym) => {
  const ranked = Array.from(entry.entries()).sort((a, b) => b[1] - a[1]);
  // A function can touch inherited fields; keep the best two classes so the alignment can decide.
  for (const [ctor, count] of ranked.slice(0, 2)) {
    let table = bucket.get(ctor);
    if (!table) { table = new Map(); bucket.set(ctor, table); }
    table.set(sym, count);
  }
});
console.log(`  ${functionClass.size} functions placed in ${bucket.size} classes`);

/* ------------------------------------------------------------------ the Java side -------------- */
console.log("java: " + jarPath);
const mappings = readClientMappings(mappingsDir);
const java = javaFingerprints(readFileSync(jarPath), mappings);
console.log(`  ${java.methods.length} methods with string literals`);

const obfForSimple = new Map();
for (const [obf, info] of java.classFieldIndex) { if (!obfForSimple.has(info.simpleClass)) { obfForSimple.set(info.simpleClass, obf); } }
const wanted = wantedFile && existsSync(resolve(wantedFile))
  ? (JSON.parse(readFileSync(resolve(wantedFile), "utf8")).wanted || [])
  : [];
const wantedKeys = new Set(wanted.map((entry) => (entry.className || "").split("/").pop() + "::" + entry.method));


/** Map a class's Java fields to its compiled field tokens: both lists are walked in order, matched
 * where the types agree. The order is not guaranteed identical, so this is a longest-common-
 * subsequence over kinds — right far more often than not, and it only ever *adds* evidence. */
function alignFields(javaFields, jsFields) {
  const kindOf = (descriptor) => {
    if (!descriptor) { return "object"; }
    if (descriptor === "Z") { return "boolean"; }
    if (descriptor === "I" || descriptor === "S" || descriptor === "B" || descriptor === "C") { return "int"; }
    if (descriptor === "J") { return "long"; }
    if (descriptor === "D") { return "double"; }
    if (descriptor === "F") { return "double"; }
    if (descriptor === "Ljava/lang/String;") { return "string"; }
    return "object";
  };
  const a = javaFields.map((field) => ({ field, kind: kindOf(field.descriptor) }));
  const b = jsFields.map((entry) => ({ entry, kind: entry.kind }));
  // LCS table over kinds; ties prefer the earliest pair, which keeps the order stable.
  const n = a.length, m = b.length;
  const table = Array.from({ length: n + 1 }, () => new Int16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      table[i][j] = a[i].kind === b[j].kind
        ? table[i + 1][j + 1] + 1
        : Math.max(table[i + 1][j], table[i][j + 1]);
    }
  }
  const tokenByField = new Map();
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i].kind === b[j].kind) { tokenByField.set(a[i].field.name, b[j].entry.token); i++; j++; }
    else if (table[i + 1][j] >= table[i][j + 1]) { i++; }
    else { j++; }
  }
  return tokenByField;
}

/* ------------------------------------------------------------------ name registry -------------- *
 * Classes TeaVM never needs as objects (a static utility class, or one whose metadata was dropped)
 * have no registration entry and therefore no constructor to read fields from. But if even one of
 * their methods is known — and a lambda class in the build names them — the fields that method
 * touches are *their* fields too, and every function touching those fields is another method of the
 * same class. That is enough to enter the per-class alignment for them.
 */
function buildNameRegistry() {
  const registry = new Map();          // simpleName -> Map(fnSym -> votes)
  const add = (name, members) => {
    if (!name || !members) { return; }
    let table = registry.get(name);
    if (!table) { table = new Map(); registry.set(name, table); }
    members.forEach((votes, sym) => { table.set(sym, (table.get(sym) || 0) + votes); });
  };
  for (const [ctor, name] of tuples) { add(name, bucket.get(ctor)); }
  return registry;
}


// A virtual slot name is global per Java method signature (`q` is `toString` wherever it appears),
// so a slot whose function is already named teaches the name for every other class that has it.
const symbols = existsSync(symbolsFile) ? JSON.parse(readFileSync(symbolsFile, "utf8")) : { anchors: {} };
const merged = symbols.anchors || {};
const stats = { matched: 0, byLiteral: 0, byField: 0, byCallee: 0, bySoleCandidate: 0, wantedMatches: 0, bySlot: 0, byCaller: 0 };
const jsArity = js.arity;
const jsCallees = js.calleesBySym;

function fnOwnerTable() {
  const map = new Map();
  for (const [cls, methods] of Object.entries(merged)) {
    for (const [method, entry] of Object.entries(methods)) {
      if (entry && entry.fn) { map.set(entry.fn, { cls, method }); }
    }
  }
  return map;
}
function learnSlots() {
  const known = fnOwnerTable();
  const names = new Map();       // slot -> Map(name -> count)
  for (const pairs of slotsByCtor.values()) {
    for (const pair of pairs) {
      const owner = known.get(pair.fn);
      if (!owner) { continue; }
      let tally = names.get(pair.slot);
      if (!tally) { tally = new Map(); names.set(pair.slot, tally); }
      tally.set(owner.method, (tally.get(owner.method) || 0) + 1);
    }
  }
  const resolved = new Map();
  names.forEach((tally, slot) => {
    const ranked = Array.from(tally.entries()).sort((a, b) => b[1] - a[1]);
    const total = ranked.reduce((sum, [, count]) => sum + count, 0);
    if (ranked.length && ranked[0][1] / total >= 0.8) { resolved.set(slot, ranked[0][0]); }
  });
  return resolved;
}

// Exact class membership: a virtual-slot entry says this function is this class's method.
// Only real functions qualify: a slot can also point at a static field or a class factory, and the
// runtime would refuse those anyway (this is why the map said 218 injections while the client
// applied 24 — the entries existed but there was nothing to wrap).
let placedBySlot = 0;
for (const [ctor, pairs] of slotsByCtor) {
  for (const pair of pairs) {
    if (js.functionSymbols && !js.functionSymbols.has(pair.fn)) { continue; }
    if (!functionClass.has(pair.fn)) { functionClass.set(pair.fn, new Map()); }
    functionClass.get(pair.fn).set(ctor, (functionClass.get(pair.fn).get(ctor) || 0) + 3);
    let table = bucket.get(ctor);
    if (!table) { table = new Map(); bucket.set(ctor, table); }
    if (!table.has(pair.fn)) { table.set(pair.fn, 3); placedBySlot++; }
  }
}
console.log(`  ${placedBySlot} functions placed by virtual-slot tables`);

for (let pass = 0; pass < 3; pass++) {
  const slotNames = learnSlots();
  let added = 0;
  for (const [ctor, pairs] of slotsByCtor) {
    const simpleName = tuples.get(ctor);
    if (!simpleName) { continue; }
    for (const pair of pairs) {
      const method = slotNames.get(pair.slot);
      if (!method) { continue; }
      if (js.functionSymbols && !js.functionSymbols.has(pair.fn)) { continue; }
      const table = merged[simpleName] || (merged[simpleName] = {});
      if (table[method]) { continue; }
      // The function must still be a function in the build (some slots point at class factories).
      table[method] = { fn: pair.fn, index: null, arity: jsArity.get(pair.fn) || null, why: `virtual slot ${pair.slot} = ${method}`, score: 1.2 };
      stats.bySlot++;
      stats.matched++;
      added++;
    }
  }
  console.log(`  slot pass ${pass + 1}: +${added} methods named (${learnSlots().size} slots learned)`);
  if (!added) { break; }
}

/* ------------------------------------------------------------------ caller pass ---------------- *
 * Static utility classes are never instantiated, so TeaVM emits no class metadata for them and no
 * constructor fields to bucket by — but their methods are still called from named methods. A named
 * caller's compiled body says which functions it calls; the Java side says which methods it calls;
 * when an unnamed callee has exactly one candidate function of the right arity, that is the method.
 */
function callerPass() {
  const byKey = new Map();
  const fnOf = new Map();
  const arityOf = new Map();
  for (const method of java.methods) {
    const key = method.obfClass + "." + method.obfMethod + method.descriptor;
    byKey.set(key, method);
    if (!method.namedMethod) { continue; }
    const table = merged[method.simpleClass];
    const entry = table && table[method.namedMethod];
    if (entry && entry.fn) { fnOf.set(key, entry.fn); arityOf.set(key, entry.arity); }
  }
  const callers = new Map();          // java key -> Set(caller java key)
  for (const method of java.methods) {
    const callerKey = method.obfClass + "." + method.obfMethod + method.descriptor;
    for (const call of method.calls) {
      const calleeKey = call.owner + "." + call.name + call.descriptor;
      if (!byKey.has(calleeKey)) { continue; }
      let set = callers.get(calleeKey);
      if (!set) { set = new Set(); callers.set(calleeKey, set); }
      set.add(callerKey);
    }
  }
  let named = 0;
  for (const [calleeKey, method] of byKey) {
    if (!method.namedMethod) { continue; }
    const table = merged[method.simpleClass];
    if (table && table[method.namedMethod]) { continue; }
    const expected = method.argCount + (method.isStatic ? 0 : 1);
    const candidates = new Map();
    for (const callerKey of callers.get(calleeKey) || []) {
      const callerFn = fnOf.get(callerKey);
      if (!callerFn) { continue; }
      for (const sym of jsCallees.get(callerFn) || []) {
        const arity = jsArity.get(sym);
        if (arity != null && arity !== expected && arity !== method.argCount) { continue; }
        candidates.set(sym, (candidates.get(sym) || 0) + 1);
      }
    }
    if (candidates.size !== 1) { continue; }
    const sym = candidates.keys().next().value;
    // The function must not already belong to another method anywhere in the map.
    let taken = false;
    for (const methodsOfClass of Object.values(merged)) {
      for (const entry of Object.values(methodsOfClass)) { if (entry.fn === sym) { taken = true; break; } }
      if (taken) { break; }
    }
    if (taken) { continue; }
    (merged[method.simpleClass] || (merged[method.simpleClass] = {}))[method.namedMethod] = {
      fn: sym, index: null, arity: jsArity.get(sym) || null,
      why: "called from a named method (only candidate of that arity)", score: 1.1
    };
    fnOf.set(calleeKey, sym);
    named++;
    stats.byCaller++;
  }
  return named;
}

/* ------------------------------------------------------------------ bootstrap ------------------ */
const registry = buildNameRegistry();
{
  // Classes with known methods but no registration entry.
  let bootstrapped = 0;
  const byToken = new Map();
  fieldTokensBySym.forEach((tokens, sym) => {
    tokens.forEach((token) => {
      let list = byToken.get(token);
      if (!list) { list = []; byToken.set(token, list); }
      list.push(sym);
    });
  });
  for (const [name, methods] of Object.entries(merged)) {
    if (registry.has(name)) { continue; }
    const seeds = Object.values(methods).map((entry) => entry.fn).filter((fn) => fn && fieldTokensBySym.has(fn));
    if (!seeds.length) { continue; }
    const tokens = new Set();
    for (const fn of seeds) { fieldTokensBySym.get(fn).forEach((token) => tokens.add(token)); }
    if (!tokens.size) { continue; }
    const members = new Map();
    for (const fn of seeds) { members.set(fn, 3); }
    for (const token of tokens) {
      for (const sym of byToken.get(token) || []) { members.set(sym, (members.get(sym) || 0) + 1); }
    }
    registry.set(name, members);
    bootstrapped++;
  }
  console.log(`  ${registry.size} classes in the registry (${bootstrapped} bootstrapped without metadata)`);
}

/* ------------------------------------------------------------------ alignment ------------------ */
for (let pass = 0; pass < 4; pass++) {
  const added = callerPass();
  console.log(`  caller pass ${pass + 1}: +${added} methods named`);
  if (!added) { break; }
}

function tableFor(simpleName) {
  if (!merged[simpleName]) { merged[simpleName] = {}; }
  return merged[simpleName];
}
function namedFnFor(simpleName, methodName) {
  const table = merged[simpleName];
  return table && table[methodName] ? table[methodName].fn : null;
}

/* Methods of each class that still need a function. */
const methodsByClass = new Map();
for (const method of java.methods) {
  if (!method.namedMethod) { continue; }
  const list = methodsByClass.get(method.simpleClass) || [];
  list.push(method);
  methodsByClass.set(method.simpleClass, list);
}
let round = 0;
let totalNew = 0;
while (round < 3) {
  round++;
  let newThisRound = 0;
  for (const [simpleName, members] of registry) {
    if (!members || !members.size) { continue; }
    const javaMethods = methodsByClass.get(simpleName);
    if (!javaMethods) { continue; }
    const ctor = [...tuples].find(([, name]) => name === simpleName)?.[0] || null;
    // Java field name -> compiled field token for this class.
    const javaFields = java.classFieldIndex.get(obfForSimple.get(simpleName)) || null;
    const jsFields = (ctor && fieldOrderByCtor.get(ctor)) || [];
    const tokenByField = javaFields && jsFields.length ? alignFields(javaFields.fields, jsFields) : new Map();
    const table = merged[simpleName] || {};
    const claimedFns = new Set(Object.values(table).map((entry) => entry.fn));

    const freeJava = javaMethods.filter((method) => !table[method.namedMethod]);
    const freeJs = Array.from(members.keys()).filter((sym) => !claimedFns.has(sym));
    if (!freeJava.length || !freeJs.length) { continue; }

    // Callees that are already named, both ways: a strong signal.
    const namedJavaToFn = new Map();
    for (const method of javaMethods) {
      const entry = table[method.namedMethod];
      if (entry) { namedJavaToFn.set(method.obfClass + "." + method.obfMethod + method.descriptor, entry.fn); }
    }

    const scored = [];
    for (const method of freeJava) {
      const literals = new Set(method.literals);
      // The fields this Java method touches on its own class, as compiled tokens.
      const fieldTokens = new Set();
      for (const access of method.accesses || []) {
        if (access.isStatic) { continue; }
        const token = tokenByField.get(access.name);
        if (token) { fieldTokens.add(token); }
      }
      const expectedArity = method.argCount + (method.isStatic ? 0 : 1);
      const calleeFns = new Set();
      for (const call of method.calls) {
        const key = call.owner + "." + call.name + call.descriptor;
        const fn = namedJavaToFn.get(key);
        if (fn) { calleeFns.add(fn); }
      }
      for (const sym of freeJs) {
        const arity = jsArity.get(sym);
        if (arity != null && arity !== expectedArity && arity !== method.argCount) { continue; }
        const jsLiterals = js.stringsBySym.get(sym) || new Set();
        let shared = 0;
        let union = jsLiterals.size + literals.size;
        for (const literal of literals) { if (jsLiterals.has(literal)) { shared++; } }
        union -= shared;
        const jaccard = union > 0 ? shared / union : 0;
        let sharedFields = 0;
        if (fieldTokens.size) {
          const touched = fieldTokensBySym.get(sym);
          if (touched) { for (const token of fieldTokens) { if (touched.has(token)) { sharedFields++; } } }
        }
        const callers = jsCallees.get(sym) || [];
        let calleeHits = 0;
        for (const callee of callers) { if (calleeFns.has(callee)) { calleeHits++; } }
        let score = jaccard * 2 + (arity != null && arity === expectedArity ? 1 : 0) + Math.min(calleeHits, 3) * 0.6
          + Math.min(sharedFields, 4) * 0.5;
        const isWanted = wantedKeys.has(simpleName + "::" + method.namedMethod);
        if (isWanted) { score += 0.4; }
        if (score <= 0) { continue; }
        scored.push({ method, sym, score, shared, calleeHits, sharedFields, isWanted });
      }
    }
    scored.sort((a, b) => b.score - a.score);

    // Accept greedily; a pair needs real evidence, not just one shared literal in a big class.
    for (const candidate of scored) {
      const { method, sym, score, shared, calleeHits, sharedFields, isWanted } = candidate;
      if (table[method.namedMethod]) { continue; }
      if (claimedFns.has(sym)) { continue; }
      const siblingsWithSameArity = freeJs.filter((other) => !claimedFns.has(other) &&
        (jsArity.get(other) == null || jsArity.get(other) === method.argCount + (method.isStatic ? 0 : 1)));
      const soleCandidate = freeJava.filter((other) => other.namedMethod === method.namedMethod).length === 1 &&
        siblingsWithSameArity.length === 1;
      // A wanted method with exactly one acceptable function in its class is that function, even
      // with no other evidence: the class is the constraint and the arity narrows it to one.
      const soleWanted = isWanted && siblingsWithSameArity.length === 1;
      const enough = shared >= 1 || calleeHits >= 1 || sharedFields >= 2 || isWanted ||
        (soleCandidate && score >= 1) || soleWanted;
      if (!enough || score < 1) { continue; }
      const why = soleWanted && !shared && !calleeHits && sharedFields < 2
        ? "same class, the only function with that arity (asked for by a converted mod)"
        : sharedFields >= 2
        ? `same class, ${sharedFields} field access(es) match`
        : shared >= 1
        ? `same class, ${shared} literal(s) shared`
        : calleeHits >= 1
          ? `same class, calls ${calleeHits} already-named method(s)`
          : isWanted
            ? "same class, asked for by a converted mod"
            : "same class, only candidate with this arity";
      table[method.namedMethod] = { fn: sym, index: null, arity: jsArity.get(sym) || null, why, score: Math.round(score * 100) / 100 };
      claimedFns.add(sym);
      newThisRound++;
      stats.matched++;
      if (sharedFields >= 2) { stats.byField++; } else if (shared >= 1) { stats.byLiteral++; } else if (calleeHits >= 1) { stats.byCallee++; } else if (isWanted) { stats.wantedMatches++; } else { stats.bySoleCandidate++; }
      if (verbose && newThisRound < 10) { console.log(`  ${simpleName}.${method.namedMethod} -> A.${sym} (${why})`); }
    }
  }
  totalNew += newThisRound;
  console.log(`  round ${round}: +${newThisRound} methods named`);
  if (!newThisRound) { break; }
}

const totalMethods = Object.keys(merged).reduce((total, cls) => total + Object.keys(merged[cls]).length, 0);
writeFileSync(outFile, JSON.stringify({
  note: (symbols.note || "") + " Plus tools/align-classes.mjs: per-class alignment using constructor field ownership.",
  client: symbols.client || {},
  stats: Object.assign({}, symbols.stats, {
    classesNamed: Object.keys(merged).length,
    methodsNamed: totalMethods,
    classAlignment: stats,
    classesWithFieldBuckets: bucket.size,
    fieldTokens: fieldOwner.size
  }),
  anchors: merged
}, null, 1) + "\n");
console.log(`wrote ${outFile}: ${totalMethods} methods in ${Object.keys(merged).length} classes (+${totalNew} from the per-class pass)`);
