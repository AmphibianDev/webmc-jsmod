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
    // A plan is only *recorded* here. Application is the capped, wave-by-wave, liveness-checked
    // path in applyPlans(); applying at add time bypassed every valve (which is exactly how the
    // deployed site froze when Meteor was hot-loaded after boot).
    record.state = "planned";
    record.why = null;
    recount();
    internal.notifyPanel({ kind: "webmc:patches", count: plans.length, applied: applied, planned: refused });
    bus.emit("plan", record);
    scheduleApply();
    return record;
  }

  function recount() {
    applied = 0;
    for (var i = 0; i < plans.length; i++) { if (plans[i].state === "applied") { applied++; } }
    refused = plans.length - applied;
  }

  /** The internals appear after the compiled module runs, which is later than mod loading. When
   * they do, every plan that was refused for lack of a name anchor is tried again. */
  /** Coalesce a burst of plans (a hot-loaded mod brings hundreds) into one apply pass. */
  var applyTimer = null;
  function scheduleApply() {
    if (applyTimer) { return; }
    applyTimer = setTimeout(function () {
      applyTimer = null;
      if (!ready) { return; }             // the internals announcement will start it instead
      var latest = internal.state && internal.state.latest;
      if (!(latest && (latest.screen || latest.level))) { return; }
      applyPlans();
    }, 1500);
  }

  var ready = false;
  function retry() {
    if (!internal.internals || !internal.internals.bus) { return; }
    internal.internals.bus.on("ready", function () {
      ready = true;
      // Patches go in once the client is *running*: wrapping a method during the client's own
      // start-up is how a mod platform bricks a client, and the client says when it is up.
      waitForRunning(function () {
        // A warm client: the game has been publishing state for a few seconds, so "no new snapshot
        // in six seconds" means something, rather than being the boot screen.
        var warm = 0;
        var warmTimer = setInterval(function () {
          warm++;
          var updates = internal.state ? internal.state.updates : 0;
          if (updates >= 20 || warm > 40) { clearInterval(warmTimer); applyPlans(); }
        }, 500);
      });
    });
  }

  /** Patches go in only when the client is *actually running* — it has published a state snapshot.
   * There is no timeout that applies them anyway: on a slow connection the client is still booting
   * minutes in, and wrapping methods during start-up is exactly how a client gets bricked (this is
   * how the deployed site broke once, locally unreproducible because the boot was fast). */
  function waitForRunning(then) {
    var started = false;
    function go() {
      if (started) { return; }
      started = true;
      internal.stateBus.on("state", function () { /* running; the interval below has already fired */ }, { once: true });
      then();
    }
    // "Running" means the client has a screen or a level: its very first snapshot is published
    // while it is still starting, and that is exactly the moment patches must not land.
    function running() {
      var latest = internal.state && internal.state.latest;
      return !!(latest && (latest.screen || latest.level));
    }
    var timer = setInterval(function () {
      if (running()) { clearInterval(timer); go(); }
    }, 500);
    internal.stateBus.on("state", function () { if (running()) { clearInterval(timer); go(); } });
    // The panel can say why nothing has applied yet.
    setTimeout(function () {
      if (!started) {
        internal.notifyPanel({ kind: "webmc:patches-waiting", text: "waiting for the client to start before applying patches" });
      }
    }, 30000);
  }

  /** Apply, verify, and bisect when a batch hurts the client.
   *
   * The client publishes a state snapshot while it runs — a liveness signal the page can read. A
   * batch is applied, then the signal is checked: if it stopped while the page kept drawing, the
   * batch is rolled back (wrappers are property assignments, so undo is exact) and each half is
   * tried on its own. The client keeps every method it tolerates, and the ones it does not are
   * named in the panel instead of taking the whole set down.
   */
  var watchdog = { running: false, lastUpdates: 0, lastFrames: 0, lastProgressAt: 0 };

  function applyPlans() {
    var pending = plans.filter(function (record) { return record.state !== "applied" && record.state !== "rolled-back"; });
    if (!pending.length) { return; }
    // Accessor and invoker plans install a table entry; they wrap nothing, so they cost the client
    // nothing and are not subject to the wrapper budget. They are where a converted mod's field
    // reads and writes come from, and there are usually dozens of them.
    var accessorOnly = pending.filter(function (record) { return (record.accessors || []).length && !(record.injections || []).length; });
    if (accessorOnly.length) {
      var installed = 0;
      for (var i = 0; i < accessorOnly.length; i++) {
        var result = tryApply(accessorOnly[i]);
        if (result.ok) { accessorOnly[i].state = "applied"; accessorOnly[i].why = null; installed++; }
        else { accessorOnly[i].why = result.why || accessorOnly[i].why; }
      }
      recount();
      internal.notifyPanel({ kind: "webmc:patches", count: plans.length, applied: applied, planned: refused });
    }
    pending = pending.filter(function (record) { return !(record.accessors || []).length || (record.injections || []).length; });
    // A conservative default: the first N methods, in plan order, and then stop. A browser tab
    // tolerates a few dozen wrappers comfortably; the number is tunable and reported.
    var cap = (internal.internals && internal.internals.limits ? internal.internals.limits.maxPlans : 32) || 32;
    var queue = pending.slice(0, cap);
    var chain = Promise.resolve();
    function step() {
      if (!queue.length) { return chain; }
      var batch = queue.splice(0, 6);
      return chain.then(function () { return tryBatch(batch); }).then(step);
    }
    step();
    startWatchdog();
  }

  function liveCheck() {
    var before = internal.state ? internal.state.updates : 0;
    var framesBefore = internal.frame ? internal.frame.count : 0;
    return new Promise(function (resolve) {
      setTimeout(function () {
        var updates = internal.state ? internal.state.updates : 0;
        var frames = internal.frame ? internal.frame.count : 0;
        // A window in which the page barely drew (loading, a background tab) cannot judge.
        resolve(updates > before || frames - framesBefore < 120);
      }, 3500);
    });
  }

  function tryBatch(batch) {
    var handles = [];
    var appliedRecords = [];
    for (var i = 0; i < batch.length; i++) {
      var result = tryApply(batch[i]);
      if (result.ok) {
        batch[i].state = "applied";
        batch[i].why = null;
        appliedRecords.push(batch[i]);
        var list = result.results || [];
        for (var k = 0; k < list.length; k++) { if (list[k] && list[k].rollback) { handles.push(list[k].rollback); } }
      } else {
        batch[i].state = "planned";
        batch[i].why = result.why || batch[i].why;
      }
    }
    recount();
    internal.notifyPanel({ kind: "webmc:patches", count: plans.length, applied: applied, planned: refused });
    if (!handles.length) { return Promise.resolve(); }
    return liveCheck().then(function (alive) {
      if (alive) { return; }
      var undone = internal.internals && internal.internals.rollback ? internal.internals.rollback(handles) : 0;
      for (var i = 0; i < appliedRecords.length; i++) {
        appliedRecords[i].state = "rolled-back";
        appliedRecords[i].why = "rolled back: the client stopped publishing state after this batch";
      }
      if (internal.internals && internal.internals.noteRollback) { internal.internals.noteRollback(undone); }
      recount();
      internal.notifyPanel({ kind: "webmc:patches", count: plans.length, applied: applied, planned: refused });
      // Which half is responsible? Try each on its own.
      var half = Math.ceil(appliedRecords.length / 2);
      var halves = [appliedRecords.slice(0, half), appliedRecords.slice(half)];
      var chain = Promise.resolve();
      for (var h = 0; h < halves.length; h++) {
        (function (part) {
          if (!part.length) { return; }
          chain = chain.then(function () {
            for (var i = 0; i < part.length; i++) { part[i].state = "planned"; part[i].why = null; }
            return tryBatch(part);
          });
        })(halves[h]);
      }
      return chain;
    });
  }

  function startWatchdog() {
    if (watchdog.running) { return; }
    watchdog.running = true;
    watchdog.lastUpdates = internal.state ? internal.state.updates : 0;
    watchdog.lastFrames = internal.frame ? internal.frame.count : 0;
    watchdog.lastProgressAt = Date.now();
    setInterval(function () {
      var updates = internal.state ? internal.state.updates : 0;
      var frames = internal.frame ? internal.frame.count : 0;
      if (updates !== watchdog.lastUpdates) {
        watchdog.lastUpdates = updates;
        watchdog.lastProgressAt = Date.now();
        return;
      }
      var drawing = frames - watchdog.lastFrames > 120;
      watchdog.lastFrames = frames;
      if (!drawing || Date.now() - watchdog.lastProgressAt < 25000) { return; }
      internal.toast("the client stopped publishing state; patches are being rolled back");
      var handles = internal.internals && internal.internals.handles ? internal.internals.handles() : [];
      var undone = internal.internals && internal.internals.rollback ? internal.internals.rollback(handles) : 0;
      if (internal.internals && internal.internals.noteRollback) { internal.internals.noteRollback(undone); }
      for (var i = 0; i < plans.length; i++) {
        if (plans[i].state === "applied") {
          plans[i].state = "rolled-back";
          plans[i].why = "rolled back: the client stopped publishing state";
        }
      }
      recount();
      internal.notifyPanel({ kind: "webmc:patches", count: plans.length, applied: applied, planned: refused });
      watchdog.lastProgressAt = Date.now() + 10000;
    }, 5000);
  }

  function oldApplyPlans() {
    {
      var changed = 0;
      for (var i = 0; i < plans.length; i++) {
        var record = plans[i];
        if (record.state === "applied") { continue; }
        var result = tryApply(record);
        if (result.ok) { record.state = "applied"; record.why = null; changed++; }
      }
      if (changed) {
        recount();
        internal.notifyPanel({ kind: "webmc:patches", count: plans.length, applied: applied, planned: refused });
        internal.toast("applied " + changed + " mixin plan(s) from converted mods (" + applied + " of " + plans.length + ")");
      }
    }
  }
  retry();

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
    /** How many plans may be applied before the runtime stops and leaves the rest as records. */
    setCap: function (value) {
      if (internal.internals && internal.internals.limits) { internal.internals.limits.maxPlans = Math.max(0, Number(value) || 0); }
      return { cap: internal.internals && internal.internals.limits ? internal.internals.limits.maxPlans : null };
    },
    setEnabled: function (value) {
      WebMC.__internal.internalsDisabled = !value;
      return { enabled: !!value, applied: applied, planned: refused };
    },
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
