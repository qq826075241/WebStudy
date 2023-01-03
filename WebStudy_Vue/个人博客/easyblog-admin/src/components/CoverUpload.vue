<template>
    <el-upload name="file"
        :show-file-list="false"
        accept=".png,.PNG,.jpg,.JPG,.jpeg,.JPEG,.gif,.GIF,.bmp,.BMP"
        :multiple="false"
        :http-request="uploadImage">
        <div class="cover-upload-btn">
            <template v-if="modelValue">
                <img :src="proxy.globalInfo.imageUrl + modelValue">
            </template>
            <span class="iconfont icon-jiahao" v-else></span>
        </div>
    </el-upload>
</template>

<script setup>

import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const props = defineProps({
    modelValue: {
        type: String,
        default: null,
    }
})

const api = {
    uploadUrl: "file/uploadImage"
}

const emit = defineEmits();
const uploadImage = async (file) => {
    console.log(file);
    let result = await proxy.Request({
        url:api.uploadUrl,
        dataType:"file",
        params:{
            file:file.file,
            type:0,
        }
    })
    const fileName = result.data.fileName
    emit("update:modelValue",fileName);

}

</script>

<style lang="scss">

.cover-upload-btn {
    width: 150px;
    height: 150px;
    background-color: rgba($color: #ddd, $alpha: 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    .iconfont {
        font-size: 30px;
        color: rgb(149, 143, 143);
    }
}

</style>