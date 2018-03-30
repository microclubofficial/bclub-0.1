<template>
  <div class="list-detail">
    <main-header></main-header>
    <div class="main-details-box">
      <!-- 比特币 -->
      <btb v-show="isShow==0"></btb>
      <eth v-show="isShow==1"></eth>
      <xrp v-show="isShow==2"></xrp>
      <subDetail v-show="isShow==3"></subDetail>
    </div>
  </div>
</template>

<script>
import MainHeader from '../common/header'

// 比特币
import btb from '../BibarFirst/BibarChart/BTB.vue'
import eth from '../BibarFirst/BibarChart/ETH.vue'
import xrp from '../BibarFirst/BibarChart/XRP.vue'
import subDetail from '../homePage/subDetail.vue'
export default {
  components: {
    MainHeader,
    btb,
    eth,
    xrp,
    subDetail
  },
  data: function () {
    return {
      isShow: null
    }
  },
  mounted () {
    this.isShow = this.$route.params.pageId
    console.log(this.isShow)
  },
  methods: {

  }
}
</script>

<style>
.list-detail{width: 100%;}
.list-detail>.main-details-box{
  width: 1100px;
  margin: 80px auto;
  position: relative;
}
</style>
