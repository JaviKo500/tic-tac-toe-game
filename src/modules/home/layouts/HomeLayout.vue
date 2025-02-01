
<template>  
  <div class="flex flex-col h-screen">
    <main class="flex-grow">
      <RouterView/>
    </main>
    <CustomFooter/>
</div>
</template>
<script setup lang="ts">
  import CustomFooter from '@/modules/common/components/CustomFooter.vue';
</script>