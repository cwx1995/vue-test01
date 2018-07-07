<template>
 <div id="root">
   <!-- //头部  -->
   <app-header></app-header>
  <div class="container-fluid">
    <div class="row">
      <!-- 侧边栏 -->
  <app-siderbar></app-siderbar>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <router-view></router-view>
    </div>
  </div>
 </div>
 </div>
</template>

<script>
// 导入header组件
import AppHeader from './components/AppHeader.vue';
import AppSiderbar from './components/AppSiderbar.vue';

//ES6到处模块的语法
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components:{
    AppHeader,
    AppSiderbar
  }
};
//webpack 支持各种模块的语法 commonjs amd es6等
// module.exports = {

// };
</script>

<style>
</style>
