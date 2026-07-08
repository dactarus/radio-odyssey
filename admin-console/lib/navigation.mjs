// Lecture/écriture ciblée de src/data/navigation.js : lire la liste des
// catégories via import (source unique de vérité pour le site), écrire en
// insérant une ligne d'entrée dans le tableau `pages` de la bonne catégorie
// sans jamais toucher au reste du fichier (pas de reformattage global).

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { REPO_ROOT } from './pages.mjs';
import { importFresh, jsQuote } from './util.mjs';

const NAV_PATH = path.join(REPO_ROOT, 'src', 'data', 'navigation.js');

export async function listCategories() {
  const { NAV_CATEGORIES } = await importFresh(NAV_PATH);
  return NAV_CATEGORIES.map((c) => ({ id: c.id, label: c.label }));
}

export async function getCategory(categoryId) {
  const { NAV_CATEGORIES } = await importFresh(NAV_PATH);
  const cat = NAV_CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) throw new Error(`Catégorie "${categoryId}" introuvable.`);
  return cat;
}

export async function hrefExists(href) {
  const { NAV_CATEGORIES } = await importFresh(NAV_PATH);
  return NAV_CATEGORIES.some((c) => c.hub === href || c.pages.some((p) => p.href === href));
}

function findMatchingBracket(source, openIndex) {
  let depth = 1;
  for (let i = openIndex + 1; i < source.length; i++) {
    if (source[i] === '[') depth++;
    else if (source[i] === ']') {
      depth--;
      if (depth === 0) return i;
    }
  }
  throw new Error('Tableau non refermé dans navigation.js — fichier inattendu.');
}

export async function addPageToCategory(categoryId, { href, bi, label, desc }) {
  const source = await readFile(NAV_PATH, 'utf-8');
  const idRe = new RegExp(`id:\\s*['"]${categoryId}['"]`);
  const idMatch = idRe.exec(source);
  if (!idMatch) {
    throw new Error(`Catégorie "${categoryId}" introuvable dans navigation.js.`);
  }
  const pagesKeyIdx = source.indexOf('pages:', idMatch.index);
  const openBracketIdx = source.indexOf('[', pagesKeyIdx);
  const closeBracketIdx = findMatchingBracket(source, openBracketIdx);
  const insertPos = source.lastIndexOf('\n', closeBracketIdx) + 1;

  const line = `      { href: '${href}', bi: '${bi}', label: ${jsQuote(label)}, desc: ${jsQuote(desc)} },\n`;
  const newSource = source.slice(0, insertPos) + line + source.slice(insertPos);
  await writeFile(NAV_PATH, newSource, 'utf-8');
}
