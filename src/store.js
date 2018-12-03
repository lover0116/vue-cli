import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/a'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    a: moduleA
  }
})
