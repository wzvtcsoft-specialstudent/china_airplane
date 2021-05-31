import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Sortable from 'sortablejs'
import echarts from 'echarts'
import  axios from './axios.js' 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import scroll from 'vue-seamless-scroll'
import './JS/jquery-table2excel/src/jquery.table2excel'
Vue.use(scroll)

Vue.use(MintUI)

//注册axios
Vue.use(axios)

Vue.prototype.$echarts=echarts

// Vue.use(Sortable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
