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

#common-header{
    width: 100%; height: $HEADER_HEIGHT;
    @media (min-width: 1920px){
        height: 120px;
    }
    box-sizing: border-box;
    border-bottom: 1px solid $LINE_GRAY;
    >div{
        width: 1226px;
        @media (min-width: 1920px){
            width: $HEADER_CONTENT_WIDTH_1920;
        }
        height: 100%;
        margin-left: auto; margin-right: auto;
        position: relative;
        #top_logo{
            width: 256px; height: 51px;
            position:relative; top:28px;
            background:{
                image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/sprite.png");
                position: -1590px 0px;
            }
            @media (min-width: 1920px){
                width: 256px; height: 51px;
                top:34px;
            }
        }
        .menu{
            width: $HEADER_MENU__WIDTH; height: 35px;
            position: absolute; top: 110px;
            @media (min-width: 1920px){
                top: 68px;
                left: 554px;
            }
            li{
                width: $HEADER_MENU__WIDTH/7;
                float: left;
                position:absolute;
                color: $BASIC_BLACK;
                font-size: 14px;
                font-weight: bold;
                p{
                    color: $STANDARD_COLOR;
                    margin-top: 4px;
                    font-size: 10px;
                }
                cursor: pointer;
            }
            // 主菜单每一项的位置只能量设计稿，没有固定间隔
            li:nth-child(2){
                left: 148px;
            }
            li:nth-child(3){
                left: 342px;
            }
            li:nth-child(4){
                left: 494px;
            }
            li:nth-child(5){
                left: 684px;
            }
            li:nth-child(6){
                left: 908px;
            }
            li:nth-child(7){
                left: 1134px;
            }
        }
    }
}

</style>
