<template>
  <div class="talkBibar">
    <MainHeader></MainHeader>
    <div class="talkBibar-main">
      <!-- 文章 -->
      <div class="talkBibar-article shadow-box">
        <div class="bibar-tabitem fade in active">
          <!-- 文章left -->
      <div class="bibar-indexNewsList">
        <div class="bibar-indexNewsItem">
          <div class="user">
            <div class="bibar-author"> <a href="#"> <span class="photo"><img :src="question.avatar"></span> <span class="name">{{question.author}}</span> <span class="time">7小时前发布</span> </a> </div>
          </div>
          <div class="tit"><a href="#" @click="goDetail(question.id)">{{question.title}}</a></div>
          <div class="txt indexNewslimitHeight">
            <p v-html='question.content'></p>
          </div>
          <div class="set">
            <ul class="bibar-indexNewsItem-infro">
              <li class="set-question"><a href="javascript:void(0)">关注问题</a></li>
              <li class="set-answer" @click="showEditor"><a href="javascript:void(0)">写回答</a></li>
              <li class="set-choseOne"> <a href="javascript:void(0);" class="icon-quan mr15 active"  @click="changeNum(0,question.id)"><i class="iconfont icon-handgood"></i><span>{{isGood}}</span></a> <a href="javascript:void(0);" class="icon-quan set-choseOne" @click="changeNum(1,question.id)"><i class="iconfont icon-handbad"></i><span>{{ishandbad}}</span></a> </li>
              <li class="set-discuss" @click="showDiscuss(question.id)">
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
      <!-- right count -->
      <div class="talkBibar-flow">
          <div class="visitors">
            <p>关注者<span>123456</span></p>
            <p>被预览<span>45678923</span></p>
          </div>
          <div class="talkSection">
            <span>经济</span>
          </div>
      </div>
      <div class="bibar-comment"  v-show="showComment">
       <!-- 评论框 -->
       <div class="editor-comment">
         <img :src="articles.avatar" alt="" class="avatar"  v-show="commentShow">
         <div class="editor-bd">
           <span class="comment-img-delete"></span>
           <svg version='1.1' xmlns='http://www.w3.org/2000/svg' class="editor-triangle">
            <path d='M5 0 L 0 5 L 5 10' class="arrow"></path>
           </svg>
           <div class="editor-textarea" v-show="commentShow" @click="commentShowFun">
             <div class="editor-placeholder">评论...</div>
           </div>
           <div class="editor-toolbar">
              <BibarReport ref='childShowApi' :toApi='toId' :contentId='question.id' v-show="showReport" @backList = 'showContent'></BibarReport>
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
                      <img :src='item.avatar' alt="">
                    </a>
                    <div class="comment-item-main">
                      <div class="comment-item-hd">
                        <a href="#" class="user-name">{{item.author}}</a>
                        <span class="time">{{item.diff_time}}</span>
                      </div>
                      <!-- <p>{{item}}</p> -->
                      <p v-html="item.content"></p>
                    </div>
                    <div class="set">
                      <ul class="bibar-indexNewsItem-infro">
                        <li class="set-choseOne"> <a href="javascript:void(0);" class="icon-quan mr15 active"  @click="changeNum(0,item.author_id)"><i class="iconfont icon-handgood"></i><span>{{isGood}}</span></a><a href="javascript:void(0);" class="icon-quan set-choseOne" @click="changeNum(1,item.author_id)"><i class="iconfont icon-handbad"></i><span>{{ishandbad}}</span></a> </li>
                        <li class="set-choseShang"> <a href="javascript:void(0);"><i class="iconfont icon-dashang"></i> 打赏<span>438</span></a> </li>
                        <li class="set-discuss">
                          <a href="javascript:void(0);">
                            <i class="iconfont icon-pinglun"></i> 回复
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
      <!-- 讨论区左侧 -->
      <div class="talkLeft">
        <!-- 富文本区 -->
        <TalkEditor v-show="editorShow" :contentId='question.id' @backAnswer='showAnswer' ></TalkEditor>
      <!-- 全部讨论 -->
        <div class="talkBibar-all-talk shadow-box">
          <div class="bibar-comment">
       <!-- 评论内容 -->
       <div class="comment-wrap">
          <div class="hook-comment"></div>
          <div class="comment-container">
            <div class="loading">
              <img src="../../../assets/img/loading.png" alt="">
            </div>
            <div class="comment-all">
              <h3>全部讨论(4)</h3>
              <div class="comment-sort">
                <a href="#" class="active">最近</a>
                <a href="#">最早</a>
                <a href="#">赞</a>
              </div>
              <div class="comment-list">
                <div class="comment-item" data-index='' data-id=''  :key ='now' v-for="(item,now) in answers">
                  <div>
                    <a href="#" data-tooltip='' class="avatar">
                      <img :src='item.avatar' alt="">
                    </a>
                    <div class="comment-item-main">
                      <div class="comment-item-hd">
                        <a href="#" class="user-name">{{item.author}}</a>
                        <span class="time allTalk-time">{{item.diff_time}}前发布的</span>
                      </div>
                      <!-- <p>{{item}}</p> -->
                      <p v-html="item.content"></p>
                    </div>
                    <div class="set">
                      <ul class="bibar-indexNewsItem-infro">
                        <li class="set-choseOne"> <a href="javascript:void(0);" class="icon-quan mr15 active"  @click="changeNum(0,item.author_id)"><i class="iconfont icon-handgood"></i><span>{{isGood}}</span></a><a href="javascript:void(0);" class="icon-quan set-choseOne" @click="changeNum(1,item.author_id)"><i class="iconfont icon-handbad"></i><span>{{ishandbad}}</span></a> </li>
                        <li class="set-discuss" @click="talkToComment(item.id,now)">
                          <a href="javascript:void(0);">
                            <i class="iconfont icon-pinglun"></i> 评论
                            <span>75</span>
                          </a>
                        </li>
                        <li class="set-choseStar"> <a href="javascript:void(0);"><i class="iconfont icon-star"></i> 收藏</a> </li>
                        <li> <a href="javascript:void(0);"><i class="iconfont icon-fenxiang"></i> 分享</a> </li>
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
                    <!-- 讨论评论 -->
                    <div class="talk-comment" v-show="talkCommentShow && talkBackI === now">
                      <div class="bibar-comment">
       <!-- 评论内容 -->
       <div class="comment-wrap">
          <div class="hook-comment"></div>
          <div class="comment-container">
            <div class="loading">
              <img src="../../../assets/img/loading.png" alt="">
            </div>
            <div class="comment-all">
              <h5>全部讨论(4)</h5>
              <!-- <div class="comment-sort">
                <a href="#" class="active">最近</a>
                <a href="#">最早</a>
                <a href="#">赞</a>
              </div> -->
              <!-- 讨论评论 -->
              <div class="talkCommentEditor">
                <BibarReport :toApi='toId' :talkId='item.id' @backList = 'showTalkContent' ></BibarReport>
              </div>
              <!-- 回复内容 -->
                  <div class="comment-item" data-index='' data-id='' v-for="(tmp,rIndex) in replyContent" :key='rIndex'>
                  <div>
                    <a href="#" data-tooltip='' class="avatar">
                      <img :src="tmp.avatar" alt="">
                    </a>
                    <div class="comment-item-main">
                      <div class="comment-item-hd">
                        <a href="#" class="user-name">{{tmp.author}}</a>
                        <span class="time allTalk-time">{{tmp.created_at}}</span>
                      </div>
                      <p class="replyAuthor">@<span>{{item.author}}:</span><span style="display:inline-block" v-html='talkComment[replayId].content'></span></p>
                      <p v-html="tmp.content">{{tmp.content}}</p>
                      <p></p>
                    </div>
                  </div>
                </div>
                <!-- 回复人 -->
              <div class="comment-list">
                <div class="comment-item" data-index='' data-id=''  :key ='now' v-for="(item,now) in talkComment">
                  <div>
                    <a href="#" data-tooltip='' class="avatar">
                      <img :src='item.avatar' alt="">
                    </a>
                    <div class="comment-item-main">
                      <div class="comment-item-hd">
                        <a href="#" class="user-name">{{item.author}}</a>
                        <span class="time allTalk-time">{{item.diff_time}}前发布的</span>
                      </div>
                      <!-- <p>{{item}}</p> -->
                      <p v-html="item.content"></p>
                    </div>
                    <div class="set">
                      <ul class="bibar-indexNewsItem-infro">
                        <li class="set-choseOne"> <a href="javascript:void(0);" class="icon-quan mr15 active"  @click="changeNum(0,item.author_id)"><i class="iconfont icon-handgood"></i><span>{{isGood}}</span></a><a href="javascript:void(0);" class="icon-quan set-choseOne" @click="changeNum(1,item.author_id)"><i class="iconfont icon-handbad"></i><span>{{ishandbad}}</span></a> </li>
                        <li class="set-discuss" @click="replyComment(item.author_id,now)">
                          <a href="javascript:void(0);">
                            <i class="iconfont icon-pinglun"></i> 回复
                            <span>75</span>
                          </a>
                        </li>
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
                <!-- 回复 -->
                <div class="comment-reply"  v-show="talkReplayBox && now === replayId">
                <!-- 回复文本框 -->
                <div class="editor-comment">
         <img :src="articles.avatar" alt="" class="avatar" v-show="talkReplyTxt">
         <div class="editor-bd">
           <span class="comment-img-delete"></span>
           <svg version='1.1' xmlns='http://www.w3.org/2000/svg' class="editor-triangle">
            <path d='M5 0 L 0 5 L 5 10' class="arrow"></path>
           </svg>
           <div class="editor-textarea"  v-show="talkReplyTxt" @click="talkReplyEditor">
             <div class="editor-placeholder">回复...</div>
           </div>
           <div class="editor-toolbar">
              <BibarReport ref='childShowApi' :toApi='toId' :contentId='item.author_id' v-show="showReport" @backReplies = 'showReplyContent'></BibarReport>
          </div>
         <span class="img-upload-delete">
             <img src="../../../assets/img/del.png" alt="">
        </span>
       </div>
       </div>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
       </div>
        </div>
      </div>
      <!-- 讨论区右侧 -->
      <div class="talkRight shadow-box">
        <h5>相关问题</h5>
        <div class="about-question">
          <p class="main-question">如何看待央行发行基于区块链的法定数字货币</p>
          <p class="answer-count">27个回答</p>
        </div>
        <div class="about-question">
          <p class="main-question">如何看待央行发行基于区块链的法定数字货币</p>
          <p class="answer-count">27个回答</p>
        </div>
        <div class="about-question">
          <p class="main-question">如何看待央行发行基于区块链的法定数字货币</p>
          <p class="answer-count">27个回答</p>
        </div>
        <div class="about-question">
          <p class="main-question">如何看待央行发行基于区块链的法定数字货币</p>
          <p class="answer-count">27个回答</p>
        </div>
        <div class="about-question">
          <p class="main-question">如何看待央行发行基于区块链的法定数字货币</p>
          <p class="answer-count">27个回答</p>
        </div>
        <div class="about-question">
          <p class="main-question">如何看待央行发行基于区块链的法定数字货币</p>
          <p class="answer-count">27个回答</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import MainHeader from '../../common/header.vue'
import TalkEditor from './talkEditor.vue'
import BibarReport from '../bibarReport.vue'
import {get} from '../../../utils/http.js'
export default{
  name: 'editor',
  data: function () {
    return {
      articles: [],
      tdId: null,
      editorShow: false,
      isGood: 0,
      ishandbad: 0,
      nowData: [],
      showComment: false,
      showReport: false,
      commentShow: false,
      answers: [],
      question: {},
      appendData: {
        'author': '',
        'avatar': '',
        'created_at': '',
        'updated_at': '',
        'title': '',
        'content': '',
        'is_good': 0,
        'is_bad': 0,
        'replt_count': 0
      },
      tid: null,
      talkComment: [],
      talkCommentShow: false,
      toId: null,
      replayEditor: null,
      talkContent: {
        'author': '',
        'avatar': '',
        'created_at': '',
        'updated_at': '',
        'title': '',
        'content': '',
        'is_good': 0,
        'is_bad': 0,
        'replt_count': 0
      },
      talkBackContent: [],
      talkBackI: 0,
      talkReplayBox: false,
      replyContent: [],
      talkReplyTxt: false,
      replayId: 0,
      isReply: false
    }
  },
  components: {
    MainHeader,
    TalkEditor,
    BibarReport
  },
  created () {
    this.tdId = this.$route.params.tbId
    get(`/api/bar/question/${this.tdId}`).then(data => {
      this.answers = data.data.answers
      this.question = data.data.question
    })
  },
  methods: {
    // 写回答
    showEditor () {
      this.editorShow = !this.editorShow
      this.changeShow = !this.changeShow
      if (this.showComment) {
        this.showComment = false
      }
    },
    // 点赞吐槽
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
    // 评论
    showDiscuss (id) {
      get(`api/bar/question/replies/${id}`).then(data => {
        this.nowData = data.data
      })
      // if (index !== this.i) {
      //   this.i = index
      //   this.lid = id
      // }
      // this.lid = id
      this.toId = 1
      this.showComment = !this.showComment
      this.commentShow = !this.commentShow
      if (this.editorShow) {
        this.editorShow = false
      }
      $('.editor-toolbar').find('.wangeditor').css({'width': '832px', 'margin': '0 0 0 -39px', 'padding': '0'})
      $('.editor-toolbar').find('.wangeditor>.report').css('bottom', '0')
      $('.editor-toolbar').find('.wangeditor>.cancel').css('bottom', '4px')
      $('.editor-toolbar').find('.wangeditor>.editor').css({'min-height': '130px', 'padding-bottom': '37px'})
      $('.editor-toolbar').find('.wangeditor>div:eq(2)').css('display', 'none')
    },
    // 显示评论框
    commentShowFun () {
      this.commentShow = !this.commentShow
      this.showReport = !this.showReport
    },
    // 添加文章
    showContent (data) {
      this.appendData.content = data
      this.nowData.unshift(this.appendData)
    },
    // 写回答
    showAnswer (data) {
      this.answers.unshift(data)
    },
    // 讨论评论
    talkToComment (id, index) {
      if (index !== this.talkBackI) {
        this.talkBackI = index
      }
      this.talkCommentShow = !this.talkCommentShow
      get(`api/bar/answer/replies/${id}`).then(data => {
        this.talkComment = data.data
        // this.replyContent = data
      })
      this.toId = 2
    },
    // 讨论评论返回数据
    showTalkContent (data) {
      this.talkContent.content = data
      this.talkComment.unshift(this.talkContent)
    },
    // 回复
    replyComment (id, now) {
      if (now !== this.replayId) {
        this.replayId = now
      }
      this.talkReplayBox = !this.talkReplayBox
      this.talkReplyTxt = !this.talkReplyTxt
      this.toId = 3
    },
    // 显示回复富文本框
    talkReplyEditor () {
      this.talkReplyTxt = !this.talkReplyTxt
      this.showReport = !this.showReport
    },
    // 回复返回数据
    showReplyContent (data) {
      this.replyContent.unshift(data)
    }
  }
}
</script>

<style>
.replyAuthor{
    height: 50px;
    background: #F2F2F2;
    line-height: 50px !important;
    padding-left: 20px !important;
}
.set {
    overflow: hidden;
}
.comment-reply{
  border-top: 1px solid #edf0f5;
  margin-top: 20px;
}
.comment-reply>.comment-item{
  margin: 15px 0;
}
.comment-reply>.editor-comment{
  margin-top: 15px;
}
.talkCommentEditor>.wangeditor>.editor{
  padding-bottom: 30px;
}
.talkCommentEditor .report{
  right: 317px !important;
}
.talkCommentEditor .cancel{
  right: 375px !important;
}
.talkBibar{
  width: 100%;
  position: relative;
}
.talkBibar-main{
  width: 1100px;
  margin: 80px auto 20px auto;
  position: relative;
}
.talkBibar-article{
  background: #fff;
  padding: 20px 25px;
}
.bibar-indexNewsItem .set>ul>.set-question{
   padding: 6px 10px;
   text-align: center;
   background: #1E8FFF;
   border-radius: 3px;
}
.bibar-indexNewsItem .set>ul>.set-question>a{color: #fff;}
.bibar-indexNewsItem .set>ul>.set-answer{
  padding: 5px 10px;
  border: 1px solid #1E8FFF;
  border-radius: 3px;
}
.bibar-indexNewsItem .set>ul>.set-answer>a{color: #1E8FFF;}
.bibar-tabitem{
  overflow: hidden;
}
.bibar-indexNewsList{
    float: left;
    width: 860px;
}
.talkBibar-flow{
    float: right;
    padding: 15px 0px 10px;
    margin: 10px 0;
}
.talkBibar-flow>.visitors{
  padding-left: 20px;
  border-left: 1px solid #D8D8D8;
}
.talkBibar-flow>.visitors>p:first-child{margin-bottom: 15px;}
.talkBibar-flow>.visitors>p{
  color: #80A2C6;
  font-size: 14px;
}
.talkBibar-flow>.visitors>p>span{
  color: #000;
  font-weight: bold;
  margin-left: 15px;
}
.talkSection{
  margin-top: 30px;
}
.talkSection>span{
  border:1px solid #1E8FFF;
  color: #1E8FFF;
  border-radius: 33%;
  padding: 5px 15px;
  margin: 10px 15px;
}

.talkBibar-editor{
  padding: 30px;
  background: #fff;
  position: relative;
}
.avatar{margin-bottom: 15px;}
.avatar>span{
  font-size: 16px;
  margin-left: 15px;
}
.avatar>.anonymous-users{
  float: right;
  font-size: 14px;
  color: #87A7C9;
}
.talkBibar-editor>button{
  position: absolute;
  z-index: 1;
}
.talkBibar-editor>.editor>.w-e-toolbar{
    background: snow !important;
    border-top: 1px solid rgb(216, 216, 216) !important;
    border-right: none !important;
    border-bottom: 1px solid rgb(216, 216, 216) !important;
    border-left: none !important;
    position: inherit !important;
}
.talkBibar-editor>.editor>.w-e-toolbar .w-e-menu{padding: 7px 10px;}
.talkBibar-editor>.set{right: 135px;}
.talkBibar-editor>.report{right: 50px; bottom: 10px;}
.w-e-text::-webkit-scrollbar{
  background:snow;
}
.w-e-text-container .w-e-panel-container{
  margin-left: 0 !important;
  left: 10% !important;
}
.talkBibar-editor .w-e-text-container{
  min-height: 150px !important;
  border:none !important;
}
.talkLeft{
    margin-top: 20px;
    width: 860px;
    position: relative;
    overflow: hidden;
    float: left;
}
.bibar-comment{
    width: 100%;
    overflow: hidden;
    float: left;
    margin-left: 0 !important;
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
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 20px;
}
.comment-all>h3::after {
    content: '';
    position: absolute;
    width: 784px;
    height: 1px;
    background-color: #edf0f5;
    left: 0;
    top: 35px;
}
.comment-all>h5::after {
    content: '';
    position: absolute;
    width: 784px;
    height: 1px;
    background-color: #edf0f5;
    left: 0;
    top: 30px;
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
    background: #F4F4F4;
    border-radius: 3px;
    padding: 5px 10px;
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
/* .comment-sort a:after {
    content: '';
    position: absolute;
    right: -13px;
    top: 2px;
    width: 1px;
    height: 14px;
    background-color: #edf0f5;
} */
.comment-list{
    border-bottom: 0;
}
.comment-item{
    padding: 15px 0 22px;
    /* margin: 15px 0; */
    border-bottom: 1px solid #edf0f5;
    border-top: 0 !important;
    overflow: hidden;
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

.talkBibar-all-talk{
  padding: 30px;
  background: #fff;
  width: 860px;
  overflow: hidden;
  float: left;
  position: relative;
  margin-top: 20px;
}

.talkRight{
  float: right;
  width: 220px;
  padding: 20px;
  background: #fff;
  margin-top: 20px;
  position: relative;
}
.talkRight>h5{
  font-size: 14px;
  font-weight: bold;
}
.about-question{
  margin-top: 20px;
}
.about-question p:first-child{
    color: #7B9EC3;
    font-size: 14px;
    line-height: 22px;
    margin: 10px 0;
}
.about-question p:last-child{
    color: #BDBDBD;
    font-size: 12px;
    line-height: 18px;
    padding-bottom: 20px;
}
.about-question::after{
    content: '';
    position: absolute;
    width: 180px;
    height: 1px;
    background-color: #edf0f5;
}
.allTalk-time{
  display: block;
  float: none !important;
}
.talk-comment{
    border:1px solid #D8D8D8;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin-top: 45px;
    padding: 10px;
}
h5{
  font-weight: bold;
  font-size: 14px;
}
</style>
