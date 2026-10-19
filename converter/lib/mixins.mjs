/* Mixin configs and mixin classes, read into a patch plan.
 *
 * The plan is the honest part of the converter: every mixin in the jar is listed with the target it
 * names, the method it injects into, where it injects, and what translating it would need. Mods
 * whose behaviour *is* mixins (Meteor, for one) can then be described exactly — and the parts that
 * can run today do, while the parts that need the client's internals say so by name.
 */
const MIXIN_PACKAGE = "org/spongepowered/asm/mixin/";

export function mixinAnnotation(info, simpleName) {
  return (info.annotations || []).find((a) => a.type === "L" + MIXIN_PACKAGE + simpleName + ";") || null;
}

export function readMixinConfigs(analysis) {
  const configs = [];
  const fabric = analysis.fabric;
  if (!fabric) { return configs; }
  for (const entry of fabric.mixinConfigs) {
    const name = entry.config;
    const text = analysis.jar.readText(name);
    if (!text) { configs.push({ name, missing: true, environment: entry.environment }); continue; }
    let json;
    try { json = JSON.parse(text); } catch (error) { configs.push({ name, error: error.message }); continue; }
    const pkg = (json.package || "").replace(/\.$/, "");
    const list = (names) => (names || []).map((entryName) => {
      if (typeof entryName === "string") { return pkg ? pkg + "." + entryName : entryName; }
      return null;
    }).filter(Boolean);
    configs.push({
      name,
      environment: entry.environment || null,
      package: pkg,
      client: list(json.client),
      server: list(json.server),
      mixins: list(json.mixins),
      injectors: json.injectors || {},
      refmap: json.refmap || null,
      compatibilityLevel: json.compatibilityLevel || null,
      minVersion: json.minVersion || null,
      plugin: json.plugin || null
    });
  }
  return configs;
}

const INJECTION_ANNOTATIONS = {
  "Inject": "inject",
  "Redirect": "redirect",
  "ModifyArg": "modifyArg",
  "ModifyArgs": "modifyArgs",
  "ModifyVariable": "modifyVariable",
  "ModifyConstant": "modifyConstant",
  "ModifyExpressionValue": "wrapOperation",
  "WrapOperation": "wrapOperation",
  "WrapWithCondition": "wrapWithCondition",
  "Overwrite": "overwrite",
  "Accessor": "accessor",
  "Invoker": "invoker"
};

export function readMixinPlan(analysis, mappings) {
  const configs = readMixinConfigs(analysis);
  const configByClassName = new Map();
  for (const config of configs) {
    for (const className of [...(config.client || []), ...(config.server || []), ...(config.mixins || [])]) {
      configByClassName.set(className, config);
    }
  }

  const mixins = [];
  analysis.classes.forEach((info, className) => {
    const annotation = mixinAnnotation(info, "Mixin");
    if (!annotation) { return; }
    const config = configByClassName.get(className) || null;
    const targets = (annotation.values.value || []).map((value) => String(value).replace(/^L|;$/g, ""));
    for (const extra of annotation.values.targets || []) { targets.push(String(extra)); }
    const rawTargets = targets.slice();
    if (mappings) { targets.forEach((target, index) => { targets[index] = mappings.class(target); }); }
    const entry = {
      className,
      simpleName: className.split("/").pop(),
      targets,
      rawTargets,
      environment: config ? (config.client && config.client.includes(className) ? "client"
        : config.server && config.server.includes(className) ? "server" : "both") : "unknown",
      config: config ? config.name : null,
      priority: annotation.values.priority,
      injectionPoints: [],
      shadows: [],
      accessors: [],
      unique: [],
      fields: [],
      methods: []
    };

    for (const method of info.methods) {
      const found = [];
      for (const candidate of method.annotations || []) {
        const simple = /Lorg\/spongepowered\/asm\/mixin\/(?:[a-z0-9]+\/)*([A-Za-z0-9]+);/.exec(candidate.type);
        if (!simple) { continue; }
        const kind = INJECTION_ANNOTATIONS[simple[1]];
        if (kind) { found.push({ kind, simple: simple[1], values: candidate.values, method: method.name, descriptor: method.descriptor }); }
        if (simple[1] === "Shadow") { entry.shadows.push({ name: method.name, descriptor: method.descriptor }); }
      }
      for (const found2 of found) {
        if (found2.kind === "accessor" || found2.kind === "invoker") {
          const rawName = found2.values.value || method.name;
          const first = targets[0] || null;
          const named = mappings
            ? (found2.kind === "accessor" ? mappings.field(first, rawName) : mappings.method(first, rawName))
            : rawName;
          entry.accessors.push({
            kind: found2.kind,
            name: named,
            rawName,
            descriptor: method.descriptor,
            method: method.name
          });
          continue;
        }
        const injectionTargets = normalizeTargets(found2.values.method);
        if (mappings) {
          const first = targets[0] || null;
          injectionTargets.forEach((target, index) => {
            if (!/^method_\d+$/.test(target)) { return; }
            const resolved = first ? mappings.method(first, target) : target;
            injectionTargets[index] = /^method_\d+$/.test(resolved) ? mappings.methodAnywhere(target) : resolved;
          });
        }
        entry.injectionPoints.push({
          kind: found2.kind,
          method: method.name,
          descriptor: method.descriptor,
          target: injectionTargets,
          at: normalizeAt(found2.values.at),
          cancellable: !!found2.values.cancellable,
          captureLocals: !!found2.values.locals,
          argsOnly: !!found2.values.argsOnly,
          slice: found2.values.slice || null,
          remap: found2.values.remap
        });
      }
    }

    for (const field of info.fields || []) {
      for (const candidate of field.annotations || []) {
        if (/Lorg\/spongepowered\/asm\/mixin\/Shadow;/.test(candidate.type)) { entry.shadows.push({ field: field.name, descriptor: field.descriptor }); }
        if (/Lorg\/spongepowered\/asm\/mixin\/Unique;/.test(candidate.type)) { entry.unique.push({ field: field.name }); }
      }
      entry.fields.push({ name: field.name, descriptor: field.descriptor, access: field.access });
    }
    entry.methods = info.methods.map((m) => ({ name: m.name, descriptor: m.descriptor, access: m.access, annotated: (m.annotations || []).length > 0 }));
    mixins.push(entry);
  });

  const kinds = {};
  const targets = {};
  const classTargets = {};
  let injectable = 0;
  let invasive = 0;
  let needsInternals = 0;
  for (const mixin of mixins) {
    for (const injection of mixin.injectionPoints) {
      kinds[injection.kind] = (kinds[injection.kind] || 0) + 1;
      if (injection.kind === "inject") { injectable++; } else { invasive++; }
      if (injection.kind === "overwrite" || injection.kind === "redirect") { needsInternals++; }
      for (const target of injection.target) {
        const key = target;
        targets[key] = (targets[key] || 0) + 1;
      }
    }
    for (const target of mixin.targets) {
      classTargets[target] = (classTargets[target] || 0) + 1;
    }
    for (const accessor of mixin.accessors) { needsInternals++; }
  }

  return {
    configs,
    mixins,
    summary: {
      mixinClasses: mixins.length,
      injectionPoints: mixins.reduce((total, m) => total + m.injectionPoints.length, 0),
      accessors: mixins.reduce((total, m) => total + m.accessors.length, 0),
      shadows: mixins.reduce((total, m) => total + m.shadows.length, 0),
      byKind: kinds,
      plainInjections: injectable,
      invasiveInjections: invasive,
      needsInternals
    },
    topTargets: Object.entries(classTargets).sort((a, b) => b[1] - a[1]).slice(0, 40).map(([target, count]) => ({ target, count })),
    topMethods: Object.entries(targets).sort((a, b) => b[1] - a[1]).slice(0, 40).map(([target, count]) => ({ target, count }))
  };
}

function normalizeTargets(value) {
  if (value == null) { return ["<unspecified>"]; }
  const list = Array.isArray(value) ? value : [value];
  return list.map((entry) => String(entry).split(";")[0].split("(")[0]).filter(Boolean);
}

function normalizeAt(value) {
  if (!value) { return []; }
  const list = Array.isArray(value) ? value : [value];
  return list.map((entry) => {
    const values = entry && entry.values ? entry.values : entry;
    return {
      value: values && values.value != null ? values.value : "HEAD",
      shift: values && values.shift != null ? values.shift : null,
      by: values && values.by != null ? values.by : null,
      target: values && values.target != null ? values.target : null,
      ordinal: values && values.ordinal != null ? values.ordinal : null,
      index: values && values.index != null ? values.index : (values && values.args != null ? values.args : null),
      constant: values && values.constant != null ? values.constant : null,
      slice: values && values.slice != null ? values.slice : null,
      opcode: values && values.opcode != null ? values.opcode : null
    };
  });
}
