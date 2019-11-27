<template>
    <div id="shortcut">
        <div class="main">
            <ul class="fl">
                <li>北京</li>
            </ul>
            <ul class="fr">
                <li id="ttbar-login" class="shortcut_btn fore1 dropdown">
                    <a class="link-login">你好，请登录</a>
                    &nbsp;&nbsp;
                    <a class="link-regist style-red">免费注册</a>
                    <!-- <router-link></router-link>
                    <router-link></router-link> -->
                </li>
                <li class="spacer"></li>

                <li class="shortcut_btn fore2">
                    <div class="dt">
                        <a>我的订单</a>
                    </div>
                </li>
                <li class="spacer"></li>

                <li id="ttbar-myjd" class="shortcut_btn fore3 dropdown">
                    <div class="dt cw-icon">
                        <a>我的京东</a>
                    </div>
                    <div class="dd dropdown-layer">
                        <div class="myjdlist">
                            <div class="fore1">
                                <div class="item">
                                    <a>
                                        待处理订单
                                        <span class="shortcut_num style-red"></span>
                                    </a>
                                </div>
                                <div class="item">
                                    <a>返修退换货</a>
                                </div>
                                <div class="item">
                                    <a>
                                        降价商品
                                        <span class="shortcut_num style-red"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="fore2">
                                <div class="item">
                                    <a>
                                        消息
                                        <span class="shortcut_num style-red"></span>
                                    </a>
                                </div>
                                <div class="item">
                                    <a>
                                        我的问答
                                        <span class="shortcut_num style-red"></span>
                                    </a>
                                </div>
                                <div class="item">
                                    <a>我的关注</a>
                                </div>
                            </div>
                        </div>
                        <div class="myjdlist myjdlist_2">
                            <div class="fore1">
                                <div class="item">
                                    <a>我的京豆</a>
                                </div>
                                <div class="item baitiao">
                                    <a>我的白条</a>
                                </div>
                            </div>
                            <div class="fore2">
                                <div class="item">
                                    <a>
                                        我的优惠券
                                        <span class="shortcut_num style-red"></span>
                                    </a>
                                </div>
                                <div class="item">
                                    <a>我的理财</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="spacer"></li>

                <li class="shortcut_btn fore4">
                    <div class="dt">
                        <a>京东会员</a>
                    </div>
                </li>
                <li class="spacer"></li>

                <li class="shortcut_btn fore5 dropdown className shortcut_btn_company">
                    
                </li>
                <li class="spacer"></li>
                
                <li id="ttbar-serv" class="shortcut_btn fore8 dropdown"></li>
                <li class="spacer"></li>
                
                <li id="ttbar-navs" class="shortcut_btn fore9 dropdown"></li>
                <li class="spacer"></li>

                <li id="J_mobile" class="shortcut_btn fore10 mobile"></li>
            </ul>
        </div>
    </div>
</template>
<style>
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
        float: left;
    }
    .fr{
        float: right;
    }
    /* 小竖线 */
    #shortcut li.spacer {
        overflow: hidden;
        margin: 11px 5px 0;
        width: 1px;
        height: 10px;
        background-color: #ccc;
    }
    #ttbar-login {
        margin-right: 8px;
        z-index: 20;
    }
    .dorpdown, .shortcut_btn, .mobile {
        position: relative;
        z-index: 21;
    }
    #shortcut a {
        color: #999;
    }
    #shortcut .dt {
        padding-left: 7px;
        padding-right: 7px;
    }
    #shortcut .cw-icon {
        height: 28px;
        line-height: 28px;
    }
    .cw-icon {
        overflow: hidden;
        position: relative;
        z-index: 1;
        float: left;
        border: 1px solid #e3e4e5;
    }
    .fr .cw-icon {
        padding-right: 20px!important;
    }
    #ttbar-myjd .dorpdown-layer, #ttbar-myjd .dropdown-layer {
        left: 0;
        width: 280px;
    }
    #shortcut .dorpdown-layer, #shortcut .dropdown-layer {
        top: 30px;
    }
    #shortcut .dd {
        line-height: 24px;
    }
    .dorpdown-layer, .dropdown-layer {
        display: none;
        position: absolute;
        border: 1px solid #ccc;
        background-color: #fff;
        -webkit-box-shadow: 1px 2px 1px rgba(0,0,0,.1);
        box-shadow: 1px 2px 1px rgba(0,0,0,.1);
    }
    #ttbar-myjd .myjdlist {
        padding: 10px 0 10px 15px;
        overflow: hidden;
    }
    #ttbar-myjd .myjdlist .fore1, #ttbar-myjd .myjdlist .fore2 {
        float: left;
        width: 126px;
    }
    #shortcut .style-red {
        color: #f10215;
    }
    .shortcut_num {
        margin-left: 4px;
    }
    #ttbar-myjd .myjdlist_2 {
        border-top: 1px solid #f1f1f1;
    }
</style>