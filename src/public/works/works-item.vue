<template>
    <li>
        <a :href="worksData[1]" target="_blank">
            <div class="thumbnail" :style="getUrl(worksData[0])"></div>
        </a>
        <div class="info">
            <p><span>作品名称：</span>{{worksData[2]}}</p>
            <p><span>尺寸：</span>{{worksData[3]}}</p>
            <p><span>时间：</span>{{worksData[4]}}</p>
            <p><span>作者：</span>{{worksData[5]}}</p>
        </div>
        <div style="clear:both;"></div>
    </li>
</template>

<script>

// import {fetchJSON} from '../myUtil.js';

export default {
    props: ["worksData"],
    data () {
        return {

        }
    },
    methods: {
        getUrl(url){
            return {
                backgroundImage: "url(" + url + ")",
            };
        },
    },
}
</script>

<style scoped lang="scss">

@import '../basic.scss';
@import '../common.scss';

</style>
