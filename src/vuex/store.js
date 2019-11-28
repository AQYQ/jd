import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    //定义的字段
    state:{
        city:'',
    },
    //改变字段需要的方法
    mutations:{
        commitCity(state,msg){
            state.city = msg;
        }
    },
    //commit的方法
    actions:{
        commitCity(context){
            context.commit("commitCity")
        }
    }
})

export default store;