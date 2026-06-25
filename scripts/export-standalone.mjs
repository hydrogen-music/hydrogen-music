#!/usr/bin/env node
/**
 * Export Docusaurus docs as standalone HTML for bundling with Hydrogen app.
 *
 * Usage:
 *   node scripts/export-standalone.mjs [options]
 *
 * Options:
 *   --version=1.2       Doc version to export (default: current)
 *   --lang=en           Language (en, fr, it) (default: en)
 *   --output=standalone/  Output directory (default: standalone/manual_<lang>/)
 *   --type=manual|tutorial  Doc type to export (default: manual)
 *
 * Examples:
 *   node scripts/export-standalone.mjs --version=1.2 --lang=en --type=manual
 *   node scripts/export-standalone.mjs --version=1.2 --lang=fr --type=tutorial
 *   node scripts/export-standalone.mjs --lang=en --type=manual --output=data/doc/manual_en/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ─── Parse CLI args ──────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    version: 'current',
    lang: 'en',
    type: 'manual',
    output: null,
  };

  for (const arg of args) {
    if (arg.startsWith('--version=')) opts.version = arg.split('=')[1];
    else if (arg.startsWith('--lang=')) opts.lang = arg.split('=')[1];
    else if (arg.startsWith('--type=')) opts.type = arg.split('=')[1];
    else if (arg.startsWith('--output=')) opts.output = arg.split('=')[1];
    else if (arg === '--help' || arg === '-h') {
      console.log(`Usage: node export-standalone.mjs [options]

Options:
  --version=1.2       Doc version (default: current)
  --lang=en           Language: en, fr, it (default: en)
  --type=manual       Type: manual or tutorial (default: manual)
  --output=path/      Output directory
  --help              Show this help`);
      process.exit(0);
    }
  }

  // Determine build dir based on lang
  opts.buildDir = opts.lang === 'en'
    ? path.join(ROOT, 'build')
    : path.join(ROOT, 'build', opts.lang);

  // Determine docs path in build output
  // Docusaurus serves the lastVersion at /docs/ directly, current at /docs/next/
  if (opts.version === 'current') {
    opts.docsPath = path.join(opts.buildDir, 'docs', 'next', opts.type);
  } else {
    // Check if version-specific path exists (e.g., build/docs/1.2/manual/)
    const versionedPath = path.join(opts.buildDir, 'docs', opts.version, opts.type);
    if (fs.existsSync(versionedPath)) {
      opts.docsPath = versionedPath;
    } else {
      // Version is the default (lastVersion), served at build/docs/<type>/
      opts.docsPath = path.join(opts.buildDir, 'docs', opts.type);
    }
  }

  // Determine output dir
  if (!opts.output) {
    const versionLabel = opts.version === 'current' ? 'current' : opts.version;
    opts.output = path.join(ROOT, 'standalone', `${opts.type}_${opts.lang}_${versionLabel}`);
  }

  return opts;
}

// ─── Copy directory recursively ──────────────────────────────────────────────

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// ─── Rewrite absolute paths to relative ──────────────────────────────────────

function rewritePaths(html, baseRelPath) {
  let content = html;

  // Calculate depth from output root to determine relative prefix
  const depth = baseRelPath.split('/').length;
  const relPrefix = depth > 0 ? '../'.repeat(depth) : './';

  // Docusaurus minified HTML uses both quoted and unquoted attributes.
  // Handle all forms: href="/path", href=/path, src="/path", src=/path

  // Rewrite /docs/... → relative paths (both quoted and unquoted)
  content = content.replace(/(href=)"\/docs\//g, `$1"${relPrefix}docs/`);
  content = content.replace(/(href=)\/docs\//g, `$1${relPrefix}docs/`);
  content = content.replace(/(href=)"\/docs"/g, `$1"${relPrefix}docs"`);
  content = content.replace(/(href=)\/docs(?!\/)/g, `$1${relPrefix}docs`);

  // Rewrite /assets/... → relative paths
  content = content.replace(/(href=)"\/assets\//g, `$1"${relPrefix}assets/`);
  content = content.replace(/(href=)\/assets\//g, `$1${relPrefix}assets/`);
  content = content.replace(/(src=)"\/assets\//g, `$1"${relPrefix}assets/`);
  content = content.replace(/(src=)\/assets\//g, `$1${relPrefix}assets/`);

  // Rewrite /img/... → relative paths
  content = content.replace(/(src=)"\/img\//g, `$1"${relPrefix}img/`);
  content = content.replace(/(src=)\/img\//g, `$1${relPrefix}img/`);

  // Rewrite /blog/... → relative paths
  content = content.replace(/(href=)"\/blog\//g, `$1"${relPrefix}blog/`);
  content = content.replace(/(href=)\/blog\//g, `$1${relPrefix}blog/`);

  // Rewrite /features, /downloads, /faq, etc. → relative
  content = content.replace(/(href=)"\/(features|downloads|faq|screenshots|devzone|contribution|doc)"/g, `$1"${relPrefix}$2"`);
  content = content.replace(/(href=)\/(features|downloads|faq|screenshots|devzone|contribution|doc)(?!\w)/g, `$1${relPrefix}$2`);

  // Rewrite CSS/JS references
  content = content.replace(/(src=)"\/assets\/js\//g, `$1"${relPrefix}assets/js/`);
  content = content.replace(/(src=)\/assets\/js\//g, `$1${relPrefix}assets/js/`);

  // Rewrite / (home) → relative
  content = content.replace(/(href=)"\/"/g, `$1"${relPrefix}"`);
  content = content.replace(/(href=)\/(?![a-z])/g, `$1${relPrefix}`);

  // Rewrite /fr/docs, /it/docs → relative
  content = content.replace(/(href=)"\/(fr|it)\/docs\//g, `$1"${relPrefix}$2/docs/`);
  content = content.replace(/(href=)\/(fr|it)\/docs\//g, `$1${relPrefix}$2/docs/`);

  return content;
}

// ─── Generate single-page index.html ─────────────────────────────────────────

function generateIndex(opts) {
  const docsDir = path.join(opts.output, 'docs');
  if (!fs.existsSync(docsDir)) return null;

  // Collect all pages
  const pages = [];
  function walk(dir, prefix = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), path.join(prefix, entry.name));
      } else if (entry.name === 'index.html') {
        const html = fs.readFileSync(path.join(dir, entry.name), 'utf-8');
        // Extract title from <title> tag (Docusaurus uses <title data-rh=true>...)
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/);
        const rawTitle = titleMatch ? titleMatch[1] : entry.name;
        // Strip " | Hydrogen" suffix from Docusaurus titles
        const title = rawTitle.replace(/\s*\|\s*Hydrogen\s*$/, '');
        const filePrefix = prefix.replace(opts.type + '/', '');
        pages.push({ title, path: filePrefix });
      }
    }
  }

  walk(docsDir);

  // Sort: intro first, then alphabetical
  pages.sort((a, b) => {
    if (a.path === 'intro') return -1;
    if (b.path === 'intro') return 1;
    return a.path.localeCompare(b.path);
  });

  const tocItems = pages.map(p => `<li><a href="docs/${p.path}/index.html">${p.title}</a></li>`).join('\n        ');

  const indexHtml = `<!DOCTYPE html>
<html lang="${opts.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hydrogen ${opts.type === 'manual' ? 'Manual' : 'Tutorial'}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; line-height: 1.6; color: #333; max-width: 900px; margin: 0 auto; padding: 2rem; }
    h1 { color: #2f71a2; margin-bottom: 1rem; }
    h2 { color: #2f71a2; margin-top: 2rem; margin-bottom: 1rem; }
    .subtitle { color: #666; font-size: 1.1rem; margin-bottom: 2rem; }
    ul { list-style: none; padding: 0; }
    li { padding: 0.3rem 0; }
    li a { color: #2f71a2; text-decoration: none; }
    li a:hover { text-decoration: underline; }
    .version { color: #888; font-size: 0.9rem; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #eee; }
  </style>
</head>
<body>
  <h1>Hydrogen ${opts.type === 'manual' ? 'Manual' : 'Tutorial'}</h1>
  <p class="subtitle">${opts.lang === 'fr' ? 'Documentation Hydrogen' : opts.lang === 'it' ? 'Documentazione Hydrogen' : 'Hydrogen Documentation'}</p>
  <h2>Table of Contents</h2>
  <ul>
        ${tocItems}
  </ul>
  <p class="version">Version ${opts.version === 'current' ? 'latest' : opts.version} &middot; ${opts.lang.toUpperCase()} &middot; Generated from Docusaurus</p>
</body>
</html>`;

  return indexHtml;
}

// ─── Main export ─────────────────────────────────────────────────────────────

async function main() {
  const opts = parseArgs();

  console.log('=== Standalone HTML Export ===');
  console.log(`  Version: ${opts.version}`);
  console.log(`  Language: ${opts.lang}`);
  console.log(`  Type: ${opts.type}`);
  console.log(`  Build dir: ${opts.buildDir}`);
  console.log(`  Docs path: ${opts.docsPath}`);
  console.log(`  Output: ${opts.output}`);
  console.log('');

  // Validate
  if (!fs.existsSync(opts.buildDir)) {
    console.error(`ERROR: Build directory not found: ${opts.buildDir}`);
    console.error('Run "pnpm build" first.');
    process.exit(1);
  }

  if (!fs.existsSync(opts.docsPath)) {
    console.error(`ERROR: Docs path not found: ${opts.docsPath}`);
    console.error(`Available: ${fs.existsSync(path.join(opts.buildDir, 'docs')) ? 'docs/ exists' : 'docs/ missing'}`);
    if (fs.existsSync(path.join(opts.buildDir, 'docs'))) {
      const docsContents = fs.readdirSync(path.join(opts.buildDir, 'docs'));
      console.error(`  Contents of docs/: ${docsContents.join(', ')}`);
    }
    process.exit(1);
  }

  // Clean output
  if (fs.existsSync(opts.output)) {
    fs.rmSync(opts.output, { recursive: true });
  }

  // 1. Copy docs directory
  console.log('Copying docs...');
  copyDir(opts.docsPath, path.join(opts.output, 'docs'));

  // 2. Copy shared assets
  const assetsDir = path.join(opts.buildDir, 'assets');
  if (fs.existsSync(assetsDir)) {
    console.log('Copying assets...');
    copyDir(assetsDir, path.join(opts.output, 'assets'));
  }

  // 3. Copy images
  const imgDir = path.join(opts.buildDir, 'img');
  if (fs.existsSync(imgDir)) {
    console.log('Copying images...');
    copyDir(imgDir, path.join(opts.output, 'img'));
  }

  // 4. Copy CNAME if present (for GitHub Pages)
  const cnamePath = path.join(opts.buildDir, 'CNAME');
  if (fs.existsSync(cnamePath)) {
    fs.copyFileSync(cnamePath, path.join(opts.output, 'CNAME'));
  }

  // 5. Rewrite paths in all HTML files
  console.log('Rewriting paths...');
  let filesRewritten = 0;
  const htmlFiles = fs.readdirSync(path.join(opts.output, 'docs'), { recursive: true });
  for (const file of htmlFiles) {
    if (!file.endsWith('.html')) continue;
    const filePath = path.join(opts.output, 'docs', file);
    let content = fs.readFileSync(filePath, 'utf-8');
    const relPath = path.relative(path.join(opts.output, 'docs'), path.dirname(filePath));
    content = rewritePaths(content, relPath);
    fs.writeFileSync(filePath, content, 'utf-8');
    filesRewritten++;
  }
  console.log(`  Rewrote ${filesRewritten} HTML files`);

  // 6. Generate index.html entry point
  console.log('Generating index.html...');
  const indexHtml = generateIndex(opts);
  if (indexHtml) {
    fs.writeFileSync(path.join(opts.output, 'index.html'), indexHtml, 'utf-8');
  }

  // 7. Summary
  const totalSize = getTotalSize(opts.output);
  console.log('');
  console.log(`=== Export complete ===`);
  console.log(`  Output: ${opts.output}`);
  console.log(`  Files: ${countFiles(opts.output)}`);
  console.log(`  Size: ${formatSize(totalSize)}`);
}

function getTotalSize(dir) {
  let total = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      total += getTotalSize(p);
    } else {
      total += fs.statSync(p).size;
    }
  }
  return total;
}

function countFiles(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += countFiles(p);
    } else {
      count++;
    }
  }
  return count;
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

main().catch(err => {
  console.error('Error:', err.message);
  console.error(err.stack);
  process.exit(1);
});
