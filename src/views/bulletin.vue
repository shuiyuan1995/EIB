<style lang="stylus" scoped>
  .bulletin
    padding-top 1.76rem
  .tablenav
    position fixed
    top 1.4rem
    width 100%
    display flex
    height 1.6rem
    align-items center
    background #fefefe
    border-bottom 2px solid #bfbfbf
    span 
      flex 1
      text-align center
      line-height 1.6rem
      font-size 0.6rem
      color #010101
      &.active
        background #a1bedb
        color #fefefe
  .tablelist
    li
      position relative
      border-bottom 0.06rem solid #dddada
      display flex
      align-items center
      height 1.6rem
      font-size 0.56rem
      padding-left 1.2rem
      padding-right 0.52rem
      justify-content space-between
      &:before
        position absolute
        left 0.6rem
        content ''
        width 0.24rem
        height 0.24rem
        background #526ca3
        border-radius 50%
      span:first-of-type
        width 7.52rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
  .tablelist1
    &>div
      display flex
      height 2.4rem
      border-bottom 0.06rem solid #dddada
      align-items center
      padding 0 0.52rem
    .list1-l
      width 1.6rem
      height 1.6rem
      border solid 1px #526ca3
      border-radius 50%
      margin-right 0.8rem
      text-align center
      line-height 1.6rem
      .icon
        font-size 1.16rem
        color #5570a6
    .list1-c
      flex 1
      p:first-of-type
        font-size 0.56rem
      p:last-of-type
        font-size 0.48rem
        margin-top 0.16rem
    .icon-pagenext
      font-size 1.04rem
      color #cccccc
</style>

<template>
  <div class="bulletin">
    <myheader left="prev" center="消息及公告"></myheader>
    <div class="tablenav">
      <span @click="changetable(false)" :class="thisbulletin?'':'active'">公告</span>
      <span @click="changetable(true)" :class="thisbulletin?'active':''">消息</span>
    </div>
    <ul class="tablelist" v-show="!thisbulletin">
      <li v-for="item in 10" :key="item" @click="$router.push('/bulletinlist')">
        <span>暖宝宝-EOS过冬理财计划...</span><span>2018-04-19</span>
      </li>
    </ul>
    <div class="tablelist1" v-show="thisbulletin">
      <div @click="$router.push('/bulletinnotice')">
        <div class="list1-l"></div>
        <div class="list1-c">
          <p>通知</p>
          <p>查看站内通知</p>
        </div>
        <i class="icon icon-pagenext"></i>
      </div>
      <div @click="$router.push('/bulletinnotice')">
        <div class="list1-l">
          <i class="icon icon-yonghu"></i>
        </div>
        <div class="list1-c">
          <p>私信</p>
          <p>查看我的私信</p>
        </div>
        <i class="icon icon-pagenext"></i>
      </div>
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
  data(){
    return{
      thisbulletin:true
    }
  },
  methods:{
    changetable(b){
      this.thisbulletin = b
    }
  }
}
</script>
