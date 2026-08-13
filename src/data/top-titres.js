// Croisement fiches artistes ↔ classement des titres les plus diffusés.
//
// La page /titres-les-plus-diffuses-sur-radio-odyssey.html publie le top 15
// des titres, avec le `slug` de la fiche artiste quand elle existe. On peut
// donc dire, sur une fiche, quel titre de l'artiste figure au classement et
// à quel rang — une information exacte, exclusive au site, et qui ne
// concerne qu'une poignée de fiches (donc réellement différenciante).
//
// Même principe que data/quiz-artistes.js : l'extraction se fait sur le
// code source **au moment du build**, jamais par recopie. Si le format du
// tableau change et que rien n'est trouvé, la fonction renvoie null et le
// bloc disparaît simplement des fiches — aucune casse, aucune donnée fausse.

const SOURCE = import.meta.glob(
  '../pages/titres-les-plus-diffuses-sur-radio-odyssey.astro',
  { query: '?raw', import: 'default', eager: true }
);

const HREF = '/titres-les-plus-diffuses-sur-radio-odyssey.html';

function construire() {
  const index = {};
  for (const source of Object.values(SOURCE)) {
    if (typeof source !== 'string') continue;

    // { rank: 3, slug: 'bruno-mars', name: 'Bruno Mars', track: 'I Just Might' },
    // Le titre est tantôt entre guillemets doubles, tantôt entre apostrophes.
    const lignes = source.matchAll(
      /\{\s*rank:\s*(\d+),\s*slug:\s*'([a-z0-9-]+)',\s*name:\s*'[^']*',\s*track:\s*(?:'([^']*)'|"([^"]*)")/g
    );
    for (const l of lignes) {
      const [, rang, slug, t1, t2] = l;
      // Un artiste peut figurer plusieurs fois : on garde son meilleur rang.
      const entree = { rang: Number(rang), titre: t1 ?? t2, href: HREF };
      if (!index[slug] || entree.rang < index[slug].rang) index[slug] = entree;
    }
  }
  return index;
}

const INDEX = construire();

/** Entrée de l'artiste au top des titres, ou null s'il n'y figure pas. */
export function topTitreDeLArtiste(slug) {
  return INDEX[slug] || null;
}

/** Nombre de fiches artistes représentées au classement des titres. */
export const NB_ARTISTES_AU_TOP_TITRES = Object.keys(INDEX).length;
