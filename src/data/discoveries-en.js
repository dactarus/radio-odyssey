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
};

export const SLUGS_DISCOVERIES_EN = Object.keys(DISCOVERIES_EN);
