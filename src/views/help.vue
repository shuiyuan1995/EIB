<style lang="stylus" scoped>
  .helpnav
    display flex
    margin-top 1.44rem
    margin-bottom 1.44rem
    &>div
      cursor pointer
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
      font-size 1.32rem
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
    <myheader left="prev" center="帮助中心"></myheader>
    <nav class="helpnav">
      <div @click="$router.push('/helpfinancial/financial')">
        <i class="icon icon-yonghu1"></i>
        <p>理财问题</p>
      </div>
      <div @click="$router.push('/helpoperation')">
        <i class="icon icon-liucheng"></i>
        <p>操作流程</p>
      </div>
      <div @click="$router.push('/helplist/account')">
        <i class="icon icon-gupiao"></i>
        <p>账户问题</p>
      </div>
      <div @click="$router.push('/helplist/security')">
        <i class="icon icon-anquan"></i>
        <p>安全问题</p>
      </div>
    </nav>
    <p class="num"><i class="icon icon-icon-yxj-phone-right"></i>客服热线：{{phone}}</p>
    <p class="num"><i class="icon icon-QQ"></i>官方QQ群：{{qq}}</p>
    <myfooter></myfooter>
  </div>
</template>

<script>
import {get} from '@api/index'
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {mapMutations} from 'vuex';
import {SET_HELPDATA,SET_LOADING} from "@store/mutation-types"
export default {
  created(){
    this.SET_LOADING(true)
    get('/help').then(json=>{
      this.SET_LOADING(false)
      let {phone,qq} = json.data.information
      this.phone = phone
      this.qq = qq
      this.SET_HELPDATA(json.data)
    })
  },
  data(){
    return{
      phone:'',
      qq:'',
    }
  },
  components:{
    myheader,
    myfooter
  },
  methods:{
    ...mapMutations({
      SET_HELPDATA,
      SET_LOADING
    }),
  }
}
</script>
