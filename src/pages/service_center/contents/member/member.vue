<template>
    <article-page :html="contentHTML" class="member_ship"></article-page>
</template>

<script>

import articlePage from '../../../../public/components/article.vue';
export default {
    components:{
        articlePage,
    },
    data () {
        return {
            contentHTML: `
                <h2>会员  <span>MEMBER SHIP</span></h2>
                <p>
                    愿您能和我们一道，<br>
                    共同推动传统艺术与当代艺术在中国的发展！<br>
                    分享艺术带来的视觉盛宴与精神财富！
                </p>
                <p>
                    我们愿将艺术坚实地扎根在公众文化生活中，增强社会大众身份与文化认同感。<br>
                    我们更愿肩负传承民族文化艺术的时代责任，投身于地区文化艺术生态的建设，<br>
                    创造今天中国真正的当代艺术。
                </p>
                <p>
                    感谢您对公益美术馆事业的支持！
                </p>
                <ol>
                    <h3>所有会员权益</h3>
                    <li>全年免费参观崔振宽美术馆展览</li>
                    <li>免费获悉崔振宽美术馆展览信息</li>
                    <li>获得重要展览的开幕式邀请</li>
                    <li>获得崔振宽美术馆重要展览会员专场导览</li>
                    <li>有机会获得参加与崔振宽美术馆相关的艺术博览会</li>
                    <li>优先预约并参加崔振宽美术馆的公共教育活动（亲子活动坊、山水高研班、艺术大讲堂）</li>
                    <li>享受崔振宽美术馆收费的公共教育活动折扣（亲子活动坊可低至5折，其他视活动内容而定）</li>
                    <li>美术馆展览期间（除展览开幕式或大型活动外），参观美术馆展览可免费使用停车场</li>
                </ol>
                <ul>
                    <h3>特别会员权益</h3>
                    <ol>
                        <h4>院校会员（申请者必须是大中专院校的学生、教师 ） 100元/年</h4>
                        <li>享受所有会员权益</li>
                        <li>若为高校学生，在每年生日时可携带3-5名好友免费参观当月美术馆展览</li>
                        <li>若为高校教师，可领8-10名学生免费参观美术馆</li>
                        <li>崔振宽美术馆咖啡厅、艺术书店、艺术衍生品、茶餐厅、艺术酒店等消费95折优惠</li>
                        <li>获赠全年4本《崔振宽美术馆馆刊》</li>
                    </ol>
                    <ol>
                        <h4>个人会员（申请者为社会大众）300元/年</h4>
                        <li>享受所有会员权益</li>
                        <li>会员期限内，可携1名好友免费参观美术馆的收费展览</li>
                        <li>崔振宽美术馆咖啡厅、艺术书店、艺术衍生品、茶餐厅、艺术酒店等消费95折优惠</li>
                        <li>获赠全年4本《崔振宽美术馆馆刊》</li>
                    </ol>
                    <ol>
                        <h4>家庭会员（申请者须为育有子女的家庭）500元/年</h4>
                        <li>享受所有会员权益</li>
                        <li>可免费参与美术馆针对家庭所开设的公共教育活动2次</li>
                        <li>家庭会员享有推荐其他家庭首次参加公教活动费用5折</li>
                        <li>崔振宽美术馆咖啡厅、艺术书店、艺术衍生品、茶餐厅、艺术酒店等消费9折优惠</li>
                        <li>获赠全年4本《崔振宽美术馆馆刊》</li>
                    </ol>
                    <ol>
                        <h4>贵宾会员（社会大众）2000元/年</h4>
                        <li>享受所有会员权益</li>
                        <li>崔振宽美术馆咖啡厅、艺术书店、艺术衍生品、茶餐厅、艺术酒店等消费85折优惠</li>
                        <li>获邀参加崔振宽美术馆艺术展开幕酒会</li>
                        <li>免费在崔振宽美术馆举办读书分享会、小型沙龙、生日Party等5-8人聚会</li>
                        <li>获赠全年4本《崔振宽美术馆馆刊》</li>
                    </ol>
                </ul>
            `,
        }
    },
}
</script>

<style lang="scss">

@import "../../../../public/scss/common.scss";

.member_ship{
    color: $BASIC_GRAY !important; // 覆盖 .article的黑色
    font-size: 12px;
    >p{
        margin-top: 24px;
    }
    >ol, >ul{
        margin-top: 50px;
    }
    >ul{
        ol{
            margin-top: 20px;
        }
    }
    h3{
        font-weight: bold;
        margin-bottom: 14px;
    }
    h3, h4{
        color: $BASIC_BLACK;
    }
    ol{
        li{
            list-style-type: decimal;
            list-style-position:inside;
        }
    }
}
</style>
