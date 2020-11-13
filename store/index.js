import Vuex from 'vuex'
import app from '~/store/modules/app/index.js'

const store = () =>
  new Vuex.Store({
    modules: {
      app,
    },
  })

export default store
