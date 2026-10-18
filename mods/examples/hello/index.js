/* #region webmc.mod
{
  "id": "example.hello",
  "name": "Hello",
  "version": "1.0.0",
  "authors": ["WebMC"],
  "description": "The smallest useful mod: a HUD line, a keybind and a command.",
  "capabilities": ["hud", "input", "commands", "player.read"]
}
#endregion */

(function () {
  "use strict";

  var mod = webmc.defineMod({
    id: "example.hello",
    name: "Hello",
    version: "1.0.0",
    authors: ["WebMC"],
    description: "The smallest useful mod: a HUD line, a keybind and a command.",
    capabilities: ["hud", "input", "commands", "player.read"]
  });

  mod.on("init", function (api) {
    var frames = 0;
    var ticks = 0;
    var visible = true;

    var label = api.hud.text({ id: "hello", x: 4, y: 4, text: "Hello from a JS mod", color: "#ffffff" });

    api.events.onTick(function () {
      ticks++;
      label.update({ text: "Hello from a JS mod — " + ticks + " ticks, " + frames + " frames" });
    });
    api.events.onFrame(function () { frames++; });

    api.input.bind({ id: "toggle", label: "Toggle the hello line", key: "h", handler: function () {
      visible = !visible;
      label.visible = visible;
      api.hud.message("Hello line " + (visible ? "on" : "off"));
    } });

    api.command({
      name: "hey",
      usage: "/hey [text]",
      description: "Say something through the mod",
      handler: function (context) {
        var who = context.player && context.player.present ? "player" : "there";
        context.reply("hey " + who + (context.raw ? " — " + context.raw : ""));
      }
    });

    api.log("ready; F7 opens the command prompt, H toggles the line");
  });
})();
