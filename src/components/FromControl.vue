<template>
  <form>
    <slot name="default"></slot>
    <div class="submitAll"  @click.prevent = "formSubmit">
      <slot name="submit-button">
        <button class="btn btn-primary">Submit</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt' // 父子间事件通信
export const emitter = mitt()
export default defineComponent({
  emits: ['form-send'],
  setup (props, context) {
    const formSubmit = () => {
      context.emit('form-send', true)
    }
    const callback = (text: string | undefined) => {
      console.log(text);
    }
    emitter.on('create-child', callback)
    onUnmounted(() => {
      emitter.off('create-child', callback)
    })
    return {
      formSubmit,
      callback
    }
  }
})
</script>

<style>
</style>
