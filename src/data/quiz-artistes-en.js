/*
  Croisement quiz anglais ↔ fiches artistes anglaises (§89).

  Même principe que `quiz-artistes.js` : la correspondance est extraite du
  code source des quiz **au moment du build**, jamais recopiée à la main, donc
  impossible à désynchroniser. La différence tient au périmètre — ce module ne
  lit que les quiz anglais (`src/pages/en/*quiz*.astro`), pour qu'une fiche
  anglaise ne renvoie jamais vers un quiz en français (§82).

  ⚠️ Si l'extraction ne trouve rien, la fonction renvoie un tableau vide et le
  bloc quiz disparaît simplement des fiches — rien ne casse, mais rien ne
  signale non plus. C'est exactement ce qui est arrivé au §69 côté français.
  Le contrôle de non-régression est donc explicite : après build, les fiches
  des artistes présents dans un quiz anglais doivent afficher le bloc.
*/
const SOURCES = import.meta.glob('../pages/en/*quiz*.astro', {
  query: '?raw',
  import: 'default',
  eager: true,
});

// Le libellé ne se déduit pas du nom de fichier : il est déclaré ici.
const LIBELLES = {
  '80s-music-quiz': 'our 80s music quiz',
  '90s-music-quiz': 'our 90s music quiz',
  '2000s-music-quiz': 'our 2000s music quiz',
  '2010s-music-quiz': 'our 2010s music quiz',
  '2020s-music-quiz': 'our 2020s music quiz',
};

function construire() {
  const index = {};
  for (const [chemin, source] of Object.entries(SOURCES)) {
    const nom = chemin.split('/').pop().replace('.astro', '');
    const libelle = LIBELLES[nom];
    if (!libelle) continue;
    const href = `/en/${nom}.html`;

    // `track:` = « de qui est ce morceau ? » ; `enonce:` = question sur
    // l'univers de la radio. Les deux formats sont acceptés, comme côté
    // français, pour que la traduction d'un quiz thématique fonctionne
    // sans toucher à ce fichier.
    const motif = /\{\s*(?:track|enonce):\s*(["'`])([\s\S]*?)\1\s*,\s*correct:\s*'([a-z0-9-]+)'/g;
    let m;
    while ((m = motif.exec(source)) !== null) {
      const texte = m[2];
      const slug = m[3];
      (index[slug] ||= []).push({ href, libelle, texte });
    }
  }
  return index;
}

const INDEX = construire();

export function quizEnDeLArtiste(slug) {
  return INDEX[slug] || [];
}
