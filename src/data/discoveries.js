// Fiches "Découvertes Radio Odyssey" — artistes émergents soutenus par la
// radio, hors classement par nombre de passages (voir SEO_BLUEPRINT.md).
// Source des faits : informations fournies directement par le propriétaire
// de la radio (dossiers de presse / connaissance personnelle des artistes),
// croisées avec l'historique réel de diffusion RadioKing.
//
// Pour ajouter une découverte : ajouter une entrée ici (aucune autre
// édition de code nécessaire) — voir src/pages/decouverte-[slug].astro.

export const DISCOVERIES = [
  {
    slug: 'tom-york',
    name: 'Tom York',
    genre: 'Pop rock anglais',
    origin: 'Royaume-Uni',
    active: true,
    since: 'mars 2025',
    tracks: ['Close To Me', 'Sunscreen', 'I Can’t Stay'],
    facts: [
      'Chanteur pop rock anglais au ton positif, également connu comme remixeur pour des artistes comme OneRepublic et Lara Fabian.',
      'Ses clips sont diffusés sur des chaînes comme C Star et Clubbing TV, et certains de ses titres tournent sur d’autres radios.',
      'Une découverte Radio Odyssey en rotation depuis mars 2025 — et toujours à l’antenne aujourd’hui.',
    ],
    portrait: "Tom York cultive un pop rock anglais au mood résolument positif, entre ballades et titres plus entraînants. Au-delà de sa carrière de chanteur, il est aussi remixeur pour d'autres artistes, dont OneRepublic et Lara Fabian, et ses clips circulent sur des chaînes musicales comme C Star et Clubbing TV. Repéré tôt par Radio Odyssey, il fait partie de ces découvertes qui ont trouvé leur public : plus d'un an après son arrivée sur l'antenne, il y est toujours régulièrement diffusé.",
    why: "Le mood positif et la ballade pop rock de Tom York collent parfaitement à la couleur musicale de l'antenne — une découverte qui a fait ses preuves dans la durée.",
    linkHref: '/radio-detente-moderne.html',
    linkLabel: 'radio détente moderne',
  },
  {
    slug: 'tree-gees',
    name: 'Tree Gees',
    genre: 'Pop disco-funk (années 70)',
    origin: 'Italie',
    active: true,
    since: 'juin 2025',
    tracks: ['Sunday For Lovin’'],
    facts: [
      'Groupe italien largement considéré comme l’un des meilleurs hommages aux Bee Gees en Europe.',
      'Compose aussi des titres 100% originaux dans l’esprit disco-funk des frères Gibb — une production fraîche et moderne sur une ambiance années 70/80.',
      'Une découverte Radio Odyssey en rotation depuis juin 2025, toujours diffusée aujourd’hui.',
    ],
    portrait: "Les Tree Gees sont un groupe italien reconnu comme l'un des meilleurs hommages aux Bee Gees en Europe — mais leur talent va au-delà de la reprise : ils composent et produisent aussi des morceaux entièrement originaux dans le style inimitable des frères Gibb. La preuve la plus frappante reste l'histoire de leur titre \"Sweet Embrace\", apparu en ligne sans auteur crédité : des milliers d'auditeurs à travers le monde l'ont pris pour un inédit perdu des Bee Gees, avant qu'il ne soit révélé qu'il s'agissait bien d'une composition originale des Tree Gees. Sur l'antenne de Radio Odyssey depuis juin 2025 avec \"Sunday For Lovin'\", le groupe y est toujours diffusé aujourd'hui.",
    why: "L'ambiance disco-funk assumée et la production moderne des Tree Gees en font un clin d'œil parfait pour les auditeurs nostalgiques des années 70-80.",
    linkHref: '/radio-annees-80-en-ligne.html',
    linkLabel: 'radio années 80 en ligne',
  },
  {
    slug: 'tony-jay',
    name: 'Tony Jay',
    genre: 'Dance / Afro deep house',
    origin: 'France',
    active: false,
    since: '2025',
    tracks: ['Africa Vitamine', 'Sous Le Ciel De Paris'],
    facts: [
      'DJ et producteur français, avec un style hybride mêlant influences afro, deep house et électro.',
      'Pour son single "Africa Vitamine", il s’est entouré de la chanteuse Luanne, qu’il a lui-même révélée, et de la saxophoniste Mili Sax.',
      'Mili Sax, ex-soliste de la Musique de la Garde Républicaine et ambassadrice Selmer, est connue pour un style mêlant NuDisco et deep house.',
    ],
    portrait: "DJ et producteur français, Tony Jay trace son chemin sur la scène électronique européenne avec un style hybride mêlant influences afro, deep house et electro. Passionné de collaborations, il aime s'entourer de talents vocaux et instrumentaux pour donner vie à des projets vibrants, pensés pour faire danser. Pour \"Africa Vitamine\", il a fait appel à Luanne, jeune chanteuse prometteuse qu'il a lui-même découverte, et à Mili Sax, saxophoniste à la carrière internationale — formée au classique dès l'enfance, ex-soliste de la Musique de la Garde Républicaine et ambassadrice de la marque Selmer, capable de passer avec aisance de son saxophone aux platines. Une découverte Radio Odyssey mise en avant en 2025.",
    why: "Le style dance afro deep house de Tony Jay, porté par des collaborations soignées, correspond bien à l'énergie de la sélection dance de l'antenne.",
    linkHref: '/radio-dance-energisante.html',
    linkLabel: 'radio dance énergisante',
  },
  {
    slug: 'remi-dorage',
    name: 'Rémi Dorage',
    genre: 'Chanson positive / Pop dansante',
    origin: 'France',
    active: false,
    since: '2025',
    tracks: ['Un Sourire Lundi (feat. Néonors)', 'Ma Folie (feat. Néonors)'],
    facts: [
      'Chanteur français atypique, au style de chanson positive et dansante.',
      'Poursuit une collaboration franco-danoise avec le producteur Néonors, entamée sur "Un Sourire Lundi" et prolongée sur "Ma Folie".',
      'Auteur-compositeur de son premier album "Et La Lumière" — et officiellement tagué "Découverte Radio Odyssey" jusque dans les outils de programmation.',
    ],
    portrait: "Chanteur français atypique, Rémi Dorage cultive une chanson positive et dansante, pensée pour le lâcher-prise. Après un premier album, \"Et La Lumière\", entièrement écrit et composé par ses soins, il poursuit une collaboration franco-danoise avec le producteur Néonors — qui avait déjà composé \"Un Sourire Lundi\" et remixé \"Je T'adore\" — sur son nouveau single \"Ma Folie\". À travers une métaphore féline, le morceau raconte une libération intérieure et un appel à vivre pleinement, porté par un refrain répétitif et addictif : une invitation au lâcher-prise, terriblement dansante. Une découverte repérée par Radio Odyssey dès 2025.",
    why: "La chanson française positive et dansante de Rémi Dorage incarne exactement l'esprit que Radio Odyssey cherche à mettre en avant dans ses Découvertes.",
    linkHref: '/styles-musicaux-radio-odyssey.html',
    linkLabel: 'styles musicaux Radio Odyssey',
  },
];
