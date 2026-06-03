# US Shared Airspace UTM Implementation — Public Site (Prototype)

A friendlier, visitor-oriented front door to the US Shared Airspace UTM Implementation. It translates
the technical governance repository (agreements, SDDs, traceability matrices, policies)
into a clear, approachable experience for newcomers.

> **Status:** Prototype for review. Content is summarized from the repository's
> `README.md`, `onboarding.md`, `faqs.md`, `dss-pooling.md`, `NRID_onboarding.md`, and
> `docs/prioritization-policy-04082026.md`. Official/authoritative text remains in those
> source documents, which this site links to.

## Pages

| Page | Purpose |
|------|---------|
| `index.html` | Landing — what shared airspace is, guiding principles, key stats, where to go next |
| `about.html` | The cohort — origin story, members, governance committees, open-source approach |
| `onboarding.html` | The journey — sign the agreement + the three gates, as a visual step-by-step timeline |
| `policies.html` | Plain-language summaries of the Prioritization and DSS Pooling policies |
| `faqs.html` | Searchable, filterable FAQ accordion |
| `resources.html` | Document library (links to the real PDFs/SDDs/templates) + an acronym glossary |

No build step, no dependencies — pure HTML/CSS/vanilla JS. Inter is loaded from Google
Fonts; everything else is local under `assets/`.

## Preview locally

Any static file server works. For example:

```bash
# from the repo root
cd site && python3 -m http.server 8080   # then open http://localhost:8080
```

(During development this was served via `.claude/serve_site.js` + `.claude/launch.json`
for the Claude Code preview panel — handy on macOS where the system Python lacks
Documents-folder access.)

## Deploying to GitHub Pages

GitHub Pages can serve from the repo **root** or a **`/docs`** folder only — not an
arbitrary `/site` folder. Three options:

1. **Move to root** — copy the contents of `site/` to the repo root (or merge into a
   Pages branch). `index.html` will be served by Pages while the repo's `README.md`
   still shows on the GitHub repo page.
2. **GitHub Actions** — add a workflow that publishes the `site/` directory as the Pages
   artifact (keeps source isolated). Recommended for keeping the governance docs tidy.
3. **`/docs` folder** — point Pages at `/docs` and place the site there (note: `/docs`
   currently holds the official PDFs/spreadsheets).

## Editing content

- Shared look-and-feel lives in `assets/css/styles.css` (CSS custom properties at the top
  control the palette).
- Interactions (mobile nav, scroll reveal, FAQ search) live in `assets/js/main.js`.
- The header and footer are duplicated inline in each page — update all pages together,
  or introduce a templating/include step if this graduates beyond a prototype.

## Keeping document versions in sync (README-driven)

Document versions and links are **not** hand-maintained on the site. The single source of
truth is the **Markdown tables in the repository root `README.md`**, between the
`<!-- site-data:services -->` and `<!-- site-data:governance -->` markers.

`assets/js/versions.js` (loaded on `resources.html` and `policies.html`) fetches the raw
README at page load, parses those tables, and fills any element tagged with:

- `data-vtext="<key>"` — sets the element's text (e.g. a version label)
- `data-vhref="<key>"` — sets the element's link (rewritten to a GitHub blob URL)

Keys follow `service.doc.field`, e.g. `scd.sdd.version`, `nrid.reporting.href`,
`scd.effective`, `scd.status`, `agreement.href`, `prioritization.effective`,
`dss.effective`, `dss.href`, `report.href`. Service columns are mapped by header
name (so new columns like `Effective`/`Status` become `scd.effective`/`scd.status`
automatically); governance rows are read as `Document | Effective | Status | Link`.

**To update the site after a document changes, edit only the README tables.** No site edit
is needed. If the fetch fails (offline, README mid-edit, markers missing), each tagged
element keeps the hardcoded fallback value baked into the HTML, so the page always renders
correctly — just possibly one version behind.

> Note: the branch the sync reads from is the `BRANCH` constant at the top of
> `versions.js`. It is currently set to `public_page_improvements` for pre-merge testing;
> **set it back to `main` before production.** New versions appear on the live site within
> the raw CDN's ~5-minute cache after the README change lands on that branch.
