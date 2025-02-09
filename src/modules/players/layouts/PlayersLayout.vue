
<template>
  <CustomModal :is-open="isOpenCustomModal" >
    <template #content>
      <form action="" class="w-full">
        <div class="w-full">
          <div class="my-1">
            Nickname
          </div>
          <input type="text" class="input w-full" placeholder="Type here" v-model="nickname" />
          <label for="genders" class="form-label mt-2">Gender</label>
          <div class="flex flex-wrap gap-2 my-1">
            <button type="button"  
              :class = "[
                'p-2 rounded-full w-14 mr-2 flex-1', 
                {
                  'bg-gray-800': gender != genderOption.gender,
                  'bg-sky-800': gender === genderOption.gender,
                }
              ]"
              v-for="genderOption in GENDERS" :key="genderOption.gender"
              @click="gender = genderOption.gender"
              >{{ genderOption.label }}</button>
          </div>
          <div class="my-1">
            Color
          </div>
          <ColorPicker @selected-color="color = $event" />
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