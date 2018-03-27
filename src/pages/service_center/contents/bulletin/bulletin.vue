<template>
    <section class="bulletin">
        <h2>公告  <span>BULLETIN</span></h2>
        <div v-show="!bDisplayDetailArticle">
            <ul>
                <!-- <bulletin-item v-for="item in displayedItem" :li-data="item"></bulletin-item> -->
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
        <!-- <uploaded-article id="vUploaded_article" v-show="bDisplayDetailArticle" :content-html="detailArticleHTML"></uploaded-article> -->
        <article id="vUploaded_article" v-show="bDisplayDetailArticle">
            <div v-html="detailArticleHTML"></div>
            <i class="close_article" @click="closeDetailArticle">关闭文章</i>
        </article>
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

            detailArticleHTML: "",
            bDisplayDetailArticle: false,
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
        displayDetailArticle(articleID){
            if(articleID){ // 列表项图片绑定了详情文章ID才显示文章
                let parent = this.$parent;
                parent.bDisplayDetailArticle = true;
                let detailArticleHTML = parent.detailArticleHTML;
                if(!detailArticleHTML){ // 如果没有文章数据数据。一般都是没有的，因为不会预加载，且上一篇详情隐藏后也会清除数据
                    parent.detailArticleHTML = "<p>正在加载……</p>"
                    let sURL = "ajax.php?item=article_" + articleID,
                        fnSuccessCallback = function(res){
                            parent.detailArticleHTML = JSON.parse(res);
                        },
                        fnFailCallback = function(status){
                            console.error("加载详情页数据失败");
                        };
                    AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
                }
            }
        },
        closeDetailArticle(){
            this.$parent.detailArticleHTML = "";
            this.$parent.bDisplayDetailArticle = false;
        },
        stripHTMLTag(str){
            return stripHTMLTag(str);
        },
    },
    created(){
        // 接收侧目录组件发送的点击通知，关闭详情文章
        // Bus.$on('clickCataToCloseDetailArticle', (indexes)=>{
        //     this.detailArticleHTML = "";
        //     this.bDisplayDetailArticle = false;
        // });
    },
    mounted(){
        fetchJSON.call(this, 'bulletins', 'list');
    },
}
</script>

<style scoped lang="scss">
@import "../../../../public/scss/basic.scss";
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
