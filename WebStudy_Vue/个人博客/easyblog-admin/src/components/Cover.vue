<template>
    <div class="cover">
        <img :src="proxy.globalInfo.imageUrl + cover" 
            v-if="cover">
        <img v-else 
            src="../assets/logo.svg">
    </div>
</template>
 
<script setup>
import { reactive, getCurrentInstance } from 'vue';

const props = defineProps({ 
    cover: {
        type: String 
    }
})

const { proxy } = getCurrentInstance();

 

</script>

<style lang="scss">
.cover {
    display: flex;
    align-items: center;
    justify-content: center;
    widows: 100px;
    height: 100px;
    overflow: hidden;
    img {
        width: 100%;
    }
}

</style>