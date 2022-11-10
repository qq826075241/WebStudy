
<!-- 
创建时： beforeCreate、created
渲染时： beforeMount、mounted
更新时： beforeUpdate、updated
卸载时： beforeUnmount、unmounted 
-->


<template>
    <h3>组件生命周期函数</h3>
    <p>{{ message }}</p>
    <button @click="message='数据改变'">按钮</button>
 </template>
 
 <script>
 export default {
    name:"Cdsj",
    data(){
        return{
            message:""
        }
    },
    beforeCreate(){
        console.log("beforeCreate：组件创建之前");
    },
    created(){
        console.log("created：组建创建完成");
    },
    beforeMount(){
        console.log("beforeMount：组件渲染之前");
    },
    mounted(){
        console.log("mounted：组建渲染完成");
    },
    beforeUpdate(){
        console.log("beforeUpdate：组件更新之前");
    },
    updated(){
        console.log("mounted：组建更新完成");
    },
    beforeUnmount(){
        console.log("beforeUpdate：组件卸载之前");
    },
    unmounted(){
        console.log("beforeUpdate：组件卸载完成");
    },

}
 </script>

<style>

</style>