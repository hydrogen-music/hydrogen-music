#!/usr/bin/env node
/**
 * Convert legacy 1.1 DocBook HTML chunks to Docusaurus Markdown
 *
 * Usage: node scripts/convert-manual-1.1.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const HTML_DIR = path.join(ROOT, 'documentation/manual_1.1/manual_en_chunked');
const IMG_DIR = path.join(ROOT, 'documentation/manual_1.1/img');
const OUT_DIR = path.join(ROOT, 'versioned_docs/version-1.1/manual');
const STATIC_IMG_DIR = path.join(ROOT, 'static/img/docs/generated_1.1');

// ─── HTML Utilities ─────────────────────────────────────────────────────────

function stripNav(html) {
  return html
    .replace(/<div class="navheader">[\s\S]*?<\/div>/g, '')
    .replace(/<div class="navfooter">[\s\S]*?<\/div>/g, '');
}

function unescapeHtml(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8218;/g, "'")
    .replace(/&#8230;/g, '…')
    .replace(/&#160;/g, ' ')
    .replace(/&#183;/g, '•')
    .replace(/&#169;/g, '©')
    .replace(/&#174;/g, '®')
    .replace(/&#153;/g, '™')
    .replace(/&#8482;/g, '™')
    .replace(/&#8364;/g, '€')
    .replace(/&#x201c;/g, '"')
    .replace(/&#x201d;/g, '"')
    .replace(/&#x2018;/g, "'")
    .replace(/&#x2019;/g, "'")
    .replace(/&#x2013;/g, '–')
    .replace(/&#x2014;/g, '—')
    .replace(/&#x2026;/g, '…')
    .replace(/&#x00A0;/g, ' ');
}

function htmlToMarkdown(html) {
  let text = html;

  // Code blocks
  text = text.replace(/<pre>[\s\S]*?<code>([\s\S]*?)<\/code><\/pre>/gi, (m, code) => {
    return '\n```' + unescapeHtml(code).trim() + '\n```\n';
  });
  text = text.replace(/<pre>([\s\S]*?)<\/pre>/gi, (m, code) => {
    return '\n```' + unescapeHtml(code).trim() + '\n```\n';
  });

  // Inline code
  text = text.replace(/<code>([\s\S]*?)<\/code>/gi, '`$1`');

  // Bold
  text = text.replace(/<strong>([\s\S]*?)<\/strong>/gi, '**$1**');
  text = text.replace(/<b>([\s\S]*?)<\/b>/gi, '**$1**');

  // Italic
  text = text.replace(/<em>([\s\S]*?)<\/em>/gi, '*$1*');
  text = text.replace(/<i>([\s\S]*?)<\/i>/gi, '*$1*');

  // Links
  text = text.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (m, url, linkText) => {
    const cleanUrl = url.replace(/\.\//g, '').replace(/^\/\//, 'https://');
    return `[${linkText}](${cleanUrl})`;
  });

  // Images
  text = text.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![|$2]($1)');
  text = text.replace(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*\/?>/gi, '![$1]($2)');
  text = text.replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, '![]($1)');

  // Figures: extract caption
  text = text.replace(/<div class="figure">[\s\S]*?<p class="title">([^<]*)<\/p>[\s\S]*?<\/div>/gi, (m, caption) => {
    return `\n\n> **${caption}**\n\n`;
  });

  // Admonitions
  text = text.replace(/<div class="warning"[^>]*>[\s\S]*?<\/div>/gi, (m) => {
    const content = stripNav(m).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return `\n:::warning\n${content}\n:::\n`;
  });
  text = text.replace(/<div class="note"[^>]*>[\s\S]*?<\/div>/gi, (m) => {
    const content = stripNav(m).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return `\n:::note\n${content}\n:::\n`;
  });
  text = text.replace(/<div class="tip"[^>]*>[\s\S]*?<\/div>/gi, (m) => {
    const content = stripNav(m).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return `\n:::tip\n${content}\n:::\n`;
  });

  // Tables
  text = text.replace(/<table[^>]*>[\s\S]*?<\/table>/gi, (m) => {
    const rows = m.match(/<tr[^>]*>([\s\S]*?)<\/tr>/gi);
    if (!rows) return '';
    const result = [];
    rows.forEach((row, i) => {
      const cells = row.match(/<(td|th)[^>]*>([\s\S]*?)<\/(td|th)>/gi);
      if (!cells) return;
      const cellTexts = cells.map(c => {
        let t = c.replace(/<\/?(td|th)[^>]*>/gi, '');
        t = t.replace(/\s+/g, ' ').trim();
        return t;
      });
      result.push(cellTexts.join(' | '));
      if (i === 0) result.push(cellTexts.map(() => '---').join(' | '));
    });
    return '\n' + result.join('\n') + '\n';
  });

  // Headings
  text = text.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n');
  text = text.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n');
  text = text.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n');
  text = text.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n');

  // Lists
  text = text.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (m, content) => {
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    return '\n' + items.map(i => {
      let t = i.replace(/<\/?li[^>]*>/gi, '');
      return `- ${t}`;
    }).join('\n') + '\n';
  });
  text = text.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (m, content) => {
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    return '\n' + items.map((i, j) => {
      let t = i.replace(/<\/?li[^>]*>/gi, '');
      return `${j + 1}. ${t}`;
    }).join('\n') + '\n';
  });

  // Paragraphs
  text = text.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n');

  // Line breaks
  text = text.replace(/<br\s*\/?>/gi, '\n');

  // Strip remaining HTML
  text = text.replace(/<[^>]+>/g, '');

  // Unescape
  text = unescapeHtml(text);

  // Clean up whitespace
  text = text.replace(/\n{3,}/g, '\n\n').trim();

  return text;
}

// ─── Main ────────────────────────────────────────────────────────────────────

// Create output directories
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(STATIC_IMG_DIR, { recursive: true });

// Copy images
if (fs.existsSync(IMG_DIR)) {
  const images = fs.readdirSync(IMG_DIR);
  let copied = 0;
  for (const img of images) {
    const src = path.join(IMG_DIR, img);
    const dest = path.join(STATIC_IMG_DIR, img);
    if (fs.statSync(src).isFile()) {
      fs.copyFileSync(src, dest);
      copied++;
    }
  }
  console.log(`Copied ${copied} images to ${STATIC_IMG_DIR}`);
}

// Read and convert HTML files
const htmlFiles = fs.readdirSync(HTML_DIR)
  .filter(f => f.endsWith('.html') && !f.startsWith('index') && !f.startsWith('pt'))
  .sort();

console.log(`Found ${htmlFiles.length} HTML files to convert`);

const converted = [];
for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(HTML_DIR, file), 'utf-8');
  const cleanHtml = stripNav(html);

  // Extract title from HTML
  const titleMatch = cleanHtml.match(/<title>([^<]+)<\/title>/);
  const headingMatch = cleanHtml.match(/<(h[1-4])[^>]*>([\s\S]*?)<\/h\1>/i);

  let title = titleMatch ? titleMatch[1] : file.replace('.html', '');
  if (headingMatch) {
    title = headingMatch[2].replace(/\s+/g, ' ').trim();
  }

  const sidebarLabel = title.replace(/Chapter \d+\.?\s*/i, '').replace(/Part \w+\.?\s*/i, '').trim();

  const body = htmlToMarkdown(cleanHtml);

  // Generate filename from original
  const mdFile = file.replace('.html', '.md');

  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
sidebar_label: "${sidebarLabel.replace(/"/g, '\\"')}"
---

`;

  const fullPath = path.join(OUT_DIR, mdFile);
  fs.writeFileSync(fullPath, frontmatter + body);
  converted.push({ file: mdFile, title: sidebarLabel });
}

console.log(`Converted ${converted.length} files to ${OUT_DIR}`);

// Create intro.md
fs.writeFileSync(path.join(OUT_DIR, 'intro.md'), `---
title: Hydrogen 1.1 Manual
sidebar_label: Introduction
---

# Hydrogen 1.1 Manual

Welcome to the Hydrogen 1.1 manual. This documentation covers Hydrogen version 1.1.

For the latest documentation, see the [current manual](/docs/manual/intro).
`);

// Create _category_.json
fs.writeFileSync(path.join(OUT_DIR, '_category_.json'), JSON.stringify({
  label: 'Manual 1.1',
  position: 1,
  link: { type: 'generated-index', slug: '/docs/manual/1.1/' }
}, null, 2));

console.log('Done! Version 1.1 manual created.');
