<template>
  <div class="flex justify-center items-center  gap-4 my-8">
    <span class="text-xl">Interface theme:</span>
    <div class="join join-vertical">
      <fieldset class="fieldset">
        <label class="flex gap-2 cursor-pointer items-center" v-for="theme in ALLOWED_THEMES" :key="theme">
          <input type="radio" name="theme-radios" class="radio radio-sm theme-controller" :aria-label="theme"
            :value="theme" @click="settingsStore.setTheme(theme)" :checked="settingsStore.getTheme() === theme" />
          {{ theme }}
        </label>
      </fieldset>
    </div>
  </div>
  <div class="flex justify-center items-center gap-4 my-8">
    <button class="btn btn-soft" @click="goBack">Back</button>
  </div>
</template>
<script lang="ts" setup>
import { useSettingsStore } from '../store/settings.store';
import { ALLOWED_THEMES } from '@/modules/common/config/constants';
import { useNavigation } from '@/modules/common/composables/go-back.composable';

const settingsStore = useSettingsStore();
const { goBack } = useNavigation();
</script>