<template>
  <div id="app">
    <router-link :to="{name:'goods'}"> 商品 </router-link>
    <router-link :to="{name:'news'}"> 新闻 </router-link>

    <!-- 通过router-view显示组件 -->
    <hr>
    <router-view class="quialtodiv" name="hder"/>
    <router-view class="quialtodiv" />
    <router-view class="quialtodiv" name="fter"/>
    <hr>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
.quialtodiv {
  height: 150px;
  border: 1px dashed #ccc;
}
</style>
