<style lang="stylus" scoped>
  h2
    font-size 16px
    padding 10px 0.6rem
    font-weight bold
  .money
    font-size 20px
    text-align center
    color #5570a6
    margin-bottom 43px
    margin-top 39px
    span 
      font-size 14px
  .accitem
    display flex
    padding 0 1.68rem 0 2.2rem
    font-size 14px
    margin-bottom 30px
    line-height 18px
    span 
      word-break break-all
    span:first-of-type
      color #8c8b8b
      flex 0 0 80px
</style>

<template>
  <div class="accountitem">
    <myheader left="prev" center="详情"></myheader>
    <h2>详情</h2>
    <p class="money">{{data.symbol?'+':'-'}}{{data.money}} <span>{{data.coin}}</span></p>
    <p class="accitem"><span>类型</span><span>{{data.type}}</span></p>
    <p class="accitem" v-show="data.address"><span>地址</span><span>{{data.address}}</span></p>
    <p class="accitem"><span>状态</span><span>{{data.state}}</span></p>
    <p class="accitem" v-show="data.fee"><span>手续费</span><span>{{data.fee}} {{data.coin}}</span></p>
    <p class="accitem" v-show="data.txid"><span>TxID</span><span>{{data.txid}}</span></p>
    <p class="accitem"><span>时间</span><span>{{data.time}}</span></p>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
export default {
  created(){
    this.data = this.$route.params
  },
  data(){
    return{
      data:''
    }
  },
  components:{
    myheader,
    myfooter
  },
}
</script>
