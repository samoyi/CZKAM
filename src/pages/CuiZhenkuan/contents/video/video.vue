<template>
    <section class="video">
        <h2>艺术影像  <span>VIDEO</span></h2>
        <div v-for="item in videoData">
            <video :src="item.src" width="270" height="260" controls="controls"
                    preload="none" :poster="item.poster">
                你的浏览器版本过低
            </video>
            <h3>{{item.title}}</h3>
        </div>
    </section>
</template>

<script>

import {fetchJSON} from '../../../../public/js/myUtil.js';

export default {
    data () {
        return {
            videoData: [],
        }
    },
    mounted(){
        fetchJSON.call(this, 'video', 'videoData');
    },
}
</script>

<style scoped lang="scss">

@import "../../../../public/scss/common.scss";

.video{
    >div{
        float: left;
        margin-left: 90px;
        width: 270px;
        h3{
            white-space: pre-wrap;
            font-size: 14px;
        }
    }
    div:nth-child(3n+2){
        margin-left: 0;
    }
}

</style>
