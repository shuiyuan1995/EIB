<style lang="stylus" scoped>
  .investmentnav
    display flex
    height 1.2rem
    color #7eaad0
    font-family MicrosoftYaHei
    font-size 0.8rem
    align-items center
    border-bottom 2px solid #dee3e1
    justify-content center
    margin-top 0.64rem
    div
      flex 1
      text-align center
      line-height 1.2rem
      &.active
        color #5570a6
        border-bottom 2px solid #546fa5
  .view-wrapper
    position absolute
    width 100%
    top 84px
    bottom 0px
  .item
    height 4rem
    min-width 15rem
    border-bottom 4px solid #f4f2ea
    padding 0 0.32rem
    box-sizing border-box
    .item-top
      border-bottom 1px solid #bfbfbf
      font-family MicrosoftYaHei
      font-size 0.48rem
      display flex
      align-items center
      padding 0.24rem 0 0.04rem 0
      span 
        width 0.56rem
        height 0.56rem
        background #7eaad0
        text-align center
        line-height 0.56rem
        color #ffffff
      p
        margin-left 0.2rem
    .item-center
      display flex
      justify-content center
      align-items center
      font-size 0.48rem
      height 2.1rem
      .itemcenterlist
        flex 1
        text-align center
        color #000000
        p:first-of-type
          margin-bottom 0.16rem
          color #474747
    .item-botton
      display flex
      justify-content space-between
      padding 0 0.68rem
      .bar
        display flex
        align-items center
        font-size 0.48rem
        span 
          margin-left 0.12rem
      .bar-box
        position relative
        width 6rem
        height 0.24rem
        background #bfbac1
        border-radius 0.12rem
      .bar-info
        position absolute
        top 0px
        left 0px
        height 0.24rem
        border-radius 0.12rem
        background #d4a79e
      .tenderbtn
        width 2.24rem
        height 0.6rem
        background-color #d4a79e
        border-radius 0.1rem
        color #ffffff
        font-size 0.48rem
        line-height 0.6rem
        text-align center
        &.old
          background-color #f4f2ea
          color #373737
</style>

<template>
  <div class="investment">
    <myheader left="prev" center="投资列表"></myheader>
    <nav class="investmentnav">
      <div class="active">信用标</div>
    </nav>
    <div class="view-wrapper">
      <cube-recycle-list class="list" :offset="offset" :infinite="infinite" :size="size" :on-fetch="onFetch">
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
          <div :id="data.id" class="item">
            <div class="item-top">
              <span>{{data.type}}</span><p>{{data.title}}</p>
            </div>
            <div class="item-center">
              <div class="itemcenterlist">
                <p>总额（EOS）</p>
                <p>{{data.allmoney}}</p>
              </div>
              <div class="itemcenterlist">
                <p>预期年回报率</p>
                <p>{{data.Rate}}</p>
              </div>
              <div class="itemcenterlist">
                <p>借款期限（天）</p>
                <p>{{data.day}}</p>
              </div>
              <div class="itemcenterlist">
                <p>剩余金额</p>
                <p>{{data.remaining}}</p>
              </div>
            </div>
            <div class="item-botton">
              <div class="bar">
                <div class="bar-box">
                  <div class="bar-info" :style="{width:`${Math.floor(data.remaining/data.allmoney*100)}%`}"></div>
                </div>
                <span>{{Math.floor(data.remaining/data.allmoney*100)}}%</span>
              </div>
              <span @click="$router.push('/investmentinfo')" class="tenderbtn" :class="data.tender?'old':''">{{data.tender?'已投标':'立即投标'}}</span>
            </div>
          </div>
        </template>
        <myfooter slot="noMore"></myfooter>
      </cube-recycle-list>
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
      offset:100
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
        console.log('请求')
        // 模拟请求 50 条数据，因为 size 设置为 50
        setTimeout(() => {
          for (let i = 0; i < 19; i++) {
            items.push({
              id: i,
              type:'信',
              title:'暖宝宝-EOS过冬理财计划',
              allmoney:'100.0000',
              Rate:'13%',
              day:'30',
              remaining:'10.0000',
              tender:false
            })
          }
          resolve(items)
        }, 1000)
      })
    }
  }
}
</script>
