import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/router/index'
import Course from '@/components/router/course'
import Master from '@/components/router/master'
import Java from '@/components/router/pages/java'
import Web from '@/components/router/pages/web'


Vue.use(Router)

export default new Router({
  mode:"history", // 支持html5的history模式
  linkActiveClass:"active",// 全局配置高亮效果
  routes: [
    {
      path: '/',
      name: 'index',  // 传递数据有用
      component: Index
    },
    {
      path:'/course',
      name:'course',
      component:Course,
      // 默认进来重定向java
      redirect:"/course/java",
      children:[
        {
        path:"java",
        component:Java
        },{
        path:"web",
        component:Web
        }
      ]
    },
    {
      path: '/master/:count/:type',  // 路由传参
      name:'master',
      component:Master
    }
  ]
})
