// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetouch from "vue-touch"
import mintui from "mint-ui"
import "mint-ui/lib/style.css"
import mui from 'vue-awesome-mui'
import axios from "axios"
import vuex  from "vuex"
//import VueSocketIO from "vue-socket.io"
axios.defaults.baseURL="http://127.0.0.1:4000/"
axios.defaults.withCredentials=true
Vue.prototype.axios=axios;
Vue.use(mui);
Vue.use(mintui);
Vue.use(vuetouch,{name:"v-touch"})
Vue.use(vuex)
/*Vue.use(new VueSocketIO({
  debug:true,
  connection:"ws://127.0.0.1:4000",
}))*/
Vue.config.productionTip = false
//创建存储对象
var store=new vuex.Store({
  state:{
     cartCount:0,
     list:[],
     count:0,
  },
  mutations:{
    //修改全局共享数据
    subCart(state){ state.cartCount--},//减一个 
    addmCart(state,n){state.cartCount=n}, //加多个 
    clearCart(state){state.cartCount=0},//清空购物车
    addmList(state,n){state.list=n},
    addmCount(state,n){state.count=n},
  },
  getters:{
   //所有获取全局共享数据
   getCart(state){return state.cartCount},
   getList(state){return state.list},
   getCount(state){return state.count},
  }

})
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
vuetouch.config.swipe = {

  threshold: 100 //手指左右滑动距离

}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
