
<template>
    <div class="hello">
        <h3>跨域解决方案</h3>
    </div>
</template>
 
<script>
import axios from 'axios';

export default {
    name: "网络请求跨域解决方案",
    mounted() {
        axios.get("/api/FingerUnion/list.php")
        .then(res =>{
            console.log(res);
        })
    }
}
</script>

<style>

</style>