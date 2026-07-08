# Contexte projet — Radio Odyssey

Ce fichier résume les décisions déjà prises avec Claude (interface claude.ai) avant de basculer sur Claude Code. Merci de le lire avant toute action.

## Objectif du projet

Faire évoluer **radio-odyssey.com** (actuellement 14 pages HTML statiques) vers un site de contenu riche visant ~100 pages à terme, organisées en catégories thématiques :
- Musique et bien-être
- Respiration et cohérence cardiaque
- Playlists selon les moments de la journée
- Artistes diffusés
- Styles musicaux présents sur l'antenne
- Conseils pour mieux écouter la radio (mobile, voiture, enceintes connectées...)

But : devenir un site référent sur ces sujets, capable d'attirer des internautes qui ne cherchent pas directement "Radio Odyssey" mais découvrent la radio via ces contenus.

## Décision technique actée : migration vers Astro

Le site actuel est en HTML statique "plat" (chaque page = un fichier autonome, header/menu/footer dupliqués dans chacun). Décision prise : migrer vers **Astro** pour disposer d'un vrai système de templates (layout + composants partagés, contenu en Markdown), tout en conservant :
- Le même hébergement (**Vercel**, déploiement automatique depuis **GitHub**, dépôt `dactarus/radio-odyssey`)
- **Exactement les mêmes URLs** que l'existant (voir liste ci-dessous) — condition impérative pour ne pas perdre l'indexation Google en cours

## Contraintes SEO impératives

- **Ne jamais changer le schéma d'URL existant** (garder `.html`, mêmes noms de fichiers) sauf décision explicite avec mise en place de redirections 301
- Domaine canonique : `https://www.radio-odyssey.com`
- Le domaine `radio-odyssey.fr` appartient également au propriétaire et redirige (301) vers `.com` — pas de contenu dupliqué à gérer, mais rester vigilant si de nouvelles pages sont créées
- Ajouter des balises `canonical` sur chaque page (absentes actuellement) — bonne pratique à instaurer dès la migration
- `console.html` (voir plus bas) ne doit pas être indexée (`noindex`, exclue du sitemap et idéalement bloquée dans robots.txt)

### Corrections déjà faites (dans le dossier fourni)
- `sitemap.xml` : corrigé, toutes les URLs pointent vers `www.radio-odyssey.com` (elles pointaient à tort vers `radio-odyssey.fr`)
- `robots.txt` : corrigé, la ligne `Sitemap:` pointe maintenant vers `www.radio-odyssey.com/sitemap.xml`

## Liste des 14 pages existantes (à répliquer à l'identique en URL)

**Accueil**
- `/index.html`

**Bien-être & Santé**
- `/radio-coherence-cardiaque.html`
- `/radio-bien-etre-en-ligne.html`
- `/radio-anti-stress-gratuite.html`
- `/musique-pour-respiration-guidee.html`
- `/radio-detente-moderne.html`

**Musique & Énergie**
- `/radio-annees-80-en-ligne.html`
- `/radio-dance-energisante.html`
- `/musique-pour-se-concentrer.html`
- `/radio-pour-travailler.html`

**International (contenu en anglais, `lang="en"`)**
- `/positive-european-music-station.html`
- `/european-chill-radio.html`
- `/feel-good-music-radio.html`
- `/keep-listening-radio-odyssey.html`

**Outil interne (à ne pas indexer)**
- `/console.html`

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

## Points de vigilance techniques identifiés

- `assets/images/logo.png` fait **1,2 Mo** — à optimiser (WebP + poids réduit) pendant la migration, utilisé sur toutes les pages y compris en favicon
- Le player RadioKing (iframe sticky) a un comportement différent desktop/mobile (autoplay bloqué sur mobile → bouton ouvre `link.radioking.com` dans un nouvel onglet) — voir détails dans `PROJET_RADIO_ODYSSEY.md`
- 3 pages partagent un bloc "exercice de cohérence cardiaque" interactif identique (coherence-cardiaque, bien-etre-en-ligne, respiration-guidee) — bon candidat pour devenir un composant Astro réutilisable
- Aucune balise `canonical` ni `hreflang` actuellement (le `lang` HTML est correctement positionné par page en revanche)

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

## Prochaines étapes

1. Scaffolder le projet Astro (`npm create astro@latest`)
2. Créer le layout commun (header/nav avec menu déroulant + footer) à partir de la structure actuelle
3. Convertir les 14 pages existantes en respectant strictement les URLs et le contenu
4. Vérifier le build et le rendu avant tout déploiement
5. Ajouter les balises `canonical` sur chaque page
6. Gérer `console.html` (noindex, exclusion sitemap/robots)
7. Une fois la base stable et déployée, commencer la production des nouvelles pages thématiques (~100 pages visées) par lots
