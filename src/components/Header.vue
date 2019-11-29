<template>
    <div id="shortcut">
        <div class="main">
            <ul class="fl">
                <li >
                    <i class="el-icon-location" style="color: red;font-size: 14px;"></i>
                     &nbsp; &nbsp;{{city}}
                </li>
            </ul>
            <div class="fr">
                <span>
                    <span id="link-login">
                        <router-link class="link-login" :to="{ path: '/' }">
                            你好，请登录
                        </router-link>&nbsp;&nbsp;
                        <router-link class="link-regist style-red" :to="{ path: '/' }">
                            免费注册
                        </router-link>
                    </span>
                    <span class="navList" @mouseleave="backBgColor()">
                        <el-breadcrumb separator="|" style="font-weight:100;line-height:34px;float: right;font-size: 12px;">
                            <el-breadcrumb-item v-for="(item,index) in navList" > 
                                <p  @mouseover="changeColorBg($event,index)" 
                                    class="boxP"
                                    
                                    :class="overBgIndex == index && index == 2 ? 'bgColor' : overBgIndex == index && index == 4 ? 'bgColor' :
                                    overBgIndex == index && index == 5 ? 'bgColor' : overBgIndex == index && index == 6 ? 'bgColor' :''">
                                    <span class="paddingClass" 
                                       >
                                  <span @mouseover="changeColor($event,index)" 
                                        @mouseleave="backColor(index)"
                                  :class="{overColor:overIndex == index && index != 5 && index != 6 && index != 7}">
                                  {{item}} 
                                  </span>
                                  <i class="el-icon-arrow-down" 
                                  v-if="index == 2 || index == 4 || index == 5 || index == 6 ">
                                  </i>
                                  <div class="PurchaseBox" v-if="index == 4 && overBgIndex == 4" 
                                  @mouseenter="enterPur" @mouseout="outPur">
                                      <table class="PurchaseTable" >
                                          <tr v-for="(item,index) in PurchaseTable">
                                              <td v-for="(ite,inde) in item.PurchaseTd" class="PurchaseTd">
                                                     <router-link :to="{ path: '/' }" style="font-weight: 100"> 
                                                        <span class="PurchaseTdSpan">{{ite}} </span>
                                                    </router-link>
                                              </td>
                                          </tr>
                                      </table>
                                  </div>
                              </span>
                                </p>
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>
<style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    /* Purchase采购 */
    .PurchaseTdSpan:hover{
        color: red;
    }
    .boxP{
        display: inline-block;
        height: 32px;
        border-bottom: none;
        border: 1px solid rgba(255,255,255,0);
    }
    .PurchaseBox{
        position: absolute;
        bottom: -88px;
        left: -1px;
        text-align: left;
    }
    .PurchaseTable{
        width: 150px;
        color: darkgray;
        height: 80px;
        border: 1px solid darkgray;
        border-top: none;
    }
    .PurchaseTable tr td:nth-child(1){
        width: 40%;
        height: 50%;
    }
    .PurchaseTable tr td:nth-child(2){
        width: 60%;
        height: 50%;
    }
    .boxP>.paddingClass{
        color: darkgray;
        position: relative;
        padding: 0 4px;
    }
    .boxP>.paddingClass:first-of-type{
        color: darkgray;
        position: relative;
        padding: 0 1px;
    }
    .bgColor{
        background-color: white;
        height: 32px;
        border: 1px solid darkgray;
        border-bottom: none;
    }
    .overColor{
        color: red;
    }
    .navList:hover{
        cursor: pointer;
    }
    .navList{
        z-index: 999;
    }
    .link-login{
        font-size: 12px;
        margin-right: 3px;
        color: darkgray;
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
    }
    #shortcut{
        border-bottom: 1px solid #ddd;
        background-color: #e3e4e5;
    }
    #shortcut .main{
        height: 30px;
        line-height: 34px;
        color: #999;
        width: 1190px;
        margin: auto;
        position: relative;
        z-index: 10000;
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
    .fr .el-icon-arrow-down {
        padding-left: 5px;
    }
    .el-breadcrumb__item {
        line-height: 31px;
    }
    .navList .el-breadcrumb__separator{
        font-weight: 100;
    }

</style>
<script>
    import getCurrentCityName from "@/utils/getUserLocation";
    import {mapState} from "vuex";
    export default {
        data(){
            return{
                // 导航列表
                navList:['','我的订单','我的京东','京东会员','企业采购','客户服务','网站导航','手机京东'],
                // 默认的鼠标虚浮第几个，改变字体颜色 不可取第五六七个
                overIndex:-1,
                // 默认悬浮改变背景第几个
                overBgIndex:-1,
                // 企业购列表是否显示
                Purchasebool:false,
                // 企业购列表
                PurchaseTable:
                [{PurchaseTd:['企业购','商用场景馆']},
                 {PurchaseTd:['工业品','礼品卡']}],
            }
        },
        methods:{
            enterPur(){
                this.Purchasebool = true;
            },
            outPur(){
                this.Purchasebool = false;
            }
            ,
            getCurrentCity(){
                this.$store.state.city || getCurrentCityName().then((city) =>{
                    city =city.slice(0,city.length-1);
                    this.$store.commit("commitCity",city)
                })
            },
            changeColor(e,index){
                this.overIndex = index;
            },
            backColor(index){
                this.overIndex = -1;
            },
            changeColorBg(e,index){
                this.overBgIndex = index;
            },
            backBgColor(){
                    if(this.Purchasebool == true && this.overBgIndex ==4){
                       
                    }else{
                        this.overBgIndex = -1;
                    }
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