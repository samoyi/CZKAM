<!-- 【服务中心——公告】组件
和works组件有些类似 -->
<template>
    <section class="bulletin">
        <h2>公告  <span>BULLETIN</span></h2>
        <div>
            <ul>
                <li v-for="item in displayedItem">
                    <h3 slot="title">{{item.title}}</h3>
                    <p slot="detail">{{stripHTMLTag(item.detail)}}</p>
                    <span slot="remark">{{item.date}}</span>
                </li>
            </ul>
            <list-pagination :page-num="pageNum" :per-page="nPerPage"
                    :pageIndex="nPageIndex" @switchpagination="switchpage">
            </list-pagination>
        </div>
    </section>
</template>

<script>

import {fetchJSON, stripHTMLTag} from '../../../../public/js/myUtil.js';
import listPagination from '../../../../public/components/list-pagination.vue';

export default {
    data () {
        return {
            list: [],
            nPerPage: 8, // 每页显示10个
            nPageIndex : 0, // 当前页码
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
        stripHTMLTag(str){
            return stripHTMLTag(str);
        },
    },
    mounted(){
        fetchJSON.call(this, 'bulletins', 'list');
    },
}
</script>

<style scoped lang="scss">

@import "../../../../public/scss/common.scss";

.bulletin{
    >div{
        >ul{
            position: relative; top: 30px;
            li{
                font-size: 12px;
                color: $BASIC_GRAY;
                line-height: 22px;
                margin-bottom: 32px;
                position: relative;
                h3{
                    font-size: 14px;
                    color: $BASIC_BLACK;
                }
                P{
                    margin-top: 6px;
                }
                span{
                    position: absolute;
                    top: 0; right: 0;
                }
            }
        }
    }
}
</style>
