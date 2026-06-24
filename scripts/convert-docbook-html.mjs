#!/usr/bin/env node
/**
 * Convert DocBook-generated HTML to Docusaurus Markdown (v2)
 * 
 * Usage: node scripts/convert-docbook-html.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ─── Configuration ───────────────────────────────────────────────────────────

const MANUAL_HTML_DIR = path.join(ROOT, 'documentation/manual/manual_en_chunked');
const MANUAL_OUT_DIR = path.join(ROOT, 'docs/manual');
const MANUAL_IMG_DIR = path.join(ROOT, 'documentation/manual/img');
const TUTORIAL_HTML = path.join(ROOT, 'documentation/tutorial/tutorial_en.html');
const TUTORIAL_OUT_DIR = path.join(ROOT, 'docs/tutorial');
const TUTORIAL_IMG_DIR = path.join(ROOT, 'documentation/tutorial/img_tutorial');
const STATIC_IMG_DIR = path.join(ROOT, 'static/img');
const STATIC_DOCS_IMG_DIR = path.join(STATIC_IMG_DIR, 'docs');

// ─── HTML Utilities ──────────────────────────────────────────────────────────

function stripHtmlTags(html) {
  return html.replace(/<[^>]+>/g, '');
}

function unescapeHtml(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&laquo;/g, '«')
    .replace(/&raquo;/g, '»')
    .replace(/&bull;/g, '•')
    .replace(/&hellip;/g, '…')
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8218;/g, "'")
    .replace(/&#160;/g, ' ')
    .replace(/&#183;/g, '•')
    .replace(/&#169;/g, '©')
    .replace(/&#174;/g, '®')
    .replace(/&#153;/g, '™')
    .replace(/&#8482;/g, '™')
    .replace(/&#8364;/g, '€')
    .replace(/&#8194;/g, ' ')
    .replace(/&#8195;/g, ' ')
    .replace(/&#8197;/g, ' ')
    .replace(/&#x201c;/g, '"')
    .replace(/&#x201d;/g, '"')
    .replace(/&#x2018;/g, "'")
    .replace(/&#x2019;/g, "'")
    .replace(/&#x2013;/g, '–')
    .replace(/&#x2014;/g, '—')
    .replace(/&#x2026;/g, '…')
    .replace(/&#x00A0;/g, ' ');
}

function extractContent(html) {
  let content = html.replace(/<div class="navheader">[\s\S]*?<\/div>/g, '');
  content = content.replace(/<div class="navfooter">[\s\S]*?<\/div>/g, '');
  content = content.replace(/<head>[\s\S]*?<\/head>/g, '');
  content = content.replace(/<\/?html>/g, '');
  content = content.replace(/<body[^>]*>/g, '');
  content = content.replace(/<\/body>/g, '');
  content = content.replace(/<meta[^>]*>/g, '');
  content = content.replace(/<link[^>]*>/g, '');
  content = content.replace(/<title>[\s\S]*?<\/title>/g, '');
  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/g, '');
  return content;
}

function extractTitle(html) {
  const match = html.match(/<title>([^<]+)<\/title>/);
  return match ? match[1] : '';
}

// ─── Conversion Pipeline ─────────────────────────────────────────────────────

function convert(html, isGlossary = false, isTutorial = false) {
  let content = extractContent(html);

  // 1. Remove nav, TOC, titlepage wrappers
  content = content.replace(/<div class="toc">[\s\S]*?<\/div>/g, '');
  content = content.replace(/<div class="titlepage">[\s\S]*?<\/div>/g, '');
  content = content.replace(/<div class="abstract">[\s\S]*?<\/div>/g, (match) => {
    // Keep abstract content but strip wrapper
    let inner = match.replace(/<\/?div class="abstract">/g, '');
    inner = inner.replace(/<p class="title"><b>Abstract<\/b><\/p>/g, '');
    return inner;
  });

  // 2. Convert admonitions (note, tip, warning, caution, important)
  content = convertAdmonitions(content);

  // 3. Convert figures
  content = convertFigures(content, isTutorial);

  // 4. Convert preformatted code blocks
  content = convertPreformatted(content);

  // 5. Convert tables
  content = convertTables(content);

  // 6. Convert lists
  content = convertLists(content);

  // 7. Convert headings
  content = convertHeadings(content, isGlossary, isTutorial);

  // 8. Convert paragraphs
  content = convertParagraphs(content);

  // 9. If glossary, handle dt/dd
  if (isGlossary) {
    content = convertGlossary(content);
  }

  // 10. Convert inline elements
  content = convertInline(content);

  // 11. Strip remaining HTML tags
  content = stripHtmlTags(content);

  // 12. Unescape
  content = unescapeHtml(content);

  // 13. Clean up
  content = cleanMarkdown(content);

  return content;
}

function convertAdmonitions(html) {
  // Match: <div class="note" ...><table...><tr><td>img</td><th>Note</th></tr><tr><td><p>content</p></td></tr></table></div>
  const admonitionTypes = ['note', 'tip', 'warning', 'caution', 'important'];
  const admonitionMap = { note: 'note', tip: 'tip', warning: 'warning', caution: 'caution', important: 'info' };

  for (const type of admonitionTypes) {
    const mdxType = admonitionMap[type];
    // Match the full admonition div with its table structure
    const regex = new RegExp(`<div class="${type}"[^>]*>[\\s\\S]*?<th[^>]*>${type.charAt(0).toUpperCase() + type.slice(1)}<\\/th>[\\s\\S]*?<td[^>]*>([\\s\\S]*?)<\\/td>[\\s\\S]*?<\\/div>`, 'gi');
    
    html = html.replace(regex, (match, inner) => {
      // Extract all <p> content from the td
      let paragraphs = inner.match(/<p>([\s\S]*?)<\/p>/gi) || [];
      let text = paragraphs.map(p => {
        p = convertInline(p);
        p = stripHtmlTags(p);
        p = unescapeHtml(p).trim();
        return p;
      }).join('\n\n');
      
      if (!text) {
        // Fallback: strip all HTML
        text = stripHtmlTags(inner).trim();
        text = unescapeHtml(text).replace(/\n\s*/g, ' ').trim();
      }
      
      return `\n:::${mdxType}\n${text}\n:::\n`;
    });
  }

  return html;
}

function convertFigures(html, isTutorial = false) {
  // Numbered figures: <div class="figure">...<p class="title"><b>Figure X.Y. Title</b></p>...<img src="..." alt="...">...</div>
  html = html.replace(/<div class="figure">[\s\S]*?<p class="title"><b>([^<]+)<\/b><\/p>[\s\S]*?<img src="([^"]+)" alt="([^"]*)">[\s\S]*?<\/div>/gi, (match, title, src, alt) => {
    const cleanSrc = src.replace('../img/', '');
    return `\n![${title}](/img/docs/${cleanSrc})\n`;
  });

  // Informal figures
  html = html.replace(/<div class="informalfigure">[\s\S]*?<img src="([^"]+)" alt="([^"]*)">[\s\S]*?<\/div>/gi, (match, src, alt) => {
    const cleanSrc = src.replace('../img/', '');
    return `\n![${alt}](/img/docs/${cleanSrc})\n`;
  });

  // Tutorial screenshots with caption
  html = html.replace(/<div class="screenshot">[\s\S]*?<img src="([^"]+)"[^>]*>[\s\S]*?<p>\s*<span class="bold"><strong>([^<]+)<\/strong><\/span>\s*([^<]*)\s*<\/p>[\s\S]*?<\/div>/gi, (match, src, figNum, title) => {
    const cleanSrc = src.replace('img_tutorial/', '');
    return `\n![${figNum}${title}](/img/docs/tutorial/${cleanSrc})\n`;
  });

  // Simple screenshots
  html = html.replace(/<div class="screenshot">[\s\S]*?<img src="([^"]+)"[^>]*>[\s\S]*?<\/div>/gi, (match, src) => {
    const cleanSrc = src.replace('img_tutorial/', '').replace('../img/', '');
    return `\n![](/img/docs/${cleanSrc})\n`;
  });

  return html;
}

function convertPreformatted(html) {
  // Preformatted screens → code blocks
  html = html.replace(/<pre[^>]*class="[^"]*screen[^"]*"[^>]*>([\s\S]*?)<\/pre>/gi, (match, content) => {
    let inner = convertInline(content);
    inner = stripHtmlTags(inner);
    inner = unescapeHtml(inner).trim();
    return `\n\`\`\`\n${inner}\n\`\`\`\n`;
  });

  html = html.replace(/<pre>([\s\S]*?)<\/pre>/gi, (match, content) => {
    let inner = convertInline(content);
    inner = stripHtmlTags(inner);
    inner = unescapeHtml(inner).trim();
    return `\n\`\`\`\n${inner}\n\`\`\`\n`;
  });

  return html;
}

function convertTables(html) {
  html = html.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (match, tableContent) => {
    const rows = tableContent.match(/<tr[^>]*>([\s\S]*?)<\/tr>/gi);
    if (!rows || rows.length === 0) return '';

    let markdownRows = [];
    let firstRow = true;

    for (const row of rows) {
      const cells = row.match(/<(th|td)[^>]*>([\s\S]*?)<\/(th|td)>/gi);
      if (!cells || cells.length === 0) continue;

      const cellTexts = cells.map(cell => {
        let inner = convertInline(cell);
        inner = stripHtmlTags(inner);
        inner = unescapeHtml(inner).trim();
        inner = inner.replace(/\n\s*/g, ' ').trim();
        // Escape pipe characters in cells
        inner = inner.replace(/\|/g, '\\|');
        return inner;
      });

      markdownRows.push('| ' + cellTexts.join(' | ') + ' |');

      if (firstRow) {
        markdownRows.push('| ' + cellTexts.map(() => '---').join(' | ') + ' |');
        firstRow = false;
      }
    }

    return '\n' + markdownRows.join('\n') + '\n';
  });

  return html;
}

function convertLists(html) {
  // Unordered lists
  html = html.replace(/<(ul)[^>]*class="[^"]*itemizedlist[^"]*"[^>]*>([\s\S]*?)<\/\1>/gi, (match, tag, content) => {
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (!items) return match;

    let lines = [];
    for (const item of items) {
      let inner = item.replace(/<\/?li[^>]*>/g, '');
      inner = convertInline(inner);
      inner = stripHtmlTags(inner);
      inner = unescapeHtml(inner).trim();
      inner = inner.replace(/\n\s*/g, ' ').trim();
      lines.push('- ' + inner);
    }
    return '\n' + lines.join('\n') + '\n';
  });

  // Ordered lists (procedures)
  html = html.replace(/<(ol)[^>]*class="[^"]*procedure[^"]*"[^>]*>([\s\S]*?)<\/\1>/gi, (match, tag, content) => {
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (!items) return match;

    let lines = [];
    let i = 1;
    for (const item of items) {
      let inner = item.replace(/<\/?li[^>]*>/g, '');
      inner = convertInline(inner);
      inner = stripHtmlTags(inner);
      inner = unescapeHtml(inner).trim();
      inner = inner.replace(/\n\s*/g, ' ').trim();
      lines.push(`${i}. ` + inner);
      i++;
    }
    return '\n' + lines.join('\n') + '\n';
  });

  // Generic ordered lists
  html = html.replace(/<(ol)[^>]*>([\s\S]*?)<\/\1>/gi, (match, tag, content) => {
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (!items) return match;

    let lines = [];
    let i = 1;
    for (const item of items) {
      let inner = item.replace(/<\/?li[^>]*>/g, '');
      inner = convertInline(inner);
      inner = stripHtmlTags(inner);
      inner = unescapeHtml(inner).trim();
      inner = inner.replace(/\n\s*/g, ' ').trim();
      lines.push(`${i}. ` + inner);
      i++;
    }
    return '\n' + lines.join('\n') + '\n';
  });

  // Generic unordered lists
  html = html.replace(/<(ul)[^>]*>([\s\S]*?)<\/\1>/gi, (match, tag, content) => {
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (!items) return match;

    let lines = [];
    for (const item of items) {
      let inner = item.replace(/<\/?li[^>]*>/g, '');
      inner = convertInline(inner);
      inner = stripHtmlTags(inner);
      inner = unescapeHtml(inner).trim();
      inner = inner.replace(/\n\s*/g, ' ').trim();
      lines.push('- ' + inner);
    }
    return '\n' + lines.join('\n') + '\n';
  });

  return html;
}

function convertHeadings(html, isGlossary = false, isTutorial = false) {
  // Book title → H1
  // <h1 class="title"><a name="Hydrogen-manual"></a>Hydrogen 1.2.6 Manual</h1>
  html = html.replace(/<h1 class="title"><a name="([^"]+)"><\/a>([^<]+)<\/h1>/g, (match, anchor, text) => {
    return `# ${text.trim()}\n`;
  });
  html = html.replace(/<h1 class="title">[^<]*<a[^>]*>([^<]+)<\/a><\/h1>/g, '# $1\n');

  // Chapter title → H1
  // <h2 class="title"><a name="chpt.download"></a>Chapter 1. Download</h2>
  html = html.replace(/<h2 class="title"><a name="([^"]+)"><\/a>([^<]+)<\/h2>/g, (match, anchor, text) => {
    return `# ${text.trim()}\n`;
  });

  // Section title → H2
  // <h2 class="title" style="clear: both"><a name="idm83"></a>3.1. \n           Keyboard usage in Editors\n        </h2>
  html = html.replace(/<h2 class="title"[^>]*><a name="([^"]+)"><\/a>([\s\S]*?)<\/h2>/g, (match, anchor, content) => {
    const title = unescapeHtml(content).replace(/\n\s*/g, ' ').trim();
    return `\n<a name="${anchor}"></a>\n## ${title}\n`;
  });

  // Subsection title → H3
  // <h3 class="title"><a name="chpt.song_editor.editor_modes.select"></a>8.2.1. Select Mode</h3>
  html = html.replace(/<h3 class="title"><a name="([^"]+)"><\/a>([\s\S]*?)<\/h3>/g, (match, anchor, content) => {
    const title = unescapeHtml(content).replace(/\n\s*/g, ' ').trim();
    return `\n<a name="${anchor}"></a>\n### ${title}\n`;
  });

  // Sub-subsection title → H4
  html = html.replace(/<h4 class="title"><a name="([^"]+)"><\/a>([\s\S]*?)<\/h4>/g, (match, anchor, content) => {
    const title = unescapeHtml(content).replace(/\n\s*/g, ' ').trim();
    return `\n<a name="${anchor}"></a>\n#### ${title}\n`;
  });

  // Sub-sub-subsection → H5
  html = html.replace(/<h5 class="title"><a name="([^"]+)"><\/a>([\s\S]*?)<\/h5>/g, (match, anchor, content) => {
    const title = unescapeHtml(content).replace(/\n\s*/g, ' ').trim();
    return `\n<a name="${anchor}"></a>\n##### ${title}\n`;
  });

  // Glossary terms → H3 with anchor
  if (isGlossary) {
    html = html.replace(/<dt><a name="([^"]+)"><\/a><span class="glossterm">([^<]+)<\/span><\/dt>/g, (match, anchor, term) => {
      return `\n<a name="${anchor}"></a>\n### ${term}\n`;
    });
  }

  // Remove subtitle and author info
  html = html.replace(/<h2 class="subtitle">[^<]*<\/h2>/g, '');
  html = html.replace(/<h3 class="author">[^<]*<\/h3>/g, '');

  // Remove figure titles (handled by convertFigures)
  html = html.replace(/<p class="title"><b>[^<]*<\/b><\/p>/g, '');
  html = html.replace(/<p class="title"><b>Abstract<\/b><\/p>/g, '');
  html = html.replace(/<p><b>Table of Contents<\/b><\/p>/g, '');

  return html;
}

function convertParagraphs(html) {
  html = html.replace(/<p>([\s\S]*?)<\/p>/g, (match, content) => {
    let inner = convertInline(content);
    inner = stripHtmlTags(inner);
    inner = unescapeHtml(inner).trim();
    if (inner === '') return '';
    return '\n' + inner + '\n';
  });

  return html;
}

function convertGlossary(html) {
  // Convert dt/dd to heading + definition format
  html = html.replace(/<dt[^>]*>([\s\S]*?)<\/dt>\s*<dd class="glossdef">([\s\S]*?)<\/dd>/gi, (match, dt, dd) => {
    // dt term is already converted to heading by convertHeadings
    let def = dd;
    def = convertInline(def);
    def = convertParagraphs(def);
    def = convertAdmonitions(def);
    def = stripHtmlTags(def);
    def = unescapeHtml(def).trim();
    def = def.replace(/\n{3,}/g, '\n\n');
    return def + '\n\n';
  });

  return html;
}

function convertInline(html) {
  let text = html;

  // Keycap: <span class="keycap"><strong>X</strong></span> → `X`
  text = text.replace(/<span class="keycap"><strong>([^<]+)<\/strong><\/span>/g, '`$1`');

  // Bold: <span class="bold"><strong>text</strong></span> → **text**
  text = text.replace(/<span class="bold"><strong>([\s\S]*?)<\/strong><\/span>/g, '**$1**');

  // Emphasis: <span class="emphasis"><em>text</em></span> → *text*
  text = text.replace(/<span class="emphasis"><em>([\s\S]*?)<\/em><\/span>/g, '*$1*');

  // Abbreviation
  text = text.replace(/<abbr class="abbrev">([^<]+)<\/abbr>/g, '$1');

  // Code/filename
  text = text.replace(/<code class="filename">([^<]+)<\/code>/g, '`$1`');
  text = text.replace(/<code class="option">([^<]+)<\/code>/g, '`$1`');
  text = text.replace(/<code class="computeroutput">([^<]*?)<\/code>/g, '`$1`');
  text = text.replace(/<code>([^<]*?)<\/code>/g, '`$1`');

  // Inline images (button icons) → remove entirely
  text = text.replace(/<span class="inlinemediaobject"><img[^>]*><\/span>/g, '');

  // External links
  text = text.replace(/<a class="ulink" href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)');

  // Internal cross-refs
  text = text.replace(/<a class="xref" href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)');

  // Internal links
  text = text.replace(/<a class="link" href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)');

  // Glossary seealso
  text = text.replace(/<a class="glossseealso" href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)');

  // Generic links (preserve anchors)
  text = text.replace(/<a name="([^"]+)"><\/a>/g, '<a name="$1"></a>');
  text = text.replace(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)');

  // Quote
  text = text.replace(/<span class="quote">([^<]*)<\/span>/g, '$1');

  // Strong (without class wrapper)
  text = text.replace(/<strong>([^<]*?)<\/strong>/g, '**$1**');

  // Em (without class wrapper)
  text = text.replace(/<em>([^<]*?)<\/em>/g, '*$1*');

  // Superscript
  text = text.replace(/<sup>([^<]*?)<\/sup>/g, '^$1^');

  // Remove remaining spans
  text = text.replace(/<span[^>]*>/g, '');
  text = text.replace(/<\/span>/g, '');

  // Remove br tags
  text = text.replace(/<br[^>]*>/gi, ' ');

  return text;
}

function cleanMarkdown(markdown) {
  let result = markdown;

  // Remove empty div wrappers
  result = result.replace(/<\/?(div|dl|dd)[^>]*>/g, '');

  // Remove glossary dt/dd wrappers (already converted)
  result = result.replace(/<\/?dt[^>]*>/g, '');
  result = result.replace(/<\/?dd[^>]*>/g, '');

  // Clean up excessive whitespace
  result = result.replace(/\n{3,}/g, '\n\n');
  result = result.replace(/[ \t]+/g, ' ');

  // Remove trailing whitespace on each line
  result = result.split('\n').map(line => line.replace(/[ \t]+$/, '')).join('\n');

  // Clean up double blank lines around headings
  result = result.replace(/\n{2,}(#{1,6} )/g, '\n\n$1');

  // Remove blank lines before/after code blocks
  result = result.replace(/\n{2,}```/g, '\n```\n');
  result = result.replace(/```\n{2,}/g, '```\n');

  // Remove blank lines before/after admonitions
  result = result.replace(/\n{2,}:::/g, '\n:::');
  result = result.replace(/:::\n{2,}/g, ':::\n');

  // Remove blank lines before/after headings
  result = result.replace(/\n{2,}(#{1,6} )/g, '\n\n$1');

  // Trim
  result = result.trim();

  // Ensure single newline at end
  result = result + '\n';

  return result;
}

// ─── File Mapping ────────────────────────────────────────────────────────────

const MANUAL_FILE_MAP = [
  { src: 'ch01.html', dst: '01-getting-started/01-download.md', title: 'Download' },
  { src: 'ch02.html', dst: '01-getting-started/02-build.md', title: 'Build' },
  { src: 'ch03.html', dst: '01-getting-started/03-keyboard-mouse.md', title: 'Keyboard and Mouse' },
  { src: 'ch04.html', dst: '02-using-hydrogen/01-overview/00-overview.md', title: 'Overview' },
  { src: 'ch04s02.html', dst: '02-using-hydrogen/01-overview/01-drumkit-concept.md', title: 'Drumkit Concept' },
  { src: 'ch04s03.html', dst: '02-using-hydrogen/01-overview/02-virtual-keyboard.md', title: 'Virtual Keyboard' },
  { src: 'ch04s04.html', dst: '02-using-hydrogen/01-overview/03-recording.md', title: 'Recording in Hydrogen' },
  { src: 'ch04s05.html', dst: '02-using-hydrogen/01-overview/04-session-management.md', title: 'Session Management' },
  { src: 'ch04s06.html', dst: '02-using-hydrogen/01-overview/05-command-line.md', title: 'Command-line Options' },
  { src: 'ch05.html', dst: '02-using-hydrogen/02-preferences/00-preferences.md', title: 'Preferences' },
  { src: 'ch05s02.html', dst: '02-using-hydrogen/02-preferences/01-audio-system.md', title: 'Audio System' },
  { src: 'ch05s03.html', dst: '02-using-hydrogen/02-preferences/02-midi-system.md', title: 'MIDI System' },
  { src: 'ch05s04.html', dst: '02-using-hydrogen/02-preferences/03-osc.md', title: 'OSC' },
  { src: 'ch05s05.html', dst: '02-using-hydrogen/02-preferences/04-appearance.md', title: 'Appearance' },
  { src: 'ch06.html', dst: '02-using-hydrogen/03-main-menu/00-main-menu.md', title: 'Main Menu' },
  { src: 'ch06s02.html', dst: '02-using-hydrogen/03-main-menu/01-undo.md', title: 'Undo' },
  { src: 'ch06s03.html', dst: '02-using-hydrogen/03-main-menu/02-drumkits.md', title: 'Drumkits' },
  { src: 'ch06s04.html', dst: '02-using-hydrogen/03-main-menu/03-instruments.md', title: 'Instruments' },
  { src: 'ch06s05.html', dst: '02-using-hydrogen/03-main-menu/04-view.md', title: 'View' },
  { src: 'ch06s06.html', dst: '02-using-hydrogen/03-main-menu/05-options.md', title: 'Options' },
  { src: 'ch06s07.html', dst: '02-using-hydrogen/03-main-menu/06-debug.md', title: 'Debug' },
  { src: 'ch06s08.html', dst: '02-using-hydrogen/03-main-menu/07-info.md', title: 'Info' },
  { src: 'ch07.html', dst: '02-using-hydrogen/04-main-toolbar/00-main-toolbar.md', title: 'Main Toolbar' },
  { src: 'ch07s02.html', dst: '02-using-hydrogen/04-main-toolbar/01-tap-tempo.md', title: 'Tap Tempo and Beat Counter' },
  { src: 'ch07s03.html', dst: '02-using-hydrogen/04-main-toolbar/02-bpm-metronome.md', title: 'BPM Control and Metronome' },
  { src: 'ch07s04.html', dst: '02-using-hydrogen/04-main-toolbar/03-cpu-midi.md', title: 'CPU Usage and MIDI in' },
  { src: 'ch07s05.html', dst: '02-using-hydrogen/04-main-toolbar/04-jack-control.md', title: 'JACK Control' },
  { src: 'ch07s06.html', dst: '02-using-hydrogen/04-main-toolbar/05-gui-state.md', title: 'GUI State' },
  { src: 'ch08.html', dst: '02-using-hydrogen/05-song-editor/00-song-editor.md', title: 'Song Editor' },
  { src: 'ch08s02.html', dst: '02-using-hydrogen/05-song-editor/01-editor-modes.md', title: 'Song Editor modes' },
  { src: 'ch08s03.html', dst: '02-using-hydrogen/05-song-editor/02-sidebar.md', title: 'Sidebar' },
  { src: 'ch08s04.html', dst: '02-using-hydrogen/05-song-editor/03-timeline.md', title: 'Timeline' },
  { src: 'ch08s05.html', dst: '02-using-hydrogen/05-song-editor/04-tags.md', title: 'Tags' },
  { src: 'ch08s06.html', dst: '02-using-hydrogen/05-song-editor/05-playback-track.md', title: 'Playback Track' },
  { src: 'ch08s07.html', dst: '02-using-hydrogen/05-song-editor/06-automation-path.md', title: 'Automation Path' },
  { src: 'ch09.html', dst: '02-using-hydrogen/06-pattern-editor/00-pattern-editor.md', title: 'Pattern Editor' },
  { src: 'ch09s02.html', dst: '02-using-hydrogen/06-pattern-editor/01-drum-pattern.md', title: 'Drum Pattern Editor' },
  { src: 'ch09s03.html', dst: '02-using-hydrogen/06-pattern-editor/02-note-properties.md', title: 'Note Properties Editor' },
  { src: 'ch09s04.html', dst: '02-using-hydrogen/06-pattern-editor/03-piano-roll.md', title: 'Piano Roll Editor' },
  { src: 'ch10.html', dst: '02-using-hydrogen/07-sound-library.md', title: 'Sound Library' },
  { src: 'ch10s02.html', dst: '02-using-hydrogen/07-sound-library-songs.md', title: 'Songs' },
  { src: 'ch10s03.html', dst: '02-using-hydrogen/07-sound-library-patterns.md', title: 'Patterns' },
  { src: 'ch11.html', dst: '02-using-hydrogen/08-instrument-editor.md', title: 'Instrument Editor' },
  { src: 'ch11s02.html', dst: '02-using-hydrogen/08-instrument-editor-layers.md', title: 'Layers' },
  { src: 'ch12.html', dst: '02-using-hydrogen/09-sample-editor.md', title: 'Sample Editor' },
  { src: 'ch12s02.html', dst: '02-using-hydrogen/09-sample-editor-pitch.md', title: 'Pitch Shifting' },
  { src: 'ch12s03.html', dst: '02-using-hydrogen/09-sample-editor-playback.md', title: 'Playback and Envelope Editor' },
  { src: 'ch13.html', dst: '02-using-hydrogen/10-mixer/00-mixer.md', title: 'Mixer' },
  { src: 'ch13s02.html', dst: '02-using-hydrogen/10-mixer/01-component-strips.md', title: 'Component Channel Strips' },
  { src: 'ch13s03.html', dst: '02-using-hydrogen/10-mixer/02-fx-rack.md', title: 'FX Rack and LADSPA Plugins' },
  { src: 'ch13s04.html', dst: '02-using-hydrogen/10-mixer/03-master-fader.md', title: 'Master Fader Strip' },
  { src: 'ch14.html', dst: '02-using-hydrogen/11-director.md', title: 'Director' },
  { src: 'ch15.html', dst: '02-using-hydrogen/12-playlist-editor.md', title: 'Playlist Editor' },
  { src: 'ch15s02.html', dst: '02-using-hydrogen/12-playlist-editor-menu.md', title: 'Playlist Editor Menu' },
  { src: 'ch16.html', dst: '02-using-hydrogen/13-midi/00-midi.md', title: 'MIDI' },
  { src: 'ch16s02.html', dst: '02-using-hydrogen/13-midi/01-note-rendering.md', title: 'MIDI Note Rendering' },
  { src: 'ch16s03.html', dst: '02-using-hydrogen/13-midi/02-output.md', title: 'MIDI Output' },
  { src: 'ch16s04.html', dst: '02-using-hydrogen/13-midi/03-controlling.md', title: 'MIDI Controlling' },
  { src: 'ch17.html', dst: '02-using-hydrogen/14-osc-api.md', title: 'OSC API' },
  { src: 'ch17s02.html', dst: '02-using-hydrogen/14-osc-api-commands.md', title: 'OSC Commands' },
  { src: 'ch18.html', dst: '03-examples/01-new-song.md', title: 'A New Song' },
  { src: 'ch18s02.html', dst: '03-examples/01-new-song-pattern.md', title: 'A New Pattern' },
  { src: 'ch18s03.html', dst: '03-examples/01-new-song-sequence.md', title: 'A New Sequence' },
  { src: 'ch18s04.html', dst: '03-examples/01-new-song-mixer.md', title: 'Adjust from the Mixer' },
  { src: 'ch19.html', dst: '03-examples/02-new-drumkit.md', title: 'Create a New Drumkit' },
  { src: 'ch19s02.html', dst: '03-examples/02-new-drumkit-instrument.md', title: 'Creating a New Instrument' },
  { src: 'ch19s03.html', dst: '03-examples/02-new-drumkit-tips.md', title: 'Tips on Editing Instruments' },
  { src: 'ch20.html', dst: '04-reference/01-licensing.md', title: 'Licensing' },
  { src: 'ch20s02.html', dst: '04-reference/01-licensing-common.md', title: 'Common Licenses' },
  { src: 'ch21.html', dst: '04-reference/02-file-types.md', title: 'Used File Types' },
  { src: 'ch22.html', dst: '04-reference/03-shortcuts.md', title: 'Shortcut Lists' },
  { src: 'go01.html', dst: '04-reference/04-glossary.md', title: 'Glossary', isGlossary: true },
];

// ─── Image Migration ─────────────────────────────────────────────────────────

function migrateImages() {
  console.log('Migrating images...');

  const dirs = [
    path.join(STATIC_DOCS_IMG_DIR, 'manual', 'generated_en'),
    path.join(STATIC_DOCS_IMG_DIR, 'manual', 'admonitions'),
    path.join(STATIC_DOCS_IMG_DIR, 'manual'),
    path.join(STATIC_DOCS_IMG_DIR, 'tutorial'),
  ];

  for (const dir of dirs) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Copy manual images - generated_en
  const generatedEnDir = path.join(MANUAL_IMG_DIR, 'generated_en');
  if (fs.existsSync(generatedEnDir)) {
    const files = fs.readdirSync(generatedEnDir);
    for (const file of files) {
      fs.copyFileSync(path.join(generatedEnDir, file), path.join(STATIC_DOCS_IMG_DIR, 'manual', 'generated_en', file));
    }
    console.log(`  Copied ${files.length} images from generated_en/`);
  }

  // Copy manual images - admonitions
  const admonitionsDir = path.join(MANUAL_IMG_DIR, 'admonitions');
  if (fs.existsSync(admonitionsDir)) {
    const files = fs.readdirSync(admonitionsDir);
    for (const file of files) {
      fs.copyFileSync(path.join(admonitionsDir, file), path.join(STATIC_DOCS_IMG_DIR, 'manual', 'admonitions', file));
    }
    console.log(`  Copied ${files.length} images from admonitions/`);
  }

  // Copy shared manual images
  const manualImgFiles = fs.readdirSync(MANUAL_IMG_DIR).filter(f => f.endsWith('.png') || f.endsWith('.svg'));
  for (const file of manualImgFiles) {
    fs.copyFileSync(path.join(MANUAL_IMG_DIR, file), path.join(STATIC_DOCS_IMG_DIR, 'manual', file));
  }
  console.log(`  Copied ${manualImgFiles.length} shared manual images`);

  // Copy tutorial images
  if (fs.existsSync(TUTORIAL_IMG_DIR)) {
    const files = fs.readdirSync(TUTORIAL_IMG_DIR);
    for (const file of files) {
      fs.copyFileSync(path.join(TUTORIAL_IMG_DIR, file), path.join(STATIC_DOCS_IMG_DIR, 'tutorial', file));
    }
    console.log(`  Copied ${files.length} tutorial images`);
  }
}

// ─── Internal Link Rewriting ─────────────────────────────────────────────────

function rewriteInternalLinks(markdown) {
  let result = markdown;

  // Rewrite chNN.html → relative paths
  result = result.replace(/\[([^\]]+)\]\(ch(\d+)(s(\d+))?\.html([^)]*)\)/g, (match, text, chNum, secPart, secNum, anchor) => {
    const chapterPath = getChapterPath(chNum, secNum);
    return `[${text}](${chapterPath}${anchor})`;
  });

  // Remove .html from glossary links
  result = result.replace(/\[([^\]]+)\]\(go01\.html([^)]*)\)/g, '[$1](./04-glossary$2)');

  return result;
}

function getChapterPath(chNum, secNum) {
  const paths = {
    '01': './01-getting-started/01-download',
    '02': './01-getting-started/02-build',
    '03': './01-getting-started/03-keyboard-mouse',
    '04': './02-using-hydrogen/01-overview/00-overview',
    '04s02': './02-using-hydrogen/01-overview/01-drumkit-concept',
    '04s03': './02-using-hydrogen/01-overview/02-virtual-keyboard',
    '04s04': './02-using-hydrogen/01-overview/03-recording',
    '04s05': './02-using-hydrogen/01-overview/04-session-management',
    '04s06': './02-using-hydrogen/01-overview/05-command-line',
    '05': './02-using-hydrogen/02-preferences/00-preferences',
    '05s02': './02-using-hydrogen/02-preferences/01-audio-system',
    '05s03': './02-using-hydrogen/02-preferences/02-midi-system',
    '05s04': './02-using-hydrogen/02-preferences/03-osc',
    '05s05': './02-using-hydrogen/02-preferences/04-appearance',
    '06': './02-using-hydrogen/03-main-menu/00-main-menu',
    '06s02': './02-using-hydrogen/03-main-menu/01-undo',
    '06s03': './02-using-hydrogen/03-main-menu/02-drumkits',
    '06s04': './02-using-hydrogen/03-main-menu/03-instruments',
    '06s05': './02-using-hydrogen/03-main-menu/04-view',
    '06s06': './02-using-hydrogen/03-main-menu/05-options',
    '06s07': './02-using-hydrogen/03-main-menu/06-debug',
    '06s08': './02-using-hydrogen/03-main-menu/07-info',
    '07': './02-using-hydrogen/04-main-toolbar/00-main-toolbar',
    '07s02': './02-using-hydrogen/04-main-toolbar/01-tap-tempo',
    '07s03': './02-using-hydrogen/04-main-toolbar/02-bpm-metronome',
    '07s04': './02-using-hydrogen/04-main-toolbar/03-cpu-midi',
    '07s05': './02-using-hydrogen/04-main-toolbar/04-jack-control',
    '07s06': './02-using-hydrogen/04-main-toolbar/05-gui-state',
    '08': './02-using-hydrogen/05-song-editor/00-song-editor',
    '08s02': './02-using-hydrogen/05-song-editor/01-editor-modes',
    '08s03': './02-using-hydrogen/05-song-editor/02-sidebar',
    '08s04': './02-using-hydrogen/05-song-editor/03-timeline',
    '08s05': './02-using-hydrogen/05-song-editor/04-tags',
    '08s06': './02-using-hydrogen/05-song-editor/05-playback-track',
    '08s07': './02-using-hydrogen/05-song-editor/06-automation-path',
    '09': './02-using-hydrogen/06-pattern-editor/00-pattern-editor',
    '09s02': './02-using-hydrogen/06-pattern-editor/01-drum-pattern',
    '09s03': './02-using-hydrogen/06-pattern-editor/02-note-properties',
    '09s04': './02-using-hydrogen/06-pattern-editor/03-piano-roll',
    '10': './02-using-hydrogen/07-sound-library',
    '10s02': './02-using-hydrogen/07-sound-library-songs',
    '10s03': './02-using-hydrogen/07-sound-library-patterns',
    '11': './02-using-hydrogen/08-instrument-editor',
    '11s02': './02-using-hydrogen/08-instrument-editor-layers',
    '12': './02-using-hydrogen/09-sample-editor',
    '12s02': './02-using-hydrogen/09-sample-editor-pitch',
    '12s03': './02-using-hydrogen/09-sample-editor-playback',
    '13': './02-using-hydrogen/10-mixer/00-mixer',
    '13s02': './02-using-hydrogen/10-mixer/01-component-strips',
    '13s03': './02-using-hydrogen/10-mixer/02-fx-rack',
    '13s04': './02-using-hydrogen/10-mixer/03-master-fader',
    '14': './02-using-hydrogen/11-director',
    '15': './02-using-hydrogen/12-playlist-editor',
    '15s02': './02-using-hydrogen/12-playlist-editor-menu',
    '16': './02-using-hydrogen/13-midi/00-midi',
    '16s02': './02-using-hydrogen/13-midi/01-note-rendering',
    '16s03': './02-using-hydrogen/13-midi/02-output',
    '16s04': './02-using-hydrogen/13-midi/03-controlling',
    '17': './02-using-hydrogen/14-osc-api',
    '17s02': './02-using-hydrogen/14-osc-api-commands',
    '18': './03-examples/01-new-song',
    '18s02': './03-examples/01-new-song-pattern',
    '18s03': './03-examples/01-new-song-sequence',
    '18s04': './03-examples/01-new-song-mixer',
    '19': './03-examples/02-new-drumkit',
    '19s02': './03-examples/02-new-drumkit-instrument',
    '19s03': './03-examples/02-new-drumkit-tips',
    '20': './04-reference/01-licensing',
    '20s02': './04-reference/01-licensing-common',
    '21': './04-reference/02-file-types',
    '22': './04-reference/03-shortcuts',
  };

  const key = chNum + (secNum ? 's' + secNum : '');
  return paths[key] || `./ch${chNum}${secNum ? 's' + secNum : ''}`;
}

// ─── Main Conversion ─────────────────────────────────────────────────────────

function convertManual() {
  console.log('Converting manual HTML to Markdown...');

  const dirs = [
    '01-getting-started',
    '02-using-hydrogen/01-overview',
    '02-using-hydrogen/02-preferences',
    '02-using-hydrogen/03-main-menu',
    '02-using-hydrogen/04-main-toolbar',
    '02-using-hydrogen/05-song-editor',
    '02-using-hydrogen/06-pattern-editor',
    '02-using-hydrogen/10-mixer',
    '02-using-hydrogen/13-midi',
    '03-examples',
    '04-reference',
  ];

  for (const dir of dirs) {
    fs.mkdirSync(path.join(MANUAL_OUT_DIR, dir), { recursive: true });
  }

  let converted = 0;
  let skipped = 0;

  for (const mapping of MANUAL_FILE_MAP) {
    const srcPath = path.join(MANUAL_HTML_DIR, mapping.src);

    if (!fs.existsSync(srcPath)) {
      console.log(`  SKIP: ${mapping.src} (not found)`);
      skipped++;
      continue;
    }

    const html = fs.readFileSync(srcPath, 'utf-8');
    const title = mapping.title || extractTitle(html);
    const isGlossary = mapping.isGlossary || false;

    let markdown = convert(html, isGlossary, false);

    // Rewrite internal links
    markdown = rewriteInternalLinks(markdown);

    // Add frontmatter
    const frontmatter = `---\ntitle: "${title.replace(/"/g, '\\"')}"\nsidebar_label: "${title.replace(/"/g, '\\"')}"\n---\n\n`;

    const finalContent = frontmatter + markdown;

    const dstPath = path.join(MANUAL_OUT_DIR, mapping.dst);
    fs.writeFileSync(dstPath, finalContent);
    converted++;
    console.log(`  ✓ ${mapping.src} → ${mapping.dst}`);
  }

  console.log(`\nConverted: ${converted}, Skipped: ${skipped}`);
}

function convertTutorial() {
  console.log('\nConverting tutorial HTML to Markdown...');

  if (!fs.existsSync(TUTORIAL_HTML)) {
    console.log('  SKIP: tutorial_en.html not found');
    return;
  }

  const html = fs.readFileSync(TUTORIAL_HTML, 'utf-8');

  let markdown = convert(html, false, true);

  // Add frontmatter
  const frontmatter = `---\ntitle: "Hydrogen Tutorial"\nsidebar_label: "Tutorial"\n---\n\n`;

  const finalContent = frontmatter + markdown;

  const dstPath = path.join(TUTORIAL_OUT_DIR, '00-tutorial.md');
  fs.mkdirSync(TUTORIAL_OUT_DIR, { recursive: true });
  fs.writeFileSync(dstPath, finalContent);

  console.log(`  ✓ tutorial_en.html → 00-tutorial.md`);
}

function createManualIntro() {
  console.log('\nCreating manual intro...');

  const intro = `---
title: "Hydrogen Manual"
sidebar_label: "Manual"
---

# Hydrogen 1.2.6 Manual

**Authors:** Antonio Piraino, Alessandro Cominu, Thijs Van Severen, Sebastian Moors, Colin Evans

Hydrogen is a software synthesizer which can be used alone, emulating a drum machine based on patterns, or via an external MIDI keyboard/sequencer software. Hydrogen runs on Linux, Mac OS X and Windows.

## Table of Contents

### Getting Started
- [Download](01-getting-started/01-download)
- [Build](01-getting-started/02-build)
- [Keyboard and Mouse](01-getting-started/03-keyboard-mouse)

### Using Hydrogen
- [Overview](02-using-hydrogen/01-overview/00-overview)
- [Preferences](02-using-hydrogen/02-preferences/00-preferences)
- [Main Menu](02-using-hydrogen/03-main-menu/00-main-menu)
- [Main Toolbar](02-using-hydrogen/04-main-toolbar/00-main-toolbar)
- [Song Editor](02-using-hydrogen/05-song-editor/00-song-editor)
- [Pattern Editor](02-using-hydrogen/06-pattern-editor/00-pattern-editor)
- [Sound Library](02-using-hydrogen/07-sound-library)
- [Instrument Editor](02-using-hydrogen/08-instrument-editor)
- [Sample Editor](02-using-hydrogen/09-sample-editor)
- [Mixer](02-using-hydrogen/10-mixer/00-mixer)
- [Director](02-using-hydrogen/11-director)
- [Playlist Editor](02-using-hydrogen/12-playlist-editor)
- [MIDI](02-using-hydrogen/13-midi/00-midi)
- [OSC API](02-using-hydrogen/14-osc-api)

### Examples
- [A New Song](03-examples/01-new-song)
- [Create a New Drumkit](03-examples/02-new-drumkit)

### Reference
- [Licensing](04-reference/01-licensing)
- [Used File Types](04-reference/02-file-types)
- [Shortcut Lists](04-reference/03-shortcuts)
- [Glossary](04-reference/04-glossary)
`;

  fs.writeFileSync(path.join(MANUAL_OUT_DIR, 'intro.md'), intro);
}

// ─── Execute ─────────────────────────────────────────────────────────────────

console.log('=== DocBook HTML → Docusaurus Markdown Converter (v2) ===\n');

try {
  migrateImages();
  convertManual();
  convertTutorial();
  createManualIntro();

  console.log('\n=== Conversion complete ===');
} catch (err) {
  console.error('Error:', err.message);
  console.error(err.stack);
  process.exit(1);
}
