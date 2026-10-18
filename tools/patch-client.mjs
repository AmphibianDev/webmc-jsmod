#!/usr/bin/env node
/* Build a client copy whose compiled internals are reachable from the page.
 *
 *     node tools/patch-client.mjs --in client/1.21.11 --out client/1.21.11-internals
 *     node tools/patch-client.mjs --in client/1.21.11 --out client/1.21.11-internals --dry-run
 *
 * The client is one 108 MB document whose `embedded` object carries gzip streams: the compiled
 * game (TeaVM JavaScript), the hot-path WebAssembly, the assets. The game's classes live inside a
 * module closure that exposes only `main` — so nothing outside can reach a game object. This tool
 * rewrites exactly one of those streams to add two lines at the end of the module:
 *
 *     globalThis.__gaiusTeaVM = A;      // every class, function and static the build has
 *     globalThis.__gaiusModule = B;     // what the module exported
 *
 * and nothing else. Every byte of the runtime check (the chunk hashes, the whole-client sha256) is
 * recomputed, the original hash is recorded in the new manifest, and `tools/verify-client.mjs`
 * still passes against it because the manifest is what says what the bytes should be.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { gzipSync, gunzipSync } from "node:zlib";
import { join, resolve, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));
const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const at = args.indexOf("--" + name);
  return at >= 0 && args[at + 1] && !args[at + 1].startsWith("--") ? args[at + 1] : fallback;
};
const inDir = resolve(flag("in", join(root, "client", "1.21.11")));
const outDir = resolve(flag("out", join(root, "client", "1.21.11-internals")));
const dryRun = args.includes("--dry-run");
const chunkBytes = Number(flag("chunk", 32 * 1024 * 1024));

const manifest = JSON.parse(readFileSync(join(inDir, "manifest.json"), "utf8"));
const parts = manifest.chunks.map((chunk) => readFileSync(join(inDir, chunk.path)));
const html = Buffer.concat(parts);
const originalSha = createHash("sha256").update(html).digest("hex");
console.log(`read ${(html.length / 1048576).toFixed(1)} MB (sha256 ${originalSha.slice(0, 16)}…)`);

/* ---- find the `embedded` object ------------------------------------------------------------ */
const marker = Buffer.from("const embedded = ");
const markerAt = html.indexOf(marker);
if (markerAt < 0) { console.error("no `const embedded = ` in this client; nothing to patch"); process.exit(1); }
let at = html.indexOf(0x7b, markerAt);   // '{'
let depth = 0, inString = false, escaped = false, end = -1;
for (let i = at; i < html.length; i++) {
  const c = html[i];
  if (inString) {
    if (escaped) { escaped = false; }
    else if (c === 0x5c) { escaped = true; }
    else if (c === 0x22) { inString = false; }
    continue;
  }
  if (c === 0x22) { inString = true; }
  else if (c === 0x7b) { depth++; }
  else if (c === 0x7d) { depth--; if (depth === 0) { end = i; break; } }
}
if (end < 0) { console.error("could not find the end of the embedded object"); process.exit(1); }
console.log(`embedded object: ${((end - at) / 1048576).toFixed(1)} MB of base64 at offset ${at}`);

const embedded = JSON.parse(html.subarray(at, end + 1).toString("utf8"));
for (const key of Object.keys(embedded)) {
  const chunks = Array.isArray(embedded[key]) ? embedded[key] : [embedded[key]];
  const bytes = chunks.reduce((total, chunk) => total + Buffer.from(chunk, "base64").length, 0);
  console.log(`  ${key}: ${chunks.length} chunk(s), ${(bytes / 1048576).toFixed(1)} MB compressed`);
}
if (!embedded.classes) { console.error("no `classes` stream in this client"); process.exit(1); }

/* ---- decompress, patch, recompress --------------------------------------------------------- */
const classesGz = Buffer.concat((Array.isArray(embedded.classes) ? embedded.classes : [embedded.classes]).map((c) => Buffer.from(c, "base64")));
const classes = gunzipSync(classesGz).toString("utf8");
console.log(`compiled game: ${(classes.length / 1048576).toFixed(1)} MB of JavaScript`);

const MARKER = "B.main=C;";
const markerCount = classes.split(MARKER).length - 1;
if (markerCount !== 1) {
  console.error(`expected exactly one "${MARKER}" in the compiled module, found ${markerCount} — refusing to guess`);
  process.exit(1);
}
const PATCH = [
  "/* webmc-jsmod: expose the compiled internals to the page. Two assignments, nothing else. */",
  "try{globalThis.__gaiusTeaVM=A;globalThis.__gaiusExports=B;globalThis.__gaiusPatchInfo=" +
    JSON.stringify({ tool: "webmc-jsmod/tools/patch-client.mjs", at: new Date().toISOString(), originalClientSha256: originalSha }) +
    ";}catch(__webmcPatchError){try{console.error('webmc-jsmod: could not expose internals',__webmcPatchError);}catch(ignored){}}",
  MARKER
].join("\n");

const patched = classes.replace(MARKER, PATCH);
const patchedGz = gzipSync(Buffer.from(patched, "utf8"), { level: 9 });
console.log(`patched: ${(classes.length / 1048576).toFixed(1)} MB -> ${(patchedGz.length / 1048576).toFixed(1)} MB gzip`);

/* ---- reassemble the document --------------------------------------------------------------- */
const base64 = patchedGz.toString("base64");
const newChunks = [];
for (let i = 0; i < base64.length; i += 700_000) { newChunks.push(base64.slice(i, i + 700_000)); }
const newEmbedded = Object.assign({}, embedded, { classes: newChunks });

const serialized = "const embedded = " + JSON.stringify(newEmbedded);
const out = Buffer.concat([
  html.subarray(0, markerAt),
  Buffer.from(serialized, "utf8"),
  html.subarray(at + (end - at) + 1)
]);
console.log(`reassembled client: ${(out.length / 1048576).toFixed(1)} MB`);

if (dryRun) {
  console.log("dry run: nothing written");
  process.exit(0);
}

/* ---- write chunks + manifest ---------------------------------------------------------------- */
mkdirSync(join(outDir, "data"), { recursive: true });
const chunkList = [];
for (let i = 0, index = 0; i < out.length; i += chunkBytes, index++) {
  const slice = out.subarray(i, Math.min(out.length, i + chunkBytes));
  const name = `data/client.${String(index).padStart(4, "0")}`;
  writeFileSync(join(outDir, name), slice);
  chunkList.push({ path: name, size: slice.length, sha256: createHash("sha256").update(slice).digest("hex") });
}
const newManifest = {
  note: "Written by tools/patch-client.mjs: the published client with its compiled internals exposed to the page.",
  title: manifest.title,
  client: manifest.client,
  gateway: manifest.gateway,
  mods: manifest.mods,
  bytes: out.length,
  total: out.length,
  chunk_bytes: chunkBytes,
  sha256: createHash("sha256").update(out).digest("hex"),
  chunks: chunkList,
  provenance: "Patched copy of the published client: `globalThis.__gaiusTeaVM` and `globalThis.__gaiusExports` are assigned at the end of the compiled module. The original whole-client sha256 was " + originalSha + "."
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(newManifest, null, 1) + "\n");
console.log(`wrote ${outDir}`);
console.log(`  ${chunkList.length} chunks, whole-client sha256 ${newManifest.sha256.slice(0, 16)}…`);
console.log(`  original   ${originalSha}`);
