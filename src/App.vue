<template>
  <div class="container">
    <GlobalHeader :users="user"></GlobalHeader>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex';
import GlobalHeader, { UsersProps } from './components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// const users: UsersProps = {
//   isLogin: false
// }
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    const store = useStore()
    const user = computed(() => store.state.user)

    return {
      user
    }
  }
})
</script>
<style>
</style>
