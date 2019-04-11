<style lang="stylus">
  #app
    padding-top 1.38rem
  // 头部
  header 
    position fixed
    top 0px
    z-index 9
    width 100%
    height 1.38rem
    background-color #5570a6
    display flex
    justify-content space-between
    align-items center
  .logo
    margin-left 0.44rem
    font-family AdobeHeitiStd-Regular
    font-size 0.88rem
    color #ffffff
  .menu
    color #ffffff
    margin-right 0.16rem
    i
      font-size 1.36rem
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
  // 底部
  footer
    p
      font-family MicrosoftYaHei
      font-size 0.5rem
      text-align center
      color #c4c4c4
      line-height 0.48rem
      margin-bottom 0.56rem
  .footnav
    text-align center
    .link
      color #000000
      font-size 0.5rem
      padding 0 0.48rem
      border-right 0.06rem solid #e5e5e5
      &:last-of-type
        border-right none
  .footerli
    text-align center
    span 
      font-size 0.52rem
      padding 0 0.48rem
      border-right 0.06rem solid #8c8c8c
      &:last-of-type
        border-right none
  // 蒙版
  .mask
    position fixed
    top 0px
    left 0px
    width 100%
    height 100%
    background rgba(0,0,0,0.3)
</style>

<template>
  <div id="app">
    <router-view/>
    <footer>
      <p>友情提示：网贷有风险，投资须谨慎</p>
      <nav class="footnav">
        <router-link class="link" to="/">首页</router-link>
        <router-link class="link" to="/">我要投资</router-link>
        <router-link class="link" to="/">我要融资</router-link>
        <router-link class="link" to="/">关于我们</router-link>
        <router-link class="link" to="/">帮助</router-link>
      </nav>
      <div class="footerli">
        <span>EIB</span>
        <span>渝ICP备14007328号-1</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  // data(){
  //   return{
  //     mask:false,
  //     menulist:false,
  //     navlists: [
  //       {
  //         icon:'icon-dianji',
  //         text:'首页'
  //       },
  //       {
  //         icon:'icon-zhanghuzhongxin',
  //         text:'账户中心'
  //       },
  //       {
  //         icon:'icon-touzi',
  //         text:'我要投资'
  //       },
  //       {
  //         icon:'icon-chongzhi',
  //         text:'我要充值'
  //       },
  //       {
  //         icon:'icon-paixing',
  //         text:'收益排行'
  //       },
  //       {
  //         icon:'icon-hezuo',
  //         text:'招商合作'
  //       },
  //       {
  //         icon:'icon-xiaoxi',
  //         text:'消息'
  //       },
  //       {
  //         icon:'icon-women',
  //         text:'关于我们'
  //       },
  //       {
  //         icon:'icon-anquan',
  //         text:'安全中心'
  //       },
  //       {
  //         icon:'icon-bangzhuzhongxin',
  //         text:'帮助中心'
  //       },
  //     ],
  //   }
  // },
  // methods:{
  //   changemenu(){
  //     this.mask = !this.mask;
  //     this.menulist = !this.menulist;
  //   }
  // }
}
</script>
