<template>
  <div>
    <!--双向数据绑定-->
    <input type="text" v-model.lazy="msg"/>
    <p>{{msg}}</p>
  </div>
</template>

<script>
    export default {
        name: "fromdata",
        data(){
          return{
            msg:"hello"
          }
        },
      watch:{
          // 监听msg的值
        msg:function(data){
          if(data=="gaga"){
            console.log('sfhsjkf');
          }
        }
      }
    }
</script>

<style scoped>

</style>
