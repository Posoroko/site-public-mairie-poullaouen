import { headerImages } from '@/assets/images/imageUrls.js'

import { routesMaMairie } from '@/router/routesMaMairie'
import { routesMonQuotidien } from '@/router/routesMonQuotidien'
import { routesMesSorties } from '@/router/routesMesSorties'

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
  routesMaMairie.bulletins,

  routesMonQuotidien.associations,
  routesMonQuotidien.ecole,
  routesMonQuotidien.Mediatheque,
  routesMonQuotidien.equipements,
  routesMonQuotidien.entreprises,

  routesMesSorties.histoire,
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
