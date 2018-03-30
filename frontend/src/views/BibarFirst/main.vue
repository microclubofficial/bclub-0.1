<template>
  <div class="main">
    <MainHeader></MainHeader>
    <!--主体-->
    <section class="bibar-Main">
    <div class="pt40"></div>
    <section class="bibar-w1100">
        <!--主体左侧-->
        <section class="bibar-Mainleft">
            <!--BTB信息框-->
            <btb></btb>
            <div class="pt20"></div>
            <!-- 富文本区 -->
            <div class="mainBibar-editor" style="width:860px; margin:auto; background:#fff;">
              <BibarPostContent @backFtContent = 'BibarContentFun'></BibarPostContent>
            </div>
            <!--新闻-->
            <article class="bibar-box bibar-boxindex2">
                <div class="bibar-indexNews">
                    <div class="bibar-indexNews-TAB">
                        <ul class="bibar-tabs-listSty2">
                            <li class="bibar-tabs-item" :key='index' v-for="(tmp,index) in newList" :class="{active:state==index}" @click="changeActive(index)"> <a href="#bibar-newstab1" data-toggle="tab">{{tmp}}</a></li>
                        </ul>
                    </div>
                    <!--新闻列表-->
                    <router-view ref="showBibarContent"></router-view>
                </div>
            </article>
        </section>
        <!--主体右侧-->
        <section class="bibar-Mainright">
            <BibarRight></BibarRight>
        </section>
    </section>
    <div class="pt40"></div>
    </section>
  </div>
</template>

<script>
import MainHeader from '../common/header.vue'
import btb from './BibarChart/BTB.vue'
import eth from './BibarChart/ETH.vue'
import xrp from './BibarChart/XRP.vue'
import BibarRight from './BibarRight/bivarRight.vue'
import BibarPostContent from '../homePage/bibarPostContent.vue'

export default{
  data: function () {
    return {
      newList: ['全部', '讨论', '文章', '新闻', '交易'],
      newRouter: ['all', 'talk', 'works', 'news', 'trade'],
      state: 0
    }
  },
  components: {
    MainHeader,
    btb,
    eth,
    xrp,
    BibarRight,
    BibarPostContent
  },
  mounted () {
    $('.mainBibar-editor').find('.wangeditor').css({'width': '860px'})
  },
  methods: {
    // 文章列表切换事件
    changeActive: function (index) {
      if (index !== this.state) {
        this.state = index
        this.$router.push(`/bibarLayout/${this.newRouter[this.state]}`)
      }
    },
    BibarContentFun (data) {
      this.$refs.showBibarContent.showBibarContentFun(data)
    }
  }
}
</script>
