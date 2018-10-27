<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <button @click="next">前进</button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg : '首页',

    }
  },
  methods : {
    next () {
      this.$router.go(1)
    }
  }
}
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
