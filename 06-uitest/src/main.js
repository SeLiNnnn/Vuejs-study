import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI) 
// use的使用:
// 组件库在内部注册了各种全局的组件
// 插件 挂载属性 Vue.prototype.$ = $  this.$.get()



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
