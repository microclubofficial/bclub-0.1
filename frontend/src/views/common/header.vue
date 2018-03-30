<template>
<div class="header">
 <!--头部-->
<header class="bibar-header">
    <section class="bibar-w1100">
        <!--Logo-->
        <h1 class="bibar-headerlogo" title="币吧"><img src="../../assets/img/logo-BCLUB.png"></h1>
        <!--菜单-->
        <nav class="bibar-headernav">
            <ul class="bibar-headernavlist">
                <li class="bibar-headernavitem"> <a href="#"><router-link :to="{path:'/'}">首页</router-link></a> </li>
                <li class="bibar-headernavitem"> <a href="#"><router-link :to="{path:'/community'}">社区</router-link></a> </li>
                <li class="bibar-headernavitem"> <a href="#"><router-link :to="{path:'/bibarLayout'}">币讯</router-link></a> </li>
                <li class="bibar-headernavitem"> <a href="#"><router-link :to="{path:'/maintalk'}">讨论</router-link></a> </li>
                <li class="bibar-headernavitem"> <a href="#"><router-link :to="{path:'/cream'}">精华</router-link></a> </li>
            </ul>
        </nav>
        <!--搜索框-->
        <div class="bibar-headerSearch">
            <ul class="bibar-headerSearchlist">
                <li class="bibar-headerSearchitem">
                    <div class="input-icon left dib">
                        <input type="text" class="form-control btn-circle w180 bg-greyLight" placeholder="搜索">
                        <i class="iconfont icon-search"></i> </div>
                </li>
                <li class="bibar-headerSearchitem">
                    <!-- 未登录 -->
                    <NavLogin v-show="!userInfo.isLogin"></NavLogin>
                    <!-- 已登录 -->
                    <isLogin @backnavHeader= 'toMain' v-show="userInfo.isLogin"></isLogin>
                </li>
            </ul>
        </div>
    </section>
</header>
</div>
</template>

<style >
</style>

<script>
import NavLogin from './navlogin.vue'
import isLogin from './isLogin.vue'
export default{
  props: {
    message: Boolean
  },
  data: function () {
    return {
    }
  },
  components: {
    NavLogin,
    isLogin
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo.userInfo
    }
  },
  mounted: function () {
  },
  methods: {
    toMain (data) {
      this.$emit('backnavMain', data)
    }
  }
}
</script>

<style>
/*头*/
.bibar-header{
    height: 60px;
    background-color: #fff;
    box-shadow: 0px 0px 4px 3px #efefef;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    min-width: 1200px;
    z-index: 10001;
}
.bibar-w1100{width:1100px;margin: 0 auto;}
.bibar-w1100:after{
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
.bibar-headerlogo{float: left; width: 104px; height: 60px; line-height: 50px;}
.bibar-headerlogo img{}
.bibar-headernav{}
.bibar-headernav ul{}
.bibar-headernav ul li{float: left;}
.bibar-headernav ul li a{
  width: 78px;
  height: 60px;
  line-height: 56px;
  font-size: 18px;
  text-align: center;
  display: inline-block;
}
.bibar-headerSearch{
    float: right;
    /* margin-top: 15px; */
    line-height: 60px;
    height: 60px;
}
.bibar-headerSearch ul{}
.bibar-headerSearch ul li{
    float: left;
    margin-left: 20px;
}
.bibar-headerSearchitem input{font-size: 12px; margin-top: 18px;}
.bibar-headerSearchitem input+i{}
.bibar-headeruserpic{}
</style>
