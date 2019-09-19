import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'lib-flexible/flexible.js'
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
