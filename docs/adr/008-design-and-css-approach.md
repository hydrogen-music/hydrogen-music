# ADR-008: Design and CSS Approach

**Status:** Accepted
**Date:** 2026-06-24
**Authors:** phil (theGreatWhiteShark)
**Tags:** design, css, ui, theme

## Context
The current site uses the Minima Jekyll theme with custom SCSS overrides. The design is dated:
- Single-column layout, max-width 1000px
- Basic color palette (#fdfdfd bg, #111 text, #2f71a2 brand)
- Helvetica Neue font stack
- Bootstrap class names in HTML but Bootstrap NOT loaded (broken)
- Font Awesome class names but Font Awesome NOT loaded (broken)
- No dark mode
- Basic responsive breakpoints (600px, 1000px)
- No modern CSS features (no CSS Grid, no custom properties)

The existing DocBook CSS (`res/docbook.css`, 1,954 lines) already has modern features: CSS custom properties, dark/light themes, responsive fonts (Noto Serif, Noto Sans, B612 Mono from Google Fonts), click-to-zoom figure viewer.

## Decision
Use **Docusaurus default theme with custom CSS overrides** for the website design.

### Design Approach
- **Base:** Docusaurus classic theme (already modern, responsive, dark mode)
- **Customization:** `src/css/custom.css` for brand-specific overrides
- **Color scheme:** Modernize the existing palette
  - Primary: `#2f71a2` (keep brand blue, modernize shade)
  - Dark mode: Native Docusaurus dark mode support
  - Accent colors: Derived from brand blue
- **Typography:** Modern font stack
  - Headings: Inter or system font stack
  - Body: System font stack (inherits from Docusaurus)
  - Code: JetBrains Mono or Fira Code
- **Layout:**
  - Website: Docusaurus page layout (centered, responsive)
  - Docs: Docusaurus doc layout (3-column: sidebar | content | TOC)
  - Blog: Docusaurus blog layout (card grid, tags, authors)

### Custom Components
- `VersionSwitcher`: Dropdown for doc version selection (extends Docusaurus navbar item)
- `VideoEmbed`: Reusable YouTube/video embed component (replaces current inline YouTube thumbnails)
- `ScreenshotGallery`: Image gallery with lightbox (for screenshots page)
- `FeatureCard`: Card component for features page

### CSS Architecture
```
src/
└── css/
    ├── custom.css              # Docusaurus theme overrides
    ├── variables.css           # CSS custom properties (colors, fonts)
    └── components/
        ├── version-switcher.css
        ├── video-embed.css
        └── screenshot-gallery.css
```

### Dark Mode
- Built-in Docusaurus dark mode toggle
- Color scheme defined via CSS custom properties
- `data-theme="dark"` / `data-theme="light"` on `<html>`
- Automatic system preference detection

### Responsive Design
- Mobile-first (Docusaurus default)
- Collapsible sidebar for docs on mobile
- Responsive navbar with hamburger menu
- Grid layouts for blog cards, feature cards, screenshots

## Consequences
- **Positive:** Docusaurus theme provides 90% of what's needed out of the box. Dark mode, responsive layout, modern typography — all built-in. Custom CSS is minimal. Consistent design across website, docs, and blog.
- **Negative:** Docusaurus theme has opinionated defaults that may need overriding. Less design freedom than starting from scratch. CSS-in-JS (Docusaurus uses styled-components under the hood) — custom CSS must target the right selectors.
- **Migration impact:** All existing SCSS is discarded. Existing HTML structure is replaced by Docusaurus layouts. Custom components replace hand-written HTML pages.

## References
- [Docusaurus Theme](https://docusaurus.io/docs/styling-layout)
- [Docusaurus CSS Custom Properties](https://docusaurus.io/docs/styling-layout#css-custom-properties)
- [Current CSS](../css/main.scss)
- [DocBook CSS](../extern/documentation/res/docbook.css)
- ADR-001 (Framework choice)
