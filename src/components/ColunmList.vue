<template>
  <div>
    <div class="row">
      <div v-for="item in list" :key="item.id"  class=" col-4 mb-3">
        <div class="card h-100 shaow-sm">
          <div class="card-body text-center">
            <img class="rounded-circle border border-light w-25 my-3" :src="item.avatar" />
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.describution}}</p>
            <router-link :to="`/column/${item.id}`" class="btn btn-outline-primary">查看详情</router-link>
            <!-- <router-link :to="`/column/${column.id}`" class="btn btn-outline-primary">查看详情</router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
export interface ColunmProp {
  id: string;
  avatar?: string;
  title: string;
  describution: string;
}
export default defineComponent({
  name: 'ColunmList',
  props: {
    list: {
      type: Array as PropType<ColunmProp[]>,
      required: true
    }
  },
  setup (props) {
    const columlist = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = 'https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png'
        }
        return column
      })
    })
    return columlist
  }
})
</script>

<style ></style>
