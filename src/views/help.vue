<style lang="stylus" scoped>
  .helpnav
    display flex
    flex-wrap wrap
    margin-top 0.92rem
    &>div
      cursor pointer
      text-align center
      flex 0 0 33%
      margin-bottom 0.64rem
    .icon
      display inline-block
      width 2.88rem
      height 2.88rem
      border solid 1px #526ca3
      text-align center
      line-height 2.88rem
      border-radius 50%
      font-size 1.68rem
      color #5570a6
    p
      font-size 0.6rem
      color #ffffff
      margin-top 0.32rem
  .num
    height 1.84rem
    line-height 1.84rem
    font-size 0.6rem
    padding 0 0.84rem
    color #ffffff
    border-bottom 1px solid #526ca3
    .icon 
      margin-right 0.24rem
</style>

<template>
  <div class="help">
    <myheader left="prev" center="帮助中心"></myheader>
    <nav class="helpnav">
      <div @click="next({name:'reg',title:'注册投资'})">
        <i class="icon icon-zhuce"></i>
        <p>注册投资</p>
      </div>
      <div @click="next({name:'charge',title:'如何充提'})">
        <i class="icon icon-chongtijilu"></i>
        <p>如何充提</p>
      </div>
      <div @click="next({name:'user',title:'用户协议'})">
        <i class="icon icon-Ankerwebicon-1"></i>
        <p>用户协议</p>
      </div>
      <div @click="next({name:'law',title:'法律声明'})">
        <i class="icon icon-icon-"></i>
        <p>法律声明</p>
      </div>
      <div @click="next({name:'privacy',title:'隐私条款'})">
        <i class="icon icon-yinsitiaokuan"></i>
        <p>隐私条款</p>
      </div>
      <div @click="next({name:'security',title:'安全问题'})">
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
      this.data = json.data
      this.SET_HELPDATA(json.data)
    })
  },
  data(){
    return{
      phone:'',
      qq:'',
      data:''
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
    next(obj){
      if(this.data[obj.name].length>1){
        this.$router.push({
          name: 'helpfinancial',
          params: {
            id: obj.name,
          },
          query: {
            title:obj.title
          }
        })
      }else{
        this.$router.push({
          name: 'helpoperation',
          params: {
            title: obj.title,
            data:this.data[obj.name][0]
          }
        })
      }
    }
  }
}
</script>
