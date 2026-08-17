// Source unique des textes d'interface, pour les servir en français ou en
// anglais (§81, lot 2). Avant ce lot, la navigation était écrite en dur en
// français dans Header/MegaNav/Footer/Sidebar : les 13 pages anglaises
// affichaient donc un menu que leur lecteur ne pouvait pas lire.
//
// N'a vocation à porter que les libellés d'interface (menus, boutons,
// mentions de pied de page). Le contenu éditorial reste dans les pages.

export const UI = {
  fr: {
    accueilAria: 'Radio Odyssey — Accueil',
    enDirect: 'EN DIRECT',
    ouvrirMenu: 'Ouvrir le menu',
    fermer: 'Fermer',
    rechercher: 'Rechercher sur le site',
    navPrincipale: 'Navigation principale',
    accueil: 'Accueil',
    pageAccueil: "Page d'accueil",
    voirLesPages: (n) => `Voir les ${n} pages`,
    voirLesPagesCategorie: (n) => `Voir les ${n} pages de la catégorie →`,
    voirTout: 'Voir tout →',
    toutLeSite: 'Tout le site',
    planDuSite: 'Plan du site',
    ecouterEnDirect: 'Écouter en Direct',
    // Sidebar
    ecouterMaintenant: 'Ecouter maintenant',
    sidebarAccroche: 'Radio Odyssey en direct, 24h/24, gratuit et sans pub !',
    lancerLaRadio: 'Lancer la radio',
    explorerLeSite: 'Explorer le site',
    // Footer
    footerBaseline: 'Positive Web Radio ✨',
    footerDescription: 'La webradio positive française — Hits des années 80, dance, easy listening et bien-être, 24h/24, gratuitement, depuis janvier 2025 !',
    ecouterSur: 'Écouter sur',
    partenaire: 'Partenaire',
    droitsReserves: 'Tous droits réservés.',
    depuisLe: 'Depuis le 19 janvier 2025',
    mentionsLegales: 'Mentions légales',
    confidentialite: 'Confidentialité',
    gererCookies: 'Gérer les cookies',
    // Recherche interne (Pagefind)
    rechercheTitre: 'Rechercher sur Radio Odyssey',
    rechercheFermer: 'Fermer la recherche',
    recherchePlaceholder: 'Cohérence cardiaque, années 80, artiste...',
    rechercheAucunResultat: 'Aucun résultat pour [SEARCH_TERM].',
    // Bandeau de consentement
    cookieAria: 'Consentement aux cookies',
    cookieTexte: "Radio Odyssey utilise Google Analytics pour mesurer l'audience du site (statistiques anonymes, pages visitées, provenance). Aucun cookie n'est déposé sans votre accord.",
    cookieEnSavoirPlus: 'En savoir plus',
    cookieRefuser: 'Refuser',
    cookieAccepter: 'Accepter',
    // Lecteur (RadioPlayer.astro)
    lecteurEcouter: 'Écouter Radio Odyssey en direct',
    lecteurPause: 'Mettre la radio en pause',
    lecteurConnexion: 'Connexion en cours',
    lecteurAppuyer: 'Appuyer pour écouter',
    lecteurEnDirectArret: 'En direct · appuyer pour arrêter',
    lecteurLent: 'Connexion trop lente — réessayer',
    lecteurMemoire: 'Mise en mémoire…',
    lecteurSeqTitre: 'Cohérence cardiaque',
    lecteurSeqDuree: (n) => 'Respiration guidée · séquence de ' + n + ' min',
    lecteurSeqDefaut: 'Respiration guidée · inspirez 5 s, expirez 5 s',
    // Alerte navigateur intégré (WebviewBanner.astro)
    webviewTexte: '🎧 Pour une meilleure écoute (lecture en fond, sans coupure), ouvrez ce lien dans votre navigateur.',
    webviewAstuce: 'Astuce : appuyez sur ⋯ en haut à droite, puis « Ouvrir dans le navigateur ».',
    webviewCopier: 'Copier le lien',
    webviewCopie: 'Lien copié !',
  },
  en: {
    accueilAria: 'Radio Odyssey — Home',
    enDirect: 'ON AIR',
    ouvrirMenu: 'Open menu',
    fermer: 'Close',
    rechercher: 'Search the site',
    navPrincipale: 'Main navigation',
    accueil: 'Home',
    pageAccueil: 'English home',
    voirLesPages: (n) => `See all ${n} pages`,
    voirLesPagesCategorie: (n) => `See all ${n} pages →`,
    voirTout: 'See all →',
    toutLeSite: 'Everything in English',
    planDuSite: 'English home',
    ecouterEnDirect: 'Listen Live',
    // Sidebar
    ecouterMaintenant: 'Listen now',
    sidebarAccroche: 'Radio Odyssey live, 24/7, free and ad-free.',
    lancerLaRadio: 'Play the radio',
    explorerLeSite: 'Explore',
    // Footer
    footerBaseline: 'Positive Web Radio ✨',
    footerDescription: 'A free French positive web radio — 80s hits, dance, easy listening and wellbeing, 24/7, since January 2025.',
    ecouterSur: 'Listen on',
    partenaire: 'Partner',
    droitsReserves: 'All rights reserved.',
    depuisLe: 'On air since 19 January 2025',
    mentionsLegales: 'Legal notice',
    confidentialite: 'Privacy',
    gererCookies: 'Manage cookies',
    // Recherche interne (Pagefind)
    rechercheTitre: 'Search Radio Odyssey',
    rechercheFermer: 'Close search',
    recherchePlaceholder: 'Breathing, 80s, feel good...',
    rechercheAucunResultat: 'No results for [SEARCH_TERM].',
    // Bandeau de consentement
    cookieAria: 'Cookie consent',
    cookieTexte: 'Radio Odyssey uses Google Analytics to measure site traffic (anonymous statistics: pages viewed, where visitors come from). No cookie is set without your agreement.',
    cookieEnSavoirPlus: 'Learn more',
    cookieRefuser: 'Decline',
    cookieAccepter: 'Accept',
    // Lecteur (RadioPlayer.astro)
    lecteurEcouter: 'Listen to Radio Odyssey live',
    lecteurPause: 'Pause the radio',
    lecteurConnexion: 'Connecting',
    lecteurAppuyer: 'Tap to listen',
    lecteurEnDirectArret: 'Live · tap to stop',
    lecteurLent: 'Connection too slow — try again',
    lecteurMemoire: 'Buffering…',
    lecteurSeqTitre: 'Heart coherence breathing',
    lecteurSeqDuree: (n) => 'Guided breathing · ' + n + ' min sequence',
    lecteurSeqDefaut: 'Guided breathing · breathe in 5 s, out 5 s',
    // Alerte navigateur intégré (WebviewBanner.astro)
    webviewTexte: '🎧 For uninterrupted background listening, open this link in your browser.',
    webviewAstuce: 'Tip: tap ⋯ at the top right, then "Open in browser".',
    webviewCopier: 'Copy link',
    webviewCopie: 'Link copied!',
  },
};

// Raccourci : t('en').accueil
export const t = (lang) => UI[lang] || UI.fr;

// L'accueil de chaque langue. Avec build.format: 'file', l'accueil anglais
// sort à /en.html et non /en/ — voir §81.
export const ACCUEIL = { fr: '/', en: '/en.html' };

/*
  Sélecteur de langue (§84). Il manquait purement et simplement : depuis une
  page anglaise, aucun chemin de retour vers le français — la règle « pas de
  lien vers du français depuis une page anglaise » du §82 avait supprimé le
  seul qui existait, l'ancien menu français. Un sélecteur de langue est
  précisément le cas où le lien inter-langues est le sujet, pas un accident.

  ⚠️ Ces liens doivent porter `data-astro-reload` : la barre du lecteur est
  en `transition:persist` et survivrait à une navigation client-side avec les
  libellés de la langue précédente. Un chargement complet est la seule façon
  de la reconstruire dans la bonne langue.
*/
export const AUTRE_LANGUE = {
  fr: { code: 'en', label: 'English', aria: 'Switch to English' },
  en: { code: 'fr', label: 'Français', aria: 'Passer en français' },
};

// Cible du sélecteur : la page équivalente si le couple existe (prop
// altLangs de Layout.astro), sinon l'accueil de l'autre langue.
export const cibleAutreLangue = (lang, altLangs) => {
  const autre = AUTRE_LANGUE[lang].code;
  return (altLangs && altLangs[autre]) || ACCUEIL[autre];
};

/*
  Navigation anglaise (§81, lot 2).

  Ce n'est PAS une traduction de NAV_CATEGORIES : les 7 catégories
  françaises comptent 108 pages qui n'existent qu'en français, et la règle
  retenue pour ce chantier est qu'une page anglaise ne montre un lien que si
  sa cible existe en anglais. La navigation anglaise est donc une structure
  propre, courte, sur les seules pages anglaises.

  Trois groupes, dans l'ordre où un visiteur froid se pose les questions :
  ce que j'écoute, ce que ça m'apporte, à qui j'ai affaire.

  ⚠️ Pas de page de hub par catégorie côté anglais : les groupes tiennent en
  5 ou 6 entrées, toutes affichées. Ne pas y appliquer MENU_APERCU.
*/
export const EN_NAV_CATEGORIES = [
  {
    id: 'listen',
    intro: 'What the station sounds like, hour after hour.',
    bi: 'broadcast',
    label: 'Listen',
    pages: [
      { href: '/en/feel-good-music-radio.html', bi: 'emoji-smile', label: 'Feel Good Radio', desc: 'Pure feel-good music, all day' },
      { href: '/en/positive-european-music-station.html', bi: 'globe-europe-africa', label: 'European Positive', desc: 'The best of European positive vibes' },
      { href: '/en/european-chill-radio.html', bi: 'cloud', label: 'European Chill', desc: 'Laid-back European chill vibes' },
      { href: '/en/80s-throwback-radio-online.html', bi: 'clock-history', label: '80s Throwback', desc: 'Classic hits, reimagined' },
      { href: '/en/free-radio-no-ads-no-sign-up.html', bi: 'x-circle', label: 'Free, No Ads, No Sign-Up', desc: '100% free, on every device' },
      { href: '/en/keep-listening-radio-odyssey.html', bi: 'play-circle', label: 'Keep Listening', desc: "Can't stop, won't stop" },
    ],
  },
  {
    id: 'calm',
    intro: 'The breathing sequences, and what they are for.',
    bi: 'activity',
    label: 'Calm & Focus',
    pages: [
      { href: '/en/heart-coherence-breathing-radio.html', bi: 'heart-pulse', label: 'Heart Coherence Breathing', desc: 'Guided breathing woven into the music' },
      { href: '/en/heart-coherence-breathing-at-work.html', bi: 'briefcase', label: 'Breathing at Work', desc: 'Bring it into your workday, no app required' },
      { href: '/en/radio-for-focus-and-productivity.html', bi: 'bullseye', label: 'Focus & Productivity', desc: 'Steady energy for your workday' },
      { href: '/en/music-for-a-better-mood.html', bi: 'heart', label: 'Music for a Better Mood', desc: 'Our positive-radio philosophy' },
      { href: '/en/radio-odyssey-vs-meditation-apps.html', bi: 'peace', label: 'vs. Meditation Apps', desc: 'A no-pressure way to unwind' },
    ],
  },
  {
    id: 'artists',
    intro: 'Who we play, with real figures from our broadcast log.',
    bi: 'people-fill',
    label: 'Artists',
    pages: [
      { href: '/en/artists-on-radio-odyssey.html', bi: 'music-note-list', label: 'All artists we play', desc: 'The full list, with real play figures' },
      { href: '/en/artist-madonna.html', bi: 'stars', label: 'Madonna', desc: '8 tracks in rotation' },
      { href: '/en/artist-queen.html', bi: 'trophy', label: 'Queen', desc: '7 tracks in rotation' },
      { href: '/en/artist-abba.html', bi: 'disc', label: 'Abba', desc: 'Six tracks, all remixed' },
      { href: '/en/artist-coldplay.html', bi: 'soundwave', label: 'Coldplay', desc: '8 tracks in rotation' },
      { href: '/en/artist-dua-lipa.html', bi: 'lightning-charge', label: 'Dua Lipa', desc: '8 tracks in rotation' },
    ],
  },
  {
    id: 'quizzes',
    intro: 'Five decades, 100 questions, no sign-up.',
    bi: 'trophy',
    label: 'Quizzes',
    pages: [
      { href: '/en/music-quizzes.html', bi: 'grid', label: 'All five quizzes', desc: 'Five decades, 100 questions' },
      { href: '/en/80s-music-quiz.html', bi: 'clock-history', label: '80s Music Quiz', desc: 'Billie Jean, Take On Me, Cruel Summer…' },
      { href: '/en/90s-music-quiz.html', bi: 'disc', label: '90s Music Quiz', desc: 'Dance floors and big choruses' },
      { href: '/en/2000s-music-quiz.html', bi: 'soundwave', label: '2000s Music Quiz', desc: 'When pop went global' },
      { href: '/en/2010s-music-quiz.html', bi: 'lightning-charge', label: '2010s Music Quiz', desc: 'Streaming-era hits' },
      { href: '/en/2020s-music-quiz.html', bi: 'stars', label: '2020s Music Quiz', desc: 'The newest additions' },
    ],
  },
  {
    id: 'about',
    intro: 'Who is behind the station, and why it exists.',
    bi: 'info-circle',
    label: 'About',
    pages: [
      { href: '/en/the-story-of-radio-odyssey.html', bi: 'book', label: 'Our Story', desc: 'How a family project became a radio station' },
      { href: '/en/what-makes-radio-odyssey-different.html', bi: 'stars', label: 'What Makes Us Different', desc: 'Why this is not another playlist' },
      { href: '/en/radio-odyssey-faq.html', bi: 'chat-dots', label: 'FAQ', desc: 'Everything you might want to ask' },
      { href: '/en/elisabeth-belot-grimaud-radio-odyssey.html', bi: 'person-badge', label: 'Our Health Partner', desc: 'The psychologist behind the breathing sequences' },
      { href: '/en/listen-on-tunein.html', bi: 'phone', label: 'How to Listen on TuneIn', desc: 'The easiest way to tune in worldwide' },
      { href: '/en/why-positive-radio-is-trending.html', bi: 'lightning-charge', label: 'Why Positive Radio Is Trending', desc: 'Doomscrolling fatigue, explained' },
    ],
  },
];
