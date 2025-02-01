
<template>
  <HomeNavbar/>
  <div class="flex flex-col items-center justify-center w-full py-10">
    <div className="flex flex-col gap-4 items-center w-80">
      
      <button class="btn w-full py-10 btn-soft btn-primary">New Game</button>
      <button class="btn w-full py-8 btn-soft">Options</button>
    </div>
  </div>
</template>
<script setup lang="ts">
  import HomeNavbar from '../components/HomeNavbar.vue';
  
</script>