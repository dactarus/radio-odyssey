# Brief — réécrire trois passages de Radio Odyssey Relax qui doublonnent Radio Odyssey

**De** : Claude Code du site mère (`~/Downloads/radio-odyssey`) · **Pour** : Claude Code du site Relax (`~/Downloads/radio-odyssey-relax`) · **Le** : 5 novembre 2026
**Origine** : point 3.5 du brief « faire exister Relax dans le référencement » (§109 du journal du site mère). Rapport d'audit complet : `AUDIT-CONTENU-DUPLIQUE-RELAX.md`, dans le dépôt `radio-odyssey`.

---

## 1. Pourquoi

Le dépôt de Relax a été créé par copie du socle d'Odyssey. Quelques passages visibles sont restés identiques ou presque. Deux sites du même propriétaire qui publient le même texte, c'est ce qu'on veut éviter : Google en choisit un et fait reculer l'autre. **Rien d'autre n'est à toucher** : le texte d'accueil, le pied de page, les titres et les descriptions sont déjà propres.

## 2. Ce qu'il faut réécrire — quatre passages

L'audit se rejoue avec `python3 -I scripts/audit-doublons.py` depuis `~/Downloads/radio-odyssey`, après `npm run build` **dans les deux dépôts** (il lit les deux `dist/`). Il dit « 5 blocs à revoir » : ce sont les quatre points ci-dessous (A4 compte pour deux).

### A1 — `/pro.html`, carte « Elisabeth Bélot-Grimaud » (49 % de recouvrement)

Fichier : `src/pages/pro.astro`. Texte actuel :

> Docteure en psychologie cognitive, elle est chercheuse et enseignante en psychologie, spécialisée en santé mentale positive, autrice de « Programmez votre cerveau pour le bonheur » et conférencière TEDx à deux reprises. Elle anime aussi le podcast « L'instant Beau Bien Bon ».

Il reprend la fiche d'Odyssey. Règle du projet : la fiche d'Elisabeth **reste chez Odyssey** ; Relax y renvoie au lieu de la recopier. Proposition (à ajuster) :

> Docteure en psychologie cognitive, spécialisée en santé mentale positive. Son parcours, ses ouvrages et ses conférences sont présentés sur Radio Odyssey : **découvrir Elisabeth Bélot-Grimaud** → `https://www.radio-odyssey.com/elisabeth-belot-grimaud-radio-odyssey.html`

### A2 — `/pro.html`, introduction de la vidéo partenaire (53 %)

Fichier : `src/components/PartnerVideo.astro`, propriété `intro` (valeur par défaut). Texte actuel :

> Elisabeth Bélot-Grimaud a mis en ligne sur sa chaîne YouTube une séance de cohérence cardiaque en musique, dans le même esprit que les séquences de respiration guidée qu'elle préconise pour Radio Odyssey Relax.

Le composant est partagé avec 4 pages d'Odyssey (3 en français, 1 en anglais). Proposition : une phrase propre à Relax, par exemple « Une séance d'Elisabeth Bélot-Grimaud, pour entendre la voix qui guide les séquences de Radio Odyssey Relax. » ⚠️ **Ne jamais écrire « le même exercice »** : la vidéo montre le rythme 5/5, celui d'Odyssey (consigne déjà dans le fichier).

### A3 — `/respiration-4-6.html`, carte « Ce que ce moment peut vous apporter » (32 %)

Fichier : `src/pages/respiration-4-6.astro`. Texte actuel :

> Ralentir volontairement sa respiration autour de six cycles par minute (le 4/6) est souvent associé à une sensation de calme plus rapide qu'une respiration libre, en particulier dans les moments de tension. C'est le même principe que la cohérence cardiaque, popularisée en France par le Dr David O'Hare — Radio Odyssey Relax en propose une variante à l'antenne, avec une expiration volontairement plus longue que l'inspiration.

Reprend un paragraphe de `bienfaits-coherence-cardiaque.html`. C'est le seul passage **explicatif** qui reste sur Relax, dont la règle est « Relax fait faire, Odyssey explique ». Proposition : raccourcir, garder la phrase propre à Relax, renvoyer vers Odyssey pour le reste :

> Ralentir volontairement sa respiration autour de six cycles par minute — c'est le principe du 4/6 — est souvent associé à une sensation de calme. Radio Odyssey Relax en propose une variante à l'antenne, avec une expiration plus longue que l'inspiration. Les explications complètes sont sur Radio Odyssey : **les bienfaits de la cohérence cardiaque** → `https://www.radio-odyssey.com/bienfaits-coherence-cardiaque.html`

⚠️ « Six cycles par minute » ne vaut **que pour le 4/6** (le 4/8 en fait cinq) : ne jamais l'étendre au 4/8.

### A4 (faible enjeu, optionnel) — la phrase d'attribution

La phrase « Elisabeth Bélot-Grimaud, docteure en psychologie cognitive et partenaire santé du groupe Radio Odyssey, préconise les séquences de respiration guidée de la station. » est présente à l'identique sur **`/` (accueil) et `/respiration-4-6.html`** (32 % : sa première moitié est la formule d'identité d'Odyssey). À reformuler sur une des deux pages si l'on veut descendre sous le seuil ; sans conséquence si on la laisse.

## 3. Garde-fous

1. **Relecture d'Elisabeth Bélot-Grimaud** : A1 parle d'elle et A3 est un propos de santé. Les versions proposées sont plus courtes que les originaux (moins d'affirmations, pas plus), mais **Frédéric doit la faire relire avant publication**. Ne pas pousser sans son accord.
2. **Ne pas toucher** à ce qui est commun **par décision** : l'avertissement santé (« Ce contenu est fourni à titre informatif… »), la ligne « Relu par Elisabeth Bélot-Grimaud… », les deux références (Inserm, Goessl). Ni aux mentions légales ni à la politique de confidentialité.
3. **Règles de marque** : « Radio Odyssey Relax » en entier, jamais « Relax » seul ; aucune allégation thérapeutique (« aide à la détente », jamais « soigne ») ; jamais le 5/5 ; aucune page ne commence par « qu'est-ce que » ni par « les bienfaits de » (le lien « les bienfaits de la cohérence cardiaque » est une **ancre vers Odyssey**, pas un titre de page).
4. Les liens vers Odyssey sont des liens ordinaires, sans `nofollow`.
5. Ne pas ajouter de page, ne pas déplacer de contenu.

## 4. Vérification attendue

- `npm run build` sans erreur dans `radio-odyssey-relax` ; les contrôles du `CLAUDE.md` de Relax (aucun lien cassé, URL du sitemap présentes, titres de plus de trois mots).
- Reconstruire `radio-odyssey` aussi si besoin, puis `python3 -I scripts/audit-doublons.py` : **A1, A2 et A3 doivent avoir disparu de la liste « À REVOIR »**. Il peut rester la phrase d'attribution (A4).
- Mettre à jour la date `lastmod` de `/pro.html` et `/respiration-4-6.html` dans `public/sitemap.xml` (écrit à la main).
- Montrer le résultat à Frédéric **avant** de pousser.
