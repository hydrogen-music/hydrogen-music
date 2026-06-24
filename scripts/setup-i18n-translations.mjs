#!/usr/bin/env node
/**
 * Set up FR/IT i18n translations and version-1.2 sidebar JSON
 */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '..');
const I18N = path.join(ROOT, 'i18n');

// ─── FR Translations ──────────────────────────────────────────────────────────

const frNavbar = {
  "title": { "message": "Hydrogen", "description": "The title in the navbar" },
  "logo.alt": { "message": "Logo Hydrogen", "description": "The alt text of navbar logo" },
  "item.label.Docs": { "message": "Docs", "description": "Navbar item with label Docs" },
  "item.label.Blog": { "message": "Blog", "description": "Navbar item with label Blog" },
  "item.label.Features": { "message": "Fonctionnalités", "description": "Navbar item with label Features" },
  "item.label.Downloads": { "message": "Téléchargements", "description": "Navbar item with label Downloads" },
  "item.label.FAQ": { "message": "FAQ", "description": "Navbar item with label FAQ" },
  "item.label.Screenshots": { "message": "Captures d'écran", "description": "Navbar item with label Screenshots" },
  "item.label.Dev Zone": { "message": "Zone Développeur", "description": "Navbar item with label Dev Zone" },
  "item.label.GitHub": { "message": "GitHub", "description": "Navbar item with label GitHub" },
};

const frFooter = {
  "link.title.Docs": { "message": "Documentation", "description": "The title of the footer links column with title=Docs in the footer" },
  "link.title.Project": { "message": "Projet", "description": "The title of the footer links column with title=Project in the footer" },
  "link.title.Community": { "message": "Communauté", "description": "The title of the footer links column with title=Community in the footer" },
  "link.item.label.Manual": { "message": "Manuel", "description": "The label of footer link with label=Manual linking to /docs/manual/intro" },
  "link.item.label.Tutorial": { "message": "Tutoriel", "description": "The label of footer link with label=Tutorial linking to /docs/tutorial/intro" },
  "link.item.label.Features": { "message": "Fonctionnalités", "description": "The label of footer link with label=Features linking to /features" },
  "link.item.label.Downloads": { "message": "Téléchargements", "description": "The label of footer link with label=Downloads linking to /downloads" },
  "link.item.label.FAQ": { "message": "FAQ", "description": "The label of footer link with label=FAQ linking to /faq" },
  "link.item.label.Screenshots": { "message": "Captures d'écran", "description": "The label of footer link with label=Screenshots linking to /screenshots" },
  "link.item.label.Forum": { "message": "Forum", "description": "The label of footer link with label=Forum" },
  "link.item.label.GitHub": { "message": "GitHub", "description": "The label of footer link with label=GitHub" },
  "copyright": { "message": "Copyright © 2026 Hydrogen Music. Construit avec Docusaurus.", "description": "The footer copyright" },
};

const frSidebar = {
  "version.label": { "message": "Prochain", "description": "The label for version current" },
  "sidebar.docsSidebar.category.Manual": { "message": "Manuel", "description": "The label for category 'Manual' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.getting-started": { "message": "Démarrage", "description": "The label for category 'getting-started' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.using-hydrogen": { "message": "Utiliser Hydrogen", "description": "The label for category 'using-hydrogen' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.overview": { "message": "Aperçu", "description": "The label for category 'overview' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.preferences": { "message": "Préférences", "description": "The label for category 'preferences' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.main-menu": { "message": "Menu principal", "description": "The label for category 'main-menu' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.main-toolbar": { "message": "Barre d'outils", "description": "The label for category 'main-toolbar' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.song-editor": { "message": "Éditeur de morceau", "description": "The label for category 'song-editor' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.pattern-editor": { "message": "Éditeur de pattern", "description": "The label for category 'pattern-editor' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.mixer": { "message": "Mixeur", "description": "The label for category 'mixer' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.midi": { "message": "MIDI", "description": "The label for category 'midi' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.examples": { "message": "Exemples", "description": "The label for category 'examples' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.reference": { "message": "Référence", "description": "The label for category 'reference' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.Tutorial": { "message": "Tutoriel", "description": "The label for category 'Tutorial' in sidebar 'docsSidebar'" },
};

// ─── IT Translations ──────────────────────────────────────────────────────────

const itNavbar = {
  "title": { "message": "Hydrogen", "description": "The title in the navbar" },
  "logo.alt": { "message": "Logo Hydrogen", "description": "The alt text of navbar logo" },
  "item.label.Docs": { "message": "Documentazione", "description": "Navbar item with label Docs" },
  "item.label.Blog": { "message": "Blog", "description": "Navbar item with label Blog" },
  "item.label.Features": { "message": "Funzionalità", "description": "Navbar item with label Features" },
  "item.label.Downloads": { "message": "Download", "description": "Navbar item with label Downloads" },
  "item.label.FAQ": { "message": "FAQ", "description": "Navbar item with label FAQ" },
  "item.label.Screenshots": { "message": "Screenshot", "description": "Navbar item with label Screenshots" },
  "item.label.Dev Zone": { "message": "Zona Sviluppatori", "description": "Navbar item with label Dev Zone" },
  "item.label.GitHub": { "message": "GitHub", "description": "Navbar item with label GitHub" },
};

const itFooter = {
  "link.title.Docs": { "message": "Documentazione", "description": "The title of the footer links column with title=Docs in the footer" },
  "link.title.Project": { "message": "Progetto", "description": "The title of the footer links column with title=Project in the footer" },
  "link.title.Community": { "message": "Comunità", "description": "The title of the footer links column with title=Community in the footer" },
  "link.item.label.Manual": { "message": "Manuale", "description": "The label of footer link with label=Manual linking to /docs/manual/intro" },
  "link.item.label.Tutorial": { "message": "Tutorial", "description": "The label of footer link with label=Tutorial linking to /docs/tutorial/intro" },
  "link.item.label.Features": { "message": "Funzionalità", "description": "The label of footer link with label=Features linking to /features" },
  "link.item.label.Downloads": { "message": "Download", "description": "The label of footer link with label=Downloads linking to /downloads" },
  "link.item.label.FAQ": { "message": "FAQ", "description": "The label of footer link with label=FAQ linking to /faq" },
  "link.item.label.Screenshots": { "message": "Screenshot", "description": "The label of footer link with label=Screenshots linking to /screenshots" },
  "link.item.label.Forum": { "message": "Forum", "description": "The label of footer link with label=Forum" },
  "link.item.label.GitHub": { "message": "GitHub", "description": "The label of footer link with label=GitHub" },
  "copyright": { "message": "Copyright © 2026 Hydrogen Music. Realizzato con Docusaurus.", "description": "The footer copyright" },
};

const itSidebar = {
  "version.label": { "message": "Prossimo", "description": "The label for version current" },
  "sidebar.docsSidebar.category.Manual": { "message": "Manuale", "description": "The label for category 'Manual' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.getting-started": { "message": "Introduzione", "description": "The label for category 'getting-started' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.using-hydrogen": { "message": "Usare Hydrogen", "description": "The label for category 'using-hydrogen' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.overview": { "message": "Panoramica", "description": "The label for category 'overview' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.preferences": { "message": "Preferenze", "description": "The label for category 'preferences' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.main-menu": { "message": "Menu principale", "description": "The label for category 'main-menu' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.main-toolbar": { "message": "Barra degli strumenti", "description": "The label for category 'main-toolbar' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.song-editor": { "message": "Editor brano", "description": "The label for category 'song-editor' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.pattern-editor": { "message": "Editor pattern", "description": "The label for category 'pattern-editor' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.mixer": { "message": "Mixer", "description": "The label for category 'mixer' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.midi": { "message": "MIDI", "description": "The label for category 'midi' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.examples": { "message": "Esempi", "description": "The label for category 'examples' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.reference": { "message": "Riferimenti", "description": "The label for category 'reference' in sidebar 'docsSidebar'" },
  "sidebar.docsSidebar.category.Tutorial": { "message": "Tutorial", "description": "The label for category 'Tutorial' in sidebar 'docsSidebar'" },
};

// ─── Write all translation files ─────────────────────────────────────────────

function writeJson(dir, file, data) {
  const p = path.join(dir, file);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  console.log(`  ✓ ${p}`);
}

console.log('=== Writing FR translations ===\n');
writeJson(path.join(I18N, 'fr', 'docusaurus-theme-classic'), 'navbar.json', frNavbar);
writeJson(path.join(I18N, 'fr', 'docusaurus-theme-classic'), 'footer.json', frFooter);
writeJson(path.join(I18N, 'fr', 'docusaurus-plugin-content-docs'), 'current.json', frSidebar);

// Copy current.json to version-1.2.json
const frV12Path = path.join(I18N, 'fr', 'docusaurus-plugin-content-docs', 'version-1.2.json');
if (fs.existsSync(frV12Path)) {
  const existing = JSON.parse(fs.readFileSync(frV12Path, 'utf-8'));
  // Merge: keep existing keys, update with our translations
  const merged = { ...existing, ...frSidebar };
  merged['version.label'].message = 'v1.2';
  writeJson(path.join(I18N, 'fr', 'docusaurus-plugin-content-docs'), 'version-1.2.json', merged);
}

console.log('\n=== Writing IT translations ===\n');
writeJson(path.join(I18N, 'it', 'docusaurus-theme-classic'), 'navbar.json', itNavbar);
writeJson(path.join(I18N, 'it', 'docusaurus-theme-classic'), 'footer.json', itFooter);
writeJson(path.join(I18N, 'it', 'docusaurus-plugin-content-docs'), 'current.json', itSidebar);

// Copy current.json to version-1.2.json
const itV12Path = path.join(I18N, 'it', 'docusaurus-plugin-content-docs', 'version-1.2.json');
if (fs.existsSync(itV12Path)) {
  const existing = JSON.parse(fs.readFileSync(itV12Path, 'utf-8'));
  const merged = { ...existing, ...itSidebar };
  merged['version.label'].message = 'v1.2';
  writeJson(path.join(I18N, 'it', 'docusaurus-plugin-content-docs'), 'version-1.2.json', merged);
}

console.log('\nDone.');
