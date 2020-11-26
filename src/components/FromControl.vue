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
type ValidFunc = () => boolean // 这是一个了
export default defineComponent({
  emits: ['form-send'],
  setup (props, context) {
    let funcArr: ValidFunc[] = []
    const formSubmit = () => {
      const result = funcArr.map(func => func()).every(result => result)
      context.emit('form-send', result)
    }
    const callback = (func?: ValidFunc) => {
      func && funcArr.push(func)
    }
    emitter.on('create-child', callback)
    onUnmounted(() => {
      emitter.off('create-child', callback)
      funcArr = []
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
