<template>
  <div v-if="gameStore.currentStatus() === StatusGame.SET_VALUES">
    <div class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-85 w-screen h-screen">
    </div>
    <div class="fixed z-10 w-full">
      <div class="flex justify-center items-center h-screen">
        <div class="text-center">
          <div class="my-4" v-for="playerGame in gameStore.playersGame" :key="playerGame.player.id">
            <div class="bg-gray-800 border w-70 border-gray-800 shadow-lg  rounded-2xl p-4">
              <p class="font-bold">Player #{{ playerGame.order }}</p>
              <div class="flex justify-between items-center">
                <div class="text-center">
                  <CustomAvatar :player="playerGame.player" :is-active="true" />
                  <span>{{ playerGame.player.nickname }}</span>
                </div>
                <div class="text-center w-20 h-20">
                  <div class="" v-if="playerGame.icon === 'X'"
                    @click="gameStore.updateIconByPlayer(playerGame.player.id, 'O')">
                    <CloseIcon />
                  </div>
                  <div class="" v-else @click="gameStore.updateIconByPlayer(playerGame.player.id, 'X')">
                    <CircleIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center">
            <button
              class="group relative h-10 w-40  mt-6 mb-4  overflow-hidden rounded-full bg-sky-500 text-lg font-bold text-white"
              @click="startGame">
              Start
              <div
                class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30">
              </div>
            </button>
            <button class="btn btn-md w-30 rounded-full" @click="redirectGameView">Exit</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

import CustomAvatar from '@/modules/common/components/CustomAvatar.vue';
import CircleIcon from '@/modules/common/icons/CircleIcon.vue';
import CloseIcon from '@/modules/common/icons/CloseIcon.vue';

import { useGameStore } from '../store/game.store';
import { StatusGame } from '../interfaces/game.interface';

const router = useRouter();
const gameStore = useGameStore();

const startGame = () => {
  gameStore.updateStatusGame(StatusGame.IN_PROGRESS);
  gameStore.updateTimeTurn();
}

const redirectGameView = () => {
  router.replace({ name: 'players-layout' });
}
</script>