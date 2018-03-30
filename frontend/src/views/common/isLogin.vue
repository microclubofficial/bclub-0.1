<template>
  <div>
    <div class="is_Login">
      <div class="nav_user_info">
        <div class="username_info">
          <a href="javascript:;">
            <div class="user-info" @click="handlePersonal">
              <img class="user-avatar" :src="useravatar" alt="">
              <span class="user-name">{{userName}}</span>
            </div>
            <div class="nav-info-msg">
              <a href="#"  @click="handleMsg">
                <img src="../../assets/img/bell.png" alt="">
                <i class="count" v-show="hasCount">0</i>
              </a>
              <div class="nav_msg_dropdown" v-show="showMsg">
                <ul>
                  <li class="nav_msg_empty">暂无消息</li>
                  <li class="nav_msg_set">
                    <a href="#">
                      <span><img src="../../assets/img/msg.png" alt="">提醒设置</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>
        <div class="user_info_dropdown" v-show="showPersonal">
          <ul>
            <li><a href="#"><img :src="useravatar" alt=""><span class="user-name">{{userName}}</span></a></li>
            <li><a href="#"><img src="../../assets/img/set.png" alt=""><span>个人设置</span></a></li>
            <li><a href="#"><img src="../../assets/img/share.png" alt=""><span>股票设置</span></a></li>
            <li><a href="#" @click="outlogin"><img src="../../assets/img/outlogin.png" alt=""><span>退出</span></a></li>
          </ul>
        </div>
      </div>
      <a href="#" class="nav_btn_longtext" @click="postModel">发帖</a>
    </div>
    <vdialog v-show="Showdialog" :toDialog='postEditor' @backnavFt = 'toHeader'></vdialog>
  </div>
</template>

<script>
import {get} from '../../utils/http.js'
import vdialog from './dialog.vue'
export default{
  data: function () {
    return {
      hasCount: false,
      showMsg: false,
      showPersonal: false,
      userName: '',
      useravatar: '',
      Showdialog: false,
      postEditor: {
        'title': '有什么消息告诉大家'
      }
    }
  },
  components: {
    vdialog
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo.userInfo
    }
  },
  mounted () {
    console.log(this.userInfo)
    if (!this.userInfo.isLogin) {
      this.userName = ''
      this.useravatar = '../../assets/img/login.png'
    } else {
      this.userName = this.userInfo.username
      this.useravatar = this.userInfo.avatar
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register')
    },
    toLogin () {
      this.$router.push('/login')
    },
    // 查看消息
    handleMsg (e) {
      this.showMsg = !this.showMsg
    },
    // 查看个人中心
    handlePersonal () {
      this.showPersonal = !this.showPersonal
    },
    // 退出登录
    outlogin () {
      get('api/logout').then((data) => {
        console.log(data)
        if (data.message === '登出成功') {
          this.$store.commit('USER_INFO', {
            'username': '',
            'avatar': '',
            'isLogin': false
          })
        }
      })
    },
    // 发帖
    postModel () {
      this.Showdialog = true
      $('#myModal').modal({
        keyboard: true
      })
    },
    // 传值
    toHeader (data) {
      this.$emit('backnavHeader', data)
    }
  }
}
</script>

<style>
.user_info_dropdown>ul>li>a{display: inline-block;}
.is_Login{float: right;margin-left: 48px;}
.nav_user_info{
    display: inline-block;
    height: 60px;
    position: relative;
    z-index: 101;
    vertical-align: middle;
    font-size: 15px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.username_info{
    position: relative;
    display: table;
    z-index: 3;
    text-align: right;
}
.username_info>a>.user-info>span.user-name{
    display: inline-block;
    max-width: 8em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: middle;
}
.username_info>a>.user-info>img.user-avatar{
    width: 22px;
    height: 22px;
    margin-left: 22px;
}
.nav-info-msg{
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    position: absolute;
    width: 22px;
    height: 100%;
    padding-right: 24px;
    top: 0;
    right: 100%;
    cursor: default;
    /* left: -15px; */
}
.nav-info-msg:before {
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    height: 24px;
    width: 1px;
    background-color: #cecece;
    content: '';
}
.nav-info-msg>a {
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.nav-info-msg>a>img{
  width: 28px;
  height: 28px;
}
.nav-info-msg .count {
    position: absolute;
    top: 13px;
    line-height: 14px;
    left: 15px;
    font-size: 12px;
    background-color: #f70;
    padding: 1px 3.5px;
    min-width: 14px;
    text-align: center;
    border-radius: 14px;
    font-style: normal;
}

.nav_msg_dropdown,.user_info_dropdown{
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    position: absolute;
    z-index: 1;
    top: 100%;
    font-size: 14px;
    color: #33353c;
    cursor: default;
    width: 120px;
    left: 0;
}
.nav_msg_dropdown {
    right: 0;
    width: 140px;
}
.nav_msg_dropdown ul, .user_info_dropdown ul {
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
}
.nav_msg_dropdown li, .user_info_dropdown li {
    margin-left: 0 !important;
    height: 40px;
    line-height: 40px;
    width: 100%;
    padding-left: 10px;
}
.user_info_dropdown li img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.nav_msg_empty {
    text-align: center;
    padding: 3px 0;
    color: #909499;
}
.nav_msg_set {
    border-top: 1px solid #edf0f5;
    text-align: center;
    /* padding-top: 10px; */
}
.nav_msg_set>a>span>img{margin-left: -30px;}
a.nav_btn_longtext{
    display: inline-block;
    width: 58px;
    text-align: center;
    margin-left: 12px;
    vertical-align: middle;
    color: #0094D9;
    font-size: 13px;
    border: 1px solid #0094D9;
    padding: 4px 0;
    border-radius: 30px;
    height: 35px;
    line-height: 28px;
}
</style>
