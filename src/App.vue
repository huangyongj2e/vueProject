<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<router-view></router-view>-->
   <!-- <Style/>-->
    <MyComponentq/>
    ===============================子给父传递数据
    <Parent/>
    ================================插槽
    <parent_solt/>
    ===============================动态组件
    <Big/>
    =========================过渡与动画
    <anim/>
    =========================过滤filters:
    <filterVue/>
    ==========================axios
    // get
    <Axioss/>
   <!-- <Fotmdata/>
    <router-view/>
    <Events/>-->
    ===================================router
    <router-view></router-view>
  </div>
</template>

<script>
  import Events from './components/Eventa'
  import Fotmdata from './components/fromdata'
  import Style from './components/Style'
  import MyComponentq from './components/myComponentvue'
  import Parent from "./components/sonparent/parent";
  import Parent_solt from './components/slots/parent_solt'
  import Big from './components/keepLive/big'
  import Anim from './components/animo/anim'
  import filterVue from  './components/filter'
  import Axioss from './components/axios'
export default {
  name: 'App',
  components:{
    Parent,Parent_solt,Big,Anim,
    Events,Fotmdata,Style,MyComponentq,filterVue,Axioss}
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
