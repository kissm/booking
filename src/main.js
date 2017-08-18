// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/css/base.css'
import './assets/css/style.css'
import './assets/css/mobiscroll.2.13.2.css'
import './assets/js/jquery-1.9.1.js'
import './assets/js/jquery-scrollLock.min.js'
import './assets/js/mobiscroll.2.13.2.js'
import './assets/js/swiper-3.4.2.jquery.min.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
