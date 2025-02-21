import { playersRoutes } from '@/modules/players/routes'
import { createRouter, createWebHistory } from 'vue-router'

import HomeLayout from '@/modules/home/layouts/HomeLayout.vue'
import { gameRoutes } from '@/modules/game/routes'
import { settingsRoutes } from '@/modules/settings/routes'
import { setThemeGuard } from '@/modules/common/guards/set-theme.guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-layout',
      component: HomeLayout,
      beforeEnter: [
        setThemeGuard,
      ],
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
    settingsRoutes
  ],
})

export default router
