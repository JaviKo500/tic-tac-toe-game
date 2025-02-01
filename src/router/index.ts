import HomeLayout from '@/modules/home/layouts/HomeLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-layout',
      component: HomeLayout,
      children: [
        {
          path: '',
          name: 'home-view',
          component: () => import('@/modules/home/views/HomeView.vue')
        }
      ]
    }
  ],
})

export default router
