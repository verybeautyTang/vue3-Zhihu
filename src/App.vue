<template>
  <div class="container">
    <GlobalHeader :users="users"></GlobalHeader>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, setup } from 'vue'
import GlobalHeader, { UsersProps } from './components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
const users: UsersProps = {
  isLogin: false
}
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    return {
      users: users
    }
  }
})
</script>
<style>
</style>
