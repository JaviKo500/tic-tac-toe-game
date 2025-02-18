<template>
  <SelectIconByPlayer />
  <GridTicTac />
  <div class="text-center">
    <span class="text-2xl font-bold">Turn: {{ gameStore.currentPlayerGame().player.nickname }}</span>
  </div>
  <TimerProgress />
  <PlayersGame />
</template>
<script setup lang="ts">
import GridTicTac from '../components/GridTicTac.vue';
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