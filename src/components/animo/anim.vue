<template>
    <div>过渡与动画:
      <button @click="showHide">过渡</button>
      <transition name="fade">
        <p v-show="show">哈哈</p>
      </transition>

      <button @click="showAmin">动画</button>
      <transition name="hello">
          <p v-show="showAmins">动画测试</p>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "anim",
        data(){
          return{
            show:true,
            showAmins:true
          }
        },
        methods:{
          showHide(){
            this.show = !this.show
          },
          showAmin(){
            this.showAmins = !this.showAmins
          }
        }
    }
</script>

<style scoped>
  /*.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }*/
  /*从0到1的过程*/
  .fade-enter, .fade-leave-to{
    /*opacity: 0;*/
    transform: translate(20px,0);
  }
  .fade-enter-active, .fade-leave-active{
    transition: all .5s;
  }
  .fade-enter-to,.fade-leave{
    /*opacity: 1;*/
    transform: translate(-20px,0);
  }

  .hello-enter-active{
    animation: bounce-in 1s ease;
  }
  .hello-leave-active{
    animation:bounce-out 1s ease;
  }
  @keyframes bounce-in {
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1.5);
    }
    100%{
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0%{
      transform: scale(1);
    }
    50%{
      transform: scale(1.5);
    }
    100%{
      transform: scale(0);
    }
  }
</style>
