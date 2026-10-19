# Conversion report — Flashback 0.39.10

Source: `Flashback-0.39.10-for-MC1.21.11.jar`

**Verdict:** runs (uses the internals for 1527 deferred call site(s))

| | |
| --- | --- |
| classes | 2744 |
| methods with bytecode | 24560 |
| methods transpiled | 1931 |
| methods left out | 465 |
| mixin classes | 134 |
| mixin injections | 165 |

## Entrypoints
- `main` com/moulberry/flashback/Flashback.onInitialize — translated
- `client` com/moulberry/flashback/Flashback.onInitializeClient — translated

## Fabric API events
- `net/fabricmc/fabric/api/client/command/v2/ClientCommandRegistrationCallback.EVENT` → `webmc.events.on("commands")` — handler translated
- `net/fabricmc/fabric/api/client/networking/v1/ClientPlayConnectionEvents.JOIN` → `webmc.events.on("world:join")` — handler translated
- `net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents.END_CLIENT_TICK` → `webmc.events.on("tick")` — handler translated
- `net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents.START_CLIENT_TICK` → `webmc.events.on("tick")` — handler translated
- `net/fabricmc/fabric/api/event/lifecycle/v1/ServerTickEvents.END_SERVER_TICK` → `webmc.events.on("server:tick")` — handler translated

## Keybinds
- `flashback` → key `h` (com/moulberry/flashback/Flashback.<clinit>)
- `flashback` → key `h` (com/moulberry/flashback/Flashback.<clinit>)
- `replays` → key `h` (com/moulberry/flashback/Flashback.<clinit>)
- `flashback` → key `h` (com/moulberry/flashback/Flashback.<clinit>)

## Commands
None found.

## Modules (Meteor-style)
None found.

## Mixins

- 134 mixin classes, 165 injection points, 1 accessors, 121 shadows
- by kind: inject=143, redirect=1, modifyVariable=1, overwrite=20

Most-mixed-into classes:
- `com.moulberry.lattice.multiversion.LatticeMultiversion` × 11
- `com.moulberry.lattice.LatticeConfigScreen` × 5
- `com.moulberry.lattice.widget.DropdownWidget` × 5
- `com.moulberry.lattice.widget.WidgetWithText` × 4
- `net.minecraft.client.MouseHandler` × 3
- `net.minecraft.client.multiplayer.ClientLevel` × 3
- `com.moulberry.lattice.widget.DropdownWidget$Entry` × 3
- `net.minecraft.client.renderer.LevelRenderer` × 2
- `de.johni0702.minecraft.bobby.FakeChunkManager` × 2
- `net.minecraft.world.entity.player.Player` × 2
- `net.minecraft.world.entity.Entity` × 2
- `net.minecraft.client.gui.components.BossHealthOverlay` × 2
- `net.minecraft.world.entity.LivingEntity` × 2
- `net.minecraft.client.renderer.entity.player.AvatarRenderer` × 2
- `com.moulberry.lattice.widget.CategoryStringWidget` × 2

Most-injected-into methods:
- `<unspecified>` × 20
- `render` × 7
- `tick` × 5
- `runTick` × 3
- `<init>` × 3
- `handleCustomPayload` × 3
- `renderLevel` × 2
- `disconnect` × 2
- `init` × 2
- `save` × 2
- `canSend` × 2
- `send` × 2
- `playSeededSound` × 2
- `extractRenderState` × 2
- `shouldRender` × 2

## Calls that still need the client internals
- 97× is not in the jar
- 60× org.bytedeco.javacv.FrameGrabber$Exception.<init> — the mod's own method org.bytedeco.javacv.FrameGrabber$Exception.<init> was pruned (nothing reachable from an entry point calls it)
- 14× org.bytedeco.javacpp.BytePointer.getString — the mod's own method org.bytedeco.javacpp.BytePointer.getString was pruned (nothing reachable from an entry point calls it)
- 12× org.bytedeco.javacpp.Loader.load — the mod's own method org.bytedeco.javacpp.Loader.load was pruned (nothing reachable from an entry point calls it)
- 12× org.bytedeco.javacv.FrameGrabber.<init> — the mod's own method org.bytedeco.javacv.FrameGrabber.<init> was pruned (nothing reachable from an entry point calls it)
- 10× imgui.moulberry90.ImGui.getStyle — the mod's own method imgui.moulberry90.ImGui.getStyle was pruned (nothing reachable from an entry point calls it)
- 9× imgui.moulberry90.ImGui.getMainViewport — the mod's own method imgui.moulberry90.ImGui.getMainViewport was pruned (nothing reachable from an entry point calls it)
- 9× org.bytedeco.javacv.OpenCVFrameConverter$ToIplImage.<init> — the mod's own method org.bytedeco.javacv.OpenCVFrameConverter$ToIplImage.<init> was pruned (nothing reachable from an entry point calls it)
- 8× com.moulberry.flashback.action.Action.name — the mod's own method name()Lnet/minecraft/class_2960
- 8× com.moulberry.flashback.playback.ReplayGamePacketHandler.flushPendingEntities — the mod's own method com.moulberry.flashback.playback.ReplayGamePacketHandler.flushPendingEntities was pruned (nothing reachable from an entry point calls it)
- 8× org.bytedeco.javacv.FrameConverter.convert — the mod's own method convert(Ljava/lang/Object;)Lorg/bytedeco/javacv/Frame
- 8× org.bytedeco.javacpp.Pointer.<init> — the mod's own method org.bytedeco.javacpp.Pointer.<init> was pruned (nothing reachable from an entry point calls it)
- 7× org.bytedeco.javacv.Frame.clone — the mod's own method org.bytedeco.javacv.Frame.clone was pruned (nothing reachable from an entry point calls it)
- 6× imgui.moulberry90.ImGui.textUnformatted — the mod's own method imgui.moulberry90.ImGui.textUnformatted was pruned (nothing reachable from an entry point calls it)
- 6× com.moulberry.flashback.Interpolation.linear — the mod's own method com.moulberry.flashback.Interpolation.linear was pruned (nothing reachable from an entry point calls it)
- 6× org.bytedeco.javacv.OpenCVFrameConverter$ToMat.<init> — the mod's own method org.bytedeco.javacv.OpenCVFrameConverter$ToMat.<init> was pruned (nothing reachable from an entry point calls it)
- 6× org.bytedeco.javacpp.BytePointer.<init> — the mod's own method org.bytedeco.javacpp.BytePointer.<init> was pruned (nothing reachable from an entry point calls it)
- 5× com.moulberry.flashback.keyframe.Keyframe.copy — the mod's own method copy()Lcom/moulberry/flashback/keyframe/Keyframe
- 5× imgui.moulberry90.ImGui.openPopup — the mod's own method imgui.moulberry90.ImGui.openPopup was pruned (nothing reachable from an entry point calls it)
- 5× com.moulberry.flashback.playback.ReplayServer.method_30611 — the mod's own method method_30611()Lnet/minecraft/class_5455$class_6890
- 5× com.moulberry.flashback.playback.ReplayServer.method_3760 — the mod's own method method_3760()Lnet/minecraft/class_3324
- 5× com.moulberry.flashback.screen.ReplaySummary.getReplayId — the mod's own method com.moulberry.flashback.screen.ReplaySummary.getReplayId was pruned (nothing reachable from an entry point calls it)
- 5× org.bytedeco.javacv.FrameGrabber$Exception.printStackTrace — the mod's own method printStackTrace()V is not in the jar
- 5× org.bytedeco.javacv.CanvasFrame.<init> — the mod's own method org.bytedeco.javacv.CanvasFrame.<init> was pruned (nothing reachable from an entry point calls it)
- 5× org.bytedeco.javacv.ImageTransformer$Parameters.getConstraintError — the mod's own method getConstraintError()D is not in the jar
- 4× com.moulberry.flashback.configuration.FlashbackConfigV1.delayedSaveToDefaultFolder — the mod's own method com.moulberry.flashback.configuration.FlashbackConfigV1.delayedSaveToDefaultFolder was pruned (nothing reachable from an entry point calls it)
- 4× imgui.moulberry90.ImGui.closeCurrentPopup — the mod's own method imgui.moulberry90.ImGui.closeCurrentPopup was pruned (nothing reachable from an entry point calls it)
- 4× imgui.moulberry90.ImGuiViewport.getCenterX — the mod's own method imgui.moulberry90.ImGuiViewport.getCenterX was pruned (nothing reachable from an entry point calls it)
- 4× imgui.moulberry90.ImGuiViewport.getCenterY — the mod's own method imgui.moulberry90.ImGuiViewport.getCenterY was pruned (nothing reachable from an entry point calls it)
- 4× imgui.moulberry90.ImGui.setNextWindowPos — the mod's own method imgui.moulberry90.ImGui.setNextWindowPos was pruned (nothing reachable from an entry point calls it)

Permitted capabilities in the generated manifest: hud, input, commands, storage, settings, modules, player.read, world.read, camera.read, chat.write, internals
