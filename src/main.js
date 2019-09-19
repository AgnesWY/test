// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store';

import Cube from 'cube-ui'
// H5
import 'amfe-flexible'
// 
import '@/utils/http' //公用http

Vue.config.productionTip = false
//注册 

Vue.use(Cube)
// Vue.use(store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
