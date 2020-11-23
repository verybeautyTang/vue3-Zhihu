<template>
  <nav class="nav  justify-content-between align-items-center flex-sm-row bg-primary navbar-dark">
      <a class="navbar-brand" aria-current="page" href="#">BeautyTang Store</a>
      <ul v-if="!isLogin" class="justify-content-between align-items-center">
        <li class="btn btn-primary mr-4 border-light w-20">登录</li>
        <li class="btn btn-primary  mr-4 border-light">注册</li>
      </ul>
      <ul v-else>
        <li>欢迎您，{{users.name}}</li>
      </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface UsersProps {
  isLogin: boolean;
  name?: string;
  id?: string;
}
export default defineComponent({
  props: {
    users: {
      type: Object as PropType<UsersProps>,
      required: true
    }
  }
})
</script>
