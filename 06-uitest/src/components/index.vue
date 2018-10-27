<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <hr>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    <router-view></router-view>
    <hr>
    <hr>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row> 
    <hr>
    <el-switch
      v-model="value3"
      active-text="按月付费"
      inactive-text="按年付费">
    </el-switch>
    <el-switch
      style="display: block"
      v-model="value4"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费">
    </el-switch>
    <hr>
    <div class="banner1">
      <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in banner1" :key="item">
        
        <img :src="item.picUrl" alt="" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
    </div>



  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      radio: "1",
      msg: "Element-UI",
      value3: true,
      value4: true,
      banner1:[]
    }
  },
  created() {
    this.$Axios.get('vue.php?title=banner')
        .then((res) => {
          this.banner1 = res.data
        }).catch((err) => {
          
        });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.banner1 {
  width: 600px;
  height: 300px;
  margin: 50px auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
  
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
