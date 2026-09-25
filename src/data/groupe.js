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

  ⚠️ À mettre à jour le jour du lancement public (17 novembre 2026) :
  passer RELAX_LANCEE à true — la mention « Lancement le… » disparaît et
  le lien propose d'écouter.
*/
export const RELAX_LANCEE = false;

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
      ? 'Musique apaisante et respiration 4/6 chaque heure'
      : 'Nouvelle station — lancement le 17 novembre 2026',
  },
};
