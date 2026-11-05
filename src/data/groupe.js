/*
  Groupe Radio Odyssey — entrée de navigation vers la station sœur
  ----------------------------------------------------------------
  Seule modification prévue côté Odyssey pour faire exister le groupe
  (décision d'architecture, voie A : voir le CLAUDE.md du dépôt
  radio-odyssey-relax). Utilisé par MegaNav.astro (ordinateur) et
  Header.astro (panneau mobile), pages françaises seulement : Relax n'a
  pas de pages anglaises.

  ⚠️ Le jumeau de ce fichier existe dans radio-odyssey-relax, sous le même
  chemin, avec les rôles inversés (Relax « vous y êtes », Odyssey en lien).
  Changer une formulation ici = la changer là-bas.

  ⚠️ À mettre à jour le jour du lancement public (samedi 28 novembre 2026,
  décalé du 17 novembre le 4 novembre pour l'offre RadioKing du Black Friday) :
  passer RELAX_LANCEE à true — la mention « Lancement le… » disparaît, le lien
  propose d'écouter, et les cinq renvois de `RenvoiRelax.astro` apparaissent
  en fin de page.
*/
export const RELAX_LANCEE = false;

/*
  Date du lancement public de Radio Odyssey Relax — UNE SEULE SOURCE côté
  Odyssey : le menu et la page du groupe la lisent ici.

  ⚠️ Elle vit aussi sur trois autres supports : `DATE_LANCEMENT` dans
  radio-odyssey-relax/src/data/station.js, `DATE_LANCEMENT_RELAX` dans l'appli
  (Appli Radio Odyssey V8/index.html) et les documents du dossier Relax.
  Le 5 novembre (D44), RadioKing a REFUSÉ l'offre gratuite : la radio n'existe qu'à la
  souscription, le 16 novembre si le code Black Friday est accordé en primeur, sinon
  le 27. Le lancement reste affiché au 28 novembre ; le repli du SAMEDI 5 DÉCEMBRE
  2026 (journal Relax D42) redevient d'actualité si la souscription n'a lieu que le 27.
  Si la date bouge, les corriger tous.
*/
// SOURCE UNIQUE : la forme ISO. Les libellés français en sont DÉRIVÉS (« 28 novembre
// 2026 », « samedi 28 novembre 2026 ») — un report ne change que cette ligne.
export const DATE_LANCEMENT_RELAX_ISO = '2026-11-28';
const _jour = new Date(`${DATE_LANCEMENT_RELAX_ISO}T12:00:00`);
export const DATE_LANCEMENT_RELAX = _jour.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
export const JOUR_LANCEMENT_RELAX = _jour.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

// Garde-fou : un environnement de build sans les données de langue française
// écrirait « November » dans le site. On préfère un build qui échoue.
if (!/^\d{1,2} (janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre) \d{4}$/.test(DATE_LANCEMENT_RELAX)) {
  throw new Error(`Date de lancement mal formatée (« ${DATE_LANCEMENT_RELAX} ») : l'environnement de build n'a pas les données de langue française.`);
}

// Page de présentation du groupe (§109, brief 3.2). Adresse figée.
export const PAGE_GROUPE = {
  href: '/le-groupe-radio-odyssey.html',
  label: 'Le groupe Radio Odyssey',
};

// Article d'annonce du lancement (§109, brief 3.3). Adresse validée par Frédéric le
// 5 novembre 2026 : FIGÉE (une fois indexée, elle ne se change plus sans redirection 301).
// La page N'EXISTE PAS tant que
// RELAX_LANCEE est faux (route dynamique sans chemin) : elle naît avec le drapeau.
export const ARTICLE_LANCEMENT = {
  href: '/ouverture-de-radio-odyssey-relax.html',
  label: 'Radio Odyssey Relax est ouverte',
};

export const GROUPE = {
  label: 'Groupe Radio Odyssey',
  ici: {
    nom: 'Radio Odyssey',
    desc: 'Vous y êtes — La Positive Radio',
  },
  soeur: {
    nom: 'Radio Odyssey Relax',
    href: 'https://relax.radio-odyssey.com/',
    desc: RELAX_LANCEE
      ? 'Musique apaisante et respiration guidée à heure ronde'
      : `Nouvelle station — lancement le ${DATE_LANCEMENT_RELAX}`,
  },
};
