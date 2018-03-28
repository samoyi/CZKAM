<template>
    <article-page :html="contentHTML"></article-page>
</template>

<script>

import articlePage from '../../../../public/components/article.vue';
export default {
    components:{
        articlePage,
    },
    data () {
        return {
            contentHTML: `
                <h2>学术委员会  <span>ACADEMIC COMMITTEE</span></h2>
                <div>
                    <p>崔振宽美术馆学术委员会主要承担在该馆所举办展览的学术定位、学术推广与公共教育。专家的建议不仅将对学术建设的纬度、收藏作品的方向、作品的保存和展陈方式有着至关重要的作用，而且还将为美术馆的发展做出宏观且前瞻性的规划。学术委员会的建立使美术馆与公众、专家、艺术家之间的沟通更加多元和开放。同时，还将一如既往地关注当代中国民营美术馆的发展，共同探讨和研究中国当代艺术的未来，共同努力使崔振宽美术馆在中国乃至世界美术馆行业中因其自身所独有的价值而绽放异彩。</p>
                    <p>The academic committee of Cui Zhenkuan Art Museum mainly undertakes academic positioning, academic popularization and public education in the exhibition held by the museum. Has a vital role in the advice of experts will not only on academic construction latitude, collection of works of the direction, the preservation and exhibition of works, but also for the development of the museum to make macroscopic and forward-looking planning. The establishment of the academic committee has made the communication between the art museum and the public, experts and artists more diverse and open. At the same time, will also focus on the development of contemporary China as in the past private art museum, to explore and study China the future of contemporary art, working together to make the Cui Zhenkuan Art Museum in China and the world art museum in the industry because of its own unique value and extraordinary.</p>
                </div>
            `,
        }
    },
}
</script>

<style lang="scss">

@import "../../../../public/scss/common.scss";

</style>
