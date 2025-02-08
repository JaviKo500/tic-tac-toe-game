import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { PlayerInterface } from '../interfaces/player.interface';

export const usePlayersStore = defineStore ( 'players', () => {
  const players = ref(
    useLocalStorage<PlayerInterface[]>('players', [])
  );

  return {
    // * properties
    players,
    // * getters
    noPlayers: computed(() => !players.value.length),
    // * actions
  };
});