<style lang="stylus" scoped>
  .imoney-top
    height 6.32rem
    background-color #a1bedb
    padding 1.16rem 0.96rem
    p:first-of-type
      font-size 0.64rem
      color #ffffff
      i 
        margin-right 0.28rem
    p:last-of-type
      font-size 1.2rem
      color #ffffff
      margin-top 1rem
  .imoney-center
    padding 0.32rem 0.72rem
    h3
      color #010101
      font-size 0.56rem
    .tabletitle
      color #aeaeae
      font-size 12px
      margin-top 10px
      display flex
      justify-content space-between
      align-items center
      .cubecheckbox
        padding 0px
        color #aeaeae
    ul
      border-top 1px solid #e5e5e5
      li
        display flex
        border-bottom 1px solid #e5e5e5
        color #010101
        font-size 0.48rem
        height 0.88rem
        line-height 0.88rem
      span 
        flex 1
        &:last-of-type
          color #b6b6b6
  .imoney-bottom
    .imoney-input
      height 1.2rem
      width 13rem
      padding 0rem
      font-size 0.48rem
      margin 0.48rem auto 0
    .inputappend
      margin-right 0.4rem
    &>p
      text-align right
      font-size 0.48rem
      width 13rem
      margin 0 auto
      margin-top 0.4rem
  .investmentinfo-btn
    display block
    width 13rem
    height 1.2rem
    margin 0 auto
    background-color #9bb6d3
    text-align center
    font-size 15px
    color #ffffff
    line-height 1.2rem
    margin-top 0.8rem
</style>

<template>
  <div class="investmentmoney">
    <myheader left="prev" center="投资金额"></myheader>
    <div class="imoney-top">
      <p><i class="icon icon-chuzhijine"></i>还需融资</p>
      <p>0 币种（EOS)</p>
    </div>
    <div class="imoney-center">
      <h3>币币账户</h3>
      <div class="tabletitle">
        <span>资产明细</span>
        <cube-checkbox v-model="checked" class="cubecheckbox">
          隐藏小额币种
        </cube-checkbox>
      </div>
      <ul>
        <li v-for="item in 7" :key="item">
          <span>BTC</span>
          <span>0</span>
          <span>冻结 0</span>
        </li>
      </ul>
    </div>
    <div class="imoney-bottom">
      <cube-input v-model="value" class="imoney-input" placeholder='100元起投，金额为1的倍数'>
        <template slot="append">
          <p class="inputappend">元</p>
        </template>
      </cube-input>
      <p>利息收益：0.00</p>
      <router-link class="investmentinfo-btn" to="/investmentgo">下一步</router-link>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
export default {
  data() {
    return {
      checked:false,
      value:''
    }
  },
  components:{
    myheader,
    myfooter
  },
}
</script>
