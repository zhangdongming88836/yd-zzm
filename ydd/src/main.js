// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetouch from "vue-touch"
import mintui from "mint-ui"
import "mint-ui/lib/style.css"
import mui from 'vue-awesome-mui';
Vue.use(mui);
Vue.use(mintui);
Vue.use(vuetouch,{name:"v-touch"})
Vue.config.productionTip = false
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
  components: { App },
  template: '<App/>'
})
