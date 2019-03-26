workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([
  '/',
  '/login'
])

workbox.precaching.precacheAndRoute(self.__precacheManifest);
