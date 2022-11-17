import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"

const routes = [
    {
        path:"/",
        component:HomeView
    },
    {
        path:"/ab",
        component:AboutView
    }
]

// 配置信息中需要页面的相关配置
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;