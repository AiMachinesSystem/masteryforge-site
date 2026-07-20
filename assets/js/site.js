/* MasteryForge — site.js (vanilla, defer, no deps)
   1) scroll-reveal via IntersectionObserver
   2) sticky mobile CTA bar after 60% scroll
   3) current year in footer [data-year]
   4) lead popup (free sample): exit-intent desktop / 70% scroll touch, once per session
   FAQ accordions are native <details> — no JS. */
(function(){
  "use strict";
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1) Scroll reveal */
  var els = document.querySelectorAll(".reveal");
  if (els.length) {
    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach(function(el){ el.classList.add("in"); });
    } else {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      els.forEach(function(el){ io.observe(el); });
    }
  }

  /* 2) Sticky bar after 60% of page scroll */
  var bar = document.querySelector(".stickybar");
  if (bar) {
    var on = false, ticking = false;
    function check(){
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var show = max > 0 && (h.scrollTop / max) >= 0.6;
      if (show !== on) { on = show; bar.classList.toggle("on", on); }
      ticking = false;
    }
    window.addEventListener("scroll", function(){
      if (!ticking) { ticking = true; requestAnimationFrame(check); }
    }, { passive: true });
    check();
  }

  /* 3) Footer year */
  document.querySelectorAll("[data-year]").forEach(function(el){
    el.textContent = String(new Date().getFullYear());
  });

  /* 4) Lead popup — native <dialog>, never auto-opens, once per session */
  var pop = document.querySelector("dialog.leadpop");
  if (pop && typeof pop.showModal === "function") {
    var KEY = "mf_leadpop", lastFocus = null, seen = false;
    try { seen = !!sessionStorage.getItem(KEY); } catch (e) {}
    function openPop(){
      if (seen || pop.open) return;
      seen = true;
      try { sessionStorage.setItem(KEY, "1"); } catch (e) {}
      lastFocus = document.activeElement;
      pop.showModal();
      var no = pop.querySelector(".leadpop-no");
      if (no) no.focus();
    }
    if (!seen) {
      if (window.matchMedia && window.matchMedia("(hover: none)").matches) {
        /* touch / no-hover fallback: open after 70% page scroll */
        var pTick = false;
        window.addEventListener("scroll", function(){
          if (pTick) return;
          pTick = true;
          requestAnimationFrame(function(){
            pTick = false;
            var h = document.documentElement, max = h.scrollHeight - h.clientHeight;
            if (max > 0 && (h.scrollTop / max) >= 0.7) openPop();
          });
        }, { passive: true });
      } else {
        /* desktop exit-intent: pointer leaves the viewport toward the top */
        document.addEventListener("mouseleave", function(ev){
          if (ev.clientY <= 2) openPop();
        });
      }
    }
    pop.addEventListener("click", function(ev){
      if (ev.target === pop) pop.close(); /* backdrop click */
    });
    pop.querySelector(".leadpop-no").addEventListener("click", function(){ pop.close(); });
    pop.addEventListener("close", function(){
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    });
  }
})();
