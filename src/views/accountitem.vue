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
    <myheader left="prev" center="充币详情"></myheader>
    <h2>详情</h2>
    <p class="money">+58.00000000 <span>EOS</span></p>
    <p class="accitem"><span>类型</span><span>普通充币</span></p>
    <p class="accitem"><span>地址</span><span>vincentzhang</span></p>
    <p class="accitem"><span>状态</span><span>已完成</span></p>
    <p class="accitem"><span>手续费</span><span>0.10000000 EOS</span></p>
    <p class="accitem"><span>TxID</span><span>6vghdghvnm6ghdfg4hgjdytylkl4454kgjkghkhj65545544dghjd</span></p>
    <p class="accitem"><span>时间</span><span>14:35:02  12/19/2018</span></p>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
export default {
  components:{
    myheader,
    myfooter
  },
}
</script>
