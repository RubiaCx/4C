// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import * as echarts from "echarts";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //新添加，避免后期打包样式不同，要放在import App from './App';之前
import 'element-ui/lib/theme-chalk/display.css'
import '../static/css/global.css'
// import echarts from 'echarts'

Vue.use(ElementUI)

import axios from 'axios'
// import VueAxios from "vue-axios";


// Vue.use(VueAxios, axios)
    // Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://localhost:8080/'
Vue.prototype.$http = axios

// Vue.prototype.$echarts = echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;
import qs from 'qs';
Vue.prototype.qs = qs;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
