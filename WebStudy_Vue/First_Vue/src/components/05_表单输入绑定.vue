<script>
export default {
    // innerHtml innerText
    name: '表单输入绑定',
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        clickGetUserName() {
            console.log("账号："+this.username,"密码："+this.password);
        }
    }
}
</script>

<template>
    <div class="表单输入绑定">
        <!-- .trim修饰符的作用是去空格，.lazy修饰符的作用是在每次按回车键后再进行同步，提高性能 -->
        <input type="text" v-model.trim="username">
        <input type="text" v-model.lazy="password">
        <p>{{ username }},{{ password }}</p>
        <button @click="clickGetUserName">获取输入框内容</button>
    </div>
</template>