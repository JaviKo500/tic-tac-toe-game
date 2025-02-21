import type { RouteRecordRaw } from 'vue-router';

export const settingsRoutes: RouteRecordRaw = {
  path: '/settings',
  name: 'settings-layout',
  redirect: { name: 'settings-view' },
  component: () => import('@/modules/settings/layouts/SettingsLayout.vue'),
  children: [
    {
      path: '',
      name: 'settings-view',
      component: () => import('@/modules/settings/views/SettingsView.vue'),
    },
  ],
}