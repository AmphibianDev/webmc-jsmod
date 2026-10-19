/* WebMC JS mod runtime — the client internals.
 *
 * The compiled client does not expose its classes to the page, so a mixin has nothing to attach to.
 * A build patched by tools/patch-client.mjs does: the end of its compiled module assigns
 * `globalThis.__gaiusTeaVM`, the object that holds every class, function and static in the build.
 * This file turns that object into an API, and applies the patch plans converted mods bring.
 *
 * What a patched build gives, and what it does not:
 *
 *   yes  every class, by its real name (9,855 of them), and its constructor
 *   yes  the exact function behind a method whose class had a lambda in it: TeaVM names lambda
 *        classes `Owner$method$lambda$_<index>_<n>`, and the lambda is instantiated inside that
 *        method — so tools/build-symbols.mjs can name the enclosing function (762 methods today)
 *   no   a name table for the other methods. The build ships none: TeaVM emits direct calls
 *        (`A.IkAb(this, …)`) and no string names, so the remaining methods need alignment work
 *        (see docs/INTERNALS.md). A plan whose method is not in the map is *refused with the
 *        reason*, never guessed.
 *
 * Applying an `@Inject` is real: the method is a property on the internals object, so wrapping that
 * property intercepts every call site in the compiled game.
 */
(function (global) {
  "use strict";

  var WebMC = global.webmc;
  var internal = WebMC.__internal;

  var state = {
    available: false,
    reason: null,
    teaVM: null,
    metaSymbol: null,
    classes: null,          // name -> constructor
    bySimple: null,         // simple name -> [name]
    symbols: null,          // the anchor map, loaded lazily
    symbolsUrl: null,
    symbolsLoaded: false,
    resolutions: 0,
    misses: 0
  };

  function detect() {
    if (state.available) { return true; }
    var teaVM = global.__gaiusTeaVM;
    if (!teaVM || typeof teaVM !== "object") {
      state.reason = "this client build does not expose its internals (patch it with tools/patch-client.mjs)";
      return false;
    }
    state.teaVM = teaVM;
    // TeaVM stamps every class constructor with a symbol it calls teavm_meta, which carries the
    // class's real name.
    var keys = Object.keys(teaVM);
    for (var i = 0; i < keys.length && !state.metaSymbol; i++) {
      var value = teaVM[keys[i]];
      if (typeof value !== "function") { continue; }
      var symbols = Object.getOwnPropertySymbols(value);
      for (var j = 0; j < symbols.length; j++) {
        if (String(symbols[j]).indexOf("teavm_meta") >= 0) { state.metaSymbol = symbols[j]; break; }
      }
    }
    if (!state.metaSymbol) { state.reason = "the internals object has no class metadata"; return false; }
    state.available = true;
    return true;
  }

  function buildRegistry() {
    if (!state.available) { detect(); }
    if (state.classes || !state.available) { return state.classes; }
    var classes = new Map();
    var bySimple = new Map();
    var teaVM = state.teaVM;
    var keys = Object.keys(teaVM);
    for (var i = 0; i < keys.length; i++) {
      var value = teaVM[keys[i]];
      if (typeof value !== "function") { continue; }
      var meta = value[state.metaSymbol];
      if (!meta || !meta.name) { continue; }
      classes.set(meta.name, value);
      var simple = meta.name.split(".").pop().split("$").pop();
      var list = bySimple.get(simple);
      if (list) { list.push(meta.name); } else { bySimple.set(simple, [meta.name]); }
    }
    state.classes = classes;
    state.bySimple = bySimple;
    return classes;
  }

  function loadSymbols() {
    if (state.symbolsLoaded) { return state.symbols; }
    state.symbolsLoaded = true;
    if (!state.symbolsUrl) { state.symbols = {}; return state.symbols; }
    var request = new XMLHttpRequest();
    try {
      request.open("GET", state.symbolsUrl, false);   // synchronous on purpose: mods apply patches at init
      request.send(null);
      if (request.status >= 200 && request.status < 300) {
        state.symbols = JSON.parse(request.responseText).anchors || {};
      } else {
        state.symbols = {};
        internal.reportError("internals:symbols", new Error("HTTP " + request.status + " for " + state.symbolsUrl));
      }
    } catch (error) {
      state.symbols = {};
      internal.reportError("internals:symbols", error);
    }
    return state.symbols;
  }

  function findClass(name) {
    if (!state.available) { detect(); }
    if (!state.available || !name) { return null; }
    buildRegistry();
    var direct = state.classes.get(name) || null;
    if (direct) { return direct; }
    var list = state.bySimple.get(String(name).split(".").pop()) || null;
    if (!list || !list.length) { return null; }
    // Prefer an exact suffix match (`net.minecraft.client.Minecraft` -> `Minecraft`).
    for (var i = 0; i < list.length; i++) { if (list[i].endsWith("." + name) || list[i] === name) { return state.classes.get(list[i]); } }
    return state.classes.get(list[0]);
  }

  /** The anchor map is keyed by TeaVM's simple names (`Minecraft`, `KeyMapping`, …). */
  function resolve(className, methodName) {
    if (!state.available) { detect(); }
    if (!state.available) { return null; }
    var symbols = loadSymbols();
    if (!symbols) { return null; }
    // A caller may name a class the way the converter does (`net/minecraft/client/Minecraft`) or
    // with dots; the map is keyed by TeaVM's simple names (`Minecraft`).
    var simple = String(className || "").replace(/\/+$/, "").split(/[./]/).pop().split("$").pop();
    var table = symbols[simple] || symbols[className] || null;
    var entry = table ? (table[methodName] || null) : null;
    if (!entry || !entry.fn) { state.misses++; return null; }
    var fn = state.teaVM[entry.fn];
    if (typeof fn !== "function") {
      // A few entries point at a static field or a class factory instead of a method: the name is
      // right but there is no function to wrap. Refuse rather than pretend.
      state.misses++;
      return null;
    }
    state.resolutions++;
    return { fn: entry.fn, callable: fn, arity: entry.arity, index: entry.index };
  }

  function unresolved(className, methodName, why) {
    state.misses++;
    return { ok: false, why: why || ("no name anchor for " + className + "." + methodName + " in this build's symbol map") };
  }

  /* ------------------------------------------------------------------ patching ------------------ *
   * `@Inject` at HEAD/RETURN is a wrapper around the target function. TeaVM calls methods through
   * the object (`A.IkAb(this, …)`), so replacing the property intercepts every call site.
   */
  var applied = [];
  var refused = [];
  var rolledBack = 0;
  // Tuning knobs, exposed through the internals object so a test (or a mod author) can change them.
  var limits = { hotPerSecond: 40, sampleCalls: 20, runsPerSecond: 200, maxWrapped: 256 };
  var wrappedBy = new Map();       // fn symbol -> the plan that wrapped it first

  function applyPatch(plan) {
    if ((internal.boot && internal.boot.internals === false) || WebMC.__internal.internalsDisabled) {
      return { ok: false, why: "the internals layer is switched off for this page (?internals=off)" };
    }
    if (!state.available) { detect(); }
    if (!state.available) { return { ok: false, why: state.reason }; }
    if (!plan || !plan.targets || !plan.targets.length) { return { ok: false, why: "the plan names no target class" }; }
    var results = [];
    for (var i = 0; i < (plan.injections || []).length; i++) {
      var injection = plan.injections[i];
      results.push(applyInjection(plan, injection));
    }
    for (var a = 0; a < (plan.accessors || []).length; a++) {
      results.push({ ok: false, why: "accessors need a field-name map, which this build does not carry yet", injection: plan.accessors[a].name });
    }
    var appliedHere = results.filter(function (r) { return r.ok; }).length;
    var wrapped = results.filter(function (r) { return r.ok && r.rollback; }).map(function (r) { return r.rollback; });
    var record = {
      plan: plan,
      applied: appliedHere,
      refused: results.length - appliedHere,
      results: results,
      rollback: wrapped
    };
    if (appliedHere) { applied.push(record); } else { refused.push(record); }
    return {
      ok: appliedHere > 0,
      why: appliedHere ? null : (results[0] && results[0].why) || "nothing in this plan could be resolved",
      applied: appliedHere,
      refused: results.length - appliedHere,
      results: results
    };
  }

  function applyInjection(plan, injection) {
    var kind = injection.kind || "inject";
    if (kind !== "inject") {
      return { ok: false, kind: kind, why: kind + " rewrites inside the target method; this layer can only wrap whole methods" };
    }
    var targets = Array.isArray(injection.method) ? injection.method : [injection.method];
    var points = Array.isArray(injection.at) ? injection.at : [injection.at];
    var point = points[0] || "HEAD";
    var atHead = /^HEAD$/i.test(String(point).split(":")[0]);
    var atReturn = /^(RETURN|TAIL)$/i.test(String(point).split(":")[0]);
    if (!atHead && !atReturn) {
      return { ok: false, kind: kind, why: "injection point " + point + " needs a call-site map this layer does not have" };
    }
    if (typeof injection.run !== "function") {
      return { ok: false, kind: kind, why: "the plan carries no runnable handler (re-convert the mod with this version of the converter)" };
    }
    for (var i = 0; i < targets.length; i++) {
      var resolved = resolve(plan.targets[0], targets[i]);
      if (!resolved) { continue; }
      if (wrappedBy.size >= limits.maxWrapped) {
        return { ok: false, kind: kind, target: targets[i], why: "the live-patch budget (" + limits.maxWrapped + " methods) is full" };
      }
      if (wrappedBy.has(resolved.fn)) {
        // A method is wrapped once. A second plan for the same method is refused by name rather
        // than stacked, because stacked wrappers run every handler on every call.
        return { ok: false, kind: kind, target: targets[i], why: "already wrapped by " + wrappedBy.get(resolved.fn) };
      }
      var original = resolved.callable;
      var run = injection.run;
      var label = plan.mixin + " -> " + plan.targets[0] + "." + targets[i];
      wrappedBy.set(resolved.fn, label);
      state.teaVM[resolved.fn] = makeWrapper(original, run, { cancellable: !!injection.cancellable, atHead: atHead, atReturn: atReturn, label: label });
      return {
        ok: true, kind: kind, target: targets[i], point: point, fn: resolved.fn, arity: resolved.arity, mixin: plan.mixin,
        rollback: { fn: resolved.fn, original: original, label: label }
      };
    }
    return { ok: false, kind: kind, why: "no anchor for " + plan.targets[0] + "." + targets.join("/") + " (the build's symbol map does not name it)" };
  }

  /** Wrap a compiled method with a converted handler, with a budget: a handler that is called more
   * than a few hundred times a second is on a hot path (a per-frame or per-particle method), and
   * running a stack machine there would stall the game instead of modding it. Past the budget the
   * wrapper passes through and says so once. */
  function makeWrapper(original, run, options) {
    var windowStart = 0;
    var callsInWindow = 0;
    var disabled = false;
    // Sampling: a wrapper starts as a pass-through and only starts running the handler once the
    // method's call rate is known to be low. A per-frame or per-particle method would otherwise
    // spend the frame budget in a stack machine.
    var sampleCalls = 0;
    var sampleStartedAt = Date.now();
    var sampling = true;
    var handlerFailures = 0;
    var SAMPLE_CALLS = limits.sampleCalls;
    var HOT_PER_SECOND = limits.hotPerSecond;
    return function (self) {
      if (disabled) { return original.apply(this, arguments); }
      if (sampling) {
        sampleCalls++;
        var elapsed = Date.now() - sampleStartedAt;
        if (sampleCalls >= SAMPLE_CALLS) {
          var rate = elapsed > 0 ? (sampleCalls * 1000 / elapsed) : 0;
          if (rate > HOT_PER_SECOND) {
            disabled = true;
            internal.toast("patch kept passive: " + options.label + " is called " + Math.round(rate) + "/s (too hot to wrap)");
            return original.apply(this, arguments);
          }
          sampling = false;
        } else {
          return original.apply(this, arguments);
        }
      }
      var now = Date.now();
      if (now - windowStart > 1000) { windowStart = now; callsInWindow = 0; }
      if (++callsInWindow > limits.runsPerSecond) {
        disabled = true;
        internal.toast("patch paused: " + options.label + " is called too often to wrap safely");
        return original.apply(this, arguments);
      }
      var args = Array.prototype.slice.call(arguments, 1);
      var info = { cancellable: options.cancellable, cancelled: false, cancelIgnored: false, returnValue: undefined };
      if (options.atHead) {
        try { run(self, args, info); }
        catch (error) {
          // A handler whose calls this build cannot satisfy fails on every invocation; leaving it
          // in place turns the game into an error flood. It is switched off by name instead.
          if (++handlerFailures >= 25) {
            disabled = true;
            internal.toast("patch switched off: " + options.label + " failed " + handlerFailures + " times (" +
              String(error && error.message || error).slice(0, 90) + ")");
          } else {
            internal.reportError("patch:" + options.label, error);
          }
        }
        // `cancel()` is deliberately *not* honoured: a converted handler that skips a client tick
        // stops the client updating, and no rollback can undo a tick that never ran. The handler
        // still runs (so its own work happens); it just cannot stop the game's method.
        if (info.cancelled) { info.cancelIgnored = true; }
      }
      var result = original.apply(this, arguments);
      if (options.atReturn) {
        try { run(self, args, info); }
        catch (error) {
          if (++handlerFailures >= 25) {
            disabled = true;
            internal.toast("patch switched off: " + options.label + " failed " + handlerFailures + " times");
          } else {
            internal.reportError("patch:" + options.label, error);
          }
        }
        if (info.cancelled) { info.cancelIgnored = true; }
      }
      return result;
    };
  }

  /** Undo a wave: every wrapper it installed is replaced by the function it wrapped. */
  function rollback(handles) {
    var undone = 0;
    for (var i = 0; i < (handles || []).length; i++) {
      var handle = handles[i];
      if (!handle || !handle.fn) { continue; }
      state.teaVM[handle.fn] = handle.original;
      wrappedBy.delete(handle.fn);
      undone++;
    }
    return undone;
  }

  function summary() {
    if (!state.available) { detect(); }
    if (state.available && !state.classes) { buildRegistry(); }
    return {
      available: state.available,
      reason: state.available ? null : state.reason,
      namedMethods: state.symbols ? Object.keys(state.symbols).reduce(function (total, cls) { return total + Object.keys(state.symbols[cls]).length; }, 0) : 0,
      patchedBuild: !!(global.__gaiusPatchInfo),
      classes: state.classes ? state.classes.size : 0,
      symbols: state.symbols ? Object.keys(state.symbols).length : (state.symbolsLoaded ? 0 : null),
      resolutions: state.resolutions,
      misses: state.misses,
      appliedInjections: applied.reduce(function (total, record) { return total + record.applied; }, 0),
      rolledBack: rolledBack,
      appliedPlans: applied.length,
      refusedPlans: refused.length,
      refusedReasons: refused.slice(0, 12).map(function (record) { return (record.results.find(function (r) { return !r.ok; }) || {}).why || "unknown"; })
    };
  }

  // The bootstrap carries where the symbol map lives; the loader fills it in.
  state.symbolsUrl = (internal.boot && internal.boot.symbolsUrl) || null;

  var readyBus = new WebMC.Bus("internals");
  var announced = false;
  function announce() {
    if (announced) { return true; }
    if (!detect()) { return false; }
    announced = true;
    try {
      buildRegistry();
      loadSymbols();
      internal.toast("client internals exposed: " + state.classes.size + " classes, " +
        (Object.keys(state.symbols || {}).length) + " classes with method anchors");
    } catch (error) { internal.reportError("internals:announce", error); }
    readyBus.emit("ready", summary());
    return true;
  }
  if (!announce()) {
    // The compiled module runs after the mods have loaded, so keep looking for it and say so once.
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (announce() || tries > 480) { clearInterval(timer); }
    }, 250);
  }

  internal.internals = {
    state: state,
    detect: detect,
    bus: readyBus,
    limits: limits,
    noteRollback: function (count) { rolledBack += count; },
    available: function () { if (!state.available) { detect(); } return state.available; },
    classes: function () { buildRegistry(); return state.classes ? Array.from(state.classes.keys()) : []; },
    detect: detect,
    findClass: findClass,
    resolve: resolve,
    unresolved: unresolved,
    applyPatch: applyPatch,
    summary: summary,
    teaVM: function () { return state.teaVM; },
    loadSymbols: loadSymbols,
    forMod: function (mod) {
      return {
        available: state.available,
        classes: function () { buildRegistry(); return state.classes ? Array.from(state.classes.keys()) : []; },
    detect: detect,
        findClass: findClass,
        resolve: function (className, methodName) { return resolve(className, methodName); },
        invoke: function (className, methodName, self, args) {
          var found = resolve(className, methodName);
          if (!found) { throw new Error("webmc: no anchor for " + className + "." + methodName); }
          return found.callable.apply(null, [self].concat(args || []));
        },
        getField: function (className, name) { throw new Error("webmc: field " + className + "." + name + " is not in this build's map"); },
        putField: function () { throw new Error("webmc: fields are not writable through this build's map"); },
        getStatic: function () { return undefined; },
        putStatic: function () { },
        invokeStatic: function (className, methodName, args) {
          var found = resolve(className, methodName);
          if (!found) { throw new Error("webmc: no anchor for " + className + "." + methodName); }
          return found.callable.apply(null, args || []);
        }
      };
    }
  };
  /** Public surface: for hand-written mods as much as for converted ones.
   *   webmc.internals.available()                 is this build patched?
   *   webmc.internals.classes()                   every class name the build exposes
   *   webmc.internals.named(className)            the methods the symbol map names for a class
   *   webmc.internals.resolve(className, method)  the compiled function behind a method
   *   webmc.internals.wrap(className, method, fn) wrap it; returns an unwrap function
   */
  WebMC.internals = {
    available: function () { if (!state.available) { detect(); } return state.available; },
    summary: summary,
    classes: function () { return internal.internals.classes(); },
    named: function (className) {
      var symbols = loadSymbols();
      var simple = simpleName(className);
      return Object.keys((symbols && symbols[simple]) || {});
    },
    resolve: function (className, methodName) { return resolve(className, methodName); },
    wrap: function (className, methodName, wrapper) {
      var found = resolve(className, methodName);
      if (!found) { return null; }
      var original = found.callable;
      var label = simpleName(className) + "." + methodName;
      var wrapped = makeWrapper(original, function (self, args, info) { return wrapper.call(null, self, args, info); },
        { cancellable: true, atHead: true, atReturn: false, label: label });
      state.teaVM[found.fn] = wrapped;
      wrappedBy.set(found.fn, "mod:" + label);
      return function unwrap() { state.teaVM[found.fn] = original; wrappedBy.delete(found.fn); };
    },
    loadSymbols: loadSymbols
  };
})(typeof globalThis !== "undefined" ? globalThis : self);
