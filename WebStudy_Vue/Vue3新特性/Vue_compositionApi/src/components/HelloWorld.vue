<script setup>

import { ref, reactive } from "vue"

const message = ref("我是消息")

const names = reactive({
  list:["cq","zy","pg"]
})

function clickHandle(){
  message.value = "新消息来啦"
}

</script>

<template>
  <div class="greetings">
    <p>{{ message }}</p>
    <ul>
      <li v-for="(item,index) in names.list" :key="index">{{ item }}</li>
    </ul>
    <button @click="clickHandle">按钮</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
