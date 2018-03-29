<!-- news模块的条目列表
该模块和works-list模块类似 -->
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
    props: {
        displayedItems: {
            type: Array,
            default: function (){
                return [];
            },
        },
    },
    data () {
        return {};
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
        }
    }
}
</style>
