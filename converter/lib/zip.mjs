/* A zip reader for jars, using only Node's zlib.
 *
 * Central-directory driven: names, sizes and offsets come from the directory, so a jar with a
 * streamed local header still reads correctly. Deflate and stored entries; zip64 is refused with
 * a sentence rather than misread.
 */
import { inflateRawSync } from "node:zlib";

export function isZip(bytes) {
  return bytes.length > 4 && bytes[0] === 0x50 && bytes[1] === 0x4b && (bytes[2] === 3 || bytes[2] === 5 || bytes[2] === 7);
}

export function readZip(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let eocd = -1;
  const lowest = Math.max(0, bytes.length - 65558);
  for (let i = bytes.length - 22; i >= lowest; i--) {
    if (view.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
  }
  if (eocd < 0) { throw new Error("not a zip: no end-of-central-directory record"); }
  const count = view.getUint16(eocd + 10, true);
  const directorySize = view.getUint32(eocd + 12, true);
  let at = view.getUint32(eocd + 16, true);
  if (count === 0xffff || directorySize === 0xffffffff || at === 0xffffffff) {
    throw new Error("this jar uses zip64, which the reader does not claim to support");
  }
  const files = new Map();
  for (let n = 0; n < count; n++) {
    if (view.getUint32(at, true) !== 0x02014b50) { throw new Error("damaged central directory at entry " + n); }
    const method = view.getUint16(at + 10, true);
    const crc = view.getUint32(at + 16, true);
    const compressedSize = view.getUint32(at + 20, true);
    const uncompressedSize = view.getUint32(at + 24, true);
    const nameLength = view.getUint16(at + 28, true);
    const extraLength = view.getUint16(at + 30, true);
    const commentLength = view.getUint16(at + 32, true);
    const localAt = view.getUint32(at + 42, true);
    const name = new TextDecoder().decode(bytes.subarray(at + 46, at + 46 + nameLength));
    const localNameLength = view.getUint16(localAt + 26, true);
    const localExtraLength = view.getUint16(localAt + 28, true);
    const dataAt = localAt + 30 + localNameLength + localExtraLength;
    files.set(name, {
      name,
      crc,
      method,
      compressedSize,
      size: uncompressedSize,
      data: () => {
        const slice = bytes.subarray(dataAt, dataAt + compressedSize);
        if (method === 0) { return slice; }
        if (method === 8) { return new Uint8Array(inflateRawSync(slice)); }
        throw new Error("zip entry " + name + " uses compression method " + method);
      },
      text: () => new TextDecoder().decode(files.get(name).data())
    });
    at += 46 + nameLength + extraLength + commentLength;
  }
  return {
    files,
    names: Array.from(files.keys()),
    has: (name) => files.has(name),
    entry: (name) => files.get(name) || null,
    find: (pattern) => Array.from(files.keys()).filter((name) => pattern.test(name)),
    read: (name) => (files.has(name) ? files.get(name).data() : null),
    readText: (name) => (files.has(name) ? files.get(name).text() : null)
  };
}
