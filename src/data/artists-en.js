/*
  Contenu anglais des fiches artistes (§86).

  Séparé de `artists.js` volontairement. `artists.js` est la source unique des
  passages et des titres, dérivée du rapport de diffusion RadioKing et
  réécrite à chaque dépouillement (§63) : y mêler des traductions exposerait
  celles-ci à être écrasées. Ici, rien n'est dérivé, tout est écrit à la main.

  ⚠️ La présence d'un slug dans ce fichier est ce qui décide qu'une fiche
  anglaise existe : `src/pages/en/artist-[slug].astro` ne génère de page que
  pour ces artistes. Ajouter une entrée suffit à créer la fiche ; le reste
  (passages, part d'antenne, titres, voisins) est calculé.

  ⚠️ Les `facts` sont des faits vérifiés sur des personnes et des groupes
  réels. Ce sont des TRADUCTIONS de la version française, pas des textes
  nouveaux : ne jamais y ajouter un fait qui ne figure pas côté français, et
  corriger ici si une erreur est corrigée là-bas. Même règle qu'au §66-§68.

  ⚠️ `linkHref` doit pointer vers une page anglaise. Un lien vers le français
  depuis une fiche anglaise est proscrit (§82).
*/

const ANNEES_80 = { linkHref: '/en/80s-throwback-radio-online.html', linkLabel: '80s throwback radio' };
const DETENTE   = { linkHref: '/en/european-chill-radio.html', linkLabel: 'European chill radio' };
const FEEL_GOOD = { linkHref: '/en/feel-good-music-radio.html', linkLabel: 'feel-good music radio' };

export const ARTISTS_EN = {
  'madonna': {
    ere: 'classics',
    facts: [
      'Madonna Louise Ciccone, born in Michigan in 1958, moved to New York at nineteen with 35 dollars to her name.',
      '"Like a Virgin" (1984) was her first number one on the Billboard Hot 100.',
      'Guinness World Records lists her as the best-selling female recording artist of all time.',
    ],
    why: 'Madonna embodies the whole "80s reimagined" idea behind Radio Odyssey on her own: timeless hits, reworked to sound resolutely current.',
    ...ANNEES_80,
  },
  'michael-jackson': {
    ere: 'classics',
    facts: [
      'Born in Gary, Indiana in 1958, he started performing at five alongside his brothers in the Jackson 5.',
      'Thriller (1982) remains the best-selling album of all time.',
      'He performed the moonwalk on television for the first time in 1983, during the Motown 25 special.',
    ],
    why: 'A cornerstone of the classics we play — often in remixed versions, so the sound stays current.',
    ...ANNEES_80,
  },
  'queen': {
    ere: 'classics',
    facts: [
      'Formed in London in 1970; Freddie Mercury, born Farrokh Bulsara in Zanzibar in 1946, became its singer.',
      '"Bohemian Rhapsody" (1975) runs five minutes and fifty-five seconds — a length considered impossible for radio at the time.',
      'Their Live Aid set in July 1985 is regularly cited as the greatest performance in rock history.',
    ],
    why: 'Queen anthems are among the most unifying classics in the Radio Odyssey schedule — the kind of track that works whoever is listening.',
    ...ANNEES_80,
  },
  'abba': {
    ere: 'classics',
    facts: [
      'Swedish quartet formed in 1972, brought to a wide audience by their 1974 Eurovision win with "Waterloo".',
      'They rank among the best-selling recording artists in the history of music.',
      'After forty years of silence, all four members reunited in 2021 for the album Voyage.',
    ],
    why: 'Six tracks on air, every one of them a remixed version: the ABBA songbook survives the move to a dance tempo better than almost any other, and that — not nostalgia — is what earns it a place here.',
    ...FEEL_GOOD,
  },
  'the-beatles': {
    ere: 'classics',
    facts: [
      'Formed in Liverpool in 1960 and split in 1970, after a decade that redefined popular music.',
      '"Here Comes the Sun", written by George Harrison, appears on Abbey Road (1969).',
      'Recent versions of their catalogue are built on the original tapes, remixed by Giles Martin, son of their producer George Martin.',
    ],
    why: 'The three tracks we play are remixes built from the original tapes — not cover versions. That is exactly what Radio Odyssey does with its older material: keep the work, refresh the sound.',
    ...DETENTE,
  },
  'elton-john': {
    ere: 'classics',
    facts: [
      'Reginald Kenneth Dwight, born near London in 1947, a classically trained pianist from the Royal Academy of Music.',
      'His rewritten "Candle in the Wind", performed at Diana’s funeral in 1997, is the best-selling chart single in history.',
      'Almost all of his lyrics are written by Bernie Taupin, his writing partner since 1967.',
    ],
    why: 'His recent collaborations are a perfect illustration of the remixed classics we play.',
    ...ANNEES_80,
  },
  'phil-collins': {
    ere: 'classics',
    facts: [
      'Born in London in 1951, drummer with Genesis from 1970, he became its singer in 1975 after Peter Gabriel left.',
      'On 13 July 1985 he played Live Aid in London and again in Philadelphia the same day, crossing the Atlantic by Concorde.',
      '"In the Air Tonight" (1981) owes its famous drum break to an accident in the studio.',
    ],
    why: 'Phil Collins is melodic 80s rock at its purest — one of the classic families that run through our schedule.',
    ...ANNEES_80,
  },
  'wham': {
    ere: 'classics',
    facts: [
      'Duo formed in 1981 by George Michael and Andrew Ridgeley, friends since secondary school.',
      'In 1985 they became the first Western pop act to perform in China.',
      '"Last Christmas" (1984) had to wait until 2021 — thirty-seven years — to finally reach number one in the UK.',
    ],
    why: 'Wham! is the most joyful end of 80s pop, and we play it regularly in remixed versions.',
    ...ANNEES_80,
  },
  'eurythmics': {
    ere: 'classics',
    facts: [
      'Duo formed in 1980 by Annie Lennox and Dave Stewart, after their first band, The Tourists, broke up.',
      '"Sweet Dreams (Are Made of This)" (1983) took them to the top of the American charts.',
      '"There Must Be an Angel (Playing with My Heart)" (1985), with a harmonica solo by Stevie Wonder, remains their only UK number one.',
    ],
    why: 'Annie Lennox’s voice over machines: a contrast that defined the sound of the 80s, and one that recent remixes bring back without betraying it.',
    ...ANNEES_80,
  },
  'duran-duran': {
    ere: 'classics',
    facts: [
      'Formed in Birmingham in 1978, a leading act of the British New Romantic movement.',
      '"A View To A Kill" (1985) is the only James Bond theme ever to reach number one on the Billboard Hot 100.',
      '"Ordinary World" (1993) revived their career eight years later, in a markedly quieter register.',
    ],
    why: 'Two eras of the same band — the glitter of the 80s and the melancholy of the early 90s — which lets them work in two very different moods on air.',
    ...ANNEES_80,
  },
  'rick-astley': {
    ere: 'classics',
    facts: [
      'British singer who broke through in 1987 with "Never Gonna Give You Up", produced by the Stock Aitken Waterman team.',
      'The single reached number one in around twenty countries.',
      'The internet gave him a second career: "rickrolling", the prank of redirecting people to his video, put him back in circulation from 2007 onwards.',
    ],
    why: 'An unexpectedly deep voice over machine-tooled pop production — the contrast made the record in 1987, and still carries it today in remixed form.',
    ...ANNEES_80,
  },
  'tears-for-fears': {
    ere: 'classics',
    facts: [
      'Duo formed in Bath in 1981 by Roland Orzabal and Curt Smith, friends since their teens.',
      'Their name comes from Arthur Janov’s primal therapy, whose theories fed their early lyrics.',
      '"Everybody Wants To Rule The World" and "Shout", both from Songs from the Big Chair (1985), established them worldwide.',
    ],
    why: 'English synthpop at its most melodic: 1985 productions that still sound current forty years on — which is precisely what Radio Odyssey looks for in its 80s catalogue.',
    ...ANNEES_80,
  },
  'simple-minds': {
    ere: 'classics',
    facts: [
      'Scottish band formed in Glasgow in 1977, contemporaries of the early new wave.',
      '"Don’t You (Forget About Me)" (1985), written for the film The Breakfast Club, was initially turned down by the band.',
      'It is nonetheless their only number one on the Billboard Hot 100.',
    ],
    why: 'Simple Minds is a pillar of our 80s selection, and comes back regularly in remixed versions.',
    ...ANNEES_80,
  },
  'a-ha': {
    ere: 'classics',
    facts: [
      'Norwegian trio formed in Oslo in 1982.',
      'The video for "Take On Me" (1985), mixing live action and pencil animation, took sixteen weeks to make.',
      'It is their only number one in the United States.',
    ],
    why: 'An iconic piece of Scandinavian synthpop, among the most requested records of the 80s.',
    ...ANNEES_80,
  },
  'sade': {
    ere: 'classics',
    facts: [
      'Sade is a British band before it is a person, named after its singer Helen Folasade Adu, born in Ibadan, Nigeria in 1959.',
      'The first album, Diamond Life (1984), carried by "Smooth Operator", sold more than six million copies.',
      'The band releases very little: six albums in forty years.',
    ],
    why: 'Sade’s timeless elegance brings a refined soul touch to the calmer stretches of the schedule.',
    ...DETENTE,
  },
  'simply-red': {
    ere: 'classics',
    facts: [
      'Formed in Manchester in 1985 around Mick Hucknall, whose red hair gave the band its name.',
      '"Holding Back the Years" reached number one on the Billboard Hot 100 in 1986.',
      'The album Stars (1991) was the best-selling record in the UK two years running.',
    ],
    why: 'The elegant pop-soul of Simply Red sits well alongside the classics in our schedule.',
    ...DETENTE,
  },
  'ed-sheeran': {
    ere: 'today',
    facts: [
      'British singer-songwriter born in 1991, who performed alone for years with a guitar and a loop pedal.',
      '"Shape of You" (2017) is one of the most streamed tracks in Spotify history.',
      'All of his albums are titled with a mathematical symbol: +, x, ÷, = and then −.',
    ],
    why: 'His songs, somewhere between ballad and upbeat pop, fit naturally into the newer end of our playlist.',
    ...DETENTE,
  },
  'coldplay': {
    ere: 'today',
    facts: [
      'Formed in London in 1996 by four students from University College London.',
      '"Yellow", from Parachutes (2000), is the track that made their name.',
      'Their Music of the Spheres tour became the most attended tour ever staged by a band.',
    ],
    why: 'Coldplay anthems make a good bridge between the energetic and the calmer parts of the day.',
    ...DETENTE,
  },
  'dua-lipa': {
    ere: 'today',
    facts: [
      'Born in London in 1995 to Kosovar parents, she moved back to Pristina as a teenager before returning to London alone at sixteen.',
      '"New Rules" (2017) brought her worldwide recognition.',
      'Future Nostalgia (2020) won the Grammy for Best Pop Vocal Album in 2021.',
    ],
    why: 'Dua Lipa’s confident dance-pop matches the energising side of the schedule exactly.',
    ...FEEL_GOOD,
  },
  'imagine-dragons': {
    ere: 'today',
    facts: [
      'Alternative rock band formed in Las Vegas in 2008.',
      '"Believer" and "Thunder" both come from Evolve, released on 23 June 2017, the album that marked their turn towards a poppier rock.',
      '"Sharks" is taken from Mercury – Act 2, released on 1 July 2022.',
    ],
    why: 'Choruses built for large rooms, with a rhythmic punch that lifts the schedule when it needs energy without tipping into dance.',
    ...FEEL_GOOD,
  },
};

export const SLUGS_EN = Object.keys(ARTISTS_EN);

/*
  Regroupement par époque pour la page /en/artists-on-radio-odyssey.html.

  ⚠️ Par époque, et surtout PAS par nombre de passages : trier la liste par
  volume de diffusion réintroduirait exactement le palmarès retiré des fiches
  au §86. Le classement mesure la grille, pas les artistes.
*/
export const PAR_EPOQUE = (ere) => SLUGS_EN.filter((s) => ARTISTS_EN[s].ere === ere);
