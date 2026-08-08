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
