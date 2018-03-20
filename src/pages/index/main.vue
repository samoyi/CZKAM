<template>
    <div id="wrapper">
        <common-header></common-header>
        <!-- <section id="content">
            <section id="blockWrapper">
                <carousel-box :carousel-data="carouselData"></carousel-box>
                <div id="exhibition-tab">
                    <h2>展览 EXHIBITION</h2>
                    <img src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/exhibition/head.jpg" />
                    <exhibition-news v-for="item in exhibitionNews" :news="item"></exhibition-news>
                    <a href="exhibition.html" target="_blank" class="more">MORE</a>
                </div>
                <div id="public_education-tab">
                    <h2>公共教育 PUBLIC EDUCATION</h2>
                    <img src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/public/head.jpg" />
                    <public_education-news v-for="item in publicEducationNews" :news="item"></public_education-news>
                    <a href="public_education.html" target="_blank" class="more">MORE</a>
                </div>
                <div id="bulletin-tab">
                    <h2>公告 BULLETIN</h2>
                    <img src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/bulletin/head.jpg" />
                    <bulletin-tab :tabs="bulletinTabs" :cur-index="bulletinIndex"></bulletin-tab>
                    <a href="service_center.html#公告" target="_blank" class="more">MORE</a>
                </div>
                <div id="gallery_base_info">
                    <gallery-base-info></gallery-base-info>
                    <i class="code"></i>
                </div>
                <p style="clear:both;"></p>
            </section>
            <div id="blockSelector">
                <div class="left_arrow"></div>
                <ul>
                    <li>展览<br /><i></i><br /><span>EXHIBITION</span></li>
                    <li>公共教育<br /><i></i><br /><span>PUBLIC EDUCATION</span></li>
                    <li>公告<br /><i></i><br /><span>BULLETIN</span></li>
                    <li>美术馆<br /><i></i><br /><span>ART MUSEUM</span></li>
                </ul>
                <div class="right_arrow"></div>
            </div>
        </section>
        <footer id="footer">
            <p>陕ICP备07030830号-5  Copyright © 2015 czkam.net Inc. All Rights Reserved. 崔振宽美术馆 版权所有  Designed by 凡卡互动</p>
            <div>
                <a href="service_center.html#会员" target="_blank">会员</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="about_us.html#联系我们" target="_blank">联系我们</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="service_center.html#下载专区" target="_blank">下载专区</a>
            </div>
            <i></i>
        </footer> -->
    </div>
</template>

<script>

import commonHeader from '../../public/common-header.vue';

// import commonHeader from '../../public/carousel-box.vue';

export default {
    data () {
        return {

        }
    },
    components: {
        // 'common-header':
        commonHeader,
        // 'carousel-box':
        // carouselBox,
    },
    mouted(){
        window.onload = function(){
            // 预加载轮播图连接的资源
            let cssPreloader = new Image();
            cssPreloader.src = "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/css/common_page20170808.css";
        };
    }
}
</script>

<style lang="scss">
</style>
