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
  .imoney-bottom
    .imoney-input
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
    margin 0 auto
    background-color #9bb6d3
    text-align center
    font-size 15px
    color #ffffff
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
      <accounttable></accounttable>
    </div>
    <div class="imoney-bottom">
      <cube-input v-model="value" class="imoney-input" placeholder='100元起投，金额为1的倍数'>
        <template slot="append">
          <p class="inputappend">元</p>
        </template>
      </cube-input>
      <p>利息收益：0.00</p>
      <!-- <router-link class="investmentinfo-btn" to="/investmentgo">下一步</router-link>s -->
      <cube-button class="investmentinfo-btn">下一步</cube-button>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import accounttable from '@components/accounttable.vue'
export default {
  data() {
    return {
      checked:false,
      value:''
    }
  },
  components:{
    myheader,
    myfooter,
    accounttable
  },
}
</script>
