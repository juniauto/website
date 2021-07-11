const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withPreact = require('next-plugin-preact');

module.exports = withPlugins([
  [withPreact],
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  // your other plugins here

], {
  images: {
    disableStaticImages: true,
  },
  productionBrowserSourceMaps: true,
});