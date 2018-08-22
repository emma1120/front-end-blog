import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import header from './modules/header'
// import music from './modules/music'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    header
  }
})
