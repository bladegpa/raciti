// service-worker.js
const CACHE_NAME = 'platform-game-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  'https://i.postimg.cc/cHwJc8fk/sfondo-livello-2.png',
  'https://i.postimg.cc/tC5YfPwL/aeryn-giocatore-che-sguaina-la-spada.png',
  'https://i.postimg.cc/FKfz76z4/nyxar.png',
  'https://i.postimg.cc/dVVLK3KD/earyn-che-fa-l-attacco-2.png',
  'https://i.postimg.cc/y8pW6KVj/nyxar-attacco-1.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});