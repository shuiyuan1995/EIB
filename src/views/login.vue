<style lang="stylus" scoped>
  .login-logo
    height 1.6rem
    text-align center
    margin 0.8rem 0 1.4rem
  .loginform
    text-align center
    label
      display inline-block
      width 12.16rem
      margin-bottom 0.84rem
      position relative
      .icon
        position absolute
        left 0.56rem
        top 0.32rem
        &.eye
          right 0.6rem
          left auto
  .logininput
    width 10.58rem
    height 1.18rem
    border solid 1px #404040
    font-family MicrosoftYaHei
    font-size 0.48rem
    color #303030
    padding-left 1.46rem
  .loginbtn
    width 12rem
    height 1.32rem
    background-color #a1bedb
    border none 
    outline none
    border-radius 0.2rem
    font-family MicrosoftYaHei
    font-size 0.52rem
    color #ffffff
    margin-bottom 0.4rem
  .loginbotton
    width 12.16rem
    margin 0 auto
    text-align right
    .link
      font-family MicrosoftYaHei
      font-size 0.48rem
      color #5570a6
    p
      font-size 0.48rem
      color #b6b6b6
      text-align center
      margin 1.28rem 0
</style>

<template>
  <div class="login">
    <myheader left="prev" center="用户登录" right="注册"></myheader>
    <div class="login-logo">logo</div>
    <form class="loginform">
      <label>
        <i class="icon icon-zhanghuzhongxin"></i>
        <input class="logininput" type="text" placeholder="用户名/手机号码/邮箱号码">
      </label>
      <label>
        <i class="icon icon-mima"></i>
        <input class="logininput" type="password" placeholder="请输入密码">
        <i class="eye icon icon-yincangmima"></i>
      </label>
      <slider></slider>
      <button class="loginbtn">确认登录</button>
    </form>
    <div class="loginbotton">
      <router-link class="link" to="/">忘记密码？</router-link>
      <p>还没账户吗？<router-link class="link" to="/register">立即注册</router-link></p>
    </div>
  </div>
</template>

<script>
import slider from '@components/slider.vue'
import myheader from '@components/myheader.vue'
export default {
  components:{
    slider,
    myheader
  }
}
</script>
