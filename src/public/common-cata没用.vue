<!-- 首页以外其他页面左侧的目录 -->
<template>catalog
    <div  id="catalog" class="catalog">
        <h2 v-text="title[0]"><br /><span v-text="title[1]"></span></h2>
        <p class="breadcrumb"><a href="index.html">🏠</a> ＞ <span v-text="title[0]"></span><span v-cloak> ＞ {{currentLevel1Title}}</span><span v-cloak> ＞ {{currentLevel2Title}}</span></p>
    </div>
    <div v-if="!cata[5]">
        <h3 v-bind:title="cata[0].title_c"
                :class="{active_page: cata[0].title_c===currentLevel1Title}"
                @click="clickTitle(cata[4])">{{cata[0].title_c}}<br />
                <span>{{cata[1].title_e}}</span>
        </h3>
        <ul>
            <li :class="{active_page: item===currentLevel2Title}"
                    @click="clickCata(cata[4], index)"
                    v-for='(item,index) in cata[2].cata_c'>{{item}}<br />
                    <span>{{cata[3].cata_e[index]}}</span>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    /**
    {Array}   cata  目录数组
    {String}  currentLevel1Title  当前一级标题名
    {String}  currentLevel2Title  当前二级标题名
    */
    props: ["cata", "currentLevel1Title", "currentLevel2Title"],

    data () {
        return {
        }
    },
    methods: {
        clickCata(cataIndex, index){ // 点击二级标题
            this.$emit( "display_content", cataIndex, index );
        },
        clickTitle(titleIndex){ // 点击一级标题
            this.$emit( "display_content", titleIndex, null );
        },
    },
}
</script>

<style scoped lang="scss">
@import "../../public/basic.scss";

.catalog{
    width: $MIDDLE_CATALOG_WIDTH; float: left;
    box-sizing: border-box; border-right: 1px solid $LINE_GRAY;
    position: relative;
    h2{
        font-size: 18px;
        font-weight: bold;
        color: $STANDARD_COLOR;
        span{
            font-size: 12px;
        }
    }
    >div{
        color: $BASIC_BLACK;
        margin-top: 22px;
        .active_page{
            color: $STANDARD_COLOR;
        }
        h3{
            font-size:14px;
            span{
                font-size:10px;
                color: $BASIC_GRAY;
            }
            cursor: pointer;
        }
        ul{
            margin-top: 18px;
            li{
                font-size:12px;
                box-sizing: border-box;
                padding-left: 1em;
                line-height: 16px;
                margin-top: 8px;
                cursor: pointer;
                span{
                    font-size:10px;
                    color: $BASIC_GRAY;
                }
            }
        }
    }
    .breadcrumb{
        color: $BASIC_GRAY;
        font-size: 10px;
        position: absolute;
        top: -40px;
        white-space:nowrap;
    }
}
</style>
