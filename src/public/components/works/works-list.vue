<!-- works模块的条目列表
该模块和news-list模块类似 -->
<template>
    <ul class="works_list">
        <li v-for="item in displayedItems">
            <!-- 显示缩略图，点击缩略图打开大图 -->
            <a :href="item[1]" target="_blank">
                <div class="thumbnail" :style="getBgUrl(item[0])"></div>
            </a>
            <!-- 图片信息都是可有可无的 -->
            <div class="info">
                <p v-if="item[2]" :title="item[2]"><span>作品名称：</span>{{item[2]}}</p>
                <p v-if="item[3]"><span>尺寸：</span>{{item[3]}}</p>
                <p v-if="item[4]"><span>时间：</span>{{item[4]}}</p>
                <p v-if="item[5]"><span>作者：</span>{{item[5]}}</p>
                <p v-if="item[6]"><span>类型：</span>{{item[6]}}</p>
            </div>
            <div style="clear:both;"></div>
        </li>
    </ul>
</template>

<script>

export default {
    props: {
        displayedItems: {
            type: Array,
            default: function (){
                return [];
            },
        },
    },
    data () {
        return {}
    },
    methods: {
        // news组件的图片是img形式，works这里因为要给每个作品图一个灰色衬底，所以是
        // 使用背景图的形式
        getBgUrl(url){
            return {
                backgroundImage: "url(" + url + ")",
            };
        },
    },
}
</script>

<style scoped lang="scss">

@import '../../scss/common.scss';

.works_list{
    font-size: 12px;
    >li{
        margin-top: 24px;
        .thumbnail{
            float: left;
            width: 355px; height: 200px;
            background:{
                color: $BACKGROUND_GRAY;
                repeat: no-repeat;
                size: contain;
                position: center;
            }
            cursor: pointer;
        }
        .info{
            float: left;
            margin-left: 34px;
            width: 355px; overflow: hidden;
            p{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                span{
                    color: $BASIC_GRAY;
                }
            }
        }
    }
}
</style>
