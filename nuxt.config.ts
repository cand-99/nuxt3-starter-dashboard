// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@kevinmarrec/nuxt-pwa',
    '@nuxt/image-edge',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@unocss/nuxt',
  ],

  // pwa config
  pwa: {
    meta: {
      mobileAppIOS: true,
      name: 'App Name',
      ogDescription: 'App description',
    },
    workbox: {
      enabled: true,
    },
    manifest: {
      name: 'App Name',
      lang: 'en',
    },
  },

  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
  },

  // nuxt-mage config
  image: {
    // Options
  },

  // unocss config
  unocss: {
    preflight: true,
  },

})
