<style lang="stylus" scoped>
  .investmentinfo-top
    border-bottom 0.96rem solid #e9eeec
    padding-bottom 0.56rem
    .title
      display flex
      justify-content space-between
      padding 0 1.28rem 0 0.44rem
      margin-top 0.68rem
      align-items center
    .title-left
      font-family MicrosoftYaHei
      font-size 0.48rem
      display flex
      align-items center
      span 
        width 0.56rem
        height 0.56rem
        background #7eaad0
        text-align center
        line-height 0.56rem
        color #ffffff
      p
        margin-left 0.2rem   
    p
      font-size 0.48rem
    .investmentinfo-type
      display flex
      justify-content flex-end
      margin-top 0.36rem
      i 
        width: 0; 
        height: 0;
        border-width: 0.28rem;
        border-style: solid;
        border-color: transparent #a1bedb transparent transparent;
      span 
        width 6rem
        height 0.56rem
        background-color #a1bedb
        font-size 0.48rem
        line-height 0.56rem
        text-align center
        color #ffffff
        margin-left 1px
    .investmentinfo-msg
      display flex
      margin-top 0.5rem
      .msg-item
        flex 1
        text-align center
      i 
        color #7ca9cc
        font-size 1.6rem
      p:first-of-type
        margin-top 0.28rem
        margin-bottom 0.08rem
    .investmentinfo-bar
      display flex
      justify-content space-between
      align-items center
      margin-top 0.72rem
      padding 0 0.8rem 0 1.2rem
      p
        color #546da8
      .bar
        position relative
        width 7.52rem
        height 0.2rem
        background-color #a6a6a6
        border-radius 0.1rem
      .bar-info
        position absolute
        top 0px
        left 0px
        width 10%
        height 100%
        background-color #d4a79e
        border-radius 0.1rem
  .investmentinfo-center
    font-size 13px
    padding-left 1.6rem
    padding-top 0.2rem
    line-height 0.88rem
    li
      position relative
      &:before
        position absolute
        left -0.48rem
        top 0.32rem
        content ''
        width 0.24rem
        height 0.24rem
        background-color #5570a6
        border-radius 50%
  .investmentinfo-table
    margin-top 0.4rem
    .tabletitle
      height 1.52rem
      border-top 1px solid #bfbfbf
      border-bottom 2px solid #bfbfbf
      font-size 0.72rem
      display flex
      align-items center
      span 
        flex 1
        text-align center
        &.active
          color #5570a6
          line-height 1.52rem
          border-bottom 2px solid #5570a6
    .tablebox1
      font-size 0.48rem
      .boxtxt,.boxtxt1
        min-height 4rem
        padding 0.36rem 0.44rem
      .boxtitle
        height 0.88rem
        color #000000
        line-height 0.88rem
        padding-left 0.44rem
        font-size 0.56rem
        background-color #e9eeec
    .tablebox2
      min-height 4rem
      p
        text-align center
        font-size 0.56rem
        margin-top 0.8rem
      li
        display flex
        font-size 12px
        height 1.2rem
        line-height 1.2rem
        border-bottom 1px solid #bfbfbf
      span 
        flex 1
        text-align center
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
    .tablebox3
      min-height 4rem
      p
        text-align center
        font-size 0.56rem
        margin-top 0.8rem
      li
        display flex
        font-size 12px
        height 1.2rem
        line-height 1.2rem
        border-bottom 1px solid #bfbfbf
      span 
        flex 1
        text-align center
  .investmentinfo-btn
    display block
    width 14rem
    height 1.2rem
    margin 0 auto
    background-color #9bb6d3
    text-align center
    font-size 15px
    color #ffffff
    line-height 1.2rem
    margin-top 0.8rem
</style>

<template>
  <div class="investmentinfo">
    <myheader left="prev" center="投资详情"></myheader>
    <div class="investmentinfo-top">
      <div class="title">
        <div class="title-left">
          <span>{{type}}</span><p>{{thisbiao.item.title}}</p>
        </div>
        <p>还需融资：{{thisbiao.item.surplus}} {{thisbiao.item.need_coin}}</p>
      </div>
      <div class="investmentinfo-type">
        <i></i>
        <span>{{thisbiao.item.state}}</span>
      </div>
      <div class="investmentinfo-msg">
        <div class="msg-item">
          <i class="icon icon-chuzhijine"></i>
          <p>融资金额</p>
          <p>{{thisbiao.item.total}} {{thisbiao.item.need_coin}}</p>
        </div>
        <div class="msg-item">
          <i class="icon icon-zhanghuxinxililv"></i>
          <p>预期利率</p>
          <p>{{info.annual_profit}}</p>
        </div>
        <div class="msg-item">
          <i class="icon icon-shijian1"></i>
          <p>借款期限</p>
          <p>{{info.day}}天</p>
        </div>
      </div>
      <div class="investmentinfo-bar">
        <p>当前进度：{{100-Math.floor(thisbiao.item.surplus/thisbiao.item.total*100)}}%</p>
        <div class="bar">
          <div class="bar-info" :style="{width:`${100-Math.floor(thisbiao.item.surplus/thisbiao.item.total*100)}%`}"></div>
        </div>
      </div>
    </div>
    <ul class="investmentinfo-center">
      <li>开标时间：{{info.start}}</li>
      <li>停标时间：{{info.end}}</li>
      <li>还款日期：{{info.repay}}天</li>
      <li>计息方式：{{info.compute}}</li>
      <li>计息币种：{{info.coin}}</li>
    </ul>
    <div class="investmentinfo-table">
      <div class="tabletitle">
        <span @click="tablechange(0)" :class="istable==0?'active':''">投标详情</span>
        <span @click="tablechange(1)" :class="istable==1?'active':''">投标记录</span>
        <span @click="tablechange(2)" :class="istable==2?'active':''">还款周期</span>
      </div>
      <div class="tablebox1" v-show="istable==0">
        <p class="boxtxt" v-html="details.details"></p>
        <p class="boxtitle">基本信息</p>
        <p class="boxtxt1" v-html="details.info"></p>
      </div>
      <ul class="tablebox2" v-show="istable==1">
        <li>
          <span>用户名</span>
          <span>金额</span>
          <span>时间</span>
        </li>
        <li v-for="(item,index) in recode" :key="index">
          <span>{{item.name}}</span>
          <span>{{item.money}} {{item.need_coin}}</span>
          <span>{{item.time}}</span>
        </li>
        <p v-show="!recode.length">暂未开始</p>
      </ul>
      <ul class="tablebox3" v-show="istable==2">
        <li>
          <span>期数</span>
          <span>还款日期</span>
          <span>还款类型</span>
          <span>状态</span>
        </li>
        <li v-for="(item,index) in cycle" :key="index">
          <span>{{item.phase}}</span>
          <span>{{item.time}}</span>
          <span>{{item.type}}</span>
          <span>{{item.state}}</span>
        </li>
        <p v-show="!cycle.length">暂未开始</p>
      </ul>
    </div>
    <div class="investmentinfo-btn" @click="gonext">立即投资</div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import { get } from "@api/index";
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {changedata} from '@common/js/index'
import {mapGetters,mapMutations} from 'vuex';
import {SET_THIS_BIAO,SET_LOADING} from "@store/mutation-types"
export default {
  activated(){
    this.SET_LOADING(true)
    this.getdata()
  },
  data(){
    return{
      type:'',
      item:{},
      info:{},
      details:{},
      cycle:[],
      recode:[],
      istable:0
    }
  },
  components:{
    myheader,
    myfooter
  },
  computed:{
    ...mapGetters([
      "thisbiao",
      "userInfo"
    ]),
  },
  methods:{
    tablechange(num){
      this.istable = num
    },
    // 数据获取
    getdata(){
      get('/bid_info',{id:this.thisbiao.item.id}).then(json=>{
        this.SET_LOADING(false)
        const {info,details,cycle,recode} = json.data;
        this.details = details;
        this.recode = recode.map(val=>{
          return {
            ...val,
            time:changedata(val.time*1000,'yyyy-MM-dd')
          }
        })
        this.cycle = cycle.map(val=>{
          return {
            ...val,
            time:changedata(val.time*1000,'yyyy-MM-dd')
          }
        });
        this.info = {
          ...info,
          start:changedata(info.start*1000,'yyyy-MM-dd'),
          end:changedata(info.end*1000,'yyyy-MM-dd'),
        };
        this.SET_THIS_BIAO({...this.thisbiao,info:this.info})
      })
    },
    gonext(){
      if(this.thisbiao.item.state=='已完成'){
        this.$createToast({
          txt: '此标已完成募集,请选择其他标',
          type: 'txt'
        }).show()
        return false
      }
      if(this.thisbiao.item.state=='还款中'){
        this.$createToast({
          txt: '此标正在结算,请选择其他标',
          type: 'txt'
        }).show()
        return false
      }
      if(this.thisbiao.item.state=='认购完成'){
        this.$createToast({
          txt: '此标已认购完成,请选择其他标',
          type: 'txt'
        }).show()
        return false
      }
      if(this.thisbiao.item.state=='募集中'){
        if(!this.userInfo.account){
          this.$createToast({
            txt: '请绑定钱包',
            type: 'txt'
          }).show()
          return false
        }
        if(!this.userInfo.pay_password){
          this.$createToast({
            txt: '请绑定支付密码',
            type: 'txt'
          }).show()
          return false
        }
        this.$router.push({
          name: 'investmentmoney',
          params: {}
        })
      }
    },
    ...mapMutations({
      SET_THIS_BIAO,
      SET_LOADING
    }),
  }
}
</script>
