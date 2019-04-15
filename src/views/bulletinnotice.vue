<style lang="stylus" scoped>
  .view-wrapper
    position absolute
    width 100%
    top 1.4rem
    bottom 0px
  .item
    width 100%
    padding 0 0.88rem 0 0.76rem
    text-align center
  .itemtop
    font-size 0.48rem
    display inline-block
    background #eeeeee
    padding 0.12rem 0.24rem
    border-radius 0.08rem
  .itemmain
    display flex
    margin-top 0.6rem
    .mainl
      width 1.52rem
      height 1.52rem
      border solid 1px #526ca3
      border-radius 50%
      text-align center
      line-height 1.52rem
      .icon
        font-size 1.12rem
        color #5570a6
    .mainr
      margin-left 0.88rem
      width 11rem
      min-height 1.2rem
      background-color #eeeeee
      border-radius 0.1rem
      font-size 0.56rem
      text-align left
      padding 0.16rem
</style>

<template>
  <div class="bulletinnotice">
    <myheader left="prev" center="我的私信"></myheader>
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
            <div class="itemtop">6-12 9:00</div>
            <div class="itemmain">
              <div class="mainl">
                <i class="icon icon-yonghu"></i>
              </div>
              <div class="mainr">21415tery3yerhdf</div>
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
