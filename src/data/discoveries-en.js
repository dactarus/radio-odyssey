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

  `scarcity` (facultatif) remplace celle de `discoveries.js` côté anglais, et pas
  seulement la phrase de rareté : c'est elle qui décide si la page affiche « l'une
  des rares sources » (titre, description, premier paragraphe de la FAQ) ou « présence
  en ligne établie ». À renseigner (`'partielle'`) quand l'artiste n'est rare qu'en
  français — Tree Gees, §115.

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
  'tree-gees': {
    genre: 'Disco-funk pop, 70s style',
    origin: 'Italy',
    since: 'June 2025',
    scarcity: 'partielle',
    facts: [
      'Italian group formed in 1997, widely regarded as one of the best Bee Gees tributes in Europe, with more than 1,400 concerts around the world.',
      'Four musicians: Alex Sammarini (vocals, guitar), Paolo Amati (vocals, bass), Franz Bancalari (vocals, keyboards) and Ezio Zaccagnini (drums).',
      'They also write 100% original tracks in the disco-funk spirit of the Gibb brothers — a fresh, modern production.',
    ],
    portrait: "The Tree Gees are an Italian group formed in 1997, made up of Alex Sammarini (vocals, guitar), Paolo Amati (vocals, bass), Franz Bancalari (vocals, keyboards) and Ezio Zaccagnini (drums). Recognised as one of the best Bee Gees tributes in Europe, with more than 1,400 concerts to their name, they go beyond covers: they also compose and produce entirely original pieces in the inimitable style of the Gibb brothers. According to the band's press materials, the most striking proof is the story of their track \"Sweet Embrace\", which appeared online with no credited author: thousands of listeners around the world took it for a lost Bee Gees recording, before it was revealed to be an original Tree Gees composition. On air on Radio Odyssey since June 2025 with \"Sunday For Lovin'\", the group is still played there today.",
    why: 'The unapologetic disco-funk mood and modern production of the Tree Gees make a perfect nod for listeners nostalgic for the 70s and 80s.',
    linkHref: '/en/80s-throwback-radio-online.html',
    linkLabel: '80s throwback radio',
  },
  'roxy-ana': {
    genre: 'Latin pop',
    origin: 'Cuba (based in France)',
    since: 'November 2026',
    scarcityNote: 'Outside streaming platforms, very little is published online about Roxy Ana — this page brings together what is known about her in one place.',
    facts: [
      'Singer and songwriter of Cuban origin, born in Santa Clara and now based in France: according to her press kit, she blends Latin pop, Cuban roots and urban rhythms.',
      'After a first passion for classical dance, she studied music for seven years in Santa Clara and began her professional singing career with RicoSon, then performed in France, Switzerland, Belgium, Germany and Italy, according to her press kit.',
      'Her single "Bloqueame", released on 4 November 2026, is the first release from an album planned for spring 2027; its arrangements are credited to Julien Marius (Jalex Record), according to her press kit.',
    ],
    portrait: "Roxy Ana is a singer and songwriter of Cuban origin, born in Santa Clara and now based in France. According to her press kit, she was first drawn to classical dance before finding in music the language that suited her: she studied music for seven years in Santa Clara, then began her professional singing career with RicoSon, an immersion in Havana's music scene. She went on to build a career between Cuba and Europe, performing in France, Switzerland, Belgium, Germany and Italy. In 2018 she released \"Déjate llevar\", an eight-track album recorded at the Efesmusic studios in Thonon-les-Bains, and her meeting with Ken Allen, producer and publisher (DEPKALL), who has supported her artistic development since, marked a turning point. Today she feeds her stage activity through several bands, notably Latin Flow Band. Her single \"Bloqueame\", available since 4 November 2026, blends, according to her press kit, a festive energy, Latin pop sounds and urban influences, in the service of a message of freedom and self-assertion; its arrangements are credited to Julien Marius (Jalex Record). It opens the way for an album planned for spring 2027, which more singles are due to precede. These biographical details come from her press kit: outside streaming platforms, very few sources cover her online, and we have not been able to cross-check them. Radio Odyssey welcomes her on air from 13 November 2026 with \"Bloqueame\".",
    why: 'The festive Latin pop and Cuban roots of Roxy Ana bring a Caribbean colour to the station\'s selection — a discovery to follow from her arrival on 13 November 2026.',
    linkHref: '/en/feel-good-music-radio.html',
    linkLabel: 'feel-good music radio',
  },
  'sephra': {
    genre: 'Electro house / Deep house',
    origin: 'sung in English and French',
    since: 'November 2026',
    scarcityNote: 'Outside streaming platforms, very little is published online about Sephra — this page brings together what is known about her in one place.',
    facts: [
      'Electro house and deep house artist who sings in English and French: according to her presentation, her pulsing bass and grooves move between late-night drives and club sets.',
      'Her presentation credits production to Bruno and lyrics to Nikki Grace, and sums up her world with a slogan: "I don\'t breathe, I just flow."',
      'Her Spotify profile had more than 16,000 monthly listeners on 11 November 2026; "Game" and "What Do You Want ?" are among her 2026 singles.',
    ],
    portrait: "Sephra is an electro house and deep house artist who sings in English and French. According to her presentation, her music blends pulsing bass and grooves, somewhere between late-night drives and club sets, and boils down to a slogan: \"I don't breathe, I just flow.\" Again according to her presentation, her tracks are produced by Bruno, with lyrics by Nikki Grace. On Spotify, where she released several singles in 2026, her profile had more than 16,000 monthly listeners as of 11 November 2026; her presentation highlights two tracks to discover, \"What Do You Want ?\" and \"Game\". These details come from her presentation: outside streaming platforms, very few sources cover her online, and we have not been able to cross-check them. Radio Odyssey welcomes her on air from 13 November 2026 with \"Woke Up\".",
    why: 'The pulsing bass and the electro house and deep house grooves of Sephra extend the station\'s dance selection — a discovery to follow from her arrival on 13 November 2026.',
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
    portrait: "Aryan, known as DJ Next Level, is a DJ and producer based in Los Angeles. With \"Mi Amore\", he presents a track in the Afro / Latin house world, at 110 BPM according to his press kit. The track is listed on Spotify with a release date of 24 June 2026. According to that same press kit, \"Mi Amore\" has been used in 348 Instagram Reels, including one showing 2.1 million views: these are figures shown on Instagram as of 9 November 2026, supplied by the artist, which we report as they are. Outside Spotify and Instagram, very few sources cover him online, and his very generic stage name is easily confused with others: the track \"Mi Amore\" and Los Angeles help to find him. Radio Odyssey welcomes him on air from 13 November 2026 with his track \"Mi Amore\".",
    why: 'The Afro / Latin house of DJ Next Level widens the station\'s dance selection with a colour from Los Angeles — a discovery to follow from his arrival on 13 November 2026.',
    linkHref: '/en/feel-good-music-radio.html',
    linkLabel: 'feel-good music radio',
  },
};

export const SLUGS_DISCOVERIES_EN = Object.keys(DISCOVERIES_EN);
