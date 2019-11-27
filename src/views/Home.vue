<template>
    <div>
        <Header></Header>
    </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
}
body {
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
}
ul{
    list-style: none;
}
a{
    text-decoration: none;
}

</style>

<script>
import Header from '../components/Header.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        Header,

    }
    
}
</script>