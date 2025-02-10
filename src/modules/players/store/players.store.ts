import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Gender, PlayerInterface } from '../interfaces/player.interface';
import { UuidAdapter } from '@/modules/common/adapters';
import { delay } from '@/modules/common/helpers';

export const usePlayersStore = defineStore ( 'players', () => {
  const players = ref(
    useLocalStorage<PlayerInterface[]>('players', [])
  );

  const isLoading = ref(false);

  const addPlayer = ({ nickname, gender, color }: { nickname: string, gender: Gender, color?: string }) => {
    const id = UuidAdapter.generate();
    const player: PlayerInterface = {
      id,
      createdAt: new Date(),
      nickname: nickname === 'Player' ? `${nickname} ${id.substring(0, 4)}` : nickname,
      gender,
      games: 0,
      wins: 0,
      losses: 0,
      points: 0,
      colorClass: color,
    };
    players.value.push(player);
  };

  const getPlayerById = async ( id: string ) => {
    isLoading.value = true;
    const player = players.value.find((player) => player.id === id);
    await delay(1000);
    isLoading.value = false;
    return player;
  }

  return {
    // * properties
    players,
    isLoading,
    // * getters
    noPlayers: computed(() => !players.value.length),
    // * actions
    addPlayer,
    getPlayerById,
  };
});