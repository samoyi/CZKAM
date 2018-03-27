<template>
    <div id="wrapper">
        <common-header></common-header>
        <section id="CuiZhenkuan-middle" class="common-middle">
            <common-cata :titles="cataData.title"
                    :catas="cataData.catas"></common-cata>
            <section class="content">
                <section>
                    <router-view></router-view>

                    <!-- <section class="article cuizhenkuan">
                        <h2>崔振宽简介  <span>CUI ZHENKUAN</span></h2>
                        <p>崔振宽，陕西长安人，1935年生于西安，1960年毕业于西安美术学院国画系，现为陕西省山水画研究会名誉主席、中国国家画院研究员、中国美术家协会会 员、陕西省美术家协会顾问、西安美术学院客座教授、陕西国画院画家、国家一级美术师。</p>
                        <p>Cui Zhenkuan, Shaanxi Changan people, born in Xi'an in 1935, 1960 graduated from the Chinese Painting Department of Xi'an Academy of Fine Arts, Shaanxi province is now the landscape painting Research Association honorary chairman, China researcher, member of National Academy of China Artists Association of Shaanxi Artists Association consultant, adjunct professor at the Xi'an Academy of Fine Arts, Shaanxi Academy of traditional Chinese painting painters, national artist.</p>
                        <br />
                        <p class="articalImgP"><img src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/CuiZhenkuan/cuizhenkuan/0.jpg" class="articalImg" alt="崔振宽照片" /></p>
                        <br />
                        <p>作品参加第六届、第八届、第九届“全国美术作品展”，“百年中国画展”，首届和第二届“当代中国山水画·油画风景展”（获艺术奖），“中国当代艺术欧洲巡 回展”，“向祖国汇报——新中国美术60年展”，“中国美术60年·纪念改革开放30年中国艺术大展”，“联合国世界公务员日中国艺术大展”等。1994 年在中国美术馆举办个展，2002年先后在中国美术馆、上海美术馆、广东美术馆、成都现代艺术馆、江苏省美术馆举办“气象苍茫·崔振宽山水艺术巡回展”。 2005年举办“从艺五十年·崔振宽山水艺术回顾展”，中央电视台《东方之子》栏目对其艺术成就进行专题报道。2007年获“吴作人国际美术基金会造型艺 术奖提名奖”。出版有不同版本的《崔振宽画集》多种，数十幅作品被中国美术馆、人民大会堂、上海美术馆等学术机构收藏。2015年在中国美术馆举办“苍山 无言——崔振宽画展”。并被列为文化部文化市场发展中心研究课题山水卷核心画家及《中国画当代艺术30年》课题重点研究艺术家。</p>
                        <p>Works, eighth, to attend the sixth session of the Ninth National Art Exhibition "," China Exhibition "hundred years, the first and the second" Chinese contemporary landscape painting &amp; Oil Painting Exhibition "(Art Award)," Chinese European contemporary art exhibition "," reporting to the motherland -- the new 60 Chinese Art Exhibition "" 60 years, Chinese art Memorial - China Art Exhibition "30 years of reform and opening up," the United Nations World Public Service Day Chinese Art Exhibition ", etc.. The 1994 exhibition held in China Art Museum, 2002 at the Chinese Art Museum, Shanghai Art Museum, Guangdong Art Museum, Chengdu Museum of modern art, Jiangsu Art Museum held the "boundless Cui Zhenkuan meteorological landscape art exhibition tour". Held in 2005 "art for fifty years Cui Zhenkuan landscape art exhibition", CCTV "dongfangzhizi" column reports on its artistic achievement. In 2007, he was nominated for the prize of plastic arts foundation of the international fine arts foundation". The publication has a different version of the "Cui Zhenkuan album" variety, dozens of works by China Art Museum, Shanghai Art Museum, the Great Hall of the people of other academic institutions. In 2015, "silent Cangshan - Cui Zhenkuan Exhibition" was held at the Chinese art museum". He has been listed as the research center of the Ministry of culture, cultural market development, the core artist of landscape painting and the 30 year of Chinese painting contemporary art.
                        </p>
                        <br />
                        <p class="articalImgP"><img src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/CuiZhenkuan/cuizhenkuan/1.jpg" class="articalImg" alt="崔振宽著作" /></p>
                    </section> -->
                </section>
                <!-- <section>
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
                        <chronology-pic v-for="item in srcs" :src="item"></chronology-pic>
                    </section>
                </section>
                <section>
                    <section class="works">
                        <h2>作品  <span>WORKS</span></h2>
                        <ul class="works_cata">
                            <works-cata v-for="(item,index) in catas_c" :cata_c="item" :this-index="index" :cata-index="nCataIndex" @switchcata="switchworks"></works-cata>
                        </ul>
                        <ul class="works_list">
                            <works-item v-for="item in displayedItem" :works-data="item"></works-item>
                        </ul>
                        <div class="pagination_wrapper">
                            <ul v-if="list.length>nPerPage" class="pagination">
                                <list-pagination v-for="n in pageNum" :page-index="n-1" :class="{ currentLi:nPageIndex===n-1}" @switchpagination="switchpage"></list-pagination>
                            </ul>
                        </div>
                    </section>
                </section>
                <section>
                    <section class="treatise">
                        <h2>艺术论著  <span>TREATISE</span></h2>
                        <ul class="treatise_list">
                            <treatise-item v-for="item in displayedItem" :treatise-data="item"></treatise-item>
                        </ul>
                        <div class="pagination_wrapper">
                            <ul v-if="list.length>nPerPage" class="pagination">
                                <list-pagination v-for="n in pageNum" :page-index="n-1" :class="{ currentLi:nPageIndex===n-1}" @switchpagination="switchpage"></list-pagination>
                            </ul>
                        </div>
                    </section>
                </section>
                <section>
                    <section class="activity">
                        <h2>艺术活动  <span>ACTIVITY</span></h2>
                        <div>
                            <ul class="activity_cata">
                                <exhibition-cata v-for="(item,index) in catas" :cata="item" :this-index="index" :cata-index="nCataIndex" @switchcata="switchexhibitions"></exhibition-cata>
                            </ul>
                            <ul class="activity_list">
                                <exhibition-item v-for="item in displayedItem" :exhibition-data="item"></exhibition-item>
                            </ul>
                            <div class="pagination_wrapper">
                                <ul v-if="list.length>nPerPage" class="pagination">
                                    <list-pagination v-for="n in pageNum" :page-index="n-1" :class="{ currentLi:nPageIndex===n-1}" @switchpagination="switchpage"></list-pagination>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
                <section>
                    <section class="video">
                        <h2>艺术影像  <span>VIDEO</span></h2>
                        <video-template v-for="(item, index) in srcs" :src="item" :title="titles[index]" :poster="posters[index]"></video-template>
                    </section>
                </section> -->
            </section>
            <div style="clear:both;"></div>
        </section>

        <common-footer></common-footer>
    </div>
</template>

<script>

import {fetchJSON} from '../../public/js/myUtil.js';
import commonHeader from '../../public/components/common-header.vue';
import commonCata from '../../public/components/catalog.vue';
import commonFooter from '../../public/components/common-footer.vue';

export default {
    data () {
        return {
            indexData: { // 首页的所有数据
                news: [],
                public: [],
                bulletin: [],
            },
            cataData: { // 目录的标题和列表
                title: [],
                catas: [],
            },
        }
    },
    components: {
        commonHeader,
        commonCata,
        commonFooter,
    },
    methods: {
        // displayContent(L1Index, L2Index){
        //     let catas = document.querySelectorAll(".common-middle .content>section"), // 根据一级标题的版块分类
        //     catas_len = catas.length;
        //     for(let i=0; i<catas_len; i++){ // 循环所有大类
        //         let items = catas[i].children, // 当前一级标题分类下的所有具体内容版块
        //             items_len = items.length;
        //
        //         /*
        //          * 具体的例子是，公共教育进去后，点击艺术大讲堂（01）再点击公教活动（0）
        //          * 下面的这一段的错误之处在于，先点击01（第一大标题第二个小标题），01版块正常显示，
        //          * 然后点击0（第一个大标题），i===cataIndex 为真，则显示00，但此时正在显示的01并未隐藏。
        //          * 然后进行第二轮循环，第二轮循环中，i===cataIndex 仍然为真，再次显示00,
        //          * 01仍然没有隐藏。于是两个子版块的内容就同时出现了。
        //          */
        //         // for(let j=0; j<items_len; j++ ){
        //         //     if( i===cataIndex ){ // 点击的是当前大类的一级标题或二级标题
        //         //         if(j===index ){ // 点击二级标题
        //         //             items[j].style.display = "block";
        //         //             console.log("222");
        //         //         }else if(index===undefined){ // 点击一级标题
        //         //             items[0].style.display = "block";
        //         //             console.log("111");
        //         //         }else{
        //         //             items[j].style.display = "none";
        //         //         }
        //         //     }
        //         //     else{
        //         //         items[j].style.display = "none";
        //         //     }
        //         // }
        //         /*
        //          * 改成这个之后，在01显示的状态下点击0，会首先隐藏00，虽然此时00本来就是隐藏的。
        //          * 然后在进行判断，00会显示出来。进行下一轮循环，仍然是首先隐藏01，此前正在显示
        //          * 的01就被隐藏了，之后再进行判断，会再次显示已经显示的00。
        //          */
        //
        //         for(let j=0; j<items_len; j++ ){ // 循环一个大类中的所有小类
        //             items[j].style.display = "none"; // 先把所有的小类版块都隐藏
        //             if( i===nLevel1Index ){ // 点击的是当前大类的一级标题或二级标题
        //
        //                 if(j===nLevel2Index ){ // 点击二级标题
        //                     items[j].style.display = "block";
        //                 }
        //                 else if(nLevel2Index===null){ // 点击一级标题
        //                     items[0].style.display = "block";
        //                 }
        //             }
        //         }
        //     }
        // },
    },
    mounted(){
        // 获取左侧目录数据
        fetchJSON.call(this, 'cata_cuizhenkuan', 'cataData');
    }
}
</script>

<!-- basic.scss设置的body样式因为要作用到组件外部的body，所以不能scoped -->
<style scoped lang="scss">
@import "../../public/scss/basic.scss";
@import "../../public/scss/common.scss";

// .common-middle{
//     width: $MIDDLE_WIDTH;
//     margin-left: auto; margin-right: auto;
//     padding-top: 105px;
//     box-sizing: border-box;
// }
</style>
