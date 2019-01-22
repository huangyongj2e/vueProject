<template>
  <div>
    <ul>
      <li><router-link exact to="/">首页</router-link></li>
      <!-- <li><router-link to="/course">课程</router-link></li> -->
      <li><router-link :to="{path:'/course'}">课程</router-link></li>
     <!-- <li><router-link to="/master">专家</router-link></li>-->
      <li><router-link :to="{name:'master',params:{count:100,type:obj}}">专家</router-link></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "nav-list",
        data(){
          return{
            obj:{
              name:"iwen"
            }
          }
        }
    }
</script>

<style scoped>
div{
  width: 100%;
  height: 50px;
  background:aqua;
  line-height: 50px;
}
ul{
  list-style: none;
 }
li{
  float: left;
  margin: 0 20px;
  }
.active{
  color: bisque;
}
</style>
