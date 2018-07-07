//const Vue = require('vue');
import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
import MyAxios from './plugins/myaxios';

//注册myaxios插件
Vue.use(MyAxios);

// //导入axios 公用
// import axios from 'axios';
// //设置baseurl
// axios.defaults.baseURL = 'http://localhost:3000/';
// //配置$.http  使vue所有实例都具有
// Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
