<style lang="stylus" scoped>
  .accountHistory
    color #ffffff
    bottom 0px
  h2
    font-size 16px
    padding 10px 0.6rem
    font-weight bold
  .view-wrapper
    position absolute
    width 100%
    top 76px
    bottom 2.2rem
  .item
    padding 0 0.6rem
    margin-bottom 10px
  .itemtop
    display flex
    background $btn-background
    justify-content space-between
    align-items center
    height 0.96rem
    padding 0 8px
    color #ffffff
    font-size 0.56rem
    .icon
      color #cccccc
      cursor pointer
  .itemcenter,.itembottom
    display flex
    padding 0 8px
    line-height 18px
    border-bottom 1px solid $border-small
    span 
      flex 2
      white-space nowrap
      text-align center
      font-size 0.48rem
      &:nth-of-type(1),&:nth-of-type(2)
        flex 1
  .itembottom
    color $font-active
</style>

<template>
  <div class="accountHistory">
    <myheader left="prev" center="投资列表"></myheader>
    <h2>历史记录</h2>
    <div class="view-wrapper">
      <cube-scroll ref="scroll" :data="thisitems" 
          :options="options" 
          @pulling-up="onPullingUp">
        <div class="item" v-for="(item,index) in thisitems" :key="index">
          <div class="itemtop">
            <span>{{item.type}}({{item.coin}})</span>
            <i class="icon icon-pagenext" @click="goto(item)"></i>
          </div>
          <div class="itemcenter">
            <span>数量</span>
            <span>状态</span>
            <span>时间</span>
          </div>
          <div class="itembottom">
            <span>{{item.money}}</span>
            <span>{{item.state}}</span>
            <span>{{item.time}}</span>
          </div>
        </div>
        <template slot="pulldown" slot-scope="props">
          <div v-if="props.pullDownRefresh"
            class="cube-pulldown-wrapper"
            :style="props.pullDownStyle">
            <div v-if="props.beforePullDown"
              class="before-trigger"
              :style="{paddingTop: props.bubbleY + 'px'}">
              <span :class="{rotate: props.bubbleY > 40}">↓</span>
            </div>
            <div class="after-trigger" v-else>
              <div v-show="props.isPullingDown" class="loading">
                <cube-loading></cube-loading>
              </div>
              <transition name="success">
                <div v-show="!props.isPullingDown" class="text-wrapper"><span class="refresh-text">更新成功</span></div>
              </transition>
            </div>
          </div>
        </template>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import {get} from '@api/index'
import {changedata} from '@common/js'
export default {
  activated(){
    this.getdata()
  },
  data(){
    return{
      thisitems:[],
      options: {
        pullUpLoad: true,
        scrollbar: {
          fade: true,
          interactive: false,
        },
        bounce:{
          top:false
        }
      },
      last:false,
      time:''
    }
  },
  components:{
    myheader
  },
  methods: {
    // 上拉加载
    onPullingUp() {
      if(this.last){
        this.$refs.scroll.forceUpdate();
      }else{
        this.getdata(this.time)
      }
    },
    getdata(time){
      get('/historical_record',{time:time?time:''}).then(json=>{
        const {data} = json
        if(data.length < 20){
          this.last = true
          this.time = ''
        }else{
          this.time = data[19].time
        }
        let thisarr = data.map(val=>{
          return {
            ...val,
            time:changedata(val.time*1000,'hh:mm dd/MM/yyyy')
          }
        })
        if(!time){
          this.thisitems = thisarr;
        }else{
          this.thisitems = [
            ...this.thisitems,
            ...thisarr
          ]
        }
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
