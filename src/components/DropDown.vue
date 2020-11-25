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
import { defineComponent, ref, watch } from 'vue'
import useClickOutSide from '../hooks/useDropDown'
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
    const isClickOutSide = useClickOutSide(dropdrownRef)
    watch(isClickOutSide, () => {
      if (isOpen.value && isClickOutSide.value) {
        isOpen.value = false
      }
    })
    const clickToggle = () => {
      isOpen.value = !isOpen.value
    }
    return {
      isOpen,
      clickToggle,
      dropdrownRef
    }
  }
})

</script>

<style>
</style>
