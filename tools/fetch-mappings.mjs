#!/usr/bin/env node
/* Fetch the two mapping files the converter joins, and put them where it looks for them.
 *
 *     node tools/fetch-mappings.mjs --version-json <1.21.11.json> --intermediary <intermediary.jar>
 *     node tools/fetch-mappings.mjs --url <client.txt url> --file <client.txt> --version 1.21.11
 *
 * Why two files: a Fabric mod's bytecode names Minecraft the Fabric way (`class_310.method_1574`),
 * while this project's client is compiled from Mojang's named mappings (`Minecraft.tick`). Joining
 * Mojang's client mappings (obfuscated -> named) with Fabric's intermediary (obfuscated ->
 * intermediary) gives the map the converter needs.
 *
 * The files are **not** committed: Mojang's mappings may not be redistributed. This tool fetches
 * them for the machine that runs the conversion, and refuses to write a file whose sha1 does not
 * match what the version manifest promises.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { inflateRawSync } from "node:zlib";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));
const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const at = args.indexOf("--" + name);
  return at >= 0 && args[at + 1] && !args[at + 1].startsWith("--") ? args[at + 1] : fallback;
};
const proxy = flag("proxy", process.env.WEBSOCKS || "");
const version = flag("version", "1.21.11");
const outDir = join(root, "converter", "mappings", version);
mkdirSync(outDir, { recursive: true });

function curl(url, output) {
  const options = ["-sS", "-L", "--max-time", "300"];
  if (proxy) { options.push("--proxy", proxy); }
  options.push("-o", output);
  execFileSync("curl", options.concat([url]), { stdio: ["ignore", "ignore", "inherit"] });
}

function sha1(path) {
  return createHash("sha1").update(readFileSync(path)).digest("hex");
}

/* ---- client mappings ------------------------------------------------------------------------ */
let clientUrl = flag("url", null);
let clientSha1 = flag("sha1", null);
const versionJsonPath = flag("version-json", null);
if (!clientUrl && versionJsonPath) {
  const manifest = JSON.parse(readFileSync(versionJsonPath, "utf8"));
  const mappings = manifest.downloads && manifest.downloads.client_mappings;
  if (!mappings) { console.error("that version JSON has no client_mappings"); process.exit(1); }
  clientUrl = mappings.url;
  clientSha1 = mappings.sha1;
}
if (clientUrl) {
  const target = join(outDir, "client.txt");
  console.log("fetching client mappings -> " + target);
  curl(clientUrl, target);
  const got = sha1(target);
  if (clientSha1 && got !== clientSha1) {
    rmSync(target);
    console.error("client.txt sha1 mismatch: expected " + clientSha1 + ", got " + got + " — the file was deleted");
    process.exit(1);
  }
  console.log("  ok   client.txt  sha1 " + got.slice(0, 12) + "…");
}

/* ---- intermediary --------------------------------------------------------------------------- */
const intermediaryJar = flag("intermediary", null) || flag("file", null);
if (intermediaryJar && /\.json$/.test(intermediaryJar)) {
  console.error("--file wants a jar (the intermediary jar); the version JSON is --version-json");
  process.exit(1);
}
if (intermediaryJar) {
  const bytes = readFileSync(intermediaryJar);
  const target = join(outDir, "intermediary.tiny");
  writeFileSync(target, extractTiny(bytes));
  console.log("  ok   intermediary.tiny from " + intermediaryJar);
}

if (!existsSync(join(outDir, "client.txt")) || !existsSync(join(outDir, "intermediary.tiny"))) {
  console.log("\nstill missing:");
  if (!existsSync(join(outDir, "client.txt"))) { console.log("  client.txt         — use --version-json <version.json> or --url <client.txt>"); }
  if (!existsSync(join(outDir, "intermediary.tiny"))) { console.log("  intermediary.tiny  — use --intermediary <intermediary-<version>-v2.jar>"); }
  process.exit(1);
}
console.log("\nconverter/mappings/" + version + " is ready; the converter picks it up automatically");

function extractTiny(bytes) {
  if (bytes.slice(0, 2).toString("binary") !== "PK") { return bytes; }
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let eocd = -1;
  for (let i = bytes.length - 22; i >= 0; i--) { if (view.getUint32(i, true) === 0x06054b50) { eocd = i; break; } }
  if (eocd < 0) { throw new Error("not a zip: " + intermediaryJar); }
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
    if (name === "mappings/mappings.tiny") {
      const localNameLength = view.getUint16(localAt + 26, true);
      const localExtraLength = view.getUint16(localAt + 28, true);
      const dataAt = localAt + 30 + localNameLength + localExtraLength;
      const slice = bytes.subarray(dataAt, dataAt + compressedSize);
      return method === 0 ? slice : new Uint8Array(inflateRawSync(slice));
    }
    at += 46 + nameLength + extraLength + commentLength;
  }
  throw new Error("mappings/mappings.tiny is not in " + intermediaryJar);
}
