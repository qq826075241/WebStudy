
<template>
    <div class="hello"></div>
    <p>{{ chengpin }}</p>
</template>
 
<script>
import axios from "axios"

export default {
    name: "Axios网络请求",
    data(){
        chengpin:""
    },
    mounted() {
        // get请求
        axios({
            method:"get",
            url:"https://hfapp.baiyaodajiankang.com/rxzly/article/app/type/01"
        }).then(res =>{
            this.chengpin = res.data;
            // console.log(res);
        })

        // post请求
        axios({
            method:"post",
            url:"https://hfapp.baiyaodajiankang.com/rxzly/version/app/newVersion",
            data:{
                versionType:"Ios"
            }
        }).then(res =>{
            console.log(res.data);
        })

        // get简略写法
        axios.get("https://hfapp.baiyaodajiankang.com/rxzly/article/app/type/02")
        .then(res =>{
            console.log(res.data);
        })

        // post简略写法
        axios.post("https://hfapp.baiyaodajiankang.com/rxzly/version/app/newVersion",{versionType:"Ios"})
        .then(res =>{
            console.log(res.data);
        })

        // 全局axios使用（在main.js中挂载）
        this.$axios.get("https://hfapp.baiyaodajiankang.com/rxzly/article/app/type/03")
        .then(res =>{
            console.log(res.data);
        })
    }
}
</script>

<style>

</style>