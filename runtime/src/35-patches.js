/* WebMC JS mod runtime — patch plans.
 *
 * A converted Fabric mod whose behaviour is mixins arrives with a plan: which class, which method,
 * where, and which handler. This registers those plans, keeps them for the panel, and is the door
 * the client-internals layer will use to apply them. Until that layer exists, a plan is a *record*
 * — it is shown, counted and reported, and it never pretends to have patched anything.
 */
(function (global) {
  "use strict";

  var WebMC = global.webmc;
  var internal = WebMC.__internal;

  var plans = [];
  var byId = new Map();
  var bus = new WebMC.Bus("patches");
  var applied = 0;
  var refused = 0;

  function add(plan) {
    plan = plan || {};
    var id = plan.mixin || ("plan-" + (plans.length + 1));
    var record = {
      id: id,
      mod: plan.modId || plan.mod || null,
      mixin: plan.mixin || null,
      targets: Array.isArray(plan.targets) ? plan.targets.slice() : [],
      environment: plan.environment || "unknown",
      injections: Array.isArray(plan.injections) ? plan.injections.slice() : [],
      accessors: Array.isArray(plan.accessors) ? plan.accessors.slice() : [],
      shadows: Array.isArray(plan.shadows) ? plan.shadows.slice() : [],
      state: "planned",
      why: null,
      at: Date.now()
    };
    plans.push(record);
    byId.set(id, record);
    // A plan can be applied straight away when the client internals are available.
    var result = tryApply(record);
    record.state = result.ok ? "applied" : "planned";
    record.why = result.why || null;
    if (result.ok) { applied++; } else { refused++; }
    internal.notifyPanel({ kind: "webmc:patches", count: plans.length, applied: applied, planned: refused });
    bus.emit("plan", record);
    return record;
  }

  function tryApply(record) {
    var internals = internal.internals;
    if (!internals || typeof internals.applyPatch !== "function") {
      return { ok: false, why: "the client internals layer is not installed in this build" };
    }
    try {
      return internals.applyPatch(record) || { ok: false, why: "the internals layer refused the plan" };
    } catch (error) {
      internal.reportError("patch:" + record.id, error);
      return { ok: false, why: String(error && error.message || error) };
    }
  }

  function summary() {
    var classes = {};
    var methods = {};
    for (var i = 0; i < plans.length; i++) {
      var plan = plans[i];
      for (var t = 0; t < plan.targets.length; t++) { classes[plan.targets[t]] = (classes[plan.targets[t]] || 0) + 1; }
      for (var j = 0; j < plan.injections.length; j++) {
        var methods2 = plan.injections[j].method;
        if (Array.isArray(methods2)) { for (var k = 0; k < methods2.length; k++) { methods[methods2[k]] = (methods[methods2[k]] || 0) + 1; } }
      }
    }
    return {
      plans: plans.length,
      injections: plans.reduce(function (total, plan) { return total + plan.injections.length; }, 0),
      accessors: plans.reduce(function (total, plan) { return total + plan.accessors.length; }, 0),
      applied: applied,
      planned: refused,
      targets: Object.keys(classes).sort(function (a, b) { return classes[b] - classes[a]; }).slice(0, 40).map(function (name) {
        return { target: name, count: classes[name] };
      }),
      methods: Object.keys(methods).sort(function (a, b) { return methods[b] - methods[a]; }).slice(0, 40).map(function (name) {
        return { method: name, count: methods[name] };
      })
    };
  }

  WebMC.patches = {
    add: add,
    list: function () { return plans.slice(); },
    get: function (id) { return byId.get(id) || null; },
    count: function () { return plans.length; },
    summary: summary,
    bus: bus,
    on: function (event, fn, options) { return bus.on(event, fn, options); }
  };
  WebMC.__internal.patches = { plans: plans, summary: summary };
})(typeof globalThis !== "undefined" ? globalThis : self);
