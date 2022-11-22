import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      redirect: '/about/info',  // 重定向到us页面
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),  // 懒加载写法
      children:[
        {
          path:"us",
          component:() => import("../views/about/AboutUS.vue")
        },
        {
          path:"info",
          component:() => import("../views/about/AboutInfo.vue")
        },
      ]
    }
  ]
})

export default router
