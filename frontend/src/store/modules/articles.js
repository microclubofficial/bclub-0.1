import {post} from '../../utils/http'
const articles = {
  state: {
    articleList: []
  },
  mutations: {
    POST_ARTICLE (state, payload) {
      state.articleList = payload.data
      console.log(state.articleList)
    }
  },
  actions: {
    POST_ARTICLE ({commit}, payload) {
      post('api/topic', payload).then(data => {
        // console.log(data)
        commit('POST_ARTICLE', data)
      })
    }
  }
}

export default articles
