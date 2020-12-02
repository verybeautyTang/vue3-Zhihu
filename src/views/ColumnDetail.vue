<template>
  <div>
    <div class="card mb-3" >
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="column.img"  :alt="column.title">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{column.title}}</h5>
            <p class="card-text">{{column.content}}</p>
            <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
          </div>
        </div>
      </div>
    </div>
    <post :list="list"></post>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import post from '../components/Post.vue'
import { columnData, columnList } from '../hooks/data'
export default defineComponent({
  components: {
    post
  },
  setup () {
    const route = useRoute()
    const columnId = +route.params.id
    const store = useStore()
    // const column = columnData.find(column => column.id === columnId) //详情页面的表头，根据router的id获得
    // const list = columnList.filter(column => column.columnId === columnId) // 详情页面的表单，也是根据routerid可以获得
    const column = computed(() => store.getters.getColumnData(columnId))
    const list = computed(() => store.getters.getPostData(columnId))
    console.log(list);
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
