import { headerImages } from '@/assets/images/imageUrls.js'

import { routesMaMairie } from '@/router/routesMaMairie'

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
let headerImagesUrl = null

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    image: headerImages.home
  },
  routesMaMairie.equipe,
  routesMaMairie.ccas,
  routesMaMairie.salles,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  process.env.HEADER_IMAGE = to.image
  next()
})


export default router
