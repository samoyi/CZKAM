<template>
    <div id="carousel" class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="tab in carouselData" :key="tab.title">
                <a :href="tab.link" target="_blank"><img width="815" height="455" :src="tab.img" /></a>
                <a :href="tab.link" target="_blank"><h3><span v-if="tab.tag">{{tab.tag}} | </span>{{tab.title}}</h3></a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    props: ["carouselData"],
    data () {
        return {

        }
    },
    components: {
        swiper,
        swiperSlide
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        },
    },
    mounted() {
        this.swiper.slideTo(1, 1000, false);
    }
}
</script>

<style lang="scss">

@import './basic.scss';


</style>
