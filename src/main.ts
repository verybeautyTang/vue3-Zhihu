import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://apis.imooc.com/api'
axios.interceptors.request.use(config => {
  config.params = { ...config.params, icode: 'E47D035F540B0CD9' }
  return config
})
// 加载等待中写的拦截器，在请求之前触发开启
axios.interceptors.request.use(config => {
  store.commit('setLoading', true)
  return config
})
// 在请求之后触发关闭
axios.interceptors.response.use(config => {
  store.commit('setLoading', false)
  return config
})
const app = createApp(App)
app.use(router) // 挂载路由
app.use(store) // 挂载状态管理器
app.mount('#app')
