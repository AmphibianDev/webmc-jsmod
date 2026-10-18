/* Fabric -> JS. The translator.
 *
 * It takes the analysis of a jar (lib/fabric.mjs) and the mixin plan (lib/mixins.mjs) and writes a
 * JS mod: entrypoints, Fabric API events, keybinds, commands, Meteor-style modules, and a patch
 * plan for the mixins. Handler bodies are transpiled by lib/transpile.mjs; a body that needs game
 * internals no resolver can place is named in the report instead of being faked.
 *
 * The output is one file. `webmc.mod.json` is its manifest, `report.json` is the truth about what
 * was and was not translated, and `REPORT.md` is the same truth for a human.
 */
import { decode, parseDescriptor, transpileMethod } from "./transpile.mjs";
import { scanBytecode } from "./classfile.mjs";
import { readMixinPlan } from "./mixins.mjs";
import { hierarchy } from "./fabric.mjs";

/* Calls the JS side can answer without the game's internals. Each value is JavaScript source
 * that the generated mod carries; `api` is the mod's API object, `self` the receiver, `args` the
 * Java arguments. */
const NATIVE_SOURCE = [
  ["java/lang/System.currentTimeMillis()J", "function () { return Date.now(); }"],
  ["java/lang/System.nanoTime()J", "function () { return typeof performance !== 'undefined' && performance.now ? performance.now() * 1e6 : Date.now() * 1e6; }"],
  ["java/lang/Math.max(DD)D", "function (api, self, a) { return Math.max(a[0], a[1]); }"],
  ["java/lang/Math.min(DD)D", "function (api, self, a) { return Math.min(a[0], a[1]); }"],
  ["java/lang/Math.max(FF)F", "function (api, self, a) { return Math.max(a[0], a[1]); }"],
  ["java/lang/Math.min(FF)F", "function (api, self, a) { return Math.min(a[0], a[1]); }"],
  ["java/lang/Math.max(II)I", "function (api, self, a) { return Math.max(a[0], a[1]); }"],
  ["java/lang/Math.min(II)I", "function (api, self, a) { return Math.min(a[0], a[1]); }"],
  ["java/lang/Math.floor(D)D", "function (api, self, a) { return Math.floor(a[0]); }"],
  ["java/lang/Math.abs(I)I", "function (api, self, a) { return Math.abs(a[0]); }"],
  ["java/lang/Math.sqrt(D)D", "function (api, self, a) { return Math.sqrt(a[0]); }"],
  ["java/lang/Math.round(D)J", "function (api, self, a) { return BigInt(Math.round(a[0])); }"],
  ["java/lang/Math.sin(D)D", "function (api, self, a) { return Math.sin(a[0]); }"],
  ["java/lang/Math.cos(D)D", "function (api, self, a) { return Math.cos(a[0]); }"],
  ["java/lang/String.length()I", "function (api, self) { return String(self).length; }"],
  ["java/lang/String.isEmpty()Z", "function (api, self) { return String(self).length === 0; }"],
  ["java/lang/String.equals(Ljava/lang/Object;)Z", "function (api, self, a) { return String(self) === String(a[0]); }"],
  ["java/lang/String.toLowerCase()Ljava/lang/String;", "function (api, self) { return String(self).toLowerCase(); }"],
  ["java/lang/String.toUpperCase()Ljava/lang/String;", "function (api, self) { return String(self).toUpperCase(); }"],
  ["java/lang/String.contains(Ljava/lang/CharSequence;)Z", "function (api, self, a) { return String(self).indexOf(String(a[0])) >= 0; }"],
  ["java/lang/String.startsWith(Ljava/lang/String;)Z", "function (api, self, a) { return String(self).indexOf(String(a[0])) === 0; }"],
  ["java/lang/String.trim()Ljava/lang/String;", "function (api, self) { return String(self).trim(); }"],
  ["java/lang/String.valueOf(Ljava/lang/Object;)Ljava/lang/String;", "function (api, self, a) { return String(a[0]); }"],
  ["java/util/List.size()I", "function (api, self) { return (self && self.length) || 0; }"],
  ["java/util/List.isEmpty()Z", "function (api, self) { return !self || !self.length; }"],
  ["java/util/List.get(I)Ljava/lang/Object;", "function (api, self, a) { return self[a[0]]; }"],
  ["java/util/List.add(Ljava/lang/Object;)Z", "function (api, self, a) { self.push(a[0]); return true; }"],
  ["java/util/List.remove(I)Ljava/lang/Object;", "function (api, self, a) { return self.splice(a[0], 1)[0]; }"],
  ["java/util/Map.get(Ljava/lang/Object;)Ljava/lang/Object;", "function (api, self, a) { return self.get(a[0]); }"],
  ["java/util/Map.put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", "function (api, self, a) { return self.set(a[0], a[1]); }"],
  ["java/util/Map.containsKey(Ljava/lang/Object;)Z", "function (api, self, a) { return self.has(a[0]); }"],
  ["java/lang/StringBuilder.<init>()V", "function (api, self) { self.__sb = []; }"],
  ["java/lang/StringBuilder.<init>(Ljava/lang/String;)V", "function (api, self, a) { self.__sb = [a[0]]; }"],
  ["java/lang/StringBuilder.append(Ljava/lang/String;)Ljava/lang/StringBuilder;", "function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; }"],
  ["java/lang/StringBuilder.append(Ljava/lang/Object;)Ljava/lang/StringBuilder;", "function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; }"],
  ["java/lang/StringBuilder.append(I)Ljava/lang/StringBuilder;", "function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; }"],
  ["java/lang/StringBuilder.append(J)Ljava/lang/StringBuilder;", "function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; }"],
  ["java/lang/StringBuilder.append(C)Ljava/lang/StringBuilder;", "function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; }"],
  ["java/lang/StringBuilder.append(Z)Ljava/lang/StringBuilder;", "function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; }"],
  ["java/lang/StringBuilder.append(D)Ljava/lang/StringBuilder;", "function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; }"],
  ["java/lang/StringBuilder.append(F)Ljava/lang/StringBuilder;", "function (api, self, a) { (self.__sb = self.__sb || []).push(a[0]); return self; }"],
  ["java/lang/StringBuilder.toString()Ljava/lang/String;", "function (api, self) { return (self.__sb || []).join(''); }"],
  ["java/lang/StringBuilder.length()I", "function (api, self) { return (self.__sb || []).join('').length; }"],
  ["java/lang/StringBuilder.setLength(I)V", "function (api, self, a) { self.__sb = [(self.__sb || []).join('').slice(0, a[0])]; }"],
  ["java/lang/StringBuilder.reverse()Ljava/lang/StringBuilder;", "function (api, self) { self.__sb = [(self.__sb || []).join('').split('').reverse().join('')]; return self; }"],
  ["java/lang/StringBuilder.deleteCharAt(I)Ljava/lang/StringBuilder;", "function (api, self, a) { var text = (self.__sb || []).join(''); self.__sb = [text.slice(0, a[0]) + text.slice(a[0] + 1)]; return self; }"],
  ["java/lang/Boolean.booleanValue()Z", "function (api, self) { return !!self; }"],
  ["java/lang/Boolean.valueOf(Z)Ljava/lang/Boolean;", "function (api, self, a) { return !!a[0]; }"],
  ["java/lang/Integer.intValue()I", "function (api, self) { return self | 0; }"],
  ["java/lang/Integer.valueOf(I)Ljava/lang/Integer;", "function (api, self, a) { return a[0] | 0; }"],
  ["java/lang/Double.doubleValue()D", "function (api, self) { return Number(self); }"],
  ["java/lang/Float.floatValue()F", "function (api, self) { return Number(self); }"],
  ["java/lang/Long.longValue()J", "function (api, self) { return BigInt(self); }"],
  ["java/lang/Number.intValue()I", "function (api, self) { return self | 0; }"],
  ["java/lang/Number.doubleValue()D", "function (api, self) { return Number(self); }"],
  ["java/util/List.iterator()Ljava/util/Iterator;", "function (api, self) { return { __list: self || [], __i: 0 }; }"],
  ["java/util/Collection.iterator()Ljava/util/Iterator;", "function (api, self) { return { __list: self || [], __i: 0 }; }"],
  ["java/lang/Iterable.iterator()Ljava/util/Iterator;", "function (api, self) { return { __list: self || [], __i: 0 }; }"],
  ["java/util/Iterator.hasNext()Z", "function (api, self) { return !!(self && self.__list && self.__i < self.__list.length); }"],
  ["java/util/Iterator.next()Ljava/lang/Object;", "function (api, self) { return self.__list[self.__i++]; }"],
  ["java/util/Iterator.remove()V", "function (api, self) { if (self && self.__list) { self.__list.splice(--self.__i, 1); } }"],
  ["java/util/function/Function.apply(Ljava/lang/Object;)Ljava/lang/Object;", "function (api, self, a) { return self(a[0]); }"],
  ["java/util/function/Supplier.get()Ljava/lang/Object;", "function (api, self) { return self(); }"],
  ["java/util/function/Consumer.accept(Ljava/lang/Object;)V", "function (api, self, a) { self(a[0]); }"],
  ["java/util/function/Predicate.test(Ljava/lang/Object;)Z", "function (api, self, a) { return !!self(a[0]); }"],
  ["java/util/function/BiFunction.apply(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", "function (api, self, a) { return self(a[0], a[1]); }"],
  ["java/util/function/BiConsumer.accept(Ljava/lang/Object;Ljava/lang/Object;)V", "function (api, self, a) { self(a[0], a[1]); }"],
  ["java/util/function/BiPredicate.test(Ljava/lang/Object;Ljava/lang/Object;)Z", "function (api, self, a) { return !!self(a[0], a[1]); }"],
  ["java/util/function/BooleanSupplier.getAsBoolean()Z", "function (api, self) { return !!self(); }"],
  ["java/util/function/IntSupplier.getAsInt()I", "function (api, self) { return self() | 0; }"],
  ["java/util/function/IntFunction.apply(I)Ljava/lang/Object;", "function (api, self, a) { return self(a[0]); }"],
  ["java/util/Optional.get()Ljava/lang/Object;", "function (api, self) { return self.value; }"],
  ["java/util/Optional.isPresent()Z", "function (api, self) { return self.value != null; }"],
  ["java/util/Optional.ofNullable(Ljava/lang/Object;)Ljava/util/Optional;", "function (api, self, a) { return { value: a[0] }; }"],
  ["java/util/Optional.empty()Ljava/util/Optional;", "function () { return { value: null }; }"],
  ["java/lang/String.equalsIgnoreCase(Ljava/lang/String;)Z", "function (api, self, a) { return String(self).toLowerCase() === String(a[0]).toLowerCase(); }"],
  ["java/lang/String.indexOf(Ljava/lang/String;)I", "function (api, self, a) { return String(self).indexOf(String(a[0])); }"],
  ["java/lang/String.indexOf(I)I", "function (api, self, a) { return String(self).indexOf(String.fromCodePoint(a[0])); }"],
  ["java/lang/String.lastIndexOf(Ljava/lang/String;)I", "function (api, self, a) { return String(self).lastIndexOf(String(a[0])); }"],
  ["java/lang/String.substring(I)Ljava/lang/String;", "function (api, self, a) { return String(self).slice(a[0]); }"],
  ["java/lang/String.substring(II)Ljava/lang/String;", "function (api, self, a) { return String(self).slice(a[0], a[1]); }"],
  ["java/lang/String.charAt(I)C", "function (api, self, a) { return String(self).charCodeAt(a[0]); }"],
  ["java/lang/String.split(Ljava/lang/String;)[Ljava/lang/String;", "function (api, self, a) { return String(self).split(String(a[0])); }"],
  ["java/lang/String.replace(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Ljava/lang/String;", "function (api, self, a) { return String(self).split(String(a[0])).join(String(a[1])); }"],
  ["java/lang/String.replaceAll(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", "function (api, self, a) { return String(self).split(String(a[0])).join(String(a[1])); }"],
  ["java/lang/String.concat(Ljava/lang/String;)Ljava/lang/String;", "function (api, self, a) { return String(self) + String(a[0]); }"],
  ["java/lang/String.toString()Ljava/lang/String;", "function (api, self) { return String(self); }"],
  ["java/lang/String.hashCode()I", "function (api, self) { var h = 0, t = String(self); for (var i = 0; i < t.length; i++) { h = (h * 31 + t.charCodeAt(i)) | 0; } return h; }"],
  ["java/lang/String.compareTo(Ljava/lang/String;)I", "function (api, self, a) { return String(self) < String(a[0]) ? -1 : (String(self) > String(a[0]) ? 1 : 0); }"],
  ["java/lang/String.valueOf(I)Ljava/lang/String;", "function (api, self, a) { return String(a[0]); }"],
  ["java/lang/String.format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;", "function (api, self, a) { var i = 0; return String(a[0]).replace(/%[sdf]/g, function () { return String(a[1][i++]); }); }"],
  ["java/lang/Object.equals(Ljava/lang/Object;)Z", "function (api, self, a) { return self === a[0]; }"],
  ["java/lang/Object.getClass()Ljava/lang/Class;", "function (api, self) { return self && self.__class ? self.__class : 'java/lang/Object'; }"],
  ["java/lang/Class.getName()Ljava/lang/String;", "function (api, self) { return String(self).replace(/\\//g, '.'); }"],
  ["java/lang/Class.getSimpleName()Ljava/lang/String;", "function (api, self) { return String(self).split('/').pop().split('$').pop(); }"],
  ["java/lang/Class.cast(Ljava/lang/Object;)Ljava/lang/Object;", "function (api, self, a) { return a[0]; }"],
  ["java/lang/Class.isInstance(Ljava/lang/Object;)Z", "function (api, self, a) { return a[0] != null; }"],
  ["java/lang/Enum.name()Ljava/lang/String;", "function (api, self) { return String(self && self.__name || self); }"],
  ["java/lang/Enum.ordinal()I", "function (api, self) { return (self && self.__ordinal) | 0; }"],
  ["java/lang/Enum.toString()Ljava/lang/String;", "function (api, self) { return String(self && self.__name || self); }"],
  ["java/util/ArrayList.<init>()V", "function (api, self) { self.__list = []; }"],
  ["java/util/ArrayList.<init>(I)V", "function (api, self) { self.__list = []; }"],
  ["java/util/ArrayList.<init>(Ljava/util/Collection;)V", "function (api, self, a) { self.__list = (a[0] && a[0].__list ? a[0].__list : a[0] || []).slice(); }"],
  ["java/util/ArrayList.add(Ljava/lang/Object;)Z", "function (api, self, a) { (self.__list = self.__list || []).push(a[0]); return true; }"],
  ["java/util/ArrayList.get(I)Ljava/lang/Object;", "function (api, self, a) { return (self.__list || [])[a[0]]; }"],
  ["java/util/ArrayList.size()I", "function (api, self) { return (self.__list || []).length; }"],
  ["java/util/ArrayList.isEmpty()Z", "function (api, self) { return !(self.__list || []).length; }"],
  ["java/util/ArrayList.remove(I)Ljava/lang/Object;", "function (api, self, a) { return (self.__list || []).splice(a[0], 1)[0]; }"],
  ["java/util/ArrayList.remove(Ljava/lang/Object;)Z", "function (api, self, a) { var list = self.__list || []; var i = list.indexOf(a[0]); if (i < 0) { return false; } list.splice(i, 1); return true; }"],
  ["java/util/ArrayList.contains(Ljava/lang/Object;)Z", "function (api, self, a) { return (self.__list || []).indexOf(a[0]) >= 0; }"],
  ["java/util/ArrayList.clear()V", "function (api, self) { self.__list = []; }"],
  ["java/util/ArrayList.iterator()Ljava/util/Iterator;", "function (api, self) { return { __list: self.__list || [], __i: 0 }; }"],
  ["java/util/ArrayList.toArray([Ljava/lang/Object;)[Ljava/lang/Object;", "function (api, self) { return (self.__list || []).slice(); }"],
  ["java/util/HashMap.<init>()V", "function (api, self) { self.__map = new Map(); }"],
  ["java/util/HashMap.put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;", "function (api, self, a) { var m = self.__map = self.__map || new Map(); var old = m.get(a[0]); m.set(a[0], a[1]); return old === undefined ? null : old; }"],
  ["java/util/HashMap.get(Ljava/lang/Object;)Ljava/lang/Object;", "function (api, self, a) { return (self.__map || new Map()).get(a[0]) ?? null; }"],
  ["java/util/HashMap.remove(Ljava/lang/Object;)Ljava/lang/Object;", "function (api, self, a) { return (self.__map || new Map()).get(a[0]) ?? null; }"],
  ["java/util/HashMap.containsKey(Ljava/lang/Object;)Z", "function (api, self, a) { return (self.__map || new Map()).has(a[0]); }"],
  ["java/util/HashMap.size()I", "function (api, self) { return (self.__map || new Map()).size; }"],
  ["java/util/HashMap.isEmpty()Z", "function (api, self) { return (self.__map || new Map()).size === 0; }"],
  ["java/util/HashMap.clear()V", "function (api, self) { self.__map = new Map(); }"],
  ["java/util/HashSet.<init>()V", "function (api, self) { self.__set = new Set(); }"],
  ["java/util/Set.add(Ljava/lang/Object;)Z", "function (api, self, a) { var s = self.__set = self.__set || new Set(); var had = s.has(a[0]); s.add(a[0]); return !had; }"],
  ["java/util/Set.contains(Ljava/lang/Object;)Z", "function (api, self, a) { return (self.__set || new Set()).has(a[0]); }"],
  ["java/util/Set.remove(Ljava/lang/Object;)Z", "function (api, self, a) { return (self.__set || new Set()).delete(a[0]); }"],
  ["java/util/Set.size()I", "function (api, self) { return (self.__set || new Set()).size; }"],
  ["java/util/Collection.isEmpty()Z", "function (api, self) { return !self || !self.length; }"],
  ["java/util/Collections.unmodifiableList(Ljava/util/List;)Ljava/util/List;", "function (api, self, a) { return a[0]; }"],
  ["java/util/Collections.emptyList()Ljava/util/List;", "function () { return []; }"],
  ["java/util/Collections.singletonList(Ljava/lang/Object;)Ljava/util/List;", "function (api, self, a) { return [a[0]]; }"],
  ["java/util/Arrays.asList([Ljava/lang/Object;)Ljava/util/List;", "function (api, self, a) { return a[0] || []; }"],
  ["java/util/Optional.of(Ljava/lang/Object;)Ljava/util/Optional;", "function (api, self, a) { return { value: a[0] }; }"],
  ["java/util/Optional.orElse(Ljava/lang/Object;)Ljava/lang/Object;", "function (api, self, a) { return self.value != null ? self.value : a[0]; }"],
  ["java/util/Optional.orElseGet(Ljava/util/function/Supplier;)Ljava/lang/Object;", "function (api, self, a) { return self.value != null ? self.value : a[0](); }"],
  ["java/util/Optional.map(Ljava/util/function/Function;)Ljava/util/Optional;", "function (api, self, a) { return { value: self.value == null ? null : a[0](self.value) }; }"],
  ["java/util/Optional.ifPresent(Ljava/util/function/Consumer;)V", "function (api, self, a) { if (self.value != null) { a[0](self.value); } }"],
  ["java/lang/Math.ceil(D)D", "function (api, self, a) { return Math.ceil(a[0]); }"],
  ["java/lang/Math.pow(DD)D", "function (api, self, a) { return Math.pow(a[0], a[1]); }"],
  ["java/lang/Math.atan2(DD)D", "function (api, self, a) { return Math.atan2(a[0], a[1]); }"],
  ["java/lang/Math.toRadians(D)D", "function (api, self, a) { return a[0] * Math.PI / 180; }"],
  ["java/lang/Math.toDegrees(D)D", "function (api, self, a) { return a[0] * 180 / Math.PI; }"],
  ["java/lang/System.getProperty(Ljava/lang/String;)Ljava/lang/String;", "function (api, self, a) { return ''; }"],
  ["java/lang/System.arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V", "function (api, self, a) { var src = a[0], srcPos = a[1], dst = a[2], dstPos = a[3], len = a[4]; for (var i = 0; i < len; i++) { dst[dstPos + i] = src[srcPos + i]; } }"],
  ["java/lang/Iterable.forEach(Ljava/util/function/Consumer;)V", "function (api, self, a) { (self || []).forEach(function (item) { a[0](item); }); }"],
  ["java/lang/Object.<init>()V", "function () {}"],
  ["java/lang/Object.toString()Ljava/lang/String;", "function (api, self) { return String(self); }"],
  ["java/lang/Object.hashCode()I", "function (api, self) { return 0; }"],
  ["java/lang/Objects.requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;", "function (api, self, a) { if (a[0] == null) { throw new Error('null'); } return a[0]; }"],
  ["java/lang/Objects.equals(Ljava/lang/Object;Ljava/lang/Object;)Z", "function (api, self, a) { return a[0] === a[1]; }"],
  ["java/lang/Integer.parseInt(Ljava/lang/String;)I", "function (api, self, a) { return parseInt(String(a[0]), 10) | 0; }"],
  ["java/lang/Double.parseDouble(Ljava/lang/String;)D", "function (api, self, a) { return Number(a[0]); }"],
  ["java/lang/Boolean.parseBoolean(Ljava/lang/String;)Z", "function (api, self, a) { return String(a[0]) === 'true'; }"],
  ["org/slf4j/Logger.info(Ljava/lang/String;)V", "function (api, self, a) { api.log(a[0]); }"],
  ["org/slf4j/Logger.warn(Ljava/lang/String;)V", "function (api, self, a) { api.log('warn: ' + a[0]); }"],
  ["org/slf4j/Logger.error(Ljava/lang/String;)V", "function (api, self, a) { api.log('error: ' + a[0]); }"],
  ["java/io/PrintStream.println(Ljava/lang/String;)V", "function (api, self, a) { api.log(a[0]); }"]
];

const MAPPED_SOURCE = [
  ["net/minecraft/client/network/ClientPlayerEntity.getX()D", "function (api) { return pos(api, 'x'); }"],
  ["net/minecraft/client/network/ClientPlayerEntity.getY()D", "function (api) { return pos(api, 'y'); }"],
  ["net/minecraft/client/network/ClientPlayerEntity.getZ()D", "function (api) { return pos(api, 'z'); }"],
  ["net/minecraft/client/network/ClientPlayerEntity.getYaw()F", "function (api) { return pos(api, 'yaw'); }"],
  ["net/minecraft/client/network/ClientPlayerEntity.getPitch()F", "function (api) { return pos(api, 'pitch'); }"],
  ["net/minecraft/client/network/ClientPlayerEntity.isOnGround()Z", "function (api) { return pos(api, 'onGround'); }"],
  ["net/minecraft/entity/player/PlayerEntity.getX()D", "function (api) { return pos(api, 'x'); }"],
  ["net/minecraft/entity/player/PlayerEntity.getY()D", "function (api) { return pos(api, 'y'); }"],
  ["net/minecraft/entity/player/PlayerEntity.getZ()D", "function (api) { return pos(api, 'z'); }"]
];

const KNOWN_NATIVE_KEYS = new Set(NATIVE_SOURCE.map(([key]) => key));
const KNOWN_MAPPED_KEYS = new Set(MAPPED_SOURCE.map(([key]) => key));

function pos(api, field) {
  var snapshot = api.player && api.player.snapshot ? api.player.snapshot() : null;
  if (!snapshot || !snapshot.position) { return 0; }
  if (field === 'yaw' || field === 'pitch') { return snapshot[field] || 0; }
  if (field === 'onGround') { return snapshot.onGround === true; }
  return snapshot.position[field] != null ? snapshot.position[field] : 0;
}

export function translate(analysis, options = {}) {
  const mappings = options.mappings || null;
  const plan = readMixinPlan(analysis, mappings);
  const remap = mappings ? {
    owner: (name) => (name ? mappings.class(String(name)) : name),
    klass: (name) => (name ? mappings.class(String(name)) : name),
    name: (owner, name) => (owner && name ? mappings.method(String(owner), String(name)) : name),
    field: (owner, name) => (owner && name ? mappings.field(String(owner), String(name)) : name)
  } : { owner: (n) => n, klass: (n) => n, name: (o, n) => n, field: (o, n) => n };
  const classes = analysis.classes;
  const fabric = analysis.fabric || { id: "converted", name: "Converted mod", version: "1.0.0" };
  const allowInternals = options.internals !== false;
  const report = {
    source: options.jarName || "(jar)",
    fabric: { id: fabric.id, name: fabric.name, version: fabric.version, authors: fabric.authors, environment: fabric.environment },
    stats: analysis.stats,
    entrypoints: [],
    events: [],
    keybinds: [],
    commands: [],
    modules: [],
    mixins: { summary: plan.summary, topTargets: plan.topTargets, topMethods: plan.topMethods },
    unresolved: [],
    translatedMethods: 0,
    skippedMethods: 0,
    notes: []
  };
  const unresolvedCounts = new Map();

  /* ------------------------------------------------------------------ the class table ---------- *
   * Every method of the mod is transpiled when it can be. The call router then has the whole mod
   * to resolve against, which is what lets a handler call the mod's own helpers.
   */
  const compiled = new Map();     // className -> Map<name+descriptor, {source, ok, reason}>
  const resolvable = new Map();   // className -> Set<name+descriptor>
  const classFieldDefaults = new Map();

  // Which methods exist in the jar at all, before any transpiling: a call from an early class to a
  // later one must still resolve, and resolution happens while the classes are walked.
  const methodIndex = new Map();
  classes.forEach((info, className) => {
    const keys = new Set();
    for (const method of info.methods) { if (method.code) { keys.add(method.name + method.descriptor); } }
    methodIndex.set(className, keys);
  });
  /* ------------------------------------------------------------------ reachability --------------- *
   * A converted mod only ever runs from its own entry points: entrypoints, event handlers, keybind
   * handlers and module callbacks. Everything else is only useful if one of those reaches it. So
   * the generated file carries the reachable call graph, not every method in the jar — Meteor's
   * package drops from 33 MB to the part that a player can actually reach.
   *
   * Sound because the graph is built from the classes' own bytecode: direct calls and resolved
   * lambdas. A method with an *unresolved* dynamic call is a blind spot, and its whole class is
   * kept rather than guessed away.
   */
  const roots = new Set();
  const entrypointRootNames = [];
  for (const [kind, list] of Object.entries(fabric.entrypoints || {})) {
    for (const entry of list) {
      const internal = String(entry.value).replace(/\./g, "/");
      const info = classes.get(internal);
      if (!info) { continue; }
      const chain = hierarchy(info, classes);
      let method = kind === "client" || chain.some((name) => /ClientModInitializer$/.test(name)) ? "onInitializeClient" : "onInitialize";
      const found = info.methods.find((candidate) => candidate.code && candidate.name === method && candidate.descriptor === "()V")
        || info.methods.find((candidate) => candidate.code && /^onInitialize/.test(candidate.name));
      if (found) {
        entrypointRootNames.push({ kind, className: internal, method: found.name, descriptor: found.descriptor });
        roots.add(internal + "::" + found.name + found.descriptor);
      }
      for (const candidate of info.methods) {
        if (candidate.code && (candidate.name === "<init>" || candidate.name === "<clinit>")) { roots.add(internal + "::" + candidate.name + candidate.descriptor); }
      }
    }
  }
  for (const uses of Object.values(analysis.api.events || {})) {
    for (const use of uses) {
      if (use.lambda && use.lambda.owner) { roots.add(use.lambda.owner + "::" + use.lambda.name + use.lambda.descriptor); }
    }
  }
  for (const module of analysis.modules || []) {
    const info = classes.get(module.className);
    if (!info) { continue; }
    for (const candidate of info.methods) {
      if (!candidate.code) { continue; }
      if (candidate.name === "<init>" || candidate.name === "<clinit>" || /^(on[A-Z]|toggle|toggleActive)/.test(candidate.name)) {
        roots.add(module.className + "::" + candidate.name + candidate.descriptor);
      }
    }
  }

  let reachable = null;   // null means "no pruning"
  if (options.trim !== false && roots.size) {
    const graph = new Map();
    const keepWholeClass = new Set();
    for (const [className, info] of classes) {
      for (const method of info.methods) {
        if (!method.code) { continue; }
        const key = className + "::" + method.name + method.descriptor;
        const edges = new Set();
        let scan = null;
        try { scan = scanBytecode(className, method, info.pool, info.bootstrapMethods); } catch (error) { scan = null; }
        if (!scan) { keepWholeClass.add(className); continue; }
        for (const call of scan.calls) {
          if (call.owner && classes.has(call.owner)) {
            const declaring = declaresMethod(call.owner, call.name, call.descriptor);
            if (declaring) { edges.add(declaring + "::" + call.name + call.descriptor); }
          }
        }
        for (const lambda of scan.lambdas) {
          if (lambda.target && lambda.target.owner && classes.has(lambda.target.owner)) {
            edges.add(lambda.target.owner + "::" + lambda.target.name + lambda.target.descriptor);
          }
          if (!lambda.target) { keepWholeClass.add(className); }
        }
        graph.set(key, edges);
      }
    }
    reachable = new Set();
    const queue = Array.from(roots);
    while (queue.length) {
      const key = queue.pop();
      if (reachable.has(key)) { continue; }
      reachable.add(key);
      const edges = graph.get(key);
      if (edges) { edges.forEach((edge) => { if (!reachable.has(edge)) { queue.push(edge); } }); }
    }
    // Blind spots: a class with an unresolved dynamic call keeps every method it has.
    for (const className of keepWholeClass) {
      const info = classes.get(className);
      if (!info) { continue; }
      for (const method of info.methods) {
        if (method.code) { reachable.add(className + "::" + method.name + method.descriptor); }
      }
    }
  }
  report.roots = roots.size;
  report.reachableMethods = reachable ? reachable.size : analysis.stats.methodCount;

  function declaresMethod(owner, name, descriptor) {
    let current = classes.get(owner);
    const seen = new Set();
    while (current && !seen.has(current.name)) {
      seen.add(current.name);
      const keys = methodIndex.get(current.name);
      if (keys && keys.has(name + descriptor)) { return current.name; }
      current = classes.get(current.superName) || null;
    }
    return null;
  }

  classes.forEach((info, className) => {
    const methods = new Map();
    for (const method of info.methods) {
      if (!method.code) { continue; }
      const key = method.name + method.descriptor;
      if (reachable && !reachable.has(className + "::" + key)) { report.prunedMethods = (report.prunedMethods || 0) + 1; continue; }
      const result = transpileMethod({
        info, method, className, remap,
        resolve: (owner, name, descriptor, kind) => resolveCall(owner, name, descriptor, kind, className)
      });
      if (result.ok) {
        methods.set(key, { source: result.source, ok: true });
        report.translatedMethods++;
      } else {
        methods.set(key, { ok: false, reason: result.reason });
        report.skippedMethods++;
        const reason = String(result.reason || "").replace(/^unsupported: /, "");
        for (const piece of reason.split("; ")) {
          if (!piece) { continue; }
          unresolvedCounts.set(piece, (unresolvedCounts.get(piece) || 0) + 1);
        }
      }
    }
    compiled.set(className, methods);
    resolvable.set(className, new Set(Array.from(methods.entries()).filter(([, v]) => v.ok).map(([k]) => k)));
    classFieldDefaults.set(className, (info.fields || []).map((field) => ({ name: field.name, descriptor: field.descriptor })));
  });

  function resolveCall(owner, name, descriptor, kind, fromClass) {
    if (!owner || !name) { return { kind: "unsupported", why: "a call with no owner or name (damaged bytecode)" }; }
    const namedOwner = remap.owner(owner);
    const namedName = remap.name(owner, name);
    const key = namedOwner + "." + namedName + descriptor;
    // The mod's own classes: the method may be declared on a superclass in the same jar.
    if (owner === fromClass || classes.has(owner)) {
      const declaring = declaresMethod(owner, name, descriptor);
      if (declaring) {
        if (reachable && !reachable.has(declaring + "::" + name + descriptor)) {
          return { kind: "unsupported", why: "the mod's own method " + declaring.replace(/\//g, ".") + "." + name + " was pruned (nothing reachable from an entry point calls it)" };
        }
        return { kind: "self" };
      }
      return { kind: "unsupported", why: "the mod's own method " + name + descriptor + " is not in the jar" };
    }
    if (KNOWN_NATIVE_KEYS.has(key)) { return { kind: "native" }; }
    if (KNOWN_MAPPED_KEYS.has(key)) { return { kind: "game" }; }
    if (/^(java|javax|sun|jdk)\//.test(owner)) { return { kind: "unsupported", why: "JDK call " + owner + "." + name }; }
    if (/^(net\/minecraft|net\/fabricmc|com\/mojang|org\/spongepowered|org\/lwjgl)\//.test(namedOwner)) {
      return allowInternals
        ? { kind: "internals", why: "game call " + namedOwner.replace(/\//g, ".") + "." + namedName }
        : { kind: "unsupported", why: "game call " + namedOwner.replace(/\//g, ".") + "." + namedName + " (internals not allowed)" };
    }
    return allowInternals ? { kind: "internals", why: "call " + namedOwner.replace(/\//g, ".") + "." + namedName } : { kind: "unsupported", why: namedOwner + "." + namedName };
  }

  /* ------------------------------------------------------------------ handlers ------------------ */
  function handlerFor(target, what) {
    if (!target) { return { js: null, reason: "no lambda was found for " + what }; }
    const methods = compiled.get(target.owner);
    const compiledMethod = methods && methods.get(target.name + target.descriptor);
    if (compiledMethod && compiledMethod.ok) {
      return { js: "RT.method(" + JSON.stringify(target.owner) + "," + JSON.stringify(target.name + target.descriptor) + ", this, arguments)", ok: true };
    }
    return { js: null, reason: compiledMethod ? compiledMethod.reason : "the target class is not in this jar" };
  }

  /* ------------------------------------------------------------------ the generated source ----- */
  const lines = [];
  const push = (line) => lines.push(line);
  const capabilities = new Set(["hud", "input", "commands", "storage", "settings", "modules", "player.read", "world.read", "camera.read", "chat.write"]);

  push("/* Converted from a Fabric mod by webmc-jsmod's converter.");
  push(" * " + fabric.id + " " + fabric.version + " — " + (fabric.name || fabric.id));
  push(" * Every " + report.translatedMethods + " method that could be transpiled was; " + report.skippedMethods + " could not.");
  push(" * What could not is named in report.json next to this file. */");
  push("(function () {");
  push('  "use strict";');
  push("  var SOURCE = " + JSON.stringify(fabric.id + " " + fabric.version) + ";");
  push("  var CLASSES = {};");
  push("  var SUPER = " + JSON.stringify(Object.fromEntries(Array.from(classes.values())
    .filter((info) => compiled.get(info.name) && Array.from(compiled.get(info.name).values()).some((entry2) => entry2.ok))
    .map((info) => [info.name, info.superName || null]))) + ";");
  push("  var FIELD_DEFAULTS = " + JSON.stringify(Object.fromEntries(Array.from(classFieldDefaults.entries())
    .filter(([name]) => compiled.get(name) && Array.from(compiled.get(name).values()).some((entry2) => entry2.ok)))) + ";");
  push("  function defineClass(name, methods) { CLASSES[name] = methods; }");

  // Emit every compiled method as a function.
  compiled.forEach((methods, className) => {
    const entries = [];
    methods.forEach((entry, key) => {
      if (!entry.ok) { return; }
      entries.push("    " + JSON.stringify(key) + ": " + indent(entry.source, 4));
    });
    if (!entries.length) { return; }
    push("  defineClass(" + JSON.stringify(className) + ", {");
    push(entries.join(",\n"));
    push("  });");
    push("  CLASSES[" + JSON.stringify(className) + "].__fields = " + JSON.stringify(classFieldDefaults.get(className) || []) + ";");
  });

  // The runtime bridge: resolves the mod's own methods, then the known surfaces, then internals.
  push("  function makeContext(api, mod) {");
  push("    var ctx = {");
  push("      invoke: function (owner, name, desc, self, args) { return call(owner, name, desc, self, args, false); },");
  push("      invokeStatic: function (owner, name, desc, args) { return call(owner, name, desc, null, args, true); },");
  push("      getField: function (owner, name, desc, self) {");
  push("        if (self && name in self) { return self[name]; }");
  push("        if (self && self.__fields) { var f = self.__fields.filter(function (x) { return x.name === name; })[0]; if (f) { return self[name]; } }");
  push("        return api.internals ? api.internals.getField(owner, name, desc, self) : undefined;");
  push("      },");
  push("      putField: function (owner, name, desc, self, value) {");
  push("        if (self) { self[name] = value; return; }");
  push("        if (api.internals) { api.internals.putField(owner, name, desc, self, value); }");
  push("      },");
  push("      getStatic: function (owner, name, desc) { return STATICS[owner + '.' + name] !== undefined ? STATICS[owner + '.' + name] : (api.internals ? api.internals.getStatic(owner, name, desc) : undefined); },");
  push("      putStatic: function (owner, name, desc, value) { STATICS[owner + '.' + name] = value; },");
  push("      newInstance: function (owner) { var instance = Object.create(null); instance.__class = owner; instance.__fields = FIELD_DEFAULTS[owner] || []; return instance; },");
  push("      cast: function (value, type) { return value; },");
  push("      isInstance: function (value, type) { return value != null; },");
  push("      toError: function (value) { return value instanceof Error ? value : new Error(String(value)); }");
  push("    };");
  push("    var STATICS = {};");
  emitCallBody(push);
  push("    return ctx;");
  push("  }");

  /* --- entrypoints ------------------------------------------------------------------------ */
  // The capability list is only complete once every event, module and patch plan has been seen, so
  // the description is emitted as a token and filled in at the end.
  push("  var mod = webmc.defineMod(__WEBMC_MOD_DESCRIPTION__);");
  push("  mod.on(\"init\", function (api) {");
  push("    var RT = {");
  push("      ctx: makeContext(api, mod),");
  push("      warned: {},");
  push("      method: function (owner, key, self, args) { var fn = CLASSES[owner] && CLASSES[owner][key]; if (!fn) { throw new Error('webmc-transpiler: ' + owner.replace(/\\//g, '.') + '.' + key + ' is not translated'); } return fn(RT.ctx, self, Array.prototype.slice.call(args)); },");
  push("      unsupported: function (error, key) {");
  push("        if (RT.warned[key]) { return; }");
  push("        RT.warned[key] = true;");
  push("        var message = error && error.message ? error.message : String(error);");
  push("        api.log('this part of the converted mod needs the client internals: ' + key + ' — ' + message);");
  push("        if (mod.api && mod.api.hud) { mod.api.hud.message('Converted mod: a part needs the client internals (logged once)', { color: '#fca5a5', ttl: 5000 }); }");
  push("      }");
  push("    };");

  const instances = new Map();
  function instanceVar(className) {
    if (!instances.has(className)) {
      const safe = "inst_" + className.replace(/[^A-Za-z0-9]/g, "_");
      instances.set(className, safe);
      push("    var " + safe + " = { __class: " + JSON.stringify(className) + ", __fields: FIELD_DEFAULTS[" + JSON.stringify(className) + "] || [] };");
    }
    return instances.get(className);
  }

  // Entrypoints: client + main, both are initialized the way Fabric would.
  const entrypoints = [];
  for (const entry of entrypointRootNames) {
    {
      const kind = entry.kind;
      const internal = entry.className;
      const methods = compiled.get(internal);
      const method = entry.method;
      const target = entry.method + entry.descriptor;
      entrypoints.push({ kind, className: internal, method, present: !!(methods && methods.get(target) && methods.get(target).ok), adapter: null });
      report.entrypoints.push({ kind, className: internal, method, translated: !!target && !!(methods && methods.get(target) && methods.get(target).ok) });
      if (!target) { continue; }
      const variable = instanceVar(internal);
      push("    /* entrypoint: " + kind + " " + internal + "." + method + " */");
      push("    try {");
      push("      RT.method(" + JSON.stringify(internal) + ", " + JSON.stringify(target) + ", " + variable + ", []);");
      push("    } catch (error) { RT.unsupported(error, " + JSON.stringify(internal + "." + method) + "); }");
    }
  }

  /* --- Fabric API events ------------------------------------------------------------------- */
  for (const [js, uses] of Object.entries(analysis.api.events)) {
    for (const use of uses) {
      const handler = handlerFor(use.lambda, js + " in " + use.klass + "." + use.method);
      const eventName = mapEventName(js);
      report.events.push({
        js: eventName,
        from: use.klass + "." + use.method,
        fabric: use.event.owner + "." + use.event.field,
        lambda: use.lambda ? use.lambda.owner + "." + use.lambda.name : null,
        translated: !!handler.ok,
        reason: handler.reason || null
      });
      if (js === "commands") {
        // The lambda receives the dispatcher; its literals are the command names.
        const literals = commandLiterals(analysis, use);
        for (const name of literals) {
          report.commands.push({ name, from: use.klass, translated: false, reason: "the command body needs internals" });
          push("    api.command({ name: " + JSON.stringify(name) + ", description: " + JSON.stringify("From " + fabric.id + " (converted)") +
               ", handler: function (context) { context.error('this command came from a Fabric mod and its body still needs the client internals'); } });");
        }
        continue;
      }
      capForEvent(eventName, capabilities);
      const body = handler.ok
        ? "return RT.method(" + JSON.stringify(use.lambda.owner) + ", " + JSON.stringify(use.lambda.name + use.lambda.descriptor) + ", null, [payload]);"
        : "/* " + String(handler.reason || "not translated").replace(/\*\//g, "* /") + " */";
      push("    mod.on(" + JSON.stringify(eventName) + ", function (payload) { try { " + body + " } catch (error) { RT.unsupported(error, " + JSON.stringify(use.klass + "." + (use.lambda ? use.lambda.name : use.method)) + "); } });");
    }
  }

  /* --- keybinds --------------------------------------------------------------------------- */
  const keybindsByClass = new Map();
  for (const keybind of analysis.api.keybinds) {
    const list = keybindsByClass.get(keybind.klass) || [];
    list.push(keybind);
    keybindsByClass.set(keybind.klass, list);
  }
  for (const keybind of analysis.api.keybinds) {
    const info = extractKeybind(keybind, classes, mappings, keybindsByClass);
    report.keybinds.push(info);
    if (!info.name) { continue; }
    push("    api.input.bind({ id: " + JSON.stringify(info.name) + ", label: " + JSON.stringify(info.label) + ", key: " +
      JSON.stringify(info.key) + ", handler: function () { api.hud.message(" + JSON.stringify(info.label + " pressed") + "); } });");
  }

  /* --- modules ---------------------------------------------------------------------------- */
  for (const module of analysis.modules) {
    const list = compiled.get(module.className);
    const methods = list ? list : null;
    const onTick = methods && Array.from(methods.keys()).find((key) => /^onTick\(/.test(key));
    const onActivate = methods && Array.from(methods.keys()).find((key) => /^onActivate\(/.test(key));
    const translated = !!(onTick || onActivate);
    report.modules.push({ className: module.className, name: module.name, category: module.category, translated });
    const variable = instanceVar(module.className);
    push("    api.modules.add({ name: " + JSON.stringify(module.name) + ", category: " + JSON.stringify(module.category) +
      ", description: " + JSON.stringify("Converted from " + module.className) + ", enabled: false,");
    if (onTick) {
      push("      onTick: function (payload, self) { try { RT.method(" + JSON.stringify(module.className) + ", " + JSON.stringify(onTick) + ", " + variable + ", []); } catch (error) { RT.unsupported(error, " + JSON.stringify(module.className + "." + onTick) + "); } },");
    }
    if (onActivate) {
      push("      onEnable: function (self) { try { RT.method(" + JSON.stringify(module.className) + ", " + JSON.stringify(onActivate) + ", " + variable + ", []); } catch (error) { RT.unsupported(error, " + JSON.stringify(module.className + "." + onActivate) + "); } },");
    }
    push("    });");
  }

  /* --- the mixin plan, as patch requests --------------------------------------------------- */
  if (plan.mixins.length) {
    push("    if (webmc.patches) {");
    for (const mixin of plan.mixins) {
      if (!mixin.injectionPoints.length && !mixin.accessors.length) { continue; }
      push("      webmc.patches.add(" + JSON.stringify({
        modId: fabric.id,
        mixin: mixin.className,
        targets: mixin.targets,
        environment: mixin.environment,
        injections: mixin.injectionPoints.map((injection) => ({
          method: injection.target,
          handler: injection.method,
          kind: injection.kind,
          at: injection.at.map((point) => point.value + (point.ordinal != null ? ":" + point.ordinal : "")),
          cancellable: injection.cancellable
        })),
        accessors: mixin.accessors
      }) + ");");
    }
    push("    }");
    capabilities.add("internals");
  }

  push("    api.log('converted: ' + SOURCE + ' — ' + " + JSON.stringify(report.translatedMethods + " methods translated, " + report.skippedMethods + " not") + ");");
  push("  });");
  push("})();");

  /* report tail */
  report.unresolved = Array.from(unresolvedCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 40).map(([what, count]) => ({ what, count }));
  report.capabilities = Array.from(capabilities);
  report.mappings = mappings ? mappings.size : null;
  report.needsInternals = report.unresolved.some((entry) => /game call|internals|JDK call/.test(entry.what));
  report.verdict = report.needsInternals ? "runs-partial (parts need the client internals)"
    : (report.translatedMethods ? "runs" : "loads but does nothing");

  const manifest = {
    id: fabric.id || "converted.mod",
    name: fabric.name || fabric.id || "Converted mod",
    version: fabric.version || "0.0.0",
    authors: fabric.authors || [],
    description: "Converted from a Fabric mod by webmc-jsmod (" + (options.jarName || "jar") + ")",
    capabilities: report.capabilities,
    convertedFrom: { file: options.jarName || null, sha256: options.sha256 || null, entrypoints: report.entrypoints },
    entry: "index.js"
  };

  const modDescription = {
    id: fabric.id || "converted.mod",
    name: fabric.name || fabric.id || "Converted mod",
    version: fabric.version || "0.0.0",
    authors: fabric.authors || [],
    description: "Converted from a Fabric mod (" + (fabric.description || "").slice(0, 180) + ")",
    capabilities: Array.from(capabilities)
  };
  const source = lines.join("\n").replace("__WEBMC_MOD_DESCRIPTION__", JSON.stringify(modDescription, null, 2).replace(/\n/g, "\n  ")) + "\n";
  return { source, manifest, report, plan };
}

function indent(source, spaces) {
  const pad = " ".repeat(spaces);
  return source.split("\n").map((line) => (line ? pad + line : line)).join("\n").replace(/^\s+/, "");
}

function mapEventName(js) {
  switch (js) {
    case "init": return "init";
    case "render2d": return "frame";
    default: return js;
  }
}

function capForEvent(name, capabilities) {
  if (name === "chat" || name === "chat:sent") { capabilities.add("chat.read"); capabilities.add("chat.write"); }
  if (name === "world:render" || name === "entity:render") { capabilities.add("graphics"); }
}

/** Literal command names: a command tree is built with literal("...") calls. The strings of the
 * classes that register the command are the evidence; anything that looks like a translation key
 * or a description is not a name. */
function commandLiterals(analysis, use) {
  const found = new Set();
  const lower = /^[a-z][a-z0-9_-]{0,24}$/;
  const banned = /^(key\.|text\.|gui\.|screen\.|options\.|block\.|item\.|entity\.|command\.|argument\.|category\.|chat\.)/;
  for (const [className, klass] of analysis.classes) {
    if (className !== use.klass && !className.startsWith(use.klass + "$")) { continue; }
    for (const method of klass.methods) {
      if (!method.code) { continue; }
      const entry = analysis.api.commands.find((c) => c.klass === className && c.method === method.name);
      if (!entry) { continue; }
      for (const text of entry.strings) {
        if (lower.test(text) && !banned.test(text)) { found.add(text); }
      }
    }
  }
  return Array.from(found).slice(0, 24);
}

/** Pull a keybind out of `KeyBindingHelper.registerKeyBinding(new KeyBinding(...))`.
 *
 * The name/description/key are already in the class file: the label is a string constant in the
 * registering method and the GLFW code is a field reference (`GLFW.GLFW_KEY_G`), so both are read
 * from the bytecode rather than guessed.
 */
/** KeyBindings built as static fields: `<clinit>` constructs them, the register method only
 * passes the field to KeyBindingHelper. Read the constructor's arguments out of the initialiser and
 * key them by the field the result is stored in. */
function remapFor(mappings) {
  return {
    klass: (name) => (name && mappings ? mappings.class(String(name)) : name),
    owner: (name) => (name && mappings ? mappings.class(String(name)) : name),
    name: (owner, name) => (owner && name && mappings ? mappings.method(String(owner), String(name)) : name)
  };
}

function keybindStaticFields(klass, remap) {
  const found = new Map();
  for (const method of klass.methods) {
    if (!method.code) { continue; }
    let instructions;
    try { instructions = decode(method.code.code, klass.pool, klass.bootstrapMethods); } catch (error) { continue; }
    let pending = null;
    for (const instruction of instructions) {
      if (instruction.name === "new" && /KeyBinding$/.test(remap.klass(instruction.operand) || "")) {
        pending = { strings: [], ints: [], types: [] };
      } else if (pending && (instruction.name === "ldc" || instruction.name === "ldc_w")) {
        if (typeof instruction.operand === "string") { pending.strings.push(instruction.operand); }
      } else if (pending && (instruction.name === "bipush" || instruction.name === "sipush")) {
        pending.ints.push(instruction.operand);
      } else if (pending && /^iconst_[1-5]$/.test(instruction.name)) {
        pending.ints.push(Number(instruction.name.slice(7)));
      } else if (pending && instruction.name === "putstatic" && instruction.operand) {
        found.set(instruction.operand.name, pending);
        pending = null;
      }
    }
  }
  return found;
}

function extractKeybind(keybind, classes, mappings, classKeybinds) {
  const strings = keybind.strings || [];
  const translationKey = strings.find((text) => /^key\./.test(text)) || null;
  let label = strings.find((text) => text && text.length > 1 && !/^key\.|^category\.|^text\./.test(text)) || null;
  let category = strings.find((text) => /^(category\.|key\.categories\.)/.test(text)) || null;
  let key = null;
  const klass = classes.get(keybind.klass);
  if (klass) {
    const method = klass.methods.find((candidate) => candidate.name === keybind.method && candidate.code);
    if (method) {
      try {
        const scan = scanBytecode(keybind.klass, method, klass.pool, klass.bootstrapMethods);
        const glfw = scan.fields.map((field) => /GLFW_KEY_([A-Z0-9_]+)$/.exec(field.name || "")).filter(Boolean).pop();
        if (glfw) { key = glfw[1].toLowerCase().replace(/_/g, "."); }
        const staticBindings = keybindStaticFields(klass, remapFor(mappings));
        for (const field of scan.fields) {
          const info = staticBindings.get(field.name);
          if (!info) { continue; }
          const label2 = info.strings.find((text) => text && !/^key\./.test(text) && !/^category\./.test(text));
          if (label2 && !label) { label = label2; }
          const numeric = info.ints.filter((value) => value >= 10 && value <= 350).pop();
          if (numeric != null) { key = numeric; }
        }
      } catch (error) { /* a method the scanner cannot read still yields a keybind with a default */ }
    }
  }
  if (!label || !key) {
    // The binding may be built in a static initialiser and only *registered* in this method (a very
    // common shape). Then the labels and keys are still in the class, in registration order.
    const klass2 = classes.get(keybind.klass);
    if (klass2) {
      const labels = [];
      const keys = [];
      for (const candidate of klass2.methods) {
        if (!candidate.code) { continue; }
        let scan = null;
        try { scan = scanBytecode(keybind.klass, candidate, klass2.pool, klass2.bootstrapMethods); } catch (error) { scan = null; }
        if (!scan) { continue; }
        for (const text of scan.strings) {
          if (/^key\./.test(text)) { labels.push(text); }
          else if (text && text.length > 1 && /^[A-Za-z][A-Za-z0-9 ._-]*$/.test(text) && !/^(category\.|text\.|gui\.)/.test(text)) { labels.push(text); }
        }
        for (const field of scan.fields) {
          const match = /GLFW_KEY_([A-Z0-9_]+)$/.exec(field.name || "");
          if (match) { keys.push(match[1].toLowerCase().replace(/_/g, ".")); }
        }
        // A KeyBinding built with a numeric GLFW constant: `new KeyBinding("key.x", 71, "cat")`.
        // The number is a bipush/sipush/iconst instruction, and reading the instruction stream is
        // the only way to see it — nothing in the constant pool says "71".
        if (scan.calls.some((call) => call.name === "<init>" && /KeyBinding$/.test(remapFor(mappings).owner(call.owner) || ""))) {
          try {
            const instructions = decode(candidate.code.code, klass2.pool, klass2.bootstrapMethods);
            for (const instruction of instructions) {
              if (instruction.name === "bipush" || instruction.name === "sipush") { keys.push(instruction.operand); }
              else if (/^iconst_[1-5]$/.test(instruction.name)) { keys.push(Number(instruction.name.slice(7))); }
            }
          } catch (error) { /* unreadable stream: the default key stands */ }
        }
      }
      const siblings = (classKeybinds && classKeybinds.get(keybind.klass)) || [];
      const index = Math.max(0, siblings.indexOf(keybind));
      const siblingLabel = labels[Math.min(index, Math.max(0, labels.length - 1))];
      const siblingKey = keys[Math.min(index, Math.max(0, keys.length - 1))];
      if (siblingLabel && !/^key\./.test(siblingLabel)) { label = siblingLabel; }
      if (!key && siblingKey) { key = siblingKey; }
    }
  }
  if (!key) { key = "h"; }
  return {
    name: translationKey || (label ? label.toLowerCase().replace(/[^a-z0-9]+/g, ".") : null),
    label: label || translationKey || keybind.klass.split("/").pop(),
    category,
    key,
    translated: true,
    handler: "stub (the mod polls the binding itself; the tick handler is the real logic)",
    from: keybind.klass + "." + keybind.method
  };
}

/* ------------------------------------------------------------------ the call router ----------- *
 * Emitted into the generated mod: one function that knows the mod's own methods, the JDK/JS
 * natives, the small mapped game surface, and the internals fallback.
 */
function emitCallBody(push) {
  push("    function call(owner, name, desc, self, args, isStatic) {");
  push("      var key = name + desc;");
  push("      var lookupOwner = owner;");
  push("      var table = CLASSES[lookupOwner];");
  push("      while (table && !table[key] && SUPER[lookupOwner]) { lookupOwner = SUPER[lookupOwner]; table = CLASSES[lookupOwner]; }");
  push("      if (table && table[key]) { return table[key](ctx, self, args); }");
  push("      var native = NATIVE[owner + '.' + key];");
  push("      if (native) { return native(api, self, args); }");
  push("      var mapped = MAPPED[owner + '.' + key];");
  push("      if (mapped) { return mapped(api, self, args); }");
  push("      if (api.internals) { return isStatic ? api.internals.invokeStatic(owner, name, desc, args) : api.internals.invoke(owner, name, desc, self, args); }");
  push("      throw new Error('webmc: ' + owner.replace(/\\//g, '.') + '.' + name + ' needs the client internals');");
  push("    }");
  push("    var NATIVE = {");
  NATIVE_SOURCE.forEach(([key, source], index) => {
    push("      " + JSON.stringify(key) + ": " + source + (index + 1 < NATIVE_SOURCE.length ? "," : ""));
  });
  push("    };");
  push("    var MAPPED = {");
  MAPPED_SOURCE.forEach(([key, source], index) => {
    push("      " + JSON.stringify(key) + ": " + source + (index + 1 < MAPPED_SOURCE.length ? "," : ""));
  });
  push("    };");
  push("    function pos(api2, field) {");
  push("      var snapshot = api2.player && api2.player.snapshot ? api2.player.snapshot() : null;");
  push("      if (!snapshot || !snapshot.position) { return 0; }");
  push("      if (field === 'yaw' || field === 'pitch') { return snapshot[field] || 0; }");
  push("      if (field === 'onGround') { return snapshot.onGround === true; }");
  push("      return snapshot.position[field] != null ? snapshot.position[field] : 0;");
  push("    }");
}
