<template>
  <h1 class="text-center text-4xl font-bold m-5" v-if="!playersStore.noPlayers">Players</h1>
  <div class=" flex justify-center gap-4 items-center flex-wrap">
    <div class="w-40" v-for="player in playersStore.players" :key="player.id">
      <CustomCard>
        <template #content>
          <div class="text-center">
            <CustomAvatar :player="player" :size="'w-24'" />
            <span class="text-1xl">{{ player.nickname }}</span>
            <div class="flex justify-center mt-1 cursor-pointer">
              <RouterLink :to="{
                name: 'player-view',
                params: { id: player.id },
              }">
                <InfoIcon />
              </RouterLink>
            </div>
          </div>
        </template>
      </CustomCard>
    </div>
    <CustomEmptyData :show="playersStore.noPlayers" title="Not players"
      message="Add a player to see his stats or init game" />
  </div>
</template>
<script setup lang="ts">
import CustomCard from '@/modules/common/components/CustomCard.vue';
import CustomEmptyData from '@/modules/common/components/CustomEmptyData.vue';
import InfoIcon from '@/modules/common/icons/InfoIcon.vue';
import { usePlayersStore } from '@/modules/players/store/players.store';
import CustomAvatar from '@/modules/common/components/CustomAvatar.vue';
const playersStore = usePlayersStore();
</script>