import Vue from 'vue'
import Vuex from 'vuex'
import qr from './modules/qr'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    qr
  },
  strict: debug
})
