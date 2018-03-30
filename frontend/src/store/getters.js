const getters = {
  sidebar: state => state.app.sidebar,
  aside: state => state.app.aside,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  errorLogs: state => state.errorLog.logs
}
export default getters
