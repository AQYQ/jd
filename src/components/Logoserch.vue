<template>
    <div id="header">
        <div class="w">
            <div id="logo" class="logo">
                <h1 class="logo_tit">
                    <a href="//www.jd.com" class="logo_tit_lk">京东</a>
                </h1>
                <a 
                    href="https://hellojoy.jd.com/?babelChannel=1518455&activityId=9680&source=01" 
                    class="logo_scene logo_scene_hide" 
                    aria-label="JOY寻宝 经典美味零食"
                >
                    <div class="logo_scene_img" style="background-image: url('../../public/images/logofoode.gif')"></div>
                    <span class="logo_scene_text" style="color: rgb(155, 120, 83);">经典美味零食</span>
                    <span class="logo_scene_btn" style="color: rgb(155, 120, 83); background-color: rgb(255, 255, 255);">去看看</span>
                </a>
            </div>
        </div>
    </div>
</template>

<style>
#header{
    background: #fff;
    border-bottom: 1px solid #ddd;
}
#header .w {
    position: relative;
    z-index: 11;
    height: 140px;
}
.w {
    margin: auto;
    width: 1190px;
}
#logo, .logo_tit {
    position: absolute;
}
#logo {
    z-index: 2;
    left: 0;
    top: 10px;
    width: 190px;
    height: 120px;
    background-color: #fff;
}
.logo_tit {
    width: 100%;
    height: 100%;
}
.logo_tit_lk {
    background-image: url('../../public/images/sprite.png');
    background-position: 0 0;
    background-repeat: no-repeat;
    overflow: hidden;
    display: block;
    width: 190px;
    height: 120px;
    font-size: 0;
}
.logo_scene_hide {
    display: none;
}
.logo_scene {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    text-align: center;
}
.logo_scene_withBg{
    background: #fff;
}
.logo_scene_img {
    display: block;
    width: 134px;
    height: 120px;
    background-color: #fff;
    opacity: 0;
    margin: 0 auto;
    filter: alpha(opacity=0);
    clear: both;
    background-size: auto 100%;
}
.logo_scene_btn, .logo_scene_text {
    position: absolute;
    line-height: 20px;
    left: 50%;
    opacity: 0;
    filter: alpha(opacity=0);
}
.logo_scene_text {
    width: 120px;
    font-size: 16px;
    margin-left: -60px;
    top: 36px;
    font-weight: 700;
    background: transparent;
    color: #333;
    text-align: center;
    z-index: 1;
}
.logo_scene_btn {
    width: 60px;
    height: 20px;
    bottom: 35px;
    margin-left: -32px;
    text-indent: 4px;
    color: #555;
    font-size: 12px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-color: #fff;
    border-radius: 11px;
}
</style>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        // $('.')
    }
}
</script>