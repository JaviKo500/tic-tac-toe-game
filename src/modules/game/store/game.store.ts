import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { IconGame, PlayerInterface, PlayerSelectedInterface } from '@/modules/players/interfaces/player.interface';
import { StatusGame, type GameInterface } from '../interfaces/game.interface';
import { TURN_TIME_LIMIT } from '@/modules/common/config/constants';

export const useGameStore = defineStore('game', () => {
  const playersGame = ref<PlayerSelectedInterface[]>([]);
  const currentTurn = ref<number>(1);
  const timeTurn = ref<number>(0);
  const game = ref<GameInterface>({
    winner: null,
    status: StatusGame.SET_VALUES,
  });

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

  const updateStatusGame = (status: StatusGame) => {
    game.value.status = status; 
  }

  const updateTimeTurn = () => {
    const id = setInterval(() => {
      if ( id && timeTurn.value === TURN_TIME_LIMIT ) {
        clearInterval(id);
        updateCurrentTurn();
        return;
      }
      return timeTurn.value += 1000;
    }, 1000);
  }

  const updateCurrentTurn = () => {
    if ( currentTurn.value === 2 ) {
      currentTurn.value = 1;
    } else {
      currentTurn.value += 1;
    }
    timeTurn.value = 0;
    updateTimeTurn();
  }
  return {

    // * properties
    playersGame,
    game,
    timeTurn,
    currentTurn,
    // * getters
    checkExistPlayer: (playerSelected: PlayerInterface) => {
      const playerFind = playersGame.value.find( ({player}) => player.id === playerSelected.id );
      return playerFind ? true : false;
    },
    currentStatus: () => game.value.status,
    getPercentageTime: () => ((timeTurn.value / TURN_TIME_LIMIT) * 100),
    // * actions
    addPlayerToGame,
    updateDefaultValuesPlayers,
    updateIconByPlayer,
    updateStatusGame,
    updateTimeTurn,
  };
});