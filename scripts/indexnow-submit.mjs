// Notifie Bing/Yandex (protocole IndexNow) de toutes les URLs du sitemap.
// Google ne supporte pas IndexNow — ce script n'accélère donc pas
// l'indexation Google, seulement Bing/Yandex/Seznam/Naver.
// Usage : node scripts/indexnow-submit.mjs
import { readFileSync } from 'node:fs';

const HOST = 'www.radio-odyssey.com';
const KEY = '2495adf186e54590d7e7a907a5faa7d1';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf-8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

console.log(`Soumission de ${urlList.length} URLs à IndexNow...`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }),
});

console.log('Statut:', res.status, res.statusText);
const text = await res.text();
if (text) console.log(text);
