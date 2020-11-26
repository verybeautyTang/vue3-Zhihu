<template>
  <div class="container">
    <colunm-list :list="list" v-show="flag"></colunm-list>
    <GlobalHeader :users="users"></GlobalHeader>
    <from-control @form-send="formSend">
      <div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">邮箱</label>
          <valid-rules
          :rules="emailRule"
          class="www"
          v-model="emailVal"
          placeholder="请输入邮箱名称"
          type="text" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">密码</label>
          <valid-rules :rules="pwdRule" v-model="pwdVal" placeholder="请输入密码" type="password" />
        </div>
      </div>
      <template #submit-button> <!-- #submit-button 相当于  v-slot:submit-button-->
      <!-- v-slot的缩写是# -->
        <button class="btn btn-danger" @form-send="formSend">提交</button>
      </template>
    </from-control>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import ColunmList, { ColunmProp } from './components/ColunmList.vue'
import GlobalHeader, { UsersProps } from './components/GlobalHeader.vue'
import ValidRules, { ValidRule } from './components/ValidRules.vue'
import FromControl from './components/FromControl.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
const tableList: ColunmProp[] = [
  {
    id: '1',
    avatar: 'https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png',
    title: 'hello1',
    describution: 'woo'
  }, {
    id: '2',
    avatar: 'https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png',
    title: 'hello1',
    describution: 'woo'
  }, {
    id: '3',
    avatar: 'https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png',
    title: 'hello1',
    describution: 'woo'
  }, {
    id: '4',
    avatar: 'https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png',
    title: 'hello1',
    describution: 'woo'
  }
]
const users: UsersProps = {
  isLogin: true,
  name: 'beautyTang'
}
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
  // {
  //   type: 'minlen', message: '密码不得少于6个字符'
  // },
  // {
  //   type: 'maxlen', message: '密码不得多于20个字符'
  // },
  {
    type: 'pwd', message: '密码必须包含数字和字母，长度6-20'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColunmList,
    GlobalHeader,
    ValidRules,
    FromControl
  },
  data () {
    return {
      flag: false
    }
  },
  setup () {
    const emailRu = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/
    const emailRef = reactive({
      error: false,
      message: '',
      val: ''
    })
    const inputRef = reactive({
      error: false,
      message: '',
      val: ''
    })
    const emailVal = ref('111') // email的默认数值
    const pwdVal = ref('2212')
    const inputRefs = ref<any>()
    const emialValid = () => {
      if (!emailRef.val.trim()) {
        emailRef.error = true
        emailRef.message = '邮箱不能为空'
      } else if (!emailRu.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = '邮箱验证错误'
      }
    }
    const formSend = (e: boolean) => {
      // console.log('inputRefs', inputRefs.value.inputValid()); // 利用ref可以进行父子间通信
      console.log('1111', e)
    }
    return {
      list: tableList,
      users: users,
      emailRef,
      emialValid,
      inputRef,
      inputRefs,
      pwdRule,
      pwdVal,
      emailRule,
      emailVal,
      formSend
    }
  }
})
</script>
