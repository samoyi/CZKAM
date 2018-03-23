<template>
    <section class="works">
        <h2>作品  <span>WORKS</span></h2>
        <ul class="works_cata">
            <works-cata v-for="(item,index) in catas_c" :cata_c="item"
                    :this-index="index" :cata-index="nCataIndex"
                    @switchcata="switchworks">
            </works-cata>
        </ul>
        <ul class="works_list">
            <works-item v-for="item in displayedItem" :works-data="item">
            </works-item>
        </ul>
        <div class="pagination_wrapper">
            <ul v-if="list.length>nPerPage" class="pagination">
                <list-pagination v-for="n in pageNum" :page-index="n-1"
                        :class="{ currentLi:nPageIndex===n-1}"
                        @switchpagination="switchpage">
                </list-pagination>
            </ul>
        </div>
    </section>
</template>

<script>

import {fetchJSON} from '../../../../public/myUtil.js';
import worksCata from '../../../../public/works/works-cata.vue';
import worksItem from '../../../../public/works/works-item.vue';
import listPagination from '../../../../public/works/list-pagination.vue';

export default {
    data () {
        return {
            list: [
                ["", "", "", "", ""],
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
        worksItem,
        listPagination,
    },
    computed: {
        displayedItem(){
            // console.log(this.list.slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage));
            if(this.lists.jiaomo){
                console.log(this.lists)
                console.log(this.catas[0])
                return this.lists[this.catas[0]].slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage);
            }
        },
        pageNum(){
            return Math.ceil((this.list.length)/this.nPerPage);
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
            this.list = this.lists[this.catas[index]];
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
@import "../../../../public/basic.scss";
@import "../../../../public/common.scss";

.works{
    @include works_class;
}

</style>
