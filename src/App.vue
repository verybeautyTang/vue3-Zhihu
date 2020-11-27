<template>
  <div class="container">
    <GlobalHeader :users="users"></GlobalHeader>
    <colunm-list :list="list"></colunm-list>
    <router-link to="/login">Login</router-link>
    <router-view></router-view>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
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
    }
  },
  setup () {
    return {
      list: tableList,
      users: users
    }
  }
})
</script>
