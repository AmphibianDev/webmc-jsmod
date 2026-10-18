/* #region webmc.mod
{
  "id": "example.status",
  "name": "Status",
  "version": "1.0.0",
  "authors": ["WebMC"],
  "description": "A live HUD built from the client's own state snapshot.",
  "capabilities": ["hud", "player.read", "world.read", "camera.read", "settings", "commands"]
}
#endregion */

(function () {
  "use strict";

  var mod = webmc.defineMod({
    id: "example.status",
    name: "Status",
    version: "1.0.0",
    authors: ["WebMC"],
    description: "A live HUD built from the client's own state snapshot.",
    capabilities: ["hud", "player.read", "world.read", "camera.read", "settings", "commands"]
  });

  mod.on("init", function (api) {
    var show = api.settings.define({ key: "hud", type: "boolean", default: true, label: "Show the status line" });
    var x = api.settings.define({ key: "x", type: "number", default: 4, label: "HUD x" });
    var y = api.settings.define({ key: "y", type: "number", default: 24, label: "HUD y" });

    var line = api.hud.text({ id: "status", x: x.get(), y: y.get(), text: "…", color: "#a7f3d0", size: 8 });
    var seenFrames = 0;
    var fps = 0;

    api.events.onFrame(function (e) { fps = e.fps; seenFrames = e.count; });

    api.events.onTick(function () {
      var player = api.player.snapshot();
      var world = api.world.snapshot();
      var position = player.position
        ? "xyz " + player.position.x.toFixed(1) + " " + player.position.y.toFixed(1) + " " + player.position.z.toFixed(1)
        : "no player yet";
      line.update({
        x: x.get(), y: y.get(), visible: show.get(),
        text: "fps " + fps.toFixed(0)
          + "  " + position
          + (world.inWorld ? "  chunks " + (world.loadedChunks == null ? "?" : world.loadedChunks) : "  (no world)")
          + (api.world.screen().name ? "  screen " + api.world.screen().name : "")
      });
    });

    api.events.onWorldJoin(function () { api.hud.message("Status: world loaded", { color: "#a7f3d0" }); });

    api.command({
      name: "status",
      description: "Toggle the status line",
      handler: function (context) {
        show.set(!show.get());
        context.reply("status HUD " + (show.get() ? "on" : "off"));
      }
    });
  });
})();
