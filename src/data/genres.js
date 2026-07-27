// Regroupement des 100 fiches artistes (artists.js) en 5 grandes familles
// de genre, à partir du champ `genre` réel (export RadioKing) plutôt que
// d'une liste d'artistes recopiée à la main — pas de risque de dérive
// entre cette page et les fiches artistes au fil des ajouts.
//
// Chaque genre exact n'appartient qu'à une seule famille (pas de doublon
// d'un artiste sur deux pages de genre). Les genres trop isolés pour
// justifier une page dédiée (1 seul artiste, ex. reggae, deep house...)
// restent uniquement sur la page hub styles-musicaux-radio-odyssey.html.
export const GENRE_FAMILIES = [
  {
    slug: 'radio-pop-en-ligne',
    label: 'Pop',
    bi: 'mic-fill',
    matchGenres: ['Pop'],
  },
  {
    slug: 'radio-pop-francaise-en-ligne',
    label: 'Pop Française',
    bi: 'flag',
    matchGenres: ['Pop française', 'Variété française', 'Pop / R&B français'],
  },
  {
    slug: 'radio-dance-electro-en-ligne',
    label: 'Dance & Électro',
    bi: 'disc',
    matchGenres: [
      'Dance / Électro', 'Électro', 'Électro / Pop', 'Pop électro',
      'Dance / House', 'Dance / Eurodance', 'Dance / Pop', 'Dance', 'Deep house',
    ],
  },
  {
    slug: 'radio-pop-rock-en-ligne',
    label: 'Pop/Rock',
    bi: 'lightning-charge',
    matchGenres: ['Pop / Rock', 'Rock / Pop', 'Rock', 'Pop rock', 'Synthpop / Rock', 'Rock psychédélique / Pop'],
  },
  {
    slug: 'radio-pop-rnb-en-ligne',
    label: 'Pop/R&B',
    bi: 'heart',
    matchGenres: ['Pop / R&B', 'R&B / Pop', 'Pop / Funk', 'Pop urbaine', 'Pop / Hip-hop', 'R&B / Garage'],
  },
];

export function artistsForFamily(family, ARTISTS) {
  return ARTISTS.filter((a) => family.matchGenres.includes(a.genre));
}

export function familyForArtist(artist) {
  return GENRE_FAMILIES.find((f) => f.matchGenres.includes(artist.genre)) || null;
}
