// Source unique pour la navigation du site (méga-menu desktop, offcanvas
// mobile, pages hub, tuiles de l'accueil). Ajouter une page ici suffit à
// la faire apparaître partout où c'est pertinent.
export const NAV_CATEGORIES = [
  {
    id: 'bien-etre',
    emoji: '💆',
    label: 'Bien-être & Santé',
    hub: '/bien-etre-et-sante.html',
    hubTitle: 'Bien-être & Santé',
    hubIntro: "Musique positive, respiration guidée et cohérence cardiaque : toutes nos pages pensées pour votre bien-être au quotidien.",
    pages: [
      { href: '/radio-coherence-cardiaque.html', emoji: '❤️', label: 'Cohérence Cardiaque', desc: 'Radio & musique guidée pour respirer et vous recentrer' },
      { href: '/radio-bien-etre-en-ligne.html', emoji: '🌿', label: 'Bien-être en Ligne', desc: 'Votre dose quotidienne de positivité et de sérénité' },
      { href: '/radio-anti-stress-gratuite.html', emoji: '🧘', label: 'Anti-Stress Gratuite', desc: 'Relâchez la pression avec notre sélection anti-stress' },
      { href: '/musique-pour-respiration-guidee.html', emoji: '🫁', label: 'Respiration Guidée', desc: 'Musique synchronisée avec votre respiration' },
      { href: '/radio-detente-moderne.html', emoji: '🌙', label: 'Détente Moderne', desc: 'Musique apaisante pour vous ressourcer après votre journée' },
    ],
  },
  {
    id: 'musique-energie',
    emoji: '🎵',
    label: 'Musique & Énergie',
    hub: '/musique-et-energie.html',
    hubTitle: 'Musique & Énergie',
    hubIntro: "Des années 80 remixées à la dance la plus énergisante, toute la musique qui donne de l'entrain.",
    pages: [
      { href: '/radio-annees-80-en-ligne.html', emoji: '🕺', label: 'Années 80 en Ligne', desc: "Les hits cultes remixés — nostalgie & énergie pure !" },
      { href: '/radio-dance-energisante.html', emoji: '💃', label: 'Dance Énergisante', desc: "L'énergie dance pour faire bouger votre corps !" },
      { href: '/musique-pour-se-concentrer.html', emoji: '🎯', label: 'Concentration', desc: 'La playlist idéale pour travailler efficacement' },
      { href: '/radio-pour-travailler.html', emoji: '💻', label: 'Pour Travailler', desc: 'Restez focus et productif avec les bons beats' },
    ],
  },
  {
    id: 'playlists-jour',
    emoji: '🕐',
    label: 'Playlists du Jour',
    hub: '/playlists-du-jour.html',
    hubTitle: 'Playlists selon le Moment de la Journée',
    hubIntro: "Une ambiance différente à chaque heure — retrouvez la sélection de Radio Odyssey, tranche horaire par tranche horaire.",
    pages: [
      { href: '/musique-pour-le-reveil.html', emoji: '🌅', label: 'Le Réveil (6H-9H)', desc: 'Bien démarrer sa matinée en douceur' },
      { href: '/playlist-pour-la-matinee.html', emoji: '☀️', label: 'La Matinée (9H-12H)', desc: 'Hits non-stop pour rester dynamique' },
      { href: '/musique-pour-la-pause-dejeuner.html', emoji: '🕐', label: 'La Pause Déjeuner (12H-14H)', desc: 'Respirez en musique' },
      { href: '/musique-pour-lapres-midi.html', emoji: '🎧', label: "L'Après-midi (14H-18H)", desc: 'Easy listening pour tenir la distance' },
      { href: '/musique-pour-laperitif.html', emoji: '🍸', label: "L'Apéritif (18H-21H)", desc: 'Mix du soir pour lancer la soirée' },
      { href: '/musique-pour-la-nuit.html', emoji: '🌙', label: 'La Nuit (21H-6H)', desc: 'Le fil Good Feeling non-stop' },
    ],
  },
  {
    id: 'artistes-styles',
    emoji: '🎤',
    label: 'Artistes & Styles',
    hub: '/artistes-et-styles.html',
    hubTitle: 'Artistes & Styles Musicaux',
    hubIntro: "Qui passe sur l'antenne, et dans quels styles — découvrez les artistes et les familles musicales de Radio Odyssey.",
    pages: [
      { href: '/artistes-diffuses-radio-odyssey.html', emoji: '🎤', label: 'Artistes Diffusés', desc: "Madonna, Shakira, Daft Punk... qui passe sur l'antenne" },
      { href: '/styles-musicaux-radio-odyssey.html', emoji: '🎚️', label: 'Styles Musicaux', desc: 'Synthpop, dance, pop française, ballades...' },
    ],
  },
  {
    id: 'conseils-ecoute',
    emoji: '📡',
    label: "Conseils d'Écoute",
    hub: '/conseils-ecoute.html',
    hubTitle: "Bien Écouter Radio Odyssey",
    hubIntro: "Sur mobile, en voiture ou sur une enceinte connectée : tous nos guides pour ne jamais perdre le fil.",
    pages: [
      { href: '/ecouter-radio-odyssey-sur-mobile.html', emoji: '📱', label: 'Sur Mobile', desc: 'App, lecture en direct et applications tierces' },
      { href: '/ecouter-radio-odyssey-en-voiture.html', emoji: '🚗', label: 'En Voiture', desc: 'Bluetooth, CarPlay et Android Auto' },
      { href: '/ecouter-radio-odyssey-enceinte-connectee.html', emoji: '🔊', label: 'Enceinte Connectée', desc: 'Alexa, Google Home, Sonos...' },
    ],
  },
  {
    id: 'international',
    emoji: '🌍',
    label: 'International',
    hub: '/international.html',
    hubTitle: 'International',
    hubIntro: "Radio Odyssey en anglais, pour nos auditeurs à travers le monde.",
    pages: [
      { href: '/positive-european-music-station.html', emoji: '🇪🇺', label: 'European Positive', desc: 'The best of European positive vibes' },
      { href: '/european-chill-radio.html', emoji: '☁️', label: 'European Chill', desc: 'Laid-back European chill vibes' },
      { href: '/feel-good-music-radio.html', emoji: '😊', label: 'Feel Good Radio', desc: 'Pure feel-good music' },
      { href: '/keep-listening-radio-odyssey.html', emoji: '▶️', label: 'Keep Listening', desc: "Can't stop, won't stop" },
    ],
  },
];
