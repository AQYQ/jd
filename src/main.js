import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './vuex/store.js'
Vue.use(ElementUi);
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
