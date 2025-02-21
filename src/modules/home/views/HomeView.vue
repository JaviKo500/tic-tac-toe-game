<template>
  <HomeNavbar />
  <div class="flex flex-col items-center justify-center w-full py-6">
    <div className="flex flex-col gap-4 items-center w-80">
      <RouterLink class="btn w-full py-10 btn-soft btn-primary rounded-full" :to="{ name: 'players-layout' }">
        New Game
      </RouterLink>
      <RouterLink class="btn w-full py-8 btn-soft rounded-full" :to="{ name: 'settings-layout' }">
        Options
      </RouterLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';

import HomeNavbar from '../components/HomeNavbar.vue';
</script>