window.addEventListener("load", function () {
  initServiceWorker();
});

// Register service worker.
function initServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./pwa/serviceWorker.js").then((reg) => {
      console.log("Service worker registered.", reg);
    });
  }
}
