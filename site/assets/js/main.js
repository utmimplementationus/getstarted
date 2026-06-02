/* US UTM Implementation — prototype site interactions */
(function () {
  "use strict";

  // --- Mobile nav toggle ---
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // --- Highlight active nav link by filename ---
  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = (a.getAttribute("href") || "").toLowerCase();
    if (href === here || (here === "" && href === "index.html")) a.classList.add("active");
  });

  // --- Scroll reveal ---
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // --- FAQ live search ---
  var search = document.getElementById("faq-search");
  if (search) {
    var faqs = Array.prototype.slice.call(document.querySelectorAll(".faq"));
    var groups = Array.prototype.slice.call(document.querySelectorAll(".faq-group-title"));
    var empty = document.querySelector(".faq-empty");
    search.addEventListener("input", function () {
      var q = search.value.trim().toLowerCase();
      var anyVisible = false;
      faqs.forEach(function (f) {
        var hit = q === "" || f.textContent.toLowerCase().indexOf(q) !== -1;
        f.style.display = hit ? "" : "none";
        if (hit) anyVisible = true;
        if (q && hit) f.setAttribute("open", ""); else if (q) f.removeAttribute("open");
      });
      // hide group titles whose following faqs are all hidden
      groups.forEach(function (g) {
        var n = g.nextElementSibling, show = false;
        while (n && n.classList && n.classList.contains("faq")) {
          if (n.style.display !== "none") { show = true; break; }
          n = n.nextElementSibling;
        }
        g.style.display = show ? "" : "none";
      });
      if (empty) empty.style.display = anyVisible ? "none" : "block";
    });
  }
})();
