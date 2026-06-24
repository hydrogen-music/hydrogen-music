# Implementation Plan: Hydrogen Music Website Migration

**Date:** 2026-06-24
**Status:** Draft
**Related ADRs:** [ADR-001](./adr/001-framework-docusaurus.md) through [ADR-008](./adr/008-design-and-css-approach.md)

---

## Overview

This plan migrates the Hydrogen Music website from Jekyll 3.7.3 to Docusaurus v3,
converting DocBook XML documentation to Markdown, adding first-class i18n support,
and modernizing the design. The migration is organized into 5 phases that can be
developed incrementally, with parallel execution where possible.

## Phase 1: Project Scaffold and Core Infrastructure

**Goal:** Working Docusaurus project with pnpm, Docker, and basic structure.

### Tasks

1. **Initialize Docusaurus project**
   - `pnpm create docusaurus hydrogen-music`
   - Configure `docusaurus.config.js` (site metadata, URL, GitHub repo, navbar, footer)
   - Set up `.npmrc` with `packageManager=pnpm@latest`
   - Create `.dockerignore` (exclude `node_modules/`, `build/`, `.docusaurus/`)
   - Remove Jekyll artifacts: `_config.yml`, `Gemfile`, `Gemfile.lock`, `_layouts/`, `_includes/`, `_sass/`, `_site/`

2. **Docker setup** (ADR-007)
   - Write multi-stage Dockerfile (build/dev/production targets)
   - Write `docker-compose.yml` for development with hot reload
   - Verify: `docker compose up` serves the site on port 3000

3. **Basic site structure**
   - Configure navbar (logo, nav links, language switcher placeholder, dark mode toggle)
   - Configure footer (GitHub link, site info, license)
   - Set up `src/css/custom.css` with brand colors and typography variables
   - Create directory structure: `docs/manual/`, `docs/tutorial/`, `blog/`, `src/pages/`, `static/images/`

4. **CI/CD pipeline**
   - GitHub Actions workflow: `pnpm install` → `pnpm build` → deploy to GitHub Pages
   - Docker Hub build workflow (optional)

### Deliverables
- [ ] Docusaurus project scaffolded and running locally via `pnpm start`
- [ ] Docker dev environment works (`docker compose up`)
- [ ] Basic site loads with navbar, footer, dark mode toggle
- [ ] GitHub Pages deployment pipeline
- [ ] Legacy Jekyll files removed

---

## Phase 2: Website Pages and Blog Migration

**Goal:** All existing website content migrated and functional.

### Tasks

1. **Static pages migration** (6 pages)
   - `features.md` → `src/pages/features.mdx` (with FeatureCard components)
   - `downloads.md` → `src/pages/downloads.mdx`
   - `faq.md` → `src/pages/faq.mdx`
   - `screenshots.md` → `src/pages/screenshots.mdx` (with ScreenshotGallery component)
   - `developer.md` → `src/pages/developer.mdx`
   - `contribution.md` → `src/pages/contribution.mdx`

2. **Homepage redesign**
   - Create `src/pages/index.tsx` with hero section, feature highlights, recent news
   - Replace blog post listing with modern card layout
   - Add call-to-action buttons (Download, Documentation, Contribute)

3. **Blog migration** (23 posts)
   - Migrate posts from `_posts/` to `blog/` directory
   - Convert frontmatter: Jekyll YAML → Docusaurus format
   - Preserve dates, tags, authors, excerpts
   - Configure blog settings (permalink, tags, authors list)
   - RSS feed: Docusaurus generates Atom feed automatically

4. **Assets migration**
   - Copy `images/` → `static/images/`
   - Copy `feeds/` → `static/feeds/`
   - Copy favicon → `static/favicon.png`
   - Update all image references in Markdown

5. **Custom components**
   - `FeatureCard.tsx`: Card component for features page
   - `VideoEmbed.tsx`: Reusable YouTube/video embed (replaces inline thumbnails)
   - `ScreenshotGallery.tsx`: Image gallery with lightbox

6. **Design polish**
   - Brand colors in `src/css/variables.css`
   - Dark mode styling for all pages
   - Responsive design verification (mobile, tablet, desktop)

### Deliverables
- [ ] All 6 static pages migrated and styled
- [ ] Homepage with modern design
- [ ] 23 blog posts migrated with correct metadata
- [ ] RSS feed working
- [ ] All images and assets accessible
- [ ] Custom components (FeatureCard, VideoEmbed, ScreenshotGallery)
- [ ] Dark mode works on all pages
- [ ] Responsive design verified

---

## Phase 3: Documentation Conversion (DocBook → Markdown)

**Goal:** All documentation converted from DocBook XML to Markdown/MDX.

### Tasks

1. **Conversion tooling**
   - Write `scripts/convert-docbook.mjs`
   - Parse DocBook XML (manual.docbook, tutorial.docbook)
   - Map DocBook elements to Markdown (see ADR-003 for mapping):
     - `<chapter>` → H1 (file boundary)
     - `<sect1>` → H2
     - `<sect2>` → H3
     - `<para>` → paragraph
     - `<screen>` / `<programlisting>` → fenced code block
     - `<itemizedlist>` / `<orderedlist>` → lists
     - `<emphasis>` → `*italic*` / `**bold**`
     - `<literal>` → `` `inline code` ``
     - `<imagedata>` → `![alt](path)`
     - `<note>`, `<tip>`, `<warning>` → MDX callout components
     - `<xref>`, `<link>` → Markdown links
   - Split monolithic DocBook into per-chapter files

2. **Manual conversion** (~9,184 lines → ~22 chapter files)
   - Convert `manual.docbook` → `docs/manual/` (per-chapter files)
   - 4 parts, 22 chapters, 66 sections → organized file structure
   - Preserve image references (update paths to `../../static/images/`)
   - Validate: all internal links work, all images load

3. **Tutorial conversion** (321 lines → ~6 section files)
   - Convert `tutorial.docbook` → `docs/tutorial/`
   - 6 sections → 6 Markdown files
   - Migrate tutorial images to `static/images/tutorial/`

4. **Image migration** (~150+ images)
   - Copy `extern/documentation/img/` → `static/images/manual/`
   - Copy `extern/documentation/img_tutorial/` → `static/images/tutorial/`
   - Language-specific images: `static/images/manual/en/`, `static/images/manual/fr/`
   - Update all image paths in Markdown
   - Deduplicate and clean up (remove unused, outdated translations)

5. **Sidebar configuration**
   - `sidebars.js`: Manual sidebar (grouped by parts/chapters)
   - `sidebars.js`: Tutorial sidebar
   - Custom sidebar categories with collapsed/expanded state

6. **Validation**
   - Verify all 22 manual chapters render correctly
   - Verify all 6 tutorial sections render correctly
   - Check all ~137 manual screenshots load
   - Check all ~13 tutorial screenshots load
   - Test internal cross-references and navigation

### Deliverables
- [ ] Conversion script working and tested
- [ ] Manual converted to ~22+ Markdown files
- [ ] Tutorial converted to ~6 Markdown files
- [ ] All ~150 images migrated and accessible
- [ ] Sidebar navigation configured
- [ ] All content renders correctly in Docusaurus
- [ ] Cross-references and internal links work

---

## Phase 4: i18n and Documentation Versioning

**Goal:** Multi-language support and documentation versioning working.

### Tasks

1. **i18n setup** (ADR-004)
   - Enable i18n in `docusaurus.config.js`
   - Configure locales: `en` (default), `fr`, `it`
   - Run `pnpm run write-translations --locale fr` and `--locale it`
   - Configure language switcher in navbar
   - Set up locale detection and URL prefixing

2. **Website translation**
   - Translate static pages to French and Italian
   - `i18n/fr/docusaurus-plugin-content-pages/features.mdx`
   - `i18n/it/docusaurus-plugin-content-pages/features.mdx`
   - Translate UI strings: `i18n/fr/code.json`, `i18n/it/code.json`
   - Blog posts: Translate key posts (release announcements)

3. **Documentation translation**
   - Convert existing PO translations to Markdown:
     - `tutorial_fr.po` → `i18n/fr/docusaurus-plugin-content-docs/current/tutorial/`
     - `tutorial_it.po` → `i18n/it/docusaurus-plugin-content-docs/current/tutorial/`
   - Manual translations: Start fresh or revive from archived PO files
   - Configure fallback: untranslated pages show English

4. **Versioning setup** (ADR-005)
   - Create version 1.2: `pnpm run docusaurus docs:version 1.2`
   - Create version 1.1: Convert legacy manual, create version
   - Configure version metadata: `versions/1.1.json`, `versions/1.2.json`
   - Version-specific sidebars: `versioned_sidebars/`
   - Version switcher component in navbar

5. **Version × i18n matrix**
   - Verify: `/fr/docs/manual/1.2/` works
   - Verify: `/it/docs/tutorial/` works (version-agnostic)
   - Verify fallback chain: FR page → EN page → 404
   - Test version switcher across languages

6. **Translation workflow documentation**
   - Document translation process for contributors
   - Set up Crowdin or Weblate integration (optional, deferred)
   - Create CONTRIBUTING guide for translators

### Deliverables
- [ ] i18n enabled with EN/FR/IT locales
- [ ] Language switcher in navbar
- [ ] Static pages translated to FR/IT
- [ ] Tutorial translated to FR/IT
- [ ] Documentation versioned (1.1, 1.2)
- [ ] Version switcher working
- [ ] Version × i18n matrix verified
- [ ] Translation fallback working
- [ ] Contributor guide for translators

---

## Phase 5: Standalone Export, CMake Integration, and Final Polish

**Goal:** Standalone HTML export for app bundling, CMake integration, final polish.

### Tasks

1. **Standalone export script** (ADR-006)
   - Write `scripts/export-standalone.mjs`
   - CLI: `--version=1.2 --lang=en --output=standalone/manual/`
   - Copy docs subfolder from `build/` to standalone output
   - Copy shared assets (CSS, JS, images)
   - Rewrite absolute paths (`/docs/...`) to relative paths (`./...`)
   - Generate `index.html` entry point
   - Test: Open `file:///standalone/manual/index.html` — everything loads

2. **Multi-language export**
   - Export EN manual: `pnpm run export-standalone --version=1.2 --lang=en`
   - Export FR tutorial: `pnpm run export-standalone --version=1.2 --lang=fr --doc=tutorial`
   - Export IT tutorial: `pnpm run export-standalone --version=1.2 --lang=it --doc=tutorial`
   - Verify all language exports work standalone (file:// protocol)

3. **CMakeLists.txt update**
   - Update `extern/documentation/CMakeLists.txt` for new structure
   - Install standalone export output instead of DocBook HTML
   - Handle MINGW vs Unix paths
   - Test: CMake install puts docs in correct location on all platforms

4. **Design polish**
   - Refine color scheme and typography
   - Custom favicon and OG images
   - Search: Configure Algolia DocSearch or free alternative (e.g., TypeSense)
   - Performance: Audit Lighthouse scores, optimize images
   - Accessibility: WCAG 2.1 AA compliance check

5. **Documentation of the migration**
   - Update `README.md` with new build instructions (pnpm, Docker)
   - Document translation workflow
   - Document standalone export process
   - Document contribution guidelines

6. **Legacy cleanup**
   - Remove remaining Jekyll files (if not done in Phase 1)
   - Remove `_site/` (no longer committed)
   - Remove `documentation/` (replaced by Docusaurus build)
   - Update `.gitignore` for Docusaurus (`build/`, `.docusaurus/`, `node_modules/`)
   - Keep `extern/documentation/` as reference/archive (or move to `archive/`)

### Deliverables
- [ ] Standalone export script working
- [ ] EN/FR/IT standalone exports verified (file:// protocol)
- [ ] CMakeLists.txt updated for new doc structure
- [ ] Design polished (colors, typography, search)
- [ ] README.md updated with new instructions
- [ ] Legacy Jekyll files archived/removed
- [ ] Lighthouse scores: Performance > 90, Accessibility > 90
- [ ] `.gitignore` updated for Docusaurus

---

## Phase Dependencies

```
Phase 1: Scaffold
    ↓
Phase 2: Website + Blog    Phase 3: DocBook → Markdown
    ↓                            ↓
Phase 4: i18n + Versioning
    ↓
Phase 5: Standalone Export + Polish
```

- **Phase 2 and 3 can run in parallel** (website pages and docs are independent)
- **Phase 4 depends on both 2 and 3** (needs content to translate and version)
- **Phase 5 depends on all** (exports final build output)

## Estimated Effort

| Phase | Effort | Notes |
|-------|--------|-------|
| 1. Scaffold | 1–2 days | Docusaurus setup, Docker, CI, cleanup |
| 2. Website + Blog | 2–3 days | 6 pages + 23 posts, custom components, design |
| 3. DocBook → Markdown | 3–5 days | Conversion script + ~28 files + ~150 images + validation |
| 4. i18n + Versioning | 3–4 days | Translation setup, versioning, matrix testing |
| 5. Export + Polish | 2–3 days | Export script, CMake, cleanup, Lighthouse |
| **Total** | **11–17 days** | Depends on parallelization and translation effort |

## Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| DocBook conversion loses content/formatting | High | Manual review of converted files; keep DocBook as reference during transition |
| Docusaurus standalone export breaks with updates | Medium | Pin Docusaurus version; test export after each upgrade |
| Translation quality for revived PO files | Medium | Professional review or community validation; mark as "community translated" |
| CMake integration issues on Windows/MINGW | Low | Test on all platforms; keep fallback install rules |
| Build times too slow | Low | Docusaurus builds are fast for this content size (~10s) |
| Breaking existing hydrogen-music.org links | Medium | Set up URL redirects for old Jekyll permalinks |

## Success Criteria

- [ ] Site deploys to hydrogen-music.org via GitHub Pages
- [ ] Docker build produces working production image (< 30MB)
- [ ] All existing content accessible in new site
- [ ] Documentation available in EN/FR/IT
- [ ] Version switcher works for manual (1.1, 1.2)
- [ ] Language switcher works across all content
- [ ] Standalone HTML export works for app bundling (file:// protocol)
- [ ] CMake install puts docs in correct location on Linux and Windows
- [ ] Dark mode works on all pages
- [ ] Lighthouse scores > 90 on all metrics
- [ ] `pnpm` is the only package manager used
- [ ] No Jekyll artifacts remain in the repo

## Next Steps

1. **Approve this plan** — Review and adjust phases, timeline, scope
2. **Begin Phase 1** — Scaffold Docusaurus project, remove Jekyll
3. **Parallel execution** — Phases 2 and 3 can proceed simultaneously
4. **Integration** — Phase 4 combines website, docs, i18n, versioning
5. **Release** — Phase 5 finalizes, exports, and deploys
