;"use strict";

let vHeader = new Vue({
    components: {
        "header-template": {
            template: `
                <div>
                    <img id="top_logo" alt="崔振宽美术馆" />
                    <ul class="menu">
                        <a href="about_us.html"><li>关于我们<br /><span>ABOUT US</span></li></a>
                        <a href="CuiZhenkuan.html"><li>崔振宽艺术<br /><span>CUIZHENKUAN ART</span></li></a>
                        <a href="exhibition.html"><li>展览<br /><span>EXHIBITION</span></li></a>
                        <a href="public_education.html"><li>公共教育<br /><span>PUBLIC EDUCATION</span></li></a>
                        <a href="reserch-collection.html"><li>学术研究·馆藏<br /><span>RESERCH·COLLECTION</span></li></a>
                        <a href="gallery-derivatives.html"><li>画廊·衍生品<br /><span>GALLERY·DERIVATIVES</span></li></a>
                        <a href="service_center.html"><li>服务中心<br /><span>SERVICE CENTER5</span></li></a>
                    </ul>
                </div>`,
        }
    },
    el: "#common-header",
});


let vCatalog = new Vue({
    components: {
        "cata": {
            props: ["cata", "currentTitle"],
            template: `<div>
            <h3>{{cata[0].title_c}}<br /><span>{{cata[1].title_e}}</span></h3>
            <ul>
                <li :class="{active_page: item===currentTitle}" @click="clickCata(cata[4], index)" v-for='(item,index) in cata[2].cata_c'>{{item}}<br /><span>{{cata[3].cata_e[index]}}</span></li>
            </ul>
            </div>`,
            methods: {
                clickCata(cataIndex, index){
                    this.$emit( "display_content", cataIndex, index );
                },
            },
        },
    },
    el: "#catalog",
    data:{
        title: [],
        catas: [],
        currentTitle: "", // 当前数据记录的被点击的标题
    },
    methods: {
        display(cataIndex, index){
            let catas = document.querySelectorAll(".common-middle .content>section"),
            catas_len = catas.length;
            for(let i=0; i<catas_len; i++){
                let items = catas[i].children,
                items_len = items.length;
                for(let j=0; j<items_len; j++ ){
                    if( i===cataIndex && j===index ){
                        items[j].style.display = "block";
                    }
                    else{
                        items[j].style.display = "none";
                    }
                }
            }
            console.log(this.currentTitle );
            // 更新当前数据记录的被点击的标题 如果此标题等于被单击的li的标题，该li通过class变色
            this.currentTitle = this.catas[cataIndex][2].cata_c[index];

            location.hash = ((this.catas)[cataIndex][2].cata_c)[index];
        }
    },
    watch: {
        catas(){
            // 初始化目录，将目录中第一个标题加上激活的class
            this.currentTitle = this.catas[0][2].cata_c[0];
        },
    },
    updated(){
        location.hash = ((this.catas)[0][2].cata_c)[0];
    },
});



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
                        <span class="more">MORE</span>
                    </div>
                    <div id="gallery_base_info">
                        <gallery-base-info></gallery-base-info>
                        <span class="more">MORE</span>
                    </div>
                    <img alt="二维码" />
                    <div style="clear:both;"></div>
                </div>
                <div class="footer_down">
                    <p>陕ICP备07030830号-5  Copyright © 2015 czkam.net Inc. All Rights Reserved. 崔振宽美术馆 版权所有  Designed by 凡卡互动</p>
                    <div>
                        <a href="">会员</a>
                        <a href="">联系我们</a>
                        <a href="">下载专区</a>
                    </div>
                    <img alt="右下角logo" />
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
                    index: 0,
                };
            },
            computed: {
                getTab(){
                    if( this.tabs.length ){
                        return this.tabs[this.index];
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
        },
    },
});




// 请求公告数据
{
    let sURL = "ajax.php?item=common_bulletin",
        fnSuccessCallback = function(res){
            vCommonFooter.$children[0].tabs = JSON.parse(res);
            setInterval(function(){
                vCommonFooter.$children[0].index = (vCommonFooter.$children[0].index+1) % 3;
            }, 1000);
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
