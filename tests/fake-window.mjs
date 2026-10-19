#!/usr/bin/env node
/* A fake client window, just real enough to run the runtime in Node.
 *
 * It publishes the same globals the compiled client publishes, so the runtime's watchers fire the
 * same way they will in a browser. The tests press keys by pushing the client's own tuple shape.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const here = dirname(fileURLToPath(import.meta.url));
export const RUNTIME = join(here, "..", "runtime", "dist", "webmc.js");

export function makeElement(tag) {
  const element = {
    tagName: String(tag).toUpperCase(),
    children: [],
    style: { cssText: "", setProperty() {}, removeProperty() {} },
    dataset: {},
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    attributes: {},
    textContent: "",
    innerHTML: "",
    value: "",
    id: "",
    type: "",
    checked: false,
    parentNode: null,
    appendChild(child) { child.parentNode = element; element.children.push(child); return child; },
    removeChild(child) { element.children = element.children.filter((c) => c !== child); child.parentNode = null; return child; },
    setAttribute(name, value) { element.attributes[name] = value; },
    getAttribute(name) { return element.attributes[name]; },
    addEventListener() {}, removeEventListener() {},
    focus() {},
    select() {},
    querySelector() { return null; },
    querySelectorAll() { return []; },
    getBoundingClientRect() { return { left: 0, top: 0, width: 854, height: 480 }; }
  };
  if (element.tagName === "CANVAS") {
    element.width = 854; element.height = 480;
    element.getContext = () => context2d();
  }
  return element;
}

export function context2d() {
  const ctx = {
    canvas: null, font: "", textAlign: "left", textBaseline: "top", fillStyle: "#fff", strokeStyle: "#fff",
    globalAlpha: 1, lineWidth: 1,
    operations: [],
    setTransform() {}, clearRect() {}, fillRect() {}, beginPath() {}, closePath() {},
    moveTo() {}, lineTo() {}, arcTo() {}, rect() {}, fill() {}, stroke() {},
    fillText(text) { ctx.operations.push(["fillText", text]); },
    drawImage() {},
    measureText(text) { return { width: String(text).length * 5 }; },
    save() {}, restore() {}
  };
  return ctx;
}

export function makeWindow(options = {}) {
  const listeners = new Map();
  const window = {
    __webmcMods: options.mods || [],
    __webmcClient: { base: "http://localhost:8099/", version: "1.21.11", trustAll: options.trustAll === true },
    innerWidth: 854, innerHeight: 480, devicePixelRatio: 1,
    parent: null,
    performance: { now: () => Number(process.hrtime.bigint() / 1000000n) },
    localStorage: makeStorage(),
    location: { href: "http://localhost:8099/index.html", search: "" },
    navigator: { userAgent: "node" },
    console,
    setTimeout, clearTimeout,
    // Real timers: the runtime's schedulers (patch application, internals polling) are part of what
    // is under test, and a stub hides them.
    setInterval: (fn, ms) => setInterval(fn, ms),
    clearInterval: (id) => clearInterval(id),
    queueMicrotask: (fn) => queueMicrotask(fn),
    Uint8Array, TextDecoder, JSON, Math, Date, Promise, Object, Array, Number, String, Boolean, Error, Map, Set, Symbol,
    Image: function Image() { this.complete = false; },
    requestAnimationFrame(fn) { window.__rafCount = (window.__rafCount || 0) + 1; if (options.autotick) { setTimeout(() => fn(window.performance.now()), 1); } return window.__rafCount; },
    cancelAnimationFrame() {},
    addEventListener(type, fn) { (listeners.get(type) || listeners.set(type, []).get(type) || []).push(fn); },
    removeEventListener(type, fn) {
      const list = listeners.get(type) || [];
      listeners.set(type, list.filter((item) => item !== fn));
    },
    dispatch(type, event) {
      (listeners.get(type) || []).forEach((fn) => fn(Object.assign({ type, preventDefault() {}, stopPropagation() {} }, event)));
    },
    postMessage() {},
    __listeners: listeners
  };
  window.window = window;
  window.self = window;
  window.document = {
    readyState: "complete",
    title: "",
    body: makeElement("body"),
    activeElement: null,
    documentElement: { style: { setProperty() {} } },
    createElement: makeElement,
    addEventListener(type, fn) { (listeners.get("doc:" + type) || (listeners.set("doc:" + type, []), listeners.get("doc:" + type))).push(fn); },
    getElementById() { return null; },
    dispatch(type, event) {
      (listeners.get("doc:" + type) || []).forEach((fn) => fn(Object.assign({ type, preventDefault() {}, stopPropagation() {} }, event)));
    }
  };
  // The client's globals arrive late: expose them as plain properties, exactly like the real page
  // does. The runtime watches them with accessors, so assigning them is what the client does.
  window.__installClient = function () {
    window.__gaiusGlfwEvents = [];
    window.__gaiusGlfwEventHead = 0;
    window.__gaiusGlfwKeys = Object.create(null);
    window.__gaiusNettyBridge = fakeBridge();
    window.__gaiusMinecraftState = { screen: null, level: false, player: null, loadedChunkCount: 0, clientDistance: {} };
    window.__gaiusWebGL = context2d();
    return window;
  };
  return window;
}

export function fakeBridge() {
  const channels = new Map();
  channels.set(0, { inbound: [], pendingInbound: [], inboundHead: 0, pendingInboundHead: 0, disposed: false });
  return {
    channels,
    sent: [],
    send(channel, bytes) { this.sent.push([channel, bytes]); return true; },
    closed() { return false; },
    recordDecodedPacketQueue() {},
    hasPumpableInbound() { return false; }
  };
}

export function makeStorage() {
  const map = new Map();
  return {
    get length() { return map.size; },
    key(i) { return Array.from(map.keys())[i] || null; },
    getItem(key) { return map.has(String(key)) ? map.get(String(key)) : null; },
    setItem(key, value) { map.set(String(key), String(value)); },
    removeItem(key) { map.delete(String(key)); },
    clear() { map.clear(); }
  };
}

/** Load the runtime into a fake window, the way the client's <head> does. */
export function loadRuntime(options = {}) {
  const window = makeWindow(options);
  const source = readFileSync(RUNTIME, "utf8");
  const context = vm.createContext(Object.assign(window, {
    globalThis: window,
    self: window,
    window
  }));
  // The runtime uses bare `console`, `setTimeout`, …: they are on the context.
  vm.runInContext(source, context, { filename: "webmc.js" });
  return window;
}
