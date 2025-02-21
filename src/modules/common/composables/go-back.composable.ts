import { useRouter } from 'vue-router'

export const useNavigation = () => {
  const router = useRouter()
  const goBack = () => {
    router.back();
  }

  return {
    goBack
  }
}