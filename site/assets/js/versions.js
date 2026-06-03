/* versions.js — keep document versions/links in sync with the cohort README.
 *
 * Source of truth: the Markdown tables in README.md on `main`, between the
 * <!-- site-data:services --> and <!-- site-data:governance --> markers.
 *
 * Strategy (Option B, runtime): fetch the raw README, parse the tables, and fill
 * any [data-vtext] / [data-vhref] elements on the page. If anything fails (offline,
 * README mid-edit, markers missing) the hardcoded fallback values already in the
 * HTML are left untouched — the page always renders correct, just possibly stale.
 *
 * Field keys (used in data-vtext / data-vhref):
 *   Services:    scd.sdd.version|href, scd.rtm.*, scd.reporting.*, scd.baseline, scd.status
 *                nrid.* (same shape)
 *   Governance:  agreement.href|effective|status, prioritization.*, dss.*, report.*
 */
(function () {
  "use strict";

  // Branch the site reads document data + links from.
  // Set to "main" for production; currently the working branch for pre-merge testing.
  var BRANCH = "public_page_improvements";
  var RAW  = "https://raw.githubusercontent.com/utmimplementationus/getstarted/" + BRANCH + "/README.md";
  var BLOB = "https://github.com/utmimplementationus/getstarted/blob/" + BRANCH + "/";

  // repo-relative ("./docs/x", "dss-pooling.md") -> in-browser blob URL
  function abs(href) {
    if (!href) return href;
    if (/^https?:\/\//.test(href)) return href;
    return BLOB + href.replace(/^\.?\//, "");
  }

  function sliceRegion(md, name) {
    var re = new RegExp("<!--\\s*site-data:" + name + " START\\s*-->([\\s\\S]*?)<!--\\s*site-data:" + name + " END\\s*-->");
    var m = md.match(re);
    return m ? m[1] : "";
  }

  // a GFM pipe table -> array of rows, each an array of trimmed cells (separator row dropped)
  function tableRows(block) {
    return block.split("\n")
      .map(function (l) { return l.trim(); })
      .filter(function (l) { return l.indexOf("|") !== -1; })
      .filter(function (l) { return !/^\|?[\s:\-|]+\|?$/.test(l); })   // drop |---|---| separator
      .map(function (l) {
        return l.replace(/^\||\|$/g, "").split("|").map(function (c) { return c.trim(); });
      });
  }

  // "[label](href)" -> {text, href}; plain text -> {text, href:null}
  function parseCell(cell) {
    var m = cell.match(/\[([^\]]*)\]\(([^)]+)\)/);
    return m ? { text: m[1], href: abs(m[2]) } : { text: cell, href: null };
  }

  function norm(s) { return (s || "").toLowerCase().replace(/[^a-z0-9]/g, ""); }

  function parse(md) {
    var data = {};

    // --- Service Documents ---
    var sr = tableRows(sliceRegion(md, "services"));
    if (sr.length > 1) {
      var head = sr[0].map(norm);   // [service, sdd, rtm, monthlyreporting, testbaseline, rolloutstatus]
      sr.slice(1).forEach(function (row) {
        var svc = norm(row[0]);
        if (!svc) return;
        head.forEach(function (h, i) {
          if (i === 0) return;
          var field = h === "monthlyreporting" ? "reporting"
                    : h === "testbaseline"     ? "baseline"
                    : h === "rolloutstatus"    ? "status"
                    : h;                                   // sdd | rtm
          var c = parseCell(row[i] || "");
          if (c.href) {
            data[svc + "." + field + ".version"] = c.text;
            data[svc + "." + field + ".href"]    = c.href;
          } else {
            data[svc + "." + field] = c.text;
          }
        });
      });
    }

    // --- Governance & Policy Documents ---
    var GKEY = {
      governanceagreement: "agreement",
      operationalprioritizationpolicy: "prioritization",
      dsspoolinggovernancepolicy: "dss",
      initialoperationalizationreport: "report"
    };
    var gr = tableRows(sliceRegion(md, "governance"));
    if (gr.length > 1) {
      gr.slice(1).forEach(function (row) {
        var key = GKEY[norm(row[0])];
        if (!key) return;
        data[key + ".effective"] = row[1] || "";
        data[key + ".status"]    = row[2] || "";
        var c = parseCell(row[3] || "");
        if (c.href) data[key + ".href"] = c.href;
      });
    }

    return data;
  }

  function apply(data) {
    document.querySelectorAll("[data-vtext]").forEach(function (el) {
      var v = data[el.getAttribute("data-vtext")];
      if (v) el.textContent = v;
    });
    document.querySelectorAll("[data-vhref]").forEach(function (el) {
      var v = data[el.getAttribute("data-vhref")];
      if (v) el.setAttribute("href", v);
    });
  }

  fetch(RAW, { cache: "no-cache" })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
    .then(function (md) {
      var data = parse(md);
      if (Object.keys(data).length) apply(data);
    })
    .catch(function () { /* keep the baked-in fallbacks */ });
})();
