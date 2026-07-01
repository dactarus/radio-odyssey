# 📻 RADIO ODYSSEY — Résumé du Projet Web
**Fichier de référence — À conserver dans le dossier du site**
Dernière mise à jour : 1er juillet 2026

---

## 🌐 Informations générales

| Élément | Valeur |
|---|---|
| **Nom du site** | Radio Odyssey |
| **URL** | https://www.radio-odyssey.com |
| **Slogan** | La Positive Radio ! |
| **Email** | odysseylaradio@gmail.com |
| **Créé le** | 19 janvier 2024 |
| **Hébergeur** | Vercel (gratuit) |
| **Domaine** | IONOS |
| **Dépôt** | GitHub → déploiement auto Vercel |
| **App mobile** | https://radio-odyssey-v8b.vercel.app/ |

---

## 🎵 Le player RadioKing

| Élément | Valeur |
|---|---|
| **Player desktop** | `https://player.radioking.io/radio-odyssey/?c=%231e7fcb&c2=%23ffffff&f=h&i=1&p=1&s=0&li=0&popup=0&h=90` |
| **Player mobile** | Même URL avec `h=50` |
| **Player autoplay** | Ajouter `&a=1` à la fin |
| **Lien écoute** | `https://link.radioking.com/radio-odyssey` |
| **Script RadioKing** | `https://player.radioking.io/scripts/iframe.bundle.js` |
| **Widget titres diffusés** | `<div id="rk-played-tracks-widget" data-id="radio-odyssey" data-count="4" data-date="1" data-buy="0"></div>` + `<script src="https://widget.radioking.io/played-tracks/build/script.min.js"></script>` |
| **API titres** | `https://api.radioking.io/widget/radio/radio-odyssey/track/ckoi?limit=4` |

---

## 📁 Structure du projet

```
radio-odyssey/
├── index.html                          ← Page d'accueil principale
├── radio-coherence-cardiaque.html
├── radio-bien-etre-en-ligne.html
├── radio-annees-80-en-ligne.html
├── musique-pour-se-concentrer.html
├── radio-detente-moderne.html
├── radio-anti-stress-gratuite.html
├── radio-pour-travailler.html
├── radio-dance-energisante.html
├── musique-pour-respiration-guidee.html
├── positive-european-music-station.html
├── keep-listening-radio-odyssey.html
├── european-chill-radio.html
├── feel-good-music-radio.html
├── console.html                        ← Éditeur visuel live (sans code)
├── sitemap.xml                         ← SEO
├── robots.txt                          ← SEO
├── PROJET_RADIO_ODYSSEY.md             ← CE FICHIER
└── assets/
    ├── css/
    │   └── style.css                   ← CSS global (toutes les pages)
    ├── js/
    │   └── main.js                     ← JS navigation active
    └── images/
        ├── logo.png                    ← Logo rond Radio Odyssey 2025
        └── hero-visual.jpg             ← Image smartphone + ondes (section titres)
```

---

## 🎨 Charte graphique

### Couleurs principales
| Variable | Valeur | Usage |
|---|---|---|
| `--ro-purple` | `#7B2FBE` | Couleur principale |
| `--ro-pink` | `#FF3CAC` | Accent rose |
| `--ro-orange` | `#FF9A3C` | Accent orange |
| `--ro-gold` | `#FFD700` | Or / étoiles |
| `--ro-sky` | `#00C6FF` | Bleu ciel |
| `--ro-navy` | `#0b1c2d` | Fond barre player |
| `--ro-blue` | `#1e7fcb` | Bleu RadioKing |
| `--ro-dark` | `#2D2D3A` | Texte principal |
| `--ro-muted` | `#6c6c80` | Texte secondaire |

### Dégradé principal
```css
linear-gradient(135deg, #7B2FBE 0%, #FF3CAC 55%, #FF9A3C 100%)
```

### Dégradé barre player
```css
linear-gradient(90deg, #0b1c2d, #1e7fcb, #0b1c2d)
```

### Typographies
- **Titres** : Nunito (700, 800, 900)
- **Corps** : Inter (400, 500, 600)

---

## 🔧 Architecture technique

### Player sticky (barre du haut)
- **Desktop** : barre 105px, iframe `.rk-desktop` (h=90, margin-top:35px)
- **Mobile** : barre 60px, iframes cachées, bouton dégradé rose/violet "Radio Odyssey" → ouvre `link.radioking.com`
- Logo caché sur mobile pour libérer l'espace
- Wave visualizer CSS animé (7 barres, desktop uniquement)

### Boutons "Écouter"
- **Desktop** : fonction `roPlayNow()` → recharge l'iframe avec `&a=1` (autoplay)
- **Mobile** : `roPlayNow()` → ouvre `link.radioking.com` dans un nouvel onglet

### Responsive breakpoints
- `768px` : mobile (barre compacte, grilles 2 colonnes)
- `480px` : très petit mobile

### Body padding-top
- **Desktop** : `calc(var(--bar-h) + 20px)` = ~125px
- **Pages annexes desktop** : 170px (player déployé RadioKing ~160px)
- **Mobile** : 60px

---

## 📄 Pages et leur contenu spécifique

### index.html (Page d'accueil)
- Hero avec logo flottant animé + stats (24/7, 80's, 100%, 0 pub)
- **Section titres diffusés** : widget RadioKing officiel sur fond violet sombre (#1a0d2e), 4 pochettes 72×72px en grid
- 4 feature cards (Années 80, Dance, Bien-être, Gratuit)
- Section cohérence cardiaque avec horaires
- Grille 13 pages thématiques (cards avec SVG)
- **Planning** : 6 tranches horaires (6-9H, 9-12H, 12-14H, 14-18H, 18-21H, 21H-6H)
- 6 témoignages
- 12 plateformes d'écoute
- Section app mobile (iPhone + Android)
- Partenaire Elisabeth Grimaud / EBG
- FAQ 6 questions FR/EN
- Réseaux sociaux
- CTA final fond marine
- Footer 4 colonnes

### radio-coherence-cardiaque.html
### radio-bien-etre-en-ligne.html
### musique-pour-respiration-guidee.html
Ces 3 pages contiennent le **bloc exercice complet** :
1. Widget cercle interactif (PRÊT → INSPIREZ/EXPIREZ, 5 dots, bouton Commencer)
2. "Comment pratiquer" (4 étapes numérotées)
3. "Les bienfaits" (4 cartes : stress, cœur, clarté, sommeil)
4. Horaires de diffusion (7H→19H)

### radio-annees-80-en-ligne.html + radio-dance-energisante.html
- Lien SoundCloud : `https://soundcloud.com/odysseylaradio`

### Pages EN (anglais)
- `positive-european-music-station.html`
- `keep-listening-radio-odyssey.html`
- `european-chill-radio.html`
- `feel-good-music-radio.html`

---

## 🔗 Réseaux sociaux et plateformes

| Plateforme | URL |
|---|---|
| Facebook | https://www.facebook.com/profile.php?id=61588289230589 |
| Instagram | https://www.instagram.com/radio_odyssey_france/ |
| X / Twitter | https://x.com/Odysseylaradio |
| YouTube | https://www.youtube.com/channel/UCodzZ_dhFdJwQ90nZzVHluw |
| TuneIn | https://tunein.com/radio/RADIO-ODYSSEY-s339104/ |
| WeLoveRadio | https://fr.welove.radio/radio/radio-odyssey/ |
| Deezer | https://www.deezer.com/search/radio%20odyssey/livestream |
| Orange | https://radio.orange.com/radios/radio_odyssey |
| RadioLine | https://www.radioline.co/fr/radios/radio_odyssey |
| MyTuner | https://mytuner-radio.com/fr/radio/radio-odyssey-512057/ |
| Streema | https://streema.com/radios/Radio_Odyssey |
| SoundCloud | https://soundcloud.com/odysseylaradio |
| Alexa | "Alexa, lance Radio Odyssey sur TuneIn" |

---

## 📡 Partenaire officiel

**Elisabeth Bélot Grimaud**
- Docteure en sciences psychologiques
- Chercheuse associée (Université Paris Nanterre)
- Programme : "Épanouissement et Bien-être Global 365" (EBG)
- Site : https://www.elisabethbelot.fr/
- Programme : https://www.elisabeth.academy/programme-ebg/

---

## 🔍 SEO

### Schema.org (dans index.html)
- Type `RadioStation` : nom, URL, logo, description, date création, adresse FR, contact, sameAs, potentialAction (ListenAction gratuit)
- Type `MusicGroup` : genres musicaux (Pop, Synthpop, Dance, New Wave, Easy Listening)
- Format : tableau JSON-LD `[]` → 0 erreur, 0 avertissement

### Favicon
```html
<link rel="icon" type="image/png" href="assets/images/logo.png"/>
<link rel="apple-touch-icon" href="assets/images/logo.png"/>
```

### Sitemap
`sitemap.xml` présent avec les 14 URLs

---

## 🕐 Horaires de cohérence cardiaque

| Heure | Durée |
|---|---|
| 7H, 8H, 9H | 3 minutes |
| 10H, 11H | 1 minute |
| 12H, 13H | 3 minutes |
| 14H, 15H, 16H, 17H | 1 minute |
| 18H, 19H | 3 minutes |

---

## 📱 Console d'édition live

Accessible via `https://www.radio-odyssey.com/console.html`

Permet sans toucher au code :
- Changer la page affichée dans la prévisualisation
- Modifier le SEO (titre, meta description)
- Changer les couleurs du hero et le dégradé
- Éditer les textes en cliquant dessus
- Modifier les liens et réseaux sociaux
- Ajouter du CSS personnalisé
- Télécharger le fichier HTML modifié

---

## ✅ État du projet (1er juillet 2026)

### Fonctionnel
- [x] 14 pages HTML complètes avec contenu réel
- [x] Player sticky desktop (iframe RadioKing)
- [x] Barre mobile avec bouton "Radio Odyssey" → lien direct
- [x] Widget titres diffusés (4 derniers, rafraîchissement auto)
- [x] Exercice cohérence cardiaque interactif (3 pages)
- [x] Grille des programmes mise à jour (6 tranches)
- [x] Boutons "Écouter" → autoplay desktop / nouvel onglet mobile
- [x] Favicon logo Radio Odyssey
- [x] Schema.org RadioStation + MusicGroup (0 avertissement)
- [x] Sitemap + robots.txt
- [x] Console d'édition visuelle
- [x] Responsive desktop / tablette / mobile

### Points de vigilance connus
- Sur mobile, le player RadioKing en iframe ne peut pas démarrer automatiquement (politique navigateurs iOS/Android) → bouton redirige vers link.radioking.com
- Le widget `rk-played-tracks-widget` a son propre CSS qu'on surcharge — si RadioKing change leur HTML, adapter les sélecteurs CSS dans `style.css`
- Les images `hero-visual.jpg` et `logo.png` doivent être dans `assets/images/`

### Améliorations possibles futures
- [ ] Ajouter une page "À propos" ou "Contact"
- [ ] Intégrer un flux RSS des horaires
- [ ] Ajouter des témoignages réels (remplacer les fictifs)
- [ ] Page dédiée au partenaire Elisabeth Grimaud
- [ ] Optimiser les images (WebP)
- [ ] Ajouter Google Analytics / Meta Pixel

---

## 🚀 Déploiement

```bash
# Modifier des fichiers puis :
git add .
git commit -m "Description de la modification"
git push origin main
# → Vercel redéploie automatiquement en ~30 secondes
```

**Fichiers les plus souvent modifiés :**
- `assets/css/style.css` → corrections visuelles globales
- `index.html` → page d'accueil
- Pages thématiques individuelles

---

*Ce fichier est généré automatiquement par Claude (Anthropic) suite à la session de construction du site Radio Odyssey.*
