import * as types from '../mutation-types'

const state = {
  back: false
}

const getters = {}

const actions = {}

const mutations = {
  [types.SHOW_BACK] (state, val) {
    state.back = val
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
