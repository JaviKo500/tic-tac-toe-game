<template>
  <div :class="[
    'col-start-1 row-start-1 grid place-content-center gap-4 rounded-lg font-mono text-sm leading-6 font-bold text-white my-4',
    `grid-cols-[repeat(${GAME_ITEMS_NUM},100px)]`
  ]">
    <template v-for="(option, index) in gameStore.matrixOptions" :key="index">
      <div :class="[
        'flex h-25 w-25 items-center justify-center rounded-lg bg-gray-300 p-4',
        item.classBg && item.player ? item.classBg : 'bg-gray-300'
      ]" v-for="(item, index) in option" :key="`${index}-option`">
        <CircleIcon v-if="item.icon === 'X'" />
        <CloseIcon v-if="item.icon === 'O'" />
      </div>


    </template>
  </div>
</template>
<script setup lang="ts">
import CircleIcon from '@/modules/common/icons/CircleIcon.vue';
import CloseIcon from '@/modules/common/icons/CloseIcon.vue';

import { GAME_ITEMS_NUM } from '@/modules/common/config/constants';
import { useGameStore } from '../store/game.store';

const gameStore = useGameStore();
</script>