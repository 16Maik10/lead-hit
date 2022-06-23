import Vue from 'vue'
import VueRouter from 'vue-router'
import AnalyticstView from '@/views/AnalyticstView.vue'
import AuthView from '../views/AuthView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Авторизация',
    component: AuthView
  },
  {
    path: '/analytics',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AnalyticstView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
