export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'HRR lögmannsþjónusta',
    title: "HRR lögmannsþjónusta",
    htmlAttrs: {
      lang: 'is'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hulda Rós Rúriksdóttir hæstaréttarlögmaður' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/gavel.png' }
    ]
  },
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/global.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
