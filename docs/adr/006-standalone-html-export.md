# ADR-006: Standalone HTML Export for Application Bundling

**Status:** Accepted
**Date:** 2026-06-24
**Authors:** phil (theGreatWhiteShark)
**Tags:** export, bundling, cmake, standalone

## Context
The Hydrogen application bundles documentation alongside the binary. The current CMakeLists.txt installs:
- `manual_en.html` (single-page HTML entry point)
- `tutorial_en.html`, `tutorial_fr.html`, `tutorial_it.html`
- `img/` directory (screenshots, PNG/SVG)
- `img_tutorial/` directory
- `res/docbook.css`, `res/docbook.js`, `res/LICENSE`

The documentation is served as a subfolder tree (`index.html` + resources). The application opens the HTML in a browser, which loads CSS/JS/images from relative paths.

## Decision
Use a **post-build export script** to generate standalone documentation bundles from Docusaurus build output.

### Export Pipeline
```
pnpm build                                    # Full Docusaurus build → build/
pnpm run export-standalone --version=1.2 --lang=en --output=standalone/manual/
```

### Export Script Design
```javascript
// scripts/export-standalone.mjs
// Usage: node scripts/export-standalone.mjs --version=1.2 --lang=en --output=standalone/manual/

// 1. Copy docs subfolder from build/ output
//    build/docs/manual/1.2/ → standalone/manual/
//
// 2. Copy shared assets (CSS, JS, images)
//    build/assets/ → standalone/assets/
//
// 3. Rewrite relative paths in HTML to work from standalone root
//    (Docusaurus build output uses /docs/... paths, need relative ./... paths)
//
// 4. Generate index.html entry point that mirrors current manual_en.html
//
// 5. Copy image assets referenced by documentation
//    static/images/ → standalone/images/
```

### Path Rewriting
Docusaurus build output uses absolute paths (`/docs/manual/1.2/chapter/`). The export script rewrites these to relative paths (`./chapter/`) so the standalone bundle works from a file:// URL.

### CMakeLists.txt Update
```cmake
# New install rules for Docusaurus-generated docs
INSTALL( FILES ${CMAKE_SOURCE_DIR}/data/doc/manual/index.html
  DESTINATION ${H2_SYS_PATH}/data/doc/manual )
INSTALL( DIRECTORY ${CMAKE_SOURCE_DIR}/data/doc/manual/assets
  DESTINATION ${H2_SYS_PATH}/data/doc/manual )
INSTALL( DIRECTORY ${CMAKE_SOURCE_DIR}/data/doc/manual/images
  DESTINATION ${H2_SYS_PATH}/data/doc/manual )
# Similar for tutorial
```

### Multi-language Export
```bash
pnpm run export-standalone --version=1.2 --lang=en --output=standalone/manual_en/
pnpm run export-standalone --version=1.2 --lang=fr --output=standalone/manual_fr/
pnpm run export-standalone --version=1.2 --lang=it --output=standalone/manual_it/
```

## Consequences
- **Positive:** Standalone export is a mechanical post-build step. No framework changes needed. Output structure matches current CMake expectations. Multi-language export is just repeated runs.
- **Negative:** Path rewriting script must be maintained. If Docusaurus changes its output structure, the script needs updates. Build output is larger than hand-optimized DocBook HTML (but still reasonable).
- **Build pipeline:** CI must run `pnpm build` then `pnpm run export-standalone` before committing standalone output. Or standalone is generated at release time.

## References
- [Current CMakeLists.txt](../extern/documentation/CMakeLists.txt)
- ADR-001 (Framework choice)
- ADR-005 (Versioning strategy)
