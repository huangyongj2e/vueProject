<template>
    <div>
      big:{{currentView}}
      <!--标准写法-->
      <component :is="currentView"></component>
      <button @click="changView">动态变视图组件</button>
    </div>
</template>

<script>
  import Smart1 from './Smart1'
  import Smart2 from './Smart2'
    export default {
        name: "big",
        data(){
          return{
              currentView:'Smart1'
          }
        },
        components:{
          Smart1,Smart2
        },
        methods:{
          changView(){
            this.currentView = 'Smart2'
          }
        }
    }
</script>

<style scoped>

</style>
