<!--
    首页轮播图组件
    使用vue-awesome-swiper插件 https://github.com/surmon-china/vue-awesome-swiper
-->

<template>
    <swiper id="carousel" class="swiper-container" :options="swiperOption" ref="mySwiper">
        <div class="swiper-slide" v-for="tab in carouselData" :key="tab.title">
            <a :href="tab.link" target="_blank">
                <img width="815" height="455" :src="tab.img" />
            </a>
            <a :href="tab.link" target="_blank">
                <h3>
                    <span v-if="tab.tag">{{tab.tag}} | </span>
                    {{tab.title}}
                </h3>
            </a>
        </div>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    props: ["carouselData"],
    data () {
        return {
            swiperOption: {
                autoplay: true,
                loop : true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            }
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

<style scoped lang="scss">

@import './basic.scss';

$carousel_width: 813px;

#carousel{
    width: $carousel_width;
    height: 515px;
    float: left;
    background-color: #efefef;
    margin-bottom: 10px;

    .swiper-wrapper{
        >div{
            width: 100%; height: 100%;
            background-size: contain;
            background-repeat: no-repeat;
            img{
                position: absolute;
                width: 100%;
                left: 0;
            }
            h3{
                font:{
                    size: 18px;
                    weight: bold;

                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 760px;
                }
                position: absolute;
                bottom: 22px; left: 22px;
                span{
                    color: $STANDARD_COLOR;
                }
            }
        }
    }
    .swiper-pagination{
        bottom: 80px;
        .swiper-pagination-bullet{
            background-color: $BASIC_GRAY;
        }
        .swiper-pagination-bullet-active, .swiper-button-prev, .swiper-button-next{
            background-color: $STANDARD_COLOR;
        }
    }
    .swiper-button-prev, .swiper-button-next{
        opacity: 0.3;
        width: 39px; height: 98px;
        top: 37%;
        background: url("http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/sprite.png");
        background-position: -1590px -81px;
    }
    .swiper-button-prev{
        left: 0;
    }
    .swiper-button-next{
        right: 0;
        -webkit-transform: rotateZ(180deg);
        transform: rotateZ(180deg);
    }
}
</style>
