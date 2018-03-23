<template>
    <div>
    <li :class="{active_cata: thisIndex===cataIndex}"
            @click="clickCata(cata_c)">{{cata_c}}</li>
        </div>
</template>

<script>

export default {
    props: ["cata_c", "thisIndex", "cataIndex"],
    data () {
        return {

        }
    },
    methods: {
        clickCata(cata){
            this.$emit("switchcata", this.$parent.catas_c.indexOf(cata));
        },
    },
}
</script>

<style scoped lang="scss">

@import '../basic.scss';
@import '../common.scss';

</style>
