<template>
    <section class="works">
        <h2>{{title}}</h2>
        <news-cata :cata-index="nCataIndex" :catas_ch="catas_ch"
                                @switchcata="switchworks"></news-cata>
        <news-list :displayed-items="displayedItems"></news-list>
        <list-pagination :page-num="pageNum" :per-page="nPerPage"
                :pageIndex="nPageIndex" @switchpagination="switchpage">
        </list-pagination>
    </section>
</template>
<script>

import newsCata from './news-cata.vue';
import newsList from './news-list.vue';
import listPagination from '../list-pagination.vue';

export default {
    // news如果是平对象，则key为分类名，还需要传入nameMap对象，是分类名英文或拼音到
    // 中文的映射。英文是数据中的键名，中文是显示到页面上的。
    // news如果是数组，则表示只有一类
    // nameMap格式如下：
    // {
    //     "en": ["jiaomo" , "shuimo", "xiaopin", "xiesheng"],
    //     "ch": ["焦墨", "水墨", "小品", "写生"]
    // }
    // 拼音或英文要和下面的中文一一对应。显示的顺序按照数组中的顺序
    // nPerPage是每页显示的数量。某类别作品超过该数量会自动分页
    props: {
        news: {
            type: [Object, Array],
        },
        title: {
            type: String,
        },
        nPerPage: {
            type: Number,
            default: 6,
        },
        nameMap: {
            type: Object,
        }
    },
    data () {
        return {
            list: [],
            nCataIndex: 0,
            nPageIndex : 0, // 当前页码
            detailArticleHTML: '',
        };
    },
    components: {
        newsCata,
        newsList,
        listPagination,
    },
    computed: {
        catas_ch(){
            return this.nameMap && this.nameMap.ch;
        },
        catas_en(){
            return this.nameMap && this.nameMap.en;
        },
        // 当前显示出来的作品。由当前类别作品的总数、每页显示数量和当前页码决定
        displayedItems(){
            if(this.news){
                if(Array.isArray(this.news)){
                    return this.news.slice(this.nPageIndex*this.nPerPage,
                                            (this.nPageIndex+1)*this.nPerPage);
                }
                else{
                    return this.news[this.catas_en[this.nCataIndex]].
                                slice(this.nPageIndex*this.nPerPage
                                        , (this.nPageIndex+1)*this.nPerPage);
                }
            }
        },
        // 当前类别的作品数量要分为几页。根据当前类别的作品数量和nPerPage决定
        pageNum(){
            if(this.news){ // 数据已加载
                let list = [];
                if(this.catas_en){ // 不止一个类别
                    list = this.news[this.catas_en[this.nCataIndex]];
                }
                else{
                    list = this.news;
                }
                return Math.ceil((list.length)/this.nPerPage);
            }
        },
    },
    methods: {
        switchpage(index){ // 翻页
            this.nPageIndex = index;
        },
        switchworks(index){ // 切换类别
            // 更新类别编号，将列表名称列表的当前项变成不同颜色
            this.nCataIndex = index;
            // 切换类别后，将页码变成第一个的，否则，例如，如果切换前页码是2，而一个类
            // 别只有一页没有第二页，则该类别将不会显示。
            this.nPageIndex = 0;
        },
    },
}
</script>

<style scoped lang="scss">
// @import "../../scss/basic.scss";
@import "../../scss/common.scss";

.works{
    // @include works_class;
    // font-size: 12px;
}

</style>
