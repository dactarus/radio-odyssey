# Contexte projet — Radio Odyssey

Ce fichier décrit **l'état actuel du projet** et les décisions structurantes. Merci de le lire avant toute action.

> **Journal des travaux** : chaque lot de modifications est consigné dans `SEO_BLUEPRINT.md`, sous forme de paragraphes numérotés (`## N. Titre (date)`). Les messages de commit y renvoient par `(§N)`. Pour savoir *ce qui a été fait et pourquoi*, c'est là qu'il faut chercher — ce fichier-ci ne décrit que le résultat.

*Dernière mise à jour de ce fichier : 2026-08-09.*

## Objectif du projet

Faire de **radio-odyssey.com** un site de contenu riche — objectif des 100 pages thématiques **atteint et dépassé** (221 URL au sitemap) — organisé en catégories :
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
- Redirections héritées centralisées dans `vercel.json` (11 règles), en-têtes de cache également

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

**221 URL au sitemap**, réparties en deux silos :

- **106 pages éditoriales** — 104 fichiers dans `src/pages/*.astro`, organisées en 7 catégories définies dans `src/data/navigation.js` : Bien-être & Santé, Musique & Énergie, Playlists du Jour, Artistes & Styles, Conseils d'Écoute, Les Coulisses, International (13 pages en `lang="en"`).
- **115 fiches artistes** — générées par la route dynamique `src/pages/artiste-[slug].astro` à partir de `src/data/artists.js`. Elles n'apparaissent pas dans le méga-menu : on y accède depuis `/artistes-diffuses-radio-odyssey.html`.

**Composants clés** (`src/components/`) :

| Fichier | Rôle |
|---|---|
| `RadioPlayer.astro` | Lecteur audio natif + Media Session (voir plus bas) |
| `Header.astro` | Barre lecteur fixe, méga-menu, panneau latéral mobile |
| `MegaNav.astro` | Menu déroulant desktop — rend l'intégralité de `NAV_CATEGORIES` |
| `CoherenceExercise.astro` | Exercice de respiration guidée, présent sur 8 pages |
| `CookieConsent.astro` | Bandeau RGPD — GA4 n'est chargé qu'après acceptation |
| `WebviewBanner.astro` | Alerte navigateur intégré (Facebook/Instagram) |
| `PageHero.astro`, `Sidebar.astro`, `FAQBlock.astro`, `RelatedPages.astro` | Gabarits de page |

**Données** (`src/data/`) : `navigation.js` (menu, hubs, pied de page), `artists.js` (115 fiches), `genres.js`, `discoveries.js`, `icons.js`.

**Fichiers statiques** (`public/`) : `sitemap.xml` (maintenu à la main et par la console), `robots.txt`, `llms.txt`, `manifest.json`, `sw.js`, `hors-ligne.html`, `console.html` (ancien outil, `noindex`).

## Application installable (PWA)

Depuis le 2026-08-09, `www.radio-odyssey.com` est **installable depuis n'importe laquelle de ses 221 pages** :

- `public/sw.js` — service worker. Stratégie : *network-first* sur le HTML (la fraîcheur prime, la console publie souvent), *cache-first* sur les ressources à empreinte (`/_astro/`, polices, images), *stale-while-revalidate* sur le reste. **Aucune interception du cross-origin** : le flux audio et la mesure d'audience passent directement. Incrémenter `CACHE_VERSION` à chaque modification.
- `public/hors-ligne.html` — page de repli autonome (CSS en ligne, zéro dépendance externe).
- `public/manifest.json` — `scope: /`, icônes classiques et maskables, 3 raccourcis.
- Enregistrement dans `Layout.astro`, après l'événement `load`.

**À savoir** : `app.radio-odyssey.com` est une **seconde PWA**, sur un dépôt distinct, avec sa propre base d'abonnés aux notifications push (les abonnements push sont liés à une origine et ne se transfèrent pas). La décision prise est de **fusionner à terme** vers `www`, une fois que le site couvrira ce que fait l'appli.

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

> ⚠️ **`roPlayNow(event)` est appelée en `onclick` depuis 95 pages** et depuis `Sidebar.astro`. Son nom et sa signature ne doivent pas changer. Elle est définie dans `Footer.astro` et délègue à `window.roPlayerToggle`.

## Points de vigilance techniques

- **Méga-menu** : `MegaNav.astro` (desktop) et le panneau latéral de `Header.astro` (mobile) rendent tous deux l'intégralité de `NAV_CATEGORIES`. Le HTML fait donc 217 à 278 Ko par page pour 259 à 1 013 mots de contenu utile — soit 8 à 28 % de contenu unique. **C'est le principal chantier SEO restant.**
- **Silo artistes** : 115 fiches au gabarit identique (~410 mots). Risque de « contenu produit à l'échelle » au sens de la politique anti-spam Google. Plan retenu : enrichir 25 fiches, passer les autres en `noindex, follow`, créer des pages d'agrégation.
- **Internationalisation** : les 13 pages anglaises n'ont pas de page d'accueil dédiée, le `x-default` renvoie vers l'accueil français, et leur navigation reste en français.
- **Pages santé** : les 18 pages bien-être avancent des effets (cortisol, sommeil, concentration) sans source, ni date de révision, ni auteur nommé. Zone YMYL — à documenter.
- **Mesure** : `eu.umami.is` pour le site, `cloud.umami.is` pour l'appli, **avec le même identifiant** — les deux surfaces sont donc indistinguables. À séparer avant toute analyse.
- **Préproduction Vercel** : `radio-odyssey-v8b.vercel.app` est publiquement accessible et représente 2,2 % des écoutes. Activer la protection des déploiements.
- Héritage Mobirise non purgé : `assets/vendor/bootstrap/bootstrap.min.css` est toujours chargé.

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
- Google envoie **436 visiteurs/mois** ; toutes les pages éditoriales cumulées en reçoivent **~22**. Le trafic de recherche est un trafic de marque qui atterrit sur l'accueil.
- Réseaux : Instagram 40 abonnés, Facebook 15, YouTube 2.

## Prochaines étapes

1. **Réduire le méga-menu** à 7 entrées + page « plan du site », supprimer le doublon desktop/mobile — c'est le chantier au plus fort effet
2. **Séparer les propriétés Umami** site / application
3. **Protéger les déploiements de préproduction** Vercel
4. **Restructurer le silo artistes** (enrichir 25, `noindex` sur le reste, pages d'agrégation)
5. **E-E-A-T santé** sur les 18 pages bien-être : auteur, date de révision, sources, mention de non-substitution à un avis médical
6. **Ouvrir une liste e-mail** — aucun actif propriétaire à ce jour ; à faire avant toute nouvelle campagne payante
7. **Instrumenter** les événements manquants (installation PWA, opt-in push, quiz, exercice, sorties plateformes)
8. **Fusionner l'appli** : page hors ligne enrichie (garder l'exercice et le programme), masquage du bouton « App Mobile » en mode autonome, puis redirection de `app.` vers `www`
9. `og:image` par page sur les ~213 pages feuilles ; compléter `llms.txt` (il ne référence que ~25 pages sur 221)
10. **Décision internationale** : `/en/` complet, ou repli assumé
