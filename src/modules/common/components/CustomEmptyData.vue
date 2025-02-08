
<template>
  <div class="relative max-lg:row-start-1 w-80" v-if="show">
    <div class="absolute inset-px rounded-lg max-lg:rounded-2xl"></div>
    <div class="relative flex flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
      <div class="px-8 pt-8 sm:px-10 sm:pt-10">
        <p class="mt-2 text-lg font-medium tracking-tight text-gray-300 text-center">{{ title }}</p>
        <p class="mt-2 max-w-lg text-sm/6 text-gray-400 text-center" v-if="message">{{ message }}</p>
      </div>
      <div class="flex flex-1 items-center justify-center px-8 pt-6 max-lg:pb-10 sm:px-10 lg:pb-4">
        <div class="h-16 w-16">
          <EmptyIcon/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import EmptyIcon from '../icons/EmptyIcon.vue'; 
  interface Props {
    show: boolean;
    title: string;
    message?: string;
  }
  withDefaults(defineProps<Props>(), {
    show: false,
    title: 'Empty data',
    message: '',
  });
</script>
