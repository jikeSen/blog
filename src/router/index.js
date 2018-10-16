import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Php from '@/components/Php'
import Docker from '@/components/Docker'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/php',
      name: 'php',
      component: Php
    },
    {
      path: '/docker',
      name: 'docker',
      component: Docker
    }
  ]
})
