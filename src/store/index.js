import Vue from 'vue'
import Vuex from 'vuex'
import qr from './modules/qr'
import auth from './modules/auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    qr,
    auth
  },
  strict: debug
})
