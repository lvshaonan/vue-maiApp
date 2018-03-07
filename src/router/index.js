import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Social from '@/pages/social/Social'
import Msg from '@/pages/msg/Msg'
import Me from '@/pages/me/Me'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/social',
      name: 'Social',
      component: Social
    },
    {
      path: '/msg',
      name: 'Msg',
      component: Msg
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
