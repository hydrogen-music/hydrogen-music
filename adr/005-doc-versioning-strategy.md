# ADR-005: Documentation Versioning Strategy

**Status:** Accepted
**Date:** 2026-06-24
**Authors:** phil (theGreatWhiteShark)
**Tags:** versioning, documentation, architecture

## Context
Hydrogen documentation must support multiple versions simultaneously. Currently:
- Hydrogen 1.1 manual (2021) — legacy
- Hydrogen 1.2.6 manual (2025) — current
- Tutorial (may need version-specific adjustments)

The tutorial is not strictly version-agnostic — it may reference version-specific UI elements,
features, or workflows that differ between Hydrogen releases. Both the manual and the tutorial
must be versioned.

Users need to switch between documentation versions. Future releases will add more versions (2.0.0+, etc.).

## Decision
Use **Docusaurus built-in versioning** for documentation.

### Versioning Model
- Docusaurus versioning: `docusaurus docs:version <label>`
- Version labels: `1.1`, `1.2`, `current` (for development docs)
- URL structure: `/docs/manual/1.2/chapter/`, `/docs/manual/1.1/chapter/`
- Sidebar: Per-version sidebar configuration in `sidebars.js`
- Version switcher: Dropdown in header or sidebar

### Version Organization
All documentation (manual + tutorial) is versioned. Docusaurus's `docs:version` command
duplicates the entire `docs/` tree, so both manual and tutorial are versioned together.
```
docs/
├── manual/
│   ├── intro.md
│   ├── download.md
│   ├── build.md
│   └── ... (current development docs)
├── tutorial/
│   ├── intro.md
│   ├── first-verse.md
│   └── ... (current development docs)
versions/
├── 1.1.json              # Version metadata
├── 1.2.json              # Version metadata
└── current.json          # Current development version
versioned_docs/
├── version-1.1/
│   ├── manual/
│   │   ├── download.md
│   │   └── ...
│   └── tutorial/
│       ├── intro.md
│       └── ...
├── version-1.2/
│   ├── manual/
│   │   └── ...
│   └── tutorial/
│       └── ...
└── version-current/
    ├── manual/
    │   └── ...
    └── tutorial/
        └── ...
versioned_sidebars/
├── version-1.1/
│   ├── manual-sidebars.json
│   └── tutorial-sidebars.json
├── version-1.2/
│   ├── manual-sidebars.json
│   └── tutorial-sidebars.json
└── version-current/
    ├── manual-sidebars.json
    └── tutorial-sidebars.json
```

### Version Switcher UI
- Dropdown in the documentation header/sidebar
- Shows available versions: "1.2 (current)", "1.1 (legacy)"
- Persists selection via `localStorage`
- i18n-aware: `/fr/docs/manual/1.2/...`

### Lifecycle
1. New release: `docusaurus docs:version 1.3`
2. Version metadata: `versions/1.3.json` with label, banner, etc.
3. Old versions: Archived but accessible. Can be deprecated with banner.
4. Cleanup: Old versions removed when no longer needed (e.g., EOL releases).

## Consequences
- **Positive:** Versioning is a first-class feature. `docs:version` command handles the mechanical work. Each version has its own sidebar. i18n works with versioning.
- **Negative:** `docusaurus docs:version` duplicates all docs for each version. Large doc trees grow quickly.
- **Disk impact:** Each version duplicates the full doc tree. With 2 versions × 3 languages, that's 6× the content. Acceptable for this project size.

## References
- [Docusaurus Versioning](https://docusaurus.io/docs/versioning)
- ADR-001 (Framework choice)
- ADR-004 (i18n approach)
