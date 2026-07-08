// Opérations git limitées à des chemins connus du dépôt — jamais un chemin
// arbitraire venant du client. Deux modes : un seul fichier de page
// (Phases 1/2) ou un lot de fichiers (création de page : le nouveau
// fichier + navigation.js + sitemap.xml), publiés/annulés ensemble.

import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { unlink } from 'node:fs/promises';
import path from 'node:path';
import { REPO_ROOT, pageFilePath } from './pages.mjs';

const run = promisify(execFile);

const ALLOWED_EXTRA_PATHS = new Set([
  path.join(REPO_ROOT, 'src', 'data', 'navigation.js'),
  path.join(REPO_ROOT, 'public', 'sitemap.xml'),
]);

function assertAllowedPath(absPath) {
  const resolved = path.resolve(absPath);
  const pagesDir = path.join(REPO_ROOT, 'src', 'pages') + path.sep;
  const inPagesDir = resolved.startsWith(pagesDir) && resolved.endsWith('.astro');
  if (!inPagesDir && !ALLOWED_EXTRA_PATHS.has(resolved)) {
    throw new Error('Chemin non autorisé pour une opération git.');
  }
  return resolved;
}

function relPath(file) {
  return path.relative(REPO_ROOT, pageFilePath(file));
}

async function git(args) {
  try {
    const { stdout } = await run('git', args, { cwd: REPO_ROOT });
    return stdout.trim();
  } catch (err) {
    throw new Error(`Commande git échouée (${args.join(' ')}) : ${err.stderr || err.message}`);
  }
}

async function isTracked(rel) {
  try {
    await run('git', ['ls-files', '--error-unmatch', '--', rel], { cwd: REPO_ROOT });
    return true;
  } catch {
    return false;
  }
}

// ── Un seul fichier de page (Phases 1/2) ────────────────────────────────────
export async function getFileStatus(file) {
  const rel = relPath(file);
  const out = await git(['status', '--porcelain', '--', rel]);
  return out ? 'modified' : 'clean';
}

export async function discardFile(file) {
  const rel = relPath(file);
  await git(['checkout', '--', rel]);
}

export async function publishFile(file, message) {
  const rel = relPath(file);
  await git(['add', '--', rel]);
  await git(['commit', '-m', message]);
  await git(['push']);
}

// ── Lot de fichiers (création de page) ──────────────────────────────────────
export async function getPathsStatus(absPaths) {
  const rels = absPaths.map((p) => path.relative(REPO_ROOT, assertAllowedPath(p)));
  const out = await git(['status', '--porcelain', '--', ...rels]);
  return out ? 'modified' : 'clean';
}

export async function discardPaths(absPaths) {
  for (const p of absPaths) {
    const abs = assertAllowedPath(p);
    const rel = path.relative(REPO_ROOT, abs);
    if (await isTracked(rel)) {
      await git(['checkout', '--', rel]);
    } else {
      await unlink(abs).catch(() => {});
    }
  }
}

export async function publishPaths(absPaths, message) {
  const rels = absPaths.map((p) => path.relative(REPO_ROOT, assertAllowedPath(p)));
  await git(['add', '--', ...rels]);
  await git(['commit', '-m', message]);
  await git(['push']);
}
