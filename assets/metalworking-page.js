(function () {
  "use strict";
  var header = document.getElementById("gaee1b38d4");
  if (header) {
    header.style.position = "sticky";
    header.style.top = "0";
    header.style.zIndex = "20";
  }
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var id = link.getAttribute("href").slice(1);
      var target = id ? document.getElementById(id) : null;
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  });
  var items = document.querySelectorAll(".gp-faq-item");
  items.forEach(function (item) {
    var button = item.querySelector(".gp-faq-q");
    button.addEventListener("click", function () {
      var open = !item.classList.contains("gp-is-open");
      items.forEach(function (other) {
        other.classList.remove("gp-is-open");
        other.querySelector(".gp-faq-q").setAttribute("aria-expanded", "false");
        other.querySelector(".gp-faq-a").hidden = true;
        other.querySelector(".gp-faq-icon").textContent = "+";
      });
      if (open) {
        item.classList.add("gp-is-open");
        button.setAttribute("aria-expanded", "true");
        item.querySelector(".gp-faq-a").hidden = false;
        item.querySelector(".gp-faq-icon").textContent = "−";
      }
    });
  });
  var bar = document.getElementById("sticky-cta");
  if (bar) {
    function updateBar() {
      var visible = window.scrollY > 800;
      bar.classList.toggle("gp-is-visible", visible);
      bar.setAttribute("aria-hidden", visible ? "false" : "true");
      bar.inert = !visible;
    }
    window.addEventListener("scroll", updateBar, { passive: true });
    updateBar();
  }
})();
