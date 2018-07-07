
import Vue from 'vue';
import VueRouter from 'vue-router';
//引入三个list.vue  view内的
//路由名 引入的地址
import HeroList from '../views/heroes/List.vue';
import WeaponList from '../views/weapons/List.vue';
import EquipList from '../views/equips/List.vue';
import HeroAdd from '../views/heroes/Add.vue';

//插件注册
Vue.use(VueRouter);

//配置路由
const router = new VueRouter({
    linkExactActiveClass: 'active',
    //路由规则
    routes:[
        {name: 'home',path:'/',redirect:{name:'heroes'}},
        //名字   跳转地址  路由名
        {name: 'heroes',path:'/heroes',component:HeroList},
          {name: 'weapons',path:'/weapons',component:WeaponList},  
            {name: 'equips',path:'/equips',component:EquipList},
            {name:'heroesAdd',path:'./heroes/heroesAdd',component:HeroAdd}
    ]
});
export default router;