#!/usr/bin/env node
/* Align the compiled client's functions with the Java methods they came from — by fingerprint.
 *
 *     node tools/align-methods.mjs --jar <client.jar> --mappings converter/mappings/1.21.11 \
 *                                  --js client/1.21.11 --out /tmp/aligned.json
 *
 * Why this exists: TeaVM's JavaScript build carries no method-name table. It emits one assignment per
 * method (`A.IkAb=…`), a direct call per call site, and names nothing — except lambda classes, which
 * tools/build-symbols.mjs turns into 762 exact anchors. A converted mod's mixin wants to patch
 * `Minecraft.tick`, so the anchors alone are 2% of what it needs.
 *
 * The alignment uses what both sides *do* keep: the string constants each method uses. The Java
 * class files have them in the constant pool; the compiled functions have the same literals inline.
 * Match a compiled function to a Java method when
 *
 *   * the rarest literal in the function occurs in only a handful of Java methods,
 *   * the function's other literals are a subset of the method's, and
 *   * the arity agrees (TeaVM emits `this` as the first parameter of instance methods).
 *
 * Every match records the evidence (`why`) so a wrong one can be argued with, and the anchors always
 * win over a fingerprint.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { inflateRawSync } from "node:zlib";
import { readClient, findEmbedded, readStream } from "./lib/client-bundle.mjs";
import { parseClass, OPCODE_TABLE } from "../converter/lib/classfile.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));
const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const at = args.indexOf("--" + name);
  return at >= 0 && args[at + 1] && !args[at + 1].startsWith("--") ? args[at + 1] : fallback;
};
export const jarPath = resolve(flag("jar", join(root, "..", "webmc-port", "work", "client", "1.21.11-j17.jar")));
const mappingsDir = resolve(flag("mappings", join(root, "converter", "mappings", "1.21.11")));
const jsDir = resolve(flag("js", join(root, "client", "1.21.11")));
const anchorsFile = resolve(flag("anchors", join(root, "client", "1.21.11-internals", "symbols.json")));
const outFile = resolve(flag("out", join(root, "client", "1.21.11-internals", "symbols.json")));
const minLiteral = Number(flag("min-literal", 5));

/* ------------------------------------------------------------------ mappings ------------------- *
 * client.txt is the obfuscated -> named map: `net.minecraft.client.Minecraft -> fzu:` followed by
 * its members, one per line, in the class file's own order.
 */
export function readClientMappings(dir) {
  const byNamed = new Map();     // named (slashed) -> { obf, methods: Map<obfName, namedName> }
  const byObf = new Map();       // obf -> { named, methodNames: [], fields: [] }
  let current = null;
  for (const line of readFileSync(join(dir, "client.txt"), "utf8").split("\n")) {
    if (!line || line.startsWith("#")) { continue; }
    if (!line.startsWith(" ")) {
      const match = /^(\S+) -> (\S+):$/.exec(line);
      if (!match) { continue; }
      const named = match[1].replace(/\./g, "/");
      current = { obf: match[2], named, methodNames: [], namedMethods: new Map() };
      byNamed.set(named, current);
      byObf.set(current.obf, current);
      continue;
    }
    if (!current) { continue; }
    const method = /^\s+(?:(?:\d+):(?:\d+):)?(.+?)\s+([A-Za-z_$][\w$<>]*)\s*\(([^)]*)\)\s+->\s+(\S+)$/.exec(line);
    if (method) {
      current.methodNames.push({ obf: method[4], named: method[2], args: method[3] ? method[3].split(",").length : 0 });
      current.namedMethods.set(method[4], method[2]);
    }
  }
  return { byNamed, byObf };
}

/* ------------------------------------------------------------------ Java side ------------------ */
/** String literals a method's bytecode loads, without building instruction objects. */
export function literalsOf(code, pool) {
  const strings = [];
  let pc = 0;
  while (pc < code.length) {
    const op = code[pc];
    const info = OPCODE_TABLE[op];
    if (!info) { break; }
    let length = info.length;
    if (op === 0xaa) {
      let cursor = pc + 1; cursor += (4 - (cursor % 4)) % 4;
      const low = read32(code, cursor + 4), high = read32(code, cursor + 8);
      length = (cursor - pc) + 12 + (high - low + 1) * 4;
    } else if (op === 0xab) {
      let cursor = pc + 1; cursor += (4 - (cursor % 4)) % 4;
      const pairs = read32(code, cursor + 4);
      length = (cursor - pc) + 8 + pairs * 8;
    } else if (op === 0xc4) {
      length = code[pc + 1] === 0x84 ? 6 : 4;
    }
    if (length <= 0 || pc + length > code.length) { break; }
    if (op === 0x12 || op === 0x13) {
      const index = op === 0x12 ? code[pc + 1] : ((code[pc + 1] << 8) | code[pc + 2]);
      const entry = pool[index];
      if (entry && entry.tag === 8) {
        const literal = pool[entry.stringIndex] && pool[entry.stringIndex].value;
        if (literal && literal.length >= minLiteral && literal.length < 400) { strings.push(literal); }
      }
    }
    pc += length;
  }
  return strings;
}
export function classFields(info) {
  const list = [];
  for (const field of info.fields || []) {
    if (field.access & 0x0008) { continue; }         // instance fields only: constructors set those
    let cursor = 0;
    const parts = [];
    while (cursor < field.descriptor.length) {
      const inner = readType(field.descriptor, cursor);
      parts.push(inner.type);
      cursor = inner.next;
    }
    list.push({ name: field.name, descriptor: field.descriptor, kind: parts[0] });
  }
  return list;
}
function readType(text, at) {
  const c = text[at];
  if (c === "[") { const inner = readType(text, at + 1); return { type: inner.type + "[]", next: inner.next }; }
  if (c === "L") { const end = text.indexOf(";", at); return { type: text.slice(at + 1, end), next: end + 1 }; }
  return { type: c, next: at + 1 };
}

/** The field accesses of a method (getfield/putfield/getstatic/putstatic). */
export function fieldsOf(code, pool) {
  const out = [];
  let pc = 0;
  while (pc < code.length) {
    const op = code[pc];
    const info = OPCODE_TABLE[op];
    if (!info) { break; }
    let length = info.length;
    if (op === 0xaa) {
      let cursor = pc + 1; cursor += (4 - (cursor % 4)) % 4;
      const low = read32(code, cursor + 4), high = read32(code, cursor + 8);
      length = (cursor - pc) + 12 + (high - low + 1) * 4;
    } else if (op === 0xab) {
      let cursor = pc + 1; cursor += (4 - (cursor % 4)) % 4;
      const pairs = read32(code, cursor + 4);
      length = (cursor - pc) + 8 + pairs * 8;
    } else if (op === 0xc4) {
      length = code[pc + 1] === 0x84 ? 6 : 4;
    }
    if (length <= 0 || pc + length > code.length) { break; }
    if (op >= 0xb2 && op <= 0xb5) {
      const index = (code[pc + 1] << 8) | code[pc + 2];
      const entry = pool[index];
      if (entry && entry.tag === 9) {
        const owner = pool[entry.classIndex];
        const nt = pool[entry.nameAndTypeIndex];
        const ownerName = owner ? (pool[owner.nameIndex] || {}).value : null;
        const name = nt ? (pool[nt.nameIndex] || {}).value : null;
        if (ownerName && name) { out.push({ owner: ownerName, name, isStatic: op === 0xb2 || op === 0xb3 }); }
      }
    }
    pc += length;
  }
  return out;
}

/** The `invoke*` targets of a method, with the arity their descriptor implies. */
export function callsOf(code, pool) {
  const calls = [];
  let pc = 0;
  while (pc < code.length) {
    const op = code[pc];
    const info = OPCODE_TABLE[op];
    if (!info) { break; }
    let length = info.length;
    if (op === 0xaa) {
      let cursor = pc + 1; cursor += (4 - (cursor % 4)) % 4;
      const low = read32(code, cursor + 4), high = read32(code, cursor + 8);
      length = (cursor - pc) + 12 + (high - low + 1) * 4;
    } else if (op === 0xab) {
      let cursor = pc + 1; cursor += (4 - (cursor % 4)) % 4;
      const pairs = read32(code, cursor + 4);
      length = (cursor - pc) + 8 + pairs * 8;
    } else if (op === 0xc4) {
      length = code[pc + 1] === 0x84 ? 6 : 4;
    }
    if (length <= 0 || pc + length > code.length) { break; }
    if (op >= 0xb6 && op <= 0xb9) {
      const index = (code[pc + 1] << 8) | code[pc + 2];
      const entry = pool[index];
      if (entry && (entry.tag === 10 || entry.tag === 11)) {
        const owner = pool[entry.classIndex];
        const nt = pool[entry.nameAndTypeIndex];
        const ownerName = owner ? (pool[owner.nameIndex] || {}).value : null;
        const name = nt ? (pool[nt.nameIndex] || {}).value : null;
        const descriptor = nt ? (pool[nt.descriptorIndex] || {}).value : null;
        if (ownerName && name && descriptor) {
          calls.push({ owner: ownerName, name, descriptor, argCount: countArgs(descriptor), isStatic: op === 0xb8 });
        }
      }
    }
    pc += length;
  }
  return calls;
}

function read32(code, at) { return ((code[at] << 24) | (code[at + 1] << 16) | (code[at + 2] << 8) | code[at + 3]); }

export function javaFingerprints(jar, mappings) {
  const zip = readZip(jar);
  const methods = [];
  const classFieldIndex = new Map();
  let classes = 0;
  for (const name of zip.names) {
    if (!name.endsWith(".class")) { continue; }
    const obf = name.slice(0, -6);
    const mapping = mappings.byObf.get(obf);
    if (!mapping) { continue; }
    let info;
    try { info = parseClass(zip.read(name)); } catch (error) { continue; }
    classes++;
    classFieldIndex.set(obf, { namedClass: mapping.named, simpleClass: mapping.named.split("/").pop(), fields: classFields(info) });
    // client.txt lists a class's methods in the class file's own order, and obfuscated names repeat
    // across overloads — so names are paired *by position*, with the obf name as a checksum.
    const ordered = info.methods.filter((method) => method.name !== "<init>" && method.name !== "<clinit>");
    const namesByIndex = ordered.map((method, index) => {
      const candidate = mapping.methodNames[index];
      if (candidate && candidate.obf === method.name) { return candidate.named; }
      return mapping.namedMethods.get(method.name) || null;
    });
    for (const method of info.methods) {
      if (!method.code || !method.code.code) { continue; }
      const literals = literalsOf(method.code.code, info.pool);
      const calls = callsOf(method.code.code, info.pool);
      const accesses = fieldsOf(method.code.code, info.pool);
      const namedMethod = method.name === "<init>" || method.name === "<clinit>"
        ? null
        : (namesByIndex[ordered.indexOf(method)] || mapping.namedMethods.get(method.name) || null);
      methods.push({
        obfClass: obf,
        namedClass: mapping.named,
        simpleClass: mapping.named.split("/").pop(),
        obfMethod: method.name,
        namedMethod,
        descriptor: method.descriptor,
        argCount: method.descriptor.replace(/^\(([^)]*)\).*$/, "$1").replace(/\[/g, "").length ? countArgs(method.descriptor) : 0,
        isStatic: (method.access & 0x0008) !== 0,
        literals,
        calls,
        accesses
      });
    }
  }
  return { methods, classes, classFieldIndex };
}
export function countArgs(descriptor) {
  const inside = /^\(([^)]*)\)/.exec(descriptor)[1];
  let count = 0, at = 0;
  while (at < inside.length) {
    const c = inside[at];
    if (c === "[") { at++; continue; }
    if (c === "L") { at = inside.indexOf(";", at) + 1; count++; continue; }
    at++; count++;
  }
  return count;
}

/* a tiny zip reader, so this tool has no dependency on the converter's import graph */
export function readZip(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let eocd = -1;
  for (let i = bytes.length - 22; i >= 0; i--) { if (view.getUint32(i, true) === 0x06054b50) { eocd = i; break; } }
  if (eocd < 0) { throw new Error("not a zip"); }
  let at = view.getUint32(eocd + 16, true);
  const count = view.getUint16(eocd + 10, true);
  const entries = new Map();
  for (let n = 0; n < count; n++) {
    const nameLength = view.getUint16(at + 28, true);
    const extraLength = view.getUint16(at + 30, true);
    const commentLength = view.getUint16(at + 32, true);
    const method = view.getUint16(at + 10, true);
    const compressedSize = view.getUint32(at + 20, true);
    const localAt = view.getUint32(at + 42, true);
    const name = new TextDecoder().decode(bytes.subarray(at + 46, at + 46 + nameLength));
    const localNameLength = view.getUint16(localAt + 26, true);
    const localExtraLength = view.getUint16(localAt + 28, true);
    const dataAt = localAt + 30 + localNameLength + localExtraLength;
    const slice = bytes.subarray(dataAt, dataAt + compressedSize);
    entries.set(name, { method, data: () => (method === 0 ? slice : new Uint8Array(inflateRawSync(slice))) });
    at += 46 + nameLength + extraLength + commentLength;
  }
  const names = Array.from(entries.keys());
  return { names, read: (name) => (entries.has(name) ? entries.get(name).data() : null) };
}
/* ------------------------------------------------------------------ JS side -------------------- *
 * TeaVM does not put string literals in the methods. It interns them: `G(index)` reads a table that
 * one call fills (`A.AD5Q([...])`), and methods reference `G(1234)`. So a function's fingerprint is
 * the set of pool entries it reads, plus any literal it carries inline.
 */
export function stringPool(text) {
  const call = text.indexOf("A.AD5Q(");
  if (call < 0) { return []; }
  let at = text.indexOf("[", call);
  if (at < 0) { return []; }
  let depth = 0, inString = false, escaped = false, end = -1;
  for (let i = at; i < text.length; i++) {
    const c = text[i];
    if (inString) {
      if (escaped) { escaped = false; }
      else if (c === "\\") { escaped = true; }
      else if (c === '"') { inString = false; }
      continue;
    }
    if (c === '"') { inString = true; }
    else if (c === "[") { depth++; }
    else if (c === "]") { depth--; if (depth === 0) { end = i; break; } }
  }
  if (end < 0) { return []; }
  try {
    // The literal is a JavaScript array of strings; evaluating it is how it is read.
    return new Function("return " + text.slice(at, end + 1))();
  } catch (error) {
    return [];
  }
}

export function jsFingerprints(text, pool) {
  const offsets = [];
  const assignmentRe = /\bA\.([A-Za-z0-9_$]+)\s*=(?!=)/g;
  let match;
  while ((match = assignmentRe.exec(text)) !== null) { offsets.push({ at: match.index, sym: match[1] }); }
  const ats = offsets.map((entry) => entry.at);

  const stringsBySym = new Map();
  let pooled = 0, inline = 0;
  function add(sym, literal) {
    if (!literal || literal.length < minLiteral || literal.length > 400) { return; }
    let set = stringsBySym.get(sym);
    if (!set) { set = new Set(); stringsBySym.set(sym, set); }
    set.add(literal);
  }
  function owner(offset) {
    let low = 0, high = ats.length - 1, found = -1;
    while (low <= high) {
      const mid = (low + high) >> 1;
      if (ats[mid] <= offset) { found = mid; low = mid + 1; } else { high = mid - 1; }
    }
    return found >= 0 ? offsets[found].sym : null;
  }
  const poolRe = /\bG\((\d+)\)/g;
  while ((match = poolRe.exec(text)) !== null) {
    const literal = pool[Number(match[1])];
    const sym = owner(match.index);
    if (sym) { add(sym, literal); pooled++; }
  }
  const literalRe = /"((?:[^"\\\n]|\\.){4,400})"/g;
  while ((match = literalRe.exec(text)) !== null) {
    const literal = match[1];
    if (literal.indexOf("\\") >= 0) { continue; }
    const sym = owner(match.index);
    if (sym) { add(sym, literal); inline++; }
  }

  const arity = new Map();
  const functionSymbols = new Set();
  for (const entry of offsets) {
    const slice = text.slice(entry.at + entry.sym.length + 3, entry.at + entry.sym.length + 100).replace(/^\s*/, "");
    const fn = /^function\s*\(([^)]*)\)/.exec(slice);
    if (fn) {
      functionSymbols.add(entry.sym);
      const params = fn[1].trim();
      arity.set(entry.sym, params ? params.split(",").length : 0);
    } else if (/^\(([^)]*)\)\s*=?>/.test(slice)) {
      functionSymbols.add(entry.sym);
      const params = /^\(([^)]*)\)\s*=?>/.exec(slice)[1].trim();
      arity.set(entry.sym, params ? params.split(",").length : 0);
    } else {
      const arrow = /^([a-zA-Z_$][\w$]*)\s*=?>/.exec(slice);
      if (arrow) { functionSymbols.add(entry.sym); }
      arity.set(entry.sym, arrow ? 1 : null);
    }
  }
  // Which functions each function calls, for the propagation pass.
  const calleesBySym = new Map();
  const callRe = /\bA\.([A-Za-z0-9_$]+)\s*\(/g;
  while ((match = callRe.exec(text)) !== null) {
    const sym = owner(match.index);
    if (!sym) { continue; }
    let list = calleesBySym.get(sym);
    if (!list) { list = []; calleesBySym.set(sym, list); }
    list.push(match[1]);
  }
  return { stringsBySym, arity, functionSymbols, calleesBySym, offsets, assignments: offsets.length, pooled, inline, poolSize: pool.length };
}

/* ------------------------------------------------------------------ match ---------------------- */
function align(java, js) {
  const byLiteral = new Map();
  for (const method of java.methods) {
    for (const literal of new Set(method.literals)) {
      let list = byLiteral.get(literal);
      if (!list) { list = []; byLiteral.set(literal, list); }
      list.push(method);
    }
  }
  const matches = new Map();       // mangled sym -> { method, score, why }
  const acceptedMethods = new Set();
  let examined = 0, ambiguous = 0, weak = 0;

  for (const [sym, literals] of js.stringsBySym) {
    if (!literals.size) { continue; }
    examined++;
    // Rarest literal first: a literal that appears in few Java methods is the strongest evidence.
    let rarest = null, rarestCount = Infinity;
    for (const literal of literals) {
      const count = (byLiteral.get(literal) || []).length;
      if (count === 0) { continue; }
      if (count < rarestCount) { rarest = literal; rarestCount = count; }
    }
    if (!rarest || rarestCount > 25) { weak++; continue; }
    const candidates = byLiteral.get(rarest).filter((method) => method.literals.length && overlaps(method, literals));
    if (!candidates.length) { continue; }
    const jsArity = js.arity.get(sym);
    const scored = candidates.map((method) => ({ method, score: score(method, literals, jsArity) }))
      .sort((a, b) => b.score.total - a.score.total);
    const best = scored[0];
    const second = scored[1];
    if (best.score.total < 1.4) { weak++; continue; }
    if (second && best.score.total - second.score.total < 0.25) { ambiguous++; continue; }
    matches.set(sym, {
      method: best.method,
      score: Math.round(best.score.total * 100) / 100,
      why: `${best.score.shared} literal(s) shared, rarest in ${rarestCount} Java method(s)` +
        (jsArity != null ? `, arity ${jsArity}` : "")
    });
    acceptedMethods.add(keyOf(best.method));
  }
  return { matches, examined, ambiguous, weak, acceptedMethods, byLiteral };
}
function overlaps(method, literals) {
  for (const literal of literals) { if (method.literals.indexOf(literal) >= 0) { return true; } }
  return false;
}
function score(method, literals, jsArity) {
  let shared = 0;
  for (const literal of literals) { if (method.literals.indexOf(literal) >= 0) { shared++; } }
  let total = shared / (literals.size + method.literals.length - shared);     // Jaccard
  // Arity: TeaVM emits `this` as the first parameter of an instance method.
  if (jsArity != null) {
    const expected = method.argCount + (method.isStatic ? 0 : 1);
    if (jsArity === expected) { total += 1; }
    else if (jsArity === method.argCount) { total += 0.6; }
    else { total -= 0.5; }
  }
  total += Math.min(shared, 4) * 0.15;
  return { total, shared };
}
function keyOf(method) { return method.obfClass + "." + method.obfMethod + method.descriptor; }

/* ------------------------------------------------------------------ run ------------------------ */
function main() {
  console.log("mappings: " + mappingsDir);
  const mappings = readClientMappings(mappingsDir);
  console.log(`  ${mappings.byObf.size} classes mapped`);

  console.log("java: " + jarPath);
  const java = javaFingerprints(readFileSync(jarPath), mappings);
  console.log(`  ${java.classes} classes, ${java.methods.length} methods with string literals`);

  console.log("javascript: " + jsDir);
  const { html } = readClient(jsDir);
  const bounds = findEmbedded(html);
  const text = readStream(bounds.object, "classes").bytes.toString("utf8");
  const pool = stringPool(text);
  console.log(`  string pool: ${pool.length} entries`);
  const js = jsFingerprints(text, pool);
  console.log(`  ${js.assignments} assignments, ${js.pooled} pool reads + ${js.inline} inline literals, ${js.stringsBySym.size} functions fingerprinted`);

  const result = align(java, js);
  console.log(`alignment: ${result.matches.size} exact matches (examined ${result.examined}, ambiguous ${result.ambiguous}, weak ${result.weak})`);
  const sample = Array.from(result.matches.entries()).slice(0, 8);
  for (const [sym, entry] of sample) {
    console.log(`  A.${sym} -> ${entry.method.namedClass || entry.method.obfClass}.${entry.method.namedMethod || entry.method.obfMethod} (${entry.why}, score ${entry.score})`);
  }

  /* ------------------------------------------------------------------ targeted pass ------------- *
   * The global pass refuses ambiguous matches. A converted mod, though, tells us exactly which
   * methods it wants to patch — so for those, ambiguity can be resolved *within the class*: a Java
   * method of that class whose literals are all present in a function, unique among the class's
   * overloads, is that method.
   */
  const wantedFile = flag("wanted", null);
  let targeted = 0;
  const targetedDetail = [];
  if (wantedFile && existsSync(resolve(wantedFile))) {
    const wanted = JSON.parse(readFileSync(resolve(wantedFile), "utf8")).wanted || [];
    // Java methods by class + name
    const byClassMethod = new Map();
    for (const method of java.methods) {
      if (!method.namedMethod) { continue; }
      const key = method.namedClass + "::" + method.namedMethod;
      let list = byClassMethod.get(key);
      if (!list) { list = []; byClassMethod.set(key, list); }
      list.push(method);
    }
    // JS functions by literal, for the superset test
    const jsByLiteral = new Map();
    for (const [sym, literals] of js.stringsBySym) {
      for (const literal of literals) {
        let list = jsByLiteral.get(literal);
        if (!list) { list = []; jsByLiteral.set(literal, list); }
        list.push(sym);
      }
    }
    for (const want of wanted) {
      const key = want.className + "::" + want.method;
      const candidates = byClassMethod.get(key);
      if (!candidates || !candidates.length) { continue; }
      if (candidates.some((candidate) => result.acceptedMethods.has(keyOf(candidate)))) { continue; }
      for (const candidate of candidates) {
        const literals = new Set(candidate.literals);
        if (!literals.size) { continue; }
        // Candidate functions: those that contain this method's rarest literal…
        let rarest = null, rarestCount = Infinity;
        for (const literal of literals) {
          const count = (result.byLiteral.get(literal) || []).length;
          if (count > 0 && count < rarestCount) { rarest = literal; rarestCount = count; }
        }
        if (!rarest) { continue; }
        const pool = new Set(jsByLiteral.get(rarest) || []);
        // …and whose literal set contains all of the method's literals.
        const fits = [];
        for (const sym of pool) {
          const jsLiterals = js.stringsBySym.get(sym);
          let all = true;
          for (const literal of literals) { if (!jsLiterals.has(literal)) { all = false; break; } }
          if (!all) { continue; }
          const jsArity = js.arity.get(sym);
          const expected = candidate.argCount + (candidate.isStatic ? 0 : 1);
          if (jsArity != null && jsArity !== expected && jsArity !== candidate.argCount) { continue; }
          fits.push(sym);
        }
        if (fits.length !== 1) { continue; }
        const sym = fits[0];
        if (result.matches.has(sym)) { continue; }
        result.matches.set(sym, {
          method: candidate,
          score: 1.5,
          why: `targeted: all ${literals.size} literal(s) of ${candidate.namedClass.split("/").pop()}.${candidate.namedMethod} present, unique in the class`
        });
        targeted++;
        targetedDetail.push({ wanted: key, sym, method: candidate.namedClass + "." + candidate.namedMethod });
        break;
      }
    }
    console.log(`targeted pass: ${targeted} more methods named from ${wanted.length} wanted targets`);
  }

  /* ------------------------------------------------------------------ propagation ---------------- *
   * Seeds: the methods named so far. A seed's Java method says which methods *of its own class* it
   * calls; its JavaScript body says which functions it calls. When the two agree on arity — one
   * unnamed candidate on each side, per arity — the callee is named. Repeat until nothing changes.
   */
  function propagate(java, js, seeds, rounds = 4) {
    const namedFns = new Set(Array.from(seeds.values()).map((entry) => entry.fn));
    const namedJava = new Set(seeds.keys());
    const byObfClass = new Map();
    for (const method of java.methods) {
      const key = method.obfClass + "." + method.obfMethod + method.descriptor;
      byObfClass.set(key, method);
    }
    const additions = [];
    for (let round = 0; round < rounds; round++) {
      let changed = 0;
      const current = new Map(seeds);
      for (const [javaKey, entry] of current) {
        const method = byObfClass.get(javaKey);
        if (!method) { continue; }
        const jsArity = js.arity.get(entry.fn);
        if (jsArity == null) { continue; }
        // Java callees of the same class that are not named yet.
        const javaCallees = [];
        const seenJava = new Set();
        for (const call of method.calls) {
          if (call.owner !== method.obfClass) { continue; }
          const key = call.owner + "." + call.name + call.descriptor;
          const callee = byObfClass.get(key);
          if (!callee || seenJava.has(key)) { continue; }
          seenJava.add(key);
          if (!callee.namedMethod) { continue; }
          if (namedJava.has(key)) { continue; }
          javaCallees.push({ key, named: callee.namedMethod, simple: callee.simpleClass, arity: call.argCount + (call.isStatic ? 0 : 1), info: callee });
        }
        if (!javaCallees.length || javaCallees.length > 8) { continue; }
        // JS callees that are not named yet.
        const seenJs = new Set();
        const jsCallees = [];
        for (const sym of js.calleesBySym.get(entry.fn) || []) {
          if (namedFns.has(sym) || seenJs.has(sym)) { continue; }
          const arity = js.arity.get(sym);
          if (arity == null) { continue; }
          seenJs.add(sym);
          jsCallees.push({ sym, arity });
        }
        if (!jsCallees.length || jsCallees.length > 20) { continue; }
        // Pair up by arity, one on each side. Ambiguity is refused.
        const javaByArity = new Map();
        for (const candidate of javaCallees) {
          const list = javaByArity.get(candidate.arity) || [];
          list.push(candidate);
          javaByArity.set(candidate.arity, list);
        }
        const jsByArity = new Map();
        for (const candidate of jsCallees) {
          const list = jsByArity.get(candidate.arity) || [];
          list.push(candidate);
          jsByArity.set(candidate.arity, list);
        }
        for (const [arity, javaList] of javaByArity) {
          const jsList = jsByArity.get(arity) || [];
          if (javaList.length !== 1 || jsList.length !== 1) { continue; }
          const javaCallee = javaList[0];
          const jsCallee = jsList[0];
          if (namedFns.has(jsCallee.sym) || namedJava.has(javaCallee.key)) { continue; }
          namedFns.add(jsCallee.sym);
          namedJava.add(javaCallee.key);
          additions.push({
            sym: jsCallee.sym,
            method: javaCallee.info,
            why: `propagated from ${method.namedClass.split("/").pop()}.${method.namedMethod} by arity ${arity}`
          });
          seeds.set(javaCallee.key, { fn: jsCallee.sym, method: javaCallee.info, why: "propagated" });
          changed++;
        }
      }
      if (!changed) { break; }
    }
    return additions;
  }

  /* merge with the anchors: exact anchors win, alignment fills the rest */
  const mergedAdditions = [];
  const anchors = existsSync(anchorsFile) ? JSON.parse(readFileSync(anchorsFile, "utf8")).anchors : {};
  const merged = {};
  const stats = { anchored: 0, aligned: 0, byClass: {} };
  // `--merge` starts from a map earlier passes produced, so propagation can use every name known
  // so far instead of only this run's anchors.
  const mergeFile = flag("merge", null);
  const carried = mergeFile && existsSync(resolve(mergeFile))
    ? (JSON.parse(readFileSync(resolve(mergeFile), "utf8")).anchors || {})
    : {};
  for (const [className, methods] of Object.entries(carried)) {
    merged[className] = merged[className] || {};
    for (const [method, entry] of Object.entries(methods)) {
      merged[className][method] = entry;
      stats.carried = (stats.carried || 0) + 1;
    }
  }
  for (const [className, methods] of Object.entries(anchors)) {
    merged[className] = merged[className] || {};
    for (const [method, entry] of Object.entries(methods)) {
      merged[className][method] = entry;
      if (!carried[className] || !carried[className][method]) { stats.anchored++; }
    }
  }
  // Propagate from everything named so far (anchors + alignment + targeted).
  {
    const seedMap = new Map();
    const methodBySimple = new Map();
    for (const method of java.methods) {
      if (!method.namedMethod) { continue; }
      if (!methodBySimple.has(method.simpleClass)) { methodBySimple.set(method.simpleClass, new Map()); }
      const table = methodBySimple.get(method.simpleClass);
      if (!table.has(method.namedMethod)) { table.set(method.namedMethod, method); }
    }
    for (const [domain, methods] of Object.entries(merged)) {
      for (const [method, entry] of Object.entries(methods)) {
        if (!entry.fn) { continue; }
        const table = methodBySimple.get(domain);
        const javaMethod = table && table.get(method);
        if (javaMethod) { seedMap.set(javaMethod.obfClass + "." + javaMethod.obfMethod + javaMethod.descriptor, { fn: entry.fn, method: javaMethod, why: entry.why || "carried" }); }
      }
    }
    for (const [sym, entry] of result.matches) {
      if (!entry.method.namedMethod) { continue; }
      seedMap.set(entry.method.obfClass + "." + entry.method.obfMethod + entry.method.descriptor, { fn: sym, method: entry.method, why: entry.why });
    }
    const additions = propagate(java, js, seedMap);
    let added = 0;
    for (const addition of additions) {
      const simple = addition.method.simpleClass;
      if (!addition.method.namedMethod) { continue; }
      mergedAdditions.push(addition);
      added++;
    }
    console.log(`propagation: ${added} more methods named from ${seedMap.size} seeds`);
  }
  for (const addition of mergedAdditions) {
    const simple = addition.method.simpleClass;
    if (merged[simple] && merged[simple][addition.method.namedMethod]) { continue; }
    merged[simple] = merged[simple] || {};
    merged[simple][addition.method.namedMethod] = { fn: addition.sym, index: null, arity: js.arity.get(addition.sym) || null, why: addition.why };
    stats.aligned++;
  }
  let alignmentSkipped = 0;
  for (const [sym, entry] of result.matches) {
    const method = entry.method;
    if (!method.namedMethod) { alignmentSkipped++; continue; }
    const simple = method.simpleClass;
    if (merged[simple] && merged[simple][method.namedMethod]) { alignmentSkipped++; continue; }
    merged[simple] = merged[simple] || {};
    merged[simple][method.namedMethod] = { fn: sym, index: null, arity: js.arity.get(sym) || null, why: entry.why, score: entry.score };
    stats.aligned++;
  }
  stats.targeted = result.matches.size - stats.aligned - alignmentSkipped > 0 ? 0 : 0;
  stats.byClass = Object.fromEntries(Object.entries(merged).map(([cls, methods]) => [cls, Object.keys(methods).length]));
  writeFileSync(outFile, JSON.stringify({
    note: "Built by tools/build-symbols.mjs (exact lambda anchors) and tools/align-methods.mjs (string-constant alignment).",
    client: { bytes: text.length, assignments: js.assignments },
    stats: {
      anchoredMethods: stats.anchored,
      alignedMethods: stats.aligned,
      classes: Object.keys(merged).length,
      examined: result.examined,
      ambiguous: result.ambiguous
    },
    anchors: merged,
    targeted: targetedDetail.slice(0, 50)
  }, null, 1) + "\n");
  console.log(`wrote ${outFile}: ${stats.anchored} anchored + ${stats.aligned} aligned = ${Object.keys(merged).reduce((total, cls) => total + Object.keys(merged[cls]).length, 0)} methods in ${Object.keys(merged).length} classes`);

}

if (process.argv[1] && process.argv[1].endsWith("align-methods.mjs")) { main(); }
