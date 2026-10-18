#!/usr/bin/env node
/* Convert a Fabric mod jar into a .jsmod package that runs in this project's client.
 *
 *     node converter/convert.mjs <mod.jar> [--out dist-converted] [--name <id>] [--no-internals]
 *     node converter/convert.mjs <mod.jar> --json          # the report only, for a script
 *     node converter/convert.mjs --all                     # every jar in converter/jars/
 *
 * The output is:
 *   <out>/<id>-<version>.jsmod   the package a player adds (zip: manifest, index.js, report)
 *   <out>/<id>/index.js          the generated source, readable
 *   <out>/<id>/webmc.mod.json    the generated manifest
 *   <out>/<id>/report.json       machine-readable truth about the conversion
 *   <out>/<id>/REPORT.md         the same, for a human
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { basename, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { analyzeJar } from "./lib/fabric.mjs";
import { loadMappings } from "./lib/mappings.mjs";
import { translate } from "./lib/translate.mjs";
import { writeZip, reportMarkdown } from "./lib/package.mjs";

const here = dirname(fileURLToPath(import.meta.url));

let mappingsCache = null;
let mappingsLoaded = false;
function defaultMappings() {
  if (mappingsLoaded) { return mappingsCache; }
  mappingsLoaded = true;
  const dir = join(here, "mappings");
  if (!existsSync(dir)) { return null; }
  const versions = readdirSync(dir).filter((name) => existsSync(join(dir, name, "client.txt")));
  if (!versions.length) { return null; }
  versions.sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
  mappingsCache = loadMappings(join(dir, versions[0]));
  return mappingsCache;
}

export function convertJar(path, options = {}) {
  const bytes = readFileSync(path);
  const sha256 = createHash("sha256").update(bytes).digest("hex");
  const analysis = analyzeJar(bytes);
  if (!analysis.fabric) {
    return { ok: false, error: "no fabric.mod.json: this is not a Fabric mod (or it is a nested jar)" };
  }
  const mappings = options.mappings !== null && options.mappings !== undefined ? options.mappings : defaultMappings();
  const result = translate(analysis, {
    jarName: basename(path),
    sha256,
    internals: options.internals !== false,
    mappings
  });
  return { ok: true, analysis, ...result, sha256, bytes: bytes.length };
}

export function writePackage(result, outDir) {
  mkdirSync(outDir, { recursive: true });
  const folder = join(outDir, result.manifest.id);
  mkdirSync(folder, { recursive: true });
  const markdown = reportMarkdown(result.manifest, result.report);
  writeFileSync(join(folder, "index.js"), result.source);
  writeFileSync(join(folder, "webmc.mod.json"), JSON.stringify(result.manifest, null, 2) + "\n");
  writeFileSync(join(folder, "report.json"), JSON.stringify(result.report, null, 2) + "\n");
  writeFileSync(join(folder, "REPORT.md"), markdown);
  const packageFile = join(outDir, `${result.manifest.id}-${result.manifest.version}.jsmod`);
  const zip = writeZip([
    { name: "webmc.mod.json", data: JSON.stringify(result.manifest, null, 2) + "\n" },
    { name: "index.js", data: result.source },
    { name: "report.json", data: JSON.stringify(result.report, null, 2) + "\n" },
    { name: "REPORT.md", data: markdown }
  ]);
  writeFileSync(packageFile, zip);
  return { folder, packageFile, bytes: zip.length };
}

function summary(result, packageFile) {
  const report = result.report;
  const lines = [];
  lines.push(`${result.manifest.id} ${result.manifest.version}  —  ${result.manifest.name}`);
  lines.push(`  file      ${report.source} (${(result.bytes / 1024).toFixed(0)} KB, sha256 ${result.sha256.slice(0, 12)}…)`);
  lines.push(`  classes   ${report.stats.classCount}, methods ${report.stats.methodCount}`);
  lines.push(`  translated ${report.translatedMethods} methods, ${report.skippedMethods} left out`);
  lines.push(`  entrypoints ${report.entrypoints.length} (${report.entrypoints.filter((e) => e.translated).length} translated)`);
  lines.push(`  events      ${report.events.length} (${report.events.filter((e) => e.translated).length} handlers translated)`);
  lines.push(`  keybinds    ${report.keybinds.length}, commands ${report.commands.length}, modules ${report.modules.length}`);
  lines.push(`  mixins      ${report.mixins.summary.mixinClasses} classes, ${report.mixins.summary.injectionPoints} injections (${Object.entries(report.mixins.summary.byKind).map(([k, v]) => k + "=" + v).join(", ") || "none"})`);
  lines.push(`  verdict     ${report.verdict}`);
  if (report.mappings) { lines.push(`  mappings    ${report.mappings.classes} classes, ${report.mappings.methods} methods, ${report.mappings.fields} fields`); }
  if (report.unresolved.length) {
    lines.push(`  still needs internals (top):`);
    for (const entry of report.unresolved.slice(0, 6)) { lines.push(`    ${entry.count}× ${entry.what}`); }
  }
  if (packageFile) { lines.push(`  package   ${packageFile}`); }
  return lines.join("\n");
}

function main() {
  const args = process.argv.slice(2);
  const flag = (name, fallback) => {
    const at = args.indexOf("--" + name);
    return at >= 0 && args[at + 1] && !args[at + 1].startsWith("--") ? args[at + 1] : fallback;
  };
  const outDir = resolve(flag("out", join(here, "..", "dist-converted")));

  if (args.includes("--all")) {
    const jarsDir = join(here, "jars");
    if (!existsSync(jarsDir)) { console.error("no converter/jars/ directory to convert"); process.exit(1); }
    let failed = 0;
    const mappings = defaultMappings();
    for (const name of readdirSync(jarsDir).filter((n) => n.endsWith(".jar"))) {
      const path = join(jarsDir, name);
      try {
        const result = convertJar(path, { internals: !args.includes("--no-internals"), mappings });
        if (!result.ok) { console.error(`${name}: ${result.error}`); failed++; continue; }
        const written = writePackage(result, outDir);
        console.log(summary(result, written.packageFile) + "\n");
      } catch (error) {
        console.error(`${name}: ${error.message}`);
        failed++;
      }
    }
    process.exit(failed ? 1 : 0);
  }

  const jar = args.find((a) => !a.startsWith("--") && /\.jar$/i.test(a));
  if (!jar) {
    console.error("usage: node converter/convert.mjs <mod.jar> [--out dist-converted] [--json] [--no-internals]");
    process.exit(1);
  }
  const result = convertJar(resolve(jar), { internals: !args.includes("--no-internals") });
  if (!result.ok) { console.error(result.error); process.exit(1); }
  if (args.includes("--json")) { console.log(JSON.stringify(result.report, null, 2)); return; }
  const written = writePackage(result, outDir);
  console.log(summary(result, written.packageFile));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) { main(); }
