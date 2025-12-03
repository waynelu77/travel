self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('travel-app-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/travel/',
        '/travel/index.html',
        '/travel/manifest.json'
        // 可加其他靜態資源
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
