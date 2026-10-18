/* Intermediary -> named mappings.
 *
 * A Fabric mod's bytecode names Minecraft classes the way Fabric does: `net/minecraft/class_2960`,
 * `method_60655`, `field_1234`. The client in this project is compiled from Mojang's *named*
 * mappings (`net.minecraft.resources.ResourceLocation`). Translating a mod therefore means joining
 * two published files:
 *
 *   Mojang client mappings (client.txt, obfuscated -> named, from the version manifest)
 *   Fabric intermediary   (mappings.tiny, obfuscated -> intermediary)
 *
 * Join on the obfuscated name and the result is intermediary -> named. Both files are downloaded to
 * `converter/mappings/<version>/` by tools/fetch-mappings.mjs and are **not** committed: Mojang's
 * mappings may not be redistributed, and the project respects that.
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { inflateRawSync } from "node:zlib";

export function loadMappings(directory) {
  if (!directory || !existsSync(directory)) { return null; }
  const clientPath = join(directory, "client.txt");
  const tinyPath = join(directory, "intermediary.tiny");
  if (!existsSync(clientPath) || !existsSync(tinyPath)) { return null; }

  // ---- Mojang client mappings: obf class -> named class, and obf member -> named member.
  const namedClassByObf = new Map();
  const namedMethodsByObf = new Map();   // obfClass -> [{ obfName, descriptor, named }]
  const namedFieldsByObf = new Map();    // obfClass -> [{ obfName, descriptor, named }]
  let current = null;
  for (const line of readFileSync(clientPath, "utf8").split("\n")) {
    if (!line || line.startsWith("#")) { continue; }
    if (!line.startsWith(" ")) {
      const match = /^(\S+) -> (\S+):$/.exec(line);
      if (!match) { continue; }
      current = { named: match[1].replace(/\./g, "/"), obf: match[2] };
      namedClassByObf.set(current.obf, current.named);
      namedMethodsByObf.set(current.obf, []);
      namedFieldsByObf.set(current.obf, []);
      continue;
    }
    if (!current) { continue; }
    const method = /^\s+(?:(?:\d+):(?:\d+):)?(.+?)\s+([A-Za-z_$][\w$<>]*)\s*\(([^)]*)\)\s+->\s+(\S+)$/.exec(line);
    if (method && method[2] !== "<clinit>") {
      const descriptor = "(" + splitTypes(method[3]).map(javaTypeToDescriptor).join("") + ")" + javaTypeToDescriptor(method[1]);
      namedMethodsByObf.get(current.obf).push({ obfName: method[4], descriptor, named: method[2] });
      continue;
    }
    const field = /^\s+(.+?)\s+([A-Za-z_$][\w$]*)\s+->\s+(\S+)$/.exec(line);
    if (field) {
      namedFieldsByObf.get(current.obf).push({ obfName: field[3], descriptor: javaTypeToDescriptor(field[1]), named: field[2] });
    }
  }

  // ---- Fabric intermediary: obf class -> intermediary class, obf member -> intermediary member.
  const intermediaryClassByObf = new Map();
  const intermediaryMethodsByObf = new Map();   // obfClass -> [{ obfName, descriptor, intermediary }]
  const intermediaryFieldsByObf = new Map();
  let obfClass = null;
  for (const line of readFileSync(tinyPath, "utf8").split("\n")) {
    if (!line) { continue; }
    const columns = line.split("\t");
    if (columns[0] === "c" && columns.length >= 3) {
      obfClass = columns[1];
      intermediaryClassByObf.set(columns[1], columns[2]);
      intermediaryMethodsByObf.set(obfClass, []);
      intermediaryFieldsByObf.set(obfClass, []);
      continue;
    }
    if (!obfClass || columns[0] !== "") { continue; }
    if (columns[1] === "m" && columns.length >= 5) {
      intermediaryMethodsByObf.get(obfClass).push({ descriptor: columns[2], obfName: columns[3], intermediary: columns[4] });
    } else if (columns[1] === "f" && columns.length >= 5) {
      intermediaryFieldsByObf.get(obfClass).push({ descriptor: columns[2], obfName: columns[3], intermediary: columns[4] });
    }
  }

  // ---- The join. Members are matched on name AND descriptor: obfuscators do reuse a short name
  // for overloads, and a name-only join silently picks the wrong one.
  const namedClassByIntermediary = new Map();
  for (const [obf, intermediary] of intermediaryClassByObf) {
    const named = namedClassByObf.get(obf);
    if (named) { namedClassByIntermediary.set(intermediary, named); }
  }
  const intermediaryClassByNamed = new Map();
  namedClassByIntermediary.forEach((named, intermediary) => { intermediaryClassByNamed.set(named, intermediary); });
  // A method can be inherited, so a mixin may name a method that lives on a superclass. When the
  // owning class is unknown, an intermediary name that resolves to exactly one named method
  // anywhere in the game is still unambiguous.
  const globalMethod = new Map();
  const globalField = new Map();

  const methodByIntermediaryAndClass = new Map();
  const fieldByIntermediaryAndClass = new Map();
  function uniqueOr(name, index) {
    const set = index.get(name);
    if (set && set.size === 1) { return Array.from(set)[0]; }
    return name;
  }
  function intermediaryClassNamed(owner) {
    return intermediaryClassByNamed.get(owner) || owner;
  }
  const namedDescriptor = (descriptor) => String(descriptor).replace(/L([^;]+);/g, (whole, obf) => {
    const named = namedClassByObf.get(obf);
    return named ? "L" + named + ";" : whole;
  });
  for (const [obf, entries] of intermediaryMethodsByObf) {
    const namedEntries = namedMethodsByObf.get(obf) || [];
    const intermediary = intermediaryClassByObf.get(obf);
    if (!intermediary) { continue; }
    for (const entry of entries) {
      const descriptor = namedDescriptor(entry.descriptor);
      const match = namedEntries.find((candidate) => candidate.obfName === entry.obfName && candidate.descriptor === descriptor)
        || namedEntries.find((candidate) => candidate.obfName === entry.obfName);
      if (match) {
        methodByIntermediaryAndClass.set(intermediary + "/" + entry.intermediary, match.named);
        const set = globalMethod.get(entry.intermediary) || new Set();
        set.add(match.named);
        globalMethod.set(entry.intermediary, set);
      }
    }
  }
  for (const [obf, entries] of intermediaryFieldsByObf) {
    const namedEntries = namedFieldsByObf.get(obf) || [];
    const intermediary = intermediaryClassByObf.get(obf);
    if (!intermediary) { continue; }
    for (const entry of entries) {
      const descriptor = namedDescriptor(entry.descriptor);
      const match = namedEntries.find((candidate) => candidate.obfName === entry.obfName && candidate.descriptor === descriptor)
        || namedEntries.find((candidate) => candidate.obfName === entry.obfName);
      if (match) {
        fieldByIntermediaryAndClass.set(intermediary + "/" + entry.intermediary, match.named);
        const set = globalField.get(entry.intermediary) || new Set();
        set.add(match.named);
        globalField.set(entry.intermediary, set);
      }
    }
  }

  return {
    size: { classes: namedClassByIntermediary.size, methods: methodByIntermediaryAndClass.size, fields: fieldByIntermediaryAndClass.size },
    _debug: { namedClassByObf, methodByIntermediaryAndClass, intermediaryClassByNamed },
    isIntermediary(name) { return /(^|\/)class_\d+$/.test(name); },
    class(name) {
      if (!name) { return name; }
      if (namedClassByIntermediary.has(name)) { return namedClassByIntermediary.get(name); }
      return name;
    },
    method(owner, name) {
      if (!name) { return name; }
      const keyClass = intermediaryClassNamed(owner);
      const direct = methodByIntermediaryAndClass.get(keyClass + "/" + name);
      if (direct) { return direct; }
      return uniqueOr(name, globalMethod);
    },
    field(owner, name) {
      if (!name) { return name; }
      const keyClass = intermediaryClassNamed(owner);
      const direct = fieldByIntermediaryAndClass.get(keyClass + "/" + name);
      if (direct) { return direct; }
      return uniqueOr(name, globalField);
    },
    /** A method name anywhere in the game, when exactly one named method carries it. */
    methodAnywhere(name) { return uniqueOr(name, globalMethod); },
    /** "net/minecraft/class_310" -> "net/minecraft/client/Minecraft" */
    remapName(name) {
      return name ? this.class(String(name).replace(/\./g, "/")) : name;
    }
  };
}

const PRIMITIVES = { byte: "B", char: "C", double: "D", float: "F", int: "I", long: "J", short: "S", boolean: "Z", void: "V" };

/** "java.lang.String" -> "Ljava/lang/String;", "int[]" -> "[I", "T<...>" -> descriptor of T. */
export function javaTypeToDescriptor(text) {
  let type = String(text || "").trim();
  if (!type) { return "V"; }
  // Strip generics and varargs, whichever end they are on.
  type = type.replace(/<.*>/g, "");
  if (type.endsWith("...")) { type = type.slice(0, -3) + "[]"; }
  let array = 0;
  while (type.endsWith("[]")) { array++; type = type.slice(0, -2).trim(); }
  let descriptor = PRIMITIVES[type] || ("L" + type.replace(/\./g, "/") + ";");
  return "[".repeat(array) + descriptor;
}

/** "int,java.lang.String" -> ["int", "java.lang.String"] (top-level commas only). */
export function splitTypes(text) {
  const value = String(text || "").trim();
  if (!value) { return []; }
  const out = [];
  let depth = 0;
  let at = 0;
  for (let i = 0; i < value.length; i++) {
    const c = value[i];
    if (c === "<" || c === "(") { depth++; }
    else if (c === ">" || c === ")") { depth--; }
    else if (c === "," && depth === 0) { out.push(value.slice(at, i).trim()); at = i + 1; }
  }
  out.push(value.slice(at).trim());
  return out.filter(Boolean);
}

/** tiny is inside a jar; convenience for tools that have one. */
export function tinyFromJar(bytes) {
  if (bytes.slice(0, 2).toString("binary") !== "PK") { return bytes; }
  return new Uint8Array(inflateRawSync(pickEntry(bytes, "mappings/mappings.tiny")));
}

function pickEntry(bytes, wanted) {
  // A tiny local zip reader: enough for one known entry from Fabric's intermediary jar.
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let eocd = -1;
  for (let i = bytes.length - 22; i >= 0; i--) { if (view.getUint32(i, true) === 0x06054b50) { eocd = i; break; } }
  if (eocd < 0) { throw new Error("not a zip"); }
  let at = view.getUint32(eocd + 16, true);
  const count = view.getUint16(eocd + 10, true);
  for (let n = 0; n < count; n++) {
    const nameLength = view.getUint16(at + 28, true);
    const extraLength = view.getUint16(at + 30, true);
    const commentLength = view.getUint16(at + 32, true);
    const method = view.getUint16(at + 10, true);
    const compressedSize = view.getUint32(at + 20, true);
    const localAt = view.getUint32(at + 42, true);
    const name = new TextDecoder().decode(bytes.subarray(at + 46, at + 46 + nameLength));
    if (name === wanted) {
      const localNameLength = view.getUint16(localAt + 26, true);
      const localExtraLength = view.getUint16(localAt + 28, true);
      const dataAt = localAt + 30 + localNameLength + localExtraLength;
      const slice = bytes.subarray(dataAt, dataAt + compressedSize);
      return method === 0 ? slice : new Uint8Array(inflateRawSync(slice));
    }
    at += 46 + nameLength + extraLength + commentLength;
  }
  throw new Error("entry not found: " + wanted);
}
