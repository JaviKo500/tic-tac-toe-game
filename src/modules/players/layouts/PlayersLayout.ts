import { GENDERS, type Gender } from './../interfaces/player.interface';
import { ref, defineComponent } from 'vue';
  
import CustomModal from '@/modules/common/components/CustomModal.vue';
import CustomMenu from '@/modules/players/components/CustomMenu.vue';
import ColorPicker from '@/modules/common/components/ColorPicker.vue';
import { usePlayersStore } from '../store/players.store';

export default defineComponent({
  components: {
    CustomModal,
    CustomMenu,
    ColorPicker,
  },
  setup() {
    const isOpenCustomModal = ref(false);
    const nickname = ref('');
    const gender = ref<Gender>();
    const color = ref('');

    const playersStore = usePlayersStore();

    const checkFormData = () => { 
      if ( !nickname.value ) {
        nickname.value = 'Player';
      }
      if ( !gender.value ) {
        gender.value = 'other';
      }
      playersStore.addPlayer({ nickname: nickname.value, gender: gender.value, color: color.value });
      isOpenCustomModal.value = false;
      nickname.value = '';
      gender.value = undefined;
    }
    return {
      // * properties
      isOpenCustomModal,
      nickname,
      gender,
      color,
      // * getters
      GENDERS,

      // * actions
      checkFormData,
    };
  },
})