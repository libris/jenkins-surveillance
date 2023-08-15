const secrets = require('./.secrets.config.js');
const config = require('./.surveillance.config.js');

module.exports = {
  ssr: true,
  /*
  ** Headers of the page
  */
  head: {
    title: config.title || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  telemetry: false,

  axios: {
    proxy: true, // Can be also an object with default options
  },
  proxy: {
    '/job': {
      target: config.instance,
      auth: secrets.token,
      changeOrigin: true,
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [({ isLegacy }) => isLegacy && 'axios'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
}