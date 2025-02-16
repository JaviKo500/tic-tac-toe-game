<template>
  <div class="shadow-md">
    <SelectIconByPlayer />
    <div
      class="col-start-1 row-start-1 grid grid-cols-[repeat(3,100px)] place-content-center gap-4 rounded-lg font-mono text-sm leading-6 font-bold text-white my-4">
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-gray-300 p-4"></div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-gray-300 p-4"></div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-gray-300 p-4"></div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-gray-300 p-4"></div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-gray-300 p-4"></div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-gray-300 p-4"></div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-sky-500 p-4">
        <CloseIcon />
      </div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-green-500 p-4">
        <CircleIcon />
      </div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-green-500 p-4">
        <CircleIcon />
      </div>
    </div>
    <div class="text-center">
      <span class="text-2xl font-bold">Turn: Player #{{ gameStore.currentTurn }}</span>
    </div>
    <TimerProgress />
  </div>
  <PlayersGame />
</template>
<script setup lang="ts">
import CircleIcon from '@/modules/common/icons/CircleIcon.vue';
import CloseIcon from '@/modules/common/icons/CloseIcon.vue';

import SelectIconByPlayer from '../components/SelectIconByPlayer.vue';
import PlayersGame from '../components/PlayersGame.vue';
import TimerProgress from '../components/TimerProgress.vue';
import { useGameStore } from '../store/game.store';
const gameStore = useGameStore();
</script>
<style lang="css" scoped>
.card-player {
  width: 150px;
  height: 150px;
}
</style>