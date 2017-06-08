;"use strict";


let vCatalog = new Vue({
    components: {
        "cata": {
            props: ["cata"],
            template: `<div>
                            <h3>{{cata[0].title_c}}<span>{{cata[1].title_e}}</span></h3>
                            <ul>
                                <li @click="clickCata(cata[4], index)" v-for='(item,index) in cata[2].cata_c'>{{item}}<span>{{cata[3].cata_e[index]}}</span></li>
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
        // title: ["关于我们", "ABOUT US"],
        // catas: [
        //     [
        //         {title_c: "美术馆"},
        //         {title_e: "ART GALLERY"},
        //         {cata_c: ["简介", "大事记", "开放时间", "地理交通", "联系我们"]},
        //         {cata_e: ["INTRODUCE", "MEMORABILIA", "OPENING HOURS", "TRAFFIC", "CONTACT US"]},
        //         0
        //     ],
        //     [
        //         {title_c: "配套设施"},
        //         {title_e: "FACILITIES"},
        //         {cata_c: ["艺术酒店", "咖啡厅", "多功能报告厅", "贵宾厅", "停车位"]},
        //         {cata_e: ["HOTEL", "COFEE HOUSE", "AUDITORIUM", "VIP HALL", "PARKING SPACE"]},
        //         1
        //     ],
        // ],
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
        }
    },
});


let vNoticeTab = new Vue({
    components: {
        "footer-tab": {
            props: ["tab"],
            template: "<div><h3>{{tab[0]}}</h3><p>{{tab[1]}}</p><p>{{tab[2]}}</p></div>",
        },
    },
    el: "#footer-tab",
    data: {
        tabs: [],
        index: 0,
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
    }
});
// 之后将要从后台接收到的数据
vNoticeTab.tabs = [
    ["公告标题1", "公告内容1", "2015"],
    ["公告标题2", "公告内容2", "2016"],
    ["公告标题3", "公告内容3", "2017"]
];
// 轮播
setInterval(function(){
    vNoticeTab.index = (vNoticeTab.index+1) % 3;
}, 1000);
