<template>
  <div id="commun">
      <MainHeader></MainHeader>
      <!--社区各币种-->
      <BibarType></BibarType>
      <!--社区综合-->
      <BibarTogether></BibarTogether>
  </div>
</template>

<script>
import MainHeader from '../common/header.vue'
import BibarType from './bibarType.vue'
import BibarTogether from './bibarTogether.vue'

export default{
  name: 'common',
  data: function () {
    return {
      newList: ['热门', '资本市场', '分析师说', '深度', '百科'],
      newRouter: ['hot', 'market', 'analyst', 'depth', 'baike'],
      state: 0,
      isLogin: true
    }
  },
  components: {
    MainHeader,
    BibarType,
    BibarTogether
  },
  created: function () {
  },
  methods: {
    // 社区文章列表切换事件
    changeActive: function (index) {
      if (index !== this.state) {
        this.state = index
        this.$router.push(`${this.newRouter[this.state]}`)
      } else {
        this.$router.push(`${this.newRouter[this.state]}`)
      }
    },
    FtContentFun (data) {
      this.$refs.showFtContent.showFtContentFun(data)
    }
  }
}
</script>

<style>
  .bibar-commun{
    width: 1100px;
    margin: 0 auto
  }
  .commun-bibarType{
    margin-top: 80px;
  }
</style>
