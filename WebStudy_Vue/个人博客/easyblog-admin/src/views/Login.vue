
<template>
  <div class="login-body">
    <div class="login-panel">
      <div class="login-title">用户登录</div>
      <el-form :model="formData" :rules="rules" ref="formDataRef">
        <el-form-item prop="account">
          <el-input v-model="formData.account" placeholder="请输入用户名">
            <template #prefix>
              <span class="iconfont icon-zhanghao"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formData.password" type="password" placeholder="请输入密码">
            <template #prefix>
              <span class="iconfont icon-31mima"></span>
            </template></el-input>
        </el-form-item>
        <el-form-item prop="checkCode">
          <div class="check-code-panel">
            <el-input v-model="formData.checkCode" placeholder="请输入验证码" class="input-panel"/>
            <img :src="checkCodeUrl" class="check-code" @click="changeCheckCode"/>
          </div>
        </el-form-item>
        <el-checkbox-group v-model="formData.rememberMe">
          <el-checkbox label="记住我" name="type" />
        </el-checkbox-group>
        <el-form-item label="">
          <el-button type="primary" :style="{width:'100%'}" @click="login" >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
 
</template>

<script setup>
  import { getCurrentInstance, reactive, ref } from 'vue';
  import md5 from "js-md5";

  const { proxy } = getCurrentInstance();

  const api = {
    checkCode: "api/checkCode",
    login: "/login"
  }

  // 表单相关
  const formDataRef = ref(null);
  const formData = reactive({});
  
  // 配置验证码图片
  const checkCodeUrl = ref(api.checkCode);
  const changeCheckCode = () => {
    checkCodeUrl.value = api.checkCode + "?" + new Date().getTime();
  }

  // 输入验证规则
  const rules = {
    account:[{
      required: true,
      message: "请输入用户名",
    }],
    password: [{
      required: true,
      message: "请输入密码",
    }],
    checkCode: [{
      required: true,
      message: "请输入验证码",
    }]
  }

  const login = () => {
    formDataRef.value.validate(async (valid) => {
      if(!valid){
        return;
      }
      let result = await proxy.Request({
        url: api.login,
        params:{
          account: formData.account,
          password: md5(formData.password),
          checkCode: formData.checkCode
        }
      })

      console.log(result)
    });
  }

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
          width: 100%;
          
          .input-panel {
            flex: 1;
            margin-right: 5px;
          }
          
          .check-code {
            cursor: pointer;
            height: 34px;
          }
        }
    }
  }

</style>