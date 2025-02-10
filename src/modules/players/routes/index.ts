import type { RouteRecordRaw } from 'vue-router';

export const playersRoutes: RouteRecordRaw = {
  path: '/players',
  name: 'players-layout',
  redirect: { name: 'players-view' },
  component: () => import('@/modules/players/layouts/PlayersLayout.vue'),
  children: [
    {
      path: '',
      name: 'players-view',
      component: () => import('@/modules/players/views/PlayersView.vue'),
    },
    {
      path: ':id',
      name: 'player-view',
      props: true,
      component: () => import('@/modules/players/views/PlayerView.vue'),
    }
  ],
};