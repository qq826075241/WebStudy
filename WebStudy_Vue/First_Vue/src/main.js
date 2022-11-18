import { createApp } from 'vue'
import App from './App.vue'

// import './assets/main.css'
// import axios from "axios"

import store from "./store/storeIndex"

// const app = createApp(App)
// app.config.globalProperties.$axios = axios   // 将axios挂载到全局
// app.mount('#app')

createApp(App).use(store).mount('#app')
