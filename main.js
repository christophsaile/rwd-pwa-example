window.addEventListener("load", () => {
  initServiceWorker();
});

// Register service worker.
async function initServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./serviceWorker.js");
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}
