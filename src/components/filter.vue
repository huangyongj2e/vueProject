<template>
  <div>
    {{price | moneyChanage}}
  </div>
</template>

<script>
    export default {
        name: "filter",
        data(){
          return {
            price : 20+''
          }
        },
      filters:{
        moneyChanage(value){
          if(typeof value === 'number'){
            return '$'+value;
          }else{
            return value;
          }
        }
    }

    }
</script>

<style scoped>

</style>
