<template>
  <div class="flex flex-col h-screen">
    <main class="flex-grow flex justify-center items-center">
      <RouterView />
    </main>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useGameStore } from '@/modules/game/store/game.store';
import { onMounted } from 'vue';

const router = useRouter();

const gameStore = useGameStore();

onMounted(() => {
  if (!gameStore.playersGame.length) {
    router.push({ name: 'players-view' });
  }
  gameStore.updateDefaultValuesPlayers();
});
</script>