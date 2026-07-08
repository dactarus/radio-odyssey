// Lecture/écriture des champs éditables (SEO + Hero) directement dans les
// fichiers source .astro, sans passer par un parseur complet du langage —
// on cible juste les attributs des balises <Layout> et <PageHero>, qui sont
// toujours des chaînes littérales sur toutes les pages sauf index.astro.

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { importFresh } from './util.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(__dirname, '..', '..');
export const PAGES_DIR = path.join(REPO_ROOT, 'src', 'pages');

// ── Décodage / encodage des entités dans les attributs ─────────────────────
function decodeEntities(str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

export function encodeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ── Extraction / remplacement d'un attribut dans la première balise trouvée ─
function findTagSpan(source, tagName) {
  const re = new RegExp(`<${tagName}\\b[\\s\\S]*?>`);
  const match = re.exec(source);
  if (!match) return null;
  return { start: match.index, end: match.index + match[0].length, text: match[0] };
}

function getAttr(tagText, attrName) {
  const re = new RegExp(`\\b${attrName}\\s*=\\s*"([^"]*)"`);
  const match = re.exec(tagText);
  return match ? decodeEntities(match[1]) : null;
}

function setAttr(tagText, attrName, value) {
  const re = new RegExp(`(\\b${attrName}\\s*=\\s*")([^"]*)(")`);
  if (!re.test(tagText)) {
    throw new Error(`Attribut "${attrName}" introuvable dans la balise — modification refusée par sécurité.`);
  }
  return tagText.replace(re, `$1${encodeAttr(value)}$3`);
}

function replaceTagAttrs(source, tagName, replacements) {
  const span = findTagSpan(source, tagName);
  if (!span) {
    throw new Error(`Balise <${tagName}> introuvable dans le fichier.`);
  }
  let tag = span.text;
  for (const [attr, value] of Object.entries(replacements)) {
    if (value === undefined) continue;
    tag = setAttr(tag, attr, value);
  }
  return source.slice(0, span.start) + tag + source.slice(span.end);
}

// ── Cas particulier : index.astro (title/description = variables JS) ───────
function getJsConst(source, varName) {
  const re = new RegExp(`const\\s+${varName}\\s*=\\s*(['"])((?:\\\\.|(?!\\1).)*)\\1`);
  const match = re.exec(source);
  if (!match) return null;
  const [, quote, raw] = match;
  return raw.replace(new RegExp(`\\\\${quote}`, 'g'), quote).replace(/\\\\/g, '\\');
}

function setJsConst(source, varName, value) {
  const re = new RegExp(`(const\\s+${varName}\\s*=\\s*)(['"])((?:\\\\.|(?!\\2).)*)\\2`);
  if (!re.test(source)) {
    throw new Error(`Variable "${varName}" introuvable dans le fichier — modification refusée par sécurité.`);
  }
  return source.replace(re, (_, prefix, quote) => {
    const escaped = String(value).replace(/\\/g, '\\\\').replace(new RegExp(quote, 'g'), `\\${quote}`);
    return `${prefix}${quote}${escaped}${quote}`;
  });
}

// ── Liste des pages éditables, groupées comme le méga-menu du site ──────────
export async function listEditablePages() {
  const navPath = path.join(REPO_ROOT, 'src', 'data', 'navigation.js');
  const { NAV_CATEGORIES } = await importFresh(navPath);

  const seen = new Set();
  const groups = [];

  for (const cat of NAV_CATEGORIES) {
    const entries = [];
    for (const p of cat.pages) {
      const file = p.href.replace(/^\//, '').replace(/\.html$/, '.astro');
      seen.add(file);
      entries.push({ file, href: p.href, label: p.label });
    }
    // La page hub elle-même (ex: bien-etre-et-sante.html) mérite aussi d'être éditable.
    const hubFile = cat.hub.replace(/^\//, '').replace(/\.html$/, '.astro');
    seen.add(hubFile);
    entries.unshift({ file: hubFile, href: cat.hub, label: `${cat.label} (page catégorie)` });
    groups.push({ label: cat.label, entries });
  }

  groups.unshift({
    label: 'Accueil',
    entries: [{ file: 'index.astro', href: '/index.html', label: 'Accueil' }],
  });
  seen.add('index.astro');

  const { readdir } = await import('node:fs/promises');
  const allFiles = (await readdir(PAGES_DIR)).filter((f) => f.endsWith('.astro') && !f.includes('['));
  const rest = allFiles.filter((f) => !seen.has(f));
  if (rest.length) {
    groups.push({
      label: 'Autres pages',
      entries: rest.map((file) => ({
        file,
        href: `/${file.replace(/\.astro$/, '.html')}`,
        label: file.replace(/\.astro$/, ''),
      })),
    });
  }

  return groups;
}

function assertKnownFile(file) {
  if (!/^[a-zA-Z0-9_-]+\.astro$/.test(file)) {
    throw new Error('Nom de fichier invalide.');
  }
}

export function pageFilePath(file) {
  assertKnownFile(file);
  return path.join(PAGES_DIR, file);
}

// ── Lecture des champs d'une page ───────────────────────────────────────────
export async function readPageFields(file) {
  const filePath = pageFilePath(file);
  const source = await readFile(filePath, 'utf-8');

  if (file === 'index.astro') {
    return {
      heroAvailable: false,
      title: getJsConst(source, 'title'),
      description: getJsConst(source, 'description'),
      heroTitle: null,
      heroText: null,
      gradientFrom: null,
      gradientTo: null,
    };
  }

  const layoutSpan = findTagSpan(source, 'Layout');
  const heroSpan = findTagSpan(source, 'PageHero');

  return {
    heroAvailable: !!heroSpan,
    title: layoutSpan ? getAttr(layoutSpan.text, 'title') : null,
    description: layoutSpan ? getAttr(layoutSpan.text, 'description') : null,
    heroTitle: heroSpan ? getAttr(heroSpan.text, 'title') : null,
    heroText: heroSpan ? getAttr(heroSpan.text, 'text') : null,
    gradientFrom: heroSpan ? getAttr(heroSpan.text, 'gradientFrom') : null,
    gradientTo: heroSpan ? getAttr(heroSpan.text, 'gradientTo') : null,
  };
}

// ── Écriture des champs d'une page ──────────────────────────────────────────
export async function writePageFields(file, fields) {
  const filePath = pageFilePath(file);
  let source = await readFile(filePath, 'utf-8');

  if (file === 'index.astro') {
    if (fields.title !== undefined) source = setJsConst(source, 'title', fields.title);
    if (fields.description !== undefined) source = setJsConst(source, 'description', fields.description);
    await writeFile(filePath, source, 'utf-8');
    return;
  }

  const layoutReplacements = {};
  if (fields.title !== undefined) layoutReplacements.title = fields.title;
  if (fields.description !== undefined) layoutReplacements.description = fields.description;
  if (Object.keys(layoutReplacements).length) {
    source = replaceTagAttrs(source, 'Layout', layoutReplacements);
  }

  const heroReplacements = {};
  if (fields.heroTitle !== undefined) heroReplacements.title = fields.heroTitle;
  if (fields.heroText !== undefined) heroReplacements.text = fields.heroText;
  if (fields.gradientFrom !== undefined) heroReplacements.gradientFrom = fields.gradientFrom;
  if (fields.gradientTo !== undefined) heroReplacements.gradientTo = fields.gradientTo;
  if (Object.keys(heroReplacements).length) {
    source = replaceTagAttrs(source, 'PageHero', heroReplacements);
  }

  await writeFile(filePath, source, 'utf-8');
}
