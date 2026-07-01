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

## Console d'édition (`console.html`)

Outil maison permettant d'éditer le SEO, le hero, les textes, couleurs et CSS d'une page directement dans le navigateur, puis de télécharger le HTML modifié. **Usage strictement personnel** (le propriétaire du site est seul utilisateur).

⚠️ Après migration Astro, cette console ne peut plus fonctionner telle quelle : elle édite du HTML brut, alors que le HTML final sera généré à chaque build depuis des fichiers Markdown/composants. Toute édition directe du HTML final serait écrasée au build suivant.

**Action prévue** : reconstruire une console équivalente qui lit/écrit dans les fichiers sources Astro (frontmatter Markdown) plutôt que dans le HTML final. Cela reste un chantier séparé, à traiter après la migration de base.

## Prochaines étapes

1. Scaffolder le projet Astro (`npm create astro@latest`)
2. Créer le layout commun (header/nav avec menu déroulant + footer) à partir de la structure actuelle
3. Convertir les 14 pages existantes en respectant strictement les URLs et le contenu
4. Vérifier le build et le rendu avant tout déploiement
5. Ajouter les balises `canonical` sur chaque page
6. Gérer `console.html` (noindex, exclusion sitemap/robots)
7. Une fois la base stable et déployée, commencer la production des nouvelles pages thématiques (~100 pages visées) par lots
