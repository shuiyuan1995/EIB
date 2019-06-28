<style lang="stylus" scoped>
  .home
    color #ffffff
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
      top -0.16rem
      font-size 1.04rem
      color $font-active
  .swper1
    height 0.8rem
    padding-right 0.4rem
    .message-txt
      font-family AdobeHeitiStd-Regular
      font-size 0.6rem
      display block
      line-height 0.8rem
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
  // 基础信息
  .basis-message
    border-top 1px solid $font-active
    border-bottom 1px solid $font-active
    display flex
    font-family AdobeHeitiStd-Regular
    text-align center
    padding-top 0.32rem
    padding-bottom 0.24rem
    &>div
      flex 0 0 33%
    .basis-title
      font-size 0.6rem
    .basis-eos
      font-size 0.48rem
      margin-top 0.12rem
    .basis-price
      font-size 0.48rem
    .basis-num
      font-size 0.48rem
      color #6a6a6a
  // 功能列表
  .functionlist
    display flex
    flex-wrap wrap
    margin-top 1.12rem
    .link-nav
      width 33%
      text-align center
      margin-bottom 1rem
      p
        font-family AdobeHeitiStd-Regular
        font-size 0.5rem
        color #ffffff
        margin-top 0.4rem
    .linkbox
      width 2.52rem
      height 2.52rem
      background $btn-background
      margin 0 auto
      border-radius 50%
      i 
        color #ffffff
        line-height 2.52rem
        font-size 1.6rem
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
        <p class="basis-eos">{{trading_amount.EOS?trading_amount.EOS:0}}</p>
        <p class="basis-price">≈￥{{trading_amount.money?trading_amount.money:0}}</p>
        <!-- <p class="basis-num">项目：12 个</p> -->
      </div>
      <div>
        <p class="basis-title">累计创造收益</p>
        <span class="icon icon-EOS">EOS</span>
        <p class="basis-eos">{{areate_amount.EOS?areate_amount.EOS:0}}</p>
        <p class="basis-price">≈￥{{areate_amount.money?areate_amount.money:0}}</p>
        <!-- <p class="basis-num">投资：12 笔</p> -->
      </div>
      <div>
        <p class="basis-title">已还本金</p>
        <span class="icon icon-EOS">EOS</span>
        <p class="basis-eos">{{repayment.EOS?repayment.EOS:0}}</p>
        <p class="basis-price">≈￥{{repayment.money?repayment.money:0}}</p>
        <!-- <p class="basis-num">坏账率：0.0%</p> -->
      </div>
    </div>
    <!-- 功能列表 -->
    <nav class="functionlist">
      <router-link class="link-nav" :to="this.userInfo.nick?'/account':'/login'">
        <div class="linkbox"><i class="icon" :class="this.userInfo.nick?'icon-zhanghuzhongxin':'icon-dianji'"></i></div>
        <p>{{this.userInfo.nick?'账户中心':'登录/注册'}}</p>
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
  activated(){
    get('/index').then(json=>{
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
          to:'/investment',
          icon:'icon-touzi',
          text:'我要投资'
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
