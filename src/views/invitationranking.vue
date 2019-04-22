<style lang="stylus" scoped>
  .rankingnav
    display flex
    border 1px solid #bfbfbf
    margin 20px 0.48rem
    font-size 14px
    height 1.2rem
    span 
      flex 1
      text-align center
      line-height 1.2rem
      color #5570a6
      &.active
        border-radius 2.5px
        background #526ca3
        color #ffffff
  .rankinglist
    border-top 1px solid #d2d2d2
    li
      display flex
      font-size 14px
      text-align center
      height 1.2rem
      align-items center
      border-bottom 1px solid #d2d2d2
      &:first-of-type
        font-size 16px
        color #526ca3
      &:nth-of-type(2) .icon
        color #fff142
      &:nth-of-type(3) .icon
        color #d3b8ae
      &:nth-of-type(4) .icon
        color #b37c2c
      span 
        flex 2
        &:first-of-type
          flex 1
</style>

<template>
  <div class="invitationranking">
    <myheader left="prev" center="排名榜"></myheader>
    <nav class="rankingnav">
      <span :class="thisactive==0?'active':''" @click="thisactive=0">投资奖励总排行榜</span>
      <span :class="thisactive==1?'active':''" @click="thisactive=1">投资奖励月排行榜</span>
      <span :class="thisactive==2?'active':''" @click="thisactive=2">充值奖励总排行榜</span>
    </nav>
    <ul class="rankinglist">
      <li>
        <span>排名</span>
        <span>姓名</span>
        <span>邀请收益奖励</span>
      </li>
      <li v-for="item in 20" :key="item">
        <span :class="item>3?'':'icon icon-huangguan'">{{item>3?item:''}}</span>
        <span>姓名</span>
        <span>00000.00元</span>
      </li>
    </ul>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
export default {
  data(){
    return{
      thisactive:0
    }
  },
  components:{
    myheader,
    myfooter
  },
}
</script>
