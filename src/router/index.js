import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue') },
  { path: '/clients', name: 'Clients', component: () => import(/* webpackChunkName: "clients" */ '../views/Clients.vue') },
  { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },
  { path: '/career', name: 'Career', component: () => import(/* webpackChunkName: "career" */ '../views/Career.vue') },
  { path: '/contact', name: 'Contact', component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue') }
]

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
