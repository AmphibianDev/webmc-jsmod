/* The shell script that runs inside the client document, before the client's own scripts.
 *
 * It does three things, and nothing else:
 *   1. clears the engine's name out of any text node a player could read (the CSS hides the elements
 *      that carry it, but the engine also writes its name into the title and into status text);
 *   2. watches for chrome the engine builds *after* load (it marks those `data-gaius-shell`) and
 *      hides it as it appears;
 *   3. tells the launcher outside the frame when the client has a screen up, so the launcher's boot
 *      screen can fade at the right moment instead of guessing.
 */
(function () {
  "use strict";

  var BRAND = /(gaius|eaglercraft(?:x)?|eaglerforge|eagler|lax1dude|typetheory|browsercraft)/i;

  function cleanText(node) {
    if (!node || !node.textContent || !BRAND.test(node.textContent)) { return; }
    node.textContent = node.textContent
      .replace(/\bGAIUS CLIENT\b/gi, "WebMC")
      .replace(/\bStarting Gaius Client\b/gi, "Starting Minecraft")
      .replace(/\bGaius\b/gi, "WebMC")
      .replace(/\bEaglercraftX?\b/gi, "WebMC")
      .replace(/\bEagler\b/gi, "WebMC");
  }

  function stripChrome(root) {
    try {
      var nodes = (root || document).querySelectorAll("title, .status, #status, [class*=status], [class*=brand], header, footer, h1, h2, small");
      for (var i = 0; i < nodes.length; i++) { cleanText(nodes[i]); }
      var marked = document.querySelectorAll("[data-gaius-shell]");
      for (var k = 0; k < marked.length; k++) { marked[k].style.display = "none"; }
    } catch (error) { /* cosmetic only */ }
  }

  function whenBody(fn) {
    if (document.body) { fn(); return; }
    if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", fn, { once: true }); }
    else { fn(); }
  }

  stripChrome(document);
  whenBody(function () {
    stripChrome(document);
    try {
      var observer = new MutationObserver(function (records) {
        for (var i = 0; i < records.length; i++) {
          var added = records[i].addedNodes;
          for (var k = 0; k < added.length; k++) { stripChrome(added[k].parentNode || document); }
        }
      });
      observer.observe(document.documentElement, { childList: true, subtree: true, characterData: false });
      // The engine keeps writing its name into the status line; a light interval catches that without
      // a subtree observer on every text node.
      setInterval(function () { stripChrome(document); }, 2000);
    } catch (error) { /* cosmetic only */ }
  });

  /* Tell the launcher when there is a screen: the runtime's state watcher is the client's own signal. */
  var announced = false;
  function announce() {
    if (announced) { return; }
    announced = true;
    try { if (window.parent && window.parent !== window) { window.parent.postMessage({ kind: "webmc:client-screen" }, "*"); } } catch (error) {}
  }
  function watchState() {
    if (window.webmc && window.webmc.events && window.webmc.events.onState) {
      window.webmc.events.onState(function (snapshot) {
        if (snapshot && (snapshot.screen || snapshot.level)) { announce(); }
      });
      return;
    }
    setTimeout(watchState, 250);
  }
  watchState();
})();
