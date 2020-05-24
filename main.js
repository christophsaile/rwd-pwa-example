window.addEventListener('load', function() {
    initServiceWorker();
});

async function initServiceWorker() {
    if('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./pwa/serviceWorker.js');
        } catch (e) {
            console.log( 'ServiceWorker registration failed')
        }
    }
}