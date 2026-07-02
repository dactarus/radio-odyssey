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
| Bien-être & Santé | `/bien-etre-et-sante.html` | 5 | **+7 en cours (Lot 002, §5)** |
| Musique & Énergie | `/musique-et-energie.html` | 4 | — |
| Playlists du Jour | `/playlists-du-jour.html` | 6 | — |
| Artistes & Styles | `/artistes-et-styles.html` | 2 | **+100 fiches artistes (§6)** |
| Conseils d'Écoute | `/conseils-ecoute.html` | 3 | — |
| International (EN) | `/international.html` | 4 | — |

Total live à ce jour : 31 pages (24 pages de contenu + 6 hubs + accueil).

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
| `/artiste-[slug].html` (×69 restants) | [nom artiste] radio odyssey | Planifié, par lots de 15-20 (§6) |

### Conseils d'Écoute
| URL | Mot-clé cible | Statut |
|---|---|---|
| `/ecouter-radio-odyssey-sur-mobile.html` | écouter radio odyssey mobile | Live |
| `/ecouter-radio-odyssey-en-voiture.html` | écouter radio odyssey voiture | Live |
| `/ecouter-radio-odyssey-enceinte-connectee.html` | écouter radio odyssey enceinte connectée | Live |

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

**URL pattern retenu et implémenté :** `/artiste-[slug].html`, plat, cohérent avec le reste du site. Techniquement : route dynamique Astro `src/pages/artiste-[slug].astro` avec `getStaticPaths()` lisant `src/data/artists.js` — ajouter un artiste = ajouter une entrée dans ce fichier, aucune autre édition de code nécessaire. Chaque fiche a son propre schema.org `MusicGroup`, une FAQ courte générée à partir des données (2 questions), et des liens vers 3 autres fiches artistes + les deux pages hub (`artistes-diffuses-radio-odyssey.html`, `styles-musicaux-radio-odyssey.html`). Les fiches ne sont pas listées individuellement dans le méga-menu (deviendrait ingérable à 100) — la découverte se fait via la page `artistes-diffuses-radio-odyssey.html` (qui pointe vers chaque fiche créée) et le sitemap.

**Lot 1 (16 fiches) livré le 2026-07-02** : les 9 artistes "phares" déjà mis en avant (Madonna, Shakira, Michael Jackson, Ed Sheeran, Mika, Daft Punk, David Guetta, U2, Queen) + les 6 suivants par nombre de passages réels (Gims, Bruno Mars, Lady Gaga, Teddy Swims, Mylène Farmer, Angèle) + Aya Nakamura (ajoutée hors classement, sur demande explicite — artiste incontournable de la scène française malgré l'absence de rap urbain dans la programmation générale).

**Lot 2 (15 fiches) livré le 2026-07-02** : Jennifer Lopez, Taylor Swift, Zazie, Pascal Obispo, Justin Bieber, Indochine, Bebe Rexha, Ariana Grande, Coldplay, Calvin Harris, Alicia Keys, Dua Lipa, The Weeknd, Harry Styles, Sia — par nombre de passages réels, poursuite directe du classement. À partir de ce lot, la page `artistes-diffuses-radio-odyssey.html` ne garde en grandes cartes que les 9 premiers artistes ; les suivants passent en pastilles cliquables (`moreWithPage`) pour que la page reste gérable à l'échelle de 100 fiches.

Reste 69 fiches à produire par lots.

**⚠️ Piège grammatical à éviter sur toutes les futures fiches :** ne jamais accorder un adjectif/participe passé ("diffusé/diffusée") directement sur le nom de l'artiste dans un template générique — un artiste peut être un homme, une femme ou un groupe, et le genre n'est pas dans les données. Toujours formuler pour que l'accord se fasse sur "Radio Odyssey" (féminin, invariable dans le contexte) plutôt que sur l'artiste, ex. "Radio Odyssey diffuse-t-elle souvent [Artiste] ?" plutôt que "[Artiste] est-il/elle diffusé(e) ?". Bug repéré et corrigé le 2026-07-02 par le propriétaire du site sur la fiche Madonna.

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

---

*Dernière mise à jour : 2026-07-02, lors de la création du Lot 1 du cocon Artistes (15 fiches).*
