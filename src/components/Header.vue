<template>
    <div id="shortcut">
        <div class="main">
            <ul class="fl">
                <li>{{city}}</li>
            </ul>
            <ul class="fr">
                <li>
                    <a>你好，请登录</a>
                    <a>免费注册</a>
                    <!-- <router-link></router-link>
                    <router-link></router-link> -->
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
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
    /* 左浮动的地点选择 */
    .fl{
        float: left;
    }
    /* 右浮动的菜单 */
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