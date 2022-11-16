
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>
 
<script>
import api from "../api/index"

export default {
    name: "Axios网络请求封装",
    props: {
        msg: String
    },
    mounted() {
        api.getYinsi().then(res => {
            console.log(res.data);
        })
    }
}
</script>

<style>

</style>