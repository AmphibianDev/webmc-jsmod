/* #region webmc.mod
{
  "id": "example.modules",
  "name": "Modules demo",
  "version": "1.0.0",
  "authors": ["WebMC"],
  "description": "The Meteor shape, in JS: modules with categories, settings and toggle keys.",
  "capabilities": ["hud", "input", "commands", "modules", "settings", "player.read"]
}
#endregion */

(function () {
  "use strict";

  var mod = webmc.defineMod({
    id: "example.modules",
    name: "Modules demo",
    version: "1.0.0",
    authors: ["WebMC"],
    description: "The Meteor shape, in JS: modules with categories, settings and toggle keys.",
    capabilities: ["hud", "input", "commands", "modules", "settings", "player.read"]
  });

  mod.on("init", function (api) {
    var hud = api.hud.text({ id: "modules", x: 4, y: 44, text: "", color: "#fde68a", size: 8 });

    function listEnabled() {
      return api.modules.list().filter(function (m) { return m.enabled; }).map(function (m) { return m.name; });
    }

    api.events.onTick(function () {
      var enabled = listEnabled();
      hud.update({ text: enabled.length ? "modules: " + enabled.join(", ") : "modules: none (F8 to open the list)" });
    });

    var sprint = api.modules.add({
      name: "Sprint",
      category: "Movement",
      description: "Hold the run key for you (demo: it only says so)",
      key: "v",
      onEnable: function () { api.hud.message("Sprint on", { color: "#a7f3d0" }); },
      onDisable: function () { api.hud.message("Sprint off", { color: "#fca5a5" }); },
      onTick: function () { /* a real one would call api.input.press("left.shift") */ }
    });

    var coordinates = api.modules.add({
      name: "Coordinates",
      category: "Render",
      description: "Show your position",
      key: "c",
      enabled: true,
      onEnable: function () { hud.visible = true; },
      onDisable: function () { hud.visible = false; },
      onTick: function () {
        var position = api.player.snapshot().position;
        if (position) { hud.update({ text: "xyz " + [position.x, position.y, position.z].map(function (v) { return v.toFixed(1); }).join(" ") }); }
      }
    });

    api.command({
      name: "module",
      usage: "/module <name> [on|off]",
      description: "Toggle a module by name",
      handler: function (context) {
        var wanted = String(context.args[0] || "").toLowerCase();
        var module = api.modules.list().filter(function (m) { return m.name.toLowerCase() === wanted; })[0];
        if (!module) { context.error("no module named " + (wanted || "?")); return; }
        var state = context.args[1];
        if (state === "on") { module.setEnabled(true); } else if (state === "off") { module.setEnabled(false); } else { module.toggle(); }
        context.reply(module.name + " " + (module.enabled ? "on" : "off"));
      }
    });

    api.log("V toggles Sprint, C toggles Coordinates, F8 shows the module list");
  });
})();
