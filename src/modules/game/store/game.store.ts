import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { IconGame, PlayerInterface, PlayerSelectedInterface } from '@/modules/players/interfaces/player.interface';

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
      icon: 'O',
    });
  };

  const updateDefaultValuesPlayers = () => {
    playersGame.value = playersGame.value.map((playerGame, index) => ({
      order: index + 1,
      player: playerGame.player,
      icon: index === 0 ? 'X' : 'O',
    }));
  }

  const updateIconByPlayer = ( playerId: string, iconSelected: IconGame ) => {
    const isIconInUse = playersGame.value.some(
      player => player.icon === iconSelected
    );
    
    const alternativeIcon: IconGame = iconSelected === 'X' ? 'O' : 'X';

    playersGame.value = playersGame.value.map((playerGame) => {
      const { player, icon } = playerGame;
      if (player.id === playerId) {
        return {
          ...playerGame,
          icon: iconSelected
        };
      }
      if (icon === iconSelected && isIconInUse) {
        return {
          ...playerGame,
          icon: alternativeIcon
        };
      }
      return playerGame;
    });
  }
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
    updateDefaultValuesPlayers,
    updateIconByPlayer,
  };
});