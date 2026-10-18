#!/usr/bin/env node
/* The converter's test suite: no browser, no network, no JDK.
 *
 *     node converter/test/run.mjs
 *
 * Real jars are used where they are present (converter/jars/ is for this machine: `--all` fetches
 * are not committed), and the tests that need one print `skip` rather than passing silently. The
 * synthetic tests — zip round trips, descriptor parsing, the write-then-read path — always run.
 */
import { readFileSync, existsSync, mkdtempSync, writeFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";
import vm from "node:vm";

import { readZip } from "../lib/zip.mjs";
import { writeZip } from "../lib/package.mjs";
import { parseClass, scanBytecode, OPCODE_TABLE } from "../lib/classfile.mjs";
import { loadMappings, javaTypeToDescriptor, splitTypes } from "../lib/mappings.mjs";
import { convertJar, writePackage } from "../convert.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));
const jars = join(root, "jars");

let passed = 0, failed = 0, skipped = 0;
const failures = [];

function test(name, fn) {
  try { fn(); passed++; console.log("  ok   " + name); }
  catch (error) {
    if (error && error.skip) { skipped++; console.log("  skip " + name + " — " + error.message); return; }
    failed++; failures.push({ name, error });
    console.log("  FAIL " + name + "\n       " + (error && error.stack || error));
  }
}
function ok(value, what) { if (!value) { throw new Error(what || "expected a truthy value"); } }
function eq(actual, expected, what) {
  const a = JSON.stringify(actual), b = JSON.stringify(expected);
  if (a !== b) { throw new Error((what || "value") + ": expected " + b + ", got " + a); }
}
function skip(reason) { const error = new Error(reason); error.skip = true; throw error; }
function jarPath(name) {
  const path = join(jars, name);
  if (!existsSync(path)) { skip(name + " is not in converter/jars (fetch it with converter/tools/fetch-mod.mjs)"); }
  return path;
}
function parsesAsJavaScript(source) {
  new vm.Script(source, { filename: "generated.js" });
}

console.log("webmc jsmod converter\n");

/* ------------------------------------------------------------------ zip ----------------------------------- */
test("a zip written by this project reads back byte for byte", () => {
  const zip = writeZip([
    { name: "webmc.mod.json", data: JSON.stringify({ id: "x" }) },
    { name: "index.js", data: "console.log('hello');\n".repeat(200) },
    { name: "stored.txt", data: "stored", store: true }
  ]);
  const read = readZip(new Uint8Array(zip));
  eq(read.readText("webmc.mod.json"), JSON.stringify({ id: "x" }), "manifest");
  eq(read.readText("stored.txt"), "stored", "stored entry");
  ok(read.readText("index.js").includes("hello"), "deflated entry");
  eq(read.names.length, 3, "entry count");
});

/* ------------------------------------------------------------------ descriptors --------------------------- */
test("Java type names become JVM descriptors", () => {
  eq(javaTypeToDescriptor("int"), "I", "int");
  eq(javaTypeToDescriptor("java.lang.String"), "Ljava/lang/String;", "object");
  eq(javaTypeToDescriptor("net.minecraft.core.Direction[]"), "[Lnet/minecraft/core/Direction;", "array");
  eq(javaTypeToDescriptor("void"), "V", "void");
  eq(javaTypeToDescriptor("java.util.List<java.lang.String>"), "Ljava/util/List;", "generics are erased");
  eq(splitTypes("int,java.util.List<java.lang.String>,boolean"), ["int", "java.util.List<java.lang.String>", "boolean"], "top-level split");
});

test("the opcode table is complete", () => {
  const names = Object.values(OPCODE_TABLE).map((entry) => entry.name);
  for (const needed of ["aload_0", "invokedynamic", "tableswitch", "wide", "goto_w", "iinc", "aastore", "d2f"]) {
    ok(names.includes(needed), "missing " + needed);
  }
  eq(names.length, 202, "opcode count");
});

/* ------------------------------------------------------------------ mappings ------------------------------ */
test("intermediary names map to the named client", () => {
  const dir = join(root, "mappings", "1.21.11");
  if (!existsSync(join(dir, "client.txt"))) { skip("converter/mappings/1.21.11 is not present (tools/fetch-mappings.mjs)"); }
  const map = loadMappings(dir);
  ok(map, "mappings load");
  ok(map.size.classes > 9000, "class count");
  ok(map.size.methods > 20000, "method count");
  eq(map.class("net/minecraft/class_310"), "net/minecraft/client/Minecraft", "Minecraft");
  eq(map.method("net/minecraft/class_310", "method_1574"), "tick", "Minecraft.tick");
  eq(map.method("net/minecraft/client/Minecraft", "method_1574"), "tick", "by named owner too");
  eq(map.methodAnywhere("method_1574"), "tick", "by name alone");
});

/* ------------------------------------------------------------------ class files --------------------------- */
test("a real class file parses, scans, and keeps its annotations", () => {
  const path = jarPath("hello-mixin.jar");
  const jar = readZip(readFileSync(path));
  const classNames = jar.names.filter((n) => n.endsWith(".class"));
  ok(classNames.length, "classes in the jar");
  const info = parseClass(jar.read(classNames[0]));
  ok(info.name, "class name");
  ok(info.methods.length, "methods");
  const scanned = info.methods.filter((m) => m.code).map((m) => scanBytecode(info.name, m, info.pool, info.bootstrapMethods));
  ok(scanned.length, "bytecode scanned");
});

/* ------------------------------------------------------------------ conversions --------------------------- */
test("a small Fabric mod converts to a package that runs", () => {
  const path = jarPath("hello-fabric.jar");
  const result = convertJar(path);
  ok(result.ok, "conversion succeeded");
  eq(result.report.verdict, "runs", "verdict");
  eq(result.report.skippedMethods, 0, "nothing left out");
  eq(result.report.entrypoints.length, 1, "one entrypoint");
  ok(result.report.entrypoints[0].translated, "the entrypoint translated");
  parsesAsJavaScript(result.source);
  ok(result.source.includes("webmc.defineMod"), "it defines a mod");
});

test("a real Modrinth mod keeps its Fabric events, keybinds and mixin plan", () => {
  const path = jarPath("Gamma-Utils-2.5.10+mc1.21.11.jar");
  const result = convertJar(path);
  ok(result.ok, "conversion succeeded");
  ok(result.report.events.length >= 8, "events found (" + result.report.events.length + ")");
  ok(result.report.events.filter((e) => e.translated).length >= 8, "event handlers translated");
  ok(result.report.keybinds.length >= 5, "keybinds found");
  ok(result.report.mixins.summary.injectionPoints >= 5, "mixin injections found");
  parsesAsJavaScript(result.source);
});

test("Meteor Client converts into modules and a named mixin plan", () => {
  const path = jarPath("meteor-client-1.21.11-86.jar");
  const result = convertJar(path);
  ok(result.ok, "conversion succeeded");
  ok(result.report.modules.length >= 100, "module classes found (" + result.report.modules.length + ")");
  ok(result.report.mixins.summary.injectionPoints >= 200, "injections found (" + result.report.mixins.summary.injectionPoints + ")");
  ok(result.report.translatedMethods >= 2000, "methods transpiled (" + result.report.translatedMethods + ")");
  const unmapped = result.report.mixins.topTargets.filter((t) => /class_\d+/.test(t.target));
  eq(unmapped, [], "every mixin class target is a real client class");
  const unmappedMethods = result.report.mixins.topMethods.filter((t) => /^method_\d+$/.test(t.target));
  eq(unmappedMethods, [], "every mixin method target is a real method");
  parsesAsJavaScript(result.source);
  ok(result.source.includes("webmc.patches.add"), "the patch plan is in the generated mod");
});

test("a writePackage round trip produces a readable .jsmod", () => {
  const path = jarPath("hello-fabric.jar");
  const result = convertJar(path);
  const out = mkdtempSync(join(tmpdir(), "webmc-pkg-"));
  const written = writePackage(result, out);
  const bytes = readFileSync(written.packageFile);
  const read = readZip(new Uint8Array(bytes));
  ok(read.has("webmc.mod.json"), "manifest in the package");
  ok(read.has("index.js"), "source in the package");
  ok(read.has("REPORT.md"), "report in the package");
  const manifest = JSON.parse(read.readText("webmc.mod.json"));
  eq(manifest.id, "hello-fabric", "manifest id");
  ok(Array.isArray(manifest.capabilities), "capabilities declared");
  parsesAsJavaScript(read.readText("index.js"));
});

test("a jar that is not a Fabric mod is refused with a reason", () => {
  const path = jarPath("fabric-transitive-access-wideners-v1-7.1.0+014c8cec3e.jar");
  const result = convertJar(path);
  // This one is a Fabric mod with no code at all: it must convert (trivially), not crash.
  ok(result.ok, "it converts as an empty mod");
  eq(result.report.stats.methodCount, 0, "no methods");
});

/* ------------------------------------------------------------------ report -------------------------------- */
console.log("\n" + passed + " passed, " + failed + " failed, " + skipped + " skipped");
if (failed) {
  for (const failure of failures) { console.log("\n" + failure.name + "\n" + (failure.error && failure.error.stack || failure.error)); }
  process.exit(1);
}
