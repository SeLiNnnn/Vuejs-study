<template>
  <div>
    <!-- 这里是子组件 -->
    <h2 v-text="title"></h2>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>

</style>
