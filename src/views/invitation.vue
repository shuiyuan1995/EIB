<style lang="stylus" scoped>
  .advertising
    width 100%
    img 
      width 100%
  .invitationlist
    li
      display flex
      line-height 1.8rem
      border-bottom 1px solid #a6a6a6
      align-items center
      padding 0 0.6rem
      font-size 0.64rem
      cursor pointer
      color #ffffff
      span:first-of-type
        width 1.24rem
        height 1.24rem
        border-radius 50%
        border solid 1px $font-active
        margin-right 0.24rem
        text-align center
        line-height 1.24rem
        color $font-active
        font-size 0.8rem
      span:nth-of-type(2)
        flex 1
</style>

<template>
  <div class="invitation">
    <myheader left="prev" center="邀请好友"></myheader>
    <div class="advertising">
      <img :src="img_url" alt="">
    </div>
    <ul class="invitationlist">
      <li @click="$router.push('/invitationpromote')">
        <span class="icon icon-tuiguangyaoqing"></span>
        <span>推广邀请</span>
        <span class="icon icon-pagenext"></span>
      </li>
      <li @click="$router.push('/invitationreward')">
        <span class="icon icon-jichutubiao_jiangli"></span>
        <span>好友投资奖励</span>
        <span class="icon icon-pagenext"></span>
      </li>
      <li @click="$router.push('/agent')">
        <span class="icon icon-dailiren"></span>
        <span>超级代理人申请</span>
        <span class="icon icon-pagenext"></span>
      </li>
    </ul>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {get} from '@api/index'
import {mapMutations} from 'vuex';
import {SET_IMG,SET_URL,SET_LOADING} from "@store/mutation-types"
export default {
  created(){
    this.SET_LOADING(true)
    this.getdata()
  },
  data(){
    return{
      img_url:'',
    }
  },
  components:{
    myheader,
    myfooter
  },
  methods:{
    getdata(){
      get('/inviation').then(json=>{
        this.SET_LOADING(false)
        const {img_url,url,img} = json.data
        this.img_url = img_url
        this.SET_IMG(img)
        this.SET_URL(url)
      })
    },
    ...mapMutations({
      SET_IMG,
      SET_URL,
      SET_LOADING
    }),
  }
}
</script>
