# Shared Airspace UTM Consortium — Public Site

A friendlier, visitor-oriented front door to the Shared Airspace UTM Consortium. It translates
the technical governance repository (agreements, SDDs, traceability matrices, policies)
into a clear, approachable experience for newcomers.

> **Source of truth:** Content is summarized from the repository's
> `README.md`, `onboarding.md`, `faqs.md`, `dss-pooling.md`, `NRID_onboarding.md`, and
> `docs/prioritization-policy-04082026.md`. Official/authoritative text remains in those
> source documents, which this site links to.

## Pages

| Page | Purpose |
|------|---------|
| `index.html` | Landing — what shared airspace is, guiding principles, key stats, where to go next |
| `about.html` | The consortium — origin story, members, governance committees, open-source approach |
| `onboarding.html` | The journey — sign the agreement + the three gates, as a visual step-by-step timeline |
| `policies.html` | Plain-language summaries of the Prioritization and DSS Pooling policies |
| `faqs.html` | Searchable, filterable FAQ accordion |
| `resources.html` | Document library (links to the real PDFs/SDDs/templates) + an acronym glossary |

## Preview locally

Clone repository and open `index.html` or any other web page

## Deploying to GitHub Pages

This site is deployed to GitHub Pages automatically by a GitHub Actions workflow that publishes the `site/` folder on every push to `main`;
see the workflow configuration in [`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml).

## Editing content

- Shared look-and-feel lives in `assets/css/styles.css` (CSS custom properties at the top
  control the palette).
- Interactions (mobile nav, scroll reveal, FAQ search) live in `assets/js/main.js`.
- The header and footer are duplicated inline in each page, update all pages together,
  or introduce a templating/include step if the site grows.

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
> `versions.js`, set to `main`. New versions appear on the live site within the raw
> CDN's ~5-minute cache after the README change lands on `main`.
