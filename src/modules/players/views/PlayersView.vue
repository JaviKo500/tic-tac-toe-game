
<template>
  <h1 class="text-center text-4xl font-bold m-5" v-if="!playersStore.noPlayers">Players</h1>
  <div class=" flex justify-center gap-4 items-center flex-wrap">
    <div class="w-40" v-for="player in playersStore.players" :key="player.id">
      <CustomCard>
        <template #content>
          <div class="text-center">
            <div class="flex justify-center">
              <div class="avatar avatar-placeholder avatar-online">
                <div :class="[
                  'bg-neutral text-neutral-content w-24 rounded-full',
                  player.colorClass ? player.colorClass : 'bg-neutral',
                ]">
                  <span class="text-3xl">{{ getFirstLetters(player.nickname, 2) }}</span>
                </div>
              </div>
            </div>
            <span class="text-1xl">{{ player.nickname }}</span>
          </div>
        </template>
      </CustomCard>
    </div>
    <CustomEmptyData 
      :show="playersStore.noPlayers" 
      title="Not players"
      message="Add a player to see his stats or init game"/>
  </div>
</template>
<script setup lang="ts">
  import CustomCard from '@/modules/common/components/CustomCard.vue';  
  import CustomEmptyData from '@/modules/common/components/CustomEmptyData.vue';
  import { getFirstLetters } from '@/modules/common/helpers';
  import { usePlayersStore } from '@/modules/players/store/players.store';
  const playersStore = usePlayersStore();
</script>