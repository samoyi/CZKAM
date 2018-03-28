<template>
    <ul class="news_list">
        <li v-for="item in displayedItems" >
            <router-link :to="'/detail/'+item.id">
                <img class="cover" :src="item.pic" :alt="item.name" />
                <div class="info">
                    <h3 :title="item.name">
                        <span>{{item.tag}}</span>
                        <span v-if="item.tag"> | </span>
                        {{item.name}}
                    </h3>
                    <p class="date">{{item.date}}</p>
                    <p class="summary" :title="item.summary">{{item.summary}}</p>
                </div>
            </router-link>
            <div style="clear:both;"></div>
        </li>
    </ul>
</template>

<script>

export default {
    props: ["displayedItems"],
    data () {
        return {

        }
    },
    methods: {
        displayDetailArticle(articleID){
            // main.vue中bDisplayDetailArticle的值
            if(articleID){ // 列表项图片绑定了详情文章ID才显示文章
                // console.log(this.$root.$children[0].$data.bDisplayDetailArticle);
                // this.$root.$children[0].$data.bDisplayDetailArticle = true;
                // console.log(this.$root.$children[0].$data.bDisplayDetailArticle);
                // parent.bDisplayDetailArticle = true;
                let parent = this.$parent; // news.vue
                let detailArticleHTML = parent.detailArticleHTML;
                // 如果没有文章数据数据。正常都是没有的，因为不会预加载，且上一篇详情隐藏后也会清除数据
                // console.log(detailArticleHTML);
                if(!detailArticleHTML){
                    parent.detailArticleHTML = "<p>正在加载……</p>"
                    fetchArticle.call(this, articleID, parent);
                    // location.hash = location.hash + "_" + articleID;
                    let sNewHash = location.hash + "_" + articleID;
                    location.hash = sNewHash;
                }
            }
        },
    },
}
</script>

<style scoped lang="scss">
@import '../../scss/common.scss';

.news_list{
    >li{
        margin-top: 24px;
        .cover{
            float: left;
            width: 355px; height: 200px;
            cursor: pointer;
        }
        .info{
            width: 355px;
            overflow: hidden;
            float: left;
            margin-left: 34px;
            h3{
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;
                span{
                    color: $STANDARD_COLOR;
                }
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            p{
                font-size: 12px;
                color: $BASIC_GRAY;
            }
            .date{
                font-weight: bold;
            }
            .summary{
                margin-top: 16px;
                max-height: 100px;
                overflow: hidden;
            }
            // .more{
            //     display: inline-block; margin-top: 16px;
            // }
        }
    }
}
</style>
