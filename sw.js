importScripts("/upgrade.test/precache-manifest.542600cd04e0eb7b535517769670863c.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest);

self.addEventListener('notificationclose', function (e) {
	var notification = e.notification;
	var primaryKey = notification.data.primaryKey;

	console.log('Closed notification: ' + primaryKey);
});

self.addEventListener('notificationclick', function (e) {
	var notification = e.notification;
	var primaryKey = notification.data.primaryKey;
	var action = e.action;

	if (action === 'close') {
		notification.close();
	} else {
		clients.openWindow('http://www.google.com');
		notification.close();
	}
});

