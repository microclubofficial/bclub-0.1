
import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import 'vue-msgbox/lib/vue-msgbox.css'
// global css
import 'src/styles/index.scss'

import App from './App'
import router from './router'
import store from './store'

// import axios from 'axios'
// import VueAxios from 'vue-axios'
// vue-nprogress
import i18n from './language' // Internationalization
import 'babel-polyfill'

import './errorLog'// error log
// import './mock' // simulation data
import 'src/icons'

// import 'src/permission'

// import VueHighcharts from 'vue-highcharts';
// Vue.use(VueHighcharts)

import VueAwesomeSwiper from 'vue-awesome-swiper'

// css  js
import './assets/css/bootstrap.css'
import './assets/css/bootstrap.min.css'
import './assets/iconfont/iconfont.css'
import './assets/css/reset.pack.css'
import './assets/css/web.css'

import './assets/js/jquery.min.js'
import './assets/js/bootstrap.min.js'
import './assets/plus/scrollfix/js/scrollfix.min.js'

import './assets/js/jquery.cookie.js'

// import $ from 'jquery'

// 表单验证
// import Validator from 'vue-validator'

import * as filters from './filters' // global filters

Vue.use(VueAwesomeSwiper)

// Vue.use(VueAxios, axios, Validator)
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
  data: {
    currentRoute: window.location.pathname
  },
  created () {
    window.addEventListener('popstate', () => {
      this.currentRoute = window.location.pathname
    })
  }
})
