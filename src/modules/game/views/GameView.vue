<template>
  <div class="mx-auto overflow-hidden rounded-2xl shadow-md">
    
    <div class="rounded-xl card-compact shadow-xl p-2 bg-gray-600">
      <div class="flex justify-between items-center gap-1">
        <ClockIcon/>
        <progress class="progress progress-indigo w-56" value="40" max="100"></progress>
      </div>
    </div>
    <div class="flex justify-between items-center gap-4">
      <div class="card bg-gray-800 card-player shadow-xl">
        <div class="card-body text-center">
          <div class="mx-auto rounded-full bg-cyan-900 p-4">
            TE!
          </div>
          test
        </div>
      </div>
      <div class="card bg-gray-800 card-player shadow-xl">
        <div class="card-body text-center">
          <div class="mx-auto rounded-full bg-cyan-900 p-4">
            TE!
          </div>
          test
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ClockIcon from '@/modules/common/icons/ClockIcon.vue';

</script>
<style lang="css" scoped>
  .card-player{
    width: 150px;
    height: 150px;
  }
</style>