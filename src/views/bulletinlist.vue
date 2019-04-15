<style lang="stylus" scoped>
  .bulletintitle
    padding 0 0.44rem
    border-bottom 0.08rem solid #e5e5e5
    color #000000
    font-size 0.6rem
    height 1.4rem
    line-height 1.4rem
    span
      display inline-block
      border-radius 50%
      width 0.36rem
      height 0.36rem
      background-color #526ca3
      margin-right 0.32rem
  .bulletintime
    display flex
    font-size 0.52rem
    padding 0 0.44rem
    border-bottom 0.06rem solid #e5e5e5
    align-items center
    height 1rem
    justify-content space-between
    span:first-of-type
      color #5670a7
  .bulletintop
    font-size 0.56rem
    padding 0 0.44rem
    border-bottom 0.06rem solid #e5e5e5
    height 1.2rem
    line-height 1.2rem
  .bulletinmain
    padding 0 0.44rem
    padding-top 0.8rem
</style>

<template>
  <div class="bulletinlist">
    <myheader left="prev" center="暖宝宝-EOS过冬理财计划"></myheader>
    <div class="bulletintitle"><span></span>暖宝宝-EOS过冬理财计划公告</div>
    <div class="bulletintime">
      <span>网站公告</span>
      <span>2018-04-19</span>
    </div>
    <div class="bulletintop">欢迎广大新老用户前来投资！</div>
    <div class="bulletinmain">
      <p>尊敬的用户：</p>
      <p>您好！</p>
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
