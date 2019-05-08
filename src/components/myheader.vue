<style lang="stylus" scoped>
  // 头部
  header 
    position fixed
    top 0px
    z-index 9
    width 100%
    max-width 400px
    height 1.38rem
    background-color #5570a6
    display flex
    justify-content space-between
    align-items center
    font-family MicrosoftYaHei
    font-size 15px
    color #ffffff
  .logo
    margin-left 0.44rem
    font-family AdobeHeitiStd-Regular
    font-size 0.88rem
    color #ffffff
  .link
    color #ffffff
    display inline-block
    &.right
      margin-right 0.64rem
      width 3.28rem
      text-align right 
    &.icon
      width 3.28rem
      margin-left 0.52rem
  .menu
    color #ffffff
    margin-right 0.16rem
    width 3.28rem
    text-align right 
    i
      font-size 1.36rem
      z-index 10
      position relative
  // 头部列表
  .menulist
    position absolute
    width 4.36rem
    background-color #546fa5
    z-index 1
    right 0
    top 1.38rem
  .menulist-nav
    display flex
    align-items center
    height 1.2rem
    border-bottom 1px solid #a1bedb
    .icon
      color #ffffff
      font-size 0.64rem
      margin-left 0.4rem
    span 
      font-family: MicrosoftYaHei;
      font-size: 0.56rem;
      color #ffffff
      margin-left 0.4rem
</style>

<template>
  <header>
    <i v-if="left" class="link icon icon-pagepreview" @click="$router.back(-1)"></i>
    <span v-else class="logo">EIB</span>
    <span class="text" v-show="center">{{center}}</span>
    <router-link v-if="right" class="link right" :to="right=='注册'?'/register':'/login'">{{right}}</router-link>
    <span v-else class="menu" @click="changemenu"><i class="icon icon-menu1"></i></span>
    <div class="menulist" v-show="menulist">
      <router-link class="menulist-nav" :to="item.to" v-for="(item, index) in navlists" :key="index">
        <i class="icon" :class="item.icon"></i>
        <span>{{item.text}}</span>
      </router-link>
      <div class="menulist-nav" @click="thereload">
        <i class="icon icon-refresh"></i>
        <span>刷新页面</span>
      </div>
      <div class="menulist-nav" @click="clearlogin">
        <i class="icon icon-tuichu1"></i>
        <span>退出登录</span>
      </div>
    </div>
    <div class="mask" v-show="menulist" @click="changemenu"></div>
  </header>
</template>

<script>
import {clearCookie} from "@common/js";
export default {
  mounted(){
    // console.log(this.reload())
  },
  inject:['reload'],
  props:{
    left:{
      type:String,
      default:''
    },
    center:{
      type:String,
      default:''
    },
    right:{
      type:String,
      default:''
    }
  },
  data(){
    return{
      // 列表控制
      menulist:false,
      // 路由列表
      navlists: [
        {
          to:'/',
          icon:'icon-dianji',
          text:'首页',
        },
        {
          to:'/account',
          icon:'icon-zhanghuzhongxin',
          text:'账户中心'
        },
        {
          to:'/investment',
          icon:'icon-touzi',
          text:'我要投资'
        },
        {
          to:'/accountRecharge',
          icon:'icon-chongzhi',
          text:'我要充值'
        },
        {
          to:'/ranking',
          icon:'icon-paixing',
          text:'收益排行'
        },
        {
          to:'/cooperation',
          icon:'icon-hezuo',
          text:'招商合作'
        },
        {
          to:'/bulletin',
          icon:'icon-xiaoxi',
          text:'消息'
        },
        {
          to:'/about',
          icon:'icon-women',
          text:'关于我们'
        },
        {
          to:'/security',
          icon:'icon-anquan',
          text:'安全中心'
        },
        {
          to:'/help',
          icon:'icon-bangzhuzhongxin',
          text:'帮助中心'
        },
      ],
    }
  },
  methods:{
    // 菜单控制
    changemenu(){
      this.menulist = !this.menulist;
    },
    // 刷新当前页面
    thereload(){
      this.reload()
    },
    // 退出登录
    clearlogin(){
      clearCookie();
      this.$router.push('/')
      this.reload()
    }
  }
}
</script>
