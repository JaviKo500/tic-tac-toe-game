<template>
  <div v-if="isLoading" class="flex justify-center items-center my-2">
    <span class="loading loading-spinner loading-lg"></span>
  </div>
</template>
<script setup lang="ts">
  interface Props {
    isLoading: boolean;
  }
  defineProps<Props>();
</script>