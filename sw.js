importScripts("/upgrade.test/precache-manifest.06c3c297b12e7e7a5a56f27d70a120c6.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

// custom adjustments
console.log('my adjustments');

workbox.precaching.precacheAndRoute(self.__precacheManifest);

