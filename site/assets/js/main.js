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
      if (e.target.tagName !== "A") return;
      links.classList.remove("open");
      links.querySelectorAll(".nav-drop.open").forEach(closeDrop);
    });
  }

  // --- Nav dropdowns ---
  // JS owns the open state so `aria-expanded` always matches what is visible.
  // Adding .js-drops retires the CSS hover fallback in styles.css.
  var drops = Array.prototype.slice.call(document.querySelectorAll(".nav-drop"));
  // hover-open applies only to a real pointer on the wide layout, so a tap on a
  // large touch screen does not open then immediately close the menu
  var hoverNav = window.matchMedia("(min-width: 861px) and (hover: hover)");
  function setDrop(d, on) {
    d.classList.toggle("open", on);
    var b = d.querySelector(".nav-drop-btn");
    if (b) b.setAttribute("aria-expanded", on ? "true" : "false");
  }
  function closeDrop(d) { setDrop(d, false); }
  drops.forEach(function (d) {
    var btn = d.querySelector(".nav-drop-btn");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var on = !d.classList.contains("open");
      drops.forEach(closeDrop);
      setDrop(d, on);
    });
    d.addEventListener("mouseenter", function () {
      if (hoverNav.matches) setDrop(d, true);
    });
    d.addEventListener("mouseleave", function () {
      // keep it open if the keyboard is still inside the menu
      if (hoverNav.matches && !d.contains(document.activeElement)) setDrop(d, false);
    });
    d.addEventListener("focusout", function (e) {
      if (!d.contains(e.relatedTarget)) setDrop(d, false);
    });
  });
  if (drops.length) {
    if (links) links.classList.add("js-drops");
    document.addEventListener("click", function (e) {
      drops.forEach(function (d) { if (!d.contains(e.target)) closeDrop(d); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      drops.forEach(function (d) {
        if (!d.classList.contains("open")) return;
        closeDrop(d);
        var b = d.querySelector(".nav-drop-btn");
        if (b) b.focus();
      });
    });
  }

  // --- Highlight active nav link by filename ---
  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = (a.getAttribute("href") || "").toLowerCase();
    if (href === here || (here === "" && href === "index.html")) {
      a.classList.add("active");
      var parent = a.closest && a.closest(".nav-drop");
      if (parent) {
        var pbtn = parent.querySelector(".nav-drop-btn");
        if (pbtn) pbtn.classList.add("active");
      }
    }
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

  // --- Become a Participant: prefilled intake email ---
  // The CTA anchors carry a plain `mailto:` href and a `data-intake` marker so
  // they still work without JS. Here we enrich them with a single, centrally
  // defined intake template (subject + structured body). Update it once here.
  var intakeLinks = document.querySelectorAll("a[data-intake]");
  if (intakeLinks.length) {
    var intakeTo = "onboarding@us-utm.simplelogin.com";
    var intakeSubject = "Intake: Request to join - [your organization]";
    var intakeBody = [
      "Organization:",
      "",
      "Joining as (Service Provider / Vertically Integrated Service Provider):",
      "",
      "Signing point of contact - name:",
      "Signing point of contact - email:",
      "",
      "Proposed UTM service(s) (Strategic Coordination / Network Remote ID):",
      "",
      "Operator(s) served, if available:",
      "",
      "Committee points of contact (name, email, GitHub handle):",
      "- Operations Committee POC:",
      "- Technical Committee POC:",
      "- Accountable Executive:",
      "",
      "Notes:",
      ""
    ].join("\n");
    var intakeHref = "mailto:" + intakeTo +
      "?subject=" + encodeURIComponent(intakeSubject) +
      "&body=" + encodeURIComponent(intakeBody);
    intakeLinks.forEach(function (a) { a.setAttribute("href", intakeHref); });
  }

  // --- How-to-join journey toggle (Service Provider / Operator) ---
  var jtBtns = document.querySelectorAll(".jt-btn");
  if (jtBtns.length) {
    jtBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var targetId = btn.getAttribute("aria-controls");
        jtBtns.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle("active", on);
          b.setAttribute("aria-selected", on ? "true" : "false");
        });
        document.querySelectorAll(".journey-panel").forEach(function (p) {
          p.hidden = (p.id !== targetId);
        });
        // ensure the newly shown panel's steps are visible (they may never have intersected while hidden)
        document.querySelectorAll("#" + targetId + " .reveal").forEach(function (el) {
          el.classList.add("in");
        });
      });
    });
  }
})();
