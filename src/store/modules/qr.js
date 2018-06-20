const state = {
  code: ''
}

const mutations = {
  setCode (state, code) {
    state.code = code
  }
}

const actions = {
  setCode ({ commit }, payload) {
    commit('setCode', payload)
  },
  resetCode ({ commit }) {
    commit('setCode', '')
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
