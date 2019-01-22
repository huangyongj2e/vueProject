<template>
  <!-- 在template中，只能存在一个跟组件 -->
  <div class="event">
    <ul>
      <li v-on:click.once="getItemInfo(index,$event)" v-for="(name,index) in names">{{ name }}</li>
    </ul>

    <div>
      <p>{{megRe}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "event",
        data(){
          return{
            names:['Event1','Event2','Event3']
          }
        },
      methods:{
          // 事件传递参数，默认参数$event在带参的时候传递
          getItemInfo(data,event){
            console.log(data);
            console.log(this.names[data]);
            console.log(event)
          }
      },
      computed:{
          megRe(){
            return this.names.reverse();
          }
      }
    }
</script>

<style scoped>

</style>
