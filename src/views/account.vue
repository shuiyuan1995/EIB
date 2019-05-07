<style lang="stylus" scoped>
  .account-name
    display flex
    height 60px
    align-items center
    border-bottom 1px solid #e5e5e5
    .naleft
      flex 1
      text-align center
      font-size 14px
      i 
        color #80abd1
        font-size 1.2rem
    .nacenter
      position relative
      flex 2
      text-align center
      font-size 16px
      background #9bb6d3
      height 60px
      color #dddddd
      p:last-of-type
        color #ffffff
      p
        margin-top 0.32rem
      span 
        font-size 12px
        color #dddddd
      &:after
        position absolute
        bottom 0px
        left 3.48rem
        content ''
        width 0
        height 0
        border-width 0.28rem
        border-style solid
        border-color transparent transparent #ffffff transparent
    .naright
      flex 1
      text-align center
      font-size 12px
      line-height 18px
      p:first-of-type
        color #c30101
  .account-money
    display flex
    font-size 0.56rem
    line-height 0.72rem
    align-items center
    height 2rem
    &>div
      flex 1
      text-align center
    i 
      font-size 0.4rem
  .account-investment
    height 1.6rem
    background-color #e5e5e5
    display flex
    align-items center
    padding 0 0.4rem 0 0.6rem
    i 
      margin-right 0.24rem
      font-size 0.96rem
      color #7eaad0
    .investment-txt
      flex 1
      p:first-of-type
        font-size 0.56rem
      p:last-of-type
        font-size 0.48rem
        margin-top 0.08rem
      span 
        color #ae0101
    .investmentbtn
      height 0.8rem
      line-height 0.8rem
      padding 0 0.16rem
      color #ffffff
      font-size 0.48rem
      background-color #7eaad0
  .accountnav
    display flex
    padding 0.56rem 0
    border-bottom 8px solid #eeeeee
    &>div
      flex 1
      text-align center
      color #0a3ea6
    .icon
      font-size 1.2rem
    p
      font-size 0.56rem
      margin-top 0.16rem
  .thetable
    padding 0 0.6rem 0 0.72rem
</style>

<template>
  <div class="account">
    <myheader left="prev" center="账户中心"></myheader>
    <div class="account-name">
      <div class="naleft">
        <i class="icon icon-dengluyonghuming"></i>
        <p>{{userInfo.nick}}</p>
      </div>
      <div class="nacenter">
        <p>钱包资产估值</p>
        <p>{{sum_money+due}} <span>≈￥{{(porportion*(sum_money+due)).toFixed(2)}}</span></p>
      </div>
      <div class="naright">
        <p>{{accumulated}} EOS</p>
        <p>累计收益</p>
      </div>
    </div>
    <div class="account-money">
      <div>
        <p>{{sum_money}} EOS</p>
        <p>账户余额</p>
      </div>
      <i class="icon icon-jia"></i>
      <div>
        <p>{{due}}</p>
        <p>待收本金</p>
      </div>
    </div>
    <div class="account-investment">
      <i class="icon icon-zhanghuxinxililv"></i>
      <div class="investment-txt">
        <p v-if="no">总收益第{{no}}名，比前一名仅差{{difference}}元哟！</p>
        <p v-else>您还没有排名，快去投标吧</p>
      </div>
      <router-link class="investmentbtn" to="/investment">立即投资</router-link>
    </div>
    <div class="accountnav">
      <div @click="$router.push('/accountRecharge')">
        <i class="icon icon-chongzhi1"></i>
        <p>充值</p>
      </div>
      <div @click="$router.push('/accountExtract')">
        <i class="icon icon-tixian"></i>
        <p>提现</p>
      </div>
      <div @click="$router.push('/accountsetting')">
        <i class="icon icon-nengtoutouziguanlixitongtubiao_tongjifenxi"></i>
        <p>投资管理</p>
      </div>
      <div @click="$router.push('/accountHistory')">
        <i class="icon icon-jilu2-copy"></i>
        <p>交易记录</p>
      </div>
    </div>
    <accounttable class="thetable"></accounttable>
    <myfooter></myfooter>
  </div>
</template>

<script>
import {get} from '@api/index'
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import accounttable from '@components/accounttable.vue'
import {mapGetters,mapMutations} from 'vuex';
import {SET_AOTO,SET_CONTENT} from "@store/mutation-types"
export default {
  created(){
    get('/security/center').then(json=>{
      const {accumulated,difference,no,sum_money,due,porportion,aoto,content} = json.data;
      this.accumulated = accumulated;
      this.difference = difference;
      this.no = no;
      this.sum_money = sum_money;
      this.porportion = porportion;
      this.due = due;
      this.SET_AOTO(aoto)
      this.SET_CONTENT(content)
    })
  },
  data(){
    return{
      accumulated:'',
      difference:'',
      no:'',
      sum_money:'',
      due:'',
      porportion:''
    }
  },
  components:{
    myheader,
    myfooter,
    accounttable,
  },
  computed:{
    ...mapGetters([
      "userInfo"
    ]),
  },
  methods:{
    ...mapMutations({
      SET_AOTO,
      SET_CONTENT
    }),
  }
}
</script>
