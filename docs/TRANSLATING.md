---
sidebar_position: 99
---

# Translating Hydrogen

This guide explains how to translate the Hydrogen website and documentation into your language.

## What can be translated

The Hydrogen website supports multiple languages. There are three types of content you can translate:

1. **Static pages** — Features, Downloads, FAQ, Screenshots, Developer Zone, Contribution
2. **Documentation** — The manual and tutorial
3. **UI strings** — Navigation, buttons, search, footer text

## Adding a new language

If your language is not yet supported:

1. Add the locale to `docusaurus.config.ts` in the `i18n.locales` array
2. Run: `pnpm run write-translations --locale <code>`
3. This creates the directory structure under `i18n/<code>/`

## Translating static pages

Static page translations live in:

```
i18n/<locale>/docusaurus-plugin-content-pages/
  features.mdx
  downloads.mdx
  faq.mdx
  screenshots.mdx
  devzone.mdx
  contribution.mdx
```

Copy the English source from `src/pages/` and translate the text content. Keep all:

- Frontmatter slugs unchanged
- Component imports (e.g., `import FeatureCard from '@site/src/components/FeatureCard'`)
- URLs and file paths
- Anchor link targets (`#...`)

## Translating documentation

Documentation translations live in:

```
i18n/<locale>/docusaurus-plugin-content-docs/current/
  manual/
  tutorial/
```

The structure mirrors `docs/manual/` and `docs/tutorial/`. Translate each `.md` file and place it in the corresponding location.

For versioned docs, use:

```
i18n/<locale>/docusaurus-plugin-content-docs/version-1.2/
```

## Translating UI strings

UI strings are in `i18n/<locale>/code.json`. This file contains all translatable strings used by Docusaurus (navbar, search, blog, footer, etc.).

To extract new strings after updating Docusaurus:

```bash
pnpm run write-translations --locale <locale>
```

## Testing your translations

```bash
pnpm start --locale <locale>
```

Visit `http://localhost:3000/<locale>/` to preview your translations.

## Building for production

```bash
pnpm build
```

This builds all configured locales. Check that your locale appears in the output.

## Submission

Create a pull request with your translations. Include:

- Which pages/docs you translated
- Your name and language for the contributors list

## Tips

- Keep URLs, file paths, and code blocks in English
- Translate anchor link display text but not the `#target`
- Use `&lt;` and `&gt;` instead of `<` and `>` when referring to technical terms that might be parsed as JSX (e.g., &lt;JACK&gt;)
- Test your translations with `pnpm build` to catch MDX parsing issues
