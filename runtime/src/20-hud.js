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
