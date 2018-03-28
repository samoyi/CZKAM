<template>
    <section class="comments">
        <h2>意见留言  <span>COMMENTS</span></h2>
        <div>
            <div class="form">
                <p class="name">姓名：<input v-model.trim="name" type="text" maxlength="7" placeholder="（必填）" /></p>
                <p class="contact">联系方式：<input v-model.trim="contact" type="text" maxlength="50" placeholder="（选填）" /></p>
                <div class="msgContent">
                    留言内容：<textarea v-model.trim="content" required></textarea>
                    <p class="wordsNumTip">{{sTextNumberReminder}}</p>
                    <p class="errTip">{{sContentTooLongTip}}</p>
                </div>
                <div class="codeArea">
                    验证码：<input v-model.trim="code" type="text" name="code" size="4" />
                    <img :src="sCodeImgSrc" @click="refreshCode"/>
                    <input @click="submit" type="button" value="提交" />
                </div>
            </div>
            <ul>
                <li v-for="item in displayedItem">
                    <span class="name">{{stripHTMLTag(item.name)}}</span>：
                    <p class="comment">{{stripHTMLTag(item.content)}}</p>
                    <span class="date">{{item.date}}</span>
                    <br />
                    <span class="replyTitle" v-if="item.reply">回复：</span>
                    <p class="reply" v-if="item.reply">{{stripHTMLTag(item.reply)}}</p>
                    <span class="replyDate" v-if="item.reply">{{item.replyDate}}</span>
                </li>
            </ul>
            <list-pagination :page-num="pageNum" :per-page="nPerPage"
                    :pageIndex="nPageIndex" @switchpagination="switchpage">
            </list-pagination>
        </div>
    </section>

    </section>
</template>

<script>

import {fetchJSON, stripHTMLTag} from '../../../../public/js/myUtil.js';
import listPagination from '../../../../public/components/list-pagination.vue';

export default {
    data () {
        return {
            list: [], // 留言列表
            nPerPage: 8,
            nPageIndex : 0,
            name: "", // 填写的姓名
            contact: "", // 填写的联系方式
            content: "", // 填写的留言内容
            sCodeImgSrc: "http://www.czkam.com/ajax/test.php", // 请求验证码图片的地址
            code: "", // 用户输入的验证码
            sTextNumberReminder: "还能输入140个字符", // 字数限制提示文字
            sContentTooLongTip: "", // 留言内容文字过长时的提示文字
        }
    },
    components: {
        listPagination,
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
        stripHTMLTag(str){
            return stripHTMLTag(str);
        },
        refreshCode(){ // 请求验证码图片
            this.sCodeImgSrc = "http://www.czkam.com/ajax/test.php?" +　Math.random();
        },
        submit(){
            if( this.name.length === 0){
                alert("请填写姓名");
                return;
            }
            if( this.content.length < 4){
                alert("请详细填写留言内容");
                return;
            }
            if( this.code.length !== 4){
                alert("验证码输入错误");
                return;
            }
            if( !this.sContentTooLongTip ){ // 留言内容长度没有超出
                const sURL = "http://www.czkam.com/ajax/service.php";
                const oPostBody = {
                    name: this.stripHTMLTag(this.name),
                    contact: this.stripHTMLTag(this.contact),
                    content: this.stripHTMLTag(this.content),
                    vcode: this.stripHTMLTag(this.code),
                };
                this.$http.post(sURL, oPostBody)
                    .then(res=>{
                        if( res.body.trim() === "FALSE" ){
                            alert("验证码错误");
                            this.refreshCode();
                        }
                        else{
                            alert("提交成功。客服回复后将显示您的留言。")

                            let date = new Date(),
                                year = date.getFullYear(),
                                month = date.getMonth()+1,
                                day = date.getDay();

                            // 在前端页面上显示提交的留言，刷新后消失
                            // 后台客服回复之后才会真正显示
                            this.list.unshift({
                                "name": this.name,
                                "content": this.content,
                                "time": year+"-"+month+"-"+day,
                            });

                            // 初始化表单
                            this.name = "";
                            this.contact = "";
                            this.content = "";
                            this.code = "";
                            this.refreshCode();
                        }
                    })
                    .catch(err=>{
                        throw new Error(err);
                    });
            }
        },
    },
    watch: {
        content(){
            let len = [...this.content.trim()].length;
            if( len>140 ){
                this.sContentTooLongTip = "留言内容超过140个字符";
                this.sTextNumberReminder = "超出" + (len-140) + "个字符";
            }
            else{
                this.sContentTooLongTip = "";
                this.sTextNumberReminder = "还能输入" + (140-len) + "个字符";
            }
        },
    },
    mounted(){
        fetchJSON.call(this, 'comment', 'list');
    },
}
</script>

<style scoped lang="scss">

@import "../../../../public/scss/common.scss";

.comments{
    >div{
        .form{
            font-size: 14px;
            position: relative;
            height: 280px;
            .name{
                position: absolute;
                top: 14px;
            }
            .contact{
                position: absolute;
                top: 14px; left: 280px;
                input{
                    width: 210px;
                }
            }
            .msgContent{
                position: absolute;
                top: 70px;
                textarea{
                    width: 490px;
                    height: 70px;
                    resize: none;
                }
                .wordsNumTip, .errTip{
                    position: absolute; bottom: -28px;
                }
                .wordsNumTip{
                    left: 70px;
                }
                .errTip{
                    right: 0;
                    color: red;
                }
            }
            .codeArea{
                position: absolute; top: 210px;
            }
        }
        >ul{
            margin-top: 70px;
            background-color: #f2f2f2;
            box-sizing: border-box;
            font-size: 0.8em;
            li{
                border-bottom: 1px dotted;
                padding: 21px 14px;
                box-sizing: border-box;
                position: relative;
                .date, .replyDate{
                    position: absolute;
                    right: 14px;
                }
                .comment, .reply{
                    width: 90%; margin-left: 5%;
                    color: $BASIC_GRAY;
                }
                .date{
                    top: 21px;
                }
                .replyDate{
                    top: 84px;
                }
            }
            li:last-child{
                border: none;
            }
        }
    }
}
</style>
