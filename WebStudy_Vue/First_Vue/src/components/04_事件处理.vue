<script>
export default {
    // innerHtml innerText
    name: '事件处理',
    data() {
        return {
            counter: 1,
            message: "新消息来了",
            names:["cqq","zy","zzd"]
        }
    },
    methods: {
        clickHandle() {
            this.counter += 1
            if (this.counter % 2 > 0) {
                this.message = "消息来了"
            } else {
                this.message = "消息被撤回"
            }
            // event 是原生 DOM event
            console.log(event);
            event.target.innerHTML = "点击了按钮！";
        },
        say(name) {
            console.log("Hello,"+name);
        },
        clickItemHandle(item) {
            console.log(item);
        }
    }
}
</script>

<template>
    <div class="事件处理">
        <!-- v-on通常简写为@ -->
        <button @click="counter += 1">点击了{{ counter }}次</button>
        <button @click="clickHandle">按钮</button>
        <p>{{ message }}</p>
        <button @click="say('cqq')">say hello</button>
        <ul>
            <li @click="clickItemHandle(item)" v-for="(item,index) in names" :key="index">{{item}}</li>
        </ul>
    </div>
</template>