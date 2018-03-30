import Mock from 'mockjs'
import URL from '../api/login'
export default {
  '/*': () => {
    return Mock.mock({
      'result': '1',
      'msg': '@word',
      'data': {'name': '@name'}
    })
  },
  [URL.login]: () => {
    return Mock.mock({
      'resultcode': '0',
      'message': '@word',
      'data': {'accesstoken': '"9ef22750ce62480280f5815d782eb49b"',
        'userdisplayname': '@name',
        'userid': '1'
      }
    })
  }
  // [URL.getuserinfo]
}
