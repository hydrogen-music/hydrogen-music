# ADR-004: i18n Approach — Docusaurus Built-in Internationalization

**Status:** Accepted
**Date:** 2026-06-24
**Authors:** phil (theGreatWhiteShark)
**Tags:** i18n, localization, translation

## Context
The Hydrogen documentation and website need multi-language support. Currently:
- Manual: English only (active), 5 outdated translations (CA, DE, ES, FR, IT, NL) archived
- Tutorial: English, French, Italian (active)
- Website: English only

The current i18n toolchain uses gettext PO files with itstool to merge translations into DocBook XML. This requires specialized tools (itstool, msgfmt, msgmerge) that are not portable across platforms.

## Decision
Use **Docusaurus built-in i18n** for all internationalization.

### Docusaurus i18n Model
- Per-locale content folders: `i18n/fr/docusaurus-plugin-content-docs/`, `i18n/it/...`
- Automatic URL prefixing: `/fr/docs/...`, `/it/docs/...`
- Built-in language switcher UI component
- Partial translation support — untranslated pages fall back to English
- `docusaurus write-translations` CLI extracts UI strings to `code.json`
- Crowdin/Weblate integration for community translation workflow

### Supported Languages (initial)
- English (en) — default, source of truth
- French (fr) — revive from archived translations
- Italian (it) — revive from archived translations

### Translation Workflow
1. Content authors write/edit English Markdown in `docs/`
2. `docusaurus write-translations` extracts UI strings to `i18n/*/code.json`
3. Translators work on `i18n/*/` content copies and `code.json`
4. Community translators can use Crowdin/Weblate for PO/JSON editing
5. Untranslated content automatically falls back to English

### UI String Translation
- `docusaurus write-translations --locale fr` extracts all translatable UI strings
- `i18n/fr/code.json` contains key-value pairs for navigation, buttons, labels
- Translators edit `code.json` directly or via Crowdin

### Content Translation
- Full Markdown file copies in `i18n/fr/docusaurus-plugin-content-docs/current/`
- Translators work on complete files, not sentence-by-sentence
- Docusaurus handles fallback: if FR page missing, shows EN version

## Consequences
- **Positive:** No specialized translation tools needed — translators edit Markdown/JSON. Partial translations work gracefully. Language switcher is built-in. Community can use Crowdin/Weblate.
- **Negative:** Full-file translation model means merge conflicts if source and translation change simultaneously. Larger repo with duplicate content files.
- **Migration impact:** Existing PO files (tutorial_fr.po, tutorial_it.po) need to be converted to Markdown translations. Archived manual translations need revival or fresh translation.

## References
- [Docusaurus i18n docs](https://docusaurus.io/docs/i18n/introduction)
- [Docusaurus Crowdin integration](https://docusaurus.io/docs/i18n/crowdin)
- ADR-001 (Framework choice)
