#!/usr/bin/env node
/**
 * Post-process 1.1 manual Markdown files to fix MDX compilation issues:
 * - Escape bare <Word> patterns that aren't markdown/JSX
 * - Fix image paths
 * - Escape <= and << that look like JSX
 * - Escape {...} that looks like MDX expressions
 */

import fs from 'fs';
import path from 'path';

const MANUAL_DIR = path.resolve('versioned_docs/version-1.1/manual');

const files = fs.readdirSync(MANUAL_DIR).filter(f => f.endsWith('.md'));
console.log(`Processing ${files.length} files...`);

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(MANUAL_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  // Escape bare <Word> patterns (uppercase start, not markdown links or images)
  content = content.replace(/(?<![`\[<])<([A-Z][A-Za-z0-9]+)\b([^>]*)>/g, (match, word, rest) => {
    return `&lt;${word}${rest}&gt;`;
  });

  // Fix image paths
  content = content.replace(/\.\.\/img\/admonitions\//g, '/img/docs/admonitions/');
  content = content.replace(/\.\.\/img\/generated_en\//g, '/img/docs/generated_1.1/');
  content = content.replace(/\.\.\/img\//g, '/img/docs/generated_1.1/');

  // Escape <= when followed by a digit (e.g., <= 1.1, <= 0.9.6) — not in code blocks
  content = content.replace(/(?<!`)<=\s*(\d)/g, '&lt;= $1');

  // Escape << when used as OSC commands (e.g., <<_PREVIOUS_BAR)
  content = content.replace(/<<_/g, '&lt;&lt;_');

  // Escape {...} that looks like MDX expressions but isn't (e.g., {-1;0;1})
  // Only match when NOT inside backticks
  content = content.replace(/(?<!`)\{(-?\d[\d;,.\s]*)\}(?!`)/g, (match) => {
    return `\`${match}\``;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    totalFixed++;
  }
}

console.log(`Fixed ${totalFixed}/${files.length} files`);
