import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { SettingsInterface } from '../interfaces/settings.interface';
import { useLocalStorage } from '@vueuse/core';

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref(
    useLocalStorage<SettingsInterface>('settings', {
      theme: 'default',
    })
  );

  const setTheme = (theme?: string) => {
    if ( settings.value.theme && !theme ) {
      theme = settings.value.theme;
    }
    console.log('<--------------- JK Settings.store --------------->');
    console.log(settings.value);
    document.documentElement.setAttribute('data-theme', theme!);
  }

  return {
    // * properties
    settings,
    // * getters
    getTheme: () => settings.value.theme,
    // * actions
    setTheme,
  }
});