import Vue from 'vue'
import VueRouter from 'vue-router'
import second from "@/views/second";
import index from "@/views/adminPage/index";
import login from "@/views/login";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: login
  },
  {
    path:"/admin",
    component: index
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
