/* Converted from a Fabric mod by webmc-jsmod's converter.
 * zoomify 2.15.2+1.21.11 — Zoomify
 * Every 371 method that could be transpiled was; 33 could not.
 * What could not is named in report.json next to this file. */
(function () {
  "use strict";
  var SOURCE = "zoomify 2.15.2+1.21.11";
  var CLASSES = {};
  var SUPER = {"dev/isxander/zoomify/Zoomify":"java/lang/Object","dev/isxander/zoomify/config/OverlayVisibility$Companion":"java/lang/Object","dev/isxander/zoomify/config/OverlayVisibility":"java/lang/Enum","dev/isxander/zoomify/config/Presets":"java/lang/Enum","dev/isxander/zoomify/config/PresetsKt":"java/lang/Object","dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$1":"kotlin/jvm/internal/FunctionReferenceImpl","dev/isxander/zoomify/config/SettingsGuiFactory":"java/lang/Object","dev/isxander/zoomify/config/SettingsGuiFactoryKt":"java/lang/Object","dev/isxander/zoomify/config/SoundBehaviour$Companion":"java/lang/Object","dev/isxander/zoomify/config/SoundBehaviour":"java/lang/Enum","dev/isxander/zoomify/config/SpyglassBehaviour$Companion":"java/lang/Object","dev/isxander/zoomify/config/SpyglassBehaviour":"java/lang/Enum","dev/isxander/zoomify/config/ZoomKeyBehaviour$Companion":"java/lang/Object","dev/isxander/zoomify/config/ZoomKeyBehaviour":"java/lang/Enum","dev/isxander/zoomify/config/ZoomifySettings":"dev/isxander/yacl3/config/v3/JsonFileCodecConfig","dev/isxander/zoomify/config/demo/ControlEmulation":"java/lang/Object","dev/isxander/zoomify/config/demo/FirstPersonDemo":"dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","dev/isxander/zoomify/config/demo/ThirdPersonDemo":"dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer$Companion":"java/lang/Object","dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer":"java/lang/Object","dev/isxander/zoomify/config/migrator/Migration":"java/lang/Object","dev/isxander/zoomify/config/migrator/MigrationResultScreen":"net/minecraft/class_403","dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features":"java/lang/Object","dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks":"java/lang/Object","dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values":"java/lang/Object","dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig":"java/lang/Object","dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator":"java/lang/Object","dev/isxander/zoomify/integrations/ControlifyIntegration":"java/lang/Object","dev/isxander/zoomify/integrations/ModMenuIntegration":"java/lang/Object","dev/isxander/zoomify/mixins/spyglass/AbstractClientPlayerEntityMixin":"java/lang/Object","dev/isxander/zoomify/mixins/spyglass/SpyglassItemMixin":"java/lang/Object","dev/isxander/zoomify/mixins/zoom/GameRendererMixin":"java/lang/Object","dev/isxander/zoomify/mixins/zoom/MouseMixin":"java/lang/Object","dev/isxander/zoomify/mixins/zoom/secondary/GuiMixin":"java/lang/Object","dev/isxander/zoomify/utils/MinecraftExtKt":"java/lang/Object","dev/isxander/zoomify/utils/TransitionType$Companion":"java/lang/Object","dev/isxander/zoomify/utils/TransitionType":"java/lang/Enum","dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$1":"kotlin/jvm/internal/MutablePropertyReference0Impl","dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$2":"kotlin/jvm/internal/MutablePropertyReference0Impl","dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$3":"kotlin/jvm/internal/MutablePropertyReference0Impl","dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$4":"kotlin/jvm/internal/MutablePropertyReference0Impl","dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$6":"kotlin/jvm/internal/MutablePropertyReference0Impl","dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$7":"kotlin/jvm/internal/MutablePropertyReference0Impl","dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$8":"kotlin/jvm/internal/MutablePropertyReference0Impl","dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$1":"kotlin/jvm/internal/MutablePropertyReference0Impl","dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$2":"kotlin/jvm/internal/MutablePropertyReference0Impl","dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$3":"kotlin/jvm/internal/MutablePropertyReference0Impl","dev/isxander/zoomify/zoom/DefaultZoomHelpersKt":"java/lang/Object","dev/isxander/zoomify/zoom/Interpolator":"java/lang/Object","dev/isxander/zoomify/zoom/LinearInterpolator":"java/lang/Object","dev/isxander/zoomify/zoom/SmoothInterpolator":"dev/isxander/zoomify/zoom/LinearInterpolator","dev/isxander/zoomify/zoom/TimedInterpolator":"dev/isxander/zoomify/zoom/LinearInterpolator","dev/isxander/zoomify/zoom/TransitionInterpolator":"dev/isxander/zoomify/zoom/TimedInterpolator","dev/isxander/zoomify/zoom/ZoomHelper":"java/lang/Object"};
  var FIELD_DEFAULTS = {"dev/isxander/zoomify/Zoomify":[{"name":"INSTANCE","descriptor":"Ldev/isxander/zoomify/Zoomify;"},{"name":"LOGGER","descriptor":"Lorg/slf4j/Logger;"},{"name":"zoomKeyCategory","descriptor":"Lnet/minecraft/class_304$class_11900;"},{"name":"zoomKey","descriptor":"Lnet/minecraft/class_304;"},{"name":"secondaryZoomKey","descriptor":"Lnet/minecraft/class_304;"},{"name":"scrollZoomIn","descriptor":"Lnet/minecraft/class_304;"},{"name":"scrollZoomOut","descriptor":"Lnet/minecraft/class_304;"},{"name":"zooming","descriptor":"Z"},{"name":"zoomHelper","descriptor":"Ldev/isxander/zoomify/zoom/ZoomHelper;"},{"name":"secondaryZooming","descriptor":"Z"},{"name":"secondaryZoomHelper","descriptor":"Ldev/isxander/zoomify/zoom/ZoomHelper;"},{"name":"previousZoomDivisor","descriptor":"D"},{"name":"scrollSteps","descriptor":"I"},{"name":"shouldPlaySound","descriptor":"Z"},{"name":"displayGui","descriptor":"Z"}],"dev/isxander/zoomify/config/OverlayVisibility$Companion":[],"dev/isxander/zoomify/config/OverlayVisibility":[{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/OverlayVisibility$Companion;"},{"name":"localisedName","descriptor":"Lnet/minecraft/class_2561;"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_3542$class_7292;"},{"name":"NEVER","descriptor":"Ldev/isxander/zoomify/config/OverlayVisibility;"},{"name":"HOLDING","descriptor":"Ldev/isxander/zoomify/config/OverlayVisibility;"},{"name":"CARRYING","descriptor":"Ldev/isxander/zoomify/config/OverlayVisibility;"},{"name":"ALWAYS","descriptor":"Ldev/isxander/zoomify/config/OverlayVisibility;"},{"name":"$VALUES","descriptor":"[Ldev/isxander/zoomify/config/OverlayVisibility;"},{"name":"$ENTRIES","descriptor":"Lkotlin/enums/EnumEntries;"}],"dev/isxander/zoomify/config/Presets":[{"name":"displayName","descriptor":"Lnet/minecraft/class_2561;"},{"name":"apply","descriptor":"Lkotlin/jvm/functions/Function1;"},{"name":"Default","descriptor":"Ldev/isxander/zoomify/config/Presets;"},{"name":"Optifine","descriptor":"Ldev/isxander/zoomify/config/Presets;"},{"name":"OkZoomer","descriptor":"Ldev/isxander/zoomify/config/Presets;"},{"name":"$VALUES","descriptor":"[Ldev/isxander/zoomify/config/Presets;"},{"name":"$ENTRIES","descriptor":"Lkotlin/enums/EnumEntries;"}],"dev/isxander/zoomify/config/PresetsKt":[],"dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$1":[],"dev/isxander/zoomify/config/SettingsGuiFactory":[{"name":"$$delegatedProperties","descriptor":"[Lkotlin/reflect/KProperty;"},{"name":"settings","descriptor":"Ldev/isxander/zoomify/config/ZoomifySettings;"},{"name":"initialOnlyDemo","descriptor":"Ldev/isxander/zoomify/config/demo/FirstPersonDemo;"},{"name":"scrollOnlyDemo","descriptor":"Ldev/isxander/zoomify/config/demo/FirstPersonDemo;"},{"name":"secondaryZoomDemo","descriptor":"Ldev/isxander/zoomify/config/demo/ThirdPersonDemo;"}],"dev/isxander/zoomify/config/SettingsGuiFactoryKt":[],"dev/isxander/zoomify/config/SoundBehaviour$Companion":[],"dev/isxander/zoomify/config/SoundBehaviour":[{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/SoundBehaviour$Companion;"},{"name":"localisedName","descriptor":"Lnet/minecraft/class_2561;"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_3542$class_7292;"},{"name":"NEVER","descriptor":"Ldev/isxander/zoomify/config/SoundBehaviour;"},{"name":"ALWAYS","descriptor":"Ldev/isxander/zoomify/config/SoundBehaviour;"},{"name":"ONLY_SPYGLASS","descriptor":"Ldev/isxander/zoomify/config/SoundBehaviour;"},{"name":"WITH_OVERLAY","descriptor":"Ldev/isxander/zoomify/config/SoundBehaviour;"},{"name":"$VALUES","descriptor":"[Ldev/isxander/zoomify/config/SoundBehaviour;"},{"name":"$ENTRIES","descriptor":"Lkotlin/enums/EnumEntries;"}],"dev/isxander/zoomify/config/SpyglassBehaviour$Companion":[],"dev/isxander/zoomify/config/SpyglassBehaviour":[{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/SpyglassBehaviour$Companion;"},{"name":"localisedName","descriptor":"Lnet/minecraft/class_2561;"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_3542$class_7292;"},{"name":"COMBINE","descriptor":"Ldev/isxander/zoomify/config/SpyglassBehaviour;"},{"name":"OVERRIDE","descriptor":"Ldev/isxander/zoomify/config/SpyglassBehaviour;"},{"name":"ONLY_ZOOM_WHILE_HOLDING","descriptor":"Ldev/isxander/zoomify/config/SpyglassBehaviour;"},{"name":"ONLY_ZOOM_WHILE_CARRYING","descriptor":"Ldev/isxander/zoomify/config/SpyglassBehaviour;"},{"name":"$VALUES","descriptor":"[Ldev/isxander/zoomify/config/SpyglassBehaviour;"},{"name":"$ENTRIES","descriptor":"Lkotlin/enums/EnumEntries;"}],"dev/isxander/zoomify/config/ZoomKeyBehaviour$Companion":[],"dev/isxander/zoomify/config/ZoomKeyBehaviour":[{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/ZoomKeyBehaviour$Companion;"},{"name":"localisedName","descriptor":"Lnet/minecraft/class_2561;"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_3542$class_7292;"},{"name":"HOLD","descriptor":"Ldev/isxander/zoomify/config/ZoomKeyBehaviour;"},{"name":"TOGGLE","descriptor":"Ldev/isxander/zoomify/config/ZoomKeyBehaviour;"},{"name":"$VALUES","descriptor":"[Ldev/isxander/zoomify/config/ZoomKeyBehaviour;"},{"name":"$ENTRIES","descriptor":"Lkotlin/enums/EnumEntries;"}],"dev/isxander/zoomify/config/ZoomifySettings":[{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/ZoomifySettings$Companion;"},{"name":"$$delegatedProperties","descriptor":"[Lkotlin/reflect/KProperty;"},{"name":"initialZoom$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"zoomInTime$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"zoomOutTime$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"zoomInTransition$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"zoomOutTransition$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"affectHandFov$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"retainZoomSteps$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"scrollZoom$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"scrollStepCount$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"zoomPerStep$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"scrollZoomSmoothness$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"zoomKeyBehaviour$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"keybindScrolling","descriptor":"Z"},{"name":"_keybindScrolling$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"relativeSensitivity$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"relativeViewBobbing$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"cinematicCamera$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"spyglassBehaviour$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"spyglassOverlayVisibility$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"spyglassSoundBehaviour$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"secondaryZoomAmount$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"secondaryZoomInTime$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"secondaryZoomOutTime$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"secondaryHideHUDOnZoom$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"firstLaunch","descriptor":"Z"},{"name":"_firstLaunch$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"allSettings","descriptor":"[Ldev/isxander/yacl3/config/v3/ConfigEntry;"}],"dev/isxander/zoomify/config/demo/ControlEmulation":[],"dev/isxander/zoomify/config/demo/FirstPersonDemo":[{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/demo/FirstPersonDemo$Companion;"},{"name":"keepHandFov","descriptor":"Z"},{"name":"handRenderer","descriptor":"Ljava/util/concurrent/CompletableFuture;"},{"name":"worldRenderer","descriptor":"Ljava/util/concurrent/CompletableFuture;"},{"name":"TEX_WIDTH","descriptor":"I"},{"name":"TEX_HEIGHT","descriptor":"I"},{"name":"WORLD_TEXTURE","descriptor":"Lnet/minecraft/class_2960;"},{"name":"HAND_TEXTURE","descriptor":"Lnet/minecraft/class_2960;"}],"dev/isxander/zoomify/config/demo/ThirdPersonDemo":[{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/demo/ThirdPersonDemo$Companion;"},{"name":"thirdPersonViewRenderer","descriptor":"Ljava/util/concurrent/CompletableFuture;"},{"name":"hudRenderer","descriptor":"Ljava/util/concurrent/CompletableFuture;"},{"name":"renderHud","descriptor":"Z"},{"name":"TEX_WIDTH","descriptor":"I"},{"name":"TEX_HEIGHT","descriptor":"I"},{"name":"PLAYER_VIEW","descriptor":"Lnet/minecraft/class_2960;"},{"name":"HUD_TEXTURE","descriptor":"Lnet/minecraft/class_2960;"}],"dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer$Companion":[],"dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer":[{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer$Companion;"},{"name":"zoomHelper","descriptor":"Ldev/isxander/zoomify/zoom/ZoomHelper;"},{"name":"zoomControl","descriptor":"Ldev/isxander/zoomify/config/demo/ControlEmulation;"},{"name":"keyDown","descriptor":"Z"},{"name":"scrollTiers","descriptor":"I"}],"dev/isxander/zoomify/config/migrator/Migration":[{"name":"warnings","descriptor":"Ljava/util/List;"},{"name":"errors","descriptor":"Ljava/util/List;"},{"name":"requireRestart","descriptor":"Z"}],"dev/isxander/zoomify/config/migrator/MigrationResultScreen":[],"dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features":[{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Companion;"},{"name":"cinematicCamera","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;"},{"name":"reduceSensitivity","descriptor":"Z"},{"name":"zoomTransition","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;"},{"name":"zoomMode","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;"},{"name":"zoomScrolling","descriptor":"Z"},{"name":"extraKeyBinds","descriptor":"Z"},{"name":"zoomOverlay","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;"},{"name":"spyglassDependency","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;"},{"name":"$childSerializers","descriptor":"[Lkotlin/Lazy;"}],"dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks":[{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks$Companion;"},{"name":"resetZoomWithMouse","descriptor":"Z"},{"name":"forgetZoomDivisor","descriptor":"Z"},{"name":"unbindConflictingKey","descriptor":"Z"},{"name":"useSpyglassTexture","descriptor":"Z"},{"name":"useSpyglassSounds","descriptor":"Z"}],"dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values":[{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values$Companion;"},{"name":"zoomDivisor","descriptor":"D"},{"name":"minZoomDivisor","descriptor":"D"},{"name":"maxZoomDivisor","descriptor":"D"},{"name":"upperScrollSteps","descriptor":"J"},{"name":"lowerScrollSteps","descriptor":"J"},{"name":"smoothMultiplier","descriptor":"D"},{"name":"cinematicMultiplier","descriptor":"D"},{"name":"minLinearStep","descriptor":"D"},{"name":"maxLinearSteps","descriptor":"D"}],"dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig":[{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Companion;"},{"name":"features","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;"},{"name":"values","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;"},{"name":"tweaks","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;"}],"dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator":[{"name":"INSTANCE","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator;"},{"name":"file","descriptor":"Ljava/nio/file/Path;"},{"name":"toml","descriptor":"Lcom/akuleshov7/ktoml/Toml;"},{"name":"name","descriptor":"Lnet/minecraft/class_2561;"}],"dev/isxander/zoomify/integrations/ControlifyIntegration":[{"name":"INSTANCE","descriptor":"Ldev/isxander/zoomify/integrations/ControlifyIntegration;"}],"dev/isxander/zoomify/integrations/ModMenuIntegration":[{"name":"INSTANCE","descriptor":"Ldev/isxander/zoomify/integrations/ModMenuIntegration;"}],"dev/isxander/zoomify/mixins/spyglass/AbstractClientPlayerEntityMixin":[],"dev/isxander/zoomify/mixins/spyglass/SpyglassItemMixin":[],"dev/isxander/zoomify/mixins/zoom/GameRendererMixin":[],"dev/isxander/zoomify/mixins/zoom/MouseMixin":[],"dev/isxander/zoomify/mixins/zoom/secondary/GuiMixin":[],"dev/isxander/zoomify/utils/MinecraftExtKt":[{"name":"minecraft","descriptor":"Lnet/minecraft/class_310;"}],"dev/isxander/zoomify/utils/TransitionType$Companion":[],"dev/isxander/zoomify/utils/TransitionType":[{"name":"Companion","descriptor":"Ldev/isxander/zoomify/utils/TransitionType$Companion;"},{"name":"localisedName","descriptor":"Lnet/minecraft/class_2561;"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_3542$class_7292;"},{"name":"INSTANT","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"LINEAR","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_SINE","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_OUT_SINE","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_OUT_SINE","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_QUAD","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_OUT_QUAD","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_OUT_QUAD","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_CUBIC","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_OUT_CUBIC","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_OUT_CUBIC","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_EXP","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_OUT_EXP","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_OUT_EXP","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"$VALUES","descriptor":"[Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"$ENTRIES","descriptor":"Lkotlin/enums/EnumEntries;"}],"dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$1":[],"dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$2":[],"dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$3":[],"dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$4":[],"dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$6":[],"dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$7":[],"dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$8":[],"dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$1":[],"dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$2":[],"dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$3":[],"dev/isxander/zoomify/zoom/DefaultZoomHelpersKt":[],"dev/isxander/zoomify/zoom/Interpolator":[],"dev/isxander/zoomify/zoom/LinearInterpolator":[{"name":"goingIn","descriptor":"Z"},{"name":"isSmooth","descriptor":"Z"}],"dev/isxander/zoomify/zoom/SmoothInterpolator":[{"name":"smoothness","descriptor":"Lkotlin/jvm/functions/Function0;"}],"dev/isxander/zoomify/zoom/TimedInterpolator":[{"name":"timeIn","descriptor":"Lkotlin/jvm/functions/Function0;"},{"name":"timeOut","descriptor":"Lkotlin/jvm/functions/Function0;"}],"dev/isxander/zoomify/zoom/TransitionInterpolator":[{"name":"transitionIn","descriptor":"Lkotlin/jvm/functions/Function0;"},{"name":"transitionOut","descriptor":"Lkotlin/jvm/functions/Function0;"},{"name":"activeTransition","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"inactiveTransition","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"prevTargetInterpolation","descriptor":"D"},{"name":"justSwappedTransition","descriptor":"Z"}],"dev/isxander/zoomify/zoom/ZoomHelper":[{"name":"initialInterpolator","descriptor":"Ldev/isxander/zoomify/zoom/Interpolator;"},{"name":"scrollInterpolator","descriptor":"Ldev/isxander/zoomify/zoom/Interpolator;"},{"name":"initialZoom","descriptor":"Lkotlin/jvm/functions/Function0;"},{"name":"zoomPerStep","descriptor":"Lkotlin/jvm/functions/Function0;"},{"name":"maxScrollTiers","descriptor":"Lkotlin/jvm/functions/Function0;"},{"name":"prevInitialInterpolation","descriptor":"D"},{"name":"initialInterpolation","descriptor":"D"},{"name":"zoomingLastTick","descriptor":"Z"},{"name":"prevScrollInterpolation","descriptor":"D"},{"name":"scrollInterpolation","descriptor":"D"},{"name":"lastScrollTier","descriptor":"I"},{"name":"resetting","descriptor":"Z"},{"name":"resetMultiplier","descriptor":"D"}]};
  function defineClass(name, methods) { CLASSES[name] = methods; }
  defineClass("dev/isxander/zoomify/Zoomify", {
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
    "getLOGGER()Lorg/slf4j/Logger;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","LOGGER","Lorg/slf4j/Logger;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZooming()Z": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","zooming","Z")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSecondaryZooming()Z": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","secondaryZooming","Z")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getPreviousZoomDivisor()D": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","previousZoomDivisor","D")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMaxScrollTiers()I": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getScrollStepCount","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Number","intValue","()I", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
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
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.pop(); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","zoomKey","Lnet/minecraft/class_304;")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/keybinding/v1/KeyBindingHelper","registerKeyBinding","(Lnet/minecraft/class_304;)Lnet/minecraft/class_304;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","secondaryZoomKey","Lnet/minecraft/class_304;")); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/keybinding/v1/KeyBindingHelper","registerKeyBinding","(Lnet/minecraft/class_304;)Lnet/minecraft/class_304;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getKeybindScrolling","()Z", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); if (r == 0) { pc = 17; } else { pc = 11; } continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","scrollZoomIn","Lnet/minecraft/class_304;")); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/keybinding/v1/KeyBindingHelper","registerKeyBinding","(Lnet/minecraft/class_304;)Lnet/minecraft/class_304;", av)); pc = 13; continue;
    case 13:
      __pc = 13;
      s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","scrollZoomOut","Lnet/minecraft/class_304;")); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/keybinding/v1/KeyBindingHelper","registerKeyBinding","(Lnet/minecraft/class_304;)Lnet/minecraft/class_304;", av)); pc = 16; continue;
    case 16:
      __pc = 16;
      s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandRegistrationCallback","EVENT","Lnet/fabricmc/fabric/api/event/Event;")); pc = 18; continue;
    case 18:
      __pc = 18;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/Zoomify","onInitializeClient$lambda$0","(Lcom/mojang/brigadier/CommandDispatcher;Lnet/minecraft/class_7157;)V", null, dv)); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents","END_CLIENT_TICK","Lnet/fabricmc/fabric/api/event/Event;")); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l0); pc = 22; continue;
    case 22:
      __pc = 22;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/Zoomify","tick","(Lnet/minecraft/class_310;)V", null, dv)); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 24; continue;
    case 24:
      __pc = 24;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "mouseZoom(D)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      s.push(0); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r <= 0) { pc = 11; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","scrollSteps","I")); pc = 5; continue;
    case 5:
      __pc = 5;
      l2 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l2); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); s.push(s.pop() + r); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/Zoomify","scrollSteps","I",r); pc = 10; continue;
    case 10:
      __pc = 10;
      pc = undefined; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(0); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop(); if (r >= 0) { pc = 21; } else { pc = 15; } continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","scrollSteps","I")); pc = 16; continue;
    case 16:
      __pc = 16;
      l2 = s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l2); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(-1); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop(); s.push(s.pop() + r); pc = 20; continue;
    case 20:
      __pc = 20;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/Zoomify","scrollSteps","I",r); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","scrollSteps","I")); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.newInstance("kotlin/ranges/IntRange")); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(s[s.length - 1]); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(0); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","INSTANCE","Ldev/isxander/zoomify/Zoomify;")); pc = 26; continue;
    case 26:
      __pc = 26;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/Zoomify","getMaxScrollTiers","()I", rv, [])); pc = 27; continue;
    case 27:
      __pc = 27;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/ranges/IntRange","<init>","(II)V", rv, av); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.cast(s.pop(), "kotlin/ranges/ClosedRange")); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/ranges/RangesKt","coerceIn","(ILkotlin/ranges/ClosedRange;)I", av)); pc = 30; continue;
    case 30:
      __pc = 30;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/Zoomify","scrollSteps","I",r); pc = 31; continue;
    case 31:
      __pc = 31;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onGameFinishedLoading()V": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getFirstLaunch","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 11; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","LOGGER","Lorg/slf4j/Logger;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("Zoomify detected first launch!"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("org/slf4j/Logger","info","(Ljava/lang/String;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/Zoomify","detectConflictingToast","()V", rv, []); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/migrator/Migrator","Companion","Ldev/isxander/zoomify/config/migrator/Migrator$Companion;")); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/migrator/Migrator$Companion","checkMigrations","()Z", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "unbindConflicting()Z": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("net/minecraft/client/Minecraft","getInstance","()Lnet/minecraft/class_310;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("getInstance(...)"); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 4; continue;
    case 4:
      __pc = 4;
      l1 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","zoomKey","Lnet/minecraft/class_304;")); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/KeyMapping","isUnbound","()Z", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); if (r != 0) { pc = 74; } else { pc = 8; } continue;
    case 8:
      __pc = 8;
      s.push(l1); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1690","Lnet/minecraft/class_315;", s.pop())); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getField("net/minecraft/client/Options","field_1839","[Lnet/minecraft/class_304;", s.pop())); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(s[s.length - 1]); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push("keyMappings"); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 14; continue;
    case 14:
      __pc = 14;
      l2 = s.pop(); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(0); pc = 16; continue;
    case 16:
      __pc = 16;
      l3 = s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l2); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(s.pop().length); pc = 19; continue;
    case 19:
      __pc = 19;
      l4 = s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l3); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l4); pc = 22; continue;
    case 22:
      __pc = 22;
      r = s.pop(); var l = s.pop(); if (l >= r) { pc = 74; } else { pc = 23; } continue;
    case 23:
      __pc = 23;
      s.push(l2); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l3); pc = 25; continue;
    case 25:
      __pc = 25;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 26; continue;
    case 26:
      __pc = 26;
      l6 = s.pop(); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l6); pc = 28; continue;
    case 28:
      __pc = 28;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNull","(Ljava/lang/Object;)V", av); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l6); pc = 30; continue;
    case 30:
      __pc = 30;
      l5 = s.pop(); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l5); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","zoomKey","Lnet/minecraft/class_304;")); pc = 33; continue;
    case 33:
      __pc = 33;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","areEqual","(Ljava/lang/Object;Ljava/lang/Object;)Z", av)); pc = 34; continue;
    case 34:
      __pc = 34;
      r = s.pop(); if (r != 0) { pc = 72; } else { pc = 35; } continue;
    case 35:
      __pc = 35;
      s.push(l5); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","zoomKey","Lnet/minecraft/class_304;")); pc = 37; continue;
    case 37:
      __pc = 37;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/KeyMapping","equals","(Ljava/lang/Object;)Z", rv, av)); pc = 38; continue;
    case 38:
      __pc = 38;
      r = s.pop(); if (r == 0) { pc = 72; } else { pc = 39; } continue;
    case 39:
      __pc = 39;
      s.push(l5); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.getStatic("com/mojang/blaze3d/platform/InputConstants","field_16237","Lnet/minecraft/class_3675$class_306;")); pc = 41; continue;
    case 41:
      __pc = 41;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/KeyMapping","setKey","(Lnet/minecraft/class_3675$class_306;)V", rv, av); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(l1); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1690","Lnet/minecraft/class_315;", s.pop())); pc = 44; continue;
    case 44:
      __pc = 44;
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/Options","save","()V", rv, []); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push("zoomify.toast.unbindConflicting.name"); pc = 46; continue;
    case 46:
      __pc = 46;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(s[s.length - 1]); pc = 48; continue;
    case 48:
      __pc = 48;
      s.push("translatable(...)"); pc = 49; continue;
    case 49:
      __pc = 49;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 50; continue;
    case 50:
      __pc = 50;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push("zoomify.toast.unbindConflicting.description"); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push(1); pc = 53; continue;
    case 53:
      __pc = 53;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 54; continue;
    case 54:
      __pc = 54;
      l7 = s.pop(); pc = 55; continue;
    case 55:
      __pc = 55;
      s.push(l7); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(0); pc = 57; continue;
    case 57:
      __pc = 57;
      s.push(l5); pc = 58; continue;
    case 58:
      __pc = 58;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/KeyMapping","getName","()Ljava/lang/String;", rv, [])); pc = 59; continue;
    case 59:
      __pc = 59;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 60; continue;
    case 60:
      __pc = 60;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 61; continue;
    case 61:
      __pc = 61;
      s.push(l7); pc = 62; continue;
    case 62:
      __pc = 62;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;[Ljava/lang/Object;)Lnet/minecraft/class_5250;", av)); pc = 63; continue;
    case 63:
      __pc = 63;
      s.push(s[s.length - 1]); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push("translatable(...)"); pc = 65; continue;
    case 65:
      __pc = 65;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 66; continue;
    case 66:
      __pc = 66;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 67; continue;
    case 67:
      __pc = 67;
      s.push(0); pc = 68; continue;
    case 68:
      __pc = 68;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/utils/MinecraftExtKt","toast","(Lnet/minecraft/class_2561;Lnet/minecraft/class_2561;Z)Lnet/minecraft/class_370;", av)); pc = 69; continue;
    case 69:
      __pc = 69;
      s.pop(); pc = 70; continue;
    case 70:
      __pc = 70;
      s.push(1); pc = 71; continue;
    case 71:
      __pc = 71;
      return s.pop();
    case 72:
      __pc = 72;
      l3 = (l3 | 0) + 1; pc = 73; continue;
    case 73:
      __pc = 73;
      pc = undefined; continue;
    case 74:
      __pc = 74;
      s.push(0); pc = 75; continue;
    case 75:
      __pc = 75;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "detectConflictingToast()V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("net/minecraft/client/Minecraft","getInstance","()Lnet/minecraft/class_310;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("getInstance(...)"); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 4; continue;
    case 4:
      __pc = 4;
      l1 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","zoomKey","Lnet/minecraft/class_304;")); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/KeyMapping","isUnbound","()Z", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); if (r == 0) { pc = 9; } else { pc = 8; } continue;
    case 8:
      __pc = 8;
      return;
    case 9:
      __pc = 9;
      s.push(l1); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1690","Lnet/minecraft/class_315;", s.pop())); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getField("net/minecraft/client/Options","field_1839","[Lnet/minecraft/class_304;", s.pop())); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(s[s.length - 1]); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push("keyMappings"); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.cast(s.pop(), "[Ljava/lang/Object;")); pc = 16; continue;
    case 16:
      __pc = 16;
      l2 = s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(0); pc = 18; continue;
    case 18:
      __pc = 18;
      l3 = s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(0); pc = 20; continue;
    case 20:
      __pc = 20;
      l4 = s.pop(); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l2); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(s.pop().length); pc = 23; continue;
    case 23:
      __pc = 23;
      l5 = s.pop(); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l4); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l5); pc = 26; continue;
    case 26:
      __pc = 26;
      r = s.pop(); var l = s.pop(); if (l >= r) { pc = 52; } else { pc = 27; } continue;
    case 27:
      __pc = 27;
      s.push(l2); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l4); pc = 29; continue;
    case 29:
      __pc = 29;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 30; continue;
    case 30:
      __pc = 30;
      l6 = s.pop(); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l6); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(__ctx.cast(s.pop(), "net/minecraft/client/KeyMapping")); pc = 33; continue;
    case 33:
      __pc = 33;
      l7 = s.pop(); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(0); pc = 35; continue;
    case 35:
      __pc = 35;
      l8 = s.pop(); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l7); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","zoomKey","Lnet/minecraft/class_304;")); pc = 38; continue;
    case 38:
      __pc = 38;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","areEqual","(Ljava/lang/Object;Ljava/lang/Object;)Z", av)); pc = 39; continue;
    case 39:
      __pc = 39;
      r = s.pop(); if (r != 0) { pc = 46; } else { pc = 40; } continue;
    case 40:
      __pc = 40;
      s.push(l7); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","zoomKey","Lnet/minecraft/class_304;")); pc = 42; continue;
    case 42:
      __pc = 42;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/KeyMapping","equals","(Ljava/lang/Object;)Z", rv, av)); pc = 43; continue;
    case 43:
      __pc = 43;
      r = s.pop(); if (r == 0) { pc = 46; } else { pc = 44; } continue;
    case 44:
      __pc = 44;
      s.push(1); pc = 45; continue;
    case 45:
      __pc = 45;
      pc = undefined; continue;
    case 46:
      __pc = 46;
      s.push(0); pc = 47; continue;
    case 47:
      __pc = 47;
      r = s.pop(); if (r == 0) { pc = 50; } else { pc = 48; } continue;
    case 48:
      __pc = 48;
      s.push(1); pc = 49; continue;
    case 49:
      __pc = 49;
      pc = undefined; continue;
    case 50:
      __pc = 50;
      l4 = (l4 | 0) + 1; pc = 51; continue;
    case 51:
      __pc = 51;
      pc = undefined; continue;
    case 52:
      __pc = 52;
      s.push(0); pc = 53; continue;
    case 53:
      __pc = 53;
      r = s.pop(); if (r == 0) { pc = 78; } else { pc = 54; } continue;
    case 54:
      __pc = 54;
      s.push("zoomify.toast.conflictingKeybind.title"); pc = 55; continue;
    case 55:
      __pc = 55;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(s[s.length - 1]); pc = 57; continue;
    case 57:
      __pc = 57;
      s.push("translatable(...)"); pc = 58; continue;
    case 58:
      __pc = 58;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 59; continue;
    case 59:
      __pc = 59;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push("zoomify.toast.conflictingKeybind.description"); pc = 61; continue;
    case 61:
      __pc = 61;
      s.push(1); pc = 62; continue;
    case 62:
      __pc = 62;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 63; continue;
    case 63:
      __pc = 63;
      l3 = s.pop(); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(l3); pc = 65; continue;
    case 65:
      __pc = 65;
      s.push(0); pc = 66; continue;
    case 66:
      __pc = 66;
      s.push("yacl3.config.zoomify.category.misc"); pc = 67; continue;
    case 67:
      __pc = 67;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 68; continue;
    case 68:
      __pc = 68;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 69; continue;
    case 69:
      __pc = 69;
      s.push(l3); pc = 70; continue;
    case 70:
      __pc = 70;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;[Ljava/lang/Object;)Lnet/minecraft/class_5250;", av)); pc = 71; continue;
    case 71:
      __pc = 71;
      s.push(s[s.length - 1]); pc = 72; continue;
    case 72:
      __pc = 72;
      s.push("translatable(...)"); pc = 73; continue;
    case 73:
      __pc = 73;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 74; continue;
    case 74:
      __pc = 74;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 75; continue;
    case 75:
      __pc = 75;
      s.push(1); pc = 76; continue;
    case 76:
      __pc = 76;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/utils/MinecraftExtKt","toast","(Lnet/minecraft/class_2561;Lnet/minecraft/class_2561;Z)Lnet/minecraft/class_370;", av)); pc = 77; continue;
    case 77:
      __pc = 77;
      s.pop(); pc = 78; continue;
    case 78:
      __pc = 78;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onInitializeClient$lambda$0$0(Lcom/mojang/brigadier/context/CommandContext;)I": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(1); pc = 1; continue;
    case 1:
      __pc = 1;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/Zoomify","displayGui","Z",r); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onInitializeClient$lambda$0(Lcom/mojang/brigadier/CommandDispatcher;Lnet/minecraft/class_7157;)V": function (__ctx, __self, __args) {
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
      s.push("dispatcher"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("<unused var>"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("zoomify"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/fabricmc/fabric/api/client/command/v2/ClientCommandManager","literal","(Ljava/lang/String;)Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;", av)); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/Zoomify","onInitializeClient$lambda$0$0","(Lcom/mojang/brigadier/context/CommandContext;)I", null, dv)); pc = 10; continue;
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/brigadier/CommandDispatcher","register","(Lcom/mojang/brigadier/builder/LiteralArgumentBuilder;)Lcom/mojang/brigadier/tree/LiteralCommandNode;", rv, av)); pc = 13; continue;
    case 13:
      __pc = 13;
      s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "handleSpyglass$lambda$0(Lnet/minecraft/class_1799;)Z": function (__ctx, __self, __args) {
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
      s.push("it"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("net/minecraft/world/item/Items","field_27070","Lnet/minecraft/class_1792;")); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/item/ItemStack","is","(Lnet/minecraft/class_1792;)Z", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "shouldRenderOverlay$lambda$0(Lnet/minecraft/class_1799;)Z": function (__ctx, __self, __args) {
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
      s.push("stack"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("net/minecraft/world/item/Items","field_27070","Lnet/minecraft/class_1792;")); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/item/ItemStack","is","(Lnet/minecraft/class_1792;)Z", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
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
      s.push(__ctx.newInstance("dev/isxander/zoomify/Zoomify")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/Zoomify","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/Zoomify","INSTANCE","Ldev/isxander/zoomify/Zoomify;",r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("Zoomify"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("org/slf4j/LoggerFactory","getLogger","(Ljava/lang/String;)Lorg/slf4j/Logger;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNull","(Ljava/lang/Object;)V", av); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/Zoomify","LOGGER","Lorg/slf4j/Logger;",r); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push("category"); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/utils/MinecraftExtKt","zoomifyRl","(Ljava/lang/String;)Lnet/minecraft/class_2960;", av)); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/client/KeyMapping$Category","register","(Lnet/minecraft/class_2960;)Lnet/minecraft/class_304$class_11900;", av)); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(s[s.length - 1]); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push("register(...)"); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/Zoomify","zoomKeyCategory","Lnet/minecraft/class_304$class_11900;",r); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.newInstance("net/minecraft/client/KeyMapping")); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(s[s.length - 1]); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push("zoomify.key.zoom"); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getStatic("com/mojang/blaze3d/platform/InputConstants$Type","field_1668","Lnet/minecraft/class_3675$class_307;")); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(67); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","zoomKeyCategory","Lnet/minecraft/class_304$class_11900;")); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/KeyMapping","<init>","(Ljava/lang/String;Lnet/minecraft/class_3675$class_307;ILnet/minecraft/class_304$class_11900;)V", rv, av); pc = 23; continue;
    case 23:
      __pc = 23;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/Zoomify","zoomKey","Lnet/minecraft/class_304;",r); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.newInstance("net/minecraft/client/KeyMapping")); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(s[s.length - 1]); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push("zoomify.key.zoom.secondary"); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(__ctx.getStatic("com/mojang/blaze3d/platform/InputConstants$Type","field_1668","Lnet/minecraft/class_3675$class_307;")); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(295); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","zoomKeyCategory","Lnet/minecraft/class_304$class_11900;")); pc = 30; continue;
    case 30:
      __pc = 30;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/KeyMapping","<init>","(Ljava/lang/String;Lnet/minecraft/class_3675$class_307;ILnet/minecraft/class_304$class_11900;)V", rv, av); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/Zoomify","secondaryZoomKey","Lnet/minecraft/class_304;",r); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(__ctx.newInstance("net/minecraft/client/KeyMapping")); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(s[s.length - 1]); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push("zoomify.key.zoom.in"); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(-1); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","zoomKeyCategory","Lnet/minecraft/class_304$class_11900;")); pc = 37; continue;
    case 37:
      __pc = 37;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/KeyMapping","<init>","(Ljava/lang/String;ILnet/minecraft/class_304$class_11900;)V", rv, av); pc = 38; continue;
    case 38:
      __pc = 38;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/Zoomify","scrollZoomIn","Lnet/minecraft/class_304;",r); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(__ctx.newInstance("net/minecraft/client/KeyMapping")); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(s[s.length - 1]); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push("zoomify.key.zoom.out"); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(-1); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","zoomKeyCategory","Lnet/minecraft/class_304$class_11900;")); pc = 44; continue;
    case 44:
      __pc = 44;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/KeyMapping","<init>","(Ljava/lang/String;ILnet/minecraft/class_304$class_11900;)V", rv, av); pc = 45; continue;
    case 45:
      __pc = 45;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/Zoomify","scrollZoomOut","Lnet/minecraft/class_304;",r); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/ZoomifySettings")); pc = 48; continue;
    case 48:
      __pc = 48;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt","RegularZoomHelper","(Ldev/isxander/zoomify/config/ZoomifySettings;)Ldev/isxander/zoomify/zoom/ZoomHelper;", av)); pc = 49; continue;
    case 49:
      __pc = 49;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/Zoomify","zoomHelper","Ldev/isxander/zoomify/zoom/ZoomHelper;",r); pc = 50; continue;
    case 50:
      __pc = 50;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/ZoomifySettings")); pc = 52; continue;
    case 52:
      __pc = 52;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt","SecondaryZoomHelper","(Ldev/isxander/zoomify/config/ZoomifySettings;)Ldev/isxander/zoomify/zoom/ZoomHelper;", av)); pc = 53; continue;
    case 53:
      __pc = 53;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/Zoomify","secondaryZoomHelper","Ldev/isxander/zoomify/zoom/ZoomHelper;",r); pc = 54; continue;
    case 54:
      __pc = 54;
      s.push(1); pc = 55; continue;
    case 55:
      __pc = 55;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/Zoomify","previousZoomDivisor","D",r); pc = 56; continue;
    case 56:
      __pc = 56;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/Zoomify"].__fields = [{"name":"INSTANCE","descriptor":"Ldev/isxander/zoomify/Zoomify;"},{"name":"LOGGER","descriptor":"Lorg/slf4j/Logger;"},{"name":"zoomKeyCategory","descriptor":"Lnet/minecraft/class_304$class_11900;"},{"name":"zoomKey","descriptor":"Lnet/minecraft/class_304;"},{"name":"secondaryZoomKey","descriptor":"Lnet/minecraft/class_304;"},{"name":"scrollZoomIn","descriptor":"Lnet/minecraft/class_304;"},{"name":"scrollZoomOut","descriptor":"Lnet/minecraft/class_304;"},{"name":"zooming","descriptor":"Z"},{"name":"zoomHelper","descriptor":"Ldev/isxander/zoomify/zoom/ZoomHelper;"},{"name":"secondaryZooming","descriptor":"Z"},{"name":"secondaryZoomHelper","descriptor":"Ldev/isxander/zoomify/zoom/ZoomHelper;"},{"name":"previousZoomDivisor","descriptor":"D"},{"name":"scrollSteps","descriptor":"I"},{"name":"shouldPlaySound","descriptor":"Z"},{"name":"displayGui","descriptor":"Z"}];
  defineClass("dev/isxander/zoomify/config/OverlayVisibility$Companion", {
    "getCODEC()Lnet/minecraft/class_3542$class_7292;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/OverlayVisibility","access$getCODEC$cp","()Lnet/minecraft/class_3542$class_7292;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/OverlayVisibility$Companion"].__fields = [];
  defineClass("dev/isxander/zoomify/config/OverlayVisibility", {
    "access$getCODEC$cp()Lnet/minecraft/class_3542$class_7292;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/OverlayVisibility","CODEC","Lnet/minecraft/class_3542$class_7292;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/OverlayVisibility"].__fields = [{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/OverlayVisibility$Companion;"},{"name":"localisedName","descriptor":"Lnet/minecraft/class_2561;"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_3542$class_7292;"},{"name":"NEVER","descriptor":"Ldev/isxander/zoomify/config/OverlayVisibility;"},{"name":"HOLDING","descriptor":"Ldev/isxander/zoomify/config/OverlayVisibility;"},{"name":"CARRYING","descriptor":"Ldev/isxander/zoomify/config/OverlayVisibility;"},{"name":"ALWAYS","descriptor":"Ldev/isxander/zoomify/config/OverlayVisibility;"},{"name":"$VALUES","descriptor":"[Ldev/isxander/zoomify/config/OverlayVisibility;"},{"name":"$ENTRIES","descriptor":"Lkotlin/enums/EnumEntries;"}];
  defineClass("dev/isxander/zoomify/config/Presets", {
    "<init>(Ljava/lang/String;ILnet/minecraft/class_2561;Lkotlin/jvm/functions/Function1;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    l4 = __args[3];
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
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.Enum.<init>") + ' needs the client internals');
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l3); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/Presets","displayName","Lnet/minecraft/class_2561;",target, r); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l4); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/Presets","apply","Lkotlin/jvm/functions/Function1;",target, r); pc = 10; continue;
    case 10:
      __pc = 10;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getDisplayName()Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/Presets","displayName","Lnet/minecraft/class_2561;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getApply()Lkotlin/jvm/functions/Function1;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/Presets","apply","Lkotlin/jvm/functions/Function1;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Ljava/lang/String;ILjava/lang/String;Lkotlin/jvm/functions/Function1;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    l4 = __args[3];
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
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l3); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(s[s.length - 1]); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push("translatable(...)"); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l4); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/Presets","<init>","(Ljava/lang/String;ILnet/minecraft/class_2561;Lkotlin/jvm/functions/Function1;)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "values()[Ldev/isxander/zoomify/config/Presets;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/Presets","$VALUES","[Ldev/isxander/zoomify/config/Presets;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.pop();
      throw __ctx.toError(("java.lang.Object.clone") + ' needs the client internals');
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "[Ldev/isxander/zoomify/config/Presets;")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "valueOf(Ljava/lang/String;)Ldev/isxander/zoomify/config/Presets;": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Enum.valueOf") + ' needs the client internals');
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/Presets")); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getEntries()Lkotlin/enums/EnumEntries;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/Presets","$ENTRIES","Lkotlin/enums/EnumEntries;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "_init_$lambda$0(Ldev/isxander/zoomify/config/ZoomifySettings;)Lkotlin/Unit;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7;
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
      s.push("<this>"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getAllSettings","()[Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      l1 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(0); pc = 7; continue;
    case 7:
      __pc = 7;
      l2 = s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(0); pc = 9; continue;
    case 9:
      __pc = 9;
      l3 = s.pop(); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(s.pop().length); pc = 12; continue;
    case 12:
      __pc = 12;
      l4 = s.pop(); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l3); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l4); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop(); var l = s.pop(); if (l >= r) { pc = 29; } else { pc = 16; } continue;
    case 16:
      __pc = 16;
      s.push(l1); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l3); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 19; continue;
    case 19:
      __pc = 19;
      l5 = s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l5); pc = 21; continue;
    case 21:
      __pc = 21;
      l6 = s.pop(); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(0); pc = 23; continue;
    case 23:
      __pc = 23;
      l7 = s.pop(); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l6); pc = 25; continue;
    case 25:
      __pc = 25;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/config/PresetsKt","access$setToDefault","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)V", av); pc = 26; continue;
    case 26:
      __pc = 26;
      pc = 27; continue;
    case 27:
      __pc = 27;
      l3 = (l3 | 0) + 1; pc = 28; continue;
    case 28:
      __pc = 28;
      pc = undefined; continue;
    case 29:
      __pc = 29;
      pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 31; continue;
    case 31:
      __pc = 31;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "_init_$lambda$1(Ldev/isxander/zoomify/config/ZoomifySettings;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("<this>"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/Presets","Default","Ldev/isxander/zoomify/config/Presets;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getField("dev/isxander/zoomify/config/Presets","apply","Lkotlin/jvm/functions/Function1;", s.pop())); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/jvm/functions/Function1","invoke","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomInTransition","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getStatic("dev/isxander/zoomify/utils/TransitionType","INSTANT","Ldev/isxander/zoomify/utils/TransitionType;")); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomOutTransition","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("dev/isxander/zoomify/utils/TransitionType","INSTANT","Ldev/isxander/zoomify/utils/TransitionType;")); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l0); pc = 17; continue;
    case 17:
      __pc = 17;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getScrollZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(0); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Boolean","valueOf","(Z)Ljava/lang/Boolean;", av)); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l0); pc = 22; continue;
    case 22:
      __pc = 22;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getRelativeSensitivity","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(0); pc = 24; continue;
    case 24:
      __pc = 24;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 25; continue;
    case 25:
      __pc = 25;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l0); pc = 27; continue;
    case 27:
      __pc = 27;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getRelativeViewBobbing","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(0); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Boolean","valueOf","(Z)Ljava/lang/Boolean;", av)); pc = 30; continue;
    case 30:
      __pc = 30;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l0); pc = 32; continue;
    case 32:
      __pc = 32;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getCinematicCamera","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(100); pc = 34; continue;
    case 34:
      __pc = 34;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 35; continue;
    case 35:
      __pc = 35;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 37; continue;
    case 37:
      __pc = 37;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "_init_$lambda$2(Ldev/isxander/zoomify/config/ZoomifySettings;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("<this>"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/Presets","Default","Ldev/isxander/zoomify/config/Presets;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getField("dev/isxander/zoomify/config/Presets","apply","Lkotlin/jvm/functions/Function1;", s.pop())); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/jvm/functions/Function1","invoke","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomInTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(0.25); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomOutTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(0.25); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l0); pc = 19; continue;
    case 19:
      __pc = 19;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getRelativeSensitivity","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(50); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getRelativeViewBobbing","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(0); pc = 26; continue;
    case 26:
      __pc = 26;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Boolean","valueOf","(Z)Ljava/lang/Boolean;", av)); pc = 27; continue;
    case 27:
      __pc = 27;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l0); pc = 29; continue;
    case 29:
      __pc = 29;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getScrollZoomSmoothness","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(25); pc = 31; continue;
    case 31:
      __pc = 31;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 32; continue;
    case 32:
      __pc = 32;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 34; continue;
    case 34:
      __pc = 34;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "$values()[Ldev/isxander/zoomify/config/Presets;": function (__ctx, __self, __args) {
    var l0;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(3); pc = 1; continue;
    case 1:
      __pc = 1;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 2; continue;
    case 2:
      __pc = 2;
      l0 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/Presets","Default","Ldev/isxander/zoomify/config/Presets;")); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(1); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/Presets","Optifine","Ldev/isxander/zoomify/config/Presets;")); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(2); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/Presets","OkZoomer","Ldev/isxander/zoomify/config/Presets;")); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
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
      s.push(__ctx.newInstance("dev/isxander/zoomify/config/Presets")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("Default"); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("zoomify.gui.preset.default"); pc = 5; continue;
    case 5:
      __pc = 5;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/Presets","_init_$lambda$0","(Ldev/isxander/zoomify/config/ZoomifySettings;)Lkotlin/Unit;", null, dv)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/Presets","<init>","(Ljava/lang/String;ILjava/lang/String;Lkotlin/jvm/functions/Function1;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/config/Presets","Default","Ldev/isxander/zoomify/config/Presets;",r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.newInstance("dev/isxander/zoomify/config/Presets")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(s[s.length - 1]); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push("Optifine"); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(1); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push("zoomify.gui.preset.optifine"); pc = 13; continue;
    case 13:
      __pc = 13;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/Presets","_init_$lambda$1","(Ldev/isxander/zoomify/config/ZoomifySettings;)Lkotlin/Unit;", null, dv)); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/Presets","<init>","(Ljava/lang/String;ILjava/lang/String;Lkotlin/jvm/functions/Function1;)V", rv, av); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/config/Presets","Optifine","Ldev/isxander/zoomify/config/Presets;",r); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.newInstance("dev/isxander/zoomify/config/Presets")); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(s[s.length - 1]); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push("OkZoomer"); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(2); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push("zoomify.gui.preset.ok_zoomer"); pc = 21; continue;
    case 21:
      __pc = 21;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/Presets","_init_$lambda$2","(Ldev/isxander/zoomify/config/ZoomifySettings;)Lkotlin/Unit;", null, dv)); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/Presets","<init>","(Ljava/lang/String;ILjava/lang/String;Lkotlin/jvm/functions/Function1;)V", rv, av); pc = 23; continue;
    case 23:
      __pc = 23;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/config/Presets","OkZoomer","Ldev/isxander/zoomify/config/Presets;",r); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/Presets","$values","()[Ldev/isxander/zoomify/config/Presets;", [])); pc = 25; continue;
    case 25:
      __pc = 25;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/config/Presets","$VALUES","[Ldev/isxander/zoomify/config/Presets;",r); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/Presets","$VALUES","[Ldev/isxander/zoomify/config/Presets;")); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(__ctx.cast(s.pop(), "[Ljava/lang/Enum;")); pc = 28; continue;
    case 28:
      __pc = 28;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/enums/EnumEntriesKt","enumEntries","([Ljava/lang/Enum;)Lkotlin/enums/EnumEntries;", av)); pc = 29; continue;
    case 29:
      __pc = 29;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/config/Presets","$ENTRIES","Lkotlin/enums/EnumEntries;",r); pc = 30; continue;
    case 30:
      __pc = 30;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/Presets"].__fields = [{"name":"displayName","descriptor":"Lnet/minecraft/class_2561;"},{"name":"apply","descriptor":"Lkotlin/jvm/functions/Function1;"},{"name":"Default","descriptor":"Ldev/isxander/zoomify/config/Presets;"},{"name":"Optifine","descriptor":"Ldev/isxander/zoomify/config/Presets;"},{"name":"OkZoomer","descriptor":"Ldev/isxander/zoomify/config/Presets;"},{"name":"$VALUES","descriptor":"[Ldev/isxander/zoomify/config/Presets;"},{"name":"$ENTRIES","descriptor":"Lkotlin/enums/EnumEntries;"}];
  defineClass("dev/isxander/zoomify/config/PresetsKt", {
    "setToDefault(Ldev/isxander/yacl3/config/v3/ConfigEntry;)V": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getDefault","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/yacl3/config/v3/ConfigEntry","set","(Ljava/lang/Object;)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$setToDefault(Ldev/isxander/yacl3/config/v3/ConfigEntry;)V": function (__ctx, __self, __args) {
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/config/PresetsKt","setToDefault","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)V", av); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/PresetsKt"].__fields = [];
  defineClass("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$1", {
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
      s.push(0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(null); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("saveToFile"); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push("saveToFile()V"); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(0); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(6); for (var ai = 5; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/FunctionReferenceImpl","<init>","(ILjava/lang/Object;Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$1"].__fields = [];
  defineClass("dev/isxander/zoomify/config/SettingsGuiFactory", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
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
      s.push(__ctx.newInstance("dev/isxander/zoomify/config/ZoomifySettings")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/ZoomifySettings")); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","<init>","(Ldev/isxander/zoomify/config/ZoomifySettings;)V", rv, av); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/SettingsGuiFactory","settings","Ldev/isxander/zoomify/config/ZoomifySettings;",target, r); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.newInstance("dev/isxander/zoomify/config/demo/FirstPersonDemo")); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(s[s.length - 1]); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","settings","Ldev/isxander/zoomify/config/ZoomifySettings;", s.pop())); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt","RegularZoomHelper","(Ldev/isxander/zoomify/config/ZoomifySettings;)Ldev/isxander/zoomify/zoom/ZoomHelper;", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/ControlEmulation$InitialOnly","INSTANCE","Ldev/isxander/zoomify/config/demo/ControlEmulation$InitialOnly;")); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ControlEmulation")); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/FirstPersonDemo","<init>","(Ldev/isxander/zoomify/zoom/ZoomHelper;Ldev/isxander/zoomify/config/demo/ControlEmulation;)V", rv, av); pc = 18; continue;
    case 18:
      __pc = 18;
      l1 = s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l1); pc = 20; continue;
    case 20:
      __pc = 20;
      l2 = s.pop(); pc = 21; continue;
    case 21:
      __pc = 21;
      l4 = s.pop(); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(0); pc = 23; continue;
    case 23:
      __pc = 23;
      l3 = s.pop(); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l2); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l0); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","settings","Ldev/isxander/zoomify/config/ZoomifySettings;", s.pop())); pc = 27; continue;
    case 27:
      __pc = 27;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getAffectHandFov","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 28; continue;
    case 28:
      __pc = 28;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.cast(s.pop(), "java/lang/Boolean")); pc = 30; continue;
    case 30:
      __pc = 30;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Boolean","booleanValue","()Z", rv, [])); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop(); if (r != 0) { pc = 34; } else { pc = 32; } continue;
    case 32:
      __pc = 32;
      s.push(1); pc = 33; continue;
    case 33:
      __pc = 33;
      pc = undefined; continue;
    case 34:
      __pc = 34;
      s.push(0); pc = 35; continue;
    case 35:
      __pc = 35;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/FirstPersonDemo","setKeepHandFov","(Z)V", rv, av); pc = 36; continue;
    case 36:
      __pc = 36;
      pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(l4); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(l1); pc = 39; continue;
    case 39:
      __pc = 39;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/SettingsGuiFactory","initialOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;",target, r); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(l0); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(__ctx.newInstance("dev/isxander/zoomify/config/demo/FirstPersonDemo")); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(s[s.length - 1]); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l0); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","settings","Ldev/isxander/zoomify/config/ZoomifySettings;", s.pop())); pc = 45; continue;
    case 45:
      __pc = 45;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt","RegularZoomHelper","(Ldev/isxander/zoomify/config/ZoomifySettings;)Ldev/isxander/zoomify/zoom/ZoomHelper;", av)); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/ControlEmulation$ScrollOnly","INSTANCE","Ldev/isxander/zoomify/config/demo/ControlEmulation$ScrollOnly;")); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ControlEmulation")); pc = 48; continue;
    case 48:
      __pc = 48;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/FirstPersonDemo","<init>","(Ldev/isxander/zoomify/zoom/ZoomHelper;Ldev/isxander/zoomify/config/demo/ControlEmulation;)V", rv, av); pc = 49; continue;
    case 49:
      __pc = 49;
      l1 = s.pop(); pc = 50; continue;
    case 50:
      __pc = 50;
      s.push(l1); pc = 51; continue;
    case 51:
      __pc = 51;
      l2 = s.pop(); pc = 52; continue;
    case 52:
      __pc = 52;
      l4 = s.pop(); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(0); pc = 54; continue;
    case 54:
      __pc = 54;
      l3 = s.pop(); pc = 55; continue;
    case 55:
      __pc = 55;
      s.push(l2); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(l0); pc = 57; continue;
    case 57:
      __pc = 57;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","settings","Ldev/isxander/zoomify/config/ZoomifySettings;", s.pop())); pc = 58; continue;
    case 58:
      __pc = 58;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getAffectHandFov","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 59; continue;
    case 59:
      __pc = 59;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push(__ctx.cast(s.pop(), "java/lang/Boolean")); pc = 61; continue;
    case 61:
      __pc = 61;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Boolean","booleanValue","()Z", rv, [])); pc = 62; continue;
    case 62:
      __pc = 62;
      r = s.pop(); if (r != 0) { pc = 65; } else { pc = 63; } continue;
    case 63:
      __pc = 63;
      s.push(1); pc = 64; continue;
    case 64:
      __pc = 64;
      pc = undefined; continue;
    case 65:
      __pc = 65;
      s.push(0); pc = 66; continue;
    case 66:
      __pc = 66;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/FirstPersonDemo","setKeepHandFov","(Z)V", rv, av); pc = 67; continue;
    case 67:
      __pc = 67;
      pc = 68; continue;
    case 68:
      __pc = 68;
      s.push(l4); pc = 69; continue;
    case 69:
      __pc = 69;
      s.push(l1); pc = 70; continue;
    case 70:
      __pc = 70;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/SettingsGuiFactory","scrollOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;",target, r); pc = 71; continue;
    case 71:
      __pc = 71;
      s.push(l0); pc = 72; continue;
    case 72:
      __pc = 72;
      s.push(__ctx.newInstance("dev/isxander/zoomify/config/demo/ThirdPersonDemo")); pc = 73; continue;
    case 73:
      __pc = 73;
      s.push(s[s.length - 1]); pc = 74; continue;
    case 74:
      __pc = 74;
      s.push(l0); pc = 75; continue;
    case 75:
      __pc = 75;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","settings","Ldev/isxander/zoomify/config/ZoomifySettings;", s.pop())); pc = 76; continue;
    case 76:
      __pc = 76;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt","SecondaryZoomHelper","(Ldev/isxander/zoomify/config/ZoomifySettings;)Ldev/isxander/zoomify/zoom/ZoomHelper;", av)); pc = 77; continue;
    case 77:
      __pc = 77;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/ControlEmulation$InitialOnly","INSTANCE","Ldev/isxander/zoomify/config/demo/ControlEmulation$InitialOnly;")); pc = 78; continue;
    case 78:
      __pc = 78;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ControlEmulation")); pc = 79; continue;
    case 79:
      __pc = 79;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/ThirdPersonDemo","<init>","(Ldev/isxander/zoomify/zoom/ZoomHelper;Ldev/isxander/zoomify/config/demo/ControlEmulation;)V", rv, av); pc = 80; continue;
    case 80:
      __pc = 80;
      l1 = s.pop(); pc = 81; continue;
    case 81:
      __pc = 81;
      s.push(l1); pc = 82; continue;
    case 82:
      __pc = 82;
      l2 = s.pop(); pc = 83; continue;
    case 83:
      __pc = 83;
      l4 = s.pop(); pc = 84; continue;
    case 84:
      __pc = 84;
      s.push(0); pc = 85; continue;
    case 85:
      __pc = 85;
      l3 = s.pop(); pc = 86; continue;
    case 86:
      __pc = 86;
      s.push(l2); pc = 87; continue;
    case 87:
      __pc = 87;
      s.push(l0); pc = 88; continue;
    case 88:
      __pc = 88;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","settings","Ldev/isxander/zoomify/config/ZoomifySettings;", s.pop())); pc = 89; continue;
    case 89:
      __pc = 89;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryHideHUDOnZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 90; continue;
    case 90:
      __pc = 90;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 91; continue;
    case 91:
      __pc = 91;
      s.push(__ctx.cast(s.pop(), "java/lang/Boolean")); pc = 92; continue;
    case 92:
      __pc = 92;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Boolean","booleanValue","()Z", rv, [])); pc = 93; continue;
    case 93:
      __pc = 93;
      r = s.pop(); if (r != 0) { pc = 96; } else { pc = 94; } continue;
    case 94:
      __pc = 94;
      s.push(1); pc = 95; continue;
    case 95:
      __pc = 95;
      pc = undefined; continue;
    case 96:
      __pc = 96;
      s.push(0); pc = 97; continue;
    case 97:
      __pc = 97;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/ThirdPersonDemo","setRenderHud","(Z)V", rv, av); pc = 98; continue;
    case 98:
      __pc = 98;
      pc = 99; continue;
    case 99:
      __pc = 99;
      s.push(l4); pc = 100; continue;
    case 100:
      __pc = 100;
      s.push(l1); pc = 101; continue;
    case 101:
      __pc = 101;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/SettingsGuiFactory","secondaryZoomDemo","Ldev/isxander/zoomify/config/demo/ThirdPersonDemo;",target, r); pc = 102; continue;
    case 102:
      __pc = 102;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSettings()Ldev/isxander/zoomify/config/ZoomifySettings;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","settings","Ldev/isxander/zoomify/config/ZoomifySettings;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getInitialOnlyDemo()Ldev/isxander/zoomify/config/demo/FirstPersonDemo;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","initialOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getScrollOnlyDemo()Ldev/isxander/zoomify/config/demo/FirstPersonDemo;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","scrollOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSecondaryZoomDemo()Ldev/isxander/zoomify/config/demo/ThirdPersonDemo;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","secondaryZoomDemo","Ldev/isxander/zoomify/config/demo/ThirdPersonDemo;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "updateDemo(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function2;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("<this>"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("updateFunc"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(4); for (var di = 3; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","updateDemo$lambda$0","(Lkotlin/jvm/functions/Function2;Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/api/Option;Ljava/lang/Object;)V", null, dv)); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/api/Option$Builder","listener","(Ljava/util/function/BiConsumer;)Ldev/isxander/yacl3/api/Option$Builder;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "updateDemo(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/reflect/KMutableProperty0;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("<this>"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("prop"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l2); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","updateDemo$lambda$1","(Lkotlin/reflect/KMutableProperty0;Ljava/lang/Object;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;)Lkotlin/Unit;", null, dv)); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","updateDemo","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function2;)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerDemo(Ldev/isxander/yacl3/dsl/OptionRegistrar;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    l4 = __args[3];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("<this>"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("entryGetter"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l3); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("demo"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l4); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push("block"); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l2); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/jvm/functions/Function1","invoke","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 16; continue;
    case 16:
      __pc = 16;
      l5 = s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l2); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l0); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","settings","Ldev/isxander/zoomify/config/ZoomifySettings;", s.pop())); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/jvm/functions/Function1","invoke","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 22; continue;
    case 22:
      __pc = 22;
      l6 = s.pop(); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l1); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l5); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l0); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l4); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l3); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l6); pc = 29; continue;
    case 29:
      __pc = 29;
      var dv = new Array(5); for (var di = 4; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo$lambda$0","(Ldev/isxander/zoomify/config/SettingsGuiFactory;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Ldev/isxander/yacl3/config/v3/ConfigEntry;Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 30; continue;
    case 30:
      __pc = 30;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Ldev/isxander/yacl3/config/v3/ConfigEntry;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", av)); pc = 31; continue;
    case 31:
      __pc = 31;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui(Lnet/minecraft/class_437;)Lnet/minecraft/class_437;": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push("zoomify"); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0","(Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/dsl/RootDsl;)Lkotlin/Unit;", null, dv)); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/APIKt","YetAnotherConfigLib","(Ljava/lang/String;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/YetAnotherConfigLib;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/api/YetAnotherConfigLib","generateScreen","(Lnet/minecraft/class_437;)Lnet/minecraft/class_437;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "updateDemo$lambda$0(Lkotlin/jvm/functions/Function2;Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/api/Option;Ljava/lang/Object;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
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
      s.push(l3); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","initialOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/jvm/functions/Function2","invoke","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l3); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l1); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","scrollOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/jvm/functions/Function2","invoke","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l3); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l1); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","secondaryZoomDemo","Ldev/isxander/zoomify/config/demo/ThirdPersonDemo;", s.pop())); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/jvm/functions/Function2","invoke","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 17; continue;
    case 17:
      __pc = 17;
      s.pop(); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l1); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","initialOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 20; continue;
    case 20:
      __pc = 20;
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/FirstPersonDemo","pause","()V", rv, []); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l1); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","scrollOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 23; continue;
    case 23:
      __pc = 23;
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/FirstPersonDemo","pause","()V", rv, []); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l1); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","secondaryZoomDemo","Ldev/isxander/zoomify/config/demo/ThirdPersonDemo;", s.pop())); pc = 26; continue;
    case 26:
      __pc = 26;
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/ThirdPersonDemo","pause","()V", rv, []); pc = 27; continue;
    case 27:
      __pc = 27;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "updateDemo$lambda$1(Lkotlin/reflect/KMutableProperty0;Ljava/lang/Object;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push(l2); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("<unused var>"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/reflect/KMutableProperty0","set","(Ljava/lang/Object;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerDemo$lambda$0$0(Ldev/isxander/yacl3/dsl/OptionDsl;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Ldev/isxander/yacl3/api/OptionDescription$Builder;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push(l2); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("$this$descriptionBuilder"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l2); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(null); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(null); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/OptionDsl","addDefaultText$default","(Ldev/isxander/yacl3/dsl/OptionDsl;Ldev/isxander/yacl3/api/OptionDescription$Builder;Ljava/lang/Integer;ILjava/lang/Object;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l2); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/gui/image/ImageRenderer")); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/api/OptionDescription$Builder","customImage","(Ldev/isxander/yacl3/gui/image/ImageRenderer;)Ldev/isxander/yacl3/api/OptionDescription$Builder;", rv, av)); pc = 13; continue;
    case 13:
      __pc = 13;
      s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 15; continue;
    case 15:
      __pc = 15;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerDemo$lambda$0$1(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("v"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("<unused var>"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerDemo$lambda$0(Ldev/isxander/zoomify/config/SettingsGuiFactory;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Ldev/isxander/yacl3/config/v3/ConfigEntry;Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
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
      s.push(l4); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("$this$register"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l4); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l4); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l2); pc = 7; continue;
    case 7:
      __pc = 7;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo$lambda$0$0","(Ldev/isxander/yacl3/dsl/OptionDsl;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Ldev/isxander/yacl3/api/OptionDescription$Builder;)Lkotlin/Unit;", null, dv)); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","descriptionBuilder","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l4); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l3); pc = 13; continue;
    case 13:
      __pc = 13;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo$lambda$0$1","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;)Lkotlin/Unit;", null, dv)); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","updateDemo","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function2;)V", rv, av); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l1); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l4); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/jvm/functions/Function1","invoke","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 18; continue;
    case 18:
      __pc = 18;
      s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 20; continue;
    case 20:
      __pc = 20;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$0$0$0(I)Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push("%dx"); pc = 1; continue;
    case 1:
      __pc = 1;
      l1 = s.pop(); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 4; continue;
    case 4:
      __pc = 4;
      l2 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l2); pc = 6; continue;
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
      s.push(l2); pc = 11; continue;
    case 11:
      __pc = 11;
      l2 = s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l2); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l2); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(s.pop().length); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/util/Arrays","copyOf","([Ljava/lang/Object;I)[Ljava/lang/Object;", av)); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/String","format","(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(s[s.length - 1]); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push("format(...)"); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","literal","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 23; continue;
    case 23:
      __pc = 23;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$0$5$0(Ldev/isxander/yacl3/dsl/OptionDsl;Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/api/OptionDescription$Builder;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push(l2); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("$this$descriptionBuilder"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l2); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(null); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(null); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/OptionDsl","addDefaultText$default","(Ldev/isxander/yacl3/dsl/OptionDsl;Ldev/isxander/yacl3/api/OptionDescription$Builder;Ljava/lang/Integer;ILjava/lang/Object;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l2); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","initialOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/gui/image/ImageRenderer")); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/api/OptionDescription$Builder","customImage","(Ldev/isxander/yacl3/gui/image/ImageRenderer;)Ldev/isxander/yacl3/api/OptionDescription$Builder;", rv, av)); pc = 14; continue;
    case 14:
      __pc = 14;
      s.pop(); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 16; continue;
    case 16:
      __pc = 16;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$0$5$1(ZLdev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("demo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.isInstance(s.pop(), "dev/isxander/zoomify/config/demo/FirstPersonDemo")); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r == 0) { pc = 9; } else { pc = 6; } continue;
    case 6:
      __pc = 6;
      s.push(l1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/FirstPersonDemo")); pc = 8; continue;
    case 8:
      __pc = 8;
      pc = undefined; continue;
    case 9:
      __pc = 9;
      s.push(null); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(s[s.length - 1]); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); if (r == null) { pc = 19; } else { pc = 12; } continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); if (r != 0) { pc = 16; } else { pc = 14; } continue;
    case 14:
      __pc = 14;
      s.push(1); pc = 15; continue;
    case 15:
      __pc = 15;
      pc = undefined; continue;
    case 16:
      __pc = 16;
      s.push(0); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/FirstPersonDemo","setKeepHandFov","(Z)V", rv, av); pc = 18; continue;
    case 18:
      __pc = 18;
      pc = undefined; continue;
    case 19:
      __pc = 19;
      s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 21; continue;
    case 21:
      __pc = 21;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$0$0(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registerDemo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.newInstance("kotlin/ranges/IntRange")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(10); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/ranges/IntRange","<init>","(II)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(1); pc = 11; continue;
    case 11:
      __pc = 11;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$0$0$0","(I)Lnet/minecraft/class_2561;", null, dv)); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","slider","(Lkotlin/ranges/IntRange;ILdev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 15; continue;
    case 15:
      __pc = 15;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$0$1(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registerDemo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(0.1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(5); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/ranges/RangesKt","rangeTo","(DD)Lkotlin/ranges/ClosedFloatingPointRange;", av)); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.cast(s.pop(), "kotlin/ranges/ClosedRange")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(0.1); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","access$formatSeconds","()Ldev/isxander/yacl3/api/controller/ValueFormatter;", [])); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","slider","(Lkotlin/ranges/ClosedRange;DLdev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 14; continue;
    case 14:
      __pc = 14;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$0$2(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registerDemo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(0.1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(5); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/ranges/RangesKt","rangeTo","(DD)Lkotlin/ranges/ClosedFloatingPointRange;", av)); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.cast(s.pop(), "kotlin/ranges/ClosedRange")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(0.1); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","access$formatSeconds","()Ldev/isxander/yacl3/api/controller/ValueFormatter;", [])); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","slider","(Lkotlin/ranges/ClosedRange;DLdev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 14; continue;
    case 14:
      __pc = 14;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$0$3(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      s.push("$this$registerDemo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(null); pc = 6; continue;
    case 6:
      __pc = 6;
      l1 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(0); pc = 8; continue;
    case 8:
      __pc = 8;
      l2 = s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(null); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","enumSwitch","(Ljava/lang/Class;Ldev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 14; continue;
    case 14:
      __pc = 14;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$0$4(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      s.push("$this$registerDemo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(null); pc = 6; continue;
    case 6:
      __pc = 6;
      l1 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(0); pc = 8; continue;
    case 8:
      __pc = 8;
      l2 = s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(null); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","enumSwitch","(Ljava/lang/Class;Ldev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 14; continue;
    case 14:
      __pc = 14;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$0$5(Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$register"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$0$5$0","(Ldev/isxander/yacl3/dsl/OptionDsl;Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/api/OptionDescription$Builder;)Lkotlin/Unit;", null, dv)); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","descriptionBuilder","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l1); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","tickBox","()Lkotlin/jvm/functions/Function1;", [])); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l1); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 16; continue;
    case 16:
      __pc = 16;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$0$5$1","(ZLdev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;)Lkotlin/Unit;", null, dv)); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","updateDemo","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function2;)V", rv, av); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 19; continue;
    case 19:
      __pc = 19;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$2$0$0(Ljava/util/List;Ldev/isxander/yacl3/api/Option;Ljava/lang/Boolean;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8;
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
      s.push(__ctx.cast(s.pop(), "java/lang/Iterable")); pc = 2; continue;
    case 2:
      __pc = 2;
      l3 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      l4 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l3); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Iterable","iterator","()Ljava/util/Iterator;", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      l5 = s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l5); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); if (r == 0) { pc = 27; } else { pc = 11; } continue;
    case 11:
      __pc = 11;
      s.push(l5); pc = 12; continue;
    case 12:
      __pc = 12;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 13; continue;
    case 13:
      __pc = 13;
      l6 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l6); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option")); pc = 16; continue;
    case 16:
      __pc = 16;
      l7 = s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(0); pc = 18; continue;
    case 18:
      __pc = 18;
      l8 = s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l7); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l2); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNull","(Ljava/lang/Object;)V", av); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l2); pc = 23; continue;
    case 23:
      __pc = 23;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Boolean","booleanValue","()Z", rv, [])); pc = 24; continue;
    case 24:
      __pc = 24;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/yacl3/api/Option","setAvailable","(Z)V", rv, av); pc = 25; continue;
    case 25:
      __pc = 25;
      pc = 26; continue;
    case 26:
      __pc = 26;
      pc = undefined; continue;
    case 27:
      __pc = 27;
      pc = 28; continue;
    case 28:
      __pc = 28;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$2$3$0(I)Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push("%.1fx"); pc = 1; continue;
    case 1:
      __pc = 1;
      l1 = s.pop(); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 4; continue;
    case 4:
      __pc = 4;
      l2 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l2); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); s.push(Number(r)); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(100); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); s.push(s.pop() / r); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l2); pc = 14; continue;
    case 14:
      __pc = 14;
      l2 = s.pop(); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l1); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l2); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l2); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(s.pop().length); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/util/Arrays","copyOf","([Ljava/lang/Object;I)[Ljava/lang/Object;", av)); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/String","format","(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(s[s.length - 1]); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push("format(...)"); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 24; continue;
    case 24:
      __pc = 24;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","literal","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 26; continue;
    case 26:
      __pc = 26;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$2$5$0(I)Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      r = s.pop(); if (r != 0) { pc = 6; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push("zoomify.gui.formatter.instant"); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 5; continue;
    case 5:
      __pc = 5;
      pc = undefined; continue;
    case 6:
      __pc = 6;
      s.push("%d%%"); pc = 7; continue;
    case 7:
      __pc = 7;
      l1 = s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(1); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 10; continue;
    case 10:
      __pc = 10;
      l2 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l2); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l2); pc = 17; continue;
    case 17:
      __pc = 17;
      l2 = s.pop(); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l1); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l2); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l2); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(s.pop().length); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/util/Arrays","copyOf","([Ljava/lang/Object;I)[Ljava/lang/Object;", av)); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/String","format","(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(s[s.length - 1]); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push("format(...)"); pc = 26; continue;
    case 26:
      __pc = 26;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 27; continue;
    case 27:
      __pc = 27;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","literal","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 29; continue;
    case 29:
      __pc = 29;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$2$0(Ljava/util/List;Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registerDemo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","tickBox","()Lkotlin/jvm/functions/Function1;", [])); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$2$0$0","(Ljava/util/List;Ldev/isxander/yacl3/api/Option;Ljava/lang/Boolean;)V", null, dv)); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/OptionDsl","listener","(Ljava/util/function/BiConsumer;)Ldev/isxander/yacl3/api/Option$Builder;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 13; continue;
    case 13:
      __pc = 13;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$2$1(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registerDemo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.newInstance("kotlin/ranges/IntRange")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(3); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(20); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/ranges/IntRange","<init>","(II)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(null); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(6); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(null); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","slider$default","(Lkotlin/ranges/IntRange;ILdev/isxander/yacl3/api/controller/ValueFormatter;ILjava/lang/Object;)Lkotlin/jvm/functions/Function1;", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 17; continue;
    case 17:
      __pc = 17;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$2$3(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registerDemo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.newInstance("kotlin/ranges/IntRange")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(110); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(200); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/ranges/IntRange","<init>","(II)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(10); pc = 11; continue;
    case 11:
      __pc = 11;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$2$3$0","(I)Lnet/minecraft/class_2561;", null, dv)); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","slider","(Lkotlin/ranges/IntRange;ILdev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 15; continue;
    case 15:
      __pc = 15;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$2$5(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registerDemo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.newInstance("kotlin/ranges/IntRange")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(100); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/ranges/IntRange","<init>","(II)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(1); pc = 11; continue;
    case 11:
      __pc = 11;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$2$5$0","(I)Lnet/minecraft/class_2561;", null, dv)); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","slider","(Lkotlin/ranges/IntRange;ILdev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 15; continue;
    case 15:
      __pc = 15;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$2$7(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registerDemo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","tickBox","()Lkotlin/jvm/functions/Function1;", [])); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$4$0(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      s.push("$this$register"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","access$defaultDescription","(Ldev/isxander/yacl3/dsl/OptionDsl;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(null); pc = 8; continue;
    case 8:
      __pc = 8;
      l1 = s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(0); pc = 10; continue;
    case 10:
      __pc = 10;
      l2 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(null); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","enumSwitch","(Ljava/lang/Class;Ldev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 16; continue;
    case 16:
      __pc = 16;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$4$1(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      s.push("$this$register"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","access$defaultDescription","(Ldev/isxander/yacl3/dsl/OptionDsl;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(null); pc = 8; continue;
    case 8:
      __pc = 8;
      l1 = s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(0); pc = 10; continue;
    case 10:
      __pc = 10;
      l2 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(null); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","enumSwitch","(Ljava/lang/Class;Ldev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 16; continue;
    case 16:
      __pc = 16;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$4$2(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      s.push("$this$register"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","access$defaultDescription","(Ldev/isxander/yacl3/dsl/OptionDsl;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(null); pc = 8; continue;
    case 8:
      __pc = 8;
      l1 = s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(0); pc = 10; continue;
    case 10:
      __pc = 10;
      l2 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(null); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","enumSwitch","(Ljava/lang/Class;Ldev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 16; continue;
    case 16:
      __pc = 16;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$1(Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;)Ldev/isxander/yacl3/api/OptionGroup;": function (__ctx, __self, __args) {
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
      s.push(null); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ExistingDelegateProvider","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/OptionGroup")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$0(Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/dsl/GroupDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registering"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/GroupDsl","getOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$basic$2$1","INSTANCE","Ldev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$basic$2$1;")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function1")); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","initialOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer")); pc = 11; continue;
    case 11:
      __pc = 11;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$0$0","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", rv, av)); pc = 13; continue;
    case 13:
      __pc = 13;
      s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l1); pc = 16; continue;
    case 16:
      __pc = 16;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/GroupDsl","getOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$basic$2$3","INSTANCE","Ldev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$basic$2$3;")); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function1")); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l0); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","initialOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer")); pc = 22; continue;
    case 22:
      __pc = 22;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$0$1","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", rv, av)); pc = 24; continue;
    case 24:
      __pc = 24;
      s.pop(); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l0); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l1); pc = 27; continue;
    case 27:
      __pc = 27;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/GroupDsl","getOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$basic$2$5","INSTANCE","Ldev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$basic$2$5;")); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function1")); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l0); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","initialOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer")); pc = 33; continue;
    case 33:
      __pc = 33;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$0$2","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 34; continue;
    case 34:
      __pc = 34;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", rv, av)); pc = 35; continue;
    case 35:
      __pc = 35;
      s.pop(); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l0); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(l1); pc = 38; continue;
    case 38:
      __pc = 38;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/GroupDsl","getOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$basic$2$7","INSTANCE","Ldev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$basic$2$7;")); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function1")); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(l0); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","initialOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer")); pc = 44; continue;
    case 44:
      __pc = 44;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$0$3","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 45; continue;
    case 45:
      __pc = 45;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", rv, av)); pc = 46; continue;
    case 46:
      __pc = 46;
      s.pop(); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(l0); pc = 48; continue;
    case 48:
      __pc = 48;
      s.push(l1); pc = 49; continue;
    case 49:
      __pc = 49;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/GroupDsl","getOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 50; continue;
    case 50:
      __pc = 50;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$basic$2$9","INSTANCE","Ldev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$basic$2$9;")); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function1")); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push(l0); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","initialOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 54; continue;
    case 54:
      __pc = 54;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer")); pc = 55; continue;
    case 55:
      __pc = 55;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$0$4","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 56; continue;
    case 56:
      __pc = 56;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", rv, av)); pc = 57; continue;
    case 57:
      __pc = 57;
      s.pop(); pc = 58; continue;
    case 58:
      __pc = 58;
      s.push(l1); pc = 59; continue;
    case 59:
      __pc = 59;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/GroupDsl","getOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 61; continue;
    case 61:
      __pc = 61;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getAffectHandFov","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 62; continue;
    case 62:
      __pc = 62;
      s.push(l0); pc = 63; continue;
    case 63:
      __pc = 63;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$0$5","(Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 64; continue;
    case 64:
      __pc = 64;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Ldev/isxander/yacl3/config/v3/ConfigEntry;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", av)); pc = 65; continue;
    case 65:
      __pc = 65;
      s.pop(); pc = 66; continue;
    case 66:
      __pc = 66;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 67; continue;
    case 67:
      __pc = 67;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$3(Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;)Ldev/isxander/yacl3/api/OptionGroup;": function (__ctx, __self, __args) {
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
      s.push(null); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(1); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ExistingDelegateProvider","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/OptionGroup")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$2(Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/dsl/GroupDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8, l9;
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
      s.push("$this$registering"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.newInstance("java/util/ArrayList")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      __ctx.invoke("java/util/ArrayList","<init>","()V", rv, []); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "java/util/List")); pc = 7; continue;
    case 7:
      __pc = 7;
      l2 = s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l1); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/GroupDsl","getOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$scrolling$2$scrollZoomOpt$1","INSTANCE","Ldev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$scrolling$2$scrollZoomOpt$1;")); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function1")); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","scrollOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer")); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l2); pc = 17; continue;
    case 17:
      __pc = 17;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$2$0","(Ljava/util/List;Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 18; continue;
    case 18:
      __pc = 18;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", rv, av)); pc = 19; continue;
    case 19:
      __pc = 19;
      l3 = s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l0); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l1); pc = 22; continue;
    case 22:
      __pc = 22;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/GroupDsl","getOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$scrolling$2$1","INSTANCE","Ldev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$scrolling$2$1;")); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function1")); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l0); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","scrollOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer")); pc = 28; continue;
    case 28:
      __pc = 28;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$2$1","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", rv, av)); pc = 30; continue;
    case 30:
      __pc = 30;
      l4 = s.pop(); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l4); pc = 32; continue;
    case 32:
      __pc = 32;
      l5 = s.pop(); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(0); pc = 34; continue;
    case 34:
      __pc = 34;
      l6 = s.pop(); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l2); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l5); pc = 37; continue;
    case 37:
      __pc = 37;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","add","(Ljava/lang/Object;)Z", rv, av)); pc = 38; continue;
    case 38:
      __pc = 38;
      s.pop(); pc = 39; continue;
    case 39:
      __pc = 39;
      pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(l0); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(l1); pc = 42; continue;
    case 42:
      __pc = 42;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/GroupDsl","getOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$scrolling$2$4","INSTANCE","Ldev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$scrolling$2$4;")); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function1")); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(l0); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","scrollOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer")); pc = 48; continue;
    case 48:
      __pc = 48;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$2$3","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 49; continue;
    case 49:
      __pc = 49;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", rv, av)); pc = 50; continue;
    case 50:
      __pc = 50;
      l4 = s.pop(); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(l4); pc = 52; continue;
    case 52:
      __pc = 52;
      l5 = s.pop(); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(0); pc = 54; continue;
    case 54:
      __pc = 54;
      l6 = s.pop(); pc = 55; continue;
    case 55:
      __pc = 55;
      s.push(l2); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(l5); pc = 57; continue;
    case 57:
      __pc = 57;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","add","(Ljava/lang/Object;)Z", rv, av)); pc = 58; continue;
    case 58:
      __pc = 58;
      s.pop(); pc = 59; continue;
    case 59:
      __pc = 59;
      pc = 60; continue;
    case 60:
      __pc = 60;
      s.push(l0); pc = 61; continue;
    case 61:
      __pc = 61;
      s.push(l1); pc = 62; continue;
    case 62:
      __pc = 62;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/GroupDsl","getOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 63; continue;
    case 63:
      __pc = 63;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$scrolling$2$7","INSTANCE","Ldev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$scrolling$2$7;")); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function1")); pc = 65; continue;
    case 65:
      __pc = 65;
      s.push(l0); pc = 66; continue;
    case 66:
      __pc = 66;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","scrollOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 67; continue;
    case 67:
      __pc = 67;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer")); pc = 68; continue;
    case 68:
      __pc = 68;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$2$5","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 69; continue;
    case 69:
      __pc = 69;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", rv, av)); pc = 70; continue;
    case 70:
      __pc = 70;
      l4 = s.pop(); pc = 71; continue;
    case 71:
      __pc = 71;
      s.push(l4); pc = 72; continue;
    case 72:
      __pc = 72;
      l5 = s.pop(); pc = 73; continue;
    case 73:
      __pc = 73;
      s.push(0); pc = 74; continue;
    case 74:
      __pc = 74;
      l6 = s.pop(); pc = 75; continue;
    case 75:
      __pc = 75;
      s.push(l2); pc = 76; continue;
    case 76:
      __pc = 76;
      s.push(l5); pc = 77; continue;
    case 77:
      __pc = 77;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","add","(Ljava/lang/Object;)Z", rv, av)); pc = 78; continue;
    case 78:
      __pc = 78;
      s.pop(); pc = 79; continue;
    case 79:
      __pc = 79;
      pc = 80; continue;
    case 80:
      __pc = 80;
      s.push(l0); pc = 81; continue;
    case 81:
      __pc = 81;
      s.push(l1); pc = 82; continue;
    case 82:
      __pc = 82;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/GroupDsl","getOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 83; continue;
    case 83:
      __pc = 83;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$scrolling$2$10","INSTANCE","Ldev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$behaviour$2$scrolling$2$10;")); pc = 84; continue;
    case 84:
      __pc = 84;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function1")); pc = 85; continue;
    case 85:
      __pc = 85;
      s.push(l0); pc = 86; continue;
    case 86:
      __pc = 86;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","scrollOnlyDemo","Ldev/isxander/zoomify/config/demo/FirstPersonDemo;", s.pop())); pc = 87; continue;
    case 87:
      __pc = 87;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer")); pc = 88; continue;
    case 88:
      __pc = 88;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$2$7","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 89; continue;
    case 89:
      __pc = 89;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", rv, av)); pc = 90; continue;
    case 90:
      __pc = 90;
      l4 = s.pop(); pc = 91; continue;
    case 91:
      __pc = 91;
      s.push(l4); pc = 92; continue;
    case 92:
      __pc = 92;
      l5 = s.pop(); pc = 93; continue;
    case 93:
      __pc = 93;
      s.push(0); pc = 94; continue;
    case 94:
      __pc = 94;
      l6 = s.pop(); pc = 95; continue;
    case 95:
      __pc = 95;
      s.push(l2); pc = 96; continue;
    case 96:
      __pc = 96;
      s.push(l5); pc = 97; continue;
    case 97:
      __pc = 97;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","add","(Ljava/lang/Object;)Z", rv, av)); pc = 98; continue;
    case 98:
      __pc = 98;
      s.pop(); pc = 99; continue;
    case 99:
      __pc = 99;
      pc = 100; continue;
    case 100:
      __pc = 100;
      s.push(l2); pc = 101; continue;
    case 101:
      __pc = 101;
      s.push(__ctx.cast(s.pop(), "java/lang/Iterable")); pc = 102; continue;
    case 102:
      __pc = 102;
      l4 = s.pop(); pc = 103; continue;
    case 103:
      __pc = 103;
      s.push(0); pc = 104; continue;
    case 104:
      __pc = 104;
      l5 = s.pop(); pc = 105; continue;
    case 105:
      __pc = 105;
      s.push(l4); pc = 106; continue;
    case 106:
      __pc = 106;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Iterable","iterator","()Ljava/util/Iterator;", rv, [])); pc = 107; continue;
    case 107:
      __pc = 107;
      l6 = s.pop(); pc = 108; continue;
    case 108:
      __pc = 108;
      s.push(l6); pc = 109; continue;
    case 109:
      __pc = 109;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 110; continue;
    case 110:
      __pc = 110;
      r = s.pop(); if (r == 0) { pc = 130; } else { pc = 111; } continue;
    case 111:
      __pc = 111;
      s.push(l6); pc = 112; continue;
    case 112:
      __pc = 112;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 113; continue;
    case 113:
      __pc = 113;
      l7 = s.pop(); pc = 114; continue;
    case 114:
      __pc = 114;
      s.push(l7); pc = 115; continue;
    case 115:
      __pc = 115;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option")); pc = 116; continue;
    case 116:
      __pc = 116;
      l8 = s.pop(); pc = 117; continue;
    case 117:
      __pc = 117;
      s.push(0); pc = 118; continue;
    case 118:
      __pc = 118;
      l9 = s.pop(); pc = 119; continue;
    case 119:
      __pc = 119;
      s.push(l8); pc = 120; continue;
    case 120:
      __pc = 120;
      s.push(l3); pc = 121; continue;
    case 121:
      __pc = 121;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/api/Option","pendingValue","()Ljava/lang/Object;", rv, [])); pc = 122; continue;
    case 122:
      __pc = 122;
      s.push(s[s.length - 1]); pc = 123; continue;
    case 123:
      __pc = 123;
      s.push("pendingValue(...)"); pc = 124; continue;
    case 124:
      __pc = 124;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 125; continue;
    case 125:
      __pc = 125;
      s.push(__ctx.cast(s.pop(), "java/lang/Boolean")); pc = 126; continue;
    case 126:
      __pc = 126;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Boolean","booleanValue","()Z", rv, [])); pc = 127; continue;
    case 127:
      __pc = 127;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/yacl3/api/Option","setAvailable","(Z)V", rv, av); pc = 128; continue;
    case 128:
      __pc = 128;
      pc = 129; continue;
    case 129:
      __pc = 129;
      pc = undefined; continue;
    case 130:
      __pc = 130;
      pc = 131; continue;
    case 131:
      __pc = 131;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 132; continue;
    case 132:
      __pc = 132;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$5(Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;)Ldev/isxander/yacl3/api/OptionGroup;": function (__ctx, __self, __args) {
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
      s.push(null); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(2); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ExistingDelegateProvider","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/OptionGroup")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0$4(Ldev/isxander/yacl3/dsl/GroupDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registering"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/GroupDsl","getOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getSpyglassBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$4$0","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Ldev/isxander/yacl3/config/v3/ConfigEntry;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", av)); pc = 9; continue;
    case 9:
      __pc = 9;
      s.pop(); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/GroupDsl","getOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 13; continue;
    case 13:
      __pc = 13;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getSpyglassOverlayVisibility","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 14; continue;
    case 14:
      __pc = 14;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$4$1","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Ldev/isxander/yacl3/config/v3/ConfigEntry;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", av)); pc = 16; continue;
    case 16:
      __pc = 16;
      s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/GroupDsl","getOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 20; continue;
    case 20:
      __pc = 20;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getSpyglassSoundBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 21; continue;
    case 21:
      __pc = 21;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$4$2","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Ldev/isxander/yacl3/config/v3/ConfigEntry;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", av)); pc = 23; continue;
    case 23:
      __pc = 23;
      s.pop(); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 25; continue;
    case 25:
      __pc = 25;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$2$2$0(I)Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      r = s.pop(); if (r != 0) { pc = 4; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("net/minecraft/network/chat/CommonComponents","field_24333","Lnet/minecraft/class_2561;")); pc = 3; continue;
    case 3:
      __pc = 3;
      pc = undefined; continue;
    case 4:
      __pc = 4;
      s.push("%d%%"); pc = 5; continue;
    case 5:
      __pc = 5;
      l1 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(1); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 8; continue;
    case 8:
      __pc = 8;
      l2 = s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l2); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l2); pc = 15; continue;
    case 15:
      __pc = 15;
      l2 = s.pop(); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l1); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l2); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l2); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(s.pop().length); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/util/Arrays","copyOf","([Ljava/lang/Object;I)[Ljava/lang/Object;", av)); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/String","format","(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(s[s.length - 1]); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push("format(...)"); pc = 24; continue;
    case 24:
      __pc = 24;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 25; continue;
    case 25:
      __pc = 25;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","literal","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 27; continue;
    case 27:
      __pc = 27;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$2$4$0(I)Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      r = s.pop(); if (r != 0) { pc = 4; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("net/minecraft/network/chat/CommonComponents","field_24333","Lnet/minecraft/class_2561;")); pc = 3; continue;
    case 3:
      __pc = 3;
      pc = undefined; continue;
    case 4:
      __pc = 4;
      s.push("%d%%"); pc = 5; continue;
    case 5:
      __pc = 5;
      l1 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(1); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 8; continue;
    case 8:
      __pc = 8;
      l2 = s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l2); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l2); pc = 15; continue;
    case 15:
      __pc = 15;
      l2 = s.pop(); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l1); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l2); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l2); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(s.pop().length); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/util/Arrays","copyOf","([Ljava/lang/Object;I)[Ljava/lang/Object;", av)); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/String","format","(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(s[s.length - 1]); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push("format(...)"); pc = 24; continue;
    case 24:
      __pc = 24;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 25; continue;
    case 25:
      __pc = 25;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","literal","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 27; continue;
    case 27:
      __pc = 27;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$2$0(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      s.push("$this$register"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","access$defaultDescription","(Ldev/isxander/yacl3/dsl/OptionDsl;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(null); pc = 8; continue;
    case 8:
      __pc = 8;
      l1 = s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(0); pc = 10; continue;
    case 10:
      __pc = 10;
      l2 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(null); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","enumSwitch","(Ljava/lang/Class;Ldev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 16; continue;
    case 16:
      __pc = 16;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$2$1(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
    var l0, l1;
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
      s.push("$this$register"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","access$defaultDescription","(Ldev/isxander/yacl3/dsl/OptionDsl;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","tickBox","()Lkotlin/jvm/functions/Function1;", [])); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(1); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 12; continue;
    case 12:
      __pc = 12;
      l1 = s.pop(); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l1); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("dev/isxander/yacl3/api/OptionFlag","GAME_RESTART","Ldev/isxander/yacl3/api/OptionFlag;")); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l1); pc = 18; continue;
    case 18:
      __pc = 18;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/OptionDsl","flag","([Ldev/isxander/yacl3/api/OptionFlag;)Ldev/isxander/yacl3/api/Option$Builder;", rv, av)); pc = 19; continue;
    case 19:
      __pc = 19;
      s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 21; continue;
    case 21:
      __pc = 21;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$2$2(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$register"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","access$defaultDescription","(Ldev/isxander/yacl3/dsl/OptionDsl;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.newInstance("kotlin/ranges/IntRange")); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(s[s.length - 1]); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(150); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/ranges/IntRange","<init>","(II)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(10); pc = 13; continue;
    case 13:
      __pc = 13;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$2$2$0","(I)Lnet/minecraft/class_2561;", null, dv)); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","slider","(Lkotlin/ranges/IntRange;ILdev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 17; continue;
    case 17:
      __pc = 17;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$2$3(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$register"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","access$defaultDescription","(Ldev/isxander/yacl3/dsl/OptionDsl;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","tickBox","()Lkotlin/jvm/functions/Function1;", [])); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$2$4(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$register"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","access$defaultDescription","(Ldev/isxander/yacl3/dsl/OptionDsl;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.newInstance("kotlin/ranges/IntRange")); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(s[s.length - 1]); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(250); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/ranges/IntRange","<init>","(II)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(10); pc = 13; continue;
    case 13:
      __pc = 13;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$2$4$0","(I)Lnet/minecraft/class_2561;", null, dv)); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","slider","(Lkotlin/ranges/IntRange;ILdev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 17; continue;
    case 17:
      __pc = 17;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$4$3$0(Ljava/lang/Double;)Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
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
      s.push(0); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","areEqual","(Ljava/lang/Double;D)Z", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push("zoomify.gui.formatter.instant"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 7; continue;
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push("zoomify.gui.formatter.seconds"); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(1); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 11; continue;
    case 11:
      __pc = 11;
      l1 = s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push("%.2f"); pc = 15; continue;
    case 15:
      __pc = 15;
      l2 = s.pop(); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(1); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 18; continue;
    case 18:
      __pc = 18;
      l3 = s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l3); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(0); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l0); pc = 22; continue;
    case 22:
      __pc = 22;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l3); pc = 24; continue;
    case 24:
      __pc = 24;
      l3 = s.pop(); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l2); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l3); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l3); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(s.pop().length); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/util/Arrays","copyOf","([Ljava/lang/Object;I)[Ljava/lang/Object;", av)); pc = 30; continue;
    case 30:
      __pc = 30;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/String","format","(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(s[s.length - 1]); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push("format(...)"); pc = 33; continue;
    case 33:
      __pc = 33;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 34; continue;
    case 34:
      __pc = 34;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l1); pc = 36; continue;
    case 36:
      __pc = 36;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;[Ljava/lang/Object;)Lnet/minecraft/class_5250;", av)); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 38; continue;
    case 38:
      __pc = 38;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$4$4$0(Ldev/isxander/yacl3/dsl/OptionDsl;Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/api/OptionDescription$Builder;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push(l2); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("$this$descriptionBuilder"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l2); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(null); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(null); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/OptionDsl","addDefaultText$default","(Ldev/isxander/yacl3/dsl/OptionDsl;Ldev/isxander/yacl3/api/OptionDescription$Builder;Ljava/lang/Integer;ILjava/lang/Object;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l2); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","secondaryZoomDemo","Ldev/isxander/zoomify/config/demo/ThirdPersonDemo;", s.pop())); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/gui/image/ImageRenderer")); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/api/OptionDescription$Builder","customImage","(Ldev/isxander/yacl3/gui/image/ImageRenderer;)Ldev/isxander/yacl3/api/OptionDescription$Builder;", rv, av)); pc = 14; continue;
    case 14:
      __pc = 14;
      s.pop(); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 16; continue;
    case 16:
      __pc = 16;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$4$4$1(ZLdev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("demo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.isInstance(s.pop(), "dev/isxander/zoomify/config/demo/ThirdPersonDemo")); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r == 0) { pc = 9; } else { pc = 6; } continue;
    case 6:
      __pc = 6;
      s.push(l1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ThirdPersonDemo")); pc = 8; continue;
    case 8:
      __pc = 8;
      pc = undefined; continue;
    case 9:
      __pc = 9;
      s.push(null); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(s[s.length - 1]); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); if (r == null) { pc = 19; } else { pc = 12; } continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); if (r != 0) { pc = 16; } else { pc = 14; } continue;
    case 14:
      __pc = 14;
      s.push(1); pc = 15; continue;
    case 15:
      __pc = 15;
      pc = undefined; continue;
    case 16:
      __pc = 16;
      s.push(0); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/ThirdPersonDemo","setRenderHud","(Z)V", rv, av); pc = 18; continue;
    case 18:
      __pc = 18;
      pc = undefined; continue;
    case 19:
      __pc = 19;
      s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 21; continue;
    case 21:
      __pc = 21;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$4$0(Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;)Ldev/isxander/yacl3/api/LabelOption;": function (__ctx, __self, __args) {
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
      s.push(null); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(5); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ExistingDelegateProvider","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/LabelOption")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$4$1(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registerDemo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.newInstance("kotlin/ranges/IntRange")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(2); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(10); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/ranges/IntRange","<init>","(II)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","access$formatPercent","()Ldev/isxander/yacl3/api/controller/ValueFormatter;", [])); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","slider","(Lkotlin/ranges/IntRange;ILdev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 15; continue;
    case 15:
      __pc = 15;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$4$2(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registerDemo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(6); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(30); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/ranges/RangesKt","rangeTo","(DD)Lkotlin/ranges/ClosedFloatingPointRange;", av)); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.cast(s.pop(), "kotlin/ranges/ClosedRange")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(2); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","access$formatSeconds","()Ldev/isxander/yacl3/api/controller/ValueFormatter;", [])); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","slider","(Lkotlin/ranges/ClosedRange;DLdev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 14; continue;
    case 14:
      __pc = 14;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$4$3(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registerDemo"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(5); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/ranges/RangesKt","rangeTo","(DD)Lkotlin/ranges/ClosedFloatingPointRange;", av)); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.cast(s.pop(), "kotlin/ranges/ClosedRange")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(0.25); pc = 10; continue;
    case 10:
      __pc = 10;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$4$3$0","(Ljava/lang/Double;)Lnet/minecraft/class_2561;", null, dv)); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","slider","(Lkotlin/ranges/ClosedRange;DLdev/isxander/yacl3/api/controller/ValueFormatter;)Lkotlin/jvm/functions/Function1;", av)); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 14; continue;
    case 14:
      __pc = 14;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$4$4(Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$register"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$4$4$0","(Ldev/isxander/yacl3/dsl/OptionDsl;Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/api/OptionDescription$Builder;)Lkotlin/Unit;", null, dv)); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","descriptionBuilder","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l1); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ControllersKt","tickBox","()Lkotlin/jvm/functions/Function1;", [])); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","setController","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l1); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 16; continue;
    case 16:
      __pc = 16;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$4$4$1","(ZLdev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;)Lkotlin/Unit;", null, dv)); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","updateDemo","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function2;)V", rv, av); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 19; continue;
    case 19:
      __pc = 19;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$6$0$0(Ldev/isxander/yacl3/gui/YACLScreen;Ldev/isxander/yacl3/api/ButtonOption;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","INSTANCE","Ldev/isxander/zoomify/Zoomify;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/Zoomify","unbindConflicting","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$6$2$0(Ldev/isxander/yacl3/gui/YACLScreen;Ldev/isxander/yacl3/api/ButtonOption;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/migrator/Migrator","Companion","Ldev/isxander/zoomify/config/migrator/Migrator$Companion;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/migrator/Migrator$Companion","checkMigrations","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r != 0) { pc = 20; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push("zoomify.gui.title"); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(s[s.length - 1]); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push("translatable(...)"); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push("zoomify.migrate.no_migrations"); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(s[s.length - 1]); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push("translatable(...)"); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(4); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(null); pc = 18; continue;
    case 18:
      __pc = 18;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/utils/MinecraftExtKt","toast$default","(Lnet/minecraft/class_2561;Lnet/minecraft/class_2561;ZILjava/lang/Object;)Lnet/minecraft/class_370;", av)); pc = 19; continue;
    case 19:
      __pc = 19;
      s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$6$4$1$0(Ljava/lang/String;Ldev/isxander/zoomify/config/Presets;Ldev/isxander/zoomify/config/demo/FirstPersonDemo;Ldev/isxander/yacl3/api/OptionDescription$Builder;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push(l3); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("$this$descriptionBuilder"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l3); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(1); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 6; continue;
    case 6:
      __pc = 6;
      l4 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l4); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.unsupportedLambda("dev/isxander/zoomify/config/SettingsGuiFactory.createSettingsGui$lambda$0$6$4$1$0:18")); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(1); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 13; continue;
    case 13:
      __pc = 13;
      l5 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l5); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l1); pc = 17; continue;
    case 17:
      __pc = 17;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/Presets","getDisplayName","()Lnet/minecraft/class_2561;", rv, [])); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l5); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;[Ljava/lang/Object;)Lnet/minecraft/class_5250;", av)); pc = 21; continue;
    case 21:
      __pc = 21;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l4); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/api/OptionDescription$Builder","text","([Lnet/minecraft/class_2561;)Ldev/isxander/yacl3/api/OptionDescription$Builder;", rv, av)); pc = 24; continue;
    case 24:
      __pc = 24;
      s.pop(); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l3); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l2); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/gui/image/ImageRenderer")); pc = 28; continue;
    case 28:
      __pc = 28;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/api/OptionDescription$Builder","customImage","(Ldev/isxander/yacl3/gui/image/ImageRenderer;)Ldev/isxander/yacl3/api/OptionDescription$Builder;", rv, av)); pc = 29; continue;
    case 29:
      __pc = 29;
      s.pop(); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 31; continue;
    case 31:
      __pc = 31;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$6$4$0(Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;)Ldev/isxander/yacl3/api/LabelOption;": function (__ctx, __self, __args) {
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
      s.push(null); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(9); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ExistingDelegateProvider","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/LabelOption")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$6$4$1(Ldev/isxander/zoomify/config/Presets;Ljava/lang/String;Ldev/isxander/zoomify/config/demo/FirstPersonDemo;Ldev/isxander/yacl3/dsl/ButtonOptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
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
      s.push(l3); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("$this$registerButton"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l3); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/Presets","getDisplayName","()Lnet/minecraft/class_2561;", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ButtonOptionDsl","name","(Lnet/minecraft/class_2561;)Ldev/isxander/yacl3/api/ButtonOption$Builder;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l3); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/ButtonOption$Builder")); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l2); pc = 13; continue;
    case 13:
      __pc = 13;
      var dv = new Array(4); for (var di = 3; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$6$4$1$0","(Ljava/lang/String;Ldev/isxander/zoomify/config/Presets;Ldev/isxander/zoomify/config/demo/FirstPersonDemo;Ldev/isxander/yacl3/api/OptionDescription$Builder;)Lkotlin/Unit;", null, dv)); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","descriptionBuilder","(Ldev/isxander/yacl3/api/ButtonOption$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l3); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l1); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.unsupportedLambda("dev/isxander/zoomify/config/SettingsGuiFactory.createSettingsGui$lambda$0$6$4$1:35")); pc = 18; continue;
    case 18:
      __pc = 18;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ButtonOptionDsl","text","(Lnet/minecraft/class_2561;)Ldev/isxander/yacl3/api/ButtonOption$Builder;", rv, av)); pc = 21; continue;
    case 21:
      __pc = 21;
      s.pop(); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l3); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$6$4$1$1","(Ldev/isxander/zoomify/config/Presets;Ldev/isxander/yacl3/gui/YACLScreen;Ldev/isxander/yacl3/api/ButtonOption;)V", null, dv)); pc = 25; continue;
    case 25:
      __pc = 25;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ButtonOptionDsl","action","(Ljava/util/function/BiConsumer;)Ldev/isxander/yacl3/api/ButtonOption$Builder;", rv, av)); pc = 26; continue;
    case 26:
      __pc = 26;
      s.pop(); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 28; continue;
    case 28:
      __pc = 28;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$6$1(Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;)Ldev/isxander/yacl3/api/ButtonOption;": function (__ctx, __self, __args) {
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
      s.push(null); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(7); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ExistingDelegateProvider","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/ButtonOption")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$6$0(Ldev/isxander/yacl3/dsl/ButtonOptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registeringButton"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","access$defaultDescription","(Ldev/isxander/yacl3/dsl/ButtonOptionDsl;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$6$0$0","(Ldev/isxander/yacl3/gui/YACLScreen;Ldev/isxander/yacl3/api/ButtonOption;)V", null, dv)); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ButtonOptionDsl","action","(Ljava/util/function/BiConsumer;)Ldev/isxander/yacl3/api/ButtonOption$Builder;", rv, av)); pc = 8; continue;
    case 8:
      __pc = 8;
      s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$6$3(Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;)Ldev/isxander/yacl3/api/ButtonOption;": function (__ctx, __self, __args) {
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
      s.push(null); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(8); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ExistingDelegateProvider","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/ButtonOption")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$6$2(Ldev/isxander/yacl3/dsl/ButtonOptionDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registeringButton"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","access$defaultDescription","(Ldev/isxander/yacl3/dsl/ButtonOptionDsl;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$6$2$0","(Ldev/isxander/yacl3/gui/YACLScreen;Ldev/isxander/yacl3/api/ButtonOption;)V", null, dv)); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ButtonOptionDsl","action","(Ljava/util/function/BiConsumer;)Ldev/isxander/yacl3/api/ButtonOption$Builder;", rv, av)); pc = 8; continue;
    case 8:
      __pc = 8;
      s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$6$5(Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;)Ldev/isxander/yacl3/api/OptionGroup;": function (__ctx, __self, __args) {
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
      s.push(null); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(10); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ExistingDelegateProvider","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/OptionGroup")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$1(Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;)Ldev/isxander/yacl3/api/ConfigCategory;": function (__ctx, __self, __args) {
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
      s.push(null); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(3); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ExistingDelegateProvider","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/ConfigCategory")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$0(Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/dsl/CategoryDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
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
      s.push("$this$registering"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getGroups","()Ldev/isxander/yacl3/dsl/ParentRegistrar;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(null); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$0","(Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/dsl/GroupDsl;)Lkotlin/Unit;", null, dv)); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(1); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(null); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ParentRegistrar","registering$default","(Ldev/isxander/yacl3/dsl/ParentRegistrar;Ljava/lang/String;Lkotlin/jvm/functions/Function1;ILjava/lang/Object;)Ldev/isxander/yacl3/dsl/RegisterableActionDelegateProvider;", av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(null); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(0); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RegisterableActionDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;", rv, av)); pc = 16; continue;
    case 16:
      __pc = 16;
      l2 = s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l1); pc = 18; continue;
    case 18:
      __pc = 18;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getGroups","()Ldev/isxander/yacl3/dsl/ParentRegistrar;", rv, [])); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(null); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l0); pc = 21; continue;
    case 21:
      __pc = 21;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$2","(Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/dsl/GroupDsl;)Lkotlin/Unit;", null, dv)); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(1); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(null); pc = 24; continue;
    case 24:
      __pc = 24;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ParentRegistrar","registering$default","(Ldev/isxander/yacl3/dsl/ParentRegistrar;Ljava/lang/String;Lkotlin/jvm/functions/Function1;ILjava/lang/Object;)Ldev/isxander/yacl3/dsl/RegisterableActionDelegateProvider;", av)); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(null); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(1); pc = 28; continue;
    case 28:
      __pc = 28;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RegisterableActionDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;", rv, av)); pc = 30; continue;
    case 30:
      __pc = 30;
      l3 = s.pop(); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l1); pc = 32; continue;
    case 32:
      __pc = 32;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getGroups","()Ldev/isxander/yacl3/dsl/ParentRegistrar;", rv, [])); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(null); pc = 34; continue;
    case 34:
      __pc = 34;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0$4","(Ldev/isxander/yacl3/dsl/GroupDsl;)Lkotlin/Unit;", null, dv)); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(1); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(null); pc = 37; continue;
    case 37:
      __pc = 37;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ParentRegistrar","registering$default","(Ldev/isxander/yacl3/dsl/ParentRegistrar;Ljava/lang/String;Lkotlin/jvm/functions/Function1;ILjava/lang/Object;)Ldev/isxander/yacl3/dsl/RegisterableActionDelegateProvider;", av)); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(null); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(2); pc = 41; continue;
    case 41:
      __pc = 41;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 42; continue;
    case 42:
      __pc = 42;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RegisterableActionDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;", rv, av)); pc = 43; continue;
    case 43:
      __pc = 43;
      l4 = s.pop(); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 45; continue;
    case 45:
      __pc = 45;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$3(Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;)Ldev/isxander/yacl3/api/ConfigCategory;": function (__ctx, __self, __args) {
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
      s.push(null); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(4); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ExistingDelegateProvider","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/ConfigCategory")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$2(Ldev/isxander/yacl3/dsl/CategoryDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registering"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getRootOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getZoomKeyBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$2$0","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Ldev/isxander/yacl3/config/v3/ConfigEntry;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", av)); pc = 9; continue;
    case 9:
      __pc = 9;
      s.pop(); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getRootOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 13; continue;
    case 13:
      __pc = 13;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","get_keybindScrolling","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 14; continue;
    case 14:
      __pc = 14;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$2$1","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Ldev/isxander/yacl3/config/v3/ConfigEntry;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", av)); pc = 16; continue;
    case 16:
      __pc = 16;
      s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getRootOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 20; continue;
    case 20:
      __pc = 20;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getRelativeSensitivity","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 21; continue;
    case 21:
      __pc = 21;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$2$2","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Ldev/isxander/yacl3/config/v3/ConfigEntry;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", av)); pc = 23; continue;
    case 23:
      __pc = 23;
      s.pop(); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l0); pc = 25; continue;
    case 25:
      __pc = 25;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getRootOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 27; continue;
    case 27:
      __pc = 27;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getRelativeViewBobbing","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 28; continue;
    case 28:
      __pc = 28;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$2$3","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Ldev/isxander/yacl3/config/v3/ConfigEntry;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", av)); pc = 30; continue;
    case 30:
      __pc = 30;
      s.pop(); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l0); pc = 32; continue;
    case 32:
      __pc = 32;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getRootOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 34; continue;
    case 34:
      __pc = 34;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getCinematicCamera","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 35; continue;
    case 35:
      __pc = 35;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$2$4","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 36; continue;
    case 36:
      __pc = 36;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Ldev/isxander/yacl3/config/v3/ConfigEntry;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", av)); pc = 37; continue;
    case 37:
      __pc = 37;
      s.pop(); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 39; continue;
    case 39:
      __pc = 39;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$5(Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;)Ldev/isxander/yacl3/api/ConfigCategory;": function (__ctx, __self, __args) {
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
      s.push(null); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(6); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ExistingDelegateProvider","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/ConfigCategory")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$4(Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/dsl/CategoryDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      s.push("$this$registering"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getRootOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/OptionRegistrar","getRegisteringLabel","()Ldev/isxander/yacl3/dsl/RegisterableDelegateProvider;", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(null); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(5); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RegisterableDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      l2 = s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l1); pc = 14; continue;
    case 14:
      __pc = 14;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getRootOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$secondary$2$1","INSTANCE","Ldev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$secondary$2$1;")); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function1")); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","secondaryZoomDemo","Ldev/isxander/zoomify/config/demo/ThirdPersonDemo;", s.pop())); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer")); pc = 20; continue;
    case 20:
      __pc = 20;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$4$1","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", rv, av)); pc = 22; continue;
    case 22:
      __pc = 22;
      s.pop(); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l1); pc = 25; continue;
    case 25:
      __pc = 25;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getRootOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$secondary$2$3","INSTANCE","Ldev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$secondary$2$3;")); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function1")); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l0); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","secondaryZoomDemo","Ldev/isxander/zoomify/config/demo/ThirdPersonDemo;", s.pop())); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer")); pc = 31; continue;
    case 31:
      __pc = 31;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$4$2","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 32; continue;
    case 32:
      __pc = 32;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", rv, av)); pc = 33; continue;
    case 33:
      __pc = 33;
      s.pop(); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(l0); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l1); pc = 36; continue;
    case 36:
      __pc = 36;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getRootOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$secondary$2$5","INSTANCE","Ldev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$secondary$2$5;")); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function1")); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(l0); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.getField("dev/isxander/zoomify/config/SettingsGuiFactory","secondaryZoomDemo","Ldev/isxander/zoomify/config/demo/ThirdPersonDemo;", s.pop())); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer")); pc = 42; continue;
    case 42:
      __pc = 42;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$4$3","(Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 43; continue;
    case 43:
      __pc = 43;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","registerDemo","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Lkotlin/jvm/functions/Function1;Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", rv, av)); pc = 44; continue;
    case 44:
      __pc = 44;
      s.pop(); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(l1); pc = 46; continue;
    case 46:
      __pc = 46;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getRootOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 48; continue;
    case 48:
      __pc = 48;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getSecondaryHideHUDOnZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 49; continue;
    case 49:
      __pc = 49;
      s.push(l0); pc = 50; continue;
    case 50:
      __pc = 50;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$4$4","(Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/dsl/OptionDsl;)Lkotlin/Unit;", null, dv)); pc = 51; continue;
    case 51:
      __pc = 51;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Ldev/isxander/yacl3/config/v3/ConfigEntry;Lkotlin/jvm/functions/Function1;)Ldev/isxander/yacl3/api/Option;", av)); pc = 52; continue;
    case 52:
      __pc = 52;
      s.pop(); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 54; continue;
    case 54:
      __pc = 54;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$7(Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;)Ldev/isxander/yacl3/api/ConfigCategory;": function (__ctx, __self, __args) {
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
      s.push(null); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(11); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/ExistingDelegateProvider","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/ConfigCategory")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0$6(Ldev/isxander/yacl3/dsl/CategoryDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$registering"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getRootOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(null); pc = 6; continue;
    case 6:
      __pc = 6;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$6$0","(Ldev/isxander/yacl3/dsl/ButtonOptionDsl;)Lkotlin/Unit;", null, dv)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(null); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/OptionRegistrar","registeringButton$default","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Ljava/lang/String;Lkotlin/jvm/functions/Function1;ILjava/lang/Object;)Ldev/isxander/yacl3/dsl/RegisterableActionDelegateProvider;", av)); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(null); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(7); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RegisterableActionDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;", rv, av)); pc = 15; continue;
    case 15:
      __pc = 15;
      l1 = s.pop(); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l0); pc = 17; continue;
    case 17:
      __pc = 17;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getRootOptions","()Ldev/isxander/yacl3/dsl/OptionRegistrar;", rv, [])); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(null); pc = 19; continue;
    case 19:
      __pc = 19;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$6$2","(Ldev/isxander/yacl3/dsl/ButtonOptionDsl;)Lkotlin/Unit;", null, dv)); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(1); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(null); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/OptionRegistrar","registeringButton$default","(Ldev/isxander/yacl3/dsl/OptionRegistrar;Ljava/lang/String;Lkotlin/jvm/functions/Function1;ILjava/lang/Object;)Ldev/isxander/yacl3/dsl/RegisterableActionDelegateProvider;", av)); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(null); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(8); pc = 26; continue;
    case 26:
      __pc = 26;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 27; continue;
    case 27:
      __pc = 27;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RegisterableActionDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;", rv, av)); pc = 28; continue;
    case 28:
      __pc = 28;
      l2 = s.pop(); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l0); pc = 30; continue;
    case 30:
      __pc = 30;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/CategoryDsl","getGroups","()Ldev/isxander/yacl3/dsl/ParentRegistrar;", rv, [])); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(null); pc = 32; continue;
    case 32:
      __pc = 32;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$6$4","(Ldev/isxander/yacl3/dsl/GroupDsl;)Lkotlin/Unit;", null, dv)); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(1); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(null); pc = 35; continue;
    case 35:
      __pc = 35;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ParentRegistrar","registering$default","(Ldev/isxander/yacl3/dsl/ParentRegistrar;Ljava/lang/String;Lkotlin/jvm/functions/Function1;ILjava/lang/Object;)Ldev/isxander/yacl3/dsl/RegisterableActionDelegateProvider;", av)); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(null); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(10); pc = 39; continue;
    case 39:
      __pc = 39;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 40; continue;
    case 40:
      __pc = 40;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RegisterableActionDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;", rv, av)); pc = 41; continue;
    case 41:
      __pc = 41;
      l3 = s.pop(); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 43; continue;
    case 43:
      __pc = 43;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createSettingsGui$lambda$0(Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/dsl/RootDsl;)Lkotlin/Unit;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5;
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
      s.push("$this$YetAnotherConfigLib"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.newInstance("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$1")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(s[s.length - 1]); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory$createSettingsGui$1$1","<init>","(Ljava/lang/Object;)V", rv, av); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function0")); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/yacl3/dsl/RootDsl","save","(Lkotlin/jvm/functions/Function0;)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RootDsl","getCategories","()Ldev/isxander/yacl3/dsl/ParentRegistrar;", rv, [])); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(null); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$0","(Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/dsl/CategoryDsl;)Lkotlin/Unit;", null, dv)); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(1); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(null); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ParentRegistrar","registering$default","(Ldev/isxander/yacl3/dsl/ParentRegistrar;Ljava/lang/String;Lkotlin/jvm/functions/Function1;ILjava/lang/Object;)Ldev/isxander/yacl3/dsl/RegisterableActionDelegateProvider;", av)); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(null); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(3); pc = 21; continue;
    case 21:
      __pc = 21;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RegisterableActionDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;", rv, av)); pc = 23; continue;
    case 23:
      __pc = 23;
      l2 = s.pop(); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l1); pc = 25; continue;
    case 25:
      __pc = 25;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RootDsl","getCategories","()Ldev/isxander/yacl3/dsl/ParentRegistrar;", rv, [])); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(null); pc = 27; continue;
    case 27:
      __pc = 27;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$2","(Ldev/isxander/yacl3/dsl/CategoryDsl;)Lkotlin/Unit;", null, dv)); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(1); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(null); pc = 30; continue;
    case 30:
      __pc = 30;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ParentRegistrar","registering$default","(Ldev/isxander/yacl3/dsl/ParentRegistrar;Ljava/lang/String;Lkotlin/jvm/functions/Function1;ILjava/lang/Object;)Ldev/isxander/yacl3/dsl/RegisterableActionDelegateProvider;", av)); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(null); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(4); pc = 34; continue;
    case 34:
      __pc = 34;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 35; continue;
    case 35:
      __pc = 35;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RegisterableActionDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;", rv, av)); pc = 36; continue;
    case 36:
      __pc = 36;
      l3 = s.pop(); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(l1); pc = 38; continue;
    case 38:
      __pc = 38;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RootDsl","getCategories","()Ldev/isxander/yacl3/dsl/ParentRegistrar;", rv, [])); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(null); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(l0); pc = 41; continue;
    case 41:
      __pc = 41;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$4","(Ldev/isxander/zoomify/config/SettingsGuiFactory;Ldev/isxander/yacl3/dsl/CategoryDsl;)Lkotlin/Unit;", null, dv)); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(1); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(null); pc = 44; continue;
    case 44:
      __pc = 44;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ParentRegistrar","registering$default","(Ldev/isxander/yacl3/dsl/ParentRegistrar;Ljava/lang/String;Lkotlin/jvm/functions/Function1;ILjava/lang/Object;)Ldev/isxander/yacl3/dsl/RegisterableActionDelegateProvider;", av)); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(null); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(6); pc = 48; continue;
    case 48:
      __pc = 48;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 49; continue;
    case 49:
      __pc = 49;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RegisterableActionDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;", rv, av)); pc = 50; continue;
    case 50:
      __pc = 50;
      l4 = s.pop(); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(l1); pc = 52; continue;
    case 52:
      __pc = 52;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RootDsl","getCategories","()Ldev/isxander/yacl3/dsl/ParentRegistrar;", rv, [])); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(null); pc = 54; continue;
    case 54:
      __pc = 54;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui$lambda$0$6","(Ldev/isxander/yacl3/dsl/CategoryDsl;)Lkotlin/Unit;", null, dv)); pc = 55; continue;
    case 55:
      __pc = 55;
      s.push(1); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(null); pc = 57; continue;
    case 57:
      __pc = 57;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/dsl/ParentRegistrar","registering$default","(Ldev/isxander/yacl3/dsl/ParentRegistrar;Ljava/lang/String;Lkotlin/jvm/functions/Function1;ILjava/lang/Object;)Ldev/isxander/yacl3/dsl/RegisterableActionDelegateProvider;", av)); pc = 58; continue;
    case 58:
      __pc = 58;
      s.push(null); pc = 59; continue;
    case 59:
      __pc = 59;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push(11); pc = 61; continue;
    case 61:
      __pc = 61;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 62; continue;
    case 62:
      __pc = 62;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/dsl/RegisterableActionDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ldev/isxander/yacl3/dsl/ExistingDelegateProvider;", rv, av)); pc = 63; continue;
    case 63:
      __pc = 63;
      l5 = s.pop(); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 65; continue;
    case 65:
      __pc = 65;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<clinit>()V": function (__ctx, __self, __args) {
    var l0;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(12); pc = 1; continue;
    case 1:
      __pc = 1;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 2; continue;
    case 2:
      __pc = 2;
      l0 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.newInstance("kotlin/jvm/internal/PropertyReference0Impl")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(null); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push("basic"); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push("<v#1>"); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(0); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/PropertyReference0Impl","<init>","(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/internal/PropertyReference0")); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Reflection","property0","(Lkotlin/jvm/internal/PropertyReference0;)Lkotlin/reflect/KProperty0;", av)); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(1); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.newInstance("kotlin/jvm/internal/PropertyReference0Impl")); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(s[s.length - 1]); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(null); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push("scrolling"); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push("<v#2>"); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(0); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/PropertyReference0Impl","<init>","(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/internal/PropertyReference0")); pc = 25; continue;
    case 25:
      __pc = 25;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Reflection","property0","(Lkotlin/jvm/internal/PropertyReference0;)Lkotlin/reflect/KProperty0;", av)); pc = 26; continue;
    case 26:
      __pc = 26;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l0); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(2); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.newInstance("kotlin/jvm/internal/PropertyReference0Impl")); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(s[s.length - 1]); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(null); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push("spyglass"); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push("<v#3>"); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(0); pc = 35; continue;
    case 35:
      __pc = 35;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/PropertyReference0Impl","<init>","(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/internal/PropertyReference0")); pc = 37; continue;
    case 37:
      __pc = 37;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Reflection","property0","(Lkotlin/jvm/internal/PropertyReference0;)Lkotlin/reflect/KProperty0;", av)); pc = 38; continue;
    case 38:
      __pc = 38;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(l0); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(3); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(__ctx.newInstance("kotlin/jvm/internal/PropertyReference0Impl")); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(s[s.length - 1]); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(null); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push("behaviour"); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push("<v#0>"); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(0); pc = 47; continue;
    case 47:
      __pc = 47;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/PropertyReference0Impl","<init>","(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 48; continue;
    case 48:
      __pc = 48;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/internal/PropertyReference0")); pc = 49; continue;
    case 49:
      __pc = 49;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Reflection","property0","(Lkotlin/jvm/internal/PropertyReference0;)Lkotlin/reflect/KProperty0;", av)); pc = 50; continue;
    case 50:
      __pc = 50;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(l0); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push(4); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(__ctx.newInstance("kotlin/jvm/internal/PropertyReference0Impl")); pc = 54; continue;
    case 54:
      __pc = 54;
      s.push(s[s.length - 1]); pc = 55; continue;
    case 55:
      __pc = 55;
      s.push(null); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push("controls"); pc = 57; continue;
    case 57:
      __pc = 57;
      s.push("<v#4>"); pc = 58; continue;
    case 58:
      __pc = 58;
      s.push(0); pc = 59; continue;
    case 59:
      __pc = 59;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/PropertyReference0Impl","<init>","(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/internal/PropertyReference0")); pc = 61; continue;
    case 61:
      __pc = 61;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Reflection","property0","(Lkotlin/jvm/internal/PropertyReference0;)Lkotlin/reflect/KProperty0;", av)); pc = 62; continue;
    case 62:
      __pc = 62;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 63; continue;
    case 63:
      __pc = 63;
      s.push(l0); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(5); pc = 65; continue;
    case 65:
      __pc = 65;
      s.push(__ctx.newInstance("kotlin/jvm/internal/PropertyReference0Impl")); pc = 66; continue;
    case 66:
      __pc = 66;
      s.push(s[s.length - 1]); pc = 67; continue;
    case 67:
      __pc = 67;
      s.push(null); pc = 68; continue;
    case 68:
      __pc = 68;
      s.push("infoLabel"); pc = 69; continue;
    case 69:
      __pc = 69;
      s.push("<v#6>"); pc = 70; continue;
    case 70:
      __pc = 70;
      s.push(0); pc = 71; continue;
    case 71:
      __pc = 71;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/PropertyReference0Impl","<init>","(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 72; continue;
    case 72:
      __pc = 72;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/internal/PropertyReference0")); pc = 73; continue;
    case 73:
      __pc = 73;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Reflection","property0","(Lkotlin/jvm/internal/PropertyReference0;)Lkotlin/reflect/KProperty0;", av)); pc = 74; continue;
    case 74:
      __pc = 74;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 75; continue;
    case 75:
      __pc = 75;
      s.push(l0); pc = 76; continue;
    case 76:
      __pc = 76;
      s.push(6); pc = 77; continue;
    case 77:
      __pc = 77;
      s.push(__ctx.newInstance("kotlin/jvm/internal/PropertyReference0Impl")); pc = 78; continue;
    case 78:
      __pc = 78;
      s.push(s[s.length - 1]); pc = 79; continue;
    case 79:
      __pc = 79;
      s.push(null); pc = 80; continue;
    case 80:
      __pc = 80;
      s.push("secondary"); pc = 81; continue;
    case 81:
      __pc = 81;
      s.push("<v#5>"); pc = 82; continue;
    case 82:
      __pc = 82;
      s.push(0); pc = 83; continue;
    case 83:
      __pc = 83;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/PropertyReference0Impl","<init>","(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 84; continue;
    case 84:
      __pc = 84;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/internal/PropertyReference0")); pc = 85; continue;
    case 85:
      __pc = 85;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Reflection","property0","(Lkotlin/jvm/internal/PropertyReference0;)Lkotlin/reflect/KProperty0;", av)); pc = 86; continue;
    case 86:
      __pc = 86;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 87; continue;
    case 87:
      __pc = 87;
      s.push(l0); pc = 88; continue;
    case 88:
      __pc = 88;
      s.push(7); pc = 89; continue;
    case 89:
      __pc = 89;
      s.push(__ctx.newInstance("kotlin/jvm/internal/PropertyReference0Impl")); pc = 90; continue;
    case 90:
      __pc = 90;
      s.push(s[s.length - 1]); pc = 91; continue;
    case 91:
      __pc = 91;
      s.push(null); pc = 92; continue;
    case 92:
      __pc = 92;
      s.push("unbindConflicting"); pc = 93; continue;
    case 93:
      __pc = 93;
      s.push("<v#8>"); pc = 94; continue;
    case 94:
      __pc = 94;
      s.push(0); pc = 95; continue;
    case 95:
      __pc = 95;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/PropertyReference0Impl","<init>","(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 96; continue;
    case 96:
      __pc = 96;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/internal/PropertyReference0")); pc = 97; continue;
    case 97:
      __pc = 97;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Reflection","property0","(Lkotlin/jvm/internal/PropertyReference0;)Lkotlin/reflect/KProperty0;", av)); pc = 98; continue;
    case 98:
      __pc = 98;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 99; continue;
    case 99:
      __pc = 99;
      s.push(l0); pc = 100; continue;
    case 100:
      __pc = 100;
      s.push(8); pc = 101; continue;
    case 101:
      __pc = 101;
      s.push(__ctx.newInstance("kotlin/jvm/internal/PropertyReference0Impl")); pc = 102; continue;
    case 102:
      __pc = 102;
      s.push(s[s.length - 1]); pc = 103; continue;
    case 103:
      __pc = 103;
      s.push(null); pc = 104; continue;
    case 104:
      __pc = 104;
      s.push("checkMigrations"); pc = 105; continue;
    case 105:
      __pc = 105;
      s.push("<v#9>"); pc = 106; continue;
    case 106:
      __pc = 106;
      s.push(0); pc = 107; continue;
    case 107:
      __pc = 107;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/PropertyReference0Impl","<init>","(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 108; continue;
    case 108:
      __pc = 108;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/internal/PropertyReference0")); pc = 109; continue;
    case 109:
      __pc = 109;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Reflection","property0","(Lkotlin/jvm/internal/PropertyReference0;)Lkotlin/reflect/KProperty0;", av)); pc = 110; continue;
    case 110:
      __pc = 110;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 111; continue;
    case 111:
      __pc = 111;
      s.push(l0); pc = 112; continue;
    case 112:
      __pc = 112;
      s.push(9); pc = 113; continue;
    case 113:
      __pc = 113;
      s.push(__ctx.newInstance("kotlin/jvm/internal/PropertyReference0Impl")); pc = 114; continue;
    case 114:
      __pc = 114;
      s.push(s[s.length - 1]); pc = 115; continue;
    case 115:
      __pc = 115;
      s.push(null); pc = 116; continue;
    case 116:
      __pc = 116;
      s.push("applyWarning"); pc = 117; continue;
    case 117:
      __pc = 117;
      s.push("<v#11>"); pc = 118; continue;
    case 118:
      __pc = 118;
      s.push(0); pc = 119; continue;
    case 119:
      __pc = 119;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/PropertyReference0Impl","<init>","(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 120; continue;
    case 120:
      __pc = 120;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/internal/PropertyReference0")); pc = 121; continue;
    case 121:
      __pc = 121;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Reflection","property0","(Lkotlin/jvm/internal/PropertyReference0;)Lkotlin/reflect/KProperty0;", av)); pc = 122; continue;
    case 122:
      __pc = 122;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 123; continue;
    case 123:
      __pc = 123;
      s.push(l0); pc = 124; continue;
    case 124:
      __pc = 124;
      s.push(10); pc = 125; continue;
    case 125:
      __pc = 125;
      s.push(__ctx.newInstance("kotlin/jvm/internal/PropertyReference0Impl")); pc = 126; continue;
    case 126:
      __pc = 126;
      s.push(s[s.length - 1]); pc = 127; continue;
    case 127:
      __pc = 127;
      s.push(null); pc = 128; continue;
    case 128:
      __pc = 128;
      s.push("presets"); pc = 129; continue;
    case 129:
      __pc = 129;
      s.push("<v#10>"); pc = 130; continue;
    case 130:
      __pc = 130;
      s.push(0); pc = 131; continue;
    case 131:
      __pc = 131;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/PropertyReference0Impl","<init>","(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 132; continue;
    case 132:
      __pc = 132;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/internal/PropertyReference0")); pc = 133; continue;
    case 133:
      __pc = 133;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Reflection","property0","(Lkotlin/jvm/internal/PropertyReference0;)Lkotlin/reflect/KProperty0;", av)); pc = 134; continue;
    case 134:
      __pc = 134;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 135; continue;
    case 135:
      __pc = 135;
      s.push(l0); pc = 136; continue;
    case 136:
      __pc = 136;
      s.push(11); pc = 137; continue;
    case 137:
      __pc = 137;
      s.push(__ctx.newInstance("kotlin/jvm/internal/PropertyReference0Impl")); pc = 138; continue;
    case 138:
      __pc = 138;
      s.push(s[s.length - 1]); pc = 139; continue;
    case 139:
      __pc = 139;
      s.push(null); pc = 140; continue;
    case 140:
      __pc = 140;
      s.push("misc"); pc = 141; continue;
    case 141:
      __pc = 141;
      s.push("<v#7>"); pc = 142; continue;
    case 142:
      __pc = 142;
      s.push(0); pc = 143; continue;
    case 143:
      __pc = 143;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/PropertyReference0Impl","<init>","(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 144; continue;
    case 144:
      __pc = 144;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/internal/PropertyReference0")); pc = 145; continue;
    case 145:
      __pc = 145;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Reflection","property0","(Lkotlin/jvm/internal/PropertyReference0;)Lkotlin/reflect/KProperty0;", av)); pc = 146; continue;
    case 146:
      __pc = 146;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 147; continue;
    case 147:
      __pc = 147;
      s.push(l0); pc = 148; continue;
    case 148:
      __pc = 148;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/config/SettingsGuiFactory","$$delegatedProperties","[Lkotlin/reflect/KProperty;",r); pc = 149; continue;
    case 149:
      __pc = 149;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/SettingsGuiFactory"].__fields = [{"name":"$$delegatedProperties","descriptor":"[Lkotlin/reflect/KProperty;"},{"name":"settings","descriptor":"Ldev/isxander/zoomify/config/ZoomifySettings;"},{"name":"initialOnlyDemo","descriptor":"Ldev/isxander/zoomify/config/demo/FirstPersonDemo;"},{"name":"scrollOnlyDemo","descriptor":"Ldev/isxander/zoomify/config/demo/FirstPersonDemo;"},{"name":"secondaryZoomDemo","descriptor":"Ldev/isxander/zoomify/config/demo/ThirdPersonDemo;"}];
  defineClass("dev/isxander/zoomify/config/SettingsGuiFactoryKt", {
    "createSettingsGui(Lnet/minecraft/class_437;)Lnet/minecraft/class_437;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("dev/isxander/zoomify/config/SettingsGuiFactory")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactory","createSettingsGui","(Lnet/minecraft/class_437;)Lnet/minecraft/class_437;", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "formatSeconds()Ldev/isxander/yacl3/api/controller/ValueFormatter;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactoryKt","formatSeconds$lambda$0","(Ljava/lang/Number;)Lnet/minecraft/class_2561;", null, dv)); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "formatPercent()Ldev/isxander/yacl3/api/controller/ValueFormatter;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactoryKt","formatPercent$lambda$0","(Ljava/lang/Number;)Lnet/minecraft/class_2561;", null, dv)); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "defaultDescription(Ldev/isxander/yacl3/dsl/OptionDsl;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/Option$Builder")); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactoryKt","defaultDescription$lambda$0","(Ldev/isxander/yacl3/dsl/OptionDsl;Ldev/isxander/yacl3/api/OptionDescription$Builder;)Lkotlin/Unit;", null, dv)); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","descriptionBuilder","(Ldev/isxander/yacl3/api/Option$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "defaultDescription(Ldev/isxander/yacl3/dsl/ButtonOptionDsl;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/api/ButtonOption$Builder")); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SettingsGuiFactoryKt","defaultDescription$lambda$1","(Ldev/isxander/yacl3/dsl/ButtonOptionDsl;Ldev/isxander/yacl3/api/OptionDescription$Builder;)Lkotlin/Unit;", null, dv)); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ExtensionsKt","descriptionBuilder","(Ldev/isxander/yacl3/api/ButtonOption$Builder;Lkotlin/jvm/functions/Function1;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "formatSeconds$lambda$0(Ljava/lang/Number;)Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push("zoomify.gui.formatter.seconds"); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 3; continue;
    case 3:
      __pc = 3;
      l1 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push("%.1f"); pc = 7; continue;
    case 7:
      __pc = 7;
      l2 = s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(1); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 10; continue;
    case 10:
      __pc = 10;
      l3 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l3); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l3); pc = 16; continue;
    case 16:
      __pc = 16;
      l3 = s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l2); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l3); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l3); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(s.pop().length); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/util/Arrays","copyOf","([Ljava/lang/Object;I)[Ljava/lang/Object;", av)); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/String","format","(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(s[s.length - 1]); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push("format(...)"); pc = 25; continue;
    case 25:
      __pc = 25;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 26; continue;
    case 26:
      __pc = 26;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l1); pc = 28; continue;
    case 28:
      __pc = 28;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;[Ljava/lang/Object;)Lnet/minecraft/class_5250;", av)); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 30; continue;
    case 30:
      __pc = 30;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "formatPercent$lambda$0(Ljava/lang/Number;)Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push("%dx"); pc = 1; continue;
    case 1:
      __pc = 1;
      l1 = s.pop(); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 4; continue;
    case 4:
      __pc = 4;
      l2 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l2); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l2); pc = 10; continue;
    case 10:
      __pc = 10;
      l2 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l1); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l2); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l2); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(s.pop().length); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/util/Arrays","copyOf","([Ljava/lang/Object;I)[Ljava/lang/Object;", av)); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/String","format","(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(s[s.length - 1]); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push("format(...)"); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","literal","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 22; continue;
    case 22:
      __pc = 22;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "defaultDescription$lambda$0(Ldev/isxander/yacl3/dsl/OptionDsl;Ldev/isxander/yacl3/api/OptionDescription$Builder;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$descriptionBuilder"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(null); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(null); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/OptionDsl","addDefaultText$default","(Ldev/isxander/yacl3/dsl/OptionDsl;Ldev/isxander/yacl3/api/OptionDescription$Builder;Ljava/lang/Integer;ILjava/lang/Object;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "defaultDescription$lambda$1(Ldev/isxander/yacl3/dsl/ButtonOptionDsl;Ldev/isxander/yacl3/api/OptionDescription$Builder;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      s.push("$this$descriptionBuilder"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(null); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(null); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/dsl/ButtonOptionDsl","addDefaultText$default","(Ldev/isxander/yacl3/dsl/ButtonOptionDsl;Ldev/isxander/yacl3/api/OptionDescription$Builder;Ljava/lang/Integer;ILjava/lang/Object;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$formatSeconds()Ldev/isxander/yacl3/api/controller/ValueFormatter;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","formatSeconds","()Ldev/isxander/yacl3/api/controller/ValueFormatter;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$defaultDescription(Ldev/isxander/yacl3/dsl/OptionDsl;)V": function (__ctx, __self, __args) {
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","defaultDescription","(Ldev/isxander/yacl3/dsl/OptionDsl;)V", av); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$formatPercent()Ldev/isxander/yacl3/api/controller/ValueFormatter;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","formatPercent","()Ldev/isxander/yacl3/api/controller/ValueFormatter;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$defaultDescription(Ldev/isxander/yacl3/dsl/ButtonOptionDsl;)V": function (__ctx, __self, __args) {
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/config/SettingsGuiFactoryKt","defaultDescription","(Ldev/isxander/yacl3/dsl/ButtonOptionDsl;)V", av); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/SettingsGuiFactoryKt"].__fields = [];
  defineClass("dev/isxander/zoomify/config/SoundBehaviour$Companion", {
    "getCODEC()Lnet/minecraft/class_3542$class_7292;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/SoundBehaviour","access$getCODEC$cp","()Lnet/minecraft/class_3542$class_7292;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/SoundBehaviour$Companion"].__fields = [];
  defineClass("dev/isxander/zoomify/config/SoundBehaviour", {
    "access$getCODEC$cp()Lnet/minecraft/class_3542$class_7292;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SoundBehaviour","CODEC","Lnet/minecraft/class_3542$class_7292;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/SoundBehaviour"].__fields = [{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/SoundBehaviour$Companion;"},{"name":"localisedName","descriptor":"Lnet/minecraft/class_2561;"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_3542$class_7292;"},{"name":"NEVER","descriptor":"Ldev/isxander/zoomify/config/SoundBehaviour;"},{"name":"ALWAYS","descriptor":"Ldev/isxander/zoomify/config/SoundBehaviour;"},{"name":"ONLY_SPYGLASS","descriptor":"Ldev/isxander/zoomify/config/SoundBehaviour;"},{"name":"WITH_OVERLAY","descriptor":"Ldev/isxander/zoomify/config/SoundBehaviour;"},{"name":"$VALUES","descriptor":"[Ldev/isxander/zoomify/config/SoundBehaviour;"},{"name":"$ENTRIES","descriptor":"Lkotlin/enums/EnumEntries;"}];
  defineClass("dev/isxander/zoomify/config/SpyglassBehaviour$Companion", {
    "getCODEC()Lnet/minecraft/class_3542$class_7292;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/SpyglassBehaviour","access$getCODEC$cp","()Lnet/minecraft/class_3542$class_7292;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/SpyglassBehaviour$Companion"].__fields = [];
  defineClass("dev/isxander/zoomify/config/SpyglassBehaviour", {
    "access$getCODEC$cp()Lnet/minecraft/class_3542$class_7292;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SpyglassBehaviour","CODEC","Lnet/minecraft/class_3542$class_7292;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/SpyglassBehaviour"].__fields = [{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/SpyglassBehaviour$Companion;"},{"name":"localisedName","descriptor":"Lnet/minecraft/class_2561;"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_3542$class_7292;"},{"name":"COMBINE","descriptor":"Ldev/isxander/zoomify/config/SpyglassBehaviour;"},{"name":"OVERRIDE","descriptor":"Ldev/isxander/zoomify/config/SpyglassBehaviour;"},{"name":"ONLY_ZOOM_WHILE_HOLDING","descriptor":"Ldev/isxander/zoomify/config/SpyglassBehaviour;"},{"name":"ONLY_ZOOM_WHILE_CARRYING","descriptor":"Ldev/isxander/zoomify/config/SpyglassBehaviour;"},{"name":"$VALUES","descriptor":"[Ldev/isxander/zoomify/config/SpyglassBehaviour;"},{"name":"$ENTRIES","descriptor":"Lkotlin/enums/EnumEntries;"}];
  defineClass("dev/isxander/zoomify/config/ZoomKeyBehaviour$Companion", {
    "getCODEC()Lnet/minecraft/class_3542$class_7292;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/ZoomKeyBehaviour","access$getCODEC$cp","()Lnet/minecraft/class_3542$class_7292;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/ZoomKeyBehaviour$Companion"].__fields = [];
  defineClass("dev/isxander/zoomify/config/ZoomKeyBehaviour", {
    "access$getCODEC$cp()Lnet/minecraft/class_3542$class_7292;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomKeyBehaviour","CODEC","Lnet/minecraft/class_3542$class_7292;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/ZoomKeyBehaviour"].__fields = [{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/ZoomKeyBehaviour$Companion;"},{"name":"localisedName","descriptor":"Lnet/minecraft/class_2561;"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_3542$class_7292;"},{"name":"HOLD","descriptor":"Ldev/isxander/zoomify/config/ZoomKeyBehaviour;"},{"name":"TOGGLE","descriptor":"Ldev/isxander/zoomify/config/ZoomKeyBehaviour;"},{"name":"$VALUES","descriptor":"[Ldev/isxander/zoomify/config/ZoomKeyBehaviour;"},{"name":"$ENTRIES","descriptor":"Lkotlin/enums/EnumEntries;"}];
  defineClass("dev/isxander/zoomify/config/ZoomifySettings", {
    "<init>()V": function (__ctx, __self, __args) {
    var l0, l1;
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
      s.push(__ctx.invokeStatic("net/fabricmc/loader/api/FabricLoader","getInstance","()Lnet/fabricmc/loader/api/FabricLoader;", [])); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/loader/api/FabricLoader","getConfigDir","()Ljava/nio/file/Path;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push("zoomify.json"); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.nio.file.Path.resolve") + ' needs the client internals');
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/yacl3/config/v3/JsonFileCodecConfig","<init>","(Ljava/nio/file/Path;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(4); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","INT","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(s[s.length - 1]); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push("INT"); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(0); pc = 20; continue;
    case 20:
      __pc = 20;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 23; continue;
    case 23:
      __pc = 23;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","initialZoom$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l0); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l0); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(1); pc = 28; continue;
    case 28:
      __pc = 28;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","DOUBLE","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(s[s.length - 1]); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push("DOUBLE"); pc = 32; continue;
    case 32:
      __pc = 32;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 34; continue;
    case 34:
      __pc = 34;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l0); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(1); pc = 38; continue;
    case 38:
      __pc = 38;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 39; continue;
    case 39:
      __pc = 39;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 41; continue;
    case 41:
      __pc = 41;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","zoomInTime$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(l0); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l0); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(0.5); pc = 46; continue;
    case 46:
      __pc = 46;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","DOUBLE","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 48; continue;
    case 48:
      __pc = 48;
      s.push(s[s.length - 1]); pc = 49; continue;
    case 49:
      __pc = 49;
      s.push("DOUBLE"); pc = 50; continue;
    case 50:
      __pc = 50;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 52; continue;
    case 52:
      __pc = 52;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(l0); pc = 54; continue;
    case 54:
      __pc = 54;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 55; continue;
    case 55:
      __pc = 55;
      s.push(2); pc = 56; continue;
    case 56:
      __pc = 56;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 57; continue;
    case 57:
      __pc = 57;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 58; continue;
    case 58:
      __pc = 58;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 59; continue;
    case 59:
      __pc = 59;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","zoomOutTime$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push(l0); pc = 61; continue;
    case 61:
      __pc = 61;
      s.push(l0); pc = 62; continue;
    case 62:
      __pc = 62;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 63; continue;
    case 63:
      __pc = 63;
      s.push(__ctx.getStatic("dev/isxander/zoomify/utils/TransitionType","EASE_OUT_EXP","Ldev/isxander/zoomify/utils/TransitionType;")); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(__ctx.getStatic("dev/isxander/zoomify/utils/TransitionType","Companion","Ldev/isxander/zoomify/utils/TransitionType$Companion;")); pc = 65; continue;
    case 65:
      __pc = 65;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/utils/TransitionType$Companion","getCODEC","()Lnet/minecraft/class_3542$class_7292;", rv, [])); pc = 66; continue;
    case 66:
      __pc = 66;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 67; continue;
    case 67:
      __pc = 67;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 68; continue;
    case 68:
      __pc = 68;
      s.push(l0); pc = 69; continue;
    case 69:
      __pc = 69;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 70; continue;
    case 70:
      __pc = 70;
      s.push(3); pc = 71; continue;
    case 71:
      __pc = 71;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 72; continue;
    case 72:
      __pc = 72;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 73; continue;
    case 73:
      __pc = 73;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 74; continue;
    case 74:
      __pc = 74;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","zoomInTransition$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 75; continue;
    case 75:
      __pc = 75;
      s.push(l0); pc = 76; continue;
    case 76:
      __pc = 76;
      s.push(l0); pc = 77; continue;
    case 77:
      __pc = 77;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 78; continue;
    case 78:
      __pc = 78;
      s.push(__ctx.getStatic("dev/isxander/zoomify/utils/TransitionType","EASE_OUT_EXP","Ldev/isxander/zoomify/utils/TransitionType;")); pc = 79; continue;
    case 79:
      __pc = 79;
      s.push(__ctx.getStatic("dev/isxander/zoomify/utils/TransitionType","Companion","Ldev/isxander/zoomify/utils/TransitionType$Companion;")); pc = 80; continue;
    case 80:
      __pc = 80;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/utils/TransitionType$Companion","getCODEC","()Lnet/minecraft/class_3542$class_7292;", rv, [])); pc = 81; continue;
    case 81:
      __pc = 81;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 82; continue;
    case 82:
      __pc = 82;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 83; continue;
    case 83:
      __pc = 83;
      s.push(l0); pc = 84; continue;
    case 84:
      __pc = 84;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 85; continue;
    case 85:
      __pc = 85;
      s.push(4); pc = 86; continue;
    case 86:
      __pc = 86;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 87; continue;
    case 87:
      __pc = 87;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 88; continue;
    case 88:
      __pc = 88;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 89; continue;
    case 89:
      __pc = 89;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","zoomOutTransition$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 90; continue;
    case 90:
      __pc = 90;
      s.push(l0); pc = 91; continue;
    case 91:
      __pc = 91;
      s.push(l0); pc = 92; continue;
    case 92:
      __pc = 92;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 93; continue;
    case 93:
      __pc = 93;
      s.push(1); pc = 94; continue;
    case 94:
      __pc = 94;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Boolean","valueOf","(Z)Ljava/lang/Boolean;", av)); pc = 95; continue;
    case 95:
      __pc = 95;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","BOOL","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 96; continue;
    case 96:
      __pc = 96;
      s.push(s[s.length - 1]); pc = 97; continue;
    case 97:
      __pc = 97;
      s.push("BOOL"); pc = 98; continue;
    case 98:
      __pc = 98;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 99; continue;
    case 99:
      __pc = 99;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 100; continue;
    case 100:
      __pc = 100;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 101; continue;
    case 101:
      __pc = 101;
      s.push(l0); pc = 102; continue;
    case 102:
      __pc = 102;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 103; continue;
    case 103:
      __pc = 103;
      s.push(5); pc = 104; continue;
    case 104:
      __pc = 104;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 105; continue;
    case 105:
      __pc = 105;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 106; continue;
    case 106:
      __pc = 106;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 107; continue;
    case 107:
      __pc = 107;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","affectHandFov$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 108; continue;
    case 108:
      __pc = 108;
      s.push(l0); pc = 109; continue;
    case 109:
      __pc = 109;
      s.push(l0); pc = 110; continue;
    case 110:
      __pc = 110;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 111; continue;
    case 111:
      __pc = 111;
      s.push(0); pc = 112; continue;
    case 112:
      __pc = 112;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Boolean","valueOf","(Z)Ljava/lang/Boolean;", av)); pc = 113; continue;
    case 113:
      __pc = 113;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","BOOL","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 114; continue;
    case 114:
      __pc = 114;
      s.push(s[s.length - 1]); pc = 115; continue;
    case 115:
      __pc = 115;
      s.push("BOOL"); pc = 116; continue;
    case 116:
      __pc = 116;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 117; continue;
    case 117:
      __pc = 117;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 118; continue;
    case 118:
      __pc = 118;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 119; continue;
    case 119:
      __pc = 119;
      s.push(l0); pc = 120; continue;
    case 120:
      __pc = 120;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 121; continue;
    case 121:
      __pc = 121;
      s.push(6); pc = 122; continue;
    case 122:
      __pc = 122;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 123; continue;
    case 123:
      __pc = 123;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 124; continue;
    case 124:
      __pc = 124;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 125; continue;
    case 125:
      __pc = 125;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","retainZoomSteps$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 126; continue;
    case 126:
      __pc = 126;
      s.push(l0); pc = 127; continue;
    case 127:
      __pc = 127;
      s.push(l0); pc = 128; continue;
    case 128:
      __pc = 128;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 129; continue;
    case 129:
      __pc = 129;
      s.push(1); pc = 130; continue;
    case 130:
      __pc = 130;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Boolean","valueOf","(Z)Ljava/lang/Boolean;", av)); pc = 131; continue;
    case 131:
      __pc = 131;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","BOOL","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 132; continue;
    case 132:
      __pc = 132;
      s.push(s[s.length - 1]); pc = 133; continue;
    case 133:
      __pc = 133;
      s.push("BOOL"); pc = 134; continue;
    case 134:
      __pc = 134;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 135; continue;
    case 135:
      __pc = 135;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 136; continue;
    case 136:
      __pc = 136;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 137; continue;
    case 137:
      __pc = 137;
      s.push(l0); pc = 138; continue;
    case 138:
      __pc = 138;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 139; continue;
    case 139:
      __pc = 139;
      s.push(7); pc = 140; continue;
    case 140:
      __pc = 140;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 141; continue;
    case 141:
      __pc = 141;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 142; continue;
    case 142:
      __pc = 142;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 143; continue;
    case 143:
      __pc = 143;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","scrollZoom$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 144; continue;
    case 144:
      __pc = 144;
      s.push(l0); pc = 145; continue;
    case 145:
      __pc = 145;
      s.push(l0); pc = 146; continue;
    case 146:
      __pc = 146;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 147; continue;
    case 147:
      __pc = 147;
      s.push(10); pc = 148; continue;
    case 148:
      __pc = 148;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 149; continue;
    case 149:
      __pc = 149;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","INT","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 150; continue;
    case 150:
      __pc = 150;
      s.push(s[s.length - 1]); pc = 151; continue;
    case 151:
      __pc = 151;
      s.push("INT"); pc = 152; continue;
    case 152:
      __pc = 152;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 153; continue;
    case 153:
      __pc = 153;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 154; continue;
    case 154:
      __pc = 154;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 155; continue;
    case 155:
      __pc = 155;
      s.push(l0); pc = 156; continue;
    case 156:
      __pc = 156;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 157; continue;
    case 157:
      __pc = 157;
      s.push(8); pc = 158; continue;
    case 158:
      __pc = 158;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 159; continue;
    case 159:
      __pc = 159;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 160; continue;
    case 160:
      __pc = 160;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 161; continue;
    case 161:
      __pc = 161;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","scrollStepCount$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 162; continue;
    case 162:
      __pc = 162;
      s.push(l0); pc = 163; continue;
    case 163:
      __pc = 163;
      s.push(l0); pc = 164; continue;
    case 164:
      __pc = 164;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 165; continue;
    case 165:
      __pc = 165;
      s.push(150); pc = 166; continue;
    case 166:
      __pc = 166;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 167; continue;
    case 167:
      __pc = 167;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","INT","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 168; continue;
    case 168:
      __pc = 168;
      s.push(s[s.length - 1]); pc = 169; continue;
    case 169:
      __pc = 169;
      s.push("INT"); pc = 170; continue;
    case 170:
      __pc = 170;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 171; continue;
    case 171:
      __pc = 171;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 172; continue;
    case 172:
      __pc = 172;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 173; continue;
    case 173:
      __pc = 173;
      s.push(l0); pc = 174; continue;
    case 174:
      __pc = 174;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 175; continue;
    case 175:
      __pc = 175;
      s.push(9); pc = 176; continue;
    case 176:
      __pc = 176;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 177; continue;
    case 177:
      __pc = 177;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 178; continue;
    case 178:
      __pc = 178;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 179; continue;
    case 179:
      __pc = 179;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","zoomPerStep$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 180; continue;
    case 180:
      __pc = 180;
      s.push(l0); pc = 181; continue;
    case 181:
      __pc = 181;
      s.push(l0); pc = 182; continue;
    case 182:
      __pc = 182;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 183; continue;
    case 183:
      __pc = 183;
      s.push(70); pc = 184; continue;
    case 184:
      __pc = 184;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 185; continue;
    case 185:
      __pc = 185;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","INT","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 186; continue;
    case 186:
      __pc = 186;
      s.push(s[s.length - 1]); pc = 187; continue;
    case 187:
      __pc = 187;
      s.push("INT"); pc = 188; continue;
    case 188:
      __pc = 188;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 189; continue;
    case 189:
      __pc = 189;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 190; continue;
    case 190:
      __pc = 190;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 191; continue;
    case 191:
      __pc = 191;
      s.push(l0); pc = 192; continue;
    case 192:
      __pc = 192;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 193; continue;
    case 193:
      __pc = 193;
      s.push(10); pc = 194; continue;
    case 194:
      __pc = 194;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 195; continue;
    case 195:
      __pc = 195;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 196; continue;
    case 196:
      __pc = 196;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 197; continue;
    case 197:
      __pc = 197;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","scrollZoomSmoothness$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 198; continue;
    case 198:
      __pc = 198;
      s.push(l0); pc = 199; continue;
    case 199:
      __pc = 199;
      s.push(l0); pc = 200; continue;
    case 200:
      __pc = 200;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 201; continue;
    case 201:
      __pc = 201;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomKeyBehaviour","HOLD","Ldev/isxander/zoomify/config/ZoomKeyBehaviour;")); pc = 202; continue;
    case 202:
      __pc = 202;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomKeyBehaviour","Companion","Ldev/isxander/zoomify/config/ZoomKeyBehaviour$Companion;")); pc = 203; continue;
    case 203:
      __pc = 203;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomKeyBehaviour$Companion","getCODEC","()Lnet/minecraft/class_3542$class_7292;", rv, [])); pc = 204; continue;
    case 204:
      __pc = 204;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 205; continue;
    case 205:
      __pc = 205;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 206; continue;
    case 206:
      __pc = 206;
      s.push(l0); pc = 207; continue;
    case 207:
      __pc = 207;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 208; continue;
    case 208:
      __pc = 208;
      s.push(11); pc = 209; continue;
    case 209:
      __pc = 209;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 210; continue;
    case 210:
      __pc = 210;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 211; continue;
    case 211:
      __pc = 211;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 212; continue;
    case 212:
      __pc = 212;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","zoomKeyBehaviour$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 213; continue;
    case 213:
      __pc = 213;
      s.push(l0); pc = 214; continue;
    case 214:
      __pc = 214;
      s.push(l0); pc = 215; continue;
    case 215:
      __pc = 215;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 216; continue;
    case 216:
      __pc = 216;
      s.push(l0); pc = 217; continue;
    case 217:
      __pc = 217;
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","keybindScrolling","Z", s.pop())); pc = 218; continue;
    case 218:
      __pc = 218;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Boolean","valueOf","(Z)Ljava/lang/Boolean;", av)); pc = 219; continue;
    case 219:
      __pc = 219;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","BOOL","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 220; continue;
    case 220:
      __pc = 220;
      s.push(s[s.length - 1]); pc = 221; continue;
    case 221:
      __pc = 221;
      s.push("BOOL"); pc = 222; continue;
    case 222:
      __pc = 222;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 223; continue;
    case 223:
      __pc = 223;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 224; continue;
    case 224:
      __pc = 224;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 225; continue;
    case 225:
      __pc = 225;
      s.push(l0); pc = 226; continue;
    case 226:
      __pc = 226;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 227; continue;
    case 227:
      __pc = 227;
      s.push(12); pc = 228; continue;
    case 228:
      __pc = 228;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 229; continue;
    case 229:
      __pc = 229;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 230; continue;
    case 230:
      __pc = 230;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 231; continue;
    case 231:
      __pc = 231;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","_keybindScrolling$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 232; continue;
    case 232:
      __pc = 232;
      s.push(l0); pc = 233; continue;
    case 233:
      __pc = 233;
      s.push(l0); pc = 234; continue;
    case 234:
      __pc = 234;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 235; continue;
    case 235:
      __pc = 235;
      s.push(100); pc = 236; continue;
    case 236:
      __pc = 236;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 237; continue;
    case 237:
      __pc = 237;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","INT","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 238; continue;
    case 238:
      __pc = 238;
      s.push(s[s.length - 1]); pc = 239; continue;
    case 239:
      __pc = 239;
      s.push("INT"); pc = 240; continue;
    case 240:
      __pc = 240;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 241; continue;
    case 241:
      __pc = 241;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 242; continue;
    case 242:
      __pc = 242;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 243; continue;
    case 243:
      __pc = 243;
      s.push(l0); pc = 244; continue;
    case 244:
      __pc = 244;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 245; continue;
    case 245:
      __pc = 245;
      s.push(13); pc = 246; continue;
    case 246:
      __pc = 246;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 247; continue;
    case 247:
      __pc = 247;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 248; continue;
    case 248:
      __pc = 248;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 249; continue;
    case 249:
      __pc = 249;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","relativeSensitivity$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 250; continue;
    case 250:
      __pc = 250;
      s.push(l0); pc = 251; continue;
    case 251:
      __pc = 251;
      s.push(l0); pc = 252; continue;
    case 252:
      __pc = 252;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 253; continue;
    case 253:
      __pc = 253;
      s.push(1); pc = 254; continue;
    case 254:
      __pc = 254;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Boolean","valueOf","(Z)Ljava/lang/Boolean;", av)); pc = 255; continue;
    case 255:
      __pc = 255;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","BOOL","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 256; continue;
    case 256:
      __pc = 256;
      s.push(s[s.length - 1]); pc = 257; continue;
    case 257:
      __pc = 257;
      s.push("BOOL"); pc = 258; continue;
    case 258:
      __pc = 258;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 259; continue;
    case 259:
      __pc = 259;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 260; continue;
    case 260:
      __pc = 260;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 261; continue;
    case 261:
      __pc = 261;
      s.push(l0); pc = 262; continue;
    case 262:
      __pc = 262;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 263; continue;
    case 263:
      __pc = 263;
      s.push(14); pc = 264; continue;
    case 264:
      __pc = 264;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 265; continue;
    case 265:
      __pc = 265;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 266; continue;
    case 266:
      __pc = 266;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 267; continue;
    case 267:
      __pc = 267;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","relativeViewBobbing$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 268; continue;
    case 268:
      __pc = 268;
      s.push(l0); pc = 269; continue;
    case 269:
      __pc = 269;
      s.push(l0); pc = 270; continue;
    case 270:
      __pc = 270;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 271; continue;
    case 271:
      __pc = 271;
      s.push(0); pc = 272; continue;
    case 272:
      __pc = 272;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 273; continue;
    case 273:
      __pc = 273;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","INT","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 274; continue;
    case 274:
      __pc = 274;
      s.push(s[s.length - 1]); pc = 275; continue;
    case 275:
      __pc = 275;
      s.push("INT"); pc = 276; continue;
    case 276:
      __pc = 276;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 277; continue;
    case 277:
      __pc = 277;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 278; continue;
    case 278:
      __pc = 278;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 279; continue;
    case 279:
      __pc = 279;
      s.push(l0); pc = 280; continue;
    case 280:
      __pc = 280;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 281; continue;
    case 281:
      __pc = 281;
      s.push(15); pc = 282; continue;
    case 282:
      __pc = 282;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 283; continue;
    case 283:
      __pc = 283;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 284; continue;
    case 284:
      __pc = 284;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 285; continue;
    case 285:
      __pc = 285;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","cinematicCamera$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 286; continue;
    case 286:
      __pc = 286;
      s.push(l0); pc = 287; continue;
    case 287:
      __pc = 287;
      s.push(l0); pc = 288; continue;
    case 288:
      __pc = 288;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 289; continue;
    case 289:
      __pc = 289;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SpyglassBehaviour","COMBINE","Ldev/isxander/zoomify/config/SpyglassBehaviour;")); pc = 290; continue;
    case 290:
      __pc = 290;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SpyglassBehaviour","Companion","Ldev/isxander/zoomify/config/SpyglassBehaviour$Companion;")); pc = 291; continue;
    case 291:
      __pc = 291;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SpyglassBehaviour$Companion","getCODEC","()Lnet/minecraft/class_3542$class_7292;", rv, [])); pc = 292; continue;
    case 292:
      __pc = 292;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 293; continue;
    case 293:
      __pc = 293;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 294; continue;
    case 294:
      __pc = 294;
      s.push(l0); pc = 295; continue;
    case 295:
      __pc = 295;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 296; continue;
    case 296:
      __pc = 296;
      s.push(16); pc = 297; continue;
    case 297:
      __pc = 297;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 298; continue;
    case 298:
      __pc = 298;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 299; continue;
    case 299:
      __pc = 299;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 300; continue;
    case 300:
      __pc = 300;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","spyglassBehaviour$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 301; continue;
    case 301:
      __pc = 301;
      s.push(l0); pc = 302; continue;
    case 302:
      __pc = 302;
      s.push(l0); pc = 303; continue;
    case 303:
      __pc = 303;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 304; continue;
    case 304:
      __pc = 304;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/OverlayVisibility","HOLDING","Ldev/isxander/zoomify/config/OverlayVisibility;")); pc = 305; continue;
    case 305:
      __pc = 305;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/OverlayVisibility","Companion","Ldev/isxander/zoomify/config/OverlayVisibility$Companion;")); pc = 306; continue;
    case 306:
      __pc = 306;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/OverlayVisibility$Companion","getCODEC","()Lnet/minecraft/class_3542$class_7292;", rv, [])); pc = 307; continue;
    case 307:
      __pc = 307;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 308; continue;
    case 308:
      __pc = 308;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 309; continue;
    case 309:
      __pc = 309;
      s.push(l0); pc = 310; continue;
    case 310:
      __pc = 310;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 311; continue;
    case 311:
      __pc = 311;
      s.push(17); pc = 312; continue;
    case 312:
      __pc = 312;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 313; continue;
    case 313:
      __pc = 313;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 314; continue;
    case 314:
      __pc = 314;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 315; continue;
    case 315:
      __pc = 315;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","spyglassOverlayVisibility$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 316; continue;
    case 316:
      __pc = 316;
      s.push(l0); pc = 317; continue;
    case 317:
      __pc = 317;
      s.push(l0); pc = 318; continue;
    case 318:
      __pc = 318;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 319; continue;
    case 319:
      __pc = 319;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SoundBehaviour","WITH_OVERLAY","Ldev/isxander/zoomify/config/SoundBehaviour;")); pc = 320; continue;
    case 320:
      __pc = 320;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SoundBehaviour","Companion","Ldev/isxander/zoomify/config/SoundBehaviour$Companion;")); pc = 321; continue;
    case 321:
      __pc = 321;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/SoundBehaviour$Companion","getCODEC","()Lnet/minecraft/class_3542$class_7292;", rv, [])); pc = 322; continue;
    case 322:
      __pc = 322;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 323; continue;
    case 323:
      __pc = 323;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 324; continue;
    case 324:
      __pc = 324;
      s.push(l0); pc = 325; continue;
    case 325:
      __pc = 325;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 326; continue;
    case 326:
      __pc = 326;
      s.push(18); pc = 327; continue;
    case 327:
      __pc = 327;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 328; continue;
    case 328:
      __pc = 328;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 329; continue;
    case 329:
      __pc = 329;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 330; continue;
    case 330:
      __pc = 330;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","spyglassSoundBehaviour$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 331; continue;
    case 331:
      __pc = 331;
      s.push(l0); pc = 332; continue;
    case 332:
      __pc = 332;
      s.push(l0); pc = 333; continue;
    case 333:
      __pc = 333;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 334; continue;
    case 334:
      __pc = 334;
      s.push(4); pc = 335; continue;
    case 335:
      __pc = 335;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 336; continue;
    case 336:
      __pc = 336;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","INT","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 337; continue;
    case 337:
      __pc = 337;
      s.push(s[s.length - 1]); pc = 338; continue;
    case 338:
      __pc = 338;
      s.push("INT"); pc = 339; continue;
    case 339:
      __pc = 339;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 340; continue;
    case 340:
      __pc = 340;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 341; continue;
    case 341:
      __pc = 341;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 342; continue;
    case 342:
      __pc = 342;
      s.push(l0); pc = 343; continue;
    case 343:
      __pc = 343;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 344; continue;
    case 344:
      __pc = 344;
      s.push(19); pc = 345; continue;
    case 345:
      __pc = 345;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 346; continue;
    case 346:
      __pc = 346;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 347; continue;
    case 347:
      __pc = 347;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 348; continue;
    case 348:
      __pc = 348;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","secondaryZoomAmount$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 349; continue;
    case 349:
      __pc = 349;
      s.push(l0); pc = 350; continue;
    case 350:
      __pc = 350;
      s.push(l0); pc = 351; continue;
    case 351:
      __pc = 351;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 352; continue;
    case 352:
      __pc = 352;
      s.push(10); pc = 353; continue;
    case 353:
      __pc = 353;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 354; continue;
    case 354:
      __pc = 354;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","DOUBLE","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 355; continue;
    case 355:
      __pc = 355;
      s.push(s[s.length - 1]); pc = 356; continue;
    case 356:
      __pc = 356;
      s.push("DOUBLE"); pc = 357; continue;
    case 357:
      __pc = 357;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 358; continue;
    case 358:
      __pc = 358;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 359; continue;
    case 359:
      __pc = 359;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 360; continue;
    case 360:
      __pc = 360;
      s.push(l0); pc = 361; continue;
    case 361:
      __pc = 361;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 362; continue;
    case 362:
      __pc = 362;
      s.push(20); pc = 363; continue;
    case 363:
      __pc = 363;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 364; continue;
    case 364:
      __pc = 364;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 365; continue;
    case 365:
      __pc = 365;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 366; continue;
    case 366:
      __pc = 366;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","secondaryZoomInTime$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 367; continue;
    case 367:
      __pc = 367;
      s.push(l0); pc = 368; continue;
    case 368:
      __pc = 368;
      s.push(l0); pc = 369; continue;
    case 369:
      __pc = 369;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 370; continue;
    case 370:
      __pc = 370;
      s.push(1); pc = 371; continue;
    case 371:
      __pc = 371;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 372; continue;
    case 372:
      __pc = 372;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","DOUBLE","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 373; continue;
    case 373:
      __pc = 373;
      s.push(s[s.length - 1]); pc = 374; continue;
    case 374:
      __pc = 374;
      s.push("DOUBLE"); pc = 375; continue;
    case 375:
      __pc = 375;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 376; continue;
    case 376:
      __pc = 376;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 377; continue;
    case 377:
      __pc = 377;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 378; continue;
    case 378:
      __pc = 378;
      s.push(l0); pc = 379; continue;
    case 379:
      __pc = 379;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 380; continue;
    case 380:
      __pc = 380;
      s.push(21); pc = 381; continue;
    case 381:
      __pc = 381;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 382; continue;
    case 382:
      __pc = 382;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 383; continue;
    case 383:
      __pc = 383;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 384; continue;
    case 384:
      __pc = 384;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","secondaryZoomOutTime$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 385; continue;
    case 385:
      __pc = 385;
      s.push(l0); pc = 386; continue;
    case 386:
      __pc = 386;
      s.push(l0); pc = 387; continue;
    case 387:
      __pc = 387;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 388; continue;
    case 388:
      __pc = 388;
      s.push(1); pc = 389; continue;
    case 389:
      __pc = 389;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Boolean","valueOf","(Z)Ljava/lang/Boolean;", av)); pc = 390; continue;
    case 390:
      __pc = 390;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","BOOL","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 391; continue;
    case 391:
      __pc = 391;
      s.push(s[s.length - 1]); pc = 392; continue;
    case 392:
      __pc = 392;
      s.push("BOOL"); pc = 393; continue;
    case 393:
      __pc = 393;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 394; continue;
    case 394:
      __pc = 394;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 395; continue;
    case 395:
      __pc = 395;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 396; continue;
    case 396:
      __pc = 396;
      s.push(l0); pc = 397; continue;
    case 397:
      __pc = 397;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 398; continue;
    case 398:
      __pc = 398;
      s.push(22); pc = 399; continue;
    case 399:
      __pc = 399;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 400; continue;
    case 400:
      __pc = 400;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 401; continue;
    case 401:
      __pc = 401;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 402; continue;
    case 402:
      __pc = 402;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","secondaryHideHUDOnZoom$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 403; continue;
    case 403:
      __pc = 403;
      s.push(l0); pc = 404; continue;
    case 404:
      __pc = 404;
      s.push(l0); pc = 405; continue;
    case 405:
      __pc = 405;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/EntryAddable")); pc = 406; continue;
    case 406:
      __pc = 406;
      s.push(1); pc = 407; continue;
    case 407:
      __pc = 407;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Boolean","valueOf","(Z)Ljava/lang/Boolean;", av)); pc = 408; continue;
    case 408:
      __pc = 408;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","BOOL","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 409; continue;
    case 409:
      __pc = 409;
      s.push(s[s.length - 1]); pc = 410; continue;
    case 410:
      __pc = 410;
      s.push("BOOL"); pc = 411; continue;
    case 411:
      __pc = 411;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 412; continue;
    case 412:
      __pc = 412;
      s.push(__ctx.cast(s.pop(), "com/mojang/serialization/Codec")); pc = 413; continue;
    case 413:
      __pc = 413;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","register","(Ldev/isxander/yacl3/config/v3/EntryAddable;Ljava/lang/Object;Lcom/mojang/serialization/Codec;)Lkotlin/properties/PropertyDelegateProvider;", av)); pc = 414; continue;
    case 414:
      __pc = 414;
      s.push(l0); pc = 415; continue;
    case 415:
      __pc = 415;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 416; continue;
    case 416:
      __pc = 416;
      s.push(23); pc = 417; continue;
    case 417:
      __pc = 417;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 418; continue;
    case 418:
      __pc = 418;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/PropertyDelegateProvider","provideDelegate","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 419; continue;
    case 419:
      __pc = 419;
      s.push(__ctx.cast(s.pop(), "kotlin/properties/ReadOnlyProperty")); pc = 420; continue;
    case 420:
      __pc = 420;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","_firstLaunch$delegate","Lkotlin/properties/ReadOnlyProperty;",target, r); pc = 421; continue;
    case 421:
      __pc = 421;
      s.push(l0); pc = 422; continue;
    case 422:
      __pc = 422;
      s.push(24); pc = 423; continue;
    case 423:
      __pc = 423;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 424; continue;
    case 424:
      __pc = 424;
      l1 = s.pop(); pc = 425; continue;
    case 425:
      __pc = 425;
      s.push(l1); pc = 426; continue;
    case 426:
      __pc = 426;
      s.push(0); pc = 427; continue;
    case 427:
      __pc = 427;
      s.push(l0); pc = 428; continue;
    case 428:
      __pc = 428;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getInitialZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 429; continue;
    case 429:
      __pc = 429;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 430; continue;
    case 430:
      __pc = 430;
      s.push(l1); pc = 431; continue;
    case 431:
      __pc = 431;
      s.push(1); pc = 432; continue;
    case 432:
      __pc = 432;
      s.push(l0); pc = 433; continue;
    case 433:
      __pc = 433;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomInTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 434; continue;
    case 434:
      __pc = 434;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 435; continue;
    case 435:
      __pc = 435;
      s.push(l1); pc = 436; continue;
    case 436:
      __pc = 436;
      s.push(2); pc = 437; continue;
    case 437:
      __pc = 437;
      s.push(l0); pc = 438; continue;
    case 438:
      __pc = 438;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomOutTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 439; continue;
    case 439:
      __pc = 439;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 440; continue;
    case 440:
      __pc = 440;
      s.push(l1); pc = 441; continue;
    case 441:
      __pc = 441;
      s.push(3); pc = 442; continue;
    case 442:
      __pc = 442;
      s.push(l0); pc = 443; continue;
    case 443:
      __pc = 443;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomInTransition","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 444; continue;
    case 444:
      __pc = 444;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 445; continue;
    case 445:
      __pc = 445;
      s.push(l1); pc = 446; continue;
    case 446:
      __pc = 446;
      s.push(4); pc = 447; continue;
    case 447:
      __pc = 447;
      s.push(l0); pc = 448; continue;
    case 448:
      __pc = 448;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomOutTransition","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 449; continue;
    case 449:
      __pc = 449;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 450; continue;
    case 450:
      __pc = 450;
      s.push(l1); pc = 451; continue;
    case 451:
      __pc = 451;
      s.push(5); pc = 452; continue;
    case 452:
      __pc = 452;
      s.push(l0); pc = 453; continue;
    case 453:
      __pc = 453;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getAffectHandFov","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 454; continue;
    case 454:
      __pc = 454;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 455; continue;
    case 455:
      __pc = 455;
      s.push(l1); pc = 456; continue;
    case 456:
      __pc = 456;
      s.push(6); pc = 457; continue;
    case 457:
      __pc = 457;
      s.push(l0); pc = 458; continue;
    case 458:
      __pc = 458;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getRetainZoomSteps","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 459; continue;
    case 459:
      __pc = 459;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 460; continue;
    case 460:
      __pc = 460;
      s.push(l1); pc = 461; continue;
    case 461:
      __pc = 461;
      s.push(7); pc = 462; continue;
    case 462:
      __pc = 462;
      s.push(l0); pc = 463; continue;
    case 463:
      __pc = 463;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getScrollZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 464; continue;
    case 464:
      __pc = 464;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 465; continue;
    case 465:
      __pc = 465;
      s.push(l1); pc = 466; continue;
    case 466:
      __pc = 466;
      s.push(8); pc = 467; continue;
    case 467:
      __pc = 467;
      s.push(l0); pc = 468; continue;
    case 468:
      __pc = 468;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getScrollStepCount","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 469; continue;
    case 469:
      __pc = 469;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 470; continue;
    case 470:
      __pc = 470;
      s.push(l1); pc = 471; continue;
    case 471:
      __pc = 471;
      s.push(9); pc = 472; continue;
    case 472:
      __pc = 472;
      s.push(l0); pc = 473; continue;
    case 473:
      __pc = 473;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomPerStep","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 474; continue;
    case 474:
      __pc = 474;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 475; continue;
    case 475:
      __pc = 475;
      s.push(l1); pc = 476; continue;
    case 476:
      __pc = 476;
      s.push(10); pc = 477; continue;
    case 477:
      __pc = 477;
      s.push(l0); pc = 478; continue;
    case 478:
      __pc = 478;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getScrollZoomSmoothness","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 479; continue;
    case 479:
      __pc = 479;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 480; continue;
    case 480:
      __pc = 480;
      s.push(l1); pc = 481; continue;
    case 481:
      __pc = 481;
      s.push(11); pc = 482; continue;
    case 482:
      __pc = 482;
      s.push(l0); pc = 483; continue;
    case 483:
      __pc = 483;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomKeyBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 484; continue;
    case 484:
      __pc = 484;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 485; continue;
    case 485:
      __pc = 485;
      s.push(l1); pc = 486; continue;
    case 486:
      __pc = 486;
      s.push(12); pc = 487; continue;
    case 487:
      __pc = 487;
      s.push(l0); pc = 488; continue;
    case 488:
      __pc = 488;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","get_keybindScrolling","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 489; continue;
    case 489:
      __pc = 489;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 490; continue;
    case 490:
      __pc = 490;
      s.push(l1); pc = 491; continue;
    case 491:
      __pc = 491;
      s.push(13); pc = 492; continue;
    case 492:
      __pc = 492;
      s.push(l0); pc = 493; continue;
    case 493:
      __pc = 493;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getRelativeSensitivity","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 494; continue;
    case 494:
      __pc = 494;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 495; continue;
    case 495:
      __pc = 495;
      s.push(l1); pc = 496; continue;
    case 496:
      __pc = 496;
      s.push(14); pc = 497; continue;
    case 497:
      __pc = 497;
      s.push(l0); pc = 498; continue;
    case 498:
      __pc = 498;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getRelativeViewBobbing","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 499; continue;
    case 499:
      __pc = 499;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 500; continue;
    case 500:
      __pc = 500;
      s.push(l1); pc = 501; continue;
    case 501:
      __pc = 501;
      s.push(15); pc = 502; continue;
    case 502:
      __pc = 502;
      s.push(l0); pc = 503; continue;
    case 503:
      __pc = 503;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getCinematicCamera","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 504; continue;
    case 504:
      __pc = 504;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 505; continue;
    case 505:
      __pc = 505;
      s.push(l1); pc = 506; continue;
    case 506:
      __pc = 506;
      s.push(16); pc = 507; continue;
    case 507:
      __pc = 507;
      s.push(l0); pc = 508; continue;
    case 508:
      __pc = 508;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSpyglassBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 509; continue;
    case 509:
      __pc = 509;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 510; continue;
    case 510:
      __pc = 510;
      s.push(l1); pc = 511; continue;
    case 511:
      __pc = 511;
      s.push(17); pc = 512; continue;
    case 512:
      __pc = 512;
      s.push(l0); pc = 513; continue;
    case 513:
      __pc = 513;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSpyglassOverlayVisibility","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 514; continue;
    case 514:
      __pc = 514;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 515; continue;
    case 515:
      __pc = 515;
      s.push(l1); pc = 516; continue;
    case 516:
      __pc = 516;
      s.push(18); pc = 517; continue;
    case 517:
      __pc = 517;
      s.push(l0); pc = 518; continue;
    case 518:
      __pc = 518;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSpyglassSoundBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 519; continue;
    case 519:
      __pc = 519;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 520; continue;
    case 520:
      __pc = 520;
      s.push(l1); pc = 521; continue;
    case 521:
      __pc = 521;
      s.push(19); pc = 522; continue;
    case 522:
      __pc = 522;
      s.push(l0); pc = 523; continue;
    case 523:
      __pc = 523;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryZoomAmount","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 524; continue;
    case 524:
      __pc = 524;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 525; continue;
    case 525:
      __pc = 525;
      s.push(l1); pc = 526; continue;
    case 526:
      __pc = 526;
      s.push(20); pc = 527; continue;
    case 527:
      __pc = 527;
      s.push(l0); pc = 528; continue;
    case 528:
      __pc = 528;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryZoomInTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 529; continue;
    case 529:
      __pc = 529;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 530; continue;
    case 530:
      __pc = 530;
      s.push(l1); pc = 531; continue;
    case 531:
      __pc = 531;
      s.push(21); pc = 532; continue;
    case 532:
      __pc = 532;
      s.push(l0); pc = 533; continue;
    case 533:
      __pc = 533;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryZoomOutTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 534; continue;
    case 534:
      __pc = 534;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 535; continue;
    case 535:
      __pc = 535;
      s.push(l1); pc = 536; continue;
    case 536:
      __pc = 536;
      s.push(22); pc = 537; continue;
    case 537:
      __pc = 537;
      s.push(l0); pc = 538; continue;
    case 538:
      __pc = 538;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryHideHUDOnZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 539; continue;
    case 539:
      __pc = 539;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 540; continue;
    case 540:
      __pc = 540;
      s.push(l1); pc = 541; continue;
    case 541:
      __pc = 541;
      s.push(23); pc = 542; continue;
    case 542:
      __pc = 542;
      s.push(l0); pc = 543; continue;
    case 543:
      __pc = 543;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","get_firstLaunch","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 544; continue;
    case 544:
      __pc = 544;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 545; continue;
    case 545:
      __pc = 545;
      s.push(l1); pc = 546; continue;
    case 546:
      __pc = 546;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","allSettings","[Ldev/isxander/yacl3/config/v3/ConfigEntry;",target, r); pc = 547; continue;
    case 547:
      __pc = 547;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getInitialZoom()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","initialZoom$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(0); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomInTime()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","zoomInTime$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(1); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomOutTime()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","zoomOutTime$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(2); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomInTransition()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","zoomInTransition$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(3); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomOutTransition()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","zoomOutTransition$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(4); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getAffectHandFov()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","affectHandFov$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(5); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getRetainZoomSteps()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","retainZoomSteps$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(6); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getScrollZoom()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","scrollZoom$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(7); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getScrollStepCount()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","scrollStepCount$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(8); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomPerStep()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","zoomPerStep$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(9); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getScrollZoomSmoothness()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","scrollZoomSmoothness$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(10); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomKeyBehaviour()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","zoomKeyBehaviour$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(11); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getKeybindScrolling()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","keybindScrolling","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setKeybindScrolling(Z)V": function (__ctx, __self, __args) {
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
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","keybindScrolling","Z",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "get_keybindScrolling()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","_keybindScrolling$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(12); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getRelativeSensitivity()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","relativeSensitivity$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(13); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getRelativeViewBobbing()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","relativeViewBobbing$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(14); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getCinematicCamera()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","cinematicCamera$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(15); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSpyglassBehaviour()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","spyglassBehaviour$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(16); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSpyglassOverlayVisibility()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","spyglassOverlayVisibility$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(17); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSpyglassSoundBehaviour()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","spyglassSoundBehaviour$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(18); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSecondaryZoomAmount()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","secondaryZoomAmount$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(19); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSecondaryZoomInTime()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","secondaryZoomInTime$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(20); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSecondaryZoomOutTime()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","secondaryZoomOutTime$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(21); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSecondaryHideHUDOnZoom()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","secondaryHideHUDOnZoom$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(22); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getFirstLaunch()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","firstLaunch","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setFirstLaunch(Z)V": function (__ctx, __self, __args) {
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
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","firstLaunch","Z",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "get_firstLaunch()Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","_firstLaunch$delegate","Lkotlin/properties/ReadOnlyProperty;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","$$delegatedProperties","[Lkotlin/reflect/KProperty;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(23); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/properties/ReadOnlyProperty","getValue","(Ljava/lang/Object;Lkotlin/reflect/KProperty;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getAllSettings()[Ldev/isxander/yacl3/config/v3/ConfigEntry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","allSettings","[Ldev/isxander/yacl3/config/v3/ConfigEntry;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Ldev/isxander/zoomify/config/ZoomifySettings;)V": function (__ctx, __self, __args) {
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
      s.push("settings"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","<init>","()V", rv, []); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getInitialZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getInitialZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomInTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l1); pc = 14; continue;
    case 14:
      __pc = 14;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomInTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomOutTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l1); pc = 20; continue;
    case 20:
      __pc = 20;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomOutTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomInTransition","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l1); pc = 26; continue;
    case 26:
      __pc = 26;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomInTransition","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 27; continue;
    case 27:
      __pc = 27;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 28; continue;
    case 28:
      __pc = 28;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l0); pc = 30; continue;
    case 30:
      __pc = 30;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomOutTransition","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l1); pc = 32; continue;
    case 32:
      __pc = 32;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomOutTransition","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 33; continue;
    case 33:
      __pc = 33;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 34; continue;
    case 34:
      __pc = 34;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l0); pc = 36; continue;
    case 36:
      __pc = 36;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getAffectHandFov","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(l1); pc = 38; continue;
    case 38:
      __pc = 38;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getAffectHandFov","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 39; continue;
    case 39:
      __pc = 39;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 40; continue;
    case 40:
      __pc = 40;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(l0); pc = 42; continue;
    case 42:
      __pc = 42;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getRetainZoomSteps","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l1); pc = 44; continue;
    case 44:
      __pc = 44;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getRetainZoomSteps","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 45; continue;
    case 45:
      __pc = 45;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 46; continue;
    case 46:
      __pc = 46;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(l0); pc = 48; continue;
    case 48:
      __pc = 48;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getScrollZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 49; continue;
    case 49:
      __pc = 49;
      s.push(l1); pc = 50; continue;
    case 50:
      __pc = 50;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getScrollZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 51; continue;
    case 51:
      __pc = 51;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 52; continue;
    case 52:
      __pc = 52;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(l0); pc = 54; continue;
    case 54:
      __pc = 54;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getScrollStepCount","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 55; continue;
    case 55:
      __pc = 55;
      s.push(l1); pc = 56; continue;
    case 56:
      __pc = 56;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getScrollStepCount","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 57; continue;
    case 57:
      __pc = 57;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 58; continue;
    case 58:
      __pc = 58;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 59; continue;
    case 59:
      __pc = 59;
      s.push(l0); pc = 60; continue;
    case 60:
      __pc = 60;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomPerStep","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 61; continue;
    case 61:
      __pc = 61;
      s.push(l1); pc = 62; continue;
    case 62:
      __pc = 62;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomPerStep","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 63; continue;
    case 63:
      __pc = 63;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 64; continue;
    case 64:
      __pc = 64;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 65; continue;
    case 65:
      __pc = 65;
      s.push(l0); pc = 66; continue;
    case 66:
      __pc = 66;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getScrollZoomSmoothness","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 67; continue;
    case 67:
      __pc = 67;
      s.push(l1); pc = 68; continue;
    case 68:
      __pc = 68;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getScrollZoomSmoothness","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 69; continue;
    case 69:
      __pc = 69;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 70; continue;
    case 70:
      __pc = 70;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 71; continue;
    case 71:
      __pc = 71;
      s.push(l0); pc = 72; continue;
    case 72:
      __pc = 72;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomKeyBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 73; continue;
    case 73:
      __pc = 73;
      s.push(l1); pc = 74; continue;
    case 74:
      __pc = 74;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomKeyBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 75; continue;
    case 75:
      __pc = 75;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 76; continue;
    case 76:
      __pc = 76;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 77; continue;
    case 77:
      __pc = 77;
      s.push(l0); pc = 78; continue;
    case 78:
      __pc = 78;
      s.push(l1); pc = 79; continue;
    case 79:
      __pc = 79;
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","keybindScrolling","Z", s.pop())); pc = 80; continue;
    case 80:
      __pc = 80;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","keybindScrolling","Z",target, r); pc = 81; continue;
    case 81:
      __pc = 81;
      s.push(l0); pc = 82; continue;
    case 82:
      __pc = 82;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","get_keybindScrolling","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 83; continue;
    case 83:
      __pc = 83;
      s.push(l1); pc = 84; continue;
    case 84:
      __pc = 84;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","get_keybindScrolling","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 85; continue;
    case 85:
      __pc = 85;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 86; continue;
    case 86:
      __pc = 86;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 87; continue;
    case 87:
      __pc = 87;
      s.push(l0); pc = 88; continue;
    case 88:
      __pc = 88;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getRelativeSensitivity","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 89; continue;
    case 89:
      __pc = 89;
      s.push(l1); pc = 90; continue;
    case 90:
      __pc = 90;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getRelativeSensitivity","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 91; continue;
    case 91:
      __pc = 91;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 92; continue;
    case 92:
      __pc = 92;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 93; continue;
    case 93:
      __pc = 93;
      s.push(l0); pc = 94; continue;
    case 94:
      __pc = 94;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getRelativeViewBobbing","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 95; continue;
    case 95:
      __pc = 95;
      s.push(l1); pc = 96; continue;
    case 96:
      __pc = 96;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getRelativeViewBobbing","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 97; continue;
    case 97:
      __pc = 97;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 98; continue;
    case 98:
      __pc = 98;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 99; continue;
    case 99:
      __pc = 99;
      s.push(l0); pc = 100; continue;
    case 100:
      __pc = 100;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getCinematicCamera","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 101; continue;
    case 101:
      __pc = 101;
      s.push(l1); pc = 102; continue;
    case 102:
      __pc = 102;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getCinematicCamera","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 103; continue;
    case 103:
      __pc = 103;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 104; continue;
    case 104:
      __pc = 104;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 105; continue;
    case 105:
      __pc = 105;
      s.push(l0); pc = 106; continue;
    case 106:
      __pc = 106;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSpyglassBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 107; continue;
    case 107:
      __pc = 107;
      s.push(l1); pc = 108; continue;
    case 108:
      __pc = 108;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSpyglassBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 109; continue;
    case 109:
      __pc = 109;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 110; continue;
    case 110:
      __pc = 110;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 111; continue;
    case 111:
      __pc = 111;
      s.push(l0); pc = 112; continue;
    case 112:
      __pc = 112;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSpyglassOverlayVisibility","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 113; continue;
    case 113:
      __pc = 113;
      s.push(l1); pc = 114; continue;
    case 114:
      __pc = 114;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSpyglassOverlayVisibility","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 115; continue;
    case 115:
      __pc = 115;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 116; continue;
    case 116:
      __pc = 116;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 117; continue;
    case 117:
      __pc = 117;
      s.push(l0); pc = 118; continue;
    case 118:
      __pc = 118;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSpyglassSoundBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 119; continue;
    case 119:
      __pc = 119;
      s.push(l1); pc = 120; continue;
    case 120:
      __pc = 120;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSpyglassSoundBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 121; continue;
    case 121:
      __pc = 121;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 122; continue;
    case 122:
      __pc = 122;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 123; continue;
    case 123:
      __pc = 123;
      s.push(l0); pc = 124; continue;
    case 124:
      __pc = 124;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryZoomAmount","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 125; continue;
    case 125:
      __pc = 125;
      s.push(l1); pc = 126; continue;
    case 126:
      __pc = 126;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryZoomAmount","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 127; continue;
    case 127:
      __pc = 127;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 128; continue;
    case 128:
      __pc = 128;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 129; continue;
    case 129:
      __pc = 129;
      s.push(l0); pc = 130; continue;
    case 130:
      __pc = 130;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryZoomInTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 131; continue;
    case 131:
      __pc = 131;
      s.push(l1); pc = 132; continue;
    case 132:
      __pc = 132;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryZoomInTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 133; continue;
    case 133:
      __pc = 133;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 134; continue;
    case 134:
      __pc = 134;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 135; continue;
    case 135:
      __pc = 135;
      s.push(l0); pc = 136; continue;
    case 136:
      __pc = 136;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryZoomOutTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 137; continue;
    case 137:
      __pc = 137;
      s.push(l1); pc = 138; continue;
    case 138:
      __pc = 138;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryZoomOutTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 139; continue;
    case 139:
      __pc = 139;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 140; continue;
    case 140:
      __pc = 140;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 141; continue;
    case 141:
      __pc = 141;
      s.push(l0); pc = 142; continue;
    case 142:
      __pc = 142;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryHideHUDOnZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 143; continue;
    case 143:
      __pc = 143;
      s.push(l1); pc = 144; continue;
    case 144:
      __pc = 144;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryHideHUDOnZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 145; continue;
    case 145:
      __pc = 145;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 146; continue;
    case 146:
      __pc = 146;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 147; continue;
    case 147:
      __pc = 147;
      s.push(l0); pc = 148; continue;
    case 148:
      __pc = 148;
      s.push(l1); pc = 149; continue;
    case 149:
      __pc = 149;
      s.push(__ctx.getField("dev/isxander/zoomify/config/ZoomifySettings","firstLaunch","Z", s.pop())); pc = 150; continue;
    case 150:
      __pc = 150;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/ZoomifySettings","firstLaunch","Z",target, r); pc = 151; continue;
    case 151:
      __pc = 151;
      s.push(l0); pc = 152; continue;
    case 152:
      __pc = 152;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","get_firstLaunch","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 153; continue;
    case 153:
      __pc = 153;
      s.push(l1); pc = 154; continue;
    case 154:
      __pc = 154;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","get_firstLaunch","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 155; continue;
    case 155:
      __pc = 155;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 156; continue;
    case 156:
      __pc = 156;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 157; continue;
    case 157:
      __pc = 157;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/ZoomifySettings"].__fields = [{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/ZoomifySettings$Companion;"},{"name":"$$delegatedProperties","descriptor":"[Lkotlin/reflect/KProperty;"},{"name":"initialZoom$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"zoomInTime$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"zoomOutTime$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"zoomInTransition$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"zoomOutTransition$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"affectHandFov$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"retainZoomSteps$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"scrollZoom$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"scrollStepCount$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"zoomPerStep$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"scrollZoomSmoothness$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"zoomKeyBehaviour$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"keybindScrolling","descriptor":"Z"},{"name":"_keybindScrolling$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"relativeSensitivity$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"relativeViewBobbing$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"cinematicCamera$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"spyglassBehaviour$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"spyglassOverlayVisibility$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"spyglassSoundBehaviour$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"secondaryZoomAmount$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"secondaryZoomInTime$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"secondaryZoomOutTime$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"secondaryHideHUDOnZoom$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"firstLaunch","descriptor":"Z"},{"name":"_firstLaunch$delegate","descriptor":"Lkotlin/properties/ReadOnlyProperty;"},{"name":"allSettings","descriptor":"[Ldev/isxander/yacl3/config/v3/ConfigEntry;"}];
  defineClass("dev/isxander/zoomify/config/demo/ControlEmulation", {
    "pause(Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;)V": function (__ctx, __self, __args) {
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
      s.push("imageRenderer"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setup(Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;)V": function (__ctx, __self, __args) {
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
      s.push("imageRenderer"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/demo/ControlEmulation"].__fields = [];
  defineClass("dev/isxander/zoomify/config/demo/FirstPersonDemo", {
    "<init>(Ldev/isxander/zoomify/zoom/ZoomHelper;Ldev/isxander/zoomify/config/demo/ControlEmulation;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("zoomHelper"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("zoomControl"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l2); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","<init>","(Ldev/isxander/zoomify/zoom/ZoomHelper;Ldev/isxander/zoomify/config/demo/ControlEmulation;)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","Companion","Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer$Companion;")); pc = 12; continue;
    case 12:
      __pc = 12;
      s.pop(); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/FirstPersonDemo","HAND_TEXTURE","Lnet/minecraft/class_2960;")); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","makeWebp","(Lnet/minecraft/class_2960;)Ljava/util/concurrent/CompletableFuture;", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/demo/FirstPersonDemo","handRenderer","Ljava/util/concurrent/CompletableFuture;",target, r); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l0); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","Companion","Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer$Companion;")); pc = 18; continue;
    case 18:
      __pc = 18;
      s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/FirstPersonDemo","WORLD_TEXTURE","Lnet/minecraft/class_2960;")); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","makeWebp","(Lnet/minecraft/class_2960;)Ljava/util/concurrent/CompletableFuture;", av)); pc = 21; continue;
    case 21:
      __pc = 21;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/demo/FirstPersonDemo","worldRenderer","Ljava/util/concurrent/CompletableFuture;",target, r); pc = 22; continue;
    case 22:
      __pc = 22;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getKeepHandFov()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/demo/FirstPersonDemo","keepHandFov","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setKeepHandFov(Z)V": function (__ctx, __self, __args) {
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
      __ctx.putField("dev/isxander/zoomify/config/demo/FirstPersonDemo","keepHandFov","Z",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "close()V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/demo/FirstPersonDemo","worldRenderer","Ljava/util/concurrent/CompletableFuture;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.concurrent.CompletableFuture.getNow") + ' needs the client internals');
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/util/Optional","ofNullable","(Ljava/lang/Object;)Ljava/util/Optional;", av)); pc = 5; continue;
    case 5:
      __pc = 5;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/demo/FirstPersonDemo","close$lambda$0","(Ldev/isxander/yacl3/gui/image/impl/AnimatedDynamicTextureImage;)Lkotlin/Unit;", null, dv)); pc = 6; continue;
    case 6:
      __pc = 6;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/demo/FirstPersonDemo","close$lambda$1","(Lkotlin/jvm/functions/Function1;Ljava/lang/Object;)Lkotlin/Unit;", null, dv)); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Optional","map","(Ljava/util/function/Function;)Ljava/util/Optional;", rv, av)); pc = 8; continue;
    case 8:
      __pc = 8;
      s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getField("dev/isxander/zoomify/config/demo/FirstPersonDemo","handRenderer","Ljava/util/concurrent/CompletableFuture;", s.pop())); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(null); pc = 12; continue;
    case 12:
      __pc = 12;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.concurrent.CompletableFuture.getNow") + ' needs the client internals');
    case 13:
      __pc = 13;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/util/Optional","ofNullable","(Ljava/lang/Object;)Ljava/util/Optional;", av)); pc = 14; continue;
    case 14:
      __pc = 14;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/demo/FirstPersonDemo","close$lambda$2","(Ldev/isxander/yacl3/gui/image/impl/AnimatedDynamicTextureImage;)Lkotlin/Unit;", null, dv)); pc = 15; continue;
    case 15:
      __pc = 15;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/demo/FirstPersonDemo","close$lambda$3","(Lkotlin/jvm/functions/Function1;Ljava/lang/Object;)Lkotlin/Unit;", null, dv)); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Optional","map","(Ljava/util/function/Function;)Ljava/util/Optional;", rv, av)); pc = 17; continue;
    case 17:
      __pc = 17;
      s.pop(); pc = 18; continue;
    case 18:
      __pc = 18;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "close$lambda$0(Ldev/isxander/yacl3/gui/image/impl/AnimatedDynamicTextureImage;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      __ctx.invoke("dev/isxander/yacl3/gui/image/impl/AnimatedDynamicTextureImage","close","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "close$lambda$1(Lkotlin/jvm/functions/Function1;Ljava/lang/Object;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/jvm/functions/Function1","invoke","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "kotlin/Unit")); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "close$lambda$2(Ldev/isxander/yacl3/gui/image/impl/AnimatedDynamicTextureImage;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      __ctx.invoke("dev/isxander/yacl3/gui/image/impl/AnimatedDynamicTextureImage","close","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "close$lambda$3(Lkotlin/jvm/functions/Function1;Ljava/lang/Object;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/jvm/functions/Function1","invoke","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "kotlin/Unit")); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$getWORLD_TEXTURE$cp()Lnet/minecraft/class_2960;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/FirstPersonDemo","WORLD_TEXTURE","Lnet/minecraft/class_2960;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$getHAND_TEXTURE$cp()Lnet/minecraft/class_2960;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/FirstPersonDemo","HAND_TEXTURE","Lnet/minecraft/class_2960;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/demo/FirstPersonDemo"].__fields = [{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/demo/FirstPersonDemo$Companion;"},{"name":"keepHandFov","descriptor":"Z"},{"name":"handRenderer","descriptor":"Ljava/util/concurrent/CompletableFuture;"},{"name":"worldRenderer","descriptor":"Ljava/util/concurrent/CompletableFuture;"},{"name":"TEX_WIDTH","descriptor":"I"},{"name":"TEX_HEIGHT","descriptor":"I"},{"name":"WORLD_TEXTURE","descriptor":"Lnet/minecraft/class_2960;"},{"name":"HAND_TEXTURE","descriptor":"Lnet/minecraft/class_2960;"}];
  defineClass("dev/isxander/zoomify/config/demo/ThirdPersonDemo", {
    "<init>(Ldev/isxander/zoomify/zoom/ZoomHelper;Ldev/isxander/zoomify/config/demo/ControlEmulation;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("zoomHelper"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("zoomControl"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l2); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","<init>","(Ldev/isxander/zoomify/zoom/ZoomHelper;Ldev/isxander/zoomify/config/demo/ControlEmulation;)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","Companion","Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer$Companion;")); pc = 12; continue;
    case 12:
      __pc = 12;
      s.pop(); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/ThirdPersonDemo","PLAYER_VIEW","Lnet/minecraft/class_2960;")); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","makeWebp","(Lnet/minecraft/class_2960;)Ljava/util/concurrent/CompletableFuture;", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/demo/ThirdPersonDemo","thirdPersonViewRenderer","Ljava/util/concurrent/CompletableFuture;",target, r); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l0); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","Companion","Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer$Companion;")); pc = 18; continue;
    case 18:
      __pc = 18;
      s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/ThirdPersonDemo","HUD_TEXTURE","Lnet/minecraft/class_2960;")); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","makeWebp","(Lnet/minecraft/class_2960;)Ljava/util/concurrent/CompletableFuture;", av)); pc = 21; continue;
    case 21:
      __pc = 21;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/demo/ThirdPersonDemo","hudRenderer","Ljava/util/concurrent/CompletableFuture;",target, r); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l0); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(1); pc = 24; continue;
    case 24:
      __pc = 24;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/demo/ThirdPersonDemo","renderHud","Z",target, r); pc = 25; continue;
    case 25:
      __pc = 25;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getRenderHud()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/demo/ThirdPersonDemo","renderHud","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setRenderHud(Z)V": function (__ctx, __self, __args) {
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
      __ctx.putField("dev/isxander/zoomify/config/demo/ThirdPersonDemo","renderHud","Z",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "close()V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/demo/ThirdPersonDemo","thirdPersonViewRenderer","Ljava/util/concurrent/CompletableFuture;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.concurrent.CompletableFuture.getNow") + ' needs the client internals');
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/util/Optional","ofNullable","(Ljava/lang/Object;)Ljava/util/Optional;", av)); pc = 5; continue;
    case 5:
      __pc = 5;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/demo/ThirdPersonDemo","close$lambda$0","(Ldev/isxander/yacl3/gui/image/impl/AnimatedDynamicTextureImage;)Lkotlin/Unit;", null, dv)); pc = 6; continue;
    case 6:
      __pc = 6;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/demo/ThirdPersonDemo","close$lambda$1","(Lkotlin/jvm/functions/Function1;Ljava/lang/Object;)Lkotlin/Unit;", null, dv)); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Optional","map","(Ljava/util/function/Function;)Ljava/util/Optional;", rv, av)); pc = 8; continue;
    case 8:
      __pc = 8;
      s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getField("dev/isxander/zoomify/config/demo/ThirdPersonDemo","hudRenderer","Ljava/util/concurrent/CompletableFuture;", s.pop())); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(null); pc = 12; continue;
    case 12:
      __pc = 12;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.concurrent.CompletableFuture.getNow") + ' needs the client internals');
    case 13:
      __pc = 13;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/util/Optional","ofNullable","(Ljava/lang/Object;)Ljava/util/Optional;", av)); pc = 14; continue;
    case 14:
      __pc = 14;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/demo/ThirdPersonDemo","close$lambda$2","(Ldev/isxander/yacl3/gui/image/impl/AnimatedDynamicTextureImage;)Lkotlin/Unit;", null, dv)); pc = 15; continue;
    case 15:
      __pc = 15;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/demo/ThirdPersonDemo","close$lambda$3","(Lkotlin/jvm/functions/Function1;Ljava/lang/Object;)Lkotlin/Unit;", null, dv)); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Optional","map","(Ljava/util/function/Function;)Ljava/util/Optional;", rv, av)); pc = 17; continue;
    case 17:
      __pc = 17;
      s.pop(); pc = 18; continue;
    case 18:
      __pc = 18;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "close$lambda$0(Ldev/isxander/yacl3/gui/image/impl/AnimatedDynamicTextureImage;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      __ctx.invoke("dev/isxander/yacl3/gui/image/impl/AnimatedDynamicTextureImage","close","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "close$lambda$1(Lkotlin/jvm/functions/Function1;Ljava/lang/Object;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/jvm/functions/Function1","invoke","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "kotlin/Unit")); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "close$lambda$2(Ldev/isxander/yacl3/gui/image/impl/AnimatedDynamicTextureImage;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      __ctx.invoke("dev/isxander/yacl3/gui/image/impl/AnimatedDynamicTextureImage","close","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("kotlin/Unit","INSTANCE","Lkotlin/Unit;")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "close$lambda$3(Lkotlin/jvm/functions/Function1;Ljava/lang/Object;)Lkotlin/Unit;": function (__ctx, __self, __args) {
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/jvm/functions/Function1","invoke","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "kotlin/Unit")); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$getPLAYER_VIEW$cp()Lnet/minecraft/class_2960;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/ThirdPersonDemo","PLAYER_VIEW","Lnet/minecraft/class_2960;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$getHUD_TEXTURE$cp()Lnet/minecraft/class_2960;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/ThirdPersonDemo","HUD_TEXTURE","Lnet/minecraft/class_2960;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/demo/ThirdPersonDemo"].__fields = [{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/demo/ThirdPersonDemo$Companion;"},{"name":"thirdPersonViewRenderer","descriptor":"Ljava/util/concurrent/CompletableFuture;"},{"name":"hudRenderer","descriptor":"Ljava/util/concurrent/CompletableFuture;"},{"name":"renderHud","descriptor":"Z"},{"name":"TEX_WIDTH","descriptor":"I"},{"name":"TEX_HEIGHT","descriptor":"I"},{"name":"PLAYER_VIEW","descriptor":"Lnet/minecraft/class_2960;"},{"name":"HUD_TEXTURE","descriptor":"Lnet/minecraft/class_2960;"}];
  defineClass("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer$Companion", {
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
    "makeWebp(Lnet/minecraft/class_2960;)Ljava/util/concurrent/CompletableFuture;": function (__ctx, __self, __args) {
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
      s.push("id"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer$Companion","makeWebp$lambda$0","(Lnet/minecraft/class_2960;)Ldev/isxander/yacl3/gui/image/ImageRendererFactory;", null, dv)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/gui/image/ImageRendererManager","registerOrGetImage","(Lnet/minecraft/class_2960;Ljava/util/function/Supplier;)Ljava/util/concurrent/CompletableFuture;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(s[s.length - 1]); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push("registerOrGetImage(...)"); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "makeWebp$lambda$0(Lnet/minecraft/class_2960;)Ldev/isxander/yacl3/gui/image/ImageRendererFactory;": function (__ctx, __self, __args) {
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/gui/image/impl/AnimatedDynamicTextureImage","createWEBPFromTexture","(Lnet/minecraft/class_2960;)Ldev/isxander/yacl3/gui/image/ImageRendererFactory;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Lkotlin/jvm/internal/DefaultConstructorMarker;)V": function (__ctx, __self, __args) {
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
      __ctx.invoke("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer$Companion","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer$Companion"].__fields = [];
  defineClass("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer", {
    "<init>(Ldev/isxander/zoomify/zoom/ZoomHelper;Ldev/isxander/zoomify/config/demo/ControlEmulation;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("zoomHelper"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("zoomControl"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 8; continue;
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
      __ctx.putField("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","zoomHelper","Ldev/isxander/zoomify/zoom/ZoomHelper;",target, r); pc = 11; continue;
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
      __ctx.putField("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","zoomControl","Ldev/isxander/zoomify/config/demo/ControlEmulation;",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
      pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getField("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","zoomControl","Ldev/isxander/zoomify/config/demo/ControlEmulation;", s.pop())); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/ControlEmulation","setup","(Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;)V", rv, av); pc = 19; continue;
    case 19:
      __pc = 19;
      pc = 20; continue;
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "pause()V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","zoomHelper","Ldev/isxander/zoomify/zoom/ZoomHelper;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(3); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(null); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/zoom/ZoomHelper","setToZero$default","(Ldev/isxander/zoomify/zoom/ZoomHelper;ZZILjava/lang/Object;)V", av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getField("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","zoomControl","Ldev/isxander/zoomify/config/demo/ControlEmulation;", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/demo/ControlEmulation","pause","(Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer;)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "makeWebp(Lnet/minecraft/class_2960;)Ljava/util/concurrent/CompletableFuture;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer","Companion","Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer$Companion;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer$Companion","makeWebp","(Lnet/minecraft/class_2960;)Ljava/util/concurrent/CompletableFuture;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/demo/ZoomDemoImageRenderer"].__fields = [{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/demo/ZoomDemoImageRenderer$Companion;"},{"name":"zoomHelper","descriptor":"Ldev/isxander/zoomify/zoom/ZoomHelper;"},{"name":"zoomControl","descriptor":"Ldev/isxander/zoomify/config/demo/ControlEmulation;"},{"name":"keyDown","descriptor":"Z"},{"name":"scrollTiers","descriptor":"I"}];
  defineClass("dev/isxander/zoomify/config/migrator/Migration", {
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
      s.push(__ctx.newInstance("java/util/ArrayList")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      __ctx.invoke("java/util/ArrayList","<init>","()V", rv, []); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "java/util/List")); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/Migration","warnings","Ljava/util/List;",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.newInstance("java/util/ArrayList")); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(s[s.length - 1]); pc = 11; continue;
    case 11:
      __pc = 11;
      var rv = s.pop();
      __ctx.invoke("java/util/ArrayList","<init>","()V", rv, []); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.cast(s.pop(), "java/util/List")); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/Migration","errors","Ljava/util/List;",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getRequireRestart()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/Migration","requireRestart","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "generateReport()Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","empty","()Lnet/minecraft/class_5250;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("empty(...)"); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 4; continue;
    case 4:
      __pc = 4;
      l1 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/Migration","errors","Ljava/util/List;", s.pop())); pc = 7; continue;
    case 7:
      __pc = 7;
      l2 = s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/Migration","requireRestart","Z", s.pop())); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); if (r == 0) { pc = 19; } else { pc = 11; } continue;
    case 11:
      __pc = 11;
      s.push(l2); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push("zoomify.migrate.restart"); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(s[s.length - 1]); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push("translatable(...)"); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 18; continue;
    case 18:
      __pc = 18;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.List.add") + ' needs the client internals');
    case 19:
      __pc = 19;
      s.push(l2); pc = 20; continue;
    case 20:
      __pc = 20;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","iterator","()Ljava/util/Iterator;", rv, [])); pc = 21; continue;
    case 21:
      __pc = 21;
      l3 = s.pop(); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l3); pc = 23; continue;
    case 23:
      __pc = 23;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 24; continue;
    case 24:
      __pc = 24;
      r = s.pop(); if (r == 0) { pc = 48; } else { pc = 25; } continue;
    case 25:
      __pc = 25;
      s.push(l3); pc = 26; continue;
    case 26:
      __pc = 26;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 28; continue;
    case 28:
      __pc = 28;
      l4 = s.pop(); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","empty","()Lnet/minecraft/class_5250;", [])); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push("◆ "); pc = 31; continue;
    case 31:
      __pc = 31;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","append","(Ljava/lang/String;)Lnet/minecraft/class_5250;", rv, av)); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(l4); pc = 33; continue;
    case 33:
      __pc = 33;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","append","(Lnet/minecraft/class_2561;)Lnet/minecraft/class_5250;", rv, av)); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push("\n"); pc = 35; continue;
    case 35:
      __pc = 35;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","append","(Ljava/lang/String;)Lnet/minecraft/class_5250;", rv, av)); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(__ctx.getStatic("net/minecraft/ChatFormatting","field_1061","Lnet/minecraft/class_124;")); pc = 37; continue;
    case 37:
      __pc = 37;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","withStyle","(Lnet/minecraft/class_124;)Lnet/minecraft/class_5250;", rv, av)); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(s[s.length - 1]); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push("withStyle(...)"); pc = 40; continue;
    case 40:
      __pc = 40;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 41; continue;
    case 41:
      __pc = 41;
      l5 = s.pop(); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(l1); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l5); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 45; continue;
    case 45:
      __pc = 45;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","append","(Lnet/minecraft/class_2561;)Lnet/minecraft/class_5250;", rv, av)); pc = 46; continue;
    case 46:
      __pc = 46;
      s.pop(); pc = 47; continue;
    case 47:
      __pc = 47;
      pc = undefined; continue;
    case 48:
      __pc = 48;
      s.push(l0); pc = 49; continue;
    case 49:
      __pc = 49;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/Migration","warnings","Ljava/util/List;", s.pop())); pc = 50; continue;
    case 50:
      __pc = 50;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","iterator","()Ljava/util/Iterator;", rv, [])); pc = 51; continue;
    case 51:
      __pc = 51;
      l3 = s.pop(); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push(l3); pc = 53; continue;
    case 53:
      __pc = 53;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 54; continue;
    case 54:
      __pc = 54;
      r = s.pop(); if (r == 0) { pc = 78; } else { pc = 55; } continue;
    case 55:
      __pc = 55;
      s.push(l3); pc = 56; continue;
    case 56:
      __pc = 56;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 57; continue;
    case 57:
      __pc = 57;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 58; continue;
    case 58:
      __pc = 58;
      l4 = s.pop(); pc = 59; continue;
    case 59:
      __pc = 59;
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","empty","()Lnet/minecraft/class_5250;", [])); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push("◆ "); pc = 61; continue;
    case 61:
      __pc = 61;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","append","(Ljava/lang/String;)Lnet/minecraft/class_5250;", rv, av)); pc = 62; continue;
    case 62:
      __pc = 62;
      s.push(l4); pc = 63; continue;
    case 63:
      __pc = 63;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","append","(Lnet/minecraft/class_2561;)Lnet/minecraft/class_5250;", rv, av)); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push("\n"); pc = 65; continue;
    case 65:
      __pc = 65;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","append","(Ljava/lang/String;)Lnet/minecraft/class_5250;", rv, av)); pc = 66; continue;
    case 66:
      __pc = 66;
      s.push(__ctx.getStatic("net/minecraft/ChatFormatting","field_1054","Lnet/minecraft/class_124;")); pc = 67; continue;
    case 67:
      __pc = 67;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","withStyle","(Lnet/minecraft/class_124;)Lnet/minecraft/class_5250;", rv, av)); pc = 68; continue;
    case 68:
      __pc = 68;
      s.push(s[s.length - 1]); pc = 69; continue;
    case 69:
      __pc = 69;
      s.push("withStyle(...)"); pc = 70; continue;
    case 70:
      __pc = 70;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 71; continue;
    case 71:
      __pc = 71;
      l5 = s.pop(); pc = 72; continue;
    case 72:
      __pc = 72;
      s.push(l1); pc = 73; continue;
    case 73:
      __pc = 73;
      s.push(l5); pc = 74; continue;
    case 74:
      __pc = 74;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 75; continue;
    case 75:
      __pc = 75;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","append","(Lnet/minecraft/class_2561;)Lnet/minecraft/class_5250;", rv, av)); pc = 76; continue;
    case 76:
      __pc = 76;
      s.pop(); pc = 77; continue;
    case 77:
      __pc = 77;
      pc = undefined; continue;
    case 78:
      __pc = 78;
      s.push(l1); pc = 79; continue;
    case 79:
      __pc = 79;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 80; continue;
    case 80:
      __pc = 80;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/migrator/Migration"].__fields = [{"name":"warnings","descriptor":"Ljava/util/List;"},{"name":"errors","descriptor":"Ljava/util/List;"},{"name":"requireRestart","descriptor":"Z"}];
  defineClass("dev/isxander/zoomify/config/migrator/MigrationResultScreen", {
    "<init>(Ldev/isxander/zoomify/config/migrator/Migration;Lnet/minecraft/class_437;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("migration"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l2); pc = 6; continue;
    case 6:
      __pc = 6;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/migrator/MigrationResultScreen","_init_$lambda$0","(Ldev/isxander/zoomify/config/migrator/Migration;Lnet/minecraft/class_437;)V", null, dv)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("zoomify.migrate.result.title"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/migrator/Migration","generateReport","()Lnet/minecraft/class_2561;", rv, [])); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/migrator/Migration","getRequireRestart","()Z", rv, [])); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop(); if (r == 0) { pc = 19; } else { pc = 15; } continue;
    case 15:
      __pc = 15;
      s.push("zoomify.migrate.result.restart_game"); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.cast(s.pop(), "net/minecraft/network/chat/Component")); pc = 18; continue;
    case 18:
      __pc = 18;
      pc = undefined; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getStatic("net/minecraft/network/chat/CommonComponents","field_24334","Lnet/minecraft/class_2561;")); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(1); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/gui/screens/AlertScreen","<init>","(Ljava/lang/Runnable;Lnet/minecraft/class_2561;Lnet/minecraft/class_2561;Lnet/minecraft/class_2561;Z)V", rv, av); pc = 22; continue;
    case 22:
      __pc = 22;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "_init_$lambda$0(Ldev/isxander/zoomify/config/migrator/Migration;Lnet/minecraft/class_437;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.invoke("dev/isxander/zoomify/config/migrator/Migration","getRequireRestart","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(__ctx.invokeStatic("net/minecraft/client/Minecraft","getInstance","()Lnet/minecraft/class_310;", [])); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/Minecraft","stop","()V", rv, []); pc = 5; continue;
    case 5:
      __pc = 5;
      pc = undefined; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.invokeStatic("net/minecraft/client/Minecraft","getInstance","()Lnet/minecraft/class_310;", [])); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/Minecraft","setScreen","(Lnet/minecraft/class_437;)V", rv, av); pc = 9; continue;
    case 9:
      __pc = 9;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/migrator/MigrationResultScreen"].__fields = [];
  defineClass("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features", {
    "<init>(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;ZLdev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;ZZLdev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    l4 = __args[3];
    l5 = __args[4];
    l6 = __args[5];
    l7 = __args[6];
    l8 = __args[7];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("cinematicCamera"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l3); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("zoomTransition"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l4); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("zoomMode"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l7); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push("zoomOverlay"); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l8); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push("spyglassDependency"); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l1); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","cinematicCamera","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;",target, r); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l0); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l2); pc = 22; continue;
    case 22:
      __pc = 22;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","reduceSensitivity","Z",target, r); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l3); pc = 25; continue;
    case 25:
      __pc = 25;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomTransition","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;",target, r); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l0); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l4); pc = 28; continue;
    case 28:
      __pc = 28;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomMode","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;",target, r); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l0); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l5); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomScrolling","Z",target, r); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(l0); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(l6); pc = 34; continue;
    case 34:
      __pc = 34;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","extraKeyBinds","Z",target, r); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l0); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l7); pc = 37; continue;
    case 37:
      __pc = 37;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomOverlay","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;",target, r); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(l0); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(l8); pc = 40; continue;
    case 40:
      __pc = 40;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","spyglassDependency","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;",target, r); pc = 41; continue;
    case 41:
      __pc = 41;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getCinematicCamera()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","cinematicCamera","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getCinematicCamera$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getReduceSensitivity()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","reduceSensitivity","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getReduceSensitivity$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomTransition()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomTransition","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomTransition$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomMode()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomMode","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomMode$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomScrolling()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomScrolling","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomScrolling$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getExtraKeyBinds()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","extraKeyBinds","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getExtraKeyBinds$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomOverlay()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomOverlay","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomOverlay$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSpyglassDependency()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","spyglassDependency","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSpyglassDependency$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component1()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","cinematicCamera","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component2()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","reduceSensitivity","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component3()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomTransition","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component4()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomMode","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component5()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomScrolling","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component6()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","extraKeyBinds","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component7()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomOverlay","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component8()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","spyglassDependency","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "copy(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;ZLdev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;ZZLdev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;)Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    l4 = __args[3];
    l5 = __args[4];
    l6 = __args[5];
    l7 = __args[6];
    l8 = __args[7];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("cinematicCamera"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l3); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("zoomTransition"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l4); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("zoomMode"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l7); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push("zoomOverlay"); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l8); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push("spyglassDependency"); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.newInstance("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features")); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(s[s.length - 1]); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l1); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l2); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l3); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l4); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l5); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l6); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l7); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l8); pc = 25; continue;
    case 25:
      __pc = 25;
      var av = new Array(8); for (var ai = 7; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","<init>","(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;ZLdev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;ZZLdev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;)V", rv, av); pc = 26; continue;
    case 26:
      __pc = 26;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "copy$default(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;ZLdev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;ZZLdev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;ILjava/lang/Object;)Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10;
    l0 = __args[0];
    l1 = __args[1];
    l2 = __args[2];
    l3 = __args[3];
    l4 = __args[4];
    l5 = __args[5];
    l6 = __args[6];
    l7 = __args[7];
    l8 = __args[8];
    l9 = __args[9];
    l10 = __args[10];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l9); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); s.push(s.pop() & r); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r == 0) { pc = 7; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","cinematicCamera","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;", s.pop())); pc = 6; continue;
    case 6:
      __pc = 6;
      l1 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l9); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(2); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); s.push(s.pop() & r); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); if (r == 0) { pc = 14; } else { pc = 11; } continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","reduceSensitivity","Z", s.pop())); pc = 13; continue;
    case 13:
      __pc = 13;
      l2 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l9); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(4); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop(); s.push(s.pop() & r); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop(); if (r == 0) { pc = 21; } else { pc = 18; } continue;
    case 18:
      __pc = 18;
      s.push(l0); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomTransition","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;", s.pop())); pc = 20; continue;
    case 20:
      __pc = 20;
      l3 = s.pop(); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l9); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(8); pc = 23; continue;
    case 23:
      __pc = 23;
      r = s.pop(); s.push(s.pop() & r); pc = 24; continue;
    case 24:
      __pc = 24;
      r = s.pop(); if (r == 0) { pc = 28; } else { pc = 25; } continue;
    case 25:
      __pc = 25;
      s.push(l0); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomMode","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;", s.pop())); pc = 27; continue;
    case 27:
      __pc = 27;
      l4 = s.pop(); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l9); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(16); pc = 30; continue;
    case 30:
      __pc = 30;
      r = s.pop(); s.push(s.pop() & r); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop(); if (r == 0) { pc = 35; } else { pc = 32; } continue;
    case 32:
      __pc = 32;
      s.push(l0); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomScrolling","Z", s.pop())); pc = 34; continue;
    case 34:
      __pc = 34;
      l5 = s.pop(); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l9); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(32); pc = 37; continue;
    case 37:
      __pc = 37;
      r = s.pop(); s.push(s.pop() & r); pc = 38; continue;
    case 38:
      __pc = 38;
      r = s.pop(); if (r == 0) { pc = 42; } else { pc = 39; } continue;
    case 39:
      __pc = 39;
      s.push(l0); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","extraKeyBinds","Z", s.pop())); pc = 41; continue;
    case 41:
      __pc = 41;
      l6 = s.pop(); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(l9); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(64); pc = 44; continue;
    case 44:
      __pc = 44;
      r = s.pop(); s.push(s.pop() & r); pc = 45; continue;
    case 45:
      __pc = 45;
      r = s.pop(); if (r == 0) { pc = 49; } else { pc = 46; } continue;
    case 46:
      __pc = 46;
      s.push(l0); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomOverlay","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;", s.pop())); pc = 48; continue;
    case 48:
      __pc = 48;
      l7 = s.pop(); pc = 49; continue;
    case 49:
      __pc = 49;
      s.push(l9); pc = 50; continue;
    case 50:
      __pc = 50;
      s.push(128); pc = 51; continue;
    case 51:
      __pc = 51;
      r = s.pop(); s.push(s.pop() & r); pc = 52; continue;
    case 52:
      __pc = 52;
      r = s.pop(); if (r == 0) { pc = 56; } else { pc = 53; } continue;
    case 53:
      __pc = 53;
      s.push(l0); pc = 54; continue;
    case 54:
      __pc = 54;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","spyglassDependency","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;", s.pop())); pc = 55; continue;
    case 55:
      __pc = 55;
      l8 = s.pop(); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(l0); pc = 57; continue;
    case 57:
      __pc = 57;
      s.push(l1); pc = 58; continue;
    case 58:
      __pc = 58;
      s.push(l2); pc = 59; continue;
    case 59:
      __pc = 59;
      s.push(l3); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push(l4); pc = 61; continue;
    case 61:
      __pc = 61;
      s.push(l5); pc = 62; continue;
    case 62:
      __pc = 62;
      s.push(l6); pc = 63; continue;
    case 63:
      __pc = 63;
      s.push(l7); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(l8); pc = 65; continue;
    case 65:
      __pc = 65;
      var av = new Array(8); for (var ai = 7; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","copy","(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;ZLdev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;ZZLdev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;)Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;", rv, av)); pc = 66; continue;
    case 66:
      __pc = 66;
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","cinematicCamera","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","reduceSensitivity","Z", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomTransition","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;", s.pop())); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomMode","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;", s.pop())); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomScrolling","Z", s.pop())); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","extraKeyBinds","Z", s.pop())); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomOverlay","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;", s.pop())); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","spyglassDependency","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;", s.pop())); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.unsupportedLambda("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features.toString:32")); pc = 17; continue;
    case 17:
      __pc = 17;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "equals(Ljava/lang/Object;)Z": function (__ctx, __self, __args) {
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
      r = s.pop(); var l = s.pop(); if (l != r) { pc = 5; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(1); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.isInstance(s.pop(), "dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features")); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); if (r != 0) { pc = 10; } else { pc = 8; } continue;
    case 8:
      __pc = 8;
      s.push(0); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features")); pc = 12; continue;
    case 12:
      __pc = 12;
      l2 = s.pop(); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","cinematicCamera","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;", s.pop())); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l2); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","cinematicCamera","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;", s.pop())); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 20; } else { pc = 18; } continue;
    case 18:
      __pc = 18;
      s.push(0); pc = 19; continue;
    case 19:
      __pc = 19;
      return s.pop();
    case 20:
      __pc = 20;
      s.push(l0); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","reduceSensitivity","Z", s.pop())); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l2); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","reduceSensitivity","Z", s.pop())); pc = 24; continue;
    case 24:
      __pc = 24;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 27; } else { pc = 25; } continue;
    case 25:
      __pc = 25;
      s.push(0); pc = 26; continue;
    case 26:
      __pc = 26;
      return s.pop();
    case 27:
      __pc = 27;
      s.push(l0); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomTransition","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;", s.pop())); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l2); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomTransition","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;", s.pop())); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 34; } else { pc = 32; } continue;
    case 32:
      __pc = 32;
      s.push(0); pc = 33; continue;
    case 33:
      __pc = 33;
      return s.pop();
    case 34:
      __pc = 34;
      s.push(l0); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomMode","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;", s.pop())); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l2); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomMode","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;", s.pop())); pc = 38; continue;
    case 38:
      __pc = 38;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 41; } else { pc = 39; } continue;
    case 39:
      __pc = 39;
      s.push(0); pc = 40; continue;
    case 40:
      __pc = 40;
      return s.pop();
    case 41:
      __pc = 41;
      s.push(l0); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomScrolling","Z", s.pop())); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l2); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomScrolling","Z", s.pop())); pc = 45; continue;
    case 45:
      __pc = 45;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 48; } else { pc = 46; } continue;
    case 46:
      __pc = 46;
      s.push(0); pc = 47; continue;
    case 47:
      __pc = 47;
      return s.pop();
    case 48:
      __pc = 48;
      s.push(l0); pc = 49; continue;
    case 49:
      __pc = 49;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","extraKeyBinds","Z", s.pop())); pc = 50; continue;
    case 50:
      __pc = 50;
      s.push(l2); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","extraKeyBinds","Z", s.pop())); pc = 52; continue;
    case 52:
      __pc = 52;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 55; } else { pc = 53; } continue;
    case 53:
      __pc = 53;
      s.push(0); pc = 54; continue;
    case 54:
      __pc = 54;
      return s.pop();
    case 55:
      __pc = 55;
      s.push(l0); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomOverlay","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;", s.pop())); pc = 57; continue;
    case 57:
      __pc = 57;
      s.push(l2); pc = 58; continue;
    case 58:
      __pc = 58;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomOverlay","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;", s.pop())); pc = 59; continue;
    case 59:
      __pc = 59;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 62; } else { pc = 60; } continue;
    case 60:
      __pc = 60;
      s.push(0); pc = 61; continue;
    case 61:
      __pc = 61;
      return s.pop();
    case 62:
      __pc = 62;
      s.push(l0); pc = 63; continue;
    case 63:
      __pc = 63;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","spyglassDependency","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;", s.pop())); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(l2); pc = 65; continue;
    case 65:
      __pc = 65;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","spyglassDependency","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;", s.pop())); pc = 66; continue;
    case 66:
      __pc = 66;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 69; } else { pc = 67; } continue;
    case 67:
      __pc = 67;
      s.push(0); pc = 68; continue;
    case 68:
      __pc = 68;
      return s.pop();
    case 69:
      __pc = 69;
      s.push(1); pc = 70; continue;
    case 70:
      __pc = 70;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "write$Self$zoomify(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;Lkotlinx/serialization/encoding/CompositeEncoder;Lkotlinx/serialization/descriptors/SerialDescriptor;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
    l0 = __args[0];
    l1 = __args[1];
    l2 = __args[2];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","$childSerializers","[Lkotlin/Lazy;")); pc = 1; continue;
    case 1:
      __pc = 1;
      l3 = s.pop(); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l3); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(0); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/Lazy","getValue","()Ljava/lang/Object;", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.cast(s.pop(), "kotlinx/serialization/SerializationStrategy")); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","cinematicCamera","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;", s.pop())); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeSerializableElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ILkotlinx/serialization/SerializationStrategy;Ljava/lang/Object;)V", rv, av); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l1); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l2); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(1); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l0); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","reduceSensitivity","Z", s.pop())); pc = 18; continue;
    case 18:
      __pc = 18;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeBooleanElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;IZ)V", rv, av); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l1); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l2); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(2); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l3); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(2); pc = 24; continue;
    case 24:
      __pc = 24;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 25; continue;
    case 25:
      __pc = 25;
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/Lazy","getValue","()Ljava/lang/Object;", rv, [])); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.cast(s.pop(), "kotlinx/serialization/SerializationStrategy")); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l0); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomTransition","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;", s.pop())); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeSerializableElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ILkotlinx/serialization/SerializationStrategy;Ljava/lang/Object;)V", rv, av); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l1); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l2); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(3); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(l3); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(3); pc = 35; continue;
    case 35:
      __pc = 35;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 36; continue;
    case 36:
      __pc = 36;
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/Lazy","getValue","()Ljava/lang/Object;", rv, [])); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(__ctx.cast(s.pop(), "kotlinx/serialization/SerializationStrategy")); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(l0); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomMode","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;", s.pop())); pc = 40; continue;
    case 40:
      __pc = 40;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeSerializableElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ILkotlinx/serialization/SerializationStrategy;Ljava/lang/Object;)V", rv, av); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(l1); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(l2); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(4); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(l0); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomScrolling","Z", s.pop())); pc = 46; continue;
    case 46:
      __pc = 46;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeBooleanElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;IZ)V", rv, av); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(l1); pc = 48; continue;
    case 48:
      __pc = 48;
      s.push(l2); pc = 49; continue;
    case 49:
      __pc = 49;
      s.push(5); pc = 50; continue;
    case 50:
      __pc = 50;
      s.push(l0); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","extraKeyBinds","Z", s.pop())); pc = 52; continue;
    case 52:
      __pc = 52;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeBooleanElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;IZ)V", rv, av); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(l1); pc = 54; continue;
    case 54:
      __pc = 54;
      s.push(l2); pc = 55; continue;
    case 55:
      __pc = 55;
      s.push(6); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(l3); pc = 57; continue;
    case 57:
      __pc = 57;
      s.push(6); pc = 58; continue;
    case 58:
      __pc = 58;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 59; continue;
    case 59:
      __pc = 59;
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/Lazy","getValue","()Ljava/lang/Object;", rv, [])); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push(__ctx.cast(s.pop(), "kotlinx/serialization/SerializationStrategy")); pc = 61; continue;
    case 61:
      __pc = 61;
      s.push(l0); pc = 62; continue;
    case 62:
      __pc = 62;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","zoomOverlay","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;", s.pop())); pc = 63; continue;
    case 63:
      __pc = 63;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeSerializableElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ILkotlinx/serialization/SerializationStrategy;Ljava/lang/Object;)V", rv, av); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(l1); pc = 65; continue;
    case 65:
      __pc = 65;
      s.push(l2); pc = 66; continue;
    case 66:
      __pc = 66;
      s.push(7); pc = 67; continue;
    case 67:
      __pc = 67;
      s.push(l3); pc = 68; continue;
    case 68:
      __pc = 68;
      s.push(7); pc = 69; continue;
    case 69:
      __pc = 69;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 70; continue;
    case 70:
      __pc = 70;
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/Lazy","getValue","()Ljava/lang/Object;", rv, [])); pc = 71; continue;
    case 71:
      __pc = 71;
      s.push(__ctx.cast(s.pop(), "kotlinx/serialization/SerializationStrategy")); pc = 72; continue;
    case 72:
      __pc = 72;
      s.push(l0); pc = 73; continue;
    case 73:
      __pc = 73;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","spyglassDependency","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;", s.pop())); pc = 74; continue;
    case 74:
      __pc = 74;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeSerializableElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ILkotlinx/serialization/SerializationStrategy;Ljava/lang/Object;)V", rv, av); pc = 75; continue;
    case 75:
      __pc = 75;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$get$childSerializers$cp()[Lkotlin/Lazy;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","$childSerializers","[Lkotlin/Lazy;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features"].__fields = [{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Companion;"},{"name":"cinematicCamera","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$CinematicCameraState;"},{"name":"reduceSensitivity","descriptor":"Z"},{"name":"zoomTransition","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$TransitionMode;"},{"name":"zoomMode","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$ZoomMode;"},{"name":"zoomScrolling","descriptor":"Z"},{"name":"extraKeyBinds","descriptor":"Z"},{"name":"zoomOverlay","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$Overlay;"},{"name":"spyglassDependency","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$SpyglassDependency;"},{"name":"$childSerializers","descriptor":"[Lkotlin/Lazy;"}];
  defineClass("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks", {
    "<init>(ZZZZZ)V": function (__ctx, __self, __args) {
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
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","resetZoomWithMouse","Z",target, r); pc = 5; continue;
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
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","forgetZoomDivisor","Z",target, r); pc = 8; continue;
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
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","unbindConflictingKey","Z",target, r); pc = 11; continue;
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
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassTexture","Z",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l5); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassSounds","Z",target, r); pc = 17; continue;
    case 17:
      __pc = 17;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getResetZoomWithMouse()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","resetZoomWithMouse","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getResetZoomWithMouse$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getForgetZoomDivisor()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","forgetZoomDivisor","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getForgetZoomDivisor$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getUnbindConflictingKey()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","unbindConflictingKey","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getUnbindConflictingKey$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getUseSpyglassTexture()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassTexture","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getUseSpyglassTexture$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getUseSpyglassSounds()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassSounds","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getUseSpyglassSounds$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component1()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","resetZoomWithMouse","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component2()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","forgetZoomDivisor","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component3()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","unbindConflictingKey","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component4()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassTexture","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component5()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassSounds","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "copy(ZZZZZ)Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;": function (__ctx, __self, __args) {
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
      s.push(__ctx.newInstance("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks")); pc = 1; continue;
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
      s.push(l3); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l4); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l5); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","<init>","(ZZZZZ)V", rv, av); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "copy$default(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;ZZZZZILjava/lang/Object;)Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7;
    l0 = __args[0];
    l1 = __args[1];
    l2 = __args[2];
    l3 = __args[3];
    l4 = __args[4];
    l5 = __args[5];
    l6 = __args[6];
    l7 = __args[7];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l6); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); s.push(s.pop() & r); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r == 0) { pc = 7; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","resetZoomWithMouse","Z", s.pop())); pc = 6; continue;
    case 6:
      __pc = 6;
      l1 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l6); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(2); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); s.push(s.pop() & r); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); if (r == 0) { pc = 14; } else { pc = 11; } continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","forgetZoomDivisor","Z", s.pop())); pc = 13; continue;
    case 13:
      __pc = 13;
      l2 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l6); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(4); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop(); s.push(s.pop() & r); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop(); if (r == 0) { pc = 21; } else { pc = 18; } continue;
    case 18:
      __pc = 18;
      s.push(l0); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","unbindConflictingKey","Z", s.pop())); pc = 20; continue;
    case 20:
      __pc = 20;
      l3 = s.pop(); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l6); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(8); pc = 23; continue;
    case 23:
      __pc = 23;
      r = s.pop(); s.push(s.pop() & r); pc = 24; continue;
    case 24:
      __pc = 24;
      r = s.pop(); if (r == 0) { pc = 28; } else { pc = 25; } continue;
    case 25:
      __pc = 25;
      s.push(l0); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassTexture","Z", s.pop())); pc = 27; continue;
    case 27:
      __pc = 27;
      l4 = s.pop(); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l6); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(16); pc = 30; continue;
    case 30:
      __pc = 30;
      r = s.pop(); s.push(s.pop() & r); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop(); if (r == 0) { pc = 35; } else { pc = 32; } continue;
    case 32:
      __pc = 32;
      s.push(l0); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassSounds","Z", s.pop())); pc = 34; continue;
    case 34:
      __pc = 34;
      l5 = s.pop(); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l0); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l1); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(l2); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(l3); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(l4); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(l5); pc = 41; continue;
    case 41:
      __pc = 41;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","copy","(ZZZZZ)Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;", rv, av)); pc = 42; continue;
    case 42:
      __pc = 42;
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","resetZoomWithMouse","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","forgetZoomDivisor","Z", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","unbindConflictingKey","Z", s.pop())); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassTexture","Z", s.pop())); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassSounds","Z", s.pop())); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.unsupportedLambda("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks.toString:20")); pc = 11; continue;
    case 11:
      __pc = 11;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "hashCode()I": function (__ctx, __self, __args) {
    var l0, l1;
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","resetZoomWithMouse","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Boolean.hashCode") + ' needs the client internals');
    case 3:
      __pc = 3;
      l1 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(31); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); s.push(s.pop() * r); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","forgetZoomDivisor","Z", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Boolean.hashCode") + ' needs the client internals');
    case 10:
      __pc = 10;
      r = s.pop(); s.push(s.pop() + r); pc = 11; continue;
    case 11:
      __pc = 11;
      l1 = s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(31); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop(); s.push(s.pop() * r); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","unbindConflictingKey","Z", s.pop())); pc = 17; continue;
    case 17:
      __pc = 17;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Boolean.hashCode") + ' needs the client internals');
    case 18:
      __pc = 18;
      r = s.pop(); s.push(s.pop() + r); pc = 19; continue;
    case 19:
      __pc = 19;
      l1 = s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l1); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(31); pc = 22; continue;
    case 22:
      __pc = 22;
      r = s.pop(); s.push(s.pop() * r); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassTexture","Z", s.pop())); pc = 25; continue;
    case 25:
      __pc = 25;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Boolean.hashCode") + ' needs the client internals');
    case 26:
      __pc = 26;
      r = s.pop(); s.push(s.pop() + r); pc = 27; continue;
    case 27:
      __pc = 27;
      l1 = s.pop(); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l1); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(31); pc = 30; continue;
    case 30:
      __pc = 30;
      r = s.pop(); s.push(s.pop() * r); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l0); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassSounds","Z", s.pop())); pc = 33; continue;
    case 33:
      __pc = 33;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Boolean.hashCode") + ' needs the client internals');
    case 34:
      __pc = 34;
      r = s.pop(); s.push(s.pop() + r); pc = 35; continue;
    case 35:
      __pc = 35;
      l1 = s.pop(); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l1); pc = 37; continue;
    case 37:
      __pc = 37;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "equals(Ljava/lang/Object;)Z": function (__ctx, __self, __args) {
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
      r = s.pop(); var l = s.pop(); if (l != r) { pc = 5; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(1); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.isInstance(s.pop(), "dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks")); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); if (r != 0) { pc = 10; } else { pc = 8; } continue;
    case 8:
      __pc = 8;
      s.push(0); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks")); pc = 12; continue;
    case 12:
      __pc = 12;
      l2 = s.pop(); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","resetZoomWithMouse","Z", s.pop())); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l2); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","resetZoomWithMouse","Z", s.pop())); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 20; } else { pc = 18; } continue;
    case 18:
      __pc = 18;
      s.push(0); pc = 19; continue;
    case 19:
      __pc = 19;
      return s.pop();
    case 20:
      __pc = 20;
      s.push(l0); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","forgetZoomDivisor","Z", s.pop())); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l2); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","forgetZoomDivisor","Z", s.pop())); pc = 24; continue;
    case 24:
      __pc = 24;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 27; } else { pc = 25; } continue;
    case 25:
      __pc = 25;
      s.push(0); pc = 26; continue;
    case 26:
      __pc = 26;
      return s.pop();
    case 27:
      __pc = 27;
      s.push(l0); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","unbindConflictingKey","Z", s.pop())); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l2); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","unbindConflictingKey","Z", s.pop())); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 34; } else { pc = 32; } continue;
    case 32:
      __pc = 32;
      s.push(0); pc = 33; continue;
    case 33:
      __pc = 33;
      return s.pop();
    case 34:
      __pc = 34;
      s.push(l0); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassTexture","Z", s.pop())); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l2); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassTexture","Z", s.pop())); pc = 38; continue;
    case 38:
      __pc = 38;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 41; } else { pc = 39; } continue;
    case 39:
      __pc = 39;
      s.push(0); pc = 40; continue;
    case 40:
      __pc = 40;
      return s.pop();
    case 41:
      __pc = 41;
      s.push(l0); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassSounds","Z", s.pop())); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l2); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassSounds","Z", s.pop())); pc = 45; continue;
    case 45:
      __pc = 45;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 48; } else { pc = 46; } continue;
    case 46:
      __pc = 46;
      s.push(0); pc = 47; continue;
    case 47:
      __pc = 47;
      return s.pop();
    case 48:
      __pc = 48;
      s.push(1); pc = 49; continue;
    case 49:
      __pc = 49;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "write$Self$zoomify(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;Lkotlinx/serialization/encoding/CompositeEncoder;Lkotlinx/serialization/descriptors/SerialDescriptor;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l2); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","resetZoomWithMouse","Z", s.pop())); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeBooleanElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;IZ)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(1); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","forgetZoomDivisor","Z", s.pop())); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeBooleanElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;IZ)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l2); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(2); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","unbindConflictingKey","Z", s.pop())); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeBooleanElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;IZ)V", rv, av); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l1); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l2); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(3); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l0); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassTexture","Z", s.pop())); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeBooleanElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;IZ)V", rv, av); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l1); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l2); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(4); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l0); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","useSpyglassSounds","Z", s.pop())); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeBooleanElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;IZ)V", rv, av); pc = 30; continue;
    case 30:
      __pc = 30;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks"].__fields = [{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks$Companion;"},{"name":"resetZoomWithMouse","descriptor":"Z"},{"name":"forgetZoomDivisor","descriptor":"Z"},{"name":"unbindConflictingKey","descriptor":"Z"},{"name":"useSpyglassTexture","descriptor":"Z"},{"name":"useSpyglassSounds","descriptor":"Z"}];
  defineClass("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values", {
    "<init>(DDDJJDDDD)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18;
    l0 = __self;
    l1 = __args[0];
    l3 = __args[1];
    l5 = __args[2];
    l7 = __args[3];
    l9 = __args[4];
    l11 = __args[5];
    l13 = __args[6];
    l15 = __args[7];
    l17 = __args[8];
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
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","zoomDivisor","D",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l3); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minZoomDivisor","D",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l5); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxZoomDivisor","D",target, r); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l7); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","upperScrollSteps","J",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l9); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","lowerScrollSteps","J",target, r); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l11); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","smoothMultiplier","D",target, r); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l0); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l13); pc = 22; continue;
    case 22:
      __pc = 22;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","cinematicMultiplier","D",target, r); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l15); pc = 25; continue;
    case 25:
      __pc = 25;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minLinearStep","D",target, r); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l0); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l17); pc = 28; continue;
    case 28:
      __pc = 28;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxLinearSteps","D",target, r); pc = 29; continue;
    case 29:
      __pc = 29;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomDivisor()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","zoomDivisor","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getZoomDivisor$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMinZoomDivisor()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minZoomDivisor","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMinZoomDivisor$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMaxZoomDivisor()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxZoomDivisor","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMaxZoomDivisor$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getUpperScrollSteps()J": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","upperScrollSteps","J", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getUpperScrollSteps$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getLowerScrollSteps()J": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","lowerScrollSteps","J", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getLowerScrollSteps$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSmoothMultiplier()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","smoothMultiplier","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSmoothMultiplier$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getCinematicMultiplier()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","cinematicMultiplier","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getCinematicMultiplier$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMinLinearStep()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minLinearStep","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMinLinearStep$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMaxLinearSteps()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxLinearSteps","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMaxLinearSteps$annotations()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component1()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","zoomDivisor","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component2()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minZoomDivisor","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component3()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxZoomDivisor","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component4()J": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","upperScrollSteps","J", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component5()J": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","lowerScrollSteps","J", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component6()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","smoothMultiplier","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component7()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","cinematicMultiplier","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component8()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minLinearStep","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component9()D": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxLinearSteps","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "copy(DDDJJDDDD)Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18;
    l0 = __self;
    l1 = __args[0];
    l3 = __args[1];
    l5 = __args[2];
    l7 = __args[3];
    l9 = __args[4];
    l11 = __args[5];
    l13 = __args[6];
    l15 = __args[7];
    l17 = __args[8];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l3); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l5); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l7); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l9); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l11); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l13); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l15); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l17); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(9); for (var ai = 8; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","<init>","(DDDJJDDDD)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "copy$default(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;DDDJJDDDDILjava/lang/Object;)Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19, l20;
    l0 = __args[0];
    l1 = __args[1];
    l3 = __args[2];
    l5 = __args[3];
    l7 = __args[4];
    l9 = __args[5];
    l11 = __args[6];
    l13 = __args[7];
    l15 = __args[8];
    l17 = __args[9];
    l19 = __args[10];
    l20 = __args[11];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l19); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); s.push(s.pop() & r); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r == 0) { pc = 7; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","zoomDivisor","D", s.pop())); pc = 6; continue;
    case 6:
      __pc = 6;
      l1 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l19); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(2); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); s.push(s.pop() & r); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); if (r == 0) { pc = 14; } else { pc = 11; } continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minZoomDivisor","D", s.pop())); pc = 13; continue;
    case 13:
      __pc = 13;
      l3 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l19); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(4); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop(); s.push(s.pop() & r); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop(); if (r == 0) { pc = 21; } else { pc = 18; } continue;
    case 18:
      __pc = 18;
      s.push(l0); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxZoomDivisor","D", s.pop())); pc = 20; continue;
    case 20:
      __pc = 20;
      l5 = s.pop(); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l19); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(8); pc = 23; continue;
    case 23:
      __pc = 23;
      r = s.pop(); s.push(s.pop() & r); pc = 24; continue;
    case 24:
      __pc = 24;
      r = s.pop(); if (r == 0) { pc = 28; } else { pc = 25; } continue;
    case 25:
      __pc = 25;
      s.push(l0); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","upperScrollSteps","J", s.pop())); pc = 27; continue;
    case 27:
      __pc = 27;
      l7 = s.pop(); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l19); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(16); pc = 30; continue;
    case 30:
      __pc = 30;
      r = s.pop(); s.push(s.pop() & r); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop(); if (r == 0) { pc = 35; } else { pc = 32; } continue;
    case 32:
      __pc = 32;
      s.push(l0); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","lowerScrollSteps","J", s.pop())); pc = 34; continue;
    case 34:
      __pc = 34;
      l9 = s.pop(); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l19); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(32); pc = 37; continue;
    case 37:
      __pc = 37;
      r = s.pop(); s.push(s.pop() & r); pc = 38; continue;
    case 38:
      __pc = 38;
      r = s.pop(); if (r == 0) { pc = 42; } else { pc = 39; } continue;
    case 39:
      __pc = 39;
      s.push(l0); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","smoothMultiplier","D", s.pop())); pc = 41; continue;
    case 41:
      __pc = 41;
      l11 = s.pop(); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(l19); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(64); pc = 44; continue;
    case 44:
      __pc = 44;
      r = s.pop(); s.push(s.pop() & r); pc = 45; continue;
    case 45:
      __pc = 45;
      r = s.pop(); if (r == 0) { pc = 49; } else { pc = 46; } continue;
    case 46:
      __pc = 46;
      s.push(l0); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","cinematicMultiplier","D", s.pop())); pc = 48; continue;
    case 48:
      __pc = 48;
      l13 = s.pop(); pc = 49; continue;
    case 49:
      __pc = 49;
      s.push(l19); pc = 50; continue;
    case 50:
      __pc = 50;
      s.push(128); pc = 51; continue;
    case 51:
      __pc = 51;
      r = s.pop(); s.push(s.pop() & r); pc = 52; continue;
    case 52:
      __pc = 52;
      r = s.pop(); if (r == 0) { pc = 56; } else { pc = 53; } continue;
    case 53:
      __pc = 53;
      s.push(l0); pc = 54; continue;
    case 54:
      __pc = 54;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minLinearStep","D", s.pop())); pc = 55; continue;
    case 55:
      __pc = 55;
      l15 = s.pop(); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(l19); pc = 57; continue;
    case 57:
      __pc = 57;
      s.push(256); pc = 58; continue;
    case 58:
      __pc = 58;
      r = s.pop(); s.push(s.pop() & r); pc = 59; continue;
    case 59:
      __pc = 59;
      r = s.pop(); if (r == 0) { pc = 63; } else { pc = 60; } continue;
    case 60:
      __pc = 60;
      s.push(l0); pc = 61; continue;
    case 61:
      __pc = 61;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxLinearSteps","D", s.pop())); pc = 62; continue;
    case 62:
      __pc = 62;
      l17 = s.pop(); pc = 63; continue;
    case 63:
      __pc = 63;
      s.push(l0); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(l1); pc = 65; continue;
    case 65:
      __pc = 65;
      s.push(l3); pc = 66; continue;
    case 66:
      __pc = 66;
      s.push(l5); pc = 67; continue;
    case 67:
      __pc = 67;
      s.push(l7); pc = 68; continue;
    case 68:
      __pc = 68;
      s.push(l9); pc = 69; continue;
    case 69:
      __pc = 69;
      s.push(l11); pc = 70; continue;
    case 70:
      __pc = 70;
      s.push(l13); pc = 71; continue;
    case 71:
      __pc = 71;
      s.push(l15); pc = 72; continue;
    case 72:
      __pc = 72;
      s.push(l17); pc = 73; continue;
    case 73:
      __pc = 73;
      var av = new Array(9); for (var ai = 8; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","copy","(DDDJJDDDD)Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;", rv, av)); pc = 74; continue;
    case 74:
      __pc = 74;
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","zoomDivisor","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minZoomDivisor","D", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxZoomDivisor","D", s.pop())); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","upperScrollSteps","J", s.pop())); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","lowerScrollSteps","J", s.pop())); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","smoothMultiplier","D", s.pop())); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","cinematicMultiplier","D", s.pop())); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minLinearStep","D", s.pop())); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l0); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxLinearSteps","D", s.pop())); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.unsupportedLambda("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values.toString:36")); pc = 19; continue;
    case 19:
      __pc = 19;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "hashCode()I": function (__ctx, __self, __args) {
    var l0, l1;
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","zoomDivisor","D", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Double.hashCode") + ' needs the client internals');
    case 3:
      __pc = 3;
      l1 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(31); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); s.push(s.pop() * r); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minZoomDivisor","D", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Double.hashCode") + ' needs the client internals');
    case 10:
      __pc = 10;
      r = s.pop(); s.push(s.pop() + r); pc = 11; continue;
    case 11:
      __pc = 11;
      l1 = s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(31); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop(); s.push(s.pop() * r); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxZoomDivisor","D", s.pop())); pc = 17; continue;
    case 17:
      __pc = 17;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Double.hashCode") + ' needs the client internals');
    case 18:
      __pc = 18;
      r = s.pop(); s.push(s.pop() + r); pc = 19; continue;
    case 19:
      __pc = 19;
      l1 = s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l1); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(31); pc = 22; continue;
    case 22:
      __pc = 22;
      r = s.pop(); s.push(s.pop() * r); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","upperScrollSteps","J", s.pop())); pc = 25; continue;
    case 25:
      __pc = 25;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Long.hashCode") + ' needs the client internals');
    case 26:
      __pc = 26;
      r = s.pop(); s.push(s.pop() + r); pc = 27; continue;
    case 27:
      __pc = 27;
      l1 = s.pop(); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l1); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(31); pc = 30; continue;
    case 30:
      __pc = 30;
      r = s.pop(); s.push(s.pop() * r); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l0); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","lowerScrollSteps","J", s.pop())); pc = 33; continue;
    case 33:
      __pc = 33;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Long.hashCode") + ' needs the client internals');
    case 34:
      __pc = 34;
      r = s.pop(); s.push(s.pop() + r); pc = 35; continue;
    case 35:
      __pc = 35;
      l1 = s.pop(); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l1); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(31); pc = 38; continue;
    case 38:
      __pc = 38;
      r = s.pop(); s.push(s.pop() * r); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(l0); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","smoothMultiplier","D", s.pop())); pc = 41; continue;
    case 41:
      __pc = 41;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Double.hashCode") + ' needs the client internals');
    case 42:
      __pc = 42;
      r = s.pop(); s.push(s.pop() + r); pc = 43; continue;
    case 43:
      __pc = 43;
      l1 = s.pop(); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(l1); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(31); pc = 46; continue;
    case 46:
      __pc = 46;
      r = s.pop(); s.push(s.pop() * r); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(l0); pc = 48; continue;
    case 48:
      __pc = 48;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","cinematicMultiplier","D", s.pop())); pc = 49; continue;
    case 49:
      __pc = 49;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Double.hashCode") + ' needs the client internals');
    case 50:
      __pc = 50;
      r = s.pop(); s.push(s.pop() + r); pc = 51; continue;
    case 51:
      __pc = 51;
      l1 = s.pop(); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push(l1); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(31); pc = 54; continue;
    case 54:
      __pc = 54;
      r = s.pop(); s.push(s.pop() * r); pc = 55; continue;
    case 55:
      __pc = 55;
      s.push(l0); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minLinearStep","D", s.pop())); pc = 57; continue;
    case 57:
      __pc = 57;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Double.hashCode") + ' needs the client internals');
    case 58:
      __pc = 58;
      r = s.pop(); s.push(s.pop() + r); pc = 59; continue;
    case 59:
      __pc = 59;
      l1 = s.pop(); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push(l1); pc = 61; continue;
    case 61:
      __pc = 61;
      s.push(31); pc = 62; continue;
    case 62:
      __pc = 62;
      r = s.pop(); s.push(s.pop() * r); pc = 63; continue;
    case 63:
      __pc = 63;
      s.push(l0); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxLinearSteps","D", s.pop())); pc = 65; continue;
    case 65:
      __pc = 65;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Double.hashCode") + ' needs the client internals');
    case 66:
      __pc = 66;
      r = s.pop(); s.push(s.pop() + r); pc = 67; continue;
    case 67:
      __pc = 67;
      l1 = s.pop(); pc = 68; continue;
    case 68:
      __pc = 68;
      s.push(l1); pc = 69; continue;
    case 69:
      __pc = 69;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "equals(Ljava/lang/Object;)Z": function (__ctx, __self, __args) {
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
      r = s.pop(); var l = s.pop(); if (l != r) { pc = 5; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(1); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.isInstance(s.pop(), "dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values")); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); if (r != 0) { pc = 10; } else { pc = 8; } continue;
    case 8:
      __pc = 8;
      s.push(0); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values")); pc = 12; continue;
    case 12:
      __pc = 12;
      l2 = s.pop(); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","zoomDivisor","D", s.pop())); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l2); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","zoomDivisor","D", s.pop())); pc = 17; continue;
    case 17:
      __pc = 17;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Double.compare") + ' needs the client internals');
    case 18:
      __pc = 18;
      r = s.pop(); if (r == 0) { pc = 21; } else { pc = 19; } continue;
    case 19:
      __pc = 19;
      s.push(0); pc = 20; continue;
    case 20:
      __pc = 20;
      return s.pop();
    case 21:
      __pc = 21;
      s.push(l0); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minZoomDivisor","D", s.pop())); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l2); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minZoomDivisor","D", s.pop())); pc = 25; continue;
    case 25:
      __pc = 25;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Double.compare") + ' needs the client internals');
    case 26:
      __pc = 26;
      r = s.pop(); if (r == 0) { pc = 29; } else { pc = 27; } continue;
    case 27:
      __pc = 27;
      s.push(0); pc = 28; continue;
    case 28:
      __pc = 28;
      return s.pop();
    case 29:
      __pc = 29;
      s.push(l0); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxZoomDivisor","D", s.pop())); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l2); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxZoomDivisor","D", s.pop())); pc = 33; continue;
    case 33:
      __pc = 33;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Double.compare") + ' needs the client internals');
    case 34:
      __pc = 34;
      r = s.pop(); if (r == 0) { pc = 37; } else { pc = 35; } continue;
    case 35:
      __pc = 35;
      s.push(0); pc = 36; continue;
    case 36:
      __pc = 36;
      return s.pop();
    case 37:
      __pc = 37;
      s.push(l0); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","upperScrollSteps","J", s.pop())); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(l2); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","upperScrollSteps","J", s.pop())); pc = 41; continue;
    case 41:
      __pc = 41;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 42; continue;
    case 42:
      __pc = 42;
      r = s.pop(); if (r == 0) { pc = 45; } else { pc = 43; } continue;
    case 43:
      __pc = 43;
      s.push(0); pc = 44; continue;
    case 44:
      __pc = 44;
      return s.pop();
    case 45:
      __pc = 45;
      s.push(l0); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","lowerScrollSteps","J", s.pop())); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(l2); pc = 48; continue;
    case 48:
      __pc = 48;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","lowerScrollSteps","J", s.pop())); pc = 49; continue;
    case 49:
      __pc = 49;
      r = s.pop(); var q = s.pop(); s.push(q > r ? 1 : (q < r ? -1 : 0)); pc = 50; continue;
    case 50:
      __pc = 50;
      r = s.pop(); if (r == 0) { pc = 53; } else { pc = 51; } continue;
    case 51:
      __pc = 51;
      s.push(0); pc = 52; continue;
    case 52:
      __pc = 52;
      return s.pop();
    case 53:
      __pc = 53;
      s.push(l0); pc = 54; continue;
    case 54:
      __pc = 54;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","smoothMultiplier","D", s.pop())); pc = 55; continue;
    case 55:
      __pc = 55;
      s.push(l2); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","smoothMultiplier","D", s.pop())); pc = 57; continue;
    case 57:
      __pc = 57;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Double.compare") + ' needs the client internals');
    case 58:
      __pc = 58;
      r = s.pop(); if (r == 0) { pc = 61; } else { pc = 59; } continue;
    case 59:
      __pc = 59;
      s.push(0); pc = 60; continue;
    case 60:
      __pc = 60;
      return s.pop();
    case 61:
      __pc = 61;
      s.push(l0); pc = 62; continue;
    case 62:
      __pc = 62;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","cinematicMultiplier","D", s.pop())); pc = 63; continue;
    case 63:
      __pc = 63;
      s.push(l2); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","cinematicMultiplier","D", s.pop())); pc = 65; continue;
    case 65:
      __pc = 65;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Double.compare") + ' needs the client internals');
    case 66:
      __pc = 66;
      r = s.pop(); if (r == 0) { pc = 69; } else { pc = 67; } continue;
    case 67:
      __pc = 67;
      s.push(0); pc = 68; continue;
    case 68:
      __pc = 68;
      return s.pop();
    case 69:
      __pc = 69;
      s.push(l0); pc = 70; continue;
    case 70:
      __pc = 70;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minLinearStep","D", s.pop())); pc = 71; continue;
    case 71:
      __pc = 71;
      s.push(l2); pc = 72; continue;
    case 72:
      __pc = 72;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minLinearStep","D", s.pop())); pc = 73; continue;
    case 73:
      __pc = 73;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Double.compare") + ' needs the client internals');
    case 74:
      __pc = 74;
      r = s.pop(); if (r == 0) { pc = 77; } else { pc = 75; } continue;
    case 75:
      __pc = 75;
      s.push(0); pc = 76; continue;
    case 76:
      __pc = 76;
      return s.pop();
    case 77:
      __pc = 77;
      s.push(l0); pc = 78; continue;
    case 78:
      __pc = 78;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxLinearSteps","D", s.pop())); pc = 79; continue;
    case 79:
      __pc = 79;
      s.push(l2); pc = 80; continue;
    case 80:
      __pc = 80;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxLinearSteps","D", s.pop())); pc = 81; continue;
    case 81:
      __pc = 81;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Double.compare") + ' needs the client internals');
    case 82:
      __pc = 82;
      r = s.pop(); if (r == 0) { pc = 85; } else { pc = 83; } continue;
    case 83:
      __pc = 83;
      s.push(0); pc = 84; continue;
    case 84:
      __pc = 84;
      return s.pop();
    case 85:
      __pc = 85;
      s.push(1); pc = 86; continue;
    case 86:
      __pc = 86;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "write$Self$zoomify(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;Lkotlinx/serialization/encoding/CompositeEncoder;Lkotlinx/serialization/descriptors/SerialDescriptor;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l2); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","zoomDivisor","D", s.pop())); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeDoubleElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ID)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(1); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minZoomDivisor","D", s.pop())); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeDoubleElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ID)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l2); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(2); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxZoomDivisor","D", s.pop())); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeDoubleElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ID)V", rv, av); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l1); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l2); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(3); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l0); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","upperScrollSteps","J", s.pop())); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeLongElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;IJ)V", rv, av); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l1); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l2); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(4); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l0); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","lowerScrollSteps","J", s.pop())); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeLongElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;IJ)V", rv, av); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l1); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l2); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(5); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(l0); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","smoothMultiplier","D", s.pop())); pc = 35; continue;
    case 35:
      __pc = 35;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeDoubleElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ID)V", rv, av); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l1); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(l2); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(6); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(l0); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","cinematicMultiplier","D", s.pop())); pc = 41; continue;
    case 41:
      __pc = 41;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeDoubleElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ID)V", rv, av); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(l1); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l2); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(7); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(l0); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","minLinearStep","D", s.pop())); pc = 47; continue;
    case 47:
      __pc = 47;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeDoubleElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ID)V", rv, av); pc = 48; continue;
    case 48:
      __pc = 48;
      s.push(l1); pc = 49; continue;
    case 49:
      __pc = 49;
      s.push(l2); pc = 50; continue;
    case 50:
      __pc = 50;
      s.push(8); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(l0); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","maxLinearSteps","D", s.pop())); pc = 53; continue;
    case 53:
      __pc = 53;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeDoubleElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ID)V", rv, av); pc = 54; continue;
    case 54:
      __pc = 54;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values"].__fields = [{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values$Companion;"},{"name":"zoomDivisor","descriptor":"D"},{"name":"minZoomDivisor","descriptor":"D"},{"name":"maxZoomDivisor","descriptor":"D"},{"name":"upperScrollSteps","descriptor":"J"},{"name":"lowerScrollSteps","descriptor":"J"},{"name":"smoothMultiplier","descriptor":"D"},{"name":"cinematicMultiplier","descriptor":"D"},{"name":"minLinearStep","descriptor":"D"},{"name":"maxLinearSteps","descriptor":"D"}];
  defineClass("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig", {
    "<init>(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("features"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("values"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l3); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("tweaks"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","features","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l2); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","values","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;",target, r); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l3); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","tweaks","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;",target, r); pc = 20; continue;
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getFeatures()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","features","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getValues()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","values","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getTweaks()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","tweaks","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component1()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","features","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component2()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","values","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "component3()Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","tweaks","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "copy(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;)Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig;": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("features"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("values"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l3); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("tweaks"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.newInstance("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig")); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(s[s.length - 1]); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l1); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l2); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l3); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","<init>","(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;)V", rv, av); pc = 15; continue;
    case 15:
      __pc = 15;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "copy$default(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;ILjava/lang/Object;)Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5;
    l0 = __args[0];
    l1 = __args[1];
    l2 = __args[2];
    l3 = __args[3];
    l4 = __args[4];
    l5 = __args[5];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l4); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); s.push(s.pop() & r); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r == 0) { pc = 7; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","features","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;", s.pop())); pc = 6; continue;
    case 6:
      __pc = 6;
      l1 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l4); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(2); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); s.push(s.pop() & r); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); if (r == 0) { pc = 14; } else { pc = 11; } continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","values","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;", s.pop())); pc = 13; continue;
    case 13:
      __pc = 13;
      l2 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l4); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(4); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop(); s.push(s.pop() & r); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop(); if (r == 0) { pc = 21; } else { pc = 18; } continue;
    case 18:
      __pc = 18;
      s.push(l0); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","tweaks","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;", s.pop())); pc = 20; continue;
    case 20:
      __pc = 20;
      l3 = s.pop(); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l0); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l1); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l2); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l3); pc = 25; continue;
    case 25:
      __pc = 25;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","copy","(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;)Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig;", rv, av)); pc = 26; continue;
    case 26:
      __pc = 26;
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","features","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","values","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","tweaks","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;", s.pop())); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.unsupportedLambda("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig.toString:12")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "hashCode()I": function (__ctx, __self, __args) {
    var l0, l1;
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
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","features","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features","hashCode","()I", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      l1 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(31); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); s.push(s.pop() * r); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","values","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values","hashCode","()I", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); s.push(s.pop() + r); pc = 11; continue;
    case 11:
      __pc = 11;
      l1 = s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(31); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop(); s.push(s.pop() * r); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","tweaks","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;", s.pop())); pc = 17; continue;
    case 17:
      __pc = 17;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks","hashCode","()I", rv, [])); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop(); s.push(s.pop() + r); pc = 19; continue;
    case 19:
      __pc = 19;
      l1 = s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l1); pc = 21; continue;
    case 21:
      __pc = 21;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "equals(Ljava/lang/Object;)Z": function (__ctx, __self, __args) {
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
      r = s.pop(); var l = s.pop(); if (l != r) { pc = 5; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(1); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.isInstance(s.pop(), "dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig")); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); if (r != 0) { pc = 10; } else { pc = 8; } continue;
    case 8:
      __pc = 8;
      s.push(0); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig")); pc = 12; continue;
    case 12:
      __pc = 12;
      l2 = s.pop(); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","features","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;", s.pop())); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l2); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","features","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;", s.pop())); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","areEqual","(Ljava/lang/Object;Ljava/lang/Object;)Z", av)); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop(); if (r != 0) { pc = 21; } else { pc = 19; } continue;
    case 19:
      __pc = 19;
      s.push(0); pc = 20; continue;
    case 20:
      __pc = 20;
      return s.pop();
    case 21:
      __pc = 21;
      s.push(l0); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","values","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;", s.pop())); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l2); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","values","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;", s.pop())); pc = 25; continue;
    case 25:
      __pc = 25;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","areEqual","(Ljava/lang/Object;Ljava/lang/Object;)Z", av)); pc = 26; continue;
    case 26:
      __pc = 26;
      r = s.pop(); if (r != 0) { pc = 29; } else { pc = 27; } continue;
    case 27:
      __pc = 27;
      s.push(0); pc = 28; continue;
    case 28:
      __pc = 28;
      return s.pop();
    case 29:
      __pc = 29;
      s.push(l0); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","tweaks","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;", s.pop())); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l2); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","tweaks","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;", s.pop())); pc = 33; continue;
    case 33:
      __pc = 33;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","areEqual","(Ljava/lang/Object;Ljava/lang/Object;)Z", av)); pc = 34; continue;
    case 34:
      __pc = 34;
      r = s.pop(); if (r != 0) { pc = 37; } else { pc = 35; } continue;
    case 35:
      __pc = 35;
      s.push(0); pc = 36; continue;
    case 36:
      __pc = 36;
      return s.pop();
    case 37:
      __pc = 37;
      s.push(1); pc = 38; continue;
    case 38:
      __pc = 38;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "write$Self$zoomify(Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig;Lkotlinx/serialization/encoding/CompositeEncoder;Lkotlinx/serialization/descriptors/SerialDescriptor;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l2); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$$serializer","INSTANCE","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features$$serializer;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "kotlinx/serialization/SerializationStrategy")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","features","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;", s.pop())); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeSerializableElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ILkotlinx/serialization/SerializationStrategy;Ljava/lang/Object;)V", rv, av); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l1); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l2); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values$$serializer","INSTANCE","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values$$serializer;")); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.cast(s.pop(), "kotlinx/serialization/SerializationStrategy")); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","values","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;", s.pop())); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeSerializableElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ILkotlinx/serialization/SerializationStrategy;Ljava/lang/Object;)V", rv, av); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l1); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l2); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(2); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks$$serializer","INSTANCE","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks$$serializer;")); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.cast(s.pop(), "kotlinx/serialization/SerializationStrategy")); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l0); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.getField("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig","tweaks","Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;", s.pop())); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlinx/serialization/encoding/CompositeEncoder","encodeSerializableElement","(Lkotlinx/serialization/descriptors/SerialDescriptor;ILkotlinx/serialization/SerializationStrategy;Ljava/lang/Object;)V", rv, av); pc = 24; continue;
    case 24:
      __pc = 24;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig"].__fields = [{"name":"Companion","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Companion;"},{"name":"features","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Features;"},{"name":"values","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Values;"},{"name":"tweaks","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator$OkZoomerConfig$Tweaks;"}];
  defineClass("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator", {
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
    "getName()Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator","name","Lnet/minecraft/class_2561;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isMigrationAvailable()Z": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator","file","Ljava/nio/file/Path;")); pc = 1; continue;
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
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator"].__fields = [{"name":"INSTANCE","descriptor":"Ldev/isxander/zoomify/config/migrator/impl/OkZoomerMigrator;"},{"name":"file","descriptor":"Ljava/nio/file/Path;"},{"name":"toml","descriptor":"Lcom/akuleshov7/ktoml/Toml;"},{"name":"name","descriptor":"Lnet/minecraft/class_2561;"}];
  defineClass("dev/isxander/zoomify/integrations/ControlifyIntegration", {
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
    "onControllersDiscovered(Ldev/isxander/controlify/api/ControlifyApi;)V": function (__ctx, __self, __args) {
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
      s.push("controlify"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onControlifyInit(Ldev/isxander/controlify/api/entrypoint/InitContext;)V": function (__ctx, __self, __args) {
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
      s.push("context"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/controlify/api/event/ControlifyEvents","LOOK_INPUT_MODIFIER","Ldev/isxander/controlify/platform/EventHandler;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/integrations/ControlifyIntegration","onControlifyInit$lambda$0","(Ldev/isxander/controlify/api/ingameinput/LookInputModifier;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/controlify/platform/EventHandler","register","(Ldev/isxander/controlify/platform/EventHandler$Callback;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onControlifyPreInit(Ldev/isxander/controlify/api/entrypoint/PreInitContext;)V": function (__ctx, __self, __args) {
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
      s.push("context"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onControlifyInit$lambda$0(Ldev/isxander/controlify/api/ingameinput/LookInputModifier;)V": function (__ctx, __self, __args) {
    var l0, l1;
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
      s.push(__ctx.invoke("dev/isxander/controlify/api/ingameinput/LookInputModifier","lookInput","()Lorg/joml/Vector2f;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      l1 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("org/joml/Vector2f","x","F", s.pop())); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getRelativeSensitivity","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Number","doubleValue","()D", rv, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(100); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); s.push(s.pop() / r); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(1); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","INSTANCE","Ldev/isxander/zoomify/Zoomify;")); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/Zoomify","getPreviousZoomDivisor","()D", rv, [])); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/util/Mth","lerp","(DDD)D", av)); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop(); s.push(Number(r)); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop(); s.push(s.pop() / r); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("org/joml/Vector2f","x","F",target, r); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l0); pc = 21; continue;
    case 21:
      __pc = 21;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/controlify/api/ingameinput/LookInputModifier","lookInput","()Lorg/joml/Vector2f;", rv, [])); pc = 22; continue;
    case 22:
      __pc = 22;
      l1 = s.pop(); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l1); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l1); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(__ctx.getField("org/joml/Vector2f","y","F", s.pop())); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 27; continue;
    case 27:
      __pc = 27;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getRelativeSensitivity","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 28; continue;
    case 28:
      __pc = 28;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 30; continue;
    case 30:
      __pc = 30;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Number","doubleValue","()D", rv, [])); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(100); pc = 32; continue;
    case 32:
      __pc = 32;
      r = s.pop(); s.push(s.pop() / r); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(1); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","INSTANCE","Ldev/isxander/zoomify/Zoomify;")); pc = 35; continue;
    case 35:
      __pc = 35;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/Zoomify","getPreviousZoomDivisor","()D", rv, [])); pc = 36; continue;
    case 36:
      __pc = 36;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/util/Mth","lerp","(DDD)D", av)); pc = 37; continue;
    case 37:
      __pc = 37;
      r = s.pop(); s.push(Number(r)); pc = 38; continue;
    case 38:
      __pc = 38;
      r = s.pop(); s.push(s.pop() / r); pc = 39; continue;
    case 39:
      __pc = 39;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("org/joml/Vector2f","y","F",target, r); pc = 40; continue;
    case 40:
      __pc = 40;
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
      s.push(__ctx.newInstance("dev/isxander/zoomify/integrations/ControlifyIntegration")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/integrations/ControlifyIntegration","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/integrations/ControlifyIntegration","INSTANCE","Ldev/isxander/zoomify/integrations/ControlifyIntegration;",r); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/integrations/ControlifyIntegration"].__fields = [{"name":"INSTANCE","descriptor":"Ldev/isxander/zoomify/integrations/ControlifyIntegration;"}];
  defineClass("dev/isxander/zoomify/integrations/ModMenuIntegration", {
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
      s.push(__ctx.newInstance("dev/isxander/zoomify/integrations/ModMenuIntegration")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/integrations/ModMenuIntegration","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      __ctx.putStatic("dev/isxander/zoomify/integrations/ModMenuIntegration","INSTANCE","Ldev/isxander/zoomify/integrations/ModMenuIntegration;",r); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/integrations/ModMenuIntegration"].__fields = [{"name":"INSTANCE","descriptor":"Ldev/isxander/zoomify/integrations/ModMenuIntegration;"}];
  defineClass("dev/isxander/zoomify/mixins/spyglass/AbstractClientPlayerEntityMixin", {
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
    "modifySpyglassFovMultiplier(F)F": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getSpyglassBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/config/v3/ConfigEntry","get","()Ljava/lang/Object;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SpyglassBehaviour","COMBINE","Ldev/isxander/zoomify/config/SpyglassBehaviour;")); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 7; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push(1); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/mixins/spyglass/AbstractClientPlayerEntityMixin"].__fields = [];
  defineClass("dev/isxander/zoomify/mixins/spyglass/SpyglassItemMixin", {
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
    "shouldPlaySpyglassSound(Lnet/minecraft/class_1657;Lnet/minecraft/class_3414;FF)Z": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    l4 = __args[3];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getSpyglassSoundBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/config/v3/ConfigEntry","get","()Ljava/lang/Object;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SoundBehaviour","NEVER","Ldev/isxander/zoomify/config/SoundBehaviour;")); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); var l = s.pop(); if (l != r) { pc = 7; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push(0); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getSpyglassSoundBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/config/v3/ConfigEntry","get","()Ljava/lang/Object;", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SoundBehaviour","WITH_OVERLAY","Ldev/isxander/zoomify/config/SoundBehaviour;")); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); var l = s.pop(); if (l != r) { pc = 19; } else { pc = 12; } continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 13; continue;
    case 13:
      __pc = 13;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getSpyglassOverlayVisibility","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 14; continue;
    case 14:
      __pc = 14;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/config/v3/ConfigEntry","get","()Ljava/lang/Object;", rv, [])); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/OverlayVisibility","NEVER","Ldev/isxander/zoomify/config/OverlayVisibility;")); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop(); var l = s.pop(); if (l != r) { pc = 19; } else { pc = 17; } continue;
    case 17:
      __pc = 17;
      s.push(0); pc = 18; continue;
    case 18:
      __pc = 18;
      return s.pop();
    case 19:
      __pc = 19;
      s.push(1); pc = 20; continue;
    case 20:
      __pc = 20;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/mixins/spyglass/SpyglassItemMixin"].__fields = [];
  defineClass("dev/isxander/zoomify/mixins/zoom/GameRendererMixin", {
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
    "modifyFovWithZoom(FF)F": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l2); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/Zoomify","getZoomDivisor","(F)F", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); s.push(s.pop() / r); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "modifyBobbingIntensity(F)F": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getRelativeViewBobbing","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/config/v3/ConfigEntry","get","()Ljava/lang/Object;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "java/lang/Boolean")); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Boolean","booleanValue","()Z", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r != 0) { pc = 8; } else { pc = 6; } continue;
    case 6:
      __pc = 6;
      s.push(l1); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    case 8:
      __pc = 8;
      s.push(l1); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); s.push(Number(r)); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(0.2); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(1); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","INSTANCE","Ldev/isxander/zoomify/Zoomify;")); pc = 13; continue;
    case 13:
      __pc = 13;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/Zoomify","getPreviousZoomDivisor","()D", rv, [])); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/util/Mth","lerp","(DDD)D", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop(); s.push(s.pop() / r); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop(); s.push(Number(r)); pc = 17; continue;
    case 17:
      __pc = 17;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "keepHandFov(FF)F": function (__ctx, __self, __args) {
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
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getAffectHandFov","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/config/v3/ConfigEntry","get","()Ljava/lang/Object;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "java/lang/Boolean")); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Boolean","booleanValue","()Z", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r != 0) { pc = 11; } else { pc = 6; } continue;
    case 6:
      __pc = 6;
      s.push(l1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/Zoomify","getZoomDivisor","(F)F", av)); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); s.push(s.pop() * r); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    case 11:
      __pc = 11;
      s.push(l1); pc = 12; continue;
    case 12:
      __pc = 12;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/mixins/zoom/GameRendererMixin"].__fields = [];
  defineClass("dev/isxander/zoomify/mixins/zoom/MouseMixin", {
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
    "scrollStepCounter(Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;Lorg/joml/Vector2i;)V": function (__ctx, __self, __args) {
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
      s.push(l2); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("org/joml/Vector2i","y","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      l3 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getScrollZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/config/v3/ConfigEntry","get","()Ljava/lang/Object;", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "java/lang/Boolean")); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Boolean","booleanValue","()Z", rv, [])); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); if (r == 0) { pc = 22; } else { pc = 9; } continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","INSTANCE","Ldev/isxander/zoomify/Zoomify;")); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/Zoomify","getZooming","()Z", rv, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); if (r == 0) { pc = 22; } else { pc = 12; } continue;
    case 12:
      __pc = 12;
      s.push(l3); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); if (r == 0) { pc = 22; } else { pc = 14; } continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getKeybindScrolling","()Z", rv, [])); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop(); if (r != 0) { pc = 22; } else { pc = 17; } continue;
    case 17:
      __pc = 17;
      s.push(l3); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop(); s.push(Number(r)); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/zoomify/Zoomify","mouseZoom","(D)V", av); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l1); pc = 21; continue;
    case 21:
      __pc = 21;
      var rv = s.pop();
      __ctx.invoke("org/spongepowered/asm/mixin/injection/callback/CallbackInfo","cancel","()V", rv, []); pc = 22; continue;
    case 22:
      __pc = 22;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "smoothCameraIfZoom(Z)Z": function (__ctx, __self, __args) {
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
      r = s.pop(); if (r != 0) { pc = 14; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","INSTANCE","Ldev/isxander/zoomify/Zoomify;")); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/Zoomify","getSecondaryZooming","()Z", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); if (r != 0) { pc = 14; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","INSTANCE","Ldev/isxander/zoomify/Zoomify;")); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/Zoomify","getZooming","()Z", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); if (r == 0) { pc = 16; } else { pc = 8; } continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getCinematicCamera","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/config/v3/ConfigEntry","get","()Ljava/lang/Object;", rv, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.cast(s.pop(), "java/lang/Integer")); pc = 12; continue;
    case 12:
      __pc = 12;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Integer","intValue","()I", rv, [])); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); if (r <= 0) { pc = 16; } else { pc = 14; } continue;
    case 14:
      __pc = 14;
      s.push(1); pc = 15; continue;
    case 15:
      __pc = 15;
      pc = undefined; continue;
    case 16:
      __pc = 16;
      s.push(0); pc = 17; continue;
    case 17:
      __pc = 17;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "applyRelativeSensitivity(Ljava/lang/Object;)Ljava/lang/Object;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
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
      s.push(__ctx.cast(s.pop(), "java/lang/Double")); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Double","doubleValue","()D", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      l2 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l2); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getRelativeSensitivity","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/config/v3/ConfigEntry","get","()Ljava/lang/Object;", rv, [])); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.cast(s.pop(), "java/lang/Integer")); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Integer","intValue","()I", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); s.push(Number(r)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(100); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); s.push(s.pop() / r); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(1); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","INSTANCE","Ldev/isxander/zoomify/Zoomify;")); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/Zoomify","getPreviousZoomDivisor","()D", rv, [])); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/util/Mth","lerp","(DDD)D", av)); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop(); s.push(s.pop() / r); pc = 18; continue;
    case 18:
      __pc = 18;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Double","valueOf","(D)Ljava/lang/Double;", av)); pc = 19; continue;
    case 19:
      __pc = 19;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "shouldApplySpyglassSensitivity(Z)Z": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getSpyglassBehaviour","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/config/v3/ConfigEntry","get","()Ljava/lang/Object;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/SpyglassBehaviour","COMBINE","Ldev/isxander/zoomify/config/SpyglassBehaviour;")); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 7; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push(0); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "modifyCinematicSmoothness(D)D": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","INSTANCE","Ldev/isxander/zoomify/Zoomify;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/Zoomify","getZooming","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 20; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getCinematicCamera","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/config/v3/ConfigEntry","get","()Ljava/lang/Object;", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "java/lang/Integer")); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Integer","intValue","()I", rv, [])); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); if (r <= 0) { pc = 20; } else { pc = 9; } continue;
    case 9:
      __pc = 9;
      s.push(l1); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 11; continue;
    case 11:
      __pc = 11;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getCinematicCamera","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 12; continue;
    case 12:
      __pc = 12;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/config/v3/ConfigEntry","get","()Ljava/lang/Object;", rv, [])); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.cast(s.pop(), "java/lang/Integer")); pc = 14; continue;
    case 14:
      __pc = 14;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Integer","intValue","()I", rv, [])); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop(); s.push(Number(r)); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(100); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop(); s.push(s.pop() / r); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop(); s.push(s.pop() / r); pc = 19; continue;
    case 19:
      __pc = 19;
      return s.pop();
    case 20:
      __pc = 20;
      s.push(l1); pc = 21; continue;
    case 21:
      __pc = 21;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/mixins/zoom/MouseMixin"].__fields = [];
  defineClass("dev/isxander/zoomify/mixins/zoom/secondary/GuiMixin", {
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
    "preventHudRender(Lnet/minecraft/class_332;Lnet/minecraft/class_9779;Lcom/llamalad7/mixinextras/injector/wrapoperation/Operation;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getStatic("dev/isxander/zoomify/Zoomify","INSTANCE","Ldev/isxander/zoomify/Zoomify;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/Zoomify","getSecondaryZooming","()Z", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 9; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("dev/isxander/zoomify/config/ZoomifySettings","Companion","Ldev/isxander/zoomify/config/ZoomifySettings$Companion;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings$Companion","getSecondaryHideHUDOnZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/yacl3/config/v3/ConfigEntry","get","()Ljava/lang/Object;", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "java/lang/Boolean")); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Boolean","booleanValue","()Z", rv, [])); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); if (r != 0) { pc = 22; } else { pc = 9; } continue;
    case 9:
      __pc = 9;
      s.push(l3); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(2); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(s[s.length - 1]); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l1); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(s[s.length - 1]); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(1); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l2); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/llamalad7/mixinextras/injector/wrapoperation/Operation","call","([Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 21; continue;
    case 21:
      __pc = 21;
      s.pop(); pc = 22; continue;
    case 22:
      __pc = 22;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/mixins/zoom/secondary/GuiMixin"].__fields = [];
  defineClass("dev/isxander/zoomify/utils/MinecraftExtKt", {
    "toast(Lnet/minecraft/class_2561;Lnet/minecraft/class_2561;Z)Lnet/minecraft/class_370;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6;
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
      s.push("title"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("description"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("dev/isxander/zoomify/utils/MinecraftExtKt","minecraft","Lnet/minecraft/class_310;")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); if (r == 0) { pc = 11; } else { pc = 9; } continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("net/minecraft/client/gui/components/toasts/SystemToast$SystemToastId","field_47589","Lnet/minecraft/class_370$class_9037;")); pc = 10; continue;
    case 10:
      __pc = 10;
      pc = undefined; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getStatic("net/minecraft/client/gui/components/toasts/SystemToast$SystemToastId","field_47588","Lnet/minecraft/class_370$class_9037;")); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l1); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/client/gui/components/toasts/SystemToast","multiline","(Lnet/minecraft/class_310;Lnet/minecraft/class_370$class_9037;Lnet/minecraft/class_2561;Lnet/minecraft/class_2561;)Lnet/minecraft/class_370;", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(s[s.length - 1]); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push("multiline(...)"); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 18; continue;
    case 18:
      __pc = 18;
      l3 = s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l3); pc = 20; continue;
    case 20:
      __pc = 20;
      l4 = s.pop(); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(0); pc = 22; continue;
    case 22:
      __pc = 22;
      l5 = s.pop(); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(__ctx.getStatic("dev/isxander/zoomify/utils/MinecraftExtKt","minecraft","Lnet/minecraft/class_310;")); pc = 24; continue;
    case 24:
      __pc = 24;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/Minecraft","getToastManager","()Lnet/minecraft/class_374;", rv, [])); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(s[s.length - 1]); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push("getToastManager(...)"); pc = 27; continue;
    case 27:
      __pc = 27;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 28; continue;
    case 28:
      __pc = 28;
      l6 = s.pop(); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l6); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l4); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(__ctx.cast(s.pop(), "net/minecraft/client/gui/components/toasts/Toast")); pc = 32; continue;
    case 32:
      __pc = 32;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/gui/components/toasts/ToastManager","addToast","(Lnet/minecraft/class_368;)V", rv, av); pc = 33; continue;
    case 33:
      __pc = 33;
      pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(l3); pc = 35; continue;
    case 35:
      __pc = 35;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "toast$default(Lnet/minecraft/class_2561;Lnet/minecraft/class_2561;ZILjava/lang/Object;)Lnet/minecraft/class_370;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
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
      s.push(l3); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(4); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); s.push(s.pop() & r); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(0); pc = 5; continue;
    case 5:
      __pc = 5;
      l2 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l2); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/utils/MinecraftExtKt","toast","(Lnet/minecraft/class_2561;Lnet/minecraft/class_2561;Z)Lnet/minecraft/class_370;", av)); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "zoomifyRl(Ljava/lang/String;)Lnet/minecraft/class_2960;": function (__ctx, __self, __args) {
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
      s.push("path"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push("zoomify"); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/resources/Identifier","fromNamespaceAndPath","(Ljava/lang/String;Ljava/lang/String;)Lnet/minecraft/class_2960;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("fromNamespaceAndPath(...)"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullExpressionValue","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/utils/MinecraftExtKt"].__fields = [{"name":"minecraft","descriptor":"Lnet/minecraft/class_310;"}];
  defineClass("dev/isxander/zoomify/utils/TransitionType$Companion", {
    "getCODEC()Lnet/minecraft/class_3542$class_7292;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("dev/isxander/zoomify/utils/TransitionType","access$getCODEC$cp","()Lnet/minecraft/class_3542$class_7292;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/utils/TransitionType$Companion"].__fields = [];
  defineClass("dev/isxander/zoomify/utils/TransitionType", {
    "access$getCODEC$cp()Lnet/minecraft/class_3542$class_7292;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("dev/isxander/zoomify/utils/TransitionType","CODEC","Lnet/minecraft/class_3542$class_7292;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/utils/TransitionType"].__fields = [{"name":"Companion","descriptor":"Ldev/isxander/zoomify/utils/TransitionType$Companion;"},{"name":"localisedName","descriptor":"Lnet/minecraft/class_2561;"},{"name":"CODEC","descriptor":"Lnet/minecraft/class_3542$class_7292;"},{"name":"INSTANT","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"LINEAR","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_SINE","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_OUT_SINE","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_OUT_SINE","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_QUAD","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_OUT_QUAD","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_OUT_QUAD","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_CUBIC","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_OUT_CUBIC","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_OUT_CUBIC","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_EXP","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_OUT_EXP","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"EASE_IN_OUT_EXP","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"$VALUES","descriptor":"[Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"$ENTRIES","descriptor":"Lkotlin/enums/EnumEntries;"}];
  defineClass("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$1", {
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
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push("value"); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("getValue(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;"); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(1); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/MutablePropertyReference0Impl","<init>","(Ljava/lang/Object;Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$1","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$1","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$1"].__fields = [];
  defineClass("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$2", {
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
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push("value"); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("getValue(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;"); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(1); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/MutablePropertyReference0Impl","<init>","(Ljava/lang/Object;Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$2","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$2","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$2"].__fields = [];
  defineClass("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$3", {
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
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push("value"); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("getValue(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;"); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(1); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/MutablePropertyReference0Impl","<init>","(Ljava/lang/Object;Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$3","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$3","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$3"].__fields = [];
  defineClass("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$4", {
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
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push("value"); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("getValue(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;"); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(1); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/MutablePropertyReference0Impl","<init>","(Ljava/lang/Object;Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$4","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$4","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$4"].__fields = [];
  defineClass("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$6", {
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
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push("value"); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("getValue(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;"); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(1); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/MutablePropertyReference0Impl","<init>","(Ljava/lang/Object;Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$6","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$6","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$6"].__fields = [];
  defineClass("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$7", {
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
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push("value"); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("getValue(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;"); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(1); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/MutablePropertyReference0Impl","<init>","(Ljava/lang/Object;Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$7","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$7","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$7"].__fields = [];
  defineClass("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$8", {
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
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push("value"); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("getValue(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;"); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(1); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/MutablePropertyReference0Impl","<init>","(Ljava/lang/Object;Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$8","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$8","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$8"].__fields = [];
  defineClass("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$1", {
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
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push("value"); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("getValue(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;"); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(1); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/MutablePropertyReference0Impl","<init>","(Ljava/lang/Object;Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$1","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$1","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$1"].__fields = [];
  defineClass("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$2", {
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
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push("value"); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("getValue(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;"); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(1); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/MutablePropertyReference0Impl","<init>","(Ljava/lang/Object;Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$2","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$2","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$2"].__fields = [];
  defineClass("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$3", {
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
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push("value"); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("getValue(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;"); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(1); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("kotlin/jvm/internal/MutablePropertyReference0Impl","<init>","(Ljava/lang/Object;Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$3","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
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
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$3","receiver","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/yacl3/config/v3/ConfigEntry")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","setValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;Ljava/lang/Object;)V", av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$3"].__fields = [];
  defineClass("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt", {
    "RegularZoomHelper(Ldev/isxander/zoomify/config/ZoomifySettings;)Ldev/isxander/zoomify/zoom/ZoomHelper;": function (__ctx, __self, __args) {
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
      s.push("settings"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/ZoomHelper")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/TransitionInterpolator")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$1")); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(s[s.length - 1]); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomInTransition","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$1","<init>","(Ljava/lang/Object;)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function0")); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$2")); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(s[s.length - 1]); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomOutTransition","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$2","<init>","(Ljava/lang/Object;)V", rv, av); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function0")); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$3")); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(s[s.length - 1]); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l0); pc = 22; continue;
    case 22:
      __pc = 22;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomInTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$3","<init>","(Ljava/lang/Object;)V", rv, av); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function0")); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$4")); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(s[s.length - 1]); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l0); pc = 28; continue;
    case 28:
      __pc = 28;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomOutTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$4","<init>","(Ljava/lang/Object;)V", rv, av); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function0")); pc = 31; continue;
    case 31:
      __pc = 31;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/TransitionInterpolator","<init>","(Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V", rv, av); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/zoom/Interpolator")); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/SmoothInterpolator")); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(s[s.length - 1]); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l0); pc = 36; continue;
    case 36:
      __pc = 36;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt","RegularZoomHelper$lambda$0","(Ldev/isxander/zoomify/config/ZoomifySettings;)D", null, dv)); pc = 37; continue;
    case 37:
      __pc = 37;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/SmoothInterpolator","<init>","(Lkotlin/jvm/functions/Function0;)V", rv, av); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/zoom/Interpolator")); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$6")); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(s[s.length - 1]); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(l0); pc = 42; continue;
    case 42:
      __pc = 42;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getInitialZoom","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 43; continue;
    case 43:
      __pc = 43;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$6","<init>","(Ljava/lang/Object;)V", rv, av); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function0")); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$7")); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(s[s.length - 1]); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(l0); pc = 48; continue;
    case 48:
      __pc = 48;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getZoomPerStep","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 49; continue;
    case 49:
      __pc = 49;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$7","<init>","(Ljava/lang/Object;)V", rv, av); pc = 50; continue;
    case 50:
      __pc = 50;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function0")); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$8")); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push(s[s.length - 1]); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(l0); pc = 54; continue;
    case 54:
      __pc = 54;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getScrollStepCount","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 55; continue;
    case 55:
      __pc = 55;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$RegularZoomHelper$8","<init>","(Ljava/lang/Object;)V", rv, av); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function0")); pc = 57; continue;
    case 57:
      __pc = 57;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/ZoomHelper","<init>","(Ldev/isxander/zoomify/zoom/Interpolator;Ldev/isxander/zoomify/zoom/Interpolator;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V", rv, av); pc = 58; continue;
    case 58:
      __pc = 58;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "SecondaryZoomHelper(Ldev/isxander/zoomify/config/ZoomifySettings;)Ldev/isxander/zoomify/zoom/ZoomHelper;": function (__ctx, __self, __args) {
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
      s.push("settings"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/ZoomHelper")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/TimedInterpolator")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$1")); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(s[s.length - 1]); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryZoomInTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$1","<init>","(Ljava/lang/Object;)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function0")); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$2")); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(s[s.length - 1]); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryZoomOutTime","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$2","<init>","(Ljava/lang/Object;)V", rv, av); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function0")); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/TimedInterpolator","<init>","(Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V", rv, av); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/zoom/Interpolator")); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.getStatic("dev/isxander/zoomify/zoom/InstantInterpolator","INSTANCE","Ldev/isxander/zoomify/zoom/InstantInterpolator;")); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/zoom/Interpolator")); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(__ctx.newInstance("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$3")); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(s[s.length - 1]); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l0); pc = 26; continue;
    case 26:
      __pc = 26;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getSecondaryZoomAmount","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 27; continue;
    case 27:
      __pc = 27;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt$SecondaryZoomHelper$3","<init>","(Ljava/lang/Object;)V", rv, av); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.cast(s.pop(), "kotlin/jvm/functions/Function0")); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.invoke("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt","SecondaryZoomHelper$lambda$0","()I", null, [])); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.invoke("dev/isxander/zoomify/zoom/DefaultZoomHelpersKt","SecondaryZoomHelper$lambda$1","()I", null, [])); pc = 31; continue;
    case 31:
      __pc = 31;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/ZoomHelper","<init>","(Ldev/isxander/zoomify/zoom/Interpolator;Ldev/isxander/zoomify/zoom/Interpolator;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V", rv, av); pc = 32; continue;
    case 32:
      __pc = 32;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "RegularZoomHelper$lambda$0(Ldev/isxander/zoomify/config/ZoomifySettings;)D": function (__ctx, __self, __args) {
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
      s.push(__ctx.invoke("dev/isxander/zoomify/config/ZoomifySettings","getScrollZoomSmoothness","()Ldev/isxander/yacl3/config/v3/ConfigEntry;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("dev/isxander/yacl3/config/v3/KotlinExtsKt","getValue","(Ldev/isxander/yacl3/config/v3/ConfigEntry;)Ljava/lang/Object;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Number","doubleValue","()D", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(100); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); s.push(s.pop() / r); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(0.1); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/util/Mth","lerp","(DDD)D", av)); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "SecondaryZoomHelper$lambda$0()I": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(100); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "SecondaryZoomHelper$lambda$1()I": function (__ctx, __self, __args) {
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
  CLASSES["dev/isxander/zoomify/zoom/DefaultZoomHelpersKt"].__fields = [];
  defineClass("dev/isxander/zoomify/zoom/Interpolator", {
    "modifyPrevInterpolation(D)D": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/Interpolator"].__fields = [];
  defineClass("dev/isxander/zoomify/zoom/LinearInterpolator", {
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
      __ctx.putField("dev/isxander/zoomify/zoom/LinearInterpolator","goingIn","Z",target, r); pc = 5; continue;
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
      __ctx.putField("dev/isxander/zoomify/zoom/LinearInterpolator","isSmooth","Z",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Lkotlin/jvm/internal/DefaultConstructorMarker;)V": function (__ctx, __self, __args) {
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
      __ctx.invoke("dev/isxander/zoomify/zoom/LinearInterpolator","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/LinearInterpolator"].__fields = [{"name":"goingIn","descriptor":"Z"},{"name":"isSmooth","descriptor":"Z"}];
  defineClass("dev/isxander/zoomify/zoom/SmoothInterpolator", {
    "<init>(Lkotlin/jvm/functions/Function0;)V": function (__ctx, __self, __args) {
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
      s.push("smoothness"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(null); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/LinearInterpolator","<init>","(Lkotlin/jvm/internal/DefaultConstructorMarker;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/zoom/SmoothInterpolator","smoothness","Lkotlin/jvm/functions/Function0;",target, r); pc = 9; continue;
    case 9:
      __pc = 9;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/SmoothInterpolator"].__fields = [{"name":"smoothness","descriptor":"Lkotlin/jvm/functions/Function0;"}];
  defineClass("dev/isxander/zoomify/zoom/TimedInterpolator", {
    "<init>(Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("timeIn"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("timeOut"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(null); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/LinearInterpolator","<init>","(Lkotlin/jvm/internal/DefaultConstructorMarker;)V", rv, av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/zoom/TimedInterpolator","timeIn","Lkotlin/jvm/functions/Function0;",target, r); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l2); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/zoom/TimedInterpolator","timeOut","Lkotlin/jvm/functions/Function0;",target, r); pc = 15; continue;
    case 15:
      __pc = 15;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/TimedInterpolator"].__fields = [{"name":"timeIn","descriptor":"Lkotlin/jvm/functions/Function0;"},{"name":"timeOut","descriptor":"Lkotlin/jvm/functions/Function0;"}];
  defineClass("dev/isxander/zoomify/zoom/TransitionInterpolator", {
    "<init>(Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    l4 = __args[3];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("transitionIn"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("transitionOut"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l3); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("timeIn"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l4); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push("timeOut"); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l3); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l4); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/TimedInterpolator","<init>","(Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V", rv, av); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l0); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l1); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/zoom/TransitionInterpolator","transitionIn","Lkotlin/jvm/functions/Function0;",target, r); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l0); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l2); pc = 21; continue;
    case 21:
      __pc = 21;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/zoom/TransitionInterpolator","transitionOut$lambda$0","(Lkotlin/jvm/functions/Function0;)Ldev/isxander/zoomify/utils/TransitionType;", null, dv)); pc = 22; continue;
    case 22:
      __pc = 22;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/zoom/TransitionInterpolator","transitionOut","Lkotlin/jvm/functions/Function0;",target, r); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l0); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(__ctx.getField("dev/isxander/zoomify/zoom/TransitionInterpolator","transitionIn","Lkotlin/jvm/functions/Function0;", s.pop())); pc = 26; continue;
    case 26:
      __pc = 26;
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/jvm/functions/Function0","invoke","()Ljava/lang/Object;", rv, [])); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/utils/TransitionType")); pc = 28; continue;
    case 28:
      __pc = 28;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/zoom/TransitionInterpolator","activeTransition","Ldev/isxander/zoomify/utils/TransitionType;",target, r); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l0); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l2); pc = 31; continue;
    case 31:
      __pc = 31;
      var rv = s.pop();
      s.push(__ctx.invoke("kotlin/jvm/functions/Function0","invoke","()Ljava/lang/Object;", rv, [])); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/utils/TransitionType")); pc = 33; continue;
    case 33:
      __pc = 33;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/zoom/TransitionInterpolator","inactiveTransition","Ldev/isxander/zoomify/utils/TransitionType;",target, r); pc = 34; continue;
    case 34:
      __pc = 34;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "transitionOut$lambda$0(Lkotlin/jvm/functions/Function0;)Ldev/isxander/zoomify/utils/TransitionType;": function (__ctx, __self, __args) {
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
      s.push(__ctx.invoke("kotlin/jvm/functions/Function0","invoke","()Ljava/lang/Object;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "dev/isxander/zoomify/utils/TransitionType")); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("dev/isxander/zoomify/utils/TransitionType","opposite","()Ldev/isxander/zoomify/utils/TransitionType;", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/TransitionInterpolator"].__fields = [{"name":"transitionIn","descriptor":"Lkotlin/jvm/functions/Function0;"},{"name":"transitionOut","descriptor":"Lkotlin/jvm/functions/Function0;"},{"name":"activeTransition","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"inactiveTransition","descriptor":"Ldev/isxander/zoomify/utils/TransitionType;"},{"name":"prevTargetInterpolation","descriptor":"D"},{"name":"justSwappedTransition","descriptor":"Z"}];
  defineClass("dev/isxander/zoomify/zoom/ZoomHelper", {
    "<init>(Ldev/isxander/zoomify/zoom/Interpolator;Ldev/isxander/zoomify/zoom/Interpolator;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("initialInterpolator"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push("scrollInterpolator"); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l3); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("initialZoom"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l4); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push("zoomPerStep"); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l5); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push("maxScrollTiers"); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("kotlin/jvm/internal/Intrinsics","checkNotNullParameter","(Ljava/lang/Object;Ljava/lang/String;)V", av); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l1); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/zoom/ZoomHelper","initialInterpolator","Ldev/isxander/zoomify/zoom/Interpolator;",target, r); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l0); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l2); pc = 22; continue;
    case 22:
      __pc = 22;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/zoom/ZoomHelper","scrollInterpolator","Ldev/isxander/zoomify/zoom/Interpolator;",target, r); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l3); pc = 25; continue;
    case 25:
      __pc = 25;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/zoom/ZoomHelper","initialZoom","Lkotlin/jvm/functions/Function0;",target, r); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l0); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l4); pc = 28; continue;
    case 28:
      __pc = 28;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/zoom/ZoomHelper","zoomPerStep","Lkotlin/jvm/functions/Function0;",target, r); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l0); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l5); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/zoom/ZoomHelper","maxScrollTiers","Lkotlin/jvm/functions/Function0;",target, r); pc = 32; continue;
    case 32:
      __pc = 32;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "tick(ZID)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
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
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l3); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/ZoomHelper","tickInitial","(ZD)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l2); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l3); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/ZoomHelper","tickScroll","(ID)V", rv, av); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "tick$default(Ldev/isxander/zoomify/zoom/ZoomHelper;ZIDILjava/lang/Object;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6;
    l0 = __args[0];
    l1 = __args[1];
    l2 = __args[2];
    l3 = __args[3];
    l5 = __args[4];
    l6 = __args[5];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l5); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(4); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); s.push(s.pop() & r); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(0.05); pc = 5; continue;
    case 5:
      __pc = 5;
      l3 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l2); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l3); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/ZoomHelper","tick","(ZID)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setToZero(ZZ)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      r = s.pop(); if (r == 0) { pc = 11; } else { pc = 2; } continue;
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
      __ctx.putField("dev/isxander/zoomify/zoom/ZoomHelper","initialInterpolation","D",target, r); pc = 5; continue;
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
      __ctx.putField("dev/isxander/zoomify/zoom/ZoomHelper","prevInitialInterpolation","D",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(0); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("dev/isxander/zoomify/zoom/ZoomHelper","zoomingLastTick","Z",target, r); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l2); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); if (r == 0) { pc = 22; } else { pc = 13; } continue;
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
      __ctx.putField("dev/isxander/zoomify/zoom/ZoomHelper","scrollInterpolation","D",target, r); pc = 16; continue;
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
      __ctx.putField("dev/isxander/zoomify/zoom/ZoomHelper","prevScrollInterpolation","D",target, r); pc = 19; continue;
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
      __ctx.putField("dev/isxander/zoomify/zoom/ZoomHelper","lastScrollTier","I",target, r); pc = 22; continue;
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
      __ctx.putField("dev/isxander/zoomify/zoom/ZoomHelper","resetting","Z",target, r); pc = 25; continue;
    case 25:
      __pc = 25;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setToZero$default(Ldev/isxander/zoomify/zoom/ZoomHelper;ZZILjava/lang/Object;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
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
      s.push(l3); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); s.push(s.pop() & r); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(1); pc = 5; continue;
    case 5:
      __pc = 5;
      l1 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l3); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(2); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); s.push(s.pop() & r); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); if (r == 0) { pc = 12; } else { pc = 10; } continue;
    case 10:
      __pc = 10;
      s.push(1); pc = 11; continue;
    case 11:
      __pc = 11;
      l2 = s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l1); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l2); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("dev/isxander/zoomify/zoom/ZoomHelper","setToZero","(ZZ)V", rv, av); pc = 16; continue;
    case 16:
      __pc = 16;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["dev/isxander/zoomify/zoom/ZoomHelper"].__fields = [{"name":"initialInterpolator","descriptor":"Ldev/isxander/zoomify/zoom/Interpolator;"},{"name":"scrollInterpolator","descriptor":"Ldev/isxander/zoomify/zoom/Interpolator;"},{"name":"initialZoom","descriptor":"Lkotlin/jvm/functions/Function0;"},{"name":"zoomPerStep","descriptor":"Lkotlin/jvm/functions/Function0;"},{"name":"maxScrollTiers","descriptor":"Lkotlin/jvm/functions/Function0;"},{"name":"prevInitialInterpolation","descriptor":"D"},{"name":"initialInterpolation","descriptor":"D"},{"name":"zoomingLastTick","descriptor":"Z"},{"name":"prevScrollInterpolation","descriptor":"D"},{"name":"scrollInterpolation","descriptor":"D"},{"name":"lastScrollTier","descriptor":"I"},{"name":"resetting","descriptor":"Z"},{"name":"resetMultiplier","descriptor":"D"}];
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
    "id": "zoomify",
    "name": "Zoomify",
    "version": "2.15.2+1.21.11",
    "authors": [
      "isXander"
    ],
    "description": "Converted from a Fabric mod (A zoom mod with infinite customizability.)",
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
    var inst_dev_isxander_zoomify_Zoomify = { __class: "dev/isxander/zoomify/Zoomify", __fields: FIELD_DEFAULTS["dev/isxander/zoomify/Zoomify"] || [] };
    /* entrypoint: client dev/isxander/zoomify/Zoomify.onInitializeClient */
    try {
      RT.method("dev/isxander/zoomify/Zoomify", "onInitializeClient()V", inst_dev_isxander_zoomify_Zoomify, []);
    } catch (error) { RT.unsupported(error, "dev/isxander/zoomify/Zoomify.onInitializeClient"); }
    mod.on("tick", function (payload) { try { /* unsupported: dev.isxander.zoomify.config.ZoomKeyBehaviour.ordinal — the mod's own method ordinal()I is not in the jar */ } catch (error) { RT.unsupported(error, "dev/isxander/zoomify/Zoomify.tick"); } });
    api.input.bind({ id: "player", label: "player", key: "h", handler: function () { api.hud.message("player pressed"); } });
    api.input.bind({ id: "keymappings", label: "keyMappings", key: "h", handler: function () { api.hud.message("keyMappings pressed"); } });
    api.input.bind({ id: "zoomify.toast.unbindconflicting.name", label: "zoomify.toast.unbindConflicting.name", key: "h", handler: function () { api.hud.message("zoomify.toast.unbindConflicting.name pressed"); } });
    api.input.bind({ id: "zoomify.toast.unbindconflicting.description", label: "zoomify.toast.unbindConflicting.description", key: "h", handler: function () { api.hud.message("zoomify.toast.unbindConflicting.description pressed"); } });
    api.input.bind({ id: ".this.", label: "<this>", key: "h", handler: function () { api.hud.message("<this> pressed"); } });
    if (webmc.patches) {
      webmc.patches.add({
        modId: "zoomify", mixin: "dev/isxander/zoomify/mixins/zoom/MouseMixin",
        targets: ["net/minecraft/client/MouseHandler"], environment: "unknown",
        injections: [
          { method: ["onScroll"], handler: "scrollStepCounter", kind: "inject", at: ["INVOKE"], cancellable: true,
            run: function (target, args, info) { return RT.method("dev/isxander/zoomify/mixins/zoom/MouseMixin", "scrollStepCounter(Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;Lorg/joml/Vector2i;)V", target, args.concat([info])); } },
          { method: ["turnPlayer"], handler: "modifyCinematicSmoothness", kind: "modifyArg", at: ["INVOKE"], cancellable: false,
            run: function (target, args, info) { return RT.method("dev/isxander/zoomify/mixins/zoom/MouseMixin", "modifyCinematicSmoothness(D)D", target, args.concat([info])); } },
        ],
        accessors: []
      });
    }
    api.log('converted: ' + SOURCE + ' — ' + "371 methods translated, 33 not");
  });
})();
