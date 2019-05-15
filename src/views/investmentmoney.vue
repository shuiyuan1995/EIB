<style lang="stylus" scoped>
  .imoney-top
    height 6.32rem
    background-color #a1bedb
    padding 1.16rem 0.96rem
    p:first-of-type
      font-size 0.64rem
      color #ffffff
      i 
        margin-right 0.28rem
    p:last-of-type
      font-size 1.2rem
      color #ffffff
      margin-top 1rem
  .imoney-center
    padding 0.32rem 0.72rem
    h3
      color #010101
      font-size 0.56rem
  .imoney-bottom
    .imoney-input
      width 13rem
      padding 0rem
      font-size 0.48rem
      margin 0.48rem auto 0
    .inputappend
      margin-right 0.4rem
    &>p
      text-align right
      font-size 0.48rem
      width 13rem
      margin 0 auto
      margin-top 0.4rem
  .investmentinfo-btn
    display block
    width 13rem
    margin 0 auto
    background-color #9bb6d3
    text-align center
    font-size 15px
    color #ffffff
    margin-top 0.8rem
</style>

<template>
  <div class="investmentmoney">
    <myheader left="prev" center="投资金额"></myheader>
    <div class="imoney-top">
      <p><i class="icon icon-chuzhijine"></i>还需融资</p>
      <p>{{thisbiao.item.surplus}} 币种（{{thisbiao.item.need_coin}})</p>
    </div>
    <div class="imoney-center">
      <h3>{{userInfo.nick}}</h3>
      <accounttable ref="accounttable"></accounttable>
    </div>
    <div class="imoney-bottom">
      <cube-input v-model="money" type="number" class="imoney-input" :placeholder="`${thisbiao.info.min_eos}${thisbiao.item.need_coin}起投，最大为${thisbiao.info.max_eos}${thisbiao.item.need_coin}，金额为1的倍数`">
        <template slot="append">
          <p class="inputappend">{{thisbiao.item.need_coin}}</p>
        </template>
      </cube-input>
      <p>预计利息收益：{{Math.floor(thisbiao.info.proportion*Math.floor(money)*100)/100}} {{thisbiao.info.coin}}</p>
      <!-- <router-link class="investmentinfo-btn" to="/investmentgo">下一步</router-link>s -->
      <cube-button class="investmentinfo-btn" @click="gonext">下一步</cube-button>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import accounttable from '@components/accounttable.vue'
import {mapGetters} from 'vuex';
export default {
  activated(){
    this.money = ''
  },
  data() {
    return {
      checked:false,
      money:''
    }
  },
  components:{
    myheader,
    myfooter,
    accounttable
  },
  computed:{
    ...mapGetters([
      "userInfo",
      "thisbiao"
    ]),
  },
  methods:{
    gonext(){
      let that = this
      // 判断输入金额
      if(this.money==''){
        this.$createToast({
          txt: `金额不能为空`,
          type: 'txt',
          time: 500,
        }).show()
        return false
      }
      // 判断最大最小金额
      if(Math.floor(this.money)<this.thisbiao.info.min_eos){
        this.$createToast({
          txt: `数额最小为${this.thisbiao.info.min_eos}${this.thisbiao.item.need_coin}`,
          type: 'txt',
          time: 500,
        }).show()
        return false
      }
      if(Math.floor(this.money)>this.thisbiao.info.max_eos){
        this.$createToast({
          txt: `数额最大为${this.thisbiao.info.max_eos}${this.thisbiao.item.need_coin}`,
          type: 'txt',
          time: 500,
        }).show()
        return false
      }
      // 判断余额
      let yue = this.$refs.accounttable.money[this.thisbiao.item.need_coin]
      if(!yue || yue.money<this.money){
        this.$createToast({
          txt: `余额不足，请充值`,
          type: 'txt',
          time: 500,
          onTimeout(){
            that.$router.push('/accountRecharge')
          }
        }).show()
        return false
      }
      this.$router.push({
        name: 'investmentgo',
        params: {
          mone:this.money
        }
      })
    }
  }
}
</script>
