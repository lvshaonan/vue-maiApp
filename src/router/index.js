import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Social from '@/pages/social/Social'
import Msg from '@/pages/msg/Msg'
import Me from '@/pages/me/Me'
import Category from '@/pages/category/Category'
import Search from '@/pages/search/Search'
import Dynamic from '@/pages/dynamic/dynamic'
import Goods from '@/pages/goods/goods'


Vue.use(Router)

const routes = [
  {
    path: '/',
    component:resolve => require(['@/pages/home/Home'],resolve)  
  },
  {
    path: '/home',
    component:resolve => require(['@/pages/home/Home'],resolve)
  },
  {
    path: '/social',
    component:resolve => require(['@/pages/social/Social'],resolve)  
  },
  {
    path: '/search',
    component:resolve => require(['@/pages/search/Search'],resolve)  
  },
  {
    path: '/msg',
    component:resolve => require(['@/pages/msg/Msg'],resolve)  
  },
  {
    path: '/me',
    component:resolve => require(['@/pages/me/Me'],resolve)  
  },
  {
    path: '/category',
    component:resolve => require(['@/pages/category/Category'],resolve)  
  },
  {
    path: '/dynamic',
    component:resolve => require(['@/pages/dynamic/dynamic'],resolve)  
  },
  {
    path: '/personal',
    component:resolve => require(['@/pages/personal/Personal'],resolve)  
  },
  {
    path: '/goods',
    component:resolve => require(['@/pages/goods/goods'],resolve)  
  },
  {
    path: '/resources',
    component:resolve => require(['@/pages/resources/Resources'],resolve)  
  },{
    path: '/resourcesList',
    component:resolve => require(['@/pages/resources/ResourcesList'],resolve)  
  },
  {
    path: '/vuexdemo',
    component:resolve => require(['@/pages/vuexdemo'],resolve)  
  },
  {
    path: '/distpicker',
    component:resolve => require(['@/pages/distpicker'],resolve)  
  }
]

// const routes = [
//   {
//     path: '/',
//     redirect: '/home'
//   },
//   {
//     path: '/home',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/social',
//     name: 'Social',
//     component: Social
//   },
//   {
//     path: '/msg',
//     name: 'Msg',
//     component: Msg
//   },
//   {
//     path: '/me',
//     name: 'Me',
//     component: Me
//   },
//   {
//     path: '/category',
//     name: 'Category',
//     component:Category
//   },
//   {
//     path: '/dynamic',
//     name: 'Dynamic',
//     component:Dynamic
//   },
//   {
//     path: '/goods',
//     name: 'Goods',
//     component:Goods
//   }
// ]

export default new Router({
  routes,
  mode: 'history'
})
