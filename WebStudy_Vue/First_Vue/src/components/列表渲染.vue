<script>
export default {
  // innerHtml innerText
  name: '列表渲染',
  data() {
    return {
      newList:[
        {
            id:1001,
            title:"今日新闻1"
        },
        {
            id:1002,
            title:"今日新闻2"
        },
        {
            id:1003,
            title:"今日新闻3"
        }
      ]
    }
  }
}
</script>

<template>
  <div class="Lbxr">
    <h3>列表渲染</h3>
    <ul>
        <!-- key的作用在于为item添加唯一标示符，提升渲染性能 -->
        <li v-for="item in newList" :key="item.id"> 
            {{ item.title }}
        </li>
    </ul>
  </div>
</template>