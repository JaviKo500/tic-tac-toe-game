
<template>
  <CustomModal :is-open="isOpenCustomModal" >
    <template #content>
      <div class="w-full">
        <div class="my-1">
          Nickname
        </div>
        <input type="text" class="input w-full" placeholder="Type here" />

        <label for="genders" class="form-label mt-2">Genders</label>
        <div class="flex flex-wrap gap-2">
          <button type="button" 
            :class = "[
              'p-2 rounded w-14 mr-2 flex-1',
            ]"
            >Male</button>
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