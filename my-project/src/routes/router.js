import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Hello'
import NavLeft from '@/components/NavLeft'
import AboutMe from '@/components/AboutMe'
import List from '@/components/List'
import Content from '@/components/Content'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '',
      redirect: to => { return 'index'; },
      hidden: true
    },
    {
      path: '/index',
      component: Index,
      hidden: true,
    },
    {
      path: '/nav',
      name: '',
      component: NavLeft,
      children: [
        {
          path: '',
          redirect: to => { return 'home'; },
          hidden: true
        },
        {
          path: 'home',
          name: '首页',
          component: Content,
          children: [
            {
              path: '',
              redirect: to => { return 'desc'; },
              hidden: true
            },
            {
              path: 'desc',
              name: '关于我',
              component: AboutMe
            },
          ]
        },
        {
          path: 'introduct',
          name: '描述',
          component: Content,
          children: [
            {
              path: '',
              redirect: to => { return 'self'; },
              hidden: true
            },
            {
              path: 'self',
              name: '列表',
              component: List
            },
          ]
        },
      ]


    },

  ]
})
