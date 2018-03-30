import GlobalConstant from '../GlobalConstant'
// 通用调用的服务
const callService = 'callService.json'

// 登录URL
const login = GlobalConstant.SERVERURL + '/api/login'

// 用户登出URL
const logout = GlobalConstant.SERVERURL + '/api/logon'

// 取得用户信息
const getuserinfo = GlobalConstant.SERVERURL + '/api/logon'

// 通用处理URL
export const service = GlobalConstant.SERVERURL + callService

export default {
  login,
  logout,
  getuserinfo
}
