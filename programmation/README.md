# Catalogue des titres RadioKing — fichier de travail

`catalogue-titres-radioking.csv` : **2016 couples (artiste, titre) distincts**, tous réellement
diffusés sur Radio Odyssey au moins une fois dans les exports disponibles. Ce n'est **pas**
un fichier livré au site (hors `src/` et `public/`, jamais buildé ni déployé) — c'est une
base de travail pour toi et Claude, à consulter avant de proposer un fait de programmation
(nouvelle fiche artiste, nouveau quiz, vérification d'une reprise...).

⚠️ Ne pas confondre avec `src/data/artists.js`, qui ne retient — volontairement — que les
147 artistes ayant une fiche, au plus 8 titres chacun, sur la seule fenêtre du 14 mai au
13 août 2026. Ce fichier-ci est bien plus large : tout artiste et tout titre vus dans les
exports, sans plafond.

## D'où viennent les 2016 lignes

Six exports RadioKing, fusionnés (dossier `~/Downloads`, tous au format CSV) :

| Fichier | Fenêtre réelle | Type |
|---|---|---|
| `Radio odyssey report musique  from-2025-01-19-to-2025-06-30.csv` | 2025-01-19 → 2025-06-30 | détail (une ligne par passage) |
| `Radio odyssey report musique -from-2026-01-01-to-2026-06-30.csv` | 2025-07-01 → 2025-12-31 | détail — ⚠️ **nom de fichier trompeur**, le contenu réel est le second semestre 2025, pas 2026 |
| `Radio odyssey report musique et chroniques -from-2026-06-01-to-2026-07-01.csv` | 2026-06-01 → 2026-07-01 | détail |
| `play-frequency-report-from-2025-12-06-to-2026-01-27.csv` | 2025-12-06 → 2026-01-27 | fréquence déjà agrégée |
| `play-frequency-report-from-2026-01-01-to-2026-06-30.csv` | 2026-01-01 → 2026-06-30 (export A) | fréquence déjà agrégée |
| `Radio odyssey report musique et chroniques -from-2026-01-01-to-2026-06-30.csv` | 2026-01-01 → 2026-06-30 (export B) | fréquence déjà agrégée |

**Deux fenêtres se recoupent volontairement** (fin décembre 2025 avec le début de l'export
"fréquence" de décembre, et les deux exports "S1 2026" qui couvrent la même période avec
des dates d'extraction différentes) — dans ces cas, le script prend le **maximum** observé
plutôt que la somme, pour ne jamais gonfler un chiffre par double comptage. Le reste
(les trois exports "détail") ne se chevauche pas : additionné sans risque.

**`Plays_observes`** est donc un total défendable mais **pas un compteur officiel RadioKing** :
c'est la meilleure reconstitution possible à partir des exports disponibles, pas une requête
unique sur la base RadioKing elle-même. Pour un chiffre certifié sur une fenêtre précise, un
nouvel export RadioKing (Planification → Historique → Rapport des titres joués) reste la
seule source qui fasse foi.

## Ce qui manque

- **2026-07-02 → 2026-08-13** et **2026-08-14 → aujourd'hui** : aucun export local ne couvre
  ces deux périodes (la seconde correspond à la fenêtre glissante qui alimente
  `artists.js`, mais son export brut n'est pas dans ce dossier — seul le résultat dépouillé,
  plafonné à 8 titres par artiste, y est visible).
- **Avant le 19 janvier 2025** : rien d'antérieur n'a été exporté à ce jour.
- Les lignes `Chroniques — Météo` / `Chroniques — Horoscope` sont des **segments parlés**,
  pas des titres musicaux : à filtrer pour tout travail éditorial sur la musique.

## Comment le régénérer

Le script qui a produit ce CSV n'est pas conservé dans le dépôt (usage ponctuel). Pour
refaire l'opération après un nouvel export RadioKing : lire chaque fichier avec le module
`csv` de Python, regrouper par `(Artist, Track)` normalisé, sommer les fenêtres "détail" non
chevauchantes et prendre le maximum entre exports "fréquence" qui se recoupent, trier par
`Plays_observes` décroissant. Demander à Claude de le refaire est plus simple que de
retrouver l'ancien script.
