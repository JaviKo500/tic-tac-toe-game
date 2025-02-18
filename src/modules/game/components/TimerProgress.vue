<template>
  <div class="w-full flex justify-center items-center">
    <div class="rounded-2xl shadow-xl p-2 bg-gray-600 my-4 mx-8 w-xs">
      <div class="flex justify-between items-center gap-1">
        <ClockIcon />
        <progress class="progress progress-indigo w-full" :value="gameStore.getPercentageTime()" :max="100"></progress>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ClockIcon from '@/modules/common/icons/ClockIcon.vue';
import { useGameStore } from '../store/game.store';

const gameStore = useGameStore();
</script>