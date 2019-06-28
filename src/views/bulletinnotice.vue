<style lang="stylus" scoped>
  .item
    width 100%
    padding 0 0.88rem 0 0.76rem
    text-align center
  .itemtop
    font-size 0.48rem
    display inline-block
    background #eeeeee
    padding 0.12rem 0.24rem
    border-radius 0.08rem
  .itemmain
    display flex
    margin-top 0.6rem
    .mainl
      width 1.52rem
      height 1.52rem
      border solid 1px $font-active
      border-radius 50%
      text-align center
      line-height 1.52rem
      .icon
        font-size 1.12rem
        color $font-active
    .mainr
      margin-left 0.88rem
      width 11rem
      min-height 1.2rem
      background-color #eeeeee
      border-radius 0.1rem
      font-size 0.56rem
      text-align left
      padding 0.16rem
</style>

<template>
  <div class="bulletinnotice">
    <myheader left="prev" :center="$route.params.page=='1'?'我的私信':'我的通知'"></myheader>
    <div class="item" v-for="(item,index) in $route.params.page=='1'?userdata.message:userdata.notify" :key="index">
      <div class="itemtop">{{item.time}}</div>
      <div class="itemmain">
        <div class="mainl">
          <i class="icon icon-yonghu"></i>
        </div>
        <div class="mainr">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {mapGetters} from 'vuex';
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
  computed:{
    ...mapGetters([
      "userdata"
    ]),
  },
}
</script>
