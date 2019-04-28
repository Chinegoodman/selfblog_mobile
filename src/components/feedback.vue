<template>
    <div class="feedback" :class="{active:feedbackstatus}">
        <i>x</i>
        <p @click="feedbackstatus = !feedbackstatus">有意见想反馈</p>
        <div class="box">
            <textarea :maxlength="maxlength" placeholder="欢迎提笔给予意见建议,谢谢">{{feedback}}</textarea>
            <div class="btns">
                <div @click="submitfeedback">提交反馈</div>
                <div @click="cancle">暂时没啥要说的</div>
                <div class="smallbtn" @click="feedbackhide">近期不再显示</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "feedback",
        data(){
            return{
                maxlength:80,
                feedback:'',
                feedbackstatus:false,
            }
        },
        methods:{
            submitfeedback(){

            },
            cancle(){

            },
            feedbackhide(){

            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/common.less";
    .feedback{
        position: fixed;
        right: -22em;
        bottom: -16vh;
        border-radius: 5px;
        padding: 2em 0.5em 0.5em 0.5em;
        box-sizing: border-box;
        background: @hoverbgcolorr;
        transition: all linear @transtime;
        &.active{
            right: 0.5em;
            bottom: 0.5em;
        }
        &>i{
            position: absolute;
            left:0 ;
            top:0 ;
        }
        &>p{
            position: absolute;
            left:-8% ;
            top:0 ;
            background-color: rgba(255,255,255,0.8);
            border: 1px solid @bordercolor;
            font-size: @fontsizesmall;
            line-height: 2em;
            padding: 0 0.4em;
            border-radius: 5px;
        }
        .box{
            textarea{
                width: 22em;
                height: 11em;
                margin: 0 auto;
                display: block;
                border-radius: 5px;
                outline: none;
                box-sizing: border-box;
                padding: 1em;
            }
            .btns{
                display: flex;
                justify-content: space-around;
                padding-top: 0.5em;
                &>div{
                    background-color: @white;
                    border: 1px solid @bordercolor;
                    line-height: 1.6em;
                    padding: 0 0.2em;
                    border-radius: 0.2em;
                    cursor: pointer;
                    color: @blue;
                }
                &>div.smallbtn{
                    background-color: #ccc;
                    color: @white;
                }
            }
        }
    }
</style>