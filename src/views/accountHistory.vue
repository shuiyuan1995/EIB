<style lang="stylus" scoped>
  .accountHistory
    bottom 0px
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
    font-size 14px
    .icon
      color #cccccc
  .itemcenter,.itembottom
    display flex
    padding 0 8px
    line-height 18px
    border-bottom 1px solid #e5e5e5
    span 
      flex 2
      white-space nowrap
      text-align center
      font-size 0.48rem
      &:nth-of-type(1),&:nth-of-type(2)
        flex 1
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
              <span>{{data.type}}({{data.coin}})</span>
              <i class="icon icon-pagenext" @click="goto(data)"></i>
            </div>
            <div class="itemcenter">
              <span>数量</span>
              <span>状态</span>
              <span>时间</span>
            </div>
            <div class="itembottom">
              <span>{{data.money}}</span>
              <span>{{data.state}}</span>
              <span>{{data.time}}</span>
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
import {get} from '@api/index'
import {changedata} from '@common/js'
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
        get('/api/historical_record').then(json=>{
          items = json.data.map(val=>{
            return {
              ...val,
              time:changedata(val.time*1000,'hh:mm dd/MM/yyyy')
            }
          })
          resolve(items)
        })
      })
    },
    goto(data){
      this.$router.push({
        name:'accountitem',
        params: data
      })
    }
  }
}
</script>
