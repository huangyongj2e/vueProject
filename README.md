#项目初始化
    1.安装vue-cli
      npm install -g vue-cli
    2.初始化项目
      vue init webpack my-project
    3.进入项目
      cd my-project
    4.安装依赖
      npm install
    5.启动项目
      npm run dev
#项目目录结构
    index.html:项目根视图
    .postcssrc.js：postcss配置文件
    .gitignore:git上传的忽略文件
    .babelrc：ES6的配置文件
    static：静态文件目录
    config：服务器配置文件
          dev.env.js：开发服务器配置
          prod.env.js：生产服务器配置
          index.js：针对服务器地址，跨域等配置
    webpack.base.conf.js：公共webpack配置文件
    webpack.dev.conf.js：webpack开发配置文件
    webpack.prod.conf.js：webpack生产配置文件
#Vue基础
  MVM模型
	Vue组件：
		包含三个部分
			template：视图
			script：逻辑
			style：样式

	Mustache:模板
		表现形式：{{ 语法 }}
		  {{ hello }}
	    {{ 1+1 }}
	    {{ "哈哈" }}
	    {{ 0<10 ? '对的' : '错的' }}
	    {{ '注意：只能存在单行语句(表达式),并且不能作用在HTML属性' }}

	VUE基本指令：
		v-html:渲染文本  [和{{}} 区别在于依赖于标签]
		v-text:渲染文本  和 v-html的区别在于不能解析标签
		v-bind:绑定  (可以绑定html所有属性，即灵活的属性)
		v-bind的简写：是冒号（:）
	条件渲染：
		v-if
		v-else
		v-else-if
		v-show
		问题：v-if与v-show有什么区别？
			v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
			v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
			相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
			一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
	列表渲染：
		v-for
		每个列表都要添加key
	事件监听：
		v-on:
		methods:
	            handlerClick(){
                console.log(this);// this指向当前组件
                // this来索引当前data中的数据
                this.show = !this.show;
              }
		事件参数
		                v-on:click="getItemInfo(index,$event)"
		                // 事件传递参数，默认参数$event在带参的时候传递
                    getItemInfo(data,event){
                      console.log(data);
                      console.log(this.names[data]);
                      console.log(event)
                    }
		修饰符
          在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。
          为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。
          .stop
          .prevent
          .capture
          .self
          .once
          .passive
          ============================================
          <!-- 阻止单击事件继续传播 -->
          <a v-on:click.stop="doThis"></a>

          <!-- 提交事件不再重载页面 -->
          <form v-on:submit.prevent="onSubmit"></form>

          <!-- 修饰符可以串联 -->
          <a v-on:click.stop.prevent="doThat"></a>

          <!-- 只有修饰符 -->
          <form v-on:submit.prevent></form>

          <!-- 添加事件监听器时使用事件捕获模式 -->
          <!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
          <div v-on:click.capture="doThis">...</div>

          <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
          <!-- 即事件不是从内部元素触发的 -->
          <div v-on:click.self="doThat">...</div>
          <!-- 点击事件将只会触发一次 -->
          <a v-on:click.once="doThis"></a>
          使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。
		简写方法：@代替v-on
	数组更新检测:
		变异方法：引起视图更新:
		            push()
                pop()
                shift()
                unshift()
                splice()
                sort()
                reverse()
                你打开控制台，然后用前面例子的 items 数组调用变异方法：example1.items.push({ message: 'Baz' }) 。
		替换数组：不会引起视图更新,变异方法 (mutation method)，顾名思义，会改变被这些方法调用的原始数组。相比之下，也有非变异 (non-mutating method) 方法，例如：filter(), concat() 和 slice() 。这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组：
	显示过滤/排序结果：
		filter
	计算属性和观察者
		computed
		计算属性和Methods区别
			我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
	表单输入绑定
		v-model:双向数据绑定
		修饰符:lazy(失去焦点在处理)、trim、number
	Class 与 Style 绑定
		绑定 HTML Class
		数组语法

============================================================
1.单文件组件
	1.三个部分组成
		1.Template
			只能存在一个根元素(即一个顶级div)
		2.Script
		3.Style
			scoped:样式只在当前组件内生效
	2.子父级组件交互(通信)
		父 -> 子：props
			数据传递类型限制(验证)
            数据类型验证
            多数据类型验证
            必选项
            默认值
            obj、arr数据类型的默认值
		子 -> 父：emit Event
	3.插槽
		单个插槽，插槽的样式在子父组件都可以渲染，没有scoped 区分
		具名插槽：为插槽提供名字，指定插槽,插槽在没有传递数据可以在插槽中写入元素
		作用域插槽:数据是子传父
			注意：在2.5.0之前，必须使用到template身上,之后可以使用到任何元素
	4.动态组件:
         big:{{currentView}}
         <!--标准写法-->
         <component :is="currentView"></component>
		keep-alive:  缓存 ：		<keep-alive>
                     			<component :is="currentView"></component>
                     		  </keep-alive>
		什么情况下使用缓存：

2.CSS过渡与动画
	在 CSS 过渡和动画中自动应用 class
		过渡类名：
			v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
      v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
      v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
      v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
      v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
      v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
		动画：

	可以配合使用第三方 CSS 动画库，如 Animate.css

3.自定义指令
	1.全局指令
	2.局部指令
4.过滤器
    filters:{
          moneyChanage(value){
            if(typeof value === 'number'){
              return '$'+value;
            }else{
              return value;
            }
          }
Axios
	中文：https://www.kancloud.cn/yunye/axios/234845
	github：https://github.com/axios/axios
	1.安装
		npm install axios
	2.引入加载
		import Axios from "axios"
		Vue.prototype.$axios = Axios
	3.请求
		get请求：
			this.$axios("http://www.wwtliu.com/sxtstu/news/juhenews.php",{
		      params:{
		        type:"junshi",
		        count:30
		      }
		    })
		    .then(res => {
		      this.newsData = res.data;
		      console.log(res.data);
		    })
		    .catch(error => {
		      console.log(error);
		    })
		post请求：
			form-data:?name=iwen&age=20
			x-www-form-urlencoded:{name:"iwen",age:20}
			注意：axios接受的post请求参数的格式是form-data格式
			// Qs.stringify 转换格式  x-www-form-urlencoded 为form-data ，
			this.$axios.post("http://www.wwtliu.com/sxtstu/blueberrypai/login.php",	Qs.stringify({
				user_id:"iwen@qq.com",
					password:"iwen123",
					verification_code:"crfvw"
				}))
				.then(res => {
					console.log(res.data)
				})
				.catch(error => {
					console.log(error);
				})
	4.全局的 axios 默认值
		axios.defaults.baseURL = 'https://api.example.com';
		axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	5.拦截器
      // 添加请求拦截器
      Axios.interceptors.request.use(function(config) {
        if (config.method == "post") {
          config.data = qs.stringify(config.data)
        }
        return config;
      }, function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      });
      // 添加响应拦截器
      Axios.interceptors.response.use(function(response) {
        return response;
      }, function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
      });

	6.跨域处理：
		修改config index.js文件
			proxyTable: {
	            "/api": {
	                target: "http://localhost:3000",
	                changeOrigin: true,
	                pathRewrite: {
	                    '^/api': ''
	                }
	            }
	        }
	    添加host
	    	Vue.prototype.HOST = '/api'
	    注意：此种跨域解决方案，只能适用于测试阶段，打包的时候，不会具备服务器
	          不能跨域了，后端解决。

Mock：数据模拟
	1.自己创建JSON文件。使用get请求形式访问数据
		优点：方便，快捷
		缺点：只能存在get请求
	2.项目中集成服务器，模拟各种接口
		优点：模拟真实线上环境
		缺点：增加开发成本
	3.直接使用线上数据
		优点：真实
		缺点：不一定每个项目都存在
	4.数据模拟库
		http://mockjs.com/

MockJS:
	语法：
		'list|1-10': [{
			'id|+1': 1
		}]

		1.'name|1': array

		从属性值 array 中随机选取 1 个元素，作为最终值。

		2.'name|+1': array

		从属性值 array 中顺序选取 1 个元素，作为最终值。

		3.'name|min-max': array

		通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max。

		4.'name|count': array

		通过重复属性值 array 生成一个新数组，重复次数为 count。
vue-Router
	1.安装
  	npm install --save vue-router
  2.引用
  	import router from "vue-router"
  	Vue.use(router)
  3.配置路由文件
  	var router = new VueRouter({
  		routes: [{
  			path: "/",
  			component: HelloWorld
  		}]
  	})
  	new Vue({
  		el: '#app',
  		template: '<App/>',
  		router,
  		components: {
  			App
  		}
  	})
  4.视图加载的位置
  	<router-view></router-view>

  5.跳转（导航）:router-link

      无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。
      在 HTML5 history 模式下，router-link 会守卫点击事件，让浏览器不再重新加载页面。
      当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写 (基路径) 了。
      to属性:
          <!-- 字符串 -->
          <router-link to="home">Home</router-link>
          <!-- 渲染结果 -->
          <a href="home">Home</a>
          <!-- 使用 v-bind 的 JS 表达式 -->
          <router-link v-bind:to="'home'">Home</router-link>
          <!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
          <router-link :to="'home'">Home</router-link>
          <!-- 同上 -->
          <router-link :to="{ path: 'home' }">Home</router-link>
          <!-- 命名的路由 -->
          <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
          <!-- 带查询参数，下面的结果为 /register?plan=private -->
          <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>n
      replace
          类型: boolean
          默认值: false
          设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，于是导航后不会留下 history 记录。
          <router-link :to="{ path: '/abc'}" replace></router-link>
      append
          类型: boolean
          默认值: false
          设置 append 属性后，则在当前 (相对) 路径前添加基路径。例如，我们从 /a 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b
          <router-link :to="{ path: 'relative/path'}" append></router-link>
      exact
          类型: boolean
          默认值: false
          "是否激活" 默认类名的依据是 inclusive match (全包含匹配)。 举个例子，如果当前的路径是 /a 开头的，那么 <router-link to="/a"> 也会被设置 CSS 类名。
          按照这个规则，每个路由都会激活<router-link to="/">！想要链接使用 "exact 匹配模式"，则使用 exact 属性：
          <!-- 这个链接只会在地址为 / 的时候被激活 -->
          <router-link to="/" exact>
      active-class
          类型: string
          默认值: "router-link-active"
          设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置。

    路由对象属性
    $route.path
    类型: string
    字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"。

    $route.params
    类型: Object
    一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象。

    $route.query
    类型: Object
    一个 key/value 对象，表示 URL 查询参数。例如，对于路径 /foo?user=1，则有 $route.query.user == 1，如果没有查询参数，则是个空对象。

    $route.hash
    类型: string
    当前路由的 hash 值 (带 #) ，如果没有 hash 值，则为空字符串。

    $route.fullPath
    类型: string
    完成解析后的 URL，包含查询参数和 hash 的完整路径。

    $route.matched
    类型: Array<RouteRecord>
    一个数组，包含当前路由的所有嵌套路径片段的路由记录 。路由记录就是 routes 配置数组中的对象副本 (还有在 children 数组)。

    const router = new VueRouter({
      routes: [
        // 下面的对象就是路由记录
        { path: '/foo', component: Foo,
          children: [
            // 这也是个路由记录
            { path: 'bar', component: Bar }
          ]
        }
      ]
    })
    当 URL 为 /foo/bar，$route.matched 将会是一个包含从上到下的所有对象 (副本)。

    $route.name
    当前路由的名称，如果有的话。
    $route.redirectedFrom
    如果存在重定向，即为重定向来源的路由的名字。
