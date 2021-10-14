<template>
  <el-container class="home_cont">
    <!-- 头部 -->
  <el-header>
    <div class="log">
      <img :src="require('@/assets/logo.png')">
      <span>电商管理系统</span>
    </div>
      <el-button type="primary" @click="login">退出</el-button>
  </el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  data(){
   return {
   }
},
}
</script>

<style lang="scss" scope>
.home_cont{
  height: 100%;
  display: flex;
  flex-direction: column;
  //头部样式
  .el-header{
    height: 60px;
    background-color: rgb(55, 61, 65);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    img{
      width: 60px;
      height: 60px;
    }
    
  }
  //主题部分样式
  .el-container{
    flex-grow: 1;
    //左侧样式
    .el-aside{
      background-color: rgb(51, 55, 68);
  }
  //右侧样式
  .el-main{
      background-color: rgb(234, 237, 241);

  }
    }
}
</style>