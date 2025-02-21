<template>
  <div class="flex justify-center items-center  gap-4 my-8">
    <span class="text-xl">Interface theme:</span>
    <div class="join join-vertical">
      <input type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label="Default"
        value="default" data-set-theme="default" @click="settingsStore.setTheme('default')" />
      <input type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label="Retro" value="retro"
        data-set-theme="retro" @click="settingsStore.setTheme('retro')" />
      <input type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label="Cyberpunk"
        value="cyberpunk" data-set-theme="cyberpunk" @click="settingsStore.setTheme('cyberpunk')" />
      <input type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label="Valentine"
        value="valentine" data-set-theme="valentine" @click="settingsStore.setTheme('valentine')" />
      <input type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label="Aqua" value="aqua"
        @click="settingsStore.setTheme('aqua')" />
      <input type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label="Cupcake"
        value="cupcake" @click="settingsStore.setTheme('cupcake')" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useSettingsStore } from '../store/settings.store';

const settingsStore = useSettingsStore();
</script>