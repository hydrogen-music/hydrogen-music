# ADR-001: Static Site Framework — Docusaurus

**Status:** Accepted
**Date:** 2026-06-24
**Authors:** phil (theGreatWhiteShark)
**Tags:** framework, architecture, documentation

## Context

The Hydrogen Music website currently runs on Jekyll 3.7.3 (2018), with the Minima
theme and hand-written SCSS. The site hosts:
- A homepage with blog post listings (23 posts, 2014–2025)
- 7 static pages (Features, Downloads, Documentation, FAQ, Developer Zone, Screenshots, Contribution)
- Pre-built documentation HTML generated from DocBook XML via a separate toolchain

The documentation is maintained in a [repo](https://github.com/hydrogen-music/documentation)
using DocBook XML + itstool + xmlto + gettext PO files. Generated HTML is committed
to `documentation/` and linked from the Jekyll site. The documentation has:
- 2 versions (Hydrogen 1.1, 1.2.6)
- Multiple languages (EN primary, FR/IT for tutorial, outdated manual translations)
- ~9K lines of manual DocBook, ~321 lines of tutorial DocBook
- ~137 screenshots per language

The project needs a modern framework that supports:
1. First-class i18n (language switching, translation workflow)
2. Documentation versioning with a UI switcher
3. Markdown-based content (migrating away from DocBook)
4. Static site output
5. Docker-based build and serve
6. Standalone HTML export for bundling with the Hydrogen application
7. Backward-compatible static file serving (e.g., `feeds/drumkit_list.php` must remain accessible at the same URL)

## Decision

Use **Docusaurus v3** as the static site framework.

## Alternatives Considered

### Astro
- **Pros:** Most flexible architecture, zero-JS default, excellent for website + docs combo, islands architecture
- **Cons:** i18n is routing-only (no translation workflow, no string extraction, no language switcher UI). Version switching + i18n matrix requires significant custom implementation. More moving parts to maintain.
- **Verdict:** Rejected. The i18n gap is too large for this project's needs.

### Hugo
- **Pros:** Fastest build times, Go-based (no Node), excellent performance
- **Cons:** i18n is translation-file based (`.toml` key-value pairs), not content-folder based. Awkward for full-page translations. Versioning requires manual URL structure management. Less flexible component model.
- **Verdict:** Rejected. i18n model doesn't fit content-heavy, page-level translation needs.

### VitePress
- **Pros:** Vue-based, elegant docs UI, good i18n for docs, MDX support
- **Cons:** Docs-first — less natural for the blog/website portion. Vue-locked. Weaker blog support. Smaller ecosystem.
- **Verdict:** Rejected. Too docs-centric for a site that also needs blog, features, downloads, screenshots pages.

### MkDocs Material
- **Pros:** Excellent standalone export, good i18n, Material Design theme, Python ecosystem
- **Cons:** Python/pip (not pnpm/Node). Weaker blog support. Less flexible theming. No React component model for custom UI.
- **Verdict:** Rejected. Weaker for website/blog side.

### Docusaurus (Selected)
- **Pros:**
  - First-class i18n with per-locale content folders, automatic language switcher, `write-translations` CLI
  - Built-in documentation versioning (`docusaurus docs:version`)
  - i18n × versioning work together natively (`/fr/docs/1.2/manual/`)
  - Partial translation support (untranslated pages fall back to default locale)
  - MDX support with React component injection
  - Built-in blog with tags, authors, RSS
  - Dark mode toggle out of the box
  - Language-prefixed routes with locale detection
  - pnpm-native, full Node ecosystem
  - Static output from `docusaurus build`
- **Cons:**
  - React-based (heavier than Astro/Hugo for simple sites)
  - Ships more JS than Astro by default
  - Docs-focused (but blog/website works well enough)
- **Verdict:** Selected. The combination of i18n + versioning + translation workflow is unmatched.

## Consequences

### Positive
- i18n and versioning work together out of the box — the hardest part of this migration is solved by the framework
- Translation workflow: `docusaurus write-translations` extracts UI strings, Crowdin/Weblate integration for community translators
- MDX allows embedding React components (callouts, tabs, video embeds) directly in Markdown
- Blog, docs, and website pages coexist in one project — no siloing
- Modern design with dark mode, responsive layout, search — all built-in

### Negative
- React dependency adds bundle weight vs. lighter alternatives
- Learning curve for React/MDX if contributors are unfamiliar
- Build times will be slower than Hugo (but acceptable for a site this size)

### Migration Impact
- All Jekyll content (`.md` pages, `_posts/`, SCSS) must be rewritten for Docusaurus
- DocBook XML must be converted to Markdown (separate ADR)
- Dockerfile changes from Ruby/Jekyll to Node/Docusaurus
- Existing `_site/` committed output is no longer needed

## References
- [Docusaurus Docs](https://docusaurus.io/)
- [Docusaurus i18n](https://docusaurus.io/docs/i18n/introduction)
- [Docusaurus Versioning](https://docusaurus.io/docs/versioning)
- [Current Dockerfile](https://github.com/hydrogen-music/hydrogen-music/blob/main/Dockerfile)
