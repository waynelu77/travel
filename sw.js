// sw.js（放 /travel/sw.js）
const CACHE = "travel-app-v2";

const PRECACHE_URLS = [
  "/travel/",
  "/travel/index.html",
  "/travel/manifest.json",
  "/travel/icon-192.png",
  "/travel/icon-512.png",
  "https://cdn.tailwindcss.com",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
