<!-- 首页以外其他页面左侧的目录 -->
<template>
    <div class="catalog">
        <h2 v-text="title[0]"><br /><span v-text="title[1]"></span></h2>
        <!-- <cata :current-level1-title="currentLevel1Title" :current-level2-title="currentLevel2Title" @display_content="display" v-for="cata in catas" :cata="cata"></cata> -->
        <div v-if="cata.display" v-for="cata in catas">
            <!-- active_page使当前一级标题高亮 -->
            <h3 :title="cata.title_c"
                    @click="clickL1Title(cata.index)">
                    <router-link :to="'/'+cata.title_e.toLowerCase()"
                        :class="{active_page: cata.title_c===currentLevel1Title}">
                        {{cata.title_c}}<br />
                        <span>{{cata.title_e}}</span>
                    </router-link>
            </h3>
            <ul>
                <!-- active_page使当前二级标题高亮 -->
                <li @click="clickL2Title(cata.index, index)"
                    v-for='(item,index) in cata.cata_c'>
                    <router-link  :class="{active_page: item===currentLevel2Title}"
                        :to="'/'+cata.title_e.toLowerCase()+'/'+cata.cata_e[index].toLowerCase()">
                        {{item}}
                    </router-link>
                    <br />
                    <span>{{cata.cata_e[index]}}</span>
                </li>
            </ul>
        </div>
        <p class="breadcrumb"><a href="index.html">🏠</a> ＞ <span v-text="title[0]"></span><span v-cloak> ＞ {{currentLevel1Title}}</span><span v-cloak> ＞ {{currentLevel2Title}}</span></p>
    </div>
</template>

<script>

export default {
    // components: {
    //     "cata": {
    //         props: ["cata", "currentLevel1Title", "currentLevel2Title"],
    //         template: `<div v-if="!cata[5]">
    //                         <h3 v-bind:title="cata[0].title_c"
    //                             :class="{active_page: cata[0].title_c===currentLevel1Title}"
    //                             @click="clickTitle(cata[4])">{{cata[0].title_c}}<br />
    //                             <span>{{cata[1].title_e}}</span>
    //                         </h3>
    //                         <ul>
    //                             <li :class="{active_page: item===currentLevel2Title}"
    //                                 @click="clickCata(cata[4], index)"
    //                                 v-for='(item,index) in cata[2].cata_c'>{{item}}<br />
    //                                 <span>{{cata[3].cata_e[index]}}</span>
    //                             </li>
    //                         </ul>
    //                     </div>`,
    //         methods: {
    //             clickCata(cataIndex, index){ // 点击二级标题
    //                 this.$emit( "display_content", cataIndex, index );
    //             },
    //             clickTitle(titleIndex){ // 点击一级标题
    //                 this.$emit( "display_content", titleIndex, null );
    //             },
    //         },
    //     },
    // },
    // el: "#catalog",
    // props: ["catas"],
    // props: ["title", "catas"],
    data(){
        return {
            title: [
                "画廊·衍生品",
                "GALLERY·DERIVATIVES"
            ],
            catas: [
                {
                    "title_c": "画廊",
                    "title_e": "GALLERY",
                    "cata_c": [],
                    "cata_e": [],
                    "index": 0,
                    "display": true
                },
                {
                    "title_c": "衍生品",
                    "title_e": "DERIVATIVES",
                    "cata_c": [],
                    "cata_e": [],
                    "index": 1,
                    "display": true
                }
            ],
            // 当前状态下的一级标题和二级标题名
            currentLevel1Title: "",
            currentLevel2Title: "",

            // 当前状态下的一级标题序号和二级标题名序号
            currentLevel1Index: 0,
            currentLevel2Index: null, // 在点击没有二级标题的一级标题是，这个值为null
        };
    },
    methods: {
        // 点击一级标题
        // 参数为一级标题的index
        /**
        * 点击一级标题
        * @param  {Integer}  cataIndex  该一级标题在其兄弟标题中的index
        */
        clickL1Title(L1Index){
            this.display(L1Index, null);
        },

        /**
         * 点击二级标题
         * @param  {Integer}  cataIndex  该二级标题所在的一级标题在其兄弟标题中的index
         * @param  {Integer}  index      该二级标题在其兄弟标题中的index
         */
        clickL2Title(L1Index, L2Index){
            this.display(L1Index, L2Index);
        },

        /**
         * 击之后显示对应的版块
         * 参数参考 clickL2Title 和 clickL1Title 方法
         */
        display(L1Index, L2Index){
            this.currentLevel1Index = L1Index;
            this.currentLevel2Index = L2Index;

             // 点击侧标题，发送事件给右边内容模块，让其关闭详情页
             // 暂时注释
            // Bus.$emit("clickCataToCloseDetailArticle");

            // 显示标题对应的版块
            // 暂时注释
            // displayContentSection(cataIndex, index);
            // this.$emit('clickTitle', L1Index, L2Index);

            // let catas = document.querySelectorAll(".common-middle .content>section"), // 根据一级标题的版块分类
            // catas_len = catas.length;
            // for(let i=0; i<catas_len; i++){ // 循环所有大类
            //     let items = catas[i].children, // 当前一级标题分类下的所有具体内容版块
            //     items_len = items.length;
            //     /*
            //      * 具体的例子是，公共教育进去后，点击艺术大讲堂（01）再点击公教活动（0）
            //      * 下面的这一段的错误之处在于，先点击01（第一大标题第二个小标题），01版块正常显示，
            //      * 然后点击0（第一个大标题），i===cataIndex 为真，则显示00，但此时正在显示的01并未隐藏。
            //      * 然后进行第二轮循环，第二轮循环中，i===cataIndex 仍然为真，再次显示00,
            //      * 01仍然没有隐藏。于是两个子版块的内容就同时出现了。
            //      */
            //     // for(let j=0; j<items_len; j++ ){
            //     //     if( i===cataIndex ){ // 点击的是当前大类的一级标题或二级标题
            //     //         if(j===index ){ // 点击二级标题
            //     //             items[j].style.display = "block";
            //     //             console.log("222");
            //     //         }else if(index===undefined){ // 点击一级标题
            //     //             items[0].style.display = "block";
            //     //             console.log("111");
            //     //         }else{
            //     //             items[j].style.display = "none";
            //     //         }
            //     //     }
            //     //     else{
            //     //         items[j].style.display = "none";
            //     //     }
            //     // }
            //     /*
            //      * 改成这个之后，在01显示的状态下点击0，会首先隐藏00，虽然此时00本来就是隐藏的。
            //      * 然后在进行判断，00会显示出来。进行下一轮循环，仍然是首先隐藏01，此前正在显示
            //      * 的01就被隐藏了，之后再进行判断，会再次显示已经显示的00。
            //      */
            //     for(let j=0; j<items_len; j++ ){ // 循环一个大类中的所有小类
            //         items[j].style.display = "none"; // 先把所有的小类版块都隐藏
            //         if( i===cataIndex ){ // 点击的是当前大类的一级标题或二级标题
            //             if(j===index ){ // 点击二级标题
            //                 items[j].style.display = "block";
            //             }
            //             else if(index===null){ // 点击一级标题
            //                 items[0].style.display = "block";
            //             }
            //
            //         }
            //     }
            // }
            // 更新当前数据记录的被点击的标题 如果此标题等于被单击的li的标题，该li通过class变色
            this.currentLevel1Title = this.catas[L1Index].title_c;
            this.currentLevel2Title = this.catas[L1Index].cata_c[L2Index];

            // 更改hash
            // if(L2Index){ // 点击二级标题
            //     location.hash = encodeURIComponent(((this.catas)[L1Index].cata_c)[L2Index]);
            // }
            // else{ // 点击一级标题
            //     location.hash = encodeURIComponent((this.catas)[L1Index].title_c);
            // }
        }
    },
    watch: {
        catas(){
            if( location.hash ){ // 带hash进入页面

                let nIDUnderline = location.hash.indexOf("_"),
                    sHashTitle = "",
                    catas = this.catas;
                if(nIDUnderline===-1){ // 不带详情页ID
                    sHashTitle = location.hash.slice(1);
                }
                else{
                    sHashTitle = location.hash.slice(1, nIDUnderline);
                }
                for(let i=0; i<catas.length; i++){
                    if( sHashTitle.slice(1) === catas[i].title_e.toLowerCase() ){ // hash对应一级标题
                        this.currentLevel1Title = catas[i].title_c;
                        this.currentLevel2Title = this.catas[i].cata_c[0];

                        this.currentLevel1Index = i;
                        this.currentLevel2Index = null;
                        // Bus.$emit("catasChange", [this.currentLevel1Index, this.currentLevel2Index]);

                        break;
                    }
                    else{ // hash对应二级标题或什么也不对应
                        let aLevel2TitleE = catas[i].cata_e;
                        for(let j=0; j<aLevel2TitleE.length; j++){
                            if( sHashTitle.slice(1) === aLevel2TitleE[j].toLowerCase() ){ // hash对应二级标题
                                this.currentLevel1Title = this.catas[i].title_c;
                                this.currentLevel2Title = this.catas[i].cata_c[j];

                                this.currentLevel1Index = i;
                                this.currentLevel2Index = j;
                                // Bus.$emit("catasChange", [this.currentLevel1Index, this.currentLevel2Index]);
                                break;
                            }
                        }
                    }
                }
            }
            else{ // 初始化目录，将目录中第一个标题加上激活的class
                this.currentLevel1Title = this.catas[0].title_c;
                this.currentLevel2Title = this.catas[0].cata_c[0];
            }
        },
    },
    updated(){
        // let subTitle = ((this.catas)[0][2].cata_c)[0];
        let subTitle = this.currentLevel2Title;
        // hash显示为 一级或二级标题 加 _文章id。 如果当前不是文章详情，则只显示标题
        // 有二级标题则显示二级标题，否则一级标题。
        // 如果都没有，说明是直接从详情页刷新，则hash不变
        let nIDUnderline = location.hash.indexOf("_"),
            sIDStr = ( nIDUnderline>-1) ? location.hash.slice(nIDUnderline) : "";

        let hashTitle = subTitle ? subTitle : this.currentLevel1Title
        // if(hashTitle){ // 这个hash可能涉及详情文章
        //     location.hash = hashTitle + sIDStr;
        // }
    },
    mounted(){
        // if( location.hash ){ // 带hash进入页面
        //
        //     let nIDUnderline = location.hash.indexOf("_"),
        //         sHashTitle = "",
        //         catas = this.catas;
        //     if(nIDUnderline===-1){ // 不带详情页ID
        //         sHashTitle = location.hash.slice(1);
        //     }
        //     else{
        //         sHashTitle = location.hash.slice(1, nIDUnderline);
        //     }
        //     console.log(catas);
        //     for(let i=0; i<catas.length; i++){
        //         console.log(sHashTitle.slice(1), catas[i].title_e.toLowerCase());
        //         if( sHashTitle.slice(1) === catas[i].title_e.toLowerCase() ){ // hash对应一级标题
        //             this.currentLevel1Title = catas[i].title_c;
        //             this.currentLevel2Title = this.catas[i].cata_c[0];
        //
        //             this.currentLevel1Index = i;
        //             this.currentLevel2Index = null;
        //             // Bus.$emit("catasChange", [this.currentLevel1Index, this.currentLevel2Index]);
        //
        //             break;
        //         }
        //         else{ // hash对应二级标题或什么也不对应
        //             let aLevel2TitleE = catas[i].cata_e;
        //             for(let j=0; j<aLevel2TitleE.length; j++){
        //                 if( sHashTitle.slice(1) === aLevel2TitleE[j].toLowerCase() ){ // hash对应二级标题
        //                     this.currentLevel1Title = this.catas[i].title_c;
        //                     this.currentLevel2Title = this.catas[i].cata_c[j];
        //
        //                     this.currentLevel1Index = i;
        //                     this.currentLevel2Index = j;
        //                     // Bus.$emit("catasChange", [this.currentLevel1Index, this.currentLevel2Index]);
        //                     break;
        //                 }
        //             }
        //         }
        //     }
        // }
        // else{ // 初始化目录，将目录中第一个标题加上激活的class
        //     this.currentLevel1Title = this.catas[0].title_c;
        //     this.currentLevel2Title = this.catas[0].cata_c[0];
        // }
    },



    // props: ["cata", "currentLevel1Title", "currentLevel2Title"],
    //
    // data () {
    //     return {
    //     }
    // },
    // methods: {
    //     clickCata(cataIndex, index){ // 点击二级标题
    //         this.$emit( "display_content", cataIndex, index );
    //     },
    //     clickTitle(titleIndex){ // 点击一级标题
    //         this.$emit( "display_content", titleIndex, null );
    //     },
    // },
}
</script>

<style scoped lang="scss">
@import "../scss/basic.scss";

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
