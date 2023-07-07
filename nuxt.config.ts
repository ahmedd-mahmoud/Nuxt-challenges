// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss', '@vite-pwa/nuxt'],
  pwa:{
    manifest:{
      name: "Blog Nuxt3",
      short_name: "Blog",
      description: "Trying to implement PWA",
      icons:[
        {
          src:"icons/icons8-nuxt-jc-144.png",
          sizes: "144x144",
          type: "image/png",
      },
      {
        src:"icons/icons8-nuxt-jc-480.png",
        sizes: "480x480",
        type: "image/png",
      }
    ]
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions:{
      enabled: true,
      type: "module",
    },
  },
});
