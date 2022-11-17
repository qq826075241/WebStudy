import { createApp } from 'vue'
import App from './App.vue'

// import './assets/main.css'
import axios from "axios"

import router from "./router/routerIndex"

// const app = createApp(App)
// app.config.globalProperties.$axios = axios   // 将axios挂载到全局
// app.mount('#app')
createApp(App).use(router).mount('#app')
