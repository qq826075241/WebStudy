
<template>
  <div class="login-body">
    <div class="login-panel">
      <div class="login-title">用户登录</div>
      <el-form :model="form">
        <el-form-item label="">
          <el-input v-model="form.account" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.password" placeholder="请输入验证码"/>
          <img :src="checkCodeUrl" class="check-code">
        </el-form-item>
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="记住我" name="type" />
        </el-checkbox-group>
      </el-form>
      <el-button>登录</el-button>
    </div>
  </div>
 
</template>

<script setup>
  import { reactive, ref } from 'vue'

  const form = reactive({})
  const checkCodeUrl = "api/checkCode";

</script>

<style>
  .login-body {
    background-image: url(../assets/loginBg.jpeg);
    width: 100%;
    height: calc(100vh);
    background-size: cover;
    background-position: center;
  }

  .login-panel {
    width: 350px;
    float: right;
    margin-right: 100px;
    margin-top: 100px;
    padding: 20px ;
    border-radius: 20px;
    box-shadow: 2px 2px 10px #888888;
    background: #fff;
  }

  .login-title {
    font-size: 18px;
    text-align: center;
    color: #333333;
    margin-bottom: 10px;
  }

</style>