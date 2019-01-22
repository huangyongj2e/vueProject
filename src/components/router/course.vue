<template>
  <div>
    <NavList />
    <div class="left">
      课程页面
      <ul>
        <li><router-link to="/course/java">java</router-link></li>
        <li><router-link to="/course/web">前端</router-link></li>
        <li>android</li>
      </ul>
    </div>
    <div class="right">
      <!-- 视图区域 -->
      <transition name='fade'>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>


  import NavList from "./NavList"
  export default{
    name:"course",
    data(){
      return{

      }
    },
    components:{
      NavList
    }
  }

</script>
<style scoped>

  .left, .right{
    float: left;
  }
  .right{
    margin-left: 50px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
  .active{
    color: red;
  }
</style>
