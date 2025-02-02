
<template>
  <HomeNavbar/>
  <div class="flex flex-col items-center justify-center w-full py-10">
    <div className="flex flex-col gap-4 items-center w-80">
      <CustomCard>
        <template #content>
          <div class="flex flex-col gap-4 text-center">
            <p class="text-1xl font-bold">Total games played</p>
            <p class="text-xl font-semibold">0</p>
          </div>
        </template>
      </CustomCard>
      <RouterLink class="btn w-full py-10 btn-soft btn-primary" :to="{ name: 'players-layout' }">
        New Game
      </RouterLink>
      <button class="btn w-full py-8 btn-soft">Options</button>
    </div>
  </div>
</template>
<script setup lang="ts">
  import CustomCard from '@/modules/common/components/CustomCard.vue';
import HomeNavbar from '../components/HomeNavbar.vue';
import { RouterLink } from 'vue-router';
  
</script>