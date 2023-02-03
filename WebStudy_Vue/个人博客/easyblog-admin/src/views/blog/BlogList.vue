
<template>
    <div class="hello">
        <el-form :model="searchformData" 
                 label-width="80px">
            <el-row>
                <el-col :span="5">
                    <el-form-item label="标题" 
                                  prop="titleFuzzy">
                        <el-input placeholder="请输入标题"
                                  v-model="searchformData.titleFuzzy">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label="状态" 
                                  prop="status">
                        <el-select placeholder="请选择状态"
                                  v-model="searchformData.status"
                                  clearable>
                            <el-option :value="0" 
                                       label="草稿"></el-option>
                            <el-option :value="1" 
                                       label="已发布"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
 
<script setup>

import { reactive } from 'vue';

const searchformData = reactive({})

</script>

<style>

</style>