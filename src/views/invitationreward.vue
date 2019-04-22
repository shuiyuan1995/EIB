<style lang="stylus" scoped>
  .rewardtop
    background #9bb6d5
    padding-bottom 2.48rem
    nav 
      margin 0 auto
      background #e8edeb
      border-radius 0 0 0.2rem 0.2rem
      align-items center
      width 4rem
      height 1.2rem
      display flex
      span 
        flex 1
        text-align center
        font-size 14px
        &:first-of-type
          border-right 1px solid #a6a6a6
        &.active
          color #5570a6
          font-weight bold
    .person
      float left
      display flex
      position relative
      margin-left 24px
      margin-top 4px
      .icon
        position absolute
        font-size 29px
        left -16px
        background #1296db
        color #ffffff
        border-radius 50%
        overflow hidden
      p
        background #ffffff
        font-size 12px
        padding 2px 10px 2px 16px
        border-radius 4px
        span:first-of-type
          color #bd1313
        span 
          display block
    .message
      text-align center
      margin-top 0.96rem
      color #ffffff
      .img
        width 1.16rem
        margin 0 auto
        img 
          width 100%
      p
        margin-top 0.16rem
      p:nth-of-type(1)
        font-size 0.48rem
      p:nth-of-type(2)
        font-size 0.52rem
      p:nth-of-type(3)
        font-size 0.72rem
    .messagebottom
      font-size 0.48rem
      color #ffffff
      padding-left 0.96rem
      line-height 0.72rem
    .btn
      float right
      span 
        display block
        background #526ca3
        color #ffffff
        font-size 0.48rem
        text-align center
        border-radius 0.12rem
        padding 0.16rem 0.4rem
        margin-bottom 0.4rem
  .rewardmain
    padding 0 0.5rem
    .rewarditem
      font-size 0.56rem
      display flex
      justify-content space-between
      align-items center
      height 1.2rem
      border-bottom 1px solid #d2d2d2
      font-weight bold
      &:last-of-type
        color #526ca3
        font-size 0.48rem
        font-weight normal
    .view-wrapper
      position fixed
      width 100%
      top 330px
      left 0px
      bottom 0px
      padding 0 0.5rem
    .itemp
      display flex
      font-size 0.48rem
      height 1.2rem
      border-bottom 0.04rem solid #d2d2d2
      align-items center
      span:first-of-type
        flex 1
      .icon
        color #d2d2d2
        &.active
          transform rotate(90deg)
    .itemlist
      li 
        display flex
        font-size 0.48rem
        height 1.2rem
        border-bottom 0.04rem solid #d2d2d2
        align-items center
        padding-right 0.6rem
      span:nth-of-type(1)
        flex 2
      span:nth-of-type(2)
        flex 1
</style>

<template>
  <div class="invitationreward">
    <myheader left="prev" center="VIP会员"></myheader>
    <div class="rewardtop">
      <nav>
        <span class="active">总</span>
        <span>月</span>
      </nav>
      <div class="person">
        <span class="icon icon-750-user"></span>
        <p>
          <span>VIP会员</span>
          <span>姓名</span>
        </p>
      </div>
      <div class="message">
        <div class="img">
          <img src="../assets/images/medal.png" alt="">
        </div>
        <p>第2名</p>
        <p>收益（元）</p>
        <p>00000.00</p>
      </div>
      <div class="messagebottom">
        <p>1.直接邀请人收益X10%</p>
        <p>2.简介邀请人收益X5%</p>
      </div>
      <div class="btn">
        <span>提现</span>
        <span>邀请好友</span>
      </div>
    </div>
    <div class="rewardmain">
      <p class="rewarditem"><span>我邀请的好友</span><span>000人</span></p>
      <p class="rewarditem"><span>用户名</span><span>提供收益（元）</span></p>
      <div class="view-wrapper">
        <cube-recycle-list class="list" :infinite="infinite" :size="size" :on-fetch="onFetch">
          <!-- tombstone 的作用域插槽 slot-scope 必须声明 -->
          <template slot="tombstone" slot-scope="props">
            <div class="item tombstone">
              <div class="avatar"></div>
              <div class="bubble">
                <p></p>
                <p></p>
                <p></p>
                <div class="meta">
                  <time class="posted-date"></time>
                </div>
              </div>
            </div>
          </template>
          <template slot="item" slot-scope="{ data }">
            <div :id="data.id" class="item" @click="handleClick(data)">
              <p class="itemp" @click="thisopen=data.id"><span>1235465455679 </span><span>0.01/1笔</span><i class="icon icon-pagenext" :class="thisopen==data.id?'active':''"></i></p>
              <ul v-show="thisopen==data.id" class="itemlist">
                <li>
                  <span>1235465455679 </span><span>X10%</span><span>0.01/1笔</span>
                </li>
                <li>
                  <span>1235465455679 </span><span>X10%</span><span>0.01/1笔</span>
                </li>
                <li>
                  <span>1235465455679 </span><span>X10%</span><span>0.01/1笔</span>
                </li>
              </ul>
            </div>
          </template>
          <myfooter slot="noMore"></myfooter>
        </cube-recycle-list>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
export default {
  data(){
    return{
      size: 20,
      infinite: true,
      offset:100,
      thisopen:null,
    }
  },
  components:{
    myheader,
    myfooter
  },
  methods: {
     onFetch() {
      let items = []
      return new Promise((resolve) => {
        // 模拟请求 50 条数据，因为 size 设置为 50
        setTimeout(() => {
          for (let i = 0; i < 19; i++) {
            items.push({
              id: i,
              avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
              msg: '123',
              time: 'Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)'
            })
          }
          resolve(items)
        }, 1000)
      })
    },
  }
}
</script>
