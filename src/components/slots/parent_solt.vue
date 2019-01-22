<template>
    <div>
      solt 父：
      <son_solt>
        <p slot="s1">我是父的P 1</p>
        <p slot-scope="props" slot="s2">{{props.text}}</p>
      </son_solt>
    </div>
</template>

<script>
  import son_solt from './son_solt'
    export default {
        name: "parent_solt",
        data(){
          return{

          }
        },
        components:{
          son_solt
        }
    }
</script>

<style scoped>

</style>
