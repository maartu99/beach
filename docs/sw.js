const CACHE = 'traghetto-v1';
const CORE = ['./', './index.html', './support.js', './vendor/react.production.min.js', './vendor/react-dom.production.min.js', './vendor/babel.min.js', './manifest.webmanifest', './icons/icon-192.png', './fonts/material-symbols-outlined.woff2', './fonts/plus-jakarta-sans-latin-wght-normal.woff2'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// network first, cache fallback: always shows the latest deploy when online
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok && (new URL(e.request.url).origin === location.origin || /unpkg\.com|fonts\.(googleapis|gstatic)\.com/.test(e.request.url))) {
      const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
    }
    return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
