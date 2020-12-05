<template>
  <nav class="nav  justify-content-between align-items-center flex-sm-row bg-primary navbar-dark">
      <router-link to="/" class="navbar-brand" aria-current="page"  >BeautyTang Store</router-link>
      <ul v-if="!users.isLogin" class="justify-content-between align-items-center">
        <router-link to="/login" class="btn btn-primary mr-4 border-light w-20">登录</router-link>
        <li class="btn btn-primary  mr-4 border-light">注册</li>
      </ul>
      <div v-else>
        <!-- <a class="text-light">欢迎您，{{users.name}}</a> -->
        <drop-down :title="`你好${users.name}`">
          <drop-down-item v-for="item in data" :key="item.name" :isCheck="item.isCheck">{{item.name}}</drop-down-item>
        </drop-down>
      </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown from './DropDown.vue'
import DropDownItem from './DropDownItem.vue'
export interface UsersProps {
  isLogin: boolean;
  name?: string;
  id?: string;
}
export default defineComponent({
  components: {
    DropDown,
    DropDownItem
  },
  props: {
    users: {
      type: Object as PropType<UsersProps>,
      required: true
    }
  },
  setup () {
    // 下拉菜单
    const data = [
      {
        name: '新建文章',
        isCheck: false
      },
      {
        name: '编辑文章',
        isCheck: true
      },
      {
        name: '删除文章',
        isCheck: false
      }
    ]
    return {
      data
    }
  }
})
</script>
