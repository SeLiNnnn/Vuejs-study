<template>
  <div>
    <h2> 新闻详情页 </h2>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.id);// 可以获取params.id 但无法在浏览器的url中查看到 必须在router.js中加上id
    
  },
}
</script>

<style>

</style>
