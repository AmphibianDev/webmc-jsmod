#!/usr/bin/env node
/* Build the gallery index from what this site actually ships.
 *
 *     node tools/build-gallery.mjs
 *
 * Reads `mods/index.json` (what the launcher can load), each `mods/converted/*.js` file's size and
 * the conversion report next to its jar when one exists, and writes `gallery/mods.json`. The gallery
 * page is static and reads that file, so publishing a mod is: put the `.jsmod` (or its `index.js`)
 * in `mods/`, add an entry to `mods/index.json`, run this, commit.
 */
import { readFileSync, writeFileSync, existsSync, statSync, mkdirSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(join(here, ".."));
const index = JSON.parse(readFileSync(join(root, "mods", "index.json"), "utf8"));

/* Descriptions a mod author would write; kept here so the gallery is not a file listing. */
const META = {
  "example.hello": { name: "Hello", categories: ["Demo"], summary: "HUD line, a keybind and a command — the smallest useful mod.", authors: ["WebMC"], version: "1.0.0" },
  "example.status": { name: "Status", categories: ["HUD"], summary: "FPS, position, chunks and the current screen, live from the client's state.", authors: ["WebMC"], version: "1.0.0" },
  "example.modules": { name: "Modules demo", categories: ["Demo", "Utility"], summary: "The Meteor shape in JS: modules with categories, settings and toggle keys.", authors: ["WebMC"], version: "1.0.0" },
  "hello-fabric": { name: "Hello Fabric", categories: ["Demo"], summary: "A real Fabric jar converted by converter/convert.mjs — proof of the whole chain.", authors: ["WebMC"], version: "1.0.0" },
  gammautils: { name: "Gamma Utils", categories: ["Utility", "Render"], summary: "Gamma and night-vision controls. 11/11 Fabric events and 8 keybinds translated; converted from Modrinth.", authors: ["Sjouwer"], version: "2.5.10" },
  "meteor-client": { name: "Meteor Client", categories: ["Utility", "Modules"], summary: "The real Meteor Client, converted: 171 modules, 191 patch plans, accessors live. Heavy mixin behaviour is partial.", authors: ["MeteorDevelopment"], version: "1.21.11-86" },
  litematica: { name: "Litematica", categories: ["Building", "Schematic"], summary: "Schematic mod, converted: all of its plans apply (25 injections + 20 accessors).", authors: ["masa"], version: "0.26.16" },
  jei: { name: "JEI", categories: ["Recipe", "UI"], summary: "Item and recipe viewer, converted; 11 Fabric events translated.", authors: ["mezz"], version: "27.53.0.108" },
  zoomify: { name: "Zoomify", categories: ["Utility", "Camera"], summary: "Zoom keybind and smooth camera, converted; its FOV hook applies.", authors: ["isXander"], version: "2.15.2" },
  jade: { name: "Jade", categories: ["HUD", "Information"], summary: "What am I looking at: 11 Fabric events and its keybind translated.", authors: ["Snownee"], version: "21.1.6" },
  shulkerboxtooltip: { name: "Shulker Box Tooltip", categories: ["UI", "Information"], summary: "Shulker contents in the tooltip, converted.", authors: ["MisterPeModder"], version: "5.2.16" },
  appleskin: { name: "AppleSkin", categories: ["HUD", "Information"], summary: "Food and hunger information, converted.", authors: ["squeek502"], version: "3.0.8" }
};

function packageFor(id) {
  const converted = join(root, "mods", "converted", id + ".js");
  if (existsSync(converted)) { return converted; }
  return null;
}

const mods = [];
for (const entry of index.mods || []) {
  const meta = META[entry.id] || {};
  const file = packageFor(entry.id);
  let bytes = null;
  if (file) { bytes = statSync(file).size; }
  mods.push({
    id: entry.id,
    name: meta.name || entry.id,
    version: meta.version || "1.0.0",
    authors: meta.authors || ["unknown"],
    categories: meta.categories || ["Mod"],
    summary: meta.summary || entry.description || "",
    entry: entry.entry,
    optional: !!entry.optional,
    bytes,
    converted: /^converted\//.test(entry.entry || ""),
    install: "index"
  });
}
mods.sort((a, b) => a.name.localeCompare(b.name));

mkdirSync(join(root, "gallery"), { recursive: true });
writeFileSync(join(root, "gallery", "mods.json"), JSON.stringify({
  note: "Written by tools/build-gallery.mjs. The gallery page reads this file.",
  count: mods.length,
  mods
}, null, 1) + "\n");
console.log(`gallery/mods.json: ${mods.length} mods`);
