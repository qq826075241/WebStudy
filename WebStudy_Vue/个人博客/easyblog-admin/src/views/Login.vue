
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
          <div class="check-code-panel">
            <el-input v-model="form.checkCode" placeholder="请输入验证码" class="input-panel"/>
            <!-- <img :src="checkCodeUrl" class="check-code"> -->
            <img src="../assets/checkCode.jpeg" alt="" class="check-code"/>
          </div>
        </el-form-item>
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="记住我" name="type" />
        </el-checkbox-group>
        <el-form-item label="">
          <el-button type="primary" :style="{width:'100%'}">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
 
</template>

<script setup>
  import { reactive, ref } from 'vue'

  const form = reactive({})
  const checkCodeUrl = "api/checkCode";

</script>

<style lang="scss">
  .login-body {
    background-image: url(../assets/loginBg.jpeg);
    width: 100%;
    height: calc(100vh);
    background-size: cover;
    background-position: center;

    .login-panel {
      width: 350px;
      float: right;
      margin-right: 100px;
      margin-top: 100px;
      padding: 20px ;
      border-radius: 20px;
      box-shadow: 2px 2px 10px #888888;
      background: #fff;
      opacity: 0.9;
      

      .login-title {
      font-size: 18px;
      text-align: center;
      color: #333333;
      margin-bottom: 10px; 
      }

      .check-code-panel {
          display: flex;
          align-items: center;
          width: 100;
          
          .input-panel {
            flex: 1;
            margin-right: 25px;
          }
          
          .check-code {
            object-fit: cover;
            height: 25px;

          }
        }
    }
  }

</style>