import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import articles from './modules/articles'
import userInfo from './modules/userInfo'
import user from './modules/user'
import errorLog from './modules/errorLog'
import homePageList from './modules/homePageList'
import getters from './getters'
import createPersist from 'vuex-localstorage'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    errorLog,
    app,
    user,
    articles,
    userInfo,
    homePageList
  },
  getters,
  plugins: [createPersist({
    namespace: 'namespace-for-state',
    initialState: {},
    expires: 7 * 24 * 60 * 60 * 1e3
  })]
})

export default store
