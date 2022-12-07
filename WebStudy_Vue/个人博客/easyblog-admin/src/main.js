import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"
import "./assets/icon/iconfont.css"
import Request from './utils/Request'

import './assets/main.css'
import message from './utils/Message'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.Request = Request
app.config.globalProperties.message = message
app.mount('#app')
