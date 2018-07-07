<template>
    <div>
       <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">Add</a> -->
        <router-link :to="{name:'heroesAdd'}" class="btn btn-success">Add</router-link>
        
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>名称</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr :key="item.id" v-for="(item,index) in list">
                <td>{{index + 1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>
                  <!-- <a href="edit.html">edit</a> -->
                  <router-link :to="{name:'heroesEdit',params:{id:item.id}}" >Edit</router-link>
                  &nbsp;&nbsp;
                  <a  @click.prevent="handleDel(item.id)" href="javascript:window.confirm('Are you sure?')">delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
</template>
<script>
//导入axios模块
import axios from 'axios';

   export default{
     data(){
       return {
         list:[],
         
       }
     },
     created(){
       this.loadData();
     },
     methods:{
       //加载英雄列表
       loadData(){
         axios
         .get('http://localhost:3000/heroes')
         .then((res)=>{
          //  console.log(res);
           const {status,data}=res;
           if(status==200){
             this.list = data;
            
           }
         });
       },
       handleDel(id){
         if(!confirm('确定删除吗?')){
           return;
         }
         axios
         .delete(`http://localhost:3000/heroes/${id}`)
         .then((res)=>{
           const{status,data}=res;
           if(status==200){
             this.loadData();
            // this.list = data;
           }else{
             alert('删除失败');
           }
         })
         .catch((err)=>{
           console.log(err);
           
         })
       }
     }
   } ;
</script>
<style>

</style>

