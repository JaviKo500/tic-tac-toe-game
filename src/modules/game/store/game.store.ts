import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { PlayerInterface, PlayerSelectedInterface } from '@/modules/players/interfaces/player.interface';

export const useGameStore = defineStore('game', () => {
  const playersGame = ref<PlayerSelectedInterface[]>([]);

  const addPlayerToGame = (playerSelected: PlayerInterface) => {
    const playerFind = playersGame.value.find(({ player }) => player.id === playerSelected.id);
    if ( playerFind ){
      playersGame.value = playersGame.value.filter(({player}) => player.id !== playerSelected.id);
      return;
    };
    if (playersGame.value.length === 2) return;
    playersGame.value.push({
      order: 0,
      player: playerSelected,
      icon: '',
    });
  };
  return {

    // * properties
    playersGame,
    // * getters
    checkExistPlayer: (playerSelected: PlayerInterface) => {
      const playerFind = playersGame.value.find( ({player}) => player.id === playerSelected.id );
      return playerFind ? true : false;
    },
    // * actions
    addPlayerToGame,
  };
});