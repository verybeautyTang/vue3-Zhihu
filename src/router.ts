import { createRouter, createWebHistory, NavigationFailure } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Column from './views/ColumnDetail.vue'
import CreatePost from './views/CreatePost.vue'
import store from './store'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { redirectHome: true } // 登陆后自动跳转到首页
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/column/:id',
      name: 'column',
      component: Column
    },
    {
      path: '/CreatePost',
      name: 'CreatePost',
      component: CreatePost,
      meta: { requiredLogin: true } // 源信息 这个表示不同的标识[]
    }
  ]
})
// 前置守卫[在没有登录的情况下直接跳转到登录的情况]
router.beforeEach((to, from, next) => {
  console.log(to.meta);
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'login' }) // 新建文章的情况下必须登录
  } else {
    next()
  }
  //  else if (to.meta.redirectHome && store.state.user.isLogin) {
  //   next({ name: 'home' }) // 登录成功后直接跳转到主页
  // }
})
export default router
