import { useSettingsStore } from "@/modules/settings/store/settings.store";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export const setThemeGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  useSettingsStore().setTheme();
  next();
}