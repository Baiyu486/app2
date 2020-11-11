import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path:"/",
  redirect:"/home",
},{
  path:"/home",
  name:"Home",
  component:()=>import("@/views/Home/index.vue")
},{
  path:"/them",
  name:"Them",
  component:()=>import("@/views/Them/index.vue")
},{
  path:"/search",
  name:"Search",
  component:()=>import("@/views/Search/index.vue")
},{
  path:"/shop",
  name:"Shop",
  component:()=>import("@/views/Shop/index.vue")
},{
  path:"/detail/:id",
  name:"Detail",
  component:()=>import("@/views/Detail/index.vue")
},{
  path:"/my",
  name:"My",
  component:()=>import("@/views/My/index.vue")
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
