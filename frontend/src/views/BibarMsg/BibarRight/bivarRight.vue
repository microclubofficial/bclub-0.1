<template>
<div class="pt20">
 <!--简介-->
            <article class="bibar-box bibar-boxindex3" v-if="$route.path !== '/'">
                <div class="bibar-boxtitle" style="margin-bottom:10px;"> <span class="name">{{$t('sideBar.introduction')}}</span> </div>
                <div class="bibar-boxbody">
                  <div class="loading" v-if='showLoader' style="margin:0;">
                    <img src="../../../assets/img/loading.png" alt="" class="icon-loading">
                  </div>
                    <div class="bibar-indexintro">
                        <p v-if='!showLoader' v-html= "briefC !== '' ? briefC : $t('message.noInformation') "></p>
                    </div>
                    <a href="#" v-if='briefC !== ""' class="bibar-indexintromore text-theme" @click="showText = !showText">{{this.showText === false ? $t('button.unfold') : $t('button.fold')}}<i class="iconfont" v-if='!showText'>&#xe692;</i><i class="iconfont" v-if='showText'>&#xe693;</i></a>
                    <div class="bibar-indexinftrList" v-if='briefC.length > 0'>
                        <dl>
                            <dt :class="{'enwidth':language == 'en'}">{{$t('sideBar.publicTime')}}</dt>
                            <dd :class="{'enpadding':language == 'en'}">{{brief.publicTime}}</dd>
                        </dl>
                        <!--<dl>
                            <dt>众筹价格</dt>
                            <dd>--</dd>
                        </dl>-->
                        <dl>
                            <dt :class="{'enwidth':language == 'en'}">{{$t('sideBar.whitePaper')}}</dt>
                            <dd :class="{'enpadding':language == 'en'}"><a :href='brief.whitepaper' :title="brief.whitepaper" target="_blank" class="text-theme">{{brief.whitepaper ? brief.whitepaper : '--'}}</a></dd>
                        </dl>
                        <dl>
                            <dt :class="{'enwidth':language == 'en'}">{{$t('sideBar.officialWebsite')}}</dt>
                            <dd :class="{'enpadding':language == 'en'}"><a :href='websites' :title="websites" target="_blank" class="text-theme">{{websites}}</a></dd>
                        </dl>
                        <dl>
                            <dt :class="{'enwidth':language == 'en'}">{{$t('sideBar.blockQuery')}}</dt>
                            <dd :class="{'enpadding':language == 'en'}">
                              <a :href='item' :title="item" class="text-theme" target="_blank" style="display:block;" v-for='(item,index) in brief.Explorers' :key="index">{{item}}</a>
                            </dd>
                        </dl>
                    </div>
                </div>
            </article>
            <!-- 热门话题 -->
            <!-- tab -->
      <div class="recommend-tab shadow-box" v-if="$route.path === '/'">
        <div class="hot_talk">
          <h5>热门话题<span>更多话题>></span></h5>
        </div>
        <ul id="myTab" class="nav nav-tabs">
          <li class="active" @click="showHotTab(0)"><a href="#tech" data-toggle="tab">全球</a></li>
          <li @click="showHotTab(1)"><a href="#future" data-toggle="tab">美股</a></li>
          <li @click="showHotTab(2)"><a href="#american" data-toggle="tab">沪深</a></li>
          <li @click="showHotTab(3)"><a href="#hongkong" data-toggle="tab">港股</a></li>
        </ul>
        <div id="myTabContent" class="tab-content">
          <div class="tab-pane fade in active" id="tech">
            <li></li>
          </div>
          <div class="tab-pane fade" id="future">
          </div>
          <div class="tab-pane fade" id="american">
          </div>
          <div class="tab-pane fade" id="hongkong">
          </div>
        </div>
      </div>
            <div class="pt20"></div>
            <!--影响力-->
            <div class="bibar-box bibar-boxindex3" v-if='needHide'>
                <div class="bibar-boxtitle"> <span class="name">影响力</span><a href="#" @click="changePage(0)">上五位</a><a href="#" @click="changePage(1)">下五位</a></div>
                <div class="bibar-boxbody">
                    <ul class="bibar-indexYQLlist">
                        <li class="bibar-indexYQLitem" v-for="(tmp, index) in sideList" :key="index">
                            <div class="bibar-author"> <a href="#"><span class="photo"><img :src="tmp.avatar"></span> <span class="name">{{tmp.username}}</span> <span class="time">相关评论{{tmp.reply_count}}条</span> </a></div>
                            <!--<a href="#" class="btn btn-theme btn-outline">提问</a>-->
                          </li>
                    </ul>
                </div>
            </div>
            <!--<div class="pt20"></div>-->
            <!--分析师-->
            <div class="bibar-box bibar-boxindex3" v-if='needHide'>
                <div class="bibar-boxtitle"> <span class="name">分析师</span></div>
                <div class="bibar-boxbody">
                    <ul class="bibar-indexYQLlist">
                        <li class="bibar-indexYQLitem" v-for="(tmp,index) in analystList" :key="index">
                            <div class="bibar-author"> <a href="#"><span class="photo"><img :src="tmp.avatar"></span> <span class="name">{{tmp.username}}</span> <span class="time"><i class="iconfont icon-hot"></i> 热度{{tmp.sum_is_good}}</span> </a></div>
                            <!--<a href="#" class="btn btn-theme btn-outline">提问</a>-->
                            </li>
                    </ul>
                </div>
            </div>
            <!--<div class="pt20"></div>-->
  <div class="indexrightscroll-top">
    <!--热门-->
    <div class="bibar-box bibar-boxindex3">
      <div class="bibar-boxtitle"> <span class="name">{{$t('sideBar.hotCoins')}}</span><div style="display:inline-block;float:right;"><a  href="javascript:void(0)" v-if='showNext && !showHotLoader' class="fr" @click="changeBtb(1)">{{$t('sideBar.nextTen')}}</a><a href="javascript:void(0)" class="fr" v-if='showPre && !showHotLoader' @click="changeBtb(0)">{{$t('sideBar.prevTen')}}</a></div></div>
      <div class="bibar-boxbody">
        <div class="loading" v-if='showHotLoader' style="margin:0;">
          <img src="../../../assets/img/loading.png" alt="" class="icon-loading">
        </div>
        <ul class="bibar-indexRMlist" v-if='!showHotLoader'>
          <li class="bibar-indexRMitem row" v-for="(tmp,index) in hotList" :key="index" @click='toBibarDetail(tmp)'>
            <div class="col-sm-3"><a href="javascript:void(0)">{{tmp.symbol}}</a></div>
            <div class="col-sm-6"><span class="fr"><i class="iconfont">&#xe634;</i>{{tmp.price * CNY | formatNum(2)}}</span></div>
            <div class="col-sm-3"><span class="fr" :class="tmp.change_1h >= 0 ? 'text-green' : 'text-red'">{{tmp.change_1h | bfb(2)}}</span></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="pt20"></div>
    <div class="bibar-indexFoot">
      <ul class="bibar-indexfootlist">
        <li class="bibar-indexfootitem"> <a href="#">币吧指南</a> <a href="#">币吧协议</a> <a href="#">应用工作</a> </li>
        <li class="bibar-indexfootitem"> <a href="#">申请开通币吧机构号</a> </li>
        <li class="bibar-indexfootitem"> <a href="#">侵权举报</a> <a href="#">网上有害信息举报专区</a> </li>
        <li class="bibar-indexfootitem"> 违法和不良信息举报：021-54060502 </li>
        <li class="bibar-indexfootitem"> <a href="#">联系我们</a> <span>© 2018 币吧</span> </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
import {get} from '../../../utils/http'
import { getToken } from '../../../utils/auth'
export default{
  props: ['bId'],
  data: function () {
    return {
      isBx: false,
      sideList: [],
      sidePage: 1,
      pageCount: 0,
      analystPage: 1,
      analystList: [],
      hotbPage: 1,
      hotCount: 10,
      hotList: [],
      hotPageCount: 0,
      CNY: 0,
      // 简介
      brief: [],
      needHide: false,
      briefTxt: '',
      websites: '',
      // 上下一页
      showPre: false,
      showNext: true,
      showText: false,
      buttonText: '',
      // 加载
      showLoader: false,
      showHotLoader: false
    }
  },
  created: function () {
    $('#myTab li:eq(1) a').tab('show')
    // 影响力
    // this.sideFun(this.sidePage)
    // 分析师
    // this.analystFun(this.analystPage)
    // 热门币
    this.bibarHot(this.hotbPage)
    // 简介
    if (this.bId !== undefined) {
      this.briefFun(this.$route.path.split('/')[2])
    } else {
      this.briefFun('bitcoin')
    }
  },
  computed: {
    language () {
      return this.$store.state.language.language
    },
    briefC () {
      if (this.briefTxt !== '') {
        if (this.showText === false) {
          if (this.language === 'zh') {
            return this.briefTxt.substring(0, 166) + '...'
          } else if (this.language === 'en') {
            return this.briefTxt.substring(0, 376) + '...'
          }
        } else {
          return this.briefTxt
        }
      } else {
        return ''
      }
    }
  },
  methods: {
    // 热门话题
    showHotTab (id) {
      if (id === 0) {
      }
    },
    // 影响力
    // sideFun (pno) {
    //   get(`/api/side/influence/${pno}`).then(data => {
    //     this.sideList = data.data.reply
    //     this.pageCount = data.data.page_count
    //   })
    // },
    // 影响力翻页
    // changePage (id) {
    //   if (id === 0) {
    //     if (this.sidePage > 1 && this.sidePage < this.pageCount) {
    //       this.sidePage--
    //       this.sideFun(this.sidePage)
    //     }
    //   } else if (id === 1) {
    //     if (this.sidePage < this.pageCount) {
    //       this.sidePage++
    //       this.sideFun(this.sidePage)
    //     }
    //   }
    // },
    // 分析师
    // analystFun (pno) {
    //   get(`/api/side/analyst/${pno}`).then(data => {
    //     this.analystList = data.data.analyst
    //   })
    // },
    // 热门币
    bibarHot (pno) {
      this.showHotLoader = true
      get(`/api/blist/${pno}/${this.hotCount}`).then(data => {
        this.hotList = data.data.summaryList
        this.CNY = data.data.exrateData.CNY
        this.hotPageCount = data.data.page_count
        // loader
        this.showHotLoader = false
      })
    },
    // 热门币翻页
    changeBtb (id) {
      if (id === 0) {
        if (this.hotbPage > 1 && this.hotbPage < this.hotPageCount) {
          this.hotbPage--
          this.bibarHot(this.hotbPage)
          if (this.hotbPage === 1) {
            this.showPre = false
          } else {
            this.showPre = true
          }
        } else {
          this.showPre = false
        }
      } else if (id === 1) {
        if (this.hotbPage < this.hotPageCount) {
          this.hotbPage++
          this.bibarHot(this.hotbPage)
          this.showNext = true
          if (this.hotbPage > 1) {
            this.showPre = true
          }
        } else {
          this.showNext = false
        }
      }
    },
    // 去币详情
    toBibarDetail (tmp) {
      // 调chart图
      // this.$emit('toBibarMsg', tmp.id)
      // 调简介
      this.briefFun(tmp.id)
      var crumbName = ''
      if (this.language === 'zh') {
        crumbName = tmp.name_ch
      } else if (this.language === 'en') {
        crumbName = tmp.name_en
      }
      this.$router.push({
        path: `/msgDetail/${tmp.id}`,
        query: {
          b: JSON.stringify({'zh': crumbName})
        }
      })
    },
    // 简介
    briefFun (id) {
      this.showText = false
      this.briefTxt = ''
      this.showLoader = true
      get(`/api/side/tokenintroduce/${id}`).then(data => {
        if (data.resultcode === 1) {
          this.brief = data.data
          this.showLoader = false
          // console.log(this.brief)
          this.websites = this.brief.websites[0]
          if (this.language === 'zh') {
            for (let i = 0; i < this.brief.descriptions.zh.length; i++) {
              this.briefTxt += `<p style="text-indent:2rem;">${this.brief.descriptions.zh[i]}</p>`
            }
          } else if (this.language === 'en') {
            for (let j = 0; j < this.brief.descriptions.en.length; j++) {
              this.briefTxt += `<p style="text-indent:1rem;text-align:justify;word-break: break-all;">${this.brief.descriptions.en[j]}</p>`
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped>

.nav>li>a {
    padding: 8px 12px !important;
}
.hot_talk{padding: 10px 12px;}
.hot_talk>h5>span{
    float: right;
    font-size: 12px;
    color: #bfbfbf;}
.nav-tabs>li.active>a{
    color: #555;
    cursor: default;
    background-color: #F7F8F7 !important;
    border-top: 2px solid #26ADDD !important;
    border-right: none !important;
    border-left: none !important;
    border-bottom-color: transparent;
    border-radius: 0 !important;
}
.recommend-tab{background: #fff;}
.nav-tabs {
    border-top: 1px solid #F3F4F3 !important;
    border-bottom: 1px solid #F3F4F3 !important;
    background: #F7F8F7;
    margin: 10px 0 20px 0;
}
.btn {
    padding: 0px 5px !important;
}
.text-red{color:red;}
.bibar-boxbody .bibar-indexRMlist li{
  cursor: pointer;
}
.bibar-boxbody .bibar-indexRMlist li:hover{
  background-color: #f3f3f3;
}
.bibar-indexinftrList dl dt.enwidth{
  width:100%;
}
.bibar-indexinftrList dl dd.enpadding{
  width:160px;
  padding-left:15px;
}
</style>
