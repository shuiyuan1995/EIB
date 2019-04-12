<style lang="stylus" scoped>
  .ranking-top
    height 3.56rem
    background-color #a1bedb
  .tablebar
    display flex
    height 2.48rem
    align-items center
    border-bottom 0.12rem solid #dcdcdc
    .tableitem
      flex 1
      display flex
      font-size 0.56rem
      justify-content center
      align-items center
      color #5570a6
      height 2.48rem
      &.active
        border-bottom 0.12rem solid #5570a6
      span 
        width 1.32rem
        height 1.32rem
        line-height 1.32rem
        color #ffffff
        background #9bb6d3
        margin-right 0.08rem
        text-align center
      p:last-of-type
        font-size 0.48rem
  .tablelist
    li
      display flex
      height 1.84rem
      border-bottom 1px solid #e8edeb
      align-items center
      span 
        flex 2
        text-align center
        font-size 0.56rem
        &.icon
          flex 1
          font-size 0.96rem
          color #cccccc
        &.good
          color red
</style>

<template>
  <div class="ranking">
    <myheader left="prev" center="收益排行"></myheader>
    <div class="ranking-top"></div>
    <div class="ranking-table">
      <nav class="tablebar">
        <div class="tableitem" @click="changeto(0)" :class="isactive==0?'active':''">
          <span>利息</span>
          <div>
            <p>投资利息</p>
            <p>收益排行榜</p>
          </div>
        </div>
        <div class="tableitem" @click="changeto(1)" :class="isactive==1?'active':''">
          <span>投资</span>
          <div>
            <p>邀请投资</p>
            <p>奖励排行榜</p>
          </div>
        </div>
        <div class="tableitem" @click="changeto(2)" :class="isactive==2?'active':''">
          <span>充值</span>
          <div>
            <p>邀请充值</p>
            <p>奖励排行榜</p>
          </div>
        </div>
      </nav>
      <ul class="tablelist">
        <li v-for="item in 10" :key="item">
          <span :class="item<4?'good':''" class="icon icon-shouye"></span>
          <span>a*****</span>
          <span>5,154.94</span>
        </li>
      </ul>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
export default {
  data(){
    return{
      isactive:0
    }
  },
  components: {
    myheader,
    myfooter
  },
  methods:{
    changeto(num){
      this.isactive = num
    }
  }
}
</script>
