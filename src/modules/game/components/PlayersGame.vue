<template>
  <div class="flex justify-evenly gap-8 mx-8">
    <div v-for="playerGame in gameStore.playersGame" :class="[
      'rounded-2xl shadow-xl bg-gray-600 w-full',
    ]" :key="playerGame.player.id">
      <div class="card-body text-center">
        <p class="text-white text-1xl">Player #{{ playerGame.order }}</p>
        <CustomAvatar :player="playerGame.player" />
        <span>{{ playerGame.player.nickname }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CustomAvatar from '@/modules/common/components/CustomAvatar.vue';
import { useGameStore } from '../store/game.store';

const gameStore = useGameStore();
</script>