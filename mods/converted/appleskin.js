/* Converted from a Fabric mod by webmc-jsmod's converter.
 * appleskin 3.0.8+mc1.21.11 — AppleSkin
 * Every 149 method that could be transpiled was; 12 could not.
 * What could not is named in report.json next to this file. */
(function () {
  "use strict";
  var SOURCE = "appleskin 3.0.8+mc1.21.11";
  var CLASSES = {};
  var SUPER = {"squeek/appleskin/AppleSkin":"java/lang/Object","squeek/appleskin/AppleSkinCommon":"java/lang/Object","squeek/appleskin/ModConfig":"java/lang/Object","squeek/appleskin/client/DebugInfoHudEntry":"java/lang/Object","squeek/appleskin/client/HUDOverlayHandler$HeldFoodCache":"java/lang/Object","squeek/appleskin/client/HUDOverlayHandler$OffsetsCache":"java/lang/Object","squeek/appleskin/client/HUDOverlayHandler":"java/lang/Object","squeek/appleskin/client/REITooltipPlugin":"java/lang/Object","squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay":"java/lang/Object","squeek/appleskin/client/TooltipOverlayHandler":"java/lang/Object","squeek/appleskin/gui/AutoConfigIntegration":"java/lang/Object","squeek/appleskin/gui/ConfiguredConfigProvider$LeafEntry":"java/lang/Object","squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue":"java/lang/Object","squeek/appleskin/gui/ModMenuIntegration":"java/lang/Object","squeek/appleskin/helpers/ConsumableFood":"java/lang/Record","squeek/appleskin/network/ClientSyncHandler":"java/lang/Object","squeek/appleskin/network/ExhaustionSyncPayload":"java/lang/Record","squeek/appleskin/network/NaturalRegenerationSyncPayload":"java/lang/Record","squeek/appleskin/network/SaturationSyncPayload":"java/lang/Record","squeek/appleskin/network/SyncHandler":"java/lang/Object","squeek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder":"java/lang/Object","squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame":"java/lang/Object","squeek/appleskin/shadowed/blue/endless/jankson/Jankson":"java/lang/Object","squeek/appleskin/shadowed/blue/endless/jankson/JsonElement":"java/lang/Object","squeek/appleskin/shadowed/blue/endless/jankson/JsonObject":"squeek/appleskin/shadowed/blue/endless/jankson/JsonElement","squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive":"squeek/appleskin/shadowed/blue/endless/jankson/JsonElement","squeek/appleskin/shadowed/blue/endless/jankson/api/SyntaxError":"java/lang/Exception","squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl":"java/lang/Object","squeek/appleskin/shadowed/blue/endless/jankson/impl/ObjectParserContext":"java/lang/Object"};
  var FIELD_DEFAULTS = {"squeek/appleskin/AppleSkin":[{"name":"LOGGER","descriptor":"Lorg/apache/logging/log4j/Logger;"}],"squeek/appleskin/AppleSkinCommon":[],"squeek/appleskin/ModConfig":[{"name":"INSTANCE","descriptor":"Lsqueek/appleskin/ModConfig;"},{"name":"JANKSON","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson;"},{"name":"PATH","descriptor":"Ljava/nio/file/Path;"},{"name":"showFoodValuesInTooltip","descriptor":"Z"},{"name":"showFoodValuesInTooltipAlways","descriptor":"Z"},{"name":"showSaturationHudOverlay","descriptor":"Z"},{"name":"showFoodValuesHudOverlay","descriptor":"Z"},{"name":"showFoodValuesHudOverlayWhenOffhand","descriptor":"Z"},{"name":"showFoodExhaustionHudUnderlay","descriptor":"Z"},{"name":"showFoodHealthHudOverlay","descriptor":"Z"},{"name":"showVanillaAnimationsOverlay","descriptor":"Z"},{"name":"maxHudOverlayFlashAlpha","descriptor":"F"}],"squeek/appleskin/client/DebugInfoHudEntry":[{"name":"ENTRY_ID","descriptor":"Lnet/minecraft/class_2960;"},{"name":"SECTION_ID","descriptor":"Lnet/minecraft/class_2960;"},{"name":"saturationDF","descriptor":"Ljava/text/DecimalFormat;"},{"name":"exhaustionValDF","descriptor":"Ljava/text/DecimalFormat;"},{"name":"exhaustionMaxDF","descriptor":"Ljava/text/DecimalFormat;"}],"squeek/appleskin/client/HUDOverlayHandler$HeldFoodCache":[{"name":"result","descriptor":"Lsqueek/appleskin/helpers/FoodHelper$QueriedFoodResult;"},{"name":"lastGuiTick","descriptor":"I"}],"squeek/appleskin/client/HUDOverlayHandler$OffsetsCache":[{"name":"foodBarOffsets","descriptor":"Ljava/util/Vector;"},{"name":"healthBarOffsets","descriptor":"Ljava/util/Vector;"},{"name":"lastGuiTick","descriptor":"I"},{"name":"random","descriptor":"Ljava/util/Random;"}],"squeek/appleskin/client/HUDOverlayHandler":[{"name":"INSTANCE","descriptor":"Lsqueek/appleskin/client/HUDOverlayHandler;"},{"name":"unclampedFlashAlpha","descriptor":"F"},{"name":"flashAlpha","descriptor":"F"},{"name":"alphaDir","descriptor":"B"},{"name":"needDisableBlend","descriptor":"Z"},{"name":"barOffsets","descriptor":"Lsqueek/appleskin/client/HUDOverlayHandler$OffsetsCache;"},{"name":"heldFood","descriptor":"Lsqueek/appleskin/client/HUDOverlayHandler$HeldFoodCache;"},{"name":"$assertionsDisabled","descriptor":"Z"}],"squeek/appleskin/client/REITooltipPlugin":[],"squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay":[{"name":"defaultFood","descriptor":"Lnet/minecraft/class_4174;"},{"name":"modifiedFood","descriptor":"Lnet/minecraft/class_4174;"},{"name":"consumableComponent","descriptor":"Lnet/minecraft/class_10124;"},{"name":"biggestHunger","descriptor":"I"},{"name":"biggestSaturationIncrement","descriptor":"F"},{"name":"hungerBars","descriptor":"I"},{"name":"hungerBarsText","descriptor":"Ljava/lang/String;"},{"name":"saturationBars","descriptor":"I"},{"name":"saturationBarsText","descriptor":"Ljava/lang/String;"},{"name":"itemStack","descriptor":"Lnet/minecraft/class_1799;"}],"squeek/appleskin/client/TooltipOverlayHandler":[{"name":"INSTANCE","descriptor":"Lsqueek/appleskin/client/TooltipOverlayHandler;"}],"squeek/appleskin/gui/AutoConfigIntegration":[{"name":"DEFAULTS","descriptor":"Lsqueek/appleskin/ModConfig;"},{"name":"showFoodValuesInTooltip","descriptor":"Z"},{"name":"showFoodValuesInTooltipAlways","descriptor":"Z"},{"name":"showSaturationHudOverlay","descriptor":"Z"},{"name":"showFoodValuesHudOverlay","descriptor":"Z"},{"name":"showFoodValuesHudOverlayWhenOffhand","descriptor":"Z"},{"name":"showFoodExhaustionHudUnderlay","descriptor":"Z"},{"name":"showFoodHealthHudOverlay","descriptor":"Z"},{"name":"showVanillaAnimationsOverlay","descriptor":"Z"},{"name":"maxHudOverlayFlashAlpha","descriptor":"F"}],"squeek/appleskin/gui/ConfiguredConfigProvider$LeafEntry":[{"name":"name","descriptor":"Ljava/lang/String;"},{"name":"value","descriptor":"Lcom/mrcrayfish/configured/api/IConfigValue;"}],"squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue":[{"name":"name","descriptor":"Ljava/lang/String;"},{"name":"value","descriptor":"Ljava/lang/Object;"},{"name":"initValue","descriptor":"Ljava/lang/Object;"},{"name":"defaultValue","descriptor":"Ljava/lang/Object;"}],"squeek/appleskin/gui/ModMenuIntegration":[],"squeek/appleskin/helpers/ConsumableFood":[{"name":"food","descriptor":"Lnet/minecraft/class_4174;"},{"name":"consumable","descriptor":"Lnet/minecraft/class_10124;"}],"squeek/appleskin/network/ClientSyncHandler":[{"name":"naturalRegeneration","descriptor":"Z"}],"squeek/appleskin/network/ExhaustionSyncPayload":[{"name":"exhaustion","descriptor":"F"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_9139;"},{"name":"ID","descriptor":"Lnet/minecraft/class_8710$class_9154;"}],"squeek/appleskin/network/NaturalRegenerationSyncPayload":[{"name":"naturalRegeneration","descriptor":"Z"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_9139;"},{"name":"ID","descriptor":"Lnet/minecraft/class_8710$class_9154;"}],"squeek/appleskin/network/SaturationSyncPayload":[{"name":"saturation","descriptor":"F"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_9139;"},{"name":"ID","descriptor":"Lnet/minecraft/class_8710$class_9154;"}],"squeek/appleskin/network/SyncHandler":[{"name":"lastSaturationLevels","descriptor":"Ljava/util/Map;"},{"name":"lastExhaustionLevels","descriptor":"Ljava/util/Map;"},{"name":"naturalRegeneration","descriptor":"Z"}],"squeek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder":[{"name":"marshaller","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl;"},{"name":"allowBareRootObject","descriptor":"Z"}],"squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame":[{"name":"context","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/ParserContext;"},{"name":"consumer","descriptor":"Ljava/util/function/Consumer;"},{"name":"startLine","descriptor":"I"},{"name":"startCol","descriptor":"I"}],"squeek/appleskin/shadowed/blue/endless/jankson/Jankson":[{"name":"contextStack","descriptor":"Ljava/util/Deque;"},{"name":"root","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonObject;"},{"name":"line","descriptor":"I"},{"name":"column","descriptor":"I"},{"name":"withheldCodePoint","descriptor":"I"},{"name":"marshaller","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;"},{"name":"allowBareRootObject","descriptor":"Z"},{"name":"retries","descriptor":"I"},{"name":"delayedError","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/api/SyntaxError;"},{"name":"rootElement","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/AnnotatedElement;"}],"squeek/appleskin/shadowed/blue/endless/jankson/JsonElement":[],"squeek/appleskin/shadowed/blue/endless/jankson/JsonObject":[{"name":"CAN_BE_UNQUOTED","descriptor":"Ljava/util/function/Predicate;"},{"name":"marshaller","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;"},{"name":"entries","descriptor":"Ljava/util/List;"}],"squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive":[{"name":"TRUE","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive;"},{"name":"FALSE","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive;"},{"name":"value","descriptor":"Ljava/lang/Object;"}],"squeek/appleskin/shadowed/blue/endless/jankson/api/SyntaxError":[{"name":"startLine","descriptor":"I"},{"name":"startColumn","descriptor":"I"},{"name":"line","descriptor":"I"},{"name":"column","descriptor":"I"}],"squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl":[{"name":"INSTANCE","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl;"},{"name":"primitiveMarshallers","descriptor":"Ljava/util/Map;"},{"name":"typeAdapters","descriptor":"Ljava/util/Map;"},{"name":"serializers","descriptor":"Ljava/util/Map;"},{"name":"deserializers","descriptor":"Ljava/util/Map;"},{"name":"typeFactories","descriptor":"Ljava/util/Map;"}],"squeek/appleskin/shadowed/blue/endless/jankson/impl/ObjectParserContext":[{"name":"result","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonObject;"},{"name":"assumeOpen","descriptor":"Z"},{"name":"comment","descriptor":"Ljava/lang/String;"},{"name":"openBraceFound","descriptor":"Z"},{"name":"noOpenBrace","descriptor":"Z"},{"name":"key","descriptor":"Ljava/lang/String;"},{"name":"colonFound","descriptor":"Z"},{"name":"closeBraceFound","descriptor":"Z"},{"name":"eof","descriptor":"Z"}]};
  function defineClass(name, methods) { CLASSES[name] = methods; }
  defineClass("squeek/appleskin/AppleSkin", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onInitializeClient()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("squeek/appleskin/network/ClientSyncHandler","init","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      __ctx.invokeStatic("squeek/appleskin/ModConfig","init","()V", []); pc = 2; continue;
    case 2:
      __pc = 2;
      __ctx.invokeStatic("squeek/appleskin/client/HUDOverlayHandler","init","()V", []); pc = 3; continue;
    case 3:
      __pc = 3;
      __ctx.invokeStatic("squeek/appleskin/client/TooltipOverlayHandler","init","()V", []); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.invokeStatic("net/fabricmc/loader/api/FabricLoader","getInstance","()Lnet/fabricmc/loader/api/FabricLoader;", [])); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push("appleskin"); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(null); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/loader/api/FabricLoader","getEntrypointContainers","(Ljava/lang/String;Ljava/lang/Class;)Ljava/util/List;", rv, av)); pc = 8; continue;
    case 8:
      __pc = 8;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/AppleSkin","lambda$onInitializeClient$0","(Lnet/fabricmc/loader/api/entrypoint/EntrypointContainer;)V", null, dv)); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.List.forEach") + ' needs the client internals');
    case 10:
      __pc = 10;
      s.push(__ctx.getStatic("squeek/appleskin/client/DebugInfoHudEntry","ENTRY_ID","Lnet/minecraft/class_2960;")); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.newInstance("squeek/appleskin/client/DebugInfoHudEntry")); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(s[s.length - 1]); pc = 13; continue;
    case 13:
      __pc = 13;
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/client/DebugInfoHudEntry","<init>","()V", rv, []); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/client/gui/components/debug/DebugScreenEntries","register","(Lnet/minecraft/class_2960;Lnet/minecraft/class_11632;)Lnet/minecraft/class_2960;", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      s.pop(); pc = 16; continue;
    case 16:
      __pc = 16;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<clinit>()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("org/apache/logging/log4j/LogManager","getLogger","()Lorg/apache/logging/log4j/Logger;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/AppleSkin","LOGGER","Lorg/apache/logging/log4j/Logger;",r); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/AppleSkin"].__fields = [{"name":"LOGGER","descriptor":"Lorg/apache/logging/log4j/Logger;"}];
  defineClass("squeek/appleskin/AppleSkinCommon", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onInitialize()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("squeek/appleskin/network/SyncHandler","init","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/AppleSkinCommon"].__fields = [];
  defineClass("squeek/appleskin/ModConfig", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(1); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showFoodValuesInTooltip","Z",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(1); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showFoodValuesInTooltipAlways","Z",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(1); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showSaturationHudOverlay","Z",target, r); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(1); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showFoodValuesHudOverlay","Z",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(1); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showFoodValuesHudOverlayWhenOffhand","Z",target, r); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(1); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showFoodExhaustionHudUnderlay","Z",target, r); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l0); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(1); pc = 22; continue;
    case 22:
      __pc = 22;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showFoodHealthHudOverlay","Z",target, r); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(1); pc = 25; continue;
    case 25:
      __pc = 25;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showVanillaAnimationsOverlay","Z",target, r); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l0); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(0.6499999761581421); pc = 28; continue;
    case 28:
      __pc = 28;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","maxHudOverlayFlashAlpha","F",target, r); pc = 29; continue;
    case 29:
      __pc = 29;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "init()V": function (__ctx, __self, __args) {
    var l0;
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":12,"end":14,"handler":15}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("net/fabricmc/loader/api/FabricLoader","getInstance","()Lnet/fabricmc/loader/api/FabricLoader;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/loader/api/FabricLoader","getConfigDir","()Ljava/nio/file/Path;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("appleskin.json5"); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.nio.file.Path.resolve") + ' needs the client internals');
    case 4:
      __pc = 4;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/ModConfig","PATH","Ljava/nio/file/Path;",r); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.invokeStatic("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","builder","()Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder;", [])); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder","build","()Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson;", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/ModConfig","JANKSON","Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson;",r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.newInstance("squeek/appleskin/ModConfig")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(s[s.length - 1]); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/ModConfig","<init>","()V", rv, []); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;",r); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 13; continue;
    case 13:
      __pc = 13;
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/ModConfig","load","()V", rv, []); pc = 14; continue;
    case 14:
      __pc = 14;
      pc = undefined; continue;
    case 15:
      __pc = 15;
      l0 = s.pop(); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.newInstance("java/lang/RuntimeException")); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(s[s.length - 1]); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l0); pc = 19; continue;
    case 19:
      __pc = 19;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.RuntimeException.<init>") + ' needs the client internals');
    case 20:
      __pc = 20;
      throw __ctx.toError(s.pop());
    case 21:
      __pc = 21;
      s.push(__ctx.invokeStatic("net/fabricmc/loader/api/FabricLoader","getInstance","()Lnet/fabricmc/loader/api/FabricLoader;", [])); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push("cloth-config"); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/loader/api/FabricLoader","isModLoaded","(Ljava/lang/String;)Z", rv, av)); pc = 24; continue;
    case 24:
      __pc = 24;
      r = s.pop(); if (r == 0) { pc = 26; } else { pc = 25; } continue;
    case 25:
      __pc = 25;
      __ctx.invokeStatic("squeek/appleskin/gui/AutoConfigIntegration","init","()V", []); pc = 26; continue;
    case 26:
      __pc = 26;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    } catch (__e) {
      var __h = __pickHandler(__pc);
      if (__h < 0) { throw __e; }
      pc = __h; s = [__e]; continue;
    }
    }
    },
    "save()V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","PATH","Ljava/nio/file/Path;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.pop();
      throw __ctx.toError(("java.nio.file.Path.getParent") + ' needs the client internals');
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.nio.file.Files.createDirectories") + ' needs the client internals');
    case 5:
      __pc = 5;
      s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","PATH","Ljava/nio/file/Path;")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(0); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.nio.file.Files.newBufferedWriter") + ' needs the client internals');
    case 10:
      __pc = 10;
      l1 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l1); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","JANKSON","Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson;")); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","toJson","(Ljava/lang/Object;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;", rv, av)); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(1); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(1); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonElement","toJson","(ZZ)Ljava/lang/String;", rv, av)); pc = 18; continue;
    case 18:
      __pc = 18;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.io.BufferedWriter.write") + ' needs the client internals');
    case 19:
      __pc = 19;
      s.push(l1); pc = 20; continue;
    case 20:
      __pc = 20;
      s.pop();
      throw __ctx.toError(("java.io.BufferedWriter.close") + ' needs the client internals');
    case 21:
      __pc = 21;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "load()V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","PATH","Ljava/nio/file/Path;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(0); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.nio.file.Files.exists") + ' needs the client internals');
    case 4:
      __pc = 4;
      r = s.pop(); if (r == 0) { pc = 17; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","JANKSON","Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson;")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","PATH","Ljava/nio/file/Path;")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.pop();
      throw __ctx.toError(("java.nio.file.Path.toFile") + ' needs the client internals');
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","load","(Ljava/io/File;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonObject;", rv, av)); pc = 9; continue;
    case 9:
      __pc = 9;
      l1 = s.pop(); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","JANKSON","Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson;")); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l1); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(null); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","fromJson","(Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonObject;Ljava/lang/Class;)Ljava/lang/Object;", rv, av)); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.cast(s.pop(), "squeek/appleskin/ModConfig")); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;",r); pc = 16; continue;
    case 16:
      __pc = 16;
      pc = undefined; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/ModConfig","save","()V", rv, []); pc = 19; continue;
    case 19:
      __pc = 19;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/ModConfig"].__fields = [{"name":"INSTANCE","descriptor":"Lsqueek/appleskin/ModConfig;"},{"name":"JANKSON","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson;"},{"name":"PATH","descriptor":"Ljava/nio/file/Path;"},{"name":"showFoodValuesInTooltip","descriptor":"Z"},{"name":"showFoodValuesInTooltipAlways","descriptor":"Z"},{"name":"showSaturationHudOverlay","descriptor":"Z"},{"name":"showFoodValuesHudOverlay","descriptor":"Z"},{"name":"showFoodValuesHudOverlayWhenOffhand","descriptor":"Z"},{"name":"showFoodExhaustionHudUnderlay","descriptor":"Z"},{"name":"showFoodHealthHudOverlay","descriptor":"Z"},{"name":"showVanillaAnimationsOverlay","descriptor":"Z"},{"name":"maxHudOverlayFlashAlpha","descriptor":"F"}];
  defineClass("squeek/appleskin/client/DebugInfoHudEntry", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<clinit>()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push("appleskin"); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("food_stats"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/resources/Identifier","fromNamespaceAndPath","(Ljava/lang/String;Ljava/lang/String;)Lnet/minecraft/class_2960;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/client/DebugInfoHudEntry","ENTRY_ID","Lnet/minecraft/class_2960;",r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("appleskin"); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push("debug_info"); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/resources/Identifier","fromNamespaceAndPath","(Ljava/lang/String;Ljava/lang/String;)Lnet/minecraft/class_2960;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/client/DebugInfoHudEntry","SECTION_ID","Lnet/minecraft/class_2960;",r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.newInstance("java/text/DecimalFormat")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(s[s.length - 1]); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push("#.##"); pc = 11; continue;
    case 11:
      __pc = 11;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.text.DecimalFormat.<init>") + ' needs the client internals');
    case 12:
      __pc = 12;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/client/DebugInfoHudEntry","saturationDF","Ljava/text/DecimalFormat;",r); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.newInstance("java/text/DecimalFormat")); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(s[s.length - 1]); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push("0.00"); pc = 16; continue;
    case 16:
      __pc = 16;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.text.DecimalFormat.<init>") + ' needs the client internals');
    case 17:
      __pc = 17;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/client/DebugInfoHudEntry","exhaustionValDF","Ljava/text/DecimalFormat;",r); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.newInstance("java/text/DecimalFormat")); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(s[s.length - 1]); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push("#.##"); pc = 21; continue;
    case 21:
      __pc = 21;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.text.DecimalFormat.<init>") + ' needs the client internals');
    case 22:
      __pc = 22;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/client/DebugInfoHudEntry","exhaustionMaxDF","Ljava/text/DecimalFormat;",r); pc = 23; continue;
    case 23:
      __pc = 23;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/client/DebugInfoHudEntry"].__fields = [{"name":"ENTRY_ID","descriptor":"Lnet/minecraft/class_2960;"},{"name":"SECTION_ID","descriptor":"Lnet/minecraft/class_2960;"},{"name":"saturationDF","descriptor":"Ljava/text/DecimalFormat;"},{"name":"exhaustionValDF","descriptor":"Ljava/text/DecimalFormat;"},{"name":"exhaustionMaxDF","descriptor":"Ljava/text/DecimalFormat;"}];
  defineClass("squeek/appleskin/client/HUDOverlayHandler$HeldFoodCache", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/HUDOverlayHandler$HeldFoodCache","lastGuiTick","I",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/client/HUDOverlayHandler$HeldFoodCache"].__fields = [{"name":"result","descriptor":"Lsqueek/appleskin/helpers/FoodHelper$QueriedFoodResult;"},{"name":"lastGuiTick","descriptor":"I"}];
  defineClass("squeek/appleskin/client/HUDOverlayHandler$OffsetsCache", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.newInstance("java/util/Vector")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop();
      throw __ctx.toError(("java.util.Vector.<init>") + ' needs the client internals');
    case 6:
      __pc = 6;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/HUDOverlayHandler$OffsetsCache","foodBarOffsets","Ljava/util/Vector;",target, r); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.newInstance("java/util/Vector")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(s[s.length - 1]); pc = 10; continue;
    case 10:
      __pc = 10;
      s.pop();
      throw __ctx.toError(("java.util.Vector.<init>") + ' needs the client internals');
    case 11:
      __pc = 11;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/HUDOverlayHandler$OffsetsCache","healthBarOffsets","Ljava/util/Vector;",target, r); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(0); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/HUDOverlayHandler$OffsetsCache","lastGuiTick","I",target, r); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.newInstance("java/util/Random")); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(s[s.length - 1]); pc = 18; continue;
    case 18:
      __pc = 18;
      s.pop();
      throw __ctx.toError(("java.util.Random.<init>") + ' needs the client internals');
    case 19:
      __pc = 19;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/HUDOverlayHandler$OffsetsCache","random","Ljava/util/Random;",target, r); pc = 20; continue;
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/client/HUDOverlayHandler$OffsetsCache"].__fields = [{"name":"foodBarOffsets","descriptor":"Ljava/util/Vector;"},{"name":"healthBarOffsets","descriptor":"Ljava/util/Vector;"},{"name":"lastGuiTick","descriptor":"I"},{"name":"random","descriptor":"Ljava/util/Random;"}];
  defineClass("squeek/appleskin/client/HUDOverlayHandler", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/HUDOverlayHandler","unclampedFlashAlpha","F",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(0); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/HUDOverlayHandler","flashAlpha","F",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(1); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/HUDOverlayHandler","alphaDir","B",target, r); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(0); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/HUDOverlayHandler","needDisableBlend","Z",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.newInstance("squeek/appleskin/client/HUDOverlayHandler$OffsetsCache")); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(s[s.length - 1]); pc = 17; continue;
    case 17:
      __pc = 17;
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/client/HUDOverlayHandler$OffsetsCache","<init>","()V", rv, []); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/HUDOverlayHandler","barOffsets","Lsqueek/appleskin/client/HUDOverlayHandler$OffsetsCache;",target, r); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l0); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.newInstance("squeek/appleskin/client/HUDOverlayHandler$HeldFoodCache")); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(s[s.length - 1]); pc = 22; continue;
    case 22:
      __pc = 22;
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/client/HUDOverlayHandler$HeldFoodCache","<init>","()V", rv, []); pc = 23; continue;
    case 23:
      __pc = 23;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/HUDOverlayHandler","heldFood","Lsqueek/appleskin/client/HUDOverlayHandler$HeldFoodCache;",target, r); pc = 24; continue;
    case 24:
      __pc = 24;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "init()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/client/HUDOverlayHandler")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/client/HUDOverlayHandler","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/client/HUDOverlayHandler","INSTANCE","Lsqueek/appleskin/client/HUDOverlayHandler;",r); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/client/HUDOverlayHandler"].__fields = [{"name":"INSTANCE","descriptor":"Lsqueek/appleskin/client/HUDOverlayHandler;"},{"name":"unclampedFlashAlpha","descriptor":"F"},{"name":"flashAlpha","descriptor":"F"},{"name":"alphaDir","descriptor":"B"},{"name":"needDisableBlend","descriptor":"Z"},{"name":"barOffsets","descriptor":"Lsqueek/appleskin/client/HUDOverlayHandler$OffsetsCache;"},{"name":"heldFood","descriptor":"Lsqueek/appleskin/client/HUDOverlayHandler$HeldFoodCache;"},{"name":"$assertionsDisabled","descriptor":"Z"}];
  defineClass("squeek/appleskin/client/REITooltipPlugin", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/client/REITooltipPlugin"].__fields = [];
  defineClass("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay", {
    "<init>(Lnet/minecraft/class_1799;Lnet/minecraft/class_4174;Lnet/minecraft/class_4174;Lnet/minecraft/class_10124;Lnet/minecraft/class_1657;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    l4 = __args[3];
    l5 = __args[4];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","itemStack","Lnet/minecraft/class_1799;",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l2); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","defaultFood","Lnet/minecraft/class_4174;",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l3); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","modifiedFood","Lnet/minecraft/class_4174;",target, r); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l4); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","consumableComponent","Lnet/minecraft/class_10124;",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l2); pc = 16; continue;
    case 16:
      __pc = 16;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/food/FoodProperties","nutrition","()I", rv, [])); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l3); pc = 18; continue;
    case 18:
      __pc = 18;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/food/FoodProperties","nutrition","()I", rv, [])); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Math","max","(II)I", av)); pc = 20; continue;
    case 20:
      __pc = 20;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","biggestHunger","I",target, r); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l0); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l2); pc = 23; continue;
    case 23:
      __pc = 23;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/food/FoodProperties","saturation","()F", rv, [])); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l3); pc = 25; continue;
    case 25:
      __pc = 25;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/food/FoodProperties","saturation","()F", rv, [])); pc = 26; continue;
    case 26:
      __pc = 26;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Math","max","(FF)F", av)); pc = 27; continue;
    case 27:
      __pc = 27;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","biggestSaturationIncrement","F",target, r); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l0); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l0); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","biggestHunger","I", s.pop())); pc = 31; continue;
    case 31:
      __pc = 31;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Math","abs","(I)I", av)); pc = 32; continue;
    case 32:
      __pc = 32;
      r = s.pop(); s.push(Number(r)); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(2); pc = 34; continue;
    case 34:
      __pc = 34;
      r = s.pop(); s.push(s.pop() / r); pc = 35; continue;
    case 35:
      __pc = 35;
      r = s.pop(); s.push(Number(r)); pc = 36; continue;
    case 36:
      __pc = 36;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Math","ceil","(D)D", av)); pc = 37; continue;
    case 37:
      __pc = 37;
      r = s.pop(); s.push(Number(r)); pc = 38; continue;
    case 38:
      __pc = 38;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","hungerBars","I",target, r); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(l0); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","hungerBars","I", s.pop())); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(10); pc = 42; continue;
    case 42:
      __pc = 42;
      r = s.pop(); var l = s.pop(); if (l <= r) { pc = 58; } else { pc = 43; } continue;
    case 43:
      __pc = 43;
      s.push(l0); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(l0); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","biggestHunger","I", s.pop())); pc = 46; continue;
    case 46:
      __pc = 46;
      r = s.pop(); if (r >= 0) { pc = 49; } else { pc = 47; } continue;
    case 47:
      __pc = 47;
      s.push(-1); pc = 48; continue;
    case 48:
      __pc = 48;
      pc = undefined; continue;
    case 49:
      __pc = 49;
      s.push(1); pc = 50; continue;
    case 50:
      __pc = 50;
      s.push(l0); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","hungerBars","I", s.pop())); pc = 52; continue;
    case 52:
      __pc = 52;
      r = s.pop(); s.push(s.pop() * r); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay.<init>:101")); pc = 54; continue;
    case 54:
      __pc = 54;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","hungerBarsText","Ljava/lang/String;",target, r); pc = 55; continue;
    case 55:
      __pc = 55;
      s.push(l0); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(1); pc = 57; continue;
    case 57:
      __pc = 57;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","hungerBars","I",target, r); pc = 58; continue;
    case 58:
      __pc = 58;
      s.push(l0); pc = 59; continue;
    case 59:
      __pc = 59;
      s.push(l0); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","biggestSaturationIncrement","F", s.pop())); pc = 61; continue;
    case 61:
      __pc = 61;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Math.abs") + ' needs the client internals');
    case 62:
      __pc = 62;
      s.push(2); pc = 63; continue;
    case 63:
      __pc = 63;
      r = s.pop(); s.push(s.pop() / r); pc = 64; continue;
    case 64:
      __pc = 64;
      r = s.pop(); s.push(Number(r)); pc = 65; continue;
    case 65:
      __pc = 65;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Math","ceil","(D)D", av)); pc = 66; continue;
    case 66:
      __pc = 66;
      r = s.pop(); s.push(Number(r)); pc = 67; continue;
    case 67:
      __pc = 67;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","saturationBars","I",target, r); pc = 68; continue;
    case 68:
      __pc = 68;
      s.push(l0); pc = 69; continue;
    case 69:
      __pc = 69;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","saturationBars","I", s.pop())); pc = 70; continue;
    case 70:
      __pc = 70;
      s.push(10); pc = 71; continue;
    case 71:
      __pc = 71;
      r = s.pop(); var l = s.pop(); if (l > r) { pc = 75; } else { pc = 72; } continue;
    case 72:
      __pc = 72;
      s.push(l0); pc = 73; continue;
    case 73:
      __pc = 73;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","saturationBars","I", s.pop())); pc = 74; continue;
    case 74:
      __pc = 74;
      r = s.pop(); if (r != 0) { pc = 92; } else { pc = 75; } continue;
    case 75:
      __pc = 75;
      s.push(l0); pc = 76; continue;
    case 76:
      __pc = 76;
      s.push(l0); pc = 77; continue;
    case 77:
      __pc = 77;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","biggestSaturationIncrement","F", s.pop())); pc = 78; continue;
    case 78:
      __pc = 78;
      s.push(0); pc = 79; continue;
    case 79:
      __pc = 79;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 80; continue;
    case 80:
      __pc = 80;
      r = s.pop(); if (r >= 0) { pc = 83; } else { pc = 81; } continue;
    case 81:
      __pc = 81;
      s.push(-1); pc = 82; continue;
    case 82:
      __pc = 82;
      pc = undefined; continue;
    case 83:
      __pc = 83;
      s.push(1); pc = 84; continue;
    case 84:
      __pc = 84;
      s.push(l0); pc = 85; continue;
    case 85:
      __pc = 85;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","saturationBars","I", s.pop())); pc = 86; continue;
    case 86:
      __pc = 86;
      r = s.pop(); s.push(s.pop() * r); pc = 87; continue;
    case 87:
      __pc = 87;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay.<init>:168")); pc = 88; continue;
    case 88:
      __pc = 88;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","saturationBarsText","Ljava/lang/String;",target, r); pc = 89; continue;
    case 89:
      __pc = 89;
      s.push(l0); pc = 90; continue;
    case 90:
      __pc = 90;
      s.push(1); pc = 91; continue;
    case 91:
      __pc = 91;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","saturationBars","I",target, r); pc = 92; continue;
    case 92:
      __pc = 92;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "shouldRenderHungerBars()Z": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","hungerBars","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r <= 0) { pc = 5; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(1); pc = 4; continue;
    case 4:
      __pc = 4;
      pc = undefined; continue;
    case 5:
      __pc = 5;
      s.push(0); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "method_32661(Lnet/minecraft/class_327;)I": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(20); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "method_32664(Lnet/minecraft/class_327;)I": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","hungerBars","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(9); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(s.pop() * r); pc = 4; continue;
    case 4:
      __pc = 4;
      l2 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","hungerBarsText","Ljava/lang/String;", s.pop())); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); if (r == null) { pc = 15; } else { pc = 8; } continue;
    case 8:
      __pc = 8;
      s.push(l2); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l1); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","hungerBarsText","Ljava/lang/String;", s.pop())); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/gui/Font","width","(Ljava/lang/String;)I", rv, av)); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); s.push(s.pop() + r); pc = 14; continue;
    case 14:
      __pc = 14;
      l2 = s.pop(); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","saturationBars","I", s.pop())); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(7); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop(); s.push(s.pop() * r); pc = 19; continue;
    case 19:
      __pc = 19;
      l3 = s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l0); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","saturationBarsText","Ljava/lang/String;", s.pop())); pc = 22; continue;
    case 22:
      __pc = 22;
      r = s.pop(); if (r == null) { pc = 30; } else { pc = 23; } continue;
    case 23:
      __pc = 23;
      s.push(l3); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l1); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l0); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getField("squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay","saturationBarsText","Ljava/lang/String;", s.pop())); pc = 27; continue;
    case 27:
      __pc = 27;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/gui/Font","width","(Ljava/lang/String;)I", rv, av)); pc = 28; continue;
    case 28:
      __pc = 28;
      r = s.pop(); s.push(s.pop() + r); pc = 29; continue;
    case 29:
      __pc = 29;
      l3 = s.pop(); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l2); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l3); pc = 32; continue;
    case 32:
      __pc = 32;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Math","max","(II)I", av)); pc = 33; continue;
    case 33:
      __pc = 33;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/client/TooltipOverlayHandler$FoodOverlay"].__fields = [{"name":"defaultFood","descriptor":"Lnet/minecraft/class_4174;"},{"name":"modifiedFood","descriptor":"Lnet/minecraft/class_4174;"},{"name":"consumableComponent","descriptor":"Lnet/minecraft/class_10124;"},{"name":"biggestHunger","descriptor":"I"},{"name":"biggestSaturationIncrement","descriptor":"F"},{"name":"hungerBars","descriptor":"I"},{"name":"hungerBarsText","descriptor":"Ljava/lang/String;"},{"name":"saturationBars","descriptor":"I"},{"name":"saturationBarsText","descriptor":"Ljava/lang/String;"},{"name":"itemStack","descriptor":"Lnet/minecraft/class_1799;"}];
  defineClass("squeek/appleskin/client/TooltipOverlayHandler", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "init()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/client/TooltipOverlayHandler")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/client/TooltipOverlayHandler","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/client/TooltipOverlayHandler","INSTANCE","Lsqueek/appleskin/client/TooltipOverlayHandler;",r); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/client/TooltipOverlayHandler"].__fields = [{"name":"INSTANCE","descriptor":"Lsqueek/appleskin/client/TooltipOverlayHandler;"}];
  defineClass("squeek/appleskin/gui/AutoConfigIntegration", {
    "init()V": function (__ctx, __self, __args) {
    var l0;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(null); pc = 1; continue;
    case 1:
      __pc = 1;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("me/shedaniel/autoconfig/serializer/DummyConfigSerializer","<init>","(Lme/shedaniel/autoconfig/annotation/Config;Ljava/lang/Class;)V", null, dv)); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("me/shedaniel/autoconfig/AutoConfig","register","(Ljava/lang/Class;Lme/shedaniel/autoconfig/serializer/ConfigSerializer$Factory;)Lme/shedaniel/autoconfig/ConfigHolder;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      l0 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/gui/AutoConfigIntegration","lambda$init$0","(Lme/shedaniel/autoconfig/ConfigHolder;Lsqueek/appleskin/gui/AutoConfigIntegration;)Lnet/minecraft/class_1269;", null, dv)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("me/shedaniel/autoconfig/ConfigHolder","registerSaveListener","(Lme/shedaniel/autoconfig/event/ConfigSerializeEvent$Save;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/gui/AutoConfigIntegration","lambda$init$1","(Lme/shedaniel/autoconfig/ConfigHolder;Lsqueek/appleskin/gui/AutoConfigIntegration;)Lnet/minecraft/class_1269;", null, dv)); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("me/shedaniel/autoconfig/ConfigHolder","registerLoadListener","(Lme/shedaniel/autoconfig/event/ConfigSerializeEvent$Load;)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      var rv = s.pop();
      s.push(__ctx.invoke("me/shedaniel/autoconfig/ConfigHolder","load","()Z", rv, [])); pc = 12; continue;
    case 12:
      __pc = 12;
      s.pop(); pc = 13; continue;
    case 13:
      __pc = 13;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$1(Lme/shedaniel/autoconfig/ConfigHolder;Lsqueek/appleskin/gui/AutoConfigIntegration;)Lnet/minecraft/class_1269;": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("squeek/appleskin/ModConfig","maxHudOverlayFlashAlpha","F", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/AutoConfigIntegration","maxHudOverlayFlashAlpha","F",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getField("squeek/appleskin/ModConfig","showFoodHealthHudOverlay","Z", s.pop())); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/AutoConfigIntegration","showFoodHealthHudOverlay","Z",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l1); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getField("squeek/appleskin/ModConfig","showFoodExhaustionHudUnderlay","Z", s.pop())); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/AutoConfigIntegration","showFoodExhaustionHudUnderlay","Z",target, r); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getField("squeek/appleskin/ModConfig","showFoodValuesInTooltip","Z", s.pop())); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/AutoConfigIntegration","showFoodValuesInTooltip","Z",target, r); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l1); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.getField("squeek/appleskin/ModConfig","showFoodValuesHudOverlay","Z", s.pop())); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/AutoConfigIntegration","showFoodValuesHudOverlay","Z",target, r); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l1); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.getField("squeek/appleskin/ModConfig","showFoodValuesInTooltipAlways","Z", s.pop())); pc = 23; continue;
    case 23:
      __pc = 23;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/AutoConfigIntegration","showFoodValuesInTooltipAlways","Z",target, r); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l1); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getField("squeek/appleskin/ModConfig","showSaturationHudOverlay","Z", s.pop())); pc = 27; continue;
    case 27:
      __pc = 27;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/AutoConfigIntegration","showSaturationHudOverlay","Z",target, r); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l1); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.getField("squeek/appleskin/ModConfig","showVanillaAnimationsOverlay","Z", s.pop())); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/AutoConfigIntegration","showVanillaAnimationsOverlay","Z",target, r); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(l1); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(__ctx.getField("squeek/appleskin/ModConfig","showFoodValuesHudOverlayWhenOffhand","Z", s.pop())); pc = 35; continue;
    case 35:
      __pc = 35;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/AutoConfigIntegration","showFoodValuesHudOverlayWhenOffhand","Z",target, r); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(__ctx.getStatic("net/minecraft/world/InteractionResult","field_5812","Lnet/minecraft/class_1269$class_9860;")); pc = 37; continue;
    case 37:
      __pc = 37;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$0(Lme/shedaniel/autoconfig/ConfigHolder;Lsqueek/appleskin/gui/AutoConfigIntegration;)Lnet/minecraft/class_1269;": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":36,"end":39,"handler":40}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("squeek/appleskin/gui/AutoConfigIntegration","maxHudOverlayFlashAlpha","F", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","maxHudOverlayFlashAlpha","F",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getField("squeek/appleskin/gui/AutoConfigIntegration","showFoodHealthHudOverlay","Z", s.pop())); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showFoodHealthHudOverlay","Z",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l1); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getField("squeek/appleskin/gui/AutoConfigIntegration","showFoodExhaustionHudUnderlay","Z", s.pop())); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showFoodExhaustionHudUnderlay","Z",target, r); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l1); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getField("squeek/appleskin/gui/AutoConfigIntegration","showFoodValuesInTooltip","Z", s.pop())); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showFoodValuesInTooltip","Z",target, r); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l1); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.getField("squeek/appleskin/gui/AutoConfigIntegration","showFoodValuesHudOverlay","Z", s.pop())); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showFoodValuesHudOverlay","Z",target, r); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l1); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.getField("squeek/appleskin/gui/AutoConfigIntegration","showFoodValuesInTooltipAlways","Z", s.pop())); pc = 23; continue;
    case 23:
      __pc = 23;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showFoodValuesInTooltipAlways","Z",target, r); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l1); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getField("squeek/appleskin/gui/AutoConfigIntegration","showSaturationHudOverlay","Z", s.pop())); pc = 27; continue;
    case 27:
      __pc = 27;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showSaturationHudOverlay","Z",target, r); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l1); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.getField("squeek/appleskin/gui/AutoConfigIntegration","showVanillaAnimationsOverlay","Z", s.pop())); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showVanillaAnimationsOverlay","Z",target, r); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(l1); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(__ctx.getField("squeek/appleskin/gui/AutoConfigIntegration","showFoodValuesHudOverlayWhenOffhand","Z", s.pop())); pc = 35; continue;
    case 35:
      __pc = 35;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/ModConfig","showFoodValuesHudOverlayWhenOffhand","Z",target, r); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(__ctx.getStatic("squeek/appleskin/ModConfig","INSTANCE","Lsqueek/appleskin/ModConfig;")); pc = 37; continue;
    case 37:
      __pc = 37;
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/ModConfig","save","()V", rv, []); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(__ctx.getStatic("net/minecraft/world/InteractionResult","field_5812","Lnet/minecraft/class_1269$class_9860;")); pc = 39; continue;
    case 39:
      __pc = 39;
      return s.pop();
    case 40:
      __pc = 40;
      l2 = s.pop(); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(__ctx.newInstance("java/lang/RuntimeException")); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(s[s.length - 1]); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l2); pc = 44; continue;
    case 44:
      __pc = 44;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.RuntimeException.<init>") + ' needs the client internals');
    case 45:
      __pc = 45;
      throw __ctx.toError(s.pop());
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    } catch (__e) {
      var __h = __pickHandler(__pc);
      if (__h < 0) { throw __e; }
      pc = __h; s = [__e]; continue;
    }
    }
    }
  });
  CLASSES["squeek/appleskin/gui/AutoConfigIntegration"].__fields = [{"name":"DEFAULTS","descriptor":"Lsqueek/appleskin/ModConfig;"},{"name":"showFoodValuesInTooltip","descriptor":"Z"},{"name":"showFoodValuesInTooltipAlways","descriptor":"Z"},{"name":"showSaturationHudOverlay","descriptor":"Z"},{"name":"showFoodValuesHudOverlay","descriptor":"Z"},{"name":"showFoodValuesHudOverlayWhenOffhand","descriptor":"Z"},{"name":"showFoodExhaustionHudUnderlay","descriptor":"Z"},{"name":"showFoodHealthHudOverlay","descriptor":"Z"},{"name":"showVanillaAnimationsOverlay","descriptor":"Z"},{"name":"maxHudOverlayFlashAlpha","descriptor":"F"}];
  defineClass("squeek/appleskin/gui/ConfiguredConfigProvider$LeafEntry", {
    "getChildren()Ljava/util/List;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      throw __ctx.toError(("java.util.List.of") + ' needs the client internals');
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isRoot()Z": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(0); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isLeaf()Z": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(1); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getValue()Lcom/mrcrayfish/configured/api/IConfigValue;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/gui/ConfiguredConfigProvider$LeafEntry","value","Lcom/mrcrayfish/configured/api/IConfigValue;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getEntryName()Ljava/lang/String;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/gui/ConfiguredConfigProvider$LeafEntry","name","Ljava/lang/String;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getTooltip()Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/gui/ConfiguredConfigProvider$LeafEntry","getTranslationKey","()Ljava/lang/String;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/gui/ConfiguredConfigProvider$LeafEntry.getTooltip:4")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getTranslationKey()Ljava/lang/String;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/gui/ConfiguredConfigProvider$LeafEntry","name","Ljava/lang/String;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/gui/ConfiguredConfigProvider$LeafEntry.getTranslationKey:4")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/gui/ConfiguredConfigProvider$LeafEntry"].__fields = [{"name":"name","descriptor":"Ljava/lang/String;"},{"name":"value","descriptor":"Lcom/mrcrayfish/configured/api/IConfigValue;"}];
  defineClass("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue", {
    "<init>(Ljava/lang/String;Ljava/lang/Object;Ljava/lang/Object;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","name","Ljava/lang/String;",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l2); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","value","Ljava/lang/Object;",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l2); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","initValue","Ljava/lang/Object;",target, r); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l3); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","defaultValue","Ljava/lang/Object;",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "get()Ljava/lang/Object;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","value","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getDefault()Ljava/lang/Object;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","defaultValue","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "set(Ljava/lang/Object;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","value","Ljava/lang/Object;",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isValid(Ljava/lang/Object;)Z": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(1); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isDefault()Z": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","value","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","defaultValue","Ljava/lang/Object;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Object","equals","(Ljava/lang/Object;)Z", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isChanged()Z": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","value","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","initValue","Ljava/lang/Object;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Object","equals","(Ljava/lang/Object;)Z", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r != 0) { pc = 8; } else { pc = 6; } continue;
    case 6:
      __pc = 6;
      s.push(1); pc = 7; continue;
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(0); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "restore()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","defaultValue","Ljava/lang/Object;", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","value","Ljava/lang/Object;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getComment()Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","getTranslationKey","()Ljava/lang/String;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue.getComment:4")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getTranslationKey()Ljava/lang/String;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","name","Ljava/lang/String;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue.getTranslationKey:4")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getValidationHint()Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(null); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getName()Ljava/lang/String;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue","name","Ljava/lang/String;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "requiresWorldRestart()Z": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(0); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "requiresGameRestart()Z": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(0); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/gui/ConfiguredConfigProvider$SimpleValue"].__fields = [{"name":"name","descriptor":"Ljava/lang/String;"},{"name":"value","descriptor":"Ljava/lang/Object;"},{"name":"initValue","descriptor":"Ljava/lang/Object;"},{"name":"defaultValue","descriptor":"Ljava/lang/Object;"}];
  defineClass("squeek/appleskin/gui/ModMenuIntegration", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/gui/ModMenuIntegration"].__fields = [];
  defineClass("squeek/appleskin/helpers/ConsumableFood", {
    "<init>(Lnet/minecraft/class_4174;Lnet/minecraft/class_10124;)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Record","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/helpers/ConsumableFood","food","Lnet/minecraft/class_4174;",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l2); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/helpers/ConsumableFood","consumable","Lnet/minecraft/class_10124;",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toString()Ljava/lang/String;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/helpers/ConsumableFood.toString:1")); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "hashCode()I": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/helpers/ConsumableFood.hashCode:1")); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "equals(Ljava/lang/Object;)Z": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/helpers/ConsumableFood.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "food()Lnet/minecraft/class_4174;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/helpers/ConsumableFood","food","Lnet/minecraft/class_4174;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "consumable()Lnet/minecraft/class_10124;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/helpers/ConsumableFood","consumable","Lnet/minecraft/class_10124;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/helpers/ConsumableFood"].__fields = [{"name":"food","descriptor":"Lnet/minecraft/class_4174;"},{"name":"consumable","descriptor":"Lnet/minecraft/class_10124;"}];
  defineClass("squeek/appleskin/network/ClientSyncHandler", {
    "init()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("squeek/appleskin/network/ExhaustionSyncPayload","ID","Lnet/minecraft/class_8710$class_9154;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/ClientSyncHandler","lambda$init$1","(Lsqueek/appleskin/network/ExhaustionSyncPayload;Lnet/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context;)V", null, dv)); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking","registerGlobalReceiver","(Lnet/minecraft/class_8710$class_9154;Lnet/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$PlayPayloadHandler;)Z", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("squeek/appleskin/network/SaturationSyncPayload","ID","Lnet/minecraft/class_8710$class_9154;")); pc = 5; continue;
    case 5:
      __pc = 5;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/ClientSyncHandler","lambda$init$3","(Lsqueek/appleskin/network/SaturationSyncPayload;Lnet/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context;)V", null, dv)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking","registerGlobalReceiver","(Lnet/minecraft/class_8710$class_9154;Lnet/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$PlayPayloadHandler;)Z", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("squeek/appleskin/network/NaturalRegenerationSyncPayload","ID","Lnet/minecraft/class_8710$class_9154;")); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/ClientSyncHandler","lambda$init$4","(Lsqueek/appleskin/network/NaturalRegenerationSyncPayload;Lnet/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context;)V", null, dv)); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking","registerGlobalReceiver","(Lnet/minecraft/class_8710$class_9154;Lnet/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$PlayPayloadHandler;)Z", av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$4(Lsqueek/appleskin/network/NaturalRegenerationSyncPayload;Lnet/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/NaturalRegenerationSyncPayload","naturalRegeneration","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/network/ClientSyncHandler","naturalRegeneration","Z",r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$3(Lsqueek/appleskin/network/SaturationSyncPayload;Lnet/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context","client","()Lnet/minecraft/class_310;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/ClientSyncHandler","lambda$init$2","(Lnet/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context;Lsqueek/appleskin/network/SaturationSyncPayload;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/Minecraft","execute","(Ljava/lang/Runnable;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$2(Lnet/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context;Lsqueek/appleskin/network/SaturationSyncPayload;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context","client","()Lnet/minecraft/class_310;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1724","Lnet/minecraft/class_746;", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/player/LocalPlayer","getFoodData","()Lnet/minecraft/class_1702;", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/SaturationSyncPayload","getSaturation","()F", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/world/food/FoodData","setSaturation","(F)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$1(Lsqueek/appleskin/network/ExhaustionSyncPayload;Lnet/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context","client","()Lnet/minecraft/class_310;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/ClientSyncHandler","lambda$init$0","(Lnet/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context;Lsqueek/appleskin/network/ExhaustionSyncPayload;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/Minecraft","execute","(Ljava/lang/Runnable;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$0(Lnet/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context;Lsqueek/appleskin/network/ExhaustionSyncPayload;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context","client","()Lnet/minecraft/class_310;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1724","Lnet/minecraft/class_746;", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/ExhaustionSyncPayload","getExhaustion","()F", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("squeek/appleskin/helpers/ExhaustionHelper","setExhaustion","(Lnet/minecraft/class_1657;F)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/network/ClientSyncHandler"].__fields = [{"name":"naturalRegeneration","descriptor":"Z"}];
  defineClass("squeek/appleskin/network/ExhaustionSyncPayload", {
    "<init>(Lnet/minecraft/class_2540;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/FriendlyByteBuf","readFloat","()F", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/network/ExhaustionSyncPayload","<init>","(F)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(F)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Record","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/network/ExhaustionSyncPayload","exhaustion","F",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "write(Lnet/minecraft/class_2540;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("squeek/appleskin/network/ExhaustionSyncPayload","exhaustion","F", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/FriendlyByteBuf","writeFloat","(F)Lnet/minecraft/class_2540;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getExhaustion()F": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/network/ExhaustionSyncPayload","exhaustion","F", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "method_56479()Lnet/minecraft/class_8710$class_9154;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("squeek/appleskin/network/ExhaustionSyncPayload","ID","Lnet/minecraft/class_8710$class_9154;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toString()Ljava/lang/String;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/network/ExhaustionSyncPayload.toString:1")); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "hashCode()I": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/network/ExhaustionSyncPayload.hashCode:1")); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "equals(Ljava/lang/Object;)Z": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/network/ExhaustionSyncPayload.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "exhaustion()F": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/network/ExhaustionSyncPayload","exhaustion","F", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<clinit>()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/ExhaustionSyncPayload","write","(Lnet/minecraft/class_2540;)V", null, dv)); pc = 1; continue;
    case 1:
      __pc = 1;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/ExhaustionSyncPayload","<init>","(Lnet/minecraft/class_2540;)V", null, dv)); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/protocol/common/custom/CustomPacketPayload","codec","(Lnet/minecraft/class_9143;Lnet/minecraft/class_9141;)Lnet/minecraft/class_9139;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/network/ExhaustionSyncPayload","CODEC","Lnet/minecraft/class_9139;",r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.newInstance("net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(s[s.length - 1]); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push("appleskin"); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("exhaustion"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/resources/Identifier","fromNamespaceAndPath","(Ljava/lang/String;Ljava/lang/String;)Lnet/minecraft/class_2960;", av)); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type","<init>","(Lnet/minecraft/class_2960;)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/network/ExhaustionSyncPayload","ID","Lnet/minecraft/class_8710$class_9154;",r); pc = 11; continue;
    case 11:
      __pc = 11;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/network/ExhaustionSyncPayload"].__fields = [{"name":"exhaustion","descriptor":"F"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_9139;"},{"name":"ID","descriptor":"Lnet/minecraft/class_8710$class_9154;"}];
  defineClass("squeek/appleskin/network/NaturalRegenerationSyncPayload", {
    "<init>(Lnet/minecraft/class_2540;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/FriendlyByteBuf","readBoolean","()Z", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/network/NaturalRegenerationSyncPayload","<init>","(Z)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Z)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Record","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/network/NaturalRegenerationSyncPayload","naturalRegeneration","Z",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "write(Lnet/minecraft/class_2540;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("squeek/appleskin/network/NaturalRegenerationSyncPayload","naturalRegeneration","Z", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/FriendlyByteBuf","writeBoolean","(Z)Lnet/minecraft/class_2540;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "method_56479()Lnet/minecraft/class_8710$class_9154;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("squeek/appleskin/network/NaturalRegenerationSyncPayload","ID","Lnet/minecraft/class_8710$class_9154;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toString()Ljava/lang/String;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/network/NaturalRegenerationSyncPayload.toString:1")); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "hashCode()I": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/network/NaturalRegenerationSyncPayload.hashCode:1")); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "equals(Ljava/lang/Object;)Z": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/network/NaturalRegenerationSyncPayload.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "naturalRegeneration()Z": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/network/NaturalRegenerationSyncPayload","naturalRegeneration","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<clinit>()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/NaturalRegenerationSyncPayload","write","(Lnet/minecraft/class_2540;)V", null, dv)); pc = 1; continue;
    case 1:
      __pc = 1;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/NaturalRegenerationSyncPayload","<init>","(Lnet/minecraft/class_2540;)V", null, dv)); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/protocol/common/custom/CustomPacketPayload","codec","(Lnet/minecraft/class_9143;Lnet/minecraft/class_9141;)Lnet/minecraft/class_9139;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/network/NaturalRegenerationSyncPayload","CODEC","Lnet/minecraft/class_9139;",r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.newInstance("net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(s[s.length - 1]); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push("appleskin"); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("natural_regeneration"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/resources/Identifier","fromNamespaceAndPath","(Ljava/lang/String;Ljava/lang/String;)Lnet/minecraft/class_2960;", av)); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type","<init>","(Lnet/minecraft/class_2960;)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/network/NaturalRegenerationSyncPayload","ID","Lnet/minecraft/class_8710$class_9154;",r); pc = 11; continue;
    case 11:
      __pc = 11;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/network/NaturalRegenerationSyncPayload"].__fields = [{"name":"naturalRegeneration","descriptor":"Z"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_9139;"},{"name":"ID","descriptor":"Lnet/minecraft/class_8710$class_9154;"}];
  defineClass("squeek/appleskin/network/SaturationSyncPayload", {
    "<init>(Lnet/minecraft/class_2540;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/FriendlyByteBuf","readFloat","()F", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/network/SaturationSyncPayload","<init>","(F)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(F)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Record","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/network/SaturationSyncPayload","saturation","F",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "write(Lnet/minecraft/class_2540;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("squeek/appleskin/network/SaturationSyncPayload","saturation","F", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/FriendlyByteBuf","writeFloat","(F)Lnet/minecraft/class_2540;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSaturation()F": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/network/SaturationSyncPayload","saturation","F", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "method_56479()Lnet/minecraft/class_8710$class_9154;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("squeek/appleskin/network/SaturationSyncPayload","ID","Lnet/minecraft/class_8710$class_9154;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toString()Ljava/lang/String;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/network/SaturationSyncPayload.toString:1")); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "hashCode()I": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/network/SaturationSyncPayload.hashCode:1")); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "equals(Ljava/lang/Object;)Z": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.unsupportedLambda("squeek/appleskin/network/SaturationSyncPayload.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "saturation()F": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/network/SaturationSyncPayload","saturation","F", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<clinit>()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/SaturationSyncPayload","write","(Lnet/minecraft/class_2540;)V", null, dv)); pc = 1; continue;
    case 1:
      __pc = 1;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/SaturationSyncPayload","<init>","(Lnet/minecraft/class_2540;)V", null, dv)); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/protocol/common/custom/CustomPacketPayload","codec","(Lnet/minecraft/class_9143;Lnet/minecraft/class_9141;)Lnet/minecraft/class_9139;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/network/SaturationSyncPayload","CODEC","Lnet/minecraft/class_9139;",r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.newInstance("net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(s[s.length - 1]); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push("appleskin"); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("saturation"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/resources/Identifier","fromNamespaceAndPath","(Ljava/lang/String;Ljava/lang/String;)Lnet/minecraft/class_2960;", av)); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type","<init>","(Lnet/minecraft/class_2960;)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/network/SaturationSyncPayload","ID","Lnet/minecraft/class_8710$class_9154;",r); pc = 11; continue;
    case 11:
      __pc = 11;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/network/SaturationSyncPayload"].__fields = [{"name":"saturation","descriptor":"F"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_9139;"},{"name":"ID","descriptor":"Lnet/minecraft/class_8710$class_9154;"}];
  defineClass("squeek/appleskin/network/SyncHandler", {
    "init()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/networking/v1/PayloadTypeRegistry","playS2C","()Lnet/fabricmc/fabric/api/networking/v1/PayloadTypeRegistry;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getStatic("squeek/appleskin/network/ExhaustionSyncPayload","ID","Lnet/minecraft/class_8710$class_9154;")); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("squeek/appleskin/network/ExhaustionSyncPayload","CODEC","Lnet/minecraft/class_9139;")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/fabric/api/networking/v1/PayloadTypeRegistry","register","(Lnet/minecraft/class_8710$class_9154;Lnet/minecraft/class_9139;)Lnet/minecraft/class_8710$class_9155;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/networking/v1/PayloadTypeRegistry","playS2C","()Lnet/fabricmc/fabric/api/networking/v1/PayloadTypeRegistry;", [])); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("squeek/appleskin/network/SaturationSyncPayload","ID","Lnet/minecraft/class_8710$class_9154;")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("squeek/appleskin/network/SaturationSyncPayload","CODEC","Lnet/minecraft/class_9139;")); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/fabric/api/networking/v1/PayloadTypeRegistry","register","(Lnet/minecraft/class_8710$class_9154;Lnet/minecraft/class_9139;)Lnet/minecraft/class_8710$class_9155;", rv, av)); pc = 9; continue;
    case 9:
      __pc = 9;
      s.pop(); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/networking/v1/PayloadTypeRegistry","playS2C","()Lnet/fabricmc/fabric/api/networking/v1/PayloadTypeRegistry;", [])); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getStatic("squeek/appleskin/network/NaturalRegenerationSyncPayload","ID","Lnet/minecraft/class_8710$class_9154;")); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("squeek/appleskin/network/NaturalRegenerationSyncPayload","CODEC","Lnet/minecraft/class_9139;")); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/fabric/api/networking/v1/PayloadTypeRegistry","register","(Lnet/minecraft/class_8710$class_9154;Lnet/minecraft/class_9139;)Lnet/minecraft/class_8710$class_9155;", rv, av)); pc = 14; continue;
    case 14:
      __pc = 14;
      s.pop(); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/event/lifecycle/v1/ServerTickEvents","END_WORLD_TICK","Lnet/fabricmc/fabric/api/event/Event;")); pc = 16; continue;
    case 16:
      __pc = 16;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/network/SyncHandler","onServerWorldTick","(Lnet/minecraft/class_3218;)V", null, dv)); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 18; continue;
    case 18:
      __pc = 18;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onServerWorldTick(Lnet/minecraft/class_3218;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/server/level/ServerLevel","getGameRules","()Lnet/minecraft/class_1928;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("net/minecraft/world/level/gamerules/GameRules","field_19395","Lnet/minecraft/class_12279;")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/level/gamerules/GameRules","get","(Lnet/minecraft/class_12279;)Ljava/lang/Object;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Boolean")); pc = 5; continue;
    case 5:
      __pc = 5;
      l1 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("squeek/appleskin/network/SyncHandler","naturalRegeneration","Z")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Boolean","booleanValue","()Z", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 32; } else { pc = 10; } continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/server/level/ServerLevel","players","()Ljava/util/List;", rv, [])); pc = 12; continue;
    case 12:
      __pc = 12;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","iterator","()Ljava/util/Iterator;", rv, [])); pc = 13; continue;
    case 13:
      __pc = 13;
      l2 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l2); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop(); if (r == 0) { pc = 29; } else { pc = 17; } continue;
    case 17:
      __pc = 17;
      s.push(l2); pc = 18; continue;
    case 18:
      __pc = 18;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.cast(s.pop(), "net/minecraft/server/level/ServerPlayer")); pc = 20; continue;
    case 20:
      __pc = 20;
      l3 = s.pop(); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l3); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.newInstance("squeek/appleskin/network/NaturalRegenerationSyncPayload")); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(s[s.length - 1]); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l1); pc = 25; continue;
    case 25:
      __pc = 25;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Boolean","booleanValue","()Z", rv, [])); pc = 26; continue;
    case 26:
      __pc = 26;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/network/NaturalRegenerationSyncPayload","<init>","(Z)V", rv, av); pc = 27; continue;
    case 27:
      __pc = 27;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("net/fabricmc/fabric/api/networking/v1/ServerPlayNetworking","send","(Lnet/minecraft/class_3222;Lnet/minecraft/class_8710;)V", av); pc = 28; continue;
    case 28:
      __pc = 28;
      pc = undefined; continue;
    case 29:
      __pc = 29;
      s.push(l1); pc = 30; continue;
    case 30:
      __pc = 30;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Boolean","booleanValue","()Z", rv, [])); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop();
      __ctx.putStatic("squeek/appleskin/network/SyncHandler","naturalRegeneration","Z",r); pc = 32; continue;
    case 32:
      __pc = 32;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/network/SyncHandler"].__fields = [{"name":"lastSaturationLevels","descriptor":"Ljava/util/Map;"},{"name":"lastExhaustionLevels","descriptor":"Ljava/util/Map;"},{"name":"naturalRegeneration","descriptor":"Z"}];
  defineClass("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","<init>","()V", rv, []); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder","marshaller","Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl;",target, r); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(0); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder","allowBareRootObject","Z",target, r); pc = 10; continue;
    case 10:
      __pc = 10;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "build()Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson;": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/Jankson")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(null); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","<init>","(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder;Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$1;)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      l1 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder","marshaller","Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl;", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","access$402","(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson;Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;)Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;", av)); pc = 10; continue;
    case 10:
      __pc = 10;
      s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l1); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder","allowBareRootObject","Z", s.pop())); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","access$502","(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson;Z)Z", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      s.pop(); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l1); pc = 17; continue;
    case 17:
      __pc = 17;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder"].__fields = [{"name":"marshaller","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl;"},{"name":"allowBareRootObject","descriptor":"Z"}];
  defineClass("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame", {
    "<init>(Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/ParserContext;Ljava/util/function/Consumer;)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame","startLine","I",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(0); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame","startCol","I",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l1); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame","context","Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/ParserContext;",target, r); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l2); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame","consumer","Ljava/util/function/Consumer;",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "context()Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/ParserContext;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame","context","Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/ParserContext;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$000(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame;)Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/ParserContext;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame","context","Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/ParserContext;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$100(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame","startLine","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$200(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame","startCol","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$102(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame;I)I": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); var b = s.pop(); s.push(r, b, r); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame","startLine","I",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$202(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame;I)I": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); var b = s.pop(); s.push(r, b, r); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame","startCol","I",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame"].__fields = [{"name":"context","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/ParserContext;"},{"name":"consumer","descriptor":"Ljava/util/function/Consumer;"},{"name":"startLine","descriptor":"I"},{"name":"startCol","descriptor":"I"}];
  defineClass("squeek/appleskin/shadowed/blue/endless/jankson/Jankson", {
    "<init>(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.newInstance("java/util/ArrayDeque")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop();
      throw __ctx.toError(("java.util.ArrayDeque.<init>") + ' needs the client internals');
    case 6:
      __pc = 6;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","contextStack","Ljava/util/Deque;",target, r); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(0); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","line","I",target, r); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(0); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","column","I",target, r); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(-1); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","withheldCodePoint","I",target, r); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l0); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.invokeStatic("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","getFallback","()Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;", [])); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","marshaller","Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;",target, r); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l0); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(0); pc = 21; continue;
    case 21:
      __pc = 21;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","allowBareRootObject","Z",target, r); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l0); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(0); pc = 24; continue;
    case 24:
      __pc = 24;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","retries","I",target, r); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l0); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(null); pc = 27; continue;
    case 27:
      __pc = 27;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","delayedError","Lsqueek/appleskin/shadowed/blue/endless/jankson/api/SyntaxError;",target, r); pc = 28; continue;
    case 28:
      __pc = 28;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "load(Ljava/io/File;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonObject;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":5,"end":9,"handler":13},{"start":14,"end":16,"handler":17}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("java/io/FileInputStream")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.io.FileInputStream.<init>") + ' needs the client internals');
    case 4:
      __pc = 4;
      l2 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l2); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","load","(Ljava/io/InputStream;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonObject;", rv, av)); pc = 8; continue;
    case 8:
      __pc = 8;
      l3 = s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l2); pc = 10; continue;
    case 10:
      __pc = 10;
      s.pop();
      throw __ctx.toError(("java.io.InputStream.close") + ' needs the client internals');
    case 11:
      __pc = 11;
      s.push(l3); pc = 12; continue;
    case 12:
      __pc = 12;
      return s.pop();
    case 13:
      __pc = 13;
      l3 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l2); pc = 15; continue;
    case 15:
      __pc = 15;
      s.pop();
      throw __ctx.toError(("java.io.InputStream.close") + ' needs the client internals');
    case 16:
      __pc = 16;
      pc = undefined; continue;
    case 17:
      __pc = 17;
      l4 = s.pop(); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l3); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l4); pc = 20; continue;
    case 20:
      __pc = 20;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.Throwable.addSuppressed") + ' needs the client internals');
    case 21:
      __pc = 21;
      s.push(l3); pc = 22; continue;
    case 22:
      __pc = 22;
      throw __ctx.toError(s.pop());
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    } catch (__e) {
      var __h = __pickHandler(__pc);
      if (__h < 0) { throw __e; }
      pc = __h; s = [__e]; continue;
    }
    }
    },
    "push(Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/ParserContext;Ljava/util/function/Consumer;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame","<init>","(Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/ParserContext;Ljava/util/function/Consumer;)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      l3 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l3); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","line","I", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame","access$102","(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame;I)I", av)); pc = 10; continue;
    case 10:
      __pc = 10;
      s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l3); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","column","I", s.pop())); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame","access$202","(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$ParserFrame;I)I", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      s.pop(); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l0); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.getField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","contextStack","Ljava/util/Deque;", s.pop())); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l3); pc = 19; continue;
    case 19:
      __pc = 19;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.Deque.push") + ' needs the client internals');
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "builder()Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$load$0(Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonObject;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","root","Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonObject;",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder;Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$1;)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","<init>","(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson$Builder;)V", rv, av); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$402(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson;Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;)Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); var b = s.pop(); s.push(r, b, r); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","marshaller","Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$502(Lsqueek/appleskin/shadowed/blue/endless/jankson/Jankson;Z)Z": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); var b = s.pop(); s.push(r, b, r); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/Jankson","allowBareRootObject","Z",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/shadowed/blue/endless/jankson/Jankson"].__fields = [{"name":"contextStack","descriptor":"Ljava/util/Deque;"},{"name":"root","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonObject;"},{"name":"line","descriptor":"I"},{"name":"column","descriptor":"I"},{"name":"withheldCodePoint","descriptor":"I"},{"name":"marshaller","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;"},{"name":"allowBareRootObject","descriptor":"Z"},{"name":"retries","descriptor":"I"},{"name":"delayedError","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/api/SyntaxError;"},{"name":"rootElement","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/AnnotatedElement;"}];
  defineClass("squeek/appleskin/shadowed/blue/endless/jankson/JsonElement", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/shadowed/blue/endless/jankson/JsonElement"].__fields = [];
  defineClass("squeek/appleskin/shadowed/blue/endless/jankson/JsonObject", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonElement","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.invokeStatic("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","getFallback","()Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;", [])); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/JsonObject","marshaller","Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.newInstance("java/util/ArrayList")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(s[s.length - 1]); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      __ctx.invoke("java/util/ArrayList","<init>","()V", rv, []); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/JsonObject","entries","Ljava/util/List;",target, r); pc = 10; continue;
    case 10:
      __pc = 10;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/shadowed/blue/endless/jankson/JsonObject"].__fields = [{"name":"CAN_BE_UNQUOTED","descriptor":"Ljava/util/function/Predicate;"},{"name":"marshaller","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;"},{"name":"entries","descriptor":"Ljava/util/List;"}];
  defineClass("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive", {
    "<init>(Ljava/lang/Object;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonElement","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Character")); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); if (r == 0) { pc = 17; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.newInstance("java/lang/StringBuilder")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(s[s.length - 1]); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      __ctx.invoke("java/lang/StringBuilder","<init>","()V", rv, []); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(""); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","append","(Ljava/lang/String;)Ljava/lang/StringBuilder;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l1); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.cast(s.pop(), "java/lang/Character")); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","append","(Ljava/lang/Object;)Ljava/lang/StringBuilder;", rv, av)); pc = 14; continue;
    case 14:
      __pc = 14;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","toString","()Ljava/lang/String;", rv, [])); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 16; continue;
    case 16:
      __pc = 16;
      pc = undefined; continue;
    case 17:
      __pc = 17;
      s.push(l1); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Long")); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop(); if (r == 0) { pc = 24; } else { pc = 20; } continue;
    case 20:
      __pc = 20;
      s.push(l0); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l1); pc = 22; continue;
    case 22:
      __pc = 22;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 23; continue;
    case 23:
      __pc = 23;
      pc = undefined; continue;
    case 24:
      __pc = 24;
      s.push(l1); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Double")); pc = 26; continue;
    case 26:
      __pc = 26;
      r = s.pop(); if (r == 0) { pc = 31; } else { pc = 27; } continue;
    case 27:
      __pc = 27;
      s.push(l0); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l1); pc = 29; continue;
    case 29:
      __pc = 29;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 30; continue;
    case 30:
      __pc = 30;
      pc = undefined; continue;
    case 31:
      __pc = 31;
      s.push(l1); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(__ctx.isInstance(s.pop(), "java/math/BigInteger")); pc = 33; continue;
    case 33:
      __pc = 33;
      r = s.pop(); if (r == 0) { pc = 41; } else { pc = 34; } continue;
    case 34:
      __pc = 34;
      s.push(l0); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l1); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(__ctx.cast(s.pop(), "java/math/BigInteger")); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(16); pc = 38; continue;
    case 38:
      __pc = 38;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.math.BigInteger.toString") + ' needs the client internals');
    case 39:
      __pc = 39;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 40; continue;
    case 40:
      __pc = 40;
      pc = undefined; continue;
    case 41:
      __pc = 41;
      s.push(l1); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Float")); pc = 43; continue;
    case 43:
      __pc = 43;
      r = s.pop(); if (r == 0) { pc = 52; } else { pc = 44; } continue;
    case 44:
      __pc = 44;
      s.push(l0); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(l1); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(__ctx.cast(s.pop(), "java/lang/Float")); pc = 47; continue;
    case 47:
      __pc = 47;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Float","floatValue","()F", rv, [])); pc = 48; continue;
    case 48:
      __pc = 48;
      r = s.pop(); s.push(Number(r)); pc = 49; continue;
    case 49:
      __pc = 49;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 50; continue;
    case 50:
      __pc = 50;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 51; continue;
    case 51:
      __pc = 51;
      pc = undefined; continue;
    case 52:
      __pc = 52;
      s.push(l1); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 54; continue;
    case 54:
      __pc = 54;
      r = s.pop(); if (r == 0) { pc = 62; } else { pc = 55; } continue;
    case 55:
      __pc = 55;
      s.push(l0); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(l1); pc = 57; continue;
    case 57:
      __pc = 57;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 58; continue;
    case 58:
      __pc = 58;
      s.pop();
      throw __ctx.toError(("java.lang.Number.longValue") + ' needs the client internals');
    case 59:
      __pc = 59;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Long","valueOf","(J)Ljava/lang/Long;", av)); pc = 60; continue;
    case 60:
      __pc = 60;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 61; continue;
    case 61:
      __pc = 61;
      pc = undefined; continue;
    case 62:
      __pc = 62;
      s.push(l1); pc = 63; continue;
    case 63:
      __pc = 63;
      s.push(__ctx.isInstance(s.pop(), "java/lang/CharSequence")); pc = 64; continue;
    case 64:
      __pc = 64;
      r = s.pop(); if (r == 0) { pc = 70; } else { pc = 65; } continue;
    case 65:
      __pc = 65;
      s.push(l0); pc = 66; continue;
    case 66:
      __pc = 66;
      s.push(l1); pc = 67; continue;
    case 67:
      __pc = 67;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Object","toString","()Ljava/lang/String;", rv, [])); pc = 68; continue;
    case 68:
      __pc = 68;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 69; continue;
    case 69:
      __pc = 69;
      pc = undefined; continue;
    case 70:
      __pc = 70;
      s.push(l1); pc = 71; continue;
    case 71:
      __pc = 71;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Boolean")); pc = 72; continue;
    case 72:
      __pc = 72;
      r = s.pop(); if (r == 0) { pc = 77; } else { pc = 73; } continue;
    case 73:
      __pc = 73;
      s.push(l0); pc = 74; continue;
    case 74:
      __pc = 74;
      s.push(l1); pc = 75; continue;
    case 75:
      __pc = 75;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 76; continue;
    case 76:
      __pc = 76;
      pc = undefined; continue;
    case 77:
      __pc = 77;
      s.push(__ctx.newInstance("java/lang/IllegalArgumentException")); pc = 78; continue;
    case 78:
      __pc = 78;
      s.push(s[s.length - 1]); pc = 79; continue;
    case 79:
      __pc = 79;
      s.push(__ctx.newInstance("java/lang/StringBuilder")); pc = 80; continue;
    case 80:
      __pc = 80;
      s.push(s[s.length - 1]); pc = 81; continue;
    case 81:
      __pc = 81;
      var rv = s.pop();
      __ctx.invoke("java/lang/StringBuilder","<init>","()V", rv, []); pc = 82; continue;
    case 82:
      __pc = 82;
      s.push("Object of type '"); pc = 83; continue;
    case 83:
      __pc = 83;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","append","(Ljava/lang/String;)Ljava/lang/StringBuilder;", rv, av)); pc = 84; continue;
    case 84:
      __pc = 84;
      s.push(l1); pc = 85; continue;
    case 85:
      __pc = 85;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Object","getClass","()Ljava/lang/Class;", rv, [])); pc = 86; continue;
    case 86:
      __pc = 86;
      s.pop();
      throw __ctx.toError(("java.lang.Class.getCanonicalName") + ' needs the client internals');
    case 87:
      __pc = 87;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","append","(Ljava/lang/String;)Ljava/lang/StringBuilder;", rv, av)); pc = 88; continue;
    case 88:
      __pc = 88;
      s.push("' not allowed as a JsonPrimitive"); pc = 89; continue;
    case 89:
      __pc = 89;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","append","(Ljava/lang/String;)Ljava/lang/StringBuilder;", rv, av)); pc = 90; continue;
    case 90:
      __pc = 90;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","toString","()Ljava/lang/String;", rv, [])); pc = 91; continue;
    case 91:
      __pc = 91;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("java/lang/IllegalArgumentException","<init>","(Ljava/lang/String;)V", rv, av); pc = 92; continue;
    case 92:
      __pc = 92;
      throw __ctx.toError(s.pop());
    case 93:
      __pc = 93;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive"].__fields = [{"name":"TRUE","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive;"},{"name":"FALSE","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive;"},{"name":"value","descriptor":"Ljava/lang/Object;"}];
  defineClass("squeek/appleskin/shadowed/blue/endless/jankson/api/SyntaxError", {
    "setStartParsing(II)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/api/SyntaxError","startLine","I",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l2); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/api/SyntaxError","startColumn","I",target, r); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setEndParsing(II)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/api/SyntaxError","line","I",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l2); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/api/SyntaxError","column","I",target, r); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/shadowed/blue/endless/jankson/api/SyntaxError"].__fields = [{"name":"startLine","descriptor":"I"},{"name":"startColumn","descriptor":"I"},{"name":"line","descriptor":"I"},{"name":"column","descriptor":"I"}];
  defineClass("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl", {
    "getFallback()Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","INSTANCE","Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "register(Ljava/lang/Class;Ljava/util/function/Function;)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","primitiveMarshallers","Ljava/util/Map;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","put","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerSerializer(Ljava/lang/Class;Ljava/util/function/Function;)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","serializers","Ljava/util/Map;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$registerSerializer$0","(Ljava/util/function/Function;Ljava/lang/Object;Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","put","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.newInstance("java/util/HashMap")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      __ctx.invoke("java/util/HashMap","<init>","()V", rv, []); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","primitiveMarshallers","Ljava/util/Map;",target, r); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.newInstance("java/util/HashMap")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(s[s.length - 1]); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      __ctx.invoke("java/util/HashMap","<init>","()V", rv, []); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","typeAdapters","Ljava/util/Map;",target, r); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.newInstance("java/util/HashMap")); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(s[s.length - 1]); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      __ctx.invoke("java/util/HashMap","<init>","()V", rv, []); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","serializers","Ljava/util/Map;",target, r); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.newInstance("java/util/HashMap")); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(s[s.length - 1]); pc = 20; continue;
    case 20:
      __pc = 20;
      var rv = s.pop();
      __ctx.invoke("java/util/HashMap","<init>","()V", rv, []); pc = 21; continue;
    case 21:
      __pc = 21;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","deserializers","Ljava/util/Map;",target, r); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l0); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(__ctx.newInstance("java/util/HashMap")); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(s[s.length - 1]); pc = 25; continue;
    case 25:
      __pc = 25;
      var rv = s.pop();
      __ctx.invoke("java/util/HashMap","<init>","()V", rv, []); pc = 26; continue;
    case 26:
      __pc = 26;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","typeFactories","Ljava/util/Map;",target, r); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l0); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(null); pc = 29; continue;
    case 29:
      __pc = 29;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$1","(Ljava/lang/Object;)Ljava/lang/Void;", null, dv)); pc = 30; continue;
    case 30:
      __pc = 30;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l0); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(null); pc = 33; continue;
    case 33:
      __pc = 33;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$2","(Ljava/lang/Object;)Ljava/lang/String;", null, dv)); pc = 34; continue;
    case 34:
      __pc = 34;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l0); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(null); pc = 37; continue;
    case 37:
      __pc = 37;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$3","(Ljava/lang/Object;)Ljava/lang/Byte;", null, dv)); pc = 38; continue;
    case 38:
      __pc = 38;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(l0); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(null); pc = 41; continue;
    case 41:
      __pc = 41;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$4","(Ljava/lang/Object;)Ljava/lang/Character;", null, dv)); pc = 42; continue;
    case 42:
      __pc = 42;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l0); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(null); pc = 45; continue;
    case 45:
      __pc = 45;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$5","(Ljava/lang/Object;)Ljava/lang/Short;", null, dv)); pc = 46; continue;
    case 46:
      __pc = 46;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(l0); pc = 48; continue;
    case 48:
      __pc = 48;
      s.push(null); pc = 49; continue;
    case 49:
      __pc = 49;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$6","(Ljava/lang/Object;)Ljava/lang/Integer;", null, dv)); pc = 50; continue;
    case 50:
      __pc = 50;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(l0); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push(null); pc = 53; continue;
    case 53:
      __pc = 53;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$7","(Ljava/lang/Object;)Ljava/lang/Long;", null, dv)); pc = 54; continue;
    case 54:
      __pc = 54;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 55; continue;
    case 55:
      __pc = 55;
      s.push(l0); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(null); pc = 57; continue;
    case 57:
      __pc = 57;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$8","(Ljava/lang/Object;)Ljava/lang/Float;", null, dv)); pc = 58; continue;
    case 58:
      __pc = 58;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 59; continue;
    case 59:
      __pc = 59;
      s.push(l0); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push(null); pc = 61; continue;
    case 61:
      __pc = 61;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$9","(Ljava/lang/Object;)Ljava/lang/Double;", null, dv)); pc = 62; continue;
    case 62:
      __pc = 62;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 63; continue;
    case 63:
      __pc = 63;
      s.push(l0); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(null); pc = 65; continue;
    case 65:
      __pc = 65;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$10","(Ljava/lang/Object;)Ljava/lang/Boolean;", null, dv)); pc = 66; continue;
    case 66:
      __pc = 66;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 67; continue;
    case 67:
      __pc = 67;
      s.push(l0); pc = 68; continue;
    case 68:
      __pc = 68;
      s.push(__ctx.getStatic("java/lang/Void","TYPE","Ljava/lang/Class;")); pc = 69; continue;
    case 69:
      __pc = 69;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$11","(Ljava/lang/Object;)Ljava/lang/Void;", null, dv)); pc = 70; continue;
    case 70:
      __pc = 70;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 71; continue;
    case 71:
      __pc = 71;
      s.push(l0); pc = 72; continue;
    case 72:
      __pc = 72;
      s.push(__ctx.getStatic("java/lang/Byte","TYPE","Ljava/lang/Class;")); pc = 73; continue;
    case 73:
      __pc = 73;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$12","(Ljava/lang/Object;)Ljava/lang/Byte;", null, dv)); pc = 74; continue;
    case 74:
      __pc = 74;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 75; continue;
    case 75:
      __pc = 75;
      s.push(l0); pc = 76; continue;
    case 76:
      __pc = 76;
      s.push(__ctx.getStatic("java/lang/Character","TYPE","Ljava/lang/Class;")); pc = 77; continue;
    case 77:
      __pc = 77;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$13","(Ljava/lang/Object;)Ljava/lang/Character;", null, dv)); pc = 78; continue;
    case 78:
      __pc = 78;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 79; continue;
    case 79:
      __pc = 79;
      s.push(l0); pc = 80; continue;
    case 80:
      __pc = 80;
      s.push(__ctx.getStatic("java/lang/Short","TYPE","Ljava/lang/Class;")); pc = 81; continue;
    case 81:
      __pc = 81;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$14","(Ljava/lang/Object;)Ljava/lang/Short;", null, dv)); pc = 82; continue;
    case 82:
      __pc = 82;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 83; continue;
    case 83:
      __pc = 83;
      s.push(l0); pc = 84; continue;
    case 84:
      __pc = 84;
      s.push(__ctx.getStatic("java/lang/Integer","TYPE","Ljava/lang/Class;")); pc = 85; continue;
    case 85:
      __pc = 85;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$15","(Ljava/lang/Object;)Ljava/lang/Integer;", null, dv)); pc = 86; continue;
    case 86:
      __pc = 86;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 87; continue;
    case 87:
      __pc = 87;
      s.push(l0); pc = 88; continue;
    case 88:
      __pc = 88;
      s.push(__ctx.getStatic("java/lang/Long","TYPE","Ljava/lang/Class;")); pc = 89; continue;
    case 89:
      __pc = 89;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$16","(Ljava/lang/Object;)Ljava/lang/Long;", null, dv)); pc = 90; continue;
    case 90:
      __pc = 90;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 91; continue;
    case 91:
      __pc = 91;
      s.push(l0); pc = 92; continue;
    case 92:
      __pc = 92;
      s.push(__ctx.getStatic("java/lang/Float","TYPE","Ljava/lang/Class;")); pc = 93; continue;
    case 93:
      __pc = 93;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$17","(Ljava/lang/Object;)Ljava/lang/Float;", null, dv)); pc = 94; continue;
    case 94:
      __pc = 94;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 95; continue;
    case 95:
      __pc = 95;
      s.push(l0); pc = 96; continue;
    case 96:
      __pc = 96;
      s.push(__ctx.getStatic("java/lang/Double","TYPE","Ljava/lang/Class;")); pc = 97; continue;
    case 97:
      __pc = 97;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$18","(Ljava/lang/Object;)Ljava/lang/Double;", null, dv)); pc = 98; continue;
    case 98:
      __pc = 98;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 99; continue;
    case 99:
      __pc = 99;
      s.push(l0); pc = 100; continue;
    case 100:
      __pc = 100;
      s.push(__ctx.getStatic("java/lang/Boolean","TYPE","Ljava/lang/Class;")); pc = 101; continue;
    case 101:
      __pc = 101;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$19","(Ljava/lang/Object;)Ljava/lang/Boolean;", null, dv)); pc = 102; continue;
    case 102:
      __pc = 102;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 103; continue;
    case 103:
      __pc = 103;
      s.push(l0); pc = 104; continue;
    case 104:
      __pc = 104;
      s.push(null); pc = 105; continue;
    case 105:
      __pc = 105;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$20","(Ljava/lang/Void;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 106; continue;
    case 106:
      __pc = 106;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 107; continue;
    case 107:
      __pc = 107;
      s.push(l0); pc = 108; continue;
    case 108:
      __pc = 108;
      s.push(null); pc = 109; continue;
    case 109:
      __pc = 109;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$21","(Ljava/lang/Character;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 110; continue;
    case 110:
      __pc = 110;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 111; continue;
    case 111:
      __pc = 111;
      s.push(l0); pc = 112; continue;
    case 112:
      __pc = 112;
      s.push(null); pc = 113; continue;
    case 113:
      __pc = 113;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", null, dv)); pc = 114; continue;
    case 114:
      __pc = 114;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 115; continue;
    case 115:
      __pc = 115;
      s.push(l0); pc = 116; continue;
    case 116:
      __pc = 116;
      s.push(null); pc = 117; continue;
    case 117:
      __pc = 117;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$22","(Ljava/lang/Byte;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 118; continue;
    case 118:
      __pc = 118;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 119; continue;
    case 119:
      __pc = 119;
      s.push(l0); pc = 120; continue;
    case 120:
      __pc = 120;
      s.push(null); pc = 121; continue;
    case 121:
      __pc = 121;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$23","(Ljava/lang/Short;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 122; continue;
    case 122:
      __pc = 122;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 123; continue;
    case 123:
      __pc = 123;
      s.push(l0); pc = 124; continue;
    case 124:
      __pc = 124;
      s.push(null); pc = 125; continue;
    case 125:
      __pc = 125;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$24","(Ljava/lang/Integer;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 126; continue;
    case 126:
      __pc = 126;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 127; continue;
    case 127:
      __pc = 127;
      s.push(l0); pc = 128; continue;
    case 128:
      __pc = 128;
      s.push(null); pc = 129; continue;
    case 129:
      __pc = 129;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", null, dv)); pc = 130; continue;
    case 130:
      __pc = 130;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 131; continue;
    case 131:
      __pc = 131;
      s.push(l0); pc = 132; continue;
    case 132:
      __pc = 132;
      s.push(null); pc = 133; continue;
    case 133:
      __pc = 133;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$25","(Ljava/lang/Float;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 134; continue;
    case 134:
      __pc = 134;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 135; continue;
    case 135:
      __pc = 135;
      s.push(l0); pc = 136; continue;
    case 136:
      __pc = 136;
      s.push(null); pc = 137; continue;
    case 137:
      __pc = 137;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", null, dv)); pc = 138; continue;
    case 138:
      __pc = 138;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 139; continue;
    case 139:
      __pc = 139;
      s.push(l0); pc = 140; continue;
    case 140:
      __pc = 140;
      s.push(null); pc = 141; continue;
    case 141:
      __pc = 141;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", null, dv)); pc = 142; continue;
    case 142:
      __pc = 142;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 143; continue;
    case 143:
      __pc = 143;
      s.push(l0); pc = 144; continue;
    case 144:
      __pc = 144;
      s.push(__ctx.getStatic("java/lang/Void","TYPE","Ljava/lang/Class;")); pc = 145; continue;
    case 145:
      __pc = 145;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$26","(Ljava/lang/Void;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 146; continue;
    case 146:
      __pc = 146;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 147; continue;
    case 147:
      __pc = 147;
      s.push(l0); pc = 148; continue;
    case 148:
      __pc = 148;
      s.push(__ctx.getStatic("java/lang/Character","TYPE","Ljava/lang/Class;")); pc = 149; continue;
    case 149:
      __pc = 149;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$27","(Ljava/lang/Character;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 150; continue;
    case 150:
      __pc = 150;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 151; continue;
    case 151:
      __pc = 151;
      s.push(l0); pc = 152; continue;
    case 152:
      __pc = 152;
      s.push(__ctx.getStatic("java/lang/Byte","TYPE","Ljava/lang/Class;")); pc = 153; continue;
    case 153:
      __pc = 153;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$28","(Ljava/lang/Byte;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 154; continue;
    case 154:
      __pc = 154;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 155; continue;
    case 155:
      __pc = 155;
      s.push(l0); pc = 156; continue;
    case 156:
      __pc = 156;
      s.push(__ctx.getStatic("java/lang/Short","TYPE","Ljava/lang/Class;")); pc = 157; continue;
    case 157:
      __pc = 157;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$29","(Ljava/lang/Short;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 158; continue;
    case 158:
      __pc = 158;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 159; continue;
    case 159:
      __pc = 159;
      s.push(l0); pc = 160; continue;
    case 160:
      __pc = 160;
      s.push(__ctx.getStatic("java/lang/Integer","TYPE","Ljava/lang/Class;")); pc = 161; continue;
    case 161:
      __pc = 161;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$30","(Ljava/lang/Integer;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 162; continue;
    case 162:
      __pc = 162;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 163; continue;
    case 163:
      __pc = 163;
      s.push(l0); pc = 164; continue;
    case 164:
      __pc = 164;
      s.push(__ctx.getStatic("java/lang/Long","TYPE","Ljava/lang/Class;")); pc = 165; continue;
    case 165:
      __pc = 165;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", null, dv)); pc = 166; continue;
    case 166:
      __pc = 166;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 167; continue;
    case 167:
      __pc = 167;
      s.push(l0); pc = 168; continue;
    case 168:
      __pc = 168;
      s.push(__ctx.getStatic("java/lang/Float","TYPE","Ljava/lang/Class;")); pc = 169; continue;
    case 169:
      __pc = 169;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$31","(Ljava/lang/Float;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 170; continue;
    case 170:
      __pc = 170;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 171; continue;
    case 171:
      __pc = 171;
      s.push(l0); pc = 172; continue;
    case 172:
      __pc = 172;
      s.push(__ctx.getStatic("java/lang/Double","TYPE","Ljava/lang/Class;")); pc = 173; continue;
    case 173:
      __pc = 173;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", null, dv)); pc = 174; continue;
    case 174:
      __pc = 174;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 175; continue;
    case 175:
      __pc = 175;
      s.push(l0); pc = 176; continue;
    case 176:
      __pc = 176;
      s.push(__ctx.getStatic("java/lang/Boolean","TYPE","Ljava/lang/Class;")); pc = 177; continue;
    case 177:
      __pc = 177;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", null, dv)); pc = 178; continue;
    case 178:
      __pc = 178;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 179; continue;
    case 179:
      __pc = 179;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$31(Ljava/lang/Float;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Float","floatValue","()F", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); s.push(Number(r)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$30(Ljava/lang/Integer;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Integer","intValue","()I", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); s.push(BigInt(r | 0)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Long","valueOf","(J)Ljava/lang/Long;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$29(Ljava/lang/Short;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.pop();
      throw __ctx.toError(("java.lang.Short.shortValue") + ' needs the client internals');
    case 4:
      __pc = 4;
      r = s.pop(); s.push(BigInt(r | 0)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Long","valueOf","(J)Ljava/lang/Long;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$28(Ljava/lang/Byte;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.pop();
      throw __ctx.toError(("java.lang.Byte.byteValue") + ' needs the client internals');
    case 4:
      __pc = 4;
      r = s.pop(); s.push(BigInt(r | 0)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Long","valueOf","(J)Ljava/lang/Long;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$27(Ljava/lang/Character;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.newInstance("java/lang/StringBuilder")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(s[s.length - 1]); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      __ctx.invoke("java/lang/StringBuilder","<init>","()V", rv, []); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(""); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","append","(Ljava/lang/String;)Ljava/lang/StringBuilder;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","append","(Ljava/lang/Object;)Ljava/lang/StringBuilder;", rv, av)); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","toString","()Ljava/lang/String;", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$26(Ljava/lang/Void;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("squeek/appleskin/shadowed/blue/endless/jankson/JsonNull","INSTANCE","Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonNull;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$25(Ljava/lang/Float;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Float","floatValue","()F", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); s.push(Number(r)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$24(Ljava/lang/Integer;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Integer","intValue","()I", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); s.push(BigInt(r | 0)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Long","valueOf","(J)Ljava/lang/Long;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$23(Ljava/lang/Short;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.pop();
      throw __ctx.toError(("java.lang.Short.shortValue") + ' needs the client internals');
    case 4:
      __pc = 4;
      r = s.pop(); s.push(BigInt(r | 0)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Long","valueOf","(J)Ljava/lang/Long;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$22(Ljava/lang/Byte;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.pop();
      throw __ctx.toError(("java.lang.Byte.byteValue") + ' needs the client internals');
    case 4:
      __pc = 4;
      r = s.pop(); s.push(BigInt(r | 0)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Long","valueOf","(J)Ljava/lang/Long;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$21(Ljava/lang/Character;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.newInstance("java/lang/StringBuilder")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(s[s.length - 1]); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      __ctx.invoke("java/lang/StringBuilder","<init>","()V", rv, []); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(""); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","append","(Ljava/lang/String;)Ljava/lang/StringBuilder;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","append","(Ljava/lang/Object;)Ljava/lang/StringBuilder;", rv, av)); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","toString","()Ljava/lang/String;", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$20(Ljava/lang/Void;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("squeek/appleskin/shadowed/blue/endless/jankson/JsonNull","INSTANCE","Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonNull;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$19(Ljava/lang/Object;)Ljava/lang/Boolean;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Boolean")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Boolean")); pc = 5; continue;
    case 5:
      __pc = 5;
      pc = undefined; continue;
    case 6:
      __pc = 6;
      s.push(null); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$18(Ljava/lang/Object;)Ljava/lang/Double;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Number","doubleValue","()D", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(null); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$17(Ljava/lang/Object;)Ljava/lang/Float;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop();
      throw __ctx.toError(("java.lang.Number.floatValue") + ' needs the client internals');
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Float","valueOf","(F)Ljava/lang/Float;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(null); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$16(Ljava/lang/Object;)Ljava/lang/Long;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop();
      throw __ctx.toError(("java.lang.Number.longValue") + ' needs the client internals');
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Long","valueOf","(J)Ljava/lang/Long;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(null); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$15(Ljava/lang/Object;)Ljava/lang/Integer;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Number","intValue","()I", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(null); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$14(Ljava/lang/Object;)Ljava/lang/Short;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop();
      throw __ctx.toError(("java.lang.Number.shortValue") + ' needs the client internals');
    case 6:
      __pc = 6;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Short.valueOf") + ' needs the client internals');
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(null); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$13(Ljava/lang/Object;)Ljava/lang/Character;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop();
      throw __ctx.toError(("java.lang.Number.shortValue") + ' needs the client internals');
    case 6:
      __pc = 6;
      s.push(s.pop() | 0); pc = 7; continue;
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Object","toString","()Ljava/lang/String;", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(0); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/String","charAt","(I)C", rv, av)); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Character","valueOf","(C)Ljava/lang/Character;", av)); pc = 13; continue;
    case 13:
      __pc = 13;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$12(Ljava/lang/Object;)Ljava/lang/Byte;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop();
      throw __ctx.toError(("java.lang.Number.byteValue") + ' needs the client internals');
    case 6:
      __pc = 6;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Byte.valueOf") + ' needs the client internals');
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(null); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$11(Ljava/lang/Object;)Ljava/lang/Void;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(null); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$10(Ljava/lang/Object;)Ljava/lang/Boolean;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Boolean")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Boolean")); pc = 5; continue;
    case 5:
      __pc = 5;
      pc = undefined; continue;
    case 6:
      __pc = 6;
      s.push(null); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$9(Ljava/lang/Object;)Ljava/lang/Double;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Number","doubleValue","()D", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(null); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$8(Ljava/lang/Object;)Ljava/lang/Float;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop();
      throw __ctx.toError(("java.lang.Number.floatValue") + ' needs the client internals');
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Float","valueOf","(F)Ljava/lang/Float;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(null); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$7(Ljava/lang/Object;)Ljava/lang/Long;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop();
      throw __ctx.toError(("java.lang.Number.longValue") + ' needs the client internals');
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Long","valueOf","(J)Ljava/lang/Long;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(null); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$6(Ljava/lang/Object;)Ljava/lang/Integer;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Number","intValue","()I", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(null); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$5(Ljava/lang/Object;)Ljava/lang/Short;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop();
      throw __ctx.toError(("java.lang.Number.shortValue") + ' needs the client internals');
    case 6:
      __pc = 6;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Short.valueOf") + ' needs the client internals');
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(null); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$4(Ljava/lang/Object;)Ljava/lang/Character;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop();
      throw __ctx.toError(("java.lang.Number.shortValue") + ' needs the client internals');
    case 6:
      __pc = 6;
      s.push(s.pop() | 0); pc = 7; continue;
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Object","toString","()Ljava/lang/String;", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(0); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/String","charAt","(I)C", rv, av)); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Character","valueOf","(C)Ljava/lang/Character;", av)); pc = 13; continue;
    case 13:
      __pc = 13;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$3(Ljava/lang/Object;)Ljava/lang/Byte;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop();
      throw __ctx.toError(("java.lang.Number.byteValue") + ' needs the client internals');
    case 6:
      __pc = 6;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Byte.valueOf") + ' needs the client internals');
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(null); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$2(Ljava/lang/Object;)Ljava/lang/String;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Object","toString","()Ljava/lang/String;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$1(Ljava/lang/Object;)Ljava/lang/Void;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(null); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerSerializer$0(Ljava/util/function/Function;Ljava/lang/Object;Lsqueek/appleskin/shadowed/blue/endless/jankson/api/Marshaller;)Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __args[0];
    l1 = __args[1];
    l2 = __args[2];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/function/Function","apply","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "squeek/appleskin/shadowed/blue/endless/jankson/JsonElement")); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl"].__fields = [{"name":"INSTANCE","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/impl/MarshallerImpl;"},{"name":"primitiveMarshallers","descriptor":"Ljava/util/Map;"},{"name":"typeAdapters","descriptor":"Ljava/util/Map;"},{"name":"serializers","descriptor":"Ljava/util/Map;"},{"name":"deserializers","descriptor":"Ljava/util/Map;"},{"name":"typeFactories","descriptor":"Ljava/util/Map;"}];
  defineClass("squeek/appleskin/shadowed/blue/endless/jankson/impl/ObjectParserContext", {
    "<init>(Z)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.newInstance("squeek/appleskin/shadowed/blue/endless/jankson/JsonObject")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      __ctx.invoke("squeek/appleskin/shadowed/blue/endless/jankson/JsonObject","<init>","()V", rv, []); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/impl/ObjectParserContext","result","Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonObject;",target, r); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(0); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/impl/ObjectParserContext","openBraceFound","Z",target, r); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(0); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/impl/ObjectParserContext","noOpenBrace","Z",target, r); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(0); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/impl/ObjectParserContext","colonFound","Z",target, r); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l0); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(0); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/impl/ObjectParserContext","closeBraceFound","Z",target, r); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l0); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(0); pc = 21; continue;
    case 21:
      __pc = 21;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/impl/ObjectParserContext","eof","Z",target, r); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l0); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l1); pc = 24; continue;
    case 24:
      __pc = 24;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("squeek/appleskin/shadowed/blue/endless/jankson/impl/ObjectParserContext","assumeOpen","Z",target, r); pc = 25; continue;
    case 25:
      __pc = 25;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["squeek/appleskin/shadowed/blue/endless/jankson/impl/ObjectParserContext"].__fields = [{"name":"result","descriptor":"Lsqueek/appleskin/shadowed/blue/endless/jankson/JsonObject;"},{"name":"assumeOpen","descriptor":"Z"},{"name":"comment","descriptor":"Ljava/lang/String;"},{"name":"openBraceFound","descriptor":"Z"},{"name":"noOpenBrace","descriptor":"Z"},{"name":"key","descriptor":"Ljava/lang/String;"},{"name":"colonFound","descriptor":"Z"},{"name":"closeBraceFound","descriptor":"Z"},{"name":"eof","descriptor":"Z"}];
  function makeContext(api, mod) {
    var ctx = {
      invoke: function (owner, name, desc, self, args) { return call(owner, name, desc, self, args, false); },
      invokeStatic: function (owner, name, desc, args) { return call(owner, name, desc, null, args, true); },
      getField: function (owner, name, desc, self) {
        if (self && name in self) { return self[name]; }
        if (self && self.__fields) { var f = self.__fields.filter(function (x) { return x.name === name; })[0]; if (f) { return self[name]; } }
        return api.internals ? api.internals.getField(owner, name, desc, self) : undefined;
      },
      putField: function (owner, name, desc, self, value) {
        if (self) { self[name] = value; return; }
        if (api.internals) { api.internals.putField(owner, name, desc, self, value); }
      },
      getStatic: function (owner, name, desc) { return STATICS[owner + '.' + name] !== undefined ? STATICS[owner + '.' + name] : (api.internals ? api.internals.getStatic(owner, name, desc) : undefined); },
      putStatic: function (owner, name, desc, value) { STATICS[owner + '.' + name] = value; },
      newInstance: function (owner) { var instance = Object.create(null); instance.__class = owner; instance.__fields = FIELD_DEFAULTS[owner] || []; return instance; },
      cast: function (value, type) { return value; },
      isInstance: function (value, type) { return value != null; },
      toError: function (value) { return value instanceof Error ? value : new Error(String(value)); },
      unsupportedCall: function (label) {
        var fn = function () { throw new Error('webmc-transpiler: ' + label + ' has no translation'); };
        fn.__webmcUnsupported = label;
        return fn;
      },
      unsupportedLambda: function (label) {
        var fn = function () { throw new Error('webmc-transpiler: a bootstrapped call in ' + label + ' has no translation'); };
        fn.__webmcUnsupported = label;
        return fn;
      }
    };
    var STATICS = {};
    function call(owner, name, desc, self, args, isStatic) {
      var key = name + desc;
      var lookupOwner = owner;
      var table = CLASSES[lookupOwner];
      while (table && !table[key] && SUPER[lookupOwner]) { lookupOwner = SUPER[lookupOwner]; table = CLASSES[lookupOwner]; }
      if (table && table[key]) { return table[key](ctx, self, args); }
      var native = NATIVE[owner + '.' + key];
      if (native) { return native(api, self, args); }
      var mapped = MAPPED[owner + '.' + key];
      if (mapped) { return mapped(api, self, args); }
      if (api.internals) { return isStatic ? api.internals.invokeStatic(owner, name, desc, args) : api.internals.invoke(owner, name, desc, self, args); }
      throw new Error('webmc: ' + owner.replace(/\//g, '.') + '.' + name + ' needs the client internals');
    }
    var NATIVE = {
      "java/lang/System.currentTimeMillis()J": function () { return Date.now(); },
      "java/lang/System.nanoTime()J": function () { return typeof performance !== 'undefined' && performance.now ? performance.now() * 1e6 : Date.now() * 1e6; },
      "java/lang/Math.max(DD)D": function (api, self, a) { return Math.max(a[0], a[1]); },
      "java/lang/Math.min(DD)D": function (api, self, a) { return Math.min(a[0], a[1]); },
      "java/lang/Math.max(FF)F": function (api, self, a) { return Math.max(a[0], a[1]); },
      "java/lang/Math.min(FF)F": function (api, self, a) { return Math.min(a[0], a[1]); },
      "java/lang/Math.max(II)I": function (api, self, a) { return Math.max(a[0], a[1]); },
      "java/lang/Math.min(II)I": function (api, self, a) { return Math.min(a[0], a[1]); },
      "java/lang/Math.floor(D)D": function (api, self, a) { return Math.floor(a[0]); },
      "java/lang/Math.abs(I)I": function (api, self, a) { return Math.abs(a[0]); },
      "java/lang/Math.sqrt(D)D": function (api, self, a) { return Math.sqrt(a[0]); },
      "java/lang/Math.round(D)J": function (api, self, a) { return BigInt(Math.round(a[0])); },
      "java/lang/Math.sin(D)D": function (api, self, a) { return Math.sin(a[0]); },
      "java/lang/Math.cos(D)D": function (api, self, a) { return Math.cos(a[0]); },
      "java/lang/String.length()I": function (api, self) { return String(self).length; },
      "java/lang/String.isEmpty()Z": function (api, self) { return String(self).length === 0; },
      "java/lang/String.equals(Ljava/lang/Object;)Z": function (api, self, a) { return String(self) === String(a[0]); },
      "java/lang/String.toLowerCase()Ljava/lang/String;": function (api, self) { return String(self).toLowerCase(); },
      "java/lang/String.toUpperCase()Ljava/lang/String;": function (api, self) { return String(self).toUpperCase(); },
      "java/lang/String.contains(Ljava/lang/CharSequence;)Z": function (api, self, a) { return String(self).indexOf(String(a[0])) >= 0; },
      "java/lang/String.startsWith(Ljava/lang/String;)Z": function (api, self, a) { return String(self).indexOf(String(a[0])) === 0; },
      "java/lang/String.trim()Ljava/lang/String;": function (api, self) { return String(self).trim(); },
      "java/lang/String.valueOf(Ljava/lang/Object;)Ljava/lang/String;": function (api, self, a) { return String(a[0]); },
      "java/util/List.size()I": function (api, self) { return (self && self.length) || 0; },
      "java/util/List.isEmpty()Z": function (api, self) { return !self || !self.length; },
      "java/util/List.get(I)Ljava/lang/Object;": function (api, self, a) { return self[a[0]]; },
      "java/util/List.add(Ljava/lang/Object;)Z": function (api, self, a) { self.push(a[0]); return true; },
      "java/util/List.remove(I)Ljava/lang/Object;": function (api, self, a) { return self.splice(a[0], 1)[0]; },
      "java/util/Map.get(Ljava/lang/Object;)Ljava/lang/Object;": function (api, self, a) { return self.get(a[0]); },
      "java/util/Map.put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;": function (api, self, a) { return self.set(a[0], a[1]); },
      "java/util/Map.containsKey(Ljava/lang/Object;)Z": function (api, self, a) { return self.has(a[0]); },
      "java/lang/StringBuilder.<init>()V": function (api, self) { self.__sb = []; },
      "java/lang/StringBuilder.<init>(Ljava/lang/String;)V": function (api, self, a) { self.__sb = [a[0]]; },
      "java/lang/StringBuilder.append(Ljava/lang/String;)Ljava/lang/StringBuilder;": function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; },
      "java/lang/StringBuilder.append(Ljava/lang/Object;)Ljava/lang/StringBuilder;": function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; },
      "java/lang/StringBuilder.append(I)Ljava/lang/StringBuilder;": function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; },
      "java/lang/StringBuilder.append(J)Ljava/lang/StringBuilder;": function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; },
      "java/lang/StringBuilder.append(C)Ljava/lang/StringBuilder;": function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; },
      "java/lang/StringBuilder.append(Z)Ljava/lang/StringBuilder;": function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; },
      "java/lang/StringBuilder.append(D)Ljava/lang/StringBuilder;": function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; },
      "java/lang/StringBuilder.append(F)Ljava/lang/StringBuilder;": function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; },
      "java/lang/StringBuilder.toString()Ljava/lang/String;": function (api, self) { return (self.__sb || []).join(''); },
      "java/lang/StringBuilder.length()I": function (api, self) { return (self.__sb || []).join('').length; },
      "java/lang/StringBuilder.setLength(I)V": function (api, self, a) { self.__sb = [(self.__sb || []).join('').slice(0, a[0])]; },
      "java/lang/StringBuilder.reverse()Ljava/lang/StringBuilder;": function (api, self) { self.__sb = [(self.__sb || []).join('').split('').reverse().join('')]; return self; },
      "java/lang/StringBuilder.deleteCharAt(I)Ljava/lang/StringBuilder;": function (api, self, a) { var text = (self.__sb || []).join(''); self.__sb = [text.slice(0, a[0]) + text.slice(a[0] + 1)]; return self; },
      "java/lang/Boolean.booleanValue()Z": function (api, self) { return !!self; },
      "java/lang/Boolean.valueOf(Z)Ljava/lang/Boolean;": function (api, self, a) { return !!a[0]; },
      "java/lang/Integer.intValue()I": function (api, self) { return self | 0; },
      "java/lang/Integer.valueOf(I)Ljava/lang/Integer;": function (api, self, a) { return a[0] | 0; },
      "java/lang/Double.doubleValue()D": function (api, self) { return Number(self); },
      "java/lang/Float.floatValue()F": function (api, self) { return Number(self); },
      "java/lang/Long.longValue()J": function (api, self) { return BigInt(self); },
      "java/lang/Number.intValue()I": function (api, self) { return self | 0; },
      "java/lang/Number.doubleValue()D": function (api, self) { return Number(self); },
      "java/util/List.iterator()Ljava/util/Iterator;": function (api, self) { return { __list: self || [], __i: 0 }; },
      "java/util/Collection.iterator()Ljava/util/Iterator;": function (api, self) { return { __list: self || [], __i: 0 }; },
      "java/lang/Iterable.iterator()Ljava/util/Iterator;": function (api, self) { return { __list: self || [], __i: 0 }; },
      "java/util/Iterator.hasNext()Z": function (api, self) { return !!(self && self.__list && self.__i < self.__list.length); },
      "java/util/Iterator.next()Ljava/lang/Object;": function (api, self) { return self.__list[self.__i++]; },
      "java/util/Iterator.remove()V": function (api, self) { if (self && self.__list) { self.__list.splice(--self.__i, 1); } },
      "java/util/function/Function.apply(Ljava/lang/Object;)Ljava/lang/Object;": function (api, self, a) { return self(a[0]); },
      "java/util/function/Supplier.get()Ljava/lang/Object;": function (api, self) { return self(); },
      "java/util/function/Consumer.accept(Ljava/lang/Object;)V": function (api, self, a) { self(a[0]); },
      "java/util/function/Predicate.test(Ljava/lang/Object;)Z": function (api, self, a) { return !!self(a[0]); },
      "java/util/function/BiFunction.apply(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;": function (api, self, a) { return self(a[0], a[1]); },
      "java/util/function/BiConsumer.accept(Ljava/lang/Object;Ljava/lang/Object;)V": function (api, self, a) { self(a[0], a[1]); },
      "java/util/function/BiPredicate.test(Ljava/lang/Object;Ljava/lang/Object;)Z": function (api, self, a) { return !!self(a[0], a[1]); },
      "java/util/function/BooleanSupplier.getAsBoolean()Z": function (api, self) { return !!self(); },
      "java/util/function/IntSupplier.getAsInt()I": function (api, self) { return self() | 0; },
      "java/util/function/IntFunction.apply(I)Ljava/lang/Object;": function (api, self, a) { return self(a[0]); },
      "java/util/Optional.get()Ljava/lang/Object;": function (api, self) { return self.value; },
      "java/util/Optional.isPresent()Z": function (api, self) { return self.value != null; },
      "java/util/Optional.ofNullable(Ljava/lang/Object;)Ljava/util/Optional;": function (api, self, a) { return { value: a[0] }; },
      "java/util/Optional.empty()Ljava/util/Optional;": function () { return { value: null }; },
      "java/lang/String.equalsIgnoreCase(Ljava/lang/String;)Z": function (api, self, a) { return String(self).toLowerCase() === String(a[0]).toLowerCase(); },
      "java/lang/String.indexOf(Ljava/lang/String;)I": function (api, self, a) { return String(self).indexOf(String(a[0])); },
      "java/lang/String.indexOf(I)I": function (api, self, a) { return String(self).indexOf(String.fromCodePoint(a[0])); },
      "java/lang/String.lastIndexOf(Ljava/lang/String;)I": function (api, self, a) { return String(self).lastIndexOf(String(a[0])); },
      "java/lang/String.substring(I)Ljava/lang/String;": function (api, self, a) { return String(self).slice(a[0]); },
      "java/lang/String.substring(II)Ljava/lang/String;": function (api, self, a) { return String(self).slice(a[0], a[1]); },
      "java/lang/String.charAt(I)C": function (api, self, a) { return String(self).charCodeAt(a[0]); },
      "java/lang/String.split(Ljava/lang/String;)[Ljava/lang/String;": function (api, self, a) { return String(self).split(String(a[0])); },
      "java/lang/String.replace(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Ljava/lang/String;": function (api, self, a) { return String(self).split(String(a[0])).join(String(a[1])); },
      "java/lang/String.replaceAll(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;": function (api, self, a) { return String(self).split(String(a[0])).join(String(a[1])); },
      "java/lang/String.concat(Ljava/lang/String;)Ljava/lang/String;": function (api, self, a) { return String(self) + String(a[0]); },
      "java/lang/String.toString()Ljava/lang/String;": function (api, self) { return String(self); },
      "java/lang/String.hashCode()I": function (api, self) { var h = 0, t = String(self); for (var i = 0; i < t.length; i++) { h = (h * 31 + t.charCodeAt(i)) | 0; } return h; },
      "java/lang/String.compareTo(Ljava/lang/String;)I": function (api, self, a) { return String(self) < String(a[0]) ? -1 : (String(self) > String(a[0]) ? 1 : 0); },
      "java/lang/String.valueOf(I)Ljava/lang/String;": function (api, self, a) { return String(a[0]); },
      "java/lang/String.format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;": function (api, self, a) { var i = 0; return String(a[0]).replace(/%[sdf]/g, function () { return String(a[1][i++]); }); },
      "java/lang/Object.equals(Ljava/lang/Object;)Z": function (api, self, a) { return self === a[0]; },
      "java/lang/Object.getClass()Ljava/lang/Class;": function (api, self) { return self && self.__class ? self.__class : 'java/lang/Object'; },
      "java/lang/Class.getName()Ljava/lang/String;": function (api, self) { return String(self).replace(/\//g, '.'); },
      "java/lang/Class.getSimpleName()Ljava/lang/String;": function (api, self) { return String(self).split('/').pop().split('$').pop(); },
      "java/lang/Class.cast(Ljava/lang/Object;)Ljava/lang/Object;": function (api, self, a) { return a[0]; },
      "java/lang/Class.isInstance(Ljava/lang/Object;)Z": function (api, self, a) { return a[0] != null; },
      "java/lang/Enum.name()Ljava/lang/String;": function (api, self) { return String(self && self.__name || self); },
      "java/lang/Enum.ordinal()I": function (api, self) { return (self && self.__ordinal) | 0; },
      "java/lang/Enum.toString()Ljava/lang/String;": function (api, self) { return String(self && self.__name || self); },
      "java/util/ArrayList.<init>()V": function (api, self) { self.__list = []; },
      "java/util/ArrayList.<init>(I)V": function (api, self) { self.__list = []; },
      "java/util/ArrayList.<init>(Ljava/util/Collection;)V": function (api, self, a) { self.__list = (a[0] && a[0].__list ? a[0].__list : a[0] || []).slice(); },
      "java/util/ArrayList.add(Ljava/lang/Object;)Z": function (api, self, a) { (self.__list = self.__list || []).push(a[0]); return true; },
      "java/util/ArrayList.get(I)Ljava/lang/Object;": function (api, self, a) { return (self.__list || [])[a[0]]; },
      "java/util/ArrayList.size()I": function (api, self) { return (self.__list || []).length; },
      "java/util/ArrayList.isEmpty()Z": function (api, self) { return !(self.__list || []).length; },
      "java/util/ArrayList.remove(I)Ljava/lang/Object;": function (api, self, a) { return (self.__list || []).splice(a[0], 1)[0]; },
      "java/util/ArrayList.remove(Ljava/lang/Object;)Z": function (api, self, a) { var list = self.__list || []; var i = list.indexOf(a[0]); if (i < 0) { return false; } list.splice(i, 1); return true; },
      "java/util/ArrayList.contains(Ljava/lang/Object;)Z": function (api, self, a) { return (self.__list || []).indexOf(a[0]) >= 0; },
      "java/util/ArrayList.clear()V": function (api, self) { self.__list = []; },
      "java/util/ArrayList.iterator()Ljava/util/Iterator;": function (api, self) { return { __list: self.__list || [], __i: 0 }; },
      "java/util/ArrayList.toArray([Ljava/lang/Object;)[Ljava/lang/Object;": function (api, self) { return (self.__list || []).slice(); },
      "java/util/HashMap.<init>()V": function (api, self) { self.__map = new Map(); },
      "java/util/HashMap.put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;": function (api, self, a) { var m = self.__map = self.__map || new Map(); var old = m.get(a[0]); m.set(a[0], a[1]); return old === undefined ? null : old; },
      "java/util/HashMap.get(Ljava/lang/Object;)Ljava/lang/Object;": function (api, self, a) { return (self.__map || new Map()).get(a[0]) ?? null; },
      "java/util/HashMap.remove(Ljava/lang/Object;)Ljava/lang/Object;": function (api, self, a) { return (self.__map || new Map()).get(a[0]) ?? null; },
      "java/util/HashMap.containsKey(Ljava/lang/Object;)Z": function (api, self, a) { return (self.__map || new Map()).has(a[0]); },
      "java/util/HashMap.size()I": function (api, self) { return (self.__map || new Map()).size; },
      "java/util/HashMap.isEmpty()Z": function (api, self) { return (self.__map || new Map()).size === 0; },
      "java/util/HashMap.clear()V": function (api, self) { self.__map = new Map(); },
      "java/util/HashSet.<init>()V": function (api, self) { self.__set = new Set(); },
      "java/util/Set.add(Ljava/lang/Object;)Z": function (api, self, a) { var s = self.__set = self.__set || new Set(); var had = s.has(a[0]); s.add(a[0]); return !had; },
      "java/util/Set.contains(Ljava/lang/Object;)Z": function (api, self, a) { return (self.__set || new Set()).has(a[0]); },
      "java/util/Set.remove(Ljava/lang/Object;)Z": function (api, self, a) { return (self.__set || new Set()).delete(a[0]); },
      "java/util/Set.size()I": function (api, self) { return (self.__set || new Set()).size; },
      "java/util/Collection.isEmpty()Z": function (api, self) { return !self || !self.length; },
      "java/util/Collections.unmodifiableList(Ljava/util/List;)Ljava/util/List;": function (api, self, a) { return a[0]; },
      "java/util/Collections.emptyList()Ljava/util/List;": function () { return []; },
      "java/util/Collections.singletonList(Ljava/lang/Object;)Ljava/util/List;": function (api, self, a) { return [a[0]]; },
      "java/util/Arrays.asList([Ljava/lang/Object;)Ljava/util/List;": function (api, self, a) { return a[0] || []; },
      "java/util/Optional.of(Ljava/lang/Object;)Ljava/util/Optional;": function (api, self, a) { return { value: a[0] }; },
      "java/util/Optional.orElse(Ljava/lang/Object;)Ljava/lang/Object;": function (api, self, a) { return self.value != null ? self.value : a[0]; },
      "java/util/Optional.orElseGet(Ljava/util/function/Supplier;)Ljava/lang/Object;": function (api, self, a) { return self.value != null ? self.value : a[0](); },
      "java/util/Optional.map(Ljava/util/function/Function;)Ljava/util/Optional;": function (api, self, a) { return { value: self.value == null ? null : a[0](self.value) }; },
      "java/util/Optional.ifPresent(Ljava/util/function/Consumer;)V": function (api, self, a) { if (self.value != null) { a[0](self.value); } },
      "java/lang/Math.ceil(D)D": function (api, self, a) { return Math.ceil(a[0]); },
      "java/lang/Math.pow(DD)D": function (api, self, a) { return Math.pow(a[0], a[1]); },
      "java/lang/Math.atan2(DD)D": function (api, self, a) { return Math.atan2(a[0], a[1]); },
      "java/lang/Math.toRadians(D)D": function (api, self, a) { return a[0] * Math.PI / 180; },
      "java/lang/Math.toDegrees(D)D": function (api, self, a) { return a[0] * 180 / Math.PI; },
      "java/lang/System.getProperty(Ljava/lang/String;)Ljava/lang/String;": function (api, self, a) { return ''; },
      "java/lang/System.arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V": function (api, self, a) { var src = a[0], srcPos = a[1], dst = a[2], dstPos = a[3], len = a[4]; for (var i = 0; i < len; i++) { dst[dstPos + i] = src[srcPos + i]; } },
      "java/lang/Iterable.forEach(Ljava/util/function/Consumer;)V": function (api, self, a) { (self || []).forEach(function (item) { a[0](item); }); },
      "org/spongepowered/asm/mixin/injection/invoke/arg/Args.get(I)Ljava/lang/Object;": function (api, self, a) { return self.__args[a[0]]; },
      "org/spongepowered/asm/mixin/injection/invoke/arg/Args.set(ILjava/lang/Object;)V": function (api, self, a) { self.__args[a[0]] = a[1]; },
      "org/spongepowered/asm/mixin/injection/invoke/arg/Args.size()I": function (api, self) { return (self.__args || []).length; },
      "org/spongepowered/asm/mixin/injection/invoke/arg/Args.getAll()Ljava/util/List;": function (api, self) { return (self.__args || []).slice(); },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfo.isCancellable()Z": function (api, self) { return !!self.cancellable; },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfo.cancel()V": function (api, self) { self.cancelled = true; },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfo.isCancelled()Z": function (api, self) { return !!self.cancelled; },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.isCancellable()Z": function (api, self) { return !!self.cancellable; },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.cancel()V": function (api, self) { self.cancelled = true; },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.isCancelled()Z": function (api, self) { return !!self.cancelled; },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.getReturnValue()Ljava/lang/Object;": function (api, self) { return self.returnValue; },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.getReturnValueI()I": function (api, self) { return self.returnValue | 0; },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.getReturnValueZ()Z": function (api, self) { return !!self.returnValue; },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.getReturnValueD()D": function (api, self) { return Number(self.returnValue); },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.setReturnValue(Ljava/lang/Object;)V": function (api, self, a) { self.returnValue = a[0]; },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.setReturnValue(I)V": function (api, self, a) { self.returnValue = a[0]; },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.setReturnValue(Z)V": function (api, self, a) { self.returnValue = a[0]; },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.setReturnValue(D)V": function (api, self, a) { self.returnValue = a[0]; },
      "org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.setReturnValue(F)V": function (api, self, a) { self.returnValue = a[0]; },
      "java/lang/Record.<init>()V": function () {},
      "java/lang/Object.<clinit>()V": function () {},
      "java/lang/StringBuilder.<init>(Ljava/lang/CharSequence;)V": function (api, self, a) { self.__sb = [String(a[0])]; },
      "java/lang/IllegalArgumentException.<init>()V": function (api, self) { self.__webmcError = 'IllegalArgumentException'; self.message = ''; },
      "java/lang/IllegalArgumentException.<init>(Ljava/lang/String;)V": function (api, self, a) { self.__webmcError = 'IllegalArgumentException'; self.message = a[0] == null ? '' : String(a[0]); },
      "java/lang/IllegalStateException.<init>()V": function (api, self) { self.__webmcError = 'IllegalStateException'; self.message = ''; },
      "java/lang/IllegalStateException.<init>(Ljava/lang/String;)V": function (api, self, a) { self.__webmcError = 'IllegalStateException'; self.message = a[0] == null ? '' : String(a[0]); },
      "java/lang/RuntimeException.<init>()V": function (api, self) { self.__webmcError = 'RuntimeException'; self.message = ''; },
      "java/lang/RuntimeException.<init>(Ljava/lang/String;)V": function (api, self, a) { self.__webmcError = 'RuntimeException'; self.message = a[0] == null ? '' : String(a[0]); },
      "java/lang/UnsupportedOperationException.<init>()V": function (api, self) { self.__webmcError = 'UnsupportedOperationException'; self.message = ''; },
      "java/lang/UnsupportedOperationException.<init>(Ljava/lang/String;)V": function (api, self, a) { self.__webmcError = 'UnsupportedOperationException'; self.message = a[0] == null ? '' : String(a[0]); },
      "java/lang/AssertionError.<init>()V": function (api, self) { self.__webmcError = 'AssertionError'; self.message = ''; },
      "java/lang/AssertionError.<init>(Ljava/lang/Object;)V": function (api, self, a) { self.__webmcError = 'AssertionError'; self.message = String(a[0]); },
      "java/lang/NullPointerException.<init>()V": function (api, self) { self.__webmcError = 'NullPointerException'; self.message = ''; },
      "java/lang/NullPointerException.<init>(Ljava/lang/String;)V": function (api, self, a) { self.__webmcError = 'NullPointerException'; self.message = a[0] == null ? '' : String(a[0]); },
      "java/lang/Error.<init>(Ljava/lang/String;)V": function (api, self, a) { self.__webmcError = 'Error'; self.message = String(a[0]); },
      "java/lang/Throwable.getMessage()Ljava/lang/String;": function (api, self) { return self && self.message != null ? self.message : null; },
      "java/lang/Throwable.getCause()Ljava/lang/Throwable;": function (api, self) { return self ? (self.cause || null) : null; },
      "java/lang/Throwable.fillInStackTrace()Ljava/lang/Throwable;": function (api, self) { return self; },
      "java/lang/Throwable.printStackTrace()V": function (api, self) { api.log(String(self && self.message || self)); },
      "java/util/Objects.requireNonNull(Ljava/lang/Object;Ljava/lang/String;)Ljava/lang/Object;": function (api, self, a) { if (a[0] == null) { throw new Error(a[1] == null ? 'null' : String(a[1])); } return a[0]; },
      "java/util/Objects.requireNonNull(Ljava/lang/Object;Ljava/util/function/Supplier;)Ljava/lang/Object;": function (api, self, a) { if (a[0] == null) { throw new Error(a[1] ? String(a[1]()) : 'null'); } return a[0]; },
      "java/util/Objects.isNull(Ljava/lang/Object;)Z": function (api, self, a) { return a[0] == null; },
      "java/util/Objects.nonNull(Ljava/lang/Object;)Z": function (api, self, a) { return a[0] != null; },
      "java/util/Objects.toString(Ljava/lang/Object;)Ljava/lang/String;": function (api, self, a) { return String(a[0]); },
      "java/util/Objects.hash([Ljava/lang/Object;)I": function (api, self, a) { var h = 0; (a[0] || []).forEach(function (v) { h = (h * 31 + String(v).length) | 0; }); return h; },
      "java/util/List.contains(Ljava/lang/Object;)Z": function (api, self, a) { return (self || []).indexOf(a[0]) >= 0; },
      "java/util/List.indexOf(Ljava/lang/Object;)I": function (api, self, a) { return (self || []).indexOf(a[0]); },
      "java/util/List.clear()V": function (api, self) { if (self && self.length) { self.length = 0; } else if (self) { self.__list = []; } },
      "java/util/List.addAll(Ljava/util/Collection;)Z": function (api, self, a) { var src = a[0] && a[0].__list ? a[0].__list : (a[0] || []); for (var i = 0; i < src.length; i++) { self.push(src[i]); } return src.length > 0; },
      "java/util/List.add(I)V": function (api, self, a) { (self.__list = self.__list || []).push(a[0]); },
      "java/util/List.of([Ljava/lang/Object;)Ljava/util/List;": function (api, self, a) { return Array.prototype.slice.call(a[0] || []); },
      "java/util/List.copyOf(Ljava/util/Collection;)Ljava/util/List;": function (api, self, a) { return Array.prototype.slice.call(a[0] || []); },
      "java/util/List.remove(Ljava/lang/Object;)Z": function (api, self, a) { var i = (self || []).indexOf(a[0]); if (i < 0) { return false; } self.splice(i, 1); return true; },
      "java/util/Set.iterator()Ljava/util/Iterator;": function (api, self) { return { __list: Array.from(self || []), __i: 0 }; },
      "java/util/Set.isEmpty()Z": function (api, self) { return !self || !self.length; },
      "java/util/Collection.size()I": function (api, self) { return (self && self.length) || 0; },
      "java/util/Collection.contains(Ljava/lang/Object;)Z": function (api, self, a) { return (self || []).indexOf(a[0]) >= 0; },
      "java/util/Collection.add(Ljava/lang/Object;)Z": function (api, self, a) { self.push(a[0]); return true; },
      "java/util/Map.isEmpty()Z": function (api, self) { return !self || self.size === 0; },
      "java/util/Map.clear()V": function (api, self) { if (self && self.clear) { self.clear(); } },
      "java/util/Map.computeIfAbsent(Ljava/lang/Object;Ljava/util/function/Function;)Ljava/lang/Object;": function (api, self, a) { var current = self.get(a[0]); if (current == null) { current = a[1](a[0]); self.set(a[0], current); } return current; },
      "java/util/Map.values()Ljava/util/Collection;": function (api, self) { return self ? Array.from(self.values()) : []; },
      "java/util/Map.keySet()Ljava/util/Set;": function (api, self) { return self ? Array.from(self.keys()) : []; },
      "java/util/Map.entrySet()Ljava/util/Set;": function (api, self) { var out = []; if (self) { self.forEach(function (v, k) { out.push({ key: k, value: v, getKey: function () { return k; }, getValue: function () { return v; } }); }); } return out; },
      "java/util/Map.forEach(Ljava/util/function/BiConsumer;)V": function (api, self, a) { if (self) { self.forEach(function (v, k) { a[0](k, v); }); } },
      "java/lang/Double.valueOf(D)Ljava/lang/Double;": function (api, self, a) { return Number(a[0]); },
      "java/lang/Float.valueOf(F)Ljava/lang/Float;": function (api, self, a) { return Number(a[0]); },
      "java/lang/Long.valueOf(J)Ljava/lang/Long;": function (api, self, a) { return Number(a[0]); },
      "java/lang/Character.valueOf(C)Ljava/lang/Character;": function (api, self, a) { return a[0]; },
      "java/lang/Character.toString(C)Ljava/lang/String;": function (api, self, a) { return String.fromCharCode(a[0]); },
      "java/lang/Integer.toString(I)Ljava/lang/String;": function (api, self, a) { return String(a[0]); },
      "java/lang/Double.toString(D)Ljava/lang/String;": function (api, self, a) { return String(a[0]); },
      "java/lang/String.valueOf(D)Ljava/lang/String;": function (api, self, a) { return String(a[0]); },
      "java/lang/String.valueOf(J)Ljava/lang/String;": function (api, self, a) { return String(a[0]); },
      "java/lang/String.valueOf(C)Ljava/lang/String;": function (api, self, a) { return String.fromCharCode(a[0]); },
      "java/lang/String.valueOf(Z)Ljava/lang/String;": function (api, self, a) { return String(a[0]); },
      "java/lang/String.formatted([Ljava/lang/Object;)Ljava/lang/String;": function (api, self, a) { var i = 0; return String(self).replace(/%[sdf]/g, function () { return String((a[0] || [])[i++]); }); },
      "java/lang/String.strip()Ljava/lang/String;": function (api, self) { return String(self).trim(); },
      "java/lang/String.isBlank()Z": function (api, self) { return String(self).trim().length === 0; },
      "java/lang/String.repeat(I)Ljava/lang/String;": function (api, self, a) { return String(self).repeat(Math.max(0, a[0] | 0)); },
      "java/lang/String.toCharArray()[C": function (api, self) { var t = String(self); var out = []; for (var i = 0; i < t.length; i++) { out.push(t.charCodeAt(i)); } return out; },
      "java/lang/String.getBytes()[B": function (api, self) { var t = String(self); var out = []; for (var i = 0; i < t.length; i++) { out.push(t.charCodeAt(i) & 0xff); } return out; },
      "java/lang/Math.random()D": function () { return Math.random(); },
      "java/lang/Math.signum(F)F": function (api, self, a) { return Math.sign(a[0]); },
      "java/lang/Math.hypot(DD)D": function (api, self, a) { return Math.hypot(a[0], a[1]); },
      "java/util/Arrays.stream([Ljava/lang/Object;)Ljava/util/stream/Stream;": function (api, self, a) { return a[0] || []; },
      "java/util/List.stream()Ljava/util/stream/Stream;": function (api, self) { return self || []; },
      "java/util/Collection.stream()Ljava/util/stream/Stream;": function (api, self) { return self || []; },
      "java/util/stream/Stream.map(Ljava/util/function/Function;)Ljava/util/stream/Stream;": function (api, self, a) { return (self || []).map(function (v) { return a[0](v); }); },
      "java/util/stream/Stream.filter(Ljava/util/function/Predicate;)Ljava/util/stream/Stream;": function (api, self, a) { return (self || []).filter(function (v) { return a[0](v); }); },
      "java/util/stream/Stream.forEach(Ljava/util/function/Consumer;)V": function (api, self, a) { (self || []).forEach(function (v) { a[0](v); }); },
      "java/util/stream/Stream.toList()Ljava/util/List;": function (api, self) { return (self || []).slice(); },
      "java/util/stream/Stream.count()J": function (api, self) { return (self || []).length; },
      "java/util/stream/Stream.findFirst()Ljava/util/Optional;": function (api, self) { return { value: (self || [])[0] == null ? null : (self || [])[0] }; },
      "java/util/stream/Collectors.toList()Ljava/util/stream/Collector;": function () { return null; },
      "java/util/Arrays.copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;": function (api, self, a) { var src = a[0] || []; var out = src.slice(0, a[1]); while (out.length < a[1]) { out.push(null); } return out; },
      "java/lang/System.exit(I)V": function (api) { api.log('the mod called System.exit; ignored'); },
      "java/lang/Thread.currentThread()Ljava/lang/Thread;": function () { return {}; },
      "java/lang/Thread.sleep(J)V": function () {},
      "java/lang/Object.<init>()V": function () {},
      "java/lang/Object.toString()Ljava/lang/String;": function (api, self) { return String(self); },
      "java/lang/Object.hashCode()I": function (api, self) { return 0; },
      "java/lang/Objects.requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;": function (api, self, a) { if (a[0] == null) { throw new Error('null'); } return a[0]; },
      "java/lang/Objects.equals(Ljava/lang/Object;Ljava/lang/Object;)Z": function (api, self, a) { return a[0] === a[1]; },
      "java/lang/Integer.parseInt(Ljava/lang/String;)I": function (api, self, a) { return parseInt(String(a[0]), 10) | 0; },
      "java/lang/Double.parseDouble(Ljava/lang/String;)D": function (api, self, a) { return Number(a[0]); },
      "java/lang/Boolean.parseBoolean(Ljava/lang/String;)Z": function (api, self, a) { return String(a[0]) === 'true'; },
      "org/slf4j/Logger.info(Ljava/lang/String;)V": function (api, self, a) { api.log(a[0]); },
      "org/slf4j/Logger.warn(Ljava/lang/String;)V": function (api, self, a) { api.log('warn: ' + a[0]); },
      "org/slf4j/Logger.error(Ljava/lang/String;)V": function (api, self, a) { api.log('error: ' + a[0]); },
      "java/io/PrintStream.println(Ljava/lang/String;)V": function (api, self, a) { api.log(a[0]); }
    };
    var MAPPED = {
      "net/minecraft/client/network/ClientPlayerEntity.getX()D": function (api) { return pos(api, 'x'); },
      "net/minecraft/client/network/ClientPlayerEntity.getY()D": function (api) { return pos(api, 'y'); },
      "net/minecraft/client/network/ClientPlayerEntity.getZ()D": function (api) { return pos(api, 'z'); },
      "net/minecraft/client/network/ClientPlayerEntity.getYaw()F": function (api) { return pos(api, 'yaw'); },
      "net/minecraft/client/network/ClientPlayerEntity.getPitch()F": function (api) { return pos(api, 'pitch'); },
      "net/minecraft/client/network/ClientPlayerEntity.isOnGround()Z": function (api) { return pos(api, 'onGround'); },
      "net/minecraft/entity/player/PlayerEntity.getX()D": function (api) { return pos(api, 'x'); },
      "net/minecraft/entity/player/PlayerEntity.getY()D": function (api) { return pos(api, 'y'); },
      "net/minecraft/entity/player/PlayerEntity.getZ()D": function (api) { return pos(api, 'z'); }
    };
    function pos(api2, field) {
      var snapshot = api2.player && api2.player.snapshot ? api2.player.snapshot() : null;
      if (!snapshot || !snapshot.position) { return 0; }
      if (field === 'yaw' || field === 'pitch') { return snapshot[field] || 0; }
      if (field === 'onGround') { return snapshot.onGround === true; }
      return snapshot.position[field] != null ? snapshot.position[field] : 0;
    }
    return ctx;
  }
  var mod = webmc.defineMod({
    "id": "appleskin",
    "name": "AppleSkin",
    "version": "3.0.8+mc1.21.11",
    "authors": [
      "squeek502"
    ],
    "description": "Converted from a Fabric mod (Adds various food-related HUD improvements)",
    "capabilities": [
      "hud",
      "input",
      "commands",
      "storage",
      "settings",
      "modules",
      "player.read",
      "world.read",
      "camera.read",
      "chat.write",
      "internals"
    ]
  });
  mod.on("init", function (api) {
    var RT = {
      ctx: makeContext(api, mod),
      warned: {},
      method: function (owner, key, self, args) { var fn = CLASSES[owner] && CLASSES[owner][key]; if (!fn) { throw new Error('webmc-transpiler: ' + owner.replace(/\//g, '.') + '.' + key + ' is not translated'); } return fn(RT.ctx, self, Array.prototype.slice.call(args)); },
      unsupported: function (error, key) {
        if (RT.warned[key]) { return; }
        RT.warned[key] = true;
        var message = error && error.message ? error.message : String(error);
        api.log('this part of the converted mod needs the client internals: ' + key + ' — ' + message);
        if (mod.api && mod.api.hud) { mod.api.hud.message('Converted mod: a part needs the client internals (logged once)', { color: '#fca5a5', ttl: 5000 }); }
      }
    };
    var inst_squeek_appleskin_AppleSkin = { __class: "squeek/appleskin/AppleSkin", __fields: FIELD_DEFAULTS["squeek/appleskin/AppleSkin"] || [] };
    /* entrypoint: client squeek/appleskin/AppleSkin.onInitializeClient */
    try {
      RT.method("squeek/appleskin/AppleSkin", "onInitializeClient()V", inst_squeek_appleskin_AppleSkin, []);
    } catch (error) { RT.unsupported(error, "squeek/appleskin/AppleSkin.onInitializeClient"); }
    var inst_squeek_appleskin_AppleSkinCommon = { __class: "squeek/appleskin/AppleSkinCommon", __fields: FIELD_DEFAULTS["squeek/appleskin/AppleSkinCommon"] || [] };
    /* entrypoint: main squeek/appleskin/AppleSkinCommon.onInitialize */
    try {
      RT.method("squeek/appleskin/AppleSkinCommon", "onInitialize()V", inst_squeek_appleskin_AppleSkinCommon, []);
    } catch (error) { RT.unsupported(error, "squeek/appleskin/AppleSkinCommon.onInitialize"); }
    if (webmc.patches) {
      webmc.patches.add({
        modId: "appleskin", mixin: "squeek/appleskin/mixin/InGameHudMixin",
        targets: ["net/minecraft/client/gui/Gui"], environment: "unknown",
        injections: [
          { method: ["renderFood"], handler: "renderFoodPre", kind: "inject", at: [{"value":"HEAD","ordinal":null,"index":null,"target":null,"callee":null}], cancellable: false,
            run: function (target, args, info) { return RT.method("squeek/appleskin/mixin/InGameHudMixin", "renderFoodPre(Lnet/minecraft/class_332;Lnet/minecraft/class_1657;IILorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
          { method: ["renderFood"], handler: "renderFoodPost", kind: "inject", at: [{"value":"RETURN","ordinal":null,"index":null,"target":null,"callee":null}], cancellable: false,
            run: function (target, args, info) { return RT.method("squeek/appleskin/mixin/InGameHudMixin", "renderFoodPost(Lnet/minecraft/class_332;Lnet/minecraft/class_1657;IILorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
          { method: ["renderHearts"], handler: "renderHealthPost", kind: "inject", at: [{"value":"RETURN","ordinal":null,"index":null,"target":null,"callee":null}], cancellable: false,
            run: function (target, args, info) { return RT.method("squeek/appleskin/mixin/InGameHudMixin", "renderHealthPost(Lnet/minecraft/class_332;Lnet/minecraft/class_1657;IIIIFIIIZLorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "appleskin", mixin: "squeek/appleskin/mixin/ItemStackMixin",
        targets: ["net/minecraft/world/item/ItemStack"], environment: "unknown",
        injections: [
          { method: ["getTooltipLines"], handler: "getTooltipFromItem", kind: "inject", at: [{"value":"RETURN","ordinal":null,"index":null,"target":null,"callee":null}], cancellable: false,
            run: function (target, args, info) { return RT.method("squeek/appleskin/mixin/ItemStackMixin", "getTooltipFromItem(Lnet/minecraft/class_1792$class_9635;Lnet/minecraft/class_1657;Lnet/minecraft/class_1836;Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "appleskin", mixin: "squeek/appleskin/mixin/JEIRenderHelperMixin",
        targets: ["mezz/jei/fabric/platform/RenderHelper"], environment: "unknown",
        injections: [
          { method: ["renderTooltip"], handler: "renderFoodPre", kind: "inject", at: [{"value":"HEAD","ordinal":null,"index":null,"target":null,"callee":null}], cancellable: false,
            run: function (target, args, info) { return RT.method("squeek/appleskin/mixin/JEIRenderHelperMixin", "renderFoodPre(Lnet/minecraft/class_332;Ljava/util/List;IILnet/minecraft/class_327;Lnet/minecraft/class_1799;Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "appleskin", mixin: "squeek/appleskin/mixin/MinecraftClientMixin",
        targets: ["net/minecraft/client/Minecraft"], environment: "unknown",
        injections: [
          { method: ["tick"], handler: "onTick", kind: "inject", at: [{"value":"HEAD","ordinal":null,"index":null,"target":null,"callee":null}], cancellable: false,
            run: function (target, args, info) { return RT.method("squeek/appleskin/mixin/MinecraftClientMixin", "onTick(Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "appleskin", mixin: "squeek/appleskin/mixin/PlayerManagerMixin",
        targets: ["net/minecraft/server/players/PlayerList"], environment: "unknown",
        injections: [
          { method: ["placeNewPlayer"], handler: "onPlayerConnect", kind: "inject", at: [{"value":"TAIL","ordinal":null,"index":null,"target":null,"callee":null}], cancellable: false,
            run: function (target, args, info) { return RT.method("squeek/appleskin/mixin/PlayerManagerMixin", "onPlayerConnect(Lnet/minecraft/class_2535;Lnet/minecraft/class_3222;Lnet/minecraft/class_8792;Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "appleskin", mixin: "squeek/appleskin/mixin/ServerPlayerEntityMixin",
        targets: ["net/minecraft/server/level/ServerPlayer"], environment: "unknown",
        injections: [
          { method: ["tick"], handler: "onUpdate", kind: "inject", at: [{"value":"HEAD","ordinal":null,"index":null,"target":null,"callee":null}], cancellable: false,
            run: function (target, args, info) { return RT.method("squeek/appleskin/mixin/ServerPlayerEntityMixin", "onUpdate(Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "appleskin", mixin: "squeek/appleskin/mixin/TooltipComponentMixin",
        targets: ["net/minecraft/client/gui/screens/inventory/tooltip/ClientTooltipComponent"], environment: "unknown",
        injections: [
          { method: ["create"], handler: "AppleSkin_of", kind: "inject", at: [{"value":"HEAD","ordinal":null,"index":null,"target":null,"callee":null}], cancellable: true,
            run: function (target, args, info) { return RT.method("squeek/appleskin/mixin/TooltipComponentMixin", "AppleSkin_of(Lnet/minecraft/class_5481;Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable;)V", target, args.concat([info])); } },
          { method: ["create"], handler: "AppleSkin_ofData", kind: "inject", at: [{"value":"HEAD","ordinal":null,"index":null,"target":null,"callee":null}], cancellable: true,
            run: function (target, args, info) { return RT.method("squeek/appleskin/mixin/TooltipComponentMixin", "AppleSkin_ofData(Lnet/minecraft/class_5632;Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
    }
    api.log('converted: ' + SOURCE + ' — ' + "149 methods translated, 12 not");
  });
})();
