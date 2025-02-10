<template>
  <CustomLoading :is-loading="playersStore.isLoading" />
  <p v-if="!player">Player not found</p>
  <h1 v-else class="text-center text-4xl font-bold m-5">{{player?.nickname}}</h1>
  {{ id }}
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { usePlayersStore } from '../store/players.store';
import type { PlayerInterface } from '../interfaces/player.interface';
import CustomLoading from '@/modules/common/components/CustomLoading.vue';

  interface Props {
    id: string;
  }
  const props = defineProps<Props>();

  const playersStore = usePlayersStore();
  const player = ref<PlayerInterface | undefined>(undefined);

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