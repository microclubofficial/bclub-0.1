<template>
  <div class="talk-recommend">
    <div class="recommend-list" v-for="(tmp,index) in articles" :key="index" @click="toTalkDetail(tmp.id)">
      <img :src="tmp.avatar" alt="">
      <ul class="recommend-info">
        <h4>{{tmp.title}}</h4>
        <li><a href="#">{{tmp.author}}</a></li>
        <li><a href="#">{{tmp.diff_time}}</a></li>
        <li><a href="#">置顶</a></li>
      </ul>
      <div class="talk-flow">
        <span class="visit-flow"><img src="../../../assets/img/visit.png" alt="">5118</span>
        <span class="comment-flow"><img src="../../../assets/img/comment.png" alt="">{{tmp.replies_count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {get} from '../../../utils/http.js'
export default{
  data: function () {
    return {
      articles: [],
      tid: null
    }
  },
  created () {
    this.tid = parseInt(this.$route.params.talkId)
    get(`/api/bar/${this.tid}`).then(data => {
      this.articles = data.data
    })
  },
  methods: {
    toTalkDetail (id) {
      this.$router.push(`/talkBibar/${id}`)
    }
  }
}
</script>

<style>
.talk-recommend{
  cursor: pointer;
}
.recommend-list{overflow: hidden;position: relative;margin: 20px 0;}
.recommend-list>img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    float: left;
}
.recommend-info>h4{
    font-size: 18px;
    margin-top: 10px;
    color: #444344;
}
.recommend-info{
    margin-left: 60px;
    border-bottom: 1px solid #E5E5E6;
    overflow: hidden;
    padding-bottom: 10px;
}
.recommend-info>li{
  float: left;
  font-size: 14px;
  margin: 7px 10px 5px 0;
}
.recommend-info>li>a{
  color: #8D8D8D;
}
.talk-flow{
  position: absolute;
  right: 0;
  bottom: 15px;
}
.talk-flow>span{
  color: #8D8D8D;
  margin: 0 5px;
}
</style>
