<template>
  <div>
    <div class="row">
      <div v-for="item in list" :key="item._id"  class=" col-4 mb-3">
        <div class="card h-100 shaow-sm">
          <div class="card-body text-center">
            <img class="rounded-circle border border-light  my-3" :src="item.avatar && item.avatar.url" />
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.description}}</p>
            <router-link :to="`/column/${item._id}`" class="btn btn-outline-primary">查看详情</router-link>
            <!-- <router-link :to="`/column/${column.id}`" class="btn btn-outline-primary">查看详情</router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ColumnProps } from '../store'
export default defineComponent({
  name: 'ColunmList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columlist = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = {
            url: 'https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png'
          }
        } else {
          column.avatar.url = column.avatar.url + 'x-oss-process=image/crop,x_100,y_50,w_100,h_100'
        }
        return column
      })
    })
    return columlist
  }
})
</script>

<style scoped>
.card-body img {
  width: 50px;
  height:50px;
}
</style>>
