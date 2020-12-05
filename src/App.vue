<template>
  <div class="container">
    <GlobalHeader :users="user"></GlobalHeader>
    <Loader  v-if="isLoading"></Loader>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex';
import Loader from './components/Loader.vue'
import GlobalHeader, { UsersProps } from './components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// const users: UsersProps = {
//   isLogin: false
// }
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loader
  },
  setup () {
    const store = useStore()
    const user = computed(() => store.state.user)
    const isLoading = computed(() => store.state.isLoading)
    return {
      user,
      isLoading
    }
  }
})
</script>
<style>
</style>
