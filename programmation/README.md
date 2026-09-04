# Catalogue des titres RadioKing — fichier de travail

`catalogue-titres-radioking.csv` : **1889 couples (artiste, titre) distincts, 1204 artistes**,
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
— seules des fonctions standards (`SUM`, `COUNTIF`, `SUMIF`, `SUBTOTAL`) ont été utilisées,
et Excel les recalcule à l'ouverture, mais un premier coup d'œil aux totaux vaut la peine.
Ni l'un ni l'autre fichier ne sont suivis dans Git (voir `.gitignore`) : à conserver en local.

⚠️ Ne pas confondre avec `src/data/artists.js`, qui ne retient — volontairement — que les
147 artistes ayant une fiche, au plus 8 titres chacun, sur la seule fenêtre glissante du
14 mai au 13 août 2026. Ce fichier-ci est bien plus large : tout artiste et tout titre vus
dans les exports, sans plafond, sur vingt mois complets et continus.

## D'où viennent les 1889 lignes

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

## Correction des crédits d'artiste (25 titres)

RadioKing traite parfois « Artiste A » et « Artiste A, Artiste B » comme deux entités
distinctes pour le **même enregistrement** — le propriétaire ajuste ça en cours d'année en ne
laissant que l'artiste principal dans la colonne Artiste et en déplaçant le featuring dans le
titre (« Ft ... »). Résultat : un même titre finissait fragmenté en plusieurs lignes, avec les
passages répartis entre elles au lieu d'être comptés ensemble — cas repéré en premier sur
« Bal de Bamako » (`-M-` : 84 passages / `M-, Toumani & Sidiki Diabaté` : 8 passages, alors que
c'est le même titre, 92 passages réels).

Recherché sur l'ensemble du fichier (même titre de base, crédits d'artiste qui se recoupent) :
**25 titres concernés**, tous vérifiés puis fusionnés avec l'accord du propriétaire (2026-09-03).
La colonne `Variantes_fusionnees` du CSV (et « Variantes fusionnées » du classeur Excel) garde
la trace des crédits d'origine pour chacun — rien n'est perdu, juste regroupé.

⚠️ La correction est **codée en dur** dans le script de fusion (25 couples artiste/titre
canoniques, chacun avec la liste exacte de ses variantes d'origine) — elle n'est pas détectée
automatiquement à chaque régénération. Si un nouvel export révèle un titre fragmenté du même
genre, il faut l'ajouter à la liste avant de relancer le script, sans quoi il resterait
fragmenté dans le nouveau fichier.

**Deux cas volontairement laissés distincts** : « Holiday » (Madonna) et « Don't Start Now »
(Dua Lipa) ont des lignes qui sont en réalité des **mashups** combinant le titre avec une autre
chanson (ex. un DJ mashup « Holiday x Don't Start Now ») — ce n'est pas le même enregistrement,
donc pas fusionné.

## Correction des titres fragmentés par la casse ou un tag technique (9 titres)

Même défaut que ci-dessus, mais côté **titre** cette fois plutôt que crédit d'artiste — repéré
parce que le propriétaire écoute sa radio et a remarqué que « MmmBop » (Hanson) et « Price Tag »
(Jessie J) semblaient n'avoir été diffusés qu'une seule fois, alors qu'il les entend
régulièrement. Vérification faite : les deux titres étaient bien fragmentés.

- **MmmBop (Hanson)** : `MmmBop (House remix)` (301 passages), `Mmmbop` (20), `MMMBop` (1) —
  **322 passages réels**, pas 1.
- **Price Tag (Jessie J)** : `Price Tag (Feat. B.O.B)` (80 passages), `Price Tag (ft. B.o.B
  remastered)` (1) — **81 passages réels**, pas 1.

**7 autres titres** trouvés par la même vérification, où le titre ne diffère que par la casse,
un espace en trop, ou un tag d'encodage (`(128kbit_AAC)`) — jamais par un mot qui indiquerait
un remix réellement différent : Sophie Ellis-Bextor "Murder On The Dancefloor", No Doubt "Don't
Speak", Teddy Swims "The Door (Cyril Remix)", Gayle "Abcdefu", Texas "Summer Son", Chic "Good
Times (Extended Ethan Wood Rework Edit)", Sabrina Carpenter "Espresso (Official Video)".

⚠️ **Gisement plus large repéré, mais volontairement pas traité** : la même recherche élargie
aux cas où le titre diffère par un mot (pas seulement la casse) — donc potentiellement un vrai
remix différent, ou juste un intitulé mal saisi une deuxième fois — remonte **79 groupes,
~16 000 passages concernés**. Exemple typique : `Messy` (354) / `Messy (Dj Dark Remix)` (316)
chez Lola Young — est-ce le même enregistrement compté deux fois, ou deux fichiers réellement
distincts dans la playlist ? Impossible à trancher depuis les exports seuls. **Pas fusionné
sans ton avis** : fusionner à tort effacerait une vraie distinction entre versions ; ne pas
fusionner laisse peut-être d'autres cas comme MmmBop non détectés. À examiner ensemble si tu
veux aller plus loin — la liste complète peut être régénérée sur demande.

## Historique

Trois versions le même jour (2026-09-03), chacune corrigeant un défaut de la précédente :

1. Fusion d'exports hétérogènes — trois "détail" (une ligne par passage) et trois "fréquence"
   déjà agrégés, avec des fenêtres qui se recoupaient par endroits (fin 2025, deux exports
   différents pour S1 2026) et un trou entre juillet et septembre 2026. **2016 titres**, un
   chiffre peu fiable (recours à un maximum plutôt qu'une somme sur les fenêtres redondantes).
2. Reconstruite à partir des quatre exports "fréquence" complets et continus fournis par le
   propriétaire, puis corrigée pour les 25 titres fragmentés ci-dessus — mais les CSV bruts
   avaient disparu de `~/Downloads` entre-temps (voir avertissement plus bas), donc la
   correction a dû partir du fichier déjà agrégé plutôt que des quatre exports, avec un vrai
   bug d'encodage au passage (voir ci-dessous). **1900 titres.**
3. **Version actuelle** : les quatre exports ont été rejoints une seconde fois par le
   propriétaire, dans le dossier stable listé plus haut — reconstruite en repartant des quatre
   fichiers bruts avec la correction des 25 titres appliquée dès le départ (normalisation
   Unicode systématique, plus de risque du bug ci-dessous). **1899 titres, 1204 artistes,
   total des passages inchangé : 242 740.**

⚠️ **Bug rencontré et corrigé en cours de route** : `Diabaté` existait sous deux formes Unicode
différentes selon la ligne source (é composé vs é décomposé, visuellement identiques) — la
comparaison de chaînes échouait donc silencieusement sur ce cas précis, et "Bal de Bamako"
n'a pas fusionné à la première tentative de correction. Toutes les chaînes sont maintenant
normalisées (NFC) avant comparaison.

## Comment le régénérer

Lire les quatre CSV avec le module `csv` de Python, regrouper par `(Artist, Track)` normalisé,
sommer `Play frequency` sur les quatre fichiers, trier par total décroissant, puis réappliquer
la correction des 25 crédits d'artiste ci-dessus. Demander à Claude de le refaire (avec les
nouveaux exports) est plus simple que de retrouver l'ancien script — préciser la fenêtre
couverte par chaque nouveau fichier pour confirmer qu'elle ne chevauche pas les précédentes
avant de sommer.

⚠️ Un CSV transmis via le chat (pièce jointe `@fichier.csv`) ne reste pas forcément dans
`~/Downloads` après traitement — c'est ce qui est arrivé aux quatre exports du 2026-09-03,
disparus une fois utilisés une première fois (voir Historique). Le propriétaire les a
sauvegardés une seconde fois dans un dossier nommé dédié (voir plus haut), ce qui règle le
problème pour ces quatre-là : à réexporter dans ce même dossier la prochaine fois, plutôt que
de les rejoindre au chat sans les sauvegarder sur disque.
