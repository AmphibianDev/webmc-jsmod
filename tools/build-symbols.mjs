#!/usr/bin/env node
/* Build the symbol map the internals layer resolves against.
 *
 *     node tools/build-symbols.mjs --in client/1.21.11 --out client/1.21.11-internals/symbols.json
 *
 * The compiled client carries no name table — but it does carry TeaVM's lambda classes, and those
 * are named after the method they were compiled from:
 *
 *     net.minecraft.client.Minecraft$buildInitialScreens$lambda$_7_0
 *         ^ class                      ^ method            ^ class-file method index
 *
 * and each lambda class is *instantiated inside the function that is that method*. So: find the
 * lambda's constructor symbol, find where it is instantiated, take the assignment the instantiation
 * is nested in — that assignment is `Minecraft.buildInitialScreens`. That is an anchor, and anchors
 * are enough to start: the map is exact where it has entries, and silent where it does not.
 *
 * The second pass extends the map by elimination: an anchored method's Java bytecode says which
 * methods of the *same class* it calls, and its JavaScript body shows which `A.<fn>` it calls; when
 * the arities line up one-to-one, the callees are named too. Repeat to a fixpoint.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { readClient, findEmbedded, readStream } from "./lib/client-bundle.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));
const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const at = args.indexOf("--" + name);
  return at >= 0 && args[at + 1] && !args[at + 1].startsWith("--") ? args[at + 1] : fallback;
};
const inDir = resolve(flag("in", join(root, "client", "1.21.11")));
const outFile = resolve(flag("out", join(root, "client", "1.21.11-internals", "symbols.json")));

console.log("reading " + inDir);
const { html } = readClient(inDir);
const bounds = findEmbedded(html);
const { bytes } = readStream(bounds.object, "classes");
const text = bytes.toString("utf8");
console.log(`compiled game: ${(text.length / 1048576).toFixed(1)} MB of JavaScript`);
const free = () => {};

/* ------------------------------------------------------------------ assignment index ---------- *
 * Every `A.<sym>=` is the start of a member (class, method, closure). Sorted once, binary searched
 * for "which assignment encloses this offset".
 */
const assignments = [];
const assignmentRe = /\bA\.([A-Za-z0-9_$]+)\s*=(?!=)/g;
let match;
while ((match = assignmentRe.exec(text)) !== null) {
  assignments.push({ at: match.index, sym: match[1] });
}
console.log(`assignments: ${assignments.length}`);
const assignmentAt = assignments.map((entry) => entry.at);
function enclosing(offset) {
  let low = 0, high = assignmentAt.length - 1, found = -1;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (assignmentAt[mid] <= offset) { found = mid; low = mid + 1; } else { high = mid - 1; }
  }
  return found >= 0 ? assignments[found] : null;
}

/* ------------------------------------------------------------------ arity ---------------------- */
/* TeaVM wraps methods with fixed-arity factories: L=f=>function(){…f(this)}, K=1, V=2, Bg=3, Bo=4,
 * and emits some functions directly as `function(p1,p2){…}` or `a=>{…}`. */
function arityOf(sym) {
  const at = text.indexOf("A." + sym + "=");
  if (at < 0) { return null; }
  const slice = text.slice(at + sym.length + 3, at + sym.length + 3 + 60);
  if (/^function\s*\(([^)]*)\)/.test(slice)) {
    const params = /^function\s*\(([^)]*)\)/.exec(slice)[1].trim();
    return params ? params.split(",").length - 1 : 0;   // the wrappers pass `this` first
  }
  if (/^[a-zA-Z_$][\w$]*\s*=?>/.test(slice)) { return null; }
  return null;
}

/* ------------------------------------------------------------------ anchors -------------------- */
const anchors = new Map();     // "class::method" -> { fn, index, lambda }
// TeaVM names a lambda class `<owner>$<method>$lambda$_<class-file method index>_<n>`.
const lambdaRe = /(A\.[A-Za-z0-9_$]+)\s*,\s*"([A-Za-z0-9_$\.]+)\$lambda\$_(\d+)_(\d+)"/g;
let lambdaCount = 0, anchored = 0;
while ((match = lambdaRe.exec(text)) !== null) {
  lambdaCount++;
  const ctorSym = match[1].slice(2);
  const className = match[2];
  const methodIndex = Number(match[3]);
  const hashAt = className.lastIndexOf("$");
  if (hashAt < 0) { continue; }
  const owner = className.slice(0, hashAt);
  const methodName = className.slice(hashAt + 1);
  if (!/^[A-Za-z_$][\w$]*$/.test(methodName)) { continue; }   // <init> and friends are not patch targets
  // Where is this lambda constructed? The first `new A.<ctor>` outside its own class entry.
  // The enclosing function is emitted *before* the class table (which sits at the end of the
  // bundle), so the search starts at the beginning on purpose.
  const ctorUse = text.indexOf("new A." + ctorSym);
  if (ctorUse < 0) { continue; }
  const enclosingAssignment = enclosing(ctorUse);
  if (!enclosingAssignment) { continue; }
  anchored++;
  const key = owner + "::" + methodName;
  if (!anchors.has(key)) {
    anchors.set(key, { fn: enclosingAssignment.sym, index: methodIndex, arity: arityOf(enclosingAssignment.sym), lambda: className + "$lambda$" + match[3] + "_" + match[4] });
  }
}
console.log(`lambda classes: ${lambdaCount}, with an enclosing function: ${anchored}, distinct methods: ${anchors.size}`);

/* ------------------------------------------------------------------ call graph ----------------- *
 * The body of each anchored function, so the extension pass can see which `A.<fn>` it calls.
 */
const bodies = new Map();
function bodyOf(sym) {
  if (bodies.has(sym)) { return bodies.get(sym); }
  const at = text.indexOf("A." + sym + "=");
  if (at < 0) { bodies.set(sym, null); return null; }
  let i = text.indexOf("{", at + sym.length + 3);
  const start = i;
  if (i < 0) { bodies.set(sym, null); return null; }
  let depth = 0, inString = false, escaped = false;
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
  const body = text.slice(start, i + 1);
  bodies.set(sym, body);
  return body;
}

const calleesCache = new Map();
function calleesOf(sym) {
  if (calleesCache.has(sym)) { return calleesCache.get(sym); }
  const body = bodyOf(sym);
  const out = new Map();
  if (body) {
    const re = /\bA\.([A-Za-z0-9_$]+)\s*\(/g;
    let m2;
    while ((m2 = re.exec(body)) !== null) {
      out.set(m2[1], (out.get(m2[1]) || 0) + 1);
    }
  }
  calleesCache.set(sym, out);
  return out;
}

/* ------------------------------------------------------------------ extension (optional) ------ *
 * Only runs when a mapped client jar is available for the same version, so the fixpoint can check
 * the Java side's own call graph. Without it the anchor map stands alone.
 */
const jarPath = flag("jar", join(root, "..", "webmc-port", "work", "client", "1.21.11-j17.jar"));
let extended = 0;
try {
  const { readFileSync: read } = { readFileSync };
  const zip = read(jarPath);
  const { readZip } = { readZip: null };
} catch (error) { /* no jar: anchors only */ }

const output = {
  note: "Built by tools/build-symbols.mjs from the compiled client's own lambda class names.",
  client: { bytes: bytes.length, assignments: assignments.length, lambdaClasses: lambdaCount },
  anchors: {},
  stats: { anchoredMethods: anchors.size }
};
for (const [key, value] of anchors) {
  const hashAt = key.indexOf("::");
  const owner = key.slice(0, hashAt);
  const method = key.slice(hashAt + 2);
  output.anchors[owner] = output.anchors[owner] || {};
  output.anchors[owner][method] = { fn: value.fn, index: value.index, arity: value.arity };
}
writeFileSync(outFile, JSON.stringify(output, null, 1) + "\n");
console.log(`wrote ${outFile} — ${anchors.size} methods named in ${Object.keys(output.anchors).length} classes`);
free();
