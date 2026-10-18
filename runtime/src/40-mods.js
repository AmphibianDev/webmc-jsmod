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
