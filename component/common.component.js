;"use strict";

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


let vCatalog = new Vue({
    components: {
        "cata": {
            props: ["cata", "currentLevel1Title", "currentLevel2Title"],
            template: `<div>
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
                    this.$emit( "display_content", titleIndex );
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
    },
    methods: {
        display(cataIndex, index){
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
                    if( i===cataIndex ){ // 点击的是当前大类的一级标题或二级标题
                        if(j===index ){ // 点击二级标题
                            items[j].style.display = "block";
                        }
                        else if(index===undefined){ // 点击一级标题
                            items[0].style.display = "block";
                        }
                    }
                }
            }
            // 更新当前数据记录的被点击的标题 如果此标题等于被单击的li的标题，该li通过class变色
            this.currentLevel1Title = this.catas[cataIndex][0].title_c;
            this.currentLevel2Title = this.catas[cataIndex][2].cata_c[index];

            if(index){ // 点击二级标题
                location.hash = ((this.catas)[cataIndex][2].cata_c)[index];
            }
            else{ // 点击一级标题
                location.hash = (this.catas)[cataIndex][0].title_c;
            }
        }
    },
    watch: {
        catas(){
            // 初始化目录，将目录中第一个标题加上激活的class
            this.currentLevel1Title = this.catas[0][0].title_c;
            this.currentLevel2Title = this.catas[0][2].cata_c[0];
        },
    },
    updated(){
        // let subTitle = ((this.catas)[0][2].cata_c)[0];
        let subTitle = this.currentLevel2Title;
        // 有二级标题则显示二级标题，否则一级标题
        location.hash = subTitle ? subTitle : this.currentLevel1Title;
    },
});



// 展览组件
function exhibitionClass(elSelector){
    let instance = new Vue({
        el: elSelector,
        data: {
            list: [
                ["", "", "", ""],
            ],
            lists: {},
            // catas: ["2017", "2016", "2015", "2014"],
            // 具体的年份列表要根据数据中实际有的来决定
            catas: [],
            nCataIndex: 0,
            nPerPage: 6, // 每页显示6个
            nPageIndex : 0, // 当前页码
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
        },
        components: {
            "exhibition-item": {
                props: ["exhibitionData"],
                template: `
                <li>
                <img class="cover" :src="exhibitionData[0]" :alt="exhibitionData[2]" />
                <div class="info">
                <h3><span>{{exhibitionData[1]}}</span><span v-if="exhibitionData[1]"> | </span>{{exhibitionData[2]}}</h3>
                <p class="date">{{exhibitionData[3]}}</p>
                <p class="summary">{{exhibitionData[4]}}</p>
                <span class="more">MORE</span>
                </div>
                <div style="clear:both;"></div>
                </li>`,
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
            "list-pagination": {
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
            },
        },
    });
    return instance;
}



// 文章列表类的模板
/*
* 有一个title或没有
* 有一个image或没有
* 有一个summary或没有
* 有一个remark（例如日期、作者）或没有
*/
Vue.component("news-list", {
    template: `
    <li>
    <slot name="title"></slot>
    <slot name="image"></slot>
    <slot name="summary"></slot>
    <slot name="remark"></slot>
    <slot></slot>
    </li>
    `,
});




// 后台上传的文章
let vUpdatedArticle = null
if(document.querySelector("#updated_article")){
    vUpdatedArticle = new Vue({
        el: "#updated_article",
        data: {
            articleHTML: "<p style='color: red;'>正在加载……</p>",
        },
    });
}





let vCommonFooter = new Vue({
    el: "#common-footer",
    components: {
        "common-footer": {
            template: `
            <section>
                <div class="footer_up">
                    <div id="bulletin-tab">
                        <h2>公告 BULLETIN</h2>
                        <bulletin-tab ref="bulletin" :tab="getTab"></bulletin-tab>
                        <ul>
                            <bulletin-pagination v-for="(item, index) in tabs" :bulletin-index="index" :cur-index="curIndex" @switchpagination="switchtab"></bulletin-pagination>
                        </ul>
                        <a href="service_center.html#公告" target="_black" class="more">MORE</a>
                    </div>
                    <div id="gallery_base_info">
                        <gallery-base-info></gallery-base-info>
                    </div>
                    <i></i>
                    <div style="clear:both;"></div>
                </div>
                <div class="footer_down">
                    <p>陕ICP备07030830号-5  Copyright © 2015 czkam.net Inc. All Rights Reserved. 崔振宽美术馆 版权所有  Designed by 凡卡互动</p>
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
            components: {
                "bulletin-tab": {
                    props: ["tab"],
                    template: `
                    <div>
                        <h3>{{tab[0]}}</h3>
                        <p class="bulletin_content" v-html="tab[1]"></p>
                        <p>{{tab[2]}}</p>
                        <slot></slot>
                    </div>`,

                },
                "bulletin-pagination": {
                    props: ["bulletinIndex", "curIndex"],
                    template: `<li v-bind:class="{active_tab: bulletinIndex===curIndex}" @click="clickPagination(bulletinIndex)">●</li>`,
                    methods: {
                        clickPagination(clickedIndex){
                            this.$emit("switchpagination", clickedIndex);
                        },
                    },
                },
                "gallery-base-info": {
                    // FIXME 这里不得已而加了一个没有用处的根元素，在HTML多出了一个没用div节点
                    template: `
                    <div>
                        <h2>美术馆 ART GALLERY</h2>
                        <p><span>开放时间：</span>周二至周日 9:30--17:00（16:30停止入馆）<br />周一闭馆（节假日除外，特殊情况将在本网站通知）</p>
                        <p><span>地址：</span>西安市灞桥区灞桥生态湿地公园柳雪路996号</p>
                        <p><span>电话：</span>029-83626699</p>
                    </div>
                    `,
                }
            },
            data: function(){
                return {
                    tabs: [],
                    curIndex: 0,
                };
            },
            computed: {
                getTab(){
                    if( this.tabs.length ){
                        return this.tabs[this.curIndex];
                    }
                    else{
                        return [,,];
                        /*
                        * FIXME1
                        * 这里计算的时候，tabs还是是空的，所以只能通过判断然后先返回一个
                        * 空的三项数组，否则模板里取数组项的时候就会出错。有没有更好的办法？
                        */
                    }
                },
            },
            methods: {
                switchtab(clickedIndex){
                    this.curIndex = clickedIndex;
                },
            },
        },
    },
});




// 请求公告数据
{
    let sURL = "ajax.php?item=common_bulletin",
        fnSuccessCallback = function(res){
            vCommonFooter.$children[0].tabs = JSON.parse(res);
            setInterval(function(){
                vCommonFooter.$children[0].curIndex = (vCommonFooter.$children[0].curIndex+1) % 3;
            }, 5000);
        },
        fnFailCallback = function(status){
            console.error("加载公告数据失败");
        };
    AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
}







function AJAX_GET(sURL, fnSuccessCallback, fnFailCallback)
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
	xhr.open("get", sURL, true);
	xhr.send(null);
}
