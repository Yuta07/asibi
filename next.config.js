const withOffline = require('next-offline');

const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest),
  // generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'images',
          networkTimeoutSeconds: 10,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
};

module.exports = withOffline(nextConfig);
