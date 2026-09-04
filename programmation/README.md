# Catalogue des titres RadioKing — fichier de travail

`catalogue-titres-radioking.csv` : **1812 couples (artiste, titre) distincts, 1204 artistes**,
tous réellement diffusés sur Radio Odyssey au moins une fois entre le 1er janvier 2025 et le
2 septembre 2026. Ce n'est **pas** un fichier livré au site (hors `src/` et `public/`, jamais
buildé ni déployé) — c'est une base de travail pour toi et Claude, à consulter avant de
proposer un fait de programmation (nouvelle fiche artiste, nouveau quiz, vérification d'une
reprise...).

`catalogue-radio-odyssey.xlsx` : la même donnée, mise en forme pour un usage humain — envoyée
directement au propriétaire (pas de lien public), 4 onglets (Résumé, Titres, Artistes,
Méthode), tableaux triables/filtrables, deux colonnes de l'onglet Artistes calculées par
formule (`COUNTIF`/`SUMIF`) à partir de l'onglet Titres plutôt que figées. ⚠️ Les formules
n'ont **pas** pu être vérifiées par recalcul automatique (LibreOffice absent de cette machine)
— seules des fonctions standards (`SUM`, `COUNTIF`, `SUMIF`, `SUBTOTAL`) ont été utilisées, et
Excel les recalcule à l'ouverture, mais un premier coup d'œil aux totaux vaut la peine.
`build_catalogue_xlsx.py` régénère ce classeur depuis le CSV — voir « Comment le régénérer ».
Aucun de ces trois fichiers n'est suivi dans Git à l'exception du script (voir `.gitignore`) :
CSV et xlsx restent en local.

⚠️ Ne pas confondre avec `src/data/artists.js`, qui ne retient — volontairement — que les
147 artistes ayant une fiche, au plus 8 titres chacun, sur la seule fenêtre glissante du
14 mai au 13 août 2026. Ce fichier-ci est bien plus large : tout artiste et tout titre vus
dans les exports, sans plafond, sur vingt mois complets et continus.

## D'où viennent les 1812 lignes

Quatre exports RadioKing "fréquence" (déjà agrégés par le manager, un `Play frequency` par
couple artiste/titre), fournis par le propriétaire, couvrant quatre semestres **continus et
non chevauchants** — d'où une simple somme, sans risque de double comptage. Depuis le
2026-09-03, ils sont conservés dans un dossier stable (contrairement aux pièces jointes du
chat, voir plus bas) :

```
~/Downloads/Radio Odyssey CATALOGUE DIFF totale PRog 2025 aout 2026/
```

| Fichier | Fenêtre |
|---|---|
| `play-frequency-report-from-2025-01-01-to-2025-06-30.csv` | 2025-01-01 → 2025-06-30 |
| `play-frequency-report-from-2025-07-01-to-2025-12-31.csv` | 2025-07-01 → 2025-12-31 |
| `play-frequency-report-from-2026-01-01-to-2026-06-30 (1).csv` | 2026-01-01 → 2026-06-30 |
| `play-frequency-report-from-2026-07-01-to-2026-09-02.csv` | 2026-07-01 → 2026-09-02 |

**`Plays_total`** = somme des `Play frequency` des quatre exports pour ce couple — un chiffre
directement comparable, puisque les fenêtres ne se recoupent pas. **`Semestres_couverts`**
indique sur combien des quatre semestres le titre a été vu (4 = diffusé en continu depuis
janvier 2025 ; 1 = plus ponctuel, à vérifier avant de s'y fier pour un contenu qui doit durer).

⚠️ Ce chiffre reste une reconstitution à partir d'exports agrégés, pas une requête en direct
sur RadioKing : pour une confirmation certifiée à un instant donné, un nouvel export depuis
le manager (Planification → Historique → Rapport des titres joués) reste la seule source qui
fasse foi.

## Couverture

**Continue du 1er janvier 2025 au 2 septembre 2026**, sans trou. Antérieur à 2025 : aucun
export disponible à ce jour.

Les lignes `Chroniques — Météo` / `Chroniques — Horoscope` (si présentes) sont des
**segments parlés**, pas des titres musicaux : à filtrer pour tout travail éditorial sur la
musique.

## Politique de fusion : même artiste + même titre de base = un seul titre

**Décidée par le propriétaire le 2026-09-03** : Radio Odyssey change régulièrement de version
d'un même titre (remix, édit, remaster...) — ce n'est pas une raison de fragmenter son
décompte de diffusion. Le script (`base_title()` dans `build_catalogue_xlsx.py`) ignore tout
ce qui est entre parenthèses ou crochets dans le titre, et fusionne automatiquement toutes les
lignes qui partagent le même artiste (exact) et le même titre de base — **appliqué à chaque
régénération, plus de revue manuelle groupe par groupe.**

**Comment on y est arrivé, en trois temps** :

1. **Crédits d'artiste fragmentés (25 titres)** — RadioKing traite parfois « Artiste A » et
   « Artiste A, Artiste B » comme deux entités distinctes pour le même enregistrement, quand le
   propriétaire ajuste en cours d'année en ne laissant que l'artiste principal dans la colonne
   Artiste (featuring déplacé dans le titre). Repéré sur « Bal de Bamako » (`-M-` : 84 passages
   / `M-, Toumani & Sidiki Diabaté` : 8 — 92 passages réels), puis 24 autres cas trouvés et
   fusionnés.
2. **Titres fragmentés par la casse ou un tag technique (9 titres)** — le propriétaire a
   remarqué à l'oreille que « MmmBop » (Hanson) et « Price Tag » (Jessie J) semblaient
   n'avoir été diffusés qu'une fois d'après le fichier, alors qu'il les entend régulièrement.
   MmmBop : `MmmBop (House remix)` (301) + `Mmmbop` (20) + `MMMBop` (1) = **322 passages
   réels**. Price Tag : `Price Tag (Feat. B.O.B)` (80) + `Price Tag (ft. B.o.B remastered)` (1)
   = **81 passages réels**. 7 autres titres du même genre trouvés dans la foulée.
3. **Généralisation (72 groupes de plus)** — même défaut, mais avec un mot qui diffère (souvent
   un nom de remix) plutôt qu'une simple faute de casse. Premier cas confirmé : « Messy » (Lola
   Young, `Messy` 354 + `Messy (Dj Dark Remix)` 316 = 670 passages, même enregistrement). Plutôt
   que trancher les 71 autres un par un, le propriétaire a posé la règle générale ci-dessus —
   « c'est aussi la philosophie de Radio Odyssey de changer les versions ».

La colonne `Variantes_fusionnees` du CSV (et « Variantes fusionnées » de l'onglet Titres du
classeur) garde la trace des crédits/titres d'origine pour chaque titre regroupé — rien n'est
perdu, juste additionné.

**Deux cas restent volontairement à part**, parce que ce ne sont pas des versions du même
titre mais des mashups combinant deux chansons différentes : « Holiday » (Madonna) x « Don't
Start Now » (Dua Lipa) dans un DJ mashup, et l'inverse. Le script ne les fusionne pas de
lui-même non plus : leur artiste crédité diffère trop (`DJ Surda / Madonna vs. Dua Lipa` ne
correspond ni à `Madonna` ni à `Dua Lipa`) pour matcher la règle "même artiste".

## Historique

Cinq versions le même jour (2026-09-03), chacune corrigeant un défaut de la précédente :

1. Fusion d'exports hétérogènes — trois "détail" (une ligne par passage) et trois "fréquence"
   déjà agrégés, avec des fenêtres qui se recoupaient par endroits et un trou entre juillet et
   septembre 2026. **2016 titres**, chiffre peu fiable (maximum plutôt que somme sur les
   fenêtres redondantes).
2. Reconstruite à partir des quatre exports "fréquence" complets et continus, puis corrigée
   pour 25 titres fragmentés — mais les CSV bruts avaient disparu de `~/Downloads` entre-temps,
   donc la correction est partie du fichier déjà agrégé, avec un bug d'encodage au passage
   (voir plus bas). **1900 titres.**
3. Les quatre exports rejoints une seconde fois par le propriétaire (dossier stable listé plus
   haut) — reconstruite en repartant des fichiers bruts, correction des 25 titres appliquée dès
   le départ, bug d'encodage résolu (normalisation Unicode systématique). **1899 titres.**
4. 9 titres fragmentés par la casse corrigés (MmmBop, Price Tag, 7 autres), « Messy » fusionné
   sur confirmation ponctuelle du propriétaire, ajout d'un onglet « À trancher » pour les 72
   autres groupes repérés. **1888 titres.**
5. **Version actuelle** : le propriétaire tranche pour tous — politique de fusion générale
   (voir section ci-dessus) plutôt qu'un arbitrage groupe par groupe. L'onglet « À trancher »,
   devenu inutile, est retiré. **1812 titres, 1204 artistes, total des passages inchangé :
   242 740.**

⚠️ **Bug rencontré et corrigé en cours de route (version 3)** : `Diabaté` existait sous deux
formes Unicode différentes selon la ligne source (é composé vs é décomposé, visuellement
identiques) — la comparaison de chaînes échouait donc silencieusement sur ce cas précis, et
"Bal de Bamako" n'a pas fusionné à la première tentative de correction. Toutes les chaînes sont
maintenant normalisées (NFC) avant comparaison.

## Comment le régénérer

Le classeur Excel (Résumé, Titres, Artistes, Méthode) se régénère depuis le CSV avec :

```
python3 programmation/build_catalogue_xlsx.py
```

Ce script applique **automatiquement** la politique de fusion ci-dessus (fonction
`base_title()`) — aucune revue manuelle nécessaire pour ce type de doublon. Il reste
utile de relire ses résultats (nombre de titres, d'artistes, total des passages) avant de
renvoyer le fichier, au cas où une fusion produirait un résultat inattendu.

Pour le CSV lui-même, à partir de nouveaux exports RadioKing : lire les fichiers avec le
module `csv` de Python, regrouper par `(Artist, Track)` normalisé (NFC), sommer `Play
frequency` sur les fichiers dont les fenêtres ne se chevauchent pas, trier par total
décroissant, puis relancer `build_catalogue_xlsx.py` — la fusion des titres se fait au moment
de la construction du classeur, pas besoin de la refaire à la main sur le CSV. Demander à
Claude de le faire (avec les nouveaux exports) reste plus simple que de le refaire seul —
préciser la fenêtre couverte par chaque nouveau fichier pour confirmer qu'elle ne chevauche
pas les précédentes avant de sommer.

⚠️ Un CSV transmis via le chat (pièce jointe `@fichier.csv`) ne reste pas forcément dans
`~/Downloads` après traitement — c'est ce qui est arrivé aux quatre exports du 2026-09-03,
disparus une fois utilisés une première fois. Le propriétaire les a resauvegardés dans un
dossier nommé dédié (voir plus haut), ce qui règle le problème pour ces quatre-là : à
réexporter dans ce même dossier la prochaine fois, plutôt que de les rejoindre au chat sans
les sauvegarder sur disque.
