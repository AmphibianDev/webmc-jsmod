/* Converted from a Fabric mod by webmc-jsmod's converter.
 * shulkerboxtooltip 5.2.16+1.21.11 — Shulker Box Tooltip
 * Every 444 method that could be transpiled was; 75 could not.
 * What could not is named in report.json next to this file. */
(function () {
  "use strict";
  var SOURCE = "shulkerboxtooltip 5.2.16+1.21.11";
  var CLASSES = {};
  var SUPER = {"com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/api/ShulkerBoxTooltipApi":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy":"java/lang/Enum","com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/api/renderer/PreviewRenderer":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipClientImpl":"com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient","com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipImpl":"com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","com/misterpemodder/shulkerboxtooltip/impl/ModMenuCompat":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer":"java/lang/Record","com/misterpemodder/shulkerboxtooltip/impl/PluginManager":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl":"java/lang/Record","com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl":"java/lang/Record","com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType":"java/lang/Enum","com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType":"java/lang/Enum","com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition":"java/lang/Enum","com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType":"java/lang/Enum","com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme":"java/lang/Enum","com/misterpemodder/shulkerboxtooltip/impl/config/ConfigurationHandler":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/config/JsonHexadecimalInt":"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","com/misterpemodder/shulkerboxtooltip/impl/config/SerializationException":"java/lang/Exception","com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer$ClientOnly":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigCategoryTab":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/config/gui/entry/ColorValueConfigEntry":"com/misterpemodder/shulkerboxtooltip/impl/config/gui/entry/ValueConfigEntry","com/misterpemodder/shulkerboxtooltip/impl/fabric/PluginManagerImpl":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/network/ClientNetworking":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/network/EnderChestInventoryListener":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/network/Payload":"java/lang/Record","com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion":"java/lang/Record","com/misterpemodder/shulkerboxtooltip/impl/network/ServerNetworking":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext":"java/lang/Record","com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext":"java/lang/Record","com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricC2SChannel":"com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricChannel","com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricChannel":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SEnderChestUpdateRequest":"java/lang/Record","com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart$Type":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart":"java/lang/Record","com/misterpemodder/shulkerboxtooltip/impl/network/message/MessageType":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate":"java/lang/Record","com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse$Type":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse":"java/lang/Record","com/misterpemodder/shulkerboxtooltip/impl/provider/FixedPreviewProviderRegistry":"java/lang/Record","com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides":"java/lang/Record","com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewTooltipComponent":"java/lang/Record","com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/util/Key":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/util/ShulkerBoxTooltipUtil":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/impl/util/fabric/EnvironmentUtilImpl":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$1":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject":"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement","com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive":"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement","com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/SyntaxError":"java/lang/Exception","com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ObjectParserContext":"java/lang/Object","com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/serializer/DeserializerFunctionPool":"java/lang/Object"};
  var FIELD_DEFAULTS = {"com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip":[{"name":"MOD_ID","descriptor":"Ljava/lang/String;"},{"name":"MOD_NAME","descriptor":"Ljava/lang/String;"},{"name":"LOGGER","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger;"},{"name":"config","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;"},{"name":"savedConfig","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;"},{"name":"configTree","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode;"}],"com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient":[{"name":"previousStack","descriptor":"Lnet/minecraft/class_1799;"},{"name":"client","descriptor":"Lnet/minecraft/class_310;"},{"name":"wasPreviewAccessed","descriptor":"Z"},{"name":"previewKeyPressed","descriptor":"Z"},{"name":"fullPreviewKeyPressed","descriptor":"Z"},{"name":"lockPreviewKeyPressed","descriptor":"Z"},{"name":"lockKeyHintsEnabled","descriptor":"Z"}],"com/misterpemodder/shulkerboxtooltip/api/ShulkerBoxTooltipApi":[],"com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy":[{"name":"IGNORE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;"},{"name":"FIRST_ITEM","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;"},{"name":"SEPARATE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;"},{"name":"$VALUES","descriptor":"[Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;"}],"com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider":[{"name":"defaultMaxInvSize","descriptor":"I"},{"name":"defaultCanUseLootTables","descriptor":"Z"},{"name":"defaultMaxRowSize","descriptor":"I"},{"name":"defaultCompactMaxRowSize","descriptor":"I"}],"com/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider":[],"com/misterpemodder/shulkerboxtooltip/api/renderer/PreviewRenderer":[],"com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipClientImpl":[],"com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipImpl":[],"com/misterpemodder/shulkerboxtooltip/impl/ModMenuCompat":[],"com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer":[{"name":"modId","descriptor":"Ljava/lang/String;"},{"name":"apiImplSupplier","descriptor":"Ljava/util/function/Supplier;"}],"com/misterpemodder/shulkerboxtooltip/impl/PluginManager":[{"name":"LOGGER","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger;"},{"name":"plugins","descriptor":"Ljava/util/Map;"},{"name":"colorsLoaded","descriptor":"Ljava/util/concurrent/atomic/AtomicBoolean;"},{"name":"providersLoaded","descriptor":"Ljava/util/concurrent/atomic/AtomicBoolean;"}],"com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl":[{"name":"stack","descriptor":"Lnet/minecraft/class_1799;"},{"name":"owner","descriptor":"Lnet/minecraft/class_1657;"},{"name":"config","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;"},{"name":"registryLookup","descriptor":"Lnet/minecraft/class_7225$class_7874;"}],"com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl":[{"name":"rgbComponents","descriptor":"[F"},{"name":"defaultRgbComponents","descriptor":"[F"},{"name":"CATEGORY_AND_ID_CODEC","descriptor":"Lcom/mojang/serialization/Codec;"},{"name":"FULL_CODEC","descriptor":"Lcom/mojang/serialization/Codec;"},{"name":"INT_CODEC","descriptor":"Lcom/mojang/serialization/Codec;"},{"name":"CODEC","descriptor":"Lcom/mojang/serialization/Codec;"}],"com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category":[{"name":"id","descriptor":"Lnet/minecraft/class_2960;"},{"name":"keys","descriptor":"Ljava/util/Map;"},{"name":"unlocalizedNames","descriptor":"Ljava/util/Map;"},{"name":"keysView","descriptor":"Ljava/util/Map;"},{"name":"lateKeyValues","descriptor":"Ljava/util/Map;"},{"name":"this$0","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl;"}],"com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl":[{"name":"categories","descriptor":"Ljava/util/Map;"},{"name":"emptyCategories","descriptor":"Ljava/util/Map;"},{"name":"categoriesView","descriptor":"Ljava/util/Map;"},{"name":"locked","descriptor":"Z"},{"name":"registeredKeysCount","descriptor":"I"},{"name":"INSTANCE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl;"}],"com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType":[{"name":"NONE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;"},{"name":"ACTIVE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;"},{"name":"PASSIVE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;"},{"name":"$VALUES","descriptor":"[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;"}],"com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType":[{"name":"HIDE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;"},{"name":"SIMPLE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;"},{"name":"ADVANCED","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;"},{"name":"$VALUES","descriptor":"[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;"}],"com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition":[{"name":"INSIDE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;"},{"name":"OUTSIDE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;"},{"name":"OUTSIDE_TOP","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;"},{"name":"OUTSIDE_BOTTOM","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;"},{"name":"$VALUES","descriptor":"[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;"}],"com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType":[{"name":"VANILLA","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;"},{"name":"MOD","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;"},{"name":"NONE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;"},{"name":"$VALUES","descriptor":"[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;"}],"com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme":[{"name":"SHULKERBOXTOOLTIP","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;"},{"name":"VANILLA","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;"},{"name":"$VALUES","descriptor":"[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;"}],"com/misterpemodder/shulkerboxtooltip/impl/config/ConfigurationHandler":[{"name":"serializer","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer;"}],"com/misterpemodder/shulkerboxtooltip/impl/config/JsonHexadecimalInt":[],"com/misterpemodder/shulkerboxtooltip/impl/config/SerializationException":[{"name":"serialVersionUID","descriptor":"J"}],"com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer$ClientOnly":[],"com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer":[{"name":"jankson","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson;"},{"name":"CONFIG_FILE_NAME","descriptor":"Ljava/lang/String;"}],"com/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigCategoryTab":[{"name":"screen","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigScreen;"},{"name":"category","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;"},{"name":"config","descriptor":"Ljava/lang/Object;"},{"name":"title","descriptor":"Lnet/minecraft/class_2561;"},{"name":"titleChanged","descriptor":"Lnet/minecraft/class_2561;"},{"name":"titleError","descriptor":"Lnet/minecraft/class_2561;"},{"name":"titleErrorChanged","descriptor":"Lnet/minecraft/class_2561;"},{"name":"list","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigEntryList;"},{"name":"selectedKeyNode","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;"},{"name":"tabButton","descriptor":"Lnet/minecraft/class_8209;"}],"com/misterpemodder/shulkerboxtooltip/impl/config/gui/entry/ColorValueConfigEntry":[{"name":"colorWidget","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/gui/ColorWidget;"},{"name":"inputField","descriptor":"Lnet/minecraft/class_342;"},{"name":"isValid","descriptor":"Z"}],"com/misterpemodder/shulkerboxtooltip/impl/fabric/PluginManagerImpl":[],"com/misterpemodder/shulkerboxtooltip/impl/network/ClientNetworking":[{"name":"serverProtocolVersion","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;"}],"com/misterpemodder/shulkerboxtooltip/impl/network/EnderChestInventoryListener":[{"name":"player","descriptor":"Lnet/minecraft/class_3222;"}],"com/misterpemodder/shulkerboxtooltip/impl/network/Payload":[{"name":"id","descriptor":"Lnet/minecraft/class_8710$class_9154;"},{"name":"value","descriptor":"Ljava/lang/Object;"}],"com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion":[{"name":"major","descriptor":"I"},{"name":"minor","descriptor":"I"},{"name":"CURRENT","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;"}],"com/misterpemodder/shulkerboxtooltip/impl/network/ServerNetworking":[{"name":"CLIENTS","descriptor":"Ljava/util/Map;"}],"com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext":[{"name":"player","descriptor":"Lnet/minecraft/class_3222;"},{"name":"channel","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;"}],"com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext":[{"name":"channel","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;"}],"com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl":[{"name":"C2S_CHANNELS","descriptor":"Ljava/util/Map;"}],"com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricC2SChannel":[{"name":"serverRegistered","descriptor":"Z"}],"com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricChannel":[{"name":"id","descriptor":"Lnet/minecraft/class_8710$class_9154;"},{"name":"type","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/MessageType;"},{"name":"codec","descriptor":"Lnet/minecraft/class_9139;"},{"name":"payloadTypeRegistered","descriptor":"Z"}],"com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl":[{"name":"S2C_CHANNELS","descriptor":"Ljava/util/Map;"}],"com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SEnderChestUpdateRequest":[],"com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart$Type":[],"com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart":[{"name":"clientVersion","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;"}],"com/misterpemodder/shulkerboxtooltip/impl/network/message/MessageType":[],"com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate":[{"name":"nbtInventory","descriptor":"Lnet/minecraft/class_2499;"},{"name":"EMPTY","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate;"}],"com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse$Type":[],"com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse":[{"name":"serverVersion","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;"},{"name":"config","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;"}],"com/misterpemodder/shulkerboxtooltip/impl/provider/FixedPreviewProviderRegistry":[{"name":"registry","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProviderRegistry;"},{"name":"providerFactory","descriptor":"Ljava/util/function/BiFunction;"}],"com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides":[{"name":"shouldDisplay","descriptor":"Ljava/util/Optional;"},{"name":"inventoryMaxSize","descriptor":"Ljava/util/Optional;"},{"name":"maxRowSize","descriptor":"Ljava/util/Optional;"},{"name":"compactMaxRowSize","descriptor":"Ljava/util/Optional;"},{"name":"fullPreviewAvailable","descriptor":"Ljava/util/Optional;"},{"name":"showTooltipHints","descriptor":"Ljava/util/Optional;"},{"name":"tooltipHintLangKey","descriptor":"Ljava/util/Optional;"},{"name":"fullTooltipHintLangKey","descriptor":"Ljava/util/Optional;"},{"name":"lockKeyTooltipHintLangKey","descriptor":"Ljava/util/Optional;"},{"name":"windowColor","descriptor":"Ljava/util/Optional;"},{"name":"texture","descriptor":"Ljava/util/Optional;"},{"name":"canInsertItems","descriptor":"Ljava/util/Optional;"},{"name":"canExtractItems","descriptor":"Ljava/util/Optional;"},{"name":"CODEC","descriptor":"Lcom/mojang/serialization/MapCodec;"}],"com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl":[{"name":"locked","descriptor":"Z"},{"name":"providerIds","descriptor":"Lcom/google/common/collect/BiMap;"},{"name":"providerItems","descriptor":"Ljava/util/Map;"},{"name":"INSTANCE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl;"}],"com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewTooltipComponent":[{"name":"provider","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider;"},{"name":"context","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/api/PreviewContext;"}],"com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder":[{"name":"node","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;"},{"name":"childrenBuilder","descriptor":"Lcom/google/common/collect/ImmutableList$Builder;"}],"com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode":[{"name":"name","descriptor":"Ljava/lang/String;"},{"name":"title","descriptor":"Lnet/minecraft/class_2561;"},{"name":"tooltip","descriptor":"Lnet/minecraft/class_2561;"},{"name":"children","descriptor":"Lcom/google/common/collect/ImmutableList;"},{"name":"MULTIPLE_ERRORS","descriptor":"Lnet/minecraft/class_2561;"}],"com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder":[{"name":"defaultConfig","descriptor":"Ljava/lang/Object;"}],"com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode":[{"name":"TITLE","descriptor":"Lnet/minecraft/class_2561;"},{"name":"categories","descriptor":"Lcom/google/common/collect/ImmutableList;"}],"com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder":[{"name":"node","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;"}],"com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode":[{"name":"name","descriptor":"Ljava/lang/String;"},{"name":"title","descriptor":"Lnet/minecraft/class_2561;"},{"name":"tooltip","descriptor":"Lnet/minecraft/class_2561;"},{"name":"prefix","descriptor":"Lnet/minecraft/class_2561;"},{"name":"type","descriptor":"Ljava/lang/Class;"},{"name":"valueType","descriptor":"Ljava/lang/Class;"},{"name":"requiresRestart","descriptor":"Z"},{"name":"valueReader","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;"},{"name":"valueWriter","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;"},{"name":"nbtReader","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;"},{"name":"nbtWriter","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;"},{"name":"validator","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueValidator;"},{"name":"defaultValue","descriptor":"Ljava/lang/Object;"},{"name":"editingValue","descriptor":"Ljava/lang/Object;"},{"name":"category","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;"}],"com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil":[{"name":"instance","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil;"},{"name":"PACKAGE_NAME","descriptor":"Ljava/lang/String;"},{"name":"CLIENT_ENVIRONMENT_UTIL","descriptor":"Ljava/lang/String;"},{"name":"SERVER_ENVIRONMENT_UTIL","descriptor":"Ljava/lang/String;"}],"com/misterpemodder/shulkerboxtooltip/impl/util/Key":[{"name":"UNKNOWN_KEY","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/util/Key;"},{"name":"inner","descriptor":"Lnet/minecraft/class_3675$class_306;"}],"com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger":[{"name":"inner","descriptor":"Lorg/apache/logging/log4j/Logger;"}],"com/misterpemodder/shulkerboxtooltip/impl/util/ShulkerBoxTooltipUtil":[],"com/misterpemodder/shulkerboxtooltip/impl/util/fabric/EnvironmentUtilImpl":[],"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder":[{"name":"marshaller","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl;"},{"name":"allowBareRootObject","descriptor":"Z"}],"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame":[{"name":"context","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ParserContext;"},{"name":"consumer","descriptor":"Ljava/util/function/Consumer;"},{"name":"startLine","descriptor":"I"},{"name":"startCol","descriptor":"I"}],"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson":[{"name":"contextStack","descriptor":"Ljava/util/Deque;"},{"name":"root","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;"},{"name":"line","descriptor":"I"},{"name":"column","descriptor":"I"},{"name":"withheldCodePoint","descriptor":"I"},{"name":"marshaller","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;"},{"name":"allowBareRootObject","descriptor":"Z"},{"name":"retries","descriptor":"I"},{"name":"delayedError","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/SyntaxError;"},{"name":"rootElement","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/AnnotatedElement;"}],"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement":[],"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$1":[{"name":"val$entry","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry;"},{"name":"this$0","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;"}],"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry":[{"name":"comment","descriptor":"Ljava/lang/String;"},{"name":"key","descriptor":"Ljava/lang/String;"},{"name":"value","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;"}],"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject":[{"name":"CAN_BE_UNQUOTED","descriptor":"Ljava/util/function/Predicate;"},{"name":"marshaller","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;"},{"name":"entries","descriptor":"Ljava/util/List;"}],"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive":[{"name":"TRUE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive;"},{"name":"FALSE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive;"},{"name":"value","descriptor":"Ljava/lang/Object;"}],"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/SyntaxError":[{"name":"startLine","descriptor":"I"},{"name":"startColumn","descriptor":"I"},{"name":"line","descriptor":"I"},{"name":"column","descriptor":"I"}],"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl":[{"name":"INSTANCE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl;"},{"name":"primitiveMarshallers","descriptor":"Ljava/util/Map;"},{"name":"typeAdapters","descriptor":"Ljava/util/Map;"},{"name":"serializers","descriptor":"Ljava/util/Map;"},{"name":"deserializers","descriptor":"Ljava/util/Map;"},{"name":"typeFactories","descriptor":"Ljava/util/Map;"}],"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ObjectParserContext":[{"name":"result","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;"},{"name":"assumeOpen","descriptor":"Z"},{"name":"comment","descriptor":"Ljava/lang/String;"},{"name":"openBraceFound","descriptor":"Z"},{"name":"noOpenBrace","descriptor":"Z"},{"name":"key","descriptor":"Ljava/lang/String;"},{"name":"colonFound","descriptor":"Z"},{"name":"closeBraceFound","descriptor":"Z"},{"name":"eof","descriptor":"Z"}],"com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/serializer/DeserializerFunctionPool":[{"name":"targetClass","descriptor":"Ljava/lang/Class;"},{"name":"values","descriptor":"Ljava/util/HashMap;"}]};
  function defineClass(name, methods) { CLASSES[name] = methods; }
  defineClass("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip", {
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
    "blockName(Ljava/lang/String;)Ljava/lang/String;": function (__ctx, __self, __args) {
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip.blockName:1")); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getConfigDir()Ljava/nio/file/Path;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipImpl","getConfigDir","()Ljava/nio/file/Path;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$registerProviders$0(Lnet/minecraft/class_2338;Lnet/minecraft/class_2680;)Lnet/minecraft/class_1263;": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("net/minecraft/world/level/block/entity/LecternBlockEntity")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/world/level/block/entity/LecternBlockEntity","<init>","(Lnet/minecraft/class_2338;Lnet/minecraft/class_2680;)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("net/minecraft/world/level/block/entity/LecternBlockEntity","field_17386","Lnet/minecraft/class_1263;", s.pop())); pc = 6; continue;
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("ShulkerBoxTooltip"); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("org/apache/logging/log4j/LogManager","getFormatterLogger","(Ljava/lang/String;)Lorg/apache/logging/log4j/Logger;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","<init>","(Lorg/apache/logging/log4j/Logger;)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","LOGGER","Lcom/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger;",r); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip"].__fields = [{"name":"MOD_ID","descriptor":"Ljava/lang/String;"},{"name":"MOD_NAME","descriptor":"Ljava/lang/String;"},{"name":"LOGGER","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger;"},{"name":"config","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;"},{"name":"savedConfig","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;"},{"name":"configTree","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient", {
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
      s.push(__ctx.invokeStatic("net/minecraft/client/Minecraft","getInstance","()Lnet/minecraft/class_310;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient","client","Lnet/minecraft/class_310;",r); pc = 2; continue;
    case 2:
      __pc = 2;
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/ClientNetworking","init","()V", []); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getConfig()Lcom/misterpemodder/shulkerboxtooltip/impl/config/ClientConfiguration;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/config/ClientConfiguration")); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isPreviewRequested()Z": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient","getConfig","()Lcom/misterpemodder/shulkerboxtooltip/impl/config/ClientConfiguration;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/ClientConfiguration","preview","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewCategory;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewCategory","alwaysOn","Z", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r != 0) { pc = 6; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient","isPreviewKeyPressed","()Z", [])); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 6; } continue;
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
    "getCurrentPreviewType(Z)Lcom/misterpemodder/shulkerboxtooltip/api/PreviewType;": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient","isPreviewRequested","()Z", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      l1 = s.pop(); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r != 0) { pc = 8; } else { pc = 6; } continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/api/PreviewType","COMPACT","Lcom/misterpemodder/shulkerboxtooltip/api/PreviewType;")); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    case 8:
      __pc = 8;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient","getConfig","()Lcom/misterpemodder/shulkerboxtooltip/impl/config/ClientConfiguration;", [])); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/ClientConfiguration","preview","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewCategory;", s.pop())); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewCategory","swapModes","Z", s.pop())); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); if (r == 0) { pc = 20; } else { pc = 12; } continue;
    case 12:
      __pc = 12;
      s.push(l1); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); if (r == 0) { pc = 28; } else { pc = 14; } continue;
    case 14:
      __pc = 14;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient","isFullPreviewKeyPressed","()Z", [])); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop(); if (r == 0) { pc = 18; } else { pc = 16; } continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/api/PreviewType","COMPACT","Lcom/misterpemodder/shulkerboxtooltip/api/PreviewType;")); pc = 17; continue;
    case 17:
      __pc = 17;
      pc = undefined; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/api/PreviewType","FULL","Lcom/misterpemodder/shulkerboxtooltip/api/PreviewType;")); pc = 19; continue;
    case 19:
      __pc = 19;
      return s.pop();
    case 20:
      __pc = 20;
      s.push(l1); pc = 21; continue;
    case 21:
      __pc = 21;
      r = s.pop(); if (r == 0) { pc = 28; } else { pc = 22; } continue;
    case 22:
      __pc = 22;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient","isFullPreviewKeyPressed","()Z", [])); pc = 23; continue;
    case 23:
      __pc = 23;
      r = s.pop(); if (r == 0) { pc = 26; } else { pc = 24; } continue;
    case 24:
      __pc = 24;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/api/PreviewType","FULL","Lcom/misterpemodder/shulkerboxtooltip/api/PreviewType;")); pc = 25; continue;
    case 25:
      __pc = 25;
      pc = undefined; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/api/PreviewType","COMPACT","Lcom/misterpemodder/shulkerboxtooltip/api/PreviewType;")); pc = 27; continue;
    case 27:
      __pc = 27;
      return s.pop();
    case 28:
      __pc = 28;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/api/PreviewType","NO_PREVIEW","Lcom/misterpemodder/shulkerboxtooltip/api/PreviewType;")); pc = 29; continue;
    case 29:
      __pc = 29;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isPreviewKeyPressed()Z": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient","previewKeyPressed","Z")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "isFullPreviewKeyPressed()Z": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient","fullPreviewKeyPressed","Z")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient"].__fields = [{"name":"previousStack","descriptor":"Lnet/minecraft/class_1799;"},{"name":"client","descriptor":"Lnet/minecraft/class_310;"},{"name":"wasPreviewAccessed","descriptor":"Z"},{"name":"previewKeyPressed","descriptor":"Z"},{"name":"fullPreviewKeyPressed","descriptor":"Z"},{"name":"lockPreviewKeyPressed","descriptor":"Z"},{"name":"lockKeyHintsEnabled","descriptor":"Z"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/api/ShulkerBoxTooltipApi", {
    "getCurrentPreviewType(Z)Lcom/misterpemodder/shulkerboxtooltip/api/PreviewType;": function (__ctx, __self, __args) {
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
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient","getCurrentPreviewType","(Z)Lcom/misterpemodder/shulkerboxtooltip/api/PreviewType;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerColors(Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorRegistry;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/api/ShulkerBoxTooltipApi"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy", {
    "values()[Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy","$VALUES","[Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("[Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;","clone","()Ljava/lang/Object;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "[Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "valueOf(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;": function (__ctx, __self, __args) {
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
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy")); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Ljava/lang/String;I)V": function (__ctx, __self, __args) {
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
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.Enum.<init>") + ' needs the client internals');
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "$values()[Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;": function (__ctx, __self, __args) {
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
      s.push(s[s.length - 1]); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy","IGNORE","Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;")); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy","FIRST_ITEM","Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;")); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(s[s.length - 1]); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(2); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy","SEPARATE","Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;")); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 14; continue;
    case 14:
      __pc = 14;
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("IGNORE"); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy","<init>","(Ljava/lang/String;I)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy","IGNORE","Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;",r); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(s[s.length - 1]); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push("FIRST_ITEM"); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(1); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy","<init>","(Ljava/lang/String;I)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy","FIRST_ITEM","Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;",r); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy")); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(s[s.length - 1]); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push("SEPARATE"); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(2); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy","<init>","(Ljava/lang/String;I)V", rv, av); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy","SEPARATE","Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;",r); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy","$values","()[Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;", [])); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy","$VALUES","[Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;",r); pc = 20; continue;
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy"].__fields = [{"name":"IGNORE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;"},{"name":"FIRST_ITEM","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;"},{"name":"SEPARATE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;"},{"name":"$VALUES","descriptor":"[Lcom/misterpemodder/shulkerboxtooltip/api/config/ItemStackMergingStrategy;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider", {
    "<init>(IZ)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultMaxInvSize","I",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultCanUseLootTables","Z",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(9); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultMaxRowSize","I",target, r); pc = 11; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultCompactMaxRowSize","I",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(IZI)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultMaxInvSize","I",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultCanUseLootTables","Z",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l3); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); if (r > 0) { pc = 13; } else { pc = 11; } continue;
    case 11:
      __pc = 11;
      s.push(9); pc = 12; continue;
    case 12:
      __pc = 12;
      pc = undefined; continue;
    case 13:
      __pc = 13;
      s.push(l3); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultMaxRowSize","I",target, r); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(0); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultCompactMaxRowSize","I",target, r); pc = 18; continue;
    case 18:
      __pc = 18;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(IZII)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultMaxInvSize","I",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultCanUseLootTables","Z",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l3); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); if (r > 0) { pc = 13; } else { pc = 11; } continue;
    case 11:
      __pc = 11;
      s.push(9); pc = 12; continue;
    case 12:
      __pc = 12;
      pc = undefined; continue;
    case 13:
      __pc = 13;
      s.push(l3); pc = 14; continue;
    case 14:
      __pc = 14;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultMaxRowSize","I",target, r); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l4); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultCompactMaxRowSize","I",target, r); pc = 18; continue;
    case 18:
      __pc = 18;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getInventoryMaxSize(Lcom/misterpemodder/shulkerboxtooltip/api/PreviewContext;)I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultMaxInvSize","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getItemCountTooltip(Ljava/util/List;Ljava/util/List;)Ljava/util/List;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getStatic("net/minecraft/network/chat/Style","field_24360","Lnet/minecraft/class_2583;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("net/minecraft/ChatFormatting","field_1080","Lnet/minecraft/class_124;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/Style","withColor","(Lnet/minecraft/class_124;)Lnet/minecraft/class_2583;", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","getItemListTooltip","(Ljava/util/List;Ljava/util/List;Lnet/minecraft/class_2583;)Ljava/util/List;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getItemListTooltip(Ljava/util/List;Ljava/util/List;Lnet/minecraft/class_2583;)Ljava/util/List;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","getItemCount","(Ljava/util/List;)I", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      l3 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l3); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); if (r <= 0) { pc = 16; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push("container.shulkerbox.contains"); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(1); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(s[s.length - 1]); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l3); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;[Ljava/lang/Object;)Lnet/minecraft/class_5250;", av)); pc = 14; continue;
    case 14:
      __pc = 14;
      l4 = s.pop(); pc = 15; continue;
    case 15:
      __pc = 15;
      pc = undefined; continue;
    case 16:
      __pc = 16;
      s.push("container.shulkerbox.empty"); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 18; continue;
    case 18:
      __pc = 18;
      l4 = s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l0); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l4); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l2); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/MutableComponent","setStyle","(Lnet/minecraft/class_2583;)Lnet/minecraft/class_5250;", rv, av)); pc = 23; continue;
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
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getMaxRowSize(Lcom/misterpemodder/shulkerboxtooltip/api/PreviewContext;)I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultMaxRowSize","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getCompactMaxRowSize(Lcom/misterpemodder/shulkerboxtooltip/api/PreviewContext;)I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultCompactMaxRowSize","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "canUseLootTables()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider","defaultCanUseLootTables","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getItemCount(Ljava/util/List;)I": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
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
      l1 = s.pop(); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r == null) { pc = 20; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","iterator","()Ljava/util/Iterator;", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      l2 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); if (r == 0) { pc = 20; } else { pc = 10; } continue;
    case 10:
      __pc = 10;
      s.push(l2); pc = 11; continue;
    case 11:
      __pc = 11;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.cast(s.pop(), "net/minecraft/world/item/ItemStack")); pc = 13; continue;
    case 13:
      __pc = 13;
      l3 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l3); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/item/ItemStack","getItem","()Lnet/minecraft/class_1792;", rv, [])); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("net/minecraft/world/item/Items","field_8162","Lnet/minecraft/class_1792;")); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop(); var l = s.pop(); if (l == r) { pc = 19; } else { pc = 18; } continue;
    case 18:
      __pc = 18;
      l1 = (l1 | 0) + 1; pc = 19; continue;
    case 19:
      __pc = 19;
      pc = undefined; continue;
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
  CLASSES["com/misterpemodder/shulkerboxtooltip/api/provider/BlockEntityPreviewProvider"].__fields = [{"name":"defaultMaxInvSize","descriptor":"I"},{"name":"defaultCanUseLootTables","descriptor":"Z"},{"name":"defaultMaxRowSize","descriptor":"I"},{"name":"defaultCompactMaxRowSize","descriptor":"I"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider", {
    "isFullPreviewAvailable(Lcom/misterpemodder/shulkerboxtooltip/api/PreviewContext;)Z": function (__ctx, __self, __args) {
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
    "getRenderer()Lcom/misterpemodder/shulkerboxtooltip/api/renderer/PreviewRenderer;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/api/renderer/PreviewRenderer","getDefaultRendererInstance","()Lcom/misterpemodder/shulkerboxtooltip/api/renderer/PreviewRenderer;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/api/renderer/PreviewRenderer", {
    "getDefaultRendererInstance()Lcom/misterpemodder/shulkerboxtooltip/api/renderer/PreviewRenderer;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration","preview","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewCategory;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewCategory","theme","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme","VANILLA","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;")); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); var l = s.pop(); if (l != r) { pc = 7; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/api/renderer/PreviewRenderer","getVanillaRendererInstance","()Lcom/misterpemodder/shulkerboxtooltip/api/renderer/PreviewRenderer;", [])); pc = 6; continue;
    case 6:
      __pc = 6;
      pc = undefined; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/api/renderer/PreviewRenderer","getModRendererInstance","()Lcom/misterpemodder/shulkerboxtooltip/api/renderer/PreviewRenderer;", [])); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getModRendererInstance()Lcom/misterpemodder/shulkerboxtooltip/api/renderer/PreviewRenderer;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/renderer/ModPreviewRenderer","INSTANCE","Lcom/misterpemodder/shulkerboxtooltip/impl/renderer/ModPreviewRenderer;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getVanillaRendererInstance()Lcom/misterpemodder/shulkerboxtooltip/api/renderer/PreviewRenderer;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/renderer/VanillaPreviewRenderer","INSTANCE","Lcom/misterpemodder/shulkerboxtooltip/impl/renderer/VanillaPreviewRenderer;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/api/renderer/PreviewRenderer"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipClientImpl", {
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient","<init>","()V", rv, []); pc = 2; continue;
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
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltipClient","init","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/rendering/v1/TooltipComponentCallback","EVENT","Lnet/fabricmc/fabric/api/event/Event;")); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipClientImpl","lambda$onInitializeClient$0","(Lnet/minecraft/class_5632;)Lnet/minecraft/class_5684;", null, dv)); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$onInitializeClient$0(Lnet/minecraft/class_5632;)Lnet/minecraft/class_5684;": function (__ctx, __self, __args) {
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
      s.push(__ctx.isInstance(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewTooltipComponent")); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 11; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewTooltipComponent")); pc = 5; continue;
    case 5:
      __pc = 5;
      l1 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewClientTooltipComponent")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(s[s.length - 1]); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l1); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewClientTooltipComponent","<init>","(Lcom/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewTooltipComponent;)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    case 11:
      __pc = 11;
      s.push(null); pc = 12; continue;
    case 12:
      __pc = 12;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipClientImpl"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipImpl", {
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","<init>","()V", rv, []); pc = 2; continue;
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
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","init","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getConfigDir()Ljava/nio/file/Path;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("net/fabricmc/loader/api/FabricLoader","getInstance","()Lnet/fabricmc/loader/api/FabricLoader;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/loader/api/FabricLoader","getConfigDir","()Ljava/nio/file/Path;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipImpl"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/ModMenuCompat", {
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
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/ModMenuCompat"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer", {
    "<init>(Ljava/lang/String;Ljava/util/function/Supplier;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer","modId","Ljava/lang/String;",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer","apiImplSupplier","Ljava/util/function/Supplier;",target, r); pc = 8; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer.toString:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer.hashCode:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "modId()Ljava/lang/String;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer","modId","Ljava/lang/String;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "apiImplSupplier()Ljava/util/function/Supplier;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer","apiImplSupplier","Ljava/util/function/Supplier;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer"].__fields = [{"name":"modId","descriptor":"Ljava/lang/String;"},{"name":"apiImplSupplier","descriptor":"Ljava/util/function/Supplier;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/PluginManager", {
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
    "gatherPlugins()V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":41,"end":50,"handler":51}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/PluginManager","plugins","Ljava/util/Map;")); pc = 1; continue;
    case 1:
      __pc = 1;
      r = s.pop(); if (r == null) { pc = 3; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      return;
    case 3:
      __pc = 3;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/PluginManager","getPluginContainers","()Ljava/util/List;", [])); pc = 4; continue;
    case 4:
      __pc = 4;
      l0 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","size","()I", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop() | 0; switch (r) {
        case 0: pc = 8; break;
        case 1: pc = 10; break;
        default: pc = 12; break;
      } continue;
    case 8:
      __pc = 8;
      s.push("Loading %d plugins"); pc = 9; continue;
    case 9:
      __pc = 9;
      pc = undefined; continue;
    case 10:
      __pc = 10;
      s.push("Loading %d plugin: %s"); pc = 11; continue;
    case 11:
      __pc = 11;
      pc = undefined; continue;
    case 12:
      __pc = 12;
      s.push("Loading %d plugins: %s"); pc = 13; continue;
    case 13:
      __pc = 13;
      l1 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/PluginManager","LOGGER","Lcom/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger;")); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l1); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l0); pc = 17; continue;
    case 17:
      __pc = 17;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","size","()I", rv, [])); pc = 18; continue;
    case 18:
      __pc = 18;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l0); pc = 20; continue;
    case 20:
      __pc = 20;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","stream","()Ljava/util/stream/Stream;", rv, [])); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer","modId","()Ljava/lang/String;", null, [])); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/stream/Stream","map","(Ljava/util/function/Function;)Ljava/util/stream/Stream;", rv, av)); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(", "); pc = 24; continue;
    case 24:
      __pc = 24;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.stream.Collectors.joining") + ' needs the client internals');
    case 25:
      __pc = 25;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.stream.Stream.collect") + ' needs the client internals');
    case 26:
      __pc = 26;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","info","(Ljava/lang/String;Ljava/lang/Object;Ljava/lang/Object;)V", rv, av); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(__ctx.newInstance("java/util/HashMap")); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(s[s.length - 1]); pc = 29; continue;
    case 29:
      __pc = 29;
      var rv = s.pop();
      __ctx.invoke("java/util/HashMap","<init>","()V", rv, []); pc = 30; continue;
    case 30:
      __pc = 30;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/PluginManager","plugins","Ljava/util/Map;",r); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l0); pc = 32; continue;
    case 32:
      __pc = 32;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","iterator","()Ljava/util/Iterator;", rv, [])); pc = 33; continue;
    case 33:
      __pc = 33;
      l2 = s.pop(); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(l2); pc = 35; continue;
    case 35:
      __pc = 35;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 36; continue;
    case 36:
      __pc = 36;
      r = s.pop(); if (r == 0) { pc = 59; } else { pc = 37; } continue;
    case 37:
      __pc = 37;
      s.push(l2); pc = 38; continue;
    case 38:
      __pc = 38;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer")); pc = 40; continue;
    case 40:
      __pc = 40;
      l3 = s.pop(); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/PluginManager","plugins","Ljava/util/Map;")); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(l3); pc = 43; continue;
    case 43:
      __pc = 43;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer","modId","()Ljava/lang/String;", rv, [])); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(l3); pc = 45; continue;
    case 45:
      __pc = 45;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer","apiImplSupplier","()Ljava/util/function/Supplier;", rv, [])); pc = 46; continue;
    case 46:
      __pc = 46;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/function/Supplier","get","()Ljava/lang/Object;", rv, [])); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/api/ShulkerBoxTooltipApi")); pc = 48; continue;
    case 48:
      __pc = 48;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","put","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 49; continue;
    case 49:
      __pc = 49;
      s.pop(); pc = 50; continue;
    case 50:
      __pc = 50;
      pc = undefined; continue;
    case 51:
      __pc = 51;
      l4 = s.pop(); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/PluginManager","LOGGER","Lcom/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger;")); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(l3); pc = 54; continue;
    case 54:
      __pc = 54;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer","modId","()Ljava/lang/String;", rv, [])); pc = 55; continue;
    case 55:
      __pc = 55;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/PluginManager.gatherPlugins:172")); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(l4); pc = 57; continue;
    case 57:
      __pc = 57;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","error","(Ljava/lang/String;Ljava/lang/Exception;)V", rv, av); pc = 58; continue;
    case 58:
      __pc = 58;
      pc = undefined; continue;
    case 59:
      __pc = 59;
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
    "areColorsLoaded()Z": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/PluginManager","colorsLoaded","Ljava/util/concurrent/atomic/AtomicBoolean;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.pop();
      throw __ctx.toError(("java.util.concurrent.atomic.AtomicBoolean.get") + ' needs the client internals');
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getPluginContainers()Ljava/util/List;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/fabric/PluginManagerImpl","getPluginContainers","()Ljava/util/List;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("ShulkerBoxTooltip Plugins"); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("org/apache/logging/log4j/LogManager","getFormatterLogger","(Ljava/lang/String;)Lorg/apache/logging/log4j/Logger;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","<init>","(Lorg/apache/logging/log4j/Logger;)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/PluginManager","LOGGER","Lcom/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger;",r); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(null); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/PluginManager","plugins","Ljava/util/Map;",r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.newInstance("java/util/concurrent/atomic/AtomicBoolean")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(s[s.length - 1]); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(0); pc = 11; continue;
    case 11:
      __pc = 11;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.concurrent.atomic.AtomicBoolean.<init>") + ' needs the client internals');
    case 12:
      __pc = 12;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/PluginManager","colorsLoaded","Ljava/util/concurrent/atomic/AtomicBoolean;",r); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.newInstance("java/util/concurrent/atomic/AtomicBoolean")); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(s[s.length - 1]); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(0); pc = 16; continue;
    case 16:
      __pc = 16;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.concurrent.atomic.AtomicBoolean.<init>") + ' needs the client internals');
    case 17:
      __pc = 17;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/PluginManager","providersLoaded","Ljava/util/concurrent/atomic/AtomicBoolean;",r); pc = 18; continue;
    case 18:
      __pc = 18;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/PluginManager"].__fields = [{"name":"LOGGER","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger;"},{"name":"plugins","descriptor":"Ljava/util/Map;"},{"name":"colorsLoaded","descriptor":"Ljava/util/concurrent/atomic/AtomicBoolean;"},{"name":"providersLoaded","descriptor":"Ljava/util/concurrent/atomic/AtomicBoolean;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl", {
    "<init>(Lnet/minecraft/class_1799;Lnet/minecraft/class_1657;Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;Lnet/minecraft/class_7225$class_7874;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl","stack","Lnet/minecraft/class_1799;",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl","owner","Lnet/minecraft/class_1657;",target, r); pc = 8; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;",target, r); pc = 11; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl","registryLookup","Lnet/minecraft/class_7225$class_7874;",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl.toString:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl.hashCode:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "stack()Lnet/minecraft/class_1799;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl","stack","Lnet/minecraft/class_1799;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "owner()Lnet/minecraft/class_1657;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl","owner","Lnet/minecraft/class_1657;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "config()Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registryLookup()Lnet/minecraft/class_7225$class_7874;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl","registryLookup","Lnet/minecraft/class_7225$class_7874;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "config()Lcom/misterpemodder/shulkerboxtooltip/api/config/PreviewConfiguration;": function (__ctx, __self, __args) {
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
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl","config","()Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/PreviewContextImpl"].__fields = [{"name":"stack","descriptor":"Lnet/minecraft/class_1799;"},{"name":"owner","descriptor":"Lnet/minecraft/class_1657;"},{"name":"config","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;"},{"name":"registryLookup","descriptor":"Lnet/minecraft/class_7225$class_7874;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl", {
    "<init>([F[F)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","rgbComponents","[F",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","defaultRgbComponents","[F",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setRgb([F)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","rgbComponents","[F", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(0); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","rgbComponents","[F", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(1); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(1); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","rgbComponents","[F", s.pop())); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(2); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l1); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(2); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 20; continue;
    case 20:
      __pc = 20;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 21; continue;
    case 21:
      __pc = 21;
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
      s.push("ColorKey(rgb=#%x, defaultRgb=#%x)"); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(2); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(s[s.length - 1]); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","rgb","()I", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(s[s.length - 1]); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","defaultRgb","()I", rv, [])); pc = 13; continue;
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
      s.push(__ctx.invokeStatic("java/lang/String","format","(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 16; continue;
    case 16:
      __pc = 16;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl.hashCode:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "rgbComponents()[F": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","rgbComponents","[F", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "defaultRgbComponents()[F": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","defaultRgbComponents","[F", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$static$4(Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorKey;)Lcom/mojang/serialization/DataResult;": function (__ctx, __self, __args) {
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
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","lambda$static$3","(Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorKey;)Ljava/lang/String;", null, dv)); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/serialization/DataResult","error","(Ljava/util/function/Supplier;)Lcom/mojang/serialization/DataResult;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$static$3(Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorKey;)Ljava/lang/String;": function (__ctx, __self, __args) {
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
      s.push(__ctx.invokeStatic("java/lang/String","valueOf","(Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl.lambda$static$3:4")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$static$2(Lcom/mojang/datafixers/util/Pair;)Lcom/mojang/serialization/DataResult;": function (__ctx, __self, __args) {
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
      s.push(__ctx.invoke("com/mojang/datafixers/util/Pair","getFirst","()Ljava/lang/Object;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "net/minecraft/resources/Identifier")); pc = 3; continue;
    case 3:
      __pc = 3;
      l1 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/datafixers/util/Pair","getSecond","()Ljava/lang/Object;", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "java/lang/String")); pc = 7; continue;
    case 7:
      __pc = 7;
      l2 = s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl","INSTANCE","Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl;")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l1); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl","category","(Lnet/minecraft/class_2960;)Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l2); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","key","(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorKey;", rv, av)); pc = 13; continue;
    case 13:
      __pc = 13;
      l3 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l3); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop(); if (r != null) { pc = 21; } else { pc = 16; } continue;
    case 16:
      __pc = 16;
      s.push(l2); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l1); pc = 18; continue;
    case 18:
      __pc = 18;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","lambda$static$1","(Ljava/lang/String;Lnet/minecraft/class_2960;)Ljava/lang/String;", null, dv)); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/serialization/DataResult","error","(Ljava/util/function/Supplier;)Lcom/mojang/serialization/DataResult;", av)); pc = 20; continue;
    case 20:
      __pc = 20;
      return s.pop();
    case 21:
      __pc = 21;
      s.push(l3); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/serialization/DataResult","success","(Ljava/lang/Object;)Lcom/mojang/serialization/DataResult;", av)); pc = 23; continue;
    case 23:
      __pc = 23;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$static$1(Ljava/lang/String;Lnet/minecraft/class_2960;)Ljava/lang/String;": function (__ctx, __self, __args) {
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
      s.push(__ctx.invokeStatic("java/lang/String","valueOf","(Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl.lambda$static$1:5")); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$static$0(Lcom/mojang/serialization/codecs/RecordCodecBuilder$Instance;)Lcom/mojang/datafixers/kinds/App;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getStatic("net/minecraft/resources/Identifier","field_25139","Lcom/mojang/serialization/Codec;")); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("category"); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/Codec","fieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.invoke("com/mojang/datafixers/util/Pair","getFirst","()Ljava/lang/Object;", null, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","STRING","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("id"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/PrimitiveCodec","fieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.invoke("com/mojang/datafixers/util/Pair","getSecond","()Ljava/lang/Object;", null, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/RecordCodecBuilder$Instance","group","(Lcom/mojang/datafixers/kinds/App;Lcom/mojang/datafixers/kinds/App;)Lcom/mojang/datafixers/Products$P2;", rv, av)); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/mojang/datafixers/util/Pair","of","(Ljava/lang/Object;Ljava/lang/Object;)Lcom/mojang/datafixers/util/Pair;", null, dv)); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/datafixers/Products$P2","apply","(Lcom/mojang/datafixers/kinds/Applicative;Ljava/util/function/BiFunction;)Lcom/mojang/datafixers/kinds/App;", rv, av)); pc = 15; continue;
    case 15:
      __pc = 15;
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
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","lambda$static$0","(Lcom/mojang/serialization/codecs/RecordCodecBuilder$Instance;)Lcom/mojang/datafixers/kinds/App;", null, dv)); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/serialization/codecs/RecordCodecBuilder","create","(Ljava/util/function/Function;)Lcom/mojang/serialization/Codec;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","CATEGORY_AND_ID_CODEC","Lcom/mojang/serialization/Codec;",r); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","CATEGORY_AND_ID_CODEC","Lcom/mojang/serialization/Codec;")); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","lambda$static$2","(Lcom/mojang/datafixers/util/Pair;)Lcom/mojang/serialization/DataResult;", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","lambda$static$4","(Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorKey;)Lcom/mojang/serialization/DataResult;", null, dv)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/Codec","flatXmap","(Ljava/util/function/Function;Ljava/util/function/Function;)Lcom/mojang/serialization/Codec;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","FULL_CODEC","Lcom/mojang/serialization/Codec;",r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","INT","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/api/color/ColorKey","ofRgb","(I)Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorKey;", null, dv)); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/api/color/ColorKey","rgb","()I", null, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/PrimitiveCodec","xmap","(Ljava/util/function/Function;Ljava/util/function/Function;)Lcom/mojang/serialization/Codec;", rv, av)); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","INT_CODEC","Lcom/mojang/serialization/Codec;",r); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","FULL_CODEC","Lcom/mojang/serialization/Codec;")); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","INT_CODEC","Lcom/mojang/serialization/Codec;")); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/serialization/Codec","withAlternative","(Lcom/mojang/serialization/Codec;Lcom/mojang/serialization/Codec;)Lcom/mojang/serialization/Codec;", av)); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","CODEC","Lcom/mojang/serialization/Codec;",r); pc = 17; continue;
    case 17:
      __pc = 17;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl"].__fields = [{"name":"rgbComponents","descriptor":"[F"},{"name":"defaultRgbComponents","descriptor":"[F"},{"name":"CATEGORY_AND_ID_CODEC","descriptor":"Lcom/mojang/serialization/Codec;"},{"name":"FULL_CODEC","descriptor":"Lcom/mojang/serialization/Codec;"},{"name":"INT_CODEC","descriptor":"Lcom/mojang/serialization/Codec;"},{"name":"CODEC","descriptor":"Lcom/mojang/serialization/Codec;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category", {
    "<init>(Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl;Lnet/minecraft/class_2960;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","this$0","Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl;",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(null); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","keys","Ljava/util/Map;",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      throw __ctx.toError(("java.util.Collections.emptyMap") + ' needs the client internals');
    case 10:
      __pc = 10;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","unlocalizedNames","Ljava/util/Map;",target, r); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      throw __ctx.toError(("java.util.Collections.emptyMap") + ' needs the client internals');
    case 13:
      __pc = 13;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","keysView","Ljava/util/Map;",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(null); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","lateKeyValues","Ljava/util/Map;",target, r); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l2); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","id","Lnet/minecraft/class_2960;",target, r); pc = 20; continue;
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "key(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorKey;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","keysView","Ljava/util/Map;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","get","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/api/color/ColorKey")); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setRgbKeyLater(Ljava/lang/String;I)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","lateKeyValues","Ljava/util/Map;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r != null) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.newInstance("java/util/HashMap")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(s[s.length - 1]); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      __ctx.invoke("java/util/HashMap","<init>","()V", rv, []); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","lateKeyValues","Ljava/util/Map;",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","lateKeyValues","Ljava/util/Map;", s.pop())); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l2); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","put","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 14; continue;
    case 14:
      __pc = 14;
      s.pop(); pc = 15; continue;
    case 15:
      __pc = 15;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "keyUnlocalizedName(Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorKey;)Ljava/lang/String;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","unlocalizedNames","Ljava/util/Map;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","get","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/String")); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "register(Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorKey;Ljava/lang/String;Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorRegistry$Category;": function (__ctx, __self, __args) {
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
      s.push("cannot register null color key"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/google/common/base/Preconditions","checkNotNull","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l2); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push("cannot register null color ID"); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/google/common/base/Preconditions","checkNotNull","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","this$0","Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl;", s.pop())); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl","locked","Z", s.pop())); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); if (r == 0) { pc = 17; } else { pc = 12; } continue;
    case 12:
      __pc = 12;
      s.push(__ctx.newInstance("java/lang/IllegalStateException")); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(s[s.length - 1]); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push("Cannot register color keys outside the scope of ShulkerBoxTooltipApi.registerColors()"); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("java/lang/IllegalStateException","<init>","(Ljava/lang/String;)V", rv, av); pc = 16; continue;
    case 16:
      __pc = 16;
      throw __ctx.toError(s.pop());
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","registerSelf","()V", rv, []); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l0); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l1); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l2); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l3); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","registerKey","(Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorKey;Ljava/lang/String;Ljava/lang/String;)V", rv, av); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l0); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l1); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l2); pc = 27; continue;
    case 27:
      __pc = 27;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","setLateKeyValue","(Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorKey;Ljava/lang/String;)V", rv, av); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l0); pc = 29; continue;
    case 29:
      __pc = 29;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerSelf()V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","keys","Ljava/util/Map;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == null) { pc = 4; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      return;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.newInstance("java/util/LinkedHashMap")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.pop();
      throw __ctx.toError(("java.util.LinkedHashMap.<init>") + ' needs the client internals');
    case 8:
      __pc = 8;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","keys","Ljava/util/Map;",target, r); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l0); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.newInstance("java/util/HashMap")); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(s[s.length - 1]); pc = 12; continue;
    case 12:
      __pc = 12;
      var rv = s.pop();
      __ctx.invoke("java/util/HashMap","<init>","()V", rv, []); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","unlocalizedNames","Ljava/util/Map;",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l0); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","keys","Ljava/util/Map;", s.pop())); pc = 17; continue;
    case 17:
      __pc = 17;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Collections.unmodifiableMap") + ' needs the client internals');
    case 18:
      __pc = 18;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","keysView","Ljava/util/Map;",target, r); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l0); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","this$0","Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl;", s.pop())); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl","categories","Ljava/util/Map;", s.pop())); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l0); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","id","Lnet/minecraft/class_2960;", s.pop())); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l0); pc = 25; continue;
    case 25:
      __pc = 25;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","put","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 26; continue;
    case 26:
      __pc = 26;
      s.pop(); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l0); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","this$0","Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl;", s.pop())); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl","emptyCategories","Ljava/util/Map;", s.pop())); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l0); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","id","Lnet/minecraft/class_2960;", s.pop())); pc = 32; continue;
    case 32:
      __pc = 32;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.Map.remove") + ' needs the client internals');
    case 33:
      __pc = 33;
      s.pop(); pc = 34; continue;
    case 34:
      __pc = 34;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerKey(Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorKey;Ljava/lang/String;Ljava/lang/String;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","keys","Ljava/util/Map;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","containsKey","(Ljava/lang/Object;)Z", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); if (r == 0) { pc = 12; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","LOGGER","Lcom/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger;")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l2); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","id","Lnet/minecraft/class_2960;", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/String","valueOf","(Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category.registerKey:24")); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","warn","(Ljava/lang/String;)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l3); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); if (r != null) { pc = 23; } else { pc = 14; } continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","id","Lnet/minecraft/class_2960;", s.pop())); pc = 16; continue;
    case 16:
      __pc = 16;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/resources/Identifier","getNamespace","()Ljava/lang/String;", rv, [])); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","id","Lnet/minecraft/class_2960;", s.pop())); pc = 19; continue;
    case 19:
      __pc = 19;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/resources/Identifier","getPath","()Ljava/lang/String;", rv, [])); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l2); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category.registerKey:51")); pc = 22; continue;
    case 22:
      __pc = 22;
      l3 = s.pop(); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","keys","Ljava/util/Map;", s.pop())); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l2); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l1); pc = 27; continue;
    case 27:
      __pc = 27;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","put","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 28; continue;
    case 28:
      __pc = 28;
      s.pop(); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l0); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","unlocalizedNames","Ljava/util/Map;", s.pop())); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l1); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(l3); pc = 33; continue;
    case 33:
      __pc = 33;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","put","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 34; continue;
    case 34:
      __pc = 34;
      s.pop(); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l0); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","this$0","Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl;", s.pop())); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(s[s.length - 1]); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl","registeredKeysCount","I", s.pop())); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(1); pc = 40; continue;
    case 40:
      __pc = 40;
      r = s.pop(); s.push(s.pop() + r); pc = 41; continue;
    case 41:
      __pc = 41;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl","registeredKeysCount","I",target, r); pc = 42; continue;
    case 42:
      __pc = 42;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "keys()Ljava/util/Map;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","keysView","Ljava/util/Map;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category"].__fields = [{"name":"id","descriptor":"Lnet/minecraft/class_2960;"},{"name":"keys","descriptor":"Ljava/util/Map;"},{"name":"unlocalizedNames","descriptor":"Ljava/util/Map;"},{"name":"keysView","descriptor":"Ljava/util/Map;"},{"name":"lateKeyValues","descriptor":"Ljava/util/Map;"},{"name":"this$0","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl", {
    "category(Lnet/minecraft/class_2960;)Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl","categories","Ljava/util/Map;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","get","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category")); pc = 5; continue;
    case 5:
      __pc = 5;
      l2 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l2); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); if (r != null) { pc = 16; } else { pc = 8; } continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl","emptyCategories","Ljava/util/Map;", s.pop())); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl","lambda$category$0","(Lnet/minecraft/class_2960;)Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category;", null, dv)); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","computeIfAbsent","(Ljava/lang/Object;Ljava/util/function/Function;)Ljava/lang/Object;", rv, av)); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category")); pc = 15; continue;
    case 15:
      __pc = 15;
      return s.pop();
    case 16:
      __pc = 16;
      s.push(l2); pc = 17; continue;
    case 17:
      __pc = 17;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setLocked(Z)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl","locked","Z",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "resetRegisteredKeysCount()V": function (__ctx, __self, __args) {
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
      s.push(0); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl","registeredKeysCount","I",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registeredKeysCount()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl","registeredKeysCount","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$category$0(Lnet/minecraft/class_2960;)Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category;": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl$Category","<init>","(Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl;Lnet/minecraft/class_2960;)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl"].__fields = [{"name":"categories","descriptor":"Ljava/util/Map;"},{"name":"emptyCategories","descriptor":"Ljava/util/Map;"},{"name":"categoriesView","descriptor":"Ljava/util/Map;"},{"name":"locked","descriptor":"Z"},{"name":"registeredKeysCount","descriptor":"I"},{"name":"INSTANCE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType", {
    "values()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType","$VALUES","[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;","clone","()Ljava/lang/Object;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "valueOf(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;": function (__ctx, __self, __args) {
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
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType")); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Ljava/lang/String;I)V": function (__ctx, __self, __args) {
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
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.Enum.<init>") + ' needs the client internals');
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "$values()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;": function (__ctx, __self, __args) {
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
      s.push(s[s.length - 1]); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType","NONE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;")); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType","ACTIVE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;")); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(s[s.length - 1]); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(2); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType","PASSIVE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;")); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 14; continue;
    case 14:
      __pc = 14;
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("NONE"); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType","<init>","(Ljava/lang/String;I)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType","NONE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;",r); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(s[s.length - 1]); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push("ACTIVE"); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(1); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType","<init>","(Ljava/lang/String;I)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType","ACTIVE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;",r); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType")); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(s[s.length - 1]); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push("PASSIVE"); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(2); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType","<init>","(Ljava/lang/String;I)V", rv, av); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType","PASSIVE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;",r); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType","$values","()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;", [])); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType","$VALUES","[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;",r); pc = 20; continue;
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType"].__fields = [{"name":"NONE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;"},{"name":"ACTIVE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;"},{"name":"PASSIVE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;"},{"name":"$VALUES","descriptor":"[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType", {
    "values()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType","$VALUES","[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;","clone","()Ljava/lang/Object;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "valueOf(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;": function (__ctx, __self, __args) {
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
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType")); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Ljava/lang/String;I)V": function (__ctx, __self, __args) {
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
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.Enum.<init>") + ' needs the client internals');
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "$values()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;": function (__ctx, __self, __args) {
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
      s.push(s[s.length - 1]); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType","HIDE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;")); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType","SIMPLE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;")); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(s[s.length - 1]); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(2); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType","ADVANCED","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;")); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 14; continue;
    case 14:
      __pc = 14;
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("HIDE"); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType","<init>","(Ljava/lang/String;I)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType","HIDE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;",r); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(s[s.length - 1]); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push("SIMPLE"); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(1); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType","<init>","(Ljava/lang/String;I)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType","SIMPLE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;",r); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType")); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(s[s.length - 1]); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push("ADVANCED"); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(2); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType","<init>","(Ljava/lang/String;I)V", rv, av); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType","ADVANCED","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;",r); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType","$values","()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;", [])); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType","$VALUES","[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;",r); pc = 20; continue;
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType"].__fields = [{"name":"HIDE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;"},{"name":"SIMPLE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;"},{"name":"ADVANCED","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;"},{"name":"$VALUES","descriptor":"[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$LootTableInfoType;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition", {
    "values()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","$VALUES","[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;","clone","()Ljava/lang/Object;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "valueOf(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;": function (__ctx, __self, __args) {
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
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition")); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Ljava/lang/String;I)V": function (__ctx, __self, __args) {
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
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.Enum.<init>") + ' needs the client internals');
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "$values()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(4); pc = 1; continue;
    case 1:
      __pc = 1;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(s[s.length - 1]); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","INSIDE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;")); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","OUTSIDE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;")); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(s[s.length - 1]); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(2); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","OUTSIDE_TOP","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;")); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(s[s.length - 1]); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(3); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","OUTSIDE_BOTTOM","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;")); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 18; continue;
    case 18:
      __pc = 18;
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("INSIDE"); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","<init>","(Ljava/lang/String;I)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","INSIDE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;",r); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(s[s.length - 1]); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push("OUTSIDE"); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(1); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","<init>","(Ljava/lang/String;I)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","OUTSIDE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;",r); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition")); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(s[s.length - 1]); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push("OUTSIDE_TOP"); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(2); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","<init>","(Ljava/lang/String;I)V", rv, av); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","OUTSIDE_TOP","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;",r); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition")); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(s[s.length - 1]); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push("OUTSIDE_BOTTOM"); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(3); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","<init>","(Ljava/lang/String;I)V", rv, av); pc = 23; continue;
    case 23:
      __pc = 23;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","OUTSIDE_BOTTOM","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;",r); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","$values","()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;", [])); pc = 25; continue;
    case 25:
      __pc = 25;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition","$VALUES","[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;",r); pc = 26; continue;
    case 26:
      __pc = 26;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition"].__fields = [{"name":"INSIDE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;"},{"name":"OUTSIDE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;"},{"name":"OUTSIDE_TOP","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;"},{"name":"OUTSIDE_BOTTOM","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;"},{"name":"$VALUES","descriptor":"[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewPosition;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType", {
    "values()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType","$VALUES","[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;","clone","()Ljava/lang/Object;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "valueOf(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;": function (__ctx, __self, __args) {
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
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType")); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Ljava/lang/String;I)V": function (__ctx, __self, __args) {
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
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.Enum.<init>") + ' needs the client internals');
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "$values()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;": function (__ctx, __self, __args) {
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
      s.push(s[s.length - 1]); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType","VANILLA","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;")); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType","MOD","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;")); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(s[s.length - 1]); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(2); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType","NONE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;")); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 14; continue;
    case 14:
      __pc = 14;
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("VANILLA"); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType","<init>","(Ljava/lang/String;I)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType","VANILLA","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;",r); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(s[s.length - 1]); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push("MOD"); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(1); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType","<init>","(Ljava/lang/String;I)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType","MOD","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;",r); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType")); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(s[s.length - 1]); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push("NONE"); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(2); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType","<init>","(Ljava/lang/String;I)V", rv, av); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType","NONE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;",r); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType","$values","()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;", [])); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType","$VALUES","[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;",r); pc = 20; continue;
    case 20:
      __pc = 20;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType"].__fields = [{"name":"VANILLA","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;"},{"name":"MOD","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;"},{"name":"NONE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;"},{"name":"$VALUES","descriptor":"[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ShulkerBoxTooltipType;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme", {
    "values()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme","$VALUES","[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;")); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;","clone","()Ljava/lang/Object;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.cast(s.pop(), "[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "valueOf(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;": function (__ctx, __self, __args) {
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
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme")); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Ljava/lang/String;I)V": function (__ctx, __self, __args) {
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
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.Enum.<init>") + ' needs the client internals');
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "$values()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(2); pc = 1; continue;
    case 1:
      __pc = 1;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(s[s.length - 1]); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme","SHULKERBOXTOOLTIP","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;")); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme","VANILLA","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;")); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); var idx = s.pop() | 0; var arr = s.pop(); arr[idx] = r; pc = 10; continue;
    case 10:
      __pc = 10;
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("SHULKERBOXTOOLTIP"); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme","<init>","(Ljava/lang/String;I)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme","SHULKERBOXTOOLTIP","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;",r); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(s[s.length - 1]); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push("VANILLA"); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(1); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme","<init>","(Ljava/lang/String;I)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme","VANILLA","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;",r); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme","$values","()[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;", [])); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme","$VALUES","[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;",r); pc = 14; continue;
    case 14:
      __pc = 14;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme"].__fields = [{"name":"SHULKERBOXTOOLTIP","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;"},{"name":"VANILLA","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;"},{"name":"$VALUES","descriptor":"[Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$Theme;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/config/ConfigurationHandler", {
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
    "register()Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;": function (__ctx, __self, __args) {
    var l0;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/config/ConfigurationHandler","serializer","Lcom/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer;",r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/config/ConfigurationHandler","loadFromFile","()Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;", [])); pc = 5; continue;
    case 5:
      __pc = 5;
      l0 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/config/ConfigurationHandler","saveToFile","(Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;)V", av); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "saveToFile(Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":24,"end":27,"handler":28}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","savedConfig","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;")); pc = 1; continue;
    case 1:
      __pc = 1;
      r = s.pop(); if (r == null) { pc = 6; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","configTree","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode;")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","savedConfig","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;")); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","copy","(Ljava/lang/Object;Ljava/lang/Object;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;")); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); if (r == null) { pc = 24; } else { pc = 8; } continue;
    case 8:
      __pc = 8;
      s.push(__ctx.newInstance("net/minecraft/nbt/CompoundTag")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(s[s.length - 1]); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      __ctx.invoke("net/minecraft/nbt/CompoundTag","<init>","()V", rv, []); pc = 11; continue;
    case 11:
      __pc = 11;
      l1 = s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","configTree","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode;")); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;")); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l1); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","writeToNbt","(Ljava/lang/Object;Lnet/minecraft/class_2487;)V", rv, av); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","configTree","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode;")); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;")); pc = 19; continue;
    case 19:
      __pc = 19;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","copy","(Ljava/lang/Object;Ljava/lang/Object;)V", rv, av); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","configTree","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode;")); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;")); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l1); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","readFromNbt","(Ljava/lang/Object;Lnet/minecraft/class_2487;)V", rv, av); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/ConfigurationHandler","serializer","Lcom/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer;")); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l0); pc = 26; continue;
    case 26:
      __pc = 26;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer","serialize","(Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;)V", rv, av); pc = 27; continue;
    case 27:
      __pc = 27;
      pc = undefined; continue;
    case 28:
      __pc = 28;
      l1 = s.pop(); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","LOGGER","Lcom/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger;")); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push("Failed to save configuration"); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l1); pc = 32; continue;
    case 32:
      __pc = 32;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","error","(Ljava/lang/String;Ljava/lang/Exception;)V", rv, av); pc = 33; continue;
    case 33:
      __pc = 33;
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
    "reinitClientSideSyncedValues(Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration","server","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ServerCategory;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(0); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ServerCategory","clientIntegration","Z",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration","server","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ServerCategory;", s.pop())); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType","NONE","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;")); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ServerCategory","enderChestSyncType","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$EnderChestSyncType;",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "readFromPacketBuf(Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;Lnet/minecraft/class_2540;)V": function (__ctx, __self, __args) {
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
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/FriendlyByteBuf","readNbt","()Lnet/minecraft/class_2487;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      l2 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); if (r == null) { pc = 9; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","configTree","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode;")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","readFromNbt","(Ljava/lang/Object;Lnet/minecraft/class_2487;)V", rv, av); pc = 9; continue;
    case 9:
      __pc = 9;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "writeToPacketBuf(Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;Lnet/minecraft/class_2540;)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("net/minecraft/nbt/CompoundTag")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("net/minecraft/nbt/CompoundTag","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      l2 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","configTree","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode;")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l2); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","writeToNbt","(Ljava/lang/Object;Lnet/minecraft/class_2487;)V", rv, av); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l1); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l2); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/FriendlyByteBuf","writeNbt","(Lnet/minecraft/class_2520;)Lnet/minecraft/class_2540;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/config/ConfigurationHandler"].__fields = [{"name":"serializer","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/config/JsonHexadecimalInt", {
    "<init>(I)V": function (__ctx, __self, __args) {
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/Integer","valueOf","(I)Ljava/lang/Integer;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/config/JsonHexadecimalInt"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/config/SerializationException", {
    "<init>(Ljava/lang/Throwable;)V": function (__ctx, __self, __args) {
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
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.Exception.<init>") + ' needs the client internals');
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Ljava/lang/String;)V": function (__ctx, __self, __args) {
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
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.Exception.<init>") + ' needs the client internals');
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/config/SerializationException"].__fields = [{"name":"serialVersionUID","descriptor":"J"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer$ClientOnly", {
    "buildJankson(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;)V": function (__ctx, __self, __args) {
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
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer$ClientOnly","lambda$buildJankson$0","(Ljava/lang/String;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;)Lcom/misterpemodder/shulkerboxtooltip/impl/util/Key;", null, dv)); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder","registerDeserializer","(Ljava/lang/Class;Ljava/lang/Class;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/DeserializerFunction;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(null); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(null); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer$ClientOnly","lambda$buildJankson$1","(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;)Lcom/misterpemodder/shulkerboxtooltip/impl/util/Key;", null, dv)); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder","registerDeserializer","(Ljava/lang/Class;Ljava/lang/Class;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/DeserializerFunction;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(null); pc = 14; continue;
    case 14:
      __pc = 14;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer$ClientOnly","lambda$buildJankson$2","(Lcom/misterpemodder/shulkerboxtooltip/impl/util/Key;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder","registerSerializer","(Ljava/lang/Class;Ljava/util/function/BiFunction;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;", rv, av)); pc = 16; continue;
    case 16:
      __pc = 16;
      s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(null); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(null); pc = 20; continue;
    case 20:
      __pc = 20;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer$ClientOnly","deserializeColorRegistry","(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;)Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorRegistry;", null, dv)); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder","registerDeserializer","(Ljava/lang/Class;Ljava/lang/Class;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/DeserializerFunction;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;", rv, av)); pc = 22; continue;
    case 22:
      __pc = 22;
      s.pop(); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(null); pc = 25; continue;
    case 25:
      __pc = 25;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer$ClientOnly","serializeColorRegistry","(Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorRegistry;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;", null, dv)); pc = 26; continue;
    case 26:
      __pc = 26;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder","registerSerializer","(Ljava/lang/Class;Ljava/util/function/BiFunction;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;", rv, av)); pc = 27; continue;
    case 27:
      __pc = 27;
      s.pop(); pc = 28; continue;
    case 28:
      __pc = 28;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "deserializeColorRegistry(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;)Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorRegistry;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6;
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
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject","entrySet","()Ljava/util/Set;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Set","iterator","()Ljava/util/Iterator;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      l2 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l2); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); if (r == 0) { pc = 31; } else { pc = 7; } continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.cast(s.pop(), "java/util/Map$Entry")); pc = 10; continue;
    case 10:
      __pc = 10;
      l3 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l3); pc = 12; continue;
    case 12:
      __pc = 12;
      s.pop();
      throw __ctx.toError(("java.util.Map$Entry.getKey") + ' needs the client internals');
    case 13:
      __pc = 13;
      s.push(__ctx.cast(s.pop(), "java/lang/String")); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/resources/Identifier","tryParse","(Ljava/lang/String;)Lnet/minecraft/class_2960;", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      l4 = s.pop(); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l4); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop(); if (r == null) { pc = 30; } else { pc = 18; } continue;
    case 18:
      __pc = 18;
      s.push(l3); pc = 19; continue;
    case 19:
      __pc = 19;
      s.pop();
      throw __ctx.toError(("java.util.Map$Entry.getValue") + ' needs the client internals');
    case 20:
      __pc = 20;
      l6 = s.pop(); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l6); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.isInstance(s.pop(), "com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject")); pc = 23; continue;
    case 23:
      __pc = 23;
      r = s.pop(); if (r == 0) { pc = 30; } else { pc = 24; } continue;
    case 24:
      __pc = 24;
      s.push(l6); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject")); pc = 26; continue;
    case 26:
      __pc = 26;
      l5 = s.pop(); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l4); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l5); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer$ClientOnly","deserializeColorCategory","(Lnet/minecraft/class_2960;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;)V", av); pc = 30; continue;
    case 30:
      __pc = 30;
      pc = undefined; continue;
    case 31:
      __pc = 31;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl","INSTANCE","Lcom/misterpemodder/shulkerboxtooltip/impl/color/ColorRegistryImpl;")); pc = 32; continue;
    case 32:
      __pc = 32;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$buildJankson$2(Lcom/misterpemodder/shulkerboxtooltip/impl/util/Key;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      l2 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l2); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push("code"); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(s[s.length - 1]); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/util/Key","get","()Lnet/minecraft/class_3675$class_306;", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/blaze3d/platform/InputConstants$Key","getName","()Ljava/lang/String;", rv, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject","put","(Ljava/lang/String;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", rv, av)); pc = 13; continue;
    case 13:
      __pc = 13;
      s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l2); pc = 15; continue;
    case 15:
      __pc = 15;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$buildJankson$1(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;)Lcom/misterpemodder/shulkerboxtooltip/impl/util/Key;": function (__ctx, __self, __args) {
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
      s.push(null); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("code"); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject","get","(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Object;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "java/lang/String")); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/util/Key","fromTranslationKey","(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/impl/util/Key;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$buildJankson$0(Ljava/lang/String;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;)Lcom/misterpemodder/shulkerboxtooltip/impl/util/Key;": function (__ctx, __self, __args) {
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/util/Key","fromTranslationKey","(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/impl/util/Key;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer$ClientOnly"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer", {
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
      s.push(l0); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer","buildJankson","()Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer","jankson","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson;",target, r); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "buildJankson()Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson;": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","builder","()Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      l1 = s.pop(); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","isClient","()Z", [])); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer$ClientOnly","buildJankson","(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l1); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder","build","()Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson;", rv, [])); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "serialize(Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":8,"end":14,"handler":15},{"start":24,"end":43,"handler":44}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer","getConfigPath","()Ljava/nio/file/Path;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      l2 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","LOGGER","Lcom/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l2); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/String","valueOf","(Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer.serialize:12")); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","debug","(Ljava/lang/String;)V", rv, av); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l2); pc = 9; continue;
    case 9:
      __pc = 9;
      s.pop();
      throw __ctx.toError(("java.nio.file.Path.getParent") + ' needs the client internals');
    case 10:
      __pc = 10;
      s.push(0); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 12; continue;
    case 12:
      __pc = 12;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.nio.file.Files.createDirectories") + ' needs the client internals');
    case 13:
      __pc = 13;
      s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      pc = undefined; continue;
    case 15:
      __pc = 15;
      l3 = s.pop(); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","isClient","()Z", [])); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop(); if (r == 0) { pc = 24; } else { pc = 18; } continue;
    case 18:
      __pc = 18;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/PluginManager","areColorsLoaded","()Z", [])); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop(); if (r != 0) { pc = 24; } else { pc = 20; } continue;
    case 20:
      __pc = 20;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","LOGGER","Lcom/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger;")); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push("Configuration is not fully loaded, not saving"); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","debug","(Ljava/lang/String;)V", rv, av); pc = 23; continue;
    case 23:
      __pc = 23;
      return;
    case 24:
      __pc = 24;
      s.push(l2); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(0); pc = 26; continue;
    case 26:
      __pc = 26;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 27; continue;
    case 27:
      __pc = 27;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.nio.file.Files.newBufferedWriter") + ' needs the client internals');
    case 28:
      __pc = 28;
      l3 = s.pop(); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l3); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l0); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer","jankson","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson;", s.pop())); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(l1); pc = 33; continue;
    case 33:
      __pc = 33;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","toJson","(Ljava/lang/Object;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", rv, av)); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(1); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(1); pc = 36; continue;
    case 36:
      __pc = 36;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement","toJson","(ZZ)Ljava/lang/String;", rv, av)); pc = 37; continue;
    case 37:
      __pc = 37;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.io.BufferedWriter.write") + ' needs the client internals');
    case 38:
      __pc = 38;
      s.push(l3); pc = 39; continue;
    case 39:
      __pc = 39;
      s.pop();
      throw __ctx.toError(("java.io.BufferedWriter.close") + ' needs the client internals');
    case 40:
      __pc = 40;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","LOGGER","Lcom/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger;")); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push("Configuration saved successfully"); pc = 42; continue;
    case 42:
      __pc = 42;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","debug","(Ljava/lang/String;)V", rv, av); pc = 43; continue;
    case 43:
      __pc = 43;
      pc = undefined; continue;
    case 44:
      __pc = 44;
      l3 = s.pop(); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/config/SerializationException")); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(s[s.length - 1]); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(l3); pc = 48; continue;
    case 48:
      __pc = 48;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/config/SerializationException","<init>","(Ljava/lang/Throwable;)V", rv, av); pc = 49; continue;
    case 49:
      __pc = 49;
      throw __ctx.toError(s.pop());
    case 50:
      __pc = 50;
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
    "getConfigPath()Ljava/nio/file/Path;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","getConfigDir","()Ljava/nio/file/Path;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("shulkerboxtooltip.json5"); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.nio.file.Path.resolve") + ' needs the client internals');
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/config/ShulkerBoxTooltipConfigSerializer"].__fields = [{"name":"jankson","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson;"},{"name":"CONFIG_FILE_NAME","descriptor":"Ljava/lang/String;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigCategoryTab", {
    "method_48610()Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigCategoryTab","title","Lnet/minecraft/class_2561;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "method_71245()Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
    var l0;
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
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "method_48612(Ljava/util/function/Consumer;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigCategoryTab","list","Lcom/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigEntryList;", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("java/util/function/Consumer","accept","(Ljava/lang/Object;)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getScreen()Lcom/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigScreen;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigCategoryTab","screen","Lcom/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigScreen;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getSelectedKeyNode()Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigCategoryTab","selectedKeyNode","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setSelectedKeyNode(Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigCategoryTab","selectedKeyNode","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getConfig()Ljava/lang/Object;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigCategoryTab","config","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setTabButton(Lnet/minecraft/class_8209;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigCategoryTab","tabButton","Lnet/minecraft/class_8209;",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigCategoryTab"].__fields = [{"name":"screen","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigScreen;"},{"name":"category","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;"},{"name":"config","descriptor":"Ljava/lang/Object;"},{"name":"title","descriptor":"Lnet/minecraft/class_2561;"},{"name":"titleChanged","descriptor":"Lnet/minecraft/class_2561;"},{"name":"titleError","descriptor":"Lnet/minecraft/class_2561;"},{"name":"titleErrorChanged","descriptor":"Lnet/minecraft/class_2561;"},{"name":"list","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/gui/ConfigEntryList;"},{"name":"selectedKeyNode","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;"},{"name":"tabButton","descriptor":"Lnet/minecraft/class_8209;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/config/gui/entry/ColorValueConfigEntry", {
    "formatField(Ljava/lang/String;I)Lnet/minecraft/class_5481;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/gui/entry/ColorValueConfigEntry","isValid","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 7; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("net/minecraft/network/chat/Style","field_24360","Lnet/minecraft/class_2583;")); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/util/FormattedCharSequence","forward","(Ljava/lang/String;Lnet/minecraft/class_2583;)Lnet/minecraft/class_5481;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getStatic("net/minecraft/network/chat/Style","field_24360","Lnet/minecraft/class_2583;")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("net/minecraft/ChatFormatting","field_1061","Lnet/minecraft/class_124;")); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/chat/Style","withColor","(Lnet/minecraft/class_124;)Lnet/minecraft/class_2583;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/util/FormattedCharSequence","forward","(Ljava/lang/String;Lnet/minecraft/class_2583;)Lnet/minecraft/class_5481;", av)); pc = 12; continue;
    case 12:
      __pc = 12;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/config/gui/entry/ColorValueConfigEntry"].__fields = [{"name":"colorWidget","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/gui/ColorWidget;"},{"name":"inputField","descriptor":"Lnet/minecraft/class_342;"},{"name":"isValid","descriptor":"Z"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/fabric/PluginManagerImpl", {
    "getPluginContainers()Ljava/util/List;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("net/fabricmc/loader/api/FabricLoader","getInstance","()Lnet/fabricmc/loader/api/FabricLoader;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("shulkerboxtooltip"); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/loader/api/FabricLoader","getEntrypointContainers","(Ljava/lang/String;Ljava/lang/Class;)Ljava/util/List;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","stream","()Ljava/util/stream/Stream;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/fabric/PluginManagerImpl","lambda$getPluginContainers$0","(Lnet/fabricmc/loader/api/entrypoint/EntrypointContainer;)Lcom/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer;", null, dv)); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/stream/Stream","map","(Ljava/util/function/Function;)Ljava/util/stream/Stream;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.invokeStatic("java/util/stream/Collectors","toList","()Ljava/util/stream/Collector;", [])); pc = 8; continue;
    case 8:
      __pc = 8;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.stream.Stream.collect") + ' needs the client internals');
    case 9:
      __pc = 9;
      s.push(__ctx.cast(s.pop(), "java/util/List")); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$getPluginContainers$0(Lnet/fabricmc/loader/api/entrypoint/EntrypointContainer;)Lcom/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/loader/api/entrypoint/EntrypointContainer","getProvider","()Lnet/fabricmc/loader/api/ModContainer;", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/loader/api/ModContainer","getMetadata","()Lnet/fabricmc/loader/api/metadata/ModMetadata;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/loader/api/metadata/ModMetadata","getId","()Ljava/lang/String;", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(s[s.length - 1]); pc = 8; continue;
    case 8:
      __pc = 8;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Objects.requireNonNull") + ' needs the client internals');
    case 9:
      __pc = 9;
      s.pop(); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.invoke("net/fabricmc/loader/api/entrypoint/EntrypointContainer","getEntrypoint","()Ljava/lang/Object;", null, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/PluginManager$PluginContainer","<init>","(Ljava/lang/String;Ljava/util/function/Supplier;)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/fabric/PluginManagerImpl"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/ClientNetworking", {
    "onJoinServer(Lnet/minecraft/class_310;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/ClientNetworking","lambda$onJoinServer$0","()V", null, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/Minecraft","execute","(Ljava/lang/Runnable;)V", rv, av); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","configTree","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","savedConfig","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;")); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","copy","(Ljava/lang/Object;Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(null); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/network/ClientNetworking","serverProtocolVersion","Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;",r); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.invokeStatic("net/minecraft/client/Minecraft","getInstance","()Lnet/minecraft/class_310;", [])); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/Minecraft","hasSingleplayerServer","()Z", rv, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      r = s.pop(); if (r != 0) { pc = 14; } else { pc = 12; } continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;")); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/config/ConfigurationHandler","reinitClientSideSyncedValues","(Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;)V", av); pc = 14; continue;
    case 14:
      __pc = 14;
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SMessages","attemptHandshake","()V", []); pc = 15; continue;
    case 15:
      __pc = 15;
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
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl","init","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$onJoinServer$0()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/PluginManager","loadColors","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/PluginManager","loadProviders","()V", []); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/ClientNetworking"].__fields = [{"name":"serverProtocolVersion","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/EnderChestInventoryListener", {
    "detachFrom(Lnet/minecraft/class_3222;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
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
      r = s.pop(); if (r != null) { pc = 4; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      pc = undefined; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/server/level/ServerPlayer","getEnderChestInventory","()Lnet/minecraft/class_1730;", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      l1 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); if (r != null) { pc = 11; } else { pc = 9; } continue;
    case 9:
      __pc = 9;
      s.push(null); pc = 10; continue;
    case 10:
      __pc = 10;
      pc = undefined; continue;
    case 11:
      __pc = 11;
      s.push(l1); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getField("net/minecraft/world/inventory/PlayerEnderChestContainer","field_5829","Ljava/util/List;", s.pop())); pc = 13; continue;
    case 13:
      __pc = 13;
      l2 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l2); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop(); if (r != null) { pc = 17; } else { pc = 16; } continue;
    case 16:
      __pc = 16;
      return;
    case 17:
      __pc = 17;
      s.push(l2); pc = 18; continue;
    case 18:
      __pc = 18;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","iterator","()Ljava/util/Iterator;", rv, [])); pc = 19; continue;
    case 19:
      __pc = 19;
      l3 = s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l3); pc = 21; continue;
    case 21:
      __pc = 21;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 22; continue;
    case 22:
      __pc = 22;
      r = s.pop(); if (r == 0) { pc = 35; } else { pc = 23; } continue;
    case 23:
      __pc = 23;
      s.push(l3); pc = 24; continue;
    case 24:
      __pc = 24;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(__ctx.cast(s.pop(), "net/minecraft/world/ContainerListener")); pc = 26; continue;
    case 26:
      __pc = 26;
      l4 = s.pop(); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l4); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.isInstance(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/network/EnderChestInventoryListener")); pc = 29; continue;
    case 29:
      __pc = 29;
      r = s.pop(); if (r == 0) { pc = 34; } else { pc = 30; } continue;
    case 30:
      __pc = 30;
      s.push(l1); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l4); pc = 32; continue;
    case 32:
      __pc = 32;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/world/inventory/PlayerEnderChestContainer","removeListener","(Lnet/minecraft/class_1265;)V", rv, av); pc = 33; continue;
    case 33:
      __pc = 33;
      return;
    case 34:
      __pc = 34;
      pc = undefined; continue;
    case 35:
      __pc = 35;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/EnderChestInventoryListener"].__fields = [{"name":"player","descriptor":"Lnet/minecraft/class_3222;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/Payload", {
    "<init>(Lnet/minecraft/class_8710$class_9154;Ljava/lang/Object;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/network/Payload","id","Lnet/minecraft/class_8710$class_9154;",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/network/Payload","value","Ljava/lang/Object;",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
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
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/Payload","id","Lnet/minecraft/class_8710$class_9154;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/Payload.toString:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/Payload.hashCode:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/Payload.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "id()Lnet/minecraft/class_8710$class_9154;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/Payload","id","Lnet/minecraft/class_8710$class_9154;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "value()Ljava/lang/Object;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/Payload","value","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/Payload"].__fields = [{"name":"id","descriptor":"Lnet/minecraft/class_8710$class_9154;"},{"name":"value","descriptor":"Ljava/lang/Object;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion", {
    "<init>(II)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion","major","I",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion","minor","I",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "readFromPacketBuf(Lnet/minecraft/class_2540;)Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":0,"end":7,"handler":8}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/FriendlyByteBuf","readInt","()I", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/FriendlyByteBuf","readInt","()I", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion","<init>","(II)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    case 8:
      __pc = 8;
      l1 = s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(null); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    } catch (__e) {
      var __h = __pickHandler(__pc);
      if (__h < 0) { throw __e; }
      pc = __h; s = [__e]; continue;
    }
    }
    },
    "writeToPacketBuf(Lnet/minecraft/class_2540;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion","major","I", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/FriendlyByteBuf","writeInt","(I)Lnet/minecraft/class_2540;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion","minor","I", s.pop())); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/network/FriendlyByteBuf","writeInt","(I)Lnet/minecraft/class_2540;", rv, av)); pc = 9; continue;
    case 9:
      __pc = 9;
      s.pop(); pc = 10; continue;
    case 10:
      __pc = 10;
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion","major","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion","minor","I", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion.toString:8")); pc = 5; continue;
    case 5:
      __pc = 5;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion.hashCode:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "major()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion","major","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "minor()I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion","minor","I", s.pop())); pc = 2; continue;
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(2); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(0); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion","<init>","(II)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion","CURRENT","Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;",r); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion"].__fields = [{"name":"major","descriptor":"I"},{"name":"minor","descriptor":"I"},{"name":"CURRENT","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/ServerNetworking", {
    "removeClient(Lnet/minecraft/class_3222;)V": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/network/ServerNetworking","CLIENTS","Ljava/util/Map;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.Map.remove") + ' needs the client internals');
    case 3:
      __pc = 3;
      s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/EnderChestInventoryListener","detachFrom","(Lnet/minecraft/class_3222;)V", av); pc = 6; continue;
    case 6:
      __pc = 6;
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
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl","init","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/ServerNetworking"].__fields = [{"name":"CLIENTS","descriptor":"Ljava/util/Map;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext", {
    "<init>(Lnet/minecraft/class_3222;Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext","player","Lnet/minecraft/class_3222;",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext","channel","Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "execute(Ljava/lang/Runnable;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext","player","Lnet/minecraft/class_3222;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/server/level/ServerPlayer","level","()Lnet/minecraft/class_3218;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      l2 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l2); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r != null) { pc = 8; } else { pc = 6; } continue;
    case 6:
      __pc = 6;
      s.push(null); pc = 7; continue;
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      s.push(l2); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/server/level/ServerLevel","getServer","()Lnet/minecraft/server/MinecraftServer;", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      l3 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l3); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); if (r == null) { pc = 16; } else { pc = 13; } continue;
    case 13:
      __pc = 13;
      s.push(l3); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l1); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/server/MinecraftServer","execute","(Ljava/lang/Runnable;)V", rv, av); pc = 16; continue;
    case 16:
      __pc = 16;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getPlayer()Lnet/minecraft/class_3222;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext","player","Lnet/minecraft/class_3222;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getChannel()Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext","channel","Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getReceivingSide()Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext$Side;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext$Side","SERVER","Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext$Side;")); pc = 1; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext.toString:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext.hashCode:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "player()Lnet/minecraft/class_3222;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext","player","Lnet/minecraft/class_3222;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "channel()Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext","channel","Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getPlayer()Lnet/minecraft/class_1657;": function (__ctx, __self, __args) {
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
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext","getPlayer","()Lnet/minecraft/class_3222;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext"].__fields = [{"name":"player","descriptor":"Lnet/minecraft/class_3222;"},{"name":"channel","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext", {
    "<init>(Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext","channel","Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "execute(Ljava/lang/Runnable;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("net/minecraft/client/Minecraft","getInstance","()Lnet/minecraft/class_310;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/client/Minecraft","execute","(Ljava/lang/Runnable;)V", rv, av); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getPlayer()Lnet/minecraft/class_746;": function (__ctx, __self, __args) {
    var l0;
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
      s.push(__ctx.getField("net/minecraft/client/Minecraft","field_1724","Lnet/minecraft/class_746;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getChannel()Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext","channel","Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getReceivingSide()Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext$Side;": function (__ctx, __self, __args) {
    var l0;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext$Side","CLIENT","Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext$Side;")); pc = 1; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext.toString:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext.hashCode:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "channel()Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext","channel","Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getPlayer()Lnet/minecraft/class_1657;": function (__ctx, __self, __args) {
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
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext","getPlayer","()Lnet/minecraft/class_746;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext"].__fields = [{"name":"channel","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl", {
    "init()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration","preview","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewCategory;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewCategory","serverIntegration","Z", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r == 0) { pc = 18; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CMessages","registerPayloadTypes","()V", []); pc = 5; continue;
    case 5:
      __pc = 5;
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SMessages","registerPayloadTypes","()V", []); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/networking/v1/ClientPlayConnectionEvents","INIT","Lnet/fabricmc/fabric/api/event/Event;")); pc = 7; continue;
    case 7:
      __pc = 7;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl","lambda$init$0","(Lnet/minecraft/class_634;Lnet/minecraft/class_310;)V", null, dv)); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/networking/v1/ClientPlayConnectionEvents","DISCONNECT","Lnet/fabricmc/fabric/api/event/Event;")); pc = 10; continue;
    case 10:
      __pc = 10;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl","lambda$init$1","(Lnet/minecraft/class_634;Lnet/minecraft/class_310;)V", null, dv)); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/networking/v1/C2SPlayChannelEvents","REGISTER","Lnet/fabricmc/fabric/api/event/Event;")); pc = 13; continue;
    case 13:
      __pc = 13;
      var dv = new Array(4); for (var di = 3; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl","lambda$init$2","(Lnet/minecraft/class_634;Lnet/fabricmc/fabric/api/networking/v1/PacketSender;Lnet/minecraft/class_310;Ljava/util/List;)V", null, dv)); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/networking/v1/C2SPlayChannelEvents","UNREGISTER","Lnet/fabricmc/fabric/api/event/Event;")); pc = 16; continue;
    case 16:
      __pc = 16;
      var dv = new Array(4); for (var di = 3; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl","lambda$init$3","(Lnet/minecraft/class_634;Lnet/fabricmc/fabric/api/networking/v1/PacketSender;Lnet/minecraft/class_310;Ljava/util/List;)V", null, dv)); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/client/networking/v1/ClientPlayConnectionEvents","JOIN","Lnet/fabricmc/fabric/api/event/Event;")); pc = 19; continue;
    case 19:
      __pc = 19;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl","lambda$init$4","(Lnet/minecraft/class_634;Lnet/fabricmc/fabric/api/networking/v1/PacketSender;Lnet/minecraft/class_310;)V", null, dv)); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 21; continue;
    case 21:
      __pc = 21;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onRegisterChannel(Lnet/minecraft/class_2960;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl","C2S_CHANNELS","Ljava/util/Map;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","get","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricC2SChannel")); pc = 4; continue;
    case 4:
      __pc = 4;
      l1 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); if (r == null) { pc = 13; } else { pc = 7; } continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(s[s.length - 1]); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext","<init>","(Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricC2SChannel","onRegister","(Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext;)V", rv, av); pc = 13; continue;
    case 13:
      __pc = 13;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onUnregisterChannel(Lnet/minecraft/class_2960;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl","C2S_CHANNELS","Ljava/util/Map;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","get","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricC2SChannel")); pc = 4; continue;
    case 4:
      __pc = 4;
      l1 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); if (r == null) { pc = 13; } else { pc = 7; } continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(s[s.length - 1]); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/context/S2CMessageContext","<init>","(Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricC2SChannel","onUnregister","(Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext;)V", rv, av); pc = 13; continue;
    case 13:
      __pc = 13;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$4(Lnet/minecraft/class_634;Lnet/fabricmc/fabric/api/networking/v1/PacketSender;Lnet/minecraft/class_310;)V": function (__ctx, __self, __args) {
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/ClientNetworking","onJoinServer","(Lnet/minecraft/class_310;)V", av); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$3(Lnet/minecraft/class_634;Lnet/fabricmc/fabric/api/networking/v1/PacketSender;Lnet/minecraft/class_310;Ljava/util/List;)V": function (__ctx, __self, __args) {
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
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl","onUnregisterChannel","(Lnet/minecraft/class_2960;)V", null, dv)); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.List.forEach") + ' needs the client internals');
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$2(Lnet/minecraft/class_634;Lnet/fabricmc/fabric/api/networking/v1/PacketSender;Lnet/minecraft/class_310;Ljava/util/List;)V": function (__ctx, __self, __args) {
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
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl","onRegisterChannel","(Lnet/minecraft/class_2960;)V", null, dv)); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.List.forEach") + ' needs the client internals');
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$1(Lnet/minecraft/class_634;Lnet/minecraft/class_310;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SMessages","onDisconnectFromServer","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$0(Lnet/minecraft/class_634;Lnet/minecraft/class_310;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CMessages","registerAll","()V", []); pc = 1; continue;
    case 1:
      __pc = 1;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl"].__fields = [{"name":"C2S_CHANNELS","descriptor":"Ljava/util/Map;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricC2SChannel", {
    "sendToServer(Ljava/lang/Object;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/network/Payload")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricC2SChannel","id","Lnet/minecraft/class_8710$class_9154;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/Payload","<init>","(Lnet/minecraft/class_8710$class_9154;Ljava/lang/Object;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking","send","(Lnet/minecraft/class_8710;)V", av); pc = 7; continue;
    case 7:
      __pc = 7;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "canSendToServer()Z": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricC2SChannel","serverRegistered","Z", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop(); if (r == 0) { pc = 8; } else { pc = 3; } continue;
    case 3:
      __pc = 3;
      s.push(__ctx.invokeStatic("net/minecraft/client/Minecraft","getInstance","()Lnet/minecraft/class_310;", [])); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/client/Minecraft","getConnection","()Lnet/minecraft/class_634;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r == null) { pc = 8; } else { pc = 6; } continue;
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
    "onDisconnect()V": function (__ctx, __self, __args) {
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
      s.push(0); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricC2SChannel","serverRegistered","Z",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricC2SChannel"].__fields = [{"name":"serverRegistered","descriptor":"Z"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricChannel", {
    "onRegister(Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricChannel","type","Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/MessageType;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/message/MessageType","onRegister","(Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext;)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onUnregister(Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricChannel","type","Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/MessageType;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/message/MessageType","onUnregister","(Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext;)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricChannel"].__fields = [{"name":"id","descriptor":"Lnet/minecraft/class_8710$class_9154;"},{"name":"type","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/MessageType;"},{"name":"codec","descriptor":"Lnet/minecraft/class_9139;"},{"name":"payloadTypeRegistered","descriptor":"Z"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl", {
    "init()V": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration","server","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ServerCategory;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$ServerCategory","clientIntegration","Z", s.pop())); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r != 0) { pc = 5; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      return;
    case 5:
      __pc = 5;
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CMessages","registerPayloadTypes","()V", []); pc = 6; continue;
    case 6:
      __pc = 6;
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SMessages","registerPayloadTypes","()V", []); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/networking/v1/ServerPlayConnectionEvents","INIT","Lnet/fabricmc/fabric/api/event/Event;")); pc = 8; continue;
    case 8:
      __pc = 8;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl","lambda$init$0","(Lnet/minecraft/class_3244;Lnet/minecraft/server/MinecraftServer;)V", null, dv)); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/networking/v1/ServerPlayConnectionEvents","DISCONNECT","Lnet/fabricmc/fabric/api/event/Event;")); pc = 11; continue;
    case 11:
      __pc = 11;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl","lambda$init$1","(Lnet/minecraft/class_3244;Lnet/minecraft/server/MinecraftServer;)V", null, dv)); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/networking/v1/S2CPlayChannelEvents","REGISTER","Lnet/fabricmc/fabric/api/event/Event;")); pc = 14; continue;
    case 14:
      __pc = 14;
      var dv = new Array(4); for (var di = 3; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl","lambda$init$3","(Lnet/minecraft/class_3244;Lnet/fabricmc/fabric/api/networking/v1/PacketSender;Lnet/minecraft/server/MinecraftServer;Ljava/util/List;)V", null, dv)); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/networking/v1/S2CPlayChannelEvents","UNREGISTER","Lnet/fabricmc/fabric/api/event/Event;")); pc = 17; continue;
    case 17:
      __pc = 17;
      var dv = new Array(4); for (var di = 3; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl","lambda$init$5","(Lnet/minecraft/class_3244;Lnet/fabricmc/fabric/api/networking/v1/PacketSender;Lnet/minecraft/server/MinecraftServer;Ljava/util/List;)V", null, dv)); pc = 18; continue;
    case 18:
      __pc = 18;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getStatic("net/fabricmc/fabric/api/entity/event/v1/ServerEntityWorldChangeEvents","AFTER_PLAYER_CHANGE_WORLD","Lnet/fabricmc/fabric/api/event/Event;")); pc = 20; continue;
    case 20:
      __pc = 20;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl","lambda$init$6","(Lnet/minecraft/class_3222;Lnet/minecraft/class_3218;Lnet/minecraft/class_3218;)V", null, dv)); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/fabricmc/fabric/api/event/Event","register","(Ljava/lang/Object;)V", rv, av); pc = 22; continue;
    case 22:
      __pc = 22;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onRegisterChannel(Lnet/minecraft/class_2960;Lnet/minecraft/class_3222;)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl","S2C_CHANNELS","Ljava/util/Map;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","get","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricS2CChannel")); pc = 4; continue;
    case 4:
      __pc = 4;
      l2 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l2); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); if (r == null) { pc = 14; } else { pc = 7; } continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(s[s.length - 1]); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l2); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext","<init>","(Lnet/minecraft/class_3222;Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;)V", rv, av); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricS2CChannel","onRegister","(Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext;)V", rv, av); pc = 14; continue;
    case 14:
      __pc = 14;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onUnregisterChannel(Lnet/minecraft/class_2960;Lnet/minecraft/class_3222;)V": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl","S2C_CHANNELS","Ljava/util/Map;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","get","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricS2CChannel")); pc = 4; continue;
    case 4:
      __pc = 4;
      l2 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l2); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); if (r == null) { pc = 14; } else { pc = 7; } continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(s[s.length - 1]); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l1); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l2); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/context/C2SMessageContext","<init>","(Lnet/minecraft/class_3222;Lcom/misterpemodder/shulkerboxtooltip/impl/network/channel/Channel;)V", rv, av); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/FabricS2CChannel","onUnregister","(Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext;)V", rv, av); pc = 14; continue;
    case 14:
      __pc = 14;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$6(Lnet/minecraft/class_3222;Lnet/minecraft/class_3218;Lnet/minecraft/class_3218;)V": function (__ctx, __self, __args) {
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/ServerNetworking","onPlayerChangeWorld","(Lnet/minecraft/class_3222;)V", av); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$5(Lnet/minecraft/class_3244;Lnet/fabricmc/fabric/api/networking/v1/PacketSender;Lnet/minecraft/server/MinecraftServer;Ljava/util/List;)V": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl","lambda$init$4","(Lnet/minecraft/class_3244;Lnet/minecraft/class_2960;)V", null, dv)); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.List.forEach") + ' needs the client internals');
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$4(Lnet/minecraft/class_3244;Lnet/minecraft/class_2960;)V": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/server/network/ServerGamePacketListenerImpl","getPlayer","()Lnet/minecraft/class_3222;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl","onUnregisterChannel","(Lnet/minecraft/class_2960;Lnet/minecraft/class_3222;)V", av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$3(Lnet/minecraft/class_3244;Lnet/fabricmc/fabric/api/networking/v1/PacketSender;Lnet/minecraft/server/MinecraftServer;Ljava/util/List;)V": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl","lambda$init$2","(Lnet/minecraft/class_3244;Lnet/minecraft/class_2960;)V", null, dv)); pc = 3; continue;
    case 3:
      __pc = 3;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.List.forEach") + ' needs the client internals');
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$2(Lnet/minecraft/class_3244;Lnet/minecraft/class_2960;)V": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/server/network/ServerGamePacketListenerImpl","getPlayer","()Lnet/minecraft/class_3222;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl","onRegisterChannel","(Lnet/minecraft/class_2960;Lnet/minecraft/class_3222;)V", av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$1(Lnet/minecraft/class_3244;Lnet/minecraft/server/MinecraftServer;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("net/minecraft/server/network/ServerGamePacketListenerImpl","field_14140","Lnet/minecraft/class_3222;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/ServerNetworking","removeClient","(Lnet/minecraft/class_3222;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$init$0(Lnet/minecraft/class_3244;Lnet/minecraft/server/MinecraftServer;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("net/minecraft/server/network/ServerGamePacketListenerImpl","field_14140","Lnet/minecraft/class_3222;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SMessages","registerAllFor","(Lnet/minecraft/class_3222;)V", av); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ServerNetworkingImpl"].__fields = [{"name":"S2C_CHANNELS","descriptor":"Ljava/util/Map;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SEnderChestUpdateRequest", {
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
      __ctx.invoke("java/lang/Record","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SEnderChestUpdateRequest.toString:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SEnderChestUpdateRequest.hashCode:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SEnderChestUpdateRequest.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SEnderChestUpdateRequest"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart$Type", {
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
    "encode(Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart;Lnet/minecraft/class_2540;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart","clientVersion","Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion","writeToPacketBuf","(Lnet/minecraft/class_2540;)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "decode(Lnet/minecraft/class_2540;)Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart;": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion","readFromPacketBuf","(Lnet/minecraft/class_2540;)Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;", av)); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart","<init>","(Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onReceive(Ljava/lang/Object;Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart$Type","onReceive","(Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart;Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext;)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "decode(Lnet/minecraft/class_2540;)Ljava/lang/Object;": function (__ctx, __self, __args) {
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart$Type","decode","(Lnet/minecraft/class_2540;)Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "encode(Ljava/lang/Object;Lnet/minecraft/class_2540;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart$Type","encode","(Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart;Lnet/minecraft/class_2540;)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart$Type"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart", {
    "<init>(Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart","clientVersion","Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart.toString:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart.hashCode:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "clientVersion()Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart","clientVersion","Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/message/C2SHandshakeStart"].__fields = [{"name":"clientVersion","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/message/MessageType", {
    "onRegister(Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
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
    "onUnregister(Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext;)V": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/message/MessageType"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate", {
    "<init>(Lnet/minecraft/class_2499;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate","nbtInventory","Lnet/minecraft/class_2499;",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "create(Lnet/minecraft/class_1730;Lnet/minecraft/class_7225$class_7874;)Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate;": function (__ctx, __self, __args) {
    var l0, l1, l2;
    l0 = __args[0];
    l1 = __args[1];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("net/minecraft/util/ProblemReporter","field_60348","Lnet/minecraft/class_8942;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/world/level/storage/TagValueOutput","createWithContext","(Lnet/minecraft/class_8942;Lnet/minecraft/class_7225$class_7874;)Lnet/minecraft/class_11362;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      l2 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l2); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push("inv"); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getStatic("net/minecraft/world/ItemStackWithSlot","field_60354","Lcom/mojang/serialization/Codec;")); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/level/storage/TagValueOutput","list","(Ljava/lang/String;Lcom/mojang/serialization/Codec;)Lnet/minecraft/class_11372$class_11373;", rv, av)); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/world/inventory/PlayerEnderChestContainer","storeAsSlots","(Lnet/minecraft/class_11372$class_11373;)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate")); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(s[s.length - 1]); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l2); pc = 13; continue;
    case 13:
      __pc = 13;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/level/storage/TagValueOutput","buildResult","()Lnet/minecraft/class_2487;", rv, [])); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push("inv"); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/nbt/CompoundTag","getListOrEmpty","(Ljava/lang/String;)Lnet/minecraft/class_2499;", rv, av)); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate","<init>","(Lnet/minecraft/class_2499;)V", rv, av); pc = 17; continue;
    case 17:
      __pc = 17;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate.toString:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate.hashCode:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "nbtInventory()Lnet/minecraft/class_2499;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate","nbtInventory","Lnet/minecraft/class_2499;", s.pop())); pc = 2; continue;
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(null); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate","<init>","(Lnet/minecraft/class_2499;)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate","EMPTY","Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate;",r); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate"].__fields = [{"name":"nbtInventory","descriptor":"Lnet/minecraft/class_2499;"},{"name":"EMPTY","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/S2CEnderChestUpdate;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse$Type", {
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
    "encode(Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse;Lnet/minecraft/class_2540;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse","serverVersion","Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Objects.requireNonNull") + ' needs the client internals');
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l2); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion","writeToPacketBuf","(Lnet/minecraft/class_2540;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;", s.pop())); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l2); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      __ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/config/ConfigurationHandler","writeToPacketBuf","(Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;Lnet/minecraft/class_2540;)V", av); pc = 10; continue;
    case 10:
      __pc = 10;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "onReceive(Ljava/lang/Object;Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse$Type","onReceive","(Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse;Lcom/misterpemodder/shulkerboxtooltip/impl/network/context/MessageContext;)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "decode(Lnet/minecraft/class_2540;)Ljava/lang/Object;": function (__ctx, __self, __args) {
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
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse$Type","decode","(Lnet/minecraft/class_2540;)Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "encode(Ljava/lang/Object;Lnet/minecraft/class_2540;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse")); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse$Type","encode","(Lcom/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse;Lnet/minecraft/class_2540;)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse$Type"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse", {
    "<init>(Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse","serverVersion","Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;",target, r); pc = 8; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse.toString:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse.hashCode:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "serverVersion()Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse","serverVersion","Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "config()Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/network/message/S2CHandshakeResponse"].__fields = [{"name":"serverVersion","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/network/ProtocolVersion;"},{"name":"config","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/provider/FixedPreviewProviderRegistry", {
    "<init>(Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProviderRegistry;Ljava/util/function/BiFunction;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/FixedPreviewProviderRegistry","registry","Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProviderRegistry;",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/FixedPreviewProviderRegistry","providerFactory","Ljava/util/function/BiFunction;",target, r); pc = 8; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/provider/FixedPreviewProviderRegistry.toString:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/provider/FixedPreviewProviderRegistry.hashCode:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/provider/FixedPreviewProviderRegistry.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registry()Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProviderRegistry;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/FixedPreviewProviderRegistry","registry","Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProviderRegistry;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "providerFactory()Ljava/util/function/BiFunction;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/FixedPreviewProviderRegistry","providerFactory","Ljava/util/function/BiFunction;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$register$0(Ljava/util/function/BiFunction;Lnet/minecraft/class_2248;)Lnet/minecraft/class_1263;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getStatic("net/minecraft/core/BlockPos","field_10980","Lnet/minecraft/class_2338;")); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/level/block/Block","defaultBlockState","()Lnet/minecraft/class_2680;", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/function/BiFunction","apply","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.cast(s.pop(), "net/minecraft/world/Container")); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/provider/FixedPreviewProviderRegistry"].__fields = [{"name":"registry","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProviderRegistry;"},{"name":"providerFactory","descriptor":"Ljava/util/function/BiFunction;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides", {
    "<init>(Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    l4 = __args[3];
    l5 = __args[4];
    l6 = __args[5];
    l7 = __args[6];
    l8 = __args[7];
    l9 = __args[8];
    l10 = __args[9];
    l11 = __args[10];
    l12 = __args[11];
    l13 = __args[12];
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","shouldDisplay","Ljava/util/Optional;",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","inventoryMaxSize","Ljava/util/Optional;",target, r); pc = 8; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","maxRowSize","Ljava/util/Optional;",target, r); pc = 11; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","compactMaxRowSize","Ljava/util/Optional;",target, r); pc = 14; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","fullPreviewAvailable","Ljava/util/Optional;",target, r); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l0); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l6); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","showTooltipHints","Ljava/util/Optional;",target, r); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l0); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l7); pc = 22; continue;
    case 22:
      __pc = 22;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","tooltipHintLangKey","Ljava/util/Optional;",target, r); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l8); pc = 25; continue;
    case 25:
      __pc = 25;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","fullTooltipHintLangKey","Ljava/util/Optional;",target, r); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l0); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l9); pc = 28; continue;
    case 28:
      __pc = 28;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","lockKeyTooltipHintLangKey","Ljava/util/Optional;",target, r); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l0); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l10); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","windowColor","Ljava/util/Optional;",target, r); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(l0); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(l11); pc = 34; continue;
    case 34:
      __pc = 34;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","texture","Ljava/util/Optional;",target, r); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l0); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l12); pc = 37; continue;
    case 37:
      __pc = 37;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","canInsertItems","Ljava/util/Optional;",target, r); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(l0); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(l13); pc = 40; continue;
    case 40:
      __pc = 40;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","canExtractItems","Ljava/util/Optional;",target, r); pc = 41; continue;
    case 41:
      __pc = 41;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides.toString:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides.hashCode:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "shouldDisplay()Ljava/util/Optional;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","shouldDisplay","Ljava/util/Optional;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "inventoryMaxSize()Ljava/util/Optional;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","inventoryMaxSize","Ljava/util/Optional;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "maxRowSize()Ljava/util/Optional;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","maxRowSize","Ljava/util/Optional;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "compactMaxRowSize()Ljava/util/Optional;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","compactMaxRowSize","Ljava/util/Optional;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "fullPreviewAvailable()Ljava/util/Optional;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","fullPreviewAvailable","Ljava/util/Optional;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "showTooltipHints()Ljava/util/Optional;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","showTooltipHints","Ljava/util/Optional;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "tooltipHintLangKey()Ljava/util/Optional;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","tooltipHintLangKey","Ljava/util/Optional;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "fullTooltipHintLangKey()Ljava/util/Optional;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","fullTooltipHintLangKey","Ljava/util/Optional;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lockKeyTooltipHintLangKey()Ljava/util/Optional;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","lockKeyTooltipHintLangKey","Ljava/util/Optional;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "windowColor()Ljava/util/Optional;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","windowColor","Ljava/util/Optional;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "texture()Ljava/util/Optional;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","texture","Ljava/util/Optional;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "canInsertItems()Ljava/util/Optional;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","canInsertItems","Ljava/util/Optional;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "canExtractItems()Ljava/util/Optional;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","canExtractItems","Ljava/util/Optional;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$static$0(Lcom/mojang/serialization/codecs/RecordCodecBuilder$Instance;)Lcom/mojang/datafixers/kinds/App;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","BOOL","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push("should_display"); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/PrimitiveCodec","lenientOptionalFieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","shouldDisplay","()Ljava/util/Optional;", null, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","INT","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("inventory_max_size"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/PrimitiveCodec","lenientOptionalFieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","inventoryMaxSize","()Ljava/util/Optional;", null, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","INT","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push("max_row_size"); pc = 13; continue;
    case 13:
      __pc = 13;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/PrimitiveCodec","lenientOptionalFieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","maxRowSize","()Ljava/util/Optional;", null, [])); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","INT","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push("compact_max_row_size"); pc = 18; continue;
    case 18:
      __pc = 18;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/PrimitiveCodec","lenientOptionalFieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","compactMaxRowSize","()Ljava/util/Optional;", null, [])); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","BOOL","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push("full_preview_available"); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/PrimitiveCodec","lenientOptionalFieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","fullPreviewAvailable","()Ljava/util/Optional;", null, [])); pc = 25; continue;
    case 25:
      __pc = 25;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","BOOL","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push("show_tooltip_hints"); pc = 28; continue;
    case 28:
      __pc = 28;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/PrimitiveCodec","lenientOptionalFieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","showTooltipHints","()Ljava/util/Optional;", null, [])); pc = 30; continue;
    case 30:
      __pc = 30;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","STRING","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push("tooltip_hint_lang_key"); pc = 33; continue;
    case 33:
      __pc = 33;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/PrimitiveCodec","lenientOptionalFieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","tooltipHintLangKey","()Ljava/util/Optional;", null, [])); pc = 35; continue;
    case 35:
      __pc = 35;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","STRING","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push("full_tooltip_hint_lang_key"); pc = 38; continue;
    case 38:
      __pc = 38;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/PrimitiveCodec","lenientOptionalFieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","fullTooltipHintLangKey","()Ljava/util/Optional;", null, [])); pc = 40; continue;
    case 40:
      __pc = 40;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","STRING","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push("lock_tooltip_hint_lang_key"); pc = 43; continue;
    case 43:
      __pc = 43;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/PrimitiveCodec","lenientOptionalFieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","lockKeyTooltipHintLangKey","()Ljava/util/Optional;", null, [])); pc = 45; continue;
    case 45:
      __pc = 45;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/color/ColorKeyImpl","CODEC","Lcom/mojang/serialization/Codec;")); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push("window_color"); pc = 48; continue;
    case 48:
      __pc = 48;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/Codec","lenientOptionalFieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 49; continue;
    case 49:
      __pc = 49;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","windowColor","()Ljava/util/Optional;", null, [])); pc = 50; continue;
    case 50:
      __pc = 50;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(__ctx.getStatic("net/minecraft/resources/Identifier","field_25139","Lcom/mojang/serialization/Codec;")); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push("texture"); pc = 53; continue;
    case 53:
      __pc = 53;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/Codec","lenientOptionalFieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 54; continue;
    case 54:
      __pc = 54;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","texture","()Ljava/util/Optional;", null, [])); pc = 55; continue;
    case 55:
      __pc = 55;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","BOOL","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 57; continue;
    case 57:
      __pc = 57;
      s.push("can_insert_items"); pc = 58; continue;
    case 58:
      __pc = 58;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/PrimitiveCodec","lenientOptionalFieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 59; continue;
    case 59:
      __pc = 59;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","canInsertItems","()Ljava/util/Optional;", null, [])); pc = 60; continue;
    case 60:
      __pc = 60;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 61; continue;
    case 61:
      __pc = 61;
      s.push(__ctx.getStatic("com/mojang/serialization/Codec","BOOL","Lcom/mojang/serialization/codecs/PrimitiveCodec;")); pc = 62; continue;
    case 62:
      __pc = 62;
      s.push("can_extract_items"); pc = 63; continue;
    case 63:
      __pc = 63;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/PrimitiveCodec","lenientOptionalFieldOf","(Ljava/lang/String;)Lcom/mojang/serialization/MapCodec;", rv, av)); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","canExtractItems","()Ljava/util/Optional;", null, [])); pc = 65; continue;
    case 65:
      __pc = 65;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/MapCodec","forGetter","(Ljava/util/function/Function;)Lcom/mojang/serialization/codecs/RecordCodecBuilder;", rv, av)); pc = 66; continue;
    case 66:
      __pc = 66;
      var av = new Array(13); for (var ai = 12; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/serialization/codecs/RecordCodecBuilder$Instance","group","(Lcom/mojang/datafixers/kinds/App;Lcom/mojang/datafixers/kinds/App;Lcom/mojang/datafixers/kinds/App;Lcom/mojang/datafixers/kinds/App;Lcom/mojang/datafixers/kinds/App;Lcom/mojang/datafixers/kinds/App;Lcom/mojang/datafixers/kinds/App;Lcom/mojang/datafixers/kinds/App;Lcom/mojang/datafixers/kinds/App;Lcom/mojang/datafixers/kinds/App;Lcom/mojang/datafixers/kinds/App;Lcom/mojang/datafixers/kinds/App;Lcom/mojang/datafixers/kinds/App;)Lcom/mojang/datafixers/Products$P13;", rv, av)); pc = 67; continue;
    case 67:
      __pc = 67;
      s.push(l0); pc = 68; continue;
    case 68:
      __pc = 68;
      var dv = new Array(13); for (var di = 12; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","<init>","(Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;Ljava/util/Optional;)V", null, dv)); pc = 69; continue;
    case 69:
      __pc = 69;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/mojang/datafixers/Products$P13","apply","(Lcom/mojang/datafixers/kinds/Applicative;Lcom/mojang/datafixers/util/Function13;)Lcom/mojang/datafixers/kinds/App;", rv, av)); pc = 70; continue;
    case 70:
      __pc = 70;
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
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","lambda$static$0","(Lcom/mojang/serialization/codecs/RecordCodecBuilder$Instance;)Lcom/mojang/datafixers/kinds/App;", null, dv)); pc = 1; continue;
    case 1:
      __pc = 1;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/serialization/codecs/RecordCodecBuilder","mapCodec","(Ljava/util/function/Function;)Lcom/mojang/serialization/MapCodec;", av)); pc = 2; continue;
    case 2:
      __pc = 2;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides","CODEC","Lcom/mojang/serialization/MapCodec;",r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/provider/OverridingPreviewProvider$PreviewOverrides"].__fields = [{"name":"shouldDisplay","descriptor":"Ljava/util/Optional;"},{"name":"inventoryMaxSize","descriptor":"Ljava/util/Optional;"},{"name":"maxRowSize","descriptor":"Ljava/util/Optional;"},{"name":"compactMaxRowSize","descriptor":"Ljava/util/Optional;"},{"name":"fullPreviewAvailable","descriptor":"Ljava/util/Optional;"},{"name":"showTooltipHints","descriptor":"Ljava/util/Optional;"},{"name":"tooltipHintLangKey","descriptor":"Ljava/util/Optional;"},{"name":"fullTooltipHintLangKey","descriptor":"Ljava/util/Optional;"},{"name":"lockKeyTooltipHintLangKey","descriptor":"Ljava/util/Optional;"},{"name":"windowColor","descriptor":"Ljava/util/Optional;"},{"name":"texture","descriptor":"Ljava/util/Optional;"},{"name":"canInsertItems","descriptor":"Ljava/util/Optional;"},{"name":"canExtractItems","descriptor":"Ljava/util/Optional;"},{"name":"CODEC","descriptor":"Lcom/mojang/serialization/MapCodec;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl", {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl","locked","Z",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.invokeStatic("com/google/common/collect/HashBiMap","create","()Lcom/google/common/collect/HashBiMap;", [])); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl","providerIds","Lcom/google/common/collect/BiMap;",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.newInstance("java/util/HashMap")); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(s[s.length - 1]); pc = 11; continue;
    case 11:
      __pc = 11;
      var rv = s.pop();
      __ctx.invoke("java/util/HashMap","<init>","()V", rv, []); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl","providerItems","Ljava/util/Map;",target, r); pc = 13; continue;
    case 13:
      __pc = 13;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setLocked(Z)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl","locked","Z",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "register(Lnet/minecraft/class_2960;Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider;[Lnet/minecraft/class_1792;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.invokeStatic("java/util/Arrays","asList","([Ljava/lang/Object;)Ljava/util/List;", av)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl","register","(Lnet/minecraft/class_2960;Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider;Ljava/lang/Iterable;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "get(Lnet/minecraft/class_2960;)Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl","providerIds","Lcom/google/common/collect/BiMap;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/google/common/collect/BiMap","get","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider")); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "get(Lnet/minecraft/class_1799;)Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl","providerItems","Ljava/util/Map;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/item/ItemStack","getItem","()Lnet/minecraft/class_1792;", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","get","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider")); pc = 6; continue;
    case 6:
      __pc = 6;
      l2 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); if (r != null) { pc = 19; } else { pc = 9; } continue;
    case 9:
      __pc = 9;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/ShulkerBoxTooltip","config","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration;")); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration","preview","Lcom/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewCategory;", s.pop())); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/config/Configuration$PreviewCategory","genericContainerPreview","Z", s.pop())); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); if (r == 0) { pc = 19; } else { pc = 13; } continue;
    case 13:
      __pc = 13;
      s.push(l1); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getStatic("net/minecraft/core/component/DataComponents","field_49622","Lnet/minecraft/class_9331;")); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/world/item/ItemStack","has","(Lnet/minecraft/class_9331;)Z", rv, av)); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop(); if (r == 0) { pc = 19; } else { pc = 17; } continue;
    case 17:
      __pc = 17;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/provider/GenericContainerPreviewProvider","INSTANCE","Lcom/misterpemodder/shulkerboxtooltip/impl/provider/GenericContainerPreviewProvider;")); pc = 18; continue;
    case 18:
      __pc = 18;
      return s.pop();
    case 19:
      __pc = 19;
      s.push(l2); pc = 20; continue;
    case 20:
      __pc = 20;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "get(Lnet/minecraft/class_1792;)Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl","providerItems","Ljava/util/Map;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","get","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider")); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getId(Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider;)Lnet/minecraft/class_2960;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl","providerIds","Lcom/google/common/collect/BiMap;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("com/google/common/collect/BiMap","inverse","()Lcom/google/common/collect/BiMap;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/google/common/collect/BiMap","get","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.cast(s.pop(), "net/minecraft/resources/Identifier")); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getItems(Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider;)Ljava/util/Set;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("com/google/common/collect/ImmutableSet","builder","()Lcom/google/common/collect/ImmutableSet$Builder;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      l2 = s.pop(); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl","providerItems","Ljava/util/Map;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","entrySet","()Ljava/util/Set;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Set","iterator","()Ljava/util/Iterator;", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      l3 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l3); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); if (r == 0) { pc = 25; } else { pc = 10; } continue;
    case 10:
      __pc = 10;
      s.push(l3); pc = 11; continue;
    case 11:
      __pc = 11;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.cast(s.pop(), "java/util/Map$Entry")); pc = 13; continue;
    case 13:
      __pc = 13;
      l4 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l4); pc = 15; continue;
    case 15:
      __pc = 15;
      s.pop();
      throw __ctx.toError(("java.util.Map$Entry.getValue") + ' needs the client internals');
    case 16:
      __pc = 16;
      s.push(l1); pc = 17; continue;
    case 17:
      __pc = 17;
      r = s.pop(); var l = s.pop(); if (l != r) { pc = 24; } else { pc = 18; } continue;
    case 18:
      __pc = 18;
      s.push(l2); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l4); pc = 20; continue;
    case 20:
      __pc = 20;
      s.pop();
      throw __ctx.toError(("java.util.Map$Entry.getKey") + ' needs the client internals');
    case 21:
      __pc = 21;
      s.push(__ctx.cast(s.pop(), "net/minecraft/world/item/Item")); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/google/common/collect/ImmutableSet$Builder","add","(Ljava/lang/Object;)Lcom/google/common/collect/ImmutableSet$Builder;", rv, av)); pc = 23; continue;
    case 23:
      __pc = 23;
      s.pop(); pc = 24; continue;
    case 24:
      __pc = 24;
      pc = undefined; continue;
    case 25:
      __pc = 25;
      s.push(l2); pc = 26; continue;
    case 26:
      __pc = 26;
      var rv = s.pop();
      s.push(__ctx.invoke("com/google/common/collect/ImmutableSet$Builder","build","()Lcom/google/common/collect/ImmutableSet;", rv, [])); pc = 27; continue;
    case 27:
      __pc = 27;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getProviders()Ljava/util/Set;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl","providerIds","Lcom/google/common/collect/BiMap;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("com/google/common/collect/BiMap","values","()Ljava/util/Set;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getIds()Ljava/util/Set;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl","providerIds","Lcom/google/common/collect/BiMap;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("com/google/common/collect/BiMap","keySet","()Ljava/util/Set;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl","INSTANCE","Lcom/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl;",r); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl"].__fields = [{"name":"locked","descriptor":"Z"},{"name":"providerIds","descriptor":"Lcom/google/common/collect/BiMap;"},{"name":"providerItems","descriptor":"Ljava/util/Map;"},{"name":"INSTANCE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/provider/PreviewProviderRegistryImpl;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewTooltipComponent", {
    "<init>(Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider;Lcom/misterpemodder/shulkerboxtooltip/api/PreviewContext;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewTooltipComponent","provider","Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider;",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewTooltipComponent","context","Lcom/misterpemodder/shulkerboxtooltip/api/PreviewContext;",target, r); pc = 8; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewTooltipComponent.toString:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewTooltipComponent.hashCode:1")); pc = 2; continue;
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
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewTooltipComponent.equals:2")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "provider()Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewTooltipComponent","provider","Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "context()Lcom/misterpemodder/shulkerboxtooltip/api/PreviewContext;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewTooltipComponent","context","Lcom/misterpemodder/shulkerboxtooltip/api/PreviewContext;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/tooltip/PreviewTooltipComponent"].__fields = [{"name":"provider","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/api/provider/PreviewProvider;"},{"name":"context","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/api/PreviewContext;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder", {
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","<init>","()V", rv, []); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;",target, r); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.invokeStatic("com/google/common/collect/ImmutableList","builder","()Lcom/google/common/collect/ImmutableList$Builder;", [])); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","childrenBuilder","Lcom/google/common/collect/ImmutableList$Builder;",target, r); pc = 10; continue;
    case 10:
      __pc = 10;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "name(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","name","Ljava/lang/String;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "title(Lnet/minecraft/class_2561;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","title","Lnet/minecraft/class_2561;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "value(Ljava/util/function/UnaryOperator;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","childrenBuilder","Lcom/google/common/collect/ImmutableList$Builder;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","builder","()Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", [])); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.function.UnaryOperator.apply") + ' needs the client internals');
    case 5:
      __pc = 5;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;", s.pop())); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","category","(Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", rv, av)); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","build","()Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/google/common/collect/ImmutableList$Builder","add","(Ljava/lang/Object;)Lcom/google/common/collect/ImmutableList$Builder;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.pop(); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l0); pc = 13; continue;
    case 13:
      __pc = 13;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "category(Ljava/util/function/UnaryOperator;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","childrenBuilder","Lcom/google/common/collect/ImmutableList$Builder;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","<init>","()V", rv, []); pc = 6; continue;
    case 6:
      __pc = 6;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.function.UnaryOperator.apply") + ' needs the client internals');
    case 7:
      __pc = 7;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder")); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","build","()Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/google/common/collect/ImmutableList$Builder","add","(Ljava/lang/Object;)Lcom/google/common/collect/ImmutableList$Builder;", rv, av)); pc = 10; continue;
    case 10:
      __pc = 10;
      s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l0); pc = 12; continue;
    case 12:
      __pc = 12;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "build()Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      l1 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","name","Ljava/lang/String;", s.pop())); pc = 5; continue;
    case 5:
      __pc = 5;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Objects.requireNonNull") + ' needs the client internals');
    case 6:
      __pc = 6;
      s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","title","Lnet/minecraft/class_2561;", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Objects.requireNonNull") + ' needs the client internals');
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","childrenBuilder","Lcom/google/common/collect/ImmutableList$Builder;", s.pop())); pc = 14; continue;
    case 14:
      __pc = 14;
      var rv = s.pop();
      s.push(__ctx.invoke("com/google/common/collect/ImmutableList$Builder","build","()Lcom/google/common/collect/ImmutableList;", rv, [])); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","children","Lcom/google/common/collect/ImmutableList;",target, r); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l0); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(null); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;",target, r); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l0); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(null); pc = 21; continue;
    case 21:
      __pc = 21;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","childrenBuilder","Lcom/google/common/collect/ImmutableList$Builder;",target, r); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l1); pc = 23; continue;
    case 23:
      __pc = 23;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder"].__fields = [{"name":"node","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;"},{"name":"childrenBuilder","descriptor":"Lcom/google/common/collect/ImmutableList$Builder;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode", {
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
    "builder()Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","name","Ljava/lang/String;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "writeToNbt(Ljava/lang/Object;Lnet/minecraft/class_2487;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.newInstance("net/minecraft/nbt/CompoundTag")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("net/minecraft/nbt/CompoundTag","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      l3 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","children","Lcom/google/common/collect/ImmutableList;", s.pop())); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l1); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l3); pc = 8; continue;
    case 8:
      __pc = 8;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","lambda$writeToNbt$4","(Ljava/lang/Object;Lnet/minecraft/class_2487;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ConfigNode;)V", null, dv)); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/google/common/collect/ImmutableList","forEach","(Ljava/util/function/Consumer;)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l3); pc = 11; continue;
    case 11:
      __pc = 11;
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/nbt/CompoundTag","isEmpty","()Z", rv, [])); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop(); if (r != 0) { pc = 19; } else { pc = 13; } continue;
    case 13:
      __pc = 13;
      s.push(l2); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","getName","()Ljava/lang/String;", rv, [])); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l3); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/nbt/CompoundTag","put","(Ljava/lang/String;Lnet/minecraft/class_2520;)Lnet/minecraft/class_2520;", rv, av)); pc = 18; continue;
    case 18:
      __pc = 18;
      s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "readFromNbt(Ljava/lang/Object;Lnet/minecraft/class_2487;)V": function (__ctx, __self, __args) {
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
      s.push(l2); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","getName","()Ljava/lang/String;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/nbt/CompoundTag","getCompound","(Ljava/lang/String;)Ljava/util/Optional;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","lambda$readFromNbt$6","(Ljava/lang/Object;Lnet/minecraft/class_2487;)V", null, dv)); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("java/util/Optional","ifPresent","(Ljava/util/function/Consumer;)V", rv, av); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "copy(Ljava/lang/Object;Ljava/lang/Object;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","children","Lcom/google/common/collect/ImmutableList;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","lambda$copy$7","(Ljava/lang/Object;Ljava/lang/Object;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ConfigNode;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/google/common/collect/ImmutableList","forEach","(Ljava/util/function/Consumer;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$readFromNbt$6(Ljava/lang/Object;Lnet/minecraft/class_2487;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","children","Lcom/google/common/collect/ImmutableList;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","lambda$readFromNbt$5","(Ljava/lang/Object;Lnet/minecraft/class_2487;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ConfigNode;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/google/common/collect/ImmutableList","forEach","(Ljava/util/function/Consumer;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode"].__fields = [{"name":"name","descriptor":"Ljava/lang/String;"},{"name":"title","descriptor":"Lnet/minecraft/class_2561;"},{"name":"tooltip","descriptor":"Lnet/minecraft/class_2561;"},{"name":"children","descriptor":"Lcom/google/common/collect/ImmutableList;"},{"name":"MULTIPLE_ERRORS","descriptor":"Lnet/minecraft/class_2561;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder", {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","defaultConfig","Ljava/lang/Object;",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "build()Lcom/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode;": function (__ctx, __self, __args) {
    var l0, l1, l2;
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","defaultConfig","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Object","getClass","()Ljava/lang/Class;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      l1 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop();
      throw __ctx.toError(("java.lang.Class.getFields") + ' needs the client internals');
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/util/Arrays","stream","([Ljava/lang/Object;)Ljava/util/stream/Stream;", av)); pc = 7; continue;
    case 7:
      __pc = 7;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$build$0","(Ljava/lang/reflect/Field;)Z", null, dv)); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/stream/Stream","filter","(Ljava/util/function/Predicate;)Ljava/util/stream/Stream;", rv, av)); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$build$1","(Ljava/lang/reflect/Field;)Lcom/mojang/datafixers/util/Pair;", null, dv)); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/stream/Stream","map","(Ljava/util/function/Function;)Ljava/util/stream/Stream;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.invoke("com/mojang/datafixers/util/Pair","getFirst","()Ljava/lang/Object;", null, [])); pc = 12; continue;
    case 12:
      __pc = 12;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Comparator.comparingInt") + ' needs the client internals');
    case 13:
      __pc = 13;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.stream.Stream.sorted") + ' needs the client internals');
    case 14:
      __pc = 14;
      s.push(l0); pc = 15; continue;
    case 15:
      __pc = 15;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$build$2","(Lcom/mojang/datafixers/util/Pair;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;", null, dv)); pc = 16; continue;
    case 16:
      __pc = 16;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/stream/Stream","map","(Ljava/util/function/Function;)Ljava/util/stream/Stream;", rv, av)); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.invokeStatic("com/google/common/collect/ImmutableList","toImmutableList","()Ljava/util/stream/Collector;", [])); pc = 18; continue;
    case 18:
      __pc = 18;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.util.stream.Stream.collect") + ' needs the client internals');
    case 19:
      __pc = 19;
      s.push(__ctx.cast(s.pop(), "com/google/common/collect/ImmutableList")); pc = 20; continue;
    case 20:
      __pc = 20;
      l2 = s.pop(); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l0); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(null); pc = 23; continue;
    case 23:
      __pc = 23;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","defaultConfig","Ljava/lang/Object;",target, r); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode")); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(s[s.length - 1]); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l2); pc = 27; continue;
    case 27:
      __pc = 27;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","<init>","(Lcom/google/common/collect/ImmutableList;)V", rv, av); pc = 28; continue;
    case 28:
      __pc = 28;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "createCategoryNode(Ljava/lang/reflect/Field;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8, l9;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":0,"end":8,"handler":9},{"start":0,"end":8,"handler":9},{"start":0,"end":8,"handler":9}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
    case 0:
      __pc = 0;
      s.push(l1); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.setAccessible") + ' needs the client internals');
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","defaultConfig","Ljava/lang/Object;", s.pop())); pc = 6; continue;
    case 6:
      __pc = 6;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.get") + ' needs the client internals');
    case 7:
      __pc = 7;
      l2 = s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      pc = undefined; continue;
    case 9:
      __pc = 9;
      l3 = s.pop(); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.newInstance("java/lang/IllegalArgumentException")); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(s[s.length - 1]); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push("Failed to get category field"); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l3); pc = 14; continue;
    case 14:
      __pc = 14;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.IllegalArgumentException.<init>") + ' needs the client internals');
    case 15:
      __pc = 15;
      throw __ctx.toError(s.pop());
    case 16:
      __pc = 16;
      s.push(l1); pc = 17; continue;
    case 17:
      __pc = 17;
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.getType") + ' needs the client internals');
    case 18:
      __pc = 18;
      l3 = s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l1); pc = 20; continue;
    case 20:
      __pc = 20;
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.getName") + ' needs the client internals');
    case 21:
      __pc = 21;
      l4 = s.pop(); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","builder","()Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;", [])); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l4); pc = 24; continue;
    case 24:
      __pc = 24;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","name","(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;", rv, av)); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l4); pc = 26; continue;
    case 26:
      __pc = 26;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/util/ShulkerBoxTooltipUtil","snakeCase","(Ljava/lang/String;)Ljava/lang/String;", av)); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder.createCategoryNode:53")); pc = 28; continue;
    case 28:
      __pc = 28;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 29; continue;
    case 29:
      __pc = 29;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","title","(Lnet/minecraft/class_2561;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;", rv, av)); pc = 30; continue;
    case 30:
      __pc = 30;
      l5 = s.pop(); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l3); pc = 32; continue;
    case 32:
      __pc = 32;
      s.pop();
      throw __ctx.toError(("java.lang.Class.getDeclaredFields") + ' needs the client internals');
    case 33:
      __pc = 33;
      l6 = s.pop(); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(l6); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(s.pop().length); pc = 36; continue;
    case 36:
      __pc = 36;
      l7 = s.pop(); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(0); pc = 38; continue;
    case 38:
      __pc = 38;
      l8 = s.pop(); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(l8); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(l7); pc = 41; continue;
    case 41:
      __pc = 41;
      r = s.pop(); var l = s.pop(); if (l >= r) { pc = 54; } else { pc = 42; } continue;
    case 42:
      __pc = 42;
      s.push(l6); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l8); pc = 44; continue;
    case 44:
      __pc = 44;
      r = s.pop() | 0; s.push(s.pop()[r]); pc = 45; continue;
    case 45:
      __pc = 45;
      l9 = s.pop(); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(l0); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(l2); pc = 48; continue;
    case 48:
      __pc = 48;
      s.push(l1); pc = 49; continue;
    case 49:
      __pc = 49;
      s.push(l9); pc = 50; continue;
    case 50:
      __pc = 50;
      s.push(l5); pc = 51; continue;
    case 51:
      __pc = 51;
      var av = new Array(4); for (var ai = 3; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","addValueNode","(Ljava/lang/Object;Ljava/lang/reflect/Field;Ljava/lang/reflect/Field;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;)V", rv, av); pc = 52; continue;
    case 52:
      __pc = 52;
      l8 = (l8 | 0) + 1; pc = 53; continue;
    case 53:
      __pc = 53;
      pc = undefined; continue;
    case 54:
      __pc = 54;
      s.push(l5); pc = 55; continue;
    case 55:
      __pc = 55;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","build","()Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;", rv, [])); pc = 56; continue;
    case 56:
      __pc = 56;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    } catch (__e) {
      var __h = __pickHandler(__pc);
      if (__h < 0) { throw __e; }
      pc = __h; s = [__e]; continue;
    }
    }
    },
    "addValueNode(Ljava/lang/Object;Ljava/lang/reflect/Field;Ljava/lang/reflect/Field;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    l4 = __args[3];
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":0,"end":7,"handler":8},{"start":0,"end":7,"handler":8},{"start":0,"end":7,"handler":8}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
    case 0:
      __pc = 0;
      s.push(l3); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.setAccessible") + ' needs the client internals');
    case 3:
      __pc = 3;
      s.push(l3); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l1); pc = 5; continue;
    case 5:
      __pc = 5;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.get") + ' needs the client internals');
    case 6:
      __pc = 6;
      l5 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      pc = undefined; continue;
    case 8:
      __pc = 8;
      l6 = s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.newInstance("java/lang/IllegalArgumentException")); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(s[s.length - 1]); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push("Failed to get value field"); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l6); pc = 13; continue;
    case 13:
      __pc = 13;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.IllegalArgumentException.<init>") + ' needs the client internals');
    case 14:
      __pc = 14;
      throw __ctx.toError(s.pop());
    case 15:
      __pc = 15;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","isClient","()Z", [])); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop(); if (r == 0) { pc = 28; } else { pc = 17; } continue;
    case 17:
      __pc = 17;
      s.push(l5); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.isInstance(s.pop(), "com/misterpemodder/shulkerboxtooltip/api/color/ColorRegistry")); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop(); if (r == 0) { pc = 28; } else { pc = 20; } continue;
    case 20:
      __pc = 20;
      s.push(l5); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/api/color/ColorRegistry")); pc = 22; continue;
    case 22:
      __pc = 22;
      l6 = s.pop(); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l0); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l6); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l4); pc = 26; continue;
    case 26:
      __pc = 26;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","addColorRegistryField","(Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorRegistry;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;)V", rv, av); pc = 27; continue;
    case 27:
      __pc = 27;
      return;
    case 28:
      __pc = 28;
      s.push(l0); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l5); pc = 30; continue;
    case 30:
      __pc = 30;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Object","getClass","()Ljava/lang/Class;", rv, [])); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l5); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(l2); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(l3); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(l4); pc = 35; continue;
    case 35:
      __pc = 35;
      var av = new Array(5); for (var ai = 4; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","addSingleValueField","(Ljava/lang/Class;Ljava/lang/Object;Ljava/lang/reflect/Field;Ljava/lang/reflect/Field;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;)V", rv, av); pc = 36; continue;
    case 36:
      __pc = 36;
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
    "addSingleValueField(Ljava/lang/Class;Ljava/lang/Object;Ljava/lang/reflect/Field;Ljava/lang/reflect/Field;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10;
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
      s.push(l4); pc = 1; continue;
    case 1:
      __pc = 1;
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.getName") + ' needs the client internals');
    case 2:
      __pc = 2;
      l6 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l3); pc = 4; continue;
    case 4:
      __pc = 4;
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.getName") + ' needs the client internals');
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/util/ShulkerBoxTooltipUtil","snakeCase","(Ljava/lang/String;)Ljava/lang/String;", av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l6); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/util/ShulkerBoxTooltipUtil","snakeCase","(Ljava/lang/String;)Ljava/lang/String;", av)); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder.addSingleValueField:19")); pc = 9; continue;
    case 9:
      __pc = 9;
      l7 = s.pop(); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l7); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 12; continue;
    case 12:
      __pc = 12;
      l8 = s.pop(); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l7); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder.addSingleValueField:35")); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 16; continue;
    case 16:
      __pc = 16;
      l9 = s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l7); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder.addSingleValueField:47")); pc = 19; continue;
    case 19:
      __pc = 19;
      l10 = s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l5); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l0); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l1); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l6); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l8); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l9); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l2); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l3); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(l4); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l10); pc = 30; continue;
    case 30:
      __pc = 30;
      var dv = new Array(9); for (var di = 8; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$addSingleValueField$3","(Ljava/lang/Class;Ljava/lang/String;Lnet/minecraft/class_5250;Lnet/minecraft/class_5250;Ljava/lang/Object;Ljava/lang/reflect/Field;Ljava/lang/reflect/Field;Ljava/lang/String;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", null, dv)); pc = 31; continue;
    case 31:
      __pc = 31;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","value","(Ljava/util/function/UnaryOperator;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;", rv, av)); pc = 32; continue;
    case 32:
      __pc = 32;
      s.pop(); pc = 33; continue;
    case 33:
      __pc = 33;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "addColorRegistryCategoryNode(Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorRegistry$Category;Lnet/minecraft/class_2960;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;)V": function (__ctx, __self, __args) {
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
      s.push(l3); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$addColorRegistryCategoryNode$4","(Lnet/minecraft/class_2960;Lcom/misterpemodder/shulkerboxtooltip/api/color/ColorRegistry$Category;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder","category","(Ljava/util/function/UnaryOperator;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode$Builder;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "makeValueReader(Ljava/lang/Class;Ljava/lang/reflect/Field;Ljava/lang/reflect/Field;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":0,"end":3,"handler":4},{"start":0,"end":3,"handler":4}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
    case 0:
      __pc = 0;
      s.push(l3); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.setAccessible") + ' needs the client internals');
    case 3:
      __pc = 3;
      pc = undefined; continue;
    case 4:
      __pc = 4;
      l4 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.newInstance("java/lang/IllegalArgumentException")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("Failed to set value field accessible"); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l4); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.IllegalArgumentException.<init>") + ' needs the client internals');
    case 10:
      __pc = 10;
      throw __ctx.toError(s.pop());
    case 11:
      __pc = 11;
      s.push(l1); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l3); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l2); pc = 14; continue;
    case 14:
      __pc = 14;
      var dv = new Array(4); for (var di = 3; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$makeValueReader$9","(Ljava/lang/Class;Ljava/lang/reflect/Field;Ljava/lang/reflect/Field;Ljava/lang/Object;)Ljava/lang/Object;", null, dv)); pc = 15; continue;
    case 15:
      __pc = 15;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    } catch (__e) {
      var __h = __pickHandler(__pc);
      if (__h < 0) { throw __e; }
      pc = __h; s = [__e]; continue;
    }
    }
    },
    "makeValueWriter(Ljava/lang/Class;Ljava/lang/reflect/Field;Ljava/lang/reflect/Field;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":0,"end":3,"handler":4},{"start":0,"end":3,"handler":4}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
    case 0:
      __pc = 0;
      s.push(l3); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(1); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.setAccessible") + ' needs the client internals');
    case 3:
      __pc = 3;
      pc = undefined; continue;
    case 4:
      __pc = 4;
      l4 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.newInstance("java/lang/IllegalArgumentException")); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(s[s.length - 1]); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push("Failed to set value field accessible"); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l4); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.IllegalArgumentException.<init>") + ' needs the client internals');
    case 10:
      __pc = 10;
      throw __ctx.toError(s.pop());
    case 11:
      __pc = 11;
      s.push(l3); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l2); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l1); pc = 14; continue;
    case 14:
      __pc = 14;
      var dv = new Array(5); for (var di = 4; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$makeValueWriter$10","(Ljava/lang/reflect/Field;Ljava/lang/reflect/Field;Ljava/lang/Class;Ljava/lang/Object;Ljava/lang/Object;)V", null, dv)); pc = 15; continue;
    case 15:
      __pc = 15;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    } catch (__e) {
      var __h = __pickHandler(__pc);
      if (__h < 0) { throw __e; }
      pc = __h; s = [__e]; continue;
    }
    }
    },
    "makeNbtReader(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/Object;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8, l9;
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
      s.push(l3); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Objects.requireNonNull") + ' needs the client internals');
    case 3:
      __pc = 3;
      s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      l4 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(0); pc = 6; continue;
    case 6:
      __pc = 6;
      l5 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l4); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l5); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder.makeNbtReader:15")); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop() | 0; switch (r) {
        case 0: pc = 11; break;
        case 1: pc = 19; break;
        case 2: pc = 26; break;
        case 3: pc = 33; break;
        default: pc = 40; break;
      } continue;
    case 11:
      __pc = 11;
      s.push(l4); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.cast(s.pop(), "java/lang/Enum")); pc = 13; continue;
    case 13:
      __pc = 13;
      l6 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l2); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l1); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l6); pc = 17; continue;
    case 17:
      __pc = 17;
      var dv = new Array(4); for (var di = 3; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$makeNbtReader$12","(Ljava/lang/String;Ljava/lang/Class;Ljava/lang/Enum;Lnet/minecraft/class_2487;)Ljava/lang/Object;", null, dv)); pc = 18; continue;
    case 18:
      __pc = 18;
      pc = undefined; continue;
    case 19:
      __pc = 19;
      s.push(l4); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.cast(s.pop(), "java/lang/Boolean")); pc = 21; continue;
    case 21:
      __pc = 21;
      l7 = s.pop(); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l2); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l7); pc = 24; continue;
    case 24:
      __pc = 24;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$makeNbtReader$13","(Ljava/lang/String;Ljava/lang/Boolean;Lnet/minecraft/class_2487;)Ljava/lang/Object;", null, dv)); pc = 25; continue;
    case 25:
      __pc = 25;
      pc = undefined; continue;
    case 26:
      __pc = 26;
      s.push(l4); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(__ctx.cast(s.pop(), "java/lang/String")); pc = 28; continue;
    case 28:
      __pc = 28;
      l8 = s.pop(); pc = 29; continue;
    case 29:
      __pc = 29;
      s.push(l2); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l8); pc = 31; continue;
    case 31:
      __pc = 31;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$makeNbtReader$14","(Ljava/lang/String;Ljava/lang/String;Lnet/minecraft/class_2487;)Ljava/lang/Object;", null, dv)); pc = 32; continue;
    case 32:
      __pc = 32;
      pc = undefined; continue;
    case 33:
      __pc = 33;
      s.push(l4); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(__ctx.cast(s.pop(), "java/lang/Integer")); pc = 35; continue;
    case 35:
      __pc = 35;
      l9 = s.pop(); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l2); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(l9); pc = 38; continue;
    case 38:
      __pc = 38;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$makeNbtReader$15","(Ljava/lang/String;Ljava/lang/Integer;Lnet/minecraft/class_2487;)Ljava/lang/Object;", null, dv)); pc = 39; continue;
    case 39:
      __pc = 39;
      pc = undefined; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.newInstance("java/lang/IllegalArgumentException")); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(s[s.length - 1]); pc = 42; continue;
    case 42:
      __pc = 42;
      s.push(l3); pc = 43; continue;
    case 43:
      __pc = 43;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Object","getClass","()Ljava/lang/Class;", rv, [])); pc = 44; continue;
    case 44:
      __pc = 44;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/String","valueOf","(Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder.makeNbtReader:136")); pc = 46; continue;
    case 46:
      __pc = 46;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("java/lang/IllegalArgumentException","<init>","(Ljava/lang/String;)V", rv, av); pc = 47; continue;
    case 47:
      __pc = 47;
      throw __ctx.toError(s.pop());
    case 48:
      __pc = 48;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "makeNbtWriter(Ljava/lang/String;Ljava/lang/Object;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8;
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
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Objects.requireNonNull") + ' needs the client internals');
    case 3:
      __pc = 3;
      s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      l3 = s.pop(); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(0); pc = 6; continue;
    case 6:
      __pc = 6;
      l4 = s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l3); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l4); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder.makeNbtWriter:13")); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop() | 0; switch (r) {
        case 0: pc = 11; break;
        case 1: pc = 17; break;
        case 2: pc = 23; break;
        case 3: pc = 29; break;
        default: pc = 35; break;
      } continue;
    case 11:
      __pc = 11;
      s.push(l3); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.cast(s.pop(), "java/lang/Enum")); pc = 13; continue;
    case 13:
      __pc = 13;
      l5 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l1); pc = 15; continue;
    case 15:
      __pc = 15;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$makeNbtWriter$16","(Ljava/lang/String;Lnet/minecraft/class_2487;Ljava/lang/Object;)V", null, dv)); pc = 16; continue;
    case 16:
      __pc = 16;
      pc = undefined; continue;
    case 17:
      __pc = 17;
      s.push(l3); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(__ctx.cast(s.pop(), "java/lang/Boolean")); pc = 19; continue;
    case 19:
      __pc = 19;
      l6 = s.pop(); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l1); pc = 21; continue;
    case 21:
      __pc = 21;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$makeNbtWriter$17","(Ljava/lang/String;Lnet/minecraft/class_2487;Ljava/lang/Object;)V", null, dv)); pc = 22; continue;
    case 22:
      __pc = 22;
      pc = undefined; continue;
    case 23:
      __pc = 23;
      s.push(l3); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.cast(s.pop(), "java/lang/String")); pc = 25; continue;
    case 25:
      __pc = 25;
      l7 = s.pop(); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(l1); pc = 27; continue;
    case 27:
      __pc = 27;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$makeNbtWriter$18","(Ljava/lang/String;Lnet/minecraft/class_2487;Ljava/lang/Object;)V", null, dv)); pc = 28; continue;
    case 28:
      __pc = 28;
      pc = undefined; continue;
    case 29:
      __pc = 29;
      s.push(l3); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.cast(s.pop(), "java/lang/Integer")); pc = 31; continue;
    case 31:
      __pc = 31;
      l8 = s.pop(); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(l1); pc = 33; continue;
    case 33:
      __pc = 33;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$makeNbtWriter$19","(Ljava/lang/String;Lnet/minecraft/class_2487;Ljava/lang/Object;)V", null, dv)); pc = 34; continue;
    case 34:
      __pc = 34;
      pc = undefined; continue;
    case 35:
      __pc = 35;
      s.push(__ctx.newInstance("java/lang/IllegalArgumentException")); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(s[s.length - 1]); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(l2); pc = 38; continue;
    case 38:
      __pc = 38;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Object","getClass","()Ljava/lang/Class;", rv, [])); pc = 39; continue;
    case 39:
      __pc = 39;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("java/lang/String","valueOf","(Ljava/lang/Object;)Ljava/lang/String;", av)); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder.makeNbtWriter:119")); pc = 41; continue;
    case 41:
      __pc = 41;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("java/lang/IllegalArgumentException","<init>","(Ljava/lang/String;)V", rv, av); pc = 42; continue;
    case 42:
      __pc = 42;
      throw __ctx.toError(s.pop());
    case 43:
      __pc = 43;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$makeNbtWriter$19(Ljava/lang/String;Lnet/minecraft/class_2487;Ljava/lang/Object;)V": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "java/lang/Integer")); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Integer","intValue","()I", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/nbt/CompoundTag","putInt","(Ljava/lang/String;I)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$makeNbtWriter$18(Ljava/lang/String;Lnet/minecraft/class_2487;Ljava/lang/Object;)V": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "java/lang/String")); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/nbt/CompoundTag","putString","(Ljava/lang/String;Ljava/lang/String;)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$makeNbtWriter$17(Ljava/lang/String;Lnet/minecraft/class_2487;Ljava/lang/Object;)V": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "java/lang/Boolean")); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Boolean","booleanValue","()Z", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/nbt/CompoundTag","putBoolean","(Ljava/lang/String;Z)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$makeNbtWriter$16(Ljava/lang/String;Lnet/minecraft/class_2487;Ljava/lang/Object;)V": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "java/lang/Enum")); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Enum","name","()Ljava/lang/String;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("net/minecraft/nbt/CompoundTag","putString","(Ljava/lang/String;Ljava/lang/String;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$makeNbtReader$15(Ljava/lang/String;Ljava/lang/Integer;Lnet/minecraft/class_2487;)Ljava/lang/Object;": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/nbt/CompoundTag","getInt","(Ljava/lang/String;)Ljava/util/Optional;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Optional","orElse","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$makeNbtReader$14(Ljava/lang/String;Ljava/lang/String;Lnet/minecraft/class_2487;)Ljava/lang/Object;": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/nbt/CompoundTag","getString","(Ljava/lang/String;)Ljava/util/Optional;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Optional","orElse","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$makeNbtReader$13(Ljava/lang/String;Ljava/lang/Boolean;Lnet/minecraft/class_2487;)Ljava/lang/Object;": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/nbt/CompoundTag","getBoolean","(Ljava/lang/String;)Ljava/util/Optional;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Optional","orElse","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$makeNbtReader$12(Ljava/lang/String;Ljava/lang/Class;Ljava/lang/Enum;Lnet/minecraft/class_2487;)Ljava/lang/Object;": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("net/minecraft/nbt/CompoundTag","getString","(Ljava/lang/String;)Ljava/util/Optional;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","lambda$makeNbtReader$11","(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Optional","map","(Ljava/util/function/Function;)Ljava/util/Optional;", rv, av)); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l2); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Optional","orElse","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 8; continue;
    case 8:
      __pc = 8;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$makeNbtReader$11(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;": function (__ctx, __self, __args) {
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
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Enum.valueOf") + ' needs the client internals');
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$makeValueWriter$10(Ljava/lang/reflect/Field;Ljava/lang/reflect/Field;Ljava/lang/Class;Ljava/lang/Object;Ljava/lang/Object;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5;
    l0 = __args[0];
    l1 = __args[1];
    l2 = __args[2];
    l3 = __args[3];
    l4 = __args[4];
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":0,"end":8,"handler":9},{"start":0,"end":8,"handler":9}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
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
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.get") + ' needs the client internals');
    case 4:
      __pc = 4;
      s.push(l2); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l4); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Class","cast","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.set") + ' needs the client internals');
    case 8:
      __pc = 8;
      pc = undefined; continue;
    case 9:
      __pc = 9;
      l5 = s.pop(); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(__ctx.newInstance("java/lang/IllegalArgumentException")); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(s[s.length - 1]); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push("Failed to set value field"); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l5); pc = 14; continue;
    case 14:
      __pc = 14;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.IllegalArgumentException.<init>") + ' needs the client internals');
    case 15:
      __pc = 15;
      throw __ctx.toError(s.pop());
    case 16:
      __pc = 16;
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
    "lambda$makeValueReader$9(Ljava/lang/Class;Ljava/lang/reflect/Field;Ljava/lang/reflect/Field;Ljava/lang/Object;)Ljava/lang/Object;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
    l0 = __args[0];
    l1 = __args[1];
    l2 = __args[2];
    l3 = __args[3];
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":0,"end":7,"handler":8},{"start":0,"end":7,"handler":8}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
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
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.get") + ' needs the client internals');
    case 5:
      __pc = 5;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.get") + ' needs the client internals');
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Class","cast","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    case 8:
      __pc = 8;
      l4 = s.pop(); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.newInstance("java/lang/IllegalArgumentException")); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(s[s.length - 1]); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push("Failed to get value field"); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(l4); pc = 13; continue;
    case 13:
      __pc = 13;
      var dv = new Array(2); for (var di = 1; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.IllegalArgumentException.<init>") + ' needs the client internals');
    case 14:
      __pc = 14;
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
    "lambda$addColorKeyValueNode$7(Ljava/lang/Integer;)Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
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
      r = s.pop(); if (r == null) { pc = 7; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/Integer","intValue","()I", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(-16777216); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); s.push(s.pop() & r); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); if (r == 0) { pc = 10; } else { pc = 7; } continue;
    case 7:
      __pc = 7;
      s.push("shulkerboxtooltip.config.validator.invalid_color"); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    case 10:
      __pc = 10;
      s.push(null); pc = 11; continue;
    case 11:
      __pc = 11;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$addSingleValueField$3(Ljava/lang/Class;Ljava/lang/String;Lnet/minecraft/class_5250;Lnet/minecraft/class_5250;Ljava/lang/Object;Ljava/lang/reflect/Field;Ljava/lang/reflect/Field;Ljava/lang/String;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10;
    l0 = __self;
    l1 = __args[0];
    l2 = __args[1];
    l3 = __args[2];
    l4 = __args[3];
    l5 = __args[4];
    l6 = __args[5];
    l7 = __args[6];
    l8 = __args[7];
    l9 = __args[8];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(l9); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l1); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","type","(Ljava/lang/Class;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", rv, av)); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","valueType","(Ljava/lang/Class;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l2); pc = 6; continue;
    case 6:
      __pc = 6;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","name","(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", rv, av)); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l3); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","title","(Lnet/minecraft/class_2561;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", rv, av)); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(l4); pc = 10; continue;
    case 10:
      __pc = 10;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","tooltip","(Lnet/minecraft/class_2561;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", rv, av)); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l5); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","defaultValue","(Ljava/lang/Object;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", rv, av)); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l1); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l6); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l7); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","makeValueReader","(Ljava/lang/Class;Ljava/lang/reflect/Field;Ljava/lang/reflect/Field;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;", rv, av)); pc = 18; continue;
    case 18:
      __pc = 18;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","valueReader","(Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", rv, av)); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l0); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l1); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l6); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l7); pc = 23; continue;
    case 23:
      __pc = 23;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","makeValueWriter","(Ljava/lang/Class;Ljava/lang/reflect/Field;Ljava/lang/reflect/Field;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;", rv, av)); pc = 24; continue;
    case 24:
      __pc = 24;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","valueWriter","(Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", rv, av)); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(l7); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(null); pc = 27; continue;
    case 27:
      __pc = 27;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.isAnnotationPresent") + ' needs the client internals');
    case 28:
      __pc = 28;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","requiresRestart","(Z)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", rv, av)); pc = 29; continue;
    case 29:
      __pc = 29;
      s.pop(); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","isClient","()Z", [])); pc = 31; continue;
    case 31:
      __pc = 31;
      r = s.pop(); if (r == 0) { pc = 40; } else { pc = 32; } continue;
    case 32:
      __pc = 32;
      s.push(l8); pc = 33; continue;
    case 33:
      __pc = 33;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/client/resources/language/I18n","exists","(Ljava/lang/String;)Z", av)); pc = 34; continue;
    case 34:
      __pc = 34;
      r = s.pop(); if (r == 0) { pc = 40; } else { pc = 35; } continue;
    case 35:
      __pc = 35;
      s.push(l9); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l8); pc = 37; continue;
    case 37:
      __pc = 37;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/network/chat/Component","translatable","(Ljava/lang/String;)Lnet/minecraft/class_5250;", av)); pc = 38; continue;
    case 38:
      __pc = 38;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","prefix","(Lnet/minecraft/class_2561;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", rv, av)); pc = 39; continue;
    case 39:
      __pc = 39;
      s.pop(); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(l7); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(null); pc = 42; continue;
    case 42:
      __pc = 42;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.isAnnotationPresent") + ' needs the client internals');
    case 43:
      __pc = 43;
      r = s.pop(); if (r == 0) { pc = 59; } else { pc = 44; } continue;
    case 44:
      __pc = 44;
      s.push(l9); pc = 45; continue;
    case 45:
      __pc = 45;
      s.push(l0); pc = 46; continue;
    case 46:
      __pc = 46;
      s.push(l1); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(l7); pc = 48; continue;
    case 48:
      __pc = 48;
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.getName") + ' needs the client internals');
    case 49:
      __pc = 49;
      s.push(l5); pc = 50; continue;
    case 50:
      __pc = 50;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","makeNbtReader","(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/Object;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;", rv, av)); pc = 51; continue;
    case 51:
      __pc = 51;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","nbtReader","(Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", rv, av)); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push(l0); pc = 53; continue;
    case 53:
      __pc = 53;
      s.push(l7); pc = 54; continue;
    case 54:
      __pc = 54;
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.getName") + ' needs the client internals');
    case 55:
      __pc = 55;
      s.push(l5); pc = 56; continue;
    case 56:
      __pc = 56;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","makeNbtWriter","(Ljava/lang/String;Ljava/lang/Object;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;", rv, av)); pc = 57; continue;
    case 57:
      __pc = 57;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","nbtWriter","(Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", rv, av)); pc = 58; continue;
    case 58:
      __pc = 58;
      s.pop(); pc = 59; continue;
    case 59:
      __pc = 59;
      s.push(l7); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push(null); pc = 61; continue;
    case 61:
      __pc = 61;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.getAnnotation") + ' needs the client internals');
    case 62:
      __pc = 62;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/config/annotation/Validator")); pc = 63; continue;
    case 63:
      __pc = 63;
      l10 = s.pop(); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(l10); pc = 65; continue;
    case 65:
      __pc = 65;
      r = s.pop(); if (r == null) { pc = 73; } else { pc = 66; } continue;
    case 66:
      __pc = 66;
      s.push(l9); pc = 67; continue;
    case 67:
      __pc = 67;
      s.push(l0); pc = 68; continue;
    case 68:
      __pc = 68;
      s.push(l10); pc = 69; continue;
    case 69:
      __pc = 69;
      s.push(l7); pc = 70; continue;
    case 70:
      __pc = 70;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","makeValueValidator","(Lcom/misterpemodder/shulkerboxtooltip/impl/config/annotation/Validator;Ljava/lang/reflect/Field;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueValidator;", rv, av)); pc = 71; continue;
    case 71:
      __pc = 71;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","validator","(Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueValidator;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;", rv, av)); pc = 72; continue;
    case 72:
      __pc = 72;
      s.pop(); pc = 73; continue;
    case 73:
      __pc = 73;
      s.push(l9); pc = 74; continue;
    case 74:
      __pc = 74;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$build$2(Lcom/mojang/datafixers/util/Pair;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;": function (__ctx, __self, __args) {
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
      s.push(__ctx.invoke("com/mojang/datafixers/util/Pair","getSecond","()Ljava/lang/Object;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.cast(s.pop(), "java/lang/reflect/Field")); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","createCategoryNode","(Ljava/lang/reflect/Field;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$build$0(Ljava/lang/reflect/Field;)Z": function (__ctx, __self, __args) {
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
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Field.isAnnotationPresent") + ' needs the client internals');
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder"].__fields = [{"name":"defaultConfig","descriptor":"Ljava/lang/Object;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode", {
    "<init>(Lcom/google/common/collect/ImmutableList;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","categories","Lcom/google/common/collect/ImmutableList;",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "create(Ljava/lang/Object;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","<init>","(Ljava/lang/Object;)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","build","()Lcom/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "reload(Ljava/lang/Object;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder")); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(s[s.length - 1]); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","<init>","(Ljava/lang/Object;)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode$Builder","build","()Lcom/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode;", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","getCategories","()Lcom/google/common/collect/ImmutableList;", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","categories","Lcom/google/common/collect/ImmutableList;",target, r); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "validate(Ljava/lang/Object;)Lnet/minecraft/class_2561;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5;
    l0 = __self;
    l1 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(null); pc = 1; continue;
    case 1:
      __pc = 1;
      l2 = s.pop(); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","categories","Lcom/google/common/collect/ImmutableList;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("com/google/common/collect/ImmutableList","iterator","()Lcom/google/common/collect/UnmodifiableIterator;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      l3 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l3); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop(); if (r == 0) { pc = 26; } else { pc = 9; } continue;
    case 9:
      __pc = 9;
      s.push(l3); pc = 10; continue;
    case 10:
      __pc = 10;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode")); pc = 12; continue;
    case 12:
      __pc = 12;
      l4 = s.pop(); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l4); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l1); pc = 15; continue;
    case 15:
      __pc = 15;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","validate","(Ljava/lang/Object;)Lnet/minecraft/class_2561;", rv, av)); pc = 16; continue;
    case 16:
      __pc = 16;
      l5 = s.pop(); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l5); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop(); if (r == null) { pc = 25; } else { pc = 19; } continue;
    case 19:
      __pc = 19;
      s.push(l2); pc = 20; continue;
    case 20:
      __pc = 20;
      r = s.pop(); if (r == null) { pc = 23; } else { pc = 21; } continue;
    case 21:
      __pc = 21;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","MULTIPLE_ERRORS","Lnet/minecraft/class_2561;")); pc = 22; continue;
    case 22:
      __pc = 22;
      return s.pop();
    case 23:
      __pc = 23;
      s.push(l5); pc = 24; continue;
    case 24:
      __pc = 24;
      l2 = s.pop(); pc = 25; continue;
    case 25:
      __pc = 25;
      pc = undefined; continue;
    case 26:
      __pc = 26;
      s.push(l2); pc = 27; continue;
    case 27:
      __pc = 27;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "getCategories()Lcom/google/common/collect/ImmutableList;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","categories","Lcom/google/common/collect/ImmutableList;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "writeToNbt(Ljava/lang/Object;Lnet/minecraft/class_2487;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","categories","Lcom/google/common/collect/ImmutableList;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","lambda$writeToNbt$4","(Ljava/lang/Object;Lnet/minecraft/class_2487;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/google/common/collect/ImmutableList","forEach","(Ljava/util/function/Consumer;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "readFromNbt(Ljava/lang/Object;Lnet/minecraft/class_2487;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","categories","Lcom/google/common/collect/ImmutableList;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","lambda$readFromNbt$5","(Ljava/lang/Object;Lnet/minecraft/class_2487;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/google/common/collect/ImmutableList","forEach","(Ljava/util/function/Consumer;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "copy(Ljava/lang/Object;Ljava/lang/Object;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","categories","Lcom/google/common/collect/ImmutableList;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode","lambda$copy$6","(Ljava/lang/Object;Ljava/lang/Object;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;)V", null, dv)); pc = 5; continue;
    case 5:
      __pc = 5;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/google/common/collect/ImmutableList","forEach","(Ljava/util/function/Consumer;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$copy$6(Ljava/lang/Object;Ljava/lang/Object;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;)V": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","copy","(Ljava/lang/Object;Ljava/lang/Object;)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$readFromNbt$5(Ljava/lang/Object;Lnet/minecraft/class_2487;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;)V": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","readFromNbt","(Ljava/lang/Object;Lnet/minecraft/class_2487;)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$writeToNbt$4(Ljava/lang/Object;Lnet/minecraft/class_2487;Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;)V": function (__ctx, __self, __args) {
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
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode","writeToNbt","(Ljava/lang/Object;Lnet/minecraft/class_2487;)V", rv, av); pc = 4; continue;
    case 4:
      __pc = 4;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/tree/RootConfigNode"].__fields = [{"name":"TITLE","descriptor":"Lnet/minecraft/class_2561;"},{"name":"categories","descriptor":"Lcom/google/common/collect/ImmutableList;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder", {
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","<init>","()V", rv, []); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;",target, r); pc = 7; continue;
    case 7:
      __pc = 7;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "type(Ljava/lang/Class;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","type","Ljava/lang/Class;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "valueType(Ljava/lang/Class;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","valueType","Ljava/lang/Class;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "name(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","name","Ljava/lang/String;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "title(Lnet/minecraft/class_2561;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","title","Lnet/minecraft/class_2561;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "tooltip(Lnet/minecraft/class_2561;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","tooltip","Lnet/minecraft/class_2561;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "prefix(Lnet/minecraft/class_2561;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","prefix","Lnet/minecraft/class_2561;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "defaultValue(Ljava/lang/Object;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","defaultValue","Ljava/lang/Object;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "requiresRestart(Z)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","requiresRestart","Z",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "valueReader(Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","valueReader","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "valueWriter(Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","valueWriter","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "validator(Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueValidator;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","validator","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueValidator;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "nbtReader(Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","nbtReader","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "nbtWriter(Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","nbtWriter","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "category(Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;)Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","category","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "build()Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      l1 = s.pop(); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","name","Ljava/lang/String;", s.pop())); pc = 5; continue;
    case 5:
      __pc = 5;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Objects.requireNonNull") + ' needs the client internals');
    case 6:
      __pc = 6;
      s.pop(); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l1); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","type","Ljava/lang/Class;", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Objects.requireNonNull") + ' needs the client internals');
    case 10:
      __pc = 10;
      s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l1); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","valueType","Ljava/lang/Class;", s.pop())); pc = 13; continue;
    case 13:
      __pc = 13;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Objects.requireNonNull") + ' needs the client internals');
    case 14:
      __pc = 14;
      s.pop(); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l1); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","title","Lnet/minecraft/class_2561;", s.pop())); pc = 17; continue;
    case 17:
      __pc = 17;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Objects.requireNonNull") + ' needs the client internals');
    case 18:
      __pc = 18;
      s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l1); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","valueReader","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;", s.pop())); pc = 21; continue;
    case 21:
      __pc = 21;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Objects.requireNonNull") + ' needs the client internals');
    case 22:
      __pc = 22;
      s.pop(); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l1); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","valueWriter","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;", s.pop())); pc = 25; continue;
    case 25:
      __pc = 25;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Objects.requireNonNull") + ' needs the client internals');
    case 26:
      __pc = 26;
      s.pop(); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l1); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode","category","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;", s.pop())); pc = 29; continue;
    case 29:
      __pc = 29;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.util.Objects.requireNonNull") + ' needs the client internals');
    case 30:
      __pc = 30;
      s.pop(); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l0); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(null); pc = 33; continue;
    case 33:
      __pc = 33;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","node","Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;",target, r); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(l1); pc = 35; continue;
    case 35:
      __pc = 35;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder"].__fields = [{"name":"node","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode", {
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
    "builder()Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$Builder","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode"].__fields = [{"name":"name","descriptor":"Ljava/lang/String;"},{"name":"title","descriptor":"Lnet/minecraft/class_2561;"},{"name":"tooltip","descriptor":"Lnet/minecraft/class_2561;"},{"name":"prefix","descriptor":"Lnet/minecraft/class_2561;"},{"name":"type","descriptor":"Ljava/lang/Class;"},{"name":"valueType","descriptor":"Ljava/lang/Class;"},{"name":"requiresRestart","descriptor":"Z"},{"name":"valueReader","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;"},{"name":"valueWriter","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;"},{"name":"nbtReader","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueReader;"},{"name":"nbtWriter","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueWriter;"},{"name":"validator","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/ValueConfigNode$ValueValidator;"},{"name":"defaultValue","descriptor":"Ljava/lang/Object;"},{"name":"editingValue","descriptor":"Ljava/lang/Object;"},{"name":"category","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/tree/CategoryConfigNode;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil", {
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
    "getInstance()Lcom/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil;": function (__ctx, __self, __args) {
    var l0, l1;
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":8,"end":20,"handler":21},{"start":8,"end":20,"handler":21},{"start":8,"end":20,"handler":21},{"start":8,"end":20,"handler":21},{"start":8,"end":20,"handler":21}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","instance","Lcom/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil;")); pc = 1; continue;
    case 1:
      __pc = 1;
      r = s.pop(); if (r != null) { pc = 27; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","isClient","()Z", [])); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r == 0) { pc = 6; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","CLIENT_ENVIRONMENT_UTIL","Ljava/lang/String;")); pc = 5; continue;
    case 5:
      __pc = 5;
      pc = undefined; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","SERVER_ENVIRONMENT_UTIL","Ljava/lang/String;")); pc = 7; continue;
    case 7:
      __pc = 7;
      l0 = s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l0); pc = 9; continue;
    case 9:
      __pc = 9;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Class.forName") + ' needs the client internals');
    case 10:
      __pc = 10;
      l1 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l1); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(0); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 14; continue;
    case 14:
      __pc = 14;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.Class.getDeclaredConstructor") + ' needs the client internals');
    case 15:
      __pc = 15;
      s.push(0); pc = 16; continue;
    case 16:
      __pc = 16;
      r = s.pop() | 0; var arr = new Array(Math.max(0, r)); for (var zi = 0; zi < arr.length; zi++) { arr[zi] = null; } s.push(arr); pc = 17; continue;
    case 17:
      __pc = 17;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.reflect.Constructor.newInstance") + ' needs the client internals');
    case 18:
      __pc = 18;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil")); pc = 19; continue;
    case 19:
      __pc = 19;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","instance","Lcom/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil;",r); pc = 20; continue;
    case 20:
      __pc = 20;
      pc = undefined; continue;
    case 21:
      __pc = 21;
      l1 = s.pop(); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(__ctx.newInstance("java/lang/IllegalStateException")); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(s[s.length - 1]); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l1); pc = 25; continue;
    case 25:
      __pc = 25;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.pop();
      throw __ctx.toError(("java.lang.IllegalStateException.<init>") + ' needs the client internals');
    case 26:
      __pc = 26;
      throw __ctx.toError(s.pop());
    case 27:
      __pc = 27;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","instance","Lcom/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil;")); pc = 28; continue;
    case 28:
      __pc = 28;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    } catch (__e) {
      var __h = __pickHandler(__pc);
      if (__h < 0) { throw __e; }
      pc = __h; s = [__e]; continue;
    }
    }
    },
    "isClient()Z": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/impl/util/fabric/EnvironmentUtilImpl","isClient","()Z", [])); pc = 1; continue;
    case 1:
      __pc = 1;
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
      s.push(null); pc = 1; continue;
    case 1:
      __pc = 1;
      s.pop();
      throw __ctx.toError(("java.lang.Class.getPackageName") + ' needs the client internals');
    case 2:
      __pc = 2;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","PACKAGE_NAME","Ljava/lang/String;",r); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","PACKAGE_NAME","Ljava/lang/String;")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil.<clinit>:11")); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","CLIENT_ENVIRONMENT_UTIL","Ljava/lang/String;",r); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","PACKAGE_NAME","Ljava/lang/String;")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil.<clinit>:22")); pc = 8; continue;
    case 8:
      __pc = 8;
      r = s.pop();
      __ctx.putStatic("com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil","SERVER_ENVIRONMENT_UTIL","Ljava/lang/String;",r); pc = 9; continue;
    case 9:
      __pc = 9;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil"].__fields = [{"name":"instance","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/util/EnvironmentUtil;"},{"name":"PACKAGE_NAME","descriptor":"Ljava/lang/String;"},{"name":"CLIENT_ENVIRONMENT_UTIL","descriptor":"Ljava/lang/String;"},{"name":"SERVER_ENVIRONMENT_UTIL","descriptor":"Ljava/lang/String;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/util/Key", {
    "<init>(Lnet/minecraft/class_3675$class_306;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/util/Key","inner","Lnet/minecraft/class_3675$class_306;",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "get()Lnet/minecraft/class_3675$class_306;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/Key","inner","Lnet/minecraft/class_3675$class_306;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "fromTranslationKey(Ljava/lang/String;)Lcom/misterpemodder/shulkerboxtooltip/impl/util/Key;": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    var __handlers = [{"start":4,"end":9,"handler":10}];
    function __pickHandler(at) { for (var i = 0; i < __handlers.length; i++) { var h = __handlers[i]; if (at >= h.start && at < h.end) { return h.handler; } } return -1; }
    for (;;) {
    try {
    while (true) { __pc = pc; switch (pc) {
    case 0:
      __pc = 0;
      s.push(l0); pc = 1; continue;
    case 1:
      __pc = 1;
      r = s.pop(); if (r != null) { pc = 4; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/util/Key","UNKNOWN_KEY","Lcom/misterpemodder/shulkerboxtooltip/impl/util/Key;")); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    case 4:
      __pc = 4;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/impl/util/Key")); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(s[s.length - 1]); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/mojang/blaze3d/platform/InputConstants","getKey","(Ljava/lang/String;)Lnet/minecraft/class_3675$class_306;", av)); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/impl/util/Key","<init>","(Lnet/minecraft/class_3675$class_306;)V", rv, av); pc = 9; continue;
    case 9:
      __pc = 9;
      return s.pop();
    case 10:
      __pc = 10;
      l1 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/impl/util/Key","UNKNOWN_KEY","Lcom/misterpemodder/shulkerboxtooltip/impl/util/Key;")); pc = 12; continue;
    case 12:
      __pc = 12;
      return s.pop();
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
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/util/Key"].__fields = [{"name":"UNKNOWN_KEY","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/impl/util/Key;"},{"name":"inner","descriptor":"Lnet/minecraft/class_3675$class_306;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger", {
    "<init>(Lorg/apache/logging/log4j/Logger;)V": function (__ctx, __self, __args) {
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
      s.push(l1); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;",target, r); pc = 5; continue;
    case 5:
      __pc = 5;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "error(Ljava/lang/String;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("org/apache/logging/log4j/Logger","getName","()Ljava/lang/String;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger.error:14")); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("org/apache/logging/log4j/Logger","error","(Ljava/lang/String;)V", rv, av); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "error(Ljava/lang/String;Ljava/lang/Exception;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("org/apache/logging/log4j/Logger","getName","()Ljava/lang/String;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger.error:14")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("org/apache/logging/log4j/Logger","error","(Ljava/lang/String;Ljava/lang/Throwable;)V", rv, av); pc = 9; continue;
    case 9:
      __pc = 9;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "debug(Ljava/lang/String;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("org/apache/logging/log4j/Logger","getName","()Ljava/lang/String;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger.debug:14")); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("org/apache/logging/log4j/Logger","debug","(Ljava/lang/String;)V", rv, av); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "info(Ljava/lang/String;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("org/apache/logging/log4j/Logger","getName","()Ljava/lang/String;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger.info:14")); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("org/apache/logging/log4j/Logger","info","(Ljava/lang/String;)V", rv, av); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "info(Ljava/lang/String;Ljava/lang/Object;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("org/apache/logging/log4j/Logger","getName","()Ljava/lang/String;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger.info:14")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("org/apache/logging/log4j/Logger","info","(Ljava/lang/String;Ljava/lang/Object;)V", rv, av); pc = 9; continue;
    case 9:
      __pc = 9;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "info(Ljava/lang/String;Ljava/lang/Object;Ljava/lang/Object;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("org/apache/logging/log4j/Logger","getName","()Ljava/lang/String;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger.info:14")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l2); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l3); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("org/apache/logging/log4j/Logger","info","(Ljava/lang/String;Ljava/lang/Object;Ljava/lang/Object;)V", rv, av); pc = 10; continue;
    case 10:
      __pc = 10;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "warn(Ljava/lang/String;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger","inner","Lorg/apache/logging/log4j/Logger;", s.pop())); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("org/apache/logging/log4j/Logger","getName","()Ljava/lang/String;", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l1); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.unsupportedLambda("com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger.warn:14")); pc = 7; continue;
    case 7:
      __pc = 7;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("org/apache/logging/log4j/Logger","warn","(Ljava/lang/String;)V", rv, av); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/util/NamedLogger"].__fields = [{"name":"inner","descriptor":"Lorg/apache/logging/log4j/Logger;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/util/ShulkerBoxTooltipUtil", {
    "id(Ljava/lang/String;)Lnet/minecraft/class_2960;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push("shulkerboxtooltip"); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(l0); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("net/minecraft/resources/Identifier","fromNamespaceAndPath","(Ljava/lang/String;Ljava/lang/String;)Lnet/minecraft/class_2960;", av)); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "snakeCase(Ljava/lang/String;)Ljava/lang/String;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("java/lang/StringBuilder")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("java/lang/StringBuilder","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      l1 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(0); pc = 5; continue;
    case 5:
      __pc = 5;
      l2 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l2); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/String","length","()I", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop(); var l = s.pop(); if (l >= r) { pc = 35; } else { pc = 10; } continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l2); pc = 12; continue;
    case 12:
      __pc = 12;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/String","charAt","(I)C", rv, av)); pc = 13; continue;
    case 13:
      __pc = 13;
      l3 = s.pop(); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(l3); pc = 15; continue;
    case 15:
      __pc = 15;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Character.isUpperCase") + ' needs the client internals');
    case 16:
      __pc = 16;
      r = s.pop(); if (r == 0) { pc = 29; } else { pc = 17; } continue;
    case 17:
      __pc = 17;
      s.push(l2); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop(); if (r <= 0) { pc = 23; } else { pc = 19; } continue;
    case 19:
      __pc = 19;
      s.push(l1); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(95); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","append","(C)Ljava/lang/StringBuilder;", rv, av)); pc = 22; continue;
    case 22:
      __pc = 22;
      s.pop(); pc = 23; continue;
    case 23:
      __pc = 23;
      s.push(l1); pc = 24; continue;
    case 24:
      __pc = 24;
      s.push(l3); pc = 25; continue;
    case 25:
      __pc = 25;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      throw __ctx.toError(("java.lang.Character.toLowerCase") + ' needs the client internals');
    case 26:
      __pc = 26;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","append","(C)Ljava/lang/StringBuilder;", rv, av)); pc = 27; continue;
    case 27:
      __pc = 27;
      s.pop(); pc = 28; continue;
    case 28:
      __pc = 28;
      pc = undefined; continue;
    case 29:
      __pc = 29;
      s.push(l1); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l3); pc = 31; continue;
    case 31:
      __pc = 31;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","append","(C)Ljava/lang/StringBuilder;", rv, av)); pc = 32; continue;
    case 32:
      __pc = 32;
      s.pop(); pc = 33; continue;
    case 33:
      __pc = 33;
      l2 = (l2 | 0) + 1; pc = 34; continue;
    case 34:
      __pc = 34;
      pc = undefined; continue;
    case 35:
      __pc = 35;
      s.push(l1); pc = 36; continue;
    case 36:
      __pc = 36;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/StringBuilder","toString","()Ljava/lang/String;", rv, [])); pc = 37; continue;
    case 37:
      __pc = 37;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/util/ShulkerBoxTooltipUtil"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/impl/util/fabric/EnvironmentUtilImpl", {
    "isClient()Z": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.invokeStatic("net/fabricmc/loader/api/FabricLoader","getInstance","()Lnet/fabricmc/loader/api/FabricLoader;", [])); pc = 1; continue;
    case 1:
      __pc = 1;
      var rv = s.pop();
      s.push(__ctx.invoke("net/fabricmc/loader/api/FabricLoader","getEnvironmentType","()Lnet/fabricmc/api/EnvType;", rv, [])); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.getStatic("net/fabricmc/api/EnvType","CLIENT","Lnet/fabricmc/api/EnvType;")); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); var l = s.pop(); if (l != r) { pc = 6; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(1); pc = 5; continue;
    case 5:
      __pc = 5;
      pc = undefined; continue;
    case 6:
      __pc = 6;
      s.push(0); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/impl/util/fabric/EnvironmentUtilImpl"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder", {
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","<init>","()V", rv, []); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder","marshaller","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl;",target, r); pc = 7; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder","allowBareRootObject","Z",target, r); pc = 10; continue;
    case 10:
      __pc = 10;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerSerializer(Ljava/lang/Class;Ljava/util/function/BiFunction;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder","marshaller","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl;", s.pop())); pc = 2; continue;
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/BiFunction;)V", rv, av); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(l0); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerDeserializer(Ljava/lang/Class;Ljava/lang/Class;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/DeserializerFunction;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder","marshaller","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl;", s.pop())); pc = 2; continue;
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
      var av = new Array(3); for (var ai = 2; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerDeserializer","(Ljava/lang/Class;Ljava/lang/Class;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/DeserializerFunction;)V", rv, av); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "build()Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson;": function (__ctx, __self, __args) {
    var l0, l1;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson")); pc = 1; continue;
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","<init>","(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$1;)V", rv, av); pc = 5; continue;
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder","marshaller","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl;", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","access$402","(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;", av)); pc = 10; continue;
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder","allowBareRootObject","Z", s.pop())); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","access$502","(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson;Z)Z", av)); pc = 15; continue;
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
  CLASSES["com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder"].__fields = [{"name":"marshaller","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl;"},{"name":"allowBareRootObject","descriptor":"Z"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame", {
    "<init>(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ParserContext;Ljava/util/function/Consumer;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame","startLine","I",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame","startCol","I",target, r); pc = 8; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame","context","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ParserContext;",target, r); pc = 11; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame","consumer","Ljava/util/function/Consumer;",target, r); pc = 14; continue;
    case 14:
      __pc = 14;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "context()Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ParserContext;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame","context","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ParserContext;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$000(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ParserContext;": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame","context","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ParserContext;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$100(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame;)I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame","startLine","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$200(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame;)I": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame","startCol","I", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$102(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame;I)I": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame","startLine","I",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$202(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame;I)I": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame","startCol","I",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame"].__fields = [{"name":"context","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ParserContext;"},{"name":"consumer","descriptor":"Ljava/util/function/Consumer;"},{"name":"startLine","descriptor":"I"},{"name":"startCol","descriptor":"I"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson", {
    "<init>(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","contextStack","Ljava/util/Deque;",target, r); pc = 7; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","line","I",target, r); pc = 10; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","column","I",target, r); pc = 13; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","withheldCodePoint","I",target, r); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l0); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","getFallback","()Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;", [])); pc = 18; continue;
    case 18:
      __pc = 18;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","marshaller","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;",target, r); pc = 19; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","allowBareRootObject","Z",target, r); pc = 22; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","retries","I",target, r); pc = 25; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","delayedError","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/SyntaxError;",target, r); pc = 28; continue;
    case 28:
      __pc = 28;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "load(Ljava/io/File;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;": function (__ctx, __self, __args) {
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
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","load","(Ljava/io/InputStream;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;", rv, av)); pc = 8; continue;
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
    "push(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ParserContext;Ljava/util/function/Consumer;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame")); pc = 1; continue;
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame","<init>","(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ParserContext;Ljava/util/function/Consumer;)V", rv, av); pc = 5; continue;
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","line","I", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame","access$102","(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame;I)I", av)); pc = 10; continue;
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","column","I", s.pop())); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame","access$202","(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$ParserFrame;I)I", av)); pc = 15; continue;
    case 15:
      __pc = 15;
      s.pop(); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l0); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","contextStack","Ljava/util/Deque;", s.pop())); pc = 18; continue;
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
    "builder()Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder","<init>","()V", rv, []); pc = 3; continue;
    case 3:
      __pc = 3;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$load$0(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","root","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;",target, r); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$1;)V": function (__ctx, __self, __args) {
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","<init>","(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson$Builder;)V", rv, av); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$402(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","marshaller","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "access$502(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson;Z)Z": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson","allowBareRootObject","Z",target, r); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/Jankson"].__fields = [{"name":"contextStack","descriptor":"Ljava/util/Deque;"},{"name":"root","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;"},{"name":"line","descriptor":"I"},{"name":"column","descriptor":"I"},{"name":"withheldCodePoint","descriptor":"I"},{"name":"marshaller","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;"},{"name":"allowBareRootObject","descriptor":"Z"},{"name":"retries","descriptor":"I"},{"name":"delayedError","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/SyntaxError;"},{"name":"rootElement","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/AnnotatedElement;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement", {
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
  CLASSES["com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement"].__fields = [];
  defineClass("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$1", {
    "<init>(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$1","this$0","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;",target, r); pc = 3; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$1","val$entry","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry;",target, r); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l0); pc = 7; continue;
    case 7:
      __pc = 7;
      var rv = s.pop();
      __ctx.invoke("java/lang/Object","<init>","()V", rv, []); pc = 8; continue;
    case 8:
      __pc = 8;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$1"].__fields = [{"name":"val$entry","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry;"},{"name":"this$0","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry", {
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
    "setComment(Ljava/lang/String;)V": function (__ctx, __self, __args) {
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
      r = s.pop(); if (r == null) { pc = 10; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/String","trim","()Ljava/lang/String;", rv, [])); pc = 4; continue;
    case 4:
      __pc = 4;
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/String","isEmpty","()Z", rv, [])); pc = 5; continue;
    case 5:
      __pc = 5;
      r = s.pop(); if (r != 0) { pc = 10; } else { pc = 6; } continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry","comment","Ljava/lang/String;",target, r); pc = 9; continue;
    case 9:
      __pc = 9;
      pc = undefined; continue;
    case 10:
      __pc = 10;
      s.push(l0); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(null); pc = 12; continue;
    case 12:
      __pc = 12;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry","comment","Ljava/lang/String;",target, r); pc = 13; continue;
    case 13:
      __pc = 13;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "<init>(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$1;)V": function (__ctx, __self, __args) {
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry"].__fields = [{"name":"comment","descriptor":"Ljava/lang/String;"},{"name":"key","descriptor":"Ljava/lang/String;"},{"name":"value","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject", {
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement","<init>","()V", rv, []); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l0); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.invokeStatic("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","getFallback","()Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;", [])); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject","marshaller","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;",target, r); pc = 5; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject","entries","Ljava/util/List;",target, r); pc = 10; continue;
    case 10:
      __pc = 10;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "setComment(Ljava/lang/String;Ljava/lang/String;)V": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4;
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject","entries","Ljava/util/List;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","iterator","()Ljava/util/Iterator;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      l3 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l3); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); if (r == 0) { pc = 21; } else { pc = 7; } continue;
    case 7:
      __pc = 7;
      s.push(l3); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry")); pc = 10; continue;
    case 10:
      __pc = 10;
      l4 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l4); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry","key","Ljava/lang/String;", s.pop())); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l1); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/String","equalsIgnoreCase","(Ljava/lang/String;)Z", rv, av)); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop(); if (r == 0) { pc = 20; } else { pc = 16; } continue;
    case 16:
      __pc = 16;
      s.push(l4); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(l2); pc = 18; continue;
    case 18:
      __pc = 18;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry","setComment","(Ljava/lang/String;)V", rv, av); pc = 19; continue;
    case 19:
      __pc = 19;
      return;
    case 20:
      __pc = 20;
      pc = undefined; continue;
    case 21:
      __pc = 21;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "put(Ljava/lang/String;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3, l4, l5;
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject","entries","Ljava/util/List;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","iterator","()Ljava/util/Iterator;", rv, [])); pc = 3; continue;
    case 3:
      __pc = 3;
      l3 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l3); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop(); if (r == 0) { pc = 25; } else { pc = 7; } continue;
    case 7:
      __pc = 7;
      s.push(l3); pc = 8; continue;
    case 8:
      __pc = 8;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry")); pc = 10; continue;
    case 10:
      __pc = 10;
      l4 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l4); pc = 12; continue;
    case 12:
      __pc = 12;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry","key","Ljava/lang/String;", s.pop())); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l1); pc = 14; continue;
    case 14:
      __pc = 14;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/String","equalsIgnoreCase","(Ljava/lang/String;)Z", rv, av)); pc = 15; continue;
    case 15:
      __pc = 15;
      r = s.pop(); if (r == 0) { pc = 24; } else { pc = 16; } continue;
    case 16:
      __pc = 16;
      s.push(l4); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry","value","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", s.pop())); pc = 18; continue;
    case 18:
      __pc = 18;
      l5 = s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l4); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l2); pc = 21; continue;
    case 21:
      __pc = 21;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry","value","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;",target, r); pc = 22; continue;
    case 22:
      __pc = 22;
      s.push(l5); pc = 23; continue;
    case 23:
      __pc = 23;
      return s.pop();
    case 24:
      __pc = 24;
      pc = undefined; continue;
    case 25:
      __pc = 25;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry")); pc = 26; continue;
    case 26:
      __pc = 26;
      s.push(s[s.length - 1]); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(null); pc = 28; continue;
    case 28:
      __pc = 28;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry","<init>","(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$1;)V", rv, av); pc = 29; continue;
    case 29:
      __pc = 29;
      l3 = s.pop(); pc = 30; continue;
    case 30:
      __pc = 30;
      s.push(l3); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l1); pc = 32; continue;
    case 32:
      __pc = 32;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry","key","Ljava/lang/String;",target, r); pc = 33; continue;
    case 33:
      __pc = 33;
      s.push(l3); pc = 34; continue;
    case 34:
      __pc = 34;
      s.push(l2); pc = 35; continue;
    case 35:
      __pc = 35;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry","value","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;",target, r); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(l0); pc = 37; continue;
    case 37:
      __pc = 37;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject","entries","Ljava/util/List;", s.pop())); pc = 38; continue;
    case 38:
      __pc = 38;
      s.push(l3); pc = 39; continue;
    case 39:
      __pc = 39;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","add","(Ljava/lang/Object;)Z", rv, av)); pc = 40; continue;
    case 40:
      __pc = 40;
      s.pop(); pc = 41; continue;
    case 41:
      __pc = 41;
      s.push(null); pc = 42; continue;
    case 42:
      __pc = 42;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "entrySet()Ljava/util/Set;": function (__ctx, __self, __args) {
    var l0, l1, l2, l3;
    l0 = __self;
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("java/util/LinkedHashSet")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push(s[s.length - 1]); pc = 2; continue;
    case 2:
      __pc = 2;
      s.pop();
      throw __ctx.toError(("java.util.LinkedHashSet.<init>") + ' needs the client internals');
    case 3:
      __pc = 3;
      l1 = s.pop(); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject","entries","Ljava/util/List;", s.pop())); pc = 6; continue;
    case 6:
      __pc = 6;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","iterator","()Ljava/util/Iterator;", rv, [])); pc = 7; continue;
    case 7:
      __pc = 7;
      l2 = s.pop(); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l2); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      r = s.pop(); if (r == 0) { pc = 24; } else { pc = 11; } continue;
    case 11:
      __pc = 11;
      s.push(l2); pc = 12; continue;
    case 12:
      __pc = 12;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry")); pc = 14; continue;
    case 14:
      __pc = 14;
      l3 = s.pop(); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l1); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$1")); pc = 17; continue;
    case 17:
      __pc = 17;
      s.push(s[s.length - 1]); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l0); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l3); pc = 20; continue;
    case 20:
      __pc = 20;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$1","<init>","(Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry;)V", rv, av); pc = 21; continue;
    case 21:
      __pc = 21;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Set","add","(Ljava/lang/Object;)Z", rv, av)); pc = 22; continue;
    case 22:
      __pc = 22;
      s.pop(); pc = 23; continue;
    case 23:
      __pc = 23;
      pc = undefined; continue;
    case 24:
      __pc = 24;
      s.push(l1); pc = 25; continue;
    case 25:
      __pc = 25;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "get(Ljava/lang/Object;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
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
      r = s.pop(); if (r == null) { pc = 5; } else { pc = 2; } continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(__ctx.isInstance(s.pop(), "java/lang/String")); pc = 4; continue;
    case 4:
      __pc = 4;
      r = s.pop(); if (r != 0) { pc = 7; } else { pc = 5; } continue;
    case 5:
      __pc = 5;
      s.push(null); pc = 6; continue;
    case 6:
      __pc = 6;
      return s.pop();
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject","entries","Ljava/util/List;", s.pop())); pc = 9; continue;
    case 9:
      __pc = 9;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/List","iterator","()Ljava/util/Iterator;", rv, [])); pc = 10; continue;
    case 10:
      __pc = 10;
      l2 = s.pop(); pc = 11; continue;
    case 11:
      __pc = 11;
      s.push(l2); pc = 12; continue;
    case 12:
      __pc = 12;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","hasNext","()Z", rv, [])); pc = 13; continue;
    case 13:
      __pc = 13;
      r = s.pop(); if (r == 0) { pc = 28; } else { pc = 14; } continue;
    case 14:
      __pc = 14;
      s.push(l2); pc = 15; continue;
    case 15:
      __pc = 15;
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Iterator","next","()Ljava/lang/Object;", rv, [])); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry")); pc = 17; continue;
    case 17:
      __pc = 17;
      l3 = s.pop(); pc = 18; continue;
    case 18:
      __pc = 18;
      s.push(l3); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry","key","Ljava/lang/String;", s.pop())); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l1); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(__ctx.cast(s.pop(), "java/lang/String")); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/lang/String","equalsIgnoreCase","(Ljava/lang/String;)Z", rv, av)); pc = 23; continue;
    case 23:
      __pc = 23;
      r = s.pop(); if (r == 0) { pc = 27; } else { pc = 24; } continue;
    case 24:
      __pc = 24;
      s.push(l3); pc = 25; continue;
    case 25:
      __pc = 25;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject$Entry","value","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", s.pop())); pc = 26; continue;
    case 26:
      __pc = 26;
      return s.pop();
    case 27:
      __pc = 27;
      pc = undefined; continue;
    case 28:
      __pc = 28;
      s.push(null); pc = 29; continue;
    case 29:
      __pc = 29;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject"].__fields = [{"name":"CAN_BE_UNQUOTED","descriptor":"Ljava/util/function/Predicate;"},{"name":"marshaller","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;"},{"name":"entries","descriptor":"Ljava/util/List;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive", {
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement","<init>","()V", rv, []); pc = 2; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 16; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 23; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 30; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 40; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 51; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 61; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 69; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;",target, r); pc = 76; continue;
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
    },
    "asLong(J)J": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(__ctx.isInstance(s.pop(), "java/lang/Number")); pc = 3; continue;
    case 3:
      __pc = 3;
      r = s.pop(); if (r == 0) { pc = 9; } else { pc = 4; } continue;
    case 4:
      __pc = 4;
      s.push(l0); pc = 5; continue;
    case 5:
      __pc = 5;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","value","Ljava/lang/Object;", s.pop())); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(__ctx.cast(s.pop(), "java/lang/Number")); pc = 7; continue;
    case 7:
      __pc = 7;
      s.pop();
      throw __ctx.toError(("java.lang.Number.longValue") + ' needs the client internals');
    case 8:
      __pc = 8;
      return s.pop();
    case 9:
      __pc = 9;
      s.push(l1); pc = 10; continue;
    case 10:
      __pc = 10;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive"].__fields = [{"name":"TRUE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive;"},{"name":"FALSE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive;"},{"name":"value","descriptor":"Ljava/lang/Object;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/SyntaxError", {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/SyntaxError","startLine","I",target, r); pc = 3; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/SyntaxError","startColumn","I",target, r); pc = 6; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/SyntaxError","line","I",target, r); pc = 3; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/SyntaxError","column","I",target, r); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/SyntaxError"].__fields = [{"name":"startLine","descriptor":"I"},{"name":"startColumn","descriptor":"I"},{"name":"line","descriptor":"I"},{"name":"column","descriptor":"I"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl", {
    "getFallback()Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;": function (__ctx, __self, __args) {
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","INSTANCE","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl;")); pc = 1; continue;
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","primitiveMarshallers","Ljava/util/Map;", s.pop())); pc = 2; continue;
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","serializers","Ljava/util/Map;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l1); pc = 3; continue;
    case 3:
      __pc = 3;
      s.push(l2); pc = 4; continue;
    case 4:
      __pc = 4;
      var dv = new Array(3); for (var di = 2; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$registerSerializer$0","(Ljava/util/function/Function;Ljava/lang/Object;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 5; continue;
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
    "registerSerializer(Ljava/lang/Class;Ljava/util/function/BiFunction;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","serializers","Ljava/util/Map;", s.pop())); pc = 2; continue;
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
    "registerDeserializer(Ljava/lang/Class;Ljava/lang/Class;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/DeserializerFunction;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","deserializers","Ljava/util/Map;", s.pop())); pc = 2; continue;
    case 2:
      __pc = 2;
      s.push(l2); pc = 3; continue;
    case 3:
      __pc = 3;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","get","(Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/serializer/DeserializerFunctionPool")); pc = 5; continue;
    case 5:
      __pc = 5;
      l4 = s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      s.push(l4); pc = 7; continue;
    case 7:
      __pc = 7;
      r = s.pop(); if (r != null) { pc = 19; } else { pc = 8; } continue;
    case 8:
      __pc = 8;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/serializer/DeserializerFunctionPool")); pc = 9; continue;
    case 9:
      __pc = 9;
      s.push(s[s.length - 1]); pc = 10; continue;
    case 10:
      __pc = 10;
      s.push(l2); pc = 11; continue;
    case 11:
      __pc = 11;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/serializer/DeserializerFunctionPool","<init>","(Ljava/lang/Class;)V", rv, av); pc = 12; continue;
    case 12:
      __pc = 12;
      l4 = s.pop(); pc = 13; continue;
    case 13:
      __pc = 13;
      s.push(l0); pc = 14; continue;
    case 14:
      __pc = 14;
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","deserializers","Ljava/util/Map;", s.pop())); pc = 15; continue;
    case 15:
      __pc = 15;
      s.push(l2); pc = 16; continue;
    case 16:
      __pc = 16;
      s.push(l4); pc = 17; continue;
    case 17:
      __pc = 17;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      s.push(__ctx.invoke("java/util/Map","put","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 18; continue;
    case 18:
      __pc = 18;
      s.pop(); pc = 19; continue;
    case 19:
      __pc = 19;
      s.push(l4); pc = 20; continue;
    case 20:
      __pc = 20;
      s.push(l1); pc = 21; continue;
    case 21:
      __pc = 21;
      s.push(l3); pc = 22; continue;
    case 22:
      __pc = 22;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/serializer/DeserializerFunctionPool","registerUnsafe","(Ljava/lang/Class;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/serializer/InternalDeserializerFunction;)V", rv, av); pc = 23; continue;
    case 23:
      __pc = 23;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","primitiveMarshallers","Ljava/util/Map;",target, r); pc = 7; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","typeAdapters","Ljava/util/Map;",target, r); pc = 12; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","serializers","Ljava/util/Map;",target, r); pc = 17; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","deserializers","Ljava/util/Map;",target, r); pc = 22; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","typeFactories","Ljava/util/Map;",target, r); pc = 27; continue;
    case 27:
      __pc = 27;
      s.push(l0); pc = 28; continue;
    case 28:
      __pc = 28;
      s.push(null); pc = 29; continue;
    case 29:
      __pc = 29;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$1","(Ljava/lang/Object;)Ljava/lang/Void;", null, dv)); pc = 30; continue;
    case 30:
      __pc = 30;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 31; continue;
    case 31:
      __pc = 31;
      s.push(l0); pc = 32; continue;
    case 32:
      __pc = 32;
      s.push(null); pc = 33; continue;
    case 33:
      __pc = 33;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$2","(Ljava/lang/Object;)Ljava/lang/String;", null, dv)); pc = 34; continue;
    case 34:
      __pc = 34;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 35; continue;
    case 35:
      __pc = 35;
      s.push(l0); pc = 36; continue;
    case 36:
      __pc = 36;
      s.push(null); pc = 37; continue;
    case 37:
      __pc = 37;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$3","(Ljava/lang/Object;)Ljava/lang/Byte;", null, dv)); pc = 38; continue;
    case 38:
      __pc = 38;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 39; continue;
    case 39:
      __pc = 39;
      s.push(l0); pc = 40; continue;
    case 40:
      __pc = 40;
      s.push(null); pc = 41; continue;
    case 41:
      __pc = 41;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$4","(Ljava/lang/Object;)Ljava/lang/Character;", null, dv)); pc = 42; continue;
    case 42:
      __pc = 42;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 43; continue;
    case 43:
      __pc = 43;
      s.push(l0); pc = 44; continue;
    case 44:
      __pc = 44;
      s.push(null); pc = 45; continue;
    case 45:
      __pc = 45;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$5","(Ljava/lang/Object;)Ljava/lang/Short;", null, dv)); pc = 46; continue;
    case 46:
      __pc = 46;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 47; continue;
    case 47:
      __pc = 47;
      s.push(l0); pc = 48; continue;
    case 48:
      __pc = 48;
      s.push(null); pc = 49; continue;
    case 49:
      __pc = 49;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$6","(Ljava/lang/Object;)Ljava/lang/Integer;", null, dv)); pc = 50; continue;
    case 50:
      __pc = 50;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 51; continue;
    case 51:
      __pc = 51;
      s.push(l0); pc = 52; continue;
    case 52:
      __pc = 52;
      s.push(null); pc = 53; continue;
    case 53:
      __pc = 53;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$7","(Ljava/lang/Object;)Ljava/lang/Long;", null, dv)); pc = 54; continue;
    case 54:
      __pc = 54;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 55; continue;
    case 55:
      __pc = 55;
      s.push(l0); pc = 56; continue;
    case 56:
      __pc = 56;
      s.push(null); pc = 57; continue;
    case 57:
      __pc = 57;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$8","(Ljava/lang/Object;)Ljava/lang/Float;", null, dv)); pc = 58; continue;
    case 58:
      __pc = 58;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 59; continue;
    case 59:
      __pc = 59;
      s.push(l0); pc = 60; continue;
    case 60:
      __pc = 60;
      s.push(null); pc = 61; continue;
    case 61:
      __pc = 61;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$9","(Ljava/lang/Object;)Ljava/lang/Double;", null, dv)); pc = 62; continue;
    case 62:
      __pc = 62;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 63; continue;
    case 63:
      __pc = 63;
      s.push(l0); pc = 64; continue;
    case 64:
      __pc = 64;
      s.push(null); pc = 65; continue;
    case 65:
      __pc = 65;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$10","(Ljava/lang/Object;)Ljava/lang/Boolean;", null, dv)); pc = 66; continue;
    case 66:
      __pc = 66;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 67; continue;
    case 67:
      __pc = 67;
      s.push(l0); pc = 68; continue;
    case 68:
      __pc = 68;
      s.push(__ctx.getStatic("java/lang/Void","TYPE","Ljava/lang/Class;")); pc = 69; continue;
    case 69:
      __pc = 69;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$11","(Ljava/lang/Object;)Ljava/lang/Void;", null, dv)); pc = 70; continue;
    case 70:
      __pc = 70;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 71; continue;
    case 71:
      __pc = 71;
      s.push(l0); pc = 72; continue;
    case 72:
      __pc = 72;
      s.push(__ctx.getStatic("java/lang/Byte","TYPE","Ljava/lang/Class;")); pc = 73; continue;
    case 73:
      __pc = 73;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$12","(Ljava/lang/Object;)Ljava/lang/Byte;", null, dv)); pc = 74; continue;
    case 74:
      __pc = 74;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 75; continue;
    case 75:
      __pc = 75;
      s.push(l0); pc = 76; continue;
    case 76:
      __pc = 76;
      s.push(__ctx.getStatic("java/lang/Character","TYPE","Ljava/lang/Class;")); pc = 77; continue;
    case 77:
      __pc = 77;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$13","(Ljava/lang/Object;)Ljava/lang/Character;", null, dv)); pc = 78; continue;
    case 78:
      __pc = 78;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 79; continue;
    case 79:
      __pc = 79;
      s.push(l0); pc = 80; continue;
    case 80:
      __pc = 80;
      s.push(__ctx.getStatic("java/lang/Short","TYPE","Ljava/lang/Class;")); pc = 81; continue;
    case 81:
      __pc = 81;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$14","(Ljava/lang/Object;)Ljava/lang/Short;", null, dv)); pc = 82; continue;
    case 82:
      __pc = 82;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 83; continue;
    case 83:
      __pc = 83;
      s.push(l0); pc = 84; continue;
    case 84:
      __pc = 84;
      s.push(__ctx.getStatic("java/lang/Integer","TYPE","Ljava/lang/Class;")); pc = 85; continue;
    case 85:
      __pc = 85;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$15","(Ljava/lang/Object;)Ljava/lang/Integer;", null, dv)); pc = 86; continue;
    case 86:
      __pc = 86;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 87; continue;
    case 87:
      __pc = 87;
      s.push(l0); pc = 88; continue;
    case 88:
      __pc = 88;
      s.push(__ctx.getStatic("java/lang/Long","TYPE","Ljava/lang/Class;")); pc = 89; continue;
    case 89:
      __pc = 89;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$16","(Ljava/lang/Object;)Ljava/lang/Long;", null, dv)); pc = 90; continue;
    case 90:
      __pc = 90;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 91; continue;
    case 91:
      __pc = 91;
      s.push(l0); pc = 92; continue;
    case 92:
      __pc = 92;
      s.push(__ctx.getStatic("java/lang/Float","TYPE","Ljava/lang/Class;")); pc = 93; continue;
    case 93:
      __pc = 93;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$17","(Ljava/lang/Object;)Ljava/lang/Float;", null, dv)); pc = 94; continue;
    case 94:
      __pc = 94;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 95; continue;
    case 95:
      __pc = 95;
      s.push(l0); pc = 96; continue;
    case 96:
      __pc = 96;
      s.push(__ctx.getStatic("java/lang/Double","TYPE","Ljava/lang/Class;")); pc = 97; continue;
    case 97:
      __pc = 97;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$18","(Ljava/lang/Object;)Ljava/lang/Double;", null, dv)); pc = 98; continue;
    case 98:
      __pc = 98;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 99; continue;
    case 99:
      __pc = 99;
      s.push(l0); pc = 100; continue;
    case 100:
      __pc = 100;
      s.push(__ctx.getStatic("java/lang/Boolean","TYPE","Ljava/lang/Class;")); pc = 101; continue;
    case 101:
      __pc = 101;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$19","(Ljava/lang/Object;)Ljava/lang/Boolean;", null, dv)); pc = 102; continue;
    case 102:
      __pc = 102;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","register","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 103; continue;
    case 103:
      __pc = 103;
      s.push(l0); pc = 104; continue;
    case 104:
      __pc = 104;
      s.push(null); pc = 105; continue;
    case 105:
      __pc = 105;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$20","(Ljava/lang/Void;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 106; continue;
    case 106:
      __pc = 106;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 107; continue;
    case 107:
      __pc = 107;
      s.push(l0); pc = 108; continue;
    case 108:
      __pc = 108;
      s.push(null); pc = 109; continue;
    case 109:
      __pc = 109;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$21","(Ljava/lang/Character;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 110; continue;
    case 110:
      __pc = 110;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 111; continue;
    case 111:
      __pc = 111;
      s.push(l0); pc = 112; continue;
    case 112:
      __pc = 112;
      s.push(null); pc = 113; continue;
    case 113:
      __pc = 113;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", null, dv)); pc = 114; continue;
    case 114:
      __pc = 114;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 115; continue;
    case 115:
      __pc = 115;
      s.push(l0); pc = 116; continue;
    case 116:
      __pc = 116;
      s.push(null); pc = 117; continue;
    case 117:
      __pc = 117;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$22","(Ljava/lang/Byte;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 118; continue;
    case 118:
      __pc = 118;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 119; continue;
    case 119:
      __pc = 119;
      s.push(l0); pc = 120; continue;
    case 120:
      __pc = 120;
      s.push(null); pc = 121; continue;
    case 121:
      __pc = 121;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$23","(Ljava/lang/Short;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 122; continue;
    case 122:
      __pc = 122;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 123; continue;
    case 123:
      __pc = 123;
      s.push(l0); pc = 124; continue;
    case 124:
      __pc = 124;
      s.push(null); pc = 125; continue;
    case 125:
      __pc = 125;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$24","(Ljava/lang/Integer;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 126; continue;
    case 126:
      __pc = 126;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 127; continue;
    case 127:
      __pc = 127;
      s.push(l0); pc = 128; continue;
    case 128:
      __pc = 128;
      s.push(null); pc = 129; continue;
    case 129:
      __pc = 129;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", null, dv)); pc = 130; continue;
    case 130:
      __pc = 130;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 131; continue;
    case 131:
      __pc = 131;
      s.push(l0); pc = 132; continue;
    case 132:
      __pc = 132;
      s.push(null); pc = 133; continue;
    case 133:
      __pc = 133;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$25","(Ljava/lang/Float;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 134; continue;
    case 134:
      __pc = 134;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 135; continue;
    case 135:
      __pc = 135;
      s.push(l0); pc = 136; continue;
    case 136:
      __pc = 136;
      s.push(null); pc = 137; continue;
    case 137:
      __pc = 137;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", null, dv)); pc = 138; continue;
    case 138:
      __pc = 138;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 139; continue;
    case 139:
      __pc = 139;
      s.push(l0); pc = 140; continue;
    case 140:
      __pc = 140;
      s.push(null); pc = 141; continue;
    case 141:
      __pc = 141;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", null, dv)); pc = 142; continue;
    case 142:
      __pc = 142;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 143; continue;
    case 143:
      __pc = 143;
      s.push(l0); pc = 144; continue;
    case 144:
      __pc = 144;
      s.push(__ctx.getStatic("java/lang/Void","TYPE","Ljava/lang/Class;")); pc = 145; continue;
    case 145:
      __pc = 145;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$26","(Ljava/lang/Void;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 146; continue;
    case 146:
      __pc = 146;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 147; continue;
    case 147:
      __pc = 147;
      s.push(l0); pc = 148; continue;
    case 148:
      __pc = 148;
      s.push(__ctx.getStatic("java/lang/Character","TYPE","Ljava/lang/Class;")); pc = 149; continue;
    case 149:
      __pc = 149;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$27","(Ljava/lang/Character;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 150; continue;
    case 150:
      __pc = 150;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 151; continue;
    case 151:
      __pc = 151;
      s.push(l0); pc = 152; continue;
    case 152:
      __pc = 152;
      s.push(__ctx.getStatic("java/lang/Byte","TYPE","Ljava/lang/Class;")); pc = 153; continue;
    case 153:
      __pc = 153;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$28","(Ljava/lang/Byte;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 154; continue;
    case 154:
      __pc = 154;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 155; continue;
    case 155:
      __pc = 155;
      s.push(l0); pc = 156; continue;
    case 156:
      __pc = 156;
      s.push(__ctx.getStatic("java/lang/Short","TYPE","Ljava/lang/Class;")); pc = 157; continue;
    case 157:
      __pc = 157;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$29","(Ljava/lang/Short;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 158; continue;
    case 158:
      __pc = 158;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 159; continue;
    case 159:
      __pc = 159;
      s.push(l0); pc = 160; continue;
    case 160:
      __pc = 160;
      s.push(__ctx.getStatic("java/lang/Integer","TYPE","Ljava/lang/Class;")); pc = 161; continue;
    case 161:
      __pc = 161;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$30","(Ljava/lang/Integer;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 162; continue;
    case 162:
      __pc = 162;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 163; continue;
    case 163:
      __pc = 163;
      s.push(l0); pc = 164; continue;
    case 164:
      __pc = 164;
      s.push(__ctx.getStatic("java/lang/Long","TYPE","Ljava/lang/Class;")); pc = 165; continue;
    case 165:
      __pc = 165;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", null, dv)); pc = 166; continue;
    case 166:
      __pc = 166;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 167; continue;
    case 167:
      __pc = 167;
      s.push(l0); pc = 168; continue;
    case 168:
      __pc = 168;
      s.push(__ctx.getStatic("java/lang/Float","TYPE","Ljava/lang/Class;")); pc = 169; continue;
    case 169:
      __pc = 169;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","lambda$new$31","(Ljava/lang/Float;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;", null, dv)); pc = 170; continue;
    case 170:
      __pc = 170;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 171; continue;
    case 171:
      __pc = 171;
      s.push(l0); pc = 172; continue;
    case 172:
      __pc = 172;
      s.push(__ctx.getStatic("java/lang/Double","TYPE","Ljava/lang/Class;")); pc = 173; continue;
    case 173:
      __pc = 173;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", null, dv)); pc = 174; continue;
    case 174:
      __pc = 174;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 175; continue;
    case 175:
      __pc = 175;
      s.push(l0); pc = 176; continue;
    case 176:
      __pc = 176;
      s.push(__ctx.getStatic("java/lang/Boolean","TYPE","Ljava/lang/Class;")); pc = 177; continue;
    case 177:
      __pc = 177;
      var dv = new Array(1); for (var di = 0; di >= 0; di--) dv[di] = s.pop();
      s.push(__ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", null, dv)); pc = 178; continue;
    case 178:
      __pc = 178;
      var av = new Array(2); for (var ai = 1; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl","registerSerializer","(Ljava/lang/Class;Ljava/util/function/Function;)V", rv, av); pc = 179; continue;
    case 179:
      __pc = 179;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$31(Ljava/lang/Float;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$30(Ljava/lang/Integer;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$29(Ljava/lang/Short;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$28(Ljava/lang/Byte;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$27(Ljava/lang/Character;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$26(Ljava/lang/Void;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonNull","INSTANCE","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonNull;")); pc = 1; continue;
    case 1:
      __pc = 1;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$25(Ljava/lang/Float;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$24(Ljava/lang/Integer;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$23(Ljava/lang/Short;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$22(Ljava/lang/Byte;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 7; continue;
    case 7:
      __pc = 7;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$21(Ljava/lang/Character;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive")); pc = 1; continue;
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
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonPrimitive","<init>","(Ljava/lang/Object;)V", rv, av); pc = 11; continue;
    case 11:
      __pc = 11;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "lambda$new$20(Ljava/lang/Void;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
    var l0;
    l0 = __args[0];
    var s = [];
    var pc = 0;
    var __pc = 0;
    while (true) { switch (pc) {
    case 0:
      __pc = 0;
      s.push(__ctx.getStatic("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonNull","INSTANCE","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonNull;")); pc = 1; continue;
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
    "lambda$registerSerializer$0(Ljava/util/function/Function;Ljava/lang/Object;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/api/Marshaller;)Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement;": function (__ctx, __self, __args) {
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
      s.push(__ctx.cast(s.pop(), "com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonElement")); pc = 4; continue;
    case 4:
      __pc = 4;
      return s.pop();
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl"].__fields = [{"name":"INSTANCE","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/MarshallerImpl;"},{"name":"primitiveMarshallers","descriptor":"Ljava/util/Map;"},{"name":"typeAdapters","descriptor":"Ljava/util/Map;"},{"name":"serializers","descriptor":"Ljava/util/Map;"},{"name":"deserializers","descriptor":"Ljava/util/Map;"},{"name":"typeFactories","descriptor":"Ljava/util/Map;"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ObjectParserContext", {
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
      s.push(__ctx.newInstance("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject")); pc = 4; continue;
    case 4:
      __pc = 4;
      s.push(s[s.length - 1]); pc = 5; continue;
    case 5:
      __pc = 5;
      var rv = s.pop();
      __ctx.invoke("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject","<init>","()V", rv, []); pc = 6; continue;
    case 6:
      __pc = 6;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ObjectParserContext","result","Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;",target, r); pc = 7; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ObjectParserContext","openBraceFound","Z",target, r); pc = 10; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ObjectParserContext","noOpenBrace","Z",target, r); pc = 13; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ObjectParserContext","colonFound","Z",target, r); pc = 16; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ObjectParserContext","closeBraceFound","Z",target, r); pc = 19; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ObjectParserContext","eof","Z",target, r); pc = 22; continue;
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ObjectParserContext","assumeOpen","Z",target, r); pc = 25; continue;
    case 25:
      __pc = 25;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/ObjectParserContext"].__fields = [{"name":"result","descriptor":"Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/JsonObject;"},{"name":"assumeOpen","descriptor":"Z"},{"name":"comment","descriptor":"Ljava/lang/String;"},{"name":"openBraceFound","descriptor":"Z"},{"name":"noOpenBrace","descriptor":"Z"},{"name":"key","descriptor":"Ljava/lang/String;"},{"name":"colonFound","descriptor":"Z"},{"name":"closeBraceFound","descriptor":"Z"},{"name":"eof","descriptor":"Z"}];
  defineClass("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/serializer/DeserializerFunctionPool", {
    "<init>(Ljava/lang/Class;)V": function (__ctx, __self, __args) {
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
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/serializer/DeserializerFunctionPool","values","Ljava/util/HashMap;",target, r); pc = 7; continue;
    case 7:
      __pc = 7;
      s.push(l0); pc = 8; continue;
    case 8:
      __pc = 8;
      s.push(l1); pc = 9; continue;
    case 9:
      __pc = 9;
      r = s.pop();
      var target = s.pop();
      __ctx.putField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/serializer/DeserializerFunctionPool","targetClass","Ljava/lang/Class;",target, r); pc = 10; continue;
    case 10:
      __pc = 10;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    },
    "registerUnsafe(Ljava/lang/Class;Lcom/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/serializer/InternalDeserializerFunction;)V": function (__ctx, __self, __args) {
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
      s.push(__ctx.getField("com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/serializer/DeserializerFunctionPool","values","Ljava/util/HashMap;", s.pop())); pc = 2; continue;
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
      s.push(__ctx.invoke("java/util/HashMap","put","(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", rv, av)); pc = 5; continue;
    case 5:
      __pc = 5;
      s.pop(); pc = 6; continue;
    case 6:
      __pc = 6;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/misterpemodder/shulkerboxtooltip/shadowed/blue/endless/jankson/impl/serializer/DeserializerFunctionPool"].__fields = [{"name":"targetClass","descriptor":"Ljava/lang/Class;"},{"name":"values","descriptor":"Ljava/util/HashMap;"}];
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
    "id": "shulkerboxtooltip",
    "name": "Shulker Box Tooltip",
    "version": "5.2.16+1.21.11",
    "authors": [
      "MisterPeModder"
    ],
    "description": "Converted from a Fabric mod (What's in my shulker box?)",
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
    var inst_com_misterpemodder_shulkerboxtooltip_fabric_ShulkerBoxTooltipImpl = { __class: "com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipImpl", __fields: FIELD_DEFAULTS["com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipImpl"] || [] };
    /* entrypoint: main com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipImpl.onInitialize */
    try {
      RT.method("com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipImpl", "onInitialize()V", inst_com_misterpemodder_shulkerboxtooltip_fabric_ShulkerBoxTooltipImpl, []);
    } catch (error) { RT.unsupported(error, "com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipImpl.onInitialize"); }
    var inst_com_misterpemodder_shulkerboxtooltip_fabric_ShulkerBoxTooltipClientImpl = { __class: "com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipClientImpl", __fields: FIELD_DEFAULTS["com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipClientImpl"] || [] };
    /* entrypoint: client com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipClientImpl.onInitializeClient */
    try {
      RT.method("com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipClientImpl", "onInitializeClient()V", inst_com_misterpemodder_shulkerboxtooltip_fabric_ShulkerBoxTooltipClientImpl, []);
    } catch (error) { RT.unsupported(error, "com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipClientImpl.onInitializeClient"); }
    /* entrypoint: shulkerboxtooltip com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipImpl.onInitialize */
    try {
      RT.method("com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipImpl", "onInitialize()V", inst_com_misterpemodder_shulkerboxtooltip_fabric_ShulkerBoxTooltipImpl, []);
    } catch (error) { RT.unsupported(error, "com/misterpemodder/shulkerboxtooltip/fabric/ShulkerBoxTooltipImpl.onInitialize"); }
    mod.on("world:leave", function (payload) { try { return RT.method("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl", "lambda$init$1(Lnet/minecraft/class_634;Lnet/minecraft/class_310;)V", null, [payload]); } catch (error) { RT.unsupported(error, "com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl.lambda$init$1"); } });
    mod.on("world:join", function (payload) { try { return RT.method("com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl", "lambda$init$4(Lnet/minecraft/class_634;Lnet/fabricmc/fabric/api/networking/v1/PacketSender;Lnet/minecraft/class_310;)V", null, [payload]); } catch (error) { RT.unsupported(error, "com/misterpemodder/shulkerboxtooltip/impl/network/fabric/ClientNetworkingImpl.lambda$init$4"); } });
    if (webmc.patches) {
      webmc.patches.add({
        modId: "shulkerboxtooltip", mixin: "com/misterpemodder/shulkerboxtooltip/mixin/client/AbstractContainerScreenMixin",
        targets: ["net/minecraft/client/gui/screens/inventory/AbstractContainerScreen"], environment: "unknown",
        injections: [
          { method: ["isHovering"], handler: "forceFocusSlot", kind: "inject", at: ["HEAD"], cancellable: true,
            run: function (target, args, info) { return RT.method("com/misterpemodder/shulkerboxtooltip/mixin/client/AbstractContainerScreenMixin", "forceFocusSlot(Lnet/minecraft/class_1735;DDLorg/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable;)V", target, args.concat([info])); } },
          { method: ["renderTooltip"], handler: "enableLockKeyHints", kind: "inject", at: ["HEAD"], cancellable: false,
            run: function (target, args, info) { return RT.method("com/misterpemodder/shulkerboxtooltip/mixin/client/AbstractContainerScreenMixin", "enableLockKeyHints(Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
          { method: ["renderTooltip"], handler: "disableLockKeyHints", kind: "inject", at: ["RETURN"], cancellable: false,
            run: function (target, args, info) { return RT.method("com/misterpemodder/shulkerboxtooltip/mixin/client/AbstractContainerScreenMixin", "disableLockKeyHints(Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "shulkerboxtooltip", mixin: "com/misterpemodder/shulkerboxtooltip/mixin/client/GuiGraphicsMixin",
        targets: ["net/minecraft/client/gui/GuiGraphics"], environment: "unknown",
        injections: [
        ],
        accessors: [{"kind":"accessor","name":"deferredTooltip","rawName":"field_60305","descriptor":"()Ljava/lang/Runnable;","method":"getDeferredTooltip"},{"kind":"accessor","name":"deferredTooltip","rawName":"field_60305","descriptor":"(Ljava/lang/Runnable;)V","method":"setDeferredTooltip"}]
      });
      webmc.patches.add({
        modId: "shulkerboxtooltip", mixin: "com/misterpemodder/shulkerboxtooltip/mixin/client/ItemContainerContentsMixin",
        targets: ["net/minecraft/world/item/component/ItemContainerContents"], environment: "unknown",
        injections: [
          { method: ["addToTooltip"], handler: "addToTooltip", kind: "inject", at: ["HEAD"], cancellable: true,
            run: function (target, args, info) { return RT.method("com/misterpemodder/shulkerboxtooltip/mixin/client/ItemContainerContentsMixin", "addToTooltip(Lnet/minecraft/class_1792$class_9635;Ljava/util/function/Consumer;Lnet/minecraft/class_1836;Lnet/minecraft/class_9473;Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "shulkerboxtooltip", mixin: "com/misterpemodder/shulkerboxtooltip/mixin/client/ItemStackMixin",
        targets: ["net/minecraft/world/item/ItemStack"], environment: "unknown",
        injections: [
          { method: ["addToTooltip"], handler: "removeLore", kind: "inject", at: ["HEAD"], cancellable: true,
            run: function (target, args, info) { return RT.method("com/misterpemodder/shulkerboxtooltip/mixin/client/ItemStackMixin", "removeLore(Lnet/minecraft/class_9331;Lnet/minecraft/class_1792$class_9635;Lnet/minecraft/class_10712;Ljava/util/function/Consumer;Lnet/minecraft/class_1836;Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "shulkerboxtooltip", mixin: "com/misterpemodder/shulkerboxtooltip/mixin/client/KeyboardHandlerMixin",
        targets: ["net/minecraft/client/KeyboardHandler"], environment: "unknown",
        injections: [
          { method: ["keyPress"], handler: "onKey", kind: "inject", at: ["HEAD"], cancellable: false,
            run: function (target, args, info) { return RT.method("com/misterpemodder/shulkerboxtooltip/mixin/client/KeyboardHandlerMixin", "onKey(JILnet/minecraft/class_11908;Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "shulkerboxtooltip", mixin: "com/misterpemodder/shulkerboxtooltip/mixin/client/ScreenMixin",
        targets: ["net/minecraft/client/gui/screens/Screen"], environment: "unknown",
        injections: [
          { method: ["renderWithTooltipAndSubtitles"], handler: "captureMousePosition", kind: "inject", at: ["INVOKE"], cancellable: false,
            run: function (target, args, info) { return RT.method("com/misterpemodder/shulkerboxtooltip/mixin/client/ScreenMixin", "captureMousePosition(Lnet/minecraft/class_332;IIFLorg/spongepowered/asm/mixin/injection/callback/CallbackInfo;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "shulkerboxtooltip", mixin: "com/misterpemodder/shulkerboxtooltip/mixin/client/fabric/AbstractContainerScreenMixin",
        targets: ["net/minecraft/client/gui/screens/inventory/AbstractContainerScreen"], environment: "unknown",
        injections: [
          { method: ["renderTooltip"], handler: "lockTooltipPosition", kind: "redirect", at: ["INVOKE"], cancellable: false,
            run: function (target, args, info) { return RT.method("com/misterpemodder/shulkerboxtooltip/mixin/client/fabric/AbstractContainerScreenMixin", "lockTooltipPosition(Lnet/minecraft/class_332;Lnet/minecraft/class_327;Ljava/util/List;Ljava/util/Optional;IILnet/minecraft/class_2960;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "shulkerboxtooltip", mixin: "com/misterpemodder/shulkerboxtooltip/mixin/client/fabric/GuiGraphicsMixin",
        targets: ["net/minecraft/client/gui/GuiGraphics"], environment: "unknown",
        injections: [
          { method: ["renderTooltip"], handler: "captureTooltipYPosition", kind: "redirect", at: ["INVOKE"], cancellable: false,
            run: function (target, args, info) { return RT.method("com/misterpemodder/shulkerboxtooltip/mixin/client/fabric/GuiGraphicsMixin", "captureTooltipYPosition(Lnet/minecraft/class_8000;IIIIII)Lorg/joml/Vector2ic;", target, args.concat([info])); } },
        ],
        accessors: []
      });
      webmc.patches.add({
        modId: "shulkerboxtooltip", mixin: "com/misterpemodder/shulkerboxtooltip/mixin/client/fabric/ItemStackMixin",
        targets: ["net/minecraft/world/item/ItemStack"], environment: "unknown",
        injections: [
          { method: ["getTooltipImage"], handler: "onGetTooltipData", kind: "inject", at: ["HEAD"], cancellable: true,
            run: function (target, args, info) { return RT.method("com/misterpemodder/shulkerboxtooltip/mixin/client/fabric/ItemStackMixin", "onGetTooltipData(Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable;)V", target, args.concat([info])); } },
          { method: ["getTooltipLines"], handler: "onGetTooltip", kind: "inject", at: ["RETURN"], cancellable: false,
            run: function (target, args, info) { return RT.method("com/misterpemodder/shulkerboxtooltip/mixin/client/fabric/ItemStackMixin", "onGetTooltip(Lnet/minecraft/class_1792$class_9635;Lnet/minecraft/class_1657;Lnet/minecraft/class_1836;Lorg/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable;)V", target, args.concat([info])); } },
        ],
        accessors: []
      });
    }
    api.log('converted: ' + SOURCE + ' — ' + "444 methods translated, 75 not");
  });
})();
