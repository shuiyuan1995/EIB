<style lang="stylus" scoped>
  .list
    border-bottom 1px solid #526ca3
    &>p
      display flex
      align-items center
      font-size 0.48rem
      padding 0 1rem
      height 1.4rem
      cursor pointer
      color #ffffff
      span 
        flex 1
    .point
      width 10px
      height 10px
      background-color #8c3eb3
      border-radius 50%
      margin-right 0.48rem
    .item
      background #e8edeb
      font-size 12px
      padding 0.8rem 1rem
      line-height 0.64rem
</style>

<template>
  <div class="helpfinancial">
    <myheader left="prev" center="理财问题"></myheader>
    <ul>
      <li class="list" v-for="(item,index) in thislist" :key="index" @click="thisactive=index">
        <p><i class="point"></i><span>{{item.title}}</span><i class="icon icon-pagenext"></i></p>
        <div class="item" v-show="thisactive==index" v-html="item.content">
        </div>
      </li>
    </ul>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      thisactive:null,
    }
  },
  components:{
    myheader,
    myfooter
  },
  computed:{
    ...mapGetters([
      "helpdata"
    ]),
    thislist(){
      return this.helpdata.list[this.$route.params.page]
    }
  }
}
</script>
