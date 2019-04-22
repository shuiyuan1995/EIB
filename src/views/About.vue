 <style lang="stylus" scoped>
    h2
      font-size 16px
      margin 6px 0 10px
      padding 0 32px
    .img
      width 155px
      height 155px
      background-color #e8edeb
      margin 10px auto 20px
    p
      font-size 14px
      padding 0 32px
      line-height 22px
      a
        color #5570a6
</style>
<style>
  /* h2{
    font-size: 16px;
    margin: 6px 0 10px;
    padding: 0 32px;
  } */
</style>


<template>
  <div class="about">
    <myheader left="prev" center="关于我们"></myheader>
    <!-- <h2>一. 微信客服</h2>
    <div class="img"></div>
    <h2>二. 微信公众号</h2>
    <p>微信搜索公众号xxxxx或者扫二维码：</p>
    <div class="img"></div>
    <h2>三.QQ社群</h2>
    <p>问题反馈QQ群：5484545455</p>
    <div class="img"></div>
    <h2>四.邮箱</h2>
    <p>DApp审核，项目及商务合作：</p>
    <p><a href="bd@hwhwbbj.vip">bd@hwhwbbj.vip</a></p>
    <p>代币上线及其他咨询：</p>
    <p><a href="bd@hwhwbbj.vip">bd@hwhwbbj.vip</a></p>
    <h2>五.Github</h2>
    <p><a href="https://eryyegr.com/euetuyiuh/tkyupituyi">https://eryyegr.com/euetuyiuh/tkyupituyi</a></p>
    <p><a href="https://yrowttt.com/jdhhhg">https://yrowttt.com/jdhhhg</a></p>
    <h2>六.其他</h2>
    <p>微博：<a href="https://eryyegr.com/euetuyiuh/tkyupituyi">https://eryyegr.com/euetuyiuh/tkyupituyi</a></p>
    <p>Telegram: <a href="https://yrowttt.com/jdhhhg">https://yrowttt.com/jdhhhg</a></p> -->
    <div class="main" v-html="data"></div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import {get} from '@api/index'
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
export default {
  created(){
    get('/api/about').then(val=>{
      console.log(val)
      this.data = val.data
    })
  },
  data(){
    return{
      data:''
    }
  },
  components:{
    myheader,
    myfooter
  },
}
</script>
