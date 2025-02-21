import type { RouteRecordRaw } from 'vue-router';

import { setThemeGuard } from '@/modules/common/guards/set-theme.guard';

export const settingsRoutes: RouteRecordRaw = {
  path: '/settings',
  name: 'settings-layout',
  redirect: { name: 'settings-view' },
  beforeEnter: [
    setThemeGuard,
  ],
  component: () => import('@/modules/settings/layouts/SettingsLayout.vue'),
  children: [
    {
      path: '',
      name: 'settings-view',
      component: () => import('@/modules/settings/views/SettingsView.vue'),
    },
  ],
}