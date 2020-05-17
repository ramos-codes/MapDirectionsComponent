const API_KEY = 'AIzaSyBfqU2WVY1eKq2lBUGCPamoV2qw8gxhQZU';
const CALLBACK_NAME = 'gmapsCallback';

let initialized = ! !window.google;
let resolveInitPromise;
let rejectInitPromise;

const initPromise = new Promise((resolve, reject) => {
    resolveInitPromise = resolve;
    rejectInitPromise = reject;
})

export default function init() {
    // If Google Maps already is initialized
    // the `initPromise` should get resolved
    // eventually.
    if (initialized) return initPromise;
  
    initialized = true;
    // The callback function is called by
    // the Google Maps script if it is
    // successfully loaded.
    window[CALLBACK_NAME] = () => resolveInitPromise(window.google);
  
    // We inject a new script tag into
    // the `<head>` of our HTML to load
    // the Google Maps script.
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`;
    script.onerror = rejectInitPromise;
    document.querySelector('head').appendChild(script);
  
    return initPromise;
  }