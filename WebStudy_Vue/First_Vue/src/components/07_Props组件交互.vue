
<template>
    <h3>prop传递数据</h3>
    <p>{{ title }}</p>
    <p>age={{ age }}</p>
    <ul>
        <li v-for="(item,index) in names" :key = "index">{{ item }}</li>
    </ul>
 </template>
 
 <script>
 export default {
    name:"Cdsj",
    props:{
        title:{
            type:String,
            default:""
        },
        age:{
            type:Number,
            default:0
        },
        names:{
            type:Array,
            default:function(){
                return []
            }
        }
    }
 }
 </script>

<style>

</style>