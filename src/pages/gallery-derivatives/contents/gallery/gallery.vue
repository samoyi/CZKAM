<template>
    <works-page :works="allData.gallery" :title="'画廊'"></works-page>
</template>

<script>
import worksPage from '../../../../public/components/works/works.vue';
export default {
    props: ['allData'],
    data () {
        return {
        }
    },
    components: {
        worksPage,
    },

}
</script>

<style scoped lang="scss">
// @import "../../../../public/scss/basic.scss";
@import "../../../../public/scss/common.scss";
</style>
