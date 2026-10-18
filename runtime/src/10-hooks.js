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
    symbolsUrl: clientInfo.symbolsUrl || null,
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
