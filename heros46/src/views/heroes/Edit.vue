<template>
    <div>
          <h2 class="sub-header">Add Hero</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input type="text" v-model="formData.name" class="form-control" id="name" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="gender">英雄性别</label>
            <input type="text" v-model="formData.gender" class="form-control" id="gender" placeholder="Sex">
          </div>
          <button @click.prevent="handleEdit" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>
<script>
    
    //显示当前要编辑的英雄
     //1.获取id、created()
     //2.发送请求获取数据
     //3.绑定文本框
    
    //点击按钮 实现修改
    export default{
        data(){
            return{
                formData:{
                    name:'',
                    gender:''
                },
                //获取url id  默认id
                heroId:-1
                
            }
        },
        //组件创建完毕执行
        created(){
            //获取路由参数
            this.heroId = this.$route.params.id;
            this.loadData();
        },
        methods:{
            //根据id  获取英雄对象 

           loadData(){
            this.$http
            .get(`heroes/${this.heroId}`)
            .then((res)=>{
                if(res.status==200){
                    this.formData =res.data;
                }else{
                    alert('获取失败');
                }
            })
            },
            handleEdit(){
                this.$http
                .put(`heroes/${this.heroId}`,this.formData)
                .then((res)=>{
                    if(res.status==200){
                        this.$router.push({name:'heroes'});
                    }else{
                        alert('修改失败');
                    }
                })
            }
        }
     
    };
</script>
<style>

</style>



