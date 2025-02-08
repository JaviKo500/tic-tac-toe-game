
<template>
  <h1 class="text-center text-4xl font-bold m-5">Players</h1>
  <div class=" flex justify-center gap-4 items-center">
    <div class="w-40" v-for="player in playersStore.players" :key="player.id">
      <CustomCard>
        <template #content>
          <div class="flex justify-center">
            <div class="avatar avatar-placeholder  avatar-online">
              <div class="bg-neutral text-neutral-content w-24 rounded-full">
                <span class="text-3xl">D</span>
              </div>
            </div>
          </div>
        </template>
      </CustomCard>
    </div>
  </div>
</template>
<script setup lang="ts">
  import CustomCard from '@/modules/common/components/CustomCard.vue';  
  import { usePlayersStore } from '@/modules/players/store/players.store';
  const playersStore = usePlayersStore();
</script>