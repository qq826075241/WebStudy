import { createRouter, createWebHistory } from 'vue-router'
import vueCookies from 'vue-cookies';

const routes = [
  {
    name: '登录',
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    name: '框架页',
    path: '/framework',
    component: () => import('../views/Framework.vue')
  }
]

// 这里不是通过new来创建，通过createRouter方法创建，使用的模式不是通过mode来定义
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const userInfo = vueCookies.get("userInfo");
  debugger;
  if(!userInfo && to.path != "/login") {
    router.push("/login");
  }
  next();
})

export default router
