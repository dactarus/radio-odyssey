> ✅ **Archivé — exécuté en entier le 20 novembre 2026** (SEO_BLUEPRINT.md §134 et §135). Conservé pour mémoire ; ne plus l'exécuter.

# Brief — Radioline a fermé : dix liens à reprendre, et un profil à gagner

**Pour** : Claude Code du dépôt `radio-odyssey` · **De** : la conversation qui tient le journal des annuaires · **Le** : 18 novembre 2026
**Contexte complet** : `SEO_BLUEPRINT.md`, **§132**. À lire avant d'exécuter.

---

## 1. Le fait

**Radioline a cessé son activité le lundi 16 novembre 2026.** Le service renvoie ses utilisateurs vers TuneIn. Les dix liens
Radioline du dépôt pointent donc vers un service mort.

**Mais ce n'est pas un simple nettoyage.** Odyssey possède une fiche vivante sur **radio.net** — `https://www.radio.net/s/odyssey` —
qui n'est référencée nulle part sur le site. radio.net n'a aucun rapport avec Radioline : c'est radio.de GmbH, Hambourg, groupe
Madsack, une vingtaine de sites nationaux, quinze langues. **On remplace donc un profil mort par un profil vivant**, au lieu de
supprimer une ligne.

⚠️ **Piège de lecture** : sur quatre pages anglaises, le lien est déjà **intitulé « Radio.net »** mais pointe vers `radioline.co`.
L'étiquette était juste, l'URL était fausse. Sur ces quatre-là, **il n'y a rien à supprimer : il y a une URL à corriger.**

## 2. Les dix occurrences, et ce qu'on en fait

### A — Les deux fichiers de socle (à faire en premier)

| Fichier | Ligne | Aujourd'hui | À faire |
|---|---|---|---|
| `src/layouts/Layout.astro` | 82 | `'https://www.radioline.co/fr/radios/radio_odyssey',` dans `SAME_AS` | **Remplacer** par `'https://www.radio.net/s/odyssey',` |
| `src/components/Footer.astro` | 227 | `'radioline.co': 'radioline',` dans `PLATEFORMES` | **Remplacer** par `'radio.net': 'radionet',` |

`SAME_AS` est la liste des profils officiels déclarée à Google dans les données structurées, partagée par l'`Organization` et la
`RadioStation`. **C'est l'occurrence la plus nuisible des dix** : on y déclare un profil officiel qui mène à un site fermé.

Le commentaire du `Footer.astro` le dit déjà : *« PLATEFORMES doit rester aligné avec le tableau SAME_AS de Layout.astro »*. Les
deux changements vont donc ensemble, dans le même commit.

### B — La pastille de la page d'accueil

| Fichier | Lignes | À faire |
|---|---|---|
| `src/pages/index.astro` | 392-393 | Pastille `platform-pill` libellée **RadioLine** |

✅ **Arbitré par Frédéric le 18 novembre : on garde la pastille.** Donc : lien vers `https://www.radio.net/s/odyssey`, libellé
**radio.net** (en bas de casse, c'est la graphie de leur marque). L'icône actuelle — trois traits horizontaux — ne représente rien
de propre à Radioline et reste telle quelle. Le site conserve ses cinq pastilles.

Aucune décision n'est donc en suspens dans ce brief : il s'exécute en entier.

### C — Les pages anglaises

| Fichier | Ligne | Aujourd'hui | À faire |
|---|---|---|---|
| `src/pages/en/index.astro` | 42 | Réponse de FAQ : « …TuneIn, Deezer, WeLoveRadio, Orange or **Radioline** » | Écrire **radio.net** à la place du mot |
| `src/pages/en/index.astro` | 125 | Lien libellé **Radioline** vers `radioline.co` | Libellé **radio.net**, URL `https://www.radio.net/s/odyssey` |
| `src/pages/en/radio-odyssey-faq.astro` | 76 | `tag-pill` libellée **Radioline** | Idem |
| `src/pages/en/feel-good-music-radio.astro` | 45 | Libellé **Radio.net**, URL `radioline.co` | **URL seule à corriger** → `https://www.radio.net/s/odyssey` |
| `src/pages/en/keep-listening-radio-odyssey.astro` | 69 | idem | idem |
| `src/pages/en/positive-european-music-station.astro` | 56 | idem | idem |
| `src/pages/en/listen-on-tunein.astro` | 65 | idem | idem |

## 3. Ce qu'il ne faut pas faire

- **Ne pas toucher à la colonne « Écouter sur » du pied de page** (`Footer.astro`, lignes 56-60). Elle ne contient pas Radioline :
  RadioKing, TuneIn, Deezer, WeLoveRadio, Orange. Rien à y changer, et surtout **ne pas y ajouter radio.net sans accord** — cette
  colonne est une vitrine, pas un inventaire.
- **Ne pas ajouter la fiche radio.net de Radio Odyssey Relax.** Elle n'existe pas : la demande de référencement vient d'être posée
  chez eux, la réponse n'est pas arrivée. Le sujet reviendra par un brief distinct.
- **Ne pas retoucher la fiche myTuner d'Odyssey** présente dans `SAME_AS` ligne 84 (`radio-odyssey-512057`) : elle est vivante.
- **Ne pas chercher à corriger le nom ou les genres d'Odyssey depuis le dépôt.** Ce que les annuaires affichent vient de la fiche
  d'identité **RadioKing**, source unique (§132). Le site n'y peut rien.

## 4. Vérification attendue avant de rendre la main

1. `grep -ri "radioline" src/` ne renvoie plus rien.
2. Les données structurées de la page d'accueil valident, et `sameAs` contient bien onze entrées dont `radio.net`.
3. Les quatre pages anglaises dont le libellé était déjà « Radio.net » pointent maintenant vers la bonne fiche — ouvrir chaque
   lien une fois.
4. La pastille de la page d'accueil affiche bien **radio.net** et ouvre la fiche `radio.net/s/odyssey`.
