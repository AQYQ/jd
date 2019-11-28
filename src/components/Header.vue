<template>
    <div id="shortcut">
        <div class="main">
            <ul class="fl">
                <li ><i class="el-icon-location" style="color: red;font-size: 14px;"></i> &nbsp; &nbsp;{{city}}</li>
            </ul>
            <div class="fr">
                <span>
                    <span id="link-login">
                        <router-link class="link-login" :to="{ path: '/' }">你好，请登录</router-link>
                        &nbsp;&nbsp;
                        <router-link class="link-regist style-red" :to="{ path: '/' }">免费注册</router-link>
                    </span>
                    <span class="navList">
                        <el-breadcrumb separator="|" style="font-weight:100;line-height:30px;float: right;font-size: 12px;">
                            <el-breadcrumb-item v-for="(item,index) in navList" > 
                                <span class="paddingClass" 
                                          :class="overIndex == index && index == 2 ? 'bgColor' : overIndex == index && index == 4 ? 'bgColor' :
                                          overIndex == index && index == 5 ? 'bgColor' : overIndex == index && index == 6 ? 'bgColor' :''">
                                    <span @mouseover="changeColor($event,index)" 
                                          @mouseleave="backColor"
                                    :class="{overColor:overIndex == index && index != 5 && index != 6 && index != 7}">
                                    {{item}} 
                                    </span>
                                    <i class="el-icon-arrow-down" 
                                    v-if="index == 2 || index == 4 || index == 5 || index == 6 ">
                                    </i>
                                </span>
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>
<style>
    .paddingClass{
        padding: 0 3px;
    }
    span{
        display: inline-block;
    }
    .bgColor{
        background-color: white;
        display: inline-block;
        height: 30px;
    }
    .overColor{
        display: inline-block;
        color: red;
    }
    .navList:hover{
        cursor: pointer;
    }
    .link-login{
        font-size: 12px;
        margin-right: 3px;
    }
    .link-login:hover{
        color: red;
        cursor: pointer;
    }
    #link-login{
        float: left;
    }
    .link-regist:hover{
        cursor: pointer;
    }
    .style-red{
        color: red;
        margin-right: 4px;
    }
    #shortcut{
        border-bottom: 1px solid #ddd;
        background-color: #e3e4e5;
    }
    #shortcut .main{
        height: 30px;
        line-height: 30px;
        color: #999;
        width: 1190px;
        margin: auto;
    }
    .fl, #shortcut li{
        line-height: 34px;
        float: left;
    }
    .fl li{
        font-size: 12px;
    }
    .fr{
        float: right;
    }

</style>
<script>
    import getCurrentCityName from "@/utils/getUserLocation";
    import {mapState} from "vuex";
    export default {
        data(){
            return{
                activeIndex: '1',
                navList:['','我的订单','我的京东','京东会员','企业采购','客户服务','网站导航','手机京东'],
                overIndex:-1,
            }
        },
        methods:{
            getCurrentCity(){
                console.log(getCurrentCityName(),'getCurrentCityName');
                this.$store.state.city || getCurrentCityName().then((city) =>{
                    console.log(city,'city');
                    city =city.slice(0,city.length-1);
                    this.$store.commit("commitCity",city)
                })
            },
            changeColor(e,index){
                this.overIndex = index;
            },
            backColor(){
                this.overIndex = -1;
            }
        },
        created(){
    
        },
        mounted(){
            this.getCurrentCity();
        },
        computed:{
            ...mapState([
                'city',
            ])
        }
    }
    </script>