# Contexte projet — Radio Odyssey

Ce fichier décrit **l'état actuel du projet** et les décisions structurantes. Merci de le lire avant toute action.

> **Journal des travaux** : chaque lot de modifications est consigné dans `SEO_BLUEPRINT.md`, sous forme de paragraphes numérotés (`## N. Titre (date)`). Les messages de commit y renvoient par `(§N)`. Pour savoir *ce qui a été fait et pourquoi*, c'est là qu'il faut chercher — ce fichier-ci ne décrit que le résultat.

*Dernière mise à jour de ce fichier : 2026-08-16 (§75).*

## Objectif du projet

Faire de **radio-odyssey.com** un site de contenu riche — objectif des 100 pages thématiques **atteint et dépassé** (258 pages générées, 240 au sitemap) — organisé en catégories :
- Musique et bien-être
- Respiration et cohérence cardiaque
- Playlists selon les moments de la journée
- Artistes diffusés
- Styles musicaux présents sur l'antenne
- Conseils pour mieux écouter la radio (mobile, voiture, enceintes connectées...)

But : devenir un site référent sur ces sujets, capable d'attirer des internautes qui ne cherchent pas directement "Radio Odyssey" mais découvrent la radio via ces contenus.

## Socle technique (migration Astro : faite)

Le site tourne sous **Astro** (v7, sortie statique, `build.format: 'file'` → URLs en `.html`, `trailingSlash: 'never'`).
- Hébergement **Vercel**, déploiement automatique au push sur `main` du dépôt GitHub `dactarus/radio-odyssey`
- Les URLs historiques ont été conservées à l'identique — l'indexation Google n'a pas été rompue
- Redirections héritées centralisées dans `vercel.json` (10 règles, plus 4 blocs d'en-têtes de cache).
  ⚠️ **Avant de créer une page, vérifier qu'aucune redirection ne porte déjà son URL** : `/plan-du-site.html` a été créée alors qu'une règle héritée la renvoyait vers l'accueil, et la page est restée invisible jusqu'à ce que la règle soit retirée (§60)

## Contraintes SEO impératives

- **Ne jamais changer le schéma d'URL existant** (garder `.html`, mêmes noms de fichiers) sauf décision explicite avec mise en place de redirections 301
- Domaine canonique : `https://www.radio-odyssey.com`
- Le domaine `radio-odyssey.fr` appartient également au propriétaire et redirige (301) vers `.com` — pas de contenu dupliqué à gérer, mais rester vigilant si de nouvelles pages sont créées
- Balises `canonical` présentes sur toutes les pages (générées par `Layout.astro`)
- `console.html` (voir plus bas) ne doit pas être indexée (`noindex`, exclue du sitemap et idéalement bloquée dans robots.txt)

### Corrections déjà faites (dans le dossier fourni)
- `sitemap.xml` : corrigé, toutes les URLs pointent vers `www.radio-odyssey.com` (elles pointaient à tort vers `radio-odyssey.fr`)
- `robots.txt` : corrigé, la ligne `Sitemap:` pointe maintenant vers `www.radio-odyssey.com/sitemap.xml`

## Architecture actuelle du site

**240 URL au sitemap** (258 pages générées, dont 18 fiches artistes volontairement désindexées — §61, §63), réparties en deux silos :

- **108 pages éditoriales** — organisées en 7 catégories définies dans `src/data/navigation.js` : Bien-être & Santé (18), Musique & Énergie (26), Playlists du Jour (6), Artistes & Styles (10), Conseils d'Écoute (8), Les Coulisses (12), International (13 pages en `lang="en"`). S'y ajoutent l'accueil, `/plan-du-site.html`, `/quiz-musicaux-radio-odyssey.html` et les deux pages légales.
- **147 fiches artistes** — générées par la route dynamique `src/pages/artiste-[slug].astro` à partir de `src/data/artists.js`. **129 indexées, 18 en `noindex, follow`** selon la constante `SEUIL_INDEXATION_TITRES` (§61, §63). On y accède depuis `/artistes-diffuses-radio-odyssey.html` et `/plan-du-site.html`.

**Composants clés** (`src/components/`) :

| Fichier | Rôle |
|---|---|
| `RadioPlayer.astro` | Lecteur audio natif + Media Session (voir plus bas) |
| `Header.astro` | Barre lecteur fixe, méga-menu, panneau latéral mobile |
| `MegaNav.astro` | Menu déroulant desktop — 5 pages par catégorie + lien hub |
| `index.astro` | ⚠️ L'ordre des pages dans `navigation.js` décide de ce qui est **visible dans le menu** : seules les 5 premières de chaque catégorie s'affichent (§60). Une page reléguée au-delà n'est plus atteignable que par le hub — c'est ce qui rendait les 8 quiz invisibles jusqu'au §71 |
| `CoherenceExercise.astro` | Exercice de respiration guidée, présent sur 8 pages |
| `CookieConsent.astro` | Bandeau RGPD — GA4 n'est chargé qu'après acceptation |
| `WebviewBanner.astro` | Alerte navigateur intégré (Facebook/Instagram) |
| `SearchModal.astro` | Recherche interne (Pagefind) |
| `QuizBlock.astro` | Moteur de quiz réutilisable (§69) — les 5 quiz par décennie gardent leur copie propre, les 3 quiz thématiques l'utilisent |
| `CategoryHub.astro` | Gabarit des 7 pages de hub de catégorie |
| `DayScheduleNav.astro` | Navigation entre les 6 playlists du jour |
| `ContentIllustration.astro` | Illustration SVG en ligne (30 pages) |
| `PartnerVideo.astro` | Intégration vidéo partenaire (3 pages) |
| `Icon.astro` | Icônes en ligne depuis `data/icons.js` (108 pages) |
| `PageHero.astro`, `Sidebar.astro`, `FAQBlock.astro`, `RelatedPages.astro` | Gabarits de page |
| `AuthorReview.astro`, `SourcesBlock.astro` | Bloc E-E-A-T des 15 pages bien-être traitées (§72) — auteur/relecteur + date de vérification, sources externes. Alimentés par `data/reviewer.js` |
| `NewsletterCapture.astro` | Capture e-mail minimale (§74) — formulaire natif posté vers Brevo (double opt-in), sur les 8 pages de quiz et les 8 pages avec exercice de cohérence cardiaque |

**Données** (`src/data/`) : `navigation.js` (menu, hubs, pied de page), `artists.js` (147 fiches — **source unique** des passages), `genres.js`, `discoveries.js`, `icons.js`, `reviewer.js` (attribution et sources des pages bien-être, §72).

Trois modules **dérivés** alimentent les fiches artistes (§61-63). Aucun ne stocke de donnée propre : tout est recalculé à chaque build, donc rien ne peut se désynchroniser.

| Fichier | Ce qu'il calcule | Source |
|---|---|---|
| `artist-stats.js` | rang général, part d'antenne, fréquence hebdomadaire, rang dans la famille de genre, voisins de classement, ex æquo | `artists.js` + `genres.js` |
| `quiz-artistes.js` | quiz dans lesquels l'artiste est une bonne réponse | code source des 8 pages de quiz, lu en `?raw` au build |
| `top-titres.js` | rang de l'artiste au top 15 des titres | code source de `titres-les-plus-diffuses-…`, lu en `?raw` au build |

⚠️ `artist-stats.js` expose `JOURS_RELEVE` (92) et `PERIODE_RELEVE` (« du 14 mai au 13 août 2026 »). **Si la fenêtre de comptage d'`artists.js` change, ces deux constantes doivent changer avec elle**, sinon la fréquence hebdomadaire affichée sur les 147 fiches est fausse.

**Fichiers statiques** (`public/`) : `sitemap.xml` (maintenu à la main et par la console), `robots.txt`, `llms.txt`, `manifest.json`, `sw.js`, `hors-ligne.html`, `console.html` (ancien outil, `noindex`).

## Application installable (PWA)

Depuis le 2026-08-09, `www.radio-odyssey.com` est **installable depuis n'importe laquelle de ses 258 pages** :

- `public/sw.js` — service worker. Stratégie : *network-first* sur le HTML (la fraîcheur prime, la console publie souvent), *cache-first* sur les ressources à empreinte (`/_astro/`, polices, images), *stale-while-revalidate* sur le reste. **Aucune interception du cross-origin** : le flux audio et la mesure d'audience passent directement. Incrémenter `CACHE_VERSION` à chaque modification.
- `public/hors-ligne.html` — page de repli autonome (CSS en ligne, zéro dépendance externe).
- `public/manifest.json` — `scope: /`, icônes classiques et maskables, 3 raccourcis.
- Enregistrement dans `Layout.astro`, après l'événement `load`.

**À savoir** : `app.radio-odyssey.com` est une **seconde PWA**, sur un dépôt distinct (dossier `Appli Radio Odyssey V8`, sans dépôt git — publication par `npx vercel --prod`).

⚠️ L'argument technique qui justifiait de la garder séparée (sa base d'abonnés aux notifications push, non transférable car liée à une origine) est tombé le 2026-08-14 (§70) : vérification faite dans la console Upstash (`SCARD push_subscriptions`), elle ne compte qu'un seul abonné, très probablement un test. Mais la décision de fusionner l'appli dans le site a été **annulée le 2026-08-16 (§75)** : l'appli n'est pas un miroir du site, c'est une interface à onglets distincte (5 écrans, navigation par geste, sans page de contenu) qui retient deux fois plus longtemps que le site (16 min contre 8 min, voir Contexte d'audience) — la garder séparée reste le bon choix. Voir Prochaines étapes #9.

## Charte graphique (voir aussi PROJET_RADIO_ODYSSEY.md pour le détail complet)

```css
--ro-purple: #7B2FBE;   /* couleur principale */
--ro-pink: #FF3CAC;     /* accent rose */
--ro-orange: #FF9A3C;   /* accent orange */
--ro-gold: #FFD700;     /* or / étoiles */
--ro-sky: #00C6FF;      /* bleu ciel */
--ro-navy: #0b1c2d;     /* fond barre player */
--ro-blue: #1e7fcb;     /* bleu RadioKing */
--ro-dark: #2D2D3A;     /* texte principal */
--ro-muted: #6c6c80;    /* texte secondaire */
```
Dégradé principal : `linear-gradient(135deg, #7B2FBE 0%, #FF3CAC 55%, #FF9A3C 100%)`
Typographies : Nunito (titres, 700/800/900), Inter (corps, 400/500/600)

## Le lecteur audio

Depuis le 2026-08-09, l'iframe RadioKing est **remplacée par un lecteur natif** (`RadioPlayer.astro`), identique sur mobile et ordinateur.

- Balise `<audio>` sur le flux direct `https://listen.radioking.com/radio/706859/stream/772319` (identifiant radio RadioKing : **706859**, flux : **772319**)
- **Media Session** : commandes sur écran verrouillé, en voiture, sur montre connectée — impossible avec l'ancienne iframe, qui était un document tiers
- Titre en cours via `https://api.radioking.io/widget/radio/radio-odyssey/track/current`, réinterrogé à la fin réelle du morceau
- La lecture **survit aux changements de page** (`transition:persist` sur `#topRadioBar`)
- **Repli** : si la lecture native échoue (navigateurs intégrés Facebook/Instagram), le lecteur bascule en mode secours et le clic suivant ouvre `link.radioking.com`
- **Séquences de cohérence cardiaque** (§62) : RadioKing les remonte sous leur nom de fichier interne (« CC 3 min 5 inspire / 5 expire Nov05bis »). `estSequenceRespiration()` les détecte et `libelleSequence()` affiche « Cohérence cardiaque · Respiration guidée — séquence de N min », aux trois points d'affichage (barre, affichage initial, Media Session). ⚠️ Si un nouveau format de nommage apparaît dans RadioKing, c'est la regex de `estSequenceRespiration` qu'il faut élargir.

> ⚠️ **`roPlayNow(event)` est appelée en `onclick` depuis 258 pages** (dont les 147 fiches artistes) et depuis `Sidebar.astro`. Son nom et sa signature ne doivent pas changer. Elle est définie dans `Footer.astro` et délègue à `window.roPlayerToggle`.

## Points de vigilance techniques

- **Navigation** : réglée au §60. Les deux menus n'affichent plus que les `MENU_APERCU` (= 5) premières pages de chaque catégorie ; le reste passe par le hub et par `/plan-du-site.html`. Le HTML est passé de 234 à 138 Ko par page, le ratio de contenu unique de 18,7 % à 30,9 %. **Reste possible** : les icônes SVG rendues en ligne pèsent encore 71 Ko sur 155 Ko — un sprite avec `<use>` diviserait ce poids.
- **Silo artistes** : traité aux §61, §62 et §63. Les 23 fiches à un seul titre sont en `noindex, follow` ; les 92 autres portent un bandeau de chiffres de diffusion, le croisement avec les quiz (90 fiches) et le top des titres (10 fiches). Mesuré sur le HTML construit, le contenu propre par fiche est passé de 15 553 à 21 983 empreintes de 6 mots (+41 %) à densité constante (48 %), et les liens entre fiches de 3,0 à 7,1 par page. ⚠️ **`playCount` et `tracks` ne se saisissent plus à la main** : ils sont dérivés du rapport de diffusion RadioKing (§63), sur une fenêtre de trois mois glissants. Pour les rafraîchir, réexporter le rapport et relancer le dépouillement — méthode au §63. ⚠️ `SEUIL_INDEXATION_TITRES` et `public/sitemap.xml` doivent rester cohérents **dans les deux sens** : une fiche peut aussi repasser *sous* le seuil et devoir sortir du sitemap. ⚠️ Ne jamais écrire de prose générée sur une fiche : tout ce qui s'y trouve doit être calculé ou vérifié.
- **Internationalisation** : les 13 pages anglaises n'ont pas de page d'accueil dédiée, le `x-default` renvoie vers l'accueil français, et leur navigation reste en français.
- **Pages santé** : traité au §72 sur 15 des 18 pages bien-être (auteur/relecteur, date de vérification, sources externes vérifiées — voir `AuthorReview.astro`/`SourcesBlock.astro`/`data/reviewer.js` ci-dessus). ⚠️ Elisabeth Bélot-Grimaud n'est créditée comme relectrice que sur les 11 pages où elle est réellement impliquée (cohérence cardiaque + musique-positive-et-bonne-humeur) ; les 4 autres portent « Rédaction Radio Odyssey ». Ne jamais étendre son nom à une page qu'elle n'a pas revue — c'est une personne réelle nommée.
- **Mesure** : site et application envoient à `eu.umami.is` avec le **même `data-website-id`** — c'est volontaire. La formule gratuite d'Umami ne permet qu'une propriété ; la lecture séparée se fait par le **filtre « Host »** du tableau de bord (`www.radio-odyssey.com` ou `app.radio-odyssey.com`). Ne pas séparer les identifiants, cela casserait ce filtre et rendrait un abonnement nécessaire.
- **Événements Umami** : `roUmamiTrack(nom, data)`, défini dans `Footer.astro`, est le point d'entrée unique — préexistant pour les écoutes (`play_click`, `play_error`, `play_started`, `play_stalled`...), complété au §72 par `quiz_complete` (`QuizBlock.astro` + les 5 quiz par décennie, qui gardent leur propre copie du moteur), `exercise_start`/`exercise_complete` (`CoherenceExercise.astro`), `pwa_installed` (écouteur `appinstalled`, global) et `app_download_click`/`external_platform_click` (écouteur délégué au clic dans `Footer.astro`, couvre tous les liens sortants sans avoir à instrumenter chaque page), puis au §74 par `email_signup` (`NewsletterCapture.astro`). ⚠️ La liste `PLATEFORMES` dans `Footer.astro` doit rester alignée avec `SAME_AS` dans `Layout.astro`. L'opt-in push n'est pas instrumenté : la fonctionnalité n'existe pas sur `www` (voir Prochaines étapes, §70).
- **Liste e-mail** : traité au §74. Capture minimale (pas de programme éditorial) via `NewsletterCapture.astro`, sur les 8 pages de quiz et les 8 pages avec exercice de cohérence cardiaque. Compte Brevo du propriétaire, liste « Newsletter Radio Odyssey », double opt-in. ⚠️ Le bloc RGPD natif de Brevo n'a pas pu être ajouté au formulaire (glisser-déposer non fonctionnel dans l'éditeur Brevo) — le consentement est recueilli par une case à cocher côté site (non transmise à Brevo) et formalisé juridiquement par la confirmation double opt-in. Si le champ `email_address_check` (piège à robots) ou l'URL d'action Brevo changent un jour côté Brevo, il faudra les remettre à jour dans le composant.
- **URL Vercel de l'appli** : `radio-odyssey-v8b.vercel.app` sert la même page que `app.radio-odyssey.com` et représente 2,2 % des écoutes. Un `canonical` a été posé ; la redirection par `vercel.json` a échoué deux fois (§59) — passer par Settings → Deployment Protection dans l'interface Vercel.
- Héritage Mobirise non purgé : `assets/vendor/bootstrap/bootstrap.min.css` est toujours chargé.

## Vérifications avant publication

Cette liste vient d'erreurs réellement commises sur ce projet, pas d'une bonne pratique générale. Chaque ligne a coûté une régression en production.

```bash
npm run build          # doit finir par « Complete! » sans erreur
npm run preview        # http://localhost:4321 — Ctrl+C pour rendre la main
```

⚠️ **`npm run preview` occupe le terminal.** Tant qu'il tourne, tout ce qui est tapé part dans son entrée standard et n'est pas exécuté. Ctrl+C avant de reprendre la main.

À contrôler sur `dist/` avant de publier :

| Contrôle | Pourquoi |
|---|---|
| Aucune URL du sitemap ne porte `noindex` | une page en `noindex` dans un sitemap est un signal contradictoire (§61) |
| Toutes les URL du sitemap existent dans `dist/` | le sitemap est maintenu à la main, il dérive |
| Aucun `href="/…"` ne pointe vers un fichier absent | 14 209 liens internes, une route dynamique qui change les casse en masse |
| **Aucune règle de `vercel.json` ne porte l'URL d'une page nouvelle** | `/plan-du-site.html` a été créée puis rendue invisible par une redirection héritée (§60) |
| Nombre de fiches en `noindex` = nombre attendu par `SEUIL_INDEXATION_TITRES` | seuil et sitemap doivent rester d'accord (§61) |
| `CACHE_VERSION` incrémenté si `public/sw.js` a changé | sinon le service worker sert l'ancienne version |
| **Aucun `<title>` du build ne fait moins de trois mots** | un attribut Astro sans guillemets est tronqué au premier espace, sans erreur au build : trois pages de quiz sont parties en ligne avec `<title>` = « Quiz » (§69) |

## Console d'édition

L'ancien `console.html` (édition de HTML brut, téléchargement manuel du fichier modifié) est obsolète depuis la migration Astro : le HTML final est généré à chaque build, donc toute édition directe aurait été écrasée. Il reste présent dans `public/console.html` (noindex, exclu du sitemap) mais n'est plus l'outil à utiliser.

**Nouvelle console (Phase 1, construite le 2026-07-05)** : outil local dans `admin-console/` (hors de `src/` et `public/`, donc jamais inclus dans le build ni déployé). Lancement : `npm run console` (port 4400) — démarre aussi automatiquement `npm run dev` (aperçu Astro, port 4321) si besoin.

- Édite directement les fichiers `.astro` sources : titre `<title>`, meta description, titre du bandeau hero, sous-titre, couleurs du dégradé.
- Aperçu en direct dans la console via l'iframe pointant sur le serveur Astro local (HMR), avant toute publication.
- Bouton « Publier en ligne » = commit + push automatique du fichier modifié (l'utilisatrice ne manipule jamais git directement) ; bouton « Annuler » = `git checkout` du fichier pour revenir à la dernière version publiée.
- Cas particulier : `index.astro` définit son titre/description en variables JS (`const title = ...`) plutôt qu'en attributs de balise — géré différemment en interne mais de façon transparente dans l'interface.

**Phase 2 (construite le 2026-07-05, même session)** : édition des blocs de texte du corps de page (titres `h2`/`h3`, paragraphes `p`, puces `li`), via une colonne dédiée listant tous les blocs détectés sur la page choisie (clic pour charger le texte, bouton « Enregistrer ce texte » séparé du bouton SEO/Hero).

- Un bloc = tout le contenu entre une balise ouvrante et sa fermante ; identifié par son rang d'apparition dans le fichier (recalculé à chaque lecture/écriture), pas par un identifiant stocké — robuste tant que le nombre de blocs ne change pas entre deux sauvegardes.
- Sécurité : avant d'écrire, le texte est validé côté serveur (`admin-console/lib/blocks.mjs`) — balises interdites (`script`, `h1`-`h6`, `p`, `li`, `div`, `img`, etc., pour empêcher de casser la structure ou d'injecter du code) et vérification que les balises autorisées (`strong`, `em`, `b`, `i`, `a`, `br`, `span`, `sup`, `sub`, `u`) sont bien équilibrées. Si la validation échoue, rien n'est écrit et un message d'erreur en français explique quoi corriger.
- Les entités HTML numériques déjà présentes dans le code source (`&#233;`, `&nbsp;`, etc. — historique du HTML d'origine) sont décodées côté navigateur pour l'affichage/l'édition (texte lisible), puis réécrites en UTF-8 littéral à l'enregistrement — sans incidence sur le rendu final, juste plus lisible à éditer.
- Limite connue : seuls les textes portés par des balises `h2`/`h3`/`p`/`li` sont éditables ; les textes décoratifs mis en forme autrement (ex. les libellés dans les grilles d'icônes "Les bienfaits") ne le sont pas encore.

**Phase 3 (construite le 2026-07-06, même session)** : création d'une nouvelle page thématique depuis la console, via un onglet dédié « ➕ Nouvelle page ». L'utilisatrice choisit une catégorie, remplit SEO/Hero/couleurs et jusqu'à 3 sections (titre + paragraphe), puis « Créer la page (brouillon) » génère le fichier — l'aperçu à droite l'affiche aussitôt (avec un rechargement automatique après 1,5s, le temps qu'Astro dev repère le nouveau fichier).

- Trois fichiers sont touchés ensemble et traités comme un seul lot pour publier/annuler : le nouveau `src/pages/<slug>.astro` (gabarit maison : Layout + PageHero + content-cards + Sidebar + CTA, icône du bandeau reprise de la catégorie), l'entrée ajoutée dans `src/data/navigation.js` (menu, hub, footer), et l'URL ajoutée à `public/sitemap.xml` — dont la publication déclenche automatiquement la notification IndexNow existante (`.github/workflows/indexnow.yml`).
- L'adresse de la page (slug) se propose automatiquement à partir du nom saisi (accents/espaces retirés), modifiable à la main ; unicité vérifiée avant création.
- Mêmes garde-fous que la Phase 2 sur le texte des sections (balises autorisées limitées, validation avant écriture).
- « Annuler » à ce stade supprime le fichier brouillon (jamais commité) et restaure `navigation.js`/`sitemap.xml` à leur dernière version publiée — sans rien casser si l'idée est abandonnée.

## Contexte d'audience (relevés du 2026-08-09)

Chiffres réels, utiles pour arbitrer les priorités — le détail figure au §55 de `SEO_BLUEPRINT.md`.

- **725 h d'écoute sur 30 jours**, 3 782 écoutes, 75 pays. Durée moyenne : 11,5 min.
- **35 % des écoutes durent moins de 30 secondes**, 58 % moins de deux minutes. C'est la fragilité n°1.
- Durée moyenne **par plateforme** : site 8 min · appli 16 min · Alexa 12 min · TuneIn 23 min · Welove 32 min.
- Supports : 60 % mobile, 10 % enceinte connectée, 4 % bureau, **0 % voiture**.
- **Hors campagne publicitaire, le site reçoit ~15 visiteurs par semaine** (relevé 1er-7 août, filtre Umami sur le nom d'hôte). Les 436 visiteurs Google du mois étaient contaminés par les campagnes Facebook. 1,17 page par visiteur : aucune navigation interne.
- Réseaux : Instagram 40 abonnés, Facebook 15, YouTube 2.

### Profil d'écoute (§58)

- **Deux publics distincts.** En semaine, rythme de bureau : montée jusqu'à 11h, creux au déjeuner (+44 %), plage d'après-midi jusqu'à 17h — le vrai pic —, chute à 18h. Le week-end, rythme domestique : réveil tardif, midi en pic, soirée plus soutenue.
- **Le creux de midi n'existe qu'en semaine.** Les séquences de cohérence cardiaque tournant 7 j/7, elles n'en sont pas la cause. C'est la pause déjeuner.
- La tranche **18h–minuit vendredi, samedi et dimanche** suit déjà une grille distincte (rythme soutenu, sans la catégorie « Ça s'écoute », nouveautés renforcées + anciennes nouveautés + récurrents). Le vendredi soir se comporte comme un soir de week-end.
- **La Matinale (7h) est calée sur l'heure la plus creuse** ; le socle réel est 15h–17h en semaine, sans rendez-vous nommé.

## Prochaines étapes

1. **Mesurer l'effet des trois nouveaux quiz** (§69) avant d'en créer d'autres : le réservoir permettrait un quatrième quiz, mais rien ne dit qu'un neuvième quiz apporte plus qu'il ne dilue. Les cinq quiz par décennie ont valu au site sa première citation dans un Aperçu IA (§59) — regarder si les nouveaux font de même.
   ⚠️ Le croisement quiz ↔ fiches est automatisé par `data/quiz-artistes.js`, qui lit le code source des pages au build. Format attendu : `{ track: "…", correct: 'slug' }` ou `{ enonce: "…", correct: 'slug' }`. **Si l'extraction ne trouve rien, le bloc quiz disparaît des 147 fiches sans erreur au build** — c'est arrivé au §69.
   ⚠️ **Quatre erreurs factuelles ont été trouvées dans les fiches d'origine** (§63, §66, §67, §68). Les faits sont désormais vérifiés, mais toute nouvelle fiche doit l'être aussi : ne jamais écrire un fait de mémoire.
2. **Corriger l'étiquetage de « L'assasymphonie » dans le manager RadioKing** : le fichier est crédité à Emmanuel Moire alors que le titre est de Florent Mothe (*Mozart, l'opéra rock*). L'erreur s'affiche à l'antenne et sur les écrans de voiture, et **chaque nouveau dépouillement la réintroduira** tant que le fichier n'est pas corrigé (§65). Le gisement d'artistes sans fiche est épuisé : 20 des 21 restants ont été traités au §65, seul **Tom York** reste en attente — sources insuffisantes, et un risque de confusion avec Thom Yorke de Radiohead
3. ~~**Protéger les déploiements** dans l'interface Vercel~~ — vérifié le 2026-08-16 (§73) : les deux projets (`radio-odyssey` et `radio-odyssey-v8b`) ont déjà Standard Protection + Vercel Authentication actives dans Settings → Deployment Protection. Rien à faire.
4. ~~**E-E-A-T santé** sur les 18 pages bien-être~~ — fait au §72 sur 15 des 18 pages (auteur/relecteur, date de vérification, sources). Les 3 pages restantes (radio-sans-publicite, avis-radio-odyssey-bien-etre, elisabeth-belot-grimaud-radio-odyssey) n'en avaient pas besoin — voir Points de vigilance ci-dessus.
5. **Grille week-end distincte** : midi y est le meilleur moment et reçoit la programmation standard (§58)
6. **Expérience jeudi soir** : appliquer la grille musclée un soir de plus pendant un mois, et vérifier si le ratio soirée/après-midi passe de 0,40 vers 0,67 (§58)
7. ~~**Ouvrir une liste e-mail**~~ — fait au §74, version minimale : capture (sans programme éditorial) sur les pages de quiz et de cohérence cardiaque, compte Brevo, double opt-in
8. ~~**Instrumenter** les événements manquants~~ — fait au §72 pour installation PWA, quiz, exercice et sorties plateformes (voir Points de vigilance ci-dessus). L'opt-in push reste hors périmètre : la fonctionnalité n'existe que sur l'appli, pas sur `www`, et le restera — voir point 9
9. ~~**Fusionner l'appli dans le site**~~ — décision prise au §70, **annulée au §75 (2026-08-16)**. En allant lire le code de l'appli (`Appli Radio Odyssey V8/index.html`), il s'est avéré que ce n'est pas un miroir du site mais une interface à onglets à part entière (barre de navigation à 5 écrans — Écouter, Programme, À propos, Bien-être, Réseaux —, un seul geste, pas de page de contenu à faire défiler). C'est très probablement ce qui explique sa durée d'écoute moyenne, le double de celle du site (16 min contre 8 min, voir Contexte d'audience). Rediriger `app.` vers `www` aurait remplacé cette interface par le site à 258 pages — supprimé exactement ce qui la rend efficace. **L'appli et le site restent deux produits distincts.**
   Reste valable, et détaché de toute idée de fusion : la base Upstash des abonnés push (`SCARD push_subscriptions` = 1, très probablement un test) et les deux endpoints `api/subscribe.js`/`api/send.js` sont inutilisés. Ils pourront être débranchés un jour sans toucher à l'expérience de l'appli ni à son domaine — mais ce n'est pas urgent : ⚠️ **ne pas payer d'abonnement Upstash pour autant, ne pas chercher à maintenir la base en vie.** Elle sera archivée pour inactivité si rien ne change ; les données sont sauvegardées par Upstash et restaurables, et il n'y a de toute façon rien à sauver. Un simple `PING` ne compte pas comme activité chez Upstash — seule une opération de données (`GET`, `SET`, `SCARD`…) réinitialise le compteur, si jamais le besoin se présentait.
   ⚠️ Si des notifications push sont refaites un jour, ce sera **seulement avec un programme éditorial défini** : la fonction existe depuis des mois sur l'appli et n'a recruté personne. Avant de la reconstruire, savoir si c'est le bouton qui est invisible ou la proposition qui n'intéresse pas
10. `og:image` par page sur les ~213 pages feuilles (les 7 hubs et l'accueil ont déjà la leur). `llms.txt` complété à 29 URL au §59
11. **Décision internationale** : `/en/` complet, ou repli assumé
12. **Mesurer l'effet du bloc E-E-A-T et des nouveaux événements Umami** (§72) une fois quelques jours de données accumulées : taux de complétion des quiz et de l'exercice, poids réel des clics vers l'appli et les plateformes externes, installations PWA — jusqu'ici invisibles faute d'instrumentation
