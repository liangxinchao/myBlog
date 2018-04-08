import Vue from 'vue'
import Element from "element-ui"
import moment from 'moment'
import App from './App'
import router from '@/routes/router.js'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)
Vue.use(moment)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
