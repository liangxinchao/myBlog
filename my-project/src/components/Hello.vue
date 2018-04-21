<template>
  <div class="index">
  <div class="time">{{time}}</div>
  <div class="personDesc">
    <p class="myName">liang.xc的个人网站</p>
    <router-link to="/nav" class="go">come on <i class="fa fa-hand-o-right" aria-hidden="true"></i> </router-link>
    </div>
    <div class="swiper">
      <el-carousel
        :interval="3000"
        autoplay
        arrow="hover"
        height="400px"
      >
       <el-carousel-item v-for="item in 4" :key="item">
    </el-carousel-item>
  </el-carousel>
    </div

  <video style="height:25%; width: 30%;"
  src="http://oxr676u5v.bkt.clouddn.com/video/homPage/homePageVideo002.mp4"
  autoplay="autoplay"
  loop="loop"
  >

  </video>

  <p class="bottom">版权所有@2018 本博客最终权归梁小勿猜所有</p>
  </div>
</template>

<script>
import moment from 'moment'
//import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'hello',
  data () {
    return {
      items: [2,1,23],
      time:'',
      swiperOption: {
          // pagination: '.swiper-pagination-me',
          // nextButton: '.swiper-button-next',
          // prevButton: '.swiper-button-prev',
          slidesPerView: 2,
          slidesPerGroup:2,
          autoplay:3000,
          speed:1800,
          autoplayDisableOnInteraction: false,
          paginationClickable: true,
          loop: true,
          initialSlide: 2,
          spaceBetween: 30,
          simulateTouch: false,
          preventClicks: false
        }
   }
  },

  methods: {
    showTime() {
      this.time = moment(new Date()).format('YYYY年MM月DD日 HH:mm:ss')

    },
    myTime() {
      setInterval (this.showTime, 1000)
    }

  },
  mounted() {
    this.myTime()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
.swiper{
 margin-top: 15%;
}
.swiper-slide {
  width: 300px;
  height:400px;
  background: red
}
.index {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left:0;
  bottom:0;
  right: 0;
  background:url(../images/bg1.jpg) 0 no-repeat;
  background-size: 100% 100%;
  .personDesc {
    float: right;
    width: 350px;
    height: 100px;
    position: fixed;
    margin-left: -125px;
    margin-top: -50px;
    left: 50%;
    top: 13%;
  .fa{
    color: green;
    font-size: 20px;
  }

    color:#cfa;
    border-radius: 8px;
  }
  .myName{
    height: 50%;
    text-align:center;
    line-height: 50px;
    font-size: 26px;
  }
  .go{
    display:block;
    height:50%;
    text-align:center;
    line-height: 50px;
    color: #efefef;
  }
}
.time{
  color: #fff;
  float: right;
  padding-right: 30px;
  padding-top: 30px;
}
.bottom{
  position: absolute;
  bottom:0; right:0;
  width:100%;
  color: #eaeaea;
  text-align: center;
  padding: 10px 0;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
