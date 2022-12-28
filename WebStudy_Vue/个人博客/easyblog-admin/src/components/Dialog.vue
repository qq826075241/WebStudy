<template>
    <div>
        <el-dialog :show-close="false"
                   :draggable="true"
                   v-model="show"
                   :close-on-click-modal="false"
                   :title="title"
                   :showClose="showClose"
                   custom-class="cust-dialog"
                   :top="top"
                   :width="width">

        </el-dialog>
    </div>
</template>
 
<script setup>

const props = defineProps ({
    show:{
        type: Boolean,
        default: true
    },
    showClose:{
        type: Boolean,
        default: true
    },
    top:{
        type: String,
        default: "50px"
    },
    width:{
        type: String,
        default: "30%"
    }
})

</script>

<style lang="scss">

</style>