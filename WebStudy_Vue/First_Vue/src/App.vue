<script setup>
import HelloWorld from './components/01_模板语法.vue'
import Tjxr from './components/02_条件渲染.vue'
import Lbxr from './components/03_列表渲染.vue'
import Sjcl from './components/04_事件处理.vue'
import Bdsrbd from './components/05_表单输入绑定.vue'
import Zjjc from './components/06_组件基础.vue'
import Zjjh from './components/07_Props组件交互.vue'
import Zdyjh from './components/08_自定义事件组件交互.vue'
import Smzq from './components/09_组件生命周期.vue'
import Yrdsf from './components/10_Vue引入第三方.vue'
import Axwlqq from './components/11_Axios网络请求.vue'

const title = "我是一个标题";
const age = 20;
const names = ["cqq","zy","asd"];

function getDataHandle(data) {
  console.log(data);
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <!-- <body>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </body> -->
  <Axwlqq />

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
