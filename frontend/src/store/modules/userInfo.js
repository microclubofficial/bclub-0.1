// import {post} from '../../utils/http'
const userInfo = {
  state: {
    userInfo: {
      'username': '',
      'avatar': '',
      'isLogin': false
    }
  },
  mutations: {
    USER_INFO (state, payload) {
      state.userInfo = payload
    }
  }
}

export default userInfo
