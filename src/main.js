import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.mixin({
  data: () => ({
    menus: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'Services', icon: 'mdi-cog', to: '/services' },
      { title: 'Clients', icon: 'mdi-account-group', to: '/clients' },
      { title: 'About Us', icon: 'mdi-account-box', to: '/about' },
      { title: 'Career', icon: 'mdi-handshake', to: '/career' },
      { title: 'Contact Us', icon: 'mdi-card-account-mail', to: '/contact' },
    ],
  })
})

import AOS from 'aos'
import 'aos/dist/aos.css'

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
