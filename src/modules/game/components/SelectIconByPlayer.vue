<template>
  <div v-if="gameStore.currentStatus() === StatusGame.SET_VALUES">
    <div class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-70 w-screen h-screen">
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
          <button
            class="btn btn-primary text-white font-bold py-6 px-12 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-dark rounded"
            @click="gameStore.updateStatusGame(StatusGame.IN_PROGRESS)">
            Start
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CustomAvatar from '@/modules/common/components/CustomAvatar.vue';
import CircleIcon from '@/modules/common/icons/CircleIcon.vue';
import CloseIcon from '@/modules/common/icons/CloseIcon.vue';

import { useGameStore } from '../store/game.store';
import { StatusGame } from '../interfaces/game.interface';

const gameStore = useGameStore();
</script>