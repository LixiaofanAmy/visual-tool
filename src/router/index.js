import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/edit/index.vue')
  },
  {
    path: '/preview',
    name: 'preview',
    component: () => import('../views/preview/index.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
