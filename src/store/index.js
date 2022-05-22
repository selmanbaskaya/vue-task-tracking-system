import Vue from 'vue'
import Vuex from 'vuex'
import navigation from './modules/navigation'
import containerController from './modules/containerController'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navigation,
    containerController
  }
})
