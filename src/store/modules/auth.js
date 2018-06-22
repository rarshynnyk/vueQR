import api from '@/api'
import storage from '@/storage'
import router from '@/router'
import { IS_LOGGED_IN } from '@/const/storage'

const state = {
  isLoggedIn: false
}

const mutations = {
  setIsLoggedIn (state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn
  }
}

const actions = {
  login ({ commit }, payload) {
    return api.login({
      login: payload.login,
      password: payload.password
    }).then(response => {
      const isSuccess = response.data.success

      if (isSuccess) {
        commit('setIsLoggedIn', true)
        storage.setItem(IS_LOGGED_IN, true)

        router.push({
          name: 'scan'
        })
      }
    }).catch(error => {
      throw new Error(error)
    })
  }
}

const getters = {
  isLoggedIn (state) {
    return state.isLoggedIn || storage.getItem(IS_LOGGED_IN)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
