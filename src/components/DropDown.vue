<template>
  <div class="dropdown" ref="dropdrownRef">
  <a class="dropdown-toggle text-light" type="button" @click="clickToggle" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
  {{title}}
  </a>
  <ul :style="{display:isOpen?'block':'none'}" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <slot></slot>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, setup, onMounted, onUnmounted } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    const dropdrownRef = ref<null | HTMLElement>(null)
    const clickToggle = () => {
      isOpen.value = !isOpen.value
    }
    const handle = (e: MouseEvent) => {
      if (dropdrownRef.value && !dropdrownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
        isOpen.value = false
      }
    }
    onMounted(() => {
      document.addEventListener('click', handle)
    })
    onUnmounted(() => {
      document.removeEventListener('click', handle)
    })
    return {
      isOpen,
      clickToggle
    }
  }
})

</script>

<style>
</style>
