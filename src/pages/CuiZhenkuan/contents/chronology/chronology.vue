<template>
    <section class="art_chronology">
        <h2>艺术年表  <span>ART CHRONOLOGY</span></h2>
        <div class="axis"></div>
        <div class="range">
            <div>1935-1955<i></i></div>
            <div>1956-1960<i></i></div>
            <div>1961-1976<i></i></div>
            <div>1977-1979<i></i></div>
            <div>1980-1982<i></i></div>
            <div>1983-1986<i></i></div>
            <div>1987-1991<i></i></div>
            <div>1992-1994<i></i></div>
            <div>1995-1997<i></i></div>
            <div>1998-2000<i></i></div>
            <div>2001-2003<i></i></div>
            <div>2004-2006<i></i></div>
            <div>2007-2009<i></i></div>
            <div>2010-2012<i></i></div>
            <div>2013-2014<i></i></div>
        </div>
        <a :href="src" target="_blank"  v-for="src in srcs">
            <img :src="src" alt="崔振宽艺术年表"/>
        </a>
    </section>
</template>

<script>

import {fetchJSON} from '../../../../public/js/myUtil.js';

export default {
    data () {
        return {
            srcs: [],
        }
    },
    mounted(){
        fetchJSON.call(this, 'chronology', 'srcs');
    },
}
</script>

<style scoped lang="scss">

@import "../../../../public/scss/common.scss";

.art_chronology{
    position: relative;
    .axis{
        position: absolute;
        width: 0px; height: 5150px;
        border-right: 4px dotted $BASIC_GRAY;
        left: 50px; top: 200px;
    }
    .range{
        font-size: 12px;
        width: 87px;
        position: absolute; top: 200px; left: -30px;
        div{
            width: 100%;
            position: absolute;
            i{
                display: inline-block;
                width: 10px; height: 10px;
                margin-top: 8px;
                background-color: $BASIC_GRAY;
                float: right;
                border-radius: 50%;
            }
        }
        div:nth-child(1){
            top: -12px;
        }
        div:nth-child(2){
            top: 341px;
        }
        div:nth-child(3){
            top: 732px;
        }
        div:nth-child(4){
            top: 1108px;
        }
        div:nth-child(5){
            top: 1484px;
        }
        div:nth-child(6){
            top: 1819px;
        }
        div:nth-child(7){
            top: 2091px;
        }
        div:nth-child(8){
            top: 2387px;
        }
        div:nth-child(9){
            top: 2731px;
        }
        div:nth-child(10){
            top: 3130px;
        }
        div:nth-child(11){
            top: 3490px;
        }
        div:nth-child(12){
            top: 3874px;
        }
        div:nth-child(13){
            top: 4225px;
        }
        div:nth-child(14){
            top: 4601px;
        }
        div:nth-child(15){
            top: 5073px;
        }
    }
    >a>img{
        width: 890px;
        margin-top: 24px;
        margin-left: 100px;
    }
}

</style>
