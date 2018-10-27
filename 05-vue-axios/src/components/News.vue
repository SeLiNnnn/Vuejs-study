<template>
  <div>
    <h2>新闻页面</h2>
    <button @click="prev">返回上一级</button>
  </div>
</template>

<script>
export default {
  methods : {
    prev() {// $route主要是可读的属性  而$router主要是实现功能函数
      this.$router.go(-1);
    }
  }
}
</script>

<style>

</style>
