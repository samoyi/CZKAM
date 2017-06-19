;"use strict";


vCatalog.title = ["服务中心", "SERVICE CENTER"];
vCatalog.catas = [
        [
            {title_c: "公告"},
            {title_e: "BULLETIN"},
            {cata_c: []},
            {cata_e: []},
            0
        ],
        [
            {title_c: "会员"},
            {title_e: "MEMBER SHIP"},
            {cata_c: []},
            {cata_e: []},
            1
        ],
        [
            {title_c: "下载专区"},
            {title_e: "DOWNLOAD"},
            {cata_c: []},
            {cata_e: []},
            2
        ],
        [
            {title_c: "参观导览"},
            {title_e: "GUIDE"},
            {cata_c: []},
            {cata_e: []},
            3,
            "none",
        ],
        [
            {title_c: "意见留言"},
            {title_e: "COMMENTS"},
            {cata_c: []},
            {cata_e: []},
            4,
            "none",
        ],
    ];




let vBulletin = new Vue({
    el: ".bulletin",
    data: {
        list: [],
        nPerPage: 8, // 每页显示10个
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
        }
    },
    components: {
        "bulletin-item": {
            props: ["liData"],
            template: `<news-list>
                    <h3 slot="title">{{liData[0]}}</h3>
                    <p slot="summary">{{liData[1]}}</p>
                    <span slot="remark">{{liData[2]}}</span>
                </news-list>`,
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


let vDownload = new Vue({
    el: ".download",
    data: {
        list: [],
        nPerPage: 8, // 每页显示10个
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
        }
    },
    components: {
        "bulletin-item": {
            props: ["liData"],
            template: `<news-list>
                    <span class="title" slot="title">{{liData[0]}}</span>
                    <span class="time" slot="remark">{{liData[1]}}</span>
                    <a class="dl_icon" :href="liData[3]">{{liData[2]}}<i></i></a>
                </news-list>`,
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




// lazy loading
window.onload = function(){

    let oContent = document.querySelector(".content");

    // 公告数据
    {
        let sURL = "ajax.php?item=service_bulletin",
            fnSuccessCallback = function(res){
                vBulletin.list = JSON.parse(res);
            },
            fnFailCallback = function(status){
                console.error("加载公告数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }

    // 下载数据
    {
        let sURL = "ajax.php?item=service_download",
            fnSuccessCallback = function(res){
                vDownload.list = JSON.parse(res);
            },
            fnFailCallback = function(status){
                console.error("加载下载数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }

};
