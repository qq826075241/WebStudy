import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
    {
        path: "/",
        component: HomeView
    },
    {
        path: "/about",
        component: AboutView
    }
]

const router = createRouter({
    /**
     * createWebhHistory 方式需要后台配合重定向，否则会出现404问题
     * 
     * 
     * 
     */
    history: createWebHashHistory(),
    routes
})

export default router;