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
  // One event surface for anything that is not a mod: the shell script, diagnostics, converted code.
  WebMC.events = {
    on: function (event, fn, options) { return internal.stateBus.on(event, fn, options); },
    onTick: function (fn, options) { return internal.frameBus.on("tick", fn, options); },
    onFrame: function (fn, options) { return internal.frameBus.on("frame", fn, options); },
    onState: function (fn, options) { return internal.stateBus.on("state", fn, options); },
    onWorldJoin: function (fn, options) { return internal.stateBus.on("world:join", fn, options); },
    onScreenOpen: function (fn, options) { return internal.stateBus.on("screen:open", fn, options); }
  };
  WebMC.isClientRunning = function () {
    var latest = internal.state.latest;
    return !!(latest && (latest.screen || latest.level));
  };
  WebMC.player = { snapshot: snapshotPlayer };
  WebMC.world = { snapshot: snapshotWorld, screen: snapshotScreen };
  WebMC.camera = { snapshot: snapshotCamera };
  WebMC.network = { stats: function () { return { sent: internal.net.sent, received: internal.net.received }; } };
  WebMC.modules = {
    list: function () { return moduleRegistry.slice(); },
    get: function (id) { return moduleRegistry.filter(function (m) { return m.id === id || m.name === id; })[0] || null; }
  };
})(typeof globalThis !== "undefined" ? globalThis : self);
