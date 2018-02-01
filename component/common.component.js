"use strict";

let vHeader = new Vue({
    components: {
        "header-template": {
            template: `
                <div>
                    <a href="index.html"><div id="top_logo"></div></a>
                    <ul class="menu">
                        <li><a href="about_us.html">关于我们<p>ABOUT US</p></a></li>
                        <li><a href="CuiZhenkuan.html">崔振宽艺术<p>CUIZHENKUAN ART</p></a></li>
                        <li><a href="exhibition.html">展览<p>EXHIBITION</p></a></li>
                        <li><a href="public_education.html">公共教育<p>PUBLIC EDUCATION</p></a></li>
                        <li><a href="research-collection.html">学术研究·馆藏<p>RESEARCH·COLLECTION</p></a></li>
                        <li><a href="gallery-derivatives.html">画廊·衍生品<p>GALLERY·DERIVATIVES</p></a></li>
                        <li><a href="service_center.html">服务中心<p>SERVICE CENTER5</p></a></li>
                    </ul>
                </div>`,
        }
    },
    el: "#common-header",
});

function displayContentSection(nLevel1Index, nLevel2Index){
    let catas = document.querySelectorAll(".common-middle .content>section"), // 根据一级标题的版块分类
    catas_len = catas.length;
    for(let i=0; i<catas_len; i++){ // 循环所有大类
        let items = catas[i].children, // 当前一级标题分类下的所有具体内容版块
            items_len = items.length;

        /*
         * 具体的例子是，公共教育进去后，点击艺术大讲堂（01）再点击公教活动（0）
         * 下面的这一段的错误之处在于，先点击01（第一大标题第二个小标题），01版块正常显示，
         * 然后点击0（第一个大标题），i===cataIndex 为真，则显示00，但此时正在显示的01并未隐藏。
         * 然后进行第二轮循环，第二轮循环中，i===cataIndex 仍然为真，再次显示00,
         * 01仍然没有隐藏。于是两个子版块的内容就同时出现了。
         */
        // for(let j=0; j<items_len; j++ ){
        //     if( i===cataIndex ){ // 点击的是当前大类的一级标题或二级标题
        //         if(j===index ){ // 点击二级标题
        //             items[j].style.display = "block";
        //             console.log("222");
        //         }else if(index===undefined){ // 点击一级标题
        //             items[0].style.display = "block";
        //             console.log("111");
        //         }else{
        //             items[j].style.display = "none";
        //         }
        //     }
        //     else{
        //         items[j].style.display = "none";
        //     }
        // }
        /*
         * 改成这个之后，在01显示的状态下点击0，会首先隐藏00，虽然此时00本来就是隐藏的。
         * 然后在进行判断，00会显示出来。进行下一轮循环，仍然是首先隐藏01，此前正在显示
         * 的01就被隐藏了，之后再进行判断，会再次显示已经显示的00。
         */

        for(let j=0; j<items_len; j++ ){ // 循环一个大类中的所有小类
            items[j].style.display = "none"; // 先把所有的小类版块都隐藏
            if( i===nLevel1Index ){ // 点击的是当前大类的一级标题或二级标题

                if(j===nLevel2Index ){ // 点击二级标题
                    items[j].style.display = "block";
                }
                else if(nLevel2Index===null){ // 点击一级标题
                    items[0].style.display = "block";
                }
            }
        }
    }
}


// 手动显示详情文章。用于通过连接直接进入详情页
function directToDetailArticle(component){
    let nIDUnderline = location.hash.indexOf("_");
    if( nIDUnderline>-1 ){ // 直接进入详情页
        let articleID = location.hash.slice(nIDUnderline+1);
        if(articleID){
            component.bDisplayDetailArticle = true;
            let detailArticleHTML = component.detailArticleHTML;
            if(!detailArticleHTML){ // 如果没有文章数据数据。一般都是没有的，因为不会预加载，且上一篇详情隐藏后也会清除数据
                component.detailArticleHTML = "<p>正在加载</p>"
                let sURL = "ajax/detail.php?id=" + articleID + "&act=" + location.hash.slice(1, nIDUnderline),
                fnSuccessCallback = (res)=>{
                    component.detailArticleHTML = JSON.parse(res);
                },
                fnFailCallback = function(status){
                    console.error("加载详情页数据失败");
                };
                AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
            }
        }
    }
}


let vCatalog = new Vue({
    components: {
        "cata": {
            props: ["cata", "currentLevel1Title", "currentLevel2Title"],
            template: `<div v-if="!cata[5]">
            <h3 v-bind:title="cata[0].title_c" :class="{active_page: cata[0].title_c===currentLevel1Title}"  @click="clickTitle(cata[4])">{{cata[0].title_c}}<br /><span>{{cata[1].title_e}}</span></h3>
            <ul>
                <li :class="{active_page: item===currentLevel2Title}" @click="clickCata(cata[4], index)" v-for='(item,index) in cata[2].cata_c'>{{item}}<br /><span>{{cata[3].cata_e[index]}}</span></li>
            </ul>
            </div>`,
            methods: {
                clickCata(cataIndex, index){ // 点击二级标题
                    this.$emit( "display_content", cataIndex, index );
                },
                clickTitle(titleIndex){ // 点击一级标题
                    this.$emit( "display_content", titleIndex, null );
                },
            },
        },
    },
    el: "#catalog",
    data:{
        title: [],
        catas: [],
         // 当前数据记录的被点击的标题，点击一个标题时，比对这个数据。如果一样，高亮标题
        currentLevel1Title: "",
        currentLevel2Title: "",

        // 点击当前大小标题的序号，让右边版块的显示和隐藏绑定这两个序号
        currentLevel1Index: 0,
        currentLevel2Index: null, // 在点击没有二级标题的一级标题是，这个值为null
    },
    methods: {
        display(cataIndex, index){
            this.currentLevel1Index = cataIndex;
            this.currentLevel2Index = index;


            Bus.$emit("clickCataToCloseDetailArticle"); // 点击侧标题，发送事件给右边内容模块，让其关闭详情页

// Bus.$emit("catasChange", [cataIndex, index]); //

            displayContentSection(cataIndex, index);

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
            this.currentLevel1Title = this.catas[cataIndex][0].title_c;
            this.currentLevel2Title = this.catas[cataIndex][2].cata_c[index];


            if(index){ // 点击二级标题
                location.hash = encodeURIComponent(((this.catas)[cataIndex][2].cata_c)[index]);
            }
            else{ // 点击一级标题
                location.hash = encodeURIComponent((this.catas)[cataIndex][0].title_c);
            }

        }
    },
    watch: {
        catas(){
            if( location.hash ){ // 带hash进入该页面
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
                    if( sHashTitle === catas[i][0].title_c ){ // hash对应一级标题
                        this.currentLevel1Title = sHashTitle;
                        this.currentLevel2Title = this.catas[i][2].cata_c[0];

                        this.currentLevel1Index = i;
                        this.currentLevel2Index = null;
                        Bus.$emit("catasChange", [this.currentLevel1Index, this.currentLevel2Index]);

                        break;
                    }
                    else{ // hash对应二级标题或什么也不对应
                        let aLevel2Title = catas[i][2].cata_c;
                        for(let j=0; j<aLevel2Title.length; j++){

                            if( sHashTitle === aLevel2Title[j] ){ // hash对应一级标题
                                this.currentLevel1Title = this.catas[i][0].title_c;
                                this.currentLevel2Title = this.catas[i][2].cata_c[j];

                                this.currentLevel1Index = i;
                                this.currentLevel2Index = j;
                                Bus.$emit("catasChange", [this.currentLevel1Index, this.currentLevel2Index]);

                                break;
                            }
                        }
                    }
                }
            }
            else{ // 初始化目录，将目录中第一个标题加上激活的class
                this.currentLevel1Title = this.catas[0][0].title_c;
                this.currentLevel2Title = this.catas[0][2].cata_c[0];
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
        if(hashTitle){
            location.hash = hashTitle + sIDStr;
        }
    },
});

// 中央事件总线
/*
 * 用途：
 *  1. 点击侧菜单关闭详情文章
 */
const Bus = new Vue();






// 带hash进入页面，内容版块进行相应显示
// FIXME4 因为vCatalog组件会修改currentLevel1Index和currentLevel2Index，所以这里
// 用setTimeout把displayContentSection推到修改之后
if( location.hash ){
    setTimeout(function(){
        displayContentSection(vCatalog.currentLevel1Index, vCatalog.currentLevel2Index)
    }, 0);
}



// 公共组件——————————————————————————————————————————————————————————————————————

// 生成展览及类展览的实例
/*
 * 传入元素选择器（如“#sth”），返回一个展览或类展览实例
 * 该实例包括组件：
 *   1. 展览分类：如按年份的分类目录
 *   2. 展览目录列表项
 *   3. 展览详情页
 *
 * 展览目录列表项通过exhibitionData属性从父组件接收数据，exhibitionData的格式为 6 项
 * 数组，分别为：图片URL、标签（如“预告”）、标题、发布日期、简介、详情文章ID
 */
function exhibitionClass(elSelector){
    let instance = new Vue({
        el: elSelector,
        data: {
            list: [
                ["", "", "", ""],
            ],
            lists: {},
            catas: [], // 可以按年份分类，也可以其他类别
            nCataIndex: 0,
            nPerPage: 6, // 每页显示6个
            nPageIndex : 0, // 当前页码
            detailArticleHTML: "", // 详情文章的代码
            bDisplayDetailArticle: false, // 根据这个属性来决定显示列表还是显示文章

            currentLevel1Index: 0,
            currentLevel2Index: null,
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
            switchexhibitions(index){
                this.list = this.lists[this.catas[index]];
                this.nCataIndex = index;
            },
            // 对象转数组
            // 组件中的exhibitionData属性接收的数据格式是数组，如果请求到的是对象，需要进行转换
            exhibitionItemDataObjToArr(obj){
                let aKey = ['pic', 'tag', 'name', 'fdate', 'des', 'id'];
                return aKey.map(function(item){
                    return obj[item];
                });
            }
        },
        components: {
            "exhibition-item": {
                props: ["exhibitionData"],
                template: `
                <li>
                    <img class="cover" :src="exhibitionData[0]" :alt="exhibitionData[2]" @click="displayDetailArticle(exhibitionData[5])" />
                    <div class="info">
                        <h3><span>{{exhibitionData[1]}}</span><span v-if="exhibitionData[1]"> | </span>{{exhibitionData[2]}}</h3>
                        <p class="date">{{exhibitionData[3]}}</p>
                        <p class="summary">{{exhibitionData[4]}}</p>
                    </div>
                    <div style="clear:both;"></div>
                </li>`,
                methods: {
                    // 显示详情文章页面
                    displayDetailArticle(articleID){
                        if(articleID){ // 列表项图片绑定了详情文章ID才显示文章
                            let parent = this.$parent;
                            parent.bDisplayDetailArticle = true;
                            let detailArticleHTML = parent.detailArticleHTML;
                            if(!detailArticleHTML){ // 如果没有文章数据数据。正常都是没有的，因为不会预加载，且上一篇详情隐藏后也会清除数据
                                parent.detailArticleHTML = "<p>正在加载……</p>"
                                let sURL = "ajax/detail.php?id=" + articleID + "&act=" + location.hash.slice(1),
                                    fnSuccessCallback = function(res){
                                        parent.detailArticleHTML = JSON.parse(res);
                                    },
                                    fnFailCallback = function(status){
                                        console.error("加载详情页数据失败");
                                    };
                                AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
                                location.hash = location.hash + "_" + articleID;
                            }
                        }
                    },
                },
            },
            "exhibition-cata": {
                props: ["cata", "thisIndex", "cataIndex"],
                template: `<li :class="{active_cata: thisIndex===cataIndex}" @click="clickCata(cata)">{{cata}}</li>`,
                methods: {
                    clickCata(cata){
                        this.$emit("switchcata", this.$parent.catas.indexOf(cata));
                    },
                },
            },
            "uploaded-article": {
                props: ["contentHtml"], // 详情文章的具体代码
                template: `<article>
                            <div v-html="contentHtml"></div>
                            <i class="close_article" @click="closeDetailArticle">关闭文章</i>
                            <i class="backToTop" @click="backToTop">回到顶部</i>
                        </article>`,
                methods: {
                    closeDetailArticle(){
                        // 清除文章数据。如果不清除，加载其他文章时刚开始会显示上一次的
                        this.$parent.detailArticleHTML = "";
                        // 显示文章列表
                        this.$parent.bDisplayDetailArticle = false;

                        let nIDUnderline = location.hash.indexOf("_");
                        location.hash = location.hash.slice(0, nIDUnderline);
                    },
                    backToTop(){
                        window.scrollTo(0, 0);
                    }
                },
            },
        },
        created(){
            // 接收侧目录组件发送的点击通知，关闭详情文章
            Bus.$on('clickCataToCloseDetailArticle', (indexes)=>{
                this.detailArticleHTML = "";
                this.bDisplayDetailArticle = false;
            });
        },
        mounted(){
            let nIDUnderline = location.hash.indexOf("_");
            if( nIDUnderline>-1 ){ // 直接进入详情页
                let articleID = location.hash.slice(nIDUnderline+1);
                if(articleID){
                    this.bDisplayDetailArticle = true;
                    let detailArticleHTML = this.detailArticleHTML;
                    if(!detailArticleHTML){ // 如果没有文章数据数据。一般都是没有的，因为不会预加载，且上一篇详情隐藏后也会清除数据
                        this.detailArticleHTML = "<p>正在加载</p>"
                        let sURL = "ajax/detail.php?id=" + articleID + "&act=" + location.hash.slice(1, nIDUnderline),
                            fnSuccessCallback = (res)=>{
                                this.detailArticleHTML = JSON.parse(res);
                            },
                            fnFailCallback = function(status){
                                console.error("加载详情页数据失败");
                            };
                            AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
                    }
                }
            }
        },
    });
    return instance;
}


// 首页以外其他页面的底部
let vCommonFooter = new Vue({
    el: "#common-footer",
    components: {
        "common-footer": {
            props: ["tabs", "bulletinNum", "bulletinIndex"],
            template: `
                <section>
                    <div class="footer_up">
                        <div id="bulletin-tab" v-if="tabs">
                            <h2>公告 BULLETIN</h2>
                            <div>
                                <h3>{{tabs[bulletinIndex][0]}}</h3>
                                <p class="bulletin_content">{{tabs[bulletinIndex][1]}}</p>
                                <p>{{tabs[bulletinIndex][2]}}</p>
                            </div>
                            <ul>
                                <li v-for="(item, index) in bulletinNum" v-bind:class="{active_tab: index===bulletinIndex}" @click="switchtab(index)">●</li>
                            </ul>
                            <a href="service_center.html#公告" target="_black" class="more">MORE</a>
                        </div>
                        <div id="gallery_base_info">
                            <h2>美术馆 ART GALLERY</h2>
                            <p><span>开放时间：</span>周二至周日 9:30--17:00（16:30停止入馆）<br />周一闭馆（节假日除外，特殊情况将在本网站通知）</p>
                            <p><span>地址：</span>西安市灞桥区灞桥生态湿地公园柳雪路996号</p>
                            <p><span>电话：</span>029-83626699</p>
                        </div>
                        <i></i>
                        <div style="clear:both;"></div>
                    </div>
                    <div class="footer_down">
                        <p>
                            陕ICP备15004289号-1  Copyright © 2017 czkam.net Inc. All Rights Reserved. 崔振宽美术馆 版权所有
                            <a href="http://www.funca.com.cn" title="凡卡互动" target="_blank">Designed by</a>
                            <a href="http://www.funca.com.cn" title="最具价值的互联网品牌设计" target="_blank">凡卡互动</a>
                        </p>
                        <div>
                            <a href="service_center.html#公告" target="_blank">会员</a>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <a href="about_us.html#简介" target="_blank">联系我们</a>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <a href="service_center.html#公告" target="_blank">下载专区</a>
                        </div>
                        <i></i>
                    </div>
                </section>
                `,
            methods: {
                switchtab(index){
                    this.$parent.bulletinIndex = index;
                },
            },
        },
    },
    data: {
        bulletinTabs: null,
        bulletinNum: 0,
        bulletinIndex: 0,
    },
    mounted(){
        // 公告数据是每个页都会用的，所以一个页面请求了，就存起来
        let aBulletinTabs = JSON.parse(sessionStorage.getItem("bulletin"));
        if( aBulletinTabs){ // 已经有了公告数据
            let nLen = aBulletinTabs.length,
                index = 0;
            if(nLen>0){
                this.bulletinTabs = aBulletinTabs;
            }
            if(nLen>1){
                this.bulletinNum = nLen;
                setInterval(()=>{
                    this.bulletinIndex = ++index % nLen;
                }, 5000);
            }
        }
        else{
            let sURL = "http://www.czkam.com/ajax/index.php",
                fnSuccessCallback = (res)=>{
                    let aBulletinTabs = JSON.parse(res).notice,
                        nLen = aBulletinTabs.length,
                        index = 0;
                    if(nLen>0){
                        aBulletinTabs = aBulletinTabs.map(function(item){
                            return [item.title, stripHTMLTag(item.detail), item.time];
                        });
                        this.bulletinTabs = aBulletinTabs;
                    }
                    if(nLen>1){
                        this.bulletinNum = nLen;
                        setInterval(()=>{
                            this.bulletinIndex = ++index % nLen;
                        }, 5000);
                    }
                },
                fnFailCallback = function(status){
                    console.error("加载首页数据失败");
                };
            AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
        }
    },
});


// 列表页下方的页码选择
Vue.component('list-pagination', {
    props: ["pageIndex"],
    template: `<li @click="clickPagination(pageIndex)">{{pageIndex+1}}</li>`,
    methods: {
        clickPagination(index){
            this.$emit("switchpagination", index);
            setTimeout(function(){
                window.scrollTo( 0, 0 );
            }, 200);
        },
    },
});




// 公共函数 —————————————————————————————————————————————————————————————————————

// AJAX_GET
function AJAX_GET(sURL, fnSuccessCallback, fnFailCallback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                // 必要的时候，使用 getResponseHeader() 检查首部信息
                fnSuccessCallback && fnSuccessCallback(xhr.responseText);
            } else {
                fnFailCallback && fnFailCallback(xhr.status);
            }
        }
    }, false);
    xhr.open("get", sURL, true);
    xhr.send(null);
}

// AJAX POST
function AJAX_POST(sURL, data, fnSuccessCallback, fnFailCallback)
{
	let xhr = new XMLHttpRequest();
	xhr.addEventListener('readystatechange', function()
	{
		if (xhr.readyState == 4)
		{
			if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
				// 必要的时候，使用 getResponseHeader() 检查首部信息
				fnSuccessCallback && fnSuccessCallback( xhr.responseText );
			}
			else{
				fnFailCallback && fnFailCallback( xhr.status );
			}
		}
	}, false);
	xhr.open("post", sURL, true);
	// 如果发送FormDate，则不需要设置Content-Type，但截至2017.5，FormDate的浏览器支持并不理想
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(data);
}


// 分步批量图片加载
function stepBatchLoadImage(arr){
	let loadedCounter = 0,
		index = arguments[1] ? arguments[1] : 0;

	if( arr[index] ){
		loadedCounter = arr[index].length;
		arr[index].forEach(function(item){
			let oNewImage = new Image();
			oNewImage.src = item;
			oNewImage.onload = function(){
				if( loadedCounter-- === 1){
					stepBatchLoadImage(arr, ++index);
				}
			};
            oNewImage.onerror = function(){
                console.error("stepBatchLoadImage 无法加载  " + item + "，其所在组之后的图片组（如果还有）因此无法加载");
            }
		});
	}
}


// 删除字符串中的HTML标签
function stripHTMLTag(str){
    let tmpDiv = document.createElement("DIV");
    tmpDiv.innerHTML = str;
    return tmpDiv.innerText;
}
