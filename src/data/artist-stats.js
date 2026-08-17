// Statistiques de diffusion par artiste.
//
// Pourquoi ce fichier : une fiche artiste ne vaut que par ce qu'elle est
// seule à pouvoir dire. Les trois `facts` et le `why` d'artists.js sont du
// texte rédigé, mais leur structure est identique d'une fiche à l'autre ;
// mesuré sur le HTML construit (shingles de 6 mots, hors barre latérale),
// le corps des 115 fiches ne comptait que 45,8 % de segments singuliers,
// et 35,8 % pour la plus faible d'entre elles.
//
// Tout ce qui suit est **calculé** à partir des passages réels relevés dans
// l'export RadioKing — donc exact, différent sur chaque fiche, et
// impossible à recopier ailleurs sur le web. Aucune donnée n'est inventée :
// si une information n'est pas dérivable d'artists.js ou de genres.js, elle
// n'apparaît pas ici.
//
// ⚠️ Une seule source : ARTISTS. Si un playCount change, tout suit.

import { ARTISTS } from './artists.js';
import { GENRE_FAMILIES, artistsForFamily, familyForArtist } from './genres.js';

/** Durée, en jours, de la fenêtre de relevé déclarée dans artists.js. */
export const JOURS_RELEVE = 92;

/** Libellé de la période, affiché tel quel sur les fiches. */
export const PERIODE_RELEVE = 'du 14 mai au 13 août 2026';
// ⚠️ Même fenêtre, libellée en anglais pour les fiches artistes anglaises
// (§86). À changer EN MÊME TEMPS que PERIODE_RELEVE et JOURS_RELEVE si la
// fenêtre de comptage bouge — trois constantes, une seule réalité.
export const PERIODE_RELEVE_EN = '14 May to 13 August 2026';

const CLASSEMENT = [...ARTISTS].sort((a, b) => b.playCount - a.playCount);
const TOTAL_PASSAGES = ARTISTS.reduce((n, a) => n + a.playCount, 0);
const MOYENNE = TOTAL_PASSAGES / ARTISTS.length;

// Classements par famille de genre, calculés une fois pour toutes.
const PAR_FAMILLE = new Map();
for (const famille of GENRE_FAMILIES) {
  PAR_FAMILLE.set(
    famille.slug,
    artistsForFamily(famille, ARTISTS).sort((a, b) => b.playCount - a.playCount)
  );
}

/** Nombre total de passages relevés, toutes fiches confondues. */
export const TOTAL_PASSAGES_ARTISTES = TOTAL_PASSAGES;

/** Moyenne de passages par artiste (sert de repère dans le texte). */
export const MOYENNE_PASSAGES = MOYENNE;

/**
 * Toutes les données chiffrées d'une fiche, en un seul appel.
 *
 * @param {string} slug
 * @returns {{
 *   rang: number, total: number, passages: number, part: string,
 *   auDessusMoyenne: boolean, ecartMoyenne: number,
 *   exAequo: object[], nbExAequo: number,
 *   devant: object|null, derriere: object|null,
 *   famille: object|null, familleRang: number, familleTotal: number,
 *   familleVoisins: object[],
 * }}
 */
export function statsArtiste(slug) {
  const artiste = ARTISTS.find((a) => a.slug === slug);
  if (!artiste) throw new Error(`statsArtiste : slug inconnu « ${slug} »`);

  const rang = CLASSEMENT.findIndex((a) => a.slug === slug) + 1;
  const famille = familyForArtist(artiste);
  const listeFamille = famille ? PAR_FAMILLE.get(famille.slug) : [];
  const familleRang = famille
    ? listeFamille.findIndex((a) => a.slug === slug) + 1
    : 0;

  // Voisins au classement général : un repère concret, et deux liens
  // internes différents sur chaque fiche.
  //
  // ⚠️ Les ex æquo sont nombreux dans le bas du classement (une douzaine
  // d'artistes à 24 passages). Comparer par position de tableau y écrivait
  // « juste derrière Shawn Mendes (24) et juste devant Baltimora (24) »
  // pour un artiste à 24 passages : trois fois le même chiffre, présenté
  // comme un écart. On sépare donc strictement au-dessus / à égalité /
  // strictement en dessous.
  //
  // Les ex æquo sont cités par rotation à partir de la position de l'artiste
  // dans ARTISTS, et non toujours dans le même ordre : sans cela, les douze
  // fiches à 24 passages affichaient toutes la même phrase, avec les deux
  // mêmes noms. La rotation répartit aussi les liens entrants sur l'ensemble
  // du groupe au lieu de les concentrer sur deux fiches.
  const monIndex = ARTISTS.findIndex((a) => a.slug === slug);
  const exAequo = ARTISTS.map((a, i) => ({ a, i }))
    .filter(({ a }) => a.slug !== slug && a.playCount === artiste.playCount)
    .sort(
      (x, y) =>
        ((x.i - monIndex + ARTISTS.length) % ARTISTS.length) -
        ((y.i - monIndex + ARTISTS.length) % ARTISTS.length)
    )
    .map((x) => x.a);
  const devant = [...CLASSEMENT]
    .filter((a) => a.playCount > artiste.playCount)
    .pop() || null;
  const derriere =
    CLASSEMENT.find((a) => a.playCount < artiste.playCount) || null;

  // Voisins dans la famille de genre. On écarte ceux déjà cités comme
  // voisins généraux ou ex æquo : sans ce filtre, la même fiche apparaissait
  // deux fois dans le même paragraphe.
  const dejaCites = new Set(
    [devant, derriere, ...exAequo.slice(0, 2)].filter(Boolean).map((a) => a.slug)
  );
  const familleVoisins = famille
    ? listeFamille
        .map((a, i) => ({ a, distance: Math.abs(i - (familleRang - 1)) }))
        .filter((x) => x.a.slug !== slug && !dejaCites.has(x.a.slug))
        .sort((x, y) => x.distance - y.distance)
        .slice(0, 2)
        .map((x) => x.a)
    : [];

  const part = (100 * artiste.playCount) / TOTAL_PASSAGES;

  // Fréquence ramenée à la semaine : « 5,6 fois par semaine » se représente
  // immédiatement, « 272 passages sur trois mois » beaucoup moins.
  // ⚠️ Le diviseur suit la fenêtre déclarée dans artists.js. Elle est passée
  // d'un mois à trois mois glissants au §63 : toute nouvelle fenêtre impose
  // de corriger JOURS_RELEVE, sinon la fréquence affichée est fausse.
  const parSemaine = (artiste.playCount * 7) / JOURS_RELEVE;

  return {
    rang,
    total: ARTISTS.length,
    passages: artiste.playCount,
    // Deux décimales : sous 1 %, un arrondi à l'unité afficherait « 0 % ».
    part: part.toFixed(2).replace('.', ','),
    parSemaine: parSemaine.toFixed(1).replace('.', ','),
    auDessusMoyenne: artiste.playCount > MOYENNE,
    ecartMoyenne: Math.round(Math.abs(artiste.playCount - MOYENNE)),
    exAequo: exAequo.slice(0, 2),
    nbExAequo: exAequo.length,
    devant,
    derriere,
    famille,
    familleRang,
    familleTotal: listeFamille.length,
    familleVoisins,
  };
}

/**
 * Quartile de diffusion (1 = le quart le plus diffusé). Sert à formuler la
 * fréquence en langage clair plutôt qu'en rang brut, que peu de lecteurs
 * savent interpréter sur 115 artistes.
 */
export function quartileArtiste(slug) {
  const rang = CLASSEMENT.findIndex((a) => a.slug === slug) + 1;
  return Math.min(4, Math.ceil((rang / CLASSEMENT.length) * 4));
}

/** Ordinal français : 1 → « 1er », les autres → « 2e ». */
export function ordinal(n) {
  return n === 1 ? '1er' : `${n}e`;
}
