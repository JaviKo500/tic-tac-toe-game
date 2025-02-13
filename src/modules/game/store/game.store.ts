import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { PlayerInterface } from '@/modules/players/interfaces/player.interface';

export const useGameStore = defineStore('game', () => {
  const playersGame = ref<PlayerInterface[]>([]);

  const addPlayerToGame = (player: PlayerInterface) => {
    const playerFind = playersGame.value.find((playerGame) => playerGame.id === player.id);
    if ( playerFind ){
      playersGame.value = playersGame.value.filter((playerGame) => playerGame.id !== player.id);
      return;
    };
    if (playersGame.value.length === 2) return;
    playersGame.value.push(player);
  };
  return {

    // * properties
    playersGame,
    // * getters
    checkExistPlayer: (player: PlayerInterface) => {
      const playerFind = playersGame.value.find( (playerGame) => playerGame.id === player.id );
      return playerFind ? true : false;
    },
    // * actions
    addPlayerToGame,
  };
});