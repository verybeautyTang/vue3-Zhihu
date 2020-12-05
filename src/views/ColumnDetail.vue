<template>
  <div>
    <div class="card mb-3" >
      <div class="row g-0" v-if="column">
        <div class="col-md-4">
          <img :src="column.avatar.url"  :alt="column.title">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{column.title}}</h5>
            <p class="card-text">{{column.description}}</p>
            <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
          </div>
        </div>
      </div>
    </div>
    <post :list="list"></post>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalDataProp } from '../store'
import post from '../components/Post.vue'
export default defineComponent({
  components: {
    post
  },
  setup () {
    const route = useRoute()
    const columnId = route.params._id
    const store = useStore()
    onMounted(() => {
      store.dispatch('fetchColumn', columnId)
      store.dispatch('fetchPost', columnId)
    })
    const column = computed(() => store.getters.getColumnData(columnId))
    const list = computed(() => store.getters.getPostData(columnId))
    return {
      route,
      column,
      list
    }
  }
})
</script>
<style>
</style>
