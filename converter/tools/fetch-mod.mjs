#!/usr/bin/env node
/* Fetch real mod jars from Modrinth, for converting and for the test corpus.
 *
 *     node converter/tools/fetch-mod.mjs appleskin shulkerboxtooltip zoomify
 *     node converter/tools/fetch-mod.mjs --list                       # what is already here
 *     node converter/tools/fetch-mod.mjs --version 1.21.11 modmenu
 *
 * Modrinth's API is reached through a proxy when the machine needs one (`--proxy`, default
 * socks5h://127.0.0.1:1080, or $WEBSOCKS). Nothing is committed: jars land in converter/jars/,
 * which is for this machine.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, writeFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, "..", ".."));
const jars = join(root, "converter", "jars");
mkdirSync(jars, { recursive: true });

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const at = args.indexOf("--" + name);
  return at >= 0 && args[at + 1] && !args[at + 1].startsWith("--") ? args[at + 1] : fallback;
};
const proxy = flag("proxy", process.env.WEBSOCKS || "socks5h://127.0.0.1:1080");
const gameVersion = flag("version", "1.21.11");
const loader = flag("loader", "fabric");

function curl(url, output) {
  const options = ["-sS", "-L", "--max-time", "120"];
  if (proxy) { options.push("--proxy", proxy); }
  if (output) { options.push("-o", output); }
  return execFileSync("curl", options.concat([url]), { encoding: "utf8", maxBuffer: 1024 * 1024 * 64 });
}

if (args.includes("--list")) {
  for (const name of readdirSync(jars).filter((n) => n.endsWith(".jar"))) {
    console.log((statSync(join(jars, name)).size / 1024).toFixed(0).padStart(7) + " KB  " + name);
  }
  process.exit(0);
}

const slugs = args.filter((a) => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--version" && args[args.indexOf(a) - 1] !== "--proxy" && args[args.indexOf(a) - 1] !== "--loader");

if (!slugs.length) {
  console.error("usage: node converter/tools/fetch-mod.mjs [--version 1.21.11] [--proxy socks5h://…] <slug> [slug…]");
  process.exit(1);
}

let failed = 0;
for (const slug of slugs) {
  try {
    const query = `https://api.modrinth.com/v2/project/${encodeURIComponent(slug)}/version?game_versions=%5B%22${encodeURIComponent(gameVersion)}%22%5D&loaders=%5B%22${loader}%22%5D`;
    const versions = JSON.parse(curl(query));
    if (!Array.isArray(versions) || !versions.length) {
      console.error(`${slug}: no ${loader} version for ${gameVersion}`);
      failed++;
      continue;
    }
    const version = versions[0];
    const file = (version.files || []).find((f) => f.primary) || (version.files || [])[0];
    if (!file) { console.error(`${slug}: the version has no files`); failed++; continue; }
    const name = file.filename.replace(/[^\w.+-]/g, "_");
    curl(file.url, join(jars, name));
    console.log(`${slug} ${version.version_number} -> converter/jars/${name} (${(file.size / 1024).toFixed(0)} KB)`);
  } catch (error) {
    console.error(`${slug}: ${String(error.message || error).split("\n")[0]}`);
    failed++;
  }
}
process.exit(failed ? 1 : 0);
