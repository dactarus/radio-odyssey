# Catalogue des titres RadioKing — fichier de travail

`catalogue-titres-radioking.csv` : **1931 couples (artiste, titre) distincts, 1226 artistes**,
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

## D'où viennent les 1931 lignes

Quatre exports RadioKing "fréquence" (déjà agrégés par le manager, un `Play frequency` par
couple artiste/titre), fournis par le propriétaire, couvrant quatre semestres **continus et
non chevauchants** — d'où une simple somme, sans risque de double comptage :

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

## Historique

Une première version de ce fichier (2026-09-03, avant-midi) fusionnait des exports plus
hétérogènes — trois "détail" (une ligne par passage) et trois "fréquence" déjà agrégés, avec
des fenêtres qui se recoupaient par endroits (fin 2025, deux exports différents pour S1 2026)
et un trou entre juillet et septembre 2026. Elle donnait 2016 titres, un chiffre moins fiable
(recours à un maximum plutôt qu'une somme sur les fenêtres redondantes). Remplacée le jour
même par cette version, une fois les quatre exports "fréquence" complets et continus fournis
par le propriétaire.

## Comment le régénérer

Lire les quatre CSV avec le module `csv` de Python, regrouper par `(Artist, Track)` normalisé,
sommer `Play frequency` sur les quatre fichiers, trier par total décroissant. Demander à
Claude de le refaire (avec les nouveaux exports) est plus simple que de retrouver l'ancien
script — préciser la fenêtre couverte par chaque nouveau fichier pour confirmer qu'elle ne
chevauche pas les précédentes avant de sommer.
