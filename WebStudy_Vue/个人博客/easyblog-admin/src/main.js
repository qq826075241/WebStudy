import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'

import "element-plus/dist/index.css"
import "./assets/icon/iconfont.css"
import './assets/main.css'

import Request from './utils/Request'
import Message from './utils/Message'
import Confirm from './utils/Confirm'
import Table from './components/Table.vue'
import Cover from './components/Cover.vue'
import Dialog from './components/Dialog.vue'
import CoverUpload from './components/CoverUpload.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.Request = Request
app.config.globalProperties.Message = Message
app.config.globalProperties.Confirm = Confirm
app.config.globalProperties.globalInfo = {
    imageUrl: "/api/file/getImage/"
}
app.component("Table", Table);
app.component("Cover", Cover);
app.component("Dialog", Dialog);
app.component("CoverUpload", CoverUpload);
app.mount('#app')
