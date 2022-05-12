import { headerImages } from '@/assets/images/imageUrls.js'

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
