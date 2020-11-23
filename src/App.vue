<template>
  <div class="container">
    <colunm-list :list="list" v-show="flag"></colunm-list>
    <GlobalHeader :users="users"></GlobalHeader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColunmList, { ColunmProp } from './components/ColunmList.vue'
import GlobalHeader, { UsersProps } from './components/GlobalHeader.vue';
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
  isLogin: false
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
    return {
      list: tableList,
      users: users
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
