// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Axios from 'axios'
import {Button,Select} from 'element-ui'

Vue.prototype.$axios = Axios
// 入口
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',  // 绑定的是index.html 中的根视图
  router,
  components: { App }, // 创建组件名字
  template: '<App/>' // 指定根组件为 App.vue
})
