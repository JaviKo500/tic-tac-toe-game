import { GENDERS } from './../interfaces/player.interface';
import { ref, defineComponent } from 'vue';
  
import CustomModal from '@/modules/common/components/CustomModal.vue';
import CustomMenu from '@/modules/players/components/CustomMenu.vue';
export default defineComponent({
  components: {
    CustomModal,
    CustomMenu,
  },
  setup() {
    const isOpenCustomModal = ref(false);
    return {
      // * properties
      isOpenCustomModal,
      // * getters
      GENDERS,
    };
  },
})