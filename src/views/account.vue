<style lang="stylus" scoped>
  .account-name
    display flex
    height 60px
    align-items center
    border-bottom 1px solid #e5e5e5
    .naleft
      flex 1
      text-align center
      font-size 14px
      i 
        color #80abd1
        font-size 1.2rem
    .nacenter
      position relative
      flex 2
      text-align center
      font-size 16px
      background #9bb6d3
      height 60px
      color #dddddd
      p:last-of-type
        color #ffffff
      p
        margin-top 0.32rem
      span 
        font-size 12px
        color #dddddd
      &:after
        position absolute
        bottom 0px
        left 3.48rem
        content ''
        width 0
        height 0
        border-width 0.28rem
        border-style solid
        border-color transparent transparent #ffffff transparent
    .naright
      flex 1
      text-align center
      font-size 12px
      line-height 18px
      p:first-of-type
        color #c30101
  .account-money
    display flex
    font-size 0.56rem
    line-height 0.72rem
    align-items center
    height 2rem
    &>div
      flex 1
      text-align center
    i 
      font-size 0.4rem
  .account-investment
    height 1.6rem
    background-color #e5e5e5
    display flex
    align-items center
    padding 0 0.4rem 0 0.6rem
    i 
      margin-right 0.24rem
      font-size 0.96rem
      color #7eaad0
    .investment-txt
      flex 1
      p:first-of-type
        font-size 0.56rem
      p:last-of-type
        font-size 0.48rem
        margin-top 0.08rem
      span 
        color #ae0101
    .investmentbtn
      height 0.8rem
      line-height 0.8rem
      padding 0 0.16rem
      color #ffffff
      font-size 0.48rem
      background-color #7eaad0
</style>

<template>
  <div class="account">
    <myheader left="prev" center="账户中心"></myheader>
    <div class="account-name">
      <div class="naleft">
        <i class="icon icon-dengluyonghuming"></i>
        <p>姓名</p>
      </div>
      <div class="nacenter">
        <p>钱包资产估值</p>
        <p>0.00000000 <span>≈$0.00</span></p>
      </div>
      <div class="naright">
        <p>￥00000.00</p>
        <p>累计收益</p>
      </div>
    </div>
    <div class="account-money">
      <div>
        <p>￥00.00</p>
        <p>账户余额</p>
      </div>
      <i class="icon icon-jia"></i>
      <div>
        <p>￥000.00</p>
        <p>待收本金</p>
      </div>
    </div>
    <div class="account-investment">
      <i class="icon icon-zhanghuxinxililv"></i>
      <div class="investment-txt">
        <p>昨日收益：<span>0.00元</span></p>
        <p>总收益第xxx名，比前一名仅差00.00元哟！</p>
      </div>
      <router-link class="investmentbtn" to="/">立即投资</router-link>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
export default {
  components:{
    myheader,
    myfooter
  },
}
</script>
