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
            "none", // 不渲染
        ],
        [
            {title_c: "意见留言"},
            {title_e: "COMMENTS"},
            {cata_c: []},
            {cata_e: []},
            4
        ],
    ];




let vBulletin = new Vue({
    el: ".bulletin",
    data: {
        list: [],
        nPerPage: 8, // 每页显示10个
        nPageIndex : 0, // 当前页码

        detailArticleHTML: "",
        bDisplayDetailArticle: false,
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
            template: `<li>
                <h3 @click="displayDetailArticle(liData[3])" slot="title">{{liData[0]}}</h3>
                <p slot="summary">{{stripHTMLTag(liData[1])}}</p>
                <span slot="remark">{{liData[2]}}</span>
            </li>`,
            methods: {
                // 显示详情文章页面
                displayDetailArticle(articleID){
                    if(articleID){ // 列表项图片绑定了详情文章ID才显示文章
                        let parent = this.$parent;
                        parent.bDisplayDetailArticle = true;
                        let detailArticleHTML = parent.detailArticleHTML;
                        if(!detailArticleHTML){ // 如果没有文章数据数据。一般都是没有的，因为不会预加载，且上一篇详情隐藏后也会清除数据
                            parent.detailArticleHTML = "<p>正在加载……</p>"
                            let sURL = "ajax.php?item=article_" + articleID,
                                fnSuccessCallback = function(res){
                                    parent.detailArticleHTML = JSON.parse(res);
                                },
                                fnFailCallback = function(status){
                                    console.error("加载详情页数据失败");
                                };
                            AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
                        }
                    }
                },
            },
        },
        "uploaded-article": {
            props: ["contentHtml"],
            template: `<article>
                        <div v-html="contentHtml"></div>
                        <i class="close_article" @click="closeDetailArticle">关闭文章</i>
                    </article>`,
            methods: {
                closeDetailArticle(){
                    this.$parent.detailArticleHTML = "";
                    this.$parent.bDisplayDetailArticle = false;
                },
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
        "download-item": {
            props: ["liData"],
            template: `<li>
                        <span class="title" slot="title">{{liData[0]}}</span>
                        <a class="dl_icon" :href="liData[1]" target="_self">下载<i></i></a>
                    </li>`,
        },
    },
});


let vComments = new Vue({
    el: ".comments",
    data: {
        list: [],
        nPerPage: 8, // 每页显示8个
        nPageIndex : 0, // 当前页码
        name: "", // 填写的姓名
        contact: "", // 填写的联系方式
        content: "", // 填写的留言内容
        sCodeImgSrc: "http://www.czkam.com/ajax/test.php",
        code: "",
        sTextNumberReminder: "还能输入140个字符",
        sContentError: "",
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
        refreshCode(){
            // self.src = "http://www.czkam.com/ajax/test.php?Math.random()";
            this.sCodeImgSrc = "http://www.czkam.com/ajax/test.php?" +　Math.random();
        },
        submit(){
            if( this.name.trim().length === 0){
                alert("请填写姓名");
                return;
            }
            if( this.content.trim().length < 4){
                alert("请详细填写留言内容");
                return;
            }
            if( this.code.trim().length !== 4){
                alert("验证码输入错误");
                return;
            }
            if( !this.sContentError ){
                let sURL = "http://www.czkam.com/ajax/service.php",
                    data = "name=" + encodeURIComponent(stripHTMLTag(this.name))
                    + "&contact="　+ encodeURIComponent(stripHTMLTag(this.contact))
                    + "&content="　+　encodeURIComponent(stripHTMLTag(this.content))
                    + "&vcode=" + encodeURIComponent(stripHTMLTag(this.code)),
                    fnSuccessCallback = function(){
                        this.name = "";
                        this.contact = "";
                        this.content = "";
                        this.code = "";
                        alert("提交成功。客服回复后将显示您的留言。")
                    },
                    fnFailCallback = function(status){
                        alert(status + " 提交失败，请稍后重试");
                    };
                    AJAX_POST(sURL, data, fnSuccessCallback, fnFailCallback);
            }
        },
    },
    watch: {
        content(){
            let len = [...this.content.trim()].length;
            if( len>140 ){
                this.sContentError = "留言内容超过140个字符";
                this.sTextNumberReminder = "超出" + (len-140) + "个字符";
            }
            else{
                this.sContentError = "";
                this.sTextNumberReminder = "还能输入" + (140-len) + "个字符";
            }
        },
    },
    components: {
        "comment-item": {
            props: ["liData"],
            template: `<li>
                <span class="name">{{stripHTMLTag(liData.name)}}</span>
                <p class="comment">{{stripHTMLTag(liData.content)}}</p>
                <span class="date">{{liData.data}}</span>
                <span class="replyTitle" v-if="liData.reply">回复：</span>
                <p class="reply" v-if="liData.reply">{{stripHTMLTag(liData.reply)}}</p>
                <span class="replyData" v-if="liData.reply">{{liData.replyData}}</span>
            </li>`,
            methods: {
            },
        },
    },
});

"       1232非的了是李宁类似的落实到南方两三年发送到水电费水电费是的，的方式的方式     的 的订单对方水电费水电费是的发送到发送的胜多负少发送到水电费水电费水电费水电费水电费水电费水电费水电费水电费水电费水电费水电费水电费胜多负少是否是的发送     胜多负少地方水电费水电费𠁠𠁠     "

// get data
{
    // let sURL = "ajax/service.php",
    let sURL = "http://www.czkam.com/ajax/service.php",
        fnSuccessCallback = function(res){
            let oParsed = JSON.parse(res);
            vBulletin.list = oParsed.notice.map(function(value){
                return [value.title, value.detail, value.time];
            });
            vDownload.list = oParsed.download.map(function(value){
                return [value.name, value.path];
            });
            vComments.list = oParsed.mes.map(function(value){
                return {
                    "name": value.name,
                    "content": value.content,
                    "data": value.time,
                    "reply": value.reply,
                    "replyData": value.re_time,
                };
            });
        },
        fnFailCallback = function(status){
            console.error("加载数据失败");
        };
    AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
}



// 删除字符串中的HTML标签
function stripHTMLTag(str){
    let tmpDiv = document.createElement("DIV");
    tmpDiv.innerHTML = str;
    return tmpDiv.innerText;
}
