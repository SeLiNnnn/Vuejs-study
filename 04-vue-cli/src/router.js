import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index.vue'
import News from './components/newsDetail.vue'
import Goods from './components/goodsList.vue'
import NotFount from './components/404'

Vue.use(Router)

export default new Router({
  routes: [ // 从上至下 依次执行
    {
      path:'/',
      redirect: {
        name:'index'//保证这几个名字一致
      }
    },
    {
      path: '/index',// 这里一定要写上匹配的名字 保证这几个名字一致
      name: 'index',//保证这几个名字一致
      component: Index
    },
    {
      path : '/newsDetail/:id',//使用params查询路由的时候 必须在router.js里加上/:id 否则即使可以跳转 也无法在浏览器url里查看到
      component: News,
      name: 'News'
    },
    {
      path : '/goodsList',
      component: Goods,
      name: 'Goods'
    },
    {// 不存在的路由 显示404
      path: '*',
      component: NotFount
    }
  ]
})
