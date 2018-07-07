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
          <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>
<script>
    
    export default{
        data(){
            return {
                formData:{
                    name:'',
                    gender:''
                }
            }
        },
        methods:{
            handleAdd(){
                this.$http
                .post('heroes',this.formData)
                .then((res)=>{
                    const{status,data}=res;
                    if(status==201){
                        this.$router.push({name:'heroes'});
                    }else{
                        alert('失败');
                    }
                })
            }
        }
    };
</script>
<style>

</style>

