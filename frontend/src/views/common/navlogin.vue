<template>
  <div>
    <div class="nav_login">
      <a href="#" class="nav_login_regis" @click="toRegister">没有账号？立即注册</a>
      <div class="nav_login_btn">
        <img src="../../assets/img/login.png" alt="">
        <span @click="toLogin">登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data: function () {
    return {
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register')
    },
    toLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.nav_login{
    display: table-cell;
    height: 60px;
    vertical-align: middle;
    font-size: 13px;
}
.nav_login_regis{
  vertical-align: middle;
}
div[class*=_btn] {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
}

.nav_login_btn {
    display: inline-block;
    line-height: 1;
    width: 90px;
    margin-left: 22px;
    padding: 6px 0;
    border: 1px solid #0095DA;
    text-align: center;
    font-size: 15px;
    border-radius: 32px;
    vertical-align: middle;
}
.nav_login_btn>img{width: 18px; height: 18px;}
.nav_login_btn span {
    vertical-align: middle;
    color: #0095DA;
}
</style>
