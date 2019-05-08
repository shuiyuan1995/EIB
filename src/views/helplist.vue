<style lang="stylus" scoped>
  .list
    border-bottom 1px solid #e8edeb
    &>p
      cursor pointer
      display flex
      align-items center
      font-size 0.6rem
      padding 0 1rem
      height 1.4rem
      span 
        flex 1
      .icon
        color #b5b5b5
</style>

<template>
  <div class="helplist">
    <myheader left="prev" center="账户问题"></myheader>
    <ul>
      <li class="list" v-for="(item,index) in thislist" :key="index" @click="$router.push(`/helpfinancial/${item.id}`)">
        <p><span>{{item.title}}</span><i class="icon icon-pagenext"></i></p>
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
      return this.helpdata[this.$route.params.page]
    }
  }
}
</script>
