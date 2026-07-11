// Console d'administration locale — édite les pages .astro (SEO + Hero)
// et publie via git. Ne tourne jamais que sur la machine du propriétaire ;
// n'est jamais déployée avec le site (dossier hors de src/ et public/).

import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { listEditablePages, readPageFields, writePageFields, pageFilePath, REPO_ROOT } from './lib/pages.mjs';
import { getFileStatus, discardFile, publishFile, getPathsStatus, discardPaths, publishPaths } from './lib/git.mjs';
import { listBlocks, writeBlock } from './lib/blocks.mjs';
import { listCategories } from './lib/navigation.mjs';
import { createPage } from './lib/createPage.mjs';
import { slugify } from './lib/util.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 4400;
const DEFAULT_ASTRO_URL = 'http://localhost:4321';
const FALLBACK_ASTRO_PORT = 4326;

// Le port 4321 est le port par défaut d'Astro : sur une machine avec
// plusieurs projets Astro, un AUTRE projet peut déjà l'occuper. Un simple
// "ça répond" ne suffit donc pas — on vérifie que c'est bien Radio Odyssey
// qui répond (présence du domaine dans le HTML) avant de réutiliser ce port.
let astroUrl = DEFAULT_ASTRO_URL;

function creationPaths(file) {
  return [
    pageFilePath(file),
    path.join(REPO_ROOT, 'src', 'data', 'navigation.js'),
    path.join(REPO_ROOT, 'public', 'sitemap.xml'),
  ];
}

async function isRadioOdysseyRunningAt(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(800) });
    if (!res.ok) return false;
    const text = await res.text();
    return text.includes('radio-odyssey.com');
  } catch {
    return false;
  }
}

async function isAstroDevRunning() {
  return isRadioOdysseyRunningAt(astroUrl);
}

async function ensureAstroDev() {
  if (await isRadioOdysseyRunningAt(DEFAULT_ASTRO_URL)) {
    astroUrl = DEFAULT_ASTRO_URL;
    console.log('→ Aperçu du site déjà lancé sur', astroUrl);
    return;
  }
  astroUrl = `http://localhost:${FALLBACK_ASTRO_PORT}`;
  console.log(`→ Port 4321 indisponible ou occupé par un autre projet — lancement de l'aperçu Radio Odyssey sur le port ${FALLBACK_ASTRO_PORT}…`);
  const child = spawn('npx', ['astro', 'dev', '--port', String(FALLBACK_ASTRO_PORT)], { cwd: REPO_ROOT, stdio: 'inherit' });
  child.on('exit', (code) => {
    if (code) console.error(`L'aperçu du site s'est arrêté (code ${code}).`);
  });
}

function sendJSON(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(body);
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf-8');
  return raw ? JSON.parse(raw) : {};
}

async function serveStatic(res, filePath, contentType) {
  const data = await readFile(filePath);
  res.writeHead(200, { 'Content-Type': contentType });
  res.end(data);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  try {
    if (req.method === 'GET' && url.pathname === '/') {
      return await serveStatic(res, path.join(__dirname, 'public', 'index.html'), 'text/html; charset=utf-8');
    }

    if (req.method === 'GET' && url.pathname === '/api/pages') {
      return sendJSON(res, 200, await listEditablePages());
    }

    if (req.method === 'GET' && url.pathname === '/api/astro-status') {
      return sendJSON(res, 200, { running: await isAstroDevRunning(), url: astroUrl });
    }

    if (url.pathname === '/api/page') {
      const file = url.searchParams.get('file');
      if (!file) return sendJSON(res, 400, { error: 'Paramètre "file" manquant.' });

      if (req.method === 'GET') {
        const [fields, gitStatus] = await Promise.all([readPageFields(file), getFileStatus(file)]);
        return sendJSON(res, 200, { fields, gitStatus });
      }

      if (req.method === 'POST') {
        const fields = await readBody(req);
        await writePageFields(file, fields);
        const gitStatus = await getFileStatus(file);
        return sendJSON(res, 200, { ok: true, gitStatus });
      }
    }

    if (req.method === 'GET' && url.pathname === '/api/blocks') {
      const file = url.searchParams.get('file');
      if (!file) return sendJSON(res, 400, { error: 'Paramètre "file" manquant.' });
      return sendJSON(res, 200, await listBlocks(file));
    }

    if (req.method === 'POST' && url.pathname === '/api/block') {
      const file = url.searchParams.get('file');
      const id = Number(url.searchParams.get('id'));
      if (!file || Number.isNaN(id)) return sendJSON(res, 400, { error: 'Paramètres "file"/"id" manquants.' });
      const { text } = await readBody(req);
      await writeBlock(file, id, text ?? '');
      const gitStatus = await getFileStatus(file);
      return sendJSON(res, 200, { ok: true, gitStatus });
    }

    if (req.method === 'POST' && url.pathname === '/api/publish') {
      const file = url.searchParams.get('file');
      if (!file) return sendJSON(res, 400, { error: 'Paramètre "file" manquant.' });
      const { message } = await readBody(req);
      await publishFile(file, message || `Mettre à jour ${file} via la console`);
      return sendJSON(res, 200, { ok: true, gitStatus: await getFileStatus(file) });
    }

    if (req.method === 'POST' && url.pathname === '/api/discard') {
      const file = url.searchParams.get('file');
      if (!file) return sendJSON(res, 400, { error: 'Paramètre "file" manquant.' });
      await discardFile(file);
      const [fields, gitStatus] = await Promise.all([readPageFields(file), getFileStatus(file)]);
      return sendJSON(res, 200, { ok: true, fields, gitStatus });
    }

    if (req.method === 'GET' && url.pathname === '/api/categories') {
      return sendJSON(res, 200, await listCategories());
    }

    if (req.method === 'GET' && url.pathname === '/api/slugify') {
      const label = url.searchParams.get('label') || '';
      return sendJSON(res, 200, { slug: slugify(label) });
    }

    if (req.method === 'POST' && url.pathname === '/api/create-page') {
      const fields = await readBody(req);
      const { file, href } = await createPage(fields);
      return sendJSON(res, 200, { ok: true, file, href });
    }

    if (req.method === 'GET' && url.pathname === '/api/creation-status') {
      const file = url.searchParams.get('file');
      if (!file) return sendJSON(res, 400, { error: 'Paramètre "file" manquant.' });
      return sendJSON(res, 200, { gitStatus: await getPathsStatus(creationPaths(file)) });
    }

    if (req.method === 'POST' && url.pathname === '/api/publish-creation') {
      const file = url.searchParams.get('file');
      if (!file) return sendJSON(res, 400, { error: 'Paramètre "file" manquant.' });
      const { message } = await readBody(req);
      await publishPaths(creationPaths(file), message || `Créer la page ${file} via la console`);
      return sendJSON(res, 200, { ok: true, gitStatus: await getPathsStatus(creationPaths(file)) });
    }

    if (req.method === 'POST' && url.pathname === '/api/discard-creation') {
      const file = url.searchParams.get('file');
      if (!file) return sendJSON(res, 400, { error: 'Paramètre "file" manquant.' });
      await discardPaths(creationPaths(file));
      return sendJSON(res, 200, { ok: true });
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Introuvable');
  } catch (err) {
    sendJSON(res, 500, { error: err.message });
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`\n✅ Console Radio Odyssey disponible sur http://localhost:${PORT}\n`);
  ensureAstroDev();
});
