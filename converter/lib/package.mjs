/* Writing a .jsmod package: a zip with a manifest, one JS file and the truth about it.
 *
 * The format is deliberately the boring one — a zip a player can rename to .zip and read — because
 * a mod platform that hides what it installs is not one this project wants to be.
 */
import { deflateRawSync } from "node:zlib";

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) { c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; }
    table[n] = c;
  }
  return table;
})();

export function crc32(bytes) {
  let crc = 0 ^ -1;
  for (let i = 0; i < bytes.length; i++) { crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ bytes[i]) & 0xff]; }
  return (crc ^ -1) >>> 0;
}

/** entries: [{ name, data: Buffer|string, store?: boolean }] -> Buffer */
export function writeZip(entries) {
  const chunks = [];
  const central = [];
  let offset = 0;
  const encoder = new TextEncoder();

  for (const entry of entries) {
    const nameBytes = encoder.encode(entry.name);
    const data = typeof entry.data === "string" ? encoder.encode(entry.data) : new Uint8Array(entry.data);
    const compressed = entry.store ? data : new Uint8Array(deflateRawSync(data, { level: 9 }));
    const method = entry.store ? 0 : 8;
    const crc = crc32(data);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);          // version needed
    local.writeUInt16LE(0, 6);           // flags
    local.writeUInt16LE(method, 8);
    local.writeUInt16LE(0, 10);          // time
    local.writeUInt16LE(0x21, 12);       // date (1980-01-01)
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(compressed.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBytes.length, 26);
    local.writeUInt16LE(0, 28);
    chunks.push(local, nameBytes, Buffer.from(compressed));
    central.push({ nameBytes, crc, compressed: compressed.length, size: data.length, method, offset });
    offset += local.length + nameBytes.length + compressed.length;
  }

  const centralStart = offset;
  for (const entry of central) {
    const header = Buffer.alloc(46);
    header.writeUInt32LE(0x02014b50, 0);
    header.writeUInt16LE(20, 4);
    header.writeUInt16LE(20, 6);
    header.writeUInt16LE(0, 8);
    header.writeUInt16LE(entry.method, 10);
    header.writeUInt16LE(0, 12);
    header.writeUInt16LE(0x21, 14);
    header.writeUInt32LE(entry.crc, 16);
    header.writeUInt32LE(entry.compressed, 20);
    header.writeUInt32LE(entry.size, 24);
    header.writeUInt16LE(entry.nameBytes.length, 28);
    header.writeUInt16LE(0, 30);
    header.writeUInt16LE(0, 32);
    header.writeUInt16LE(0, 34);
    header.writeUInt16LE(0, 36);
    header.writeUInt32LE(0, 38);
    header.writeUInt32LE(entry.offset, 42);
    chunks.push(header, entry.nameBytes);
    offset += header.length + entry.nameBytes.length;
  }

  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(central.length, 8);
  end.writeUInt16LE(central.length, 10);
  end.writeUInt32LE(offset - centralStart, 12);
  end.writeUInt32LE(centralStart, 16);
  end.writeUInt16LE(0, 20);
  chunks.push(end);
  return Buffer.concat(chunks);
}

export function reportMarkdown(manifest, report) {
  const lines = [];
  lines.push(`# Conversion report — ${manifest.name} ${manifest.version}`);
  lines.push("");
  lines.push(`Source: \`${report.source}\``);
  lines.push("");
  lines.push(`**Verdict:** ${report.verdict}`);
  lines.push("");
  lines.push("| | |");
  lines.push("| --- | --- |");
  lines.push(`| classes | ${report.stats.classCount} |`);
  lines.push(`| methods with bytecode | ${report.stats.methodCount} |`);
  lines.push(`| methods transpiled | ${report.translatedMethods} |`);
  lines.push(`| methods left out | ${report.skippedMethods} |`);
  lines.push(`| mixin classes | ${report.mixins.summary.mixinClasses} |`);
  lines.push(`| mixin injections | ${report.mixins.summary.injectionPoints} |`);
  lines.push("");
  lines.push("## Entrypoints");
  if (!report.entrypoints.length) { lines.push("None found in `fabric.mod.json`."); }
  for (const entry of report.entrypoints) {
    lines.push(`- \`${entry.kind}\` ${entry.className}.${entry.method} — ${entry.translated ? "translated" : "**not translated**"}`);
  }
  lines.push("");
  lines.push("## Fabric API events");
  if (!report.events.length) { lines.push("None found."); }
  for (const event of report.events) {
    lines.push(`- \`${event.fabric}\` → \`webmc.events.on("${event.js}")\` — ${event.translated ? "handler translated" : "**handler not translated**" + (event.reason ? `: ${event.reason}` : "")}`);
  }
  lines.push("");
  lines.push("## Keybinds");
  if (!report.keybinds.length) { lines.push("None found."); }
  for (const keybind of report.keybinds) {
    lines.push(`- \`${keybind.name || "(no translation key)"}\` → key \`${keybind.key}\` (${keybind.from})`);
  }
  lines.push("");
  lines.push("## Commands");
  if (!report.commands.length) { lines.push("None found."); }
  for (const command of report.commands) {
    lines.push(`- \`/${command.name}\` — ${command.translated ? "translated" : "**needs internals**"}`);
  }
  lines.push("");
  lines.push("## Modules (Meteor-style)");
  if (!report.modules.length) { lines.push("None found."); }
  for (const module of report.modules) {
    lines.push(`- \`${module.name}\` (${module.category}) — ${module.translated ? "tick/activate translated" : "registered but the body needs internals"}`);
  }
  lines.push("");
  lines.push("## Mixins");
  lines.push("");
  const summary = report.mixins.summary;
  lines.push(`- ${summary.mixinClasses} mixin classes, ${summary.injectionPoints} injection points, ${summary.accessors} accessors, ${summary.shadows} shadows`);
  lines.push(`- by kind: ${Object.entries(summary.byKind).map(([k, v]) => `${k}=${v}`).join(", ") || "none"}`);
  if (report.mixins.topTargets.length) {
    lines.push("");
    lines.push("Most-mixed-into classes:");
    for (const target of report.mixins.topTargets.slice(0, 15)) {
      lines.push(`- \`${target.target.replace(/\//g, ".")}\` × ${target.count}`);
    }
  }
  if (report.mixins.topMethods && report.mixins.topMethods.length) {
    lines.push("");
    lines.push("Most-injected-into methods:");
    for (const target of report.mixins.topMethods.slice(0, 15)) {
      lines.push(`- \`${target.target}\` × ${target.count}`);
    }
  }
  lines.push("");
  lines.push("## Calls that still need the client internals");
  if (!report.unresolved.length) { lines.push("None: the whole mod was placeable."); }
  for (const entry of report.unresolved.slice(0, 30)) {
    lines.push(`- ${entry.count}× ${entry.what}`);
  }
  lines.push("");
  lines.push("Permitted capabilities in the generated manifest: " + (manifest.capabilities || []).join(", "));
  lines.push("");
  return lines.join("\n");
}
