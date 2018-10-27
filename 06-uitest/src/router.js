import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index'
import Axios from 'axios'

Vue.use(Router)
Axios.defaults.baseURL = 'http://47.96.29.109/vueProject/'
Vue.prototype.$Axios = Axios


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
    
  ]
})
