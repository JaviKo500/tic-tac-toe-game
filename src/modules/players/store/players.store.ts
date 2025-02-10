import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Gender, PlayerInterface } from '../interfaces/player.interface';
import { UuidAdapter } from '@/modules/common/adapters';

export const usePlayersStore = defineStore ( 'players', () => {
  const players = ref(
    useLocalStorage<PlayerInterface[]>('players', [])
  );

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

  const getPlayerById = ( id: string ) => {
    return players.value.find((player) => player.id === id);
  }
  return {
    // * properties
    players,
    // * getters
    noPlayers: computed(() => !players.value.length),
    // * actions
    addPlayer,
    getPlayerById,
  };
});