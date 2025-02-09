
<template>
  <CustomModal :is-open="isOpenCustomModal" >
    <template #content>
      <form action="">
        <div class="w-full">
          <div class="my-1">
            Nickname
          </div>
          <input type="text" class="input w-full" placeholder="Type here" v-model="nickname" />
          <label for="genders" class="form-label mt-2">Genders</label>
          <div class="flex flex-wrap gap-2 my-1">
            <button type="button"  
              :class = "[
                'p-2 rounded-full bg-gray-800 w-14 mr-2 flex-1', 
              ]"
              v-for="gender in GENDERS" :key="gender.gender"
              >{{ gender.label }}</button>
          </div>
        </div>
      </form>
    </template>
    <template #footer>
      <button class="btn btn-soft btn-secondary" @click="isOpenCustomModal = false">Close</button>
      <button class="btn btn-primary" @click="checkFormData">Add</button>
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
<script src="./PlayersLayout.ts" lang="ts"></script>