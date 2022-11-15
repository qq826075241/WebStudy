 
<template>
    <div class="hello">
        <swiper :modules="modules" :pagination="{clickable : true}">
            <swiper-slide>
                <img src="../assets/logo.svg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/logo.svg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/logo.svg" alt="">
            </swiper-slide>
        </swiper>
    </div>
</template>
 
<script>
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
    name: "Vue引入第三方",
    data() {
        return {
            modules:[Pagination]
        }
    },
    components: {
        Swiper,
        SwiperSlide
    }
}
</script>

<style>
img {
    width: 100%;
}
</style>