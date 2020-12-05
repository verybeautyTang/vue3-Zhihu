<template>
  <from-control @form-send="formSend">
    <div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱</label>
        <valid-rules
          :rules="emailRule"
          class="www"
          v-model="emailVal"
          placeholder="请输入邮箱名称"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">密码</label>
        <valid-rules
          :rules="pwdRule"
          v-model="pwdVal"
          placeholder="请输入密码"
          type="password"
        />
      </div>
    </div>
    <template #submit-button>
      <!-- #submit-button 相当于  v-slot:submit-button-->
      <!-- v-slot的缩写是# -->
      <button class="btn btn-danger" @form-send="formSend">提交</button>
    </template>
  </from-control>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ValidRules, { ValidRule } from '../components/ValidRules.vue'
import FromControl from '../components/FromControl.vue'
const emailRule: ValidRule[] = [
  {
    type: 'required', message: '邮箱名不能为空'
  },
  {
    type: 'email', message: '请输入正确的邮箱号'
  }
]
const pwdRule: ValidRule[] = [
  {
    type: 'required', message: '密码不能为空'
  },
  {
    type: 'pwd', message: '密码必须包含数字和字母，长度6-20'
  }
]
export default defineComponent({
  name: 'Login',
  components: {
    ValidRules,
    FromControl
  },
  setup () {
    const store = useStore()
    const emailVal = ref('') // email的默认数值
    const router = useRouter()
    const pwdVal = ref('')
    // const inputRefs = ref<any>()
    const formSend = (result: boolean) => {
      // console.log('inputRefs', inputRefs.value.inputValid()); // 利用ref可以进行父子间通信
      console.log('result', result)
      if (result) {
        router.push('/')
        store.commit('login') // 触发mutation事件
      }
    }
    return {
      // inputRefs,
      pwdRule,
      pwdVal,
      emailRule,
      emailVal,
      formSend
    }
  }
})
</script>
