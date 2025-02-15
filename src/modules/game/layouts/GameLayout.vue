<template>
  <div class="flex flex-col h-screen">
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useGameStore } from '@/modules/game/store/game.store';
import { onMounted } from 'vue';
import { StatusGame } from '../interfaces/game.interface';

const router = useRouter();

const gameStore = useGameStore();

onMounted(() => {
  if (!gameStore.playersGame.length) {
    router.push({ name: 'players-view' });
    return;
  }
  if (gameStore.currentStatus() === StatusGame.NOT_STARTED) return;
  gameStore.updateDefaultValuesPlayers();
});
</script>