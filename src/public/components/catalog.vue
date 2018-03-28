<!-- 首页以外其他页面左侧的目录 -->
<template>
    <div class="catalog" v-if="catas.length"> <!-- catas.length不为0说明已经从父组件拿到数据 -->
        <h2>
            {{titles.ch}}<br />
            <span>{{titles.en}}</span>
        </h2>
        <div v-for="(cata,indexL1) in catas" v-if="cata.display">
            <!-- active_page使当前一级标题高亮 -->
            <h3 :title="cata.title_c"
                    @click="clickL1Title(indexL1)">
                    <router-link :to="'/'+cata.title_e.toLowerCase()"
                        :class="{active_page: indexL1===currentLevel1Index}">
                        {{cata.title_c}}<br />
                        <span>{{cata.title_e}}</span>
                    </router-link>
                    <!-- <router-link :to="'/'+cata.title_e.toLowerCase()"
                        :class="{active_page: cata.title_c===currentLevel1Title}">
                        {{cata.title_c}}<br />
                        <span>{{cata.title_e}}</span>
                    </router-link> -->
            </h3>
            <ul>
                <!-- active_page使当前二级标题高亮 -->
                <li v-for='(item,indexL2) in cata.cata_c'
                    @click="clickL2Title(indexL1, indexL2)">
                    <router-link
                        :class="{active_page: indexL2===currentLevel2Index
                                                && indexL1===currentLevel1Index}"
                        :to="'/'+cata.title_e.toLowerCase()+'/'
                                        +cata.cata_e[indexL2].toLowerCase()">
                        {{item}}
                    </router-link>
                    <!-- <router-link  :class="{active_page: item===currentLevel2Title}"
                        :to="'/'+cata.title_e.toLowerCase()+'/'+cata.cata_e[indexL2].toLowerCase()">
                        {{item}}
                    </router-link> -->
                    <br />
                    <span>{{cata.cata_e[indexL2]}}</span>
                </li>
            </ul>
        </div>
        <p class="breadcrumb">
            <a href="index.html">🏠</a>
             <span v-cloak> ＞ {{currentLevel1Title}}</span>
             <span v-show="currentLevel2Title"> ＞ {{currentLevel2Title}}</span>
         </p>
    </div>
</template>

<script>

export default {
    props: {
        titles: {
            type: Object,
            required: true,
            default: function () {
                return {
                    ch:'',
                    en: '',
                };
            },
        },
        catas: {
            type: Array,
            required: true,
            default: [],
        }
    },
    data(){
        return {
            // 当前状态下的一级标题和二级标题名
            // currentLevel1Title: "",
            // currentLevel2Title: "",

            // 当前状态下的一级标题序号和二级标题名序号
            currentLevel1Index: 0,
            currentLevel2Index: null, // 在点击没有二级标题的一级标题是，这个值为null
        };
    },
    computed: {
        // currentLevel1Title和currentLevel2Title用于面包屑菜单
        currentLevel1Title(){
            if(this.catas.length){ // 已经加载了数据
                return this.catas[this.currentLevel1Index].title_c;
            }
            return '';
        },
        currentLevel2Title(){
            if(this.catas.length && this.currentLevel2Index!==null){ // 已经加载了数据且有二级分类
                return this.catas[this.currentLevel1Index]
                                    .cata_c[this.currentLevel2Index];
            }
            return '';
        },
    },
    methods: {
        // 点击一级标题
        // 参数为一级标题的index
        /**
        * 点击一级标题
        * @param  {Integer}  L1Index  该一级标题在其兄弟标题中的index
        */
        clickL1Title(L1Index){
            this.highlightTitle(L1Index, null);
        },

        /**
         * 点击二级标题
         * @param  {Integer}  L1Index  该二级标题所在的一级标题在其兄弟标题中的index
         * @param  {Integer}  L2Index  该二级标题在其兄弟标题中的index
         */
        clickL2Title(L1Index, L2Index){
            this.highlightTitle(L1Index, L2Index);
        },

        /**
         * 当前分类标题高亮
         * 参数参考 clickL2Title 和 clickL1Title 方法
         */
        highlightTitle(L1Index, L2Index){
            this.currentLevel1Index = L1Index;
            this.currentLevel2Index = L2Index;

            // 更新当前数据记录的被点击的标题 如果此标题等于被单击的li的标题，该li通过class变色
            // this.currentLevel1Title = this.catas[L1Index].title_c;
            // this.currentLevel2Title = this.catas[L1Index].cata_c[L2Index];

        }
    },
    watch: {
        catas(){ // 获取到catas数据后高亮当前的标题
            // if( location.hash ){ // 带hash进入页面
                // let nIDUnderline = location.hash.indexOf("_"),
                let sHashTitle = this.$route.path.slice(1),
                    // sHashTitle = location.hash.slice(2),
                    catas = this.catas;

                for(let i=0; i<catas.length; i++){
                    if( sHashTitle === catas[i].title_e.toLowerCase() ){ // hash对应一级标题
                        // this.currentLevel1Title = catas[i].title_c;
                        // this.currentLevel2Title = this.catas[i].cata_c[0];
                        this.currentLevel1Index = i;
                        this.currentLevel2Index = null;
                        break;
                    }
                    else{ // hash对应二级标题或什么也不对应
                        let aLevel2TitleE = catas[i].cata_e;
                        for(let j=0; j<aLevel2TitleE.length; j++){
                            let nSlashIndex = sHashTitle.indexOf('/'); // 还有slash说明是二级标题
                            if( (nSlashIndex!==-1)
                                    && (sHashTitle.slice(nSlashIndex+1)
                                            ===aLevel2TitleE[j].toLowerCase())){ // hash对应二级标题
                                // this.currentLevel1Title = this.catas[i].title_c;
                                // this.currentLevel2Title = this.catas[i].cata_c[j];
                                this.currentLevel1Index = i;
                                this.currentLevel2Index = j;
                                break;
                            }
                        }
                    }
                }
            // }
            // else{ // 初始化目录，将目录中第一个标题加上激活的class
            //     this.currentLevel1Title = this.catas[0].title_c;
            //     this.currentLevel2Title = this.catas[0].cata_c[0];
            //     this.currentLevel1Index = i;
            //     this.currentLevel2Index = j;
            // }
        },
    },
    // updated(){
    //     let subTitle = this.currentLevel2Title;
    //     // hash显示为 一级或二级标题 加 _文章id。 如果当前不是文章详情，则只显示标题
    //     // 有二级标题则显示二级标题，否则一级标题。
    //     // 如果都没有，说明是直接从详情页刷新，则hash不变
    //     let nIDUnderline = location.hash.indexOf("_"),
    //         sIDStr = ( nIDUnderline>-1) ? location.hash.slice(nIDUnderline) : "";
    //
    //     let hashTitle = subTitle ? subTitle : this.currentLevel1Title
    //     // if(hashTitle){ // 这个hash可能涉及详情文章
    //     //     location.hash = hashTitle + sIDStr;
    //     // }
    // },
}
</script>

<style scoped lang="scss">

@import '../scss/common.scss';

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
        margin-top: 22px;
        .active_page{
            color: $STANDARD_COLOR;
        }
        a{
            color: $BASIC_BLACK;
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
