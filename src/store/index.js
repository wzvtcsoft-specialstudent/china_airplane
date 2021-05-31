import Vue from 'vue'
import Vuex from 'vuex'
import component3 from './modules/component3'
import component5 from './modules/component5'
import component7 from './modules/component7'
import component8 from './modules/component8'
Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    component3,
    component5,
    component7,
    component8
  }
})
