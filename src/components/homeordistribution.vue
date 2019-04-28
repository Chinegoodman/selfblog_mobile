<template>
    <div class="homeordistributionbox">
        <router-link class="homeordistribution" v-if="$route.meta.name=='makenewcontent'" :to="{name:'contents'}">返回首页</router-link>
        <router-link class="homeordistribution" v-if="$route.meta.name=='contentdetails'" :to="{name:'contents'}">返回首页</router-link>
        <router-link class="homeordistribution" v-if="$route.meta.name=='contents' && iflogin" :to="{name:'makenewcontent'}">发布新内容</router-link>
    </div>
</template>

<script>
    export default {
        name: "homeordistribution",
        data(){
          return{
              pagemark:'',
          }
        },
        mounted() {
            // if(this.$router.name=='contents'){
            //     this.pagemark = 'makenewcontent'
            // }
        },
        computed:{
            iflogin(){
                return this.$store.state.iflogin
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/common";
    .homeordistributionbox{
        .homeordistribution{
            position: fixed;
            right: -0.1rem;
            top: 30%;
            width: 5em;
            padding-left: 0.5em;
            height: 3em;
            border-radius: 0.04rem;
            background: @hoverbgcolorr;
            line-height: 3em;
            text-align: left;
            transition: all linear @transtime;
            &:hover{
                right:3px;
            }
            a{
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }
</style>