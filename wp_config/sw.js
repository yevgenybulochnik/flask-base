workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  '/login',
  new workbox.strategies.NetworkFirst()
)

workbox.precaching.precacheAndRoute(self.__precacheManifest);
