// Croisement quiz ↔ fiches artistes.
//
// Les cinq quiz musicaux désignent leur bonne réponse par le `slug` d'une
// fiche artiste. On peut donc savoir, pour chaque artiste, dans quel(s)
// quiz il apparaît et sur quel titre — une donnée réelle, différente pour
// chaque fiche, et qui relie le silo artistes (le plus faible du site) aux
// quiz (le contenu qui a valu à Radio Odyssey sa première citation dans un
// Aperçu IA de Google).
//
// La correspondance est extraite du code source des quiz **au moment du
// build**, jamais recopiée à la main : elle ne peut donc pas se désynchroniser
// quand un quiz est modifié. Si le format des questions change et que
// l'extraction ne trouve plus rien, la fonction renvoie un tableau vide et
// le bloc correspondant disparaît simplement des fiches — rien ne casse.

const SOURCES = import.meta.glob('../pages/quiz-musical-annees-*.astro', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const LIBELLE = {
  '80': 'années 80',
  '90': 'années 90',
  '2000': 'années 2000',
  '2010': 'années 2010',
  '2020': 'années 2020',
};

function construire() {
  const index = {};
  for (const [chemin, source] of Object.entries(SOURCES)) {
    const m = chemin.match(/annees-(\d+)\.astro$/);
    if (!m) continue;
    const decennie = m[1];
    if (typeof source !== 'string') continue;

    // { track: "Titre", correct: 'slug-artiste', choices: [...] }
    const questions = source.matchAll(
      /\{\s*track:\s*"([^"]*)",\s*correct:\s*'([a-z0-9-]+)'/g
    );
    for (const q of questions) {
      const [, titre, slug] = q;
      if (!index[slug]) index[slug] = [];
      index[slug].push({
        decennie,
        libelle: LIBELLE[decennie] || `années ${decennie}`,
        titre,
        href: `/quiz-musical-annees-${decennie}.html`,
      });
    }
  }
  return index;
}

const INDEX = construire();

/** Quiz dans lesquels un artiste apparaît, triés par décennie croissante. */
export function quizDeLArtiste(slug) {
  const l = INDEX[slug] || [];
  return [...l].sort((a, b) => Number(a.decennie) - Number(b.decennie));
}

/** Nombre d'artistes du catalogue présents dans au moins un quiz. */
export const NB_ARTISTES_EN_QUIZ = Object.keys(INDEX).length;
