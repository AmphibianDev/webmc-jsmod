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
