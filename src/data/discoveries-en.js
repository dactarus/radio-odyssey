/*
  Contenu anglais des fiches « Découvertes » (§104).

  Même principe qu'`artists-en.js` : la présence d'un slug dans ce fichier est
  ce qui décide qu'une fiche anglaise existe — `src/pages/en/discovery-[slug].astro`
  ne génère de page que pour ces artistes, et `decouverte-[slug].astro` ne
  déclare le `hreflang` français → anglais que pour eux. Ne pas y ajouter un
  slug sans que la page existe : un `hreflang` vers une page absente est une
  erreur remontée par la Search Console.

  Ce qui reste dans `discoveries.js` (source unique) : slug, nom, origine, titres
  diffusés, statut (`active`, `since`) et `scarcity`. Ici, seulement les textes
  écrits à la main, et les libellés qui ne se traduisent pas à l'identique
  (genre, origine, date).

  ⚠️ Ces textes sont des TRADUCTIONS de la fiche française, jamais des faits
  nouveaux : corriger une erreur d'un côté impose de la corriger de l'autre.
  Même règle qu'au §86 et que pour `artists-en.js`.

  `scarcityNote` (facultatif) remplace la phrase de rareté calculée par le gabarit
  quand la rareté constatée ne se formule pas pareil en anglais : celle de
  `discoveries.js` peut porter sur le français (« pas de biographie en
  français »), qui ne dit rien d'un lecteur anglophone.

  ⚠️ `linkHref` doit pointer vers une page anglaise. Un lien vers le français
  depuis une page anglaise est proscrit (§82) — d'où l'absence de lien vers
  la page hub « Découvertes », qui n'existe qu'en français.
*/

export const DISCOVERIES_EN = {
  'tom-york': {
    genre: 'English pop rock',
    origin: 'United Kingdom',
    since: 'March 2025',
    scarcityNote: 'Outside streaming platforms, Bandcamp and the odd interview, very little is written about Tom York online — this page brings together what is known about him in one place.',
    facts: [
      'English pop rock singer with a positive tone, signed to the label D.A Red Wolf Records, also known as a remixer for artists such as OneRepublic and Lara Fabian.',
      'His track "Close To Me" has been played on more than a hundred radio stations in France, Belgium and Switzerland.',
      'His videos air on channels such as C Star, Clubbing TV and Bblack Africa.',
    ],
    portrait: "Tom York cultivates an English pop rock with a resolutely positive mood, somewhere between ballads and more upbeat tracks. Beyond his career as a singer, he is also a remixer for other artists, including OneRepublic and Lara Fabian, and his videos circulate on music channels such as C Star, Clubbing TV and Bblack Africa. His track \"Close To Me\" has been played on more than a hundred radio stations in France, Belgium and Switzerland. Signed to the label D.A Red Wolf Records, he released a string of tracks in 2025: \"Close To Me\" in March, \"Sunscreen\" in July, then \"I Can't Stay\" (feat. Noize). Spotted early by Radio Odyssey, he is one of those discoveries who found their audience: more than a year after arriving on air, he is still played regularly. Another particularity: online, very few sources cover him beyond streaming platforms — and his name is easily confused with that of Thom Yorke, the Radiohead singer, who is an entirely different artist.",
    why: 'The positive mood and pop rock ballads of Tom York fit the musical colour of the station perfectly — a discovery that has proved itself over time.',
    linkHref: '/en/feel-good-music-radio.html',
    linkLabel: 'feel-good music radio',
  },
  'azizzi-romeo': {
    genre: 'Roots reggae / dub',
    origin: 'Jamaica',
    since: 'October 2026',
    facts: [
      'Young Jamaican artist and producer, raised in Linstead (St. Catherine Parish) and son of roots reggae icon Max Romeo: lead singer of the duo Rominal with his brother from the age of eight, he then toured internationally with his father before going solo.',
      'His debut album, "Signs of the Time" (11 tracks, released on 2 October 2026 on Copenhagen label Recall Reality), was recorded with Denmark\'s Guiding Star Orchestra, produced by CHLLNGR, Jaszol and Thomas Leholt, then mixed and mastered by British producer Prince Fatty.',
      'The title track "Signs Of The Time" pairs him with his father Max Romeo, who died in April 2025 aged 80 — a father-and-son duet, carried by the live instruments of the Guiding Star Orchestra.',
    ],
    portrait: "Azizzi Romeo is a young Jamaican artist and producer, raised in the countryside of Linstead, in St. Catherine Parish. The son of roots reggae icon Max Romeo, he came to music early: at eight, he was already lead singer of the duo Rominal, alongside his brother. He then toured internationally with his father, before setting out on his own as a solo artist, with a mixtape in 2018, \"The Progeny\". His sound blends the conscious roots reggae of the genre's origins with modern, introspective electronic touches. On 2 October 2026 he released \"Signs of the Time\", his first full album: eleven tracks produced by CHLLNGR, Jaszol and Thomas Leholt, with live instruments played by Denmark's Guiding Star Orchestra, and a mix and master by the highly regarded British producer and engineer Prince Fatty. The record came out on Recall Reality, a new label based in Copenhagen. In his press release, Azizzi explains that he wanted to make an album that pays attention to what is happening around us, \"honest and timeless\" while still reflecting the moment we are living in. The title track \"Signs Of The Time\" brings together son and father Max Romeo, who died in April 2025 aged 80: a powerful moment for an artist building his own identity while carrying forward his family's musical lineage.",
    why: 'The warm, organic roots reggae of Azizzi Romeo, played on live instruments, brings a soulful, soothing colour to the programming — and the duet with Max Romeo makes it a musical moment with real meaning.',
    linkHref: '/en/feel-good-music-radio.html',
    linkLabel: 'feel-good music radio',
  },
  'airos': {
    genre: 'House / Pop / Funk',
    origin: 'United States',
    since: 'November 2026',
    facts: [
      'American producer, songwriter and performer shaped by the underground scene in Dallas, Texas: his music sits at the crossroads of house, rock, funk, pop and indie, with guitars and saxophones that warm up a sound born in the clubs.',
      'He works regularly with writer and vocalist LUCOA and with producer DNJER, and has released tracks on labels such as Loudkult Records, Blanco y Negro Music, Lovestyle Records, Ninety9Lives and Oriental Star.',
      'According to his biography, his music has been backed by international DJs and used in sync placements in Disney projects and video-game-related projects; he states that he does not use AI in his recordings, and puts melody, groove and personality first.',
    ],
    portrait: "Åírös is an American producer, songwriter and performer shaped by the underground scene in Dallas, Texas. His music sits at the crossroads of house, rock, funk, pop and indie: raised on funk, soul and dance records, he pairs driving grooves with catchy melodies, and the guitars, saxophones and pop songwriting bring warmth to a sound built for the clubs. He works regularly with writer and vocalist LUCOA and with producer DNJER, with whom he makes records that range from emotional pop to late-night house. His catalogue has been built through releases on labels such as Loudkult Records, Blanco y Negro Music, Lovestyle Records, Ninety9Lives and Oriental Star. According to his biography, his music has been backed by international DJs and used in sync placements in Disney projects and video-game-related projects; his 2026 press kit also claims that \"Da Dance\", recorded with LUCOA, has gathered more than 100 million views of short videos on YouTube Shorts, Instagram Reels and TikTok — figures supplied by the artist, reported here as they are. Åírös states that he does not use AI in his recordings and puts melody, groove and personality first. In 2025, the magazine We Rave You interviewed him on the occasion of his single \"Ooo!\" and describes him as a producer who came up in the underground and moved into commercial pop. Radio Odyssey welcomes him on air from 8 November 2026 with his track \"Summer55\".",
    why: 'The melodic, pop-energy house of Åírös, with its guitars, saxophones and catchy hooks, extends the station\'s dance selection with a club colour from Dallas — a discovery to follow from his arrival on 8 November 2026.',
    linkHref: '/en/feel-good-music-radio.html',
    linkLabel: 'feel-good music radio',
  },
  'dj-next-level': {
    genre: 'Afro / Latin house',
    origin: 'United States',
    since: 'November 2026',
    scarcityNote: 'Outside Spotify and Instagram, very little is published online about DJ Next Level — this page brings together what is known about him in one place.',
    facts: [
      'Los Angeles-based DJ and producer: Aryan, known as DJ Next Level, presents with "Mi Amore" a track in the Afro / Latin house world, at 110 BPM according to his press kit.',
      'The track is listed on Spotify under the name "DJ Next Level", with a release date of 24 June 2026.',
      'According to his press kit, "Mi Amore" has been used in 348 Instagram Reels, including one showing 2.1 million views — figures shown on Instagram as of 9 November 2026, supplied by the artist and reported here as they are.',
    ],
    portrait: "Aryan, known as DJ Next Level, is a DJ and producer based in Los Angeles. With \"Mi Amore\", he presents a track in the Afro / Latin house world, at 110 BPM according to his press kit. The track is listed on Spotify with a release date of 24 June 2026. According to that same press kit, \"Mi Amore\" has been used in 348 Instagram Reels, including one showing 2.1 million views: these are figures shown on Instagram as of 9 November 2026, supplied by the artist, which we report as they are. Outside Spotify and Instagram, very few sources cover him online, and his very generic stage name is easily confused with others: the track \"Mi Amore\" and Los Angeles help to find him. Radio Odyssey welcomes him on air in November 2026 with his track \"Mi Amore\".",
    why: 'The Afro / Latin house of DJ Next Level widens the station\'s dance selection with a colour from Los Angeles — a discovery to follow from his arrival in November 2026.',
    linkHref: '/en/feel-good-music-radio.html',
    linkLabel: 'feel-good music radio',
  },
};

export const SLUGS_DISCOVERIES_EN = Object.keys(DISCOVERIES_EN);
