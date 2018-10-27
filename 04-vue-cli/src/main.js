// 全局组件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import hdNav from './components/hdNav'
import ftNav from './components/ftNav'
Vue.component('hdNav', hdNav)
Vue.component('ftNav', ftNav)

Vue.config.productionTip = false

new Vue({
  router,// 安装router才能使用
  store,
  components: {App},//安装app.vue
  render: h => h(App)
}).$mount('#app')
