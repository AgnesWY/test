import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 组件的引入
/* 公用的组件  */
import layout from '@/layout/layout'
/* 各部分路由组件  chunkname*/
const nopage = () => import(/* webpackChunkName: "nopage"*/ '@/pages/nopage')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/nopage',
      name: 'nopage',
      component: nopage

    }
  ]
})
