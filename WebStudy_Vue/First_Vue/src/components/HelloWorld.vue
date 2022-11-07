<script>
export default {
  // innerHtml innerText
  name:'HelloWorld',
  data() {
    return {
      message: "学习Vue",
      rawHtml:"<a href='https://wwww.baidu.com'>百度</a>",
      dynamicId:"cqq",
      num:10,
      flag:true
    }
  }
}

</script>

<template>
  <div class="hello">
    <h3>学习Vue：模板语法</h3>
    <p>{{message}}</p>
    <p>{{rawHtml}}</p>
    <p v-html="rawHtml"></p>
    <!-- <p v-bind:id="dynamicId"></p> -->
    <p :id="dynamicId"></p>  <!-- v-bind：可简写成： -->
    <p>{{ num + 10}}</p>
    <p>{{ flag ? '真' : '假' }}</p>
  </div>
</template>

