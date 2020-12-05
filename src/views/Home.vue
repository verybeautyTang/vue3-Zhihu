<template>
  <div>
    <colunm-list :list="list"></colunm-list>
    <p>{{bigLen}}</p>
    <router-link to='/CreatePost'>新建文章</router-link>
  </div>
</template>
<script lang="ts">
import { GlobalDataProp } from '@/store'
import { defineComponent, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ColunmList from '../components/ColunmList.vue'
export default defineComponent({
  name: 'Header',
  components: {
    ColunmList
  },
  data () {
    return {
    }
  },
  setup () {
    const store = useStore<GlobalDataProp>()
    onMounted(() => {
      store.dispatch('fetchColumns')
    })
    const list = computed(() => store.state.column)
    const bigLen = computed(() => store.getters.bigColumnLen)
    return {
      list,
      bigLen
    }
  }
})
</script>
