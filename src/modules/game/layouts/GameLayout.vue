<template>
  <div class="flex flex-col h-screen">
    <main class="flex-grow flex justify-center items-center">
      <RouterView />
    </main>
  </div>
</template>
<script setup lang="ts">
import { useGameStore } from '@/modules/game/store/game.store';
import { onMounted } from 'vue';

const gameStore = useGameStore();
onMounted(() => {
  gameStore.updateDefaultValuesPlayers();
});
</script>