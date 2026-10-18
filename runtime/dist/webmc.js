/* ===== src/00-core.js ===== */
/* WebMC JS mod runtime — core. No dependencies, no build tools, one file out.
 *
 * This file is the first of a set that `runtime/build.mjs` concatenates in name order into
 * `runtime/dist/webmc.js`. Everything shares one IIFE, so the files are chapters, not modules.
 *
 * Ground rules the rest of the runtime keeps:
 *   - The client is somebody else's compiled program. We never reach into it uninvited: we use the
 *     window surface it publishes (`__gaius*`), and we only read what is really there.
 *   - A mod that throws is a mod that is suspended, not a game that dies.
 *   - Every capability a mod gets is named in its manifest, and the ones it did not ask for are
 *     simply not on its API object.
 */
(function (global) {
  "use strict";

  var WebMC = global.webmc = global.webmc || {};
  WebMC.version = "0.1.0";
  WebMC.apiVersion = 1;
  WebMC.build = "202610181116";

  /* ------------------------------------------------------------------ small utilities -------- */

  function now() { return (global.performance && global.performance.now) ? global.performance.now() : Date.now(); }
  function clamp(value, low, high) { return value < low ? low : (value > high ? high : value); }
  function isPlainObject(value) { return !!value && typeof value === "object" && !Array.isArray(value); }
  function has(object, key) { return !!object && Object.prototype.hasOwnProperty.call(object, key); }
  function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function formatError(error) {
    if (!error) { return "unknown error"; }
    var text = error && (error.stack || error.message) ? (error.stack || error.message) : String(error);
    return String(text).split("\n").slice(0, 4).join("\n");
  }
  WebMC.util = { now: now, clamp: clamp, isPlainObject: isPlainObject, has: has, escapeHtml: escapeHtml, formatError: formatError };

  /* ------------------------------------------------------------------ the event bus --------- *
   * One bus, many namespaces ("player:join", "tick", ...). Listeners are isolated: a listener that
   * throws is reported and dropped after too many failures, never allowed to break the emitter.
   */

  function Bus(name) {
    this.name = name;
    this.listeners = new Map();     // event -> [{fn, once, order, failures, id}]
    this.nextId = 1;
    this.muted = false;
  }
  Bus.prototype.on = function (event, fn, options) {
    if (typeof fn !== "function") { throw new TypeError("listener must be a function"); }
    var entry = {
      fn: fn,
      once: !!(options && options.once),
      order: (options && Number(options.order)) || 0,
      failures: 0,
      id: this.nextId++,
      owner: (options && options.owner) || null
    };
    var list = this.listeners.get(event) || [];
    list.push(entry);
    // Higher order first; stable within an order (insertion order).
    list.sort(function (a, b) { return b.order - a.order; });
    this.listeners.set(event, list);
    var self = this;
    return function off() { self.off(event, entry.id); };
  };
  Bus.prototype.once = function (event, fn, options) {
    return this.on(event, fn, Object.assign({}, options || {}, { once: true }));
  };
  Bus.prototype.off = function (event, id) {
    var list = this.listeners.get(event);
    if (!list) { return false; }
    var next = list.filter(function (entry) { return entry.id !== id; });
    if (next.length) { this.listeners.set(event, next); } else { this.listeners.delete(event); }
    return next.length !== list.length;
  };
  Bus.prototype.removeOwner = function (owner) {
    var self = this;
    this.listeners.forEach(function (list, event) {
      var next = list.filter(function (entry) { return entry.owner !== owner; });
      if (next.length) { self.listeners.set(event, next); } else { self.listeners.delete(event); }
    });
  };
  Bus.prototype.emit = function (event, payload) {
    if (this.muted) { return 0; }
    var list = this.listeners.get(event);
    if (!list || !list.length) { return 0; }
    var called = 0;
    var snapshot = list.slice();
    for (var i = 0; i < snapshot.length; i++) {
      var entry = snapshot[i];
      try {
        entry.fn(payload, event);
        called++;
      } catch (error) {
        entry.failures++;
        WebMC.__internal.reportError("listener:" + event, error, entry.owner);
      }
      if (entry.once) {
        var current = this.listeners.get(event);
        if (current) {
          var next = current.filter(function (item) { return item.id !== entry.id; });
          if (next.length) { this.listeners.set(event, next); } else { this.listeners.delete(event); }
        }
      }
    }
    return called;
  };
  Bus.prototype.count = function (event) {
    var list = this.listeners.get(event);
    return list ? list.length : 0;
  };
  WebMC.Bus = Bus;

  /* ------------------------------------------------------------------ errors ------------------ *
   * One place where every failure goes: the mod that caused it is named, the console keeps the
   * detail, and the panel gets a line. A mod's own error must never look like the client's.
   */
  var reports = [];
  WebMC.__internal = {
    reports: reports,
    reportError: function (where, error, owner) {
      var text = formatError(error);
      var entry = { where: where, text: text, owner: owner, at: Date.now() };
      reports.push(entry);
      if (reports.length > 400) { reports.splice(0, 200); }
      try { console.error("[webmc] " + where + (owner ? " (" + owner + ")" : "") + ": " + text); } catch (ignored) {}
      WebMC.__internal.notifyPanel({ kind: "webmc:error", where: where, text: text, owner: owner });
    },
    notifyPanel: function (message) {
      try {
        if (global.parent && global.parent !== global) { global.parent.postMessage(message, "*"); }
      } catch (ignored) {}
    },
    toast: function (text) {
      try { WebMC.__internal.notifyPanel({ kind: "webmc:toast", text: String(text) }); } catch (ignored) {}
      try { console.log("[webmc] " + text); } catch (ignored) {}
    }
  };
})(typeof globalThis !== "undefined" ? globalThis : self);

/* ===== src/10-hooks.js ===== */
/* WebMC JS mod runtime — the platform seam.
 *
 * Where the client is hooked. The client here is the compiled 1.21.11 page (the "Gaius" lineage);
 * it keeps a documented set of `__gaius*` globals on its window. This file taps them:
 *
 *   __gaiusGlfwEvents   the array every DOM input event is pushed into before Java reads it.
 *                       Wrapping its push() is an input hook: observe, rewrite and drop events.
 *   __gaiusMinecraftState   the state snapshot the client publishes (screen, player, world, hit).
 *   __gaiusWebGL        the raw WebGL2 context (frame counting, diagnostics).
 *   __gaiusNettyBridge  the packet channels (send, receive telemetry).
 *   __gaiusStoragePrefix / __gaiusPersistentFiles  the client's own file store.
 *
 * Everything is optional and discovered late: the runtime boots before the client's first script,
 * so the globals do not exist yet. `watch()` installs an accessor and calls back when the client
 * installs the real thing. Nothing here assumes a version: if a global never appears, the
 * capability is simply missing, and the API says so instead of pretending.
 */
(function (global) {
  "use strict";

  var WebMC = global.webmc;
  var internal = WebMC.__internal;

  var capabilities = {};
  var missing = [];
  var evidence = [];

  function declare(name, why) {
    if (why) { missing.push({ capability: name, why: why }); }
    else { capabilities[name] = true; }
    return !!why;
  }
  WebMC.capabilities = capabilities;
  WebMC.missing = missing;
  WebMC.evidence = evidence;

  /* ------------------------------------------------------------------ late globals ------------ *
   * Intercept a global the client will install later, without ever changing the value it sees.
   */
  function watch(name, onSet) {
    var value;
    var installed = false;
    try {
      Object.defineProperty(global, name, {
        configurable: true,
        get: function () { return value; },
        set: function (next) {
          value = next;
          installed = true;
          try { onSet(next); } catch (error) { internal.reportError("hook:" + name, error); }
        }
      });
    } catch (error) {
      // A non-configurable property cannot be watched; read whatever is there.
      if (has(global, name)) { onSet(global[name]); }
    }
    return function () { return installed; };
  }
  function has(object, key) { return !!object && Object.prototype.hasOwnProperty.call(object, key); }
  WebMC.__hooks = { watch: watch };

  /* ------------------------------------------------------------------ the frame loop ---------- *
   * Our own rAF loop: it is what draws the HUD, and it is the clock `tick` is derived from. The
   * game's own loop is untouched.
   */
  var frameBus = new WebMC.Bus("frame");
  var frame = {
    count: 0,
    startedAt: nowMs(),
    lastAt: 0,
    fps: 0,
    fpsWindow: [],
    gameTick: 0,
    accumulator: 0,
    running: false,
    raf: 0,
    beforeFrame: [],
    afterFrame: []
  };

  function nowMs() { return (global.performance && global.performance.now) ? global.performance.now() : Date.now(); }

  function loop(at) {
    if (!frame.running) { return; }
    if (!at) { at = nowMs(); }
    var dt = frame.lastAt ? Math.min(0.25, (at - frame.lastAt) / 1000) : 0.016;
    frame.lastAt = at;
    frame.count++;
    frame.fpsWindow.push(dt);
    if (frame.fpsWindow.length > 60) { frame.fpsWindow.shift(); }
    var sum = 0;
    for (var i = 0; i < frame.fpsWindow.length; i++) { sum += frame.fpsWindow[i]; }
    frame.fps = sum > 0 ? frame.fpsWindow.length / sum : 0;

    // Game ticks at the client's own rate: 20/s, and never more than four in one sticky frame.
    frame.accumulator += dt;
    var ticks = 0;
    while (frame.accumulator >= 0.05 && ticks < 4) {
      frame.accumulator -= 0.05;
      frame.gameTick++;
      ticks++;
      frameBus.emit("tick", { tick: frame.gameTick, dt: 0.05 });
    }

    frameBus.emit("frame", { count: frame.count, dt: dt, fps: frame.fps, tick: frame.gameTick });
    frame.raf = global.requestAnimationFrame(loop);
  }

  function startLoop() {
    if (frame.running) { return; }
    frame.running = true;
    frame.lastAt = 0;
    frame.raf = global.requestAnimationFrame(loop);
  }
  WebMC.__internal.frame = frame;
  WebMC.__internal.frameBus = frameBus;

  /* ------------------------------------------------------------------ input ------------------- *
   * The client's own input layer is JavaScript: DOM listeners push tuples into
   * __gaiusGlfwEvents, and Java drains that array. So the array is the hook, and its shape is
   * [type, a, b, c, d, x, y]:
   *   1  key      [1, glfwKey, domKeyCode, action(1 down / 2 repeat / 0 up), mods, 0, 0]
   *   2  char     [2, codePoint, mods, 0, 0, 0, 0]
   *   3  mouse    [3, button, 1 down / 0 up, mods, 0, x, y]
   *   4  move     [4, 0, 0, 0, 0, x, y]
   *   5  scroll   [5, 0, 0, 0, 0, dx, dy]
   *   7  resize   [7, cssW, cssH, fbW, fbH, 0, 0]
   */
  var GLFW = {
    SPACE: 32, APOSTROPHE: 39, COMMA: 44, MINUS: 45, PERIOD: 46, SLASH: 47,
    NUM0: 48, NUM1: 49, NUM2: 50, NUM3: 51, NUM4: 52, NUM5: 53, NUM6: 54, NUM7: 55, NUM8: 56, NUM9: 57,
    SEMICOLON: 59, EQUAL: 61,
    A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77,
    N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90,
    LEFT_BRACKET: 91, BACKSLASH: 92, RIGHT_BRACKET: 93, GRAVE_ACCENT: 96,
    ESCAPE: 256, ENTER: 257, TAB: 258, BACKSPACE: 259, INSERT: 260, DELETE: 261,
    RIGHT: 262, LEFT: 263, DOWN: 264, UP: 265, PAGE_UP: 266, PAGE_DOWN: 267, HOME: 268, END: 269,
    CAPS_LOCK: 280, SCROLL_LOCK: 281, NUM_LOCK: 282, PRINT_SCREEN: 283, PAUSE: 284,
    F1: 290, F2: 291, F3: 292, F4: 293, F5: 294, F6: 295, F7: 296, F8: 297, F9: 298, F10: 299,
    F11: 300, F12: 301,
    LEFT_SHIFT: 340, LEFT_CONTROL: 341, LEFT_ALT: 342, LEFT_SUPER: 343,
    RIGHT_SHIFT: 344, RIGHT_CONTROL: 345, RIGHT_ALT: 346, RIGHT_SUPER: 347
  };
  var KEY_NAMES = {};
  Object.keys(GLFW).forEach(function (name) { KEY_NAMES[GLFW[name]] = name.toLowerCase().replace(/_/g, "."); });
  var KEY_ALIASES = {
    "shift": GLFW.LEFT_SHIFT, "left.shift": GLFW.LEFT_SHIFT, "right.shift": GLFW.RIGHT_SHIFT,
    "ctrl": GLFW.LEFT_CONTROL, "control": GLFW.LEFT_CONTROL, "left.ctrl": GLFW.LEFT_CONTROL, "right.ctrl": GLFW.RIGHT_CONTROL,
    "alt": GLFW.LEFT_ALT, "left.alt": GLFW.LEFT_ALT, "right.alt": GLFW.RIGHT_ALT,
    "super": GLFW.LEFT_SUPER, "meta": GLFW.LEFT_SUPER,
    "enter": GLFW.ENTER, "return": GLFW.ENTER, "esc": GLFW.ESCAPE, "escape": GLFW.ESCAPE,
    "space": GLFW.SPACE, "tab": GLFW.TAB, "backspace": GLFW.BACKSPACE, "delete": GLFW.DELETE,
    "up": GLFW.UP, "down": GLFW.DOWN, "left": GLFW.LEFT, "right": GLFW.RIGHT
  };
  function keyCode(key) {
    if (typeof key === "number") { return key | 0; }
    var text = String(key == null ? "" : key).trim().toLowerCase();
    if (KEY_ALIASES[text] !== undefined) { return KEY_ALIASES[text]; }
    if (/^f([1-9]|1[0-2])$/.test(text)) { return GLFW["F" + text.slice(1).toUpperCase()]; }
    if (/^[a-z]$/.test(text)) { return text.toUpperCase().charCodeAt(0); }
    if (/^[0-9]$/.test(text)) { return 48 + Number(text); }
    var found = null;
    Object.keys(KEY_NAMES).forEach(function (code) { if (KEY_NAMES[code] === text) { found = Number(code); } });
    return found;
  }
  function keyName(code) { return KEY_NAMES[code] || ("key." + code); }

  var inputBus = new WebMC.Bus("input");
  var input = {
    keysDown: Object.create(null),
    events: [],
    interceptors: [],
    observed: 0,
    dropped: 0,
    injected: 0,
    glfwEvents: null,
    installed: false
  };

  function decodeGlfwEvent(event) {
    var type = event[0] | 0;
    var decoded = {
      type: type,
      raw: event,
      at: Date.now(),
      key: type === 1 ? (event[1] | 0) : undefined,
      keyName: type === 1 ? keyName(event[1] | 0) : undefined,
      codePoint: type === 2 ? (event[1] | 0) : undefined,
      char: type === 2 ? String.fromCodePoint(event[1] | 0) : undefined,
      action: (type === 1 || type === 2) ? (event[3] | 0) : undefined,
      button: type === 3 ? (event[1] | 0) : undefined,
      down: type === 3 ? !!(event[2] | 0) : (type === 1 ? ((event[3] | 0) !== 0) : undefined),
      mods: (type === 1 || type === 2) ? (event[4] | 0) : (type === 3 ? (event[3] | 0) : 0),
      shift: false, ctrl: false, alt: false, repeat: false,
      x: (type === 3 || type === 4) ? +event[5] : undefined,
      y: (type === 3 || type === 4) ? +event[6] : undefined,
      deltaX: type === 5 ? +event[5] : undefined,
      deltaY: type === 5 ? +event[6] : undefined
    };
    var mods = decoded.mods | 0;
    decoded.shift = !!(mods & 1);
    decoded.ctrl = !!(mods & 2);
    decoded.alt = !!(mods & 4);
    decoded.repeat = type === 1 && (event[3] | 0) === 2;
    return decoded;
  }

  function onInput(event) {
    var decoded = decodeGlfwEvent(event);
    if (decoded.type === 1) {
      if (decoded.down) { input.keysDown[decoded.key] = true; } else { delete input.keysDown[decoded.key]; }
    }
    if (decoded.type === 3) {
      if (decoded.down) { input.keysDown["mouse." + decoded.button] = true; } else { delete input.keysDown["mouse." + decoded.button]; }
    }
    input.observed++;
    input.events.push(decoded);
    if (input.events.length > 200) { input.events.shift(); }
    inputBus.emit("input", decoded);
    if (decoded.type === 1 && decoded.action !== 0) { inputBus.emit("key", decoded); }
    if (decoded.type === 2) { inputBus.emit("char", decoded); }
    return decoded;
  }

  function installInputArray(array) {
    if (input.installed) { return; }
    input.installed = true;
    input.glfwEvents = array;
    var originalPush = array.push;
    array.push = function () {
      // Called with one tuple at a time by the client's listeners, but tolerate more.
      for (var i = 0; i < arguments.length; i++) {
        var event = arguments[i];
        if (!event || typeof event.length !== "number") { originalPush.call(array, event); continue; }
        var decoded;
        try { decoded = onInput(event); } catch (error) { internal.reportError("input:decode", error); }
        var keep = true;
        for (var k = input.interceptors.length - 1; k >= 0; k--) {
          try {
            var verdict = input.interceptors[k](decoded, event);
            if (verdict === false) { keep = false; }
            if (verdict === true) { keep = true; }
          } catch (error) { internal.reportError("input:interceptor", error); }
        }
        if (keep) { originalPush.call(array, event); }
        else { input.dropped++; inputBus.emit("blocked", decoded); }
      }
      return array.length;
    };
    declare("input.observe");
    declare("input.block");
    evidence.push("__gaiusGlfwEvents.push");
  }

  /** Inject one raw tuple. This is the same door the client's own listeners use, without passing
   * through the runtime's own interceptors: injected input is already the runtime's decision. */
  function injectEvent(tuple) {
    var array = input.glfwEvents;
    if (!array) { return false; }
    Array.prototype.push.call(array, tuple);
    input.injected++;
    return true;
  }

  input.inject = injectEvent;
  input.keyCode = keyCode;
  input.keyName = keyName;
  input.bus = inputBus;
  input.GLFW = GLFW;
  WebMC.__internal.input = input;

  /* ------------------------------------------------------------------ client state ------------- *
   * __gaiusMinecraftState is a snapshot the client publishes while it runs. We keep the latest and
   * derive the events a mod wants: world joined/left, screen opened/closed.
   */
  var stateBus = new WebMC.Bus("state");
  var state = {
    latest: null,
    at: 0,
    updates: 0,
    lastWorld: false,
    lastScreen: null,
    history: []
  };

  function onState(next) {
    if (!next || typeof next !== "object") { return; }
    var previous = state.latest;
    state.latest = next;
    state.at = Date.now();
    state.updates++;
    state.history.push({ at: state.at, screen: next.screen, level: !!next.level });
    if (state.history.length > 120) { state.history.shift(); }
    if (!capabilities["state.read"]) {
      declare("state.read");
      declare("player.read");
      declare("world.read");
      declare("camera.read");
      evidence.push("__gaiusMinecraftState");
    }
    stateBus.emit("state", next);
    var inWorld = !!next.level;
    if (inWorld !== state.lastWorld) {
      state.lastWorld = inWorld;
      if (inWorld) { stateBus.emit("world:join", next); }
      else { stateBus.emit("world:leave", next); }
    }
    var screen = next.screen == null ? null : String(next.screen);
    if (screen !== state.lastScreen) {
      var closed = state.lastScreen;
      state.lastScreen = screen;
      if (closed) { stateBus.emit("screen:close", closed); }
      if (screen) { stateBus.emit("screen:open", screen); }
    }
    // A screen or the level being loaded is the moment a player can see a HUD again.
    stateBus.emit("state:changed", next);
  }
  WebMC.__internal.state = state;
  WebMC.__internal.stateBus = stateBus;

  /* ------------------------------------------------------------------ GL ---------------------- *
   * Frame counting only: the context is wrapped so the runtime knows when the client really drew,
   * without changing what it draws.
   */
  var gl = { context: null, frames: 0, draws: 0, clears: 0, lastDrawAt: 0, hooked: false };
  function installGL(context) {
    if (!context || gl.hooked) { return; }
    gl.context = context;
    gl.hooked = true;
    ["drawElements", "drawArrays", "drawElementsInstanced", "drawArraysInstanced"].forEach(function (name) {
      var original = context[name];
      if (typeof original !== "function") { return; }
      try {
        context[name] = function () {
          gl.draws++;
          gl.lastDrawAt = Date.now();
          return original.apply(context, arguments);
        };
      } catch (ignored) {}
    });
    var clear = context.clear;
    if (typeof clear === "function") {
      try {
        context.clear = function () {
          gl.clears++;
          gl.frames++;
          stateBus.emit("gl:clear", gl);
          return clear.apply(context, arguments);
        };
      } catch (ignored) {}
    }
    declare("graphics.read");
    evidence.push("__gaiusWebGL");
  }
  WebMC.__internal.gl = gl;

  /* ------------------------------------------------------------------ network ----------------- *
   * The bridge is a channel multiplexer: send(channel, bytes) out, decoded queues in. We wrap send
   * (mods can see, rewrite or block outbound traffic) and the decode telemetry functions (a
   * packet-level receive tap). The bridge itself stays available as `network.raw`.
   */
  var netBus = new WebMC.Bus("network");
  var net = {
    bridge: null,
    bus: netBus,
    sent: 0,
    sentBytes: 0,
    received: 0,
    receivedBytes: 0,
    sendInterceptors: [],
    hooked: false
  };

  function installBridge(bridge) {
    if (!bridge || typeof bridge !== "object" || net.hooked) { return; }
    net.bridge = bridge;
    net.hooked = true;
    var originalSend = bridge.send;
    if (typeof originalSend === "function") {
      try {
        bridge.send = function (channel, bytes) {
          var packet = { channel: channel, bytes: bytes, size: bytes && bytes.length || 0, direction: "out" };
          var verdict = true;
          for (var i = net.sendInterceptors.length - 1; i >= 0; i--) {
            try {
              var result = net.sendInterceptors[i](packet);
              if (result === false) { verdict = false; }
              if (result && result !== true && result.bytes) { packet.bytes = result.bytes; }
            } catch (error) { internal.reportError("network:interceptor", error); }
          }
          net.sent++;
          net.sentBytes += packet.size || 0;
          netBus.emit("send", packet);
          if (!verdict) { return true; }   // swallowed: the channel believes it was sent
          return originalSend.call(bridge, channel, packet.bytes);
        };
      } catch (error) { internal.reportError("network:send", error); }
    }
    ["recordDecodedPacketQueue", "recordInlineDecodedPacket", "recordDecodedSlice", "finishDecodedSlice"].forEach(function (name) {
      var original = bridge[name];
      if (typeof original !== "function") { return; }
      try {
        bridge[name] = function () {
          net.received++;
          if (arguments[1] && typeof arguments[1].length === "number") { net.receivedBytes += arguments[1].length; }
          netBus.emit("decode", { name: name, args: Array.prototype.slice.call(arguments) });
          return original.apply(bridge, arguments);
        };
      } catch (ignored) {}
    });
    declare("network.read");
    declare("network.write");
    evidence.push("__gaiusNettyBridge");
  }
  WebMC.__internal.net = net;

  /* ------------------------------------------------------------------ boot -------------------- *
   * Install the watchers. This runs before the client's first script; the callbacks fire when the
   * client installs each global.
   */
  var clientInfo = global.__webmcClient || {};
  var boot = {
    startedAt: Date.now(),
    watches: {
      glfw: watch("__gaiusGlfwEvents", installInputArray),
      webgl: watch("__gaiusWebGL", installGL),
      netty: watch("__gaiusNettyBridge", installBridge),
      minecraftState: watch("__gaiusMinecraftState", onState)
    },
    watch: watch,
    version: clientInfo.version || "unknown",
    base: clientInfo.base || null,
    trustAll: clientInfo.trustAll === true
  };
  WebMC.__internal.boot = boot;

  // The state global may already exist when this runs (a reload in the same document).
  if (has(global, "__gaiusMinecraftState") && global.__gaiusMinecraftState) { onState(global.__gaiusMinecraftState); }
  if (has(global, "__gaiusGlfwEvents") && global.__gaiusGlfwEvents) { installInputArray(global.__gaiusGlfwEvents); }
  if (has(global, "__gaiusNettyBridge") && global.__gaiusNettyBridge) { installBridge(global.__gaiusNettyBridge); }

  startLoop();
  declare("hud.draw");

  // After a while, whatever is still missing is honestly missing.
  setTimeout(function () {
    Object.keys(boot.watches).forEach(function (key) {
      if (!boot.watches[key]()) {
        var name = { glfw: "input.observe", webgl: "graphics.read", netty: "network.read", minecraftState: "state.read" }[key];
        if (!capabilities[name]) { declare(name, "the client never published `" + key + "` here"); }
      }
    });
  }, 12000);

  WebMC.__internal.bus = { frame: frameBus, state: stateBus, input: inputBus, network: netBus };
  WebMC.__internal.declare = declare;
})(typeof globalThis !== "undefined" ? globalThis : self);

/* ===== src/20-hud.js ===== */
/* WebMC JS mod runtime — the HUD.
 *
 * A transparent 2D canvas above the game's WebGL canvas, plus the little UI pieces a mod wants:
 * text, boxes, bars, lines, images, in-game messages, and a real text prompt you can type into.
 *
 * Coordinates are the same logical pixels the game's own GUI uses on this screen: the scale is
 * computed the way Minecraft computes its GUI scale (the largest whole multiple that still leaves
 * 320x240 logical pixels). `hud.width` and `hud.height` are in those logical pixels, so a mod's
 * layout looks the same on a laptop and on a 4K screen.
 */
(function (global) {
  "use strict";

  var WebMC = global.webmc;
  var internal = WebMC.__internal;

  var hud = {
    canvas: null,
    ctx: null,
    scale: 1,
    width: 0,
    height: 0,
    cssWidth: 0,
    cssHeight: 0,
    dpr: 1,
    elements: new Map(),
    messages: [],
    nextId: 1,
    ready: false,
    frames: 0,
    order: 0
  };

  function computeScale() {
    var cssW = global.innerWidth || 854;
    var cssH = global.innerHeight || 480;
    return Math.max(1, Math.min(4, Math.floor(Math.min(cssW / 320, cssH / 240))));
  }

  function resize() {
    var cssW = global.innerWidth || 854;
    var cssH = global.innerHeight || 480;
    var dpr = Math.min(global.devicePixelRatio || 1, 2);
    hud.cssWidth = cssW; hud.cssHeight = cssH;
    hud.dpr = dpr;
    hud.scale = computeScale();
    hud.width = cssW / hud.scale;
    hud.height = cssH / hud.scale;
    if (!hud.canvas) { return; }
    hud.canvas.width = Math.max(1, Math.round(cssW * dpr));
    hud.canvas.height = Math.max(1, Math.round(cssH * dpr));
    hud.canvas.style.width = cssW + "px";
    hud.canvas.style.height = cssH + "px";
  }

  function installHud() {
    if (hud.ready || !global.document || !global.document.body) { return; }
    hud.ready = true;
    var canvas = global.document.createElement("canvas");
    canvas.id = "webmc-hud";
    canvas.style.cssText = "position:fixed;left:0;top:0;pointer-events:none;z-index:2147483644;";
    global.document.body.appendChild(canvas);
    hud.canvas = canvas;
    hud.ctx = canvas.getContext("2d");
    resize();
    global.addEventListener("resize", resize, true);
  }

  /* ------------------------------------------------------------------ elements ----------------- *
   * Every element is a plain descriptor; the draw pass is one switch. A mod keeps the handle it is
   * given and calls update()/remove() on it.
   */
  function defaultElement(type, options) {
    options = options || {};
    return {
      id: String(options.id || (type + "-" + hud.nextId++)),
      type: type,
      mod: options.mod || null,
      x: Number(options.x != null ? options.x : 0),
      y: Number(options.y != null ? options.y : 0),
      z: Number(options.z != null ? options.z : 0),
      order: hud.order++,
      visible: options.visible !== false,
      align: options.align || "left",
      color: options.color || "#ffffff",
      shadow: options.shadow !== false,
      font: options.font || null,
      size: Number(options.size || 9),
      text: options.text != null ? String(options.text) : "",
      width: Number(options.width || 0),
      height: Number(options.height || 0),
      radius: Number(options.radius || 0),
      thickness: Number(options.thickness || 1),
      alpha: options.alpha == null ? 1 : Number(options.alpha),
      padding: Number(options.padding || 2),
      background: options.background || null,
      border: options.border || null,
      image: options.image || null,
      value: options.value == null ? null : Number(options.value),
      max: Number(options.max || 100),
      labels: options.labels !== false,
      blend: options.blend || null,
      rotate: Number(options.rotate || 0),
      follow: options.follow || null
    };
  }

  function addElement(element) {
    hud.elements.set(element.id, element);
    return handleFor(element);
  }

  function removeElement(id) {
    return hud.elements.delete(id);
  }

  function handleFor(element) {
    var handle = {
      id: element.id,
      get element() { return element; },
      get x() { return element.x; }, set x(v) { element.x = Number(v); },
      get y() { return element.y; }, set y(v) { element.y = Number(v); },
      get text() { return element.text; }, set text(v) { element.text = String(v); },
      get visible() { return element.visible; }, set visible(v) { element.visible = !!v; },
      get color() { return element.color; }, set color(v) { element.color = String(v); },
      get value() { return element.value; }, set value(v) { element.value = Number(v); },
      get alpha() { return element.alpha; }, set alpha(v) { element.alpha = Number(v); },
      update: function (changes) { if (changes) { Object.assign(element, changes); } return handle; },
      remove: function () { removeElement(element.id); }
    };
    return handle;
  }

  function fonts() {
    return '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ui-sans-serif, sans-serif';
  }
  function monospace() {
    return 'ui-monospace, SFMono-Regular, Menlo, Consolas, "DejaVu Sans Mono", monospace';
  }

  function measureText(element) {
    var ctx = hud.ctx;
    ctx.font = (element.size * hud.scale) + "px " + (element.font || fonts());
    return ctx.measureText(element.text).width / hud.scale;
  }

  function drawElement(ctx, element, time) {
    if (!element.visible) { return; }
    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, element.alpha));
    var width = element.width;
    var height = element.height;
    if (element.type === "text") {
      ctx.font = (element.size * hud.scale) + "px " + (element.font || fonts());
      ctx.textBaseline = "top";
      if (width > 0) {
        var measured = ctx.measureText(element.text).width / hud.scale;
        if (element.align === "center") { ctx.textAlign = "center"; }
        else if (element.align === "right") { ctx.textAlign = "right"; }
      }
      var px = element.x * hud.scale;
      var py = element.y * hud.scale;
      if (element.background) {
        var measured2 = frameWidth(ctx, element) * hud.scale;
        var boxHeight = (element.size + element.padding * 2 + 2) * hud.scale;
        var bx = px - (element.align === "center" ? measured2 / 2 : element.align === "right" ? measured2 : 0) - element.padding * hud.scale;
        var by = py - element.padding * hud.scale;
        ctx.fillStyle = element.background;
        ctx.fillRect(bx, by, measured2 + element.padding * 2 * hud.scale, boxHeight);
      }
      if (element.shadow) {
        ctx.fillStyle = "rgba(0,0,0,0.72)";
        ctx.fillText(element.text, px + hud.scale, py + hud.scale);
      }
      ctx.fillStyle = element.color;
      ctx.fillText(element.text, px, py);
    } else if (element.type === "rect" || element.type === "bar") {
      var x = element.x * hud.scale, y = element.y * hud.scale;
      var w = (width || (element.type === "bar" ? 80 : 10)) * hud.scale;
      var h = (height || (element.type === "bar" ? 5 : 10)) * hud.scale;
      if (element.type === "bar") {
        ctx.fillStyle = element.background || "rgba(0,0,0,0.55)";
        roundRect(ctx, x, y, w, h, element.radius * hud.scale);
        ctx.fill();
        var fraction = element.max > 0 ? Math.max(0, Math.min(1, (element.value || 0) / element.max)) : 0;
        ctx.fillStyle = element.color;
        roundRect(ctx, x, y, w * fraction, h, element.radius * hud.scale);
        ctx.fill();
        if (element.border) { ctx.strokeStyle = element.border; ctx.lineWidth = 1 * hud.scale; roundRect(ctx, x, y, w, h, element.radius * hud.scale); ctx.stroke(); }
      } else {
        if (element.background) { ctx.fillStyle = element.background; roundRect(ctx, x, y, w, h, element.radius * hud.scale); ctx.fill(); }
        if (element.border) { ctx.strokeStyle = element.border; ctx.lineWidth = 1 * hud.scale; roundRect(ctx, x, y, w, h, element.radius * hud.scale); ctx.stroke(); }
      }
    } else if (element.type === "line") {
      ctx.strokeStyle = element.color;
      ctx.lineWidth = element.thickness * hud.scale;
      ctx.beginPath();
      ctx.moveTo(element.x * hud.scale, element.y * hud.scale);
      var points = Array.isArray(element.image) ? element.image : null; // reuse `image` as a point list for lines
      if (points) {
        for (var i = 0; i < points.length; i++) { ctx.lineTo(points[i][0] * hud.scale, points[i][1] * hud.scale); }
      } else {
        ctx.lineTo((element.x + element.width) * hud.scale, (element.y + element.height) * hud.scale);
      }
      ctx.stroke();
    } else if (element.type === "image" && element.image) {
      var image = imageCache(element.image);
      if (image && image.complete) {
        ctx.drawImage(image, element.x * hud.scale, element.y * hud.scale,
          (width || image.width) * hud.scale, (height || image.height) * hud.scale);
      }
    } else if (element.type === "crosshair") {
      var cx = element.x * hud.scale, cy = element.y * hud.scale, r = (element.size || 6) * hud.scale;
      ctx.strokeStyle = element.color;
      ctx.lineWidth = Math.max(1, element.thickness * hud.scale);
      ctx.beginPath();
      ctx.moveTo(cx - r, cy); ctx.lineTo(cx - r / 3, cy);
      ctx.moveTo(cx + r / 3, cy); ctx.lineTo(cx + r, cy);
      ctx.moveTo(cx, cy - r); ctx.lineTo(cx, cy - r / 3);
      ctx.moveTo(cx, cy + r / 3); ctx.lineTo(cx, cy + r);
      ctx.stroke();
    }
    ctx.restore();
  }

  function frameWidth(ctx, element) {
    // measureText already set the font
    return ctx.measureText(element.text).width / hud.scale;
  }

  function roundRect(ctx, x, y, w, h, r) {
    r = Math.min(r || 0, w / 2, h / 2);
    ctx.beginPath();
    if (r <= 0) { ctx.rect(x, y, w, h); return; }
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  var imageCacheMap = new Map();
  function imageCache(source) {
    if (typeof source !== "string") { return source; }
    var found = imageCacheMap.get(source);
    if (!found) {
      found = new global.Image();
      found.src = source;
      imageCacheMap.set(source, found);
    }
    return found;
  }

  /* ------------------------------------------------------------------ messages ----------------- *
   * The in-game line a mod prints at the bottom of the screen ("action bar" style), with a fade.
   */
  function message(text, options) {
    options = options || {};
    hud.messages.push({
      text: String(text),
      color: options.color || "#ffffff",
      at: Date.now(),
      ttl: Number(options.ttl || 2600),
      background: options.background !== false
    });
    if (hud.messages.length > 8) { hud.messages.shift(); }
  }

  /* ------------------------------------------------------------------ drawing ------------------ */
  function drawMessages(ctx) {
    var time = Date.now();
    var y = hud.height - 28;
    var shown = 0;
    for (var i = hud.messages.length - 1; i >= 0 && shown < 5; i--) {
      var entry = hud.messages[i];
      var age = time - entry.at;
      if (age > entry.ttl) { continue; }
      var alpha = age > entry.ttl - 500 ? (entry.ttl - age) / 500 : 1;
      var size = 9;
      ctx.globalAlpha = Math.max(0, alpha);
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.font = size * hud.scale + "px " + fonts();
      var measured = ctx.measureText(entry.text).width;
      var x = (hud.width / 2) * hud.scale;
      var py = (y - shown * 11) * hud.scale;
      if (entry.background) {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(x - measured / 2 - 4 * hud.scale, py - 2 * hud.scale, measured + 8 * hud.scale, (size + 6) * hud.scale);
      }
      ctx.fillStyle = "rgba(0,0,0,0.8)";
      ctx.fillText(entry.text, x + hud.scale, py + hud.scale);
      ctx.fillStyle = entry.color;
      ctx.fillText(entry.text, x, py);
      shown++;
    }
    ctx.globalAlpha = 1;
    ctx.textAlign = "left";
  }

  function render() {
    if (!hud.ctx || !hud.canvas) { return; }
    var ctx = hud.ctx;
    var time = Date.now();
    ctx.setTransform(hud.dpr, 0, 0, hud.dpr, 0, 0);
    ctx.clearRect(0, 0, hud.canvas.width / hud.dpr, hud.canvas.height / hud.dpr);
    var list = Array.from(hud.elements.values());
    list.sort(function (a, b) { return (a.z - b.z) || (a.order - b.order); });
    for (var i = 0; i < list.length; i++) {
      try {
        var element = list[i];
        if (element.follow) {
          var target = element.follow();
          if (target && target.position) {
            element.x = target.position.x;
            element.y = target.position.y;
          }
        }
        drawElement(ctx, element, time);
      } catch (error) {
        internal.reportError("hud:draw:" + list[i].id, error);
        hud.elements.delete(list[i].id);
      }
    }
    drawMessages(ctx);
    hud.frames++;
  }

  internal.frameBus.on("frame", render, { order: 1000 });

  /* ------------------------------------------------------------------ prompt ------------------- *
   * A real input box, above the game, for text a mod needs (commands, settings, server addresses).
   * While it is focused the game does not see the keys.
   */
  var promptState = { open: false, element: null, resolve: null };

  function isTypingTarget(target) {
    if (promptState.open) { return true; }
    if (!target) { return false; }
    var tag = target.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
  }
  function isPromptOpen() { return promptState.open; }

  function whenBody(fn) {
    if (global.document && global.document.body) { fn(); return; }
    if (global.document) { global.document.addEventListener("DOMContentLoaded", fn, { once: true }); }
    else { global.setTimeout(function () { whenBody(fn); }, 50); }
  }

  function prompt(options) {
    options = typeof options === "string" ? { title: options } : (options || {});
    return new Promise(function (resolve) {
      whenBody(function () { openPrompt(options, resolve); });
    });
  }

  function openPrompt(options, resolve) {
    {
      closePrompt(null);
      var doc = global.document;
      var wrap = doc.createElement("div");
      wrap.id = "webmc-prompt";
      wrap.style.cssText = "position:fixed;left:50%;top:18%;transform:translateX(-50%);z-index:2147483646;" +
        "background:rgba(12,15,19,.96);border:1px solid #2a313a;border-radius:10px;padding:12px;" +
        "font:13px ui-sans-serif,system-ui,sans-serif;color:#e8eaed;min-width:min(520px,90vw);box-shadow:0 18px 50px rgba(0,0,0,.6)";
      var title = doc.createElement("div");
      title.textContent = options.title || "Enter text";
      title.style.cssText = "margin-bottom:8px;color:#9aa3ae";
      var input = doc.createElement("input");
      input.type = "text";
      input.value = options.value != null ? String(options.value) : "";
      input.placeholder = options.placeholder || "";
      input.style.cssText = "width:100%;box-sizing:border-box;background:#0d1116;border:1px solid #2a313a;" +
        "border-radius:7px;color:#e8eaed;padding:8px 10px;font:13px ui-monospace,Menlo,monospace;outline:none";
      var hint = doc.createElement("div");
      hint.textContent = "Enter to accept · Esc to cancel";
      hint.style.cssText = "margin-top:7px;color:#6b7480;font-size:11px";
      wrap.appendChild(title); wrap.appendChild(input); wrap.appendChild(hint);
      doc.body.appendChild(wrap);

      function stop(event) { event.stopPropagation(); }
      wrap.addEventListener("keydown", function (event) {
        stop(event);
        if (event.key === "Escape") { closePrompt(null); }
        else if (event.key === "Enter") { closePrompt(input.value); }
      }, true);
      wrap.addEventListener("keyup", stop, true);
      wrap.addEventListener("keypress", stop, true);
      wrap.addEventListener("mousedown", stop, true);
      promptState = { open: true, element: wrap, resolve: resolve };
      if (options.select !== false) { input.select(); }
      input.focus();
    }
  }

  function closePrompt(value) {
    if (promptState.element && promptState.element.parentNode) {
      promptState.element.parentNode.removeChild(promptState.element);
    }
    var resolve = promptState.resolve;
    promptState = { open: false, element: null, resolve: null };
    if (resolve) { resolve(value); }
  }

  /* ------------------------------------------------------------------ the public HUD object -- */
  hud.install = installHud;
  hud.add = addElement;
  hud.remove = removeElement;
  hud.message = message;
  hud.prompt = prompt;
  hud.isTypingTarget = isTypingTarget;
  hud.fonts = fonts;
  hud.monospace = monospace;
  WebMC.hud = hud;
  WebMC.__internal.promptOpen = isPromptOpen;
  WebMC.__internal.prompt = prompt;

  if (global.document) {
    if (global.document.readyState === "loading") {
      global.document.addEventListener("DOMContentLoaded", installHud, { once: true });
    } else { installHud(); }
  }
})(typeof globalThis !== "undefined" ? globalThis : self);

/* ===== src/25-input.js ===== */
/* WebMC JS mod runtime — input, keybinds, chat.
 *
 * Input: the client reads DOM events through its own JavaScript listeners and queues tuples into
 * __gaiusGlfwEvents (see 10-hooks.js). That makes three things possible without touching the
 * client: observe every key and click, stop one from reaching the game, and inject ones that did
 * not come from a keyboard at all.
 *
 * Chat: `chat.send()` drives the game's own chat screen (open, type, enter), so what a mod sends
 * is a real chat message the server sees. Reading chat is a best-effort tap on the decoded packet
 * stream: clientbound chat carries JSON, so the tap looks for that JSON in the packet bytes.
 */
(function (global) {
  "use strict";

  var WebMC = global.webmc;
  var internal = WebMC.__internal;
  var input = internal.input;
  var inputBus = input.bus;
  var GLFW = input.GLFW;

  /* ------------------------------------------------------------------ keybinds ----------------- *
   * One registry for every mod. A keybind belongs to a mod: disabling or unloading the mod takes
   * its keybinds with it.
   */
  var keybinds = new Map();
  var bindOrder = 0;

  function bindKey(mod, options) {
    options = options || {};
    var id = (mod ? mod.id + ":" : "") + (options.id || ("keybind-" + (++bindOrder)));
    var bind = {
      id: id,
      mod: mod,
      label: options.label || id,
      key: input.keyCode(options.key != null ? options.key : (options.defaultKey != null ? options.defaultKey : "h")),
      modifiers: {
        shift: !!options.shift,
        ctrl: !!options.ctrl,
        alt: !!options.alt,
        none: options.shift === false && options.ctrl === false && options.alt === false
      },
      onPress: [],
      consume: !!options.consume,
      order: ++bindOrder,
      enabled: true,
      presses: 0
    };
    keybinds.set(id, bind);

    function handle(fn) {
      if (typeof fn === "function") { bind.onPress.push(fn); }
      return api;
    }
    var api = {
      id: id,
      get key() { return input.keyName(bind.key); },
      get keyCode() { return bind.key; },
      get label() { return bind.label; },
      get presses() { return bind.presses; },
      setKey: function (key) { bind.key = input.keyCode(key); return api; },
      setEnabled: function (value) { bind.enabled = !!value; return api; },
      onPress: handle,
      remove: function () { keybinds.delete(id); }
    };
    if (typeof options.handler === "function") { bind.onPress.push(options.handler); }
    return api;
  }

  function modifierMatch(bind, event) {
    var m = bind.modifiers;
    if (m.shift && !event.shift) { return false; }
    if (m.ctrl && !event.ctrl) { return false; }
    if (m.alt && !event.alt) { return false; }
    if (m.none && (event.shift || event.ctrl || event.alt)) { return false; }
    return true;
  }

  inputBus.on("key", function (event) {
    if (event.action === 0) { return; }                                  // released
    if (event.repeat && !event.repeatAllowed) { /* repeats still pass */ }
    if (internal.promptOpen && internal.promptOpen()) { return; }
    if (WebMC.hud.isTypingTarget && WebMC.hud.isTypingTarget(global.document && global.document.activeElement)) { return; }
    keybinds.forEach(function (bind) {
      if (!bind.enabled || bind.key !== event.key) { return; }
      if (!modifierMatch(bind, event)) { return; }
      bind.presses++;
      for (var i = 0; i < bind.onPress.length; i++) {
        try { bind.onPress[i](event, bind); }
        catch (error) { internal.reportError("keybind:" + bind.id, error, bind.mod && bind.mod.id); }
      }
      if (bind.consume) { input.interceptors.push(function (candidate) { return candidate !== event ? undefined : false; }); }
    });
  });

  /* ------------------------------------------------------------------ injection ----------------- *
   * Push tuples as if the client's own DOM listeners had just seen the event.
   */
  function injectKey(key, options) {
    options = options || {};
    var code = input.keyCode(key);
    if (code == null) { return false; }
    var mods = 0;
    if (options.shift) { mods |= 1; }
    if (options.ctrl) { mods |= 2; }
    if (options.alt) { mods |= 4; }
    var action = options.action != null ? options.action : 1;
    input.inject([1, code, options.domKeyCode || 0, action, mods, 0, 0]);
    return true;
  }

  function injectChar(codePoint, options) {
    options = options || {};
    var mods = 0;
    if (options.shift) { mods |= 1; }
    if (options.ctrl) { mods |= 2; }
    if (options.alt) { mods |= 4; }
    input.inject([2, codePoint, mods, 0, 0, 0, 0]);
    return true;
  }

  function typeText(text) {
    var string = String(text);
    for (var i = 0; i < string.length; i++) {
      var point = string.codePointAt(i);
      if (point > 0xffff) { i++; }
      injectChar(point);
    }
    return string.length;
  }

  function pressKey(key, options) {
    options = options || {};
    injectKey(key, Object.assign({}, options, { action: 1 }));
    var self = this;
    global.setTimeout(function () { injectKey(key, Object.assign({}, options, { action: 0 })); }, options.releaseAfter || 24);
    return true;
  }

  function click(button, x, y) {
    input.inject([3, button == null ? 0 : button, 1, 0, 0, x || 0, y || 0]);
    global.setTimeout(function () { input.inject([3, button == null ? 0 : button, 0, 0, 0, x || 0, y || 0]); }, 24);
  }

  function isDown(key) {
    var code = input.keyCode(key);
    if (code == null) { return false; }
    if (internal.input.keysDown[code]) { return true; }
    // Fall back to the client's own map, in case our tap missed the press (it cannot: same array).
    var map = global.__gaiusGlfwKeys;
    return !!(map && map[code]);
  }

  function downKeys() {
    return Object.keys(internal.input.keysDown).filter(function (key) { return internal.input.keysDown[key]; });
  }

  /* ------------------------------------------------------------------ chat --------------------- *
   * Sending drives the game's chat screen. The sequence is: the key that opens chat (T, or / which
   * opens it with the slash in it), the characters, then Enter. Small delays: the screen is created
   * by the key callback, and typing before it exists would go nowhere.
   */
  var chatBus = new WebMC.Bus("chat");
  var chat = {
    sent: 0,
    received: 0,
    sending: false,
    queue: Promise.resolve(),
    history: [],
    tapInstalled: false
  };

  function sendChat(text, options) {
    options = options || {};
    var message = String(text == null ? "" : text);
    if (!message) { return Promise.resolve(false); }
    var run = function () {
      return new Promise(function (resolve) {
        var command = message.charAt(0) === "/";
        var openKey = command ? GLFW.SLASH : GLFW.T;
        var rest = command ? message.slice(1) : message;
        var gap = Number(options.gap != null ? options.gap : 40);
        chat.sending = true;
        injectKey(openKey, { action: 1 });
        global.setTimeout(function () {
          injectKey(openKey, { action: 0 });
          typeText(rest);
          global.setTimeout(function () {
            injectKey(GLFW.ENTER, { action: 1 });
            global.setTimeout(function () {
              injectKey(GLFW.ENTER, { action: 0 });
              chat.sending = false;
              chat.sent++;
              chat.history.push({ direction: "out", text: message, at: Date.now() });
              chatBus.emit("sent", { text: message, command: command });
              resolve(true);
            }, gap);
          }, gap);
        }, gap);
      });
    };
    chat.queue = chat.queue.then(run, run);
    return chat.queue;
  }

  /* Reading: the decoded clientbound packets are bytes. Chat is JSON in those bytes, so a packet
   * that contains a `{"text"...}`/`{"translate"...}` object is very likely a chat packet. */
  var CHAT_JSON = /\{[^{}]{0,4000}"(?:text|translate)"/;
  var warnedAboutChat = false;

  function installChatTap() {
    if (chat.tapInstalled) { return; }
    chat.tapInstalled = true;
    var net = internal.net;
    if (!net.hooked) {
      setTimeout(installChatTap, 4000);
      return;
    }
    internal.net.bus.on("decode", function () {
      scanInbound();
    }, { owner: "@chat" });
    // Chat also shows up in the client's event log; take those lines too.
    var events = global.__gaiusMinecraftEvents;
    var seen = 0;
    setInterval(function () {
      if (!Array.isArray(events)) { events = global.__gaiusMinecraftEvents; return; }
      if (events.length < seen) { seen = 0; }
      for (var i = seen; i < events.length; i++) {
        var event = events[i];
        if (!event) { continue; }
        var name = String(event.event || "");
        if (/chat|message|system_chat/i.test(name)) {
          var text = typeof event.detail === "string" ? event.detail : JSON.stringify(event.detail || "");
          onChatText(text, name);
        }
      }
      seen = events.length;
    }, 500);
  }

  var seenPackets = new Map();
  function scanInbound() {
    var bridge = internal.net.bridge;
    if (!bridge || !bridge.channels || typeof bridge.channels.forEach !== "function") { return; }
    bridge.channels.forEach(function (entry, channel) {
      if (!entry || entry.disposed || !Array.isArray(entry.inbound)) { return; }
      var last = seenPackets.get(channel);
      var start = typeof last === "number" ? last : Math.max(0, (entry.inboundHead | 0));
      var packets = entry.inbound;
      for (var i = start; i < packets.length; i++) {
        var packet = packets[i];
        if (!packet || typeof packet.length !== "number" || packet.length < 4 || packet.length > 524288) { continue; }
        var text = decodeChatBytes(packet);
        if (text) { onChatText(text, "packet:" + channel); }
      }
      seenPackets.set(channel, packets.length);
    });
  }

  function decodeChatBytes(bytes) {
    try {
      var slice = bytes;
      // The first bytes are packet framing (length/id); skip a few, scanning forward for the JSON.
      var text = new TextDecoder("utf-8", { fatal: false }).decode(slice);
      if (!CHAT_JSON.test(text)) { return null; }
      var match = /\{[^{}]{0,4000}"(?:text|translate)"[^{}]{0,4000}\}/.exec(text);
      if (!match) { return null; }
      var json = match[0];
      var parts = [];
      var re = /"text"\s*:\s*"((?:[^"\\]|\\.)*)"/g;
      var found;
      while ((found = re.exec(json)) !== null) { parts.push(unescapeJson(found[1])); }
      if (!parts.length) {
        var tr = /"translate"\s*:\s*"((?:[^"\\]|\\.)*)"/.exec(json);
        if (tr) { parts.push(unescapeJson(tr[1])); }
      }
      var joined = parts.join("");
      return joined || null;
    } catch (error) { return null; }
  }

  function unescapeJson(text) {
    try { return JSON.parse('"' + text + '"'); } catch (error) { return text; }
  }

  function onChatText(text, source) {
    if (!text) { return; }
    var clean = String(text).replace(/§./g, "").trim();
    if (!clean) { return; }
    if (chat.history.length && chat.history[chat.history.length - 1].text === clean
        && Date.now() - chat.history[chat.history.length - 1].at < 1500) { return; }
    chat.received++;
    chat.history.push({ direction: "in", text: clean, at: Date.now(), source: source });
    if (chat.history.length > 300) { chat.history.splice(0, 100); }
    if (!WebMC.capabilities["chat.read"]) {
      WebMC.capabilities["chat.read"] = true;
      WebMC.evidence.push("decoded packet tap");
    }
    chatBus.emit("message", { text: clean, source: source, at: Date.now() });
  }

  installChatTap();

  /* ------------------------------------------------------------------ commands ----------------- *
   * A command is a name, a usage line and a handler. The player opens the prompt with the command
   * key (default: `.` outside text fields, or F7) and types `name args`; the handler gets the args.
   * Handling happens in the runtime, so no packet is sent for a command it takes.
   */
  var commands = new Map();
  var commandBus = new WebMC.Bus("command");

  function registerCommand(mod, options) {
    options = options || {};
    if (!options.name) { throw new Error("a command needs a name"); }
    var names = [String(options.name).toLowerCase().replace(/^\//, "")];
    (options.aliases || []).forEach(function (alias) { names.push(String(alias).toLowerCase().replace(/^\//, "")); });
    var entry = {
      mod: mod,
      names: names,
      usage: options.usage || ("/" + names[0]),
      description: options.description || "",
      args: options.args || [],
      handlers: [],
      hidden: !!options.hidden
    };
    names.forEach(function (name) { commands.set(name, entry); });
    var handle = {
      get name() { return names[0]; },
      run: function (fn) { if (typeof fn === "function") { entry.handlers.push(fn); } return handle; },
      remove: function () { names.forEach(function (name) { if (commands.get(name) === entry) { commands.delete(name); } }); }
    };
    if (typeof options.handler === "function") { entry.handlers.push(options.handler); }
    return handle;
  }

  function parseArgs(line) {
    var out = [];
    var re = /"([^"]*)"|(\S+)/g;
    var match;
    while ((match = re.exec(line)) !== null) { out.push(match[1] != null ? match[1] : match[2]); }
    return out;
  }

  function runCommand(line, origin) {
    var text = String(line || "").trim().replace(/^\//, "");
    if (!text) { return false; }
    var space = text.indexOf(" ");
    var name = (space < 0 ? text : text.slice(0, space)).toLowerCase();
    var rest = space < 0 ? "" : text.slice(space + 1);
    var entry = commands.get(name);
    if (!entry) { return false; }
    var args = parseArgs(rest);
    var context = {
      line: text,
      name: name,
      args: args,
      raw: rest,
      player: playerSnapshot(),
      reply: function (message) { WebMC.hud.message(message, { color: "#a7f3d0" }); },
      error: function (message) { WebMC.hud.message(message, { color: "#fca5a5" }); }
    };
    commandBus.emit("command", context);
    var handled = false;
    for (var i = 0; i < entry.handlers.length; i++) {
      try {
        var result = entry.handlers[i](context);
        if (result !== false) { handled = true; }
      } catch (error) { internal.reportError("command:" + name, error, entry.mod && entry.mod.id); }
    }
    return handled || entry.handlers.length > 0;
  }

  var promptCommand = null;
  function openCommandPrompt(prefill) {
    return WebMC.hud.prompt({
      title: "Command — Enter a command line",
      value: prefill || "",
      placeholder: "help"
    }).then(function (value) {
      if (value == null) { return; }
      var line = String(value).trim();
      if (!line) { return; }
      if (!runCommand(line, "prompt")) {
        // Not ours: let the game's chat have it (with the slash the player wanted).
        sendChat("/" + line.replace(/^\//, ""));
      }
    });
  }

  function commandList() {
    var list = [];
    var seen = new Set();
    commands.forEach(function (entry) {
      if (seen.has(entry)) { return; }
      seen.add(entry);
      list.push({ name: entry.names[0], usage: entry.usage, description: entry.description, mod: entry.mod && entry.mod.id });
    });
    return list.sort(function (a, b) { return a.name.localeCompare(b.name); });
  }

  /* ------------------------------------------------------------------ keys the runtime owns --- *
   * The command prompt key. Default `.` (only when no text field is focused) and F7 as the key
   * that always works.
   */
  var runtimeKeys = { commandPrompt: true };
  inputBus.on("key", function (event) {
    if (event.action === 0) { return; }
    if (WebMC.__internal.promptOpen && WebMC.__internal.promptOpen()) { return; }
    if (WebMC.hud.isTypingTarget(global.document && global.document.activeElement)) { return; }
    if (event.key === GLFW.F7) { openCommandPrompt(""); }
  });

  WebMC.input = {
    bus: inputBus,
    keyCode: input.keyCode,
    keyName: input.keyName,
    GLFW: GLFW,
    on: function (event, fn, options) { return inputBus.on(event, fn, options); },
    isDown: isDown,
    downKeys: downKeys,
    injectKey: injectKey,
    injectChar: injectChar,
    type: typeText,
    press: pressKey,
    click: click,
    bind: bindKey,
    keybinds: keybinds,
    intercept: function (fn) { input.interceptors.push(fn); return function () { var i = input.interceptors.indexOf(fn); if (i >= 0) { input.interceptors.splice(i, 1); } }; },
    release: function (key) { return injectKey(key, { action: 0 }); },
    prompt: function () { return openCommandPrompt(""); }
  };
  WebMC.chat = {
    send: sendChat,
    onMessage: function (fn) { return chatBus.on("message", fn); },
    onSent: function (fn) { return chatBus.on("sent", fn); },
    history: function () { return chat.history.slice(); },
    bus: chatBus
  };
  WebMC.commands = {
    register: registerCommand,
    run: runCommand,
    list: commandList,
    open: openCommandPrompt,
    bus: commandBus
  };
  WebMC.__internal.keybinds = keybinds;
  WebMC.__internal.commands = commands;
  WebMC.__internal.chat = chat;

  function playerSnapshot() { return WebMC.__internal.snapshotPlayer ? WebMC.__internal.snapshotPlayer() : null; }
})(typeof globalThis !== "undefined" ? globalThis : self);

/* ===== src/30-api.js ===== */
/* WebMC JS mod runtime — the mod-facing API.
 *
 * One factory, `makeApi(mod)`, builds the object a mod sees. Capabilities decide what is on it:
 * a mod that did not ask for `network.write` does not find a `network` namespace, and the reason
 * is in the mod list rather than in a stack trace. Everything a mod registers is tagged with the
 * mod, so disabling or unloading removes it completely.
 */
(function (global) {
  "use strict";

  var WebMC = global.webmc;
  var internal = WebMC.__internal;

  /* ------------------------------------------------------------------ snapshots ---------------- *
   * The client publishes a state snapshot while it runs; these are friendly views of it. A field
   * the client does not publish is `null` — not invented.
   */
  function latestState() { return internal.state.latest; }

  function snapshotPlayer() {
    var state = latestState();
    if (!state) { return { present: false, notYet: true, inWorld: false }; }
    var player = state.player || null;
    return {
      present: !!player,
      notYet: !player,
      inWorld: !!state.level,
      className: player ? player.className : null,
      position: player ? { x: player.x, y: player.y, z: player.z } : null,
      yaw: player ? player.yaw : null,
      pitch: player ? player.pitch : null,
      gameMode: player ? player.gameMode : (state.gameMode || null),
      onGround: player ? player.collisionFree === true : null,
      collisionFree: player ? player.collisionFree : null,
      selectedItem: state.player && state.player.selectedItem ? state.player.selectedItem : (player && player.selectedItem) || null,
      health: null,          // the client's snapshot does not carry health; do not invent a number
      screen: state.screen || null,
      screenTitle: state.screenTitle || null,
      pause: state.pause === true,
      running: state.running === true
    };
  }

  function snapshotWorld() {
    var state = latestState();
    if (!state) { return { present: false, notYet: true, inWorld: false }; }
    var selection = state.worldSelection || null;
    return {
      present: true,
      inWorld: !!state.level,
      loadedChunks: state.loadedChunkCount == null ? null : state.loadedChunkCount,
      hit: state.hit || null,
      overlay: state.overlay || null,
      selection: selection,
      dimension: selection && selection.dimension ? selection.dimension : null,
      time: selection && selection.time != null ? selection.time : null,
      noRender: state.noRender === true,
      renderDistance: state.clientDistance ? state.clientDistance.effectiveRenderDistance : null,
      simulationDistance: state.clientDistance ? state.clientDistance.clientSimulationDistance : null
    };
  }

  function snapshotCamera() {
    var player = snapshotPlayer();
    return {
      present: player.present,
      position: player.position,
      yaw: player.yaw,
      pitch: player.pitch,
      fov: null
    };
  }

  function snapshotScreen() {
    var state = latestState();
    if (!state) { return { present: false, name: null, widgets: [] }; }
    return {
      present: !!state.screen,
      name: state.screen || null,
      title: state.screenTitle || null,
      size: state.screenSize || null,
      widgets: Array.isArray(state.screenWidgets) ? state.screenWidgets : []
    };
  }

  internal.snapshotPlayer = snapshotPlayer;
  internal.snapshotWorld = snapshotWorld;

  /* ------------------------------------------------------------------ storage ------------------ *
   * Per mod, keyed by id, in the client's own localStorage. Values are JSON; a mod never sees
   * another mod's keys.
   */
  function storageFor(mod) {
    var prefix = "webmc.mod." + (mod ? mod.id : "anonymous") + ".";
    var memory = Object.create(null);
    var available = true;
    try {
      var probe = "__webmc_probe__";
      global.localStorage.setItem(probe, "1");
      global.localStorage.removeItem(probe);
    } catch (error) { available = false; }

    function read(key) {
      if (!available) { return memory[prefix + key]; }
      try { return global.localStorage.getItem(prefix + key); } catch (error) { return null; }
    }
    function write(key, value) {
      if (!available) { memory[prefix + key] = value; return true; }
      try { global.localStorage.setItem(prefix + key, value); return true; } catch (error) { return false; }
    }
    var store = {
      available: available,
      get: function (key, fallback) {
        var raw = read(key);
        if (raw == null) { return fallback; }
        try { return JSON.parse(raw); } catch (error) { return raw; }
      },
      set: function (key, value) {
        var encoded;
        try { encoded = JSON.stringify(value); } catch (error) { encoded = String(value); }
        return write(key, encoded);
      },
      has: function (key) { return read(key) != null; },
      remove: function (key) {
        if (!available) { delete memory[prefix + key]; return; }
        try { global.localStorage.removeItem(prefix + key); } catch (error) {}
      },
      keys: function () {
        var out = [];
        if (!available) {
          Object.keys(memory).forEach(function (key) { if (key.indexOf(prefix) === 0) { out.push(key.slice(prefix.length)); } });
          return out;
        }
        try {
          for (var i = 0; i < global.localStorage.length; i++) {
            var key = global.localStorage.key(i);
            if (key && key.indexOf(prefix) === 0) { out.push(key.slice(prefix.length)); }
          }
        } catch (error) {}
        return out;
      },
      clear: function () {
        var self = this;
        this.keys().forEach(function (key) { self.remove(key); });
      }
    };
    return store;
  }

  /* ------------------------------------------------------------------ settings ----------------- *
   * Named values with types, saved through the mod's storage. A converted Fabric mod's config
   * entries become settings; the panel can show and edit them.
   */
  function settingsFor(mod, storage) {
    var controls = new Map();
    function define(options) {
      options = options || {};
      var key = String(options.key || options.name || "").trim();
      if (!key) { throw new Error("a setting needs a key"); }
      var handle = {
        key: key,
        label: options.label || key,
        type: options.type || (typeof options.default === "boolean" ? "boolean" : (typeof options.default === "number" ? "number" : "string")),
        options: options.options || null,
        min: options.min, max: options.max,
        description: options.description || "",
        listeners: [],
        get value() { return read(); },
        set value(next) { write(next); },
        get: function () { return read(); },
        set: function (next) { write(next); },
        reset: function () { write(options.default); },
        onChange: function (fn) { handle.listeners.push(fn); return handle; },
        remove: function () { controls.delete(key); }
      };
      function read() {
        var value = storage.get("setting." + key, undefined);
        if (value === undefined) { return options.default; }
        return value;
      }
      function write(next) {
        if (handle.type === "boolean") { next = !!next; }
        if (handle.type === "number") { next = Number(next); }
        if (handle.type === "string") { next = String(next); }
        storage.set("setting." + key, next);
        handle.listeners.forEach(function (fn) {
          try { fn(next, handle); } catch (error) { internal.reportError("setting:" + key, error, mod && mod.id); }
        });
      }
      controls.set(key, handle);
      read();   // materialise the default so `value` is never undefined
      return handle;
    }
    return {
      define: define,
      list: function () { return Array.from(controls.values()); },
      get: function (key, fallback) { var found = controls.get(key); return found ? found.get() : fallback; },
      set: function (key, value) { var found = controls.get(key); if (found) { found.set(value); } }
    };
  }

  /* ------------------------------------------------------------------ modules ------------------ *
   * The Meteor shape: a named switch with a category, a toggle key, and onEnable/onDisable/onTick.
   * The panel lists them; toggling a module is the same call a keybind makes.
   */
  var moduleRegistry = [];

  function modulesFor(mod) {
    function add(options) {
      options = options || {};
      var module = {
        id: (mod ? mod.id + ":" : "") + (options.id || options.name || ("module-" + moduleRegistry.length)),
        name: options.name || "Module",
        category: options.category || "Misc",
        description: options.description || "",
        mod: mod,
        enabled: !!options.enabled,
        onEnable: options.onEnable || null,
        onDisable: options.onDisable || null,
        onTick: options.onTick || null,
        handlers: [],
        settings: [],
        toggleCount: 0
      };
      module.toggle = function () { return module.setEnabled(!module.enabled); };
      module.setEnabled = function (value) {
        value = !!value;
        if (value === module.enabled) { return module.enabled; }
        module.enabled = value;
        module.toggleCount++;
        try {
          if (value && module.onEnable) { module.onEnable(module); }
          if (!value && module.onDisable) { module.onDisable(module); }
        } catch (error) { internal.reportError("module:" + module.name, error, mod && mod.id); }
        if (!value && mod) { internal.stateBus.emit("module:changed", module); }
        return module.enabled;
      };
      module.on = function (fn) { if (typeof fn === "function") { module.handlers.push(fn); } return module; };
      module.addSetting = function (setting) { module.settings.push(setting); return module; };
      module.remove = function () {
        var index = moduleRegistry.indexOf(module);
        if (index >= 0) { moduleRegistry.splice(index, 1); }
      };
      if (options.key) {
        bindModuleKey(module, options.key, options.modifiers);
      }
      moduleRegistry.push(module);
      if (options.enabled) {
        try { if (module.onEnable) { module.onEnable(module); } } catch (error) { internal.reportError("module:" + module.name, error, mod && mod.id); }
      }
      return module;
    }
    return { add: add, list: function () { return moduleRegistry.filter(function (m) { return m.mod === mod; }); } };
  }

  function bindModuleKey(module, key, modifiers) {
    var bind = WebMC.input.bind(null, Object.assign({}, modifiers || {}, { id: "module:" + module.id, key: key, label: module.name, handler: function () { module.toggle(); } }));
    module.keybind = bind;
  }

  // Their tick runs from the frame loop, isolated one module at a time.
  internal.frameBus.on("tick", function (payload) {
    for (var i = 0; i < moduleRegistry.length; i++) {
      var module = moduleRegistry[i];
      if (!module.enabled) { continue; }
      try {
        if (module.onTick) { module.onTick(payload, module); }
        for (var k = 0; k < module.handlers.length; k++) { module.handlers[k](payload, module); }
      } catch (error) {
        internal.reportError("module:" + module.name, error, module.mod && module.mod.id);
      }
    }
  }, { order: 100 });

  /* ------------------------------------------------------------------ network ------------------ *
   * Raw packet bytes: no protocol knowledge is claimed, and none is invented. Sizes and shapes are
   * what the bridge really hands over.
   */
  function networkFor(mod) {
    var bus = internal.net.bus;
    return {
      on: function (event, fn, options) { return bus.on(event, fn, Object.assign({ owner: mod && mod.id }, options || {})); },
      onSend: function (fn) { return bus.on("send", fn, { owner: mod && mod.id }); },
      onDecode: function (fn) { return bus.on("decode", fn, { owner: mod && mod.id }); },
      send: function (channel, bytes) {
        var bridge = internal.net.bridge;
        if (!bridge || typeof bridge.send !== "function") { return false; }
        return bridge.send(channel, bytes);
      },
      interceptSend: function (fn) {
        internal.net.sendInterceptors.push(fn);
        return function () {
          var index = internal.net.sendInterceptors.indexOf(fn);
          if (index >= 0) { internal.net.sendInterceptors.splice(index, 1); }
        };
      },
      channels: function () {
        var bridge = internal.net.bridge;
        if (!bridge || !bridge.channels) { return []; }
        var out = [];
        bridge.channels.forEach(function (entry, channel) {
          out.push({
            channel: channel,
            inbound: entry && entry.inbound ? entry.inbound.length : 0,
            pending: entry && entry.pendingInbound ? entry.pendingInbound.length : 0,
            disposed: !!(entry && entry.disposed)
          });
        });
        return out;
      },
      stats: function () {
        return { sent: internal.net.sent, sentBytes: internal.net.sentBytes, received: internal.net.received, receivedBytes: internal.net.receivedBytes };
      },
      raw: function () { return internal.net.bridge; }
    };
  }

  /* ------------------------------------------------------------------ the factory -------------- *
   * capabilities: an array from the manifest. Null means "the safe default set".
   */
  var DEFAULT_CAPABILITIES = ["hud", "input", "commands", "storage", "settings", "modules",
                              "player.read", "world.read", "camera.read", "chat.write"];
  var KNOWN_CAPABILITIES = {
    "hud": "draw a HUD and show messages",
    "input": "read keys and mouse",
    "input.block": "stop a key from reaching the game",
    "input.inject": "press keys and click for you",
    "chat.write": "send chat messages",
    "chat.read": "read chat messages",
    "commands": "register /commands",
    "storage": "keep data in this browser",
    "settings": "keep named settings",
    "modules": "register toggleable modules",
    "player.read": "read your position and state",
    "world.read": "read the loaded world's summary",
    "camera.read": "read the camera",
    "network.read": "see packet traffic",
    "network.write": "send packets",
    "internals": "reach into the client's internals",
    "files": "read the client's file store",
    "assets": "load client assets",
    "audio": "play sounds"
  };
  WebMC.capabilityCatalog = KNOWN_CAPABILITIES;
  WebMC.defaultCapabilities = DEFAULT_CAPABILITIES.slice();

  function makeApi(mod) {
    var capabilities = mod.capabilities || DEFAULT_CAPABILITIES.slice();
    function can(name) { return capabilities.indexOf(name) >= 0; }
    var api = {
      version: WebMC.version,
      apiVersion: WebMC.apiVersion,
      mod: { id: mod.id, name: mod.name, version: mod.version },
      capabilities: capabilities.slice(),
      can: can,
      capabilitiesText: function () { return capabilities.map(function (name) { return name + (KNOWN_CAPABILITIES[name] ? " (" + KNOWN_CAPABILITIES[name] + ")" : ""); }); },
      log: function () {
        var args = Array.prototype.slice.call(arguments);
        try { console.log.apply(console, ["[" + mod.id + "]", ].concat(args)); } catch (ignored) {}
        return args;
      },
      message: function (text, options) {
        if (!can("hud")) { return; }
        WebMC.hud.message(text, options);
      },
      events: {
        on: function (event, fn, options) { return busFor(event).on(event, fn); },
        onTick: function (fn) { return internal.frameBus.on("tick", fn, { owner: mod.id }); },
        onFrame: function (fn) { return internal.frameBus.on("frame", fn, { owner: mod.id }); },
        onState: function (fn) { return internal.stateBus.on("state", fn, { owner: mod.id }); },
        onWorldJoin: function (fn) { return internal.stateBus.on("world:join", fn, { owner: mod.id }); },
        onWorldLeave: function (fn) { return internal.stateBus.on("world:leave", fn, { owner: mod.id }); },
        onScreenOpen: function (fn) { return internal.stateBus.on("screen:open", fn, { owner: mod.id }); },
        onScreenClose: function (fn) { return internal.stateBus.on("screen:close", fn, { owner: mod.id }); },
        bus: internal.stateBus
      },
      util: WebMC.util,
      prompt: function (options) { return WebMC.hud.prompt(options); }
    };

    function busFor() { return internal.stateBus; }

    if (can("hud")) {
      api.hud = {
        get width() { return WebMC.hud.width; },
        get height() { return WebMC.hud.height; },
        get scale() { return WebMC.hud.scale; },
        text: function (options) { return WebMC.hud.add(withMod(defaultOptions(options, "text"))); },
        rect: function (options) { return WebMC.hud.add(withMod(defaultOptions(options, "rect"))); },
        bar: function (options) { return WebMC.hud.add(withMod(defaultOptions(options, "bar"))); },
        line: function (options) { return WebMC.hud.add(withMod(defaultOptions(options, "line"))); },
        image: function (options) { return WebMC.hud.add(withMod(defaultOptions(options, "image"))); },
        crosshair: function (options) { return WebMC.hud.add(withMod(defaultOptions(options, "crosshair"))); },
        message: function (text, options) { WebMC.hud.message(text, options); },
        clear: function () { WebMC.hud.elements.forEach(function (element) { if (element.mod === mod.id) { WebMC.hud.elements.delete(element.id); } }); }
      };
    }
    if (can("input")) {
      api.input = {
        on: function (event, fn) { return internal.input.bus.on(event, fn, { owner: mod.id }); },
        onKey: function (fn) { return internal.input.bus.on("key", fn, { owner: mod.id }); },
        isDown: WebMC.input.isDown,
        downKeys: WebMC.input.downKeys,
        keyCode: WebMC.input.keyCode,
        keyName: WebMC.input.keyName,
        bind: function (options) { return WebMC.input.bind(mod, options); },
        GLFW: WebMC.input.GLFW
      };
      if (can("input.inject")) {
        api.input.press = WebMC.input.press;
        api.input.type = WebMC.input.type;
        api.input.click = WebMC.input.click;
        api.input.injectKey = WebMC.input.injectKey;
      }
      if (can("input.block")) {
        api.input.intercept = WebMC.input.intercept;
      }
    }
    if (can("chat.write")) {
      api.chat = {
        send: function (text, options) { return WebMC.chat.send(text, options); },
        onSent: function (fn) { return WebMC.chat.bus.on("sent", fn, { owner: mod.id }); }
      };
      if (can("chat.read")) {
        api.chat.onMessage = function (fn) { return WebMC.chat.bus.on("message", fn, { owner: mod.id }); };
        api.chat.history = WebMC.chat.history;
      }
    }
    if (can("commands")) {
      api.command = function (options) { return WebMC.commands.register(mod, options); };
      api.commands = WebMC.commands;
    }
    if (can("storage")) { api.storage = storageFor(mod); }
    if (can("settings")) {
      api.settings = settingsFor(mod, api.storage || storageFor(mod));
    }
    if (can("modules")) { api.modules = modulesFor(mod); }
    if (can("player.read")) { api.player = { snapshot: snapshotPlayer, position: function () { return snapshotPlayer().position; } }; }
    if (can("world.read")) { api.world = { snapshot: snapshotWorld, screen: snapshotScreen }; }
    if (can("camera.read")) { api.camera = { snapshot: snapshotCamera }; }
    if (can("network.read") || can("network.write")) {
      var net = networkFor(mod);
      api.network = {
        onSend: net.onSend, onDecode: net.onDecode, channels: net.channels, stats: net.stats,
        raw: can("network.write") ? net.raw : undefined,
        send: can("network.write") ? net.send : undefined,
        interceptSend: can("network.write") ? net.interceptSend : undefined
      };
    }
    if (can("internals") && internal.internals) {
      api.internals = internal.internals.forMod(mod);
    }

    function defaultOptions(options, type) {
      var copy = Object.assign({}, options || {});
      copy.type = type;
      return copy;
    }
    function withMod(element) {
      element.mod = mod.id;
      element.id = mod.id + ":" + element.id;
      return element;
    }

    return api;
  }

  internal.makeApi = makeApi;
  internal.modules = moduleRegistry;
  internal.snapshotScreen = snapshotScreen;
  internal.storageFor = storageFor;
  WebMC.player = { snapshot: snapshotPlayer };
  WebMC.world = { snapshot: snapshotWorld, screen: snapshotScreen };
  WebMC.camera = { snapshot: snapshotCamera };
  WebMC.network = { stats: function () { return { sent: internal.net.sent, received: internal.net.received }; } };
  WebMC.modules = {
    list: function () { return moduleRegistry.slice(); },
    get: function (id) { return moduleRegistry.filter(function (m) { return m.id === id || m.name === id; })[0] || null; }
  };
})(typeof globalThis !== "undefined" ? globalThis : self);

/* ===== src/35-patches.js ===== */
/* WebMC JS mod runtime — patch plans.
 *
 * A converted Fabric mod whose behaviour is mixins arrives with a plan: which class, which method,
 * where, and which handler. This registers those plans, keeps them for the panel, and is the door
 * the client-internals layer will use to apply them. Until that layer exists, a plan is a *record*
 * — it is shown, counted and reported, and it never pretends to have patched anything.
 */
(function (global) {
  "use strict";

  var WebMC = global.webmc;
  var internal = WebMC.__internal;

  var plans = [];
  var byId = new Map();
  var bus = new WebMC.Bus("patches");
  var applied = 0;
  var refused = 0;

  function add(plan) {
    plan = plan || {};
    var id = plan.mixin || ("plan-" + (plans.length + 1));
    var record = {
      id: id,
      mod: plan.modId || plan.mod || null,
      mixin: plan.mixin || null,
      targets: Array.isArray(plan.targets) ? plan.targets.slice() : [],
      environment: plan.environment || "unknown",
      injections: Array.isArray(plan.injections) ? plan.injections.slice() : [],
      accessors: Array.isArray(plan.accessors) ? plan.accessors.slice() : [],
      shadows: Array.isArray(plan.shadows) ? plan.shadows.slice() : [],
      state: "planned",
      why: null,
      at: Date.now()
    };
    plans.push(record);
    byId.set(id, record);
    // A plan can be applied straight away when the client internals are available.
    var result = tryApply(record);
    record.state = result.ok ? "applied" : "planned";
    record.why = result.why || null;
    if (result.ok) { applied++; } else { refused++; }
    internal.notifyPanel({ kind: "webmc:patches", count: plans.length, applied: applied, planned: refused });
    bus.emit("plan", record);
    return record;
  }

  function tryApply(record) {
    var internals = internal.internals;
    if (!internals || typeof internals.applyPatch !== "function") {
      return { ok: false, why: "the client internals layer is not installed in this build" };
    }
    try {
      return internals.applyPatch(record) || { ok: false, why: "the internals layer refused the plan" };
    } catch (error) {
      internal.reportError("patch:" + record.id, error);
      return { ok: false, why: String(error && error.message || error) };
    }
  }

  function summary() {
    var classes = {};
    var methods = {};
    for (var i = 0; i < plans.length; i++) {
      var plan = plans[i];
      for (var t = 0; t < plan.targets.length; t++) { classes[plan.targets[t]] = (classes[plan.targets[t]] || 0) + 1; }
      for (var j = 0; j < plan.injections.length; j++) {
        var methods2 = plan.injections[j].method;
        if (Array.isArray(methods2)) { for (var k = 0; k < methods2.length; k++) { methods[methods2[k]] = (methods[methods2[k]] || 0) + 1; } }
      }
    }
    return {
      plans: plans.length,
      injections: plans.reduce(function (total, plan) { return total + plan.injections.length; }, 0),
      accessors: plans.reduce(function (total, plan) { return total + plan.accessors.length; }, 0),
      applied: applied,
      planned: refused,
      targets: Object.keys(classes).sort(function (a, b) { return classes[b] - classes[a]; }).slice(0, 40).map(function (name) {
        return { target: name, count: classes[name] };
      }),
      methods: Object.keys(methods).sort(function (a, b) { return methods[b] - methods[a]; }).slice(0, 40).map(function (name) {
        return { method: name, count: methods[name] };
      })
    };
  }

  WebMC.patches = {
    add: add,
    list: function () { return plans.slice(); },
    get: function (id) { return byId.get(id) || null; },
    count: function () { return plans.length; },
    summary: summary,
    bus: bus,
    on: function (event, fn, options) { return bus.on(event, fn, options); }
  };
  WebMC.__internal.patches = { plans: plans, summary: summary };
})(typeof globalThis !== "undefined" ? globalThis : self);

/* ===== src/40-mods.js ===== */
/* WebMC JS mod runtime — the door.
 *
 * What a mod is, how it is loaded, and what happens when it misbehaves. A mod file calls
 * `webmc.defineMod({...})` and gets an API object scoped to the capabilities its manifest asked
 * for. Loading happens at play time: before the game's first script for the mods in the index,
 * and at any moment for a package the player adds while the game is running.
 *
 * The rules, in order of importance:
 *   1. A mod's failure is the mod's. Every handler runs inside a guard; a repeatedly failing mod
 *      is suspended by name, and the game keeps running.
 *   2. Risky capabilities are asked about once per mod, and a "no" leaves the mod loaded without
 *      them rather than half-broken.
 *   3. Unloading is real: listeners, HUD elements, keybinds, commands and modules all go.
 */
(function (global) {
  "use strict";

  var WebMC = global.webmc;
  var internal = WebMC.__internal;

  var RISKY = {
    "network.write": "send packets to the server on your behalf",
    "input.inject": "press keys and click for you",
    "input.block": "stop your own keystrokes from reaching the game",
    "internals": "reach into the game's compiled internals",
    "files": "read and write the client's saved files"
  };

  var registry = [];
  var byId = new Map();
  var byPackage = new Map();
  var loaded = [];

  function consentKey(mod) {
    return "webmc.consent.v1." + mod.id;
  }
  function consentHash(mod) {
    return (mod.capabilities || []).slice().sort().join("+");
  }
  function trustAll() {
    return !!(internal.boot && internal.boot.trustAll);
  }

  function hasConsent(mod) {
    if (trustAll()) { return true; }
    try {
      var raw = global.localStorage.getItem(consentKey(mod));
      if (!raw) { return false; }
      var parsed = JSON.parse(raw);
      return parsed && parsed.hash === consentHash(mod) && parsed.allowed === true;
    } catch (error) { return false; }
  }

  function rememberConsent(mod, allowed) {
    try {
      global.localStorage.setItem(consentKey(mod), JSON.stringify({ hash: consentHash(mod), allowed: !!allowed, at: Date.now() }));
    } catch (error) {}
  }

  function askConsent(mod, risky) {
    var lines = risky.map(function (name) { return "  - " + name + ": " + (RISKY[name] || "…"); }).join("\n");
    return WebMC.hud.prompt({
      title: "“" + mod.name + "” wants permissions",
      value: "",
      placeholder: "type yes to allow, anything else to refuse"
    }).then(function (value) {
      var allowed = String(value || "").trim().toLowerCase() === "yes";
      rememberConsent(mod, allowed);
      if (!allowed) {
        WebMC.hud.message("“" + mod.name + "” was refused: " + risky.join(", "), { color: "#fca5a5", ttl: 5000 });
        internal.toast("Refused " + mod.id + ": " + risky.join(", "));
      }
      return allowed;
    });
  }

  /* ------------------------------------------------------------------ a mod -------------------- */
  var PLATFORM_EVENTS = {
    "tick": function (bus, mod, fn) { return internal.frameBus.on("tick", fn, { owner: mod.id }); },
    "frame": function (bus, mod, fn) { return internal.frameBus.on("frame", fn, { owner: mod.id }); },
    "state": function (bus, mod, fn) { return internal.stateBus.on("state", fn, { owner: mod.id }); },
    "world:join": function (bus, mod, fn) { return internal.stateBus.on("world:join", fn, { owner: mod.id }); },
    "world:leave": function (bus, mod, fn) { return internal.stateBus.on("world:leave", fn, { owner: mod.id }); },
    "screen:open": function (bus, mod, fn) { return internal.stateBus.on("screen:open", fn, { owner: mod.id }); },
    "screen:close": function (bus, mod, fn) { return internal.stateBus.on("screen:close", fn, { owner: mod.id }); },
    "key": function (bus, mod, fn) { return internal.input.bus.on("key", fn, { owner: mod.id }); },
    "char": function (bus, mod, fn) { return internal.input.bus.on("char", fn, { owner: mod.id }); },
    "chat": function (bus, mod, fn) { return WebMC.chat.bus.on("message", fn, { owner: mod.id }); },
    "chat:sent": function (bus, mod, fn) { return WebMC.chat.bus.on("sent", fn, { owner: mod.id }); },
    "packet": function (bus, mod, fn) { return internal.net.bus.on("decode", fn, { owner: mod.id }); }
  };

  function Mod(description) {
    this.id = String(description.id || description.name || ("mod-" + (registry.length + 1)));
    this.name = String(description.name || this.id);
    this.version = description.version != null ? String(description.version) : "0.0.0";
    this.description = description.description || "";
    this.authors = Array.isArray(description.authors) ? description.authors.slice() : (description.author ? [String(description.author)] : []);
    this.capabilities = Array.isArray(description.capabilities) ? description.capabilities.slice()
                      : (Array.isArray(description.permissions) ? description.permissions.slice() : null);
    this.source = description.source || null;
    this.enabled = false;
    this.suspended = false;
    this.failures = 0;
    this.loadedAt = Date.now();
    this.api = null;
    this.bus = new WebMC.Bus("mod:" + this.id);
    this.handlers = Object.create(null);
    this.errors = [];
    this.package = description.package || null;
    this.consented = false;
  }

  Mod.prototype.on = function (event, fn, options) {
    if (typeof fn !== "function") { throw new TypeError("listener must be a function"); }
    var mod = this;
    var platform = PLATFORM_EVENTS[event];
    var off = null;
    if (platform) {
      off = platform(this.bus, this, function (payload) {
        if (!mod.enabled || mod.suspended) { return; }
        guard(mod, "on:" + event, fn, payload, event);
      });
    } else {
      off = this.bus.on(event, function (payload) {
        if (!mod.enabled || mod.suspended) { return; }
        try { fn(payload, event); }
        catch (error) { fail(mod, "on:" + event, error); }
      }, options);
    }
    this.handlers[event] = (this.handlers[event] || []).concat([off]);
    return this;
  };

  Mod.prototype.emit = function (event, payload) { return this.bus.emit(event, payload); };
  Mod.prototype.off = function (event) {
    var list = this.handlers[event] || [];
    list.forEach(function (off) { try { off(); } catch (ignored) {} });
    delete this.handlers[event];
    return this;
  };

  Mod.prototype.enable = function () {
    if (this.enabled) { return this; }
    this.enabled = true;
    guard(this, "enable", (this.__onEnable || function () {}));
    this.bus.emit("enable", this);
    return this;
  };
  Mod.prototype.disable = function () {
    if (!this.enabled) { return this; }
    this.enabled = false;
    guard(this, "disable", (this.__onDisable || function () {}));
    this.bus.emit("disable", this);
    return this;
  };
  Mod.prototype.unload = function () { return unload(this.id); };

  function guard(mod, where, fn, a, b) {
    if (mod.suspended) { return null; }
    try {
      return fn(a, b);
    } catch (error) {
      fail(mod, where, error);
      return null;
    }
  }

  function fail(mod, where, error) {
    mod.failures++;
    var text = internal.reports[internal.reports.length - 1] && internal.reports[internal.reports.length - 1].text;
    mod.errors.push({ where: where, text: error && (error.message || String(error)), at: Date.now() });
    if (mod.errors.length > 24) { mod.errors.shift(); }
    internal.reportError(where + "@" + mod.id, error, mod.id);
    if (mod.failures >= 25) {
      mod.suspended = true;
      mod.disable();
      WebMC.hud.message("Mod “" + mod.name + "” was suspended after repeated errors", { color: "#fca5a5", ttl: 6000 });
      publish();
    }
  }

  function recordFor(mod) {
    var risky = (mod.capabilities || []).filter(function (name) { return RISKY[name]; });
    return {
      id: mod.id,
      name: mod.name,
      version: mod.version,
      description: mod.description,
      authors: mod.authors,
      capabilities: mod.capabilities || WebMC.defaultCapabilities.slice(),
      risky: risky,
      enabled: mod.enabled,
      suspended: mod.suspended,
      errors: mod.errors.slice(-6),
      from: mod.package || "index",
      trusted: !!mod.trusted,
      loadedAt: mod.loadedAt
    };
  }

  function publish() {
    internal.notifyPanel({
      kind: "webmc:mods",
      mods: registry.map(recordFor),
      capabilities: WebMC.capabilities,
      missing: WebMC.missing
    });
    internal.notifyPanel({ kind: "webmc:ready", count: registry.filter(function (m) { return m.enabled; }).length });
  }

  /* ------------------------------------------------------------------ loading ------------------ */
  /** Define a mod. Called from mod sources; returns the mod's own handle. */
  function defineMod(description) {
    description = description || {};
    var mod = new Mod(description);
    if (byId.has(mod.id)) {
      // A reload of the same package: replace the old instance rather than stacking two.
      unload(mod.id);
    }
    byId.set(mod.id, mod);
    registry.push(mod);
    loaded.push(mod.id);

    var risky = (mod.capabilities || []).filter(function (name) { return RISKY[name]; });
    var needsConsent = risky.length > 0 && !hasConsent(mod);
    if (trustAll()) { mod.trusted = true; }

    var start = function (allowed) {
      if (!allowed && risky.length) {
        mod.capabilities = (mod.capabilities || []).filter(function (name) { return !RISKY[name]; });
        mod.consentDenied = true;
        mod.refused = risky;
      }
      mod.consented = true;
      mod.api = internal.makeApi(mod);
      if (description.api) { Object.assign(mod.api, description.api); }
      mod.__onEnable = function () { mod.bus.emit("init", mod.api); };
      try {
        if (typeof description.init === "function") { mod.__onEnable = function () { description.init(mod.api); mod.bus.emit("init", mod.api); }; }
        mod.enable();
      } catch (error) { fail(mod, "init", error); }
      publish();
      return mod;
    };

    if (needsConsent) {
      askConsent(mod, risky).then(start);
    } else {
      // The mod source has not finished running yet: it calls defineMod() and *then* registers its
      // handlers. Enabling synchronously here would emit "init" before anybody was listening, so
      // enable starts after the current source finishes. A source that awaits before registering
      // still works: enable is a promise turn, not a timer.
      Promise.resolve().then(function () {
        if (!mod.consentDenied && !mod.enabled && byId.has(mod.id)) { start(true); }
      });
    }
    return mod;
  }

  function unload(id) {
    var mod = byId.get(id);
    if (!mod) { return false; }
    mod.disable();
    // Everything the mod registered, gone by name.
    internal.frameBus.removeOwner(id);
    internal.stateBus.removeOwner(id);
    internal.input.bus.removeOwner(id);
    WebMC.chat.bus.removeOwner(id);
    internal.net.bus.removeOwner(id);
    internal.keybinds.forEach(function (bind) { if (bind.mod && bind.mod.id === id) { internal.keybinds.delete(bind.id); } });
    internal.commands.forEach(function (entry, name) { if (entry.mod && entry.mod.id === id) { internal.commands.delete(name); } });
    internal.modules.slice().forEach(function (module) { if (module.mod && module.mod.id === id) { module.remove(); } });
    WebMC.hud.elements.forEach(function (element) { if (element.mod === id) { WebMC.hud.elements.delete(element.id); } });
    internal.net.sendInterceptors.length = 0;   // interceptors are not owner-tagged; a reload starts clean
    internal.input.interceptors.length = 0;
    registry.splice(registry.indexOf(mod), 1);
    byId.delete(id);
    publish();
    return true;
  }

  /** Run a mod source. Either it calls webmc.defineMod(), or it returns a description. */
  function runSource(id, source, options) {
    options = options || {};
    var before = registry.length;
    var namespacedConsole = {
      log: function () { console.log.apply(console, ["[" + id + "]"].concat(Array.prototype.slice.call(arguments))); },
      warn: function () { console.warn.apply(console, ["[" + id + "]"].concat(Array.prototype.slice.call(arguments))); },
      error: function () { console.error.apply(console, ["[" + id + "]"].concat(Array.prototype.slice.call(arguments))); },
      info: function () { console.info.apply(console, ["[" + id + "]"].concat(Array.prototype.slice.call(arguments))); },
      debug: function () { console.debug.apply(console, ["[" + id + "]"].concat(Array.prototype.slice.call(arguments))); }
    };
    var factory;
    try {
      // eslint-disable-next-line no-new-func
      factory = new Function("webmc", "console", "globalThis", '"use strict";\n' + source + "\n//# sourceURL=webmc-mod://" + encodeURIComponent(id) + ".js");
    } catch (error) {
      internal.reportError("compile:" + id, error);
      return { ok: false, error: "the source did not compile: " + (error && error.message || error) };
    }
    try {
      var result = factory(WebMC, namespacedConsole, global);
      if (result && typeof result === "object" && (result.id || result.name)) {
        defineMod(Object.assign({ source: id, package: id }, result));
      }
    } catch (error) {
      internal.reportError("run:" + id, error);
      return { ok: false, error: "the source threw: " + (error && error.stack || error) };
    }
    var defined = registry.slice(before);
    defined.forEach(function (mod) { mod.package = options.package || id; });
    if (!defined.length) {
      return { ok: false, error: "the source ran but never called webmc.defineMod()" };
    }
    return { ok: true, mods: defined.map(function (mod) { return mod.id; }) };
  }

  function loadPackage(id, source, options) {
    var result = runSource(id, source, options);
    if (!result.ok) {
      internal.toast("Could not load " + id + ": " + result.error);
    }
    publish();
    return result;
  }

  function setEnabled(id, value) {
    var mod = byId.get(id);
    if (!mod) { return false; }
    if (value) { mod.enable(); } else { mod.disable(); }
    publish();
    return true;
  }

  /* ------------------------------------------------------------------ parent messages ---------- *
   * The page owns the mods drawer; the runtime owns the mods. These four messages are the whole
   * protocol between them.
   */
  global.addEventListener("message", function (event) {
    var data = event.data;
    if (!data || typeof data !== "object") { return; }
    if (data.kind === "webmc:mod-added" && data.mod && data.mod.source) {
      loadPackage(data.mod.id, data.mod.source, { package: data.mod.from || "player" });
    } else if (data.kind === "webmc:mod-removed" && data.id) {
      unload(data.id);
    } else if (data.kind === "webmc:mod-disabled" && data.id) {
      setEnabled(data.id, !data.disabled);
    }
  });

  WebMC.defineMod = defineMod;
  WebMC.mods = {
    list: function () { return registry.map(recordFor); },
    get: function (id) { return byId.get(id) || null; },
    unload: unload,
    enable: function (id) { return setEnabled(id, true); },
    disable: function (id) { return setEnabled(id, false); },
    load: function (id, source) { return loadPackage(id, source); },
    run: function (id, source) { return runSource(id, source); },
    count: function () { return registry.length; }
  };
  internal.registry = registry;
  internal.publish = publish;
  internal.runSource = runSource;
})(typeof globalThis !== "undefined" ? globalThis : self);

/* ===== src/50-boot.js ===== */
/* WebMC JS mod runtime — boot and the in-game panel.
 *
 * Runs last. Loads the mods that came with the page (they were fetched by the loader and shipped
 * inside the client's bootstrap, so no mod file is fetched from inside the blob document), wires
 * the in-game panel, and tells the page that the runtime is alive.
 */
(function (global) {
  "use strict";

  var WebMC = global.webmc;
  var internal = WebMC.__internal;

  /* ------------------------------------------------------------------ load what came with the page */
  var preloaded = Array.isArray(global.__webmcMods) ? global.__webmcMods : [];
  var results = [];

  function loadPreloaded() {
    for (var i = 0; i < preloaded.length; i++) {
      var entry = preloaded[i];
      if (!entry || !entry.source) {
        results.push({ id: entry && entry.id, ok: false, error: "no source" });
        continue;
      }
      var result = internal.runSource(String(entry.id || ("mod-" + i)), String(entry.source), { package: entry.from || "index" });
      results.push({ id: entry.id, ok: result.ok, error: result.error, mods: result.mods });
    }
    internal.publish();
    if (results.length) {
      var failed = results.filter(function (item) { return !item.ok; });
      var loaded = results.filter(function (item) { return item.ok; });
      internal.toast("WebMC runtime ready — " + (loaded.length ? loaded.length + " mod package(s) loaded" : "no mods")
        + (failed.length ? ", " + failed.length + " failed" : ""));
    }
  }

  /* ------------------------------------------------------------------ the in-game panel --------- *
   * Mods (Meteor's word) with their switches, grouped by category. A DOM overlay rather than a
   * canvas: the browser gives us focus, scrolling and text for free, and the game does not see the
   * clicks because the overlay swallows them.
   */
  var panel = { element: null, open: false };

  function modulesPanel() {
    var doc = global.document;
    if (!doc || !doc.body) { return; }
    if (panel.open) { closePanel(); return; }
    var wrap = doc.createElement("div");
    wrap.style.cssText = "position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2147483645;" +
      "background:rgba(10,13,17,.97);border:1px solid #2a313a;border-radius:12px;padding:14px;min-width:min(560px,92vw);" +
      "max-height:80vh;overflow:auto;font:13px ui-sans-serif,system-ui,sans-serif;color:#e8eaed;box-shadow:0 24px 60px rgba(0,0,0,.7)";
    var header = doc.createElement("div");
    header.textContent = "Modules — click to toggle";
    header.style.cssText = "font-weight:600;margin-bottom:10px;color:#9aa3ae";
    wrap.appendChild(header);
    var modules = internal.modules;
    if (!modules.length) {
      var empty = doc.createElement("div");
      empty.textContent = "No modules yet. A mod that calls webmc.modules.add() shows up here.";
      empty.style.cssText = "color:#6b7480";
      wrap.appendChild(empty);
    } else {
      var byCategory = {};
      modules.forEach(function (module) { (byCategory[module.category] = byCategory[module.category] || []).push(module); });
      Object.keys(byCategory).sort().forEach(function (category) {
        var group = doc.createElement("div");
        group.textContent = category;
        group.style.cssText = "margin:10px 0 4px;color:#7ab8ff;font-size:12px;text-transform:uppercase;letter-spacing:.08em";
        wrap.appendChild(group);
        byCategory[category].forEach(function (module) {
          var row = doc.createElement("label");
          row.style.cssText = "display:flex;gap:8px;align-items:center;padding:5px 6px;border-radius:7px;cursor:pointer";
          row.onmouseenter = function () { row.style.background = "rgba(255,255,255,.05)"; };
          row.onmouseleave = function () { row.style.background = ""; };
          var box = doc.createElement("input");
          box.type = "checkbox";
          box.checked = module.enabled;
          box.onchange = function () { module.setEnabled(box.checked); };
          var text = doc.createElement("span");
          text.innerHTML = "<b>" + WebMC.util.escapeHtml(module.name) + "</b>"
            + (module.description ? ' <span style="color:#9aa3ae">— ' + WebMC.util.escapeHtml(module.description) + "</span>" : "");
          row.appendChild(box); row.appendChild(text);
          wrap.appendChild(row);
        });
      });
    }
    var hint = doc.createElement("div");
    hint.textContent = "F8 or Esc closes this";
    hint.style.cssText = "margin-top:12px;color:#6b7480;font-size:11px";
    wrap.appendChild(hint);
    wrap.addEventListener("keydown", function (event) { event.stopPropagation(); });
    wrap.addEventListener("mouseup", function (event) { event.stopPropagation(); });
    doc.body.appendChild(wrap);
    panel.element = wrap;
    panel.open = true;
  }

  function closePanel() {
    if (panel.element && panel.element.parentNode) { panel.element.parentNode.removeChild(panel.element); }
    panel.element = null;
    panel.open = false;
  }

  internal.input.bus.on("key", function (event) {
    if (event.action === 0) { return; }
    if (event.key === internal.input.GLFW.F8 || (panel.open && event.key === internal.input.GLFW.ESCAPE)) {
      window_event: { modulesPanel(); }
    }
  });

  /* ------------------------------------------------------------------ self test ----------------- *
   * `webmc.selftest()` is what the browser check runs: it proves the runtime is inside the client
   * and that the hooks the platform claims are really installed.
   */
  WebMC.selftest = function () {
    var state = internal.state;
    return {
      ok: true,
      runtime: { name: "webmc", version: WebMC.version, apiVersion: WebMC.apiVersion, build: WebMC.build },
      client: { version: internal.boot.version, base: internal.boot.base },
      capabilities: Object.keys(WebMC.capabilities),
      missing: WebMC.missing,
      hooks: {
        input: internal.input.installed,
        inputEvents: internal.input.observed,
        state: !!state.latest,
        stateUpdates: state.updates,
        network: internal.net.hooked,
        gl: internal.gl.hooked
      },
      frame: { count: internal.frame.count, tick: internal.frame.gameTick, fps: Math.round(internal.frame.fps * 10) / 10 },
      patches: internal.patches ? internal.patches.summary() : null,
      modules: WebMC.modules.list().length,
      state: (function () {
        var snapshot = internal.state.latest;
        if (!snapshot) { return { present: false }; }
        return {
          present: true,
          screen: snapshot.screen || null,
          screenTitle: snapshot.screenTitle || null,
          level: !!snapshot.level,
          player: snapshot.player ? { x: snapshot.player.x, y: snapshot.player.y, z: snapshot.player.z } : null,
          loadedChunks: snapshot.loadedChunkCount == null ? null : snapshot.loadedChunkCount
        };
      })(),
      mods: WebMC.mods.list()
    };
  };

  /* ------------------------------------------------------------------ go ----------------------- */
  function bootNow() {
    loadPreloaded();
    // The page can ask for a status snapshot at any time.
    global.addEventListener("message", function (event) {
      var data = event.data;
      if (!data || typeof data !== "object") { return; }
      if (data.kind === "webmc:query-selftest") { internal.notifyPanel({ kind: "webmc:selftest", value: WebMC.selftest() }); }
      if (data.kind === "webmc:panel-modules") { modulesPanel(); }
    });
    internal.notifyPanel({ kind: "webmc:runtime", value: WebMC.selftest() });
    internal.toast("WebMC runtime " + WebMC.version + " installed" + (preloaded.length ? " — " + preloaded.length + " mod(s)" : ""));
    // A slow heartbeat: the page forwards it when asked, which is how a headless check can watch
    // the runtime live (frame counts, input events, state updates) without a debugger attached.
    global.setInterval(function () {
      internal.notifyPanel({ kind: "webmc:heartbeat", value: WebMC.selftest() });
    }, 5000);
  }

  if (global.document && global.document.readyState === "loading") {
    global.document.addEventListener("DOMContentLoaded", bootNow, { once: true });
  } else {
    bootNow();
  }
  WebMC.panel = { modules: modulesPanel, close: closePanel, isOpen: function () { return panel.open; } };
})(typeof globalThis !== "undefined" ? globalThis : self);
