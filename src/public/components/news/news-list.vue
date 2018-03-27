<template>
    <ul class="news_list">
        <!-- <exhibition-item v-for="item in displayedItem"
                :exhibition-data="exhibitionItemDataObjToArr(item)">
        </exhibition-item> -->
        <li v-for="item in displayedItems" >
            <router-link :to="'/detail/'+item.id">
                <img class="cover" :src="item.pic" :alt="item.name" />
            </router-link>
            <!-- <img class="cover" :src="item.pic" :alt="item.name"
                            @click="displayDetailArticle(item.id)" /> -->
            <div class="info">
                <h3 :title="item.name">
                    <span>{{item.tag}}</span>
                    <span v-if="item.tag"> | </span>
                    {{item.name}}
                </h3>
                <p class="date">{{item.date}}</p>
                <p class="summary" :title="item.summary">{{item.summary}}</p>
            </div>
            <div style="clear:both;"></div>
        </li>
    </ul>
</template>

<script>
// import {fetchArticle} from '../../js/myUtil.js';

export default {
    props: ["displayedItems"],
    data () {
        return {

        }
    },
    methods: {
        displayDetailArticle(articleID){
            // main.vue中bDisplayDetailArticle的值
            // let bDisplayDetailArticle = this.$root.$children[0].$data.bDisplayDetailArticle;
            // console.log(this.$root.$data);
            // console.log(this.$root.$data.bDisplayDetailArticle);
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
                    // let sURL = "ajax/detail.php?id=" + articleID + "&act=" + location.hash.slice(1),
                    //     fnSuccessCallback = function(res){
                    //         parent.detailArticleHTML = JSON.parse(res);
                    //     },
                    //     fnFailCallback = function(status){
                    //         console.error("加载详情页数据失败");
                    //     };
                    // AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
                    fetchArticle.call(this, articleID, parent);
                    console.log(location.hash);
                    // location.hash = location.hash + "_" + articleID;
                    let sNewHash = location.hash + "_" + articleID;
                    console.log(sNewHash);
                    location.hash = sNewHash;
                    console.log(location.hash);
                }
            }
        },
        // getUrl(url){
        //     return {
        //         backgroundImage: "url(" + url + ")",
        //     };
        // },
    },
}
</script>

<style scoped lang="scss">

@import '../../scss/basic.scss';
@import '../../scss/common.scss';

// .works_list{
//     >li{
//         margin-top: 24px;
//         .thumbnail{
//             float: left;
//             width: 355px; height: 200px;
//             background:{
//                 color: $BACKGROUND_GRAY;
//                 repeat: no-repeat;
//                 size: contain;
//                 position: center;
//             }
//             cursor: pointer;
//         }
//         .info{
//             float: left;
//             margin-left: 34px;
//             width: 355px; overflow: hidden;
//             span{
//                 color: $BASIC_GRAY;
//             }
//         }
//     }
// }
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
            .more{
                color: $STANDARD_COLOR;
                font-size: 10px;
                display: inline-block; margin-top: 16px;
            }
        }
    }
}
</style>
