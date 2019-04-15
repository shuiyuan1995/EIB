<style lang="stylus" scoped>
  .helpnav
    display flex
    margin-top 1.44rem
    margin-bottom 1.44rem
    &>div
      text-align center
      flex 1
    .icon
      display inline-block
      width 2.2rem
      height 2.2rem
      border solid 1px #526ca3
      text-align center
      line-height 2.2rem
      border-radius 50%
      font-size 1.2rem
      color #5570a6
    p
      font-size 0.6rem
      color #5670a9
      margin-top 0.32rem
  .num
    height 1.84rem
    line-height 1.84rem
    font-size 0.6rem
    padding 0 0.84rem
    border-bottom 1px solid #e8edeb
    .icon 
      margin-right 0.24rem
</style>

<template>
  <div class="help">
    <myheader left="prev" center="帮助"></myheader>
    <nav class="helpnav">
      <div @click="$router.push('/helpfinancial')">
        <i class="icon icon-anquan"></i>
        <p>理财问题</p>
      </div>
      <div>
        <i class="icon icon-anquan"></i>
        <p>操作流程</p>
      </div>
      <div>
        <i class="icon icon-anquan"></i>
        <p>账户问题</p>
      </div>
      <div>
        <i class="icon icon-anquan"></i>
        <p>安全问题</p>
      </div>
    </nav>
    <p class="num"><i class="icon icon-anquan"></i>客服热线：023-56498746</p>
    <p class="num"><i class="icon icon-anquan"></i>官方QQ群：564987460</p>
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
