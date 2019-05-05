<template>
    <div class="usefulwebsite">
        <h4>开发人员经常用到的站点,欢迎参与扩充</h4>
        <div class="linksbox" :class="{nozhankai:!usefulwebsitestatus}">
            <a class="target_a" v-for="(item,index) in websitesdata" :key="index" :href="item.url" target="_blank">
                <img v-if="item.icon" :src="item.icon" :alt="item.name">
                <span>{{item.name}}</span>
            </a>
        </div>
        <div style="clear: both"></div>
        <hr style="margin-top: 0.5em">
        <div v-if="usefulwebsitestatus" @click="usefulwebsitestatus = !usefulwebsitestatus"> >>>>>>收起<<<<<< </div>
        <div v-if="!usefulwebsitestatus" @click="usefulwebsitestatus = !usefulwebsitestatus"> <<<<<<展开>>>>>> </div>
    </div>
</template>

<script>
    export default {
        name: "usefulwebsite",
        data(){
            return{
                websitesdata:[],
                usefulwebsitestatus:true,
            }
        },
        methods:{
            getsetdata(){
                let _this=this;
                this.axios.get('/json/usefulwebsite.json').then((data)=>{
                    _this.websitesdata=data.data.usefulwebsitearr
                })
            }
        },
        mounted() {
            this.getsetdata()
        }
    }
</script>

<style scoped lang="less">
    @import "./../assets/common";
    .usefulwebsite{
        padding: 1.1em;
        border: 1px solid @bordercolor;
        /*width: 300px;*/
        width: 94%;
        box-sizing: border-box;
        margin: 0.8em auto;
        border-radius: 0.4em;
        background: @white;
        h4{
            margin-bottom: 0.9em;
        }
        a{
            float: left;
            margin-bottom: 0.4em;
            img{
                margin-right: 0.4em;
            }
        }
        .linksbox{
            height: auto;
            transition: all 4s ease;
            &.nozhankai{
                height: 0;
                overflow: hidden;
            }
        }
    }
</style>