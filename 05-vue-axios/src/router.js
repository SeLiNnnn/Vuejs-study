import Vue from 'vue'
import Router from 'vue-router'


import Goods from './components/Goods.vue'
import News from './components/News.vue'
import Hd from './components/hder'
import Ft from './components/fter'
import Con from './components/con'
import Phone from './components/phone'
import Huawei from './components/huawei'
import Vivo from './components/vivo'
import Oppo from './components/oppo'
import Mi from './components/mi' 
import Mi8 from './components/mi8'
import mi8Details from './components/mi8Details'

import Axios from 'axios'
Axios.defaults.baseURL = 'http://47.96.29.109/vueProject/' //一定记得最后结尾要有/ 这样写可以减少很多url的重复书写
Vue.prototype.$ajax = Axios// 把它当作ajax来使用 $ajax只是自己取的名字

import $ from 'jquery'
Vue.prototype.$ = $

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        hder:Hd,
        default:Con,
        fter:Ft
      }
    },
    {
      path : '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path : '/news',
      name: 'news',
      component: News
    },
    {
      name : 'phone',
      path : '/phone',
      component: Phone,
      children:[// Phone的子路由
        {
          name : 'phone.huawei',
          path : 'huawei',// 不能带/ 直接写huawei
          component : Huawei
        },
        {
          name : 'phone.vivo',
          path : 'vivo',
          component : Vivo
        },
        {
          name : 'phone.oppo',
          path : 'oppo',
          component : Oppo
        },
        {
          name : 'phone.mi',
          path : 'mi',
          component : Mi,
          children: [
            {
              name:'mi8',
              path:'mi8',
              component:Mi8,
              children:[
                {
                  name:'mi8.detail',
                  path:'mi8Detail',
                  component:mi8Details
                }
              ]
            }
          ]
        }
      ]
    }
    
  ]
})
