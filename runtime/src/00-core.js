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
  WebMC.build = "__WEBMC_BUILD__";

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
