/// <reference lib="webworker" />
const _self: ServiceWorkerGlobalScope = self as any;

_self.addEventListener('install', () => {
  _self.skipWaiting();
});

const putInCache = async (request: Request, response: Response) => {
  const cache = await caches.open('v1');
  await cache.put(request, response);
};

const cacheFirst = async (request: Request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  const responseFromNetwork = await fetch(request);
  putInCache(request, responseFromNetwork.clone());
  return responseFromNetwork;
};

_self.addEventListener('fetch', (event) => {
  event.respondWith(cacheFirst(event.request));
});
