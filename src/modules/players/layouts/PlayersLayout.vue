
<template>
  <div class="flex justify-center items-center h-screen">
    <CustomMenu/>
    <main class="flex-grow p-4 h-screen">
      <RouterView />
    </main>
  </div>
</template>
<script setup lang="ts">
  import CustomMenu from '../components/CustomMenu.vue';
</script>