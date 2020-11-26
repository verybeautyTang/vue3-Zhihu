<template>
  <div>
    <!-- $attrs自定义组件无法绑定数据，可以用v-bind。其中$attrs里面有数据 -->
    <input
      class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
      :value="inputRef.val"
      @blur="inputValid"
      @input="updatValue"
      v-bind="$attrs"
      :class="{'is-invalid':inputRef.error}"
      >
      <div id="emailHelp" class="invalid-feedback" v-show="inputRef.error">{{inputRef.message}}</div>
  </div>
</template>

<script lang="ts">
import { emitter } from './FromControl.vue'
import { defineComponent, onMounted, PropType, reactive } from 'vue'
export interface ValidRule {
  type: 'required'| 'email' | 'pwd' | 'minlen'| 'maxlen';
  message: string;
}
const emailReg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/
const pwdReg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/
export default defineComponent({
  props: {
    rules: {
      type: Array as PropType<ValidRule[]>,
      required: true
    },
    modelValue: String
  },
  inheritAttrs: false, // 不继承属性
  setup (props, context) {
    console.log(context.attrs);
    const inputRef = reactive({
      error: false,
      message: '',
      val: props.modelValue || ''
    })
    const inputValid = () => {
      if (props.rules) {
        const allCheck = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'minlen':
              passed = inputRef.val.length < 6
              break
            case 'maxlen':
              passed = inputRef.val.length > 20
              break
            case 'pwd':
              passed = pwdReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allCheck
        return allCheck
      }
      return true
    }
    // Vue3的v-modal 与vue2很多不同
    const updatValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    onMounted(() => {
      emitter.emit('create-child', inputRef.val)
    })
    return {
      inputRef,
      inputValid,
      updatValue
    }
  }
})
</script>
