<script>
export default {
  // innerHtml innerText
  name: '条件渲染',
  data() {
    return {
      flag: true
    }
  }
}
</script>

<template>
  <div class="Hello">
    <!-- v-if与v-show的区别在于v-if通过条件语句确定元素是否要被渲染，而v-show不管初始条件是什么都会将元素渲染，并基于css进行显示隐藏切换，v-if较为损耗性能，适合在变化不多的元素中使用 -->
    <p v-if="flag">我是cqq</p>
    <p v-else>我是zy</p>
    <p v-show="flag">你真是cqq吗</p>
  </div>
</template>