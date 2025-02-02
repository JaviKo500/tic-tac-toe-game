
<template>
  <CustomModal :is-open="isOpenCustomModal" >
    <template #content>
      <div class="w-full">
        <div class="my-1">
          Nickname
        </div>
        <input type="text" class="input w-full" placeholder="Type here" />

        <div class="mt-1">
          Gender
        </div>
        <div class="flex gap-2 mt-1">
          <input type="radio" name="male" class="radio radio-primary"  />
          Male
        </div>
        <div class="flex gap-2 mt-1">
          <input type="radio" name="female" class="radio radio-primary" />
          Female
        </div>
        <div class="flex gap-2 mt-1">
          <input type="radio" name="other" class="radio radio-primary" />
          Other
        </div>
      </div>
    </template>
    <template #footer>
      <button class="btn btn-soft btn-secondary" @click="isOpenCustomModal = false">Close</button>
      <button class="btn btn-primary">Add</button>
    </template>
  </CustomModal>
  <div class="flex justify-center items-center h-screen">
    <CustomMenu
      @open-add-user-modal="isOpenCustomModal = true"
    />
    <main class="w-screen h-screen">
      <RouterView />
    </main>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  
  import CustomModal from '@/modules/common/components/CustomModal.vue';
  import CustomMenu from '@/modules/players/components/CustomMenu.vue';

  const isOpenCustomModal = ref(false);
</script>