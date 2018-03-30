import 'es6-promise'
import FetchMock from 'mockjs'
import URL from 'src/api/login'
import LoginMockData from './login'

// 登录相关
FetchMock.mock(URL.login, LoginMockData[URL.login]())
