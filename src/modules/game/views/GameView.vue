<template>
  <div class="mx-auto overflow-hidden shadow-md h-screen">
    <div class="col-start-1 row-start-1 grid grid-cols-[repeat(3,100px)] place-content-center gap-4 rounded-lg font-mono text-sm leading-6 font-bold text-white my-4">
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-gray-300 p-4"></div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-gray-300 p-4"></div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-gray-300 p-4"></div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-gray-300 p-4"></div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-gray-300 p-4"></div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-gray-300 p-4"></div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-sky-500 p-4">
        <CloseIcon/>
      </div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-green-500 p-4">
        <CircleIcon/>
      </div>
      <div class="flex h-25 w-25 items-center justify-center rounded-lg bg-green-500 p-4">
        <CircleIcon/>
      </div>
    </div>
    <div class="rounded-2xl shadow-xl p-2 bg-gray-600 my-4">
      <div class="flex justify-between items-center gap-1">
        <ClockIcon/>
        <progress class="progress progress-indigo w-full" value="40" max="100"></progress>
      </div>
    </div>
    <div class="flex justify-evenly items-center gap-4 my-4">
      <div class="rounded-2xl bg-green-500 card-player shadow-xl">
        <div class="card-body text-center">
          <div class="mx-auto rounded-full bg-cyan-900 p-4">
            TE!
          </div>
          test
        </div>
      </div>
      <div class="rounded-2xl bg-sky-500 card-player shadow-xl">
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
  import CircleIcon from '@/modules/common/icons/CircleIcon.vue';
  import ClockIcon from '@/modules/common/icons/ClockIcon.vue';
  import CloseIcon from '@/modules/common/icons/CloseIcon.vue';
</script>
<style lang="css" scoped>
  .card-player{
    width: 150px;
    height: 150px;
  }
</style>