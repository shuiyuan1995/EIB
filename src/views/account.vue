<style lang="stylus" scoped>
  .account-name
    display flex
    height 3rem
    align-items center
    border-bottom 1px solid $font-active
    .naleft
      flex 0 0 25%
      overflow hidden
      text-align center
      font-size 0.56rem
      i 
        color $font-active
        font-size 1.2rem
      p
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        color #ffffff
    .nacenter
      position relative
      flex 2
      text-align center
      font-size 0.64rem
      height 3rem
      color #dddddd
      p
        color #ffffff
      p
        margin-top 0.32rem
      .rmb 
        font-size 0.48rem
        color #dddddd
      &:after
        position absolute
        bottom 0px
        left 3.48rem
        content ''
        width 0
        height 0
        border-width 6px
        border-style solid
        border-color transparent transparent $font-active transparent
    .naright
      flex 1
      text-align center
      font-size 0.48rem
      line-height 0.72rem
      color #ffffff
      p:first-of-type
        color #c30101
  .account-money
    display flex
    font-size 0.56rem
    line-height 0.72rem
    align-items center
    height 2rem
    color #ffffff
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
      color $font-active
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
      background $btn-background
  .accountnav
    display flex
    padding 0.56rem 0
    border-bottom 0.32rem solid $font-active
    &>div
      flex 1
      text-align center
      color $font-active
      cursor pointer
    .icon
      font-size 1.2rem
    p
      color #ffffff
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
        <p>{{Number(sum_money+due).toFixed(4)}} EOS</p>
        <p class="rmb">≈￥{{(eos_money*(sum_money+due)).toFixed(2)}}</p>
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
        <p v-if="no==1">总收益第{{no}}名！</p>
        <p v-else-if="no">总收益第{{no}}名，比前一名仅差{{difference}} EOS哟！</p>
        <p v-else>您还没有排名，快去投标吧{{no}}</p>
      </div>
      <router-link class="investmentbtn" to="/investment">立即投资</router-link>
    </div>
    <div class="accountnav">
      <div @click="userInfo.account?$router.push('/accountRecharge/0'):$router.push('/securitysetting/1')">
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
import {SET_AOTO,SET_CONTENT,SET_LOADING} from "@store/mutation-types"
export default {
  activated(){
    // loading
    this.SET_LOADING(true)
    // 获取页面数据
    get('/center').then(json=>{
      this.SET_LOADING(false)
      const {accumulated,difference,no,sum_money,due,porportion,aoto,content,eos_money} = json.data;
      this.accumulated = accumulated;
      this.difference = difference;
      this.no = no;
      this.sum_money = sum_money;
      this.porportion = porportion;
      this.due = due;
      this.eos_money = eos_money
      // 保存余额信息
      this.SET_AOTO(aoto)
      // 保存手续费信息
      this.SET_CONTENT(content)
    })
  },
  data(){
    return{
      // 累计收益
      accumulated:'',
      // 与前一名差距
      difference:'',
      // 名次
      no:'',
      // 账户余额
      sum_money:'',
      // 待收本金
      due:'',
      // 现金与eos装换比列
      porportion:'',
      eos_money:0
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
      SET_CONTENT,
      SET_LOADING
    }),
  }
}
</script>
