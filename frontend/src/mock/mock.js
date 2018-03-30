/**
 * Created by suwt on 2017/3/9.
 */
import Mock from 'mockjs'

export default {
  mockData () {
    Mock.mock('/mock/logon', {
      'code': '1',
      'datas': {
        'username': 'admin', // 内容：npm安装后 mockjs/src/mock/random/xxx.js
        'userpwd': 'admin@1'
      }
    })
    Mock.mock('/mock/getMorningMeetings', {
      'code': '1',
      'data|5-20': [
        {
          'objid|+1': 1,
          'meetingDate': '@date("yyyy-MM-dd")',
          'submitTime': '@date("yyyy-MM-dd")',
          'type': '@cname',
          'title': '@cname',
          'content': '@county(true)'
        }
      ]
    })
  }
}
