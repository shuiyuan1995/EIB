<style lang="stylus" scoped>
  // 轮播
  .swper
    width 100%
    height 7.7rem
  .my-dot
    width 0.2rem
    height 0.2rem
    border-radius 50%
    background-color #ffffff
    margin-bottom 0.32rem
  // 消息
  .message
    position relative
    margin 0.96rem 0 0.56rem 1.7rem
    .icon
      position absolute
      left -1.2rem
      top -0.24rem
      font-size 1.04rem
      color #546ca9
  .swper1
    height 0.8rem
    .message-txt
      font-family AdobeHeitiStd-Regular
      font-size 0.6rem
      color #4b4b4b
      display block
  // 基础信息
  .basis-message
    // height 3.76rem
    border-top 1px solid #9bb3d2
    border-bottom 1px solid #9bb3d2
    display flex
    font-family AdobeHeitiStd-Regular
    color #4b4b4b
    text-align center
    padding-top 0.32rem
    padding-bottom 0.24rem
    &>div
      flex 0 0 33%
    .basis-title
      font-size 0.6rem
    .basis-eos
      font-size 0.48rem
    .basis-price
      font-size 0.48rem
      color #aaaaaa
    .basis-num
      font-size 0.48rem
      color #6a6a6a
  // 功能列表
  .functionlist
    display flex
    flex-wrap wrap
    margin-top 1.12rem
    .link-nav
      width 3.68rem
      text-align center
      margin-bottom 1rem
      p
        font-family AdobeHeitiStd-Regular
        font-size 0.5rem
        color #000000
    .linkbox
      width 1.76rem
      height 1.76rem
      background-color #5570a6
      margin 0 auto
      border-radius 50%
      i 
        color #ffffff
        line-height 1.76rem
        font-size 1.2rem
</style>


<template>
  <div class="home">
    <myheader></myheader>
    <!-- 轮播 -->
    <cube-slide class="swper" :data="img">
      <template class="dots" slot="dots" slot-scope="props">
        <span class="my-dot" :class="{active: props.current === index}" v-for="(item, index) in props.dots" :key="index">{{index + 1}}</span>
      </template>
    </cube-slide>
    <!-- 广播 -->
    <div class="message">
      <i class="icon icon-laba"></i>
      <cube-slide direction="vertical" :showDots="false" class="swper1" :data="investment_msg">
        <cube-slide-item v-for="(item, index) in investment_msg" :key="index">
          <span class="message-txt">{{item}}</span>
        </cube-slide-item>
      </cube-slide>
    </div>
    <!-- 基础信息 -->
    <div class="basis-message">
      <div>
        <p class="basis-title">累计成交金额</p>
        <span class="icon icon-EOS">EOS</span>
        <p class="basis-eos">{{trading_amount.EOS}}</p>
        <p class="basis-price">≈￥{{trading_amount.money}}</p>
        <!-- <p class="basis-num">项目：12 个</p> -->
      </div>
      <div>
        <p class="basis-title">累计创造收益</p>
        <span class="icon icon-EOS">EOS</span>
        <p class="basis-eos">{{areate_amount.EOS}}</p>
        <p class="basis-price">≈￥{{areate_amount.money}}</p>
        <!-- <p class="basis-num">投资：12 笔</p> -->
      </div>
      <div>
        <p class="basis-title">已还本金</p>
        <span class="icon icon-EOS">EOS</span>
        <p class="basis-eos">{{repayment.EOS}}</p>
        <p class="basis-price">≈￥{{repayment.money}}</p>
        <!-- <p class="basis-num">坏账率：0.0%</p> -->
      </div>
    </div>
    <!-- 功能列表 -->
    <nav class="functionlist">
      <router-link class="link-nav" :to="this.userInfo.nick?'/investment':'/login'">
        <div class="linkbox"><i class="icon" :class="this.userInfo.nick?'icon-touzi':'icon-dianji'"></i></div>
        <p>{{this.userInfo.nick?'我要投资':'登录/注册'}}</p>
      </router-link>
      <router-link class="link-nav" :to="item.to" v-for="(item, index) in navlists" :key="index">
        <div class="linkbox"><i class="icon" :class="item.icon"></i></div>
        <p>{{item.text}}</p>
      </router-link>
    </nav>
    <myfooter></myfooter>
  </div>
</template>

<script>
import {get} from '@api/index'
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {mapGetters} from 'vuex';
export default {
  created(){
    get('/api/index').then(json=>{
      let {img,investment_msg,areate_amount,repayment,trading_amount} = json.data
      this.img = img
      this.investment_msg = investment_msg
      this.areate_amount = areate_amount
      this.repayment = repayment
      this.trading_amount = trading_amount
    })
  },
  components: {
    myheader,
    myfooter
  },
  data() {
    return {
      // 轮播图
      img:[],
      // 广播列表
      investment_msg:[],
      // 网站基本信息
      areate_amount:{},
      repayment:{},
      trading_amount:{},
      // 路由列表
      navlists: [
        {
          to:'/account',
          icon:'icon-zhanghuzhongxin',
          text:'账户中心'
        },
        {
          to:'/invitation',
          icon:'icon-weibiaoti-',
          text:'邀请好友'
        },
        {
          to:'/ranking',
          icon:'icon-paixing',
          text:'收益排行'
        },
        {
          to:'/security',
          icon:'icon-anquan',
          text:'安全中心'
        },
        {
          to:'/bulletin',
          icon:'icon-xiaoxi',
          text:'消息及公告'
        },
        {
          to:'/cooperation',
          icon:'icon-hezuo',
          text:'招商合作'
        },
        {
          to:'/about',
          icon:'icon-women',
          text:'关于我们'
        },
        {
          to:'/help',
          icon:'icon-bangzhuzhongxin',
          text:'帮助中心'
        },
      ],
    }
  },
  computed:{
    ...mapGetters([
      "userInfo"
    ]),
  }
}
</script>
