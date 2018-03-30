<template>
  <div class="talkDetal">
    <!-- header -->
    <MainHeader></MainHeader>
    <div class="talkMainContainer">
      <!-- mainLeft -->
    <div class="talkMainLeft">
      <h3>{{hotHd[tid]}}</h3>
      <div class="talk-left-list">
        <article class="bibar-box bibar-boxindex2">
                <div class="bibar-indexNews">
                    <div class="bibar-indexNews-TAB">
                        <ul class="bibar-tabs-listSty2">
                            <li class="bibar-tabs-item" :key='index' v-for="(tmp,index) in listChange" :class="{talkActive:activeState==index}" @click="changeTalk(index)"> <a href="#bibar-newstab1">{{tmp}}</a></li>
                        </ul>
                        <span class="report-new-suject">发表新主题</span>
                    </div>
                    <!--新闻列表-->
                    <router-view></router-view>
                </div>
            </article>
      </div>
    </div>
    <!-- mainRight -->
    <div class="talkMainRight shadow-box">
      <!-- tab -->
      <div class="recommend-tab">
        <ul id="myTab" class="nav nav-tabs">
          <li class="active"><a href="#tech" data-toggle="tab">热门版块</a></li>
          <li><a href="#future" data-toggle="tab">版块推荐</a></li>
        </ul>
        <div id="myTabContent" class="tab-content" v-for="(tmp,index) in toTalk" :key="index">
          <div class="tab-pane fade in active" :id="tmp" >
            <p>{{hotHd[index]}}</p>
          </div>
        </div>
      </div>
      <!--简介-->
            <article class="bibar-box bibar-boxindex3">
                <div class="bibar-boxtitle"> <span class="name">简介</span> </div>
                <div class="bibar-boxbody">
                    <div class="bibar-indexintro">
                        <p>比特币（Bitcoin，简称BTC）是目前使用最为广泛的一种数字货币，它诞生于2009年1月3日，是一种点对点（P2P）传输的数字加密货币，总量2100万枚。比特币（Bitcoin，简称BTC）是目前使用最为广泛的一种数字货币，它诞生于2009年1月3日，是一种点对点（P2P）传输的数字加密货币，总量2100万枚。</p>
                    </div>
                    <a href="#" class="bibar-indexintromore text-theme">展开 <i class="iconfont icon-quan-arrowdown"></i></a>
                    <div class="bibar-indexinftrList">
                        <dl>
                            <dt>发行时间</dt>
                            <dd>2008/11/01</dd>
                        </dl>
                        <dl>
                            <dt>众筹价格</dt>
                            <dd>--</dd>
                        </dl>
                        <dl>
                            <dt>白皮书</dt>
                            <dd><a href="#" class="text-theme">bitcoin.org/bitbitcoin.org/bit</a></dd>
                        </dl>
                        <dl>
                            <dt>官网</dt>
                            <dd><a href="#" class="text-theme">bitcoin.org/bitbitcoin.org/bit</a></dd>
                        </dl>
                        <dl>
                            <dt>区块查询</dt>
                            <dd><a href="#" class="text-theme">blockchain.info</a></dd>
                        </dl>
                    </div>
                </div>
            </article>
            <!-- <div class="pt20"></div> -->
            <!--热门-->
    <div class="bibar-box bibar-boxindex3">
      <div class="bibar-boxtitle"> <span class="name">热门</span> <a href="#" class="fr">更多</a></div>
      <div class="bibar-boxbody">
        <ul class="bibar-indexRMlist">
          <li class="bibar-indexRMitem row">
            <div class="col-sm-4"><a href="#">BTC</a></div>
            <div class="col-sm-4"><span class="fr">9465.68</span></div>
            <div class="col-sm-4"><span class="text-green fr">+0.85%</span></div>
          </li>
          <li class="bibar-indexRMitem row">
            <div class="col-sm-4"><a href="#">BTH</a></div>
            <div class="col-sm-4"><span class="fr">1147.34</span></div>
            <div class="col-sm-4"><span class="fr text-red">-0.40%</span></div>
          </li>
          <li class="bibar-indexRMitem row">
            <div class="col-sm-4"><a href="#">BTC</a></div>
            <div class="col-sm-4"><span class="fr">9465.68</span></div>
            <div class="col-sm-4"><span class="text-green fr">+0.85%</span></div>
          </li>
          <li class="bibar-indexRMitem row">
            <div class="col-sm-4"><a href="#">BTH</a></div>
            <div class="col-sm-4"><span class="fr">1147.34</span></div>
            <div class="col-sm-4"><span class="fr text-red">-0.40%</span></div>
          </li>
          <li class="bibar-indexRMitem row">
            <div class="col-sm-4"><a href="#">BTC</a></div>
            <div class="col-sm-4"><span class="fr">9465.68</span></div>
            <div class="col-sm-4"><span class="text-green fr">+0.85%</span></div>
          </li>
          <li class="bibar-indexRMitem row">
            <div class="col-sm-4"><a href="#">BTH</a></div>
            <div class="col-sm-4"><span class="fr">1147.34</span></div>
            <div class="col-sm-4"><span class="fr text-red">-0.40%</span></div>
          </li>
          <li class="bibar-indexRMitem row">
            <div class="col-sm-4"><a href="#">BTC</a></div>
            <div class="col-sm-4"><span class="fr">9465.68</span></div>
            <div class="col-sm-4"><span class="text-green fr">+0.85%</span></div>
          </li>
          <li class="bibar-indexRMitem row">
            <div class="col-sm-4"><a href="#">BTH</a></div>
            <div class="col-sm-4"><span class="fr">1147.34</span></div>
            <div class="col-sm-4"><span class="fr text-red">-0.40%</span></div>
          </li>
          <li class="bibar-indexRMitem row">
            <div class="col-sm-4"><a href="#">BTC</a></div>
            <div class="col-sm-4"><span class="fr">9465.68</span></div>
            <div class="col-sm-4"><span class="text-green fr">+0.85%</span></div>
          </li>
          <li class="bibar-indexRMitem row">
            <div class="col-sm-4"><a href="#">BTH</a></div>
            <div class="col-sm-4"><span class="fr">1147.34</span></div>
            <div class="col-sm-4"><span class="fr text-red">-0.40%</span></div>
          </li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '../common/header.vue'
export default{
  data: function () {
    return {
      hotHd: ['区块链技术吧', '区块链发展与区块链未来'],
      listChange: ['推荐', '最新主题'],
      toTalk: ['tech', 'future'],
      tid: null,
      activeState: 0
    }
  },
  components: {
    MainHeader
  },
  mounted () {
    this.tid = this.$route.params.talkId
    $('#myTab li:eq(1) a').tab('show')
  },
  methods: {
    changeTalk (index) {
      if (index !== this.activeState) {
        this.activeState = index
        this.$router.push(`/talkDetail/${this.tid}/${this.toTalk[index]}`)
      }
    }
  }
}
</script>

<style>
.talkMainContainer{
  width: 1100px;
  margin: 80px auto 20px auto;
  position: relative;
}
.talkMainLeft{
  width: 860px;
  position: relative;
  float: left;
}
.talkMainLeft>h3{
  margin: 20px 0;
  font-weight: bold;
  font-size: 24px;
}
.talkMainRight{
  width: 220px;
  position: relative;
  float: right;
}
.talk-left-list{
  width: 830px;
}
.bibar-indexNews-TAB{
  overflow: hidden;
}
.bibar-tabs-listSty2{
  background: no-repeat;
  float: left;
}
.bibar-tabs-listSty2 li a{
  padding: 0 12px;
}
.talkActive{
  background: #F3F3F3;
}
.report-new-suject{
  float: right;
  width: 100px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  color: #fff;
  background: #0095DA;
}
#myTabContent{
  padding: 10px;
  background: #fff;
}
#myTabContent>div>p{color: #999;}
.bibar-box{box-shadow: 0 0 0 0 #fff !important;}

</style>
