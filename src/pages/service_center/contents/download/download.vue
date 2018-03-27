<template>
    <section class="download">
        <h2>下载专区  <span>DOWNLOAD</span></h2>
        <ul>
            <li v-for="item in displayedItem">
                <span class="title" slot="title">{{item.name}}</span>
                <a class="dl_icon" :href="item.url" target="_self">下载<i></i></a>
            </li>
        </ul>
        <list-pagination :page-num="pageNum" :per-page="nPerPage"
                :pageIndex="nPageIndex" @switchpagination="switchpage">
        </list-pagination>
    </section>
</template>

<script>

import {fetchJSON} from '../../../../public/js/myUtil.js';
import listPagination from '../../../../public/components/list-pagination.vue';

export default {
    data () {
        return {
            list: [],
            nPerPage: 8,
            nPageIndex : 0,
        }
    },
    components: {
        listPagination,
    },
    computed: {
        displayedItem(){
            return this.list.slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage);
        },
        pageNum(){
            return Math.ceil((this.list.length)/this.nPerPage);
        },
    },
    methods: {
        switchpage(index){
            this.nPageIndex = index;
        },
    },
    mounted(){
        fetchJSON.call(this, 'download', 'list');
    },
}
</script>

<style scoped lang="scss">
@import "../../../../public/scss/basic.scss";
@import "../../../../public/scss/common.scss";

.download{
    >ul{
        position: relative; top: 30px;
        li{
            font-size: 12px;
            color: $BASIC_GRAY;
            margin-bottom: 32px;
            position: relative;
            height: 16px; background-color: #f4f4f4;
            width: 450px;
            height: 30px; line-height:30px;
            box-sizing: border-box; padding: 0 12px;
            span{
                display: inline-block;
            }
            .title{
                font-size: 14px;
                color: $BASIC_BLACK;
                margin-left: 30px;
                width: 230px;height: 100%;
                white-space:nowrap; overflow:hidden; text-overflow: ellipsis;
            }
            .time{
                float: left;
            }
            .dl_icon{
                color: $STANDARD_COLOR;
                float: right;
                width: 50px;
                position: relative;
                i{
                    width: 16px; height: 12px; // 虽然图标宽14px，但写14px显示不全
                    position: absolute;
                    right: 0; top: 9px;
                    background-image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/sprite.png");
                    background-position: -1738px -81px;
                }
            }
        }
    }
}
</style>
