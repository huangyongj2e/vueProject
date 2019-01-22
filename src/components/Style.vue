<template>
    <div>
        <p v-bind:class="{active:isActive,'demo':Demo}">测试active</p>
        <p v-bind:class="styleObj">测试activeww</p>
        <p v-bind:class="styleObject">测试active2 对象</p>
    </div>
</template>

<script>
    export default {
        name: "Style",
        data(){
          return{
              isActive:true,
              Demo:true,
              styleObject:{
                active:true,
                demo:false
              }
          }
      },
      computed:{
          styleObj(){
            return{
              active:this.isActive,
              demo:false
            }
          }
      }
    }
</script>

<style scoped>
.active{
  background: red;
}.demo{
  color: green;
 }
</style>
