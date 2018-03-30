<template>
  <div class="commun-bibarType">
    <h3>各种币</h3>
   <div class="bibarType-main">
     <div class="bibarType-main-box shadow-box" @click="toBibarData(0)">
       <img src="../../assets/img/pic-news.png" alt="">
       <div class="bibarType-title">
         <img src="../../assets/img/logo-coin-BTC.png" alt="">BTC比特币
         <span class="bibarType-talk-btn">加入讨论</span>
         </div>
        <ul>
          <li>关注<span>17825</span></li>
          <li>文章<span>32216</span></li>
          <li>热度<span>7343</span></li>
          <li>创建管理员</li>
        </ul>
     </div>
     <div class="bibarType-main-box shadow-box" @click="toBibarData(1)">
       <img src="../../assets/img/pic-news02.png" alt="">
       <div class="bibarType-title">
         <img src="../../assets/img/logo-coin-BTC.png" alt="">ETH以太坊
         <span class="bibarType-talk-btn">加入讨论</span>
         </div>
        <ul>
          <li>关注<span>17825</span></li>
          <li>文章<span>32216</span></li>
          <li>热度<span>7343</span></li>
          <li>创建管理员</li>
        </ul>
     </div>
     <div class="bibarType-main-box shadow-box" @click="toBibarData(2)">
       <img src="../../assets/img/pic-news03.png" alt="">
       <div class="bibarType-title">
         <img src="../../assets/img/logo-coin-BTC.png" alt="">XRP瑞波币
         <span class="bibarType-talk-btn">加入讨论</span>
         </div>
        <ul>
          <li>关注<span>17825</span></li>
          <li>文章<span>32216</span></li>
          <li>热度<span>7343</span></li>
          <li>创建管理员</li>
        </ul>
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
  mounted: function () {

  },
  methods: {
    toBibarData (router) {
      this.$router.push(`/mainDetail/${router}`)
    }
  }
}
</script>

<style>
.bibarType-main{
  width: 1100px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.commun-bibarType>h3{
  font-size: 20px;
  font-weight: bold;
  margin: 20px auto;
  text-align: center;
}
.bibarType-main-box{background: #fff; padding-bottom: 20px;}
.bibarType-main-box>img{width: 240px;}
.bibarType-main-box>ul{overflow: hidden; padding: 0 10px;}
.bibarType-main-box>ul>li{
  float: left;
  margin-right: 10px;
}
.bibarType-title{margin: 10px 0; padding: 0 10px;}
.bibarType-title>img{margin-right: 10px;}
.bibarType-title>.bibarType-talk-btn{
    width: 70px;
    height: 28px;
    line-height: 30px;
    text-align: center;
    float: right;
    background: #1E8FFF;
    color: #fff;
    border-radius: 3px;
}
.bibarType-main-box > img {
    width: 360px;
}
.bibarType-main > .bibarType-main-box {
    width: 33%;
    margin-right: 1%;
}
</style>
