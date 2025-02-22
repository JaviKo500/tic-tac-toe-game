import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { IconGame, PlayerInterface, PlayerSelectedInterface } from '@/modules/players/interfaces/player.interface';
import { StatusGame, type BoxOptionItem, type GameInterface } from '../interfaces/game.interface';
import { GAME_ITEMS_NUM, LIMIT_MOVEMENTS_GAME, POINTS_TIE, POINTS_WINNER, TURN_TIME_LIMIT } from '@/modules/common/config/constants';
import { createMatrixOption } from '@/modules/common/helpers';
import { checkWinCombination } from '../helpers/winsCombination.helper';
import { usePlayersStore } from '@/modules/players/store/players.store';

export const useGameStore = defineStore('game', () => {
  const playersGame = ref<PlayerSelectedInterface[]>([]);
  const currentTurn = ref<number>(1);
  const timeTurn = ref<number>(0);
  const counterMovements = ref<number>(0);
  const game = ref<GameInterface>({
    winner: null,
    status: StatusGame.SET_VALUES,
  });

  const playerStore = usePlayersStore();

  const matrixOptions = ref<BoxOptionItem[][]>(createMatrixOption( GAME_ITEMS_NUM ));

  const addPlayerToGame = (playerSelected: PlayerInterface) => {
    const playerFind = playersGame.value.find(({ player }) => player.id === playerSelected.id);
    if ( playerFind ){
      playersGame.value = playersGame.value.filter(({player}) => player.id !== playerSelected.id);
      matrixOptions.value = createMatrixOption( GAME_ITEMS_NUM );
      updateStatusGame(StatusGame.SET_VALUES);
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

  let idInterval: number | null = null;
  const updateTimeTurn = () => {
    if ( game.value.status !== StatusGame.IN_PROGRESS ) return;
    cleanIntervals();
    idInterval = setInterval(() => {
      if ( idInterval && timeTurn.value === TURN_TIME_LIMIT ) {
        clearInterval(idInterval);
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
    if (counterMovements.value === LIMIT_MOVEMENTS_GAME) {
      return;
    }
    counterMovements.value += 1;
    updateTimeTurn();
  }

  const updateItemOptionMatrix = ( x: number, y: number, playerSelected: PlayerSelectedInterface ) => {
    if ( game.value.status !== StatusGame.IN_PROGRESS ) return;

    const optionSelected = matrixOptions.value[x][y];
    
    if ( optionSelected.player ) return;

    matrixOptions.value[x][y].player = playerSelected.player;
    matrixOptions.value[x][y].classBg = playerSelected.player.colorClass;
    matrixOptions.value[x][y].icon = playerSelected.icon;
    const options = getMatrixOptionsSelected();
    const isWinner = checkWinCombination(options);
    if (isWinner) {
      game.value.winner = playersGame.value[currentTurn.value - 1].player;
      updateStatusGame(StatusGame.END);
      cleanIntervals();
      playersGame.value.forEach((playerGame) => {
        let wins = playerGame.player.wins;
        let losses = playerGame.player.losses;
        let points = playerGame.player.points;
        let games = playerGame.player.games;

        games += 1;
        if ( playerGame.player.id === game.value.winner?.id ) {
          wins += 1;
          points += POINTS_WINNER;
        } else {
          losses += 1;
        }

        playerStore.updatePlayerById(
          playerGame.player.id, 
          { 
            wins,
            losses,
            points,
            games,
          }
        );

        playerGame.player = { ...playerGame.player, wins, losses, points, games };
      });
      return;
    }
    if (isCompletedMatrix()) {
      updateStatusGame(StatusGame.TIE);
      playersGame.value.forEach((playerGame) => {
        const points = playerGame.player.points + POINTS_TIE;
        const games = playerGame.player.games + 1;
        playerStore.updatePlayerById(
          playerGame.player.id, 
          { 
            points,
            games,
          }
        );
        playerGame.player = { ...playerGame.player, points, games };
      });
      cleanIntervals();
      return;
    }
    updateCurrentTurn();
  }

  const getMatrixOptionsSelected = () => {
    const optionsSelected: string[] = [];
    for (const option of matrixOptions.value) {
      for (const item of option) {
        if (item.player?.id === playersGame.value[currentTurn.value - 1].player.id) {
          optionsSelected.push(`(${item.x},${item.y})`);
        }
      }
    };
    return optionsSelected;
  }

  const isCompletedMatrix = () => {
    return matrixOptions.value.every((option) => option.every((item) => item.player));
  }

  const cleanIntervals = () => {
    if (idInterval) {
      clearInterval(idInterval);
    }
  }
  const tryAgain = () => {
    resetValues();
    updateTimeTurn();
  }

  const resetGame = () => {
    resetValues();
    playersGame.value = [];
  }
  const resetValues = () => {
    currentTurn.value = 1;
    game.value.status = StatusGame.SET_VALUES;
    game.value.winner = null;
    matrixOptions.value = createMatrixOption( GAME_ITEMS_NUM );
  }
  return {

    // * properties
    playersGame,
    game,
    timeTurn,
    currentTurn,
    matrixOptions,
    // * getters
    checkExistPlayer: (playerSelected: PlayerInterface) => {
      const playerFind = playersGame.value.find( ({player}) => player.id === playerSelected.id );
      return playerFind ? true : false;
    },
    currentStatus: () => game.value.status,
    getPercentageTime: () => ((timeTurn.value / TURN_TIME_LIMIT) * 100),
    currentPlayerGame: () => playersGame.value[currentTurn.value - 1],
    // * actions
    addPlayerToGame,
    updateDefaultValuesPlayers,
    updateIconByPlayer,
    updateStatusGame,
    updateTimeTurn,
    updateItemOptionMatrix,
    tryAgain,
    resetGame,
  };
});