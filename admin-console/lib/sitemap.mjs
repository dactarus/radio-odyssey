// Ajoute une URL à public/sitemap.xml. Pousser ce fichier sur main
// déclenche automatiquement la notification IndexNow (voir
// .github/workflows/indexnow.yml) — donc pas d'étape supplémentaire à
// prévoir ici, juste bien ajouter l'entrée avant de publier.

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { REPO_ROOT } from './pages.mjs';

const SITEMAP_PATH = path.join(REPO_ROOT, 'public', 'sitemap.xml');
const SITE = 'https://www.radio-odyssey.com';

export async function addSitemapUrl(slugHtml, { priority = '0.7', changefreq = 'monthly' } = {}) {
  const source = await readFile(SITEMAP_PATH, 'utf-8');
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const entry = `  <url>\n    <loc>${SITE}/${slugHtml}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  const closeIdx = source.lastIndexOf('</urlset>');
  if (closeIdx === -1) {
    throw new Error('Balise </urlset> introuvable dans sitemap.xml — fichier inattendu.');
  }
  const newSource = source.slice(0, closeIdx) + entry + source.slice(closeIdx);
  await writeFile(SITEMAP_PATH, newSource, 'utf-8');
}
