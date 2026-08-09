/* ============================================================================
   Radio Odyssey — Service worker
   ----------------------------------------------------------------------------
   Objectif : rendre le site installable (icône sur l'écran d'accueil) et
   utilisable hors connexion, SANS jamais servir un contenu périmé quand le
   réseau est disponible.

   Principes retenus :

   1. Les pages HTML sont toujours demandées au réseau en premier
      (network-first). La console d'édition publie souvent : une page en cache
      qui prendrait le pas sur la version en ligne serait un bug, pas une
      optimisation. Le cache ne sert que de filet hors ligne.

   2. Les ressources à empreinte (/_astro/, polices, images) sont servies
      depuis le cache en priorité (cache-first). Leur nom change à chaque
      modification, donc aucun risque de version périmée.

   3. Les feuilles de style et scripts versionnés par ?v=... utilisent
      stale-while-revalidate : affichage immédiat, mise à jour en arrière-plan.

   4. Rien de cross-origin n'est intercepté. Le flux RadioKing, le lecteur en
      iframe, Umami et Google Tag Manager passent directement au réseau — les
      toucher ne pourrait que casser la lecture ou fausser la mesure.

   IMPORTANT : incrémenter CACHE_VERSION à chaque changement de ce fichier ou
   de la page de repli. Les anciens caches sont purgés à l'activation.
   ========================================================================== */

const CACHE_VERSION = 'ro-v1';
const CACHE_STATIC = `${CACHE_VERSION}-static`;
const CACHE_PAGES = `${CACHE_VERSION}-pages`;

const OFFLINE_URL = '/hors-ligne.html';

/* Le strict minimum pour que la page de repli s'affiche correctement sans
   réseau. Volontairement court : plus la liste est longue, plus l'installation
   du service worker risque d'échouer sur une seule ressource manquante. */
const PRECACHE = [
  OFFLINE_URL,
  '/assets/images/logo.png',
  '/assets/images/favicon-32.png',
];

/* Chemins que le service worker ne doit jamais intercepter. */
const BYPASS = [
  '/sw.js',
  '/manifest.json',
  '/console.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_STATIC)
      // addAll échoue en bloc si une seule ressource manque : on ajoute donc
      // une par une, en ignorant les échecs individuels.
      .then((cache) => Promise.all(
        PRECACHE.map((url) => cache.add(url).catch(() => null))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((noms) => Promise.all(
        noms
          .filter((nom) => !nom.startsWith(CACHE_VERSION))
          .map((nom) => caches.delete(nom))
      ))
      .then(() => self.clients.claim())
  );
});

/* Une page HTML ? On teste trois signaux, car la navigation côté client
   d'Astro (ClientRouter) récupère les pages via fetch() : dans ce cas
   request.mode ne vaut pas 'navigate'. */
function estUnePage(request) {
  return (
    request.mode === 'navigate' ||
    request.destination === 'document' ||
    (request.headers.get('accept') || '').includes('text/html')
  );
}

function estRessourceEmpreinte(url) {
  return (
    url.pathname.startsWith('/_astro/') ||
    url.pathname.startsWith('/assets/fonts/') ||
    url.pathname.startsWith('/assets/images/') ||
    url.pathname.startsWith('/assets/vendor/')
  );
}

async function reseauPuisCache(request) {
  try {
    const reponse = await fetch(request);
    if (reponse && reponse.ok) {
      const copie = reponse.clone();
      caches.open(CACHE_PAGES).then((cache) => cache.put(request, copie));
    }
    return reponse;
  } catch (e) {
    const enCache = await caches.match(request);
    if (enCache) return enCache;
    const repli = await caches.match(OFFLINE_URL);
    if (repli) return repli;
    throw e;
  }
}

async function cachePuisReseau(request) {
  const enCache = await caches.match(request);
  if (enCache) return enCache;
  const reponse = await fetch(request);
  if (reponse && reponse.ok) {
    const copie = reponse.clone();
    caches.open(CACHE_STATIC).then((cache) => cache.put(request, copie));
  }
  return reponse;
}

async function cacheEtRevalidation(request) {
  const enCache = await caches.match(request);
  const reseau = fetch(request)
    .then((reponse) => {
      if (reponse && reponse.ok) {
        const copie = reponse.clone();
        caches.open(CACHE_STATIC).then((cache) => cache.put(request, copie));
      }
      return reponse;
    })
    .catch(() => null);
  return enCache || (await reseau) || fetch(request);
}

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Uniquement les lectures : jamais de POST, de PUT ni de requête de suivi.
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Tout ce qui n'est pas sur radio-odyssey.com passe au réseau sans
  // interception : flux audio, lecteur, mesure d'audience.
  if (url.origin !== self.location.origin) return;

  if (BYPASS.some((chemin) => url.pathname === chemin)) return;

  if (estUnePage(request)) {
    event.respondWith(reseauPuisCache(request));
    return;
  }

  if (estRessourceEmpreinte(url)) {
    event.respondWith(cachePuisReseau(request));
    return;
  }

  event.respondWith(cacheEtRevalidation(request));
});
