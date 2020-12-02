import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
const app = createApp(App)
app.use(router) // 挂载路由
app.use(store) // 挂载状态管理器
app.mount('#app')
