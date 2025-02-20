<template>
  <div class="" v-if="gameStore.currentStatus() === StatusGame.END || gameStore.currentStatus() === StatusGame.TIE">
    <div class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-85 w-screen h-screen">
    </div>
    <div class="fixed z-10 w-full">
      <div class="flex flex-col justify-center items-center h-screen">
        <template v-if="gameStore.currentStatus() === StatusGame.END">
          <div class="flex justify-center items-center">
            <div class="relative rounded-full">
              <CustomAvatar :player="winner!" />
            </div>
            <span class="animate-ping absolute w-12 h-12 inline-flex border-2 rounded-full border-cyan-500 opacity-85">
            </span>
          </div>
          <p class="text-2xl mt-4 text-sky-500 font-semibold">Winner</p>
          <p class="text-lg mt-2">{{ winner?.nickname }} <span class="font-black">+{{ POINTS_WINNER }}P</span></p>
        </template>
        <template v-if="gameStore.currentStatus() === StatusGame.TIE">
          <TicTacToeIcon class="w-16 h-16" />
          <p class="text-2xl mt-4 text-sky-500 font-bold">Tied</p>
          <div class="" v-for="playerGame in gameStore.playersGame" :key="playerGame.player.id">
            <p class="text-lg mt-2">{{ playerGame.player?.nickname }} <span class="font-black">+{{ POINTS_TIE }}P</span>
            </p>
          </div>
        </template>
        <button
          class="group relative h-10 w-40  mt-8 mb-4  overflow-hidden rounded-full bg-sky-500 text-lg font-bold text-white"
          @click="gameStore.tryAgain">
          Try Again
          <div
            class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30">
          </div>
        </button>
        <button class="btn btn-md w-30 rounded-full" @click="redirectGameView">Exit</button>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import CustomAvatar from '@/modules/common/components/CustomAvatar.vue';
import { POINTS_TIE, POINTS_WINNER } from '@/modules/common/config/constants';

import { StatusGame } from '../interfaces/game.interface';
import { useGameStore } from '../store/game.store';
import TicTacToeIcon from '@/modules/common/icons/TicTacToeIcon.vue';

const gameStore = useGameStore();

const winner = computed(() => gameStore.game.winner);
const router = useRouter();
const redirectGameView = () => {
  gameStore.resetGame();
  router.replace({ name: 'players-layout' });
}
</script>