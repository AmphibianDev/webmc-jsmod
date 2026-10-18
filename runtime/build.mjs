#!/usr/bin/env node
/* Build runtime/dist/webmc.js out of runtime/src/*.js, in filename order.
 *
 * The source files are chapters of one program: each is its own IIFE and they meet on
 * `globalThis.webmc`. Concatenation is the whole build, so there is no bundler to install and
 * nothing to go stale.
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const srcDir = join(here, "src");
const outDir = join(here, "dist");
mkdirSync(outDir, { recursive: true });

const files = readdirSync(srcDir).filter((name) => name.endsWith(".js")).sort();
if (!files.length) {
  console.error("no sources in " + srcDir);
  process.exit(1);
}

const parts = [];
for (const name of files) {
  const body = readFileSync(join(srcDir, name), "utf8");
  parts.push(`/* ===== src/${name} ===== */\n` + body.replace(/__WEBMC_BUILD__/g, buildStamp()));
}
const out = parts.join("\n");
const hash = createHash("sha256").update(out).digest("hex");

writeFileSync(join(outDir, "webmc.js"), out);
writeFileSync(join(outDir, "webmc.build.json"), JSON.stringify({
  name: "webmc-jsmod-runtime",
  builtAt: new Date().toISOString(),
  sources: files,
  bytes: Buffer.byteLength(out),
  sha256: hash
}, null, 2) + "\n");

function buildStamp() {
  return new Date().toISOString().replace(/[-:T]/g, "").slice(0, 12);
}

console.log(`runtime/dist/webmc.js — ${files.length} sources, ${(Buffer.byteLength(out) / 1024).toFixed(1)} KB, sha256 ${hash.slice(0, 16)}…`);
