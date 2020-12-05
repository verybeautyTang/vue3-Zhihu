<template>
  <div class="card mb-3" v-for="item in list" :key="item._id">
  <div class="row g-0">
    <div class="col-md-4 w-20">
      <img :src="item.image.url"  :alt="item.title">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">{{item.content}}</p>
        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PostProps } from '../store'
export default defineComponent({
  props: {
    list: {
      type: Array as PropType<PostProps[]>,
      required: true
    }
  }
})
</script>
