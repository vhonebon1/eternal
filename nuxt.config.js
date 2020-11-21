export default {

  target: 'static',

  head: {
    title: 'Eternal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    AWS_ACCESS_KEY_ID_VH: process.env.AWS_ACCESS_KEY_ID_VH,
    AWS_REGION_VH: process.env.AWS_REGION_VH,
    AWS_SECRET_ACCESS_KEY_VH: process.env.AWS_SECRET_ACCESS_KEY_VH,
    AWS_BUCKET_VH: process.env.AWS_BUCKET_VH
  },

  css: [
  ],

  plugins: [
    { src: '~plugins/lazyLoadImage.js' }
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],

  axios: {},

  build: {
    extend (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
       }
    }
  }
}
