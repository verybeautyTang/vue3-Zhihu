<template>
  <div class="container">
    <colunm-list :list="list" v-show="flag"></colunm-list>
    <GlobalHeader :users="users"></GlobalHeader>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱</label>
        <input
          type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          @blur="emialValid"
          v-modal="emailRef.val"
        >
        <div id="emailHelp" class="form-text" v-show="emailRef.error">{{emailRef.message}}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <!-- <label class="form-check-label" for="exampleCheck1">Check me out</label> -->
      </div>
      <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import ColunmList, { ColunmProp } from './components/ColunmList.vue'
import GlobalHeader, { UsersProps } from './components/GlobalHeader.vue'
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
export default defineComponent({
  name: 'App',
  components: {
    ColunmList,
    GlobalHeader
  },
  data () {
    return {
      flag: false
    }
  },
  setup () {
    const emailRef = reactive({
      error: false,
      message: '',
      val: ''
    })
    const emialValid = () => {
      if (!emailRef.val) {
        emailRef.error = true
        emailRef.message = '邮箱不能为空'
      }
    }
    return {
      list: tableList,
      users: users,
      emailRef,
      emialValid
    }
  }
})
</script>
