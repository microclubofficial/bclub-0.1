<template>
  <div class="list-detail">
    <main-header></main-header>
    <div class="article_container">
      <div class="article_author">
        <div class="top_left">
          <a href="/5900650325" target="_blank" class="avatar"><img :src='articleDetail.avatar' alt="金氪投行之家"></a>
        </div>
        <div class="top_right">
          <div class="avatar_name">
            <a href="/5900650325" target="_blank" class="name">{{articleDetail.author}}</a>
          </div>
          <div class="avatar_subtitle">
            <span class="source">来自币吧</span>
            <a href="" target="_blank" class="time">&ensp;发布于{{articleDetail.diff_time}}分钟前</a>
          </div>
        </div>
      </div>
      <article class="article_bd">
        <h1 class="article_bd_title">{{articleDetail.title}}</h1>
        <div class="article_bd_from">来自
          <a href="">金氪投行之家的雪球原创专栏</a>
        </div>
        <p>
          <strong>{{articleDetail.diff_time}}:</strong>{{articleDetail.content}}
        </p>
        <div class="image">
          <!-- <img src="https://xqimg.imedao.com/16223abc082299293fe913f6.png!custom660.jpg" alt=""> -->
        </div>
      </article>
      <div class="meta-container">
        <a href="#" class="reward-btn">赞</a>
        <div class="meta-share">
        <a href="#" class="btn-share-wechat">
          <span><img src="../../assets/img/weixin.png" alt=""></span>
        </a>
        <a href="#" class="btn-share-weibo">
          <span><img src="../../assets/img/weibo.png" alt=""></span>
        </a>
      </div>
      <div class="meta-handle">
        <a href="#" class="btn-article-retweet">
          <span><img src="../../assets/img/collect.png" alt=""></span>转发
        </a>
        <a href="#" class="btn-article-like">
          <span><img src="../../assets/img/isGood.png" alt=""></span>赞
        </a>
        <a href="#" class="btn-article-retweet">
          <span><img src="../../assets/img/repeat.png" alt=""></span>收藏
        </a>
      </div>
      <div class="meta-info">
        <span>7</span>评论 · <span>3</span>赞
        <a href="#" class="btn-report-spam">举报</a>
      </div>
      </div>
      <div class="editor-toolbar">
        <BibarReport :toApi='toId' :contentId='did' @backList = 'showDetailContent'></BibarReport>
      </div>
      <!-- 评论内容 -->
       <div class="comment-wrap">
          <div class="hook-comment"></div>
          <div class="comment-container">
            <div class="loading">
              <img src="../../assets/img/loading.png" alt="">
            </div>
            <div class="comment-all">
              <h3>全部评论(4)</h3>
              <div class="comment-sort">
                <a href="#" class="active">最近</a>
                <a href="#">最早</a>
                <a href="#">赞</a>
              </div>
                <div class="comment-list">
                  <!-- <pull-to> -->
                  <div class="comment-item" data-index='' data-id=''  :key ='now' v-for="(item,now) in nowData">
                  <div>
                    <a href="#" data-tooltip='' class="avatar">
                      <img src="../../assets/img/pic-user1.png" alt="">
                    </a>
                    <div class="comment-item-main">
                      <div class="comment-item-hd">
                        <a href="#" class="user-name">评论标题</a>
                        <span class="time">评论时间</span>
                      </div>
                      <!-- <p>{{item}}</p> -->
                      <p v-html="item.content">{{item.content}}</p>
                    </div>
                    <div class="set">
                      <ul class="bibar-indexNewsItem-infro">
                        <li class="set-choseOne"> <a href="javascript:void(0);" class="icon-quan mr15 active"  @click="changeNum(0)"><i class="iconfont icon-handgood"></i><span>{{isGood}}</span></a></li>
                        <li class="set-choseShang"> <a href="javascript:void(0);"><i class="iconfont icon-dashang"></i> 打赏<span>438</span></a> </li>
                        <li class="set-discuss" @click="showDiscuss(now,item.id)">
                          <a href="javascript:void(0);">
                            <i class="iconfont icon-pinglun"></i> 回复
                            <span>75</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="editor-toolbar">
                      <!-- <BibarReport ref='childShowApi' :toApi='toId' :contentId='item.author_id' v-show="showReport" @backReplies = 'showReplyContent'></BibarReport> -->
                    </div>
                  </div>
                </div>
                <div class="loading-bar">
                  <!-- <svg class="icon icon-loading" aria-hidden="true">
                      <use xlink:href="#icon-loading"  style="fill:blue" ></use>
                  </svg>加载中... -->
                  <img v-show="listLoding" src="../../assets/img/listLoding.png" alt="" class="icon-loading">
                  <img v-show="noLoading" src="../../assets/img/noLoading.png" alt="" class="icon-loading">{{bottomText}}
                </div>
              <!-- </pull-to> -->
              </div>
            </div>
          </div>
       </div>
    </div>
  </div>
</template>

<script>
import { get } from '../../utils/http'
import MainHeader from '../common/header'
import BibarReport from '../homePage/bibarReport.vue'
// import PullTo from 'vue-pull-to'

export default {
  components: {
    MainHeader,
    BibarReport
    // PullTo
  },
  data: function () {
    return {
      nowData: [],
      did: null,
      isGood: 0,
      ishandbad: 0,
      backDetail: {
        'content': ''
      },
      articleDetail: [],
      nowObj: [],
      toId: 0,
      pageCount: 0,
      pno: 1,
      bottomText: '加载中...',
      listLoding: true,
      noLoading: false
    }
  },
  mounted () {
    this.did = this.$route.params.id
    // console.log(this.pageCount)
    get(`api/topic/${this.did}/${this.pno}`).then(data => {
      this.articleDetail = data.data.topic
      this.nowData = data.data.replies
      this.pageCount = data.data.page_count
      var that = this
      document.querySelector('#app').addEventListener('scroll', function () {
        if (this.scrollHeight - this.scrollTop === this.clientHeight) {
          that.loadDetailPage()
        }
      })
    })
    $('.editor').css({'padding-bottom': '35px'})
  },
  methods: {
    loadDetailPage () {
      // console.log(this.pno < this.pageCount)
      if (this.pno < this.pageCount) {
        setTimeout(() => {
          get(`api/topic/${this.did}/${this.pno}`).then(data => {
            this.nowData = this.nowData.concat(data.data.replies)
            this.pno++
            this.bottomText = '加载中...'
            // this.loadingImg = '../../assets/img/listLoding.png'
          })
        }, 1000)
      } else {
        console.log(this.pageCount)
        this.bottomText = '没有啦'
        this.listLoding = false
        this.noLoading = true
        // this.loadingImg = '../../assets/img/noLoading.png'
        return false
      }
    },
    changeNum (isNum, id) {
      $('.set-choseOne>a:eq(' + isNum + ')').addClass('active').siblings().removeClass('active')
      if (isNum === 0) {
        get(`/api/topic/${id}/up`).then(data => {
          this.is_good = data
        })
      } else {
        get(`/api/topic/${id}/down`).then(data => {
          this.is_bad = data
        })
      }
    },
    showDetailContent (data) {
      this.backDetail.content = data
      this.nowData.unshift(this.backDetail)
    }
  },
  showDiscuss (now, id) {

  }
}
</script>

<style lang="scss" scoped>
.reward-btn{
    display: block;
    width: 56px;
    height: 56px;
    border-radius: 28px;
    background: #f70;
    color: #fff;
    line-height: 56px;
    margin: auto;
    text-align: center;
    margin: 20px auto;
}
.meta-container {
    margin: 0 auto 20px;
    z-index: 10;
    font-size: 13px;
}
.meta-share {
    float: right;
    padding-left: 10px;
    margin-left: 10px;
    position: relative;
}
.meta-share:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    height: 14px;
    margin: auto;
    background-color: #dadee5;
}
.meta-share a {
    margin: 0 6px;
    line-height: 1;
}
.meta-share a span img{
  width: 24px;
  height: 24px;
}
.btn-share-wechat {
    color: rgba(0,153,51,.8);
}
.meta-handle {
    float: right;
}
.meta-handle>a {
    color: #666c72;
    margin: 0 5px;
    line-height: 1.2;
}
.meta-handle>a>span>img{width: 20px; height: 20px;margin-bottom: 1px; margin-right: 5px;}
.meta-info {
    color: #666c72;
    line-height: 1.5;
}
.meta-info {
    color: #666c72;
    line-height: 1.5;
}
.meta-info .btn-report-spam {
    position: relative;
    display: inline-block;
    padding-left: 8px;
    margin-left: 15px;
    opacity: .5;
}
.meta-info .btn-report-spam:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    height: 14px;
    margin: auto;
    background-color: #dadee5;
}
.article_container {
    width: 1100px;
    /* margin: 80px auto 20px auto; */
    background: #fff;
    margin: auto;
    padding: 20px 35px;
    margin-top: 60px;
}

.article_author {
  display: flex;
  margin-bottom: 30px;
  .top_left {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .top_right {
    flex: 1;
    padding: 4px 0 0 8px;
    .avatar_name .name {
      color: #222;
      font-size: 14px;
      font-weight: bold;
    }
    .avatar_subtitle {
      color: #999;
      font-size: 14px;
      line-height: 24px;
      .time {
        color: #999;
        font-size: 14px;
      }
    }
  }
}

.article_bd {
  h1 {
    font-size: 24px;
    color: #222;
    font-family: "Microsoft Yahei";
    font-weight: bold;
    text-align: center;
  }
  .article_bd_from {
    margin: 16px 0;
    color: #666;
    font-size: 16px;
    text-align: center;
    line-height: 24px;
    a {
      color: #0066cc;
      font-size: 16px;
    }
  }
  p {
    font-size: 14px;
    text-indent: 2rem;
    line-height: 28px;
    padding: 0 5px;
  }
  .image {
    margin: 30px auto;
    width:600px;
    img {
      width: 100%;
    }
  }
}

.comment-wrap{
    margin-bottom: 5px;
}
.comment-container{
    padding: 0 8px;
}
.loading{
    margin-top: 60px;
    display: none;
}
.comment-all{
  position: relative;
}
.comment-all>h3 {
    margin: 15px 0 10px;
    font-size: 15px;
}
.comment-sort {
    position: absolute;
    top: 0;
    right: 0;
    text-align: right;
    /* margin-right: 5px; */
}
.comment-sort a.active {
    color: #06c;
}
.comment-sort a {
    position: relative;
    display: inline-block;
    margin-right: 26px;
    color: #909499;
    line-height: 1;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 13px;
}
.comment-sort a:after {
    content: '';
    position: absolute;
    right: -13px;
    top: 2px;
    width: 1px;
    height: 14px;
    background-color: #edf0f5;
}
.comment-list{
    border-bottom: 0;
}
.comment-item{
    padding: 15px 0 10px;
    border-top: 1px solid #edf0f5;
    margin: 15px 0;
}
.comment-item .avatar {
    float: left;
    width: 32px;
    height: 32px;
}
a.avatar {
    display: inline-block;
    overflow: hidden;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    line-height: 1;
}
a.avatar img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
}
.comment-item-main{
    margin-left: 42px;
}
.comment-item-hd{
    margin-bottom: 4px;
}
.comment-item-hd .user-name {
    font-size: 15px;
    font-weight: 700;
    margin-right: 0;
}
.comment-item-hd .time {
    float: right;
    font-size: 12px;
    color: #909499;
}
.comment-item-main>p {
    font-size: 15px;
    line-height: 1.6;
    word-break: break-all;
    overflow: hidden;
    margin: 10px 0;
}
.bibar-indexNewsItem-infro>li{
    float: left;
    margin-right: 25px;
}
.bibar-indexNewsItem-infro>li i {
    margin-right: 3px;
}
.loading-bar{text-align: center;}
.icon-loading {
    transform: rotate(0deg);
    animation-name: loading;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    width: 28px;
    height: 28px;
    margin-right: 20px;
  }
  @keyframes loading
  {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
</style>
