<template>
    <section class="works">
        <h2>作品  <span>WORKS</span></h2>
        <works-cata :cata-index="nCataIndex" :catas_c="catas_c"
                    @switchcata="switchworks"></works-cata>
        <works-list :displayed-items="displayedItems"></works-list>
        <list-pagination :page-num="pageNum" :per-page="nPerPage"
                :list="works[catas[nCataIndex]]"
                :pageIndex="nPageIndex" @switchpagination="switchpage">
        </list-pagination>

    </section>
</template>

<script>

import {fetchJSON} from '../myUtil.js';
import worksCata from './works-cata.vue';
import worksList from './works-list.vue';
import listPagination from './list-pagination.vue';

export default {
    // works如果是平对象，则key为分类名，还需要传入nameMap对象，是分类名英文到中文的映射
    // works如果是数组，则表示只有一类
    // aNameMap格式如下
    // [
    //     ["jiaomo" , "shuimo", "xiaopin", "xiesheng"],
    //     ["焦墨", "水墨", "小品", "写生"],
    // ]
    // 拼音或英文要和下面的中文一一对应。显示的顺序按照数组中的顺序
    // nPerPage是每页显示的数量。某类别作品超过该数量会自动分页
    props: ['works', 'nPerPage', 'aNameMap'],
    data () {
        return {
            list: [
            ],
            works: null,
            catas: [],
            catas_c: [],
            // catas: ["jiaomo" , "shuimo", "xiaopin", "xiesheng"],
            // catas_c: ["焦墨", "水墨", "小品", "写生"],
            nCataIndex: 0,
            // nPerPage: 6, // 每页显示6个
            nPageIndex : 0, // 当前页码
        }
    },
    components: {
        worksCata,
        worksList,
        listPagination,
    },
    computed: {
        catas_c(){
            if(nameMap){
                Object.keys(works);
            }
            else{
                return null;
            }
        },
        displayedItems(){ // 当前显示出来的作品
            if(works){
                return this.works[this.catas[this.nCataIndex]].
                        slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage);
            }
        },
        pageNum(){ // 当前类别的作品数量，则当前设定的nPerPage下，要分为几页
            let list = this.works[this.catas[this.nCataIndex]];
            if(list){
                return Math.ceil((list.length)/this.nPerPage);
            }
            else{
                return 1;
            }
        },
    },
    methods: {
        switchpage(index){
            this.nPageIndex = index;
        },
        switchworks(index){
            // 更新类别编号，将列表名称列表的当前项变成不同颜色
            this.nCataIndex = index;
            // 切换类别后，将页码变成第一个的，否则，例如，如果切换前页码是2，而一个类别只有一页没有第二页，则该类别将不会显示。
            this.nPageIndex = 0;
        },
    },
    mounted(){
        fetchJSON.call(this, 'CZKworks', 'works');
    },
}
</script>

<style scoped lang="scss">
@import "../basic.scss";
@import "../common.scss";

.works{
    @include works_class;
}

</style>
