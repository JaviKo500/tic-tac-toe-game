<template>
  <div>
    <div class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen">
    </div>
    <div class="fixed z-10">
      <div class="flex justify-center items-center h-screen">
        <div class="text-center">
          <div class="my-4" v-for="player in gameStore.playersGame" :key="player.id">
            <div class="bg-gray-800 border w-70 border-gray-800 shadow-lg  rounded-2xl p-4">
              <div class="flex justify-between items-center">
                <div class="text-center">
                  <CustomAvatar :player="player" :is-active="true" />
                  <span>{{ player.nickname }}</span>
                </div>
                <div class="text-center w-20 h-20">
                  <CloseIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CustomAvatar from '@/modules/common/components/CustomAvatar.vue';
import { useGameStore } from '../store/game.store';
import CloseIcon from '@/modules/common/icons/CloseIcon.vue';

const gameStore = useGameStore();
</script>