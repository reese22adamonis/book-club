import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    }
  },
  actions: {
    serToken ({commit}, token) {
      commit('setToken', token)
    }
  }
})
