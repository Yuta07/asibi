const STATIC_CACHE = 'static-v1'
const DYNAMIC_CACHE = 'dynamic-v1'

var filesToCache = ['/', '/manifest.json']

self.addEventListener('install', (event) => {
	console.log('[ServiceWorker] Install')
	event.waitUntil(
		caches.open(STATIC_CACHE).then((cache) => {
			cache.addAll(filesToCache)
		})
	)
})

self.addEventListener('activate', (event) => {
	console.log('[ServiceWorker] activate')
	event.waitUntil(
		caches.keys().then((keyList) => {
			return Promise.all(
				keyList.map((key) => {
					if (key !== STATIC_CACHE && key !== DYNAMIC_CACHE) {
						console.log('[ServiceWorker] remove old')
						return caches.delete(key)
					}
				})
			)
		})
	)
	return self.clients.claim()
})

self.addEventListener('fetch', (event) => {
	if (!(event.request.url.indexOf('http') === 0)) return

	console.log('[ServiceWorker] fetch')
	event.respondWith(
		caches.match(event.request).then((response) => {
			if (response) {
				return response
			} else {
				return fetch(event.request).then((res) => {
					return caches.open(DYNAMIC_CACHE).then((cache) => {
						cache.put(event.request.url, res.clone())
						return res
					})
				})
			}
		})
	)
})

// var deferredPrompt;

self.addEventListener('beforeinstallprompt', (event) => {
	console.log('before install!!')
	event.preventDefault()
	// deferredPrompt = event;
	return false
})
