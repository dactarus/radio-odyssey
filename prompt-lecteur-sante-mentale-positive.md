# Mission : remplacer le lecteur radio sur une page de santementalepositive.fr

## Contexte

Sur une page du site santementalepositive.fr (une fiche pratique autour de la musique et du bien-être, section "Une radio pour essayer : Radio Odyssey"), un lecteur radio est actuellement intégré (voir capture d'écran jointe). Radio Odyssey (radio-odyssey.com) est une web radio partenaire — musique positive, sans publicité, avec des séquences de cohérence cardiaque diffusées chaque heure. Sa fondatrice collabore avec Elisabeth Bélot-Grimaud (autrice de la fiche) et souhaite que ce lecteur soit remplacé par une version plus simple.

Le site est en HTML statique (pas de CMS/framework), hébergé sur Vercel.

## Objectif

Remplacer le lecteur actuel par le nouveau code ci-dessous, avec :
- **Un bouton play** (lecture du direct)
- **Un bouton de partage** (partager le lien de la radio) — à ajouter à côté, voir plus bas
- **Aucun bouton d'achat de titre** — c'est le point qui a motivé le changement. Le nouveau code ci-dessous a été généré directement depuis le tableau de bord RadioKing avec cette option explicitement désactivée, donc c'est déjà réglé côté configuration — pas besoin d'y retoucher.

## Avant de commencer

Explore le repo pour repérer où et comment le lecteur actuel est intégré. Comme le site est en HTML statique (pas de composants partagés), **vérifie si ce même lecteur apparaît sur d'autres pages** — si c'est le cas et qu'il faut le remplacer partout, il faudra le faire fichier par fichier (pas de composant central à modifier une seule fois).

## Code à intégrer

Généré depuis RadioKing, option achat déjà désactivée — à utiliser tel quel, ne pas modifier les paramètres de l'URL :

```html
<iframe
  src="https://player.radioking.io/radio-odyssey/?c=%231e7fcb&c2=%23ffffff&f=h&i=0&p=1&s=1&alb=0&li=0&popup=1&plc=0&h=145&l=350&v=2"
  style="border-radius: 5px; width: 350px; height: 145px; -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);-moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);"
  frameBorder="0">
</iframe>
<script type="text/javascript" src="https://player.radioking.io/scripts/iframe.bundle.js"></script>
```

Remplace l'iframe/script actuel par ce bloc, à l'endroit repéré dans la capture d'écran. Le script `iframe.bundle.js` ne doit être inclus **qu'une seule fois par page**, même si le lecteur apparaît plusieurs fois sur la même page — vérifier qu'il n'y a pas de doublon si un ancien script du même type était déjà chargé.

## Bouton de partage (à construire, RadioKing ne le fournit pas dans ce format)

Un bouton simple, sans dépendance, avec repli automatique si l'API de partage n'est pas disponible sur le navigateur :

```html
<button type="button" id="ro-share-btn" aria-label="Partager Radio Odyssey" style="margin-top:.6rem;">
  Partager Radio Odyssey
</button>

<script>
document.getElementById('ro-share-btn').addEventListener('click', function () {
  var url = 'https://www.radio-odyssey.com/';
  var title = 'Radio Odyssey — La Positive Radio';
  if (navigator.share) {
    navigator.share({ title: title, url: url }).catch(function () {});
  } else if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(function () {
      alert('Lien copié !'); // à remplacer par un feedback visuel plus discret si le site en a déjà un ailleurs
    });
  }
});
</script>
```

Positionne ce bouton juste sous ou à côté de l'iframe (largeur 350px), en reprenant le style visuel déjà utilisé pour les autres boutons du site plutôt qu'en inventant un nouveau style.

## Contraintes

- Rester simple à maintenir : pas de dépendance/librairie lourde, du HTML/JS natif comme ci-dessus.
- Ne pas casser le reste de la page (styles, structure) en remplaçant le lecteur.
- Tester concrètement : le bouton play lance bien le direct, le bouton de partage fonctionne, et le rendu visuel (350×145px, coins arrondis, ombre) s'intègre bien à la page.

## Point technique à garder en tête pour plus tard

Le lecteur est un `<iframe>` d'un autre domaine (radioking.io) — c'est une boîte totalement isolée : impossible de modifier son contenu interne (couleurs, textes, futurs boutons) avec du CSS/JS écrit depuis santementalepositive.fr. Tout changement visuel du lecteur lui-même devra repasser par le tableau de bord RadioKing (accès Radio Odyssey), pas par du code local.

## En cas de doute

Si un point n'est pas clair (endroit exact où le bouton de partage doit s'insérer visuellement, style à reprendre), demande confirmation à Elisabeth ou à Frédéric (Radio Odyssey) avant de trancher seul.
