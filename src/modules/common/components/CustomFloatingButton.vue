<template>
  <div class="relative" v-if="show">
    <button class="btn z-20 flex bottom-0 right-0 fixed cursor-pointer flex shrink-0 grow-0 justify-around align-center
      disable:opacity-50 disabled:shadow-none disabled:pointer-events-none text-md 
      py-2 px-6 bg-gradient-to-tr from-purple-900 to-purple-800 text-white shadow-md 
      shadow-purple-900/10 hover:shadow-lg hover:shadow-purple-900/20 active:opacity-[0.85] 
      rounded-full mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10" type="button">
      <StartGameIcon /> {{ text }}
    </button>
  </div>
</template>
<script setup lang="ts">
import StartGameIcon from '../icons/StartGameIcon.vue';

interface Props {
  show: boolean;
  text?: string;
}

withDefaults(defineProps<Props>(), {
  show: false,
  text: 'Start game',
});
</script>
