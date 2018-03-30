
<style scoped>@import '../../assets/css/swiper.min.css'</style>
<style>
.commun-bibarData{
  width: 100%;
  position: relative;
  background: linen;
  margin-top: 80px;
}
.commun-bibarData>.bibarData-main{
  width: 1100px;
  margin: 10px auto;
  padding: 10px 0;
}
.bibarData-box{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.bibarData-box>li{
  width: 15%;
  height: 100px;
  margin-right: 1%;
  border: 1px solid #D7D7D7;
  background: #fff;
  margin-bottom: 1%;
}
h1{
  font-size: 18px;
  font-weight: bold;
}
.bibarData-box>li>a{
  display: block;
  padding-left: 28px;
  height: 100px;
  padding-top: 20px;
}
.bibarData-main p{font-size: 14px}
.bibar-class>span{margin-left: 10px; width:18px; height:18px;}
.bibar-class>span>img{width:18px; height:18px;}
.swiper-wrapper{padding-bottom:45px;}
.swiper-container {
      width: 100%;
      height: 100%;
    }
.swiper-slide {
      font-size: 18px;
      /* background: #fff; */

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .swiper-pagination-bullet {
      padding:3px 6px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      color:#000;
      opacity: 1;
      background: #ffffff;
      margin: 0 10px;
      cursor: pointer;
    }
    .swiper-pagination-bullet-active {
      color:#fff;
      background: #007aff;
    }
</style>
<template>
  <div class="commun-bibarData">
   <div class="bibarData-main">
     <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <ul class="bibarData-box">
          <li v-for="(tmp,index) in firstList" :key="index">
            <a href="#">
              <p class="bibar-class">
                {{tmp.class}}
                <span><img src="../../assets/img/logo-coin-BTC.png" alt=""></span>
              </p>
              <h1>{{tmp.num}}</h1>
              <p style="color:#17B769"><span>+</span>{{tmp.change}}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="swiper-slide">
        <ul class="bibarData-box">
          <li v-for="(tmp,index) in firstList" :key="index">
            <a href="#">
              <p class="bibar-class">
                {{tmp.class}}
                <span><img src="../../assets/img/logo-coin-BTC.png" alt=""></span>
              </p>
              <h1>{{tmp.num}}</h1>
              <p><span>+</span>{{tmp.change}}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="swiper-slide">
        <ul class="bibarData-box">
          <li v-for="(tmp,index) in firstList" :key="index">
            <a href="#">
              <p class="bibar-class">
                {{tmp.class}}
                <span><img src="../../assets/img/logo-coin-BTC.png" alt=""></span>
              </p>
              <h1>{{tmp.num}}</h1>
              <p><span>+</span>{{tmp.change}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
   </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Swiper from '../../assets/js/swiper.min.js'
export default{
  name: 'swiper',
  data: function () {
    return {
      firstList: [
        {'class': 'BTC/USDT', 'img': 'src/assets/img/logo-coin-BTC.png', 'num': '10329.61', 'change': '0.6.%'},
        {'class': 'BTC/USDT', 'img': 'src/assets/img/logo-coin-BTC.png', 'num': '10329.61', 'change': '0.6.%'},
        {'class': 'BTC/USDT', 'img': 'src/assets/img/logo-coin-BTC.png', 'num': '10329.61', 'change': '0.6.%'},
        {'class': 'BTC/USDT', 'img': 'src/assets/img/logo-coin-BTC.png', 'num': '10329.61', 'change': '0.6.%'},
        {'class': 'BTC/USDT', 'img': 'src/assets/img/logo-coin-BTC.png', 'num': '10329.61', 'change': '0.6.%'},
        {'class': 'BTC/USDT', 'img': 'src/assets/img/logo-coin-BTC.png', 'num': '10329.61', 'change': '0.6.%'},
        {'class': 'BTC/USDT', 'img': 'src/assets/img/logo-coin-BTC.png', 'num': '10329.61', 'change': '0.6.%'},
        {'class': 'BTC/USDT', 'img': 'src/assets/img/logo-coin-BTC.png', 'num': '10329.61', 'change': '0.6.%'},
        {'class': 'BTC/USDT', 'img': 'src/assets/img/logo-coin-BTC.png', 'num': '10329.61', 'change': '0.6.%'},
        {'class': 'BTC/USDT', 'img': 'src/assets/img/logo-coin-BTC.png', 'num': '10329.61', 'change': '0.6.%'},
        {'class': 'BTC/USDT', 'img': 'src/assets/img/logo-coin-BTC.png', 'num': '10329.61', 'change': '0.6.%'},
        {'class': 'BTC/USDT', 'img': 'src/assets/img/logo-coin-BTC.png', 'num': '10329.61', 'change': '0.6.%'}
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
  },
  mounted: function () {
    let swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      }
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false
      // },
      // speed: 500
    })
  },
  methods: {
  }
}
</script>
