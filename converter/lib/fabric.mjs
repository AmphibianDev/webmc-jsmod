/* Reading a Fabric jar as a *mod*, not as a pile of classes.
 *
 * The model this produces is what the translator works from: what the manifest says, which classes
 * are entrypoints, which are mixins, which Fabric API events are registered, which keybinds and
 * commands are created, and which classes are Meteor-style modules. Everything is evidence from
 * the bytes: a call that is not in the class file is not in the model.
 */
import { parseClass, scanBytecode } from "./classfile.mjs";
import { readZip } from "./zip.mjs";

/* The Fabric API surface this converter knows how to place. Each entry says which event class and
 * field the mod touches and what that becomes in the JS API. Event classes are matched by simple
 * name, because Fabric has moved them between packages (`client/tick/v1/ClientTickEvents` became
 * `client/event/tick/v1/ClientTickEvents`) and a converter that only knows one layout is a
 * converter that stops working on the next release. */
export const FABRIC_EVENTS = [
  { className: "ClientLifecycleEvents", field: "CLIENT_STARTED", js: "init" },
  { className: "ClientLifecycleEvents", field: "CLIENT_STOPPING", js: "unload" },
  { className: "ClientTickEvents", field: "START_CLIENT_TICK", js: "tick" },
  { className: "ClientTickEvents", field: "END_CLIENT_TICK", js: "tick" },
  { className: "HudRenderCallback", field: "EVENT", js: "render2d" },
  { className: "HudLayerRegistrationCallback", field: "EVENT", js: "render2d" },
  { className: "ClientPlayConnectionEvents", field: "JOIN", js: "world:join" },
  { className: "ClientPlayConnectionEvents", field: "DISCONNECT", js: "world:leave" },
  { className: "ClientCommandRegistrationCallback", field: "EVENT", js: "commands" },
  { className: "ClientReceiveMessageEvents", field: "CHAT", js: "chat" },
  { className: "ClientReceiveMessageEvents", field: "GAME", js: "chat" },
  { className: "ClientSendMessageEvents", field: "ALLOW_CHAT", js: "chat:sent" },
  { className: "ClientEntityEvents", field: "ENTITY_LOAD", js: "entity:load" },
  { className: "ClientEntityEvents", field: "ENTITY_UNLOAD", js: "entity:unload" },
  { className: "ServerLifecycleEvents", field: "SERVER_STARTED", js: "server:started" },
  { className: "ServerTickEvents", field: "END_SERVER_TICK", js: "server:tick" },
  { className: "PlayerBlockBreakEvents", field: "AFTER", js: "player:break" },
  { className: "UseBlockCallback", field: "EVENT", js: "player:use-block" },
  { className: "UseItemCallback", field: "EVENT", js: "player:use-item" },
  { className: "AttackBlockCallback", field: "EVENT", js: "player:attack" },
  { className: "AttackEntityCallback", field: "EVENT", js: "player:attack-entity" },
  { className: "UseEntityCallback", field: "EVENT", js: "player:use-entity" },
  { className: "WorldRenderEvents", field: "BEFORE_BLOCK_OUTLINE", js: "world:render" },
  { className: "WorldRenderEvents", field: "END", js: "world:render" },
  { className: "WorldRenderEvents", field: "BEFORE_ENTITIES", js: "world:render" },
  { className: "EntityRendererRegistry", field: "EVENT", js: "entity:render" },
  { className: "ScreenEvents", field: "BEFORE_INIT", js: "screen:before-init" },
  { className: "ScreenEvents", field: "AFTER_INIT", js: "screen:after-init" },
  { className: "ScreenKeyboardEvents", field: "ALLOW_KEY_PRESS", js: "screen:key" },
  { className: "ClientOptionEvents", field: "PLAY_SOUND", js: "sound" },
  { className: "ResourceManagerHelper", field: "EVENT", js: "assets" }
];

function eventEntry(owner, field) {
  if (!owner || !field) { return null; }
  const simple = String(owner).split("/").pop();
  return FABRIC_EVENTS.find((entry) => entry.className === simple && entry.field === field) || null;
}

const FABRIC_CALLS = {
  "net/fabricmc/fabric/api/client/keybinding/v1/KeyBindingHelper.registerKeyBinding": "keybind",
  "net/fabricmc/fabric/api/client/registry/v1/ClientCommandRegistrationCallback": "command",
  "net/fabricmc/fabric/api/client/rendering/v1/HudRenderCallback.register": "hud",
  "net/fabricmc/fabric/api/client/rendering/v1/WorldRenderEvents.register": "worldRender",
  "net/fabricmc/fabric/impl/client/event/EventFactoryImpl": "eventImpl"
};

export function readFabricManifest(jar) {
  const text = jar.readText("fabric.mod.json");
  if (!text) { return null; }
  let raw;
  try { raw = JSON.parse(text); } catch (error) { throw new Error("fabric.mod.json is not JSON: " + error.message); }
  const entrypoints = {};
  for (const [kind, list] of Object.entries(raw.entrypoints || {})) {
    entrypoints[kind] = (Array.isArray(list) ? list : [list]).map((entry) => {
      if (typeof entry === "string") { return { value: entry }; }
      return { value: entry.value || null, adapter: entry.adapter || null, keys: Object.keys(entry) };
    }).filter((entry) => entry.value);
  }
  const mixinConfigs = [];
  const seenMixin = raw.mixins || [];
  for (const entry of Array.isArray(seenMixin) ? seenMixin : [seenMixin]) {
    if (typeof entry === "string") { mixinConfigs.push({ config: entry, environment: null }); }
    else if (entry && entry.config) { mixinConfigs.push({ config: entry.config, environment: entry.environment || null }); }
  }
  return {
    schemaVersion: raw.schemaVersion || 1,
    id: raw.id,
    name: raw.name || raw.id,
    version: raw.version || "0.0.0",
    environment: raw.environment || "*",
    description: raw.description || "",
    authors: Array.isArray(raw.authors) ? raw.authors.map((a) => (typeof a === "string" ? a : a && a.name) || "?") : (raw.authors ? [String(raw.authors)] : []),
    license: raw.license || null,
    icon: raw.icon || null,
    depends: raw.depends || {},
    recommends: raw.recommends || {},
    entrypoints,
    mixinConfigs,
    custom: Object.keys(raw.custom || {}),
    accessWidener: raw.accessWidener || null,
    nestedJars: raw.jars ? raw.jars.map((j) => j.file) : []
  };
}

export function loadAbiManifest(jar) {
  for (const name of jar.names) {
    if (/^META-INF\/[^/]*mod\.json$/i.test(name) && !/fabric.mod.json$/i.test(name)) { return null; }
  }
  return null;
}

/** Parse every class file in the jar; nested jars are read one level deep. */
export function readClasses(jar, options = {}) {
  const classes = new Map();
  const skipped = [];
  for (const name of jar.names) {
    if (!name.endsWith(".class")) { continue; }
    try {
      const info = parseClass(jar.read(name));
      classes.set(info.name, info);
    } catch (error) {
      skipped.push({ name, error: error.message });
    }
  }
  const nested = [];
  if (!options.noNested) {
    for (const name of jar.names) {
      if (!/^META-INF\/jars\/.*\.jar$/.test(name)) { continue; }
      try {
        const inner = readZip(jar.read(name));
        const innerClasses = readClasses(inner, { noNested: true });
        innerClasses.classes.forEach((info, className) => {
          if (!classes.has(className)) { classes.set(className, info); }
        });
        nested.push({ name, classes: innerClasses.classes.size, skipped: innerClasses.skipped });
      } catch (error) {
        nested.push({ name, error: error.message });
      }
    }
  }
  return { classes, skipped, nested };
}

/** Everything the class files say the mod does with the Fabric API shape. */
export function scanApiUse(classes) {
  const events = new Map();     // js name -> uses [{class, method, lambda}]
  const keybinds = [];
  const commands = [];
  const lambdas = [];
  const callCounts = new Map();

  classes.forEach((info, className) => {
    for (const method of info.methods) {
      if (!method.code) { continue; }
      let scan;
      try { scan = scanBytecode(className, method, info.pool, info.bootstrapMethods); }
      catch (error) { continue; }

      for (const lambda of scan.lambdas) {
        lambdas.push({ klass: className, method: method.name + method.descriptor, lambda });
      }

      for (const call of scan.calls) {
        const key = call.owner + "." + call.name;
        callCounts.set(key, (callCounts.get(key) || 0) + 1);
        if (key === "net/fabricmc/fabric/api/client/keybinding/v1/KeyBindingHelper.registerKeyBinding") {
          keybinds.push({ klass: className, method: method.name, strings: scan.strings.slice(), scan });
        }
        if (/ClientCommandRegistrationCallback|CommandRegistrationCallback/.test(key)) {
          commands.push({ klass: className, method: method.name, strings: scan.strings.slice() });
        }
      }

      // Pair event fields with the lambda that is registered on them. The bytecode order for
      // `EVENT.register(lambda)` is: getstatic EVENT, invokedynamic lambda, invoke register — so
      // the last interesting instruction before a `register` call is the lambda, and the last
      // event field before that is its receiver.
      let pendingEvent = null;
      let pendingLambda = null;
      for (const instruction of scan.instructions) {
        if (instruction.name === "getstatic" && instruction.operand && instruction.operand.owner) {
          const found = eventEntry(instruction.operand.owner, instruction.operand.name);
          if (found) { pendingEvent = { js: found.js, owner: instruction.operand.owner, field: found.field, className: found.className }; }
        } else if (instruction.name === "invokedynamic" && instruction.operand && instruction.operand.target) {
          pendingLambda = instruction.operand;
        } else if (instruction.name.startsWith("invoke") && instruction.operand && instruction.operand.name === "register") {
          if (pendingEvent) {
            const list = events.get(pendingEvent.js) || [];
            list.push({
              klass: className, method: method.name,
              event: pendingEvent,
              lambda: pendingLambda ? pendingLambda.target : null,
              at: instruction.pc
            });
            events.set(pendingEvent.js, list);
          }
          pendingEvent = null;
          pendingLambda = null;
        }
      }
    }
  });

  return {
    events: Object.fromEntries(events),
    keybinds,
    commands,
    lambdas,
    callCounts: Object.fromEntries(Array.from(callCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 60))
  };
}

/** Classes that extend a Meteor-style Module base, with what a module needs to be registered. */
export function scanModules(classes) {
  const modules = [];
  classes.forEach((info, className) => {
    const chain = hierarchy(info, classes);
    const isModule = chain.some((name) => /(^|\/)Module$/.test(name)) || chain.some((name) => /meteordevelopment\/meteorclient\/systems\/modules\/Module$/.test(name));
    if (!isModule || /\/Module$/.test(className)) { return; }
    const metadata = { className, name: className.split("/").pop().replace(/\$.*$/, ""), category: "Misc", description: "", settings: [] };
    for (const method of info.methods) {
      if (method.name !== "<init>") { continue; }
      try {
        const scan = scanBytecode(className, method, info.pool);
        const strings = scan.strings.filter((s) => s && s.length > 1 && /^[A-Za-z]/.test(s));
        metadata.strings = strings.slice(0, 24);
        const categories = strings.filter((s) => /^(Combat|Movement|Player|Render|World|Misc|Exploit)$/.test(s));
        if (categories.length) { metadata.category = categories[0]; }
      } catch (error) { /* a constructor with unknown bytecode still yields the class */ }
    }
    modules.push(metadata);
  });
  return modules;
}

export function hierarchy(info, classes) {
  const out = [info.name];
  let current = info;
  const guard = new Set();
  while (current && current.superName && !guard.has(current.superName)) {
    guard.add(current.superName);
    out.push(current.superName);
    current = classes.get(current.superName) || null;
  }
  return out;
}

export function analyzeJar(bytes, options = {}) {
  const jar = readZip(bytes);
  const fabric = readFabricManifest(jar);
  const { classes, skipped, nested } = readClasses(jar);
  const api = scanApiUse(classes);
  const modules = scanModules(classes);
  const mixinClasses = [];
  classes.forEach((info, className) => {
    const annotation = info.annotations.find((a) => /Lorg\/spongepowered\/asm\/mixin\/Mixin;/.test(a.type));
    if (annotation) {
      mixinClasses.push({
        className,
        targets: toArray(annotation.values.value).filter((v) => typeof v === "string"),
        targetStrings: toArray(annotation.values.targets),
        priority: annotation.values.priority,
        annotations: info.annotations
      });
    }
  });
  const resources = jar.names.filter((name) => /^assets\//.test(name));
  const dataResources = jar.names.filter((name) => /^data\//.test(name));
  return {
    jar,
    fabric,
    classes,
    skipped,
    nested,
    api,
    modules,
    mixinClasses,
    resources,
    dataResources,
    stats: {
      classCount: classes.size,
      resourceCount: resources.length,
      dataResourceCount: dataResources.length,
      mixinClassCount: mixinClasses.length,
      methodCount: Array.from(classes.values()).reduce((total, info) => total + info.methods.filter((m) => m.code).length, 0)
    }
  };
}

function toArray(value) {
  if (value == null) { return []; }
  return Array.isArray(value) ? value : [value];
}

/** "net/minecraft/client/Minecraft" -> "net.minecraft.client.Minecraft" */
export function internalToBinary(name) {
  if (!name) { return name; }
  if (name.startsWith("L") && name.endsWith(";")) { return name.slice(1, -1).replace(/\//g, "."); }
  return String(name).replace(/\//g, ".");
}
export function binaryToInternal(name) {
  return name ? String(name).replace(/\./g, "/") : name;
}
