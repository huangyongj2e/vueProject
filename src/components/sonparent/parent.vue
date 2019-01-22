<template>
    <div>
      patent 组件:
      <input type="text" v-model="num"/>
      <child @sendmsg="getMsg" :num="getNum"/>
      {{info}}
    </div>
</template>

<script>
  import child from './child'
    export default {
        name: "parent",
        data(){
          return{
            info:"",
            num:10
          }
        },
        computed:{
          getNum(){
            return this.num - 0
          }
        },
        components:{
          child
        },
       methods:{
         getMsg(data){
           this.info = data;
         }
       }
    }
</script>

<style scoped>

</style>
