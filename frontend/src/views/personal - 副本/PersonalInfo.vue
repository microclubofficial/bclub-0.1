<style lang="scss" scoped>
.member-center{margin-top: 40px;}
.personal-info {
    background-color: #fefefe;
    border: 1px solid #eee;
    padding: 20px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
}
.breadcrumb{
    .hover:hover{
        color:#1e8fff;
    }
}
</style>

<template>
<div>
    <MainHeader></MainHeader>
    <div class="member-center">
        <div class="container">
            <ol class="breadcrumb">
                <li>
                    <router-link to='/'><i class="iconfont" style="margin-right:10px;">&#xe65a;</i>{{$t('editProfile.index')}}</router-link>
                </li>
                <li class="active">
                    <router-link class="hover" :to="{path:'/memberCenter'}">{{$t('personalCenter.personal')}}</router-link>
                </li>
            </ol>
            <ul class="nav nav-tabs">
                <li v-for="(item,index) in infoList" :class="{active:item.name === $route.name}" @click="routerGo(index)" :key="index">
                    <a href="javascript:void(0)">{{item.cnName}}</a>
                </li>
            </ul>
            <div class="personal-info">
                <router-view></router-view>
            </div>
            <section>
                <div class="main-list">

                </div>
            </section>
        </div>
    </div>
</div>
</template>
<script>
// import {post} from '../utils/http'
import MainHeader from '../common/header.vue'
export default {
  data () {
    return {
      infoList: [
        { 'name': 'editInfo', 'cnName': this.$t('editProfile.profile'), 'path': 'editInfo' },
        { 'name': 'editAvatar', 'cnName': this.$t('editProfile.avatar'), 'path': 'editAvatar' },
        { 'name': 'editPassword', 'cnName': this.$t('editProfile.password'), 'path': 'editPassword' },
        { 'name': 'bindEmail', 'cnName': this.$t('editProfile.email'), 'path': 'bindEmail' }
      ],
      nowIndex: 0,
      personalUser: []
    }
  },
  components: {
    MainHeader
  },
  methods: {
    routerGo (index) {
      this.$router.push(`/personalInfo/${this.infoList[index].path}`)
    }
  }
}
</script>
<style>
    .breadcrumb{border-bottom: 1px solid #efefef;background: #F2F2F2;}
    .breadcrumb li:first-child a{color: #2DA2FF;}
</style>
