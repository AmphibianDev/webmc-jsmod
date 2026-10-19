/* Converted from a Fabric mod by webmc-jsmod's converter.
 * gammautils 2.5.10 — Gamma Utils
 * Every 187 method that could be transpiled was; 4 could not.
 * What could not is named in report.json next to this file. */
(function () {
  "use strict";
  var SOURCE = "gammautils 2.5.10";
  var CLASSES = {};
  var SUPER = {"io/github/sjouwer/gammautils/Commands":"java/lang/Object","io/github/sjouwer/gammautils/GammaManager$1":"java/util/TimerTask","io/github/sjouwer/gammautils/GammaManager":"java/lang/Object","io/github/sjouwer/gammautils/GammaUtils":"java/lang/Object","io/github/sjouwer/gammautils/KeyBindings":"java/lang/Object","io/github/sjouwer/gammautils/NightVisionManager$1":"java/util/TimerTask","io/github/sjouwer/gammautils/NightVisionManager":"java/lang/Object","io/github/sjouwer/gammautils/compat/SodiumConfigBuilder":"java/lang/Object","io/github/sjouwer/gammautils/config/ModConfig$GammaSettings":"java/lang/Object","io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings":"java/lang/Object","io/github/sjouwer/gammautils/config/ModConfig$OtherSettings":"java/lang/Object","io/github/sjouwer/gammautils/config/ModMenuApiImpl":"java/lang/Object","io/github/sjouwer/gammautils/mixin/MixinStatusEffectUtil":"java/lang/Object","io/github/sjouwer/gammautils/statuseffect/GammaStatusEffect":"net/minecraft/class_1291","io/github/sjouwer/gammautils/statuseffect/StatusEffectManager":"java/lang/Object","io/github/sjouwer/gammautils/util/InfoProvider":"java/lang/Object","io/github/sjouwer/gammautils/util/LightLevelUtil":"java/lang/Object"};
  var FIELD_DEFAULTS = {"io/github/sjouwer/gammautils/Commands":[{"name":"config","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig;"}],"io/github/sjouwer/gammautils/GammaManager$1":[{"name":"val$valueChangePerTick","descriptor":"D"},{"name":"val$newValue","descriptor":"D"},{"name":"val$showMessage","descriptor":"Z"}],"io/github/sjouwer/gammautils/GammaManager":[{"name":"client","descriptor":"Lnet/minecraft/class_310;"},{"name":"gamma","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;"},{"name":"transitionTimer","descriptor":"Ljava/util/Timer;"},{"name":"dynamicGammaTarget","descriptor":"D"}],"io/github/sjouwer/gammautils/GammaUtils":[{"name":"LOGGER","descriptor":"Lorg/slf4j/Logger;"},{"name":"NAMESPACE","descriptor":"Ljava/lang/String;"},{"name":"configHolder","descriptor":"Lme/shedaniel/autoconfig/ConfigHolder;"}],"io/github/sjouwer/gammautils/KeyBindings":[{"name":"GAMMA_CATEGORY","descriptor":"Lnet/minecraft/class_304$class_11900;"},{"name":"NIGHT_VISION_CATEGORY","descriptor":"Lnet/minecraft/class_304$class_11900;"},{"name":"BASE_KEY","descriptor":"Ljava/lang/String;"},{"name":"GAMMA_TOGGLE","descriptor":"Lnet/minecraft/class_304;"},{"name":"GAMMA_INCREASE","descriptor":"Lnet/minecraft/class_304;"},{"name":"GAMMA_DECREASE","descriptor":"Lnet/minecraft/class_304;"},{"name":"GAMMA_MAX","descriptor":"Lnet/minecraft/class_304;"},{"name":"GAMMA_MIN","descriptor":"Lnet/minecraft/class_304;"},{"name":"NIGHT_VISION_TOGGLE","descriptor":"Lnet/minecraft/class_304;"},{"name":"NIGHT_VISION_INCREASE","descriptor":"Lnet/minecraft/class_304;"},{"name":"NIGHT_VISION_DECREASE","descriptor":"Lnet/minecraft/class_304;"}],"io/github/sjouwer/gammautils/NightVisionManager$1":[{"name":"val$valueChangePerTick","descriptor":"D"},{"name":"val$newValue","descriptor":"D"},{"name":"val$showMessage","descriptor":"Z"}],"io/github/sjouwer/gammautils/NightVisionManager":[{"name":"nightVision","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;"},{"name":"client","descriptor":"Lnet/minecraft/class_310;"},{"name":"transitionTimer","descriptor":"Ljava/util/Timer;"},{"name":"dynamicNightVisionTarget","descriptor":"D"}],"io/github/sjouwer/gammautils/compat/SodiumConfigBuilder":[],"io/github/sjouwer/gammautils/config/ModConfig$GammaSettings":[{"name":"value","descriptor":"D"},{"name":"defaultGamma","descriptor":"I"},{"name":"toggledGamma","descriptor":"I"},{"name":"updateToggle","descriptor":"Z"},{"name":"gammaStep","descriptor":"I"},{"name":"showStatusEffect","descriptor":"Z"},{"name":"resetOnClose","descriptor":"Z"},{"name":"transition","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Transition;"},{"name":"dynamic","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma;"},{"name":"dimensionPreference","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DimensionPreference;"},{"name":"limiter","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Limiter;"},{"name":"hudMessage","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$HudMessage;"}],"io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings":[{"name":"enabled","descriptor":"Z"},{"name":"value","descriptor":"D"},{"name":"toggledNightVision","descriptor":"I"},{"name":"updateToggle","descriptor":"Z"},{"name":"nightVisionStep","descriptor":"I"},{"name":"brightenFogColor","descriptor":"Z"},{"name":"showStatusEffect","descriptor":"Z"},{"name":"resetOnClose","descriptor":"Z"},{"name":"transition","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Transition;"},{"name":"dynamic","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision;"},{"name":"dimensionPreference","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DimensionPreference;"},{"name":"limiter","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Limiter;"},{"name":"hudMessage","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$HudMessage;"}],"io/github/sjouwer/gammautils/config/ModConfig$OtherSettings":[{"name":"namespacedCommands","descriptor":"Z"}],"io/github/sjouwer/gammautils/config/ModMenuApiImpl":[],"io/github/sjouwer/gammautils/mixin/MixinStatusEffectUtil":[],"io/github/sjouwer/gammautils/statuseffect/GammaStatusEffect":[{"name":"key","descriptor":"Ljava/lang/String;"}],"io/github/sjouwer/gammautils/statuseffect/StatusEffectManager":[{"name":"client","descriptor":"Lnet/minecraft/class_310;"},{"name":"config","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig;"},{"name":"BRIGHT","descriptor":"Lnet/minecraft/class_6880$class_6881;"},{"name":"DIM","descriptor":"Lnet/minecraft/class_6880$class_6881;"},{"name":"NIGHT_VISION","descriptor":"Lnet/minecraft/class_6880$class_6881;"}],"io/github/sjouwer/gammautils/util/InfoProvider":[{"name":"client","descriptor":"Lnet/minecraft/class_310;"},{"name":"config","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig;"}],"io/github/sjouwer/gammautils/util/LightLevelUtil":[{"name":"client","descriptor":"Lnet/minecraft/class_310;"}]};
  function defineClass(name, methods) { CLASSES[name] = methods; }
  defineClass("io/github/sjouwer/gammautils/Commands", {
    "registerCommands()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/Commands","registerGammaCommands","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/Commands","registerNightVisionCommands","()V", []); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerGammaCommands()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandRegistrationCallback","EVENT","Lnet/fabricmc/fabric/api/event/Event;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$22","(Lcom/mojang/brigadier/CommandDispatcher;Lnet/minecraft/class_7157;)V", null, dv)); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerNightVisionCommands()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandRegistrationCallback","EVENT","Lnet/fabricmc/fabric/api/event/Event;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$45","(Lcom/mojang/brigadier/CommandDispatcher;Lnet/minecraft/class_7157;)V", null, dv)); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$45(Lcom/mojang/brigadier/CommandDispatcher;Lnet/minecraft/class_7157;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/Commands","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","other","Lio/github/sjouwer/gammautils/config/ModConfig$OtherSettings;", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$OtherSettings","namespacedCommandsEnabled","()Z", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); if (r == 0) { pc = 7; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push("gammautils:nightvision"); pc = 6; continue;
    case 6:
      __pc = 6;
      pc = undefined; continue;
    case 7:
      __pc = 7;
      s.push("nightvision"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$23","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push("enable"); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 14; continue;
    case 14:
      __pc = 14;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$24","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push("disable"); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 20; continue;
    case 20:
      __pc = 20;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$25","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push("value"); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","integer","()Lcom/mojang/brigadier/arguments/IntegerArgumentType;", [])); pc = 26; continue;
    case 26:
      __pc = 26;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","argument","(Ljava/lang/String;Lcom/mojang/brigadier/arguments/ArgumentType;)Lcom/mojang/brigadier/builder/RequiredArgumentBuilder;", av)); pc = 27; continue;
    case 27:
      __pc = 27;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$26","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 28; continue;
    case 28:
      __pc = 28;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/RequiredArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push("toggle"); pc = 32; continue;
    case 32:
      __pc = 32;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 33; continue;
    case 33:
      __pc = 33;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$27","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 34; continue;
    case 34:
      __pc = 34;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 35; continue;
    case 35:
      __pc = 35;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push("set"); pc = 38; continue;
    case 38:
      __pc = 38;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push("value"); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","integer","()Lcom/mojang/brigadier/arguments/IntegerArgumentType;", [])); pc = 41; continue;
    case 41:
      __pc = 41;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","argument","(Ljava/lang/String;Lcom/mojang/brigadier/arguments/ArgumentType;)Lcom/mojang/brigadier/builder/RequiredArgumentBuilder;", av)); pc = 42; continue;
    case 42:
      __pc = 42;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$28","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 43; continue;
    case 43:
      __pc = 43;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/RequiredArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 44; continue;
    case 44:
      __pc = 44;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 45; continue;
    case 45:
      __pc = 45;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push("increase"); pc = 48; continue;
    case 48:
      __pc = 48;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 49; continue;
    case 49:
      __pc = 49;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$29","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 50; continue;
    case 50:
      __pc = 50;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push("value"); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","integer","()Lcom/mojang/brigadier/arguments/IntegerArgumentType;", [])); pc = 54; continue;
    case 54:
      __pc = 54;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","argument","(Ljava/lang/String;Lcom/mojang/brigadier/arguments/ArgumentType;)Lcom/mojang/brigadier/builder/RequiredArgumentBuilder;", av)); pc = 55; continue;
    case 55:
      __pc = 55;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$30","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 56; continue;
    case 56:
      __pc = 56;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/RequiredArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 57; continue;
    case 57:
      __pc = 57;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 58; continue;
    case 58:
      __pc = 58;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 59; continue;
    case 59:
      __pc = 59;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push("decrease"); pc = 61; continue;
    case 61:
      __pc = 61;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 62; continue;
    case 62:
      __pc = 62;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$31","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 63; continue;
    case 63:
      __pc = 63;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 65; continue;
    case 65:
      __pc = 65;
      s.push("value"); pc = 66; continue;
    case 66:
      __pc = 66;
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","integer","()Lcom/mojang/brigadier/arguments/IntegerArgumentType;", [])); pc = 67; continue;
    case 67:
      __pc = 67;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","argument","(Ljava/lang/String;Lcom/mojang/brigadier/arguments/ArgumentType;)Lcom/mojang/brigadier/builder/RequiredArgumentBuilder;", av)); pc = 68; continue;
    case 68:
      __pc = 68;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$32","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 69; continue;
    case 69:
      __pc = 69;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/RequiredArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 70; continue;
    case 70:
      __pc = 70;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 71; continue;
    case 71:
      __pc = 71;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 72; continue;
    case 72:
      __pc = 72;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 73; continue;
    case 73:
      __pc = 73;
      s.push("dynamic"); pc = 74; continue;
    case 74:
      __pc = 74;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 75; continue;
    case 75:
      __pc = 75;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$33","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 76; continue;
    case 76:
      __pc = 76;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 77; continue;
    case 77:
      __pc = 77;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 78; continue;
    case 78:
      __pc = 78;
      s.push("toggle"); pc = 79; continue;
    case 79:
      __pc = 79;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 80; continue;
    case 80:
      __pc = 80;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$34","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 81; continue;
    case 81:
      __pc = 81;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 82; continue;
    case 82:
      __pc = 82;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 83; continue;
    case 83:
      __pc = 83;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 84; continue;
    case 84:
      __pc = 84;
      s.push("enable"); pc = 85; continue;
    case 85:
      __pc = 85;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 86; continue;
    case 86:
      __pc = 86;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$35","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 87; continue;
    case 87:
      __pc = 87;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 88; continue;
    case 88:
      __pc = 88;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 89; continue;
    case 89:
      __pc = 89;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 90; continue;
    case 90:
      __pc = 90;
      s.push("disable"); pc = 91; continue;
    case 91:
      __pc = 91;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 92; continue;
    case 92:
      __pc = 92;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$36","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 93; continue;
    case 93:
      __pc = 93;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 94; continue;
    case 94:
      __pc = 94;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 95; continue;
    case 95:
      __pc = 95;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 96; continue;
    case 96:
      __pc = 96;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 97; continue;
    case 97:
      __pc = 97;
      s.push("statuseffect"); pc = 98; continue;
    case 98:
      __pc = 98;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 99; continue;
    case 99:
      __pc = 99;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$37","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 100; continue;
    case 100:
      __pc = 100;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 101; continue;
    case 101:
      __pc = 101;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 102; continue;
    case 102:
      __pc = 102;
      s.push("toggle"); pc = 103; continue;
    case 103:
      __pc = 103;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 104; continue;
    case 104:
      __pc = 104;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$38","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 105; continue;
    case 105:
      __pc = 105;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 106; continue;
    case 106:
      __pc = 106;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 107; continue;
    case 107:
      __pc = 107;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 108; continue;
    case 108:
      __pc = 108;
      s.push("enable"); pc = 109; continue;
    case 109:
      __pc = 109;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 110; continue;
    case 110:
      __pc = 110;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$39","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 111; continue;
    case 111:
      __pc = 111;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 112; continue;
    case 112:
      __pc = 112;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 113; continue;
    case 113:
      __pc = 113;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 114; continue;
    case 114:
      __pc = 114;
      s.push("disable"); pc = 115; continue;
    case 115:
      __pc = 115;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 116; continue;
    case 116:
      __pc = 116;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$40","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 117; continue;
    case 117:
      __pc = 117;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 118; continue;
    case 118:
      __pc = 118;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 119; continue;
    case 119:
      __pc = 119;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 120; continue;
    case 120:
      __pc = 120;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 121; continue;
    case 121:
      __pc = 121;
      s.push("transition"); pc = 122; continue;
    case 122:
      __pc = 122;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 123; continue;
    case 123:
      __pc = 123;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$41","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 124; continue;
    case 124:
      __pc = 124;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 125; continue;
    case 125:
      __pc = 125;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 126; continue;
    case 126:
      __pc = 126;
      s.push("toggle"); pc = 127; continue;
    case 127:
      __pc = 127;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 128; continue;
    case 128:
      __pc = 128;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$42","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 129; continue;
    case 129:
      __pc = 129;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 130; continue;
    case 130:
      __pc = 130;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 131; continue;
    case 131:
      __pc = 131;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 132; continue;
    case 132:
      __pc = 132;
      s.push("smooth"); pc = 133; continue;
    case 133:
      __pc = 133;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 134; continue;
    case 134:
      __pc = 134;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$43","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 135; continue;
    case 135:
      __pc = 135;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 136; continue;
    case 136:
      __pc = 136;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 137; continue;
    case 137:
      __pc = 137;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 138; continue;
    case 138:
      __pc = 138;
      s.push("none"); pc = 139; continue;
    case 139:
      __pc = 139;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 140; continue;
    case 140:
      __pc = 140;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerNightVisionCommands$44","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 141; continue;
    case 141:
      __pc = 141;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 142; continue;
    case 142:
      __pc = 142;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 143; continue;
    case 143:
      __pc = 143;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 144; continue;
    case 144:
      __pc = 144;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 145; continue;
    case 145:
      __pc = 145;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/CommandDispatcher","register","(Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;)Lcom/mojang/brigadier/tree/LiteralCommandNode;", rv, av)); pc = 146; continue;
    case 146:
      __pc = 146;
      s.pop(); pc = 147; continue;
    case 147:
      __pc = 147;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$44(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/Commands","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","setSmoothTransitionStatus","(Z)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("text.gammautils.message.transitionNightVisionOff"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$43(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/Commands","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","setSmoothTransitionStatus","(Z)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("text.gammautils.message.transitionNightVisionOn"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$42(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","toggleSmoothTransition","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$41(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","toggleSmoothTransition","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$40(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/Commands","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","setStatusEffectStatus","(Z)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","updateNightVision","()V", []); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push("text.gammautils.message.statusEffectNightVisionOff"); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(1); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$39(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/Commands","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","setStatusEffectStatus","(Z)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","updateNightVision","()V", []); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push("text.gammautils.message.statusEffectNightVisionOn"); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(1); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$38(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","toggleStatusEffect","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$37(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","toggleStatusEffect","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$36(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/Commands","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","setDynamicStatus","(Z)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("text.gammautils.message.dynamicNightVisionOff"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$35(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/Commands","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","setDynamicStatus","(Z)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("text.gammautils.message.dynamicNightVisionOn"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$34(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","toggleDynamicNightVision","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$33(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","toggleDynamicNightVision","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$32(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
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
      s.push("value"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","getInteger","(Lcom/mojang/brigadier/context/CommandContext;Ljava/lang/String;)I", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","decreaseNightVision","(I)V", av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(1); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$31(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(0); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","decreaseNightVision","(I)V", av); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$30(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
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
      s.push("value"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","getInteger","(Lcom/mojang/brigadier/context/CommandContext;Ljava/lang/String;)I", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","increaseNightVision","(I)V", av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(1); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$29(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(0); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","increaseNightVision","(I)V", av); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$28(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
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
      s.push("value"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","getInteger","(Lcom/mojang/brigadier/context/CommandContext;Ljava/lang/String;)I", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","enableAndOrSetNightVision","(I)V", av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(1); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$27(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","toggleNightVision","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$26(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
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
      s.push("value"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","getInteger","(Lcom/mojang/brigadier/context/CommandContext;Ljava/lang/String;)I", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","enableAndOrSetNightVision","(I)V", av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(1); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$25(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","disableNightVision","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$24(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","enableNightVision","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionCommands$23(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","toggleNightVision","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$22(Lcom/mojang/brigadier/CommandDispatcher;Lnet/minecraft/class_7157;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/Commands","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","other","Lio/github/sjouwer/gammautils/config/ModConfig$OtherSettings;", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$OtherSettings","namespacedCommandsEnabled","()Z", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); if (r == 0) { pc = 7; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push("gammautils:gamma"); pc = 6; continue;
    case 6:
      __pc = 6;
      pc = undefined; continue;
    case 7:
      __pc = 7;
      s.push("gamma"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$0","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push("value"); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","integer","()Lcom/mojang/brigadier/arguments/IntegerArgumentType;", [])); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","argument","(Ljava/lang/String;Lcom/mojang/brigadier/arguments/ArgumentType;)Lcom/mojang/brigadier/builder/RequiredArgumentBuilder;", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$1","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/RequiredArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push("toggle"); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 21; continue;
    case 21:
      __pc = 21;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$2","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push("min"); pc = 26; continue;
    case 26:
      __pc = 26;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 27; continue;
    case 27:
      __pc = 27;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$3","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 28; continue;
    case 28:
      __pc = 28;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push("max"); pc = 32; continue;
    case 32:
      __pc = 32;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 33; continue;
    case 33:
      __pc = 33;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$4","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 34; continue;
    case 34:
      __pc = 34;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 35; continue;
    case 35:
      __pc = 35;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push("set"); pc = 38; continue;
    case 38:
      __pc = 38;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push("value"); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","integer","()Lcom/mojang/brigadier/arguments/IntegerArgumentType;", [])); pc = 41; continue;
    case 41:
      __pc = 41;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","argument","(Ljava/lang/String;Lcom/mojang/brigadier/arguments/ArgumentType;)Lcom/mojang/brigadier/builder/RequiredArgumentBuilder;", av)); pc = 42; continue;
    case 42:
      __pc = 42;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$5","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 43; continue;
    case 43:
      __pc = 43;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/RequiredArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 44; continue;
    case 44:
      __pc = 44;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 45; continue;
    case 45:
      __pc = 45;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push("increase"); pc = 48; continue;
    case 48:
      __pc = 48;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 49; continue;
    case 49:
      __pc = 49;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$6","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 50; continue;
    case 50:
      __pc = 50;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push("value"); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","integer","()Lcom/mojang/brigadier/arguments/IntegerArgumentType;", [])); pc = 54; continue;
    case 54:
      __pc = 54;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","argument","(Ljava/lang/String;Lcom/mojang/brigadier/arguments/ArgumentType;)Lcom/mojang/brigadier/builder/RequiredArgumentBuilder;", av)); pc = 55; continue;
    case 55:
      __pc = 55;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$7","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 56; continue;
    case 56:
      __pc = 56;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/RequiredArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 57; continue;
    case 57:
      __pc = 57;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 58; continue;
    case 58:
      __pc = 58;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 59; continue;
    case 59:
      __pc = 59;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push("decrease"); pc = 61; continue;
    case 61:
      __pc = 61;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 62; continue;
    case 62:
      __pc = 62;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$8","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 63; continue;
    case 63:
      __pc = 63;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 65; continue;
    case 65:
      __pc = 65;
      s.push("value"); pc = 66; continue;
    case 66:
      __pc = 66;
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","integer","()Lcom/mojang/brigadier/arguments/IntegerArgumentType;", [])); pc = 67; continue;
    case 67:
      __pc = 67;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","argument","(Ljava/lang/String;Lcom/mojang/brigadier/arguments/ArgumentType;)Lcom/mojang/brigadier/builder/RequiredArgumentBuilder;", av)); pc = 68; continue;
    case 68:
      __pc = 68;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$9","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 69; continue;
    case 69:
      __pc = 69;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/RequiredArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 70; continue;
    case 70:
      __pc = 70;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 71; continue;
    case 71:
      __pc = 71;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 72; continue;
    case 72:
      __pc = 72;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 73; continue;
    case 73:
      __pc = 73;
      s.push("dynamic"); pc = 74; continue;
    case 74:
      __pc = 74;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 75; continue;
    case 75:
      __pc = 75;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$10","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 76; continue;
    case 76:
      __pc = 76;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 77; continue;
    case 77:
      __pc = 77;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 78; continue;
    case 78:
      __pc = 78;
      s.push("toggle"); pc = 79; continue;
    case 79:
      __pc = 79;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 80; continue;
    case 80:
      __pc = 80;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$11","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 81; continue;
    case 81:
      __pc = 81;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 82; continue;
    case 82:
      __pc = 82;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 83; continue;
    case 83:
      __pc = 83;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 84; continue;
    case 84:
      __pc = 84;
      s.push("enable"); pc = 85; continue;
    case 85:
      __pc = 85;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 86; continue;
    case 86:
      __pc = 86;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$12","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 87; continue;
    case 87:
      __pc = 87;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 88; continue;
    case 88:
      __pc = 88;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 89; continue;
    case 89:
      __pc = 89;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 90; continue;
    case 90:
      __pc = 90;
      s.push("disable"); pc = 91; continue;
    case 91:
      __pc = 91;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 92; continue;
    case 92:
      __pc = 92;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$13","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 93; continue;
    case 93:
      __pc = 93;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 94; continue;
    case 94:
      __pc = 94;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 95; continue;
    case 95:
      __pc = 95;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 96; continue;
    case 96:
      __pc = 96;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 97; continue;
    case 97:
      __pc = 97;
      s.push("statuseffect"); pc = 98; continue;
    case 98:
      __pc = 98;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 99; continue;
    case 99:
      __pc = 99;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$14","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 100; continue;
    case 100:
      __pc = 100;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 101; continue;
    case 101:
      __pc = 101;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 102; continue;
    case 102:
      __pc = 102;
      s.push("toggle"); pc = 103; continue;
    case 103:
      __pc = 103;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 104; continue;
    case 104:
      __pc = 104;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$15","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 105; continue;
    case 105:
      __pc = 105;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 106; continue;
    case 106:
      __pc = 106;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 107; continue;
    case 107:
      __pc = 107;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 108; continue;
    case 108:
      __pc = 108;
      s.push("enable"); pc = 109; continue;
    case 109:
      __pc = 109;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 110; continue;
    case 110:
      __pc = 110;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$16","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 111; continue;
    case 111:
      __pc = 111;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 112; continue;
    case 112:
      __pc = 112;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 113; continue;
    case 113:
      __pc = 113;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 114; continue;
    case 114:
      __pc = 114;
      s.push("disable"); pc = 115; continue;
    case 115:
      __pc = 115;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 116; continue;
    case 116:
      __pc = 116;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$17","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 117; continue;
    case 117:
      __pc = 117;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 118; continue;
    case 118:
      __pc = 118;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 119; continue;
    case 119:
      __pc = 119;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 120; continue;
    case 120:
      __pc = 120;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 121; continue;
    case 121:
      __pc = 121;
      s.push("transition"); pc = 122; continue;
    case 122:
      __pc = 122;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 123; continue;
    case 123:
      __pc = 123;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$18","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 124; continue;
    case 124:
      __pc = 124;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 125; continue;
    case 125:
      __pc = 125;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 126; continue;
    case 126:
      __pc = 126;
      s.push("toggle"); pc = 127; continue;
    case 127:
      __pc = 127;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 128; continue;
    case 128:
      __pc = 128;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$19","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 129; continue;
    case 129:
      __pc = 129;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 130; continue;
    case 130:
      __pc = 130;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 131; continue;
    case 131:
      __pc = 131;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 132; continue;
    case 132:
      __pc = 132;
      s.push("smooth"); pc = 133; continue;
    case 133:
      __pc = 133;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 134; continue;
    case 134:
      __pc = 134;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$20","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 135; continue;
    case 135:
      __pc = 135;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 136; continue;
    case 136:
      __pc = 136;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 137; continue;
    case 137:
      __pc = 137;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 138; continue;
    case 138:
      __pc = 138;
      s.push("none"); pc = 139; continue;
    case 139:
      __pc = 139;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 140; continue;
    case 140:
      __pc = 140;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/Commands","lambda$registerGammaCommands$21","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 141; continue;
    case 141:
      __pc = 141;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","executes","(Lcom/mojang/brigadier/Command;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 142; continue;
    case 142:
      __pc = 142;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 143; continue;
    case 143:
      __pc = 143;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/builder/LiteralArgumentBuilder","then","(Lcom/mojang/brigadier/builder/ArgumentBuilder;)Lcom/mojang/brigadier/builder/ArgumentBuilder;", rv, av)); pc = 144; continue;
    case 144:
      __pc = 144;
      s.push(__ctx.cast(s.pop(), "com/mojang/brigadier/builder/LiteralArgumentBuilder")); pc = 145; continue;
    case 145:
      __pc = 145;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/CommandDispatcher","register","(Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;)Lcom/mojang/brigadier/tree/LiteralCommandNode;", rv, av)); pc = 146; continue;
    case 146:
      __pc = 146;
      s.pop(); pc = 147; continue;
    case 147:
      __pc = 147;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$21(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/Commands","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","setSmoothTransitionStatus","(Z)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("text.gammautils.message.transitionGammaOff"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$20(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/Commands","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","setSmoothTransitionStatus","(Z)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("text.gammautils.message.transitionGammaOn"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$19(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","toggleSmoothTransition","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$18(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","toggleSmoothTransition","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$17(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/Commands","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","setStatusEffectStatus","(Z)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","updateGammaStatusEffect","()V", []); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push("text.gammautils.message.statusEffectGammaOff"); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(1); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$16(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/Commands","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","setStatusEffectStatus","(Z)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","updateGammaStatusEffect","()V", []); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push("text.gammautils.message.statusEffectGammaOn"); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(1); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$15(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","toggleStatusEffect","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$14(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","toggleStatusEffect","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$13(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/Commands","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","setDynamicStatus","(Z)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("text.gammautils.message.dynamicGammaOff"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$12(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/Commands","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","setDynamicStatus","(Z)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("text.gammautils.message.dynamicGammaOn"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$11(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","toggleDynamicGamma","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$10(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","toggleDynamicGamma","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$9(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
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
      s.push("value"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","getInteger","(Lcom/mojang/brigadier/context/CommandContext;Ljava/lang/String;)I", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(Number(r)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(100); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); s.push(s.pop() / r); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","decreaseGamma","(D)V", av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$8(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(0); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","decreaseGamma","(D)V", av); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$7(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
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
      s.push("value"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","getInteger","(Lcom/mojang/brigadier/context/CommandContext;Ljava/lang/String;)I", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(Number(r)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(100); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); s.push(s.pop() / r); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","increaseGamma","(D)V", av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$6(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(0); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","increaseGamma","(D)V", av); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$5(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
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
      s.push("value"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","getInteger","(Lcom/mojang/brigadier/context/CommandContext;Ljava/lang/String;)I", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(Number(r)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(100); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); s.push(s.pop() / r); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","setGamma","(DZZ)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(1); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$4(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","maxGamma","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$3(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","minGamma","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$2(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","toggleGamma","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$1(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
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
      s.push("value"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/brigadier/arguments/IntegerArgumentType","getInteger","(Lcom/mojang/brigadier/context/CommandContext;Ljava/lang/String;)I", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(Number(r)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(100); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); s.push(s.pop() / r); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","setGamma","(DZZ)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(1); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaCommands$0(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","toggleGamma","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/Commands"].__fields = [{"name":"config","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig;"}];
  defineClass("io/github/sjouwer/gammautils/GammaManager$1", {
    "<init>(DDZ)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5;
    l0 = __self;
    l1 = __args[0];
    l3 = __args[1];
    l5 = __args[2];
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
      __ctx.putField("io/github/sjouwer/gammautils/GammaManager$1","val$valueChangePerTick","D",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l3); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("io/github/sjouwer/gammautils/GammaManager$1","val$newValue","D",target, r); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l5); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("io/github/sjouwer/gammautils/GammaManager$1","val$showMessage","Z",target, r); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.pop();
      throw __ctx.toError(("java.util.TimerTask.<init>") + ' needs the client internals');
    case 11:
      __pc = 11;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/GammaManager$1"].__fields = [{"name":"val$valueChangePerTick","descriptor":"D"},{"name":"val$newValue","descriptor":"D"},{"name":"val$showMessage","descriptor":"Z"}];
  defineClass("io/github/sjouwer/gammautils/GammaManager", {
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
    "getGamma()D": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getValue","()D", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getGammaPercentage()I": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getValue","()D", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(100); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(s.pop() * r); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Math","round","(D)J", av)); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); s.push(Number(r)); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toggleGamma()V": function (__ctx, __self, __args) {
    var l0, l1;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isDynamicEnabled","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 5; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","toggleDynamicPause","()V", []); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getValue","()D", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getDefaultValue","()D", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); if (r != 0) { pc = 14; } else { pc = 11; } continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 12; continue;
    case 12:
      __pc = 12;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getToggledValue","()D", rv, [])); pc = 13; continue;
    case 13:
      __pc = 13;
      pc = undefined; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getDefaultValue","()D", rv, [])); pc = 16; continue;
    case 16:
      __pc = 16;
      l0 = s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(NaN); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop();
      __ctx.putStatic("io/github/sjouwer/gammautils/GammaManager","dynamicGammaTarget","D",r); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l0); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(1); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(1); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","setGamma","(DZZ)V", av); pc = 23; continue;
    case 23:
      __pc = 23;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toggleDynamicPause()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","toggleDynamicPause","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","showDynamicGammaHudMessage","()V", []); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isDynamicPaused","()Z", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r == 0) { pc = 14; } else { pc = 6; } continue;
    case 6:
      __pc = 6;
      s.push(NaN); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      __ctx.putStatic("io/github/sjouwer/gammautils/GammaManager","dynamicGammaTarget","D",r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getDefaultValue","()D", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(1); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","setGamma","(DZZZ)V", av); pc = 14; continue;
    case 14:
      __pc = 14;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "increaseGamma(D)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getValue","()D", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      l2 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(0); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); if (r != 0) { pc = 11; } else { pc = 8; } continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getStepStrength","()D", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      pc = undefined; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); s.push(s.pop() + r); pc = 13; continue;
    case 13:
      __pc = 13;
      l2 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l2); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(1); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","setGamma","(DZZ)V", av); pc = 18; continue;
    case 18:
      __pc = 18;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "decreaseGamma(D)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getValue","()D", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      l2 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(0); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); if (r != 0) { pc = 11; } else { pc = 8; } continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getStepStrength","()D", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      pc = undefined; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); s.push(s.pop() - r); pc = 13; continue;
    case 13:
      __pc = 13;
      l2 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l2); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(1); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","setGamma","(DZZ)V", av); pc = 18; continue;
    case 18:
      __pc = 18;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "minGamma()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getMinimumStrength","()D", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","setGamma","(DZZ)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "maxGamma()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getMaximumStrength","()D", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","setGamma","(DZZ)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setDynamicGamma()V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isDynamicEnabled","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isDynamicPaused","()Z", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r == 0) { pc = 7; } else { pc = 6; } continue;
    case 6:
      __pc = 6;
      return;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getDynamicAveragingLightRange","()I", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getSkyBrightnessOverride","()F", rv, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("io/github/sjouwer/gammautils/util/LightLevelUtil","getAverageLightLevel","(IF)Ljava/lang/Double;", av)); pc = 12; continue;
    case 12:
      __pc = 12;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Double","doubleValue","()D", rv, [])); pc = 13; continue;
    case 13:
      __pc = 13;
      l0 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getMaxDynamicStrength","()D", rv, [])); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 17; continue;
    case 17:
      __pc = 17;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getMinDynamicStrength","()D", rv, [])); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop(); s.push(s.pop() - r); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(15); pc = 20; continue;
    case 20:
      __pc = 20;
      r = s.pop(); s.push(s.pop() / r); pc = 21; continue;
    case 21:
      __pc = 21;
      l2 = s.pop(); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 23; continue;
    case 23:
      __pc = 23;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getMinDynamicStrength","()D", rv, [])); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l2); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(15); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l0); pc = 27; continue;
    case 27:
      __pc = 27;
      r = s.pop(); s.push(s.pop() - r); pc = 28; continue;
    case 28:
      __pc = 28;
      r = s.pop(); s.push(s.pop() * r); pc = 29; continue;
    case 29:
      __pc = 29;
      r = s.pop(); s.push(s.pop() + r); pc = 30; continue;
    case 30:
      __pc = 30;
      l4 = s.pop(); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","dynamicGammaTarget","D")); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(l4); pc = 33; continue;
    case 33:
      __pc = 33;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 34; continue;
    case 34:
      __pc = 34;
      r = s.pop(); if (r == 0) { pc = 42; } else { pc = 35; } continue;
    case 35:
      __pc = 35;
      s.push(l4); pc = 36; continue;
    case 36:
      __pc = 36;
      r = s.pop();
      __ctx.putStatic("io/github/sjouwer/gammautils/GammaManager","dynamicGammaTarget","D",r); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(l4); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(1); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(0); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(1); pc = 41; continue;
    case 41:
      __pc = 41;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","setGamma","(DZZZ)V", av); pc = 42; continue;
    case 42:
      __pc = 42;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setGamma(DZZ)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
    l0 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isDynamicEnabled","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 11; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l3); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); if (r == 0) { pc = 10; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push("text.gammautils.message.incompatibleWithDynamicGamma"); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      l4 = s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l4); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 10; continue;
    case 10:
      __pc = 10;
      return;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l2); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l3); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(0); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","setGamma","(DZZZ)V", av); pc = 16; continue;
    case 16:
      __pc = 16;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setGamma(DZZZ)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6;
    l0 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    l4 = __args[3];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","transitionTimer","Ljava/util/Timer;")); pc = 1; continue;
    case 1:
      __pc = 1;
      r = s.pop(); if (r == null) { pc = 4; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","transitionTimer","Ljava/util/Timer;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.pop();
      throw __ctx.toError(("java.util.Timer.cancel") + ' needs the client internals');
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isLimiterEnabled","()Z", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); if (r == 0) { pc = 20; } else { pc = 7; } continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getMaximumStrength","()D", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getMinimumStrength","()D", rv, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); if (r <= 0) { pc = 20; } else { pc = 13; } continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getMinimumStrength","()D", rv, [])); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 17; continue;
    case 17:
      __pc = 17;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getMaximumStrength","()D", rv, [])); pc = 18; continue;
    case 18:
      __pc = 18;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Math.clamp") + ' needs the client internals');
    case 19:
      __pc = 19;
      l0 = s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l2); pc = 21; continue;
    case 21:
      __pc = 21;
      r = s.pop(); if (r == 0) { pc = 47; } else { pc = 22; } continue;
    case 22:
      __pc = 22;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 23; continue;
    case 23:
      __pc = 23;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isSmoothTransitionEnabled","()Z", rv, [])); pc = 24; continue;
    case 24:
      __pc = 24;
      r = s.pop(); if (r != 0) { pc = 27; } else { pc = 25; } continue;
    case 25:
      __pc = 25;
      s.push(l4); pc = 26; continue;
    case 26:
      __pc = 26;
      r = s.pop(); if (r == 0) { pc = 47; } else { pc = 27; } continue;
    case 27:
      __pc = 27;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l4); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getTransitionSpeed","(Z)D", rv, av)); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(100); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop(); s.push(s.pop() / r); pc = 32; continue;
    case 32:
      __pc = 32;
      l5 = s.pop(); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(l0); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 35; continue;
    case 35:
      __pc = 35;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getValue","()D", rv, [])); pc = 36; continue;
    case 36:
      __pc = 36;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 37; continue;
    case 37:
      __pc = 37;
      r = s.pop(); if (r >= 0) { pc = 42; } else { pc = 38; } continue;
    case 38:
      __pc = 38;
      s.push(l5); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(-1); pc = 40; continue;
    case 40:
      __pc = 40;
      r = s.pop(); s.push(s.pop() * r); pc = 41; continue;
    case 41:
      __pc = 41;
      l5 = s.pop(); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(l0); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l5); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(l3); pc = 45; continue;
    case 45:
      __pc = 45;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","startTransitionTimer","(DDZ)V", av); pc = 46; continue;
    case 46:
      __pc = 46;
      pc = undefined; continue;
    case 47:
      __pc = 47;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 48; continue;
    case 48:
      __pc = 48;
      s.push(l0); pc = 49; continue;
    case 49:
      __pc = 49;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","setValue","(D)V", rv, av); pc = 50; continue;
    case 50:
      __pc = 50;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","updateGammaStatusEffect","()V", []); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(l3); pc = 52; continue;
    case 52:
      __pc = 52;
      r = s.pop(); if (r == 0) { pc = 54; } else { pc = 53; } continue;
    case 53:
      __pc = 53;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","showGammaHudMessage","()V", []); pc = 54; continue;
    case 54:
      __pc = 54;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 55; continue;
    case 55:
      __pc = 55;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isToggleUpdateEnabled","()Z", rv, [])); pc = 56; continue;
    case 56:
      __pc = 56;
      r = s.pop(); if (r == 0) { pc = 65; } else { pc = 57; } continue;
    case 57:
      __pc = 57;
      s.push(l0); pc = 58; continue;
    case 58:
      __pc = 58;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 59; continue;
    case 59:
      __pc = 59;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getDefaultValue","()D", rv, [])); pc = 60; continue;
    case 60:
      __pc = 60;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 61; continue;
    case 61:
      __pc = 61;
      r = s.pop(); if (r == 0) { pc = 65; } else { pc = 62; } continue;
    case 62:
      __pc = 62;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 63; continue;
    case 63:
      __pc = 63;
      s.push(l0); pc = 64; continue;
    case 64:
      __pc = 64;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","setToggledValue","(D)V", rv, av); pc = 65; continue;
    case 65:
      __pc = 65;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toggleDynamicGamma()V": function (__ctx, __self, __args) {
    var l0, l1;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isDynamicEnabled","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r != 0) { pc = 5; } else { pc = 3; } continue;
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
      l0 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","setDynamicStatus","(Z)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); if (r == 0) { pc = 14; } else { pc = 12; } continue;
    case 12:
      __pc = 12;
      s.push("On"); pc = 13; continue;
    case 13:
      __pc = 13;
      pc = undefined; continue;
    case 14:
      __pc = 14;
      s.push("Off"); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.unsupportedLambda("io/github/sjouwer/gammautils/GammaManager.toggleDynamicGamma:33")); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 17; continue;
    case 17:
      __pc = 17;
      l1 = s.pop(); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l1); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 20; continue;
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toggleStatusEffect()V": function (__ctx, __self, __args) {
    var l0, l1;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isStatusEffectEnabled","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r != 0) { pc = 5; } else { pc = 3; } continue;
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
      l0 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","setStatusEffectStatus","(Z)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","updateGammaStatusEffect","()V", []); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); if (r == 0) { pc = 15; } else { pc = 13; } continue;
    case 13:
      __pc = 13;
      s.push("On"); pc = 14; continue;
    case 14:
      __pc = 14;
      pc = undefined; continue;
    case 15:
      __pc = 15;
      s.push("Off"); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.unsupportedLambda("io/github/sjouwer/gammautils/GammaManager.toggleStatusEffect:36")); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 18; continue;
    case 18:
      __pc = 18;
      l1 = s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l1); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 21; continue;
    case 21:
      __pc = 21;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toggleSmoothTransition()V": function (__ctx, __self, __args) {
    var l0, l1;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isSmoothTransitionEnabled","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r != 0) { pc = 5; } else { pc = 3; } continue;
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
      l0 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;")); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","setSmoothTransitionStatus","(Z)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); if (r == 0) { pc = 14; } else { pc = 12; } continue;
    case 12:
      __pc = 12;
      s.push("On"); pc = 13; continue;
    case 13:
      __pc = 13;
      pc = undefined; continue;
    case 14:
      __pc = 14;
      s.push("Off"); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.unsupportedLambda("io/github/sjouwer/gammautils/GammaManager.toggleSmoothTransition:33")); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 17; continue;
    case 17:
      __pc = 17;
      l1 = s.pop(); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l1); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 20; continue;
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "startTransitionTimer(DDZ)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
    l0 = __args[0];
    l2 = __args[1];
    l4 = __args[2];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("java/util/Timer")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.pop();
      throw __ctx.toError(("java.util.Timer.<init>") + ' needs the client internals');
    case 3:
      __pc = 3;
      r = s.pop();
      __ctx.putStatic("io/github/sjouwer/gammautils/GammaManager","transitionTimer","Ljava/util/Timer;",r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaManager","transitionTimer","Ljava/util/Timer;")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.newInstance("io/github/sjouwer/gammautils/GammaManager$1")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l4); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/GammaManager$1","<init>","(DDZ)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(0n); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(10); pc = 13; continue;
    case 13:
      __pc = 13;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.Timer.scheduleAtFixedRate") + ' needs the client internals');
    case 14:
      __pc = 14;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/GammaManager"].__fields = [{"name":"client","descriptor":"Lnet/minecraft/class_310;"},{"name":"gamma","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;"},{"name":"transitionTimer","descriptor":"Ljava/util/Timer;"},{"name":"dynamicGammaTarget","descriptor":"D"}];
  defineClass("io/github/sjouwer/gammautils/GammaUtils", {
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
      s.push(null); pc = 1; continue;
    case 1:
      __pc = 1;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("me/shedaniel/autoconfig/serializer/GsonConfigSerializer","<init>","(Lme/shedaniel/autoconfig/annotation/Config;Ljava/lang/Class;)V", null, dv)); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("me/shedaniel/autoconfig/AutoConfig","register","(Ljava/lang/Class;Lme/shedaniel/autoconfig/serializer/ConfigSerializer$Factory;)Lme/shedaniel/autoconfig/ConfigHolder;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      __ctx.putStatic("io/github/sjouwer/gammautils/GammaUtils","configHolder","Lme/shedaniel/autoconfig/ConfigHolder;",r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaUtils","configHolder","Lme/shedaniel/autoconfig/ConfigHolder;")); pc = 5; continue;
    case 5:
      __pc = 5;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/GammaUtils","lambda$onInitializeClient$0","(Lme/shedaniel/autoconfig/ConfigHolder;Lio/github/sjouwer/gammautils/config/ModConfig;)Lnet/minecraft/class_1269;", null, dv)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("me/shedaniel/autoconfig/ConfigHolder","registerSaveListener","(Lme/shedaniel/autoconfig/event/ConfigSerializeEvent$Save;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/KeyBindings","registerBindings","()V", []); pc = 8; continue;
    case 8:
      __pc = 8;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/Commands","registerCommands","()V", []); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents","START_CLIENT_TICK","Lnet/fabricmc/fabric/api/event/Event;")); pc = 10; continue;
    case 10:
      __pc = 10;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/GammaUtils","lambda$onInitializeClient$1","(Lnet/minecraft/class_310;)V", null, dv)); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$onInitializeClient$1(Lnet/minecraft/class_310;)V": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","setDynamicGamma","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","setDynamicNightVision","()V", []); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$onInitializeClient$0(Lme/shedaniel/autoconfig/ConfigHolder;Lio/github/sjouwer/gammautils/config/ModConfig;)Lnet/minecraft/class_1269;": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","updateAllEffects","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getStatic("net/minecraft/world/InteractionResult","field_5812","Lnet/minecraft/class_1269$class_9860;")); pc = 2; continue;
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
      s.push("Gamma Utils"); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("org/slf4j/LoggerFactory","getLogger","(Ljava/lang/String;)Lorg/slf4j/Logger;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop();
      __ctx.putStatic("io/github/sjouwer/gammautils/GammaUtils","LOGGER","Lorg/slf4j/Logger;",r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/GammaUtils"].__fields = [{"name":"LOGGER","descriptor":"Lorg/slf4j/Logger;"},{"name":"NAMESPACE","descriptor":"Ljava/lang/String;"},{"name":"configHolder","descriptor":"Lme/shedaniel/autoconfig/ConfigHolder;"}];
  defineClass("io/github/sjouwer/gammautils/KeyBindings", {
    "registerBindings()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/KeyBindings","registerGammaToggleKey","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/KeyBindings","registerIncreaseGammaKey","()V", []); pc = 2; continue;
    case 2:
      __pc = 2;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/KeyBindings","registerDecreaseGammaKey","()V", []); pc = 3; continue;
    case 3:
      __pc = 3;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/KeyBindings","registerMaxGammaKey","()V", []); pc = 4; continue;
    case 4:
      __pc = 4;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/KeyBindings","registerMinGammaKey","()V", []); pc = 5; continue;
    case 5:
      __pc = 5;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/KeyBindings","registerNightVisionToggleKey","()V", []); pc = 6; continue;
    case 6:
      __pc = 6;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/KeyBindings","registerIncreaseNightVisionKey","()V", []); pc = 7; continue;
    case 7:
      __pc = 7;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/KeyBindings","registerDecreaseNightVisionKey","()V", []); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerGammaToggleKey()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","GAMMA_TOGGLE","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/keybinding/v1/KeyBindingHelper","registerKeyBinding","(Lnet/minecraft/class_304;)Lnet/minecraft/class_304;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents","END_CLIENT_TICK","Lnet/fabricmc/fabric/api/event/Event;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/KeyBindings","lambda$registerGammaToggleKey$0","(Lnet/minecraft/class_310;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerIncreaseGammaKey()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","GAMMA_INCREASE","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/keybinding/v1/KeyBindingHelper","registerKeyBinding","(Lnet/minecraft/class_304;)Lnet/minecraft/class_304;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents","END_CLIENT_TICK","Lnet/fabricmc/fabric/api/event/Event;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/KeyBindings","lambda$registerIncreaseGammaKey$1","(Lnet/minecraft/class_310;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerDecreaseGammaKey()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","GAMMA_DECREASE","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/keybinding/v1/KeyBindingHelper","registerKeyBinding","(Lnet/minecraft/class_304;)Lnet/minecraft/class_304;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents","END_CLIENT_TICK","Lnet/fabricmc/fabric/api/event/Event;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/KeyBindings","lambda$registerDecreaseGammaKey$2","(Lnet/minecraft/class_310;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerMaxGammaKey()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","GAMMA_MAX","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/keybinding/v1/KeyBindingHelper","registerKeyBinding","(Lnet/minecraft/class_304;)Lnet/minecraft/class_304;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents","END_CLIENT_TICK","Lnet/fabricmc/fabric/api/event/Event;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/KeyBindings","lambda$registerMaxGammaKey$3","(Lnet/minecraft/class_310;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerMinGammaKey()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","GAMMA_MIN","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/keybinding/v1/KeyBindingHelper","registerKeyBinding","(Lnet/minecraft/class_304;)Lnet/minecraft/class_304;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents","END_CLIENT_TICK","Lnet/fabricmc/fabric/api/event/Event;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/KeyBindings","lambda$registerMinGammaKey$4","(Lnet/minecraft/class_310;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerNightVisionToggleKey()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","NIGHT_VISION_TOGGLE","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/keybinding/v1/KeyBindingHelper","registerKeyBinding","(Lnet/minecraft/class_304;)Lnet/minecraft/class_304;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents","END_CLIENT_TICK","Lnet/fabricmc/fabric/api/event/Event;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/KeyBindings","lambda$registerNightVisionToggleKey$5","(Lnet/minecraft/class_310;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerIncreaseNightVisionKey()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","NIGHT_VISION_INCREASE","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/keybinding/v1/KeyBindingHelper","registerKeyBinding","(Lnet/minecraft/class_304;)Lnet/minecraft/class_304;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents","END_CLIENT_TICK","Lnet/fabricmc/fabric/api/event/Event;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/KeyBindings","lambda$registerIncreaseNightVisionKey$6","(Lnet/minecraft/class_310;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerDecreaseNightVisionKey()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","NIGHT_VISION_DECREASE","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/keybinding/v1/KeyBindingHelper","registerKeyBinding","(Lnet/minecraft/class_304;)Lnet/minecraft/class_304;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents","END_CLIENT_TICK","Lnet/fabricmc/fabric/api/event/Event;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/KeyBindings","lambda$registerDecreaseNightVisionKey$7","(Lnet/minecraft/class_310;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerDecreaseNightVisionKey$7(Lnet/minecraft/class_310;)V": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","NIGHT_VISION_DECREASE","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/KeyMapping","consumeClick","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","decreaseNightVision","(I)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      pc = undefined; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerIncreaseNightVisionKey$6(Lnet/minecraft/class_310;)V": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","NIGHT_VISION_INCREASE","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/KeyMapping","consumeClick","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","increaseNightVision","(I)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      pc = undefined; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerNightVisionToggleKey$5(Lnet/minecraft/class_310;)V": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","NIGHT_VISION_TOGGLE","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/KeyMapping","consumeClick","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 5; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","toggleNightVision","()V", []); pc = 4; continue;
    case 4:
      __pc = 4;
      pc = undefined; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerMinGammaKey$4(Lnet/minecraft/class_310;)V": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","GAMMA_MIN","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/KeyMapping","consumeClick","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 5; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","minGamma","()V", []); pc = 4; continue;
    case 4:
      __pc = 4;
      pc = undefined; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerMaxGammaKey$3(Lnet/minecraft/class_310;)V": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","GAMMA_MAX","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/KeyMapping","consumeClick","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 5; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","maxGamma","()V", []); pc = 4; continue;
    case 4:
      __pc = 4;
      pc = undefined; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerDecreaseGammaKey$2(Lnet/minecraft/class_310;)V": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","GAMMA_DECREASE","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/KeyMapping","consumeClick","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","decreaseGamma","(D)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      pc = undefined; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerIncreaseGammaKey$1(Lnet/minecraft/class_310;)V": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","GAMMA_INCREASE","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/KeyMapping","consumeClick","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","increaseGamma","(D)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      pc = undefined; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerGammaToggleKey$0(Lnet/minecraft/class_310;)V": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/KeyBindings","GAMMA_TOGGLE","Lnet/minecraft/class_304;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/KeyMapping","consumeClick","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 5; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","toggleGamma","()V", []); pc = 4; continue;
    case 4:
      __pc = 4;
      pc = undefined; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/KeyBindings"].__fields = [{"name":"GAMMA_CATEGORY","descriptor":"Lnet/minecraft/class_304$class_11900;"},{"name":"NIGHT_VISION_CATEGORY","descriptor":"Lnet/minecraft/class_304$class_11900;"},{"name":"BASE_KEY","descriptor":"Ljava/lang/String;"},{"name":"GAMMA_TOGGLE","descriptor":"Lnet/minecraft/class_304;"},{"name":"GAMMA_INCREASE","descriptor":"Lnet/minecraft/class_304;"},{"name":"GAMMA_DECREASE","descriptor":"Lnet/minecraft/class_304;"},{"name":"GAMMA_MAX","descriptor":"Lnet/minecraft/class_304;"},{"name":"GAMMA_MIN","descriptor":"Lnet/minecraft/class_304;"},{"name":"NIGHT_VISION_TOGGLE","descriptor":"Lnet/minecraft/class_304;"},{"name":"NIGHT_VISION_INCREASE","descriptor":"Lnet/minecraft/class_304;"},{"name":"NIGHT_VISION_DECREASE","descriptor":"Lnet/minecraft/class_304;"}];
  defineClass("io/github/sjouwer/gammautils/NightVisionManager$1", {
    "<init>(DDZ)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5;
    l0 = __self;
    l1 = __args[0];
    l3 = __args[1];
    l5 = __args[2];
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
      __ctx.putField("io/github/sjouwer/gammautils/NightVisionManager$1","val$valueChangePerTick","D",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l3); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("io/github/sjouwer/gammautils/NightVisionManager$1","val$newValue","D",target, r); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l5); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("io/github/sjouwer/gammautils/NightVisionManager$1","val$showMessage","Z",target, r); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.pop();
      throw __ctx.toError(("java.util.TimerTask.<init>") + ' needs the client internals');
    case 11:
      __pc = 11;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/NightVisionManager$1"].__fields = [{"name":"val$valueChangePerTick","descriptor":"D"},{"name":"val$newValue","descriptor":"D"},{"name":"val$showMessage","descriptor":"Z"}];
  defineClass("io/github/sjouwer/gammautils/NightVisionManager", {
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
    "getNightVisionPercentage()I": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getValue","()D", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Math","round","(D)J", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(Number(r)); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toggleNightVision()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isDynamicEnabled","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 5; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","toggleDynamicPause","()V", []); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isEnabled","()Z", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); if (r == 0) { pc = 10; } else { pc = 8; } continue;
    case 8:
      __pc = 8;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","disableNightVision","()V", []); pc = 9; continue;
    case 9:
      __pc = 9;
      pc = undefined; continue;
    case 10:
      __pc = 10;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","enableNightVision","()V", []); pc = 11; continue;
    case 11:
      __pc = 11;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toggleDynamicPause()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","toggleDynamicPause","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","showDynamicNightVisionHudMessage","()V", []); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isDynamicPaused","()Z", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r == 0) { pc = 13; } else { pc = 6; } continue;
    case 6:
      __pc = 6;
      s.push(NaN); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      __ctx.putStatic("io/github/sjouwer/gammautils/NightVisionManager","dynamicNightVisionTarget","D",r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(1); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(1); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","setNightVision","(DZZZ)V", av); pc = 13; continue;
    case 13:
      __pc = 13;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "enableAndOrSetNightVision(I)V": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isEnabled","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 9; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); s.push(Number(r)); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(1); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","setNightVision","(DZZ)V", av); pc = 8; continue;
    case 8:
      __pc = 8;
      pc = undefined; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","enableNightVision","(I)V", av); pc = 11; continue;
    case 11:
      __pc = 11;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "enableNightVision()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getToggledValue","()I", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","enableNightVision","(I)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "enableNightVision(I)V": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","setNightVision","(DZZ)V", av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(1); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","setNightVisionStatus","(Z)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); s.push(Number(r)); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(1); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(1); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","setNightVision","(DZZ)V", av); pc = 11; continue;
    case 11:
      __pc = 11;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "disableNightVision()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","setNightVision","(DZZ)V", av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "increaseNightVision(I)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getValue","()D", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      l1 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r != 0) { pc = 10; } else { pc = 6; } continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getStepValue","()I", rv, [])); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); s.push(Number(r)); pc = 9; continue;
    case 9:
      __pc = 9;
      pc = undefined; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); s.push(Number(r)); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); s.push(s.pop() + r); pc = 13; continue;
    case 13:
      __pc = 13;
      l1 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l1); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(1); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","setNightVision","(DZZ)V", av); pc = 18; continue;
    case 18:
      __pc = 18;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "decreaseNightVision(I)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getValue","()D", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      l1 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r != 0) { pc = 10; } else { pc = 6; } continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getStepValue","()I", rv, [])); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); s.push(Number(r)); pc = 9; continue;
    case 9:
      __pc = 9;
      pc = undefined; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); s.push(Number(r)); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); s.push(s.pop() - r); pc = 13; continue;
    case 13:
      __pc = 13;
      l1 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l1); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(1); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","setNightVision","(DZZ)V", av); pc = 18; continue;
    case 18:
      __pc = 18;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setDynamicNightVision()V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isDynamicEnabled","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isDynamicPaused","()Z", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r == 0) { pc = 7; } else { pc = 6; } continue;
    case 6:
      __pc = 6;
      return;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getDynamicAveragingLightRange","()I", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getSkyBrightnessOverride","()F", rv, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("io/github/sjouwer/gammautils/util/LightLevelUtil","getAverageLightLevel","(IF)Ljava/lang/Double;", av)); pc = 12; continue;
    case 12:
      __pc = 12;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Double","doubleValue","()D", rv, [])); pc = 13; continue;
    case 13:
      __pc = 13;
      l0 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getMaxDynamicStrength","()I", rv, [])); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 17; continue;
    case 17:
      __pc = 17;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getMinDynamicStrength","()I", rv, [])); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop(); s.push(s.pop() - r); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop(); s.push(Number(r)); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(15); pc = 21; continue;
    case 21:
      __pc = 21;
      r = s.pop(); s.push(s.pop() / r); pc = 22; continue;
    case 22:
      __pc = 22;
      l2 = s.pop(); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 24; continue;
    case 24:
      __pc = 24;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getMinDynamicStrength","()I", rv, [])); pc = 25; continue;
    case 25:
      __pc = 25;
      r = s.pop(); s.push(Number(r)); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l2); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(15); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l0); pc = 29; continue;
    case 29:
      __pc = 29;
      r = s.pop(); s.push(s.pop() - r); pc = 30; continue;
    case 30:
      __pc = 30;
      r = s.pop(); s.push(s.pop() * r); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop(); s.push(s.pop() + r); pc = 32; continue;
    case 32:
      __pc = 32;
      l4 = s.pop(); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","dynamicNightVisionTarget","D")); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(l4); pc = 35; continue;
    case 35:
      __pc = 35;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 36; continue;
    case 36:
      __pc = 36;
      r = s.pop(); if (r == 0) { pc = 44; } else { pc = 37; } continue;
    case 37:
      __pc = 37;
      s.push(l4); pc = 38; continue;
    case 38:
      __pc = 38;
      r = s.pop();
      __ctx.putStatic("io/github/sjouwer/gammautils/NightVisionManager","dynamicNightVisionTarget","D",r); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(l4); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(1); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(0); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(1); pc = 43; continue;
    case 43:
      __pc = 43;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","setNightVision","(DZZZ)V", av); pc = 44; continue;
    case 44:
      __pc = 44;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setNightVision(DZZ)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
    l0 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isDynamicEnabled","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 11; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l3); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); if (r == 0) { pc = 10; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push("text.gammautils.message.incompatibleWithDynamicNightVision"); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      l4 = s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l4); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 10; continue;
    case 10:
      __pc = 10;
      return;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l2); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l3); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(0); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","setNightVision","(DZZZ)V", av); pc = 16; continue;
    case 16:
      __pc = 16;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setNightVision(DZZZ)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6;
    l0 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    l4 = __args[3];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","transitionTimer","Ljava/util/Timer;")); pc = 1; continue;
    case 1:
      __pc = 1;
      r = s.pop(); if (r == null) { pc = 4; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","transitionTimer","Ljava/util/Timer;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.pop();
      throw __ctx.toError(("java.util.Timer.cancel") + ' needs the client internals');
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isLimiterEnabled","()Z", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); if (r == 0) { pc = 21; } else { pc = 7; } continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getMaximumStrength","()I", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getMinimumStrength","()I", rv, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); var l = s.pop(); if (l <= r) { pc = 21; } else { pc = 12; } continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 14; continue;
    case 14:
      __pc = 14;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getMinimumStrength","()I", rv, [])); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop(); s.push(Number(r)); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 17; continue;
    case 17:
      __pc = 17;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getMaximumStrength","()I", rv, [])); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop(); s.push(Number(r)); pc = 19; continue;
    case 19:
      __pc = 19;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Math.clamp") + ' needs the client internals');
    case 20:
      __pc = 20;
      l0 = s.pop(); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l2); pc = 22; continue;
    case 22:
      __pc = 22;
      r = s.pop(); if (r == 0) { pc = 48; } else { pc = 23; } continue;
    case 23:
      __pc = 23;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 24; continue;
    case 24:
      __pc = 24;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isSmoothTransitionEnabled","()Z", rv, [])); pc = 25; continue;
    case 25:
      __pc = 25;
      r = s.pop(); if (r != 0) { pc = 28; } else { pc = 26; } continue;
    case 26:
      __pc = 26;
      s.push(l4); pc = 27; continue;
    case 27:
      __pc = 27;
      r = s.pop(); if (r == 0) { pc = 48; } else { pc = 28; } continue;
    case 28:
      __pc = 28;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l4); pc = 30; continue;
    case 30:
      __pc = 30;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getTransitionSpeed","(Z)D", rv, av)); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(100); pc = 32; continue;
    case 32:
      __pc = 32;
      r = s.pop(); s.push(s.pop() / r); pc = 33; continue;
    case 33:
      __pc = 33;
      l5 = s.pop(); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(l0); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 36; continue;
    case 36:
      __pc = 36;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getValue","()D", rv, [])); pc = 37; continue;
    case 37:
      __pc = 37;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 38; continue;
    case 38:
      __pc = 38;
      r = s.pop(); if (r >= 0) { pc = 43; } else { pc = 39; } continue;
    case 39:
      __pc = 39;
      s.push(l5); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(-1); pc = 41; continue;
    case 41:
      __pc = 41;
      r = s.pop(); s.push(s.pop() * r); pc = 42; continue;
    case 42:
      __pc = 42;
      l5 = s.pop(); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l0); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(l5); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(l3); pc = 46; continue;
    case 46:
      __pc = 46;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","startTransitionTimer","(DDZ)V", av); pc = 47; continue;
    case 47:
      __pc = 47;
      pc = undefined; continue;
    case 48:
      __pc = 48;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 49; continue;
    case 49:
      __pc = 49;
      s.push(l0); pc = 50; continue;
    case 50:
      __pc = 50;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","setValue","(D)V", rv, av); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(l0); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push(0); pc = 53; continue;
    case 53:
      __pc = 53;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 54; continue;
    case 54:
      __pc = 54;
      r = s.pop(); if (r != 0) { pc = 57; } else { pc = 55; } continue;
    case 55:
      __pc = 55;
      s.push(0); pc = 56; continue;
    case 56:
      __pc = 56;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","setNightVisionStatus","(Z)V", av); pc = 57; continue;
    case 57:
      __pc = 57;
      s.push(l3); pc = 58; continue;
    case 58:
      __pc = 58;
      r = s.pop(); if (r == 0) { pc = 60; } else { pc = 59; } continue;
    case 59:
      __pc = 59;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","showNightVisionStatusHudMessage","()V", []); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 61; continue;
    case 61:
      __pc = 61;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isToggleUpdateEnabled","()Z", rv, [])); pc = 62; continue;
    case 62:
      __pc = 62;
      r = s.pop(); if (r == 0) { pc = 72; } else { pc = 63; } continue;
    case 63:
      __pc = 63;
      s.push(l0); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(0); pc = 65; continue;
    case 65:
      __pc = 65;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 66; continue;
    case 66:
      __pc = 66;
      r = s.pop(); if (r == 0) { pc = 72; } else { pc = 67; } continue;
    case 67:
      __pc = 67;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 68; continue;
    case 68:
      __pc = 68;
      s.push(l0); pc = 69; continue;
    case 69:
      __pc = 69;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Math","round","(D)J", av)); pc = 70; continue;
    case 70:
      __pc = 70;
      r = s.pop(); s.push(Number(r)); pc = 71; continue;
    case 71:
      __pc = 71;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","setToggledValue","(I)V", rv, av); pc = 72; continue;
    case 72:
      __pc = 72;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toggleDynamicNightVision()V": function (__ctx, __self, __args) {
    var l0, l1;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isDynamicEnabled","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r != 0) { pc = 5; } else { pc = 3; } continue;
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
      l0 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","setDynamicStatus","(Z)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); if (r == 0) { pc = 14; } else { pc = 12; } continue;
    case 12:
      __pc = 12;
      s.push("On"); pc = 13; continue;
    case 13:
      __pc = 13;
      pc = undefined; continue;
    case 14:
      __pc = 14;
      s.push("Off"); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.unsupportedLambda("io/github/sjouwer/gammautils/NightVisionManager.toggleDynamicNightVision:33")); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 17; continue;
    case 17:
      __pc = 17;
      l1 = s.pop(); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l1); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 20; continue;
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toggleStatusEffect()V": function (__ctx, __self, __args) {
    var l0, l1;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isStatusEffectEnabled","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r != 0) { pc = 5; } else { pc = 3; } continue;
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
      l0 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","setStatusEffectStatus","(Z)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","updateNightVision","()V", []); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); if (r == 0) { pc = 15; } else { pc = 13; } continue;
    case 13:
      __pc = 13;
      s.push("On"); pc = 14; continue;
    case 14:
      __pc = 14;
      pc = undefined; continue;
    case 15:
      __pc = 15;
      s.push("Off"); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.unsupportedLambda("io/github/sjouwer/gammautils/NightVisionManager.toggleStatusEffect:36")); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 18; continue;
    case 18:
      __pc = 18;
      l1 = s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l1); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 21; continue;
    case 21:
      __pc = 21;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toggleSmoothTransition()V": function (__ctx, __self, __args) {
    var l0, l1;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isSmoothTransitionEnabled","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r != 0) { pc = 5; } else { pc = 3; } continue;
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
      l0 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","setSmoothTransitionStatus","(Z)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); if (r == 0) { pc = 14; } else { pc = 12; } continue;
    case 12:
      __pc = 12;
      s.push("On"); pc = 13; continue;
    case 13:
      __pc = 13;
      pc = undefined; continue;
    case 14:
      __pc = 14;
      s.push("Off"); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.unsupportedLambda("io/github/sjouwer/gammautils/NightVisionManager.toggleSmoothTransition:33")); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 17; continue;
    case 17:
      __pc = 17;
      l1 = s.pop(); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l1); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","sendMessage","(Lnet/minecraft/class_2561;)V", av); pc = 20; continue;
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setNightVisionStatus(Z)V": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","setStatus","(Z)V", rv, av); pc = 3; continue;
    case 3:
      __pc = 3;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","updateNightVision","()V", []); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "startTransitionTimer(DDZ)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
    l0 = __args[0];
    l2 = __args[1];
    l4 = __args[2];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("java/util/Timer")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.pop();
      throw __ctx.toError(("java.util.Timer.<init>") + ' needs the client internals');
    case 3:
      __pc = 3;
      r = s.pop();
      __ctx.putStatic("io/github/sjouwer/gammautils/NightVisionManager","transitionTimer","Ljava/util/Timer;",r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/NightVisionManager","transitionTimer","Ljava/util/Timer;")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.newInstance("io/github/sjouwer/gammautils/NightVisionManager$1")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l4); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("io/github/sjouwer/gammautils/NightVisionManager$1","<init>","(DDZ)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(0n); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(10); pc = 13; continue;
    case 13:
      __pc = 13;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.Timer.scheduleAtFixedRate") + ' needs the client internals');
    case 14:
      __pc = 14;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/NightVisionManager"].__fields = [{"name":"nightVision","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;"},{"name":"client","descriptor":"Lnet/minecraft/class_310;"},{"name":"transitionTimer","descriptor":"Ljava/util/Timer;"},{"name":"dynamicNightVisionTarget","descriptor":"D"}];
  defineClass("io/github/sjouwer/gammautils/compat/SodiumConfigBuilder", {
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
  CLASSES["io/github/sjouwer/gammautils/compat/SodiumConfigBuilder"].__fields = [];
  defineClass("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings", {
    "getValue()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","value","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setValue(D)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      __ctx.putField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","value","D",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getDefaultValue()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","defaultGamma","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); s.push(Number(r)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(100); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); s.push(s.pop() / r); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getToggledValue()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","toggledGamma","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); s.push(Number(r)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(100); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); s.push(s.pop() / r); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setToggledValue(D)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      s.push(100); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(s.pop() * r); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Math","round","(D)J", av)); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); s.push(Number(r)); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","toggledGamma","I",target, r); pc = 7; continue;
    case 7:
      __pc = 7;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isToggleUpdateEnabled()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","updateToggle","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getStepStrength()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","gammaStep","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); s.push(Number(r)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(100); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); s.push(s.pop() / r); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isSmoothTransitionEnabled()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","transition","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Transition;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Transition","smoothTransition","Z", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setSmoothTransitionStatus(Z)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","transition","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Transition;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Transition","smoothTransition","Z",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getTransitionSpeed(Z)D": function (__ctx, __self, __args) {
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
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma","transitionSpeed","I", s.pop())); pc = 5; continue;
    case 5:
      __pc = 5;
      pc = undefined; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","transition","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Transition;", s.pop())); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Transition","transitionSpeed","I", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); s.push(Number(r)); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(100); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); s.push(s.pop() / r); pc = 12; continue;
    case 12:
      __pc = 12;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isStatusEffectEnabled()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","showStatusEffect","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setStatusEffectStatus(Z)V": function (__ctx, __self, __args) {
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
      __ctx.putField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","showStatusEffect","Z",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isLimiterEnabled()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","limiter","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Limiter;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Limiter","limitCheck","Z", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMinimumStrength()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","limiter","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Limiter;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Limiter","minGamma","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(Number(r)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(100); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); s.push(s.pop() / r); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMaximumStrength()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","limiter","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Limiter;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Limiter","maxGamma","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(Number(r)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(100); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); s.push(s.pop() / r); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isDynamicEnabled()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma","enabled","Z", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setDynamicStatus(Z)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma","enabled","Z",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isDynamicPaused()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma","paused","Z", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toggleDynamicPause()V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma","paused","Z", s.pop())); pc = 5; continue;
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
      r = s.pop();
      var target = s.pop();
      __ctx.putField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma","paused","Z",target, r); pc = 10; continue;
    case 10:
      __pc = 10;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMinDynamicStrength()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma","minGamma","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(Number(r)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(100); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); s.push(s.pop() / r); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMaxDynamicStrength()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma","maxGamma","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(Number(r)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(100); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); s.push(s.pop() / r); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getDynamicAveragingLightRange()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma","averagingLightRange","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSkyBrightnessOverride()F": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma","skyBrightnessOverride","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(Number(r)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(100); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); s.push(s.pop() / r); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isHudMessageEnabled()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","hudMessage","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$HudMessage;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$HudMessage","showMessage","Z", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getDefaultHudColor()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","hudMessage","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$HudMessage;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$HudMessage","defaultColor","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getPositiveHudColor()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","hudMessage","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$HudMessage;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$HudMessage","positiveColor","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getNegativeHudColor()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","hudMessage","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$HudMessage;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings$HudMessage","negativeColor","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/config/ModConfig$GammaSettings"].__fields = [{"name":"value","descriptor":"D"},{"name":"defaultGamma","descriptor":"I"},{"name":"toggledGamma","descriptor":"I"},{"name":"updateToggle","descriptor":"Z"},{"name":"gammaStep","descriptor":"I"},{"name":"showStatusEffect","descriptor":"Z"},{"name":"resetOnClose","descriptor":"Z"},{"name":"transition","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Transition;"},{"name":"dynamic","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DynamicGamma;"},{"name":"dimensionPreference","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$DimensionPreference;"},{"name":"limiter","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$Limiter;"},{"name":"hudMessage","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings$HudMessage;"}];
  defineClass("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings", {
    "setStatus(Z)V": function (__ctx, __self, __args) {
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
      __ctx.putField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","enabled","Z",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isEnabled()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","enabled","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getValue()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","value","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setValue(D)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      __ctx.putField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","value","D",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getToggledValue()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","toggledNightVision","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setToggledValue(I)V": function (__ctx, __self, __args) {
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
      __ctx.putField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","toggledNightVision","I",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isToggleUpdateEnabled()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","updateToggle","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getStepValue()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","nightVisionStep","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isSmoothTransitionEnabled()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","transition","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Transition;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Transition","smoothTransition","Z", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setSmoothTransitionStatus(Z)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","transition","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Transition;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Transition","smoothTransition","Z",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getTransitionSpeed(Z)D": function (__ctx, __self, __args) {
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
      r = s.pop(); if (r == 0) { pc = 7; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision","transitionSpeed","I", s.pop())); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); s.push(Number(r)); pc = 6; continue;
    case 6:
      __pc = 6;
      pc = undefined; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","transition","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Transition;", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Transition","transitionSpeed","I", s.pop())); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); s.push(Number(r)); pc = 11; continue;
    case 11:
      __pc = 11;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isLimiterEnabled()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","limiter","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Limiter;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Limiter","limitCheck","Z", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMaximumStrength()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","limiter","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Limiter;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Limiter","maxNightVision","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMinimumStrength()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","limiter","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Limiter;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Limiter","minNightVision","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isStatusEffectEnabled()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","showStatusEffect","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setStatusEffectStatus(Z)V": function (__ctx, __self, __args) {
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
      __ctx.putField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","showStatusEffect","Z",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isDynamicEnabled()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision","enabled","Z", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setDynamicStatus(Z)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision","enabled","Z",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isDynamicPaused()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision","paused","Z", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toggleDynamicPause()V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision","paused","Z", s.pop())); pc = 5; continue;
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
      r = s.pop();
      var target = s.pop();
      __ctx.putField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision","paused","Z",target, r); pc = 10; continue;
    case 10:
      __pc = 10;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMinDynamicStrength()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision","minNightVision","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMaxDynamicStrength()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision","maxNightVision","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getDynamicAveragingLightRange()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision","averagingLightRange","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSkyBrightnessOverride()F": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","dynamic","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision","skyBrightnessOverride","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(Number(r)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(100); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); s.push(s.pop() / r); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isHudMessageEnabled()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","hudMessage","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$HudMessage;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$HudMessage","showMessage","Z", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getDefaultHudColor()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","hudMessage","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$HudMessage;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$HudMessage","defaultColor","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getPositiveHudColor()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","hudMessage","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$HudMessage;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$HudMessage","positiveColor","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getNegativeHudColor()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","hudMessage","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$HudMessage;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$HudMessage","negativeColor","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getEnabledHudColor()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","hudMessage","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$HudMessage;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$HudMessage","enabledColor","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getDisabledHudColor()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","hudMessage","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$HudMessage;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$HudMessage","disabledColor","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings"].__fields = [{"name":"enabled","descriptor":"Z"},{"name":"value","descriptor":"D"},{"name":"toggledNightVision","descriptor":"I"},{"name":"updateToggle","descriptor":"Z"},{"name":"nightVisionStep","descriptor":"I"},{"name":"brightenFogColor","descriptor":"Z"},{"name":"showStatusEffect","descriptor":"Z"},{"name":"resetOnClose","descriptor":"Z"},{"name":"transition","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Transition;"},{"name":"dynamic","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DynamicNightVision;"},{"name":"dimensionPreference","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$DimensionPreference;"},{"name":"limiter","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$Limiter;"},{"name":"hudMessage","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings$HudMessage;"}];
  defineClass("io/github/sjouwer/gammautils/config/ModConfig$OtherSettings", {
    "namespacedCommandsEnabled()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig$OtherSettings","namespacedCommands","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/config/ModConfig$OtherSettings"].__fields = [{"name":"namespacedCommands","descriptor":"Z"}];
  defineClass("io/github/sjouwer/gammautils/config/ModMenuApiImpl", {
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
  CLASSES["io/github/sjouwer/gammautils/config/ModMenuApiImpl"].__fields = [];
  defineClass("io/github/sjouwer/gammautils/mixin/MixinStatusEffectUtil", {
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
    "getPercentageText(Lnet/minecraft/class_1293;FFLorg/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5;
    l0 = __args[0];
    l1 = __args[1];
    l2 = __args[2];
    l3 = __args[3];
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
      s.push(__ctx.invoke("net/minecraft/world/effect/MobEffectInstance","getEffect","()Lnet/minecraft/class_6880;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      l4 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l4); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/core/Holder","value","()Ljava/lang/Object;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.isInstance(s.pop(), "io/github/sjouwer/gammautils/statuseffect/GammaStatusEffect")); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); if (r == 0) { pc = 20; } else { pc = 7; } continue;
    case 7:
      __pc = 7;
      s.push(l4); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","NIGHT_VISION","Lnet/minecraft/class_6880$class_6881;")); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/core/Holder","equals","(Ljava/lang/Object;)Z", rv, av)); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); if (r == 0) { pc = 13; } else { pc = 11; } continue;
    case 11:
      __pc = 11;
      s.push(__ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","getNightVisionPercentage","()I", [])); pc = 12; continue;
    case 12:
      __pc = 12;
      pc = undefined; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","getGammaPercentage","()I", [])); pc = 14; continue;
    case 14:
      __pc = 14;
      l5 = s.pop(); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l3); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l5); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.unsupportedLambda("io/github/sjouwer/gammautils/mixin/MixinStatusEffectUtil.getPercentageText:46")); pc = 18; continue;
    case 18:
      __pc = 18;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","literal","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable","setReturnValue","(Ljava/lang/Object;)V", rv, av); pc = 20; continue;
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/mixin/MixinStatusEffectUtil"].__fields = [];
  defineClass("io/github/sjouwer/gammautils/statuseffect/GammaStatusEffect", {
    "<init>(Ljava/lang/String;Lnet/minecraft/class_4081;I)V": function (__ctx, __self, __args) {
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
      s.push(l2); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l3); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/world/effect/MobEffect","<init>","(Lnet/minecraft/class_4081;I)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("io/github/sjouwer/gammautils/statuseffect/GammaStatusEffect","key","Ljava/lang/String;",target, r); pc = 7; continue;
    case 7:
      __pc = 7;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "method_5552(II)Z": function (__ctx, __self, __args) {
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
      s.push(0); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "method_5559()Ljava/lang/String;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("io/github/sjouwer/gammautils/statuseffect/GammaStatusEffect","key","Ljava/lang/String;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.unsupportedLambda("io/github/sjouwer/gammautils/statuseffect/GammaStatusEffect.method_5559:4")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getIdentifier()Lnet/minecraft/class_2960;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push("gammautils"); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/statuseffect/GammaStatusEffect","key","Ljava/lang/String;", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.unsupportedLambda("io/github/sjouwer/gammautils/statuseffect/GammaStatusEffect.getIdentifier:6")); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/resources/Identifier","fromNamespaceAndPath","(Ljava/lang/String;Ljava/lang/String;)Lnet/minecraft/class_2960;", av)); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/statuseffect/GammaStatusEffect"].__fields = [{"name":"key","descriptor":"Ljava/lang/String;"}];
  defineClass("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager", {
    "updateAllEffects()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","updateGammaStatusEffect","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","updateNightVision","()V", []); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "updateNightVision()V": function (__ctx, __self, __args) {
    var l0;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","client","Lnet/minecraft/class_310;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1724","Lnet/minecraft/class_746;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      l0 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); if (r != null) { pc = 6; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      return;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isEnabled","()Z", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); if (r == 0) { pc = 18; } else { pc = 10; } continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 12; continue;
    case 12:
      __pc = 12;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isStatusEffectEnabled","()Z", rv, [])); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); if (r == 0) { pc = 18; } else { pc = 14; } continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","NIGHT_VISION","Lnet/minecraft/class_6880$class_6881;")); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","addPermEffect","(Lnet/minecraft/class_746;Lnet/minecraft/class_6880;)V", av); pc = 17; continue;
    case 17:
      __pc = 17;
      pc = undefined; continue;
    case 18:
      __pc = 18;
      s.push(l0); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","NIGHT_VISION","Lnet/minecraft/class_6880$class_6881;")); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/player/LocalPlayer","removeEffect","(Lnet/minecraft/class_6880;)Z", rv, av)); pc = 21; continue;
    case 21:
      __pc = 21;
      s.pop(); pc = 22; continue;
    case 22:
      __pc = 22;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "updateGammaStatusEffect()V": function (__ctx, __self, __args) {
    var l0, l1;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","client","Lnet/minecraft/class_310;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1724","Lnet/minecraft/class_746;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      l0 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); if (r != null) { pc = 6; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      return;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;", s.pop())); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isStatusEffectEnabled","()Z", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); if (r == 0) { pc = 41; } else { pc = 10; } continue;
    case 10:
      __pc = 10;
      s.push(__ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","getGammaPercentage","()I", [])); pc = 11; continue;
    case 11:
      __pc = 11;
      l1 = s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(100); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop(); var l = s.pop(); if (l <= r) { pc = 27; } else { pc = 15; } continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","BRIGHT","Lnet/minecraft/class_6880$class_6881;")); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/player/LocalPlayer","hasEffect","(Lnet/minecraft/class_6880;)Z", rv, av)); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop(); if (r != 0) { pc = 26; } else { pc = 19; } continue;
    case 19:
      __pc = 19;
      s.push(l0); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","DIM","Lnet/minecraft/class_6880$class_6881;")); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/player/LocalPlayer","removeEffect","(Lnet/minecraft/class_6880;)Z", rv, av)); pc = 22; continue;
    case 22:
      __pc = 22;
      s.pop(); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","BRIGHT","Lnet/minecraft/class_6880$class_6881;")); pc = 25; continue;
    case 25:
      __pc = 25;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","addPermEffect","(Lnet/minecraft/class_746;Lnet/minecraft/class_6880;)V", av); pc = 26; continue;
    case 26:
      __pc = 26;
      return;
    case 27:
      __pc = 27;
      s.push(l1); pc = 28; continue;
    case 28:
      __pc = 28;
      r = s.pop(); if (r >= 0) { pc = 41; } else { pc = 29; } continue;
    case 29:
      __pc = 29;
      s.push(l0); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","DIM","Lnet/minecraft/class_6880$class_6881;")); pc = 31; continue;
    case 31:
      __pc = 31;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/player/LocalPlayer","hasEffect","(Lnet/minecraft/class_6880;)Z", rv, av)); pc = 32; continue;
    case 32:
      __pc = 32;
      r = s.pop(); if (r != 0) { pc = 40; } else { pc = 33; } continue;
    case 33:
      __pc = 33;
      s.push(l0); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","BRIGHT","Lnet/minecraft/class_6880$class_6881;")); pc = 35; continue;
    case 35:
      __pc = 35;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/player/LocalPlayer","removeEffect","(Lnet/minecraft/class_6880;)Z", rv, av)); pc = 36; continue;
    case 36:
      __pc = 36;
      s.pop(); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(l0); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","DIM","Lnet/minecraft/class_6880$class_6881;")); pc = 39; continue;
    case 39:
      __pc = 39;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","addPermEffect","(Lnet/minecraft/class_746;Lnet/minecraft/class_6880;)V", av); pc = 40; continue;
    case 40:
      __pc = 40;
      return;
    case 41:
      __pc = 41;
      s.push(l0); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","DIM","Lnet/minecraft/class_6880$class_6881;")); pc = 43; continue;
    case 43:
      __pc = 43;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/player/LocalPlayer","removeEffect","(Lnet/minecraft/class_6880;)Z", rv, av)); pc = 44; continue;
    case 44:
      __pc = 44;
      s.pop(); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(l0); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/statuseffect/StatusEffectManager","BRIGHT","Lnet/minecraft/class_6880$class_6881;")); pc = 47; continue;
    case 47:
      __pc = 47;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/player/LocalPlayer","removeEffect","(Lnet/minecraft/class_6880;)Z", rv, av)); pc = 48; continue;
    case 48:
      __pc = 48;
      s.pop(); pc = 49; continue;
    case 49:
      __pc = 49;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "addPermEffect(Lnet/minecraft/class_746;Lnet/minecraft/class_6880;)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("net/minecraft/world/effect/MobEffectInstance")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(-1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/world/effect/MobEffectInstance","<init>","(Lnet/minecraft/class_6880;I)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      l2 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/player/LocalPlayer","addEffect","(Lnet/minecraft/class_1293;)Z", rv, av)); pc = 9; continue;
    case 9:
      __pc = 9;
      s.pop(); pc = 10; continue;
    case 10:
      __pc = 10;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/statuseffect/StatusEffectManager"].__fields = [{"name":"client","descriptor":"Lnet/minecraft/class_310;"},{"name":"config","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig;"},{"name":"BRIGHT","descriptor":"Lnet/minecraft/class_6880$class_6881;"},{"name":"DIM","descriptor":"Lnet/minecraft/class_6880$class_6881;"},{"name":"NIGHT_VISION","descriptor":"Lnet/minecraft/class_6880$class_6881;"}];
  defineClass("io/github/sjouwer/gammautils/util/InfoProvider", {
    "sendMessage(Lnet/minecraft/class_2561;)V": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","client","Lnet/minecraft/class_310;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1724","Lnet/minecraft/class_746;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r != null) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/GammaUtils","LOGGER","Lorg/slf4j/Logger;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/Component","getString","()Ljava/lang/String;", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("org/slf4j/Logger","info","(Ljava/lang/String;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","client","Lnet/minecraft/class_310;")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1724","Lnet/minecraft/class_746;", s.pop())); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(0); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/player/LocalPlayer","displayClientMessage","(Lnet/minecraft/class_2561;Z)V", rv, av); pc = 13; continue;
    case 13:
      __pc = 13;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "showGammaHudMessage()V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isHudMessageEnabled","()Z", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r != 0) { pc = 5; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      return;
    case 5:
      __pc = 5;
      s.push(__ctx.invokeStatic("io/github/sjouwer/gammautils/GammaManager","getGammaPercentage","()I", [])); pc = 6; continue;
    case 6:
      __pc = 6;
      l0 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("text.gammautils.message.gammaPercentage"); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(1); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(s[s.length - 1]); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;[Ljava/lang/Object;)Lnet/minecraft/class_5250;", av)); pc = 16; continue;
    case 16:
      __pc = 16;
      l1 = s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop(); if (r >= 0) { pc = 24; } else { pc = 19; } continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;", s.pop())); pc = 21; continue;
    case 21:
      __pc = 21;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getNegativeHudColor","()I", rv, [])); pc = 22; continue;
    case 22:
      __pc = 22;
      l2 = s.pop(); pc = 23; continue;
    case 23:
      __pc = 23;
      pc = undefined; continue;
    case 24:
      __pc = 24;
      s.push(l0); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(100); pc = 26; continue;
    case 26:
      __pc = 26;
      r = s.pop(); var l = s.pop(); if (l <= r) { pc = 32; } else { pc = 27; } continue;
    case 27:
      __pc = 27;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;", s.pop())); pc = 29; continue;
    case 29:
      __pc = 29;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getPositiveHudColor","()I", rv, [])); pc = 30; continue;
    case 30:
      __pc = 30;
      l2 = s.pop(); pc = 31; continue;
    case 31:
      __pc = 31;
      pc = undefined; continue;
    case 32:
      __pc = 32;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;", s.pop())); pc = 34; continue;
    case 34:
      __pc = 34;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","getDefaultHudColor","()I", rv, [])); pc = 35; continue;
    case 35:
      __pc = 35;
      l2 = s.pop(); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l1); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(l2); pc = 38; continue;
    case 38:
      __pc = 38;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","withColor","(I)Lnet/minecraft/class_5250;", rv, av)); pc = 39; continue;
    case 39:
      __pc = 39;
      s.pop(); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","client","Lnet/minecraft/class_310;")); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1705","Lnet/minecraft/class_329;", s.pop())); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(l1); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(0); pc = 44; continue;
    case 44:
      __pc = 44;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/gui/Gui","setOverlayMessage","(Lnet/minecraft/class_2561;Z)V", rv, av); pc = 45; continue;
    case 45:
      __pc = 45;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "showDynamicGammaHudMessage()V": function (__ctx, __self, __args) {
    var l0;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isHudMessageEnabled","()Z", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r != 0) { pc = 5; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      return;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","gamma","Lio/github/sjouwer/gammautils/config/ModConfig$GammaSettings;", s.pop())); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$GammaSettings","isDynamicPaused","()Z", rv, [])); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); if (r == 0) { pc = 19; } else { pc = 9; } continue;
    case 9:
      __pc = 9;
      s.push("text.gammautils.message.dynamicGammaDisabled"); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 11; continue;
    case 11:
      __pc = 11;
      l0 = s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getDisabledHudColor","()I", rv, [])); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","withColor","(I)Lnet/minecraft/class_5250;", rv, av)); pc = 17; continue;
    case 17:
      __pc = 17;
      s.pop(); pc = 18; continue;
    case 18:
      __pc = 18;
      pc = undefined; continue;
    case 19:
      __pc = 19;
      s.push("text.gammautils.message.dynamicGammaEnabled"); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 21; continue;
    case 21:
      __pc = 21;
      l0 = s.pop(); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l0); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 25; continue;
    case 25:
      __pc = 25;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getEnabledHudColor","()I", rv, [])); pc = 26; continue;
    case 26:
      __pc = 26;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","withColor","(I)Lnet/minecraft/class_5250;", rv, av)); pc = 27; continue;
    case 27:
      __pc = 27;
      s.pop(); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","client","Lnet/minecraft/class_310;")); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1705","Lnet/minecraft/class_329;", s.pop())); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l0); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(0); pc = 32; continue;
    case 32:
      __pc = 32;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/gui/Gui","setOverlayMessage","(Lnet/minecraft/class_2561;Z)V", rv, av); pc = 33; continue;
    case 33:
      __pc = 33;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "showDynamicNightVisionHudMessage()V": function (__ctx, __self, __args) {
    var l0;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isHudMessageEnabled","()Z", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r != 0) { pc = 5; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      return;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isDynamicPaused","()Z", rv, [])); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); if (r == 0) { pc = 19; } else { pc = 9; } continue;
    case 9:
      __pc = 9;
      s.push("text.gammautils.message.dynamicNightVisionDisabled"); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 11; continue;
    case 11:
      __pc = 11;
      l0 = s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getDisabledHudColor","()I", rv, [])); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","withColor","(I)Lnet/minecraft/class_5250;", rv, av)); pc = 17; continue;
    case 17:
      __pc = 17;
      s.pop(); pc = 18; continue;
    case 18:
      __pc = 18;
      pc = undefined; continue;
    case 19:
      __pc = 19;
      s.push("text.gammautils.message.dynamicNightVisionEnabled"); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 21; continue;
    case 21:
      __pc = 21;
      l0 = s.pop(); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l0); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 25; continue;
    case 25:
      __pc = 25;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getEnabledHudColor","()I", rv, [])); pc = 26; continue;
    case 26:
      __pc = 26;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","withColor","(I)Lnet/minecraft/class_5250;", rv, av)); pc = 27; continue;
    case 27:
      __pc = 27;
      s.pop(); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","client","Lnet/minecraft/class_310;")); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1705","Lnet/minecraft/class_329;", s.pop())); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l0); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(0); pc = 32; continue;
    case 32:
      __pc = 32;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/gui/Gui","setOverlayMessage","(Lnet/minecraft/class_2561;Z)V", rv, av); pc = 33; continue;
    case 33:
      __pc = 33;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "showNightVisionStatusHudMessage()V": function (__ctx, __self, __args) {
    var l0;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isHudMessageEnabled","()Z", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r != 0) { pc = 5; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      return;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","isEnabled","()Z", rv, [])); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); if (r == 0) { pc = 11; } else { pc = 9; } continue;
    case 9:
      __pc = 9;
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/InfoProvider","showNightVisionStrengthHudMessage","()V", []); pc = 10; continue;
    case 10:
      __pc = 10;
      pc = undefined; continue;
    case 11:
      __pc = 11;
      s.push("text.gammautils.message.nightVisionDisabled"); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 13; continue;
    case 13:
      __pc = 13;
      l0 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 17; continue;
    case 17:
      __pc = 17;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getDisabledHudColor","()I", rv, [])); pc = 18; continue;
    case 18:
      __pc = 18;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","withColor","(I)Lnet/minecraft/class_5250;", rv, av)); pc = 19; continue;
    case 19:
      __pc = 19;
      s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","client","Lnet/minecraft/class_310;")); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1705","Lnet/minecraft/class_329;", s.pop())); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l0); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(0); pc = 24; continue;
    case 24:
      __pc = 24;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/gui/Gui","setOverlayMessage","(Lnet/minecraft/class_2561;Z)V", rv, av); pc = 25; continue;
    case 25:
      __pc = 25;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "showNightVisionStrengthHudMessage()V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("io/github/sjouwer/gammautils/NightVisionManager","getNightVisionPercentage","()I", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      l0 = s.pop(); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("text.gammautils.message.nightVisionPercentage"); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(1); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(s[s.length - 1]); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;[Ljava/lang/Object;)Lnet/minecraft/class_5250;", av)); pc = 11; continue;
    case 11:
      __pc = 11;
      l1 = s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); if (r >= 0) { pc = 19; } else { pc = 14; } continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 16; continue;
    case 16:
      __pc = 16;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getNegativeHudColor","()I", rv, [])); pc = 17; continue;
    case 17:
      __pc = 17;
      l2 = s.pop(); pc = 18; continue;
    case 18:
      __pc = 18;
      pc = undefined; continue;
    case 19:
      __pc = 19;
      s.push(l0); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(100); pc = 21; continue;
    case 21:
      __pc = 21;
      r = s.pop(); var l = s.pop(); if (l <= r) { pc = 27; } else { pc = 22; } continue;
    case 22:
      __pc = 22;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 24; continue;
    case 24:
      __pc = 24;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getPositiveHudColor","()I", rv, [])); pc = 25; continue;
    case 25:
      __pc = 25;
      l2 = s.pop(); pc = 26; continue;
    case 26:
      __pc = 26;
      pc = undefined; continue;
    case 27:
      __pc = 27;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","config","Lio/github/sjouwer/gammautils/config/ModConfig;")); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.getField("io/github/sjouwer/gammautils/config/ModConfig","nightVision","Lio/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings;", s.pop())); pc = 29; continue;
    case 29:
      __pc = 29;
      var rv = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/config/ModConfig$NightVisionSettings","getDefaultHudColor","()I", rv, [])); pc = 30; continue;
    case 30:
      __pc = 30;
      l2 = s.pop(); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l1); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(l2); pc = 33; continue;
    case 33:
      __pc = 33;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","withColor","(I)Lnet/minecraft/class_5250;", rv, av)); pc = 34; continue;
    case 34:
      __pc = 34;
      s.pop(); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/InfoProvider","client","Lnet/minecraft/class_310;")); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1705","Lnet/minecraft/class_329;", s.pop())); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(l1); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(0); pc = 39; continue;
    case 39:
      __pc = 39;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/gui/Gui","setOverlayMessage","(Lnet/minecraft/class_2561;Z)V", rv, av); pc = 40; continue;
    case 40:
      __pc = 40;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/util/InfoProvider"].__fields = [{"name":"client","descriptor":"Lnet/minecraft/class_310;"},{"name":"config","descriptor":"Lio/github/sjouwer/gammautils/config/ModConfig;"}];
  defineClass("io/github/sjouwer/gammautils/util/LightLevelUtil", {
    "getAverageLightLevel(IF)Ljava/lang/Double;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/LightLevelUtil","client","Lnet/minecraft/class_310;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1687","Lnet/minecraft/class_638;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == null) { pc = 6; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/LightLevelUtil","client","Lnet/minecraft/class_310;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1724","Lnet/minecraft/class_746;", s.pop())); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r != null) { pc = 9; } else { pc = 6; } continue;
    case 6:
      __pc = 6;
      s.push(15); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/LightLevelUtil","client","Lnet/minecraft/class_310;")); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1724","Lnet/minecraft/class_746;", s.pop())); pc = 11; continue;
    case 11:
      __pc = 11;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/player/LocalPlayer","blockPosition","()Lnet/minecraft/class_2338;", rv, [])); pc = 12; continue;
    case 12:
      __pc = 12;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/core/BlockPos","above","()Lnet/minecraft/class_2338;", rv, [])); pc = 13; continue;
    case 13:
      __pc = 13;
      l2 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.newInstance("java/util/ArrayList")); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(s[s.length - 1]); pc = 16; continue;
    case 16:
      __pc = 16;
      var rv = s.pop();
      __ctx.invoke("java/util/ArrayList","<init>","()V", rv, []); pc = 17; continue;
    case 17:
      __pc = 17;
      l3 = s.pop(); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l3); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l2); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l1); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("io/github/sjouwer/gammautils/util/LightLevelUtil","getLightLevel","(Lnet/minecraft/class_2338;F)D", av)); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","add","(Ljava/lang/Object;)Z", rv, av)); pc = 24; continue;
    case 24:
      __pc = 24;
      s.pop(); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l0); pc = 26; continue;
    case 26:
      __pc = 26;
      r = s.pop(); if (r <= 0) { pc = 49; } else { pc = 27; } continue;
    case 27:
      __pc = 27;
      s.push(__ctx.invokeStatic("net/minecraft/core/Direction","values","()[Lnet/minecraft/class_2350;", [])); pc = 28; continue;
    case 28:
      __pc = 28;
      l4 = s.pop(); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l4); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(s.pop().length); pc = 31; continue;
    case 31:
      __pc = 31;
      l5 = s.pop(); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(0); pc = 33; continue;
    case 33:
      __pc = 33;
      l6 = s.pop(); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(l6); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l5); pc = 36; continue;
    case 36:
      __pc = 36;
      r = s.pop(); var l = s.pop(); if (l >= r) { pc = 49; } else { pc = 37; } continue;
    case 37:
      __pc = 37;
      s.push(l4); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(l6); pc = 39; continue;
    case 39:
      __pc = 39;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 40; continue;
    case 40:
      __pc = 40;
      l7 = s.pop(); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(l3); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(l2); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l7); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(l0); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(l1); pc = 46; continue;
    case 46:
      __pc = 46;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("io/github/sjouwer/gammautils/util/LightLevelUtil","addLightLevelsInDirection","(Ljava/util/List;Lnet/minecraft/class_2338;Lnet/minecraft/class_2350;IF)V", av); pc = 47; continue;
    case 47:
      __pc = 47;
      l6 = (l6 | 0) + 1; pc = 48; continue;
    case 48:
      __pc = 48;
      pc = undefined; continue;
    case 49:
      __pc = 49;
      s.push(l3); pc = 50; continue;
    case 50:
      __pc = 50;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","stream","()Ljava/util/stream/Stream;", rv, [])); pc = 51; continue;
    case 51:
      __pc = 51;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("io/github/sjouwer/gammautils/util/LightLevelUtil","lambda$getAverageLightLevel$0","(Ljava/lang/Double;)D", null, dv)); pc = 52; continue;
    case 52:
      __pc = 52;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.stream.Stream.mapToDouble") + ' needs the client internals');
    case 53:
      __pc = 53;
      s.pop();
      throw __ctx.toError(("java.util.stream.DoubleStream.average") + ' needs the client internals');
    case 54:
      __pc = 54;
      s.push(15); pc = 55; continue;
    case 55:
      __pc = 55;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.OptionalDouble.orElse") + ' needs the client internals');
    case 56:
      __pc = 56;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 57; continue;
    case 57:
      __pc = 57;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "addLightLevelsInDirection(Ljava/util/List;Lnet/minecraft/class_2338;Lnet/minecraft/class_2350;IF)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6;
    l0 = __args[0];
    l1 = __args[1];
    l2 = __args[2];
    l3 = __args[3];
    l4 = __args[4];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(0); pc = 1; continue;
    case 1:
      __pc = 1;
      l5 = s.pop(); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l5); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l3); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); var l = s.pop(); if (l >= r) { pc = 26; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l2); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l5); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/core/BlockPos","relative","(Lnet/minecraft/class_2350;I)Lnet/minecraft/class_2338;", rv, av)); pc = 9; continue;
    case 9:
      __pc = 9;
      l6 = s.pop(); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/LightLevelUtil","client","Lnet/minecraft/class_310;")); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1687","Lnet/minecraft/class_638;", s.pop())); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l6); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/multiplayer/ClientLevel","getBlockState","(Lnet/minecraft/class_2338;)Lnet/minecraft/class_2680;", rv, av)); pc = 14; continue;
    case 14:
      __pc = 14;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/level/block/state/BlockState","isAir","()Z", rv, [])); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop(); if (r != 0) { pc = 17; } else { pc = 16; } continue;
    case 16:
      __pc = 16;
      pc = undefined; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l6); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l4); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("io/github/sjouwer/gammautils/util/LightLevelUtil","getLightLevel","(Lnet/minecraft/class_2338;F)D", av)); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","add","(Ljava/lang/Object;)Z", rv, av)); pc = 23; continue;
    case 23:
      __pc = 23;
      s.pop(); pc = 24; continue;
    case 24:
      __pc = 24;
      l5 = (l5 | 0) + 1; pc = 25; continue;
    case 25:
      __pc = 25;
      pc = undefined; continue;
    case 26:
      __pc = 26;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getLightLevel(Lnet/minecraft/class_2338;F)D": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/LightLevelUtil","client","Lnet/minecraft/class_310;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1687","Lnet/minecraft/class_638;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r != null) { pc = 5; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(15); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/LightLevelUtil","client","Lnet/minecraft/class_310;")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1687","Lnet/minecraft/class_638;", s.pop())); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/multiplayer/ClientLevel","getLightEngine","()Lnet/minecraft/class_3568;", rv, [])); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("net/minecraft/world/level/LightLayer","field_9282","Lnet/minecraft/class_1944;")); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/level/lighting/LevelLightEngine","getLayerListener","(Lnet/minecraft/class_1944;)Lnet/minecraft/class_3562;", rv, av)); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/level/lighting/LayerLightEventListener","getLightValue","(Lnet/minecraft/class_2338;)I", rv, av)); pc = 12; continue;
    case 12:
      __pc = 12;
      l2 = s.pop(); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/LightLevelUtil","client","Lnet/minecraft/class_310;")); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1687","Lnet/minecraft/class_638;", s.pop())); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/multiplayer/ClientLevel","getLightEngine","()Lnet/minecraft/class_3568;", rv, [])); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("net/minecraft/world/level/LightLayer","field_9284","Lnet/minecraft/class_1944;")); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/level/lighting/LevelLightEngine","getLayerListener","(Lnet/minecraft/class_1944;)Lnet/minecraft/class_3562;", rv, av)); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l0); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/level/lighting/LayerLightEventListener","getLightValue","(Lnet/minecraft/class_2338;)I", rv, av)); pc = 20; continue;
    case 20:
      __pc = 20;
      l3 = s.pop(); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/LightLevelUtil","client","Lnet/minecraft/class_310;")); pc = 22; continue;
    case 22:
      __pc = 22;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/Minecraft","getDeltaTracker","()Lnet/minecraft/class_9779;", rv, [])); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(1); pc = 24; continue;
    case 24:
      __pc = 24;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/DeltaTracker","getGameTimeDeltaPartialTick","(Z)F", rv, av)); pc = 25; continue;
    case 25:
      __pc = 25;
      l4 = s.pop(); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getStatic("io/github/sjouwer/gammautils/util/LightLevelUtil","client","Lnet/minecraft/class_310;")); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1773","Lnet/minecraft/class_757;", s.pop())); pc = 28; continue;
    case 28:
      __pc = 28;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/renderer/GameRenderer","getMainCamera","()Lnet/minecraft/class_4184;", rv, [])); pc = 29; continue;
    case 29:
      __pc = 29;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/Camera","attributeProbe","()Lnet/minecraft/class_12202;", rv, [])); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.getStatic("net/minecraft/world/attribute/EnvironmentAttributes","field_64346","Lnet/minecraft/class_12197;")); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l4); pc = 32; continue;
    case 32:
      __pc = 32;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/attribute/EnvironmentAttributeProbe","getValue","(Lnet/minecraft/class_12197;F)Ljava/lang/Object;", rv, av)); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(__ctx.cast(s.pop(), "java/lang/Float")); pc = 34; continue;
    case 34:
      __pc = 34;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Float","floatValue","()F", rv, [])); pc = 35; continue;
    case 35:
      __pc = 35;
      l5 = s.pop(); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l3); pc = 37; continue;
    case 37:
      __pc = 37;
      r = s.pop(); s.push(Number(r)); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(l5); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(l1); pc = 40; continue;
    case 40:
      __pc = 40;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Math","max","(FF)F", av)); pc = 41; continue;
    case 41:
      __pc = 41;
      r = s.pop(); s.push(s.pop() * r); pc = 42; continue;
    case 42:
      __pc = 42;
      l6 = s.pop(); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l2); pc = 44; continue;
    case 44:
      __pc = 44;
      r = s.pop(); s.push(Number(r)); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(l6); pc = 46; continue;
    case 46:
      __pc = 46;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Math","max","(FF)F", av)); pc = 47; continue;
    case 47:
      __pc = 47;
      r = s.pop(); s.push(Number(r)); pc = 48; continue;
    case 48:
      __pc = 48;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$getAverageLightLevel$0(Ljava/lang/Double;)D": function (__ctx, __self, __args) {
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
      s.push(__ctx.invoke("java/lang/Double","doubleValue","()D", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["io/github/sjouwer/gammautils/util/LightLevelUtil"].__fields = [{"name":"client","descriptor":"Lnet/minecraft/class_310;"}];
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
    "id": "gammautils",
    "name": "Gamma Utils",
    "version": "2.5.10",
    "authors": [
      "Sjouwer"
    ],
    "description": "Converted from a Fabric mod (Gamma / Brightness / Night Vision mod, making it easy to see in the dark.)",
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
    var inst_io_github_sjouwer_gammautils_GammaUtils = { __class: "io/github/sjouwer/gammautils/GammaUtils", __fields: FIELD_DEFAULTS["io/github/sjouwer/gammautils/GammaUtils"] || [] };
    /* entrypoint: client io/github/sjouwer/gammautils/GammaUtils.onInitializeClient */
    try {
      RT.method("io/github/sjouwer/gammautils/GammaUtils", "onInitializeClient()V", inst_io_github_sjouwer_gammautils_GammaUtils, []);
    } catch (error) { RT.unsupported(error, "io/github/sjouwer/gammautils/GammaUtils.onInitializeClient"); }
    mod.on("tick", function (payload) { try { return RT.method("io/github/sjouwer/gammautils/GammaUtils", "lambda$onInitializeClient$1(Lnet/minecraft/class_310;)V", null, [payload]); } catch (error) { RT.unsupported(error, "io/github/sjouwer/gammautils/GammaUtils.lambda$onInitializeClient$1"); } });
    mod.on("tick", function (payload) { try { return RT.method("io/github/sjouwer/gammautils/KeyBindings", "lambda$registerGammaToggleKey$0(Lnet/minecraft/class_310;)V", null, [payload]); } catch (error) { RT.unsupported(error, "io/github/sjouwer/gammautils/KeyBindings.lambda$registerGammaToggleKey$0"); } });
    mod.on("tick", function (payload) { try { return RT.method("io/github/sjouwer/gammautils/KeyBindings", "lambda$registerIncreaseGammaKey$1(Lnet/minecraft/class_310;)V", null, [payload]); } catch (error) { RT.unsupported(error, "io/github/sjouwer/gammautils/KeyBindings.lambda$registerIncreaseGammaKey$1"); } });
    mod.on("tick", function (payload) { try { return RT.method("io/github/sjouwer/gammautils/KeyBindings", "lambda$registerDecreaseGammaKey$2(Lnet/minecraft/class_310;)V", null, [payload]); } catch (error) { RT.unsupported(error, "io/github/sjouwer/gammautils/KeyBindings.lambda$registerDecreaseGammaKey$2"); } });
    mod.on("tick", function (payload) { try { return RT.method("io/github/sjouwer/gammautils/KeyBindings", "lambda$registerMaxGammaKey$3(Lnet/minecraft/class_310;)V", null, [payload]); } catch (error) { RT.unsupported(error, "io/github/sjouwer/gammautils/KeyBindings.lambda$registerMaxGammaKey$3"); } });
    mod.on("tick", function (payload) { try { return RT.method("io/github/sjouwer/gammautils/KeyBindings", "lambda$registerMinGammaKey$4(Lnet/minecraft/class_310;)V", null, [payload]); } catch (error) { RT.unsupported(error, "io/github/sjouwer/gammautils/KeyBindings.lambda$registerMinGammaKey$4"); } });
    mod.on("tick", function (payload) { try { return RT.method("io/github/sjouwer/gammautils/KeyBindings", "lambda$registerNightVisionToggleKey$5(Lnet/minecraft/class_310;)V", null, [payload]); } catch (error) { RT.unsupported(error, "io/github/sjouwer/gammautils/KeyBindings.lambda$registerNightVisionToggleKey$5"); } });
    mod.on("tick", function (payload) { try { return RT.method("io/github/sjouwer/gammautils/KeyBindings", "lambda$registerIncreaseNightVisionKey$6(Lnet/minecraft/class_310;)V", null, [payload]); } catch (error) { RT.unsupported(error, "io/github/sjouwer/gammautils/KeyBindings.lambda$registerIncreaseNightVisionKey$6"); } });
    mod.on("tick", function (payload) { try { return RT.method("io/github/sjouwer/gammautils/KeyBindings", "lambda$registerDecreaseNightVisionKey$7(Lnet/minecraft/class_310;)V", null, [payload]); } catch (error) { RT.unsupported(error, "io/github/sjouwer/gammautils/KeyBindings.lambda$registerDecreaseNightVisionKey$7"); } });
    api.input.bind({ id: "gammautils", label: "gammautils", key: "h", handler: function () { api.hud.message("gammautils pressed"); } });
    api.input.bind({ id: "gamma", label: "gamma", key: "h", handler: function () { api.hud.message("gamma pressed"); } });
    api.input.bind({ id: "gammautils", label: "gammautils", key: "h", handler: function () { api.hud.message("gammautils pressed"); } });
    api.input.bind({ id: "nightvision", label: "nightvision", key: "h", handler: function () { api.hud.message("nightvision pressed"); } });
    if (webmc.patches) {
      webmc.patches.add({
        modId: "gammautils", mixin: "io/github/sjouwer/gammautils/mixin/MixinClientPlayNetworkHandler",
        targets: ["net/minecraft/client/multiplayer/ClientPacketListener"], environment: "unknown",
        injections: [
          { method: ["handlePlayerAbilities"], handler: "onPlayerAbilities", kind: "inject", at: ["TAIL"], cancellable: false,
            run: function (target, args, info) { return RT.method("io/github/sjouwer/gammautils/mixin/MixinClientPlayNetworkHandler", "onPlayerAbilities(Lnet/minecraft/class_2696;Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
          { method: ["handleRespawn"], handler: "onPlayerRespawn", kind: "inject", at: ["TAIL"], cancellable: false,
            run: function (target, args, info) { return RT.method("io/github/sjouwer/gammautils/mixin/MixinClientPlayNetworkHandler", "onPlayerRespawn(Lnet/minecraft/class_2724;Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "gammautils", mixin: "io/github/sjouwer/gammautils/mixin/MixinInGameHud",
        targets: ["net/minecraft/client/gui/Gui"], environment: "unknown",
        injections: [
          { method: ["getMobEffectSprite"], handler: "getGammaTexture", kind: "inject", at: ["HEAD"], cancellable: true,
            run: function (target, args, info) { return RT.method("io/github/sjouwer/gammautils/mixin/MixinInGameHud", "getGammaTexture(Lnet/minecraft/class_6880;Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "gammautils", mixin: "io/github/sjouwer/gammautils/mixin/MixinMinecraftClient",
        targets: ["net/minecraft/client/Minecraft"], environment: "unknown",
        injections: [
          { method: ["close"], handler: "saveOnClose", kind: "inject", at: ["HEAD"], cancellable: false,
            run: function (target, args, info) { return RT.method("io/github/sjouwer/gammautils/mixin/MixinMinecraftClient", "saveOnClose(Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "gammautils", mixin: "io/github/sjouwer/gammautils/mixin/MixinSimpleOption",
        targets: ["net/minecraft/client/OptionInstance"], environment: "unknown",
        injections: [
          { method: ["get"], handler: "getModValue", kind: "inject", at: ["HEAD"], cancellable: true,
            run: function (target, args, info) { return RT.method("io/github/sjouwer/gammautils/mixin/MixinSimpleOption", "getModValue(Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable;)V", target, args.concat([info])); } },
          { method: ["set"], handler: "setModValue", kind: "inject", at: ["HEAD"], cancellable: true,
            run: function (target, args, info) { return RT.method("io/github/sjouwer/gammautils/mixin/MixinSimpleOption", "setModValue(Ljava/lang/Object;Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "gammautils", mixin: "io/github/sjouwer/gammautils/mixin/MixinStatusEffectUtil",
        targets: ["net/minecraft/world/effect/MobEffectUtil"], environment: "unknown",
        injections: [
          { method: ["formatDuration"], handler: "getPercentageText", kind: "inject", at: ["HEAD"], cancellable: true,
            run: function (target, args, info) { return RT.method("io/github/sjouwer/gammautils/mixin/MixinStatusEffectUtil", "getPercentageText(Lnet/minecraft/class_1293;FFLorg/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "gammautils", mixin: "io/github/sjouwer/gammautils/mixin/SpriteAtlasHolderInvoker",
        targets: ["net/minecraft/client/renderer/texture/TextureAtlas"], environment: "unknown",
        injections: [
        ],
        accessors: [{"kind":"invoker","name":"getSprite","rawName":"method_4608","descriptor":"(Lnet/minecraft/class_2960;)Lnet/minecraft/class_1058;","method":"invokeGetSprite"}]
      });
    }
    api.log('converted: ' + SOURCE + ' — ' + "187 methods translated, 4 not");
  });
})();
