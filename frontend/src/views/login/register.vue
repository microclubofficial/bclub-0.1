<template>
  <div class="login-container">
    <div class="panel panel-primary" style="width:30%;margin:100px auto">
      <div class="panel-heading">
        <a href="/login" style="color:#fff">Register</a>
      </div>
      <div class="panel-body">
        <form class="form-horizontal" style="max-width:420px;margin:auto" name="vForm">
          <div class="form-group">
            <label class="col-sm-2 control-label">用户名:</label>
            <div class="col-sm-9">
              <input  class="form-control" name="username" type="text" placeholder="Username" v-model="userForm.username">
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
            <label class="col-sm-2 control-label">确认密码:</label>
            <div class="col-sm-9">
              <input class="form-control" name="repassword" type="password" placeholder="Repassword" v-model="userForm.confirm_password">
            </div>
            <p class="prompt">{{confirm_upwdPrompt}}</p>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">手机号:</label>
            <div class="col-sm-9">
              <input class="form-control" name="username" type="text" placeholder="Username" v-model="userForm.phone">
            </div>
             <p class="prompt">{{phonePrompt}}</p>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">邮箱:</label>
            <div class="col-sm-9">
              <input class="form-control" name="username" type="mail" placeholder="Username" v-model="userForm.email">
            </div>
            <p class="prompt">{{emailPrompt}}</p>
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
          </div>

          <div class="form-group">
            <label class="col-sm-2 control-label">邀请码:</label>
            <div class="col-sm-9">
              <input class="form-control" name="username" type="text" placeholder="Username" v-model="userForm.recommender_code">
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-9">
              <button type="button" class="btn btn-primary btn-block" id="register" @click="submitForm">注册</button>
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
      formUrl: 'api/register',
      unamePrompt: '',
      upwdPrompt: '',
      confirm_upwdPrompt: '',
      phonePrompt: '',
      emailPrompt: '',
      controlImg: 'http://sinitek.ymhui999.com:1234/api/captcha'
    }
  },
  methods: {
    changVcode () {
      // console.log(this.$refs.captcha);
    },
    submitForm () {
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
      if (this.userForm.confirm_password !== this.userForm.password && this.userForm.confirm_password !== undefined) {
        this.confirm_upwdPrompt = '两次输入密码不一致'
        return
      } else if (this.userForm.confirm_password === '' || this.userForm.confirm_password === undefined) {
        this.confirm_upwdPrompt = '确认密码不能为空'
        return
      } else {
        this.confirm_upwdPrompt = ''
      }
      var ponereg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/
      if (!ponereg.test(this.userForm.phone) && this.userForm.phone !== undefined) {
        this.phonePrompt = '手机号码格式不正确'
        return
      } else if (this.userForm.phone === '' || this.userForm.phone === undefined) {
        this.phonePrompt = '手机号码不能为空'
        return
      } else {
        this.phonePrompt = ''
      }
      var emailreg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!emailreg.test(this.userForm.email) && this.userForm.email !== undefined) {
        this.emailPrompt = '邮箱格式不正确'
        return
      } else if (this.userForm.email === '' || this.userForm.email === undefined) {
        this.emailPrompt = '邮箱不能为空'
        return
      } else {
        this.emailPrompt = ''
      }
      post(this.formUrl, this.userForm).then(data => {
        alert(data.message)
        if (data.resultcode === 1) {
          this.$router.push('/login')
        }
      }).catch(error => {
        alert(error)
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
