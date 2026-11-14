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
    genre: 'UK R&B / Soul',
    origin: 'virtual artist (AI)',
    since: 'November 2026',
    scarcityNote: 'Outside streaming platforms, very little is published online about Sephra — this page brings together what is known about her in one place.',
    facts: [
      'A virtual project: Sephra\'s producer has confirmed to the radio that she is a virtual artist, in other words an artificial intelligence creation, produced for his label Rage Music, like Deep Rage and Nia Storm.',
      'Her single "Woke Up", released on 30 May 2026, blends, according to its description, influences of UK R&B and classic soul; it is written by Nikki Grace Lambert and composed by Bruno Gondel, who is also listed as the rights holder (© ℗ 2026) on Spotify.',
      'The presentation sent to the radio describes an electro house and deep house world, sung in English and French ("Game", "What Do You Want ?"); her Spotify profile had more than 16,000 monthly listeners on 11 November 2026.',
    ],
    portrait: "Sephra is a virtual artist, in other words an artificial intelligence creation: her producer confirmed to the radio that she is a virtual project, produced for his label Rage Music, like Deep Rage and Nia Storm. Her single \"Woke Up\", released on 30 May 2026, blends, according to its description, influences of UK R&B and classic soul. The lyrics, according to that same description, tell the story of a woman who turns the page on a past relationship to find her inner peace and self-confidence again: a track about personal empowerment and self-love. It is written by Nikki Grace Lambert and composed by Bruno Gondel, who is also listed as the rights holder (© ℗ 2026) on Spotify. The presentation sent to the radio also describes an electro house and deep house world, sung in English and French, with pulsing bass and grooves moving between late-night drives and club sets, summed up by a slogan: \"I don't breathe, I just flow.\" That document highlights two other tracks, \"What Do You Want ?\" and \"Game\". On Spotify, where she released several singles in 2026, her profile had more than 16,000 monthly listeners as of 11 November 2026. As a virtual project, she has no country or city of origin to give. These details come from the producer himself, through his presentation and the track's description: outside streaming platforms, very few sources cover her online, and only the release date of \"Woke Up\" could be cross-checked (Spotify). Radio Odyssey welcomes her on air from 13 November 2026 with \"Woke Up\".",
    why: "The soul and UK R&B of \"Woke Up\", sung by a virtual artist on the theme of empowerment and self-love, widen the station's palette — a discovery to follow from her arrival on 13 November 2026.",
    linkHref: '/en/ai-music-on-radio-odyssey.html',
    linkLabel: 'AI music on Radio Odyssey',
  },
  'deep-rage': {
    genre: 'Deep house / Afro house / Electro',
    origin: 'virtual project (AI)',
    since: 'November 2026',
    scarcityNote: 'Outside streaming platforms, very little is published online about Deep Rage — this page brings together what is known about this project in one place.',
    facts: [
      'A virtual project: Deep Rage\'s producer has confirmed to the radio that it is a virtual project, in other words an artificial intelligence creation, produced for his label Rage Music, like Sephra and Nia Storm. Its presentation and Spotify biography place it in Miami, where it is said to have been born and raised: that is the project\'s story.',
      'Its music, across deep house, Afro house and electro, is made for the dancefloor: the presentation speaks of hypnotic percussion, rolling bass and late-night energy.',
      'According to the presentation, a first wave of 15 tracks is out, including "Lose Control", "Timeless Love" and "Where Do We Go"; "Timeless Love" is listed on Spotify among its October 2026 singles.',
    ],
    portrait: "Deep Rage is a virtual DJ and producer project, in other words an artificial intelligence creation, working across deep house, Afro house and electro: its producer confirmed to the radio that it is produced for his label Rage Music, like Sephra and Nia Storm. The project's story places it in Miami: according to its Spotify biography, it was born and raised there and draws on the blend of cultures, rhythms and nightlife of the city. Its music is made for the dancefloor, from intimate late-night rooms to open-air terraces under the Florida sky. The presentation speaks of hypnotic percussion, rolling bass and late-night energy. It is an ongoing project: according to that presentation, a first wave of 15 tracks is out, including \"Lose Control\", \"Timeless Love\" and \"Where Do We Go\", and the biography announces new releases to come. \"Timeless Love\" is listed on Spotify among its October 2026 singles. These details come from the producer himself, through the presentation and the Spotify biography: outside streaming platforms, very few sources cover this project online, and only the existence of the tracks \"Timeless Love\" and \"Lose Control\" and their release year could be cross-checked (Spotify). Radio Odyssey welcomes it on air from 13 November 2026 with \"Timeless Love\".",
    why: "The deep house, Afro house and electro of Deep Rage, a virtual project that claims Miami as its home, extend the station's dance selection — a discovery to follow from its arrival on 13 November 2026.",
    linkHref: '/en/ai-music-on-radio-odyssey.html',
    linkLabel: 'AI music on Radio Odyssey',
  },
  'nia-storm': {
    genre: 'Pop / Soul / R&B',
    origin: 'virtual artist (AI)',
    since: 'November 2026',
    scarcityNote: 'Outside streaming platforms, very little is published online about Nia Storm — this page brings together what is known about her in one place.',
    facts: [
      'A virtual artist according to her presentation, in other words an artificial intelligence creation, singing pop, soul and R&B over deep bass and nocturnal grooves; her Spotify biography describes her as "conceptualized, written, and embodied" by Nikki Grace.',
      'According to that biography, Nikki Grace conceives each project and writes every lyric, with love as the raw material; the presentation sent to the radio adds a production credited to Bruno, for the label Rage Music, like Sephra and Deep Rage.',
      '"Almost Love" was released on 24 September 2026, after "Kiss Me Dirty" (29 August 2026); her Spotify profile had more than 16,000 monthly listeners on 11 November 2026.',
    ],
    portrait: "Nia Storm is a virtual artist, in other words an artificial intelligence creation, in a pop, soul and R&B world — her producer confirmed this to the radio, as well as for Sephra and Deep Rage, all three produced for his label Rage Music: a voice described as sensual, over deep bass and nocturnal grooves, produced by Bruno and written by Nikki Grace according to the presentation sent to the radio. Her Spotify biography specifies that the project is \"conceptualized, written, and embodied\" by Nikki Grace, who conceives each song and writes every lyric; love, attraction and heartbreak are the raw material, between pop hooks and soulful warmth. Her 2026 singles, including \"Kiss Me Dirty\" (29 August) and then \"Almost Love\" (24 September), are listed on Spotify, where her profile had more than 16,000 monthly listeners as of 11 November 2026. These details come from the presentation sent to the radio and from the Spotify biography, both of which come from the project itself: outside streaming platforms, very few sources cover her online, and only the release dates of \"Kiss Me Dirty\" and \"Almost Love\" and the audience figure could be cross-checked (Spotify). Radio Odyssey welcomes her on air from 13 November 2026 with \"Almost Love\".",
    why: 'The pop, soul and R&B of Nia Storm, a virtual artist with nocturnal grooves, widen the station\'s selection — a discovery to follow from her arrival on 13 November 2026.',
    linkHref: '/en/ai-music-on-radio-odyssey.html',
    linkLabel: 'AI music on Radio Odyssey',
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
  'lakes-and-fires': {
    genre: 'Indie-groove / funk pop',
    origin: 'Denmark',
    since: 'November 2026',
    scarcity: 'partielle',
    facts: [
      'Danish trio of Shaka Loveless, Lasse Boman and Birk Nevel, three friends who have played together for almost 25 years, including in the hip hop collective Gypsies and the indie pop/rock band Are We Brothers (according to the band\'s Bandcamp page).',
      'Careers from the Danish scene, according to that same page: Shaka Loveless, Danish Music Award for best male artist in 2013; Lasse Boman, writer of multiplatinum hits with artists like Drew Sycamore; Birk Nevel, producer and drummer, Gaffa Award for best Danish live act in 2023 with Benjamin Hav og Familien.',
      '"Before The Sun Will Rise", with Danish singer Drew Sycamore, is presented in the press release sent to the radio as the first single from their next album, planned for 2027; their Spotify profile had more than 43,000 monthly listeners on 12 November 2026.',
    ],
    portrait: "Lakes & Fires is a Danish trio made up of Shaka Loveless, Lasse Boman and Birk Nevel. According to the band's Bandcamp page, the three friends have played together for almost 25 years, notably in the hip hop collective Gypsies and in the indie pop/rock band Are We Brothers, and this project is a return to absolute creative freedom and independence. Each has a recognised career on the Danish scene: Shaka Loveless launched his solo career in 2012 and won the Danish Music Award for best male artist in 2013; Lasse Boman has written multiplatinum hits with artists like Drew Sycamore; Birk Nevel, a producer and drummer, won a Gaffa Award for best Danish live act in 2023 with Benjamin Hav og Familien. Their first single, \"Lagoon\", came out on 14 February 2025; their self-titled album, released in 2025, is listed on Spotify, where the band's profile had more than 43,000 monthly listeners as of 12 November 2026. Their new single, \"Before The Sun Will Rise\", is sung with Drew Sycamore, a Danish singer and songwriter who won Gaffa Awards in 2022. According to the press release sent to the radio, it blends modern organic funk and the warmth of bands like Jungle with polished pop writing, suits daytime and evening programming alike, and opens the way for an album planned for 2027. The press release also states that the self-titled album has passed one million streams and built 46,000 monthly listeners on Spotify: we could not cross-check the million streams, and the profile showed 43,000 monthly listeners on the day we looked. These details come from the press release and the band's Bandcamp page; the new single was not yet listed on the platforms we checked, and its release date could not be cross-checked. Radio Odyssey welcomes them on air from 15 November 2026 with \"Before The Sun Will Rise\".",
    why: 'The organic funk and polished pop of Lakes & Fires, carried by the voice of Danish singer Drew Sycamore, extend the station\'s pop selection, day and night — a discovery to follow from their arrival on 15 November 2026.',
    linkHref: '/en/positive-european-music-station.html',
    linkLabel: 'positive European music station',
  },
  'valerian': {
    genre: 'Melodic electronic / cinematic',
    origin: 'France',
    since: 'November 2026',
    facts: [
      'A French sound designer, composer and musician, Valérian explores, according to his presentation, the borders between electronic music, cinematic sounds and intimate melodies, between atmospheric textures, melodic piano and sonic experiments.',
      'After several years creating music for picture, he says he is now developing his own musical project more fully.',
      '"Feels Like Home", made with his younger sister Meije, was released on 6 November 2026 on Spotify (3 min 05); according to Valérian, it was originally composed for a documentary about a female runner, which has not yet been released.',
    ],
    portrait: "Valérian presents himself as a French sound designer, composer and musician. His world explores, in his words, the borders between electronic music, cinematic sounds and intimate melodies: his work moves between atmospheric textures, melodic piano and sonic experiments, blending his sound design experience with a personal approach to music. After several years creating music for picture, he is now developing his own musical project more fully. \"Feels Like Home\", made in collaboration with his younger sister Meije, is a track with a gentle, contemplative atmosphere, blending melodic electronics, piano and cinematic textures; according to Valérian, it evokes the need to escape, to get back to nature and to take time to recharge. The track was originally composed for a documentary about a female runner, which has not yet been released, and now finds a new life in this collaboration between brother and sister. On Spotify, \"Feels Like Home\" is credited to Valérian and Meije, released on 6 November 2026 and running 3 min 05; it is, to date, the only track highlighted on their two profiles. These biographical details come from Valérian himself: outside streaming platforms, very few sources cover him online, and only the existence of the track, its two credited performers, its release date and its length could be cross-checked (Spotify). Radio Odyssey welcomes him on air from 15 November 2026 with \"Feels Like Home\".",
    why: 'The melodic electronics of Valérian, rich in piano and cinematic textures, bring a gentle, contemplative breath to the station\'s selection — a discovery to hear while taking time to recharge.',
    linkHref: '/en/european-chill-radio.html',
    linkLabel: 'European chill radio',
  },
  'jeff-levy': {
    genre: 'Folk pop / singer-songwriter',
    origin: 'United States',
    since: 'November 2026',
    facts: [
      'A singer-songwriter and producer from the San Francisco Bay Area in California, and a retired anesthesiologist, Jeff Levy has worked in the studio without ever touring, according to his press kit.',
      'A friend who introduced him to the radio says he has played, written and sung for more than thirty years, without ever having a record deal or a big success; his press kit speaks of forty years of studio work.',
      '"Big Chill Car Trip" was released on 14 August 2026 on Spotify (3 min 47); his profile there had 15 monthly listeners on 14 November 2026.',
    ],
    portrait: "Jeff Levy presents himself, in his press kit, as a singer-songwriter and producer from the San Francisco Bay Area in California. He has worked in the studio for more than forty years, alongside a now-finished career as an anesthesiologist, and has never been a touring artist: he describes himself as a studio craftsman. His repertoire blends folk, pop, rock, country and electronics, with, for the project he is putting forward in spring 2026, a guitar-driven sound. The friend who introduced him to the radio describes him as someone who has played, written and sung for more than thirty years, who has never been in the spotlight or signed a record deal, and whose talent he rates very highly. The press kit adds that he was, in the late 1980s, one of the early MIDI pioneers and worked with MidiQuest on the programming of synthesizers such as the Oberheim Xpander, the Casio CZ-101, the Voyetra Eight and the Kawai K5, and that he now reworks his tracks with modern production tools. \"Big Chill Car Trip\" was released on 14 August 2026 on Spotify and runs 3 min 47; the artist's profile there had 15 monthly listeners as of 14 November 2026. These details come from the press kit and from the friend who introduced him: outside streaming platforms, we found no independent source about him (his name is also very common), and only the existence of the track, its performer, its release date, its length and the audience figure could be cross-checked (Spotify). The press kit also mentions several thousand cumulative streams, which we could not verify, and the two sources do not give the same length of career (thirty years on one side, forty on the other). Radio Odyssey welcomes him on air from 16 November 2026 with \"Big Chill Car Trip\".",
    why: 'The folk pop of Jeff Levy, a Bay Area songwriter who stayed away from the spotlight, adds a studio craftsman\'s voice to the station\'s selection — a discovery to follow from his arrival on 16 November 2026.',
    linkHref: '/en/feel-good-music-radio.html',
    linkLabel: 'feel-good music radio',
  },
  'calum-wood': {
    genre: 'Christmas folk',
    origin: 'Scotland',
    since: 'December 2026',
    facts: [
      'A Scottish singer-songwriter and producer born in Aberdeen, formerly of The Banana Sessions (who, according to his biography, have played Glastonbury and T in the Park), Calum Wood now lives and records in Brunei, according to his press release.',
      '"Ding Dong! Merrily on High!" comes from his second Christmas album, "Christmas Songs from the Kitchen Table, Vol. 2", announced for 13 November 2026 on Magic Park Records, digital only: guitar, voice, glockenspiel and an old Casio keyboard; the file supplied to the radio runs 2 min 44.',
      'The first volume, released on 28 November 2025, gathers traditional Christmas carols on guitar and voice, recorded around the kitchen table; his Spotify profile had about 5,500 monthly listeners on 14 November 2026.',
    ],
    portrait: "Calum Wood is a Scottish singer-songwriter and producer, born in Aberdeen, who draws on folk traditions and storytelling. According to his press release, he now lives and records in Brunei; he was a member of The Banana Sessions, whose biography cites appearances at Glastonbury and T in the Park, and has released several albums and singles in recent years, including \"Patterns\" (2025) and \"Songs from the Soapbox\" (2026). His \"Christmas Songs from the Kitchen Table\" series revisits the carols he heard as a child at school, in church and at home: the first volume, released on 28 November 2025, was recorded on guitar and voice, keeping the sound of the room and the hum of the fridge. The second, \"Christmas Songs from the Kitchen Table, Vol. 2\", is announced for 13 November 2026 on Magic Park Records, digital only; it adds glockenspiel and an old Casio keyboard to guitar and voice, and features familiar songs such as \"We Three Kings\", \"Jingle Bells\", \"In the Bleak Midwinter\" and \"Silent Night\". \"Ding Dong! Merrily on High!\" is a carol whose tune comes from a sixteenth-century French dance and whose best-known harmonisation, published in 1924, is by the composer Charles Wood (not to be confused with Calum Wood): the artist gives his own version of it here, in the same homemade spirit. These details come from the press release and the artist's website. We were able to check that his Spotify profile exists and had about 5,500 monthly listeners as of 14 November 2026, whereas the press release mentions a peak of about 25,000 monthly listeners and more than a quarter of a million streams, figures we could not cross-check; we could not find the second album on Spotify either, nor confirm its release date. Radio Odyssey welcomes him in its Christmas programming throughout December 2026 with \"Ding Dong! Merrily on High!\".",
    why: "The homemade folk of Calum Wood, on guitar, voice and glockenspiel, brings a craftsman's warmth to the station's Christmas selection — a discovery to hear throughout December 2026.",
    linkHref: '/en/what-makes-radio-odyssey-different.html',
    linkLabel: 'what makes Radio Odyssey different',
  },
  'paul-stone': {
    genre: 'Adult pop / soul-jazz',
    origin: 'United Kingdom',
    since: 'December 2026',
    facts: [
      'A songwriter from Yorkshire, Paul Stone records with The Basement Collective in an analogue studio he built beneath his family home, hence the band\'s name; the British regional press, including the Yorkshire Evening Post, covered the release of this Christmas song.',
      '"What Does Christmas Mean To You?" was released on 6 November 2026 (2 min 44); according to the artist, it blends contemporary adult pop, soul and jazz influences around a message of hope, compassion and solidarity.',
      'Born, according to Paul Stone, from looking at his own family and then at those who spend Christmas alone, the song asks the question that gives it its name; Paul Stone\'s Spotify profile had about 1,700 monthly listeners on 14 November 2026.',
    ],
    portrait: "Paul Stone is a songwriter from Yorkshire, in the United Kingdom, who records with The Basement Collective, a group of musicians brought together by long-standing friendships on the northern English music scene. According to the British regional press, he studied at Leeds College of Music and built a professional recording studio beneath his family home, hence the band's name. Their previous single, \"Embers\", came out in November 2025; according to the press and the artist, their records have been supported by Jazz FM, BBC Radio and other stations. \"What Does Christmas Mean To You?\" was released on 6 November 2026 and runs 2 min 44. Paul Stone says he wrote it the year before while watching his family and realising that what mattered most was being together, which made him think of other families, of older people and of those who spend Christmas alone: hence the question in the title. He describes it as a blend of contemporary adult pop, soul and jazz influences, played by musicians together, with a message of hope, compassion and solidarity, and states that the song was written, performed and produced by musicians in their studio. These details come from the artist and from British press articles, including the Yorkshire Evening Post. We were able to check on Spotify the existence of the track, its two credits (Paul Stone and The Basement Collective), its release date, its length and the profile's audience (about 1,700 monthly listeners as of 14 November 2026); the radio support mentioned was not cross-checked at source. Radio Odyssey welcomes it in its Christmas programming throughout December 2026 with \"What Does Christmas Mean To You?\".",
    why: 'The adult pop, soul and jazz touches of Paul Stone & The Basement Collective, carried by a simple question about what Christmas means, add an original song to the station\'s Christmas selection — a discovery to hear throughout December 2026.',
    linkHref: '/en/what-makes-radio-odyssey-different.html',
    linkLabel: 'what makes Radio Odyssey different',
  },
  'aka-sci-music': {
    genre: 'R&B / dance pop / UK garage',
    origin: 'Germany',
    since: 'November 2026',
    facts: [
      'aKa Sci Music is the project of Sylejman Makasci, an independent songwriter and producer based in Germany; the vocals are AI-assisted, which he presents openly, and in the now-playing display his name is followed by the mention "(IA)" for the information of listeners, while he says he writes the lyrics himself, designs the structures and arrangements and decides when a track is finished.',
      '"Half Awake" was released on 18 September 2026 (2 min 34): it is the eleventh of the 13 tracks on the album "Vol 5" on Spotify, which does hold the 13 tracks the artist mentions.',
      'According to him, the project blends warm R&B, dance pop and UK garage; his Spotify profile had 345 monthly listeners on 14 November 2026, and the "more than 100,000 streams" and "more than 400 radio plays" he mentions are cumulative figures supplied by the artist, which we could not cross-check.',
    ],
    portrait: "aKa Sci Music is the project of Sylejman Makasci, an independent songwriter and producer based in Germany. His music blends, according to him, warm R&B, dance pop and UK garage, with excursions into melodic house, Afrobeats and Mediterranean influences. The vocals are AI-assisted, which he presents openly: he explains that he writes the lyrics himself, develops the ideas, shapes the structures and arrangements, and decides when each song is finished, with AI serving mainly as a production tool, particularly for the voice. Writing a lyric and directing an arrangement is not the same as singing the final vocal: we say so that listeners know what they are hearing, which is why Radio Odyssey follows his name with the mention \"(IA)\" (the French abbreviation for AI) in the now-playing display. \"Half Awake\", released on 18 September 2026 and running 2 min 34, is on \"Vol 5\", a 13-track album; the artist names it among his three starting points into his catalogue, along with \"Neon Rain\" and \"Window Seat\". He also puts forward more than 100,000 streams and more than 400 radio plays worldwide, according to his own tracking. He describes \"Half Awake\" as the slightly floating feeling of coming home after a good night out, and \"Vol 5\" as an album of melodic tracks between house and R&B. These details come from the artist and from an article on the Jack Righteous website (27 October 2026), devoted to creators working with AI, which rests on his own submission and attributes his credits to him alone: it is not an independent source. We were able to check on Spotify the existence of the track, its release date, its length, its place on the album \"Vol 5\" and its 13 tracks, as well as the profile's audience (345 monthly listeners as of 14 November 2026); the stream and radio-play figures could not be cross-checked. Radio Odyssey welcomes him on air from 16 November 2026 with \"Half Awake\".",
    why: 'The warm R&B and dance pop of aKa Sci Music, whose AI-assisted vocals are presented with full transparency, add a bright, danceable touch to the station — a discovery to follow from its arrival on 16 November 2026.',
    linkHref: '/en/ai-music-on-radio-odyssey.html',
    linkLabel: 'AI music on Radio Odyssey',
  },
};

export const SLUGS_DISCOVERIES_EN = Object.keys(DISCOVERIES_EN);
