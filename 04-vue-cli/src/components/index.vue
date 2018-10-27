<template>
  <div class="index">
    <!-- 这里也是子组件 -->
    <hd-nav title="头部导航"></hd-nav>
        <h1>index 页面</h1>
        <button @click="callA"> B-> 子组件 </button>
        <ft-nav :tip="text"></ft-nav>
  </div>
</template>

<script>
import connect from "./call/connector";
export default {
  name: "index",
  data() {
    return {
      text: "底部导航"
    };
  },
  methods: {
    callA() {
      connect.$emit("phone", "子组件和父组件通信");
    }
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
