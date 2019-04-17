<style lang="stylus" scoped>
  .settingnav
    border-bottom 0.06rem solid #e8edeb
    display flex
    font-size 0.64rem
    height 1.2rem
    align-items center
    span
      flex 1
      text-align center
      line-height 1.2rem
      &.active
        border-bottom 0.06rem solid #5570a6
  .settingitem
    margin-top 0.4rem
    .itemtop
      background #e5e5e5
      padding 0.48rem 0.84rem 0.6rem 0.64rem
      font-size 0.56rem
    p:not(.first)
      line-height 0.8rem
    .first
      display flex
      justify-content space-between
      align-items center
      i 
        color #b20202
      span:last-of-type
        background-color #9bb6d5
        border-radius 0.1rem
        color #ffffff
        padding 0.24rem 0.48rem
    .tablenav
      display flex
      font-size 0.56rem
      height 1.32rem
      align-items center
      border-bottom 1px solid #e5e5e5
      span 
        flex 1
        text-align center
        border-right 1px solid #e5e5e5
        line-height 1.32rem
        &:last-of-type
          border-right none
    .view-wrapper
      position absolute
      width 100%
      top 8.8rem
      bottom 0rem
      .item
        display flex
        font-size 12px
        height 30px
        border-bottom 1px solid #e5e5e5
        align-items center
        span 
          flex 1
          text-align center
        .blue
          color #5570a6
        .red
          color #b40000
  .settingitem1
    .item1top
      display flex
      justify-content space-between
      padding 0 1.12rem 0 0.76rem
      font-size 0.64rem
      align-items center
      background #9bb6d5
      height 2.4rem
      margin-top 0.4rem
      margin-bottom 0.8rem
      .icon
        color #ffffff
        &:before
          color #5570a6
          margin-right 0.24rem
      .topbtn
        font-size 0.56rem
        padding 0.24rem 0.56rem
        border-radius 0.84rem
        background #ffffff
    .item1table
      padding 0 0.68rem 0 0.6rem
    .item1title
      display flex
      align-items center
      background #e5e5e5
      font-size 0.56rem
      height 1.6rem
      span 
        flex 1
        text-align center
    .item1info
      display flex
      font-size 0.56rem
      align-items center
      border-bottom 0.04rem solid #e5e5e5
      padding 0.16rem 0
      span 
        flex 1
        text-align center
      .cubeswitch
        padding-left 1.2rem
</style>

<template>
  <div class="accountsetting">
    <myheader left="prev" center="投资管理"></myheader>
    <div class="settingnav">
      <span :class="thisactive?'active':''" @click="thisactive=true">投资记录</span>
      <span :class="thisactive?'':'active'" @click="thisactive=false">自动投标设置</span>
    </div>
    <div class="settingitem" v-show="thisactive">
      <div class="itemtop">
        <p class="first"><span>累计投资：<i>00</i>笔/<i>00000.00</i> EOS</span><span>立即投资</span></p>
        <p>待收本金：0笔/00000.00 EOS ≈0.00</p>
        <p>发放利息：0笔/000.00 EOS ≈0.00</p>
        <p>待收利息：0笔/000.00 EOS ≈0.00</p>
      </div>
      <div class="itemtable">
        <div class="tablenav">
          <span>投资时间</span>
          <span>状态</span>
          <span>金额（EOS）</span>
          <span>还款日期</span>
        </div>
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
                <span>04-23  17:40</span>
                <span class="blue">已还本金</span>
                <span>0000.00</span>
                <span class="red">2018-05-30</span>
              </div>
            </template>
            <myfooter slot="noMore"></myfooter>
          </cube-recycle-list>
        </div>
      </div>
    </div>
    <div class="settingitem1" v-show="!thisactive">
      <div class="item1top">
        <span class="icon icon-set">委托投资（自动投资）</span>
        <span class="topbtn">全部开启</span>
      </div>
      <ul class="item1table">
        <li class="item1title">
          <span>种类</span>
          <span>数量</span>
          <span>自动投资</span>
        </li>
        <li class="item1info" v-for="item in 6" :key="item">
          <span>BTC</span>
          <span>0</span>
          <span><cube-switch class="cubeswitch" v-model="value"></cube-switch></span>
        </li>
      </ul>
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
      thisactive:true,
      value:false
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
