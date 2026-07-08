// Phase 2 : édition des blocs de texte du corps de page (titres h2/h3,
// paragraphes, éléments de liste). Contrairement aux champs SEO/Hero
// (attributs isolés), ce texte est mélangé à du HTML — on autorise donc
// seulement un petit jeu de balises de mise en forme, et on refuse
// d'écrire si les balises ne sont pas correctement équilibrées, pour ne
// jamais produire une page cassée.

import { readFile, writeFile } from 'node:fs/promises';
import { pageFilePath } from './pages.mjs';

const BLOCK_TAGS = 'h2|h3|p|li';
const ALLOWED_INLINE_TAGS = new Set(['strong', 'em', 'b', 'i', 'a', 'br', 'span', 'sup', 'sub', 'u']);
const FORBIDDEN_PATTERN = /<\s*(script|style|iframe|h1|h2|h3|h4|h5|h6|p|li|ul|ol|div|section|table|img|svg|form|input|button)\b/i;

function splitFrontmatter(source) {
  const start = source.indexOf('---');
  const end = start === 0 ? source.indexOf('---', 3) : -1;
  if (start !== 0 || end === -1) {
    return { frontmatter: '', body: source };
  }
  const bodyOffset = end + 3;
  return { frontmatter: source.slice(0, bodyOffset), body: source.slice(bodyOffset) };
}

function scanBlocks(body) {
  const re = new RegExp(`<(${BLOCK_TAGS})\\b[^>]*>([\\s\\S]*?)<\\/\\1>`, 'g');
  const blocks = [];
  let m;
  while ((m = re.exec(body))) {
    const [full, tag, inner] = m;
    const closingLen = `</${tag}>`.length;
    const openingLen = full.length - inner.length - closingLen;
    blocks.push({
      id: blocks.length,
      tag,
      text: inner,
      innerStart: m.index + openingLen,
      innerEnd: m.index + openingLen + inner.length,
    });
  }
  return blocks;
}

function previewOf(text) {
  return text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 90);
}

export function validateBlockHtml(text) {
  if (FORBIDDEN_PATTERN.test(text)) {
    throw new Error("Balise non autorisée détectée (ex : une nouvelle section, une image ou un script). N'utilisez que du texte simple, éventuellement avec <strong> ou <em>.");
  }
  const tagRe = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*?(\/)?>/g;
  const stack = [];
  let m;
  while ((m = tagRe.exec(text))) {
    const [full, rawName, selfClosed] = m;
    const name = rawName.toLowerCase();
    if (name === 'br' || selfClosed) continue;
    if (!ALLOWED_INLINE_TAGS.has(name)) {
      throw new Error(`La balise <${name}> n'est pas autorisée ici.`);
    }
    if (full.startsWith('</')) {
      const top = stack.pop();
      if (top !== name) {
        throw new Error(`Balises mal fermées autour de <${name}> — vérifiez vos balises <strong>, <em>, etc.`);
      }
    } else {
      stack.push(name);
    }
  }
  if (stack.length) {
    throw new Error(`La balise <${stack[stack.length - 1]}> n'est pas refermée — vérifiez le texte avant d'enregistrer.`);
  }
}

export async function listBlocks(file) {
  const source = await readFile(pageFilePath(file), 'utf-8');
  const { body } = splitFrontmatter(source);
  return scanBlocks(body).map(({ id, tag, text }) => ({ id, tag, text, preview: previewOf(text) }));
}

export async function writeBlock(file, blockId, newText) {
  validateBlockHtml(newText);
  const filePath = pageFilePath(file);
  const source = await readFile(filePath, 'utf-8');
  const { frontmatter, body } = splitFrontmatter(source);
  const blocks = scanBlocks(body);
  const target = blocks[blockId];
  if (!target) {
    throw new Error('Bloc introuvable — la page a peut-être changé entre-temps, rechargez-la.');
  }
  const newBody = body.slice(0, target.innerStart) + newText + body.slice(target.innerEnd);
  await writeFile(filePath, frontmatter + newBody, 'utf-8');
}
