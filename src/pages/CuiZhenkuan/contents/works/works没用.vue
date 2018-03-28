<template>
    <section class="works">
        <h2>作品  <span>WORKS</span></h2>
        <!-- <ul class="works_cata">
            <works-cata v-for="(item,index) in catas_c" :cata_c="item"
                    :this-index="index" :cata-index="nCataIndex"
                    @switchcata="switchworks">
            </works-cata>
        </ul> -->
        <works-cata :cata-index="nCataIndex" :catas_ch="catas_c"
                    @switchcata="switchworks"></works-cata>
        <works-list :displayed-items="displayedItems"></works-list>
        <!-- <div class="pagination_wrapper">
            <ul v-if="list.length>nPerPage" class="pagination">
                <list-pagination v-for="n in pageNum" :page-index="n-1"
                        :class="{ currentLi:nPageIndex===n-1}"
                        @switchpagination="switchpage">
                </list-pagination>
            </ul>
        </div> -->
        <list-pagination :page-num="pageNum" :per-page="nPerPage"
                :list="lists[catas[nCataIndex]]"
                :pageIndex="nPageIndex" @switchpagination="switchpage">
        </list-pagination>
        <!-- <div class="pagination_wrapper">
            <ul v-if="list.length>nPerPage" class="pagination">
                <list-pagination v-for="n in pageNum" :page-index="n-1"
                        :class="{ currentLi:nPageIndex===n-1}"
                        @switchpagination="switchpage">
                </list-pagination>
            </ul>
        </div> -->
    </section>
</template>

<script>

import {fetchJSON} from '../../../../public/js/myUtil.js';
import worksCata from '../../../../public/components/works/works-cata.vue';
import worksList from '../../../../public/components/works/works-list.vue';
import listPagination from '../../../../public/components/list-pagination.vue';

export default {
    data () {
        return {
            list: [
            ],
            lists: {},
            catas: ["jiaomo" , "shuimo", "xiaopin", "xiesheng"],
            catas_c: ["焦墨", "水墨", "小品", "写生"],
            nCataIndex: 0,
            nPerPage: 6, // 每页显示6个
            nPageIndex : 0, // 当前页码
        }
    },
    components: {
        worksCata,
        worksList,
        listPagination,
    },
    computed: {
        displayedItems(){ // 当前显示出来的作品
            // console.log(this.list.slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage));
            if(this.lists.jiaomo){
                return this.lists[this.catas[this.nCataIndex]].slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage);
            }
        },
        pageNum(){ // 当前类别的作品数量，则当前设定的nPerPage下，要分为几页
            let list = this.lists[this.catas[this.nCataIndex]];
            if(list){
                return Math.ceil((list.length)/this.nPerPage);
            }
            else{
                return 1;
            }
        },
        // firstWorks(){
        //     return this.lists.jiaomo;
        // },lists
    },
    methods: {
        switchpage(index){
            this.nPageIndex = index;
        },
        switchworks(index){
            // this.list = this.lists[this.catas[index]];
            // 更新类别编号，将列表名称列表的当前项变成不同颜色
            this.nCataIndex = index;
            // 切换类别后，将页码变成第一个的，否则，例如，如果切换前页码是2，而一个类别只有一页没有第二页，则该类别将不会显示。
            this.nPageIndex = 0;
        },
    },
    mounted(){
        fetchJSON.call(this, 'CZKworks', 'lists');
    },
}
</script>

<style scoped lang="scss">

@import "../../../../public/scss/common.scss";

.works{
    @include works_class;
}

</style>
