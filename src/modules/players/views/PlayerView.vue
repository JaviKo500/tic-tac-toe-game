<template>
  <h1 class="text-center text-4xl font-bold m-5">Player</h1>
  {{ id }}
</template>
<script setup lang="ts">
  interface Props {
    id: string;
  }
  defineProps<Props>();
</script>