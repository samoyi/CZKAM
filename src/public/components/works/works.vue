<template>
    <section class="works">
        <h2>{{title}}</h2>
        <works-cata :cata-index="nCataIndex" :catas_ch="catas_ch"
                                @switchcata="switchworks"></works-cata>
        <works-list :displayed-items="displayedItems"></works-list>
        <list-pagination :page-num="pageNum" :per-page="nPerPage"
                :pageIndex="nPageIndex" @switchpagination="switchpage">
        </list-pagination>
    </section>
</template>
<!-- :list="works[catas_en[nCataIndex]]" -->
<script>

import worksCata from './works-cata.vue';
import worksList from './works-list.vue';
import listPagination from '../list-pagination.vue';

export default {
    // works如果是平对象，则key为分类名，还需要传入nameMap对象，是分类名英文或拼音到
    // 中文的映射。英文是数据中的键名，中文是显示到页面上的。
    // works如果是数组，则表示只有一类
    // nameMap格式如下：
    // {
    //     "en": ["jiaomo" , "shuimo", "xiaopin", "xiesheng"],
    //     "ch": ["焦墨", "水墨", "小品", "写生"]
    // }
    // 拼音或英文要和下面的中文一一对应。显示的顺序按照数组中的顺序
    // nPerPage是每页显示的数量。某类别作品超过该数量会自动分页
    props: {
        works: {
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
            list: [
            ],
            // catas_en: null,
            // catas_ch: null,
            // catas: ["jiaomo" , "shuimo", "xiaopin", "xiesheng"],
            // catas_c: ["焦墨", "水墨", "小品", "写生"],
            nCataIndex: 0,
            // nPerPage: 6, // 每页显示6个
            nPageIndex : 0, // 当前页码
        };
    },
    components: {
        worksCata,
        worksList,
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
            if(this.works){
                if(Array.isArray(this.works)){
                    return this.works.slice(this.nPageIndex*this.nPerPage,
                                            (this.nPageIndex+1)*this.nPerPage);
                }
                else{
                    return this.works[this.catas_en[this.nCataIndex]].
                                slice(this.nPageIndex*this.nPerPage
                                        , (this.nPageIndex+1)*this.nPerPage);
                }
            }
        },
        // 当前类别的作品数量要分为几页。根据当前类别的作品数量和nPerPage决定
        pageNum(){
            if(this.works){ // 数据已加载
                let list = [];
                if(this.catas_en){ // 不止一个类别
                    list = this.works[this.catas_en[this.nCataIndex]];
                }
                else{
                    list = this.works;
                }
                console.log(list.length)
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
    mounted(){
        // fetchJSON.call(this, 'CZKworks', 'works');
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
