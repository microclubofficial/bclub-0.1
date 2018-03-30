<template>
  <div>
  <div class="bibar-tabAll">
    <div class="bibar-tabitem fade in active" :key="index" id="bibar-newstab1" v-for="(tmp,index) in articles">
      <div class="bibar-indexNewsList">
        <div class="bibar-indexNewsItem">
          <div class="speech"> <span>周文君评论了讨论</span><i class="iconfont icon-dot"></i><span class="time">{{tmp.created_at}}</span> </div>
          <div class="user" @click="goDetail(tmp.id)">
            <div class="bibar-author"> <a href="#"> <span class="photo"><img :src="tmp.avatar"></span> <span class="name">{{tmp.author}}</span> <span class="time">7小时前发布</span> </a> </div>
          </div>
          <div class="tit" @click="goDetail(tmp.id)"><a href="#">{{tmp.title}}</a></div>
          <div class="txt indexNewslimitHeight" @click="goDetail(tmp.id)">
            <p v-html="tmp.content"></p>
          </div>
          <div class="set">
            <ul class="bibar-indexNewsItem-infro">
              <li class="set-choseOne"> <a href="javascript:void(0);" class="icon-quan mr15 active"  @click="changeNum(0)"><i class="iconfont icon-handgood"></i><span>{{isGood}}</span></a> <a href="javascript:void(0);" class="icon-quan set-choseOne" @click="changeNum(1)"><i class="iconfont icon-handbad"></i><span>{{ishandbad}}</span></a> </li>
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
    </div>
    <BibarReport v-show="showReport==true&&index==i"></BibarReport>
  </div>
  </div>
</template>

<script>
import {get} from '../../../utils/http'
import BibarReport from '../../homePage/bibarReport.vue'
export default{
  data: function () {
    return {
      articles: [],
      isGood: 0,
      ishandbad: 0,
      isClick: 0,
      lid: '',
      i: 0,
      showReport: false,
      backBibar: {
        'author': '',
        'avatar': '',	
        'created_at': '',
        'updated_at': '',
        'title': '',
        'content': '',
        'is_good': 0,
        'is_bad': 0,
        replt_count: 0
      }
    }
  },
  components: {
    BibarReport
  },
  // computed: {
  //   articleList(){
  //     return this.$store.state.articles.articleList
  //   }
  // },
  created: function () {
    get('/api/topic/1').then(data => {
      this.articles = data.data.topics
    })
  },
  methods: {
    changeNum (isNum) {
      $('.set-choseOne>a:eq(' + isNum + ')').addClass('active').siblings().removeClass('active')
      if (isNum === 0) {
        this.isGood++
      } else {
        this.ishandbad++
      }
    },
    goDetail (id) {
      this.lid = id
      this.$router.push(`/details/${this.lid}`)
    },
    showDiscuss (index) {
      if (index !== this.i) {
        this.i = index
      }
      this.showReport = true
    },
    showBibarContentFun (bibarData) {
      this.backBibar.content = bibarData
      this.articles.unshift(this.backBibar)
    }
  }
}
</script>

<style>

</style>
