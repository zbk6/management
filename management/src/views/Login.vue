<template>
  <article class="login_all">
    <aside class="login_cont">
      <!-- 头部图片 -->
      <div class="login_log">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 表单 -->
      <el-form ref="loginFormRel" :rules="loginFormRul" :model="loginForm" class="login_from">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-lock  "></el-input>
        </el-form-item>
        <el-form-item class="login_btn">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </aside>
  </article>
</template>

<script>
import { loginson } from '@/assets/js/login.js'
export default {
  data() {
    return {
      //表单请求数据
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      //表单验证规则
      loginFormRul: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    //登录
    login() {
      this.$refs.loginFormRel.validate(async res => {
        if (!res) return
       let a =await loginson(this.loginForm.username, this.loginForm.password)
       console.log(a);
       if(a.meta.status==200){
         this.$message({
          message: '登录成功！',
          type: 'success',
          duration:1000,
          onClose:()=>{
            this.$router.push('/home')
          }
        })
        localStorage.setItem("token",a.data.token)
       }else{
         this.$message({
           message:"登录失败",
           type:"error"
         })
       }
      })
    },
    //重置
    reset(){
      this.loginForm.username="";
      this.loginForm.password=""
    }
  }
}
</script>

<style lang="scss" scope>
.login_all {
  height: 100%;
  background-color: rgb(43, 75, 107);
  display: flex;
  justify-content: center;
  align-items: center;
  //表单样式
  .login_cont {
    width: 450px;
    height: 300px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 5px 2px #ddd;
    position: relative;
    .login_log {
      width: 150px;
      height: 150px;
      position: absolute;
      top: -75px;
      left: 50%;
      margin-left: -75px;
      border: 1px solid #eee;
      border-radius: 50%;
      background-color: #fff;
      padding: 10px;
      box-shadow: 0 0 2px 2px #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: rgb(238, 238, 238);
      }
    }
    .login_from {
      width: 100%;
      position: absolute;
      bottom: 0;
      padding: 0 20px;
      box-sizing: border-box;
      .login_btn {
        display: flex;
        justify-content: end;
      }
    }
  }
}
</style>
