# Audit du contenu dupliqué entre Radio Odyssey et Radio Odyssey Relax

**Point 3.5 du brief « faire exister Relax dans le référencement » — 5 novembre 2026.**
Document de **signalement** : rien n'a été réécrit, ni côté Odyssey ni côté Relax. À transmettre à la session qui travaille dans `radio-odyssey-relax`.

## Méthode

Comparaison du **texte visible** des pages construites (`dist/`) : 301 pages côté Odyssey, 7 côté Relax.
1. Blocs de texte (paragraphes, puces, titres, cellules) identiques, d'au moins 30 caractères, après normalisation (casse, ponctuation, espaces).
2. Phrases identiques d'au moins 7 mots.
3. Recouvrement par séquences de 5 mots : tout bloc de Relax dont au moins 30 % des séquences existent déjà chez Odyssey. Cette troisième passe attrape le « copié puis légèrement retouché », que la comparaison exacte ne voit pas.
4. Titres (`<title>`) et descriptions (`meta description`).

Les mentions légales et la politique de confidentialité sont **exclues de la liste à réécrire**, comme le demande le brief (leur similitude est normale et personne ne les indexe). Elles sont comptées en D.

## Résultat en une phrase

**Aucun paragraphe d'accueil, de pied de page ni de « qui sommes-nous » n'est dupliqué. Trois paragraphes de Relax sont de vrais doublons ou quasi-doublons indexables (section A). Le reste est du texte volontairement commun.**

Titres : **aucun** titre de Relax n'est identique à un titre d'Odyssey. Descriptions : **aucune** description identique.

---

## A. À réécrire côté Relax (3 passages)

| # | Page de Relax | Passage | Recouvrement avec Odyssey | Où dans `radio-odyssey-relax` |
|---|---|---|---|---|
| A1 | `/pro.html` | Paragraphe de présentation d'Elisabeth Bélot-Grimaud : « Docteure en psychologie cognitive, elle est chercheuse et enseignante en psychologie, spécialisée en santé mentale positive, autrice de « Programmez votre cerveau pour le bonheur » et conférencière TEDx à deux reprises… » | **49 %** — reprend la fiche `elisabeth-belot-grimaud-radio-odyssey.html` et des passages de `index.html` et `musique-positive-et-bonne-humeur.html` | `src/pages/pro.astro`, carte « Elisabeth Bélot-Grimaud » |
| A2 | `/pro.html` | Introduction de la vidéo partenaire : « …a mis en ligne sur sa chaîne YouTube une séance de cohérence cardiaque en musique, dans le même esprit que les séquences… » | **53 %** — composant `PartnerVideo` partagé avec 4 pages d'Odyssey | `src/components/PartnerVideo.astro` (propriété `intro`, remplaçable page par page) |
| A3 | `/respiration-4-6.html` | « Ralentir volontairement sa respiration autour de six cycles par minute (le 4/6) est souvent associé à une sensation de calme plus rapide… C'est le même principe que la cohérence cardiaque, popularisée en France par le Dr David O'Hare… » | **32 %** — reprend un paragraphe de `bienfaits-coherence-cardiaque.html` | `src/pages/respiration-4-6.astro`, carte « Ce que ce moment peut vous apporter » |

**Pistes** (à arbitrer, pas à appliquer d'office) :
- **A1** : le brief « Odyssey → Relax » établit que la fiche d'Elisabeth **reste chez Odyssey**. Relax peut donc la résumer en une ou deux phrases **originales** et renvoyer vers elle (`https://www.radio-odyssey.com/elisabeth-belot-grimaud-radio-odyssey.html`) au lieu de la recopier, ce qui est aussi la règle « on fait un lien vers la page d'Odyssey quand une définition manque ».
- **A2** : la propriété `intro` du composant existe déjà ; une phrase propre à Relax suffit.
- **A3** : même logique que A1 : Relax fait faire, Odyssey explique. Ce paragraphe est le seul passage « explicatif » qui reste sur Relax ; il peut être raccourci et renvoyer vers la page d'Odyssey sur les bienfaits.

⚠️ Toute retouche de A1 et A3 touche à des propos de santé et au nom d'une personne réelle : **la relecture d'Elisabeth Bélot-Grimaud s'applique** (voir le bloc « Relu par… » de ces pages).

## B. Texte volontairement commun — à garder

| Passage | Pages de Relax | Pages d'Odyssey | Pourquoi on le garde |
|---|---|---|---|
| Avertissement santé : « Ce contenu est fourni à titre informatif et ne remplace pas un avis médical, psychologique ou professionnel. En cas de doute, consultez un professionnel de santé. » | `/pro`, `/respiration-4-6` (+ la première phrase sur `/la-nuit`) | 15 | Formule de prudence **repris mot pour mot** par choix (tableau des fichiers jumeaux). La reformuler côté Relax serait prendre un risque pour rien. |
| Ligne « Relu par Elisabeth Bélot-Grimaud, Docteure en psychologie cognitive, partenaire santé de Radio Odyssey · Dernière vérification : 16 août 2026 » | `/pro`, `/respiration-4-6` | 11 | Attribution, pas un contenu. Identique parce que la personne et la date sont les mêmes. |
| Deux références : Inserm (Canal Détox) et Goessl, Curtiss & Hofmann (2017) | `/respiration-4-6` | 12 | Une même source se cite de la même façon. |

## C. Texte d'interface, présent sur toutes les pages — sans enjeu éditorial

- Alerte « 🎧 Pour une meilleure écoute (lecture en fond, sans coupure), ouvrez ce lien dans votre navigateur… » : sur les 7 pages de Relax et 250 d'Odyssey.
- Bandeau cookies : « …utilise Google Analytics pour mesurer l'audience du site… Aucun cookie n'est déposé sans votre accord. » : même gabarit (le nom de la station diffère).

Ce sont des composants masqués par défaut, communs par construction. Les différencier serait possible mais sans effet attendu sur le référencement.

## D. Pages légales — exclues, comme prévu par le brief

`/mentions-legales.html` et `/politique-de-confidentialite.html` : 13 blocs et 22 phrases identiques (hébergeur, formule RGPD, Google Analytics, RadioKing, droits et CNIL…). Normal et attendu. Le paragraphe Umami, ajouté le 4 novembre dans les deux politiques (§108), est identique à dessein : c'est le même outil, le même sous-traitant.

## E. Ce qui est propre

- **Page d'accueil de Relax** : aucun bloc ne recoupe Odyssey.
- **Pied de page** : textes différents.
- **`/programmes`**, **`/la-nuit`** : originaux, hormis l'avertissement santé (B). Un titre de section, « Les séquences de respiration guidée », existe aussi chez Odyssey ; quatre mots, sans portée.
- **Titres et descriptions** : tous distincts.

## Ce que l'audit ne couvre pas

Les données structurées (description de la station dans le JSON-LD), les textes alternatifs d'images et les attributs `aria-label` n'ont pas été comparés. Le tableau des fichiers jumeaux du `CLAUDE.md` de Relax reste la référence pour ce qui a été copié du socle.
