// Source unique pour l'attribution "relu par" affichée par AuthorReview.astro
// (§72). Utilisée uniquement sur les pages où Elisabeth Bélot-Grimaud est
// réellement impliquée — les pages consacrées à la cohérence cardiaque,
// dont elle a conçu les séquences diffusées à l'antenne. Ne pas l'utiliser
// sur des pages bien-être plus générales qu'elle n'a pas revues : voir la
// note en tête d'AuthorReview.astro.
export const ELISABETH_REVIEWER = {
  name: 'Elisabeth Bélot-Grimaud',
  title: 'Docteure en psychologie cognitive, partenaire santé de Radio Odyssey',
  href: '/elisabeth-belot-grimaud-radio-odyssey.html',
};

// Date de vérification des faits et sources sur les pages bien-être (§72).
// À mettre à jour si ces pages sont revues à nouveau plus tard.
export const DATE_REVISION_BIEN_ETRE = '2026-08-16';
export const DATE_REVISION_BIEN_ETRE_LABEL = '16 août 2026';

// Sources externes vérifiées (§72), regroupées par sujet pour éviter de les
// ressaisir sur chaque page. Chaque URL a été vérifiée individuellement.
export const SOURCES_COHERENCE_CARDIAQUE = [
  { label: "Inserm (Canal Détox) — La cohérence cardiaque, une technique pour améliorer sa santé : vraiment ?", url: 'https://presse.inserm.fr/canal-detox/la-coherence-cardiaque-une-technique-pour-ameliorer-sa-sante-vraiment/' },
  { label: "Goessl, Curtiss & Hofmann (2017), Psychological Medicine — méta-analyse sur la variabilité de la fréquence cardiaque, le stress et l'anxiété", url: 'https://pubmed.ncbi.nlm.nih.gov/28478782/' },
];

export const SOURCES_MUSICOTHERAPIE = [
  { label: 'Fédération Française des Musicothérapeutes — définition de la musicothérapie', url: 'https://www.musicotherapeutes.fr/presentation/' },
];

export const SOURCES_MUSIQUE_HUMEUR = [
  { label: "Salimpoor et al. (2011), Nature Neuroscience — libération de dopamine liée au plaisir musical", url: 'https://pubmed.ncbi.nlm.nih.gov/21217764/' },
];

export const SOURCES_MUSIQUE_CONCENTRATION = [
  { label: "Kämpfe, Sedlmeier & Renkewitz (2011), Psychology of Music — méta-analyse sur les effets de la musique de fond chez l'adulte", url: 'https://journals.sagepub.com/doi/abs/10.1177/0305735610376261' },
];
