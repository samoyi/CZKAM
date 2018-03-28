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
                <h2>艺术酒店  <span>ART HOTEL</span></h2>
                <p>艺术酒店紧邻美术馆主楼，建筑主体共2层，与美术馆浑然一体，富有现代、简约、厚重的艺术风格。酒店拥有精心设计的客房、套房，房间配套设施齐备。酒店充满着浓厚的文化气息和艺术氛围，致力于四星级标准，秉承艺术主题概念：“酒店即艺术，酒店可以欣赏艺术”。 我们将着力打造中国首座充满文化艺术气息的概念酒店，将服务作为艺术与酒店之间链接与融合的桥梁。不仅为到访嘉宾和艺术家提供舒适的下榻之所，也给旅游观光的游客提供休闲之外的艺术空间。</p>
                <p>Relais Residenza DArte, next to the main building of the art museum, has 2 main buildings, and is integrated with the art gallery. It is rich in modern, simple and heavy artistic style. The hotel has well designed guest rooms and Suites, and the rooms are well equipped. The hotel is full of strong cultural atmosphere and artistic atmosphere. It is committed to the four star standard, adhering to the theme of Art: "hotel is art, and hotel can enjoy art."". We will strive to build China's first cultural and artistic concept hotel, the service as a link between art and hotel and integration of the bridge. Not only for guests and artists to provide a comfortable place to stay, but also to provide visitors with leisure outside of the art space.</p>
                <p class="articalImgP">
                    <img class="articalImg" alt="艺术酒店1" src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/about_us/facilities/art_hotel/0.jpg"><br>
                    <img class="articalImg" alt="艺术酒店2" src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/about_us/facilities/art_hotel/1.jpg"><br>
                    <img class="articalImg" alt="艺术酒店3" src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/about_us/facilities/art_hotel/2.jpg"><br>
                    <img class="articalImg" alt="艺术酒店4" src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/about_us/facilities/art_hotel/3.jpg">
                </p>
            `,
        }
    },
}
</script>

<style lang="scss">
// @import "../../../../public/scss/basic.scss";
@import "../../../../public/scss/common.scss";

</style>
