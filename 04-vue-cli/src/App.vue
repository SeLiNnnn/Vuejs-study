<template>
  <div id="app" ref="apptest"><!-- 这里的app要去通信 相当于父组件 -->
    
    <hd-nav title="主页头部"></hd-nav>
    <hr>
    <button @click="callB"> A先打电话-父组件</button>
    <hr>
    <a href="#/newsDetail">新闻详情页</a>
    <a href="#/goodsList">商品列表页</a>
    <hr>
    <router-link to="/newsDetail">新闻详情页</router-link>
    <hr>
    <!-- 下面是动态路由 -->
    
    <!-- 通过路由传递路由参数 -->
    <router-link :to="{name:'News', params:{id:10}}">新闻详情页</router-link>
    <!-- 通过查询字符串 -->  
    <router-link :to="{name:'Goods', query:{id:1} }">商品列表页</router-link>
    <hr>
    <router-view/>
    <hr>
   

    <ft-nav ref="footer" tip="主页底部"></ft-nav>
  </div>
</template>


<script>
//App.vue 这里是入口文件
import connect from "./components/call/connector";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    callB() {
      connect.$on("phone", function(msg) {
        console.log(msg);
      });
    }
  },
  created() {
    // 组件创建后 数据已经完成初始化 但DOM还未生成
  },
  mounted() {
    // 使用生命周期获取ref
    // 各种数据渲染到DOM上，浏览器全部加载完DOM mounted相当于window.onload
    // console.log(this.$refs);// 这里的this指向vue的实例也就是vm
    // console.log(this.$refs.apptest);// 获取到ref为apptest的元素
    this.$refs.apptest.style.backgroundColor = "hotpink"; // DOM操作

    // console.log(this.$refs.footer);// 返回VueComponent
    // console.log(this.$refs.footer.$el);// 就是这个<ft-nav>
    this.$refs.footer.$el.style.backgroundColor = "skyblue";
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
