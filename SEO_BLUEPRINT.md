# Radio Odyssey — SEO Blueprint

**Document maître vivant.** Mis à jour à chaque lot de contenu créé. Objectif : éviter les doublons, la cannibalisation et les pages orphelines à mesure que le site grandit vers ~100 pages thématiques + ~100 fiches artistes.

À lire avant toute création de contenu, avec CLAUDE.md (contraintes techniques/SEO globales) et PROJET_RADIO_ODYSSEY.md (référence produit).

---

## 1. Objectif & philosophie

Attirer des internautes qui ne cherchent pas "Radio Odyssey" directement, via des contenus utiles sur le bien-être, la santé mentale positive, la cohérence cardiaque et la musique — pour ensuite les convertir en auditeurs réguliers.

**Principe directeur : le long traîne défendable plutôt que le volume générique.**

Radio Odyssey est un petit acteur. Sur des requêtes génériques et très concurrentielles ("bienfaits de la musique", "musique relaxante"), il n'a aucune chance face aux sites d'autorité (presse santé, applications de méditation). La stratégie qui fonctionne : des pages ancrées sur ce que le site a d'unique et vérifiable —
- la programmation réelle (données RadioKing, cf. §6)
- les séquences de cohérence cardiaque à heures fixes, intégrées à l'antenne
- le positionnement 100% gratuit, sans publicité
- les 6 cocons déjà en place (moments de la journée, artistes, styles, conseils d'écoute)

Chaque nouvelle page doit répondre à une intention de recherche **réellement gagnable** et **non couverte** par une page existante.

---

## 2. Règles anti-cannibalisation (obligatoires avant toute création)

1. **Vérifier le registre (§4) avant de proposer une URL ou un mot-clé.** Si un sujet proche existe déjà, soit on enrichit la page existante, soit on choisit un angle clairement distinct.
2. **Un mot-clé cible = une seule page.** Deux pages ne doivent jamais viser la même intention de recherche.
3. **Aucune promesse produit non vérifiée.** Ex. : la nuit (21h-6h) sur Radio Odyssey est le fil "Good Feeling", positif et non-stop — **pas** une programmation calme/sommeil. Ne jamais créer de contenu qui laisse entendre le contraire sans revalidation avec le propriétaire.
4. **Un pilier par cocon, pas de pilier concurrent.** Chaque cocon a une page hub unique (générée depuis `src/data/navigation.js` + `CategoryHub.astro`). Ne pas créer de seconde page "chapeau" pour un cocon existant.
5. **Pas de page orpheline.** Toute nouvelle page doit être ajoutée à `src/data/navigation.js` (menu, footer, sidebar, hub, sitemap en découlent automatiquement) et recevoir/émettre au moins un lien contextuel depuis une page existante du même cocon.

---

## 3. Architecture des cocons

| Cocon | Hub | Pages live | Pages prévues (non créées) |
|---|---|---|---|
| Bien-être & Santé | `/bien-etre-et-sante.html` | 12 | — |
| Musique & Énergie | `/musique-et-energie.html` | 4 | — |
| Playlists du Jour | `/playlists-du-jour.html` | 6 | — |
| Artistes & Styles | `/artistes-et-styles.html` | 104 (2 hubs + 100 fiches artistes + 4 fiches Découvertes) | — (objectif 100 fiches atteint, §6) |
| Conseils d'Écoute | `/conseils-ecoute.html` | 3 | — |
| Les Coulisses | `/coulisses-de-radio-odyssey.html` | 1 | **Prévu : mécanique des jingles et autres coulisses éditoriales (demande du propriétaire, 2026-07-02)** |
| International (EN) | `/international.html` | 4 | — |

Total live à ce jour : 145 pages (voir `git log` pour la valeur exacte, ce nombre évolue vite — ne pas se fier à ce total sans revérifier).

---

## 4. Registre des pages

### Bien-être & Santé
| URL | Mot-clé cible | Statut |
|---|---|---|
| `/radio-coherence-cardiaque.html` | radio cohérence cardiaque | Live |
| `/radio-bien-etre-en-ligne.html` | radio bien-être en ligne | Live |
| `/radio-anti-stress-gratuite.html` | radio anti-stress gratuite | Live |
| `/musique-pour-respiration-guidee.html` | musique respiration guidée | Live |
| `/radio-detente-moderne.html` | radio détente moderne | Live |
| `/comment-pratiquer-la-coherence-cardiaque.html` | comment pratiquer la cohérence cardiaque | Lot 002 |
| `/bienfaits-coherence-cardiaque.html` | bienfaits cohérence cardiaque | Lot 002 |
| `/radio-sans-publicite.html` | radio sans publicité | Lot 002 |
| `/coherence-cardiaque-au-bureau.html` | cohérence cardiaque au bureau | Lot 002 |
| `/musique-sans-parole-pour-se-concentrer.html` | musique sans parole pour se concentrer | Lot 002 |
| `/difference-musicotherapie-radio-bien-etre.html` | musicothérapie vs radio bien-être | Lot 002 |
| `/avis-radio-odyssey-bien-etre.html` | avis radio odyssey bien-être | Lot 002 |

### Musique & Énergie
| URL | Mot-clé cible | Statut |
|---|---|---|
| `/radio-annees-80-en-ligne.html` | radio années 80 en ligne | Live |
| `/radio-dance-energisante.html` | radio dance énergisante | Live |
| `/musique-pour-se-concentrer.html` | musique pour se concentrer | Live |
| `/radio-pour-travailler.html` | radio pour travailler | Live |

### Playlists du Jour
| URL | Mot-clé cible | Statut |
|---|---|---|
| `/musique-pour-le-reveil.html` | musique pour le réveil | Live |
| `/playlist-pour-la-matinee.html` | playlist pour la matinée | Live |
| `/musique-pour-la-pause-dejeuner.html` | musique pause déjeuner | Live |
| `/musique-pour-lapres-midi.html` | musique pour l'après-midi | Live |
| `/musique-pour-laperitif.html` | musique pour l'apéritif | Live |
| `/musique-pour-la-nuit.html` | musique pour la nuit | Live |

### Artistes & Styles
| URL | Mot-clé cible | Statut |
|---|---|---|
| `/artistes-diffuses-radio-odyssey.html` | artistes diffusés radio odyssey | Live |
| `/styles-musicaux-radio-odyssey.html` | styles musicaux radio odyssey | Live |
| `/decouvertes-radio-odyssey.html` | découvertes radio odyssey | Live (voir §6bis) |
| `/decouverte-tom-york.html` | tom york radio odyssey | Live |
| `/decouverte-tree-gees.html` | tree gees radio odyssey | Live |
| `/decouverte-tony-jay.html` | tony jay radio odyssey | Live |
| `/decouverte-remi-dorage.html` | remi dorage radio odyssey | Live |
| `/artiste-madonna.html` | madonna radio odyssey | Live (Lot 1) |
| `/artiste-shakira.html` | shakira radio odyssey | Live (Lot 1) |
| `/artiste-michael-jackson.html` | michael jackson radio odyssey | Live (Lot 1) |
| `/artiste-ed-sheeran.html` | ed sheeran radio odyssey | Live (Lot 1) |
| `/artiste-mika.html` | mika radio odyssey | Live (Lot 1) |
| `/artiste-daft-punk.html` | daft punk radio odyssey | Live (Lot 1) |
| `/artiste-david-guetta.html` | david guetta radio odyssey | Live (Lot 1) |
| `/artiste-u2.html` | u2 radio odyssey | Live (Lot 1) |
| `/artiste-queen.html` | queen radio odyssey | Live (Lot 1) |
| `/artiste-gims.html` | gims radio odyssey | Live (Lot 1) |
| `/artiste-bruno-mars.html` | bruno mars radio odyssey | Live (Lot 1) |
| `/artiste-lady-gaga.html` | lady gaga radio odyssey | Live (Lot 1) |
| `/artiste-teddy-swims.html` | teddy swims radio odyssey | Live (Lot 1) |
| `/artiste-mylene-farmer.html` | mylène farmer radio odyssey | Live (Lot 1) |
| `/artiste-angele.html` | angèle radio odyssey | Live (Lot 1) |
| `/artiste-aya-nakamura.html` | aya nakamura radio odyssey | Live (Lot 1, ajout hors classement passages — artiste incontournable signalée par le propriétaire) |
| `/artiste-jennifer-lopez.html` | jennifer lopez radio odyssey | Live (Lot 2) |
| `/artiste-taylor-swift.html` | taylor swift radio odyssey | Live (Lot 2) |
| `/artiste-zazie.html` | zazie radio odyssey | Live (Lot 2) |
| `/artiste-pascal-obispo.html` | pascal obispo radio odyssey | Live (Lot 2) |
| `/artiste-justin-bieber.html` | justin bieber radio odyssey | Live (Lot 2) |
| `/artiste-indochine.html` | indochine radio odyssey | Live (Lot 2) |
| `/artiste-bebe-rexha.html` | bebe rexha radio odyssey | Live (Lot 2) |
| `/artiste-ariana-grande.html` | ariana grande radio odyssey | Live (Lot 2) |
| `/artiste-coldplay.html` | coldplay radio odyssey | Live (Lot 2) |
| `/artiste-calvin-harris.html` | calvin harris radio odyssey | Live (Lot 2) |
| `/artiste-alicia-keys.html` | alicia keys radio odyssey | Live (Lot 2) |
| `/artiste-dua-lipa.html` | dua lipa radio odyssey | Live (Lot 2) |
| `/artiste-the-weeknd.html` | the weeknd radio odyssey | Live (Lot 2) |
| `/artiste-harry-styles.html` | harry styles radio odyssey | Live (Lot 2) |
| `/artiste-sia.html` | sia radio odyssey | Live (Lot 2) |
| `/artiste-sting.html` | sting radio odyssey | Live (Lot 3) |
| `/artiste-sabrina-carpenter.html` | sabrina carpenter radio odyssey | Live (Lot 3) |
| `/artiste-katy-perry.html` | katy perry radio odyssey | Live (Lot 3) |
| `/artiste-miley-cyrus.html` | miley cyrus radio odyssey | Live (Lot 3) |
| `/artiste-celine-dion.html` | céline dion radio odyssey | Live (Lot 3) |
| `/artiste-simple-minds.html` | simple minds radio odyssey | Live (Lot 3) |
| `/artiste-maroon-5.html` | maroon 5 radio odyssey | Live (Lot 3) |
| `/artiste-phil-collins.html` | phil collins radio odyssey | Live (Lot 3) |
| `/artiste-robbie-williams.html` | robbie williams radio odyssey | Live (Lot 3) |
| `/artiste-wham.html` | wham radio odyssey | Live (Lot 3) |
| `/artiste-karol-g.html` | karol g radio odyssey | Live (Lot 3) |
| `/artiste-vanessa-paradis.html` | vanessa paradis radio odyssey | Live (Lot 3) |
| `/artiste-jean-jacques-goldman.html` | jean-jacques goldman radio odyssey | Live (Lot 3) |
| `/artiste-stromae.html` | stromae radio odyssey | Live (Lot 3) |
| `/artiste-elton-john.html` | elton john radio odyssey | Live (Lot 3) |
| `/artiste-tame-impala.html` | tame impala radio odyssey | Live (Lot 4) |
| `/artiste-alex-warren.html` | alex warren radio odyssey | Live (Lot 4) |
| `/artiste-jeremy-frerot.html` | jérémy frérot radio odyssey | Live (Lot 4) |
| `/artiste-sound-of-legend.html` | sound of legend radio odyssey | Live (Lot 4) |
| `/artiste-ofenbach.html` | ofenbach radio odyssey | Live (Lot 4) |
| `/artiste-djo.html` | djo radio odyssey | Live (Lot 4) |
| `/artiste-christophe-willem.html` | christophe willem radio odyssey | Live (Lot 4) |
| `/artiste-christophe-mae.html` | christophe maé radio odyssey | Live (Lot 4) |
| `/artiste-tove-lo.html` | tove lo radio odyssey | Live (Lot 4) |
| `/artiste-zaho.html` | zaho radio odyssey | Live (Lot 4) |
| `/artiste-bananarama.html` | bananarama radio odyssey | Live (Lot 4) |
| `/artiste-clara-luciani.html` | clara luciani radio odyssey | Live (Lot 4) |
| `/artiste-amy-macdonald.html` | amy macdonald radio odyssey | Live (Lot 4) |
| `/artiste-sade.html` | sade radio odyssey | Live (Lot 4) |
| `/artiste-soprano.html` | soprano radio odyssey | Live (Lot 4) |
| `/artiste-clean-bandit.html` | clean bandit radio odyssey | Live (Lot 5) |
| `/artiste-charlotte-cardin.html` | charlotte cardin radio odyssey | Live (Lot 5) |
| `/artiste-r3hab.html` | r3hab radio odyssey | Live (Lot 5) |
| `/artiste-simply-red.html` | simply red radio odyssey | Live (Lot 5) |
| `/artiste-damiano-david.html` | damiano david radio odyssey | Live (Lot 5) |
| `/artiste-ava-max.html` | ava max radio odyssey | Live (Lot 5) |
| `/artiste-m-pokora.html` | m pokora radio odyssey | Live (Lot 5) |
| `/artiste-benson-boone.html` | benson boone radio odyssey | Live (Lot 5) |
| `/artiste-kungs.html` | kungs radio odyssey | Live (Lot 5) |
| `/artiste-earth-wind-and-fire.html` | earth wind and fire radio odyssey | Live (Lot 5) |
| `/artiste-charlie-winston.html` | charlie winston radio odyssey | Live (Lot 5) |
| `/artiste-amir.html` | amir radio odyssey | Live (Lot 5) |
| `/artiste-lost-frequencies.html` | lost frequencies radio odyssey | Live (Lot 5) |
| `/artiste-robin-schulz.html` | robin schulz radio odyssey | Live (Lot 5) |
| `/artiste-rihanna.html` | rihanna radio odyssey | Live (Lot 5) |
| `/artiste-ridsa.html` | ridsa radio odyssey | Live (Lot 6) |
| `/artiste-doja-cat.html` | doja cat radio odyssey | Live (Lot 6) |
| `/artiste-adele.html` | adele radio odyssey | Live (Lot 6) |
| `/artiste-avicii.html` | avicii radio odyssey | Live (Lot 6) |
| `/artiste-christina-aguilera.html` | christina aguilera radio odyssey | Live (Lot 6) |
| `/artiste-jamiroquai.html` | jamiroquai radio odyssey | Live (Lot 6) |
| `/artiste-lizzo.html` | lizzo radio odyssey | Live (Lot 6) |
| `/artiste-the-black-eyed-peas.html` | black eyed peas radio odyssey | Live (Lot 6) |
| `/artiste-bob-sinclar.html` | bob sinclar radio odyssey | Live (Lot 6) |
| `/artiste-kylie-minogue.html` | kylie minogue radio odyssey | Live (Lot 6) |
| `/artiste-moby.html` | moby radio odyssey | Live (Lot 6) |
| `/artiste-laurent-voulzy.html` | laurent voulzy radio odyssey | Live (Lot 6) |
| `/artiste-dj-snake.html` | dj snake radio odyssey | Live (Lot 6) |
| `/artiste-pierre-garnier.html` | pierre garnier radio odyssey | Live (Lot 6) |
| `/artiste-dario-g.html` | dario g radio odyssey | Live (Lot 6) |
| `/artiste-jain.html` | jain radio odyssey | Live (Lot 7) |
| `/artiste-lewis-capaldi.html` | lewis capaldi radio odyssey | Live (Lot 7) |
| `/artiste-beyonce.html` | beyoncé radio odyssey | Live (Lot 7) |
| `/artiste-amy-winehouse.html` | amy winehouse radio odyssey | Live (Lot 7) |
| `/artiste-julien-dore.html` | julien doré radio odyssey | Live (Lot 7) |
| `/artiste-craig-david.html` | craig david radio odyssey | Live (Lot 7) |
| `/artiste-the-avener.html` | the avener radio odyssey | Live (Lot 7) |
| `/artiste-shawn-mendes.html` | shawn mendes radio odyssey | Live (Lot 7) |
| `/artiste-bob-marley.html` | bob marley radio odyssey | Live (Lot 7) |

### Conseils d'Écoute
| URL | Mot-clé cible | Statut |
|---|---|---|
| `/ecouter-radio-odyssey-sur-mobile.html` | écouter radio odyssey mobile | Live |
| `/ecouter-radio-odyssey-en-voiture.html` | écouter radio odyssey voiture | Live |
| `/ecouter-radio-odyssey-enceinte-connectee.html` | écouter radio odyssey enceinte connectée | Live |

### Les Coulisses (nouveau cocon, créé le 2026-07-02)
| URL | Mot-clé cible | Statut |
|---|---|---|
| `/coulisses-de-radio-odyssey.html` | coulisses radio odyssey | Live (hub) |
| `/comment-radio-odyssey-choisit-sa-musique.html` | comment radio odyssey choisit sa musique | Live (déplacé depuis Playlists du Jour) |

### International
| URL | Mot-clé cible | Statut |
|---|---|---|
| `/positive-european-music-station.html` | positive european music station | Live |
| `/european-chill-radio.html` | european chill radio | Live |
| `/feel-good-music-radio.html` | feel good music radio | Live |
| `/keep-listening-radio-odyssey.html` | keep listening radio odyssey | Live |

---

## 5. Lot 002 — Cocon Bien-être (7 pages)

Remplace le blueprint générique initial ("Lot 001") qui dupliquait des pages existantes et visait des mots-clés trop concurrentiels (voir décision du 2026-07-02). Chaque page ci-dessous a un angle vérifié comme distinct des 5 pages Bien-être déjà live et des 6 autres pages de ce lot.

| # | URL | Angle | Intention Google | Renvoie vers (existant) |
|---|---|---|---|---|
| 1 | `comment-pratiquer-la-coherence-cardiaque.html` | Guide pratique pas-à-pas | Informationnelle ("comment faire") | `radio-coherence-cardiaque.html` |
| 2 | `bienfaits-coherence-cardiaque.html` | Science de la cohérence cardiaque (pas "la musique" en général) | Informationnelle, niche défendable | `radio-coherence-cardiaque.html`, `musique-pour-respiration-guidee.html` |
| 3 | `radio-sans-publicite.html` | USP concret (0 pub, gratuit à vie) | Transactionnelle, peu disputée | Page d'accueil, hub bien-être |
| 4 | `coherence-cardiaque-au-bureau.html` | Bien-être en entreprise, horaires pendant la journée de travail | Croisement travail × bien-être | `radio-pour-travailler.html`, `radio-coherence-cardiaque.html` |
| 5 | `musique-sans-parole-pour-se-concentrer.html` | Format instrumental spécifique | Informationnelle précise | `musique-pour-se-concentrer.html` |
| 6 | `difference-musicotherapie-radio-bien-etre.html` | Clarifie ce que Radio Odyssey est / n'est pas | Comparative, honnête | Hub bien-être |
| 7 | `avis-radio-odyssey-bien-etre.html` | Témoignages détaillés, preuve sociale | Navigationnelle/réassurance | Toutes les pages bien-être |

Statut de construction : voir tâches de session. Une fois live, ce tableau passe en "Live" dans le registre (§4).

---

## 6. Fiches artistes — méthodologie

**Source de vérité :** export de programmation RadioKing (CSV `Artist,Album,Track,...,Start date,End date,Duration`), pas de supposition. Voir mémoire `reference-radioking-programming-export` pour comment le régénérer.

**Priorisation : par nombre de passages réels sur un mois donné**, pas au hasard. Top 30 (export juin 2026, pour référence — se périmera, refaire l'extraction avant un nouveau lot) :

Shakira (105), Madonna (100), David Guetta (97), Gims (96), Ed Sheeran (92), Bruno Mars (90), Tame Impala (88), Helena (87), Lady Gaga (87), Teddy Swims (87), Mylène Farmer (86), Angèle (86), Jennifer Lopez (86), Taylor Swift (86), Zazie (85), Pascal Obispo (85), Alex Warren (85), Jérémy Frérot (85), Justin Bieber (83), Sound Of Legend (81), K-Pop Demon Hunters (80), Indochine (77), Ofenbach (76), Bebe Rexha (74), Marine (72), Ariana Grande (72), The Second Voice (68), Djo (65), Coldplay (63), Calvin Harris (62).

**Template de fiche (evergreen, pas d'actualité volatile non vérifiable) :**
- Genre musical / époque
- Titres phares diffusés sur l'antenne (réels, tirés du CSV)
- Pourquoi cet artiste est diffusé sur Radio Odyssey (lien vers le style/cocon concerné)
- "3 choses essentielles à savoir" — faits publics stables (formation, période d'activité, style), pas de "dernière actu" que je ne peux pas garantir fraîche/exacte à l'échelle de 100 fiches
- Lien vers `/artistes-diffuses-radio-odyssey.html` et vers le style concerné sur `/styles-musicaux-radio-odyssey.html`

**Rollout : par lots de 15-20**, en commençant par le haut du classement ci-dessus. Pas de génération des 100 en une passe (risque qualité/exactitude à cette échelle).

**URL pattern retenu et implémenté :** `/artiste-[slug].html`, plat, cohérent avec le reste du site. Techniquement : route dynamique Astro `src/pages/artiste-[slug].astro` avec `getStaticPaths()` lisant `src/data/artists.js` — ajouter un artiste = ajouter une entrée dans ce fichier, aucune autre édition de code nécessaire. Chaque fiche a son propre schema.org `MusicGroup`, une FAQ courte générée à partir des données (3 questions depuis le 2026-07-02, voir ci-dessous), et des liens vers 3 autres fiches artistes + les deux pages hub (`artistes-diffuses-radio-odyssey.html`, `styles-musicaux-radio-odyssey.html`). Les fiches ne sont pas listées individuellement dans le méga-menu (deviendrait ingérable à 100) — la découverte se fait via la page `artistes-diffuses-radio-odyssey.html` (qui pointe vers chaque fiche créée) et le sitemap.

**⚠️ Pivot de ciblage mots-clés (2026-07-02), avant passage en Google Search Console :** le propriétaire a fait remarquer, à raison, que le titre/description initiaux ("{Artiste} sur Radio Odyssey — Titres Diffusés & Infos") ne ciblaient que des requêtes de marque ("madonna radio odyssey"), c'est-à-dire des internautes qui connaissent déjà la radio — zéro potentiel d'acquisition de nouveaux auditeurs cherchant juste le nom d'un artiste (impossible à gagner face à Wikipédia/Spotify de toute façon). **Décision : ne pas changer les URLs** (déjà propres, cohérentes avec le reste du site, aucun intérêt SEO à les modifier) mais retravailler `<title>`, meta description, sous-titre H1 (PageHero `text`) et FAQ pour couvrir des requêtes non-marque réalistes et gagnables : angle "remix" (différenciateur réel de l'antenne), "radio gratuite", "sans pub", "mobile". Comme ces champs sont générés depuis un seul template (`src/pages/artiste-[slug].astro`), la modification s'applique instantanément aux 100 fiches. Nouveau format :
- `title` : `{Artiste} : Remix & Titres en Radio Gratuite — Radio Odyssey`
- `description` : `{Artiste} ({genre}) sur Radio Odyssey : remix diffusés sur l'antenne, titres réellement joués, et une radio 100% gratuite, sans pub, à écouter en direct sur mobile ou ordinateur.`
- PageHero `text` (sous-titre H1) : `{genre} — {origine}. Écoutez les titres et remix de {Artiste} sur une radio gratuite, sans pub, disponible sur mobile.`
- 3e question FAQ ajoutée : "Peut-on écouter {Artiste} gratuitement sur une radio en ligne ?" — formulée pour capter les requêtes vocales/mobiles en langage naturel, et pour éviter le piège grammatical (accord porté sur "les artistes réguliers de la programmation", jamais sur le nom de l'artiste).

**À faire si l'occasion se présente :** le même diagnostic s'applique probablement aux fiches Découvertes (`src/data/discoveries.js` / `decouverte-[slug].astro`) — titre actuel `"{Artiste} — Découverte Radio Odyssey"` est encore plus pure marque. Pas retravaillé le 2026-07-02 (pas demandé explicitement), mais bon candidat pour un futur pivot similaire.

**Lot 1 (16 fiches) livré le 2026-07-02** : les 9 artistes "phares" déjà mis en avant (Madonna, Shakira, Michael Jackson, Ed Sheeran, Mika, Daft Punk, David Guetta, U2, Queen) + les 6 suivants par nombre de passages réels (Gims, Bruno Mars, Lady Gaga, Teddy Swims, Mylène Farmer, Angèle) + Aya Nakamura (ajoutée hors classement, sur demande explicite — artiste incontournable de la scène française malgré l'absence de rap urbain dans la programmation générale).

**Lot 2 (15 fiches) livré le 2026-07-02** : Jennifer Lopez, Taylor Swift, Zazie, Pascal Obispo, Justin Bieber, Indochine, Bebe Rexha, Ariana Grande, Coldplay, Calvin Harris, Alicia Keys, Dua Lipa, The Weeknd, Harry Styles, Sia — par nombre de passages réels, poursuite directe du classement. À partir de ce lot, la page `artistes-diffuses-radio-odyssey.html` ne garde en grandes cartes que les 9 premiers artistes ; les suivants passent en pastilles cliquables (`moreWithPage`) pour que la page reste gérable à l'échelle de 100 fiches.

**Lot 3 (15 fiches) livré le 2026-07-02** : Sting, Sabrina Carpenter, Katy Perry, Miley Cyrus, Céline Dion, Simple Minds, Maroon 5, Phil Collins, Robbie Williams, Wham!, Karol G, Vanessa Paradis, Jean-Jacques Goldman, Stromae, Elton John — noms qui étaient déjà annoncés (fiches à venir) sur la page hub, désormais tous dotés d'une fiche réelle. Le bloc "Ils sont aussi très présents sur l'antenne" (liste à plat, non cliquable) est retiré de la page hub puisqu'il est vide pour l'instant ; il sera réintroduit au prochain lot avec les 15 noms suivants.

**Lot 4 (15 fiches) livré le 2026-07-02** : Tame Impala, Alex Warren, Jérémy Frérot, Sound Of Legend, Ofenbach, Djo, Christophe Willem, Christophe Maé, Tove Lo, Zaho, Bananarama, Clara Luciani, Amy Macdonald, Sade, Soprano — classement réel recalculé sur le même export CSV juin 2026. **5 entrées du classement ont été écartées** faute d'identité suffisamment vérifiable pour un contenu factuel fiable à ce stade : "Helena" (87 passages), "Marine" (72), "K-Pop Demon Hunters" (80 — bande originale d'un film d'animation, pas un artiste au sens propre), "The Second Voice" (68), "Jeck & Carla" (53). À revisiter si une identification fiable est possible plus tard (voir §8).

**Lot 5 (15 fiches) livré le 2026-07-02** : Clean Bandit, Charlotte Cardin, R3HAB, Simply Red, Damiano David, Ava Max, M. Pokora, Benson Boone, Kungs, Earth Wind & Fire, Charlie Winston, Amir, Lost Frequencies, Robin Schulz, Rihanna. Les 5 noms ambigus du Lot 4 restent écartés (toujours pas d'identité vérifiable). Un nom "Tom York" (37 passages, titre "Sunscreen") a aussi été écarté — probable graphie erronée dans l'export CSV, identité non confirmée, à ne pas confondre avec Thom Yorke (Radiohead) sans certitude. **Anomalie de données repérée** : le CSV contient une entrée "Jean‐Jacques Goldman" (37 passages) avec un tiret typographique différent (U+2010) de la fiche déjà publiée "Jean-Jacques Goldman" (tiret standard, 18 passages) — même artiste, deux graphies. Pas de nouvelle fiche créée (déjà couvert), mais le total réel de passages de Jean-Jacques Goldman est donc ~55, pas 18 — à corriger dans sa fiche existante si l'exactitude du chiffre affiché devient importante.

**Lot 6 (15 fiches) livré le 2026-07-02** : Ridsa, Doja Cat, Adele, Avicii, Christina Aguilera, Jamiroquai, Lizzo, The Black Eyed Peas, Bob Sinclar, Kylie Minogue, Moby, Laurent Voulzy, DJ Snake, Pierre Garnier, Dario G — classement réel poursuivi, mêmes règles d'écartement des identités ambiguës (Santa, Styleto, "Justé, Jaxstyle, Jon" écartés ce tour-ci pour la même raison).

**Lot 7 (9 fiches) livré le 2026-07-02** : Jain, Lewis Capaldi, Beyoncé, Amy Winehouse, Julien Doré, Craig David, The Avener, Shawn Mendes, Bob Marley. **Ce lot boucle le lot initial de 69 fiches annoncé par le propriétaire** — total cocon Artistes : **100 fiches exactement** (16 + 15 + 15 + 15 + 15 + 15 + 9 = 100 ; les identités écartées comme Helena/Marine/Tom York n'ont jamais été comptées dans ce total puisqu'elles n'ont pas été publiées). ⚠️ Correction : un précédent message de session avait annoncé "84 fiches" par erreur de calcul — c'est faux, le compte exact (vérifié par `grep -c` sur `artists.js`) est 100. **L'objectif des 100 fiches artistes est donc déjà atteint, aucune fiche supplémentaire n'est nécessaire pour l'instant.**

**⚠️ Piège grammatical à éviter sur toutes les futures fiches :** ne jamais accorder un adjectif/participe passé ("diffusé/diffusée") directement sur le nom de l'artiste dans un template générique — un artiste peut être un homme, une femme ou un groupe, et le genre n'est pas dans les données. Toujours formuler pour que l'accord se fasse sur "Radio Odyssey" (féminin, invariable dans le contexte) plutôt que sur l'artiste, ex. "Radio Odyssey diffuse-t-elle souvent [Artiste] ?" plutôt que "[Artiste] est-il/elle diffusé(e) ?". Bug repéré et corrigé le 2026-07-02 par le propriétaire du site sur la fiche Madonna.

### 6bis. Méthodologie de programmation — expertise du propriétaire (2026-07-02)

Le propriétaire a expliqué son métier de programmateur radio, contexte important pour toute future page qui parlerait de "comment fonctionne la programmation" :

- **RadioKing est un hébergeur, pas un logiciel de programmation pro** (type Selector) — le propriétaire n'a pas accès à des réglages avancés de rotation. Il a construit manuellement des **tranches de programmation par horaire**, qu'il mélange et réordonne à sa convenance pour renouveler l'écoute tout en gardant la couleur de l'antenne.
- **Cycle de vie d'un titre** : un titre est d'abord une **"nouveauté"** (rotation ~3 diffusions/jour). S'il est puissant, il bascule ensuite dans la catégorie **"récurrents"** — d'anciennes nouveautés qui reviennent avec une stratégie de programmation pensée pour garder une couleur actuelle. Ce n'est donc pas un simple vieillissement : c'est une decision éditoriale.
- **Conséquence pour l'extraction CSV** : un export sur 1 mois surreprésente les nouveautés du moment (forte rotation temporaire) ; un export sur 6 mois (voir fichier `Radio odyssey report musique et chroniques -from-2026-01-01-to-2026-06-30.csv`, format différent — une ligne par titre avec un champ `Play frequency` déjà agrégé, pas un log brut par diffusion) lisse ce biais et reflète mieux le fonds récurrent réel de l'antenne.
- **Vérification faite avec le fichier 6 mois** : le top 20 par cumul de `Play frequency` sur la période recoupe très largement les artistes déjà publiés (David Guetta, Taylor Swift, Gims, Shakira, Bruno Mars, Ed Sheeran, Madonna, Harry Styles, Mika, Katy Perry, R3HAB, Miley Cyrus, Pascal Obispo, Lady Gaga, Ofenbach, Angèle, Alex Warren, Vanessa Paradis) — la sélection en 7 lots basée sur l'export d'un seul mois (juin 2026) était donc solide, pas besoin de tout refaire.
- **"Tom York"** (écarté du Lot 6 par prudence) apparaît de façon stable sur 6 mois : 285 passages cumulés sur 3 titres différents — ce n'est pas un artefact d'un seul mois. ✅ Identité clarifiée par le propriétaire le 2026-07-02 : c'est un artiste "Découverte Radio Odyssey" (voir §6ter), fiche créée sous `/decouverte-tom-york.html`.
- ✅ **Article publié le 2026-07-02** : `/comment-radio-odyssey-choisit-sa-musique.html`. Contenu construit à partir des réponses détaillées du propriétaire aux questions d'interview (7 tranches horaires en rotation, catégorie "remix années 80" limitée à 2-3 tranches, tranches matinales alternées, tranche 18h-minuit plus rythmée, limite du réglage global RadioKing vs Selector, cycle nouveauté→récurrent/fin de diffusion, méthode des auditoriums et son regard critique dessus, traitement des Découvertes avec jingle dédié, exemple de la programmation de Noël). **Deux points explicitement gardés confidentiels par le propriétaire** ("mais chut…", "encore un secret de fabrication…") : l'alternative aux auditoriums coûteux, et les critères précis de sélection des titres de Noël — mentionnés sur la page comme du "savoir-faire maison" sans être détaillés. Rappel : le terme interne "Frigo" (voir §6ter) ne doit jamais apparaître sur le site — règle qui s'applique à tout contenu futur sur ce sujet.
- **Réorganisation du 2026-07-02** : le propriétaire a demandé de sortir cet article de "Playlists du Jour" pour créer un cocon dédié, **"Les Coulisses de Radio Odyssey"** (nouvel onglet du méga-menu, positionné entre "Conseils d'Écoute" et "International"), avec l'intention explicite d'y ajouter plus tard d'autres contenus coulisses (ex. la mécanique de fabrication des jingles et leur rôle dans le flux musical). Hub : `/coulisses-de-radio-odyssey.html`. Note technique : le libellé complet "Les Coulisses de Radio Odyssey" est utilisé comme titre de page/H1, mais l'onglet du méga-menu affiche la forme courte "Les Coulisses" (cohérent avec la longueur des autres onglets et pour éviter que la barre de navigation ne passe à la ligne sur les résolutions d'ordinateur portable ~1280-1366px).

### 6ter. Cocon "Découvertes Radio Odyssey" (créé le 2026-07-02)

Nouvelle sous-thématique dans "Artistes & Styles", distincte du cocon Artistes principal (§6) : des artistes émergents que le propriétaire choisit personnellement de soutenir (sollicitations de maisons de disques/labels), **pas classés par volume de diffusion**. Fichier source : `src/data/discoveries.js` ; route dynamique : `src/pages/decouverte-[slug].astro` ; page hub : `/decouvertes-radio-odyssey.html`.

**Ton éditorial demandé par le propriétaire** : mettre en avant le fait que Radio Odyssey soutient les artistes et la scène musicale émergente, et que les maisons de disques/artistes peuvent proposer leur musique à `odysseylaradio@gmail.com`. Radio Odyssey se positionne comme "à l'affût" de talents qui correspondent à la couleur et à l'univers de l'antenne.

**⚠️ Terminologie strictement interne, jamais à publier sur le site :** le propriétaire distingue en interne les "nouveautés" qui deviennent soit **récurrentes** (diffusion maintenue car le titre est fort), soit mises au **"Frigo"** (plus diffusées du tout) — ce dernier terme est un secret de fabrication explicitement demandé de ne jamais apparaître publiquement ("ne précise pas la notion de frigo, c'est interne, entre nous", 2026-07-02). Sur le site, cette distinction se traduit uniquement par un choix de temps verbal (présent pour un artiste toujours diffusé, passé pour un artiste qui a marqué l'antenne à un moment donné), jamais par une explication du mécanisme. Champ `active: true/false` dans `discoveries.js` pilote ce choix de temps dans le template — ne jamais ajouter de texte qui nommerait ou décrirait la catégorie "Frigo".

**Fiches créées (lot 1, 4 artistes)** — statut déterminé par recoupement de l'historique de diffusion complet (fichiers couvrant janvier 2025 à juillet 2026, voir mémoire `reference-radioking-programming-export`), pas par supposition :
- **Tom York** (`active: true`) — en rotation depuis mars 2025, toujours diffusé. Chanteur pop rock anglais, également remixeur pour OneRepublic et Lara Fabian.
- **Tree Gees** (`active: true`) — en rotation depuis juin 2025, toujours diffusé. Groupe italien, hommage aux Bee Gees + compositions originales dans leur style (anecdote "Sweet Embrace").
- **Tony Jay** (`active: false`) — diffusé avril-novembre 2025. DJ/producteur français, style afro/deep house/electro, single "Africa Vitamine" avec la chanteuse Luanne et la saxophoniste Mili Sax.
- **Rémi Dorage** (`active: false`) — diffusé septembre-novembre 2025 (+ reliquat léger début 2026). Chanteur français, chanson positive/dansante, collaboration franco-danoise avec le producteur Néonors ("Un Sourire Lundi", "Ma Folie").

Bios fournies directement par le propriétaire (dossiers de presse / connaissance personnelle) — ne pas réutiliser telles quelles ailleurs sans vérifier qu'elles restent à jour (nouveaux singles, nouveaux statuts actif/inactif) si de nouvelles Découvertes sont ajoutées plus tard.

**Pivot SEO du 2026-07-02 : positionnement "l'information introuvable ailleurs".** Le propriétaire a fait une observation clé : en cherchant lui-même sur Google, il n'a trouvé quasiment rien sur Tom York en dehors des dossiers de presse qu'il avait reçus. Contrairement au cocon Artistes principal (stars mondiales, impossible de rivaliser avec Wikipédia/Spotify), les Découvertes sont par nature peu médiatisées — un vrai boulevard SEO si le contenu est structuré autour de l'intention "qui est [artiste]" plutôt que la marque seule.

**Vérification effectuée avant d'écrire quoi que ce soit** (recherche web réelle, pas une supposition) — résultat très inégal selon l'artiste, d'où le champ `scarcity` ajouté dans `discoveries.js` (`'quasi-absente'`, `'quasi-absente en français'`, `'partielle'`) qui pilote le degré de la revendication affichée :
- **Tom York** : quasiment aucune biographie en français, seulement des fiches de plateformes de streaming, et une confusion fréquente avec Thom Yorke (Radiohead). Cas le plus favorable — fait confirmé, un article trouvé (just-music.fr) donnant un fait réutilisable (titre "Close To Me" diffusé sur 100+ radios FR/BE/CH).
- **Tony Jay** : idem, uniquement des profils plateformes/réseaux sociaux, aucun article de fond. Fait vérifié ajouté : DJ résident sur Radio FG.
- **Tree Gees** : une certaine couverture internationale (site du groupe, billetterie belge, une critique d'album italienne) mais rien en français malgré une vraie carrière (formé en 1997, plus de 1400 concerts, 4 membres nommés) — faits vérifiés intégrés à la biographie.
- **Rémi Dorage** : cas différent, il a déjà un site officiel et une couverture presse française (laparisiennelife.com). Revendication d'exclusivité **volontairement nuancée** pour lui — l'angle différenciant devient "les vraies données de diffusion", pas "personne n'en parle".

**Changements appliqués** (template `decouverte-[slug].astro` + hub `decouvertes-radio-odyssey.astro`) :
- `title` : `{Artiste} : Biographie, Titres et Actualité — Radio Odyssey` (priorité à l'intention "biographie"/"qui est", plus à la marque seule)
- `description` et sous-titre H1 conditionnés par `scarcity` (variante "une des rares sources" vs variante nuancée pour Rémi Dorage)
- Nouvelle FAQ n°1 : "Qui est {Artiste} ?" — cible directement les requêtes en langage naturel/vocal
- Encart de rareté (`scarcityNote`) ajouté sur chaque fiche, sous l'encart "Découvertes" existant
- Nouveau bloc explicite sur le hub : "Une information que vous ne trouverez pas ailleurs"
- H2 "Portrait" renommé "Biographie de {Artiste}" pour renforcer le signal de pertinence

**Règle pour toute future Découverte ajoutée** : vérifier par une vraie recherche web ce qui existe déjà avant d'écrire le champ `scarcity` — ne jamais affirmer "aucune source ailleurs" sans l'avoir vérifié (cf. le cas Rémi Dorage, où l'affirmation aurait été fausse).

---

## 7. Maillage interne — règles

- Chaque page satellite d'un cocon renvoie vers son hub ET vers au moins une page connexe d'un autre cocon quand c'est pertinent (ex. une page bien-être renvoie vers la page travail concernée).
- Chaque nouvelle page ajoutée à `src/data/navigation.js` apparaît automatiquement dans : méga-menu desktop, offcanvas mobile, footer (colonne du cocon), sidebar (lien vers le hub), page hub, sitemap.xml.
- Blocs additionnels recommandés sur les pages de contenu profond (satellites) : "Vous aimerez aussi" (2-3 pages du même cocon) et "Pages associées" (1-2 pages d'un cocon connexe).

---

## 8. Évolutions futures (non cadrées)

- Articles de type magazine (nombre et cadence à définir — mentionné une fois, pas encore priorisé)
- Extension du cocon Artistes & Styles au-delà de 100 fiches
- Sous-cocon dédié entreprise/bien-être au travail si `coherence-cardiaque-au-bureau.html` performe bien
- Contenu supplémentaire pour "Les Coulisses" (mécanique des jingles, etc. — voir §6ter suite)

---

## 9. Benchmark externe du 2026-07-02 (claude.ai / Fable 5) — vérifié et trié

Le propriétaire a fait auditer le site par claude.ai avant de poursuivre l'enrichissement. Une bonne partie du rapport décrivait l'ancien site pré-migration (33 pages HTML dupliquées, pas de composants) — **obsolète, ignoré**. La suggestion de déplacer les 4 pages EN sous `/en/` a aussi été écartée : ça violerait la règle de stabilité des URLs (voir §2) sans décision explicite + redirections 301.

**Ce qui a été vérifié comme réel et corrigé le 2026-07-02 :**
- `/mentions-legales.html` créé — Radio Odyssey, association loi 1901. **Adresse volontairement non publiée** sur demande explicite du propriétaire — ne jamais publier cette adresse (ni sur le site, ni dans ce dépôt Git, ni dans aucun fichier versionné) ; disponible uniquement via la mémoire privée de session si besoin de la retrouver.
- `/politique-de-confidentialite.html` créé — reflète l'état réel (pas de cookies, pas d'analytics, pas de formulaire hormis mailto, services tiers listés honnêtement).
- Schema `RadioStation`/`Organization` sitewide dans `Layout.astro` (avec `sameAs` vers les réseaux sociaux réels). `BreadcrumbList` volontairement pas ajouté — demanderait de tracker le chemin de navigation par page, pas encore fait.
- `twitter:card` passé en `summary_large_image` (l'image reste `logo.png`, carrée — un vrai visuel 1200×630 par catégorie reste à faire, nécessite du travail graphique).
- Les 13 titres `<title>` des pages pré-migration (marque en double, >90 caractères) nettoyés, FR et EN.
- Allégation "baisse du cortisol dès 5 min" (non sourcée, sur 3 pages) corrigée : citation du Dr David O'Hare / méthode 3-6-5 ajoutée sur `bienfaits-coherence-cardiaque.html`, formulation adoucie ailleurs.
- Liens internes `/index.html` normalisés vers `/` dans les composants partagés.
- **Emojis retirés du méga-menu, de l'offcanvas mobile, de la sidebar et des cartes de hub** — remplacés par des icônes Bootstrap Icons monochromes (déjà chargées sitewide), choisies au cas par cas pour matcher le sujet de chaque page (ex. `bi-activity` pour cohérence cardiaque, `bi-lungs` pour respiration guidée, `bi-peace` pour anti-stress). Demande du propriétaire : "c'est vrai que les emojis ce n'est pas top... que ça fasse classe."

**Non traité, hors périmètre technique de Claude Code :** iframe RadioKing sans `loading="lazy"` (risque UX sur le "écouter en direct" si mal fait — à discuter avant d'y toucher), migration de l'app PWA vers un sous-domaine `app.radio-odyssey.com` (nécessite un accès DNS/Vercel côté propriétaire), mise en place d'un analytics respectueux de la vie privée (Matomo/Plausible — outil à choisir avec le propriétaire).

---

## 10. Refonte de la hiérarchie de la page d'accueil (2026-07-02)

Suite au benchmark (§9), le propriétaire a confirmé que les témoignages homepage sont **illustratifs** (pas de vrais retours auditeurs), et a demandé : les rendre plus discrets plutôt que les retirer ("psychologiquement ça donne confiance même si l'internaute se doute que c'est retravaillé"), et repenser la hiérarchie générale — le scroll était jugé trop long, pas clair sur ce qui doit être vu immédiatement vs. relégué au menu/onglets.

**Proposition validée et implémentée** (`src/pages/index.astro`, 13 sections → 10, -357/+86 lignes) :
- **Palier 1 (immédiat)** : Hero + widget "en cours de lecture" juste en dessous — inchangés, c'est la preuve de vie de l'antenne.
- **Palier 2 (différenciation)** : bloc "Pourquoi nous écouter" (4 cartes) **supprimé** — redondant avec la grille "Toutes nos thématiques" juste en dessous, qui devient la section d'exploration principale. Cohérence Cardiaque réduite à un bandeau compact une ligne (au lieu d'une section 2 colonnes avec tableau de 13 horaires) — reste visible mais n'occupe plus tout un écran, renvoie vers la page dédiée pour le détail.
- **Palier 3 (preuve sociale, plus bas et condensé)** : grille des programmes condensée en pilules horaires + lien vers Playlists du Jour (au lieu de 6 grandes cartes avec description). Témoignages réduits à 3 petites cartes discrètes (au lieu de 6), **rôles fictifs retirés** (ex. "Créative Énergique") — juste prénom + initiale, plus bas dans la page. Plateformes + app mobile **fusionnées en une seule section** : 13 pastilles de plateformes réduites à 7 (les plus connues), étapes d'installation iPhone/Android retirées de l'accueil (déjà présentes sur `ecouter-radio-odyssey-sur-mobile.html`, remplacées par un lien).
- **Supprimé entièrement** : section "Restez connectés" (Facebook/Instagram/X/YouTube) — doublon exact des icônes déjà dans le footer, présent sur chaque page.
- **Inchangés** : partenaire EBG, FAQ (accordéon, coût de scroll nul replié), CTA final.

Widget "en cours de lecture", partenaire EBG et FAQ non retouchés : aucune régression fonctionnelle attendue, uniquement une réorganisation/condensation de contenu déjà existant.

---

## 11. Changement de partenaire + reste de la liste post-audit (2026-07-02)

**Partenaire officiel remplacé** : le bloc "Ils soutiennent Radio Odyssey" (homepage, `#partenaire`) pointe désormais vers **santementalepositive.fr** (et non plus elisabeth.academy), nouveau logo, mention explicite "Partenariat exclusif", crédite **Elisabeth Bélot-Grimaud — Docteure en psychologie**. Lien "Partenaire" ajouté dans le footer (`/#partenaire`) — demande explicite du propriétaire, "il y a des gens qui cherchent ce genre d'infos en bas des sites". Ancienne image `partenaire-ebg.jpg` supprimée du dépôt (plus référencée nulle part).

**Reste de la liste "Tier 1" (items faisables sans arbitrage du propriétaire) — tous livrés le 2026-07-02 :**
- **hreflang** : implémenté en auto-référencement (`hreflang={lang}` + `hreflang="x-default"` vers la home) plutôt qu'en paires FR/EN, car les 4 pages EN sont du contenu autonome, pas des traductions 1:1 des pages FR — une vraie paire hreflang aurait été fausse.
- **Logo optimisé** : 1024×1024 / 1,2 Mo → 512×512 / ~290 Ko (aucune perte visible, la taille d'affichage max sur le site est 300px). Original conservé hors dépôt (scratchpad de session) en cas de besoin futur d'un export plus grand.
- **Schema BreadcrumbList** : ajouté sans toucher aux pages individuelles — dérivé automatiquement du `<title>` de chaque page (suffixe "| Radio Odyssey" / "— Radio Odyssey" retiré), avec fallback silencieux sur la home (pas de fil d'Ariane pour la racine). Ce qui semblait nécessiter de la "plomberie" à l'audit (§9) s'est révélé faisable via une regex simple sur une donnée déjà là.

**Reste de la liste "Tier 2/3" (nécessitent le propriétaire) — toujours en attente, non traités :**
- Sous-domaine `app.radio-odyssey.com` (accès DNS/registrar + Vercel du propriétaire) — expliqué en détail au propriétaire le 2026-07-02, en attente qu'il le fasse de son côté avant que les 10 liens vers `radio-odyssey-v8b.vercel.app` puissent être mis à jour.
- Analytics respectueux de la vie privée (Matomo/Plausible) — choix de l'outil à faire avec le propriétaire.
- Lazy-loading de l'iframe RadioKing — tradeoff UX à trancher avant d'y toucher.
- Vraies images de partage social (1200×630 par catégorie) — nécessite du travail graphique.
- Google Search Console — **le propriétaire s'en charge lui-même** (2026-07-02), sitemap déjà prêt côté code.
- Extension du cocon "Les Coulisses" (mécanique des jingles etc.).
- Témoignages homepage toujours illustratifs (rendus discrets le 2026-07-02, §10) — à remplacer par de vrais avis au fil du temps si le propriétaire en reçoit.

---

*Dernière mise à jour : 2026-07-02, changement de partenaire (Santé Mentale Positive) + livraison complète du Tier 1 post-audit (hreflang, logo, BreadcrumbList).*
