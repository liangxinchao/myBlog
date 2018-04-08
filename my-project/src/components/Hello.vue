<template>
  <div class="index">
  <div class="time">{{time}}</div>
    <div class="personDesc">
    <p class="myName">梁小勿猜的个人网站</p>
    <router-link to="/nav" class="go">come on </router-link>
    </div>
  <p class="bottom">版权所有@2018 本博客最终权归梁小勿猜所有</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'hello',
  data () {
    return {
      time: moment(new Date()).format('YYYY年MM月DD日 HH:mm:ss')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
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
    width: 250px;
    height: 100px;
    border: 15px solid #aaa;
    margin: 150px 230px 0 0;
    color:#cfa;
    border-radius: 8px;
  }
  .myName{
    height: 50%;
    text-align:center;
    line-height: 50px;
    border-bottom: 1px solid #fff;
  }
  .go{
    display:block;
    height:50%;
    text-align:center;
    line-height: 50px;
    color: #efefef
  }
}
.time{
  color: #fff;
}
.bottom{
  position: absolute;
  bottom:0; right:0;
  width:100%;
  color: #eaeaea;
  text-align: center;
  padding: 10px 0;
}
</style>
