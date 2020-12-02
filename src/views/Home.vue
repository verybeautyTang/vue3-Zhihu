<template>
  <div>
    <colunm-list :list="list"></colunm-list>
    <p>{{bigLen}}</p>
    <router-link to='/CreatePost'>新建文章</router-link>
  </div>
</template>
<script lang="ts">
import { GlobalDataProp } from '@/store'
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import ColunmList, { ColunmProp } from '../components/ColunmList.vue'
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
    const list = computed(() => store.state.column)
    const bigLen = computed(() => store.getters.bigColumnLen)
    return {
      list,
      bigLen
    }
  }
})
</script>
