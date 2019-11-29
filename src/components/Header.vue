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
                    <span class="navList">
                        <el-breadcrumb separator="|" style="font-weight:100;line-height:34px;float: right;font-size: 12px;">
                            <el-breadcrumb-item v-for="(item,index) in navList" > 
                                <p  @mouseover="changeColorBg($event,index)" 
                                    class="boxP"
                                    @mouseleave="backBgColor(index)"
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
                                  <div class="PurchaseBox" v-if="index == 4 &&  overBgIndex == index" @mouseleave="hidPurchaseTable">
                                      <table class="PurchaseTable" >
                                          <tr>
                                              <td>
                                                  企业购
                                              </td>
                                              <td>
                                                  商用场景馆
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  工业品
                                              </td>
                                              <td>
                                                  礼品卡
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
    .boxP{
        display: inline-block;
        height: 32px;
        border-bottom: none;
        border: 1px solid rgba(255,255,255,0);
    }
    .PurchaseBox{
        position: absolute;
        bottom: -85px;
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
        margin-right: 20px;
    }
    .fr .el-icon-arrow-down {
        padding-left: 5px;
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
                overBgIndex:-1,
                Purchasebool:false,
            }
        },
        methods:{
            hidPurchaseTable(){
                this.overIndex = -1;
            },
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
                if(index == 4){
                    this.Purchasebool = true;
                }else{
                    this.Purchasebool = false;
                }
            },
            changeColorBg(e,index){
                // this.overIndex = -1;
                this.overBgIndex = index;
            },
            backColor(index){
                if(index == 4){
                    this.overIndex = 4;
                    this.Purchasebool = true;
                }else{
                    this.overIndex = -1;
                }
            },
            backBgColor(index){
                this.overBgIndex = -1;
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