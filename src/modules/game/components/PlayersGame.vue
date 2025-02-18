<template>
  <div class="flex justify-evenly gap-4 mx-8">
    <div v-for="playerGame in gameStore.playersGame" :class="[
      'rounded-2xl shadow-xl bg-gray-600 w-full',
    ]" :key="playerGame.player.id">
      <div class="relative card-body text-center">
        <CustomAvatar :player="playerGame.player" />
        <div :class="[
          'absolute h-8 w-8 right-2 top-2 -ml-3  text-white p-1 text-xs font-medium tracking-wider rounded-full transition ease-in duration-300',
          playerGame.player.colorClass ? playerGame.player.colorClass : 'bg-sky-500'
        ]">
          <CloseIcon v-if="playerGame.icon === 'X'" />
          <CircleIcon v-else />
        </div>
        <p class="text-white text-1xl">Player #{{ playerGame.order }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CustomAvatar from '@/modules/common/components/CustomAvatar.vue';
import { useGameStore } from '../store/game.store';
import CloseIcon from '@/modules/common/icons/CloseIcon.vue';
import CircleIcon from '@/modules/common/icons/CircleIcon.vue';

const gameStore = useGameStore();
</script>