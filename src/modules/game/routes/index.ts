import type { RouteRecordRaw } from 'vue-router';

export const gameRoutes: RouteRecordRaw = {
  path: '/game',
  name: 'game-layout',
  redirect: { name: 'game-view' },
  component: () => import('@/modules/game/layouts/GameLayout.vue'),
  children: [
    {
      path: '',
      name: 'game-view',
      component: () => import('@/modules/game/views/GameView.vue'),
    },
  ],
};