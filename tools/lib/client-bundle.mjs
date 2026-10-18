/* Shared plumbing for the client bundle: find the embedded streams, read them, write a copy back.
 *
 * The client is one HTML document with `const embedded = {...}` holding gzip streams as base64.
 * These helpers are the only place that format is parsed, so the patcher and the symbol builder can
 * never disagree about where a stream starts or ends.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { gzipSync, gunzipSync } from "node:zlib";
import { join } from "node:path";

export function readClient(dir) {
  const manifest = JSON.parse(readFileSync(join(dir, "manifest.json"), "utf8"));
  const html = Buffer.concat(manifest.chunks.map((chunk) => readFileSync(join(dir, chunk.path))));
  return { manifest, html };
}

export function findEmbedded(html) {
  const marker = Buffer.from("const embedded = ");
  const markerAt = html.indexOf(marker);
  if (markerAt < 0) { throw new Error("no `const embedded = ` in this client"); }
  const start = html.indexOf(0x7b, markerAt);
  let depth = 0, inString = false, escaped = false, end = -1;
  for (let i = start; i < html.length; i++) {
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
  if (end < 0) { throw new Error("could not find the end of the embedded object"); }
  return { markerAt, start, end, object: JSON.parse(html.subarray(start, end + 1).toString("utf8")) };
}

export function readStream(embedded, key) {
  const chunks = Array.isArray(embedded[key]) ? embedded[key] : [embedded[key]];
  const gz = Buffer.concat(chunks.map((c) => Buffer.from(c, "base64")));
  return { gz, bytes: gunzipSync(gz) };
}

export function replaceStream(html, bounds, key, bytes) {
  const gz = gzipSync(bytes, { level: 9 });
  const base64 = gz.toString("base64");
  const chunks = [];
  for (let i = 0; i < base64.length; i += 700_000) { chunks.push(base64.slice(i, i + 700_000)); }
  const next = Object.assign({}, bounds.object, { [key]: chunks });
  const serialized = "const embedded = " + JSON.stringify(next);
  return Buffer.concat([
    html.subarray(0, bounds.markerAt),
    Buffer.from(serialized, "utf8"),
    html.subarray(bounds.end + 1)
  ]);
}

export function writeClient(dir, html, manifest, options = {}) {
  mkdirSync(join(dir, "data"), { recursive: true });
  const chunkBytes = options.chunkBytes || 32 * 1024 * 1024;
  const chunks = [];
  for (let i = 0, index = 0; i < html.length; i += chunkBytes, index++) {
    const slice = html.subarray(i, Math.min(html.length, i + chunkBytes));
    const name = `data/client.${String(index).padStart(4, "0")}`;
    writeFileSync(join(dir, name), slice);
    chunks.push({ path: name, size: slice.length, sha256: createHash("sha256").update(slice).digest("hex") });
  }
  const out = Object.assign({}, manifest, {
    bytes: html.length,
    total: html.length,
    chunk_bytes: chunkBytes,
    sha256: createHash("sha256").update(html).digest("hex"),
    chunks
  });
  delete out.note;
  writeFileSync(join(dir, "manifest.json"), JSON.stringify(out, null, 1) + "\n");
  return out;
}
