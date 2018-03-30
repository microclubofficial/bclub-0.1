<template>
  <div class="login-container">
    <div class="panel panel-primary" style="width:30%;margin:100px auto">
      <div class="panel-heading">
        <a href="/login" style="color:#fff">Login</a>
      </div>
      <div class="panel-body">
        <form class="form-horizontal" style="max-width:420px;margin:auto">
          <div class="form-group">
            <label class="col-sm-2 control-label">用户名:</label>
            <div class="col-sm-9">
              <input class="form-control" name="username" type="text" placeholder="Username" v-model="userForm.username">
            </div>
            <p class="prompt">{{unamePrompt}}</p>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">密码:</label>
            <div class="col-sm-9">
              <input class="form-control" name="password" type="password" placeholder="Password" v-model="userForm.password">
            </div>
            <p class="prompt">{{upwdPrompt}}</p>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">验证码:</label>
            <div class="col-sm-9">
              <div class="input-group">
                <span class="input-group-addon" style="padding:0;border-right:none;">
                  <img ref="captcha" :src="controlImg" alt="验证码" width="90" height="20" @click="changeControl()">
                </span>
                <input class="form-control" name="captcha" placeholder="Captcha" type="text" style="border-left:none;" v-model="userForm.captcha">
              </div>
            </div>
            <p class="prompt">{{controlPrompt}}</p>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-9">
              <input id="remember" name="remember" type="checkbox" value="y">
              <label for="remember">记住我</label>
              <a class="pull-right" href="/forget">忘记密码?</a>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-9">
              <button type="button" class="btn btn-primary btn-block" @click="handleLogin">登陆</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import {post} from 'src/utils/http'
export default {
  name: 'login',
  data () {
    return {
      userForm: {},
      formUrl: 'api/login',
      unamePrompt: '',
      upwdPrompt: '',
      controlPrompt: '',
      isLogin: true,
      controlImg: 'http://sinitek.ymhui999.com:1234/api/captcha'
    }
  },
  mounted () {
    // var token = this.getCookie('session')
    // console.log(token)
  },
  methods: {
    handleLogin () {
      // 验证
      var unamereg = /^[a-zA-Z0-9_\u4e00-\u9fa5]{3,16}$/
      if (!unamereg.test(this.userForm.username)) {
        this.unamePrompt = '用户名长度在3-16位之间'
        return
      } else if (this.userForm.username === '' || this.userForm.username === undefined) {
        this.unamePrompt = '用户名不能为空'
        return
      } else {
        this.unamePrompt = ''
      }
      var upwdreg = /^[a-zA-Z0-9_]{6,}$/
      if (!upwdreg.test(this.userForm.password)) {
        this.upwdPrompt = '密码长度不能小于6位'
        return
      } else if (this.userForm.password === '' || this.userForm.password === undefined) {
        this.upwdPrompt = '密码不能为空'
        return
      } else {
        this.upwdPrompt = ''
      }
      post(this.formUrl, this.userForm).then(data => {
        if (data.message === '验证码错误') {
          this.controlPrompt = data.message
          this.changeControl()
        } else if (this.userForm.captcha === '' || this.userForm.captcha === undefined) {
          this.controlPrompt = '验证码不能为空'
          return
        } else {
          this.controlPrompt = ''
        }
        if (data.resultcode === 1) {
          this.$store.commit('USER_INFO', {
            'username': data.data.username,
            'avatar': data.data.avatar,
            'isLogin': true
          })
          // this.$store.state.isLogin = true
          this.$router.push('/')
        }
      }).catch(error => {
        console.log(error)
      })
    },
    changeControl () {
      this.controlImg = this.controlImg + '?d=' + Date.now()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.prompt{
    float: left;
    margin-left: 18%;
    margin-top: 10px;
    color: red;
}
</style>
