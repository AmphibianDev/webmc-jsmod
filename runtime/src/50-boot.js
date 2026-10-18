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
