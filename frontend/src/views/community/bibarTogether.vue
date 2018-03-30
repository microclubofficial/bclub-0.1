<template>
  <div class="commun-bibarTogether">
   <h3>综合</h3>
   <div class="bibar-talk shadow-box" v-for="(tmp,index) in talkList" :key="index" @click="toTalkDetail(tmp.id)">
     <img src="../../assets/img/community/zh01.png" alt="">
    <div class="bibar-talk-num">
      <h3>{{tmp.title}}</h3>
      <p>{{tmp.subtitle}}</p>
      <ul class="talk-keep">
        <li>
          <a href="#">
            <p>关注<span>17825</span></p>
          </a>
        </li>
        <li>
          <a href="#">
            <p>文章<span>28</span></p>
          </a>
        </li>
        <li>
          <a href="#">
            <p>热度<span>32545684</span></p>
          </a>
        </li>
      </ul>
      <button class="join-talk-btn join-talk-list-btn">加入讨论</button>
      <p class="talk-author">创建者{{tmp.author}}</p>
    </div>
   </div>
   <div class="bibar-talk shadow-box bibar-sub">
     <div class="bibar-talk-sub">
       <img src="../../assets/img/pic-user1.png" alt="">
       <h4>凡心_订阅号dfahfiughj</h4>
       <p class="sub-hot"><span><img src="../../assets/img/hot.png" alt=""></span>1234564</p>
     </div>
    <div class="bibar-talk-num">
      <p>区块链投资与发展</p>
      <h3>区块链发展与区块链未来</h3>
      <p>腾讯股价能否再创新高？欢迎评论转发本帖，说出你认为的 $腾讯控股(00700)$ 明日收盘涨跌幅（比如：涨3%或跌2%，只回复数字无效），并且谈谈你今天打算如何操作：买入、卖出、还是持股不动、亦或是投机一把窝轮牛熊证？</p>
      <button class="join-talk-btn talk-bottom">加入讨论</button>
    </div>
   </div>
  </div>
</template>

<script>
import {get} from '../../utils/http.js'
export default{
  data: function () {
    return {
      tid: null,
      talkList: []
    }
  },
  created () {
    get('/api/bar').then((data) => {
      this.talkList = data.data
    })
  },
  mounted: function () {
  },
  methods: {
    toTalkDetail (tid) {
      this.tid = tid
      this.$router.push(`/talkDetail/${this.tid}`)
    }
  }
}
</script>

<style>
.commun-bibarTogether{
  width: 1100px;
  margin: 20px auto;
}
h3{
  font-size: 20px;
  font-weight: bold;
}

.commun-bibarTogether>h3{
  text-align: center;
  margin: 50px auto 20px auto;
}
.bibar-talk-num{
  float: right;
  width: 850px;
  padding: 20px 10px 20px 20px;
  background: #fff;
  height: 140px;
}
.bibar-talk-num>p{
  color:#B8B8B8;
  font-size: 14px;
  margin: 10px 0;
  }
.bibar-talk-num>.talk-keep>li{
  float: left;
  margin-right: 40px
}
.talk-keep>li>a>p{
  color:#333;
  font-size: 14px;
}
.talk-keep>li>a>p span{
  display: block;
  color: #000;
  font-size: 20px;
  font-weight: bold;
}
.bibar-talk{overflow: hidden; position: relative; margin-bottom: 20px; cursor: pointer;}
.bibar-talk>img{
  float: left;
}
.join-talk-list-btn{
    position: absolute;
    top: 25px;
    right: 20px;
}
.join-talk-btn{
    display: block;
    width: 70px;
    height: 28px;
    line-height: 30px;
    text-align: center;
    float: right;
    background: #1E8FFF;
    color: #fff;
    border-radius: 3px;
}
.talk-author{
    position: absolute;
    right: 20px;
    bottom: 20px;
}
.bibar-talk-sub{
    float: left;
    text-align: center;
    padding: 45px 0;
    width: 250px;
    background: #fff;
}
.bibar-talk-sub>img{
    width: 50px;
    height: 50px;
}
.bibar-talk-sub>h4{
    font-size: 16px;
    font-weight: normal;
    margin: 10px auto;
}
.bibar-sub{
  height: 190px;
  background: #fff;
}
.bibar-sub>.bibar-talk-num>button{
  position: absolute;
  left: 60%;
}
</style>
