import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllRooms from '@/components/AllRooms.vue'
import ReserveHistory from '@/components/ReserveHistory.vue'
import LoginPage from '@/components/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/AllRooms',
    name: 'AllRooms',
    component: AllRooms
  },
  {
    path: '/ReserveHistory',
    name: 'ReserveHistory',
    component: ReserveHistory
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
