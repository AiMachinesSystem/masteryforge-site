/* Cookie choice banner (2026-09-19).
   Shown to visitors in a European time zone until they choose, and to anyone who opens
   "Cookie settings". Reject and Accept look the same and cost the same one click.
   The defaults are set inline in <head> (window.MFC) before Google and Meta load. */
(function () {
  var M = window.MFC || {};
  var bar = null;

  function hide() { if (bar) { bar.remove(); bar = null; } }

  function choose(v) {
    try { localStorage.setItem('mf_consent', v); } catch (e) {}
    M.choice = v;
    if (window.gtag && M.G && M.D) gtag('consent', 'update', v === 'granted' ? M.G : M.D);
    if (window.fbq) fbq('consent', v === 'granted' ? 'grant' : 'revoke');
    hide();
  }

  function show() {
    if (bar) return;
    bar = document.createElement('div');
    bar.id = 'mf-consent';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Cookie choices');
    bar.innerHTML =
      '<p>We use Google Analytics and the Meta pixel to count visits and measure our ads. ' +
      'They set cookies only if you allow it. ' +
      '<a href="https://shop.masteryforgecrafts.com/policies/privacy-policy">Privacy Policy</a></p>' +
      '<div class="mfc-b"><button type="button" data-v="denied">Reject</button>' +
      '<button type="button" data-v="granted">Accept</button></div>';
    bar.addEventListener('click', function (e) {
      var v = e.target && e.target.getAttribute && e.target.getAttribute('data-v');
      if (v) choose(v);
    });
    document.body.appendChild(bar);
  }

  var css = document.createElement('style');
  css.textContent =
    '#mf-consent{position:fixed;left:1rem;right:1rem;bottom:1rem;z-index:100;max-width:40rem;margin:0 auto;' +
    'background:#1C1A17;color:#F6F2EC;border-radius:12px;padding:1rem 1.1rem;' +
    'font:400 .9rem/1.5 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.25)}' +
    '#mf-consent p{margin:0 0 .75rem}#mf-consent a{color:#F6F2EC}' +
    '#mf-consent .mfc-b{display:flex;gap:.6rem;flex-wrap:wrap}' +
    '#mf-consent button{flex:1 1 8rem;min-height:44px;border-radius:8px;border:1px solid #F6F2EC;' +
    'background:transparent;color:#F6F2EC;font:600 .9rem system-ui,sans-serif;cursor:pointer}' +
    '#mf-consent button:focus-visible{outline:3px solid #CF5A22;outline-offset:2px}';
  document.head.appendChild(css);

  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('[data-mf-consent]');
    if (a) { e.preventDefault(); show(); }
  });

  if (M.eu && !M.choice) show();
})();
