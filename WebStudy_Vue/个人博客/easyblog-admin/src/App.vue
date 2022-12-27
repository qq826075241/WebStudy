

<template>
  <div>
    <el-config-provider :locale="locale" :message="config">
      <RouterView />
    </el-config-provider>
  </div>
</template>

<script setup>

import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { reactive } from "vue";

const locale = zhCn;

const config = reactive({
  max: 1,
});

</script>

<style scoped>

</style>
