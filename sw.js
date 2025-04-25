self.addEventListener("install", function (e) {
  console.log("Service Worker Installed");
  e.waitUntil(
    caches.open("static").then(function (cache) {
      return cache.addAll([
        "./",
        "./style.css",
        "./social-media.png",
        "./photo_5784886903068281808_x.jpg",
        "./facebook (1).png",
        "./twitter.png",
        "./instagram.png",
        "./youtube (1).png",
        "./telegram.png",
        "./tik-tok (1).png",
        "./globe.png",
        "./verified.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
