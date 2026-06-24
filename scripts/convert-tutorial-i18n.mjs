#!/usr/bin/env node
/**
 * Convert FR/IT tutorial HTML to Docusaurus Markdown
 * Handles ISO-8859-1 encoding and single-line minified HTML
 */

import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '..');

const TUTORIAL_DIR = path.join(ROOT, 'documentation/tutorial');
const I18N_DIR = path.join(ROOT, 'i18n');

const TUTORIALS = [
  { locale: 'fr', src: 'tutorial_fr.html', title: 'Tutoriel de Hydrogen' },
  { locale: 'it', src: 'tutorial_it.html', title: 'Tutorial di Hydrogen' },
];

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

function convertInline(html) {
  let text = html;

  // Bold
  text = text.replace(/<span class="bold"><strong>([\s\S]*?)<\/strong><\/span>/g, '**$1**');
  text = text.replace(/<strong>([^<]*?)<\/strong>/g, '**$1**');

  // Emphasis
  text = text.replace(/<span class="emphasis"><em>([\s\S]*?)<\/em><\/span>/g, '*$1*');
  text = text.replace(/<em>([^<]*?)<\/em>/g, '*$1*');

  // Abbreviation
  text = text.replace(/<abbr class="abbrev">([^<]+)<\/abbr>/g, '$1');

  // Code
  text = text.replace(/<code[^>]*>([^<]*?)<\/code>/g, '`$1`');

  // Inline images → remove
  text = text.replace(/<span class="inlinemediaobject"><img[^>]*><\/span>/g, '');

  // Links
  text = text.replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)');

  // Quote
  text = text.replace(/<span class="quote">([^<]*)<\/span>/g, '$1');

  // Remove remaining spans
  text = text.replace(/<span[^>]*>/g, '');
  text = text.replace(/<\/span>/g, '');

  return text;
}

function convert(html, locale) {
  let content = html;

  // Strip head
  content = content.replace(/<head>[\s\S]*?<\/head>/g, '');
  content = content.replace(/<\/?html>/g, '');
  content = content.replace(/<body[^>]*>/g, '');
  content = content.replace(/<\/body>/g, '');
  content = content.replace(/<meta[^>]*>/g, '');
  content = content.replace(/<link[^>]*>/g, '');
  content = content.replace(/<title>[\s\S]*?<\/title>/g, '');
  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/g, '');

  // Remove nav/div wrappers
  content = content.replace(/<div class="navheader">[\s\S]*?<\/div>/g, '');
  content = content.replace(/<div class="navfooter">[\s\S]*?<\/div>/g, '');
  content = content.replace(/<div class="titlepage">[\s\S]*?<\/div>/g, '');
  content = content.replace(/<div class="abstract">[\s\S]*?<\/div>/g, (match) => {
    let inner = match.replace(/<\/?div class="abstract">/g, '');
    inner = inner.replace(/<p class="title"><b>[^<]*<\/b><\/p>/g, '');
    return inner;
  });

  // Convert figures/screenshots
  content = content.replace(/<div class="screenshot">[\s\S]*?<img src="([^"]+)"[^>]*>[\s\S]*?<p>\s*<span class="bold"><strong>([^<]+)<\/strong><\/span>\s*([^<]*)\s*<\/p>[\s\S]*?<\/div>/gi, (match, src, figNum, title) => {
    const cleanSrc = src.replace('img_tutorial/', '');
    return `\n![${figNum}${title}](/img/docs/tutorial/${cleanSrc})\n`;
  });

  content = content.replace(/<div class="screenshot">[\s\S]*?<img src="([^"]+)"[^>]*>[\s\S]*?<\/div>/gi, (match, src) => {
    const cleanSrc = src.replace('img_tutorial/', '').replace('../img/', '');
    return `\n![](/img/docs/${cleanSrc})\n`;
  });

  // Convert figures
  content = content.replace(/<div class="figure">[\s\S]*?<p class="title"><b>([^<]+)<\/b><\/p>[\s\S]*?<img src="([^"]+)" alt="([^"]*)">[\s\S]*?<\/div>/gi, (match, title, src, alt) => {
    const cleanSrc = src.replace('../img/', '');
    return `\n![${title}](/img/docs/${cleanSrc})\n`;
  });

  // Convert headings
  content = content.replace(/<h1 class="title"><a[^>]*>([^<]+)<\/a><\/h1>/g, '# $1\n');
  content = content.replace(/<h2 class="title"[^>]*><a name="([^"]+)"><\/a>([\s\S]*?)<\/h2>/g, (match, anchor, text) => {
    const title = unescapeHtml(text).replace(/\n\s*/g, ' ').trim();
    return `\n## ${title}\n`;
  });
  content = content.replace(/<h2 class="title"><a[^>]*>([^<]+)<\/a><\/h2>/g, '## $1\n');
  content = content.replace(/<h3 class="title"><a[^>]*>([^<]+)<\/a><\/h3>/g, '### $1\n');

  // Remove subtitle/author
  content = content.replace(/<h2 class="subtitle">[^<]*<\/h2>/g, '');
  content = content.replace(/<h3 class="author">[^<]*<\/h3>/g, '');

  // Remove figure titles
  content = content.replace(/<p class="title"><b>[^<]*<\/b><\/p>/g, '');

  // Convert lists
  content = content.replace(/<(ul)[^>]*class="[^"]*itemizedlist[^"]*"[^>]*>([\s\S]*?)<\/\1>/gi, (match, tag, listContent) => {
    const items = listContent.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (!items) return match;
    let lines = [];
    for (const item of items) {
      let inner = item.replace(/<\/?li[^>]*>/g, '');
      inner = convertInline(inner);
      inner = inner.replace(/<[^>]+>/g, '');
      inner = unescapeHtml(inner).trim().replace(/\n\s*/g, ' ').trim();
      lines.push('- ' + inner);
    }
    return '\n' + lines.join('\n') + '\n';
  });

  content = content.replace(/<(ol)[^>]*class="[^"]*procedure[^"]*"[^>]*>([\s\S]*?)<\/\1>/gi, (match, tag, listContent) => {
    const items = listContent.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (!items) return match;
    let lines = [];
    let i = 1;
    for (const item of items) {
      let inner = item.replace(/<\/?li[^>]*>/g, '');
      inner = convertInline(inner);
      inner = inner.replace(/<[^>]+>/g, '');
      inner = unescapeHtml(inner).trim().replace(/\n\s*/g, ' ').trim();
      lines.push(`${i}. ` + inner);
      i++;
    }
    return '\n' + lines.join('\n') + '\n';
  });

  // Generic lists
  content = content.replace(/<(ul)[^>]*>([\s\S]*?)<\/\1>/gi, (match, tag, listContent) => {
    const items = listContent.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (!items) return match;
    let lines = [];
    for (const item of items) {
      let inner = item.replace(/<\/?li[^>]*>/g, '');
      inner = convertInline(inner);
      inner = inner.replace(/<[^>]+>/g, '');
      inner = unescapeHtml(inner).trim().replace(/\n\s*/g, ' ').trim();
      lines.push('- ' + inner);
    }
    return '\n' + lines.join('\n') + '\n';
  });

  content = content.replace(/<(ol)[^>]*>([\s\S]*?)<\/\1>/gi, (match, tag, listContent) => {
    const items = listContent.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (!items) return match;
    let lines = [];
    let i = 1;
    for (const item of items) {
      let inner = item.replace(/<\/?li[^>]*>/g, '');
      inner = convertInline(inner);
      inner = inner.replace(/<[^>]+>/g, '');
      inner = unescapeHtml(inner).trim().replace(/\n\s*/g, ' ').trim();
      lines.push(`${i}. ` + inner);
      i++;
    }
    return '\n' + lines.join('\n') + '\n';
  });

  // Convert paragraphs
  content = content.replace(/<p>([\s\S]*?)<\/p>/g, (match, content) => {
    let inner = convertInline(content);
    inner = inner.replace(/<[^>]+>/g, '');
    inner = unescapeHtml(inner).trim();
    if (inner === '') return '';
    return '\n' + inner + '\n';
  });

  // Strip remaining HTML
  content = content.replace(/<[^>]+>/g, '');

  // Unescape
  content = unescapeHtml(content);

  // Clean up whitespace
  content = content.replace(/\n{3,}/g, '\n\n');
  content = content.split('\n').map(line => line.replace(/[ \t]+$/, '')).join('\n');
  content = content.trim() + '\n';

  return content;
}

// Execute
console.log('=== FR/IT Tutorial Converter ===\n');

for (const tutorial of TUTORIALS) {
  const srcPath = path.join(TUTORIAL_DIR, tutorial.src);
  if (!fs.existsSync(srcPath)) {
    console.log(`SKIP: ${tutorial.src} not found`);
    continue;
  }

  // Read with ISO-8859-1 encoding
  const raw = fs.readFileSync(srcPath);
  const html = raw.toString('latin1');

  const markdown = convert(html, tutorial.locale);

  const frontmatter = `---
title: "${tutorial.title}"
sidebar_label: "${tutorial.title}"
---

`;

  // Write to i18n directory
  const outDir = path.join(I18N_DIR, tutorial.locale, 'docusaurus-plugin-content-docs', 'current', 'tutorial');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, '00-tutorial.md');
  fs.writeFileSync(outPath, frontmatter + markdown, 'utf-8');

  console.log(`✓ ${tutorial.src} → i18n/${tutorial.locale}/docusaurus-plugin-content-docs/current/tutorial/00-tutorial.md`);
}

console.log('\nDone.');
