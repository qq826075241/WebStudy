<template>
    <div>
        <el-button type="danger">新增分类</el-button>
        <Table :columns="columns"
               :showPagination="false"
               :dataSource="tableData"
               :fetch="loadDataList"
               :options="tableOptions">
            <template #cover="{index,row}">
                <Cover :cover="row.cover"></Cover>
            </template>
            <template #op="{index,row}">
                <div class="op">
                    <a href="javascript:void(0)" class="a-link">修改</a>
                    <el-divider direction="vertical"></el-divider>
                    <a href="javascript:void(0)" class="a-link">删除</a>
                    <el-divider direction="vertical"></el-divider>
                    <a href="javascript:void(0)" class="a-link">上移</a>
                    <el-divider direction="vertical"></el-divider>
                    <a href="javascript:void(0)" class="a-link">下移</a>
                </div>
            </template>
        </Table>
        <Dialog></Dialog>
    </div>

</template>
 
<script setup>

import { reactive, getCurrentInstance } from 'vue';
import Cover from '../../components/Cover.vue';

const { proxy } = getCurrentInstance();

const api = {
    "loadDataList": "/category/loadAllCategory4Blog"
}
const columns = [{
    label: "封面",
    prop: "cover",
    width: 80,
    scopedSlots: "cover",
},
{
    label: "名称",
    prop: "categoryName",
    width: 200,
},
{
    label: "简介",
    prop: "categoryDesc",
},
{
    label: "博客数量",
    prop: "blogCount",
    width: 100,
},
{
    label: "操作",
    prop: "op",
    width: 200,
    scopedSlots: "op",
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