import { playersRoutes } from '@/modules/players/routes'
import { createRouter, createWebHistory } from 'vue-router'

import HomeLayout from '@/modules/home/layouts/HomeLayout.vue'
import { gameRoutes } from '@/modules/game/routes'

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
    },
    playersRoutes,
    gameRoutes,
  ],
})

export default router
