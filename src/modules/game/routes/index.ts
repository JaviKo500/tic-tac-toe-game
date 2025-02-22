import type { RouteRecordRaw } from 'vue-router';
import { havePlayersSelected } from '../guards/have-players-selected.guard.';
import { setThemeGuard } from '@/modules/common/guards/set-theme.guard';

export const gameRoutes: RouteRecordRaw = {
  path: '/game',
  name: 'game-layout',
  beforeEnter: [
    havePlayersSelected,
    setThemeGuard,
  ],
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