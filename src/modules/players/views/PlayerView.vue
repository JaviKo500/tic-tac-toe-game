<template>
  <CustomLoading :is-loading="playersStore.isLoading" />
  <CustomEmptyData :show="!player && !playersStore.isLoading" title="Player not found" message="Try again later" />
  <div class="" v-if="player && !playersStore.isLoading">
    <h1 class="text-center text-4xl font-bold m-5">Stats {{ player?.nickname }}</h1>
    <div class="flex justify-center items-center">
      <div class="stats stats-vertical lg:stats-horizontal shadow">
        <div class="stat">
          <div class="stat-figure text-primary">
            <TicTacToeIcon />
          </div>
          <div class="stat-title">Games Played</div>
          <div class="stat-value text-primary">{{ player.games }}</div>
          <div class="stat-desc">Since {{ stringToDate(player.createdAt.toString()).toLocaleDateString() }}</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <TicTacWins />
          </div>
          <div class="stat-title">Wins</div>
          <div class="stat-value text-secondary">{{ player.wins }}</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div class="stat-value">{{ getPercentageWins(player.wins, player.games) }}%</div>
          <div class="stat-title">Percentage Wins</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';

import CustomLoading from '@/modules/common/components/CustomLoading.vue';
import CustomEmptyData from '@/modules/common/components/CustomEmptyData.vue';
import TicTacToeIcon from '@/modules/common/icons/TicTacToeIcon.vue';
import TicTacWins from '@/modules/common/icons/TicTacWinsIcons.vue';

import { stringToDate } from '@/modules/common/helpers';

import { usePlayersStore } from '../store/players.store';

import type { PlayerInterface } from '../interfaces/player.interface';

interface Props {
  id: string;
}
const props = defineProps<Props>();

const playersStore = usePlayersStore();
const player = ref<PlayerInterface | undefined>(undefined);

const getPercentageWins = (wins: number, games: number) => {
  if (games === 0) return 0;
  const percentage = (wins / games) * 100;
  return percentage.toFixed(2);
}

watch(
  () => props.id,
  async () => {
    player.value = await playersStore.getPlayerById(props.id);
  },
  {
    immediate: true,
  }
);
</script>