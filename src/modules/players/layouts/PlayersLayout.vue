
<template>
  <CustomModal :is-open="isOpenCustomModal" >
    <template #footer>
      <button class="btn btn-soft btn-secondary" @click="isOpenCustomModal = false">Close</button>
      <button class="btn btn-primary">Save</button>
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