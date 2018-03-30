import URL from 'src/api/login'
import { getToken, setToken, removeToken } from 'src/utils/auth'
import {post} from 'src/utils/http'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // 登录
    Login ({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        post(URL.login, userInfo).then(data => {
          console.log(data)
          if (data.resultcode === '0') {
            const userino = data.data
            setToken(userino.accesstoken)
            commit('SET_TOKEN', userino.accesstoken)
            resolve()
          } else {
            reject(data.message)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息 accesstoken
    GetUserInfo ({commit, state}) {
      return new Promise((resolve, reject) => {
        post(URL.getuserinfo, 'POST', state).then(data => {
          console.log(data)
          if (data.resultcode === '0') {
            const userino = data.data
            commit('SET_ROLES', userino.roles)
            commit('SET_NAME', userino.name)
            commit('SET_AVATAR', userino.avatar)
            resolve(data)
          } else {
            reject(data.message)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 用户登出 accesstoken
    LogOut ({commit, state}) {
      return new Promise((resolve, reject) => {
        post(URL.ogout, 'POST', state).then(data => {
          console.log(data)
          if (data.resultcode === '0') {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            resolve()
          } else {
            reject(data.message)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
