export const GA_TRACKING_ID = 'G-K85GPBC786'

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const initialize = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID);
};

// https://support.google.com/analytics/answer/9216061
// Pageview is being collected through Enhanced measurement.

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const triggerConversionEvent = (type: string, where: string) => {
  gtag('event', 'generate_lead', {
    'event_category': 'engagement',
    'event_label': `${type}-${where}`,
  });
};

export const onFacebookPlusClick = (where: string) => triggerConversionEvent('facebook', where);

export const onGooglePlusClick = (where: string) => triggerConversionEvent('googleplus', where);

export const onWhatsappClick = (where: string) => triggerConversionEvent('whatsapp', where);

export const onInstagramClick = (where: string) => triggerConversionEvent('instagram', where);