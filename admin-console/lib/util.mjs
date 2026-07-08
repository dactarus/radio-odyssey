// Utilitaires partagés par les modules admin-console/lib/*.

import { pathToFileURL } from 'node:url';

// Les modules ES sont mis en cache par Node sur leur URL résolue : sans
// cette astuce (paramètre de requête bidon), une réécriture de
// navigation.js sur disque resterait invisible tant que ce process
// tourne, puisque import() renverrait la version mise en cache.
export async function importFresh(absPath) {
  const url = pathToFileURL(absPath).href + `?t=${Date.now()}`;
  return import(url);
}

const DIACRITICS_RANGE_START = 0x0300;
const DIACRITICS_RANGE_END = 0x036f;

function stripDiacritics(str) {
  let out = '';
  for (const ch of str.normalize('NFD')) {
    const code = ch.codePointAt(0);
    if (code >= DIACRITICS_RANGE_START && code <= DIACRITICS_RANGE_END) continue;
    out += ch;
  }
  return out;
}

export function slugify(str) {
  return stripDiacritics(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function jsQuote(value) {
  const escaped = String(value).replace(/\\/g, '\\\\');
  if (!escaped.includes("'")) return `'${escaped}'`;
  if (!escaped.includes('"')) return `"${escaped}"`;
  return `'${escaped.replace(/'/g, "\\'")}'`;
}
