# Hydrogen Music Website

This repository holds the website of the [Hydrogen Drum Machine](https://hydrogen-music.org), built with [Docusaurus v3](https://docusaurus.io/).

🌐 **Live site:** https://hydrogen-music.org

## Quick Start

### Prerequisites

- Node.js 22+
- [pnpm](https://pnpm.io/) (enforced via `.npmrc`)

### Local development

```bash
pnpm install
pnpm start
```

The site will be served at http://localhost:3000 with hot reload.

### Docker development

```bash
docker compose up
```

The site will be served at http://localhost:3000.

### Build for production

```bash
pnpm build
```

The production build is output to the `build/` directory.

### Docker production image

```bash
docker build -t hydrogen-music .
docker run --rm -p 80:80 hydrogen-music
```

The production image uses nginx and is optimized for small size.

## Project structure

```
├── docs/                    # Documentation (manual, tutorial)
│   ├── manual/              # Hydrogen manual (converted from DocBook)
│   └── tutorial/            # Hydrogen tutorial
├── blog/                    # Blog posts
├── src/
│   ├── pages/               # Static pages (features, downloads, FAQ, etc.)
│   ├── components/          # Custom React components
│   └── css/                 # Custom CSS
├── static/                  # Static assets (images, favicons)
├── i18n/                    # Translations (FR, IT)
├── scripts/                 # Conversion and export scripts
├── docusaurus.config.ts     # Docusaurus configuration
└── sidebars.ts              # Sidebar configuration
```

## Documentation

### Converting DocBook to Markdown

The manual and tutorial were originally written in DocBook XML. The conversion script handles the transformation:

```bash
node scripts/convert-docbook-html.mjs
```

### Standalone HTML export

Export documentation as standalone HTML for bundling with the Hydrogen app:

```bash
pnpm run export-standalone --version=1.2 --lang=en --type=manual
pnpm run export-standalone --version=1.2 --lang=fr --type=tutorial
```

Output goes to the `standalone/` directory.

## Translations

The site supports English, French, and Italian. To add or update translations:

1. Static pages: edit files in `i18n/{locale}/docusaurus-plugin-content-pages/`
2. Documentation: edit files in `i18n/{locale}/docusaurus-plugin-content-docs/current/`
3. UI strings: edit files in `i18n/{locale}/code.json`

Run `pnpm run write-translations --locale fr` to extract new translatable strings.

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

## Contributing

- For documentation changes, edit files in the `docs/` directory
- For website changes, edit files in `src/pages/` or `blog/`
- Please create a pull request for any changes

The source code of Hydrogen itself is hosted at [GitHub](https://github.com/hydrogen-music/hydrogen).

## License

The Hydrogen website content is licensed under the same terms as the Hydrogen project (GPL v2+).
