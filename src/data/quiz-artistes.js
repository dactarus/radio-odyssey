// Croisement quiz ↔ fiches artistes.
//
// Les quiz du site désignent leur bonne réponse par le `slug` d'une fiche
// artiste. On peut donc savoir, pour chaque artiste, dans quel(s) quiz il
// apparaît et sur quoi — une donnée réelle, différente pour chaque fiche, et
// qui relie le silo artistes aux quiz (le contenu qui a valu à Radio Odyssey
// sa première citation dans un Aperçu IA de Google).
//
// Deux familles de quiz coexistent :
//
//   - **par décennie** (`quiz-musical-annees-*.astro`) — la question est un
//     titre, le champ s'appelle `track` : « De qui est ce morceau ? »
//   - **sur l'univers de la radio** (§69) — la question est un énoncé, le
//     champ s'appelle `enonce` : « Quel artiste a… ? »
//
// La correspondance est extraite du code source des quiz **au moment du
// build**, jamais recopiée à la main : elle ne peut donc pas se désynchroniser
// quand un quiz est modifié. Si un format change et que l'extraction ne trouve
// plus rien, la fonction renvoie un tableau vide et le bloc correspondant
// disparaît simplement des fiches — rien ne casse.

const SOURCES = import.meta.glob('../pages/quiz-*.astro', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const LIBELLE_DECENNIE = {
  '80': 'années 80',
  '90': 'années 90',
  '2000': 'années 2000',
  '2010': 'années 2010',
  '2020': 'années 2020',
};

// Quiz thématiques : le libellé ne se déduit pas du nom de fichier.
const THEMATIQUES = {
  'quiz-noms-artistes-radio-odyssey': "d'où viennent leurs noms ?",
  'quiz-records-radio-odyssey': 'records et premières fois',
  'quiz-coulisses-artistes-radio-odyssey': 'les coulisses des titres',
};

function construire() {
  const index = {};

  for (const [chemin, source] of Object.entries(SOURCES)) {
    if (typeof source !== 'string') continue;
    const fichier = chemin.split('/').pop().replace('.astro', '');

    // La page hub liste les quiz sans contenir de questions : on l'ignore.
    const decennie = (fichier.match(/^quiz-musical-annees-(\d+)$/) || [])[1];
    const theme = THEMATIQUES[fichier];
    if (!decennie && !theme) continue;

    const href = `/${fichier}.html`;
    const libelle = decennie
      ? `quiz musical ${LIBELLE_DECENNIE[decennie] || `années ${decennie}`}`
      : `quiz « ${theme} »`;

    // { track: "Titre", correct: 'slug' }  ou  { enonce: "…", correct: 'slug' }
    // Le slug est attendu entre apostrophes (convention du projet), mais on
    // accepte aussi les guillemets doubles : une génération automatique les
    // avait produits, et le bloc quiz disparaissait alors des 147 fiches sans
    // le moindre message d'erreur.
    const questions = source.matchAll(
      /\{\s*(track|enonce):\s*"((?:[^"\\]|\\.)*)",\s*correct:\s*['"]([a-z0-9-]+)['"]/g
    );
    for (const q of questions) {
      const [, champ, texte, slug] = q;
      if (!index[slug]) index[slug] = [];
      index[slug].push({
        type: champ === 'track' ? 'titre' : 'question',
        decennie: decennie ? Number(decennie) : null,
        libelle,
        texte: texte.replace(/\\"/g, '"'),
        href,
      });
    }
  }
  return index;
}

const INDEX = construire();

/**
 * Quiz dans lesquels un artiste est bonne réponse.
 * Les quiz par décennie viennent d'abord, dans l'ordre chronologique, puis
 * les quiz thématiques.
 */
export function quizDeLArtiste(slug) {
  const l = INDEX[slug] || [];
  return [...l].sort((a, b) => {
    if (a.decennie && b.decennie) return a.decennie - b.decennie;
    if (a.decennie) return -1;
    if (b.decennie) return 1;
    return a.libelle.localeCompare(b.libelle);
  });
}

/** Nombre d'artistes du catalogue présents dans au moins un quiz. */
export const NB_ARTISTES_EN_QUIZ = Object.keys(INDEX).length;

/** Nombre de quiz effectivement dépouillés (utile pour les textes). */
export const NB_QUIZ = new Set(
  Object.values(INDEX).flat().map((q) => q.href)
).size;
