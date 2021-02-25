const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
], {
  webpack(config) {
    config.target = 'electron-renderer';
    return config;
  },
  distDir: 'build',
  experimental: {
    optimizeImages: true,
  },
});
