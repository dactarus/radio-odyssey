// Création d'une nouvelle page thématique : génère le fichier .astro à
// partir du gabarit maison (Layout + PageHero + content-cards + Sidebar +
// CTA), l'enregistre dans src/pages/, l'enregistre dans la catégorie
// choisie de navigation.js (menu, hub, footer) et ajoute son URL à
// public/sitemap.xml. Trois fichiers touchés, considérés comme un seul lot
// pour publier/annuler (voir git.mjs).

import { writeFile, access } from 'node:fs/promises';
import { pageFilePath, encodeAttr } from './pages.mjs';
import { validateBlockHtml } from './blocks.mjs';
import { addPageToCategory, getCategory, hrefExists } from './navigation.mjs';
import { addSitemapUrl } from './sitemap.mjs';

async function fileExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

function buildSection({ heading, text }) {
  validateBlockHtml(text);
  if (heading) validateBlockHtml(heading);
  const headingHtml = heading ? `\n            <h2>${heading}</h2>` : '';
  return `          <div class="content-card">${headingHtml}\n            <p>${text}</p>\n          </div>`;
}

function buildSource(fields, categoryIcon) {
  const sectionsHtml = fields.sections.map(buildSection).join('\n\n');
  return `---
import Layout from '../layouts/Layout.astro';
import PageHero from '../components/PageHero.astro';
import Sidebar from '../components/Sidebar.astro';
---
<Layout
  lang="fr"
  title="${encodeAttr(fields.seoTitle)}"
  description="${encodeAttr(fields.seoDescription)}"
>
  <PageHero
    gradientFrom="${encodeAttr(fields.gradientFrom)}"
    gradientTo="${encodeAttr(fields.gradientTo)}"
    homeLabel="🏠 Accueil"
    breadcrumbCurrent="${encodeAttr(fields.heroTitle)}"
    title="${encodeAttr(fields.heroTitle)}"
    text="${encodeAttr(fields.heroText)}"
  >
    <Fragment slot="icon">
      ${categoryIcon}
    </Fragment>
  </PageHero>

  <main class="ro-section">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-8">

${sectionsHtml}

          <div class="page-cta-bar">
            <h3>Écoutez Radio Odyssey dès maintenant</h3>
            <a href="#" onclick="roPlayNow(event)" class="btn-hero">
              <i class="bi bi-broadcast-pin"></i> Écouter en Direct
            </a>
          </div>

        </div>
        <div class="col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
  </main>
</Layout>
`;
}

export async function createPage(fields) {
  const { categoryId, slug, label, desc, seoTitle, seoDescription, heroTitle, heroText, gradientFrom, gradientTo, sections } = fields;

  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error("L'adresse de la page ne doit contenir que des lettres minuscules, chiffres et tirets.");
  }
  if (!label || !desc || !seoTitle || !seoDescription || !heroTitle || !heroText) {
    throw new Error('Merci de remplir tous les champs obligatoires.');
  }
  const validSections = (sections || []).filter((s) => s.text && s.text.trim());
  if (!validSections.length) {
    throw new Error('Ajoutez au moins un paragraphe de contenu.');
  }

  const file = `${slug}.astro`;
  const href = `/${slug}.html`;
  const filePath = pageFilePath(file);

  if (await fileExists(filePath)) {
    throw new Error(`Le fichier "${file}" existe déjà — choisissez une autre adresse.`);
  }
  if (await hrefExists(href)) {
    throw new Error(`L'adresse "${href}" est déjà utilisée par une autre page.`);
  }

  const category = await getCategory(categoryId);
  const source = buildSource({ seoTitle, seoDescription, heroTitle, heroText, gradientFrom, gradientTo, sections: validSections }, category.icon);

  await writeFile(filePath, source, 'utf-8');
  await addPageToCategory(categoryId, { href, bi: category.bi, label, desc });
  await addSitemapUrl(`${slug}.html`);

  return { file, href };
}
