<template>
  <div>
  <div class="bibar-tabAll">
    <div class="bibar-tabitem fade in active" :key="index" id="bibar-newstab1" v-for="(tmp,index) in [...getNavaVal, ...articles]">
      <div class="bibar-indexNewsList">
        <div class="bibar-indexNewsItem">
          <div class="speech"> <span>周文君评论了讨论</span><i class="iconfont icon-dot"></i><span class="time">{{tmp.created_at}}</span> </div>
          <div class="user">
            <div class="bibar-author"> <a href="#"> <span class="photo"><img :src="tmp.avatar"></span> <span class="name">{{tmp.author}}</span> <span class="time">7小时前发布</span> </a> </div>
          </div>
          <div class="tit"><a href="#" @click="goDetail(tmp.id)">{{tmp.title}}</a></div>
          <div class="txt indexNewslimitHeight" @click="goDetail(tmp.id)">
            <p v-html='tmp.content'></p>
          </div>
          <div class="set">
            <ul class="bibar-indexNewsItem-infro">
              <li class="set-choseOne"> <a href="javascript:void(0);" class="icon-quan mr15 active"  @click="changeNum(0,tmp.id)"><i class="iconfont icon-handgood"></i><span>{{isGood}}</span></a> <a href="javascript:void(0);" class="icon-quan set-choseOne" @click="changeNum(1,tmp.id)"><i class="iconfont icon-handbad"></i><span>{{ishandbad}}</span></a> </li>
              <li class="set-discuss" @click="showDiscuss(index,tmp.id)">
                <a href="javascript:void(0);">
                  <i class="iconfont icon-pinglun"></i> 评论
                  <span>75</span>
                </a>
              </li>
              <li class="set-choseStar"> <a href="javascript:void(0);"><i class="iconfont icon-star"></i> 收藏</a> </li>
              <li> <a href="javascript:void(0);"><i class="iconfont icon-fenxiang"></i> 分享</a> </li>
              <li class="set-choseShang"> <a href="javascript:void(0);"><i class="iconfont icon-dashang"></i> 打赏<span>438</span></a> </li>
              <li>
                <div class="dropdown">
                  <a href="javascript:void(0);" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="iconfont icon-genduo"></i> 更多</a>
                  <ul class="dropdown-menu">
                    <li><a href="javascript:void(0);">举报</a></li>
                    <li><a href="javascript:void(0);">没有帮助</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
     <div class="bibar-comment"  v-show="showComment&&index==i">
       <!-- 评论框 -->
       <div class="editor-comment">
         <img :src="tmp.avatar" alt="" class="avatar"  v-show="commentShow">
         <div class="editor-bd">
           <span class="comment-img-delete"></span>
           <svg version='1.1' xmlns='http://www.w3.org/2000/svg' class="editor-triangle">
            <path d='M5 0 L 0 5 L 5 10' class="arrow"></path>
           </svg>
           <div class="editor-textarea" v-show="commentShow" @click="commentShowFun">
             <div class="editor-placeholder">评论...</div>
           </div>
           <div class="editor-toolbar">
              <BibarReport :toApi='toId' :contentId='lid' v-show="showReport" @backList = 'showContent' ></BibarReport>
          </div>
         <span class="img-upload-delete">
             <img src="../../../assets/img/del.png" alt="">
        </span>
       </div>
       </div>
       <!-- 评论内容 -->
       <div class="comment-wrap">
          <div class="hook-comment"></div>
          <div class="comment-container">
            <div class="loading">
              <img src="../../../assets/img/loading.png" alt="">
            </div>
            <div class="comment-all">
              <h3>全部评论(4)</h3>
              <div class="comment-sort">
                <a href="#" class="active">最近</a>
                <a href="#">最早</a>
                <a href="#">赞</a>
              </div>
              <div class="comment-list">
                <div class="comment-item" data-index='' data-id=''  :key ='now' v-for="(item,now) in nowData">
                  <div>
                    <a href="#" data-tooltip='' class="avatar">
                      <img src="../../../assets/img/pic-user1.png" alt="">
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
                        <li class="set-discuss" @click="showDiscuss(index,tmp.id)">
                          <a href="javascript:void(0);">
                            <i class="iconfont icon-pinglun"></i> 评论
                            <span>75</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
       </div>
     <!-- <div class='backContent' :key ='now' v-for="(item,now) in nowData">{{item}}</div> -->
    </div>
  </div>
  </div>
</template>

<script>
import {get} from '../../../utils/http'
import BibarReport from '../bibarReport.vue'
export default{
  props: ['getNavData'],
  data: function () {
    return {
      articles: [],
      isGood: 0,
      ishandbad: 0,
      isClick: 0,
      lid: '',
      i: 0,
      showComment: false,
      showReport: false,
      nowData: [],
      nowDataPl: {
        'author': '',
        'avatar': '',
        'created_at': '',
        'updated_at': '',
        'title': '',
        'content': '',
        'is_good': 0,
        'is_bad': 0,
        replt_count: 0
      },
      commentShow: false,
      backFt: {
        'author': '',
        'avatar': '',
        'created_at': '',
        'updated_at': '',
        'title': '',
        'content': '',
        'is_good': 0,
        'is_bad': 0,
        replt_count: 0
      },
      toId: 0
    }
  },
  components: {
    BibarReport
  },
  computed: {
    getNavaVal () {
      return this.$store.state.homePageList.backForNav
    }
  },
  created: function () {
    get('/api/topic/1').then(data => {
      this.articles = data.data.topics
    })
  },
  mounted () {
    // this.getNavaVal = this.getNavData
  },
  // watch: {
  //   getNavaVal (val) {
  //     console.log(val)
  //   }
  // },
  methods: {
    changeNum (isNum, id) {
      $('.set-choseOne>a:eq(' + isNum + ')').addClass('active').siblings().removeClass('active')
      if (isNum === 0) {
        get(`/api/topic/${id}/up`).then(data => {
          this.isGood = data.data
        })
      } else {
        get(`/api/topic/${id}/down`).then(data => {
          this.ishandbad = data.data
        })
      }
    },
    goDetail (id) {
      this.lid = id
      this.$router.push(`/details/${this.lid}`)
    },
    showDiscuss (index, id) {
      get(`api/topic/${id}/1`).then(data => {
        this.nowData = data.data.replies
        // console.log(data.data.replies)
      })
      if (index !== this.i) {
        this.i = index
        this.lid = id
      }
      this.toId = 0
      this.lid = id
      this.showComment = !this.showComment
      this.commentShow = true
      if (this.commentShow) {
        this.showReport = false
      }
      $('.editor-toolbar').find('.wangeditor').css({'width': '832px', 'margin': '0 0 0 -39px', 'padding': '0'})
      $('.editor-toolbar').find('.wangeditor>.report').css('bottom', '0')
      $('.editor-toolbar').find('.wangeditor>.cancel').css('bottom', '4px')
      $('.editor-toolbar').find('.wangeditor>.editor').css({'min-height': '130px', 'padding-bottom': '37px'})
      $('.editor-toolbar').find('.wangeditor>div:eq(2)').css('display', 'none')
    },
    commentShowFun () {
      this.showReport = true
      this.commentShow = false
    },
    showContent (data) {
      this.nowDataPl.content = data
      console.log(this.nowDataPl)
      this.nowData.unshift(this.nowDataPl)
    },
    showFtContentFun (ftData) {
      this.backFt.content = ftData
      this.articles.unshift(this.backFt)
    }
  }
}
</script>

<style>
.indexNewslimitHeight{
  cursor: pointer;
}
.bibar-tabitem{overflow: hidden;}
.bibar-comment{
    position: relative;
    margin-left: 58px;
}
.editor-comment{
    margin-top: 5px;
    background-color: #f9f9f9;
    /* padding: 20px; */
    padding-left: 10px;
}
.editor-comment>.avatar{
    width: 32px;
    height: 32px;
    float: left;
}
img.avatar{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    vertical-align: middle;
}
.editor-bd{
    margin-left: 42px;
    position: relative;
    z-index: 1;
}
svg:not(:root) {
    overflow: hidden;
}
.editor-triangle{
    position: absolute;
    top: 10px;
    left: -4px;
    width: 5px;
    height: 10px;
    z-index: 11;
}
.editor-triangle>.arrow{
    stroke: #edf0f5;
    fill: #f9fcfe;
}
.editor-textarea{
    position: relative;
    z-index: 10;
    min-height: 32px;
    border: 1px solid #edf0f5;
    font-size: 13px;
    line-height: 1.6;
    background-color: #fff;
}
.editor-textarea .comment-placeholder {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 5px 10px;
    color: #d4d7dc;
}
.img-upload-delete{
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
    text-align: center;
    color: #fff;
    line-height: 24px;
    /* background-color: rgba(0,0,0,.7); */
    cursor: pointer;
    z-index: 10;
}
.img-upload-delete>img{
    width: 24px;
    height: 24px;
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
</style>
