# ADR-003: Documentation Format — Markdown from DocBook

**Status:** Accepted
**Date:** 2026-06-24
**Authors:** phil (theGreatWhiteShark)
**Tags:** documentation, format, migration

## Context
The current documentation is maintained in DocBook XML (DocBook 4.5 for manual, 4.0 for tutorial). The build toolchain uses itstool, xmlto, xmllint, msgfmt, msgmerge — a complex pipeline requiring multiple system packages (itstool, gettext, xmlto, libxml2-utils). The DocBook README explicitly states: "The DocBook-based toolchain will be used for the 1.2.X releases of Hydrogen and will be ported to a Markdown-based one starting with 2.0.0."

The manual is ~9,184 lines of DocBook XML covering 4 parts, 22 chapters, 66 sections, 39 subsections, with ~137 screenshots. The tutorial is ~321 lines with 6 sections and 13 screenshots.

## Decision
Convert all DocBook XML documentation to **Markdown (with MDX for advanced features)** as the source format. The DocBook toolchain is retired.

## Alternatives Considered
- **Keep DocBook**: Maintains current toolchain, but contradicts stated project direction. Complex toolchain is a barrier to contributors.
- **AsciiDoc**: Richer than Markdown, but less universal tooling support. Smaller ecosystem.
- **reStructuredText**: Python/Sphinx ecosystem, but not a fit for a Node.js/Docusaurus project.
- **Markdown/MDX** (Selected): Universal format, lowest barrier to contributors, first-class Docusaurus support, MDX allows React components for advanced layouts.

### Conversion Approach
1. Parse DocBook XML structure (chapters → H1, sections → H2, subsections → H3)
2. Map DocBook elements to Markdown:
   - `<para>` → paragraph
   - `<screen>` → fenced code block
   - `<itemizedlist>` → unordered list
   - `<orderedlist>` → ordered list
   - `<programlisting>` → fenced code block with language
   - `<emphasis>` → `*italic*` or `**bold**`
   - `<literal>` → `` `inline code` ``
   - `<imagedata>` → `![alt](path)`
   - `<note>`, `<tip>`, `<warning>` → MDX callout components
   - `<xref>`, `<link>` → Markdown links
3. Split monolithic DocBook into per-chapter Markdown files
4. Migrate images to `static/images/` directory
5. Preserve translation strings for gettext/PO workflow

## Consequences
- **Positive:** Lower barrier to contributing docs, simpler toolchain, universal format, better diff/merge behavior, native Docusaurus support
- **Negative:** One-time conversion effort (~9K lines of DocBook), some DocBook features (cross-references, auto-generated TOC) need MDX component equivalents
- **Translation impact:** PO file workflow changes — Docusaurus i18n handles content translation; UI strings use `docusaurus write-translations`

## References
- [DocBook to Markdown conversion](https://www.oxygenxml.com/doc/ug-oxygen/topics/converting-docbook-to-markdown.html)
- [Docusaurus MDX](https://docusaurus.io/docs/markdown-features/mdx)
- [Current DocBook README](../extern/documentation/README.md)
- ADR-001 (Framework choice)
