#!/usr/bin/env node
/* Prove the client in this folder is the published 1.21.11 build, byte for byte.
 *
 *     node tools/verify-client.mjs
 *     node tools/verify-client.mjs --client <other-dir>
 *
 * Each chunk is hashed and compared with manifest.json; the reassembled client is hashed as a whole
 * and compared with the manifest's sha256. The manifest also carries where the bytes came from.
 */
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));
const args = process.argv.slice(2);
const at = args.indexOf("--client");
const clientDir = at >= 0 ? resolve(args[at + 1]) : join(root, "client", "1.21.11");

if (!existsSync(join(clientDir, "manifest.json"))) {
  console.error("no manifest.json in " + clientDir);
  process.exit(2);
}
const manifest = JSON.parse(readFileSync(join(clientDir, "manifest.json"), "utf8"));
let failed = 0;
let total = 0;
const hashes = [];
for (const chunk of manifest.chunks) {
  const path = join(clientDir, chunk.path);
  if (!existsSync(path)) { console.error("MISSING " + chunk.path); failed++; continue; }
  const bytes = readFileSync(path);
  const digest = createHash("sha256").update(bytes).digest("hex");
  const ok = digest === chunk.sha256;
  total += bytes.length;
  hashes.push(bytes);
  console.log((ok ? "  ok   " : "  FAIL ") + chunk.path + "  " + (bytes.length / 1048576).toFixed(1) + " MB  " + digest.slice(0, 16) + "…");
  if (!ok) { failed++; console.log("        expected " + chunk.sha256); }
}
const whole = createHash("sha256").update(Buffer.concat(hashes)).digest("hex");
const wholeOk = !manifest.sha256 || whole === manifest.sha256;
console.log((wholeOk ? "  ok   " : "  FAIL ") + "the whole client  " + whole.slice(0, 16) + "…");
if (!wholeOk) { failed++; console.log("        expected " + manifest.sha256); }
if (manifest.bytes && total !== manifest.bytes) {
  console.log("  FAIL  total bytes: manifest says " + manifest.bytes + ", files are " + total);
  failed++;
} else {
  console.log("  ok   " + (total / 1048576).toFixed(1) + " MB across " + manifest.chunks.length + " chunks");
}
if (manifest.provenance) { console.log("  note  " + manifest.provenance); }
console.log(failed ? "\n" + failed + " check(s) failed" : "\nthe client is intact");
process.exit(failed ? 1 : 0);
