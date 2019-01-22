<template>
  <div class="hello">
      {{hello}}
      <p>{{1+1}}
      {{ 0<10 ? '对的' : '错的' }}
        {{ "哈哈" }}</p>
      <p v-html="hello"></p>
      <p v-text="hello"></p>
     <span v-bind:class="ha">哈哈哈</span>

    <div>
        <p v-if="show">是否被显示</p>
        <p v-else>false</p>
    </div>
    <div class="list">
      <ul>
          <li v-for="(name,index) in names" :key="index">姓名：{{name}},序号：{{index}}</li>
      </ul>
    </div>
    <div class="users">
      <ul>
        <li v-for="(item,index) in user" v-bind:key="index">
          <span>{{ item.name }}</span>
          <span>{{ item.age }}</span>
        </li>
      </ul>
    </div>
    <div>
      <button v-on:click="num++">按钮</button>
      <p>{{num}}</p>
      <button v-on:click="handlerClick">按钮1</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      num:1,
      hello:"hello,vue,my name is hy",
      ha:"ha",
      show:false,
      names:['test1','test2','test3'],
      user:[
        {
          id:1,
          name:"狗大户",
          age:20
        },{
          id:2,
          name:"丽丽",
          age:20
        }
      ]
    }
  },
  methods:{
    handlerClick(){
      alert("I am a click");
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ha{
  background: red;
}
</style>
