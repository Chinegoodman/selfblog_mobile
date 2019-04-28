<template>
    <div class="otherwebsite">
        <div class="otherwebsitetitle">老版本</div>
        <div class="linksbox">
            <a class="target_a" v-for="(item,index) in websitesdata" :key="index" :href="item.url" target="_blank">
                <img v-if="item.icon" :src="item.icon" :alt="item.name">
                <span>{{item.name}}</span>
            </a>
        </div>
        <div style="clear: both;"></div>
    </div>
</template>

<script>
    export default {
        name: "otherwebsite",
        data(){
            return{
                websitesdata:[
                    {
                        url:'http://www.bufulaidawo.com',
                        name:'N年前的备份',
                        // icon:'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super'
                    },
                    {
                        url:'http://www.ooo0o.com/old',
                        name:'ooo0o老版本',
                        // icon:'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/common";
    .otherwebsite{
        padding: 0;
        border: 1px solid rgba(0, 0, 0, 0.0975);
        border-bottom: none;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        width: 94%;
        background: #fff;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        .otherwebsitetitle{
            float: left;
            /*width: 1.3em;*/
            padding: 0 0.3em;
            border-right: 1px solid @bordercolor;
            color: @linkcolor;
            line-height: 4em;
        }
        .linksbox{
            padding-left: 2.1em;
            min-height: 4em;
            display: flex;
            justify-content: space-around;
            align-items: center;
            a{
                /*margin-top: 10px;*/
                color: @linkcolor;
                font-size: @fontsizesmall;
            }
        }
    }
</style>