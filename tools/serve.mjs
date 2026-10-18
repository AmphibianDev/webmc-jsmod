#!/usr/bin/env node
/* A static server for this folder, with the two headers a browser build wants and a report sink.
 *
 *     node tools/serve.mjs [--port 8099]
 *
 * `/__report` accepts POSTs from the page (`?report=1`): the loader forwards every message the mod
 * runtime sends, which is how tools/browser-check.mjs sees into a headless browser.
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));

const args = process.argv.slice(2);
const portArg = args.indexOf("--port");
const port = portArg >= 0 ? Number(args[portArg + 1]) : Number(process.env.PORT || 8099);

export const reports = [];

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".wasm": "application/wasm",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/markdown; charset=utf-8"
};

export function createStaticServer(options = {}) {
  const reports = [];
  const server = createServer(async (request, response) => {
    const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
    if (url.pathname === "/__report" && request.method === "POST") {
      let body = "";
      request.on("data", (chunk) => { body += chunk; if (body.length > 8_000_000) { request.destroy(); } });
      request.on("end", () => {
        try { reports.push(JSON.parse(body)); } catch (error) { reports.push({ kind: "unparseable", body: body.slice(0, 400) }); }
        response.writeHead(204, { "access-control-allow-origin": "*" });
        response.end();
      });
      return;
    }
    if (url.pathname === "/__reports" && request.method === "GET") {
      response.writeHead(200, { "content-type": "application/json", "access-control-allow-origin": "*" });
      response.end(JSON.stringify(reports, null, 2));
      return;
    }
    let path;
    try { path = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, ""); } catch (error) { path = "/"; }
    if (path === "/" || path === "") { path = "/index.html"; }
    const file = join(root, path);
    if (!file.startsWith(root)) { response.writeHead(403); response.end("no"); return; }
    try {
      const info = await stat(file);
      if (info.isDirectory()) { response.writeHead(302, { location: path.replace(/\/?$/, "/") + "index.html" }); response.end(); return; }
      const body = await readFile(file);
      response.writeHead(200, {
        "content-type": TYPES[extname(file).toLowerCase()] || "application/octet-stream",
        "content-length": body.length,
        "cache-control": "no-cache",
        "access-control-allow-origin": "*"
      });
      response.end(body);
    } catch (error) {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      response.end("not found: " + path);
    }
  });
  server.reports = reports;
  return server;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const server = createStaticServer();
  server.listen(port, "127.0.0.1", () => {
    console.log(`webmc-jsmod on http://127.0.0.1:${port}/`);
    console.log(`  client:  http://127.0.0.1:${port}/client/1.21.11/`);
    console.log(`  report:  http://127.0.0.1:${port}/__reports`);
  });
}
