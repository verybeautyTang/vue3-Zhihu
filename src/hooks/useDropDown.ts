import { Ref, onMounted, onUnmounted, ref } from 'vue';
const useClickOutSide = (elementRef: Ref<null | HTMLElement>) => {
  const isClick = ref(false)

  const dropdownHandle = (e: MouseEvent) => {
    if (elementRef.value && elementRef.value.contains(e.target as HTMLElement)) {
      isClick.value = false
    } else {
      isClick.value = true
    }
  }
  onMounted(() => {
    document.addEventListener('click', dropdownHandle)
  })
  onUnmounted(() => {
    document.removeEventListener('click', dropdownHandle)
  })
  return isClick
}
export default useClickOutSide
