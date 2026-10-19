/* Converted from a Fabric mod by webmc-jsmod's converter.
 * hello-fabric 1.0.0 — Hello Fabric
 * Every 2 method that could be transpiled was; 0 could not.
 * What could not is named in report.json next to this file. */
(function () {
  "use strict";
  var SOURCE = "hello-fabric 1.0.0";
  var CLASSES = {};
  var SUPER = {"com/example/HelloFabricMod":"java/lang/Object"};
  var FIELD_DEFAULTS = {"com/example/HelloFabricMod":[]};
  function defineClass(name, methods) { CLASSES[name] = methods; }
  defineClass("com/example/HelloFabricMod", {
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
      s.push(__ctx.getStatic("java/lang/System","out","Ljava/io/PrintStream;")); pc = 1; continue;
    case 1:
      __pc = 1;
      s.push("[webmc] hello-fabric: a Fabric mod, baked into this client"); pc = 2; continue;
    case 2:
      __pc = 2;
      var av = new Array(1); for (var ai = 0; ai >= 0; ai--) av[ai] = s.pop();
      var rv = s.pop();
      __ctx.invoke("java/io/PrintStream","println","(Ljava/lang/String;)V", rv, av); pc = 3; continue;
    case 3:
      __pc = 3;
      return;
    default: throw new Error("webmc transpiler: pc out of range " + pc);
    } }
    }
  });
  CLASSES["com/example/HelloFabricMod"].__fields = [];
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
    "id": "hello-fabric",
    "name": "Hello Fabric",
    "version": "1.0.0",
    "authors": [],
    "description": "Converted from a Fabric mod ()",
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
      "chat.write"
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
    var inst_com_example_HelloFabricMod = { __class: "com/example/HelloFabricMod", __fields: FIELD_DEFAULTS["com/example/HelloFabricMod"] || [] };
    /* entrypoint: client com/example/HelloFabricMod.onInitializeClient */
    try {
      RT.method("com/example/HelloFabricMod", "onInitializeClient()V", inst_com_example_HelloFabricMod, []);
    } catch (error) { RT.unsupported(error, "com/example/HelloFabricMod.onInitializeClient"); }
    api.log('converted: ' + SOURCE + ' — ' + "2 methods translated, 0 not");
  });
})();
