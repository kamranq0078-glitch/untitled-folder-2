const CACHE_NAME = 'exotic-collection-v1';
const STATIC_ASSETS = [
  '/', '/collections.html', '/pashmina.html',
  '/story.html', '/stores.html', '/contact.html',
  '/css/design-system.css', '/css/home.css', '/js/shared.js', '/js/main.js',
  '/og-image.jpg', '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys
        .filter(k => k !== CACHE_NAME)
        .map(k => caches.delete(k))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request)
        .catch(() => caches.match('/'))
      )
  );
});
