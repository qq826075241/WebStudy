<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Tjxr from './components/条件渲染.vue'
import Lbxr from './components/列表渲染.vue'
import Sjcl from './components/事件处理.vue'
import Bdsrbd from './components/表单输入绑定.vue'
import Zjjc from './components/组件基础.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <body>
    <div class="wrapper">
      <Zjjc msg="You did it!" />
    </div>
  </body>

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
