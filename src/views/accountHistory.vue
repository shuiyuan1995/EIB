<style lang="stylus" scoped>
  h2
    font-size 16px
    padding 10px 0.6rem
    font-weight bold
  .view-wrapper
    position absolute
    width 100%
    top 76px
    bottom 0px
  .item
    padding 0 0.6rem
    margin-bottom 10px
  .itemtop
    display flex
    background #9bb6d3
    justify-content space-between
    align-items center
    height 30px
    padding 0 8px
    color #ffffff
    font-size 16px
    .icon
      color #cccccc
  .itemcenter,.itembottom
    display flex
    padding 0 8px
    font-size 14px
    line-height 18px
    border-bottom 1px solid #e5e5e5
    span 
      flex 1
      white-space nowrap
      text-align center
</style>

<template>
  <div class="accountHistory">
    <myheader left="prev" center="投资列表"></myheader>
    <h2>历史记录</h2>
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
            <div class="itemtop">
              <span>转出(eos)</span>
              <i class="icon icon-pagenext" @click="$router.push('/accountitem')"></i>
            </div>
            <div class="itemcenter">
              <span>数量</span>
              <span>状态</span>
              <span>时间</span>
            </div>
            <div class="itembottom">
              <span>58.00002900</span>
              <span>已完成</span>
              <span>14:37  12/19/2018</span>
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
