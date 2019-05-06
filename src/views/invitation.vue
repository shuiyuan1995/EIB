<style lang="stylus" scoped>
  .advertising
    height 4rem
    background-color #9bb6d3
  .invitationlist
    li
      display flex
      line-height 1.8rem
      border-bottom 1px solid #a6a6a6
      align-items center
      padding 0 0.6rem
      font-size 0.64rem
      span:first-of-type
        width 1.24rem
        height 1.24rem
        border-radius 50%
        border solid 1px #5570a6
        margin-right 0.24rem
        text-align center
        line-height 1.24rem
        color #5570a6
        font-size 0.8rem
      span:nth-of-type(2)
        flex 1
</style>

<template>
  <div class="invitation">
    <myheader left="prev" center="邀请好友"></myheader>
    <div class="advertising"></div>
    <ul class="invitationlist">
      <li @click="$router.push('/invitationpromote')">
        <span class="icon icon-tuiguangyaoqing"></span>
        <span>推广邀请</span>
        <span class="icon icon-pagenext"></span>
      </li>
      <li @click="$router.push('/invitationreward')">
        <span class="icon icon-jichutubiao_jiangli"></span>
        <span>好友投资奖励</span>
        <span class="icon icon-pagenext"></span>
      </li>
    </ul>
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
