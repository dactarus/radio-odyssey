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
| Bien-être & Santé | `/bien-etre-et-sante.html` | 13 | — |
| Musique & Énergie | `/musique-et-energie.html` | 13 | — |
| Playlists du Jour | `/playlists-du-jour.html` | 6 | — |
| Artistes & Styles | `/artistes-et-styles.html` | 104 (2 hubs + 100 fiches artistes + 4 fiches Découvertes) | — (objectif 100 fiches atteint, §6) |
| Conseils d'Écoute | `/conseils-ecoute.html` | 3 | — |
| Les Coulisses | `/coulisses-de-radio-odyssey.html` | 4 | Série complète des 3 sujets identifiés par le propriétaire — voir §8 pour idée en réserve (fins de titres retravaillées) |
| International (EN) | `/international.html` | 8 | — |

Total live à ce jour : 156 pages (voir `git log` pour la valeur exacte, ce nombre évolue vite — ne pas se fier à ce total sans revérifier).

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
| `/elisabeth-belot-grimaud-radio-odyssey.html` | elisabeth bélot-grimaud | Lot 003 |

### Musique & Énergie
| URL | Mot-clé cible | Statut |
|---|---|---|
| `/radio-annees-80-en-ligne.html` | radio années 80 en ligne | Live |
| `/radio-dance-energisante.html` | radio dance énergisante | Live |
| `/musique-pour-se-concentrer.html` | musique pour se concentrer | Live |
| `/radio-pour-travailler.html` | radio pour travailler | Live |
| `/musique-pour-faire-du-sport.html` | musique pour faire du sport | Lot 001 |
| `/musique-pour-courir.html` | musique pour courir | Lot 001 |
| `/musique-pour-une-soiree-entre-amis.html` | musique pour une soirée entre amis | Lot 001 |
| `/les-tubes-dance-incontournables.html` | tubes dance incontournables | Lot 001 |
| `/musique-pour-les-enfants.html` | musique pour les enfants | Lot 001 |
| `/musique-pour-etudier.html` | musique pour étudier | Lot 001 |
| `/musique-odyssey-pour-aller-mieux.html` | musique pour aller mieux | Lot 001 |
| `/musique-odyssey-en-vacances.html` | musique pour les vacances | Lot 001 |
| `/musique-pour-faire-le-menage.html` | musique pour faire le ménage | Lot 004 |

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
| `/comment-radio-odyssey-fabrique-ses-jingles.html` | comment radio odyssey fabrique ses jingles | Live (publié le 2026-07-06) |
| `/comment-radio-odyssey-programme-ses-titres-surprises.html` | titres surprises radio odyssey | Live (publié le 2026-07-11) |

### International
| URL | Mot-clé cible | Statut |
|---|---|---|
| `/positive-european-music-station.html` | positive european music station | Live |
| `/european-chill-radio.html` | european chill radio | Live |
| `/feel-good-music-radio.html` | feel good music radio | Live |
| `/keep-listening-radio-odyssey.html` | keep listening radio odyssey | Live |
| `/heart-coherence-breathing-radio.html` | heart coherence breathing | Lot 005 |
| `/80s-throwback-radio-online.html` | 80s throwback radio online | Lot 005 |
| `/music-for-a-better-mood.html` | music for a better mood | Lot 005 |
| `/listen-on-tunein.html` | listen to radio on tunein | Lot 005 |

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
- **Réorganisation du 2026-07-02** : le propriétaire a demandé de sortir cet article de "Playlists du Jour" pour créer un cocon dédié, **"Les Coulisses de Radio Odyssey"** (nouvel onglet du méga-menu, positionné entre "Conseils d'Écoute" et "International"), avec l'intention explicite d'y ajouter plus tard d'autres contenus coulisses (ex. la mécanique de fabrication des jingles et leur rôle dans le flux musical). Hub : `/coulisses-de-radio-odyssey.html`.

✅ **Deuxième article publié le 2026-07-06** : `/comment-radio-odyssey-fabrique-ses-jingles.html`, construit en interview comme le précédent. Contenu réel du propriétaire : mélodie de base créée puis déclinée en ~50 jingles chantés, famille de jingles courts (<5s, acapella ou "virgule musicale") enregistrés avec sa propre voix et celle d'Elisabeth Bélot-Grimaud (solo ou duo), cinq familles de jingles qui s'alternent pour ne pas lasser et introduire certaines catégories (nouveautés, Découvertes, Noël, séquences de cohérence cardiaque), mise à jour annuelle (objectif : que les auditeurs les fredonnent), positionnement éditorial contre les jingles trop longs (années 80) ou trop courts (tendance récente) au profit de jingles chantés d'environ 15 secondes. **Point de confidentialité tranché avec le propriétaire** : les jingles chantés sont en réalité composés avec un outil IA (Suno) — décision explicite de rester vague dans l'article public (ni le nom de l'outil, ni le mot "IA" n'apparaissent ; formulé comme "produits en studio"). À retenir pour tout contenu futur sur la fabrication des jingles. L'article tease aussi le prochain sujet (jingle Top Horaire) sans lien, la page n'existant pas encore.
- Trois sujets "coulisses" au total notés par le propriétaire (2026-07-06), **tous publiés le 2026-07-11** : fabrication des jingles (✅), la programmation des titres "surprises" (✅), et le jingle Top Horaire, "véritable identité d'une radio" (✅ — voir article ci-dessous). Note technique : le libellé complet "Les Coulisses de Radio Odyssey" est utilisé comme titre de page/H1, mais l'onglet du méga-menu affiche la forme courte "Les Coulisses" (cohérent avec la longueur des autres onglets et pour éviter que la barre de navigation ne passe à la ligne sur les résolutions d'ordinateur portable ~1280-1366px).

✅ **Quatrième et dernier article publié le 2026-07-11** : `/le-jingle-top-horaire-de-radio-odyssey.html`. Contenu réel du propriétaire : signature sonore obligatoire (nom de la radio), chantée en chœurs sans batterie pour un ton solennel, mélodie de ~4 notes/~10 secondes pensée pour se fredonner, diffusion à l'heure pile via les "interruptions de programme" RadioKing (marge de quelques secondes pour ne jamais couper un titre), évolution discrète dans le temps ("toujours le même, sans être le même", exemples RTL/Europe 1/NRJ), rôle de modèle pour les autres familles de jingles (même refrain + instruments ajoutés), anecdote sur les auditeurs qui le chantent en le reconnaissant. **Point de vérification factuelle** : le propriétaire a lui-même flagué un doute sur "inventé aux USA" plutôt que de laisser passer une affirmation non sourcée — recherche web faite avant publication (PAMS, Dallas, fin des années 1940, industrialisation des jingles musicaux ; FCC 47 CFR § 73.1201 pour l'obligation légale d'identification horaire), formulation finale nuancée en conséquence. Bon réflexe à reproduire : vérifier toute affirmation historique/factuelle avant publication plutôt que d'assumer.

✅ **Troisième article publié le 2026-07-11** : `/comment-radio-odyssey-programme-ses-titres-surprises.html`. Contenu réel du propriétaire : titre "surprise" = morceau à forte notoriété (B.O. de film/série, indicatif culte, classique remixé) diffusé de façon homéopathique (1-2 tranches horaires sur une dizaine), sans jingle dédié pour un effet de surprise total, choisi par curation personnelle du programmateur (différenciateur vs radios formatées), avec deux exemples concrets (thème Harry Potter, "Louxor J'Adore" de Katerine) et le concept de "platooning" (rotation périodique des titres dans la catégorie). **Point stratégique soulevé par le propriétaire, à retenir pour la suite** : ce type de page "coulisses" ne capte pas de trafic sur son propre titre (personne ne cherche "titres surprises radio odyssey") — son rôle est de construire l'autorité globale du site, utile pour Google ET pour la citation par les IA génératives. Ajustement appliqué : FAQ enrichie de questions à intention de recherche réelle que le contenu répond déjà ("pourquoi les radios repassent toujours les mêmes chansons", "qu'est-ce que le platooning", "musiques de films/séries à la radio") — à reproduire sur les futurs articles Coulisses, dont le Top Horaire.

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
- Série "Les Coulisses" des 3 sujets identifiés par le propriétaire : ✅ complète le 2026-07-11 (jingles, titres "surprises", Top Horaire — voir §6bis suite). Idée en réserve non encore cadrée : fins de titres retravaillées pour un mixage fluide (voir mémoire "programming methodology").

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

**Non traité, hors périmètre technique de Claude Code :** iframe RadioKing sans `loading="lazy"` (risque UX sur le "écouter en direct" si mal fait — à discuter avant d'y toucher).

**Analytics : fait le 2026-07-02, mais pas Plausible.** Le propriétaire a refusé Plausible et choisi **Google Analytics** (GA4, id `G-6CXEFXNH97`, propriété créée dans un compte GA existant du propriétaire — plusieurs sites peuvent cohabiter dans un même compte GA sans conflit). Voir §12 pour le détail de l'implémentation (bandeau de consentement obligatoire, GA ne charge qu'après accord).

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
- ✅ **Sous-domaine `app.radio-odyssey.com` : fait le 2026-07-02.** Registrar : IONOS. Propriétaire guidé pas à pas (CNAME `app` → `2d6b90a171aae715.vercel-dns-017.com.` côté IONOS, domaine ajouté dans Vercel). Vérifié fonctionnel (`curl -I https://app.radio-odyssey.com/` → HTTP 200, certificat SSL valide). Les 12 occurrences de `radio-odyssey-v8b.vercel.app` dans le code ont été remplacées par `app.radio-odyssey.com` (commit `c0edd62`).
- Analytics respectueux de la vie privée (Matomo/Plausible) — choix de l'outil à faire avec le propriétaire.
- Lazy-loading de l'iframe RadioKing — tradeoff UX à trancher avant d'y toucher.
- Vraies images de partage social (1200×630 par catégorie) — nécessite du travail graphique.
- Google Search Console — **le propriétaire s'en charge lui-même** (2026-07-02), sitemap déjà prêt côté code.
- Extension du cocon "Les Coulisses" : ✅ complète le 2026-07-11 (jingles, titres "surprises", Top Horaire). Prochaine idée possible : fins de titres retravaillées pour un mixage fluide.
- Témoignages homepage toujours illustratifs (rendus discrets le 2026-07-02, §10) — à remplacer par de vrais avis au fil du temps si le propriétaire en reçoit.

---

## 12. Google Analytics + bandeau de consentement (2026-07-02)

Le propriétaire a créé une propriété GA4 (compte Google existant, plusieurs sites dans le même compte — pas de conflit) et fourni l'identifiant `G-6CXEFXNH97`. Implémentation :

- **`src/components/CookieConsent.astro`** : bandeau affiché au premier chargement, tant qu'aucun choix n'est enregistré. Le script `gtag.js` fourni par Google **n'est jamais collé tel quel dans `Layout.astro`** — il n'est injecté dans le DOM que via JS, uniquement après clic sur "Accepter". Choix mémorisé dans `localStorage` (`ro-cookie-consent` = `accepted`/`declined`), donc pas de re-demande à chaque page tant que le choix n'est pas changé.
- **Équité visuelle des boutons** : "Refuser" et "Accepter" ont exactement le même gabarit (taille, police, padding), seule la couleur change — exigence CNIL contre les designs qui biaisent le choix (bouton "accepter" en évidence, "refuser" en petit lien discret).
- **Lien "Gérer les cookies"** ajouté dans le footer (`window.roOpenCookiePreferences()`) pour permettre de revenir sur son choix à tout moment.
- **Politique de confidentialité réécrite** (section "Cookies et mesure d'audience") : décrit honnêtement l'usage de GA, les données collectées, le transfert vers Google LLC (États-Unis), et le droit de retrait — l'ancienne version affirmait "aucun cookie, aucun analytics", ce qui serait devenu faux sans cette mise à jour.
- **Bug rencontré et corrigé pendant l'implémentation** : le script attachait les listeners des boutons via `document.addEventListener('DOMContentLoaded', ...)`, qui ne se déclenche jamais si l'événement a déjà eu lieu avant l'exécution du script (le cas ici, puisque le composant est en fin de `<body>`). Corrigé en attachant les listeners directement, sans attendre cet événement.
- **Vérifié de bout en bout** : GA absent du DOM avant consentement, se charge et envoie un vrai hit `page_view` vers `region1.google-analytics.com` après "Accepter", reste absent après "Refuser".

**Rejeté par le propriétaire au préalable :** Plausible (proposé initialement comme alternative respectueuse de la vie privée sans bandeau cookie nécessaire) — le propriétaire a explicitement demandé Google Analytics à la place.

---

## 13. Lot 001 — Extension du cocon Musique & Énergie (2026-07-03)

Le cocon ne comptait que 4 pages (années 80, dance énergisante, concentration, travailler), contre 12 pour Bien-être & Santé. Extension demandée par le propriétaire, sur le même principe que le Lot 002 Bien-être : des angles ancrés sur de vraies intentions de recherche non couvertes, avec exigence explicite du propriétaire que **les URLs et le contenu attirent des internautes qui ne connaissent pas encore Radio Odyssey** (mots-clés génériques d'intention, la marque arrive comme réponse dans le contenu, jamais dans l'URL).

Proposition initiale rejetée en partie par le propriétaire : "musique pour faire le ménage" jugée peu qualitative pour l'image de la radio. Remplacée par ses propres pistes (famille/enfants, étudiants, émotions positives, vacances), avec fusion de deux pistes trop proches ("aller mieux" et "bonnes émotions") en une seule page pour éviter le contenu redondant.

| # | URL | Angle | Distinction / anti-cannibalisation |
|---|---|---|---|
| 1 | `musique-pour-faire-du-sport.html` | Muscu, cardio, échauffement | Distinct de "courir" (contexte salle vs extérieur) |
| 2 | `musique-pour-courir.html` | Running, playlist rythmée | Distinct de "sport" (allure/tempo course, conseils sécurité extérieur) |
| 3 | `musique-pour-une-soiree-entre-amis.html` | Ambiance festive, apéro, soirée | Angle social, aucune page existante ne le couvre |
| 4 | `les-tubes-dance-incontournables.html` | Classement "best of" dance basé sur les vraies données de programmation (`src/data/artists.js`, tri par `playCount`) | Format liste inédit, gros maillage vers les fiches artistes déjà live |
| 5 | `musique-pour-les-enfants.html` | Écoute en famille (voiture, week-end) | Honnête : pas de créneau jeunesse réel, positionné comme radio généraliste positive adaptée en famille, avec rappel d'accompagnement parental |
| 6 | `musique-pour-etudier.html` | Étudiants, révisions, examens | Distinct de `musique-pour-se-concentrer.html` (contexte bureau/télétravail) — renvoie vers `musique-sans-parole-pour-se-concentrer.html` pour la mémorisation |
| 7 | `musique-odyssey-pour-aller-mieux.html` | Musique positive Odyssey, bonnes émotions, coup de moins bien | Volontairement centré sur l'identité "La Positive Radio" (demande du propriétaire), sans allégation santé — mention explicite que ce n'est pas un substitut à un accompagnement professionnel |
| 8 | `musique-odyssey-en-vacances.html` | Trajet de départ + écoute sur place | Renvoie vers les pages voiture/enceinte connectée existantes plutôt que de dupliquer leur contenu |

Statut : Live, ajoutées à `src/data/navigation.js` (menu, footer, sidebar, hub), `public/sitemap.xml`, et au registre (§4).

---

## 14. Lot 003 — Page partenaire Elisabeth Bélot-Grimaud (2026-07-03)

Le propriétaire a confirmé qu'Elisabeth Bélot-Grimaud (santementalepositive.fr) accepte de partager des éléments de son site avec Radio Odyssey. Vérification préalable de son site réel (via WebFetch) avant toute rédaction, pour ne pas inventer de crédentials :

- **Crédentials réelles trouvées** : Docteure en psychologie cognitive, chercheuse et enseignante en psychologie, présidente de l'AFfPP (Association Française et francophone de Psychologie Positive), 2 DU micronutrition et prévention santé, DU méditation et pratiques respiratoires, autrice de *« Programmez votre cerveau pour le bonheur »*, conférencière TEDx (x2), podcast *« L'instant Beau Bien Bon »*. Nettement plus fort que le texte précédent ("Créatrice de programmes en ligne de bien-être") — mis à jour partout.
- **Fait exclusif exploité** : le propriétaire a précisé que les séquences de cohérence cardiaque diffusées à l'antenne ont été produites avec elle, et que c'est sa voix qui guide les auditeurs. Cette information n'existe nulle part ailleurs (ni sur son site, ni publiée avant ce lot) — c'est le meilleur actif SEO du lot : personne d'autre ne peut publier ce fait.
- **Principe anti-duplication** (demande explicite du propriétaire) : on ne republie jamais ses fiches ou méthodes propriétaires (D.O.S.E.®, ENCÉFAL®, Beau Bien-Bon®, questionnaire bien-être) — on résume en une phrase et on renvoie systématiquement vers santementalepositive.fr en lien externe (`target="_blank" rel="noopener"`).

**Pages créées/modifiées :**
| Page | Changement |
|---|---|
| `/elisabeth-belot-grimaud-radio-odyssey.html` | Nouvelle page dédiée : bio complète, fait exclusif (voix/co-production), lien vers son site, schema.org `Person` |
| `index.astro` (bloc partenaire homepage) | Crédentials réelles + lien vers la nouvelle page dédiée |
| `radio-coherence-cardiaque.html` | Encart "Conçues avec une véritable experte" |
| `bienfaits-coherence-cardiaque.html` | Encart "Ce qu'en dit notre partenaire", citation réelle de son site |
| `comment-pratiquer-la-coherence-cardiaque.html` | Encart "La voix qui vous guide" |
| `coherence-cardiaque-au-bureau.html` | Encart "Une voix experte, pas un enregistrement générique" |

Ajoutée au cocon Bien-être & Santé (13e page) dans `src/data/navigation.js`, au sitemap, et au registre (§4).

---

## 15. Retours d'Elisabeth Bélot-Grimaud sur la page partenaire (2026-07-03)

Elle a vu la page en ligne et fait trois retours au propriétaire :

1. **"Peut-être dire que Odyssey a choisi de mettre une voix humaine"** — ajouté sur la page partenaire : Radio Odyssey a délibérément choisi une voix humaine plutôt qu'une voix de synthèse pour les séquences de cohérence cardiaque.
2. **Badge du hero peu visible** — le badge de confiance (§ précédent) réutilisait le style `.hero-eyebrow`, identique au badge "EN DIRECT · LIVE NOW" juste au-dessus, donc il se fondait dans le décor. Recoloré en doré (`var(--ro-gold)`, texte foncé, icône violette) pour se démarquer.
3. **"AFfPP ne parle à personne"** — retour d'Elisabeth elle-même. Toute mention de l'AFfPP (Association Française et francophone de Psychologie Positive) remplacée par "spécialisée en santé mentale positive", plus lisible pour un public grand public qui ne connaît pas le sigle. Fait réel toujours vrai (elle en est présidente), simplement pas mis en avant dans la copie publique — retiré aussi du schema.org `Person` (champ `affiliation` supprimé, remplacé par `knowsAbout`).

**Demande complémentaire du propriétaire** : la page partenaire est désormais en tête de liste du cocon Bien-être & Santé dans `src/data/navigation.js` (menu, offcanvas, footer, hub) — "c'est notre caution scientifique", elle doit être la plus visible du cocon plutôt que la dernière.

---

## 16. Chantier "site plus pro" (2026-07-03) — faux avis, performance, images sociales

Le propriétaire a demandé, en tant que challenge, comment rendre le site plus attractif/professionnel. Punch list proposée (5 points), traitée dans l'ordre de priorité :

1. **Faux témoignages retirés** — voir commit `698fbc4`. Remplacés par une invitation honnête à partager de vrais avis (homepage + `/avis-radio-odyssey-bien-etre.html`).
2. **Audit de performance réel (Lighthouse)** — API PageSpeed Insights indisponible (quota), Lighthouse lancé en local via Chrome headless contre le site en production. Résultat initial : 30/100 mobile, dû à 3 feuilles de style bloquantes chargées depuis des CDN externes (Bootstrap, Google Fonts, Bootstrap Icons — cette dernière avec `font-display: block`, jusqu'à 3s perdues). Corrigé en auto-hébergeant polices/Bootstrap/icônes (`7a412e3`), testé sur branche séparée avant fusion. **Résultat mesuré en production : 30 → 52/100**, LCP 8,4s → 5,1s. Un facteur plus lourd (travail de rendu/mise en page) reste non traité — chantier distinct, pas couvert ici.
3. **Images de partage social (OG)** — voir commit `6b83006`. 8 visuels 1200×630 générés via un template HTML rendu par Chrome headless (pas de dépendance à un outil de design externe), pour la homepage et les 7 hubs de cocon. Le reste des pages garde un visuel par défaut cohérent (`og/home.jpg`) plutôt que le logo carré brut utilisé partout avant.
4. **Présence multi-plateforme mise en avant** — voir commit `d5f4710`. Section "Écoutez où vous voulez" reformulée en signal de confiance ("radio indépendante référencée sur les plus grandes plateformes... pas seulement sur son propre site").
5. **Audit du maillage interne** — voir commit `d5f4710`. Script maison (comptage des liens entrants sur les 156 pages du build). A révélé que les 100 fiches artistes recommandaient des "artistes similaires" au hasard (décalage séquentiel dans `ARTISTS`, pas par genre — ex. Daft Punk → U2/Queen). Corrigé par un matching sur le genre réel (tokens extraits de `artist.genre`), départagé par rotation d'index (pas par `playCount`, qui concentrait les liens sur 2-3 grosses fiches par genre — 55 fiches se retrouvaient sans aucun lien entrant d'une autre fiche artiste). Après correctif : seulement 10 fiches sans lien entrant d'une autre fiche (contre 55 avec le premier essai), le reste réparti entre 1 et 7.

---

## 17. Lot 004 — Retour sur "musique et ménage" (2026-07-04)

L'angle "musique pour faire le ménage" avait été écarté par le propriétaire lors du Lot 001 (§13), jugé peu qualitatif pour l'image de la radio. Revalidé et créé suite à deux éléments nouveaux apportés par le propriétaire :
- **L'avis de la partenaire scientifique** : consultée directement, Elisabeth Bélot-Grimaud confirme que la musique positive peut rendre une tâche perçue comme corvée plus agréable — cité en toutes lettres sur la page, avec lien vers sa fiche.
- **Une intention de recherche réelle côté professionnels** : agents d'entretien et aides à domicile cherchent activement ce type de contenu, pas seulement le grand public du week-end.

Page créée : `/musique-pour-faire-le-menage.html`, ajoutée au cocon Musique & Énergie (13e page), à `src/data/navigation.js`, au sitemap et au registre (§4).

---

*Dernière mise à jour : 2026-07-04, retour sur "musique et ménage" avec validation partenaire (§17).*

---

## 18. Lot 005 — Extension du cocon International (2026-07-04)

Le propriétaire a demandé d'étoffer le cocon International (EN), jusque-là limité à 4 pages assez génériques, en s'inspirant du cœur du site français (bien-être, cohérence cardiaque, musique) — **explicitement sans faire de simples traductions**. Rappel du canal réel de diffusion à l'international : TuneIn.

Quatre pages créées, chacune avec un angle de recherche anglophone distinct, pas la traduction d'une page française :

| # | URL | Angle | Pourquoi ce n'est pas une traduction |
|---|---|---|---|
| 1 | `heart-coherence-breathing-radio.html` | "Heart coherence breathing" — le concept anglophone existe déjà (HeartMath Institute aux États-Unis), avec sa propre terminologie et son propre volume de recherche, distinct de la "cohérence cardiaque" française | Rédigé sur cette terminologie propre, avec mention de la voix humaine (Elisabeth Bélot-Grimaud) — pas un calque du texte français |
| 2 | `80s-throwback-radio-online.html` | "80s radio online" — recherche massive dans les pays anglophones (nostalgie US/UK), angle absent du cocon EN jusqu'ici alors que c'est l'identité de marque du site | Contenu neuf sur le remix vs. original, pas de page française "années 80" traduite |
| 3 | `music-for-a-better-mood.html` | Angle mood/positive psychology, drainant sur "La Positive Radio" et la caution scientifique de la partenaire | Ton et structure réécrits pour un public anglophone, pas une traduction de `musique-odyssey-pour-aller-mieux.html` |
| 4 | `listen-on-tunein.html` | Guide pratique dédié à TuneIn, le vrai canal d'écoute international confirmé par le propriétaire | Pas d'équivalent français direct (les pages françaises "conseils d'écoute" couvrent mobile/voiture/enceinte, pas TuneIn spécifiquement) |

Ajoutées à `src/data/navigation.js` (cocon International, 4 → 8 pages), au sitemap, et au registre (§4).

---

*Dernière mise à jour : 2026-07-04, extension du cocon International avec 4 pages non-traduites (§18).*

---

## 19. Vidéo YouTube de la partenaire (2026-07-04)

Elisabeth Bélot-Grimaud a publié sur sa chaîne YouTube une séance de cohérence cardiaque en musique — le même exercice que celui diffusé sur l'antenne. Vérifié via l'API oEmbed YouTube avant intégration (titre exact, chaîne, thumbnail).

- **Intégration principale** : `elisabeth-belot-grimaud-radio-odyssey.html`, iframe `loading="lazy"` (pour ne pas régresser les gains de performance du §16) + schema.org `VideoObject`.
- **Pas de deuxième intégration redondante** : `radio-coherence-cardiaque.html` renvoie vers l'ancre `#video` de la page partenaire plutôt que de dupliquer l'iframe.

---

## 20. Benchmark externe du 2026-07-17 (Grok) — vérifié et trié

Même démarche qu'au §9 : le propriétaire a fait auditer le site par une autre IA (Grok) avant de poursuivre. Le rapport décrivait un site sous Mobirise, sans schema.org, sans canonical, sans GA4, avec un sitemap de ~1000 URLs et des témoignages non sourcés — **entièrement obsolète, ignoré** : tout ça a déjà été traité aux §9-19 (le site est sur Astro depuis début juillet, schema `Organization`/`WebSite`/`RadioStation`/`BreadcrumbList`/`FAQPage`/`Article` en place, canonical + hreflang partout, GA4 actif depuis le §12, sitemap réel à 164 URLs, `llms.txt` déjà créé au §12bis/AEO, faux témoignages déjà retirés au §16).

**Ce qui restait réel et traité le 2026-07-17 :**
- **Images converties en WebP** avec fallback `<picture>` (navigateurs anciens non affectés) : `logo.png` (297 Ko → 19 Ko, 6 usages : barre sticky, offcanvas mobile, footer, accueil ×3) et `partenaire-sante-mentale-positive.png` (390 Ko → 14 Ko — était servie en 1920×2280 px pour un affichage à 200 px de large, recadrée à la bonne taille en plus du changement de format). Fichiers touchés : `Header.astro`, `Footer.astro`, `index.astro`. Images de partage social (`og/*.jpg`) et favicon/apple-touch-icon volontairement laissés en JPG/PNG — compatibilité des crawlers sociaux (WhatsApp, LinkedIn, iMessage) et d'iOS pour les icônes pas garantie en WebP.
- `hero-visual.jpg` (181 Ko) repéré comme fichier orphelin dans `public/assets/images/` — non référencé nulle part dans le code, à supprimer si le propriétaire confirme.

**Étudié et volontairement pas appliqué :** `loading="lazy"` sur l'iframe RadioKing (suggéré aux §9 et par l'audit Grok). Vérification faite : il n'y a qu'une seule iframe RadioKing sur le site, celle de la barre sticky en haut de chaque page — toujours visible immédiatement au chargement. Le lazy-loading ne sert qu'à différer des éléments hors écran ; sur un élément déjà visible, ça n'apporte aucun gain et risque de retarder le lecteur qui doit prouver l'antenne en direct instantanément. Point fermé, pas un report.

**Hors périmètre code, à faire par le propriétaire :**
- **Google Business Profile** déjà créé et vérifié (267 vues) — deux améliorations repérées sur la capture fournie : le repère sur la carte pointe en pleine mer près du Venezuela (aucune adresse précise renseignée, ce qui est le bon choix vu la confidentialité de l'adresse — mais mieux vaut configurer la fiche en "zone de service" pour ne pas avoir de repère du tout, plutôt qu'un pin qui semble aléatoire) ; catégorie actuelle "Producteur de musique", à vérifier s'il existe une catégorie "Station de radio" plus pertinente.
- **Backlinks / annuaires radio** — reconnu comme le vrai chantier manquant, entièrement à la main du propriétaire (les annuaires n'attendent pas une petite structure associative).

**Vérification directe dans Google Search Console (accès du propriétaire, compte `dactarus@gmail.com`, déjà connecté dans Chrome — pas besoin de partage d'onglet) :**
- Les "22 pages non indexées" signalées par l'outil ne sont pas un vrai problème : 3 sont les variantes `http://`/`https://`/sans-`www.` du domaine qui redirigent normalement vers le canonique, 1 est une page avec balise canonique correcte vers ailleurs (normal), et **18 sont des fantômes de l'ancien sitemap cassé d'avant la migration** — des URLs du type `radio-odyssey.com/sitemap.xml/radio-coherence-cardiaque.html` (le mot "sitemap.xml" collé dans le chemin, domaine sans `www.`), jamais réellement explorées par Google ("sans objet"), correspondant aux 14 anciennes pages HTML plates. Elles s'effaceront d'elles-mêmes avec le temps, rien à corriger côté site actuel.
- **Le vrai signal** : 16 clics pour 185 impressions sur 3 mois, position moyenne 11,3, et sur les 7 requêtes qui génèrent ces impressions, la quasi-totalité est de la recherche de marque ("radio odyssey", "odyssey radio") — presque rien sur "cohérence cardiaque", "bien-être" ou "années 80", les thématiques du contenu construit aux §5-18. Le graphique d'indexation montre que la montée en charge n'a vraiment démarré que mi-juin 2026 — Google n'a donc que quelques semaines de recul sur ce contenu, ce n'est pas alarmant. Ça confirme le point le plus juste de l'audit Grok : la partie technique est saine, il manque du temps + de l'autorité externe (backlinks) pour que les pages thématiques sortent sur autre chose que le nom de la radio.

---

## 21. Core Web Vitals — audit réel et premiers correctifs (2026-07-17)

Suite au §20, chantier annoncé comme prioritaire : mesure réelle via Lighthouse (PageSpeed Insights, mobile, 4G lente) sur la homepage en production plutôt que des suppositions.

**Résultat mesuré avant correctifs :** Performances 68/100, Accessibilité 94/100, Bonnes pratiques 100/100, SEO 100/100. LCP 5,7 s (le vrai problème, cible < 2,5 s), FCP 3,6 s, Speed Index 5,3 s, CLS 0, TBT 40 ms.

**Cause racine identifiée dans le code** (`Layout.astro`) : 5 feuilles de style chargées de façon bloquante dans le `<head>` avant le premier rendu (`fonts.css`, `bootstrap.min.css`, `bootstrap-icons.min.css`, `style.css`, CSS généré par Astro) — correspond aux "830 ms de requêtes bloquantes" relevés par Lighthouse. Le poste le plus disproportionné, quantifié précisément : **`bootstrap-icons.min.css` (86 Ko) + sa police woff2 (130 Ko) = 216 Ko chargés pour 27 icônes réellement utilisées sur tout le site**, sur les 1800+ que contient la bibliothèque.

**Corrigé dans ce lot (faible risque, déjà publié) :**
- **`vercel.json` créé** — cache longue durée (`Cache-Control: public, max-age=31536000, immutable`) sur `/assets/*` (CSS/JS vendor, polices, images), qui n'avait aucun en-tête explicite jusqu'ici. Répond au signal Lighthouse "durées de mise en cache" (142 Ko estimés sur navigation répétée).
- **`width`/`height` explicites** ajoutés aux 4 usages `<img>` du logo et de l'image partenaire (déjà passés en WebP au §20) — prévention du décalage visuel (CLS), qui était déjà à 0 mais sans garantie pour l'avenir.
- **Ordre des titres corrigé** sur l'accueil : deux `<h4>` qui suivaient directement un `<h2>` (sans `<h3>` intermédiaire) passés en `<h3>` — "Toutes nos thématiques" (grille de catégories) et "Ils soutiennent Radio Odyssey" (bloc partenaire). Vérifié qu'aucune règle CSS ne différencie `h3`/`h4` (une seule règle commune `h1,h2,h3,h4,h5,h6`), donc aucun changement visuel.

**Non corrigé, à faire dans un lot séparé (diff plus large, plus risqué) :**
- **Remplacement des 27 icônes Bootstrap Icons par du SVG inline**, pour supprimer entièrement les 216 Ko de CSS/police — le plus gros levier restant, mais touche potentiellement des dizaines de fichiers `.astro`, donc à traiter et vérifier comme son propre commit.
- **Contraste de couleur** (seul point manquant des 94/100 en accessibilité) — non identifié avec certitude : le rapport Lighthouse en ligne est resté bloqué en re-chargement lors de la tentative d'obtenir le sélecteur exact. Une vérification par script maison (couleurs de texte vs. fond uni) n'a trouvé aucune violation réelle, ce qui pointe vers un élément à fond dégradé (non testable simplement en JS) — a priori un texte blanc semi-transparent quelque part sur le dégradé du hero. À revérifier avec les DevTools Chrome (onglet Accessibilité) plutôt qu'en devinant un correctif.
- Signal Lighthouse "477 Ko d'images à améliorer" — probablement la pochette d'album chargée *dans* l'iframe RadioKing (contenu tiers, hors de notre contrôle), à confirmer si le score ne bouge pas après ce lot.

**Re-mesure après déploiement du lot ci-dessus :** Performances 68 → 74-79/100 (deux mesures, l'écart est normal). Mais un CLS de 0,107 est apparu, identique sur deux mesures indépendantes — donc pas du bruit de mesure. Vérifié que ce n'est pas causé par ce lot (les attributs `width`/`height` respectent le ratio réel des images, les en-têtes de cache n'ont aucun effet sur un premier chargement à froid) : c'est un problème préexistant révélé par la mesure, dû à `font-display: swap` sur Nunito/Inter (`fonts.css`) — le texte s'affiche d'abord avec la police système de secours puis "saute" légèrement au chargement de la vraie police, un phénomène classique même avec `preload` en place.

**Corrigé :** passage de `font-display: swap` à `font-display: optional` sur les deux polices. Avec le `preload` déjà en place et le cache longue durée tout juste ajouté sur `/assets/*`, la police a largement le temps de charger avant le rendu dès la 2e page vue par un même visiteur ; en `optional`, le navigateur n'échange plus la police après le premier rendu s'il ne l'a pas reçue à temps, ce qui supprime le saut visuel au prix (rare) de garder la police de secours pour cette page vue si la connexion est vraiment très lente. Re-mesuré après déploiement : CLS revenu exactement à 0, "Navigation agentique" repassé à 3/3.

**Remplacement des icônes Bootstrap par du SVG inline (même session).** Le vrai périmètre était plus large que prévu : 27 icônes utilisées directement en dur dans les `.astro`, mais 49 de plus référencées dynamiquement via le champ `bi:` de `navigation.js` (menu, sidebar, planning horaire) — 70 icônes uniques au total, sur les 62 fichiers du site.

- Extraites du paquet officiel `bootstrap-icons` (installé temporairement en local avec `--no-save`, juste pour copier le SVG exact de chaque icône, puis désinstallé — jamais une dépendance du projet) vers `src/data/icons.js`, un objet `{ nom: { viewBox, svg } }` généré par script pour éviter toute erreur de recopie manuelle.
- Nouveau composant `src/components/Icon.astro` : rend le SVG inline correspondant, avec une classe `.ico` par défaut (`width/height: 1em`, `vertical-align: -0.125em`) qui reproduit exactement le comportement de l'ancienne police d'icônes (taille = taille de police du contexte parent) — donc aucun changement visuel, et les surcharges de taille déjà en place (`.pg-icon svg`, `.footer-social a`, styles inline) continuent de s'appliquer normalement.
- 143 remplacements statiques faits par script (`<i class="bi bi-X extra" style="...">` → `<Icon name="X" class="extra" style="..." />`, import ajouté automatiquement) + 8 remplacements dynamiques faits à la main dans les 5 composants qui pilotent une icône depuis une donnée (`Header`, `MegaNav`, `CategoryHub`, `Sidebar`, `DayScheduleNav`).
- `bootstrap-icons.min.css` (86 Ko) et sa police woff2/woff (130 Ko) supprimés de `public/assets/vendor/`, plus leur `<link>` dans `Layout.astro` — élimine deux requêtes bloquantes du `<head>` sur les 164 pages. À la place, chaque page n'embarque que le SVG des icônes qu'elle utilise réellement (quelques centaines d'octets à ~2 Ko sur la plupart des pages ; l'accueil, qui pré-rend tout le méga-menu même fermé, monte à 91 Ko non compressés — mais ça reste du texte HTML déjà en cours de transfert, pas une requête bloquante séparée).
- Vérifié : build sans erreur (164 pages), aucune icône introuvable, tailles correctes en conditions réelles (méga-menu ouvert au clic, menu mobile offcanvas, breadcrumb, footer) — les lectures à 0×0 rencontrées pendant les tests venaient uniquement de menus fermés/non affichés, pas d'un bug.
- `public/console.html` (l'ancien outil d'édition, obsolète et non indexé) référence encore Bootstrap Icons via un CDN externe — non touché, hors périmètre du site public.

**Bug corrigé le jour même : cache trop agressif sur les fichiers CSS/JS.** Repéré grâce à un rapport PageSpeed obtenu directement par le propriétaire (le nôtre restait bloqué par un quota d'API) : le CLS était remonté à 0,107, exactement sur l'icône "Cohérence cardiaque..." du hero, mesurée à 204 px de haut au lieu de 13 px. Cause identifiée en inspectant les feuilles de style réellement chargées par le navigateur : la règle `svg.ico { width:1em; ... }` du §21 (premier lot) était absente de la version de `style.css` servie — le `vercel.json` du même lot avait mis `style.css` en cache **immutable pendant un an**, alors que ce fichier est justement modifié en place à chaque session (pas de renommage comme pour les images). Tout navigateur ayant chargé la page entre les deux déploiements gardait donc l'ancienne version indéfiniment, sans jamais revoir la mise à jour.

**Corrigé :** le cache longue durée immuable est désormais réservé à `/assets/images`, `/assets/fonts` et `/assets/vendor` (fichiers versionnés par renommage ou bibliothèques figées, jamais modifiés en place). `/assets/css` et `/assets/js` passent à 1h de cache avec revalidation obligatoire (`must-revalidate`) — toujours un vrai gain sur la navigation entre les ~160 pages d'une même visite, mais sans risque de servir une version obsolète pendant un an à chaque futur changement de style.css ou main.js.

**Leçon pour la suite :** ne jamais appliquer de cache `immutable` longue durée à un fichier modifié en place (CSS/JS de ce projet) sans mécanisme de renommage/hash — uniquement aux fichiers dont le nom change quand le contenu change.

**Dernier point d'accessibilité corrigé : contraste du footer.** Le propriétaire a fourni un deuxième rapport PageSpeed (vue Bureau, même audit) montrant 95/100 en accessibilité. Élément exact retrouvé en lisant le JSON Lighthouse embarqué dans la page (`window.__LIGHTHOUSE_DESKTOP_JSON__`, audit `color-contrast`) plutôt qu'en devinant : `.footer-bottom` (la ligne de copyright et ses 3 liens — mentions légales, confidentialité, cookies) en `rgba(255,255,255,.32)` sur fond `#0b1c2d`, soit un ratio réel de 2,88:1 — sous le seuil WCAG AA de 4,5:1. Calcul fait pour choisir la valeur : passage à `rgba(255,255,255,.5)` → 5,15:1, marge confortable sans rendre ce texte de bas de page trop visible par rapport à l'intention de design (texte discret).

Avec ce correctif, tous les points identifiés dans l'audit Grok du §20 et l'audit Lighthouse du §21 sont traités : Performances 79/100 (mobile) et 98/100 (bureau), Accessibilité en passe d'être parfaite, Bonnes pratiques 96/100, SEO 100/100.

**Rebondissement le même jour : le correctif de cache n'a pas suffi.** Le propriétaire a signalé, capture d'écran à l'appui (mobile ET bureau), le logo et l'image partenaire visiblement étirés/déformés, et des icônes toujours géantes sur l'ensemble des pages — *après* avoir vidé le cache de son téléphone et de son ordinateur. Ça a écarté la première explication (cache navigateur) : ça voulait dire que le CDN de Vercel lui-même avait mis en cache l'ancienne version de `style.css` à un moment où l'en-tête disait encore "immutable" — vider son propre cache ne peut rien faire contre une copie périmée détenue *par le CDN*, entre le site et l'internaute.

**Corrigé :** ajout d'un paramètre `?v=...` sur `style.css` et `fonts.css` dans `Layout.astro`, à incrémenter à chaque modification future de ces deux fichiers. Une nouvelle URL force une vraie relecture depuis l'origine, aussi bien pour le navigateur que pour le CDN — plus fiable que d'attendre l'expiration d'un cache qui a été empoisonné avec la mauvaise consigne.

**Deuxième bug trouvé au passage, réel et indépendant du cache :** le logo et l'image partenaire étaient bien déformés en vrai, sur toutes les pages en mobile — pas un problème d'affichage lié au cache. Cause : les attributs `width="512" height="512"` ajoutés au §21 (pour éviter le CLS) donnent au navigateur un ratio de référence, mais seulement si le CSS ne fixe qu'*une* dimension et laisse l'autre sur `auto`. Or `.hero-logo-img` et le style inline de l'image partenaire ne fixaient que `width` (`min(300px,86%)` et `max-width:200px`), sans jamais écrire `height:auto` — le navigateur gardait alors la hauteur brute de l'attribut HTML (512 px, 480 px) au lieu de la recalculer, écrasant le ratio. Corrigé en ajoutant `height:auto` aux deux endroits. Vérifié : ratio 1:1 et 0,842 (le vrai ratio du fichier) retrouvés.

**Leçon supplémentaire :** un attribut `width`/`height` HTML ne suffit à préserver le ratio que si le CSS laisse l'autre dimension sur `auto` — si le CSS fixe une seule dimension explicitement (comme ici `width: min(...)`), il faut écrire `height: auto` à la main, sans compter sur le calcul automatique du navigateur.

**Dernier point du plan initial du §20 : `hero-visual.jpg` supprimé** (confirmé par le propriétaire) — fichier orphelin de 181 Ko jamais référencé dans le code, repéré lors du benchmark Grok. Avec ça, tout ce qui restait dans le plan initial et qui dépendait du code est traité ; ne restent que les deux points côté propriétaire (Google Business Profile, backlinks).

---

## 22. Investigation des 18 URLs fantômes "sitemap.xml/..." (2026-07-20)

Le propriétaire a demandé une investigation précise (pas de correctif à l'aveugle) sur les 18 URLs malformées repérées dans Search Console au §20, du type `radio-odyssey.com/sitemap.xml/european-chill-radio.html`.

**Cause racine confirmée :** un ancien `sitemap.xml` (avant la migration Astro) contenait des chemins **relatifs** au lieu d'absolus. Un lecteur de sitemap résout une URL relative par rapport à l'emplacement du fichier sitemap.xml lui-même — ce qui donne exactement ce motif fautif. Google a mémorisé ces références un jour sans jamais réussir à les explorer (confirmé au §20 : statut "sans objet" sur les 18).

**Vérifié dans le code actuel** — le bug est déjà corrigé, aucune régression possible par ce mécanisme précis :
- Pas de dépendance `@astrojs/sitemap` ; `public/sitemap.xml` est géré à la main par `admin-console/lib/sitemap.mjs` (`addSitemapUrl`), qui construit systématiquement une URL absolue (`https://www.radio-odyssey.com/${slug}`).
- Les 164 entrées actuelles du sitemap sont 100% absolues (vérifié par script), zéro occurrence du motif `sitemap.xml/`.
- 13 des 18 slugs correspondent à de vraies pages actuelles, présentes une seule fois, sans doublon.
- Les 5 autres (`index`, `listen-to-radio-odyssey-on-alexa`, `page1`, `plan-du-site`, `radio-remix-annees-80`) n'ont jamais existé dans ce dépôt (vérifié via `git log --all --diff-filter=A`, aucune trace) — reliquats de l'ancien site pré-migration.

**Corrigé :** ajout d'un bloc `redirects` dans `vercel.json` — 5 redirections précises (`index`/`page1`/`plan-du-site` → accueil ; `radio-remix-annees-80` → `radio-annees-80-en-ligne.html`, équivalent thématique ; `listen-to-radio-odyssey-on-alexa` → `ecouter-radio-odyssey-enceinte-connectee.html`, qui couvre Alexa explicitement) **+ une redirection générique** `/sitemap.xml/:slug.html → /:slug.html` qui couvre automatiquement les 13 pages réelles et sert de filet de sécurité si ce motif malformé réapparaissait un jour pour une page non listée ici. Aucun fichier supprimé.

---

## 23. Chantier "radio bien-être" — données structurées et maillage interne (2026-07-27)

Contexte donné par le propriétaire : le site se classe bien sur "radio cohérence cardiaque" mais mal sur "radio bien-être", malgré un soin éditorial comparable sur les deux pages. Diagnostic déjà établi par le propriétaire (hors périmètre de ce chantier) : un ancien site Mobirise, non lié à ce dépôt, cannibalise le terme "radio bien-être" — **à corriger par le propriétaire directement dans l'interface Mobirise** (noindex ou canonical vers le site actuel), pas quelque chose que ce dépôt peut résoudre. Mission confiée sur ce dépôt : traiter tout ce qui est du côté du code, sans conclure que ça réglera le problème de classement à lui seul.

**Vérifié avant d'écrire quoi que ce soit (Google Search Central, syntaxe à jour au 2026-07-27) :** les résultats enrichis **HowTo** ont été retirés de la recherche Google en septembre 2023, et les résultats enrichis **FAQPage** ont été totalement retirés en juin 2026 (ils étaient déjà restreints depuis septembre 2023 aux sites gouvernementaux/santé reconnus). Les deux types restent valides pour schema.org et "sans impact négatif" selon Google — mais n'apportent plus aucun gain de visibilité *dans Google* aujourd'hui. Implémentés malgré tout pour la cohérence avec le reste du site (qui utilise déjà `FAQPage` sur 8 pages du cluster) et pour les autres moteurs/IA qui peuvent encore s'en servir.

**Audit du JSON-LD existant (avant toute modification) :**
- `Organization` + `WebSite` + `RadioStation` + `BreadcrumbList` + `Article` : déjà présents et corrects dans `Layout.astro`, appliqués aux 164 pages — rien à dupliquer.
- `FAQPage` : déjà présent sur 8 des 13 pages du cluster Bien-être & Santé via le composant partagé `FAQBlock.astro` (génère à la fois l'accordéon visible et le balisage). 4 pages n'ont simplement aucun bloc question/réponse dans leur contenu (rien à baliser, normal). 1 page (`musique-pour-respiration-guidee.html`) avait un FAQ en HTML brut, non balisé.
- `HowTo` : absent partout, alors que `radio-bien-etre-en-ligne.html` et `radio-coherence-cardiaque.html` contiennent chacune un bloc "Comment pratiquer" en 4 étapes numérotées.

**Ajouté :**
- `HowTo` sur les 2 pages ci-dessus (`howToSchema` + `<script type="application/ld+json">` dans `<Fragment slot="head">`), reprenant exactement les 4 étapes déjà publiées dans chaque page — nom, description et `HowToStep` par étape.
- `FAQPage` sur `musique-pour-respiration-guidee.html` : les 4 questions/réponses existantes migrées vers `<FAQBlock items={faq} idPrefix="mprg" />`, pour obtenir à la fois le même rendu visuel que les 8 autres pages et le balisage automatique.
- Validité JSON-LD des 3 pages modifiées vérifiée après build (`JSON.parse` sur chaque script généré) — aucune erreur de syntaxe.

**Maillage interne renforcé sur les 13 pages du cluster Bien-être & Santé :** 2 à 3 liens contextuels ajoutés dans le corps de texte de chaque page (`avis-radio-odyssey-bien-etre`, `bienfaits-coherence-cardiaque`, `coherence-cardiaque-au-bureau`, `comment-pratiquer-la-coherence-cardiaque`, `difference-musicotherapie-radio-bien-etre`, `elisabeth-belot-grimaud-radio-odyssey`, `musique-pour-respiration-guidee`, `musique-sans-parole-pour-se-concentrer`, `radio-anti-stress-gratuite`, `radio-bien-etre-en-ligne`, `radio-coherence-cardiaque`, `radio-detente-moderne`, `radio-sans-publicite`), avec des ancres variées contenant naturellement "radio bien-être" ("radio bien-être en ligne", "cette radio bien-être", "radio bien-être" tout court) qui pointent vers `/radio-bien-etre-en-ligne.html` — objectif : en faire le pivot d'ancrage clair de l'expression pour Google, `radio-bien-etre-en-ligne.html` elle-même ne pouvant pas se lier à elle-même et recevant donc des liens entrants plutôt qu'en émettant vers sa propre URL.

**Sitemap et robots.txt :** `<lastmod>` des 13 URLs du cluster mis à jour à la date de ce lot dans `public/sitemap.xml` (164 URLs au total, confirmé égal au nombre de pages construites par Astro). `robots.txt` vérifié : seule `/console.html` est bloquée, aucune exclusion accidentelle du cluster, la ligne `Sitemap:` reste correcte. Le sitemap n'est pas généré par un plugin Astro — il est géré à la main par `admin-console/lib/sitemap.mjs` (déjà vérifié au §22).

**Attributs alt :** rien à corriger sur `radio-bien-etre-en-ligne.html` — la page ne contient aucune balise `<img>` propre (uniquement des SVG décoratifs inline et le logo du `Layout`, déjà correctement balisé ailleurs).

**Comparaison Lighthouse (PageSpeed Insights, mobile, 4G lente, production) :** deux mesures indépendantes sur chaque page pour distinguer un vrai écart du bruit de mesure habituel d'un rapport lab unique.
- `radio-coherence-cardiaque.html` : Performances 94/100, Accessibilité 95/100, **Bonnes pratiques 77/100**, SEO 100/100. LCP 2,9 s.
- `radio-bien-etre-en-ligne.html` : première mesure Performances 84/100 (LCP 3,9 s), deuxième mesure quelques minutes plus tard **95/100 (LCP 2,9 s)** — l'écart de la première mesure était du bruit de réseau lab, pas un problème réel du code (même CSS/JS bloquant partagé par les deux pages via `Layout.astro`, même absence de décalage de mise en page CLS=0 sur toutes les mesures).
- **Aucun écart significatif et reproductible trouvé** entre les deux pages une fois le bruit écarté — rien à corriger côté Core Web Vitals pour cette page précise.
- Le seul écart réel et constant est inversé par rapport à l'hypothèse de départ : `radio-coherence-cardiaque.html` est à 77/100 en "Bonnes pratiques" (cookies tiers) à cause de la vidéo YouTube intégrée (`PartnerVideo.astro`), absente de `radio-bien-etre-en-ligne.html` qui reste donc à 100/100 sur ce point — pas une correction à faire, juste une différence de contenu entre les deux pages.

**Ce que ce chantier ne prouve pas :** aucune de ces actions ne garantit un meilleur classement sur "radio bien-être" — seule une nouvelle vérification de position dans Search Console, plusieurs semaines après la mise en ligne, pourra le confirmer. Le facteur le plus probable identifié par le propriétaire (l'ancien site Mobirise) reste entièrement hors du périmètre de ce dépôt et à traiter séparément.

---

## 24. 5 pages de genre musical, croisées avec les fiches artistes (2026-07-27)

Le propriétaire a fait remarquer que l'objectif "~100 pages" du projet initial ne comptait pas les 100 fiches artistes (`artiste-[slug].astro`) ni les 4 fiches découvertes — le site a donc en réalité 62 pages de contenu thématique, pas 164. Proposition retenue : exploiter les fiches artistes existantes pour créer des pages de genre musical, avec un vrai croisement de données plutôt que du texte générique.

**Approche :** plutôt que de recopier des listes d'artistes à la main (risque de dérive avec le temps, déjà constaté sur les listes figées de `styles-musicaux-radio-odyssey.astro`, qui citent des artistes absents du catalogue réel comme Duran Duran ou Kygo), les 5 nouvelles pages filtrent dynamiquement le champ `genre` réel des 100 fiches artistes (`src/data/genres.js`, source unique) :
- **Radio Pop en Ligne** — 22 artistes (genre exact `Pop`)
- **Radio Pop Française** — 14 artistes (`Pop française`, `Variété française`, `Pop / R&B français`)
- **Radio Dance & Électro** — 17 artistes (`Dance / Électro`, `Électro`, `Dance / House`, `Deep house`...)
- **Radio Pop/Rock** — 14 artistes (`Pop / Rock`, `Rock / Pop`, `Rock`...)
- **Radio Pop/R&B** — 14 artistes (`Pop / R&B`, `R&B / Pop`, `Pop urbaine`...)

81 des 100 artistes sont couverts. Les 19 restants (reggae, deep house à un seul représentant, soul/jazz isolé...) n'ont pas de famille dédiée — volontairement laissés hors de ces pages plutôt que forcés dans un regroupement incohérent ; ils restent visibles sur la page hub `styles-musicaux-radio-odyssey.html` et sur leur propre fiche.

**Maillage croisé dans les deux sens** (l'objectif explicite du propriétaire) :
- Chaque page de genre liste ses artistes réels avec un lien direct vers `/artiste-{slug}.html`.
- Chaque fiche artiste concernée (81/100, vérifié) reçoit en retour un lien vers sa page de genre, dans le corps de texte et dans les "Pages associées" (`familyForArtist()` dans `genres.js`).
- La page hub `styles-musicaux-radio-odyssey.html` a été enrichie : liens ajoutés vers les nouvelles pages depuis ses blocs "Dance & Électro" et "Pop Française" existants, plus un nouveau bloc listant les 5 pages.

**Structure de chaque page :** identique aux pages du cluster Bien-être & Santé (PageHero, grille d'artistes en `tag-pill` cliquables triés par fréquence de passage réelle, `ContentIllustration`, `FAQBlock` avec 3 questions distinctes par page, `RelatedPages` vers les autres pages de genre et les pages hub). JSON-LD : `FAQPage` auto-généré par `FAQBlock` (même caveat qu'au §23 sur la dépréciation Google), en plus des blocs `Organization`/`WebSite`/`RadioStation`/`BreadcrumbList` déjà présents sur toutes les pages via `Layout.astro`.

**Vérifié après build (169 pages, aucune erreur) :**
- JSON-LD valide sur les 5 pages (5 blocs chacune, `json.loads` sans erreur).
- Aucun lien cassé vers une fiche artiste inexistante.
- 81/100 fiches artistes pointent bien vers leur page de genre (vérifié par script sur le HTML généré, pas juste sur le code source).
- Rendu vérifié dans le navigateur : contenu, grille d'artistes cliquable, FAQ, aller-retour Madonna ↔ Radio Pop en Ligne fonctionnel des deux côtés.
- Les 5 pages apparaissent automatiquement dans le menu, le hub "Artistes & Styles" et le compteur de pages de l'accueil (tout est piloté par `navigation.js`, rien à modifier ailleurs).

**Ajouté au sitemap :** 5 nouvelles URLs (`priority: 0.8`, `lastmod: 2026-07-27`), plus rafraîchissement du `lastmod` de la page hub `styles-musicaux-radio-odyssey.html`.

**Non traité, signalé mais hors périmètre de ce lot :** les listes d'artistes codées en dur dans `styles-musicaux-radio-odyssey.astro` (buckets "Synthpop & Années 80", "Ballades & Voix Puissantes", "Funk & Disco") citent plusieurs artistes absents des 100 fiches réelles (Duran Duran, Eurythmics, Kygo, Whitney Houston, Chic...) — une dérive antérieure à ce lot, non corrigée ici pour ne pas mélanger deux chantiers différents dans le même commit.

---

## 25. 3 pages au cluster Bien-être : sommeil, sport, enfants/ados (2026-07-27)

Deuxième proposition retenue après les pages de genre (§24) : trois angles de la cohérence cardiaque encore absents du cluster Bien-être & Santé (13 pages) — le sommeil, le sport, et une version enfants/ados. Slugs choisis pour prolonger la même sous-famille que `coherence-cardiaque-au-bureau.html` (contexte d'application de la même méthode plutôt que nouveau sujet).

**Point de vigilance factuel vérifié avant d'écrire** : `musique-pour-la-nuit.astro` précise explicitement qu'aucune séquence de cohérence cardiaque n'est diffusée à l'antenne entre 21h et 6h (dernière séquence à 19h, détaillée sur `comment-pratiquer-la-coherence-cardiaque.html`). La nouvelle page sommeil devait donc rester honnête sur ce point plutôt que de laisser croire à une diffusion nocturne inexistante.

- **`coherence-cardiaque-pour-dormir.html`** — dit clairement qu'aucune séquence n'est diffusée la nuit, et propose le composant `CoherenceExercise` (outil interactif déjà utilisé sur `comment-pratiquer-la-coherence-cardiaque.html`) pour pratiquer au moment précis du coucher, sans dépendre d'un horaire de diffusion. Pas de JSON-LD `HowTo` ajouté ici (les mêmes 5 étapes existent déjà en `HowTo` sur la page guide — éviter la donnée structurée dupliquée).
- **`coherence-cardiaque-et-sport.html`** — deux moments distincts : avant l'effort pour canaliser le stress de compétition, après pour accompagner la récupération du rythme cardiaque. Différencié de `musique-pour-faire-du-sport.html` (énergie pendant l'effort) plutôt que redondant avec elle.
- **`coherence-cardiaque-enfants-ados.html`** — même positionnement honnête que `musique-pour-les-enfants.html` : Radio Odyssey n'a pas de programmation jeunesse dédiée, mais la technique elle-même (même outil interactif, présenté de façon plus ludique) est praticable en famille. FAQ avec un repère d'âge (7-8 ans) et un rappel explicite qu'un accompagnement professionnel reste la démarche à privilégier en cas de trouble installé, pas juste une réponse ponctuelle.

**Maillage croisé dans les deux sens**, comme pour le §24 : chaque nouvelle page renvoie vers la page existante dont elle se différencie, et les 3 pages existantes (`musique-pour-les-enfants.html`, `musique-pour-faire-du-sport.html`, `musique-pour-la-nuit.html`) ont reçu en retour un lien vers la nouvelle page correspondante — vérifié présent dans le HTML généré.

**Vérifié après build (172 pages, aucune erreur) :** JSON-LD valide sur les 3 pages (`FAQPage` auto-généré par `FAQBlock`, plus les blocs habituels du `Layout`), rendu et outil interactif testés dans le navigateur, hub `bien-etre-et-sante.html` listant automatiquement les 3 nouvelles pages (cluster désormais à 16 pages). `navigation.js` et `sitemap.xml` mis à jour (`priority: 0.75`, cohérent avec `coherence-cardiaque-au-bureau.html`).

---

## 26. 3 guides d'écoute (TV/PC/montre) et FAQ transverse (2026-07-27)

Troisième et dernier axe de la liste de propositions du 2026-07-27 (après §24 et §25) : compléter le cocon Conseils d'Écoute, qui n'avait que 3 pages (mobile, voiture, enceinte connectée) alors que 3 supports courants n'étaient couverts nulle part sur le site (vérifié par recherche texte avant d'écrire : aucune mention de Chromecast, Apple TV, Fire TV, Android TV, Apple Watch, Wear OS, ni de guide dédié à l'écoute sur ordinateur). Ajout aussi d'une FAQ générale, absente sous forme de page indexable — seul un mini-FAQ existait, en dur dans `index.astro`, sans balisage `FAQPage` ni URL propre.

- **`ecouter-radio-odyssey-sur-tv.html`** — Chromecast/Google TV, Apple TV (AirPlay), Fire TV et Android TV (app TuneIn).
- **`ecouter-radio-odyssey-sur-ordinateur.html`** — écoute navigateur au bureau, astuce "épingler l'onglet", croisée avec `coherence-cardiaque-au-bureau.html` et `radio-pour-travailler.html`.
- **`ecouter-radio-odyssey-montre-connectee.html`** — reste honnête sur l'absence d'application dédiée Apple Watch/Wear OS (pas de survente), mais décrit l'usage réel via les commandes multimédias au poignet ; croisée avec `musique-pour-courir.html` et `coherence-cardiaque-et-sport.html` (§25).
- **`faq-radio-odyssey.html`** — 9 questions avec `FAQPage` (balisage automatique via `FAQBlock`), volontairement différentes du mini-FAQ de l'accueil (gratuité et statut associatif, écoute à l'étranger, différence avec une playlist Spotify, comment contacter/soutenir) pour éviter tout contenu dupliqué entre les deux. Contient aussi un bloc qui consolide les liens vers les 6 pages du cocon Conseils d'Écoute — un point d'entrée unique vers "où écouter".

**Sur le statut associatif mentionné dans la FAQ :** reste au niveau déjà utilisé dans le JSON-LD `Organization` existant ("association loi 1901 à but non lucratif", `addressCountry: FR` uniquement) — aucune adresse précise, conformément à la consigne de confidentialité déjà en place sur ce projet.

**Maillage croisé dans les deux sens**, même principe qu'aux §24-25 : `ecouter-radio-odyssey-enceinte-connectee.html`, `coherence-cardiaque-au-bureau.html`, `musique-pour-courir.html` et `ecouter-radio-odyssey-sur-mobile.html` ont chacune reçu un lien vers la page correspondante, vérifié présent dans le HTML généré. Le `hubIntro` de la catégorie Conseils d'Écoute (`navigation.js`) a aussi été mis à jour — il ne citait que les 3 anciens supports.

**Vérifié après build (176 pages, aucune erreur) :** JSON-LD valide sur les 4 pages, rendu testé dans le navigateur (FAQ et hub Conseils d'Écoute), `navigation.js` et `sitemap.xml` mis à jour.

---

## 27. 3 pages au cocon International (EN) + correctif de langue FAQBlock/RelatedPages (2026-07-27)

Dernier axe du 2026-07-27 : enrichir le cocon International (8 pages en anglais) plutôt que traduire le site en arabe pour l'Algérie — décision prise après l'analyse Umami/Meta Ads du même jour (voir mémoire de session) qui a montré que le trafic algérien vient d'une campagne payante, convertit aussi mal que le trafic francophone, et ne justifie donc pas un chantier RTL/traduction. Le propriétaire a demandé trois nouvelles pages EN sur l'attrait de la musique positive, du bien-être et de la cohérence cardiaque pour un public anglophone.

**Audit préalable des 8 pages EN existantes** pour ne pas dupliquer : `heart-coherence-breathing-radio.html` couvre déjà le principe général de la cohérence cardiaque (avec HowTo), `music-for-a-better-mood.html` et `feel-good-music-radio.html` couvrent déjà "pourquoi une musique positive", `positive-european-music-station.html`/`european-chill-radio.html`/`80s-throwback-radio-online.html` couvrent l'angle nostalgie/euro-dance, et `keep-listening-radio-odyssey.html`/`listen-on-tunein.html` sont des guides d'appareils.

**3 pages ajoutées, un angle par thème demandé, chacun absent des 8 existantes :**
- **`why-positive-radio-is-trending.html`** (musique positive) — angle culturel : lassitude du doomscroll et backlash contre les "sad girl playlists", pourquoi le format "positive radio" séduit maintenant. Les pages existantes décrivent la station ; celle-ci explique la tendance derrière l'intérêt.
- **`radio-odyssey-vs-meditation-apps.html`** (bien-être) — comparaison avec Calm/Headspace plutôt qu'avec la "musicothérapie" (équivalent anglais du distinguo `difference-musicotherapie-radio-bien-etre.html`, mais avec un point de comparaison culturellement plus parlant pour ce public).
- **`heart-coherence-breathing-at-work.html`** (cohérence cardiaque) — usage au bureau, équivalent anglais de `coherence-cardiaque-au-bureau.html`. Pas de nouveau JSON-LD `HowTo` : les mêmes 4 étapes existent déjà en `HowTo` sur `heart-coherence-breathing-radio.html`, cette page s'y lie plutôt que de dupliquer le balisage (même principe qu'au §25 pour `coherence-cardiaque-pour-dormir.html`).

**Bug de langue trouvé et corrigé au passage** (préexistant, pas causé par ce lot, mais touchait déjà les 2 pages EN qui utilisaient `FAQBlock`/`RelatedPages` avant aujourd'hui) : ces deux composants partagés affichaient leurs titres ("Questions fréquentes", "Vous aimerez aussi", "Pages associées") toujours en français, y compris sur les pages `lang="en"`. Corrigé en ajoutant un prop `lang` optionnel à chaque composant (`'fr' | 'en'`, défaut `'fr'` — donc aucun changement sur les ~60 pages françaises), puis en passant `lang="en"` sur les 7 pages anglaises qui utilisent l'un des deux composants (`80s-throwback-radio-online`, `listen-on-tunein`, `heart-coherence-breathing-radio`, `music-for-a-better-mood`, et les 3 nouvelles pages).

**Maillage croisé dans les deux sens** : les 3 nouvelles pages se renvoient mutuellement et vers `heart-coherence-breathing-radio.html`/`music-for-a-better-mood.html`, qui reçoivent en retour un lien vers les nouvelles pages — vérifié présent dans le HTML généré.

**Vérifié après build (179 pages, aucune erreur) :** JSON-LD valide sur les 3 nouvelles pages (`FAQPage` + les blocs habituels), `lang="en"` et `hreflang="en"` corrects, les 7 pages anglaises affichent désormais leurs titres de section en anglais, un échantillon de pages françaises confirmé inchangé. `navigation.js` et `sitemap.xml` mis à jour (cocon International : 8 → 11 pages).

---

## 28. Coulisses : comment Radio Odyssey traite le son (2026-07-27)

Nouvel article du cocon Les Coulisses (4 → 5 pages), suggéré par Claude puis rédigé à partir des réponses directes du propriétaire (programmateur radio) à une série de questions ciblées — même méthode que les articles jingles/programmation déjà en ligne.

**Contenu, tiré des réponses du propriétaire :**
- Deux familles de traitement du son : logiciel (StereoTool cité en exemple générique) vs matériel dédié (Optimod FM Orban) — et pourquoi le matériel physique reste préférable en FM (latence du "retour antenne" pour un animateur), une contrainte qui ne s'applique pas à une web radio diffusant des titres pré-enregistrés.
- Le choix de Radio Odyssey : traiter chaque titre **en amont**, dès l'upload sur la plateforme, avec sa propre chaîne de traitement — plutôt que de dépendre du traitement générique (souvent payant) fourni par l'hébergeur.
- La difficulté propre à Radio Odyssey : harmoniser des titres des années 80 à aujourd'hui, chaque époque ayant sa propre signature sonore — résolu via la compression multibande (graves/médiums/aigus traités séparément), avec l'IA citée comme prochaine étape du secteur.
- Un compromis assumé sur la "guerre du volume" : trop de compression fatigue l'oreille et devient contre-productif ("de la bouillie", dans les mots du propriétaire) — d'autant plus incohérent pour une radio qui prône le bien-être.
- Traitement différencié pendant les séquences de cohérence cardiaque : musique volontairement plus basse que la voix d'Elisabeth Bélot-Grimaud, mais la voix reste traitée avec le même "son Radio Odyssey" pour éviter toute rupture auditive avec le reste de l'antenne.
- Recette (logiciels/plugins exacts) explicitement non dévoilée — décision du propriétaire, respectée dans l'article, par analogie avec le "son NRJ"/"son Skyrock" reconnaissable à l'oreille sans être documenté publiquement.
- Anecdote sur les titres récalcitrants : retravaillés individuellement en production plutôt que de reconfigurer toute la chaîne, ou déprogrammés si aucun réglage ne fonctionne.

**Teaser en fin d'article** (thème fourni par le propriétaire) : un futur article sur les rudiments du traitement — normalisation, égalisation, compression d'un titre avant diffusion — même mécanique que le teaser du Jingle Top Horaire dans l'article sur les jingles (§ antérieur), qui avait effectivement débouché sur sa propre page par la suite.

**Maillage croisé** : liens ajoutés dans les deux sens avec `comment-radio-odyssey-choisit-sa-musique.html` et `comment-radio-odyssey-fabrique-ses-jingles.html`.

**Vérifié après build (180 pages, aucune erreur) :** JSON-LD valide (`Article` daté via `articleDatePublished`, `FAQPage` via `FAQBlock`), rendu testé dans le navigateur, `navigation.js` et `sitemap.xml` mis à jour.

---

## 29. Coulisses : les rudiments du traitement de son (2026-07-27)

Suite directe du §28, annoncée en teaser dans cet article. Même méthode : questions ciblées au propriétaire (programmateur radio), réponses détaillées, mise en forme éditoriale en préservant le sens et une formule marquante fournie telle quelle : *"Les pros contrôlent, ajustent ; les amateurs laissent le hasard choisir."*

**Contenu, tiré des réponses du propriétaire :**
- **Normalisation** : remise à niveau par rapport à 0 dB en crête, sur l'ensemble du titre — mais elle ne répare pas : un son trop fort est irrécupérable sans altération (écrêtage), un son trop faible ne peut être remonté sans augmenter le bruit de fond (rapport signal/bruit). Ne doit jamais changer la dynamique ou la qualité d'origine.
- **Égalisation** : contrainte physique propre à la FM (pré-accentuation des fréquences atténuées par la diffusion, coupe des très basses fréquences pour ne pas déstabiliser la porteuse, normes internationales) vs liberté bien plus grande pour une web radio comme Radio Odyssey, dans la limite des contraintes techniques du streaming.
- **Compression** : explication simple (niveaux bas remontés, niveaux forts abaissés, densité du son) puis les deux paramètres clés (seuil de déclenchement, temps de maintien) et le risque de dénaturer le son si mal réglés. Appliquée en fin de chaîne chez Radio Odyssey, avec un nombre de bandes non dévoilé.
- **Ordre des opérations chez Radio Odyssey** : normalisation → image stéréo → égalisation → compression → réverbération finale si besoin. La normalisation en premier car elle offre "une base saine" ; l'ordre choisi affecte le résultat car certains effets peuvent masquer des éléments dont d'autres ont besoin.
- **Exemple concret** : remise à niveau d'un titre années 80 (privilégier une version remastérisée, ajuster pour compenser les techniques d'époque — synthétiseurs, mixage analogique fait à la main), avec les plugins modernes à analyse IA cités comme aide (proposition de réglages, acceptés ou non).
- **Erreur de débutant** : vouloir copier le son des grosses radios plutôt que construire sa propre identité, et pousser les réglages trop loin plutôt que chercher un juste milieu entre la limite basse et la limite haute de l'effet désiré.

**Teaser en fin d'article** (thème fourni par le propriétaire) : un futur article sur les enchaînements — titres, jingles, chroniques — et les bases à respecter pour réussir l'antenne avec peu de moyens.

**Maillage croisé** : lien ajouté dans les deux sens avec `comment-radio-odyssey-traite-le-son.html` (qui pointait déjà vers cet article en teaser).

**Vérifié après build (181 pages, aucune erreur) :** JSON-LD valide (`Article` + `FAQPage`), la citation préservée telle que fournie, rendu testé dans le navigateur, `navigation.js` et `sitemap.xml` mis à jour (Les Coulisses : 5 → 6 pages).

---

## 30. Coulisses : les enchaînements + correctif "directeur des programmes" (2026-07-27)

Suite directe du §29. Le propriétaire a aussi signalé, en répondant aux questions, une erreur factuelle répétée depuis le début du cocon Coulisses : sa fonction est **directeur des programmes**, pas "programmateur" comme rédigé jusqu'ici. Corrigé partout où le terme apparaissait : les 6 articles Coulisses existants, `navigation.js` (menu) et `public/llms.txt`.

**Contenu du nouvel article, tiré des réponses du propriétaire :**
- Les 3 types de fin de titre (shunt, cut, réso) et pourquoi le titre suivant doit s'y adapter — un chevauchement ne fonctionne que si les deux titres sont mixés au même tempo (BPM), un vrai travail de DJ que les radios musicales pratiquent rarement.
- Le rôle des jingles : fabriquer beaucoup de variantes pour éviter la lassitude, les alterner, et au-delà, choisir un jingle en fonction de la texture du titre qu'il encadre ou pour transitionner entre deux niveaux d'énergie différents.
- **Absence volontaire de chroniques parlées** : radio positive, pas d'actualités anxiogènes. Seule exception, le module 7h-9h05 (Top Horaire, météo, horoscope, séquence de cohérence cardiaque), produit par des pigistes RadioKing, toujours positif, placé en début d'heure pour ne jamais interférer avec la suite — et devenir un repère d'écoute.
- Astuces à petit budget : une fin en cut suivie d'une réverbération bien dosée comme valeur sûre, un début de titre "pêchu" pour éviter le "trou d'air" d'un début faible après une fin forte.
- Pourquoi une erreur d'enchaînement ne devrait jamais arriver avec un logiciel de programmation bien paramétré et une base musicale cohérente avec la stratégie éditoriale — le seul vrai risque venant d'un changement de titre en direct dans l'urgence.
- **Anecdote concrète et récente** : le mixage des séquences de cohérence cardiaque a été retravaillé après une écoute répétée de l'antenne — la musique support démarre désormais sous la fin du propos explicatif d'Elisabeth Bélot-Grimaud, avant les injonctions "Inspire/Expire", pour mettre l'auditeur en condition plus tôt.

**Teaser en fin d'article** (thème fourni par le propriétaire) : un futur article sur les titres remixés et leurs bons usages.

**Maillage croisé** : lien ajouté dans les deux sens avec `les-rudiments-du-traitement-de-son.html` (qui pointait déjà vers cet article en teaser), plus liens vers `comment-radio-odyssey-fabrique-ses-jingles.html` et `comment-radio-odyssey-choisit-sa-musique.html`.

**Vérifié après build (182 pages, aucune erreur) :** JSON-LD valide (`Article` + `FAQPage`), meta description sous 160 caractères, plus aucune occurrence de "programmateur" dans tout le site généré (vérifié par recherche sur `dist/`), rendu testé dans le navigateur, `navigation.js` et `sitemap.xml` mis à jour (Les Coulisses : 6 → 7 pages).

---

## 31. Le manifeste "Pourquoi Radio Odyssey est différente" (2026-07-27)

Avant de construire l'article teasé sur les remix, le propriétaire a proposé une page "Pourquoi Radio Odyssey est différente des autres radios ?" avec 5 sections (mission, cohérence cardiaque, programmation positive, sélection des titres, bénéfices auditeur).

**Analyse faite avant de construire** : 4 des 5 sections recoupaient presque exactement des pages déjà en place et qui se classent bien (`radio-coherence-cardiaque.html`, `bienfaits-coherence-cardiaque.html`, `music-for-a-better-mood.html`, `comment-radio-odyssey-choisit-sa-musique.html`, `avis-radio-odyssey-bien-etre.html`) — un vrai risque de cannibalisation si la nouvelle page les redéveloppait en profondeur. Vérifié aussi qu'il n'existe pas de page "à propos" actuelle sur le site (`/a-propos.html` renvoie une 404 en prod, reliquat de l'ancien site pré-migration).

**Décision retenue avec le propriétaire** : construire un **manifeste court** plutôt qu'un article de fond — chaque section en 1-2 paragraphes qui résume la réponse, puis renvoie vers la page complète existante pour "en savoir plus". Objectif explicite du propriétaire : que les visiteurs comprennent la différence et l'apport de Radio Odyssey en quelques minutes, sans dupliquer le contenu déjà en place.

**Page créée** : `pourquoi-radio-odyssey-est-differente.html`, placée en tête du hub Les Coulisses (Les Coulisses : 7 → 8 pages) — pièce maîtresse plutôt qu'article chronologique parmi les autres. FAQ volontairement distincte de `faq-radio-odyssey.html` (aucune question dupliquée), avec une question meta assumant explicitement le rôle de la page : "Cette page remplace-t-elle les articles plus détaillés du site ? Non, elle les résume."

**Maillage** : lien ajouté depuis `comment-radio-odyssey-choisit-sa-musique.html` ; la nouvelle page pointe elle-même vers `radio-sans-publicite.html`, `radio-coherence-cardiaque.html`, `comment-pratiquer-la-coherence-cardiaque.html`, `music-for-a-better-mood.html`, `comment-radio-odyssey-choisit-sa-musique.html`, `bienfaits-coherence-cardiaque.html` et `avis-radio-odyssey-bien-etre.html`.

**Vérifié après build (183 pages, aucune erreur) :** JSON-LD valide (`Article` + `FAQPage`), meta description à 136 caractères, rendu testé dans le navigateur (page + hub Coulisses), `navigation.js` et `sitemap.xml` mis à jour.

---

## 32. "Suivez le Guide" — parcours de découverte par intention (2026-07-27)

Le propriétaire a proposé un article "Suivez le guide" pour tout comprendre de Radio Odyssey en quelques minutes. Réflexion faite en amont (angle marketing/créatif, sans construire tout de suite) : un simple récapitulatif exhaustif ferait doublon avec le hub Les Coulisses et le mega-menu. La proposition retenue : un parcours organisé **par intention du visiteur plutôt que par catégorie du site** — le seul format qui traverse plusieurs univers du site en une seule page, ce qu'aucune page existante ne fait (chaque hub de catégorie ne couvre que sa propre catégorie).

**6 profils choisis, chacun avec 3 liens qui croisent volontairement plusieurs cocons** :
- 🌅 Calmer son rythme, du réveil au coucher — Playlists du Jour + Bien-être
- 🕺 Nostalgique et envie de danser — Musique & Énergie + Artistes & Styles
- 💪 De l'énergie pour bouger — Musique & Énergie + Bien-être
- 💻 Se concentrer, au travail ou en révisant — Musique & Énergie + Bien-être + Conseils d'Écoute
- 🎤 Curieux de ce qui passe à l'antenne — Artistes & Styles + Coulisses
- 🎧 Écouter partout, sur n'importe quel appareil — Conseils d'Écoute

**Positionnement par rapport au manifeste du §31** : le manifeste répond à "pourquoi nous choisir" (mission, conviction) ; ce guide répond à "par où commencer selon mon envie du moment" (orientation, découverte) — les deux se complètent sans se dupliquer, explicité dans une question de FAQ dédiée sur chacune des deux pages, avec lien croisé dans les deux sens.

**Vérifié après build (184 pages, aucune erreur)** : JSON-LD valide (`Article` + `FAQPage`), meta description à 142 caractères, les 18 liens de profils vérifiés un par un contre les pages réellement générées (aucun lien cassé), rendu testé dans le navigateur. `navigation.js` et `sitemap.xml` mis à jour (Les Coulisses : 8 → 9 pages).

---

## 33. Mise en avant du manifeste sur l'accueil (2026-07-27)

Le propriétaire a trouvé dommage que le manifeste du §31 ne soit visible que dans Les Coulisses, et a proposé un encart sur `index.astro`, entre les "4 derniers titres diffusés" et le bandeau cohérence cardiaque — position validée : ça respecte la narration de la page (preuve concrète de ce qui joue → pourquoi nous choisir → fonctionnalité phare → explorer).

**Implémentation** : réutilise la classe `.coherence-banner` déjà existante (dégradé, coins arrondis, cercle décoratif) pour rester cohérent visuellement avec le reste de la page, mais avec un dégradé distinct (violet → or, repris de la page cible) pour ne pas se confondre avec le bandeau cohérence cardiaque juste en dessous, qui utilise le même composant visuel avec un dégradé bleu → violet.

**Vérification** : la capture d'écran du navigateur a connu un incident d'affichage ponctuel (rendu vide) pendant la vérification — contourné en inspectant directement le DOM généré (`getComputedStyle`, `getBoundingClientRect`, `outerHTML`) : dégradé, position, opacité et texte tous confirmés corrects. Bug de l'outil de capture, pas du code.

---

## 34. "Comment Radio Odyssey utilise les remix" (2026-07-27)

Dernier volet de la mini-série Coulisses sur la fabrication de l'antenne (après choix musical, jingles, traitement du son, enchaînements) : le teaser laissé en fin de l'article §30 sur les enchaînements est honoré avec un article sur les critères de diffusion des titres remixés. Contrainte explicite du propriétaire pour cet article : pas de teaser de fin vers un thème précis, faute d'idée pour la suite à ce stade.

**Contenu, tiré directement des réponses détaillées du propriétaire (directeur des programmes)** :
- Le critère central : un remix diffusé doit être "meilleur" que l'original, créer un effet "wahou", avec une qualité sonore professionnelle non négociable.
- La règle de dosage : si l'original reste plus fort que sa version remixée, c'est l'original qui passe. Sinon, alternance des deux versions (une forme de *platooning*), en plus de la catégorie à part "Remix années 70-80".
- Les types acceptés/refusés : couleur d'antenne stricte (pas trop dance/techno) ; mashups tolérés si "évidence à l'écoute", avec deux exemples exclusifs cités ("Feel Good" de Charlotte Cardin, "Get Lucky Vs Fresh" de Daft Punk) ; versions extended généralement trop longues.
- Droits d'auteur : chaque remix diffusé est crédité (nom du remixeur + nom du remix) dans sa fiche, même si étiqueté "libre de droits" par son auteur — qui ne prime jamais sur les droits d'auteur du titre original.
- Sourcing : YouTube, Spotify, labels et artistes.
- L'erreur à éviter : la radio est un média d'habitude d'écoute, le remix n'en fait pas partie par défaut ; mention du genre "Slowed + Reverb" comme exemple de remix difficile à diffuser.

**Maillage** : lien ajouté dans les deux sens avec `comment-radio-odyssey-enchaine-ses-titres.html` (dont le teaser de fin pointe maintenant vers ce nouvel article plutôt que vers un "à venir"), plus liens vers `comment-radio-odyssey-choisit-sa-musique.html`, `radio-annees-80-en-ligne.html` (catégorie remix années 70-80) et `comment-radio-odyssey-traite-le-son.html`.

**Vérifié après build (185 pages, aucune erreur)** : JSON-LD valide (`Article` + `FAQPage`), meta description ramenée de 167 à 136 caractères après une première version trop longue, rendu testé dans le navigateur (aucune erreur console, aucun teaser de fin — conforme à la demande), `navigation.js` et `sitemap.xml` mis à jour (Les Coulisses : 9 → 10 pages).

---

## 35. Sept nouvelles pages vers l'objectif des 100 (2026-08-06)

Le propriétaire a demandé un état des lieux vers l'objectif des ~100 pages thématiques du projet initial (hors fiches artistes/Découvertes). Compte exact vérifié à cette date : **81 pages thématiques live**, donc 19 restantes pour atteindre 100.

**12 idées proposées, cocon par cocon, après vérification anti-cannibalisation** (registre §4 + relecture des pages existantes) — le propriétaire en a retenu 9, écartant explicitement "Comment Radio Odyssey gère les demandes des auditeurs" (aucune matière concrète pour l'instant), l'idée volontairement absurde "historique des jingles publicitaires" (la radio n'a pas de pub) et "Playlist du Week-end" (angle jugé pas assez distinct des 6 tranches horaires déjà en place). Parmi les 9 retenues, **8 ont été construites dans ce lot** ; la 9ᵉ, "L'histoire de Radio Odyssey", nécessite une interview avec le propriétaire (comme les articles Coulisses) et reste en attente.

**Pivot fait pendant la construction** : l'idée initiale "Top 20 des artistes les plus diffusés" a été abandonnée en cours de route — vérification faite sur `artistes-diffuses-radio-odyssey.astro`, qui affiche déjà les 10 premiers artistes du tableau `ARTISTS` (trié par `playCount`) comme "artistes phares". Un vrai top 20 aurait donc dupliqué cette section existante. Remplacé par un angle réellement distinct : un classement par **titre** (pas par artiste), tous styles confondus — aucune page ne classait jusqu'ici au niveau du titre en dehors du style dance.

**Les 8 pages construites** :
1. `musique-pour-cuisiner.html` (Musique & Énergie) — playlist funk/feel-good (Jamiroquai, Earth Wind & Fire, Stromae, Craig David, Soprano, Kungs, Robin Schulz, Sade), maillée avec la page ménage déjà existante.
2. `musique-pour-un-road-trip.html` (Musique & Énergie) — playlist énergique et variée (Coldplay, U2, Harry Styles, Ofenbach, Sound Of Legend, Avicii, Kylie Minogue, Indochine), avec conseils pratiques (réseau, Bluetooth), maillée avec `ecouter-radio-odyssey-en-voiture.html`.
3. `titres-les-plus-diffuses-sur-radio-odyssey.html` (Musique & Énergie) — top 15 réel des titres, calculé directement à partir de l'export RadioKing janvier-juin 2026 (`Radio odyssey report musique et chroniques -from-2026-01-01-to-2026-06-30.csv`, agrégation par `Play frequency`) — voir méthodologie en mémoire `reference-radioking-programming-export`. Seuls les titres dont l'artiste dispose d'une fiche sont cliquables ; les autres (ex. le titre TikTok trend en tête de classement, ou "Les Enfoirés") restent affichés tels quels, par souci d'exactitude plutôt que de tout filtrer sur ce qui est cliquable.
4. `coherence-cardiaque-pour-seniors.html` (Bien-être & Santé) — angle démographique non couvert jusqu'ici, avec rappel explicite que la méthode ne remplace pas un suivi médical (population plus susceptible d'avoir une pathologie cardiaque/respiratoire).
5. `musique-positive-et-bonne-humeur.html` (Bien-être & Santé) — pendant FR de la page EN `music-for-a-better-mood.html`, jamais traduite jusqu'ici ; lien croisé ajouté dans les deux sens entre les deux langues.
6. `radio-for-focus-and-productivity.html` (International, EN) — équivalent anglophone de `musique-pour-se-concentrer.html` / `radio-pour-travailler.html`, maillé avec `heart-coherence-breathing-at-work.html`.
7. `free-radio-no-ads-no-sign-up.html` (International, EN) — équivalent anglophone de `radio-sans-publicite.html`, maillé avec `why-positive-radio-is-trending.html`.

**Maillage systématique** : chaque nouvelle page reçoit un lien depuis la page existante la plus proche de son cocon (règle §2.5) — ajouté dans `musique-pour-faire-le-menage.astro`, `ecouter-radio-odyssey-en-voiture.astro`, `les-tubes-dance-incontournables.astro`, `comment-pratiquer-la-coherence-cardiaque.astro`, `radio-bien-etre-en-ligne.astro`, `heart-coherence-breathing-at-work.astro` et `why-positive-radio-is-trending.astro`.

**Vérifié après build (192 pages, aucune erreur)** : meta descriptions toutes sous 160 caractères, canonical correct sur les 7 pages, `FAQPage` présent sur chacune, tous les liens vers les fiches artistes vérifiés contre les fichiers réellement générés (aucun lien cassé), rendu testé dans le navigateur sans erreur console sur un échantillon (classement titres, cohérence cardiaque seniors, page EN sans pub). `navigation.js` et `sitemap.xml` mis à jour (Musique & Énergie : 13 → 16 pages ; Bien-être & Santé : 16 → 18 pages ; International : 11 → 13 pages).

Total après ce lot : **89 pages thématiques**, 11 restantes pour atteindre 100 (dont "L'histoire de Radio Odyssey", en attente d'interview).

---

## 36. L'histoire de Radio Odyssey (2026-08-06)

Dernière des 9 idées retenues au §35 : "L'histoire de Radio Odyssey" nécessitait une interview avec le propriétaire (comme les autres articles Coulisses), contrairement aux 8 pages déjà construites qui ne demandaient pas de matière personnelle nouvelle. 6 questions posées (origine, nom, débuts techniques, évolution, partenariat Elisabeth Bélot-Grimaud, fierté) ; réponses détaillées reçues et restructurées en article, en préservant les faits exacts.

**Faits marquants révélés, jamais documentés sur le site jusqu'ici** :
- Radio Odyssey n'est pas née en 2025 : l'association existe depuis le **12 août 1994**, fondée dans le Pas-de-Calais par deux passionnés de radio (technique HF et radio), qui ont obtenu une fréquence FM temporaire pour une quinzaine commerciale, avant une mise en sommeil de plus de 25 ans pour raisons de carrière professionnelle.
- Le nom vient du groupe américain **Odyssey** et de son titre *"Going Back to My Roots"* (années 80).
- Détails techniques d'époque : Winamp pour les mp3, logiciel de programmation **Raduga** (avec insertion d'écrans publicitaires, utile pour la période FM commerciale de 1994 — un modèle radicalement différent du positionnement "100% sans pub" d'aujourd'hui, bien précisé comme relevant d'une autre époque pour ne pas contredire `radio-sans-publicite.html`).
- Le retour du 19 janvier 2025 n'est pas un hasard : il découle directement d'une rencontre antérieure avec Elisabeth Bélot-Grimaud et d'une discussion sur la cohérence cardiaque — "Et si on s'associait pour faire une radio avec de la cohérence cardiaque ?"
- Dès les années 90, la programmation était déjà positive, avant que ce positionnement ne devienne une tendance (lien avec l'article EN `why-positive-radio-is-trending.html`).

**Maillage** : lien ajouté dans les deux sens avec `elisabeth-belot-grimaud-radio-odyssey.html` et `pourquoi-radio-odyssey-est-differente.html` (dont la section "Notre mission" renvoie maintenant vers cette page pour la genèse), plus liens vers `comment-radio-odyssey-choisit-sa-musique.html`, `radio-coherence-cardiaque.html`, `radio-sans-publicite.html` et `suivez-le-guide-radio-odyssey.html`. Placée en tête de la liste Les Coulisses, avant "Suivez le Guide".

**Vérifié après build (193 pages, aucune erreur)** : JSON-LD valide (`Article` + `FAQPage`), meta description à 151 caractères, aucun lien cassé, rendu testé dans le navigateur sans erreur console. `navigation.js` et `sitemap.xml` mis à jour (Les Coulisses : 10 → 11 pages).

Total après ce lot : **90 pages thématiques**, 10 restantes pour atteindre 100.

---

## 37. 20 URLs fantômes "Détectée, non indexée" — diagnostic et robots.txt (2026-08-07)

Le propriétaire a signalé 20 pages en "Détectée, actuellement non indexée" dans Google Search Console (validation en cours depuis le 09/07/2026, sans amélioration jusqu'au 05/08/2026). Inspection directe de l'onglet Search Console ouvert par le propriétaire (via Claude in Chrome, sa session Google déjà connectée).

**Diagnostic** : les 20 URLs suivent toutes le même motif `https://radio-odyssey.com/sitemap.xml/<page>.html` (ex. `plan-du-site.html`, `page1.html`, `page18.html`, `listen-to-radio-odyssey-on-alexa.html`, `radio-remix-annees-80.html`) — un `/sitemap.xml/` au milieu de l'URL, avec des noms de pages qui n'ont jamais existé sur le site Astro actuel. Les noms génériques `page1.html`/`page18.html` sont la signature typique d'un export **Mobirise** (voir [[project_radio_bien_etre_ranking]] pour le contexte Mobirise déjà documenté) — ces URLs sont un résidu d'une version très ancienne du site, dont le `sitemap.xml` devait contenir des chemins relatifs mal formés ; Google les a autrefois résolus en les concaténant après l'URL du fichier sitemap lui-même.

**Vérifications faites avant toute action** :
- `curl -I https://www.radio-odyssey.com/sitemap.xml/plan-du-site.html` → redirection 308 propre vers `/` (pas d'erreur, pas de contenu dupliqué réellement servi)
- `sitemap.xml` actuel : uniquement des URLs absolues `https://www.radio-odyssey.com/...html`, aucune trace du bug
- Aucun fichier du code source ou du build (`src/`, `public/`, `dist/`) ne génère de lien vers ce format
- Conclusion : **aucune des 90 pages thématiques réelles n'est concernée** — pur résidu historique, sans impact sur le contenu actuel.

**Action appliquée** : ajout de `Disallow: /sitemap.xml/` dans `robots.txt` (sous la règle générale `User-agent: *`, avant les règles des robots IA), pour indiquer explicitement à Google de ne plus explorer ce chemin fantôme et accélérer sa sortie de la file d'attente. Vérifié après déploiement : `curl https://www.radio-odyssey.com/robots.txt` confirme la ligne en production.

---

## 38. Musique pour les plantes et les animaux (2026-08-08)

Deux idées proposées par le propriétaire : "cohérence cardiaque à partir de quel âge" et "musique pour les plantes/animaux, mais quelle musique ?".

**Cannibalisation détectée sur la première idée** : la question "à partir de quel âge un enfant peut-il pratiquer la cohérence cardiaque ?" existe déjà, mot pour mot, dans la FAQ de `coherence-cardiaque-enfants-ados.html` (créée en amont de ce projet). Une page dédiée aurait dupliqué une intention de recherche déjà couverte, en violation de la règle §2.2. **Décision** : pas de nouvelle page — la question a plutôt été élargie et déplacée sur le guide de référence `comment-pratiquer-la-coherence-cardiaque.html` ("à tout âge, sans effort physique"), avec liens vers `coherence-cardiaque-enfants-ados.html` *et* `coherence-cardiaque-pour-seniors.html`, pour couvrir les deux extrêmes d'âge depuis la page la plus généraliste.

**Deux nouvelles pages construites** pour la seconde idée (Musique & Énergie) :
- `musique-pour-les-plantes.html` — sujet volontairement traité avec prudence : pas de consensus scientifique (les études des années 1970 les plus citées sont aujourd'hui jugées méthodologiquement fragiles), aucune promesse de résultat, argumentaire recentré sur le fait qu'un flux calme et continu est "sans inconvénient" plutôt que "efficace".
- `musique-pour-les-animaux.html` — sujet mieux documenté : études réelles citées (Kogan et al. en refuge pour les chiens — musique calme préférée au silence/à l'agressif ; Charlton & Snowdon pour la sensibilité différente des chats), avec rappel explicite que ça ne remplace pas un avis vétérinaire en cas de trouble sévère.

Les deux pages se renvoient l'une vers l'autre et reçoivent un lien depuis `radio-detente-moderne.html`.

**Vérifié après build (195 pages, aucune erreur)** : meta descriptions sous 160 caractères (144 et 152), canonical correct, `FAQPage` présent, aucun lien cassé, rendu testé dans le navigateur sans erreur console. `navigation.js` et `sitemap.xml` mis à jour (Musique & Énergie : 16 → 18 pages).

Total après ce lot : **92 pages thématiques**, 8 restantes pour atteindre 100.

---

*Dernière mise à jour : 2026-08-08, musique pour les plantes et les animaux (§38).*

---

## 39. Artistes féminines et espace d'écoute dédié (2026-08-08)

Deux idées proposées par le propriétaire : une page "artistes féminines" dans Artistes & Styles, et un guide "créer un espace d'écoute dédié chez soi" dans Conseils d'Écoute. Aucune cannibalisation détectée sur les deux (aucune page existante ne couvre ces angles).

**`artistes-feminines-radio-odyssey.html`** — la liste a été établie en repartant du texte `facts[0]` déjà écrit pour chacune des 100 fiches artistes (`src/data/artists.js`), pas de mémoire générale, pour limiter le risque d'erreur sur l'identification de personnes réelles. **35 artistes féminines solo** identifiées explicitement (mention "Chanteuse..." ou biographie sans ambiguïté), + **Bananarama** comme seul groupe entièrement féminin ("l'un des groupes féminins les plus vendus des années 1980", texte de sa propre fiche). Exclusion volontaire des groupes mixtes ou menés par un chanteur, y compris les cas limites : **Sade** a été écartée bien que la chanteuse Sade Adu en soit la voix, car sa propre fiche la présente explicitement comme un "groupe britannique mené par..." — cohérent avec le critère annoncé au propriétaire avant construction. FAQ avec une précision explicite : "Radio Odyssey diffuse-t-il plus d'artistes féminines que masculins ? Non, la programmation ne suit aucune logique de quota par genre."

**`comment-creer-un-espace-decoute-chez-soi.html`** — guide distinct de `ecouter-radio-odyssey-enceinte-connectee.html` (qui répond à "comment brancher une seule enceinte", pas "comment monter une vraie installation") : choix des enceintes stéréo, rôle de l'ampli, filaire vs sans fil, bases d'acoustique de la pièce, budget. Point traité avec honnêteté plutôt que survente : le son 5.1/home cinéma n'apporte rien pour une source stéréo comme une web radio — expliqué clairement en FAQ plutôt que de laisser croire l'inverse.

**Maillage** : lien ajouté depuis `ecouter-radio-odyssey-enceinte-connectee.html` vers le nouveau guide ; la page féminines reçoit un lien nav direct et pointe vers `artistes-diffuses-radio-odyssey.html`, `styles-musicaux-radio-odyssey.html` et `titres-les-plus-diffuses-sur-radio-odyssey.html`.

**Vérifié après build (197 pages, aucune erreur)** : meta descriptions sous 160 caractères, canonical correct, `FAQPage` présent, les 36 liens vers les fiches artistes vérifiés un par un contre les fichiers réellement générés (aucun lien cassé), rendu testé dans le navigateur sans erreur console. `navigation.js` et `sitemap.xml` mis à jour (Artistes & Styles : 8 → 9 pages ; Conseils d'Écoute : 6 → 7 pages).

Total après ce lot : **94 pages thématiques**, 6 restantes pour atteindre 100.

---

*Dernière mise à jour : 2026-08-08, artistes féminines et espace d'écoute dédié (§39).*

---

## 40. Correction : le 5.1 comme expérience immersive, pas un rejet (2026-08-08)

Le §39 présentait le son 5.1 comme sans intérêt pour une web radio en stéréo. Le propriétaire a corrigé ce point : de nombreux systèmes 5.1 savent "upmixer" intelligemment une source stéréo pour reconstituer une image sonore immersive et enveloppante — un effet qu'il qualifie lui-même de "bluffant". Contenu et FAQ de `comment-creer-un-espace-decoute-chez-soi.html` réécrits en conséquence : le 5.1 y est désormais présenté comme une vraie option à considérer pour l'écoute quotidienne, pas un gadget réservé aux films.

À retenir pour tout futur contenu technique audio : le propriétaire a une vraie expertise (voir §28/§29 sur le traitement du son) — éviter d'affirmer qu'une technologie audio "ne sert à rien" sans vérifier avec lui au préalable.

---

*Dernière mise à jour : 2026-08-08, correction sur le 5.1 comme expérience immersive (§40).*

---

## 41. Musique pour les arts plastiques (2026-08-08)

Idée proposée par le propriétaire : une page musique pour la peinture, le dessin, la sculpture. Aucune page existante ne couvre cet angle (le plus proche, `musique-sans-parole-pour-se-concentrer.html`, traite un besoin auditif précis — pas d'un contexte créatif) — pas de cannibalisation, construite comme complément plutôt que doublon.

**`musique-pour-les-arts-plastiques.html`** (Musique & Énergie) — distingue deux besoins : un travail de précision (modèle vivant, calligraphie), pour lequel la page renvoie vers `musique-sans-parole-pour-se-concentrer.html` plutôt que de dupliquer l'argumentaire instrumental ; et une pratique plus expressive/gestuelle (sculpture, peinture abstraite), pour laquelle une énergie plus marquée est présentée comme un vrai atout. Playlist de 8 artistes réels mêlant les deux registres (The Avener, Moby, Charlie Winston côté calme ; Angèle, Kungs, Ofenbach, Christophe Willem, Damiano David côté énergique). Point additionnel sur la pause cohérence cardiaque entre deux séances, pour le blocage créatif / la fatigue visuelle.

**Maillage** : lien réciproque ajouté avec `musique-sans-parole-pour-se-concentrer.html` (section "Tâches créatives").

**Vérifié après build (198 pages, aucune erreur)** : meta description à 137 caractères, canonical correct, `FAQPage` présent, les 8 liens artistes vérifiés contre les fichiers réellement générés (aucun lien cassé), rendu testé dans le navigateur sans erreur console. `navigation.js` et `sitemap.xml` mis à jour (Musique & Énergie : 18 → 19 pages).

Total après ce lot : **95 pages thématiques**, 5 restantes pour atteindre 100.

---

*Dernière mise à jour : 2026-08-08, musique pour les arts plastiques (§41).*

---

## 42. Quel style de musique pour la cohérence cardiaque (2026-08-08)

Idée proposée par le propriétaire, explicitement pour le cocon **Artistes & Styles** plutôt que Les Coulisses : une page sur le style musical des séquences de cohérence cardiaque elles-mêmes — distinct des 5 pages de style déjà en place, qui couvrent les genres du catalogue diffusé (pop, dance, etc.), jamais la musique spécifique composée pour cet usage précis. Aucune cannibalisation détectée.

**Interview menée comme pour les articles Coulisses** (6 questions posées, réponses détaillées reçues). **Point de confidentialité revalidé avant rédaction** : le propriétaire a confirmé que ces musiques sont créées avec l'appui de l'IA — même décision que pour les jingles chantés ([[project_radio_odyssey_programming_methodology]] §jingles) : **ne jamais mentionner l'IA dans le contenu public**, formulé comme "composées spécifiquement pour Radio Odyssey, selon un cahier des charges précis". Vérifié après build : aucune occurrence de "IA"/"intelligence artificielle"/"Suno" dans le HTML généré.

**Contenu réel, tiré des réponses du propriétaire** :
- Style **chill** : piano, harpe, **duduk**, violon, notes longues et enveloppantes.
- Un rythme trop élevé serait "incohérent" avec l'exercice — mot du propriétaire, repris tel quel comme angle FAQ.
- Tempo aligné autant que possible sur la respiration (5s/5s), mais l'efficacité réelle vient surtout de la concentration sur la voix d'Elisabeth Bélot-Grimaud, pas d'une synchronisation parfaite.
- Séquences longues (3 min) et courtes (1 min) : mêmes musiques ou versions spécifiques, choix éditorial.
- Conseil pour qui veut choisir sa propre musique de cohérence cardiaque hors Radio Odyssey : éviter l'énergique, préférer un instrument dominant plutôt qu'un habillage chargé (exemple donné : le duduk).

**Maillage** : liens ajoutés depuis `radio-coherence-cardiaque.html` et `styles-musicaux-radio-odyssey.html` ; la nouvelle page pointe vers ces deux pages plus `comment-pratiquer-la-coherence-cardiaque.html`, `elisabeth-belot-grimaud-radio-odyssey.html`, `comment-radio-odyssey-traite-le-son.html` et `bienfaits-coherence-cardiaque.html`.

**Vérifié après build (199 pages, aucune erreur)** : JSON-LD valide (`Article` + `FAQPage`), meta description à 146 caractères, aucune fuite du terme IA, aucun lien cassé, rendu testé dans le navigateur sans erreur console. `navigation.js` et `sitemap.xml` mis à jour (Artistes & Styles : 9 → 10 pages).

Total après ce lot : **96 pages thématiques**, 4 restantes pour atteindre 100.

---

*Dernière mise à jour : 2026-08-08, style musical de la cohérence cardiaque (§42).*

---

## 43. Clarifier "Artistes & Styles" sur la page d'accueil (2026-08-08)

Le propriétaire a trouvé le libellé "Artistes & Styles" trop vague, "Styles" seul ne faisant pas comprendre qu'il s'agit d'informations musicales. Discussion en plusieurs temps :
1. Renommer en "Artistes & Musiques" ou "Artistes & Styles Musicaux" ? Recommandation retenue : **"Artistes & Styles Musicaux"**, cohérent avec le terme déjà utilisé sur `styles-musicaux-radio-odyssey.html`.
2. Séparer en deux catégories "Artistes" et "Styles" ? Écarté : "Artistes" seul n'aurait eu que 3 pages hub (`artistes-diffusés`, `découvertes`, `artistes-féminines`, les 100 fiches étant hors menu), et ça aurait fait passer le mega-menu de 7 à 8 entrées — déjà sous contrainte de largeur (cf. le précédent "Les Coulisses").
3. Vérification faite : le `hubTitle` de cette catégorie était déjà "Artistes & Styles Musicaux" (titre de `artistes-et-styles.html`) — donc rien à changer côté page hub elle-même.
4. Le propriétaire a précisé que le vrai problème visible se situe sur la **tuile catégorie de l'accueil**, pas le menu — c'est là que "Styles" seul se lit sans contexte suffisant.

**Solution implémentée** : nouveau champ optionnel `tileLabel` dans `src/data/navigation.js` (retombe sur `label` si absent), utilisé uniquement par la tuile catégorie de `index.astro`. Le menu méga desktop et l'offcanvas mobile partagent le même champ `label` (espace contraint dans les deux cas, pas de distinction possible sans ce nouveau champ) et gardent "Artistes & Styles" ; seule la tuile accueil affiche désormais "Artistes & Styles Musicaux".

**Vérifié après build** : `document.querySelectorAll('.page-card h3')` confirme la tuile accueil à "Artistes & Styles Musicaux" (les 6 autres tuiles inchangées) ; `.ro-mega-nav-toggle` (desktop) et `.nav-cat` (mobile) confirment tous les deux "Artistes & Styles" inchangé.

---

*Dernière mise à jour : 2026-08-08, clarification de la tuile Artistes & Styles sur l'accueil (§43).*

---

## 44. Écouter de la musique sous l'eau (2026-08-08)

Idée volontairement "farfelue" du propriétaire, traitée sérieusement plutôt qu'écartée. Aucune page existante ne couvre cet angle dans Conseils d'Écoute — pas de cannibalisation.

**Choix éditorial important : honnêteté plutôt que survente.** Contrairement à la correction sur le 5.1 (§40, où la technologie apportait vraiment quelque chose), la réponse technique honnête ici est négative pour l'usage le plus littéral : l'eau bloque les ondes Bluetooth/Wi-Fi en quelques centimètres, donc **aucun streaming en direct ne fonctionne réellement tête sous l'eau**, Radio Odyssey ou n'importe quel autre service. La page l'assume clairement plutôt que de prétendre le contraire (cohérent avec la règle §2.3 "aucune promesse produit non vérifiée").

**Contenu, avec la nuance qui rend la page utile plutôt que juste négative** :
- Comment les nageurs font vraiment : lecteur MP3 étanche autonome, fichiers téléchargés à l'avance, restitution par conduction osseuse — pas un flux en direct, donc structurellement incompatible avec Radio Odyssey qui ne propose pas de fichiers téléchargeables.
- Ce qui fonctionne très bien en pratique : une enceinte flottante/étanche à la surface (piscine, douche, bain) — le vrai besoin derrière la plupart des recherches sur ce sujet, redirigé vers `ecouter-radio-odyssey-enceinte-connectee.html`.

**Maillage** : lien ajouté depuis `ecouter-radio-odyssey-enceinte-connectee.html`.

**Vérifié après build (200 pages, aucune erreur)** : meta description ramenée de 162 à 148 caractères après une première version trop longue, canonical correct, `FAQPage` présent, aucun lien cassé, rendu testé dans le navigateur sans erreur console. `navigation.js` et `sitemap.xml` mis à jour (Conseils d'Écoute : 7 → 8 pages).

Total après ce lot : **97 pages thématiques**, 3 restantes pour atteindre 100.

---

*Dernière mise à jour : 2026-08-08, écouter de la musique sous l'eau (§44).*

---

## 45. Quiz musical années 80 (2026-08-08)

Le propriétaire a fait remarquer que les quiz musicaux sont très populaires, et que les années 80 y sont particulièrement plébiscitées. Angle retenu : plutôt qu'un quiz générique, s'appuyer sur les vrais artistes/titres années 80 déjà présents dans le catalogue de programmation (cohérent avec la philosophie §1 "le long traîne défendable" — données réelles et vérifiables plutôt que trivia générique).

**`quiz-musical-annees-80.html`** (Musique & Énergie) — premier contenu **interactif** du site hors outil de cohérence cardiaque. 10 questions "qui chante ce titre", chacune avec 4 choix réels du catalogue (Simple Minds, Queen, Wham!, Madonna, Phil Collins, Bananarama, Vanessa Paradis, Jean-Jacques Goldman, Michael Jackson, Kylie Minogue, plus des distracteurs de la même époque). Chaque titre/artiste vérifié individuellement pour son exactitude historique (année de sortie réellement années 80) avant inclusion — plusieurs titres du catalogue écartés du quiz car hors-période malgré l'artiste "années 80" (ex. Michael Jackson "Don't Stop 'Til You Get Enough" est 1979, pas retenu ; Sting "Fields of Gold" est un remix d'un titre 1993, pas retenu comme titre correct).

**Implémentation technique** : JS vanille autonome (`<script is:inline>`, IIFE), pas de dépendance externe ni de framework. Flux question par question avec bouton "Question suivante", feedback visuel immédiat (vert/rouge), score et verdict personnalisé à la fin, bouton "Recommencer" (rechargement de page).

**Vérification approfondie, au-delà du build habituel** : les 17 slugs d'artistes référencés dans le quiz (corrects + distracteurs) vérifiés un par un contre les fiches réellement générées. Logique JS testée en conditions réelles dans le navigateur via exécution de script : parcours complet des 10 questions avec réponses correctes → score 10/10 et bon message de verdict affichés ; test d'une réponse fausse → bouton rouge sur le choix erroné, vert sur le bon choix, tous les boutons désactivés, bouton suivant révélé. Les deux chemins fonctionnent comme attendu.

**Maillage** : lien réciproque avec `radio-annees-80-en-ligne.html`.

**Vérifié après build (201 pages, aucune erreur)** : meta description à 147 caractères, canonical correct, `FAQPage` présent, aucun lien cassé. `navigation.js` et `sitemap.xml` mis à jour (Musique & Énergie : 19 → 20 pages).

Total après ce lot : **98 pages thématiques**, 2 restantes pour atteindre 100.

---

*Dernière mise à jour : 2026-08-08, quiz musical années 80 (§45).*

---

## 46. Correction du quiz années 80 + chansons les plus écoutées au monde (2026-08-08)

**Bug signalé sur le quiz (§45)** : le propriétaire a testé la page et signalé qu'un clic sur une réponse à la question 1 ne semblait rien déclencher. Diagnostic : le code fonctionnait correctement (vérifié par exécution de script dans le navigateur — clic direct sur un bouton déclenche bien le changement de classe, la désactivation des boutons et l'affichage du bouton suivant), mais le seul retour visuel était une bordure/fond qui change de couleur, facilement manqué, sans avancée automatique — il fallait remarquer et cliquer un second bouton "Question suivante" apparu discrètement. Cause la plus probable : un problème de perception plutôt qu'un vrai bug JS.

**Corrections apportées, qu'il s'agisse d'un vrai bug ou d'un problème de perception** :
- Icône ✅/❌ + phrase de retour explicite ("Bonne réponse !" / "Raté, la bonne réponse était surlignée en vert.") sur chaque réponse, impossible à manquer.
- Avancée automatique après 1,6 seconde (le bouton "Question suivante" reste disponible pour ne pas attendre, et annule bien le minuteur s'il est cliqué avant).
- Script protégé par un `DOMContentLoaded` (garde-fou supplémentaire, coût nul).
- **Amélioration demandée en même temps** : ordre des 10 questions mélangé aléatoirement à chaque chargement de la page (Fisher-Yates côté client), plutôt que toujours dans le même ordre.

**Vérification approfondie avant republication** : parcours complet des 10 questions par exécution de script asynchrone (attente du délai d'avancée automatique entre chaque clic) → score 10/10 et verdict correct affichés ; test du bouton "suivant" manuel qui annule bien le minuteur (pas de double avancée) ; 3 rechargements successifs confirmant un ordre différent à chaque fois.

---

**Nouvelle page proposée par le propriétaire, capture d'écran à l'appui** : "les 10 chansons les plus écoutées au monde" apparaît en tête des résultats Google pour "musique" (Aperçu IA) — une vraie requête à fort volume. Angle retenu : ne pas se contenter de copier les chiffres de la capture fournie, mais les **vérifier indépendamment** par recherche web avant publication (3 recherches croisées : Wikipédia/liste des records Spotify, ChartMasters/RouteNote, VisualCapitalist — les trois sources convergent exactement sur le même top 8 et les mêmes chiffres, donnée fiable au 1er juin 2026).

**`chansons-les-plus-ecoutees-au-monde.html`** (Musique & Énergie) — publie un **Top 8 confirmé** plutôt qu'un top 10 forcé : les positions 9-10 n'ont pas pu être vérifiées de façon fiable (classement trop volatile après la 8e place selon les sources), donc volontairement omises plutôt qu'inventées. Point fort de la page, vérifié titre par titre contre `src/data/artists.js` : **4 des 8 titres du classement mondial sont réellement diffusés sur Radio Odyssey** — Shape of You (Ed Sheeran), Starboy (The Weeknd), As It Was (Harry Styles), Someone You Loved (Lewis Capaldi), tous confirmés par correspondance exacte dans le tableau `tracks` de la fiche artiste correspondante. Note : The Weeknd est bien dans le catalogue mais son titre le plus streamé au monde ("Blinding Lights") n'y figure pas — seul "Starboy" y est présent ; la page ne prétend donc pas que "Blinding Lights" passe sur l'antenne.

**Maillage** : lien réciproque avec `titres-les-plus-diffuses-sur-radio-odyssey.html` (classement mondial vs classement réel sur l'antenne, bien distingués).

**Vérifié après build (202 pages, aucune erreur)** : meta description à 134 caractères, canonical correct, `Article` + `FAQPage` présents, aucun lien cassé, rendu testé dans le navigateur sans erreur console. `navigation.js` et `sitemap.xml` mis à jour (Musique & Énergie : 20 → 21 pages).

Total après ce lot : **99 pages thématiques**, 1 restante pour atteindre 100.

---

*Dernière mise à jour : 2026-08-08, correction du quiz + chansons les plus écoutées au monde (§46).*

---

## 47. Round bonus du quiz + correction Blinding Lights (2026-08-08)

**Round bonus demandé par le propriétaire** : un score parfait de 10/10 sur le quiz années 80 (§45-46) débloque désormais 10 questions bonus, pour un score final possible sur 20. 10 nouveaux titres réels ajoutés, vérifiés individuellement pour leur exactitude historique (même rigueur que le round principal) : Indochine "La Belle et la Bête" (1986), Simple Minds "Alive And Kicking" (1985), Michael Jackson "The Way You Make Me Feel" (1987), Queen "Radio Ga Ga" (1984) et "A Kind Of Magic" (1986), Wham! "Everything She Wants" (1984), Bananarama "Shy Boy" (1982) et "Na Na Hey Hey" (1983), Sade "The Sweetest Taboo" (1985), Phil Collins "You Can't Hurry Love" (1982). Plusieurs titres candidats écartés pour manque de rigueur historique (Earth Wind & Fire "September" est 1978, pas 80s ; Jamiroquai "Virtual Insanity" est 1996 malgré le groupe formé en 1990 ; "Invisible Touch" est crédité Genesis, pas Phil Collins solo — évité pour ne pas introduire une question discutable).

**Logique implémentée** : à la fin des 10 premières questions, si score = 10/10 exactement → écran "🎉 Score parfait !" avec deux boutons ("Tenter le bonus" / "Voir mon score") ; sinon → résultats directs sur 10 comme avant. Le round bonus utilise son propre ordre aléatoire (indépendant du round principal). Verdicts différenciés selon le score final est sur 10 ou sur 20.

**Testé de bout en bout dans le navigateur (3 scénarios)** : round imparfait (9/10) → pas de proposition de bonus, résultats directs ; round parfait + bonus accepté + 1 erreur en bonus → 19/20, bon verdict ; round parfait + bonus refusé → 10/10 avec message dédié ("vous auriez pu tenter le bonus").

---

**Correction factuelle signalée par le propriétaire** : "Blinding Lights" (The Weeknd) est bien diffusée sur Radio Odyssey — la fiche artiste ne le mentionnait pas (seuls "Can't Feel My Face", "Starboy", "I Feel It Coming", "Sacrifice" y figuraient). Ajouté à `src/data/artists.js` (source unique) et corrigé sur `chansons-les-plus-ecoutees-au-monde.html` (§46) : 5 titres du classement mondial sur 8 sont désormais confirmés diffusés sur l'antenne, au lieu de 4.

**Vérifié après build (202 pages, aucune erreur)** : tous les slugs d'artistes du quiz (19 au total, rounds principal + bonus) vérifiés contre les fiches réellement générées, comptage `data-correct` cohérent (20 vrai + 60 faux sur 20 questions × 4 choix), aucun lien cassé sur les deux pages modifiées.

---

*Dernière mise à jour : 2026-08-08, round bonus du quiz + correction Blinding Lights (§47).*

---

## 48. Quiz : un artiste = une question, dates entièrement revérifiées (2026-08-08)

Le propriétaire a signalé deux problèmes sur le quiz du §47 : (1) Queen, Bananarama et Simple Minds revenaient trop souvent comme bonne réponse à travers les deux rounds ; (2) plus grave, "La Belle et la Bête" d'Indochine n'est **pas** un titre des années 80 — recherche web effectuée, confirmé : c'est un single sorti le 6 décembre 2024, extrait de l'album *Babel Babel* (composé par Nicola Sirkis et Olivier Gérard). Une vraie erreur factuelle, pas une approximation.

**Réaction : revérification complète plutôt que correction ponctuelle.** Plutôt que de ne corriger que l'erreur signalée, chacun des 18 autres titres du quiz (rounds principal + bonus du §47) a été revérifié individuellement par recherche web (Wikipédia, Discogs, IMDb, Songfacts) : dates de sortie confirmées exactes pour Simple Minds, Queen (I Want To Break Free/Radio Ga Ga/A Kind Of Magic), Wham! (Wake Me Up Before You Go-Go/Everything She Wants), Madonna, Phil Collins (Two Hearts/You Can't Hurry Love), Bananarama (Cruel Summer/Shy Boy/Na Na Hey Hey), Vanessa Paradis, Jean-Jacques Goldman, Michael Jackson (Billie Jean/The Way You Make Me Feel), Kylie Minogue, Sade. Seul Indochine était faux.

**Conséquence assumée sur la taille du quiz** : en appliquant strictement "un artiste = une question" (demande du propriétaire) sur les catalogues vérifiés 80s réels, le nombre d'artistes distincts disponibles dans les 100 fiches du site tombe à **11**, pas 20. Plutôt que de forcer un chiffre rond avec des répétitions ou en réintroduisant une date approximative, le quiz est passé de 20 à **11 questions** (6 en round principal + 5 en round bonus, débloqué sur score parfait). La FAQ explique ce choix explicitement et annonce que le quiz s'enrichira à mesure que le catalogue d'artistes années 80 grandira.

**Vérifié après build (202 pages, aucune erreur)** : comptage des `data-correct="true"` par `data-slug` confirmant qu'aucun artiste n'apparaît deux fois (11 occurrences, 11 slugs distincts) ; parcours complet testé dans le navigateur pour le cas imparfait (5/6, pas de bonus proposé) et le cas parfait (bonus débloqué, 11/11 final) ; aucun lien cassé.

---

*Dernière mise à jour : 2026-08-08, quiz corrigé — un artiste par question, dates revérifiées (§48).*

---

## 49. 9 fiches artistes années 80 supplémentaires, quiz restauré à 10+10 (2026-08-08)

Le §48 avait réduit le quiz à 11 questions, faute d'assez d'artistes années 80 vérifiés dans le catalogue de 100 fiches pour respecter la règle "un artiste = une question". Le propriétaire (expert radio) a fourni 9 artistes/titres supplémentaires réellement diffusés sur l'antenne, en précisant que certains sont "plus difficiles à trouver" — matière idéale pour le round bonus.

**Vérification systématique avant intégration** (même rigueur qu'au §48, après l'erreur Indochine) : les 9 titres ont été vérifiés un par un par recherche web (Wikipédia, Discogs, IMDb) avant toute création de fiche. Tous confirmés authentiquement années 80 :
- Muriel Dacq — *Tropique* (1986, chanteuse belge, disque d'argent en France)
- Élégance — *Vacances j'oublie tout* (1982, plus d'un million d'exemplaires vendus)
- Baltimora — *Tarzan Boy* (1985, italo-disco, chanteur Jimmy McShane)
- Fun Fun — *Colour My Love* (1984, duo italo-disco italien)
- Modern Talking — *You're My Heart, You're My Soul* (1984, duo allemand)
- Kim Wilde — *Cambodia* (1981, Royaume-Uni — orthographe correcte "Kim", pas "Kym" comme suggéré)
- Scotch — *Take Me Up* (1985, italo-disco)
- A-ha — *Take On Me* (1984/85, Norvège)
- Shalamar — *A Night To Remember* (1982, funk/R&B américain)

**9 nouvelles fiches créées dans `src/data/artists.js`** (source unique) — génèrent automatiquement 9 pages `/artiste-X.html` via la route dynamique `artiste-[slug].astro` existante, sans autre code à toucher. `sitemap.xml` mis à jour en conséquence (+9 URLs).

**Quiz restauré à sa taille prévue** : avec ces 9 nouveaux artistes + les 11 déjà vérifiés au §48, le catalogue compte maintenant 20 artistes années 80 distincts vérifiés — le quiz repasse à **10 questions en round principal** (tubes très connus internationalement : Michael Jackson, Queen, Wham!, Madonna, A-ha, Modern Talking, Kim Wilde, Bananarama, Kylie Minogue, Simple Minds) **+ 10 questions bonus** (titres plus difficiles à trouver : Phil Collins, Vanessa Paradis, Jean-Jacques Goldman, Sade, Muriel Dacq, Élégance, Baltimora, Fun Fun, Scotch, Shalamar), toujours strictement une question par artiste sur l'ensemble.

**Vérifié après build (211 pages, +9 vs §48, aucune erreur)** : les 9 nouvelles fiches artistes générées et vérifiées individuellement ; comptage des 20 `data-correct="true"` par `data-slug` confirmant zéro doublon ; aucun lien cassé sur la page quiz ; parcours complet testé dans le navigateur en deux temps (contrainte de timeout du test) — round principal 10/10 → offre de bonus affichée → round bonus 10/10 → score final 20/20 avec le verdict "Score absolument parfait, sur les deux rounds !".

---

*Dernière mise à jour : 2026-08-08, 9 fiches artistes années 80 + quiz restauré à 10+10 (§49).*

---

## 50. Quiz musical années 90 (2026-08-09)

Le propriétaire a demandé un second quiz sur le même modèle que celui des années 80 (§45-49), cette fois sur les années 90, en proposant de croiser "les 20 artistes marquants des années 90" avec le catalogue réel de Radio Odyssey.

**Méthode appliquée, identique au processus validé pour les années 80** : passage en revue systématique des tracks déjà présents dans `src/data/artists.js` pour repérer des titres plausiblement 90s, puis **vérification individuelle par recherche web de chaque candidat avant toute inclusion** (leçon tirée de l'erreur Indochine du §48). Plusieurs pistes prometteuses écartées après vérification : "Je te donne" de Jean-Jacques Goldman est en réalité de 1985 (pas 1990), "I Heard a Rumour" de Bananarama est de 1987, tout le catalogue Craig David et Bob Sinclar disponible est des années 2000, "Bouquet Final" de Vanessa Paradis est un titre de 2025, et les autres titres d'Indochine listés sont tous très récents (2024-2026).

**16 artistes trouvés et vérifiés dans le catalogue existant** ; le propriétaire a complété les 4 derniers avec Robert Miles (*Children*, 1995), Gala (*Freed From Desire*, 1996), M People (*Moving On Up*, 1993) et Corona (*The Rhythm Of The Night*, 1993) — les 4 également vérifiés par recherche web avant intégration.

**Structure identique au quiz années 80** : `quiz-musical-annees-90.html` (Musique & Énergie), 10 questions en round principal (tubes très connus internationalement : Michael Jackson, Céline Dion, U2, Daft Punk, Elton John, Corona, Robert Miles, Christina Aguilera, Jennifer Lopez, Jamiroquai) + 10 questions bonus débloquées sur score parfait (titres plus difficiles à trouver : Mylène Farmer, Simply Red, Sade, Zazie, Sting, Moby, Robbie Williams, Dario G, Gala, M People) — toujours une seule question par artiste sur l'ensemble des 20. Note technique : pour Elton John et Sting, le catalogue ne crédite qu'une version remixée récente du titre (respectivement "Can You Feel The Love Tonight (Remix)" et "Fields Of Gold (Andrew Cerrone Remix)") — l'année vérifiée est celle de la composition originale par le même artiste, cohérent avec le traitement déjà appliqué à Phil Collins au §48.

**4 nouvelles fiches artistes créées** (Robert Miles, Gala, M People, Corona) dans `src/data/artists.js`, générant automatiquement leurs pages `/artiste-X.html`. Lien réciproque ajouté avec `quiz-musical-annees-80.html`.

**Vérifié après build (216 pages, +5 vs §49, aucune erreur)** : les 4 nouvelles fiches générées et vérifiées ; comptage des 20 `data-correct="true"` par `data-slug` confirmant zéro doublon ; aucun lien cassé ; parcours complet testé dans le navigateur en trois temps (contrainte de timeout) — round principal 10/10 → bonus proposé → round bonus 10/10 → score final 20/20, verdict "Score absolument parfait, sur les deux rounds !". `navigation.js` et `sitemap.xml` mis à jour (Musique & Énergie : +1 page).

---

*Dernière mise à jour : 2026-08-09, quiz musical années 90 (§50).*

---

## 51. Quiz musical années 2000, et série complète prévue jusqu'aux années 2020 (2026-08-09)

Le propriétaire a proposé d'étendre la série de quiz à toutes les décennies restantes (2000, 2010, 2020), en la présentant explicitement comme un jeu gratuit sans enjeu ("juste pour jouer, pas de gain à part l'amusement"), cohérent avec l'esprit bien-être de la radio. Plan retenu : une décennie à la fois, même méthode de vérification systématique que pour les années 80/90.

**Même méthode, même rigueur** : passage en revue du catalogue pour repérer des titres plausiblement sortis dans les années 2000, vérification individuelle par recherche web de chaque candidat. Pistes écartées après vérification : "Reflet" de M. Pokora et "Me Enamore" de Ridsa sont tous deux de 2025, "Some Kind Of Kiss" de Sound Of Legend est de 2023, "Paris-Seychelles" de Julien Doré est en réalité de 2013 (candidat noté pour le futur quiz années 2010).

**18 artistes trouvés et vérifiés dans le catalogue existant** ; le propriétaire a complété les 2 derniers avec Anastacia (*I'm Outta Love*, 2000) et Modjo (*Lady (Hear Me Tonight)*, 2000) — également vérifiés par recherche web.

**Structure identique aux deux quiz précédents** : `quiz-musical-annees-2000.html` (Musique & Énergie), 10 questions en round principal (tubes très connus internationalement : Beyoncé, Rihanna, Lady Gaga, Christina Aguilera, Shakira, Alicia Keys, Amy Winehouse, The Black Eyed Peas, Kylie Minogue, Maroon 5) + 10 questions bonus débloquées sur score parfait (titres plus difficiles à trouver : Craig David, Robbie Williams, Sting, Amy Macdonald, Charlie Winston, Christophe Willem, Moby, Bob Sinclar, Anastacia, Modjo) — toujours une seule question par artiste sur l'ensemble des 20.

**2 nouvelles fiches artistes créées** (Anastacia, Modjo) dans `src/data/artists.js`. Lien réciproque ajouté avec `quiz-musical-annees-90.html`.

**Fausse alerte pendant la vérification** : le script de contrôle "aucun artiste ne revient deux fois" signalait 19 slugs au lieu de 20 — cause : la regex de vérification (`[a-z-]+`) excluait les chiffres, ratant "maroon-5". Corrigé (`[a-z0-9-]+`), confirmé 20 slugs distincts. Bug de la vérification elle-même, pas du quiz — noté pour éviter de le reproduire sur les prochains quiz de la série.

**Vérifié après build (219 pages, +3 vs §50, aucune erreur)** : meta description ramenée de 162 à 148 caractères, aucun lien cassé, parcours complet testé dans le navigateur en trois temps — score final 20/20 confirmé.

---

*Dernière mise à jour : 2026-08-09, quiz musical années 2000 (§51).*

---

## 52. Quiz musical années 2010 (2026-08-09)

Troisième quiz de la série. Cette fois, **les 20 artistes existaient déjà dans le catalogue** — aucune nouvelle fiche artiste nécessaire, contrairement aux trois quiz précédents.

**Piège évité par la vérification systématique** : "As It Was" de Harry Styles semblait un candidat naturel pour ce quiz (l'artiste et sa fiche sont bien dans le catalogue), mais la recherche web a montré que le titre est sorti le 1ᵃᵉʳ avril **2022** — réservé au futur quiz années 2020, pas utilisé ici.

**20 artistes trouvés et vérifiés directement dans le catalogue existant**, sans besoin de solliciter le propriétaire cette fois. Round principal (tubes très connus internationalement) : Ed Sheeran (Shape of You, 2017), Sia (Chandelier, 2014), Rihanna (We Found Love, 2011), David Guetta (Titanium, 2011), Taylor Swift (Cruel Summer, 2019), Dua Lipa (Don't Start Now, 2019), Calvin Harris (This Is What You Came For, 2016), Avicii (Wake Me Up, 2013), Shawn Mendes (There's Nothing Holdin' Me Back, 2017), Lewis Capaldi (Someone You Loved, 2018). Round bonus (scène dance/électro franco-belge, plus discrète) : Robin Schulz (Sugar, 2015), Stromae (Papaoutai, 2013), Ofenbach (Be Mine, 2016), Kungs (This Girl, 2016), Jain (Makeba, 2015), The Avener (Fade Out Lines, 2014), Clean Bandit (Rockabye, 2016), Ava Max (Sweet But Psycho, 2018), Lost Frequencies (Are You With Me, 2014), DJ Snake (Loco Contigo, 2019).

**Maillage** : lien réciproque ajouté avec `quiz-musical-annees-2000.html`.

**Vérifié après build (220 pages, +1 vs §51, aucune erreur)** : comptage des 20 `data-correct="true"` par `data-slug` (regex corrigée) confirmant zéro doublon, tous les slugs vérifiés contre les fiches réellement générées, aucun lien cassé, parcours complet testé dans le navigateur — score final 20/20 confirmé.

---

*Dernière mise à jour : 2026-08-09, quiz musical années 2010 (§52).*

---

## 53. Quiz musical années 2020 — série des 5 décennies complète (2026-08-09)

Cinquième et dernier quiz de la série (proposée par le propriétaire comme jeu gratuit sans enjeu, cohérent avec l'esprit bien-être de la radio — voir §51). Avec ce quiz, la série couvre désormais les années 80, 90, 2000, 2010 et 2020, soit 100 questions vérifiées au total (5 × 20).

**Piège confirmé, symétrique à celui du §52** : "As It Was" de Harry Styles, écarté du quiz années 2010 après vérification (sorti en 2022), trouve ici sa place naturelle.

**20 artistes vérifiés, tous déjà présents dans le catalogue** — aucune nouvelle fiche nécessaire. Point notable : plusieurs titres écartés des quiz précédents pour être "trop récents" (M. Pokora *Reflet*, Ridsa *Me Enamore*, R3HAB *In My Head*, tous 2025 ; Sound Of Legend *Some Kind Of Kiss*, 2023) retrouvent ici un usage légitime, la décennie 2020 étant justement en cours.

Round principal (tubes très connus internationalement) : Harry Styles (As It Was, 2022), Sabrina Carpenter (Espresso, 2024), Teddy Swims (Lose Control, 2023), Miley Cyrus (Flowers, 2023), Bruno Mars (Die With A Smile, 2024), The Weeknd (Sacrifice, 2022), Doja Cat (Paint The Town Red, 2023), Benson Boone (In The Stars, 2022), Karol G (Si Antes Te Hubiera Conocido, 2024), Ed Sheeran (Azizam, 2025). Round bonus (nouveautés francophones et scène dance/électro, plus discrètes) : Ava Max (Kings & Queens, 2020), Damiano David (The First Time, 2025), Djo (End Of Beginning, 2022/2024), Aya Nakamura (Baddies, 2025), Angèle (Bruxelles je t'aime, 2021), Alex Warren (Ordinary, 2025), M. Pokora (Reflet, 2025), Ridsa (Me Enamore, 2025), R3HAB (In My Head, 2025), Sound Of Legend (Some Kind Of Kiss, 2023).

**Maillage** : lien réciproque ajouté avec `quiz-musical-annees-2010.html`, complétant la chaîne de navigation 80 → 90 → 2000 → 2010 → 2020.

**Vérifié après build (221 pages, +1 vs §52, aucune erreur)** : comptage des 20 `data-correct="true"` par `data-slug` confirmant zéro doublon, tous les slugs vérifiés contre les fiches réellement générées, aucun lien cassé, parcours complet testé dans le navigateur — score final 20/20 confirmé.

**Bilan de la série (§45-53)** : 5 quiz, 100 questions vérifiées individuellement par recherche web (2 erreurs détectées et corrigées en cours de route : Indochine "La Belle et la Bête" à tort daté années 80 alors que sorti en 2024 ; Bananarama "I Heard A Rumour" initialement daté 1991 alors que sorti en 1987), 13 nouvelles fiches artistes créées au total sur l'ensemble de la série (Baltimora, Fun Fun, Modern Talking, Kim Wilde, Scotch, A-ha, Shalamar, Muriel Dacq, Élégance, Robert Miles, Gala, M People, Corona, Anastacia, Modjo — soit 15 noms, dont 2 doublons de comptage : Muriel Dacq et Élégance appartiennent au même lot que Baltimora etc. au §49).

---

## 54. Correction d'un bug général sur les 5 quiz : la bonne réponse revenait toujours à la même position (2026-08-09)

Le propriétaire a signalé que, dans le round bonus du quiz années 90, la bonne réponse était systématiquement la 4ᵉ proposition — et a demandé de vérifier les autres quiz (80, 2010).

**Diagnostic** : le bug touchait bien les 5 quiz de la série, pas seulement celui signalé. Cause — le script mélange aléatoirement (Fisher-Yates) l'**ordre des questions** à chaque chargement, mais jamais l'ordre des 4 réponses *à l'intérieur* d'une question ; or les fiches `mainQuestions`/`bonusQuestions` ont quasi systématiquement été rédigées avec la bonne réponse écrite en dernier dans le tableau `choices`. Vérification par script sur les 5 fichiers : le round bonus est à **100% en position 4** sur les 5 quiz (80, 90, 2000, 2010, 2020) ; le round principal est également biaisé, moins uniformément (ex. années 80 : 2,4,4,1,4,4,4,4,4,4).

**Correctif appliqué identiquement sur les 5 fichiers** (`quiz-musical-annees-80/90/2000/2010/2020.astro`) : une fonction `shuffleChoices(qEl)` mélange désormais l'ordre des boutons de réponse dans le DOM (Fisher-Yates, ré-append en ordre mélangé) au moment où chaque question est câblée (`wireQuestion`), donc à chaque chargement de page, indépendamment du mélange déjà existant sur l'ordre des questions. Le clic reste basé sur l'attribut `data-correct` de chaque bouton, donc totalement indépendant de sa position — aucun autre changement de logique nécessaire.

**Vérifié après build (221 pages, aucune erreur)** : script de contrôle sur le quiz années 90 confirmant une distribution variée des positions à chaque rechargement (ex. bonus : 3,4,3,1,4,2,4,4,3,3 sur un rechargement, 1,1,4,2,4,1,1,4,3,2 sur un autre) ; parcours réel testé dans le navigateur (build statique servi localement) — clic sur la bonne réponse en position 4 déclenche bien l'avancée automatique avec le bon retour visuel, clic sur une mauvaise réponse déclenche bien le retour rouge + surlignage vert de la bonne réponse, quelle que soit sa position.

---

## 55. Audit externe à 360°, et le lot de corrections qui en découle (2026-08-09)

Le propriétaire a demandé un audit complet du dispositif (site, PWA, réseaux, distribution) sous forme de comité d'experts — marketing, community management, design, SEO senior, médias. Rapport livré en deux versions : une première établie par mesure externe, une seconde corrigée après lecture du code source et réception des données d'audience.

**Quatre constats de la v1 se sont révélés faux** et méritent d'être consignés, parce qu'ils illustrent des pièges de méthode :

- « GA4 chargé sans consentement » — **faux**. `CookieConsent.astro` ne charge `gtag.js` qu'après acceptation explicite, avec « Refuser » à parité visuelle. L'erreur venait d'une mesure faite dans un navigateur où le consentement était déjà mémorisé, doublée d'une confusion entre la *définition* de la fonction `gtag` dans le source et son *exécution*.
- « Page Facebook = profil personnel » — **faux**. L'URL en `profile.php?id=` est aussi celle des Pages professionnelles depuis la « nouvelle expérience Pages » de Meta.
- « `sameAs` absent » — **faux**, il existait sur `RadioStation` ; il manquait seulement sur `Organization`.
- « Aucun événement mesuré » — **faux**, `play_click`, `play_started` et `play_error` existaient déjà.

**Deux préconisations irrecevables**, signalées par le propriétaire : Radioplayer France est réservé aux radios professionnelles disposant d'une fréquence FM ; Radio Garden ne répond plus depuis des mois. Remplacées par **Radio Browser** (`api.radio-browser.info`), base communautaire libre qui alimente des dizaines d'applications tierces — inscription faite le jour même. Un doublon a été créé au passage (la base ne dédoublonne pas par URL de flux, contrairement à l'hypothèse retenue) : un ticket GitLab demande la suppression de `ad2349a3-eaec-4065-a624-0845e03f48e9`, la fiche à conserver étant `c3d37147-cc64-4f54-b8b3-b7b6b8b099f5`.

**Migration Mobirise achevée.** L'ancien site `radio-odyssey.mobirisesite.com` était toujours en ligne, sa page d'accueil en `index, follow` avec un canonical auto-référent, et occupait la position n°1 sur « radio cohérence cardiaque en ligne gratuite » — devant le vrai site. Elle contenait aussi six faux témoignages (dont un nommé « Perferendis Animi », du lorem ipsum resté en place), du texte de gabarit Mobirise, et une date de création erronée (2024 au lieu de 2025). La version gratuite de Mobirise n'autorisant pas les redirections 301, la solution retenue est un `meta refresh` instantané doublé d'un `canonical` pointant vers la page équivalente — traité par Google quasiment comme une 301, à condition de **ne pas y ajouter de `noindex`**, qui annulerait le transfert de signaux. **15 URL sur 16 redirigent** ; la seizième (`/Radio-annees-80-en-ligne.html`, avec un R majuscule) est un fichier orphelin devenu inaccessible dans l'éditeur.

**Corrections de code appliquées** (commit `f314a64`) :

- **Titles des 115 fiches artistes** : le gabarit `« [Artiste] : Remix Gratuit — Radio Odyssey »` promettait un téléchargement inexistant, sur des artistes comme Zazie ou Teddy Swims. Remplacé par `« [Artiste] : les titres diffusés — Radio Odyssey »`.
- **Lecteur RadioKing en charte** : `c=%231e7fcb` (bleu hérité de Mobirise) → `c=%237B2FBE`.
- **`sameAs` factorisé** dans une constante partagée, porté sur `Organization` en plus de `RadioStation`, et complété de 6 à 11 profils (ajout de Deezer, Orange, RadioLine, WeLoveRadio, MyTuner).
- **Grille horaire alignée sur 7 h** en sept endroits : le site annonçait « 6–9H La Matinale » et « 21H–6H Nuit », l'application « 7H–9H » et « 21H–7H ». Le site a été aligné sur l'application (`index.astro`, `navigation.js`, `DayScheduleNav.astro`, `musique-pour-le-reveil.astro`, `musique-pour-la-nuit.astro`).
- **4 redirections héritées** ajoutées à `vercel.json` : `/radio-bien-etre.html` (404 depuis des mois, pointée par l'ancien site), la variante à R majuscule, `/radio-remix-annees-80.html`, `/plan-du-site.html`.

**Données d'écoute obtenues** (RadioKing, 11 juillet – 9 août 2026) — elles manquaient totalement au pilotage jusqu'ici :

| Indicateur | Valeur |
|---|---|
| Durée totale | 725 h (− 36 % vs 30 j précédents) |
| Écoutes | 3 782 (− 26 %) |
| Durée moyenne | 11,5 min |
| Écoutes < 30 s | **35 %** — 58 % durent moins de 2 min |
| Par plateforme | site 8 min · appli **16 min** · Alexa 12 min · TuneIn 23 min · Welove 32 min |
| Supports | 60 % mobile · 10 % enceinte · 4 % bureau · **0 % voiture** |
| Fidélité | Algérie 5,8 écoutes/auditeur · France 2,6 · États-Unis 1,5 |

Le recul s'explique par la fin de campagnes Facebook (l'audience web s'effondre le 26 juillet). Umami montre par ailleurs que Google envoie 436 visiteurs sur 30 jours, mais que **toutes les pages éditoriales cumulées en reçoivent une vingtaine** — le trafic de recherche est un trafic de marque qui atterrit sur l'accueil. Les 221 pages n'ont pas encore commencé à travailler.

**Vérifié en production** : titles des fiches artistes, couleur du lecteur, `sameAs` à 11 profils, grille à 7 h, et redirection effective des 15 URL Mobirise, contrôlées une par une dans le navigateur.

---

## 56. Le site devient installable : service worker, hors-ligne, manifeste (2026-08-09)

Constat de l'audit : `www.radio-odyssey.com` n'enregistrait **aucun service worker**. Les trois conditions d'installabilité sont le manifeste, les icônes et un service worker — les deux premières étaient réunies, pas la troisième. Conséquence : un visiteur arrivé par Google sur une page thématique ne pouvait pas installer l'application ; il devait repérer un lien et changer de domaine. D'où l'écart entre 593 auditeurs sur le site et 81 sur l'appli.

**Fichiers créés** (commit `7008d53`) :

- **`public/sw.js`** — stratégies délibérément conservatrices. *Network-first* sur le HTML : la console d'édition publie souvent, une page en cache qui primerait sur la version en ligne serait un bug, pas une optimisation ; le cache ne sert que de filet. *Cache-first* sur les ressources à empreinte (`/_astro/`, polices, images) dont le nom change à chaque modification. *Stale-while-revalidate* sur le reste. **Aucune interception du cross-origin** : flux RadioKing, lecteur, Umami et GTM passent directement — les toucher ne pourrait que casser la lecture ou fausser la mesure. `CACHE_VERSION` à incrémenter manuellement.
- **`public/hors-ligne.html`** — page de repli entièrement autonome : CSS en ligne, aucune police ni image externe, pour s'afficher sans le moindre réseau. Se recharge seule au retour de la connexion.
- **`icon-192-maskable.png` / `icon-512-maskable.png`** — générées depuis le logo, replacé dans la zone de sécurité Android de 78 %, sur un fond dérivé du logo lui-même (agrandi puis flouté) pour éviter une bordure sombre disgracieuse.

**Fichiers modifiés** : `manifest.json` (ajout de `scope`, `display_override`, catégories, icônes maskables, 3 raccourcis) ; `Layout.astro` (enregistrement après l'événement `load`, pour ne pas concurrencer le démarrage du lecteur — avec 35 % d'écoutes sous 30 secondes, rien ne doit s'ajouter au chemin critique) ; `vercel.json` (`sw.js` en `max-age=0`, sinon une nouvelle version du worker ne parviendrait jamais aux navigateurs déjà installés) ; `robots.txt`.

**Vérifié en production** : service worker actif depuis une page profonde (`/radio-coherence-cardiaque.html`) et non seulement depuis l'accueil, cache `ro-v1-static` créé, page de repli en cache et lisible, lecteur et exercice de cohérence cardiaque intacts. **Testé sur iPhone** par le propriétaire : lancement en plein écran sans barre Safari, et page de repli affichée en mode avion avec wifi coupé.

**Limite connue** : la page de repli est plus pauvre que celle de `app.radio-odyssey.com`, qui garde l'exercice de cohérence cardiaque et le programme accessibles hors ligne. À rattraper avant la fusion.

---

## 57. Lecteur audio natif avec Media Session, en remplacement de l'iframe RadioKing (2026-08-09)

Le chantier identifié par l'audit comme le vrai déblocage d'audience. Deux raisons, dont une découverte en lisant le code.

**Une iframe ne peut pas déclarer de MediaSession.** C'est un document tiers : aucune commande sur l'écran verrouillé, en voiture via Bluetooth ou CarPlay, ni sur montre connectée. Pour une radio dont 60 % de l'écoute est mobile, c'est la fonction la plus structurante qui manquait.

**Et sur mobile, le site ne diffusait aucun son.** `roPlayNow` détectait le mobile et faisait `window.open('https://link.radioking.com/radio-odyssey')` : l'auditeur **quittait le site** pour une page RadioKing externe. Il ne lisait plus les pages, ne voyait plus le menu, ne pouvait plus être invité à installer quoi que ce soit.

**Créé** : `src/components/RadioPlayer.astro` — balise `<audio>` sur le flux direct (`listen.radioking.com/radio/706859/stream/772319`), bouton lecture/pause unifié mobile et ordinateur, titre en cours affiché **même à l'arrêt** (la barre annonce ce qui passe, ce qui est en soi une invitation), Media Session avec pochette, réinterrogation de l'API calée sur la fin réelle du morceau plutôt qu'à intervalle fixe. L'égaliseur décoratif ne s'anime plus que pendant la lecture — une onde qui bouge alors que rien ne joue était un mensonge visuel.

**Garde-fou indispensable** : `roPlayNow(event)` est appelée en `onclick` depuis **95 pages** et depuis `Sidebar.astro`. Son nom et sa signature sont donc conservés à l'identique ; seul le moteur change, la fonction déléguant à `window.roPlayerToggle`. Si le composant ne s'initialise pas, elle retombe sur l'ancien comportement plutôt que de laisser l'auditeur sans rien. De même, si la lecture native échoue (navigateurs intégrés Facebook et Instagram), le lecteur passe en mode secours et le clic suivant ouvre `link.radioking.com` — sans tentative d'ouverture immédiate, qu'un bloqueur de pop-up refuserait puisque le rejet arrive après le geste.

**Trois effets de bord corrigés dans le même lot** :

- `index.astro` et `PageHero.astro` réservaient **190 px** en haut de page pour compenser le débordement de l'iframe (35 px de `margin-top` + 145 px de hauteur réelle, contre 105 px déclarés). Sans iframe, cela aurait laissé un vide de 85 px sous la barre. Passés à `calc(var(--bar-h) + 20px)`.
- `WebviewBanner.astro` calculait sa position en mesurant l'iframe. Le code se dégradait correctement sans elle, mais son commentaire mentait : simplifié.
- Le script tiers `player.radioking.io/scripts/iframe.bundle.js` est supprimé — une dépendance de moins sur le chemin de rendu.

**Corrigé au passage** (commit `959e08a`, séparé) : la couleur du lecteur avait été mise en charte dans `Header.astro` au §55, mais pas dans l'URL de rechargement de `Footer.astro`. Le lecteur s'affichait en violet, puis **repassait au bleu dès le premier clic** sur ordinateur. La vérification du §55 regardait la page au repos, pas après interaction.

**Bilan de code** : 92 lignes supprimées pour 44 ajoutées, hors nouveau composant.

**Vérifié avant livraison** : syntaxe des trois scripts modifiés validée par `node --check`, aucune référence orpheline à l'iframe dans `src/`, cohérence CSS aux deux points de rupture. Le flux accepte un paramètre anti-cache et renvoie bien `audio/mpeg` ; l'API des titres est appelable depuis le domaine. La lecture réelle n'est pas testable en automatisation — elle exige un geste utilisateur authentique — d'où un test manuel indispensable après déploiement, et un `git revert` possible en une minute.

---

## 58. Première analyse d'audience horaire : deux publics, et le creux de midi expliqué (2026-08-09)

Premier travail d'analyse mené sur les données d'écoute réelles plutôt que sur le site. Point de départ : la question restée sans réponse depuis dix-neuf mois — **les séquences de cohérence cardiaque font-elles fuir les auditeurs ?** Dix-huit pages du site et toute la différenciation de la radio reposent sur l'hypothèse inverse, jamais vérifiée.

**Matière analysée** : 26 journées heure par heure (4 juillet – 8 août 2026), relevées sur les graphiques RadioKing, précision ±1 à 2 auditeurs. Les exports CSV de RadioKing ne descendent qu'au jour ; la granularité horaire n'est disponible qu'à l'écran, sur une journée à la fois.

### Ce que l'analyse ne pouvait pas prouver

Le premier croisement — heures avec séquence de 3 min contre heures avec séquence de 1 min contre heures sans — s'est révélé inexploitable : les trois groupes correspondent à des moments de journée différents (matin, après-midi, nuit), le confondant est total. Les comparaisons d'heures voisines montraient bien un motif (11h → 12h : −36 % ; 17h → 18h : −30 %), mais 12h et 18h sont les heures de repas, et trois minutes de séquence se diluent à 95 % dans un seau de soixante minutes.

### Ce qui a tranché : la comparaison semaine / week-end

Hypothèse proposée par le propriétaire : **les auditeurs écoutent au travail**. Testable, et testée en séparant les 15 jours ouvrés des 11 jours de week-end (médianes, robustes aux journées exceptionnelles comme le samedi 8 août et ses 63 auditeurs à 15h).

| | Semaine | Week-end |
|---|---|---|
| **Creux de midi** (11h+14h vs 12h+13h) | **+44 %** | **−12 %** |
| Matin 7h–8h | 3,5 | 2,5 |
| Midi 12h–13h | 5 | 9 |
| Après-midi 14h–17h | 9,2 | 6,5 |
| Soirée 18h–23h | 4,2 | 5 |

**Le creux de midi n'existe qu'en semaine — il s'inverse en pic le week-end.** Or les séquences tournent à l'identique sept jours sur sept. Si elles provoquaient ce creux, il apparaîtrait aussi le samedi.

**Conclusion : le creux de 12h–13h est la pause déjeuner, pas les séquences de cohérence cardiaque.** Cela ne démontre pas qu'elles sont sans effet, mais cela retire la seule pièce à conviction qui le suggérait. L'hypothèse du propriétaire est validée sur le matin (7h–8h nettement plus fort en semaine : rythme de trajet et de prise de poste) et sur le dimanche, plus mauvais jour de la semaine à 9,1 min par session contre 13,0 le samedi.

**Deux profils, deux publics.** En semaine : arrivée au bureau vers 8h, montée jusqu'à 11h, décrochage au déjeuner, longue plage d'après-midi jusqu'à 17h — le vrai pic —, chute à 18h au moment de rentrer. Le week-end : réveil tardif, midi en pic parce qu'on est chez soi, après-midi plus plat, soirée nettement plus soutenue. Écoute domestique, de fond.

### Le vendredi soir se comporte comme un week-end

Le propriétaire a précisé que la tranche **18h–minuit du vendredi, samedi et dimanche** suit déjà une grille distincte : rythme plus soutenu, suppression de la catégorie « Ça s'écoute » (easy listening), base de nouveautés renforcée avec d'anciennes nouveautés des décennies précédentes et des récurrents (nouveautés d'il y a quelques mois). Le vendredi était rangé en « semaine » dans le premier découpage, ce qui masquait l'effet.

| | Soirée 18h–minuit | Après-midi 14h–17h | Ratio soirée/après-midi |
|---|---|---|---|
| Lundi–jeudi (grille standard) | 3,8 | 9,6 | **0,40** |
| Vendredi (grille musclée) | 5,2 | 7,8 | **0,67** |
| Samedi–dimanche (grille musclée) | 5,0 | 6,5 | **0,77** |

Le ratio neutralise le niveau général de la journée. Le vendredi se place à mi-chemin, très loin des lundi-jeudi. **Deux explications indiscernables en l'état** : soit la grille musclée retient mieux, soit le vendredi soir est culturellement un soir de week-end quoi qu'on diffuse. Trois vendredis seulement dans l'échantillon — prudence.

### Trois enseignements pour la programmation

1. **La Matinale est mal calée.** Elle démarre à 7h (3 auditeurs) alors que l'audience de bureau arrive à 8h–9h et culmine à 11h (10 auditeurs). Météo, horoscope et trois séquences de 3 minutes sont investis sur l'heure la plus creuse de la journée éveillée.
2. **Le trou éditorial est à 15h–17h en semaine** — 9 à 11 auditeurs, le socle, et aucun rendez-vous nommé. Créer un format là plutôt que le matin toucherait cinq fois plus de monde pour le même travail.
3. **Le week-end mérite une grille complète, pas seulement le soir.** Midi y est le meilleur moment (9 contre 5 en semaine) et reçoit la programmation standard.

### Deux expériences proposées

- **Grille musclée le jeudi soir pendant un mois.** Si le ratio soirée/après-midi du jeudi passe de 0,40 vers 0,67, c'est la programmation qui agit ; s'il ne bouge pas, c'est le jour. Une seule variable change.
- **Retrait de la séquence de 13h pendant trois semaines**, en comparant l'évolution de 13h à celle de 14h restée inchangée. Seule méthode qui neutralise l'heure du repas, la saison et le jour de la semaine.

**Livrables** : `Radio-Odyssey-Note-Audience-2026-08-09.pdf` (note deux pages), deux graphiques PNG 200 dpi, et le CSV des 26 journées heure par heure avec les médianes — conservés hors dépôt, dans le dossier de travail du propriétaire.

**Limite assumée** : les valeurs horaires proviennent de relevés visuels sur les graphiques RadioKing. Les médianes sur 26 journées absorbent l'essentiel de l'imprécision, mais aucune conclusion ne doit reposer sur un écart de moins de deux auditeurs.

---

## 59. Correctifs de suivi : lecteur iOS, VideoObject, llms.txt, page de série des quiz (2026-08-10 au 12)

Série de correctifs courts, issus soit d'un signalement du propriétaire, soit d'une alerte Search Console.

**Bug du lecteur sur iPhone.** Après un arrêt puis une relance, le lecteur basculait en mode secours et ouvrait l'ancien player RadioKing ; il fallait quitter l'application pour retrouver un fonctionnement normal — signature d'un état en mémoire non réinitialisé. Cause : le démontage du flux (`removeAttribute('src')` + `load()`) émet un événement d'erreur différé, et iOS interrompt la relance avec une `AbortError`. Or `echec()` traitait **toute** erreur comme définitive. Cinq garde-fous ajoutés : `AbortError` ignorée, drapeau `enArret` pour neutraliser l'erreur du démontage, `modeSecours` annulé dès qu'une lecture aboutit, expiration du mode secours après 60 s, et minuteur de 12 s qui revient au repos avec « Connexion trop lente — réessayer » plutôt que de basculer vers RadioKing. Nouvel événement Umami `play_timeout`. **Confirmé corrigé par le propriétaire.**

**`VideoObject` sans `uploadDate`.** La Search Console signalait « 1 élément non valide » sur `radio-coherence-cardiaque.html`. La date a été relevée sur la fiche YouTube de la vidéo (29 juin 2026, 05:34:44) plutôt qu'inventée. Ajout de `uploadDate`, `duration` (PT3M21S), `contentUrl` et `inLanguage` dans `PartnerVideo.astro` — donc correction simultanée sur les trois pages qui utilisent ce composant. La page restait indexée : seul le résultat enrichi vidéo était bloqué.

**Première citation dans un Aperçu IA de Google.** Sur « web radio quiz années 80 », Radio Odyssey est cité aux côtés de Maxi 80 et Nostalgie, avec une description exacte (« quiz musical interactif de 10 questions »). Sur « web radio quiz années 90 », en revanche, pas de citation dans l'Aperçu mais **première position organique**. Différence analysée : sur les années 80 l'IA disposait d'une phrase autonome décrivant l'offre ; sur les années 90 elle a structuré sa réponse en « webradios » d'un côté et « quiz » de l'autre, et la position hybride de Radio Odyssey — une webradio *qui propose* un quiz — n'entrait dans aucune des deux cases.

**`llms.txt` enrichi** de 20 à 28 URL : les cinq quiz, absents alors que ce sont eux qui font citer le site, et les trois pages de classement d'antenne (données de première main). Précision consignée : `llms.txt` n'est pas un standard utilisé par Google — il sert ChatGPT, Claude et Perplexity, pas l'Aperçu IA.

**Page de série des quiz** — `/quiz-musicaux-radio-odyssey.html`, 752 mots. Elle répond à « quels quiz existent ? », question qu'aucune des cinq pages ne traitait, chacune répondant plutôt à « teste-moi ». Balisage `ItemList` de 5 éléments pour décrire explicitement la collection. Maillage réciproque : entrée au menu, sitemap, `llms.txt`, et lien retour depuis les cinq quiz.

**Côté application** (dépôt séparé, déployé par `npx vercel --prod`, sans remote git) : Umami basculé de `cloud.umami.is` vers `eu.umami.is` pour partager le point d'entrée du site, `canonical` vers `app.radio-odyssey.com`, URL Facebook personnalisée. Une tentative de redirection des URL `.vercel.app` via `vercel.json` a échoué deux fois — la condition `has: host` ne s'est pas déclenchée, ni en égalité stricte ni en expression régulière. Fichier retiré. **La voie fiable est le réglage Deployment Protection de l'interface Vercel**, pas une règle écrite à l'aveugle depuis un environnement qui n'a accès ni aux journaux ni à la configuration.

---

## 60. Réduction des menus : 41 % de HTML en moins, ratio de contenu unique multiplié par 1,65 (2026-08-13)

Le chantier identifié comme le plus lourd de l'audit (§55). Jusqu'ici, `MegaNav.astro` (desktop) et le panneau latéral de `Header.astro` (mobile) rendaient chacun **l'intégralité des 91 pages** de `NAV_CATEGORIES`, soit 182 entrées de menu par page HTML.

**Modification** : les deux menus n'affichent plus que les `MENU_APERCU` premières pages de chaque catégorie (constante fixée à 5 dans `navigation.js`), suivies d'un lien « Voir les N pages de la catégorie → » qui annonce explicitement le volume. Pour changer les pages mises en avant, il suffit de réordonner le tableau `pages` de la catégorie — aucun champ supplémentaire à maintenir.

**Contrepartie indispensable** : création de `/plan-du-site.html`, qui liste l'exhaustivité — les 91 pages thématiques par catégorie, les 115 fiches artistes triées alphabétiquement, les fiches découvertes, les pages légales. Lié une seule fois, depuis le pied de page présent sur les 223 pages. C'est le seul endroit du site où les fiches artistes sont listées exhaustivement.

**Gains mesurés** (build complet avant/après, 225 fichiers HTML comparés) :

| | Avant | Après | |
|---|---|---|---|
| Poids HTML moyen | 234 Ko | **138 Ko** | − 41 % |
| Liens par page | 274 | **161** | − 41 % |
| Mots de gabarit | 1 759 | **879** | − 50 % |
| Ratio de contenu unique | 18,7 % | **30,9 %** | **× 1,65** |
| Poids total du site | 51,3 Mo | **30,1 Mo** | − 21,1 Mo |

L'effet est le plus net sur les pages les plus fines : `ecouter-radio-odyssey-en-voiture.html` passe de 13,6 % à 24,1 % de contenu unique, `artiste-madonna.html` de 16,4 % à 28,3 %.

**Vérifications** — build compilé dans une copie isolée du projet avec dépendances Linux, pour ne pas altérer le `node_modules` macOS du propriétaire : 223 pages, aucune erreur. Analyse exhaustive des liens internes du `dist` : **aucun lien cassé**, deux pages sans lien entrant (`console.html` et `hors-ligne.html`, ce qui est voulu), et surtout **aucune page ne dépend uniquement du plan du site** — chacune conserve des liens entrants depuis son hub de catégorie et les blocs « Pages associées ». Ce dernier point était le vrai risque du chantier.

**Détails** : classe `.nav-link-hub` ajoutée au CSS pour distinguer le lien de catégorie dans le panneau mobile ; paramètre de version de `style.css` incrémenté en `?v=20260813a` afin de forcer le rafraîchissement des caches navigateur et CDN.

**Reste à faire sur ce sujet** : la navigation pèse encore 71 Ko sur une page de 155 Ko, soit 46 %, essentiellement à cause des icônes SVG rendues en ligne à chaque entrée. Les remplacer par des symboles `<use>` référençant un sprite unique diviserait encore ce poids — chantier non entrepris.

---

## 61. Silo artistes : désindexation ciblée, croisement avec les quiz, classement réel (2026-08-13)

Dernier des trois chantiers lourds de l'audit (§55). Le plan initial — « enrichir 25 fiches, `noindex` sur les 90 autres, créer des pages d'agrégation » — a été **révisé après examen des données**, sur trois points.

**Les pages d'agrégation existaient déjà.** Six pages couvrent le sujet : artistes diffusés, artistes féminines, styles musicaux, tubes dance, titres les plus diffusés, découvertes. Rien à créer.

**Le critère « les 25 qui font du trafic » était inapplicable.** Aucune fiche artiste ne reçoit de trafic organique (le site entier plafonne à ~15 visiteurs par semaine, §58), et la Search Console ne permet donc aucun classement utile.

**Et la distribution des passages ne sépare rien.** Les 115 fiches vont de 18 à 105 passages, médiane 35 : il n'existe pas de queue d'artistes marginaux. Découper à 25 aurait été arbitraire.

### Le vrai signal de pauvreté : le nombre de titres connus

Une fiche vaut par sa donnée exclusive — la liste des titres réellement diffusés. Le reste (3 `facts`, 1 `why`) suit un gabarit identique partout.

| Titres connus | Fiches | Passages médians |
|---|---|---|
| 1 | **23** | 24 |
| 2 | 15 | 26 |
| 3 | 43 | 34 |
| 4 | 32 | 46 |
| 5 | 2 | 46 |

La corrélation est nette : moins de titres, moins de diffusion. Les 23 fiches à un seul titre n'apportent qu'une ligne d'information propre noyée dans ~350 mots de gabarit — c'est exactement le profil visé par la politique « contenu produit à l'échelle » de Google.

**Décision** : constante `SEUIL_INDEXATION_TITRES = 2` dans `artists.js`. Les fiches sous ce seuil passent en `noindex, follow` — retirées de l'index, mais leurs liens continuent de transmettre leur valeur, et elles restent accessibles depuis `/plan-du-site.html` et les pages d'agrégation. **23 fiches désindexées, 92 conservées.** Passer le seuil à 3 en désindexerait 38, à 1 aucune. Les 23 URL ont été retirées de `public/sitemap.xml` (223 → 200 URL) : une page en `noindex` n'a rien à faire dans un sitemap. **⚠️ Ces deux réglages doivent rester cohérents en cas de changement de seuil.**

### Croisement quiz ↔ artistes

Les cinq quiz désignent leur bonne réponse par le `slug` d'une fiche artiste. On peut donc calculer, pour chaque artiste, dans quel quiz il apparaît et sur quel titre : **90 des 115 fiches sont concernées**, 10 d'entre elles figurant dans deux quiz.

Nouveau module `src/data/quiz-artistes.js` : la correspondance est extraite du **code source des quiz au moment du build** via `import.meta.glob(..., { query: '?raw' })`, jamais recopiée à la main — elle ne peut pas se désynchroniser. Si le format des questions changeait et que l'extraction ne trouvait plus rien, la fonction renverrait un tableau vide et le bloc disparaîtrait simplement des fiches : aucun risque de casse.

Intérêt : c'est une donnée **réelle, différente pour chaque fiche**, et elle relie le silo le plus faible du site au contenu qui lui a valu sa première citation dans un Aperçu IA (§59). Les quiz gagnent 24 à 29 liens entrants chacun.

### Rang de diffusion sur chaque fiche

Chaque fiche indique désormais le nombre de passages de l'artiste et son rang parmi les 115 — donnée propre à Radio Odyssey, qu'aucun autre site ne peut publier. Le schéma `MusicGroup` est complété d'un tableau `track` listant les `MusicRecording` réellement diffusés.

### Correction sur la page d'ensemble

`artistes-diffuses-radio-odyssey.html` présentait ses « artistes phares » en prenant les 10 premiers **de l'ordre du fichier**, pas de l'ordre de diffusion — Shakira, artiste la plus diffusée avec 105 passages, n'y figurait pas. La page affiche maintenant un vrai classement par passages réels, avec le décompte visible et le total (5 109 passages recensés).

### Vérifications

Build compilé dans une copie isolée : 223 pages, aucune erreur. Concordance exacte entre le seuil déclaré et les 23 fiches effectivement en `noindex`. Cohérence sitemap ↔ `noindex` : aucune incohérence dans un sens ni dans l'autre. Aucun lien interne cassé. **Les 23 fiches désindexées restent atteignables** — Baltimora, par exemple, est liée depuis 5 pages. Classement de la page d'ensemble contrôlé ligne à ligne contre les données source.

### Ce qui n'a pas été fait, et pourquoi

**Aucune fiche n'a été enrichie en prose.** Écrire 800 mots sur 25 artistes réels sans vérification produirait exactement le remplissage générique que ce chantier vise à supprimer, avec en prime un risque d'erreurs factuelles qui ruinerait la crédibilité bâtie par les quiz (dont les 100 dates ont été vérifiées une par une, §53). Si ce travail est entrepris, il demande une recherche par artiste — pas une génération.

**Le levier le plus simple reste inexploité** : ajouter des titres dans `artists.js`. Une fiche passant de 1 à 3 titres gagne de la donnée exclusive, sort du seuil de désindexation, et devient éligible aux quiz. C'est une saisie, pas une rédaction — et c'est l'export RadioKing qui la fournit.

> La question de fond — *une fiche vaut-elle mieux qu'un gabarit ?* — est traitée au §62.

---

## 62. Fiches artistes : remplacer le gabarit par de la donnée calculée (2026-08-13)

Le §61 a retiré de l'index les 23 fiches les plus pauvres. Restait la question de fond, valable pour les 92 autres : **une fiche artiste vaut-elle mieux qu'un gabarit dans lequel on a changé le nom ?**

### Ce que la mesure disait

Analyse par empreintes de 6 mots consécutifs sur le HTML construit, corps de page uniquement (hors barre latérale et navigation), sur les 115 fiches. Un segment est dit *singulier* s'il n'apparaît sur aucune autre fiche.

| | HEAD (dernière version publiée) |
|---|---|
| Mots par fiche | 289 |
| Segments singuliers, total | 15 553 |
| Part de contenu singulier | 47,8 % |
| Liens vers d'autres fiches | 3,0 par fiche |

Autrement dit : sur 289 mots, un peu plus de la moitié était rigoureusement identique d'une fiche à l'autre. Les trois `facts` et le `why` sont bien du texte rédigé, mais tout ce qui les entoure — titres de section, phrases d'amorce, questions fréquentes — était strictement recopié 115 fois.

### Le principe retenu

Ne rien écrire qui ne soit **calculé à partir des passages réellement relevés**. Aucune prose ajoutée, aucun fait inventé, aucune variation de formulation destinée à tromper la détection de gabarit. Si une information n'est pas dérivable de `artists.js`, `genres.js` ou du code source des pages de classement, elle n'apparaît pas.

Deux modules nouveaux :

- **`src/data/artist-stats.js`** — rang général, part d'antenne en pourcentage, fréquence hebdomadaire, écart à la moyenne, rang dans la famille de genre, voisins de classement, ex æquo. Source unique : `ARTISTS`. Si un `playCount` change, tout suit.
- **`src/data/top-titres.js`** — croisement avec le top 15 des titres les plus diffusés, extrait du code source de la page **au moment du build** (`import.meta.glob(..., { query: '?raw' })`), sur le modèle de `quiz-artistes.js` (§61). Dix fiches y figurent ; les autres n'affichent rien plutôt qu'une phrase vide.

### Ce qui apparaît maintenant sur une fiche

Un bandeau de quatre indicateurs chiffrés (passages, part d'antenne, rang général, rang dans le registre), puis une phrase de mise en perspective citant l'artiste juste au-dessus, celui juste en dessous, les ex æquo et deux artistes comparables du même registre — **quatre à six liens internes différents sur chaque fiche**. Le bandeau remplace un paragraphe de texte : même donnée, quatre fois moins de mots de liaison.

Deux erreurs de rédaction corrigées au passage :

- Le gabarit écrivait « ce qui **le** place au N<sup>e</sup> rang » sur les 115 fiches, artistes féminines comprises. Plus aucun pronom de genre n'est généré.
- Les ex æquo sont nombreux en bas de classement (cinq artistes à 24 passages). Comparer par position de tableau produisait « juste derrière Shawn Mendes (24) et juste devant Baltimora (24) » pour un artiste à 24 passages : trois fois le même chiffre présenté comme un écart. Le tri distingue désormais strictement au-dessus / à égalité / strictement en dessous, et les ex æquo sont cités **par rotation** — les cinq fiches à 24 passages ne se renvoient plus les deux mêmes noms.

### Ce qui a été retiré

- La phrase d'amorce « Extrait réel de la programmation de Radio Odyssey : », recopiée 115 fois : le titre de section indique déjà combien de titres suivent.
- La phrase « Voir aussi les titres les plus diffusés », recopiée sur 105 fiches : le lien est repris dans le bloc de liens de bas de page, même maillage sans le texte identique.
- La troisième question fréquente, dont la réponse générique était identique partout, porte maintenant une donnée : « X y revient environ 5,6 fois par semaine d'après notre dernier relevé, en deçà de la moyenne du catalogue (10,4). »

### Résultat mesuré

| | HEAD | Après §61 + §62 | |
|---|---|---|---|
| Mots par fiche | 289 | **405** | +40 % |
| Segments singuliers, total | 15 553 | **21 983** | **+41 %** |
| Part de contenu singulier | 47,8 % | **48,0 %** | stable |
| Liens vers d'autres fiches | 3,0 | **7,1** | ×2,4 |

Le point important est la troisième ligne : le volume de contenu propre augmente de 41 %, **sans diluer la densité**. Ajouter du texte fait normalement chuter ce ratio ; ici il ne bouge pas, parce que rien de ce qui a été ajouté n'est recopié d'une fiche à l'autre.

### Vérifications

Build isolé : 225 pages, aucune erreur. 14 209 liens internes vérifiés, **aucune cible introuvable**. Les 200 URL du sitemap existent toutes dans le build et **aucune n'est marquée `noindex`**. Les 115 fiches JSON-LD sont syntaxiquement valides. Toujours exactement 23 fiches en `noindex, follow`, conformément au seuil du §61. Cas limites contrôlés à la main : rang 1 (Shakira, pas de voisin au-dessus), artistes sans famille de genre (bandeau à trois indicateurs), groupe des ex æquo à 24 passages.

### Correction du lecteur : les séquences de cohérence cardiaque

Signalée par les copies d'écran envoyées avant la publication du §61. RadioKing remonte les séquences de respiration sous leur nom de fichier interne — *« Elisabeth Bélot-Grimaud — CC 3 min 5 inspire / 5 expire Nov05bis »*. Ce libellé s'affichait dans la barre du lecteur, mais aussi, via Media Session, sur les écrans verrouillés et les écrans de voiture.

`RadioPlayer.astro` détecte désormais ces séquences (voix de la partenaire, titre commençant par « CC », ou mention inspire/expire) et affiche **« Cohérence cardiaque — Respiration guidée · séquence de 3 min »**, la durée étant lue dans le libellé d'origine. La normalisation s'applique aux trois points d'affichage : barre du lecteur, affichage initial avant lecture, et métadonnées Media Session. Détection vérifiée sur six cas réels, dont trois titres musicaux qui ne doivent pas être capturés.

### Mise à jour de la documentation

Passe de cohérence sur les trois fichiers `.md`, à partir des chiffres relevés dans le build et non de mémoire. Corrigé dans `CLAUDE.md` : « 223 URL au sitemap » (il y en a 200, pour 223 pages générées), `vercel.json` annoncé à 11 règles alors qu'il en compte 10 depuis le retrait de la redirection du §60, `roPlayNow` annoncée sur 95 pages alors qu'elle est appelée depuis 223, et sept composants absents du tableau. Ajouté : les trois modules dérivés du silo artistes, la répartition des fiches par nombre de titres, et une liste de vérifications avant publication — chacune de ses lignes correspond à une régression réellement survenue sur ce projet.

`PROJET_RADIO_ODYSSEY.md` reste le document de référence pour la charte graphique et les horaires de cohérence cardiaque, mais décrit par ailleurs une architecture disparue. Son en-tête porte maintenant un tableau section par section (à jour / périmé), et chaque section périmée un bandeau en propre : une recherche plein texte ne peut plus tomber sur l'ancienne configuration du lecteur ou l'ancien `padding-top` sans voir l'avertissement.

### Ce qui reste

Le levier du §61 est intact et inchangé : **ajouter des titres dans `artists.js` depuis l'export RadioKing**. Une fiche passant de 1 à 3 titres sort du seuil de désindexation et gagne de la donnée exclusive. C'est une saisie, pas une rédaction, et rien de ce qui précède ne la remplace.

---

---

## 63. Le rapport de diffusion contredit le §61 — et ouvre autre chose (2026-08-13)

Trois exports RadioKing couvrant le 1er juillet 2025 → 13 août 2026 : **170 655 passages, 1 180 artistes, 1 828 titres distincts.** C'est la première fois que le site s'appuie sur la programmation complète plutôt que sur un relevé partiel.

### Ce que je répétais depuis le §61 était faux

Aux §61 et §62, et dans `CLAUDE.md`, la même phrase revenait : *« le levier restant est une saisie, pas une rédaction — ajouter des titres depuis l'export RadioKing fait sortir une fiche du seuil »*. Le rapport dit le contraire.

**Dix-sept des vingt-trois fiches désindexées n'ont réellement qu'un titre à l'antenne.**

| artiste | passages | titres distincts |
|---|---:|---:|
| Amy Macdonald | 436 | 1 — *This Is The Life* |
| Djo | 392 | 1 — *End Of Beginning* |
| Bebe Rexha | 322 | 1 — *New Religion* |
| Tame Impala | 272 | 1 — *Dracula* |

Ce n'était pas une lacune de saisie, c'était la programmation. Sur les 38 fiches à un ou deux titres, **12 seulement** gagnent quelque chose. Le seuil du §61 était le bon choix, mais la justification que j'en donnais était erronée, et la première ligne des « prochaines étapes » de `CLAUDE.md` promettait un gain qui n'existait pas.

### Ce que les chiffres du site valaient

Contrôle avant de toucher à quoi que ce soit : les `playCount` en place corrélaient à **0,959** avec les passages réels de juin 2026, à quelques unités près sur tout le haut du classement. Les chiffres publiés depuis le §61 étaient justes.

### Le vrai gisement était ailleurs

Les fiches **riches** étaient sous-documentées. 320 titres saisis, alors que ces mêmes 115 artistes ont réellement diffusé **520 titres distincts**. Dua Lipa : 4 titres sur sa fiche, 11 à l'antenne. Madonna : 4 saisis, 21 diffusés.

### Méthode de dépouillement

Deux règles, appliquées à 170 655 lignes :

- **Une collaboration officielle compte pour chacun des artistes crédités.** *Shaggy feat. Sting* est un vrai disque : il compte pour Sting comme pour Shaggy.
- **Un mashup ne compte pour personne.** *« Dj Allan X Michael Jackson Vs. Tiesto »* n'est le disque d'aucun des deux. Marqueurs retenus : `vs`, `versus`, `X` entre deux noms, ou un DJ en tête d'affiche. 106 lignes écartées sur 170 655.

Un piège évité au passage : couper les noms sur « and » cassait les groupes — *Earth, Wind & Fire* devenait *earth wind* et sortait du catalogue. La coupure ne se fait que sur les marqueurs explicites de featuring.

### Fenêtre de comptage : trois mois, et pourquoi pas douze

Premier essai sur douze mois glissants. Résultat rejeté : **Tame Impala, 6e artiste le plus diffusé aujourd'hui, ressortait 92e sur 115.** Exact sur douze mois, faux comme description de l'antenne — un artiste entré en rotation récemment est écrasé par ceux qui tournent depuis un an. L'écart de rang médian entre les deux fenêtres est de 8 places, mais la queue va jusqu'à 86.

Retenu : **trois mois glissants, du 14 mai au 13 août 2026**, 14 117 passages. Presque autant de titres que sur douze mois (439 contre 466), aucune fiche à zéro, et un classement fidèle au direct. La période est désormais **affichée sur chaque fiche** : un chiffre sans sa fenêtre de mesure n'est pas vérifiable.

### Une erreur de données corrigée

**Kim Wilde — « Cambodia »** figurait sur sa fiche et n'a **jamais été diffusé** en 13,5 mois. Seul titre du fichier dans ce cas. Remplacé par les deux titres réels, ce qui fait au passage repasser la fiche au-dessus du seuil.

À signaler également : **Baltimora (2 passages) et Scotch (7)** ont quasiment quitté l'antenne — leurs fiches annonçaient 24 et 18 passages mensuels.

### Résultat mesuré

| | §62 publié | §63 | |
|---|---|---|---|
| Titres saisis | 320 | **439** | +37 % |
| Mots par fiche | 289 | **427** | +48 % |
| Segments singuliers (6 mots) | 15 553 | **23 843** | **+53 %** |
| Part de contenu singulier | 47,8 % | **49,4 %** | +1,6 pt |
| Fiches désindexées | 23 | **18** | −5 |
| URL au sitemap | 200 | **205** | +5 |

La densité **monte** alors que le volume augmente de moitié : ce qui a été ajouté est de la donnée, pas du texte de liaison.

### Vérifications

Build isolé : 225 pages, aucune erreur. 205 URL au sitemap, toutes présentes dans le build, **aucune en `noindex`**, et aucune fiche indexable absente du sitemap — vérifié dans les deux sens après le double mouvement (6 fiches ajoutées, Gala retirée en repassant sous le seuil). Liens internes : aucun cassé. 115 JSON-LD valides. `lastmod` porté à la date du jour sur les 97 fiches concernées. Aucune mention résiduelle de l'ancienne fenêtre « sur un mois ».

### Ce qui reste, et qui est maintenant chiffré

**50 artistes diffusés n'ont aucune fiche alors qu'ils ont 3 titres distincts ou plus à l'antenne** : Jimmy Somerville (6 titres, 386 passages), Tears For Fears (5), Donna Summer (6), The Cure (4), Eurythmics (4), Lisa Stansfield (4), Tina Turner, Whitney Houston, Supertramp, The Corrs… Chacun ferait une fiche plus solide que les 18 désindexées.

C'est le prochain chantier du silo artistes — et cette fois c'est bien de la rédaction : 3 faits vérifiés et un « pourquoi » par artiste. Pas de génération.

Point secondaire : `titres-les-plus-diffuses-sur-radio-odyssey.astro` annonce toujours un relevé « de janvier à juin 2026 », saisi à la main. Le rapport permettrait de le recalculer sur la même fenêtre de trois mois que les fiches.

---

---

## 64. Douze fiches ouvertes sur les artistes que l'antenne diffusait sans les documenter (2026-08-13)

Suite directe du §63, qui avait chiffré le gisement : des artistes bien installés dans la programmation, sans aucune page sur le site.

### Le chiffre corrigé, d'abord

Le §63 annonçait **50 artistes** à 3 titres distincts ou plus. Ce comptage portait sur 13,5 mois. Recalculé sur **la même fenêtre de trois mois que les fiches** — la seule comparaison honnête — le total tombe à **33**. La cohérence de fenêtre n'est pas un détail : un artiste peut avoir 3 titres sur un an et un seul sur le trimestre en cours.

### Les douze retenues

Choisies sur la profondeur de leur présence à l'antenne, et parce que leurs faits se vérifient :

| artiste | passages | titres | registre |
|---|---:|---:|---|
| R.E.M. | 74 | 3 | Rock |
| Jimmy Somerville | 72 | 6 | Dance / Pop |
| Lisa Stansfield | 70 | 4 | Pop / R&B |
| The Cure | 69 | 4 | Rock |
| The Corrs | 65 | 3 | Pop / Rock |
| Tears For Fears | 64 | 5 | Synthpop / Rock |
| Supertramp | 64 | 3 | Pop / Rock |
| Eurythmics | 60 | 4 | Synthpop / Rock |
| Tina Turner | 58 | 3 | Pop / Rock |
| Donna Summer | 52 | 4 | Dance |
| Duran Duran | 48 | 3 | Synthpop / Rock |
| Abba | 18 | 6 | Pop |

Jimmy Somerville et Abba arrivent avec **six titres chacun** : plus que 111 des 115 fiches existantes.

### Vérification des faits

Aucun fait écrit de mémoire sans contrôle. Les affirmations chiffrées ont été vérifiées une par une avant rédaction :

- *A View To A Kill* (Duran Duran, 1985) est bien **le seul générique de James Bond arrivé n°1 du Billboard Hot 100** — le 13 juillet 1985.
- La reprise de *Don't Leave Me This Way* par les Communards a bien été **le single le plus vendu au Royaume-Uni en 1986**, à 768 500 exemplaires.
- *There Must Be an Angel* est bien **l'unique n°1 britannique** d'Eurythmics, avec le solo d'harmonica de Stevie Wonder.
- Tina Turner a remporté **huit Grammy Awards en compétition** — le chiffre de « douze » qui circule inclut trois entrées au Hall of Fame et un prix de carrière. La fiche dit les deux.
- *Breathless* (The Corrs, 2000) est bien leur **seul n°1 britannique**, coécrit et produit par Mutt Lange.
- *All Around the World* (Lisa Stansfield, 1989) : **n°1 au Royaume-Uni, 3e du Billboard Hot 100**.
- *Last Dance* : l'Oscar de la meilleure chanson originale est allé à **Paul Jabara, son auteur** — pas à Donna Summer, qui l'interprétait. La fiche le formule correctement.

Deux précisions factuelles que le gabarit aurait laissé passer : *Cannonball* n'est pas de l'album *Breakfast in America* mais de 1985, après le départ de Roger Hodgson ; et Robert Smith est le seul membre de The Cure présent sur tous les albums.

### Ce que ça change

| | §63 | §64 |
|---|---|---|
| Fiches artistes | 115 | **127** |
| Fiches indexées | 97 | **109** |
| Pages générées | 223 | **235** |
| URL au sitemap | 205 | **217** |
| Titres à l'antenne documentés | 439 | **487** |

Les nouvelles fiches s'insèrent **sans une ligne de code** : la route dynamique, le classement, les voisins, le rang par famille de genre et le plan du site les prennent en charge automatiquement. Elles se lient d'ailleurs entre elles dès le premier build — la fiche Tears For Fears cite Supertramp comme ex æquo, The Corrs au-dessus, The Cure et Eurythmics dans le même registre.

### Vérifications

Build isolé : 237 pages, aucune erreur. 217 URL au sitemap, aucun doublon, toutes présentes dans le build, **aucune en `noindex`**, aucune fiche indexable absente du sitemap. Aucun lien interne cassé. 127 JSON-LD valides. Les 12 nouveaux genres tombent tous dans une famille existante de `genres.js` — sans quoi le rang par registre serait resté vide.

### Ce qui reste

**21 artistes** du même gisement attendent leur fiche. Par ordre de diffusion : Helena (242 passages), Marine (172), Tom York (105), Imagination, Santa, Imagine Dragons, Fine Young Cannibals, Ellie Goulding, Emmanuel Moire, Joe Cocker, Chris Rea, Level 42, Valerie Dore, Texas, Zaz, Real McCoy, Rod Stewart, The Beatles, Delegation, Rick Astley, Kool & The Gang.

⚠️ Huit d'entre eux sont des artistes actuels — Helena, Marine, Tom York, Santa, Emmanuel Moire, Zaz, Ellie Goulding, Imagine Dragons. **Leurs faits demandent une vérification en ligne, pas une rédaction de mémoire.** C'est précisément le cas où une fiche fausse coûterait plus cher que pas de fiche du tout.

---

---

## 65. Les vingt fiches restantes, et deux choses qu'on ne pouvait pas voir avant (2026-08-13, nuit)

Achèvement du gisement ouvert au §63. Sur les 21 artistes restants, **20 ont désormais une fiche**. Le vingt-et-unième est traité plus bas — il ne s'agit pas d'un oubli.

### Treize fiches au répertoire installé

Imagination, Fine Young Cannibals, Joe Cocker, Chris Rea, Level 42, Valerie Dore, Texas, Real McCoy, Rod Stewart, The Beatles, Delegation, Rick Astley, Kool & The Gang.

Même méthode qu'au §64 : chaque affirmation chiffrée vérifiée avant rédaction. Ce que la vérification a rapporté :

- **Valerie Dore** est le nom de scène de Monica Stucchi, mais sur les premiers disques du projet — dont *The Night* (1984) — **la voix entendue est celle de Dora Carofiglio**. Stucchi en était le visage avant d'en devenir la chanteuse. Une fiche écrite de mémoire aurait attribué le chant à la mauvaise personne.
- **Delegation** : *Oh Honey* est monté 6e au classement R&B du Billboard, pas au Hot 100 général.
- **Level 42** : *Lessons in Love* est leur meilleur classement britannique, 3e — et non un numéro 1, comme on pourrait le supposer d'un titre aussi connu.
- **Real McCoy** : *Another Night* sort en Europe en 1993 mais n'atteint la 3e place américaine qu'après sa sortie aux États-Unis en 1994, où il reste plus de quarante-cinq semaines au classement.
- **Texas** doit son nom au film *Paris, Texas* de Wim Wenders ; le groupe se forme en 1986 mais son premier single ne sort qu'en janvier 1989.

### Sept fiches d'artistes actuels

Helena, Marine, Santa, Imagine Dragons, Ellie Goulding, Zaz, Emmanuel Moire. Ceux-là ont demandé une recherche en ligne artiste par artiste — aucun fait écrit de mémoire.

**Helena entre directement au 12e rang des 147 fiches**, avec 242 passages. C'était le plus gros trou du catalogue : la douzième artiste de l'antenne n'avait pas de page.

### Une erreur d'étiquetage dans la médiathèque

Le rapport crédite **Emmanuel Moire** de *« L'assasymphonie »*. Vérification faite : ce titre est de **Florent Mothe**, tiré de *Mozart, l'opéra rock* (2009). Emmanuel Moire, lui, vient du *Roi Soleil*. Les deux comédies musicales sont contemporaines, la confusion est banale — mais elle est dans les métadonnées du fichier, donc elle s'affiche à l'antenne, sur le lecteur et sur les écrans de voiture.

La fiche ne retient que ses deux titres réels, ce qui la fait passer de 3 à 2 titres. **Le fichier est à corriger dans le manager RadioKing** ; tant qu'il ne l'est pas, chaque nouveau dépouillement réintroduira l'erreur.

Portée du problème : 1 828 titres distincts ont été dépouillés, aucune vérification systématique des attributions n'est possible à cette échelle. Celle-ci n'a été repérée que parce qu'un fait connu contredisait la donnée. **Il y en a probablement d'autres.**

### Une fiche volontairement non écrite : Tom York

105 passages, trois titres — *Sunscreen*, *I Can't Stay*, *Close To Me*. Les sources disponibles se limitent à des pages de plateformes : un artiste basé à Paris, des singles sortis en 2025, un album *Close to Me* en 2024. Rien qui permette d'écrire trois faits vérifiés.

S'y ajoute un risque propre : **« Tom York » est à une lettre de « Thom Yorke », le chanteur de Radiohead.** Une fiche mal étayée sur ce nom attirerait des visiteurs cherchant l'autre, et publierait des affirmations invérifiables sur un artiste vivant. Les deux sont à éviter.

La question est renvoyée à Frédéric, qui connaît peut-être l'artiste — auquel cas les *Découvertes Radio Odyssey* seraient un meilleur cadre qu'une fiche du catalogue.

### Résultat

| | §64 | §65 | |
|---|---|---|---|
| Fiches artistes | 127 | **147** | +20 |
| Fiches indexées | 109 | **129** | +20 |
| Pages générées | 235 | **255** | +20 |
| URL au sitemap | 217 | **237** | +20 |
| Titres documentés | 487 | **549** | +62 |

Les 18 fiches désindexées n'ont pas bougé : les nouvelles arrivent toutes avec au moins deux titres.

### Vérifications

Build isolé : 257 pages, aucune erreur. 237 URL au sitemap, aucun doublon, toutes présentes dans le build, aucune en `noindex`, aucune fiche indexable absente du sitemap. Aucun lien interne cassé. 147 JSON-LD valides. Un genre corrigé avant publication : Ellie Goulding avait été saisie en « Pop / Électro », libellé que `genres.js` ne connaît pas — la fiche serait sortie sans rang de registre. C'est « Électro / Pop » qu'il fallait écrire.

### Piste ouverte par Frédéric : des quiz sur l'univers de la radio

Idée soumise le soir même : des quiz construits non plus sur les décennies, mais sur ce que le site publie de sa propre antenne. Faisabilité étudiée dans la foulée, à partir des seules données existantes.

La matière est là, et elle est **déjà structurée** :

| Type de question | Volume disponible |
|---|---|
| « De quel pays vient X ? » | 147 questions, 27 pays comme distracteurs |
| « Lequel de ces titres passe réellement à l'antenne ? » | 549 titres réels |
| « Quel artiste est le plus diffusé ? » | classement recalculé à chaque build |
| « Combien de titres de X ? » | 113 fiches assez fournies |

L'intérêt est double. D'abord, **aucune rédaction** : les questions se génèrent depuis `artists.js`, comme `quiz-artistes.js` le fait déjà en sens inverse. Ensuite, et surtout, ce serait le premier contenu du site dont **Radio Odyssey est le sujet** — un quiz auquel personne d'autre au monde ne peut répondre, et qui ramène vers les 147 fiches.

Deux réserves à examiner avant de construire : un quiz dont les réponses changent à chaque build ne peut pas être partagé (« j'ai eu 8/10 » ne veut plus rien dire la semaine suivante), et les cinq quiz par décennie existants sont déjà ce qui a valu au site sa première citation dans un Aperçu IA — il faudrait vérifier qu'un sixième format ne les cannibalise pas.

---

---

## 66. Préciser les faits pour rendre les fiches interrogeables — lot 1 (2026-08-14)

Décision de Frédéric : avant de construire les quiz sur l'univers de la radio, remplir le réservoir. Les quiz ne sont pas un contenu à côté des fiches, ils en sont le sous-produit — mais seulement si les faits sont **datés et vérifiables**.

### Ce que la mesure disait

Sur 441 faits rédigés, seuls **133 portaient une information exploitable comme réponse** : une année précise, un nom propre, une récompense. Et la répartition était très inégale.

| | 0 fait datable | 1 | 2 | 3 |
|---|---:|---:|---:|---:|
| les 115 fiches d'origine | **52** | 59 | 4 | 0 |
| les 32 fiches des §64-65 | 0 | 5 | 20 | 7 |

Les fiches d'origine disaient *« active depuis le début des années 1980 »*, *« révélée à la fin des années 2010 »*, *« carrière lancée dans les années 1990 »*. Vrai, mais sans prise : aucune question ne peut en sortir, et aucun lecteur n'y apprend rien.

Deuxième défaut, plus gênant : sur la plupart de ces fiches, **le troisième fait parlait de Radio Odyssey** — *« un des artistes les plus diffusés sur l'antenne »*. Depuis le §62, cette information figure déjà dans le bandeau de chiffres, calculée et datée. La répéter en prose consommait un tiers de l'espace éditorial pour redire ce que la page affiche deux blocs plus bas.

### Lot 1 : les vingt fiches les plus diffusées

David Guetta, Madonna, Shakira, Gims, Bruno Mars, Tame Impala, Teddy Swims, Alex Warren, Justin Bieber, Mylène Farmer, Zazie, Ed Sheeran, Ariana Grande, Lady Gaga, Sound Of Legend, Pascal Obispo, Taylor Swift, Jennifer Lopez, Sting, Jérémy Frérot.

Soixante faits réécrits, chacun vérifié avant d'être posé.

**Une erreur corrigée :** la fiche Alex Warren datait *« Ordinary »* de **2024**. Le titre est sorti le **7 février 2025**, et il est resté dix semaines en tête du Billboard Hot 100. C'est la deuxième erreur factuelle trouvée dans les fiches d'origine, après *« Cambodia »* de Kim Wilde, jamais diffusé (§63).

**Ce que la vérification a rapporté**, et qui fera de bonnes questions :

- Le nom de scène de **Teddy Swims** est un acronyme : *Someone Who Isn't Me, Sometimes*. Et *« Lose Control »* détient le record de longévité au Billboard Hot 100, avec **112 semaines** de présence.
- Le surnom de **Sting** vient d'un pull rayé jaune et noir qui le faisait ressembler à une abeille.
- Le premier album de **Jennifer Lopez**, *On the 6* (1999), doit son nom à la ligne de métro qu'elle prenait pour rejoindre Manhattan.
- Les albums d'**Ed Sheeran** portent tous un symbole mathématique : +, ×, ÷, = puis −.
- **Zazie** a été mannequin une dizaine d'années avant la musique, et a reçu la Victoire de la révélation féminine en 1993.
- **Mylène Farmer** est née au Québec, à Pierrefonds, et non en France.
- **Jérémy Frérot** est passé par la troisième saison de The Voice avant de former Fréro Delavega, dont le premier album fut numéro 1 en 2014.

### Résultat du lot

| | avant | après |
|---|---:|---:|
| Faits datables, toutes fiches | 133 | **175** |
| Fiches sans aucun fait datable | 52 | **38** |

Les vingt fiches du lot passent de 0,2 à 2,7 faits datables en moyenne. Il reste **95 fiches d'origine** à reprendre, par lots de vingt.

### Vérifications

Build isolé : 257 pages, aucune erreur. 237 URL au sitemap, aucune absente du build, aucune en `noindex`, aucune fiche indexable hors sitemap. Aucun lien interne cassé. 147 JSON-LD valides. Toujours 18 fiches désindexées — le lot ne touche qu'aux `facts`, ni aux titres ni aux passages.

---

---

## 67. Précision des faits — lot 2 (2026-08-14)

Fiches classées 21e à 40e par diffusion : Angèle, Tove Lo, Christophe Willem, Indochine, Soprano, Ofenbach, Calvin Harris, Alicia Keys, Dua Lipa, Coldplay, Bebe Rexha, The Weeknd, Jean-Jacques Goldman, Mika, Katy Perry, Michael Jackson, Harry Styles, Miley Cyrus, Christophe Maé, Djo.

### Une troisième erreur factuelle

La fiche **Ofenbach** présentait le duo comme formé de « Louis Slipper et César Denis Bernard ». Les deux membres sont **Dorian Lauduique et César de Rummel**. Le second prénom était juste, le reste inventé de bout en bout — c'est le profil typique d'une donnée hallucinée, et elle était en ligne depuis la création de la fiche.

Récapitulatif des erreurs trouvées dans les 115 fiches d'origine depuis le §63 :

| fiche | erreur | §  |
|---|---|---|
| Kim Wilde | « Cambodia » listé, jamais diffusé en 13,5 mois | 63 |
| Alex Warren | « Ordinary » daté de 2024 au lieu de 2025 | 66 |
| Ofenbach | membres du duo inventés | 67 |

Trois erreurs sur quarante fiches vérifiées. **Le taux est trop élevé pour considérer les 75 fiches non encore reprises comme fiables.**

### Ce que la vérification a rapporté

Deux faits se répondent d'une fiche à l'autre, ce qui n'était pas cherché :

- **Tove Lo** a coécrit *« Love Me Like You Do »* pour **Ellie Goulding** — deux fiches du site, dont la seconde a été créée au §65.
- **Katy Perry** est la seule artiste, avec **Michael Jackson**, à avoir placé cinq singles d'un même album en tête du Billboard Hot 100. Elle avec *Teenage Dream* (2010), lui avec *Bad* (1987). Personne depuis.

Ce type de croisement fera de meilleures questions qu'une date isolée, et il relie les fiches entre elles.

Autres trouvailles utilisables : *« Bleta »*, le prénom de naissance de **Bebe Rexha**, signifie « abeille » en albanais ; **Calvin Harris** a placé huit singles du seul album *18 Months* dans le top 10 britannique ; **Christophe Willem** doit son surnom de « tortue » à sa tessiture de contre-ténor ; *« End of Beginning »* de **Djo** est sorti en 2022 et n'est devenu un succès qu'au début de 2024.

### Résultat cumulé

| | avant lot 1 | après lot 1 | après lot 2 |
|---|---:|---:|---:|
| Faits datables | 133 | 175 | **217** |
| Fiches sans aucun fait datable | 52 | 38 | **27** |

Il reste **75 fiches d'origine** à reprendre, soit environ quatre lots.

### Vérifications

Build isolé : 257 pages, aucune erreur. 237 URL au sitemap, aucune absente, aucune en `noindex`, aucune fiche indexable hors sitemap. Aucun lien interne cassé. 147 JSON-LD valides. 18 fiches désindexées, inchangé — le lot ne touche qu'aux `facts`.

---

---

## 68. Précision des faits — lots 3 à 5, chantier terminé (2026-08-14)

Reprise des 75 fiches restantes, en trois lots : 41-60, 61-80, puis les 35 dernières. **Les 147 fiches du catalogue portent désormais des faits vérifiés.**

### Une quatrième erreur

La fiche **Bananarama** datait la formation du trio de 1981. Sara Dallin, Keren Woodward et Siobhan Fahey se sont réunies en **1979**. Bilan des erreurs trouvées dans les 115 fiches d'origine :

| fiche | erreur | § |
|---|---|---|
| Kim Wilde | « Cambodia » listé, jamais diffusé | 63 |
| Alex Warren | « Ordinary » daté de 2024 au lieu de 2025 | 66 |
| Ofenbach | membres du duo inventés | 67 |
| Bananarama | formation datée de 1981 au lieu de 1979 | 68 |

Quatre erreurs sur 115 fiches. Aucune n'était détectable sans vérification pièce par pièce.

### Ce que le chantier a mis au jour

Trois faits corrigent une attribution que le public tient pour acquise, et feront d'excellentes questions :

- La voix de *« Tarzan Boy »* (**Baltimora**) n'est pas celle de Jimmy McShane, qui apparaît dans le clip, mais celle de **Maurizio Bassi**, producteur du morceau.
- Sur l'enregistrement original de *« The Rhythm of the Night »* (**Corona**), c'est **Giovanna Bersola** qui chante, pas Olga Souza, présentée comme l'interprète.
- **Jeffrey Daniel**, membre de **Shalamar**, a popularisé le *backslide* dont Michael Jackson tirera le moonwalk — les deux artistes ont une fiche sur le site.

Trois autres, sur l'intention derrière un morceau :

- *« Children »* de **Robert Miles** a été écrit dans un but précis : donner aux DJ un morceau apaisant à jouer en fin de soirée, pour réduire les accidents de la route au retour.
- *« September »* d'**Earth, Wind & Fire** s'ouvre sur le 21 septembre, date choisie uniquement parce qu'elle sonnait bien.
- Les dix-huit morceaux de *Play*, de **Moby**, ont tous été cédés à la publicité ou au cinéma — une première à cette échelle.

Et quelques origines de noms : **Bob Sinclar** vient d'un personnage du *Magnifique* ; **Stromae** est le verlan de « maestro » ; **Avicii** désigne le plus bas niveau de l'enfer bouddhiste ; **Dario G** porte le nom de l'entraîneur du club de football de Crewe.

### Résultat du chantier complet

| | départ | lot 1 | lot 2 | lots 3-5 |
|---|---:|---:|---:|---:|
| Faits datables | 133 | 175 | 217 | **341** |
| Fiches sans aucun fait datable | 52 | 38 | 27 | **1** |
| Faits auto-référents (« diffusé sur l'antenne ») | ~100 | — | — | **0** |

Une seule fiche reste sans fait daté : **Sound Of Legend**, projet dance italien dont aucune source fiable ne donne ni date de formation ni discographie établie. Rien n'a été inventé pour combler la case.

Effet secondaire notable : la disparition des faits auto-référents. Sur la plupart des fiches d'origine, le troisième fait redisait en prose ce que le bandeau de chiffres affiche depuis le §62 — un tiers de l'espace éditorial consacré à une redite.

### Le réservoir pour les quiz

341 faits datés, 147 fiches, dont plusieurs se répondent d'une fiche à l'autre — Tove Lo et Ellie Goulding, Katy Perry et Michael Jackson, Shalamar et Michael Jackson. De quoi construire **trois à quatre quiz de dix questions**, sur le modèle des cinq quiz par décennie existants, avec des réponses immuables : une date, un nom, un lieu.

C'est le chantier suivant.

### Vérifications

Build isolé : 257 pages, aucune erreur. 237 URL au sitemap, aucune absente, aucune en `noindex`, aucune fiche indexable hors sitemap. Aucun lien interne cassé. 147 JSON-LD valides. 18 fiches désindexées, inchangé — les lots ne touchent qu'aux `facts`.

---

---

## 69. Trois quiz sur l'univers de la radio (2026-08-14)

Idée de Frédéric, posée le 13 au soir : exploiter la matière des fiches autrement, avec des **réponses immuables** — une date, un nom, un événement terminé. Le §68 avait rempli le réservoir ; il restait à le verser.

### La contrainte qui a tout décidé

Ma première étude (§65) partait des statistiques : *« quel artiste est le plus diffusé ? »*, *« combien de titres de X ? »*. Frédéric a corrigé le tir, et il avait raison : un quiz dont les réponses changent à chaque build **ne se partage pas**. Dire « j'ai eu 8/10 » ne veut plus rien dire la semaine suivante, et un moteur qui cite la page risque de citer une réponse périmée.

Les trois quiz ne contiennent donc **aucune donnée de programmation**. Uniquement des faits acquis.

### Un moteur, au lieu de cinq copies

Les cinq quiz par décennie embarquent chacun leur propre copie du même JavaScript — environ 180 lignes, avec le préfixe d'identifiant écrit en dur (`quiz80Init`, `quiz90Init`…). Une correction de comportement demandait cinq modifications à la main.

Le moteur est désormais isolé dans **`src/components/QuizBlock.astro`** : mélange des questions et des réponses, round bonus débloqué au sans-faute, verdicts paramétrables. Il se repère par `data-quiz` sur le conteneur, donc plusieurs quiz pourraient coexister sur une page.

**Les cinq pages existantes n'ont pas été touchées.** Elles fonctionnent ; les réécrire ferait courir un risque pour un gain nul. Le composant sert aux quiz créés à partir d'aujourd'hui.

### Les trois quiz

| page | thème | exemple de question |
|---|---|---|
| `/quiz-noms-artistes-radio-odyssey.html` | l'origine des noms de scène | *Quel chanteur doit son surnom à un pull rayé jaune et noir qui le faisait ressembler à une abeille ?* |
| `/quiz-records-radio-odyssey.html` | records et premières fois | *Quel groupe signe le seul générique de James Bond arrivé n°1 du Billboard Hot 100 ?* |
| `/quiz-coulisses-artistes-radio-odyssey.html` | les coulisses des titres | *De quel projet italien la voix du disque n'est-elle pas celle de l'homme qui apparaît dans le clip ?* |

10 questions + 10 bonus chacun, soit **60 questions**. Chaque artiste n'est bonne réponse qu'une fois par quiz — 20 artistes distincts par page, 60 fiches sollicitées au total.

### Le croisement se fait tout seul

`data/quiz-artistes.js` a été étendu pour reconnaître les deux formats : `track:` pour les quiz par décennie, `enonce:` pour les nouveaux. Les trois quiz sont donc apparus **sans aucune saisie** sur les fiches des artistes concernés, qui passent de 90 à **100 fiches** portant un bloc quiz.

Sur la fiche Michael Jackson, par exemple, on lit maintenant les trois d'un coup : *« Billie Jean »* pour les années 80, *« Earth Song »* pour les années 90, et *« Quel artiste signe l'album le plus vendu de tous les temps ? »* pour le quiz records.

### Un piège rencontré, et le garde-fou posé

La génération automatique des trois pages a produit `correct: "slug"` avec des guillemets doubles, là où le projet utilise des apostrophes. L'expression d'extraction ne trouvait plus rien : **le bloc quiz disparaissait des 147 fiches sans le moindre message d'erreur.** Le build passait, la page s'affichait, seul le croisement était mort.

Deux corrections : les fichiers repassés à la convention du projet, et l'expression rendue tolérante aux deux écritures. Une extraction silencieuse est un mauvais point de rupture — mieux vaut qu'elle accepte large.

### Ce que ça change

| | avant | après |
|---|---:|---:|
| Quiz sur le site | 5 | **8** |
| Questions au total | 100 | **160** |
| Fiches artistes portant un bloc quiz | 90 | **100** |
| Pages générées | 255 | **258** |
| URL au sitemap | 237 | **240** |

La page hub `/quiz-musicaux-radio-odyssey.html` présente désormais les deux familles séparément, et son balisage `ItemList` couvre les huit.

### Pourquoi ça compte

C'est le premier contenu du site **dont Radio Odyssey est le sujet**, et non le diffuseur. Les cinq quiz par décennie interrogent la culture musicale générale ; ceux-là interrogent ce que le site a établi lui-même, fiche par fiche. Aucun autre site ne peut produire les mêmes questions, parce que personne d'autre n'a fait le travail de vérification des §64 à §68.

### Vérifications

Build isolé : 260 pages, aucune erreur. 240 URL au sitemap, aucun doublon, aucune absente du build, aucune en `noindex`. Aucun lien interne cassé. JSON-LD valides sur l'ensemble du site. Les trois pages rendent bien 20 questions, 20 bonnes réponses et 100 propositions chacune. Une icône inexistante (`patch-question`) a été rattrapée par le contrôle de `Icon.astro`, qui échoue au build plutôt que d'afficher un trou.

---

### Correction du lendemain : titres, sous-titres, et un bug d'attributs

Deux retours de Frédéric, tous deux justifiés.

**Les titres ne disaient pas la règle du jeu.** « D'où viennent leurs noms ? », « Records et premières fois », « Les coulisses des titres » : jolis, mais on ne sait pas ce qu'on doit faire. Les cinq quiz par décennie, eux, respectaient le principe — « Quiz Musical Années 80 » se comprend seul. Les trois pages deviennent :

- **Quiz des noms de scène : à qui appartient ce surnom ?**
- **Quiz des records : qui détient cet exploit ?**
- **Quiz des coulisses : qui se cache derrière ce titre ?**

Le mot « quiz » ouvre, le thème suit, la question pose la règle : on cherche un artiste.

**Le sous-titre parlait au concepteur, pas au joueur.** « Des réponses qui ne changeront pas : une date, un nom, un record acquis » répondait à un risque de conception — un quiz bâti sur des chiffres d'écoute donnerait un score incomparable d'un mois à l'autre. Vrai, mais personne n'arrive sur un jeu en se demandant si les réponses vont bouger. Remplacé par un aperçu du contenu : « Un pull rayé, un roman du XIXᵉ siècle, un entraîneur de football : 20 noms de scène à attribuer. »

**Et un bug que ce retour a mis au jour.** Le gabarit de génération posait quatre attributs sans guillemets : `title=Quiz : d'où viennent les noms d'artistes ?`. Astro tronquait la valeur au premier espace. Les trois pages étaient donc **en ligne avec `<title>` = « Quiz » et `<h1>` = « D'où »**. Le build passait, aucun avertissement. Corrigé sur les trois pages.

Leçon reprise dans les vérifications avant publication : **contrôler qu'aucun `<title>` du build ne fait moins de trois mots**. C'est un test à une ligne qui aurait attrapé la régression.

---

---

## 70. La base d'abonnés push n'existe pas — la fusion de l'appli est débloquée (2026-08-14)

Un courriel d'Upstash signale que la base `radio-odyssey-push` n'a reçu aucun trafic depuis des semaines et sera archivée.

### Ce que cette base contient

Les abonnements aux notifications push de `app.radio-odyssey.com`, stockés dans un ensemble Redis sous la clé `push_subscriptions`. Deux endpoints s'en servent : `api/subscribe.js` (enregistre à l'acceptation) et `api/send.js` (envoi groupé depuis `admin.html`). Le site `www` n'y touche pas.

### Le chiffre

`SCARD push_subscriptions` → **1**.

Un abonné. Selon toute vraisemblance, le téléphone de Frédéric le jour du test.

### Ce que ça change

Depuis le §57, `CLAUDE.md` justifiait le maintien de deux PWA distinctes par cette base : les abonnements push sont liés à une origine et ne se transfèrent pas d'un domaine à l'autre. C'est exact techniquement. Sauf qu'on protégeait un abonné.

**La fusion de l'appli vers `www` n'a plus d'obstacle.** Elle reste au programme (point 9), l'exécution est simplement reportée.

Décisions prises :

- **Ne pas payer, ne pas maintenir la base en vie.** L'archivage sauvegarde les données et permet de les restaurer ; il n'y a rien à sauver. À noter pour plus tard : chez Upstash, un `PING` ne compte pas comme activité — seule une opération de données réinitialise le compteur d'inactivité de quatorze jours.
- **Si des notifications push reviennent un jour, ce sera sur `www`**, et seulement avec un programme éditorial défini.

### Le vrai enseignement

La fonction est en place depuis des mois et n'a recruté personne. Ce n'est pas un problème de plateforme, c'est un problème de proposition : soit le bouton d'abonnement est invisible, soit ce qu'il promet n'intéresse pas. Reconstruire le même dispositif ailleurs sans répondre à cette question donnerait le même résultat.

C'est aussi une leçon de méthode. Une contrainte structurante — « on ne peut pas fusionner à cause des abonnés push » — a orienté l'architecture du projet pendant des mois sans que personne n'aille compter les abonnés. La vérification a pris dix secondes.

---

---

## 71. Les quiz étaient invisibles depuis le site (2026-08-14)

Remarque de Frédéric sur l'ordre d'apparition des jeux. Vérification faite sur le build : **la page d'accueil ne contenait aucun lien vers un quiz.** Aucun. 111 pages du site pointaient vers le hub — les fiches artistes surtout — mais pas l'accueil.

Pire, dans le méga-menu les huit quiz occupaient les positions 17 à 25 sur 29 dans « Musique & Énergie ». Le menu n'affichant que les cinq premières entrées depuis le §60, **ils étaient invisibles depuis n'importe quelle page**. Seuls chemins restants : Google, ou le plan du site.

D'où un paradoxe qu'on n'avait pas vu : `/quiz-musical-annees-80.html` est la 3ᵉ page la plus consultée du site alors qu'aucun lien interne ne la met en avant. Elle ne vit que du référencement.

### Deux corrections

**Un bandeau sur l'accueil**, placé après celui de la cohérence cardiaque, listant les huit quiz en pastilles cliquables. Traitement volontairement sobre — fond blanc, bordure fine, une ligne de titre — parce que les deux encarts qui précèdent sont déjà des bandeaux à dégradé pleine largeur : un troisième aurait fait mur. L'accueil passe de **0 à 9 liens** vers les quiz.

**« Tous nos Quiz Musicaux » passe de la 17ᵉ à la 5ᵉ place** de « Musique & Énergie », donc dans les entrées visibles du menu. « Pour Faire du Sport » recule d'un rang et reste accessible par le hub.

Le hub plutôt que le quiz années 80 en direct : même coût — une place de menu — mais l'entrée ouvre sur les huit au lieu d'un seul.

### Résultat

| | avant | après |
|---|---:|---:|
| Liens vers un quiz depuis l'accueil | 0 | **9** |
| Pages liant vers le hub des quiz | 111 | **258** sur 260 |

Le hub est désormais lié depuis presque tout le site, puisqu'il est dans le méga-menu présent sur chaque page.

### Vérifications

Build isolé : 260 pages, aucune erreur, aucun lien cassé, JSON-LD valides, aucun titre tronqué. Accueil à 162 Ko, contre 155 avant — le bandeau coûte 7 Ko, dont l'essentiel en CSS mutualisé.

---

*Dernière mise à jour : 2026-08-14, mise en avant des quiz (§71).*

---

## 72. E-E-A-T sur les 18 pages bien-être, et instrumentation des événements manquants (2026-08-16)

Deux chantiers du même lot, tous deux tirés des « Prochaines étapes » de CLAUDE.md.

### E-E-A-T (zone YMYL)

Avant ce lot, les 18 pages « Bien-être & Santé » avançaient des effets (stress, sommeil, concentration) sans auteur nommé, sans date de révision et sans source externe — trois signaux que Google cite explicitement dans ses Quality Rater Guidelines pour juger la fiabilité d'une page de santé.

**Décision d'attribution** (validée avec le propriétaire avant d'écrire quoi que ce soit) : Elisabeth Bélot-Grimaud, Docteure en psychologie cognitive et partenaire de la radio, n'est créditée comme relectrice que sur les pages où elle est réellement impliquée. Lui prêter une relecture qu'elle n'a pas faite sur des pages plus générales aurait été à la fois malhonnête et risqué pour une personne réelle nommée.

- **11 pages « Elisabeth »** — les pages consacrées à la cohérence cardiaque (radio-coherence-cardiaque, comment-pratiquer-la-coherence-cardiaque, bienfaits-coherence-cardiaque, radio-bien-etre-en-ligne, coherence-cardiaque-au-bureau, coherence-cardiaque-enfants-ados, musique-pour-respiration-guidee, coherence-cardiaque-pour-dormir, coherence-cardiaque-et-sport, coherence-cardiaque-pour-seniors) et musique-positive-et-bonne-humeur, qui crédite explicitement sa contribution au positionnement « radio positive ».
- **4 pages « Rédaction Radio Odyssey »** — radio-anti-stress-gratuite, radio-detente-moderne, musique-sans-parole-pour-se-concentrer, difference-musicotherapie-radio-bien-etre : la cohérence cardiaque y est mentionnée mais pas au point de justifier une caution individuelle.
- **3 pages non touchées** — radio-sans-publicite et avis-radio-odyssey-bien-etre (pas de revendication de santé), elisabeth-belot-grimaud-radio-odyssey (déjà pourvue d'un schema Person, page qui parle d'elle plutôt que relue par elle).

**Composants créés** :
- `AuthorReview.astro` — bandeau en haut de page : « Relu par [nom], [titre] » ou « Rédigé par la rédaction de Radio Odyssey », plus la date de vérification et une mention de non-substitution à un avis médical.
- `SourcesBlock.astro` — bloc « Sources et références » en bas de page, avant la FAQ.
- `src/data/reviewer.js` — source unique pour l'objet relecteur, la date de révision et quatre jeux de sources externes, chacune vérifiée individuellement avant citation (jamais une référence de mémoire, même règle que pour les fiches artistes) :
  - Cohérence cardiaque : Inserm (Canal Détox) + Goessl, Curtiss & Hofmann (2017, *Psychological Medicine*), méta-analyse HRV biofeedback.
  - Musicothérapie : Fédération Française des Musicothérapeutes.
  - Musique et humeur : Salimpoor et al. (2011, *Nature Neuroscience*), dopamine et plaisir musical.
  - Musique et concentration : Kämpfe, Sedlmeier & Renkewitz (2011, *Psychology of Music*), méta-analyse musique de fond.

**Layout.astro** : `articleDateModified` ajouté en prop distincte de `articleDatePublished` — la date de publication réelle (retrouvée par `git log --follow --diff-filter=A`, jamais inventée) reste dans `datePublished`, la date de vérification du 16 août dans `dateModified`. Le schema Article utilise déjà `articleAuthorName` pour distinguer Person (Elisabeth) et Organization (Radio Odyssey) — mécanisme existant depuis les pages « Coulisses », jusqu'ici jamais utilisé pour un auteur nommé.

### Instrumentation des événements manquants

Le point 8 des « Prochaines étapes » listait cinq événements absents : installation PWA, opt-in push, quiz, exercice, sorties plateformes. L'audit a montré que le suivi des écoutes (`play_click`, `play_error`, `play_started`, `play_stalled`...) existait déjà via `roUmamiTrack()`, défini dans `Footer.astro` et appelé depuis `RadioPlayer.astro` et `Header.astro` — seuls les cinq événements listés manquaient réellement. L'opt-in push n'existe pas sur `www` (seulement sur l'appli, fusion différée, §70) : rien à instrumenter pour l'instant.

- **`quiz_complete`** — ajouté dans `QuizBlock.astro` (les 3 quiz thématiques) et individuellement dans les 5 pages de quiz par décennie, qui gardent leur propre copie du moteur (§69) : `{ quiz, round, score, max }`.
- **`exercise_start` / `exercise_complete`** — ajoutés dans `CoherenceExercise.astro` : `start` au clic sur « Commencer », `complete` uniquement à l'issue d'un cycle complet (pas à l'arrêt manuel).
- **`pwa_installed`** — écouteur sur l'événement standard `appinstalled` du navigateur, ajouté dans `Footer.astro`. Capte l'installation quelle que soit son origine (icône native ou menu navigateur), sans dépendre d'un bouton dédié qui n'existe pas dans l'interface actuelle.
- **`app_download_click` / `external_platform_click`** — plutôt que d'ajouter un `onclick` sur chaque lien « Télécharger l'application » (une trentaine de pages) et chaque lien d'écoute externe, un seul écouteur délégué au clic dans `Footer.astro` (présent sur les 258 pages) couvre l'ensemble du site, présent et futur. La liste `PLATEFORMES` (RadioKing, TuneIn, Deezer, WeLoveRadio, Orange, Radioline, myTuner) doit rester alignée avec `SAME_AS` dans `Layout.astro`.

### Vérifications

Build isolé : 258 pages, aucune erreur, sitemap et `dist/` cohérents (240 URL, 0 manquante, 0 `noindex` en sitemap), aucun lien interne cassé, aucun `<title>` tronqué. Schema Article vérifié sur un échantillon : `dateModified` distinct de `datePublished`, auteur Person sur les pages Elisabeth, Organization ailleurs. Les 15 pages traitées affichent bien le bandeau et le bloc sources dans le HTML construit ; les 8 pages de quiz émettent toutes `quiz_complete`.

---

*Dernière mise à jour : 2026-08-16, E-E-A-T bien-être et instrumentation Umami (§72).*

---

## 73. Deployment Protection Vercel : déjà en place (2026-08-16)

Le point 3 des « Prochaines étapes » demandait de protéger les déploiements dans l'interface Vercel (Settings → Deployment Protection), après l'échec de deux tentatives de redirection par `vercel.json` (§59) — le contexte précis est expliqué à l'utilisateur avant toute action : le domaine généré automatiquement (`radio-odyssey-v8b.vercel.app`) sert le même contenu que le domaine personnalisé et représentait 2,2 % des écoutes mesurées.

**Vérification faite dans le tableau de bord Vercel** (navigation via Claude in Chrome, connecté au compte du propriétaire) sur les deux projets :

- `radio-odyssey` (radio-odyssey.vercel.app)
- `radio-odyssey-v8b` (app.radio-odyssey.com)

Les deux ont déjà **Vercel Authentication** activée en scope **Standard Protection** — enregistré, bouton « Save » inactif, confirmé après rechargement complet de la page. Aucune action n'était donc nécessaire : cette protection avait déjà été mise en place (probablement au moment de la connexion du domaine personnalisé), simplement jamais consignée dans CLAUDE.md.

⚠️ Standard Protection protège les URLs générées (`*.vercel.app`) mais laisse le domaine personnalisé public — c'est le comportement recherché. Un visiteur sans session Vercel qui arrive sur `radio-odyssey-v8b.vercel.app` doit désormais rencontrer un mur de connexion Vercel plutôt que le site ; ça n'a pas pu être testé en navigation déconnectée dans cette session (le navigateur utilisé était déjà authentifié), à vérifier à l'occasion en navigation privée.

---

*Dernière mise à jour : 2026-08-16, vérification Deployment Protection (§73).*

---

## 74. Liste e-mail — version minimale (2026-08-16)

Point 7 des « Prochaines étapes ». Position initiale (sessions précédentes) : superflu tant que le site ne recevait que ~15 visiteurs organiques par semaine. Reconsidérée à la demande du propriétaire à la lumière de ce qui a changé depuis : le §72 a créé deux moments de forte intention mesurables (fin de quiz, fin d'exercice de cohérence cardiaque) là où il n'y en avait aucun, et la fragilité n°1 du site reste que 35 % des écoutes durent moins de 30 secondes — un canal possédé (l'e-mail) est précisément ce qui peut faire revenir un visiteur qu'un pic d'audience Facebook ne retient qu'une fois. Décision : pas de programme éditorial (aucun contenu récurrent à produire, aucune promesse de fréquence), seulement un point de collecte minimal aux deux moments identifiés.

**Prestataire retenu : Brevo** (ex-Sendinblue, hébergement UE) — cohérent avec la sensibilité RGPD déjà présente sur le projet (bandeau de consentement, double opt-in par défaut).

**Créé dans le compte Brevo du propriétaire** (via Claude in Chrome, le propriétaire étant déjà connecté) :
- Liste dédiée « Newsletter Radio Odyssey » (la liste par défaut « Votre première liste », qui contenait déjà 1 contact, n'a pas été réutilisée).
- Formulaire « Newsletter site web », finalisé, ciblant cette liste, avec confirmation en **double opt-in** (case cochée par défaut dans Brevo, recommandée RGPD — la preuve de consentement est le clic dans l'e-mail de confirmation, pas une case côté site).
- Tentative d'ajout du bloc RGPD natif de Brevo (glisser-déposer « Champ RGPD ») : n'a pas abouti après deux essais (le dépôt ne se validait jamais). Abandonné au profit d'une case à cocher écrite directement dans le composant du site — voir plus bas.

**Composant créé : `src/components/NewsletterCapture.astro`** — formulaire natif au style du site (pas d'iframe ni de script Brevo), posté vers l'URL d'action Brevo extraite du formulaire (`https://74fb5591.sibforms.com/serve/...`), champs `EMAIL`, `email_address_check` (piège à robots, doit rester vide, caché en CSS et non en `display:none` pour ne pas être ignoré par les anti-spam les plus simples), `locale=fr`. Soumission dans une **iframe cachée** (`target` sur le formulaire) pour ne pas quitter la page ; cette iframe étant cross-origin, sa réponse est illisible en JavaScript, donc le message de succès affiché après l'envoi est optimiste (pas de confirmation serveur lue). Une case à cocher RGPD, requise avant envoi, renvoie vers `/politique-de-confidentialite.html` — elle n'est pas transmise à Brevo (pas de champ dédié côté formulaire) mais formalise le geste de consentement avant l'envoi ; la preuve légale reste la confirmation double opt-in.

Événement Umami ajouté à la même convention que le §72 : `email_signup`, avec `{ context: 'quiz' | 'exercise' }`.

**Intégration** :
- `QuizBlock.astro` (3 quiz thématiques) — dans l'écran de résultats, après le bouton « Recommencer ».
- Les 5 pages de quiz par décennie, qui gardent leur propre copie du moteur (§69) — même emplacement, ajouté individuellement dans chacune.
- `CoherenceExercise.astro` (8 pages) — bloc caché par défaut (`display:none`), révélé par JavaScript uniquement à l'issue d'un cycle complet (même condition que `exercise_complete`, §72), et qui reste affiché même après le `reset()` automatique de l'exercice (le `reset()` ne touche pas à ce bloc).

Soit **16 pages** au total : les 8 pages de quiz existantes et les 8 pages intégrant l'exercice de cohérence cardiaque.

### Vérifications

Build isolé : 258 pages, aucune erreur. `ro-newsletter` présent sur exactement 16 pages, la liste correspondant exactement aux 8 quiz + 8 pages d'exercice attendues. Champs `email_address_check` et `locale=fr` bien rendus. `/politique-de-confidentialite.html` existe dans `dist/`. Sitemap toujours cohérent avec `dist/` (240 URL, 0 manquante) — ce lot ne touche à aucune URL ni à la navigation.

---

*Dernière mise à jour : 2026-08-16, capture e-mail minimale (§74).*

---

## 75. Fusion appli → site : décision annulée (2026-08-16)

Le point 9 des « Prochaines étapes » avait acté au §70 la fusion de `app.radio-odyssey.com` dans `www` : page hors ligne enrichie, masquage du bouton « App Mobile » en mode autonome, puis redirection de `app.` vers `www`. L'argument qui justifiait de les garder séparées (la base d'abonnés aux notifications push, non transférable entre origines) était tombé — vérifiée quasi vide dans Upstash (`SCARD push_subscriptions` = 1).

Le propriétaire a fait remarquer que ce raisonnement ne tenait pas compte de ce que l'appli apporte réellement : une navigation par onglets, le sentiment d'une vraie application plutôt que d'un site, et le fait que, comme la plupart des auditeurs de radio, il ouvre l'appli plutôt que le site quand il veut écouter — comportement que les chiffres d'audience confirment (durée moyenne 16 min sur l'appli contre 8 min sur le site, voir Contexte d'audience de CLAUDE.md).

**Vérification faite avant de trancher** : lecture du code de `Appli Radio Odyssey V8/index.html`. Ce n'est pas un miroir du site : c'est une interface à un seul écran avec une barre de navigation à 5 onglets (Écouter, Programme, À propos, Bien-être, Réseaux), commutés en JavaScript sans rechargement de page, avec visualisation waveform animée et fond étoilé — une expérience construite pour l'écoute répétée en un geste, pas pour le contenu à parcourir. Le site `www`, à l'inverse, est un site de 258 pages avec mega-menu, construit pour être trouvé sur les moteurs de recherche. Rediriger `app.` vers `www` aurait remplacé la première expérience par la seconde, supprimant précisément ce qui explique sa meilleure rétention.

**Décision révisée** : l'appli et le site restent deux produits distincts, chacun avec son rôle (l'appli pour l'écoute récurrente, le site pour l'acquisition et le contenu). Seule la partie de l'ancien plan qui ne concernait pas l'expérience reste valide : la base Upstash et les deux endpoints `api/subscribe.js`/`api/send.js`, inutilisés, pourront être débranchés un jour sans toucher au domaine ni à l'interface — mais ce n'est pas urgent (pas de coût, Upstash archive les bases inactives sans les supprimer).

Aucun changement de code dans ce lot — uniquement une correction de plan, consignée pour ne pas revenir sur une fausse bonne idée une seconde fois.

---

*Dernière mise à jour : 2026-08-16, annulation de la fusion appli/site (§75).*

---

## 80. Performance mobile : bootstrap.bundle.min.js remplacé, retard du bandeau cookies corrigé (2026-08-16)

Suite à un score PageSpeed Insights mobile mitigé (73-83 selon les passages, contre 98-100 sur bureau), diagnostic détaillé du rapport (métriques, répartition du LCP, tables de ressources JS/CSS/images inutilisées).

**Constat** : le LCP (4,1 s, "à améliorer") ne venait pas des images — 371 des 399 Kio d'images signalés sont les pochettes du morceau en cours servies par `image.radioking.io` (tiers, hors de notre contrôle). Deux causes propres au site :

1. **`bootstrap.bundle.min.js`** (~20 Kio) chargé sur les 258 pages pour trois comportements seulement — accordéon FAQ (`FAQBlock.astro`, `index.astro`), méga-menu déroulant (`MegaNav.astro`), panneau mobile (`Header.astro`) — jamais ses modales/carrousels/tooltips. Remplacé par un script maison d'une centaine de lignes dans `Footer.astro`, qui reproduit ces trois comportements (délégation d'événements sur `data-bs-toggle="collapse|dropdown|offcanvas"` et `data-bs-dismiss="offcanvas"`) en s'appuyant sur les classes et transitions déjà fournies par `bootstrap.min.css` (`.collapse`/`.show`, `.dropdown-menu`/`.show`, `.offcanvas`/`.show`, `.offcanvas-backdrop`) — seul le déclenchement change, pas l'habillage visuel. ⚠️ **`bootstrap.min.css` reste chargé** : ses classes de grille (`row`, `col-`, `container`) structurent 110+ fichiers `.astro`, une purge complète n'est pas envisageable sans migration lourde — écarté de ce lot.
2. **Retard du bandeau cookies** : `CookieConsent.astro` est la dernière chose insérée dans `<body>` (après tout le contenu de page), et son bandeau démarrait avec l'attribut `hidden`, retiré seulement quand ce script de fin de page s'exécutait — donc après le HTML entier de la page. Lighthouse a identifié ce texte comme élément LCP, avec ~1,3 s de retard d'affichage. Corrigé en inversant la logique : le bandeau est désormais **visible par défaut** dans le HTML (rapide à peindre pour un premier visiteur, le cas mesuré par Lighthouse), et un petit script bloquant ajouté en tête de `Layout.astro` masque immédiatement le bandeau, avant peinture, **si et seulement si** un choix est déjà en `localStorage` (`html.ro-cookie-decided .ro-cookie-banner{display:none}`) — aucun clignotement pour un visiteur qui a déjà répondu.

**Écarté de ce lot, pour plus tard si besoin** : purge complète de `bootstrap.min.css` (migration de grille, risqué) et proxy de redimensionnement pour les pochettes RadioKing (complexité et gain incertains face à un contenu tiers).

### Vérifications

Build isolé : 258 pages, aucune erreur, sitemap cohérent (240 URL, 0 manquante), aucun `<title>` tronqué. Confirmé sur le HTML construit : plus aucune balise `<script src=".../bootstrap.bundle.min.js">` sur les 258 pages ; `bootstrap.min.css` toujours chargé ; bandeau cookies sans attribut `hidden` ; règle CSS `html.ro-cookie-decided .ro-cookie-banner{display:none}` présente dans le CSS compilé (`_astro/Layout.*.css`). Logique JS vérifiée dynamiquement (jsdom, faute de pouvoir installer un navigateur complet dans le bac à sable) : accordéon FAQ (ouverture/fermeture, `aria-expanded`), méga-menu (ouverture, fermeture au clic extérieur), panneau mobile (ouverture, verrouillage du défilement, fond assombri, fermeture par le fond ou le bouton de fermeture) — tous les comportements se comportent comme avec le bundle Bootstrap complet. Le repli automatique du méga-menu en bord d'écran (remplaçant Popper) n'a pas pu être vérifié en conditions réelles (nécessite un vrai moteur de mise en page) ; sa logique reste simple (comparaison de largeur) et son échec resterait sans conséquence grave (menu aligné à gauche, comme le comportement Bootstrap par défaut sans Popper).

---

*Dernière mise à jour : 2026-08-16, performance mobile — bootstrap.bundle.min.js et retard du bandeau cookies (§80).*

---

## 76. Appli V8 — quatre défauts de fiabilité corrigés (2026-08-16)

Premier lot d'un audit du code de `Appli Radio Odyssey V8/`, mené après le §75. L'appli n'avait jamais été relue en tant que telle : le §75 s'y était plongé uniquement pour trancher la question de la fusion. Ce lot ne traite que ce qui **faisait perdre de l'écoute**. Rien d'ajouté, rien de redessiné.

### 76.1 La pause depuis l'écran verrouillé ne tenait pas

Le gestionnaire Media Session appelait `player.pause()` sans poser `userPaused = true`. Or l'écouteur `pause` traite toute pause dont ce drapeau est faux comme une **interruption système** et programme une reprise 1,2 s plus tard (`scheduleResume`). Conséquence : une pause depuis l'écran verrouillé, un écran de voiture, un casque Bluetooth ou le Centre de contrôle était **annulée par l'appli elle-même**. Seul le bouton pause de l'interface fonctionnait.

C'est le geste que fait un auditeur quand quelqu'un lui parle. Ne pas pouvoir couper le son est le genre de défaut qui fait désinstaller.

Les commandes `play`, `pause` et `stop` passent désormais par la même logique d'intention que les boutons de l'appli. `play` distingue les deux cas qu'il confondait : reprise après interruption (l'intention « en lecture » n'a jamais changé, on ne repasse pas par `togglePlay` qui mettrait en pause) et démarrage à froid. Il réinitialise aussi `resyncMuting`, sans quoi un play depuis l'écran verrouillé pouvait relancer la lecture **sans son** si une reconnexion s'était bloquée.

### 76.2 L'appli ne s'ouvrait pas hors ligne depuis l'écran d'accueil

`manifest.json` déclare `start_url: "/?source=pwa"`. Le service worker préchargeait `'./'` et interrogeait le cache par `caches.match(req)` **sans `ignoreSearch`** : la chaîne de requête compte, `/?source=pwa` ne correspondait donc à aucune entrée. Réseau absent → `.catch(() => cached)` rendait `undefined` → `event.respondWith(undefined)` → **page d'erreur du navigateur**. Il n'existait par ailleurs aucun repli de navigation, contrairement au site et à son `hors-ligne.html`.

Le bandeau hors ligne de l'appli promet pourtant que « la cohérence cardiaque et le programme restent dispo ». C'était faux exactement là où ça comptait : métro, avion, sous-sol.

Les navigations sont désormais traitées à part, servies depuis `./index.html` en cache avec `ignoreSearch`, rafraîchies en tâche de fond pour la prochaine ouverture — même stratégie que le reste de la coquille. `CACHE_VERSION` passé à `v16`.

### 76.3 Deux écouteurs `pause` qui se contredisaient

Un second écouteur `pause`, indépendant, remettait l'analyse BPM/énergie à zéro et vidait les barres du spectre — y compris sur les interruptions système que l'appli rattrape toute seule. Après un appel téléphonique, l'interface se vidait alors que la lecture reprenait une seconde plus tard. Fusionné en un écouteur unique ; la remise à zéro (`resetTrackAnalysis`) n'a plus lieu que sur une pause voulue.

### 76.4 Le curseur de volume mentait

Le volume était bien enregistré et restauré sur le lecteur, mais **pas sur le curseur**, figé à 80. Un auditeur qui avait baissé à 20 % rouvrait l'appli sur une interface en désaccord avec ce qu'il entendait. Restauré, avec `parseFloat` et validation de l'intervalle : une valeur corrompue en stockage levait jusqu'ici une exception non rattrapée qui **cassait tout le script en aval**. Le curseur étant absent sur iOS (remplacé par une note, le réglage par script y étant bloqué), la restauration est gardée.

### Vérifications

Les deux défauts principaux ont été reproduits **avant** correction, puis vérifiés après, sur Chromium piloté par Playwright, avec l'élément `<audio>` neutralisé et les appels à `play()` comptés :

| Vérification | Code d'origine | Après correction |
|---|---|---|
| Pause depuis l'écran verrouillé | 1 reprise automatique, `playing` reste à `true` | 0 reprise, `playing` passe à `false`, le bouton réaffiche « lecture » |
| Interruption système (non-régression) | reprise automatique | reprise automatique — comportement conservé |
| Ouverture hors ligne sur `/?source=pwa` | `net::ERR_FAILED` | page servie, 5 onglets présents |
| Curseur de volume après réouverture | — | curseur à 23 pour un volume de 0,23 |
| Valeur de volume corrompue en stockage | — | aucune exception levée |

Syntaxe des deux blocs `<script>` et du service worker validée par `node --check`. Aucune modification d'interface, de contenu ni d'URL.

### Reste à faire (par ordre d'effet décroissant)

1. **Afficher le titre en cours dès l'ouverture** — `fetchNow()` n'est appelée que dans le `.then()` de `togglePlay`, donc l'appli affiche « Radio Odyssey / Positive radio ✨ » tant qu'on n'a pas appuyé sur play. C'est l'information qui décide d'écouter, et le levier le plus direct sur les 35 % d'écoutes de moins de 30 s.
2. **Instrumenter l'appli** — un seul événement Umami aujourd'hui (les changements d'onglet), contre une dizaine sur le site depuis le §72. La surface qui retient deux fois mieux est celle sur laquelle on ne sait rien.
3. Sondage du titre aligné sur la fin réelle du morceau (comme `RadioPlayer.astro`) plutôt que toutes les 10 s, y compris écran éteint ; palier progressif sur les reconnexions (aujourd'hui : toutes les 5 s, indéfiniment).
4. Polices auto-hébergées (perdues hors ligne, et transfert d'IP vers Google sans consentement) ; **mentions légales et politique de confidentialité absentes de `app.radio-odyssey.com`**.
5. Grille du week-end et du vendredi soir (l'onglet Programme est statique 7 j/7 alors que le §58 a établi une grille distincte) ; `.sched-item.current` est stylé mais n'est appliqué par aucune ligne de JavaScript.
6. Dépôt GitHub pour l'appli — aucun dépôt distant aujourd'hui, publication manuelle par `npx vercel --prod`, donc pas de sauvegarde hors machine ni de retour arrière simple.
7. Contraste : `--muted` (#7878a8) donne 3,11:1 sur les cartes, sous le seuil AA de 4,5:1, alors qu'il porte l'artiste du titre en cours et tout l'historique.

---

*Dernière mise à jour : 2026-08-16, correctifs de fiabilité de l'appli V8 (§76).*

---

## 77. Appli V8 — ce qui a tenu, ce qui n'a pas tenu (2026-08-16)

⚠️ **Ce paragraphe corrige le §76.** Le §76 annonçait quatre correctifs de fiabilité, tous validés au banc d'essai. Testés sur un vrai iPhone dans la foulée, **le premier s'est révélé faux et a été annulé** ; les trois autres tiennent. Le §76 reste tel quel pour l'histoire, mais c'est ici qu'est l'état réel.

### 77.1 La pause depuis l'écran verrouillé réveille l'app Musique — limite d'iOS, non contournable

Faire « tenir » la pause depuis l'écran verrouillé (§76.1) produit un effet bien pire que le défaut qu'il corrigeait : **une seconde après la pause, l'iPhone lance la lecture de l'app Musique.** En relâchant la session audio, iOS considère terminée l'« interruption » que Radio Odyssey lui avait causée et reprend la lecture de l'application interrompue. Cela se produirait chez tout auditeur ayant Musique en pause.

**Trois contournements ont été écrits, publiés et testés sur iPhone. Aucun ne marche.**

| Tentative | Résultat |
|---|---|
| Poser `userPaused` pour que la pause tienne (§76.1) | Musique démarre |
| Ne pas recharger le flux depuis l'arrière-plan et rattraper le direct au déverrouillage | Musique démarre |
| Couper le son sans arrêter le flux (« pause silencieuse »), vrai arrêt différé au retour au premier plan | Musique démarre quand même — iOS met l'élément en pause de son côté, quoi que fasse le gestionnaire |

⚠️ **Ce n'est pas une régression.** Le comportement est antérieur au 2026-08-16, et le lecteur du site (`RadioPlayer.astro`) l'a aussi : son `arreter()` est branché sur les actions Media Session `pause` et `stop`, et fait un démontage encore plus franc (`audio.pause()` puis `removeAttribute('src')`). Le défaut existe donc sur `www` depuis le §55 (passage au lecteur natif, 2026-08-09). Il n'avait jamais été rencontré parce que la pause de l'écran verrouillé, se relançant toute seule au bout de 1,2 s, ne servait à rien.

**Décision** : on s'en tient au comportement par défaut. Un avertissement détaillé est écrit dans `index.html`, au-dessus des deux `setActionHandler`, listant les trois tentatives et pourquoi chacune échoue — pour que personne ne reparte dans cette impasse. Le contournement théorique restant (ne jamais mettre en pause, garder le flux ouvert en permanence) a été écarté : il ferait compter par RadioKing du temps d'écoute qui n'en est pas, et fausserait la durée d'écoute moyenne, sur laquelle tout le reste est arbitré.

Seconde limite relevée au passage : iOS libère la session audio ~30 s après une pause, si bien qu'une reprise depuis l'écran verrouillé est ensuite muette jusqu'au retour de l'appli au premier plan. Sources : forum développeurs Apple, fil 762582 ; bug WebKit 261858, ouvert depuis 2023, propre au mode « ajouté à l'écran d'accueil ».

### 77.2 Ce qui a tenu du §76

- **Lancement hors ligne depuis l'écran d'accueil** — validé sur iPhone en mode Avion, Wi-Fi coupé : l'appli s'ouvre avec son bandeau, là où elle affichait la page d'erreur du navigateur. La `start_url` du manifeste (`/?source=pwa`) ne correspondait à aucune entrée du cache, faute d'`ignoreSearch` et de repli de navigation.
- **Curseur de volume restauré**, avec validation de la valeur — une donnée corrompue en stockage levait une exception qui cassait tout le script en aval. Invisible sur iPhone : Apple interdit le réglage du volume par script, la ligne y est remplacée par une note.
- **Un seul écouteur `pause`** : la remise à zéro de l'analyse n'a plus lieu sur les interruptions système que l'appli rattrape toute seule.
- **`.vercelignore`** : `admin.html` — console d'envoi de notifications, accessible publiquement sans authentification, vérifiée en ligne — et les documents de travail ne sont plus publiés. ⚠️ Dès qu'un `.vercelignore` existe, Vercel cesse de se référer au `.gitignore` : tout ce qui doit rester hors ligne y est répété.

### 77.3 Lot 2 — visibilité, sobriété, mesure

- **Le titre en cours s'affiche dès l'ouverture**, avant tout appui sur play. `fetchNow()` n'était appelée que dans le `.then()` de `togglePlay` : l'appli affichait « Radio Odyssey / Positive radio ✨ » tant qu'on n'avait rien lancé. C'est l'information qui décide d'écouter — levier le plus direct sur les 35 % d'écoutes de moins de 30 s (§55).
- **Relevé calé sur la fin réelle du morceau** (`next_track` de l'API RadioKing), comme le fait déjà `RadioPlayer.astro`, au lieu d'un rythme fixe de 10 s qui tournait même écran éteint. Mesuré : **1 requête au lieu de 16** pour un morceau de 2 min 40, et le titre change à l'écran à la seconde où il change à l'antenne. À l'arrêt, plus de sondage en boucle : un relevé à l'ouverture, un au retour au premier plan.
- **Palier progressif sur les reconnexions** : 5 s → 10 s → 30 s → 60 s au lieu de 5 s indéfiniment, avec un message explicite à partir du troisième échec au lieu d'un « Reconnexion… » perpétuel.
- **Instrumentation** : l'appli n'envoyait qu'un seul type d'événement à Umami (les changements d'onglet), contre une dizaine sur le site depuis le §72 — la surface qui retient deux fois mieux était celle sur laquelle on ne savait rien. Treize événements désormais, au **nommage strictement identique à celui du site** (`roUmamiTrack` repris de `Footer.astro`), chacun portant `surface: 'appli'`. ⚠️ Ne jamais renommer un événement d'un côté sans l'autre. ⚠️ La table `PLATEFORMES` doit rester alignée avec celle de `Footer.astro` et avec `SAME_AS` de `Layout.astro`.

### Vérifications

Tout a été vérifié sur Chromium piloté par Playwright, élément `<audio>` neutralisé et API RadioKing simulée : ouverture hors ligne sur `/?source=pwa`, restauration du curseur de volume, valeur de stockage corrompue sans exception, affichage du titre sans lecture, absence de sondage à l'arrêt, un seul relevé supplémentaire à la fin du morceau, numérotation des tentatives de reconnexion, et départ effectif des treize événements. Syntaxe des deux blocs `<script>` et du service worker validée par `node --check`.

⚠️ **Leçon de la journée, la plus utile** : le banc d'essai ne voit pas la session audio d'iOS. Les quatre correctifs du §76 y passaient tous. Trois publications ont été nécessaires pour découvrir que le premier était nuisible. **Pour tout ce qui touche à la lecture, à la pause ou à la reconnexion, un test sur un vrai iPhone est obligatoire avant publication** — `npx vercel` sans `--prod` crée une préversion installable sur l'écran d'accueil, à supprimer après le test. `CACHE_VERSION` sert désormais de repère de version vérifiable en ligne (`app.radio-odyssey.com/service-worker.js`) : l'incrémenter à chaque publication, sans quoi on teste sans savoir quelle version tourne — ce qui est arrivé deux fois aujourd'hui.

### Reste à faire, par ordre d'effet décroissant

1. **Porter les mêmes correctifs au lecteur du site** — `RadioPlayer.astro` a la même limite iOS (77.1), et son relevé de titre est déjà calé sur `end_at`, mais l'avertissement sur la session audio doit y figurer aussi.
2. **Lire les nouveaux événements** après quelques jours : part des écoutes courtes qui sont des échecs techniques, conversion du bandeau d'installation, taux de lancement de l'exercice de respiration.
3. Polices auto-hébergées : perdues hors ligne (le service worker ne met en cache que le même domaine), et transfert d'IP vers Google sans consentement. **Mentions légales et politique de confidentialité absentes de `app.radio-odyssey.com`** — deux liens à ajouter dans l'onglet « À propos ».
4. Grille du week-end et du vendredi soir : l'onglet Programme est statique 7 j/7 alors que le §58 a établi une grille distincte. `.sched-item.current` est stylé mais n'est appliqué par aucune ligne de JavaScript — l'émission en cours n'est jamais mise en avant.
5. Dépôt GitHub pour l'appli : aucun dépôt distant, publication manuelle, donc pas de sauvegarde hors machine.
6. Contraste : `--muted` (#7878a8) donne 3,11:1 sur les cartes, sous le seuil AA de 4,5:1, alors qu'il porte l'artiste du titre en cours et tout l'historique.
7. Débrancher les endpoints push inutilisés (§75) : `admin.html` n'est plus publié, mais `api/subscribe.js` et `api/send.js` restent en ligne.

---

*Dernière mise à jour : 2026-08-16, correctifs et limites de l'appli V8 (§77).*

---

## 78. Appli V8 — conformité, polices, et un transfert dans l'autre sens (2026-08-16)

Points 1 et 3 du « reste à faire » du §77. En allant pour porter les correctifs de l'appli vers le lecteur du site, il s'est avéré que **le site était déjà en avance** : il affiche le titre avant lecture, se cale déjà sur `end_at`, est instrumenté depuis le §72, et auto-héberge ses polices depuis longtemps (`public/assets/fonts/`). Le transfert utile allait donc dans l'autre sens.

### 78.1 Séquences de cohérence cardiaque : l'appli ne les traitait pas

Le §62 avait réglé le problème côté site : RadioKing remonte ces séquences sous leur nom de fichier interne (« CC 3 min 5 inspire / 5 expire Nov05bis »), et `estSequenceRespiration()` / `libelleSequence()` le remplacent par un intitulé lisible. **L'appli n'avait jamais reçu ce traitement** : le nom de fichier s'affichait tel quel — dans l'appli, mais aussi sur l'écran verrouillé et sur les écrans de voiture via Media Session, sept fois par jour minimum (7h, 8h, 9h, 12h, 13h, 18h, 19h pour les séquences longues).

Les deux fonctions sont reprises à l'identique, expression régulière comprise. ⚠️ **Si un nouveau format de nommage apparaît dans RadioKing, il faut désormais élargir la regex des deux côtés** : `RadioPlayer.astro` et `Appli Radio Odyssey V8/index.html`.

### 78.2 Polices auto-hébergées dans l'appli

L'appli chargeait Nunito et Inter depuis `fonts.googleapis.com`. Trois défauts en un :

- **Hors ligne, la typographie disparaissait.** Le service worker ne met en cache que le même domaine (`res.type === 'basic'`) : l'appli retombait en police système au moment précis où son bandeau annonçait qu'elle restait utilisable — soit le cas d'usage même du §76.2.
- **Deux résolutions DNS et deux poignées de main TLS** avant le premier rendu. Le `preconnect` ne couvrait même pas `fonts.gstatic.com`, d'où venaient réellement les fichiers : il était à moitié inutile.
- **L'adresse IP de chaque auditeur partait chez Google** avant tout consentement.

Fichiers variables, sous-ensemble latin, servis depuis notre domaine et ajoutés à la coquille du service worker : une requête par famille au lieu d'une par graisse, et la typographie survit au mode hors ligne. ⚠️ Le sous-ensemble latin a été vérifié pour `U+0152-0153` (Œ/œ), employé par « Cœur en cohérence ». Licences OFL dans `fonts/`. Contrepartie assumée : 88 Ko ajoutés à la coquille, mis en cache une fois pour toutes.

### 78.3 Mentions légales

`app.radio-odyssey.com` n'en portait aucune, alors qu'elles sont obligatoires en France (LCEN) pour tout service de communication au public en ligne, sous-domaine compris. Deux liens ajoutés dans l'onglet « À propos », vers les pages du site plutôt qu'un texte dupliqué qui divergerait, plus une phrase sur l'absence de cookie et de traceur publicitaire. La mesure Umami étant sans cookie, et les polices n'étant plus tierces, il n'y a plus rien à faire consentir.

### 78.4 Avertissement porté dans le lecteur du site

`RadioPlayer.astro` reçoit, au-dessus de ses `setActionHandler`, le même avertissement détaillé que l'appli sur la limite iOS du §77.1 : symptôme, trois contournements testés et pourquoi chacun échoue, contournement théorique écarté et sa raison, et l'obligation de tester sur un vrai iPhone. Commentaire uniquement — aucun changement de comportement, le rendu du site est identique.

### Vérifications

Sur Chromium piloté : aucune requête vers `googleapis`/`gstatic`, les deux `woff2` servis par notre domaine, `document.fonts.check()` positif pour Nunito 800 et Inter 500, libellé de séquence correct à l'écran **et** dans les métadonnées Media Session, présence des deux liens légaux, les deux polices dans la coquille du service worker, et ouverture hors ligne avec la typographie intacte. Les tests des §76-77 rejoués sans régression. `CACHE_VERSION` en `v20`, vérifiée en ligne après publication.

### Reste à faire

Inchangé par rapport au §77, moins les points traités ici : lecture des nouveaux événements après quelques jours, grille du week-end et émission en cours dans l'onglet Programme (`.sched-item.current` est stylé mais n'est appliqué par aucune ligne de JavaScript), dépôt GitHub pour l'appli, contraste de `--muted` (3,11:1, sous le seuil AA), et débranchement des endpoints push inutilisés. À noter aussi : `public/console.html` du site, outil obsolète mais toujours accessible en ligne, charge encore des polices Google — même exposition qu'au 78.2, sur une page que plus personne n'utilise.

---

*Dernière mise à jour : 2026-08-16, conformité et polices de l'appli V8 (§78).*

---

## 79. Suppression de l'ancienne console d'édition (2026-08-16)

`public/console.html` — l'outil d'édition de HTML brut d'avant la migration Astro — était obsolète depuis le §0 mais restait servi en ligne. Relevé au §78 en traitant les polices de l'appli : **cette page chargeait encore Nunito, Inter et JetBrains Mono depuis `fonts.googleapis.com`**, et transmettait donc l'adresse IP de tout visiteur à Google, sans consentement, pour un outil que plus personne n'utilise et qui ne pouvait plus rien faire d'utile (le HTML final étant regénéré à chaque build, toute édition directe aurait été écrasée).

La supprimer règle la question sans écrire une ligne de code, et retire 37 Ko du déploiement.

**Vérifications faites avant de supprimer** : aucune page du site n'y renvoie (`grep` sur `src/`), l'URL n'est pas au sitemap, et aucune règle de `vercel.json` ne la concerne. Le seul point d'attache était `robots.txt`.

⚠️ **La ligne `Disallow: /console.html` a été retirée de `robots.txt` en même temps.** C'est délibéré et c'est le bon ordre : une URL interdite au crawl ne peut pas être constatée disparue. En laissant les moteurs y accéder, ils reçoivent un 404 et retirent l'URL de leurs index. La garder aurait figé une adresse morte dans les résultats. Même raisonnement que pour toute page supprimée : laisser voir le 404 plutôt que le masquer.

Reste dans `robots.txt` : les interdictions sur `/sitemap.xml/` et `/hors-ligne.html`, toujours justifiées.

---

*Dernière mise à jour : 2026-08-16, suppression de la console d'édition (§79).*

---

## 81. Version anglaise — lot 1 : les 13 pages passent sous `/en/` (2026-08-16)

Le point 11 des « Prochaines étapes » posait le choix depuis des semaines : `/en/` complet, ou repli assumé. **Décision : ni l'un ni l'autre au sens strict.** Traduire les 255 pages n'a aucun sens — le site reçoit ~15 visiteurs par semaine hors campagne, et un site anglais de 255 pages sans audience anglophone ne serait qu'un doublon à maintenir. Ce qui est retenu : une **sélection assumée de portes d'entrée**, pensées pour un public froid (qui arrive sans connaître la marque), messages courts et orientés bénéfice.

Périmètre du chantier, en cinq lots : (1) regrouper les 13 pages anglaises existantes sous `/en/`, (2) créer une vraie page d'accueil anglaise et traduire trois pages de fond, (3) porter le bloc E-E-A-T du §72 sur les deux pages anglaises de cohérence cardiaque, (4) traduire le gabarit de fiche artiste — le plus gros levier, il débloque n'importe quelle fiche à coût marginal quasi nul —, (5) traduire un ou deux quiz. **Ce paragraphe ne couvre que le lot 1.**

### Pourquoi commencer par les URLs, et pas par le contenu

L'ordre naturel aurait été de commencer par le lot 3 (composants déjà prêts, effet immédiat). Il a été inversé pour une raison mécanique : traiter le contenu d'abord aurait fait retoucher deux fois les mêmes fichiers, et surtout aurait produit des fiches artistes anglaises pointant vers des URLs sur le point de changer. Déplacer d'abord, écrire ensuite.

### `/en.html` et non `/en/`

Le préfixe visé était `/en/`. Il ne peut pas exister tel quel : avec `build.format: 'file'` et `trailingSlash: 'never'`, Astro écrit `src/pages/en/index.astro` dans `dist/en.html` — vérifié par un projet Astro 7 isolé reproduisant la configuration, plutôt que supposé. Le schéma retenu est donc :

| | |
|---|---|
| Accueil anglais | `/en.html` (lot 2, pas encore créé) |
| Les 13 pages | `/en/<slug>.html` |

C'est cohérent avec le reste du site, où **toutes** les URLs se terminent par `.html`. ⚠️ Ne pas « corriger » cela en passant `build.format` à `'directory'` : les 240 URLs du sitemap y perdraient leur `.html` d'un coup, ce que la contrainte SEO n°1 du projet interdit.

### Les 301, et le piège du §60 vérifié avant

Treize redirections permanentes ajoutées à `vercel.json` (10 règles → 23). Le contrôle imposé par le §60 — *aucune règle héritée ne doit porter l'URL d'une page réelle* — a été fait dans les deux sens et automatisé dans le script de vérification : aucune des 23 sources ne correspond à un fichier existant de `dist/`, et toutes les destinations existent.

Deux règles héritées pointaient vers `/listen-on-tunein.html`. Elles ont été **réécrites vers la nouvelle URL** plutôt que laissées en place : sinon `/listen-to-radio-odyssey-on-alexa.html` aurait produit deux sauts au lieu d'un. Il ne reste aucune chaîne de redirection.

### Le `hreflang` était faux sur les 258 pages

En allant poser les balises, le mécanisme existant s'est révélé inutilisable : `Layout.astro` émettait sur **chaque** page un `hreflang` auto-référent (sans valeur seul, un groupe d'équivalence a besoin d'au moins deux membres) et un `x-default` codé en dur vers l'accueil français — **y compris sur les 13 pages anglaises, qui renvoyaient donc l'anglophone vers du français.**

Remplacé par une prop `altLangs={{ fr: '…', en: '…' }}` : les deux balises ne sont émises que dans un vrai groupe, et `x-default` désigne la version française, langue par défaut du site.

⚠️ **Une paire ne se déclare qu'entre deux pages traitant réellement du même sujet.** Cinq paires ont été retenues, chacune après comparaison du titre et de la description des deux pages — pas sur la ressemblance du slug :

| Français | Anglais |
|---|---|
| `/radio-coherence-cardiaque.html` | `/en/heart-coherence-breathing-radio.html` |
| `/coherence-cardiaque-au-bureau.html` | `/en/heart-coherence-breathing-at-work.html` |
| `/musique-positive-et-bonne-humeur.html` | `/en/music-for-a-better-mood.html` |
| `/radio-sans-publicite.html` | `/en/free-radio-no-ads-no-sign-up.html` |
| `/radio-annees-80-en-ligne.html` | `/en/80s-throwback-radio-online.html` |

Les huit autres pages anglaises (`positive-european-music-station`, `european-chill-radio`, `feel-good-music-radio`, `keep-listening-radio-odyssey`, `radio-odyssey-vs-meditation-apps`, `why-positive-radio-is-trending`, `listen-on-tunein`, `radio-for-focus-and-productivity`) n'ont **pas** d'équivalent français : ce sont des pages anglaises d'origine, pas des traductions. Leur en inventer un aurait fait perdre le bénéfice du groupe entier. Elles n'émettent donc aucun `hreflang`, ce qui est le comportement correct.

### Vérifications

⚠️ **`npm run build` ne peut pas tourner sur le dossier monté** : `node_modules` est installé pour `darwin-arm64` et le pont de fichiers expose un VM `linux-arm64`, d'où un `Cannot find native binding` sur Rolldown. La vérification a été refaite dans un conteneur séparé, sur la même version d'Astro, à partir d'une archive des sources.

Build : **258 pages, aucune erreur** (nombre inchangé — déplacement, pas création). Sur `dist/` : 13 fichiers dans `en/`, 240 URLs au sitemap toutes présentes et aucune en `noindex`, **39 819 liens internes vérifiés, zéro cible absente**, aucun `<title>` de moins de trois mots, 19 pages en `noindex` (18 fiches artistes sous le seuil + `hors-ligne.html`, conforme). Les dix pages des cinq paires déclarent un groupe `hreflang` réciproque et symétrique — contrôle automatisé dans les deux sens, une déclaration unilatérale étant ignorée par Google.

### Reste à faire sur ce chantier

Lots 2 à 5, dans cet ordre : accueil anglais `/en.html` + traduction de `histoire-de-radio-odyssey`, `pourquoi-radio-odyssey-est-differente` et `faq-radio-odyssey` ; bloc E-E-A-T sur les deux pages anglaises de cohérence cardiaque ; gabarit de fiche artiste anglais ; un ou deux quiz.

⚠️ **`AuthorReview.astro` et `SourcesBlock.astro` ont leurs libellés en dur en français** (« Relu par… », « Dernière vérification », le rappel de non-substitution à un avis médical, « Sources et références »), et les `label` de `data/reviewer.js` aussi. Le lot 3 n'est donc pas un simple ajout d'import : il demande une prop de langue sur les deux composants et un jeu de libellés de sources en anglais. Les deux sources de cohérence cardiaque (Inserm, Goessl 2017) restent citables telles quelles.

⚠️ **Décision de maillage prise pour toute la suite** : sur une page anglaise, un lien interne n'est affiché que si sa cible existe en anglais. Pas de renvoi vers le français, même signalé. Cela concerne surtout le gabarit de fiche artiste du lot 4, dont `linkHref`, le bloc quiz, les voisins de classement et `RelatedPages` pointent tous vers des pages françaises.

⚠️ La navigation (`Header.astro`, `MegaNav.astro`, `Footer.astro`, `Sidebar.astro`) reste **entièrement en français sur les 13 pages anglaises**. Non traité au lot 1, et c'est le premier point du lot 2 : un visiteur froid qui arrive sur `/en/feel-good-music-radio.html` voit un menu qu'il ne peut pas lire.

---

*Dernière mise à jour : 2026-08-16, version anglaise lot 1 — les 13 pages sous `/en/` (§81).*

---

## 82. Version anglaise — lot 2 : une vraie porte d'entrée anglophone (2026-08-16)

Suite du §81. Le lot 1 avait déplacé les URLs ; celui-ci rend le site réellement lisible en anglais. Trois chantiers dans un seul lot, parce qu'ils n'ont aucun sens séparés : une page d'accueil anglaise entourée d'un menu français n'aurait rien réglé.

### 1. L'interface était écrite en dur en français

C'est le point qui a occupé le plus de temps, et il n'était pas au périmètre initial — il est apparu en regardant les composants. `Header`, `MegaNav`, `Footer`, `Sidebar`, `SearchModal`, `CookieConsent`, `WebviewBanner` et `RadioPlayer` portaient tous leurs libellés en dur. Sur les 13 pages anglaises, cela donnait : « EN DIRECT » dans la barre, « Appuyer pour écouter » sous le lecteur, un méga-menu de 7 catégories françaises, « Voir tout → », « Gérer les cookies », « Rechercher sur le site ». Le contenu était en anglais, tout ce qui l'entoure ne l'était pas.

Nouveau fichier `src/data/i18n.js` : source unique des libellés d'interface, `UI.fr` / `UI.en`, plus un helper `t(lang)`. Les huit composants prennent une prop `lang` et `Layout.astro` la leur transmet. Les scripts en ligne (lecteur, bandeau navigateur) reçoivent leurs chaînes par `define:vars` plutôt que de les porter en dur.

⚠️ **`#topRadioBar` et le bandeau navigateur portent `transition:persist`** : ils survivent aux navigations client-side d'Astro, script compris. Leurs libellés sont donc figés dans la langue de la **première** page chargée. Passer de l'accueil français à l'accueil anglais sans rechargement laisse le lecteur en français. Cas de bord assumé — les deux versions ne se croisent qu'à cet endroit, et un rechargement complet remet tout d'aplomb.

### 2. La navigation anglaise n'est pas le menu français traduit

Traduire les 7 catégories aurait produit un menu anglais pointant vers 108 pages françaises. `EN_NAV_CATEGORIES` est donc une structure propre, sur les seules pages anglaises, en trois groupes correspondant à l'ordre dans lequel un visiteur froid se pose les questions : **Listen** (6), **Calm & Focus** (5), **About** (6). Pas de page de hub par groupe : ils tiennent en 5 ou 6 entrées, toutes affichées, donc `MENU_APERCU` ne s'y applique pas.

⚠️ **Règle de maillage, valable pour toute la suite du chantier** : sur une page anglaise, un lien interne n'est affiché que si sa cible existe en anglais. Deux exceptions, et seulement deux :

- **Mentions légales et politique de confidentialité** restent liées, libellé en anglais, vers les pages françaises. Ce sont des obligations légales, et ce sont les seuls documents qui font foi — les retirer d'une page publique serait pire qu'un lien dans la mauvaise langue.
- **L'accueil français**, depuis la seule barre latérale de `/en.html` (« Vous cherchez la version française ? »), en français dans le texte pour être compris de celui à qui il s'adresse.

Le plan du site et le bloc partenaire du pied de page, purement éditoriaux et sans équivalent anglais, sont retirés côté anglais.

### 3. Cinq pages, dont une non prévue

| Page | URL |
|---|---|
| Accueil anglais | `/en.html` |
| L'histoire de la radio | `/en/the-story-of-radio-odyssey.html` |
| Ce qui la différencie | `/en/what-makes-radio-odyssey-different.html` |
| FAQ | `/en/radio-odyssey-faq.html` |
| Elisabeth Bélot-Grimaud | `/en/elisabeth-belot-grimaud-radio-odyssey.html` |

**L'accueil** est écrit pour quelqu'un qui n'a jamais entendu parler de la station : ce que c'est, pourquoi on resterait, comment on écoute — dans cet ordre. Pas d'historique en tête de page, il est à un clic pour qui veut. Le bouton d'écoute apparaît trois fois, dont une dès le premier bloc.

**Les deux pages de fond ne sont pas des traductions ligne à ligne, et c'est délibéré.** Les versions françaises fonctionnent comme des sommaires : chaque section résume un sujet puis renvoie vers l'article complet (comment la musique est choisie, les bienfaits, les avis…). Aucun de ces articles n'existe en anglais. Les sections anglaises portent donc la substance elles-mêmes au lieu de la déléguer — sans quoi la page aurait été une suite de promesses sans destination.

**La page d'Elisabeth Bélot-Grimaud n'était pas au périmètre.** Elle s'est imposée en trouvant que cinq pages anglaises la liaient déjà — huit liens vers une page entièrement française. Sur une zone santé, un lecteur qui ne peut pas vérifier qui est la personne citée perd tout le bénéfice de la citer. Elle débloque aussi le lot 3, où le bloc « Relu par » a besoin d'une destination. ⚠️ **Personne réelle et nommée** : chaque ligne de la version anglaise est la traduction d'un fait déjà présent en français, titres d'ouvrage, de podcast et noms de modèles laissés en français puisque ce sont des noms propres. Même règle qu'au §72 — ne jamais l'enrichir de mémoire.

### 4. Le fil d'Ariane pointait vers l'accueil français

`PageHero` liait « 🏠 Home » vers `/`, et le schema `BreadcrumbList` de `Layout.astro` posait « Accueil » → `/` sur les pages anglaises. Deux nouvelles props (`homeHref`, `breadcrumb`) et un calcul par langue dans `Layout` corrigent les deux. `/en.html` est reconnu comme racine : pas de fil d'Ariane, pas de schema, comme l'accueil français.

### 5. Recherche interne

⚠️ **Pagefind construit un index par langue** à partir de l'attribut `lang` de `<html>`, et sert celui de la page courante. Vérifié après build : `fr` = 245 pages, `en` = 18. Une recherche depuis une page anglaise ne remonte donc que des pages anglaises — c'est le comportement voulu, mais il rend l'index anglais très petit. Si la recherche paraît vide côté anglais, c'est cela, pas une panne.

### Vérifications

Build : **263 pages** (258 + 5), aucune erreur. Contrôles automatisés sur `dist/` :

| Contrôle | Résultat |
|---|---|
| Pages anglaises construites | 18 (`/en.html` + 17) |
| Sitemap | 245 URL, 0 absente de `dist/`, 0 en `noindex` |
| Liens internes | **38 720 vérifiés, 0 cible absente** |
| Libellés français visibles sur une page anglaise | 0 (hors la phrase française assumée de la barre latérale) |
| Liens vers du français depuis une page anglaise | 0 (hors les deux exceptions ci-dessus) |
| `hreflang` | 20 pages = 10 paires, réciprocité et symétrie vérifiées dans les deux sens |
| `<title>` de moins de trois mots | 0 |
| Pages en `noindex` | 19 (18 fiches + `hors-ligne.html`) |
| Règles `vercel.json` masquant une page réelle | 0 |
| `<html lang="en">` | 18 / 18 |

⚠️ Rappel du §81 : `npm run build` ne peut pas tourner sur le dossier monté par le pont de fichiers (`node_modules` en `darwin-arm64`, VM en `linux-arm64`). Ces vérifications ont été faites dans un conteneur séparé, sur la même version d'Astro.

### Relevé au passage, non traité

⚠️ **`src/data/artists.js`, fiche Mika** : `linkHref` pointe vers `/en/feel-good-music-radio.html` avec le libellé français « feel good music radio ». Un lecteur français y est donc envoyé sur une page entièrement anglaise. L'équivalent français existe (`/musique-positive-et-bonne-humeur.html`). Non modifié : les fiches artistes sont de la donnée éditoriale du propriétaire. Le même défaut sur `pourquoi-radio-odyssey-est-differente.astro`, lui, a été corrigé — la phrase promettait « notre philosophie de radio positive » et la page française du même nom existe.

### Reste à faire sur ce chantier

Lot 3 (bloc E-E-A-T sur les deux pages anglaises de cohérence cardiaque — ⚠️ `AuthorReview.astro` et `SourcesBlock.astro` ont toujours leurs libellés en dur en français, et les `label` de `data/reviewer.js` aussi), lot 4 (gabarit de fiche artiste anglais), lot 5 (un ou deux quiz).

---

*Dernière mise à jour : 2026-08-16, version anglaise lot 2 — accueil, interface et pages de fond (§82).*

---

## 83. Version anglaise — lot 3 : E-E-A-T sur les deux pages anglaises de cohérence cardiaque (2026-08-16)

Le §72 avait posé le bloc auteur/relecteur et les sources externes sur 15 des 18 pages bien-être. Les deux pages **anglaises** de cohérence cardiaque n'y figuraient pas : elles avançaient les mêmes effets que leurs équivalentes françaises — respiration, stress, variabilité cardiaque — sans auteur nommé, sans date de vérification et sans source. Sur une zone YMYL, c'est précisément la différence que les Quality Rater Guidelines demandent aux évaluateurs de regarder.

### Ce n'était pas un simple ajout d'import

`AuthorReview.astro`, `SourcesBlock.astro` et `data/reviewer.js` portaient leurs libellés en dur en français : « Relu par », « Dernière vérification », le rappel de non-substitution à un avis médical, « Sources et références », et l'intitulé de chaque source. Les trois sont désormais bilingues, sur le même principe que les composants de mise en page du §82 : une prop `lang`, et des libellés séparés.

Côté données, `reviewer.js` gagne `ELISABETH_REVIEWER_EN`, `DATE_REVISION_BIEN_ETRE_LABEL_EN` et `SOURCES_COHERENCE_CARDIAQUE_EN`. Deux points qui ne sont pas cosmétiques :

- ⚠️ **`href` pointe vers la page anglaise d'Elisabeth Bélot-Grimaud**, créée au §82. Un bloc « Reviewed by » qui renverrait vers sa fiche française enverrait le lecteur venu vérifier la relecture sur une page qu'il ne peut pas lire — c'est-à-dire exactement l'inverse de ce que le bloc est censé produire. C'est la raison pour laquelle cette page a été ajoutée au lot 2.
- ⚠️ **Les URLs des sources sont les mêmes** dans les deux langues : ce sont les mêmes travaux, vérifiés une fois au §72. Seul l'intitulé est traduit. La source Inserm est explicitement signalée **« (in French) »** — le lecteur doit savoir avant de cliquer qu'il arrive sur un document français.

### Dates d'article

`articleDatePublished` a été relevée par `git log --follow --diff-filter=A` sur chaque fichier, comme au §72, jamais inventée : **2026-07-04** pour `heart-coherence-breathing-radio`, **2026-07-27** pour `heart-coherence-breathing-at-work`. `articleDateModified` porte la date de vérification du 16 août, et `articleAuthorName` fait basculer le schema Article de `Organization` à `Person`.

### Attribution

Elisabeth Bélot-Grimaud est créditée sur ces deux pages, et sur elles seules côté anglais. La règle du §72 est inchangée : elle n'est nommée que là où elle est réellement impliquée — ici les séquences de cohérence cardiaque qu'elle a conçues et qu'elle voix. ⚠️ **Ne pas étendre son nom aux autres pages anglaises** (`radio-for-focus-and-productivity`, `music-for-a-better-mood`, `radio-odyssey-vs-meditation-apps`) : elles mentionnent la respiration sans justifier une caution individuelle, exactement comme leurs cousines françaises portent « Rédaction Radio Odyssey ».

### Vérifications

Build : 263 pages, aucune erreur. Sur `dist/` :

| Contrôle | Résultat |
|---|---|
| Bandeaux « Relu par » / « Reviewed by » | **11 en français, 2 en anglais** — comptes attendus, aucune page n'en a gagné ou perdu |
| Lien du relecteur | `/en/…` sur les pages anglaises, `/elisabeth-…` sur les françaises, vérifié séparément dans les deux sens |
| Bloc sources | 2 entrées sur chaque page anglaise, mention « in French » présente sur l'Inserm |
| Schema Article | `author` = Person « Elisabeth Bélot-Grimaud », `datePublished` ≠ `dateModified` sur les deux pages |
| Non-régression française | les 2 pages françaises de référence gardent bandeau, sources et lien français intacts |

Et la batterie complète du chantier, rejouée : 18 pages anglaises, 245 URL au sitemap toutes présentes, **38 722 liens internes vérifiés sans une cible absente**, 0 libellé français visible sur une page anglaise, 0 lien vers du français hors les deux exceptions, 20 pages en `hreflang` réciproques, 0 titre tronqué, 19 `noindex`, 0 règle `vercel.json` masquant une page.

⚠️ **Piège rencontré en vérifiant** : le premier contrôle a conclu à l'absence du bandeau sur les deux pages anglaises. C'était faux — la chaîne `ro-author-review` apparaît d'abord dans le CSS en ligne d'Astro, et l'extraction lisait la feuille de style au lieu du balisage. ⚠️ Une vérification automatisée sur `dist/` doit chercher `<div class="ro-author-review"`, pas la classe seule. Le même piège guette tout contrôle de présence par nom de classe.

⚠️ **Second piège, plus vicieux** : une archive de sources fraîchement copiée dans le conteneur de vérification s'est extraite dans sa version précédente (cache du montage), et le build a validé un état périmé sans rien signaler. **Vérifier après extraction qu'un marqueur du dernier changement est bien présent dans la source** avant de tirer la moindre conclusion d'un build.

### Ce lot clôt le socle publiable

Lots 1 à 3 forment un ensemble qui se tient : 18 pages anglaises, un accueil, une interface entièrement anglaise, et la caution E-E-A-T sur les pages santé. Les lots 4 (gabarit de fiche artiste anglais) et 5 (un ou deux quiz) ajoutent du contenu sans rien restructurer : ils peuvent partir dans un second temps.

⚠️ **Avant publication, un test manuel est indispensable, et il ne porte pas sur l'anglais.** Le §82 a modifié `Layout.astro`, `Header`, `Footer`, `PageHero`, `RadioPlayer`, `CookieConsent`, `SearchModal` et `WebviewBanner` — donc les **263 pages, dont les 245 françaises**. Un build ne voit ni un menu qui ne s'ouvre plus, ni un lecteur qui ne démarre pas. Et la consigne de `CLAUDE.md` s'applique en plein : test iPhone obligatoire dès qu'on touche à la lecture, à la pause ou à la reconnexion — les libellés envoyés à Media Session ont changé.

---

*Dernière mise à jour : 2026-08-16, version anglaise lot 3 — E-E-A-T anglais (§83).*

---

## 84. Le test manuel trouve un défaut en ligne depuis des mois — et le chaînon manquant entre les deux langues (2026-08-16)

La vérification avant publication des lots 1 à 3 a remonté trois anomalies. **Deux ne venaient pas de ce chantier : elles sont en production aujourd'hui.** La troisième était une conséquence directe d'une règle du §82.

### 1 et 2. La recherche et le bandeau cookies cessaient de répondre après un changement de page

Symptôme rapporté : la loupe n'ouvre rien, et les boutons « Accepter »/« Refuser » ne font rien — sur certaines pages seulement, sans logique apparente.

Reproduit sur navigateur piloté : **tout fonctionne au chargement direct d'une page, et plus rien après la première navigation client-side.** Aucune erreur en console, ce qui explique que le défaut soit passé inaperçu si longtemps.

**Cause.** `ClientRouter` remplace le corps du document sans réexécuter un script en ligne dont le contenu n'a pas changé — comportement normal et voulu : le script est censé avoir posé des effets durables. Or `SearchModal.astro` et `CookieConsent.astro` posaient leurs écouteurs **directement sur des éléments** (`.ro-search-trigger`, `#ro-search-close`, `#ro-cookie-accept`…). Après un échange de document, ces éléments sont neufs, sans écouteur, et le script qui les aurait rebranchés ne tourne plus.

**Depuis quand.** Depuis l'arrivée de `ClientRouter` (commit `04a55a6`, « lecture persistante entre pages »), donc bien avant ce chantier. Vérifié en construisant le commit `7d4943d` (§80) et en rejouant le même scénario : identique. Le §60 avait déjà traité ce problème pour les menus — en remplaçant `bootstrap.bundle.min.js` par un écouteur **délégué** sur `document` — mais sans que personne remarque que la recherche et le bandeau cookies souffraient du même mal.

⚠️ **Le §80 a rendu visible un défaut jusque-là silencieux, sans le créer.** Avant lui, le bandeau cookies portait `hidden` par défaut et n'était affiché que par son script : après une navigation, le script ne tournant pas, le bandeau restait simplement invisible. Le §80 l'a rendu visible par défaut pour la performance — le bandeau apparaissait alors, et ne répondait pas. C'est exactement le genre d'enchaînement qu'un correctif de performance peut produire sans que rien ne le signale.

**Correctif**, aligné sur ce que le §60 avait fait pour les menus :

- Écouteurs **délégués sur `document`**, posés une seule fois (`window.__roSearchBound`, `window.__roCookieBound`). `document` n'est pas remplacé par `ClientRouter`.
- Les éléments sont **relus à chaque usage**, jamais mémorisés dans une variable au chargement.
- L'interface Pagefind est réinstanciée si le conteneur de la page courante est vide, sans recharger le script (`window.PagefindUI` reste en mémoire).
- ⚠️ Le choix cookies est marqué par la classe `ro-cookie-decided` sur `<html>` plutôt que par l'attribut `hidden` du bandeau — mais **`ClientRouter` recopie les attributs du `<html>` entrant à chaque navigation**, ce qui efface la classe. L'état est donc réappliqué sur `astro:after-swap`, déclenché avant peinture, donc sans clignotement. Sans cela, le bandeau revenait à chaque page alors que le consentement était bien enregistré.

⚠️ **Règle générale à retenir pour ce projet** : sur ce site, **tout écouteur d'événement doit être délégué à `document`**, et tout état visuel qui doit survivre à une navigation doit être réappliqué sur `astro:after-swap`. Un écouteur posé sur un élément précis ne survit pas à la première navigation, et cela ne produit **aucune erreur** — donc aucun signal.

### 3. Aucun chemin de retour du français vers l'anglais, ni l'inverse

La règle du §82 — sur une page anglaise, un lien interne n'est affiché que si sa cible existe en anglais — avait supprimé le seul chemin de retour existant : l'ancien menu français affiché sur les pages anglaises. Résultat : un lecteur arrivé sur `/en/…` ne pouvait plus revenir au site français, et l'accueil français n'offrait aucune entrée vers l'anglais.

**Un sélecteur de langue est précisément le cas où le lien inter-langues est le sujet, pas un accident.** Ajouté à trois endroits : barre de menu (ordinateur), panneau latéral (mobile) et pied de page. Il pointe vers la **page équivalente** quand le couple existe (`altLangs`, transmis par `Layout.astro` à `Header` et `Footer`), sinon vers l'accueil de l'autre langue — 8 des 18 pages anglaises ont ainsi une cible précise, les 10 autres renvoient à l'accueil français.

⚠️ **Ces liens portent `data-astro-reload`**, et ce n'est pas optionnel : `#topRadioBar` est en `transition:persist`, donc une navigation client-side conserverait la barre du lecteur avec les libellés de la langue précédente. C'est ce que le §82 avait consigné comme « cas de bord assumé » — le sélecteur en faisait un passage normal, il fallait donc le traiter. Un chargement complet est la seule façon de reconstruire la barre dans la bonne langue.

### Au passage : `define:vars` retiré des composants de mise en page

`RadioPlayer`, `SearchModal` et `WebviewBanner` recevaient leurs libellés par `define:vars`, qui génère un `const` en tête de script. Le contenu du script différait donc d'une langue à l'autre — et un script au contenu différent **est** réexécuté par `ClientRouter`, ce qui aurait levé une `SyntaxError` de redéclaration au passage français → anglais, emportant tout le lecteur. Les libellés passent désormais par des attributs `data-` lus au moment utile : le script redevient identique sur les 263 pages, donc jamais réexécuté, et les libellés suivent la langue de la page réellement affichée.

### Vérifications

Comparaison avant/après sur navigateur piloté, même scénario, après une navigation client-side sur une page française :

| | avant (§80, état en ligne) | après |
|---|---|---|
| Recherche (loupe) | **KO** | OK |
| Boutons cookies | **KO** | OK |
| Choix cookies retenu d'une page à l'autre | **KO** | OK |

Parcours complet sans une seule erreur JavaScript. Sélecteur de langue : présent sur les 18 pages anglaises, cible correcte (page équivalente pour 8 d'entre elles), et le passage FR → EN reconstruit bien la barre en anglais (« ON AIR », « Tap to listen »).

Batterie du chantier rejouée : 263 pages, 18 anglaises, 245 URL au sitemap toutes présentes, **39 511 liens internes vérifiés sans une cible absente**, 0 libellé français visible côté anglais, 0 lien vers du français hors le sélecteur et les deux exceptions légales, 20 pages en `hreflang` réciproques, 0 titre tronqué, 19 `noindex`, 0 règle `vercel.json` masquante.

### Ce que cet épisode dit de la méthode

Les trois lots précédents avaient passé tous les contrôles automatisés : build sans erreur, 38 722 liens vérifiés, `hreflang` réciproques, aucun libellé français côté anglais. **Aucun de ces contrôles ne pouvait voir un bouton qui ne répond plus** — il est présent dans le HTML, correctement libellé, correctement lié. Il ne manque qu'un écouteur, et le HTML construit n'en dit rien.

⚠️ Le test manuel avant publication n'est pas une formalité de fin de chantier : ici, il a trouvé un défaut vieux de plusieurs mois que personne n'avait vu, et qui touche la recherche interne de **toutes** les pages du site.

---

*Dernière mise à jour : 2026-08-16, écouteurs délégués et sélecteur de langue (§84).*

---

## 85. Le panneau des titres diffusés passe en composant, et deux corrections de poids (2026-08-16, nuit)

Trois demandes du propriétaire, plus ce qu'elles ont fait apparaître.

### 1. Une fiche artiste renvoyait un lecteur français vers une page anglaise

Relevé au §82, tranché ici : **le français doit pointer vers le français, l'anglais vers l'anglais.** La fiche Mika portait `linkHref: '/en/feel-good-music-radio.html'` avec un libellé français ; elle pointe désormais vers `/musique-positive-et-bonne-humeur.html`, qui est l'équivalent français exact du sujet annoncé par sa phrase `why` (« l'ambiance feel good recherchée sur l'antenne »). Vérification faite sur les 147 fiches : c'était la seule.

### 2. Le panneau « 4 derniers titres » devient un composant, et arrive sur l'accueil anglais

*« C'est une radio »* — l'accueil anglais montrait ce que la station est, pas ce qu'elle passe. Le panneau des quatre dernières pochettes est désormais entre « One station, one promise » et « Three reasons people stay ».

Il vivait en dur dans `src/pages/index.astro` : le balisage dans le corps de la page, et **259 lignes de CSS** dans son bloc `<style is:global>`. Le recopier pour l'anglais aurait garanti la divergence au premier changement de balisage chez RadioKing. Nouveau composant `NowPlaying.astro`, deux formes :

- `variante="section"` — bandeau pleine largeur avec vagues de transition, tel quel sur l'accueil français ;
- `variante="carte"` — même contenu au gabarit d'une `.content-card`, pour s'insérer dans une colonne. ⚠️ Les vagues n'auraient aucun sens dans une colonne : elles servent à raccorder deux bandeaux pleine largeur.

Effet de bord favorable : le CSS du widget, jusque-là propre à l'accueil, devient un fichier partagé par les deux accueils, et le reste du CSS de la page passe sous le seuil d'incorporation d'Astro — l'accueil français a donc une requête de moins.

⚠️ `#rk-played-tracks-widget` est le seul contenu tiers de l'accueil. Il n'est pas intercepté par le service worker (origine externe) : si RadioKing est indisponible, la zone reste vide et le reste de la page fonctionne.

### 3. Le chantier avait pris 11 Ko par page — la moitié était évitable

Mesure faite en comparant le HTML construit à celui du §80 : l'accueil était passé de 174 809 à 186 161 octets. Sur un site dont le §60 a passé un chantier entier à retirer du HTML, c'est trop pour ce qui avait été ajouté. Deux postes, tous deux corrigés :

- **Les commentaires du §84 étaient servis au navigateur.** Placés dans des `<script>` en ligne, ils partaient sur les 263 pages : 2 339 octets d'explications par page. Ils sont remontés dans le frontmatter des composants, retiré au build. ⚠️ **Règle générale : une explication va dans le frontmatter, jamais dans un `<script>` en ligne.** Le savoir reste dans le fichier, le navigateur ne le télécharge pas.
- **L'icône `globe` du sélecteur de langue pesait 1 098 octets**, rendue trois fois (deux fois dans le panneau mobile, une fois dans la barre). Supprimée : « English » / « Français » se suffit comme repère.

Reste **+5 507 octets sur l'accueil** (+3,2 %) et **+3 074 en moyenne** par rapport au §80, pour l'ensemble des lots 1 à 5 : balises `hreflang`, sélecteur de langue à trois emplacements, attribut `data-libelles` du lecteur, et écouteurs délégués. C'est le prix assumé de ce qui a été ajouté.

### Le piège qui a failli passer

⚠️ **Un `---` de soulignement dans un commentaire est indiscernable du délimiteur de frontmatter.** Le script qui remontait les commentaires cherchait le `---` fermant par `index('---\n')` — et l'a trouvé au milieu de la ligne `  ---------------------------` du commentaire d'en-tête de `RadioPlayer.astro`, coupant le fichier en deux. Erreur de compilation nette au build, mais **le build n'était plus possible** : le pont de fichiers vers la machine du propriétaire venait de refuser les transferts (session expirée), et `npm run build` ne tourne pas sur le dossier monté (§81).

Solution employée : **cloner le dépôt public depuis GitHub dans le conteneur de vérification**, y rejouer les mêmes modifications par script, et y construire. L'erreur est apparue là, à l'abri. La correction — insérer juste après le `---` ouvrant, position sans ambiguïté — a ensuite été rejouée sur la machine, et les **neuf fichiers touchés ont des empreintes MD5 identiques des deux côtés** : l'état vérifié et l'état livré sont le même octet pour octet.

⚠️ À retenir : quand le pont de fichiers tombe, le dépôt GitHub reste une voie de vérification, à condition que les modifications soient rejouables par script plutôt que faites à la main.

### Vérifications

Build : 263 pages, aucune erreur, 2 langues indexées par Pagefind. Sur `dist/` : 18 pages anglaises, 245 URL au sitemap toutes présentes, **39 511 liens internes vérifiés sans une cible absente**, 20 pages en `hreflang` réciproques, 0 titre tronqué, 19 `noindex`, panneau des titres présent sur les deux accueils avec le bon libellé de langue, et aucune fiche artiste ne renvoie plus vers l'autre langue.

### Reste à faire

Le **lot 4** (gabarit de fiche artiste anglais) et le **lot 5** (un ou deux quiz) n'ont pas été entamés. ⚠️ Le lot 4 est le plus gros du chantier — 349 lignes de gabarit et une quinzaine de fiches à traduire — et il ne devrait pas être écrit sans boucle de vérification complète. Le passage par le clone GitHub fonctionne, mais il oblige à rejouer chaque modification des deux côtés : praticable pour huit fichiers, hasardeux pour un lot de cette taille. **À reprendre quand le pont de fichiers est rétabli.**

---

*Dernière mise à jour : 2026-08-16, panneau des titres en composant et allègement du HTML (§85).*

---

## 86. Version anglaise — lot 4 : les fiches artistes, et le rang qui disait autre chose que ce qu'il mesurait (2026-08-17)

Le gabarit `artiste-[slug].astro` assemble des données calculées dans des phrases toutes faites : le traduire une fois débloque une fiche anglaise pour n'importe quel artiste, sans coût par fiche. C'était le plus gros levier du chantier. Il a aussi obligé à regarder de près ce que ces phrases racontent.

### Le rang mesure la grille, pas l'artiste

La sélection d'artistes avait d'abord été proposée sur un critère de notoriété **croisée avec le volume de diffusion**, au motif qu'une fiche annonçant « 137ᵉ des 147 artistes » desservirait le nom qu'elle porte. Le propriétaire a corrigé le raisonnement, et la correction déplace le problème là où il est :

> *« Les rotations c'est de la stratégie radio, donc nombre de passage. En revanche la notoriété d'un artiste est indépendante dans les recherches des personnes. Un groupe comme ABBA, immense groupe, ne peut pas être relégué dans les profondeurs du classement — je parle bien de fiche, et non de la diffusion réelle. »*

Le défaut n'était pas dans la sélection mais dans **la formulation du gabarit**. Le rang est une conséquence de choix de programmation ; affiché sur une fiche consultée par quelqu'un qui cherche « ABBA radio » et ne connaît pas la station, il ne se lit pas « notre grille tourne peu ABBA » mais « ABBA est un petit artiste ». Le chiffre est exact, la lecture qu'il induit est fausse, et elle dessert précisément les noms qui devraient servir de porte d'entrée.

**Le gabarit anglais n'affiche donc aucun rang.** Les quatre tuiles deviennent :

| Français | Anglais |
|---|---|
| passages sur trois mois | plays over three months |
| % de l'antenne | of our airtime |
| **Nᵉ sur 147 artistes** | **titres en rotation** |
| **Nᵉ des M artistes `<genre>`** | **fréquence hebdomadaire** |

Sont écartés pour la même raison : la phrase de quartile (« parmi les présences les plus occasionnelles »), l'écart à la moyenne du catalogue, et la formulation « au-dessus / en dessous » des voisins, devenue « **also in similar rotation** ». Rien n'est perdu en vérifiabilité : tout reste calculé à partir du rapport de diffusion, la fenêtre de mesure est affichée, et la règle du §62 — ne jamais écrire de prose générée sur une fiche — tient inchangée.

Le résultat, sur les deux extrêmes du catalogue :

- **ABBA** : *18 plays over three months · 0.11 % of our airtime · 6 tracks in rotation · 1.4× per week*
- **Madonna** : *312 plays · 1.93 % · 8 tracks in rotation · 23.7× per week*

Aucune des deux fiches ne prétend classer l'artiste. La différence de volume reste visible pour qui lit les chiffres, ce qui est honnête ; elle n'est simplement plus présentée comme un palmarès.

⚠️ **Les 129 fiches françaises indexées gardent le rang**, décidé aux §61-§63. Le propriétaire a choisi de voir d'abord le résultat en anglais avant de décider d'y toucher — modifier 129 pages indexées dans le même lot que la création des anglaises aurait fait deux choses à vérifier au lieu d'une.

### Comment une fiche anglaise existe

Nouveau fichier `src/data/artists-en.js`, séparé de `artists.js` **volontairement** : ce dernier est la source unique des passages et des titres, réécrite à chaque dépouillement du rapport RadioKing (§63) : y mêler des traductions les exposerait à être écrasées.

⚠️ **La présence d'un slug dans `ARTISTS_EN` est ce qui décide qu'une fiche anglaise existe.** `getStaticPaths` ne génère que ces pages. Ajouter une entrée suffit à créer la fiche — le reste (passages, part d'antenne, titres, voisins, indexation) est calculé. C'est exactement l'économie recherchée : le coût par artiste retombe aux seuls textes écrits à la main.

**20 fiches** pour ce premier lot, dont les six citées par le propriétaire : Madonna, Michael Jackson, Queen, Abba, The Beatles, Elton John, Phil Collins, Wham!, Eurythmics, Duran Duran, Rick Astley, Tears For Fears, Simple Minds, A-ha, Sade, Simply Red, Ed Sheeran, Coldplay, Dua Lipa, Imagine Dragons.

⚠️ Les `facts` sont des **traductions** de la version française, pas des textes nouveaux : ne jamais y ajouter un fait absent côté français, et répercuter ici toute correction faite là-bas. Même règle qu'aux §66-§68, où quatre erreurs factuelles avaient été trouvées dans les fiches d'origine.

### Maillage

- **Un artiste voisin n'est lié que s'il a lui-même une fiche anglaise** ; sinon son nom reste en texte simple. L'information factuelle est conservée, le lien vers du français évité (§82). Sur la fiche Madonna, `David Guetta (333 plays)` apparaît ainsi en gras sans lien.
- **Le bloc quiz est masqué** : les 8 quiz n'existent qu'en français. Il reviendra de lui-même quand un quiz anglais existera (lot 5).
- Le renvoi thématique de bas de fiche pointe vers une page anglaise, choisie par artiste dans `artists-en.js` : `80s throwback radio`, `European chill radio` ou `feel-good music radio`.
- ⚠️ La paire `hreflang` n'est posée **que** pour les artistes réellement traduits, des deux côtés. Une fiche française sans équivalent anglais n'émet aucun `hreflang` — vérifié : `artiste-shakira.html` n'en porte aucun.

### Vérifications

Build : **283 pages** (263 + 20), aucune erreur, 2 langues indexées. Sur `dist/` :

| Contrôle | Résultat |
|---|---|
| Fiches artistes anglaises | 20 |
| Mention d'un classement de station sur une fiche anglaise | **0** (recherche sur `of 147`, `catalogue average`, `above`, `below`, `quartile`) |
| Liens vers du français depuis une fiche anglaise | 0 |
| Liens internes | **41 004 vérifiés, 0 cible absente** |
| URL du sitemap absentes de `dist/` | 0 (265 URL) |
| Pages en `hreflang` | 60 = 30 paires, réciprocité et symétrie vérifiées |
| `<title>` de moins de trois mots | 0 |
| Pages en `noindex` | 19, inchangé |

⚠️ Un contrôle automatique cherchant `rank ` a d'abord signalé trois fiches. Les trois étaient des faux positifs : « They **rank** among the best-selling recording artists » (fait sur ABBA), « Igor F**rank** Remix » (nom de piste), « the p**rank** of redirecting » (rickrolling). **Un contrôle par mot-clé sur du texte libre doit être relu avant d'être cru** — la recherche ciblée sur les formulations de classement de la station, elle, ne remonte rien.

### Reste à faire

- **Lot 5** : traduire un ou deux quiz, ce qui fera réapparaître le bloc quiz sur les fiches anglaises.
- **Décision en attente** : appliquer ou non la même reformulation aux 129 fiches françaises.
- Les 127 autres artistes internationaux du catalogue peuvent recevoir une fiche anglaise à tout moment — une entrée dans `artists-en.js` suffit.

---

*Dernière mise à jour : 2026-08-17, fiches artistes anglaises et reformulation des chiffres de diffusion (§86).*

---

## 87. Les vingt fiches anglaises n'avaient aucune porte d'entrée, et le service worker faussait tous les essais en local (2026-08-17)

Deux défauts relevés par le propriétaire en testant le §86, tous deux plus importants qu'ils n'en avaient l'air.

### 1. Vingt pages qu'on ne pouvait atteindre que par la recherche

*« Je ne vois pas où se trouve artistes en anglais, mais quand je fais une recherche je tombe sur les fiches. »*

Exact, et ce n'était pas un problème d'ergonomie mais de maillage. Les 20 fiches du §86 étaient au sitemap et liées entre elles — et à rien d'autre. Vingt pages qui ne reçoivent de liens que d'elles-mêmes forment un îlot : un lecteur ne les trouve pas, un robot leur attribue le poids que leur donnent leurs liens entrants, c'est-à-dire presque rien. Le §61 avait fait tout l'inverse côté français.

Deux corrections :

- **Une page de regroupement**, `/en/artists-on-radio-odyssey.html`, qui présente les 20 fiches avec genre, origine et nombre de titres en rotation.
- **Un quatrième groupe « Artists » dans la navigation anglaise**, contenant la page de regroupement et cinq fiches en accès direct. Le menu anglais compte désormais Listen · Calm & Focus · Artists · About.

⚠️ **La page de regroupement classe par époque, jamais par nombre de passages.** Trier cette liste par volume de diffusion réintroduirait exactement le palmarès retiré des fiches au §86 — au niveau supérieur, et de façon encore plus visible. Deux sections : « The classics we keep playing » (16) et « On today's playlist » (4), l'appartenance étant portée par un champ `ere` dans `artists-en.js` plutôt que déduite d'un chiffre.

Effet mesuré sur le HTML construit : les fiches reçoivent désormais **de 2 à 40 liens entrants** chacune, aucune n'en reçoit un seul ou zéro.

### 2. Le service worker faussait tous les essais en local

Le propriétaire est tombé sur la page « Pas de connexion » en aperçu local, avec une navigation erratique et des fiches invisibles — alors que son `dist/` contenait bien les 20 pages, construites après le commit.

**C'était le service worker.** Enregistré sur `localhost` comme sur la production, il s'intercalait entre le navigateur et le serveur d'aperçu : cache de l'ancienne structure du site, page hors ligne servie dès que l'aperçu redémarre, et correctif qu'on croit inopérant alors qu'il est simplement invisible.

⚠️ **Ce n'était pas la première fois : c'est le troisième diagnostic faux qu'il provoque.** Au §84, la recherche paraissait cassée en anglais alors qu'elle était réparée. Au §86, les fiches semblaient absentes alors qu'elles étaient construites. À chaque fois, du temps perdu à chercher un défaut inexistant dans le code.

**Le service worker ne s'enregistre plus que sur `www.radio-odyssey.com`** (une condition sur `location.hostname` dans `Layout.astro`). En production, rien ne change : même installation sur l'écran d'accueil, même fonctionnement hors ligne, même stratégie de cache. En local et sur les préversions Vercel, il disparaît — **ce que montre l'aperçu redevient exactement ce que le build a produit.**

⚠️ Conséquence à connaître : le mode hors ligne et l'installation PWA ne sont donc plus testables en local. Ils ne l'étaient déjà pas utilement — le cache local mentait plus qu'il n'informait. Pour les vérifier, c'est en production, ou sur `app.radio-odyssey.com` pour l'application, qui a son propre service worker et n'est pas concernée par ce changement.

### Vérifications

Build : **284 pages**, aucune erreur, 2 langues indexées. Sur `dist/` : 39 pages anglaises (17 éditoriales + 20 fiches + 1 regroupement + l'accueil), **41 843 liens internes vérifiés sans une cible absente**, 266 URL au sitemap toutes présentes, aucune fiche artiste anglaise en dessous de 2 liens entrants, et la condition `surLaProd` bien présente dans le HTML construit.

### Reste à faire

Lot 5 (un ou deux quiz traduits, ce qui fera réapparaître le bloc quiz sur les fiches), et la décision en attente sur la reformulation des 129 fiches françaises.

---

*Dernière mise à jour : 2026-08-17, page de regroupement des artistes anglais et service worker limité à la production (§87).*

---

## 88. La pause depuis l'écran verrouillé ne tenait pas — et le correctif était déjà dans le dépôt, retiré pour la mauvaise raison (2026-08-17)

Signalé par le propriétaire en testant l'appli installée après le déploiement : *« si je n'appuie pas sur play, et que j'ouvre l'iPhone, au bout de 3 ou 4 secondes, la diffusion de l'appli reprend. »* Précision décisive apportée ensuite : **la reprise ne se produit qu'après déverrouillage**, jamais téléphone verrouillé.

Cette précision élimine iOS comme cause. Si le système rendait la session audio de lui-même, la musique repartirait sans qu'on touche à rien. Ce qui déclenche, c'est le retour de l'appli au premier plan — donc du code, donc réparable.

### L'enchaînement

1. Pause depuis l'écran verrouillé → le gestionnaire Media Session appelait `player.pause()`, **sans marquer que la pause venait de l'auditeur**.
2. L'événement `pause` remonté par l'élément devenait alors indiscernable d'une **interruption système** (appel, Siri, Bluetooth). Le gestionnaire d'interruption faisait son travail : garder `playing = true` pour reprendre plus tard. Comportement voulu, et juste — dans ce cas-là.
3. Téléphone verrouillé, la tentative de reprise échouait : iOS avait donné la session à l'app Musique.
4. Au déverrouillage, l'écouteur `visibilitychange` voyait `playing === true` et `player.paused === true`, et relançait la lecture. Avec la temporisation de 1,2 s et la mise en mémoire : les trois à quatre secondes observées.

### Le correctif existait, et son retrait avait coûté ce défaut

Le commentaire du §77.1, en tête du bloc Media Session, listait comme contournement raté n°1 : *« Poser `userPaused` pour que la pause tienne : Musique démarre. »*

⚠️ **C'est exact, et c'était mal classé.** Ce contournement avait été évalué sur sa capacité à empêcher l'app Musique de démarrer — il échoue, c'est établi et ça n'est pas remis en cause. Mais il ne servait pas qu'à ça : il empêchait aussi la lecture de repartir seule au déverrouillage. En le retirant, on n'a réglé aucun problème et on en a rouvert un. **Deux symptômes distincts avaient été confondus sous un seul verdict.**

Rétabli, pour cette raison-là uniquement :

```js
navigator.mediaSession.setActionHandler('pause', () => { userPaused = true; player.pause(); });
```

Le commentaire du §77.1 a été réécrit en conséquence : le point n°1 porte désormais un avertissement explicite pour qu'il ne soit pas re-supprimé un jour comme un contournement inopérant.

**Ce qui change** : la pause tient. La lecture ne repart plus au déverrouillage, et RadioKing cesse de compter comme temps d'écoute une lecture que personne n'a demandée — ce qui n'est pas anodin quand on arbitre sur les 35 % d'écoutes de moins de 30 secondes et sur l'écart de durée moyenne entre le site et l'appli.

**Ce qui ne change pas** : l'app Musique démarre toujours. ⚠️ Le §77.1 reste vrai dans son ensemble, l'impasse n'est pas rouverte.

**Ce qui est préservé** : une vraie interruption ne passe pas par ce gestionnaire — la reprise automatique continue donc de jouer son rôle là où elle sert.

### Relevé au passage

⚠️ La copie de sauvegarde faite avant modification (`index.html.avant-…`, ce dépôt n'ayant pas de dépôt distant) **aurait été publiée et lisible publiquement** : `npx vercel --prod` envoie le dossier entier, et `.vercelignore` prévient explicitement de ce piège en tête de fichier. Trois règles y ont été ajoutées (`*.avant-*`, `*.backup`, `*.bak`).

`CACHE_VERSION` passée de `v20` à `v21`, comme l'impose `CLAUDE.md` à chaque publication.

### À vérifier avant publication

Test iPhone obligatoire, sur l'appli **installée depuis son icône**, pas dans Safari : lancer la lecture, verrouiller, mettre en pause depuis l'écran verrouillé, déverrouiller, et **attendre dix secondes sans rien toucher**. La lecture ne doit pas repartir. Puis vérifier qu'un appui sur play la relance normalement.

⚠️ Le dépôt de l'appli n'a toujours pas de dépôt distant (§76). Ce correctif n'existe que sur la machine du propriétaire.

---

*Dernière mise à jour : 2026-08-17, pause de l'écran verrouillé qui tient enfin (§88).*
