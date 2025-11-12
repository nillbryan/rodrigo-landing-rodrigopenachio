// Analytics utility with LGPD consent management

const GA_ID = process.env.REACT_APP_GA_ID;
const META_PIXEL_ID = process.env.REACT_APP_META_PIXEL_ID;

// Get consent from localStorage
export const getConsent = () => {
  const consent = localStorage.getItem('cookie-consent');
  return consent ? JSON.parse(consent) : null;
};

// Save consent to localStorage
export const saveConsent = (preferences) => {
  localStorage.setItem('cookie-consent', JSON.stringify(preferences));
};

// Initialize Google Analytics
export const initGA = () => {
  if (!GA_ID) return;
  
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
};

// Initialize Meta Pixel
export const initMetaPixel = () => {
  if (!META_PIXEL_ID) return;

  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('init', META_PIXEL_ID);
  window.fbq('track', 'PageView');
};

// Track event
export const trackEvent = (eventName, params = {}) => {
  const consent = getConsent();
  
  // Google Analytics
  if (consent?.analytics && window.gtag) {
    window.gtag('event', eventName, params);
  }
  
  // Meta Pixel
  if (consent?.marketing && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

// Initialize analytics based on consent
export const initAnalytics = () => {
  const consent = getConsent();
  
  if (consent?.analytics) {
    initGA();
  }
  
  if (consent?.marketing) {
    initMetaPixel();
  }
};

// Get UTM parameters from URL
export const getUTMParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
    utm_term: params.get('utm_term') || ''
  };
};

// Store UTM params in sessionStorage
export const storeUTMParams = () => {
  const utmParams = getUTMParams();
  if (utmParams.utm_source) {
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
  }
};

// Get stored UTM params
export const getStoredUTMParams = () => {
  const stored = sessionStorage.getItem('utm_params');
  return stored ? JSON.parse(stored) : getUTMParams();
};