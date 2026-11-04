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
  Report possible au SAMEDI 5 DÉCEMBRE 2026 si RadioKing ne permet pas d'ouvrir
  la radio gratuitement avant le 28 novembre (information de Frédéric, 5
  novembre : pour le moment on garde le 28 novembre). Si la date bouge, les
  corriger tous.
*/
export const DATE_LANCEMENT_RELAX = '28 novembre 2026';

// Page de présentation du groupe (§109, brief 3.2). Adresse figée.
export const PAGE_GROUPE = {
  href: '/le-groupe-radio-odyssey.html',
  label: 'Le groupe Radio Odyssey',
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
