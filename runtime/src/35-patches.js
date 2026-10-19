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
  var notTheClient = 0;

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
      own: plan.own === true,
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
    announce();
    bus.emit("plan", record);
    scheduleApply();
    return record;
  }

  function recount() {
    applied = 0;
    notTheClient = 0;
    for (var i = 0; i < plans.length; i++) {
      if (plans[i].state === "applied") { applied++; }
      else if (plans[i].state === "not-the-client") { notTheClient++; }
    }
    // A plan against the mod's own classes is not a refusal: the client was never the thing to patch.
    refused = plans.length - applied - notTheClient;
  }

  /** Why the plans that did not apply did not apply, grouped. A platform that reports "68 of 191"
   *  without the reasons is asking to be distrusted: the reasons are the honest half. */
  function reasons() {
    var counts = {};
    for (var i = 0; i < plans.length; i++) {
      var plan = plans[i];
      if (plan.state === "applied" || plan.state === "not-the-client") { continue; }
      var why = String(plan.why || plan.state);
      // Group by the shape of the sentence, not the exact method name.
      var key = why
        .replace(/\([^)]*\)/g, "(…)")
        .replace(/:.*$/, "")
        .slice(0, 90);
      counts[key] = (counts[key] || 0) + 1;
    }
    return Object.keys(counts)
      .map(function (key) { return { why: key, count: counts[key] }; })
      .sort(function (a, b) { return b.count - a.count; })
      .slice(0, 8);
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
  // What actually went in, newest last: each entry is one batch that passed its liveness check.
  // The watchdog needs this because "the client stopped publishing state" does not say *which*
  // wrapper did it, and rolling back 134 plans because the 134th hurt is not a platform — it is a
  // switch. Dropping the newest batch first finds the offender and keeps the rest.
  var appliedWaves = [];

  function applyPlans() {
    // A plan whose targets are the mod's own classes (or another mod's) has nothing here to patch:
    // the mod's own code is the converted mod itself. Say so by name instead of leaving it "planned"
    // forever, which read like a target the map had missed.
    for (var o = 0; o < plans.length; o++) {
      if (plans[o].own && plans[o].state === "planned" && !(plans[o].accessors || []).length) {
        plans[o].state = "not-the-client";
        plans[o].why = "the plan targets the mod's own classes: its code runs from the converted mod, not from the client";
      }
    }
    var pending = plans.filter(function (record) { return record.state !== "applied" && record.state !== "rolled-back" && record.state !== "not-the-client"; });
    if (!pending.length) { recount(); return; }
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
      announce();
    }
    pending = pending.filter(function (record) { return !(record.accessors || []).length || (record.injections || []).length; });
    // Order matters when the budget is smaller than the plan list: a plan that installs an accessor
    // or a plain @Inject has a compiled method behind it, while a redirect also needs the callee
    // named. The cheap ones go first so the budget is spent where it applies.
    function priority(record) {
      var kinds = (record.injections || []).map(function (injection) { return injection.kind || "inject"; });
      if (kinds.indexOf("overwrite") >= 0) { return 4; }
      if (kinds.indexOf("redirect") >= 0 || kinds.indexOf("modifyArg") >= 0 || kinds.indexOf("modifyArgs") >= 0) { return 3; }
      if (kinds.length && kinds.every(function (kind) { return kind === "inject"; })) { return 1; }
      return 2;
    }
    pending.sort(function (a, b) { return priority(a) - priority(b); });
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
    announce();
    if (!handles.length) { return Promise.resolve(); }
    return liveCheck().then(function (alive) {
      if (alive) {
        appliedWaves.push({ handles: handles, plans: appliedRecords });
        if (appliedWaves.length > 40) { appliedWaves.shift(); }
        return;
      }
      var undone = internal.internals && internal.internals.rollback ? internal.internals.rollback(handles) : 0;
      for (var i = 0; i < appliedRecords.length; i++) {
        appliedRecords[i].state = "rolled-back";
        appliedRecords[i].why = "rolled back: the client stopped publishing state after this batch";
      }
      if (internal.internals && internal.internals.noteRollback) { internal.internals.noteRollback(undone); }
      recount();
      announce();
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

  /** Is the client alive? The honest answer is its own clock: the frame counter and the game tick,
   *  both of which the runtime reads from the client's loop. The state bus is *not* a liveness
   *  signal — a client sitting on a static screen at 60 fps publishes no state change for minutes,
   *  and a watchdog that watches the mod bus dropped 81 perfectly good plans on a title screen. */
  function aliveNow() {
    var frames = internal.frame ? internal.frame.count : 0;
    var ticks = internal.frame ? internal.frame.gameTick : 0;
    var moved = frames > watchdog.lastFrames || ticks > watchdog.lastTicks;
    watchdog.lastFrames = frames;
    watchdog.lastTicks = ticks;
    return moved;
  }

  function startWatchdog() {
    if (watchdog.running) { return; }
    watchdog.running = true;
    watchdog.lastUpdates = internal.state ? internal.state.updates : 0;
    watchdog.lastFrames = internal.frame ? internal.frame.count : 0;
    watchdog.lastTicks = internal.frame ? internal.frame.gameTick : 0;
    watchdog.lastProgressAt = Date.now();
    setInterval(function () {
      var updates = internal.state ? internal.state.updates : 0;
      var drawing = internal.frame ? internal.frame.count - watchdog.lastFrames > 120 : false;
      var ticking = internal.frame ? internal.frame.gameTick - watchdog.lastTicks > 15 : false;
      if (updates !== watchdog.lastUpdates) {
        watchdog.lastUpdates = updates;
        watchdog.lastProgressAt = Date.now();
        watchdog.quietWindows = 0;
        return;
      }
      if (drawing || ticking) {
        // The client is running and only the mod-facing state is quiet. That is normal.
        watchdog.lastProgressAt = Date.now();
        watchdog.quietWindows = 0;
        return;
      }
      // Nothing drew and no tick ran: the client itself has stopped, which is what a stall is. One
      // quiet window is not enough — a GC or a resource reload can pause the client for seconds —
      // and the clock is checked again before anything is blamed on a patch.
      watchdog.quietWindows = (watchdog.quietWindows || 0) + 1;
      if (watchdog.quietWindows < 2) { return; }
      if (!drawing && !ticking && Date.now() - watchdog.lastProgressAt >= 40000) { dropWaves(); }
      watchdog.lastProgressAt = Date.now() + 10000;
    }, 5000);
  }

  /** The client stopped publishing state. Drop the newest wave, wait, and drop another if it is still
   *  quiet — the offender is found and everything else stays applied. If even an empty set does not
   *  bring the client back, the state of the client is the problem, not the patches, and the panel
   *  says exactly that. */
  function dropWaves() {
    if (!appliedWaves.length) {
      internal.toast("the client stopped publishing state, and no patch wave is applied — this is not the patches");
      return;
    }
    var dropped = 0;
    function again() {
      var wave = appliedWaves.pop();
      if (!wave) {
        recount();
        announce();
        internal.toast("dropped every patch wave; the client is still not updating. Nothing from the mods is applied.");
        return;
      }
      var undone = internal.internals && internal.internals.rollback ? internal.internals.rollback(wave.handles) : 0;
      if (internal.internals && internal.internals.noteRollback) { internal.internals.noteRollback(undone); }
      for (var i = 0; i < wave.plans.length; i++) {
        wave.plans[i].state = "rolled-back";
        wave.plans[i].why = "dropped: the client stopped publishing state after this batch went in";
      }
      dropped += wave.plans.length;
      recount();
      announce();
      // Give the client a few seconds to come back before blaming the next wave.
      var before = internal.state ? internal.state.updates : 0;
      setTimeout(function () {
        var now = internal.state ? internal.state.updates : 0;
        if (now > before) {
          internal.toast("dropped " + dropped + " plan(s) that stopped the client; " + applied + " stay applied");
          return;
        }
        again();
      }, 4000);
    }
    internal.toast("the client stopped publishing state; dropping the newest patches until it recovers");
    again();
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
        announce();
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

  function announce() {
    var stats = internal.internals && internal.internals.stats ? (internal.internals.stats() || {}) : {};
    internal.notifyPanel({
      kind: "webmc:patches",
      count: plans.length,
      applied: applied,
      planned: refused,
      own: notTheClient,
      injections: stats.appliedInjections || 0,
      reasons: reasons()
    });
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
      own: notTheClient,
      reasons: reasons(),
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
