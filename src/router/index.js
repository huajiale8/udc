import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    // 品牌资源页面
    path: '/platform',
    name: 'platform',
    component: () => import('@/views/Platform')
  }
  ,
  {
    // 品牌资源页面
    path: '/operatingGuide',
    name: 'operatingGuide',
    component: () => import('@/views/Operating')
  },
  {
    // 品牌资源页面
    path: '/partner',
    name: 'partner',
    component: () => import('@/views/Partner')
  },
    {
    // 新看点页面
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },

  
]
const router = new VueRouter({
  routes
})

export default router