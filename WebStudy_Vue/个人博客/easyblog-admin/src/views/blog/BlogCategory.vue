<template>
    <div>
        <el-button type="danger"
            @click="showEdit('add')">新增分类</el-button>
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
                    <a href="javascript:void(0)" class="a-link"
                        @click="showEdit('update',row)">修改</a>
                    <el-divider direction="vertical"></el-divider>
                    <a href="javascript:void(0)" class="a-link" 
                        @click="del(row)">删除</a>
                    <el-divider direction="vertical"></el-divider>
                    <a href="javascript:void(0)" 
                        :class="[index==0?'not-allow':'a-link']"
                        @click="changeSort(index,'up')">上移</a>
                    <el-divider direction="vertical"></el-divider>
                    <a href="javascript:void(0)" 
                        :class="[index==tableData.list.length-1?'not-allow':'a-link']"
                        @click="changeSort(index,'down')">下移</a>
                </div>
            </template>
        </Table>
        <Dialog :show="dialogConfig.show"
                :title="dialogConfig.title" 
                :buttons="dialogConfig.buttons"
                @close="dialogConfig.show=false"
                width="500px">
                <el-form :model="formData" 
                         :rules="rules" 
                         ref="formDataRef">
                    <el-form-item label="名称"
                                  prop="account">
                        <el-input placeholder="请输入名称"
                            v-model="formData.categoryName">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="封面"
                                  prop="cover">
                        <CoverUpload v-model="formData.cover"></CoverUpload>
                    </el-form-item>
                    <el-form-item label="简介" 
                                  prop="categoryDesc">
                        <el-input placeholder="请输入简介"
                                  v-model="formData.categoryDesc" 
                                  type="textarea"
                                  :autosize="{minRows:4, maxRows:4}">
                        </el-input>
                    </el-form-item>
                </el-form>
        </Dialog>
    </div>

</template>
 
<script setup>

import { reactive, getCurrentInstance, nextTick, ref } from 'vue';
import Cover from '../../components/Cover.vue';
import CoverUpload from '../../components/CoverUpload.vue';

const { proxy } = getCurrentInstance();

const api = {
    "loadDataList": "/category/loadAllCategory4Blog",
    "saveCategory": "/category/saveCategory4Blog",
    "delCategory": "/category/delCategory4Blog",
    "changeSort": "/category/changeCategorySort4Blog",
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

// 新增，修改
const dialogConfig = reactive({
    title: "标题",
    show: false,
    buttons: [{
        type: "danger",
        text: "确定",
        click: (e) => {
            submitForm();
        }
    }]
})

const formData = reactive({});
const rules = {
    categoryName: [{required:true, message:"请输入分类名称"}]
};
const formDataRef = ref();
const showEdit = (type, data) => {
    dialogConfig.show = true;
    nextTick(() => {
        formDataRef.value.resetFields();
        if(type == "add") {
            dialogConfig.title = "新增分类";
        } else if(type == "update") {
            dialogConfig.title = "编辑分类";
            Object.assign(formData, data)
        }
    })
}
const submitForm = () => {
    formDataRef.value.validate(async (valid) => {
        if(!valid) {
            return;
        }

        let params = {};
        Object.assign(params, formData);
        let result = await proxy.Request({
            url: api.saveCategory,
            params,
        })
        if(!result) {
            return;
        }
        dialogConfig.show = false;
        proxy.Message.success("保存成功");
        loadDataList();
    })
}

// 删除
const del = (data) => {
    proxy.Confirm("你确定要删除" + data.categoryName, async () => {
        let result = await proxy.Request({
            url:api.delCategory,
            params: {
                categoryId: data.categoryId,
            }
        })
        if(!result) {
            return;
        }
        loadDataList();
    })
}

// 修改排序
const changeSort = async(index, type) => {
    let categoryList = tableData.list;
    if(type == "down" && index === categoryList.length - 1 || type === 'up' && index === 0) {
        return;
    }
    let number = type == 'down'?1:-1;
    let temp = categoryList[index];
    categoryList.splice(index, 1);
    categoryList.splice(index + number, 0, temp);
    // console.log(JSON.stringify(categoryList));
    let result = await proxy.Request({
        url: api.changeSort,
        dataType: "json",
        params: categoryList,
    })
    if(!result) {
        return;
    }
}

</script>

<style lang="scss">

</style>