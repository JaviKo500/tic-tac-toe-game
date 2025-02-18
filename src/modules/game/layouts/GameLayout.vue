<template>
  <div class="h-screen">
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { useGameStore } from '@/modules/game/store/game.store';
import { onMounted } from 'vue';
import { StatusGame } from '../interfaces/game.interface';

const gameStore = useGameStore();

onMounted(() => {
  if (gameStore.currentStatus() === StatusGame.NOT_STARTED) return;
  gameStore.updateDefaultValuesPlayers();
});
</script>