<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-if="isOpen">
    <div  class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-base-100 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <slot name="content"/>
            </div>
          </div>
          <div class="bg-base-200 px-4 py-3 flex justify-end gap-4 flex-row px-6" v-if="$slots.footer">
            <slot name="footer"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  interface Props {
    isOpen: boolean;
  }

  withDefaults(defineProps<Props>(), {
    isOpen: false,
  });

  defineEmits(['close']);
</script>