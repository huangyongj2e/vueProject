<template>
  <div>
    solt 子
    <p>我是子的P</p>
    <slot name="s1"/>
    <br>
    <slot name="s2" text="子给父使用插槽传递"/>
  </div>
</template>

<script>
    export default {
        name: "son_solt"
    }
</script>

<style scoped>

</style>
