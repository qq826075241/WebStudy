<template>
    <div>
        <el-button type="danger">新增分类</el-button>
        <Table :columns="columns"
               :showPagination="false"
               :dataSource="tableData"
               :fetch="loadDataList"
               :options="tableOptions">
        </Table>
    </div>

</template>
 
<script setup>

import { reactive, getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const api = {
    "loadDataList": "/category/loadAllCategory4Blog"
}
const columns = [{
    label: "封面",
    prop: "cover",
    width: 80,
},
{
    label: "名称",
    prop: "categoryName",
    width: 150,
},
{
    label: "简介",
    prop: "categoryDesc",
},
{
    label: "博客数量",
    prop: "blogCount",
    width: 80,
},
{
    label: "操作",
    prop: "blogCount",
    width: 150,
}];

const tableData = reactive({})
const tableOptions = {
    extHeight: 10,
}

const loadDataList = async () => {
    let result = await proxy.Request({
        url: api.loadDataList
    })
    if(!result) {
        return;
    }
    tableData.list = result.data;
}

</script>

<style lang="scss">

</style>