import Vue from 'vue'
import Element from "element-ui"
import moment from 'moment'
import 'font-awesome/css/font-awesome.css'
import Swiper from 'vue-awesome-swiper'
import App from './App'
import router from '@/routes/router.js'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element)
Vue.use(moment)
Vue.use(Swiper)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
