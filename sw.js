self.addEventListener("install", function (e) {
  console.log("Service Worker Installed");
  e.waitUntil(
    caches.open("static").then(function (cache) {
      return cache.addAll(["./", "./style.css", "./social_media. png"]);
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
