<!--
    1920及以上时出现的版块选择滑块
-->

<template>
    <div id="blockSelector">
        <div class="left_arrow"></div>
        <ul>
            <li v-for="name in tabNames">
                {{name[0]}}<br />
                <i></i><br />
                <span>{{name[1]}}</span>
            </li>
        </ul>
        <div class="right_arrow"></div>
    </div>
</template>

<script>


export default {
    data () {
        return {
            tabNames: [ // 目前的样式和交互都要求必须是4项
                ['展览', 'EXHIBITION'],
                ['公共教育', 'PUBLIC EDUCATION'],
                ['公告', 'BULLETIN'],
                ['美术馆', 'ART MUSEUM'],
            ]
        }
    },
    mounted(){
        let oBlockWrapper = document.querySelector("#blockWrapper"),
            oBlockSelector = document.querySelector("#blockSelector"),
            aSelectorList = oBlockSelector.querySelectorAll("li"),
            nBlockNum = aSelectorList.length,
            oLeftArrow = oBlockSelector.querySelector(".left_arrow"),
            oRightArrow = oBlockSelector.querySelector(".right_arrow"),
            aBlockIcon = oBlockSelector.querySelectorAll("i"),
            index = 0;

        aBlockIcon[0].style.backgroundColor = "white";

        for(let i=0; i<nBlockNum; i++){
            aSelectorList[i].addEventListener("click", function(){
                index = i;
                // 413px 是一块的宽度加一个margin
                oBlockWrapper.style.transform = "translate3d(-" + i*413 + "px, 0, 0)";
                oBlockWrapper.style.webkitTransform = "translate3d(-" + i*413 + "px, 0, 0)";
                aBlockIcon[0].style.backgroundColor = "#b3b3b3";
                aBlockIcon[1].style.backgroundColor = "#b3b3b3";
                aBlockIcon[2].style.backgroundColor = "#b3b3b3";
                aBlockIcon[3].style.backgroundColor = "#b3b3b3";
                aBlockIcon[i].style.backgroundColor = "white";
            });
        }
        oRightArrow.addEventListener("click", function(){
            if( index !== 3 ){
                index++;
                oBlockWrapper.style.transform = "translate3d(-" + index*413 + "px, 0, 0)";
                oBlockWrapper.style.webkitTransform = "translate3d(-" + index*413 + "px, 0, 0)";
                aBlockIcon[index-1].style.backgroundColor = "#b3b3b3";
                aBlockIcon[index].style.backgroundColor = "white";
            }
        });
        oLeftArrow.addEventListener("click", function(){
            if( index ){
                index--;
                oBlockWrapper.style.transform = "translate3d(-" + index*413 + "px, 0, 0)";
                oBlockWrapper.style.webkitTransform = "translate3d(-" + index*413 + "px, 0, 0)";
                aBlockIcon[index+1].style.backgroundColor = "#b3b3b3";
                aBlockIcon[index].style.backgroundColor = "white";
            }
        });
    },
}
</script>


<style scoped lang="scss">


@import "../../public/scss/common.scss";
@import "./index.scss";


#blockSelector{
    display: none;
    @media (min-width: 1920px){
        display: block;
        position: relative;
        text-align: center;
        width: 735px; height: 29px;
        margin: 60px auto auto auto;
        background:{
            image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/sprite.png");
            position: 0 29px;
        }
        ul{
            display: inline-block;
            position: relative;
            text-align: left;
            width: 100%; height: 100%;
            font-size: 14px;
            li{
                position: absolute; top: -12px;
                color: $BASIC_GRAY;
                cursor: pointer;
                i{
                    font-size: 18px;
                    background-color: $BASIC_GRAY;
                    box-sizing: border-box;
                    border: 1px solid $BASIC_GRAY;
                    border-radius: 1000%;
                    width: 10px;
                    height: 10px;
                    display: block;
                    position: relative;
                    top: 7px;
                }
                span{
                    font-size: 10px;
                }
            }
            li:nth-child(1){
                left: 58px;
            }
            li:nth-child(2){
                left: 256px;
            }
            li:nth-child(3){
                left: 454px;
            }
            li:nth-child(4){
                left: 605px;
                text-align: right;
                i{
                    position: relative;
                    right: -55px;
                }
            }
        }
        .left_arrow, .right_arrow{
            width: 30px; height: 100%;
            position: absolute; top: 0;
            cursor: pointer;
        }
        .left_arrow{
            left: 0;
             z-index: 1;
        }
        .right_arrow{
            right: 0;
        }
    }
}
</style>
