<template>
  <ul class="menu bg-base-200 rounded-box">
    <li>
      <RouterLink :to="{ name: 'home-view' }">
        <HomeIcon />
      </RouterLink>
    </li>
    <li>
      <a @click="$emit('open-add-user-modal')">
        <AddUserIcon />
      </a>
    </li>
    <li>
      <RouterLink :to="{ name: 'game-layout' }">
        <InfoIcon />
      </RouterLink>
    </li>
    <li>
      <a @click="back">
        <BackArrowIcon />
      </a>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

import AddUserIcon from '@/modules/common/icons/AddUserIcon.vue';
import BackArrowIcon from '@/modules/common/icons/BackArrowIcon.vue';
import HomeIcon from '@/modules/common/icons/HomeIcon.vue';
import InfoIcon from '@/modules/common/icons/InfoIcon.vue';

defineEmits(['open-add-user-modal']);
const router = useRouter();
const back = () => {
  router.back();
}
</script>