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
      { 
        title: 'About', 
        icon: 'mdi-account-box', 
        to: '/about',
        children: [
          { title: 'About Us' },
          { title: 'Our Vision' },
          { title: 'Leadership' },
          { title: 'Our Customers' },
          { title: 'Certifications' }
        ]
      },
      { 
        title: 'Services', 
        icon: 'mdi-cog', 
        to: '/services',
        children: [
          { title: 'Computer System Validation (CSV)' },
          { title: 'Equipment Validation' },
          { title: 'Process Validation' },
          { title: 'Test Method Validation' },
          { title: 'Cleaning Validation' },
          { title: 'Project Management' },
          { title: 'Staffing Services' },
          { title: 'Training Services (TriDS Academy)' },
          { title: 'Commissioning Qualification Validation (CQV)' }
        ]
      },
      { 
        title: 'Case Studies', 
        icon: 'mdi-account-box', 
        to: '/case-studies',
        children: [
          { title: 'Our Projects' },
          { title: 'Articles' },
        ]
      },
      { 
        title: 'TriDS Academy', 
        icon: 'mdi-account-box', 
        to: '/trids-academy',
        children: [
          { title: 'Training' },
          { title: 'Library' },
          // { title: 'Validation Course' },
          // { title: 'Equipement Validation' },
        ]
      },
      { title: 'Clients', icon: 'mdi-account-group', to: '/clients' },
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
