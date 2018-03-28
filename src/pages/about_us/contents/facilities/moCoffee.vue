<template>
    <article-page :html="contentHTML"></article-page>
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
                <h2>咖啡厅  <span>MO COFFEE</span></h2>
                <p>白天，阳光从玻璃窗外照进屋里，印度红的窗帘留下道道阴影，与木质地板相映成趣。人在咖啡屋内沐浴着阳光，陶笛之声清悦明快，每每被陶醉。夜里，热闹和激 情充溢着咖啡馆，Jazz、印度、拉丁风情的天籁之声交合，人们于此相互交流和理解，或继续课堂的那一场辩论，这时也有浑水之鱼的情人轻柔的进行着他们的 乐章，相映成趣，那是一部交响曲。</p>
                <p>During the day, the sun shines into the room from the window, India red curtains left behind him a shadow, side by side with the wooden floor. People in the coffee room bathed in sunlight, Ocarina sound, clear and cheerful, often intoxicated. At night, lively and full of passion mo_coffee, Jazz, India, Latin sound fertilisation28, people in the mutual communication and understanding, or to continue the debate in the classroom, then there are muddy water fish lovers gently with their movement, side by side, it is a symphony.</p>
                <p class="articalImgP">
                    <img class="articalImg" alt="咖啡厅1" src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/about_us/facilities/mo_coffee/0.jpg">

                </p>
            `,
        }
    },
}
</script>

<style lang="scss">

@import "../../../../public/scss/common.scss";

</style>
