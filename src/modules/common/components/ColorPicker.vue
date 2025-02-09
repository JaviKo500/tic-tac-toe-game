
<template>
  <div class="flex flex-wrap gap-2 justify-center items-center">
    <div 
      v-for="color in COLORS_CLASS" :key="color" 
      :class="[
        ' rounded-full cursor-pointer',
        {
          'w-6 h-6': selectedColor !== color,
          'w-8 h-8': selectedColor === color,
        },
        color,
      ]"
      @click="checkSelectedColor(color)"
      >
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
import { COLORS_CLASS } from '../config/constants';
  const emits = defineEmits<{
    selectedColor: [ color: string ],
  }>();

  const selectedColor = ref<string>('');

  const checkSelectedColor = (color: string) => {
    selectedColor.value = color; 
    emits('selectedColor', color);
  }
</script>