<template>
  <CustomLoading :is-loading="playersStore.isLoading" />
  <CustomEmptyData
    :show="!player && !playersStore.isLoading"
    title="Player not found"
    message="Try again later"
  />
  <div class="" v-if="player && !playersStore.isLoading">
    <h1  class="text-center text-4xl font-bold m-5">{{player?.nickname}}</h1>
  </div>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue';

  import CustomLoading from '@/modules/common/components/CustomLoading.vue';
  import CustomEmptyData from '@/modules/common/components/CustomEmptyData.vue';

  import { usePlayersStore } from '../store/players.store';
  import type { PlayerInterface } from '../interfaces/player.interface';

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