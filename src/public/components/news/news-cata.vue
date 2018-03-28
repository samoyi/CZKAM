<template>
    <ul class="news_cata" v-if="catas_ch">
        <li :class="{active_cata: index===cataIndex}"
                 v-for="(item,index) in catas_ch"
                @click="clickCata(index)">{{item}}</li>
    </ul>
</template>

<script>

export default {
    // catas_c 是作品分类的中文名数组。如果作品没有分类，传空数组
    // cataIndex 是当前要显示的某一类的index
    props: ["catas_ch", "cataIndex"],
    // props: ["cata_c", "thisIndex", "cataIndex"],
    data () {
        return {

        }
    },
    methods: {
        clickCata(index){ // 点击作品分类菜单，发送该分类的index
            this.$emit("switchcata", index);
            // this.$emit("switchcata", this.$parent.catas_c.indexOf(cata));
        },
    },
}
</script>

<style scoped lang="scss">

// @import '../../scss/constants.scss';
@import '../../scss/common.scss';

.news_cata{
    height: 22px;
    font-size: 12px;
    margin-top: 16px;
    .active_cata{
        color: $STANDARD_COLOR;
    }
    li{
        height: 22px;
        float: left;
        margin-right: 30px;
        cursor: pointer;
    }
}

</style>
