<template>
  <div>
    <h2>我是内容我是内容</h2>
    <router-link :to="{name:'phone'}"> 手机类目 </router-link>
    <router-view class="phone"></router-view>
    <hr>
    <!-- 请求数据并渲染 -->
      <ol>
        <li v-for="(item, index) in banner" :key="index">
          <img :src="item.picUrl" width="200" height="200" alt="banner">
        </li>
      </ol>
    <hr>
      <button @click="send">点击请求数据</button>
    <hr>
  </div>
</template>

<script>
export default {
  name : 'content',
  data () {
    return {
      banner:[]
    }

  },
  created () {
    //jquery方法
    // this.$.get('http://47.96.29.102:6333/users')
    //     .then((res) => {
    //       console.log( JSON.parse(res) );
    //     });

    this.$ajax.get('vue.php?title=banner')
        .then((res) => {
          console.log(res.data);
          this.banner = res.data;
        })    
  },
  methods: {// 点击请求数据
    send() {
      let php = 'vue.php';
      let title = 'banner1';
      let url = php + '?title=' + title;
      // this.$ajax.get('http://47.96.29.100/vueProject/' +url)
      // 注意：后面已经定义了baseURL方法 所以下面就改为了空字符串
      this.$ajax.get('' +url)
          .then((res) => {
            console.log( res.data );
            
          })

      // 另一种写法: 分发
      // this.$ajax.all([
      //   this.$ajax.get('vue.php?title=banner1'),
      //   this.$ajax.get('vue.php?title=banner2'),
      //   this.$ajax.get('vue.php?title=banner3')
      // ])
      //   .then(this.$ajax.spread((res1,res2,res3)=>{
      //     console.log(res1.data);
      //     console.log(res2.data);
      //     console.log(res3.data);         
      //   }))
      //   .catch((err)=>{
      //     console.log(err);
          
      //   })
    }
  
  }
}
</script>

<style scoped>
  ol {
    width : 600px;
  
  }
  ol li {
    float: left;
  }

</style>
