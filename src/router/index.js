import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: "SiteList",
    component: () => import('../views/sites/SiteList.vue')
  },
  {
    path: '/:id',
    name: "SiteDetail",
    component: () => import('../views/sites/SiteDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes
})

export default router
