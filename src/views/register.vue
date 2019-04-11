<style lang="stylus" scoped>
  .registernav
    display flex
    height 1.2rem
    color #7eaad0
    font-family MicrosoftYaHei
    font-size 0.8rem
    align-items center
    border-bottom 2px solid #dee3e1
    justify-content center
    margin-top 0.64rem
    div
      flex 1
      text-align center
      line-height 1.2rem
      &.active
        color #5570a6
        border-bottom 2px solid #546fa5
  .registerform
    text-align center
    margin-top 1.72rem
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
    outline none
    width 10.58rem
    height 1.18rem
    border solid 1px #404040
    font-family MicrosoftYaHei
    font-size 0.48rem
    color #303030
    padding-left 1.46rem
    &.verification
      box-sizing border-box
      width 12.16rem
      height 1.32rem
      padding-right 4.88rem
  .thislider
    margin-bottom 0.84rem
  .verificationbtn
    font-family MicrosoftYaHei
    font-size 0.48rem
    color #5570a6
    position absolute
    right 0px
    top 0.28rem
    line-height 0.72rem
    border-left 1px solid #5570a6
    padding 0 0.64rem
  .registerbtn
    width 12rem
    height 1.32rem
    background-color #a1bedb
    border none 
    outline none
    border-radius 0.2rem
    font-family MicrosoftYaHei
    font-size 0.52rem
    color #ffffff
    margin 1.2rem 0
</style>

<template>
  <div class="registered">
    <myheader left="prev" center="用户注册" right="登录"></myheader>
    <nav class="registernav">
      <div @click="changeregister(true)" :class="registeractive?'active':''">手机注册</div>
      <div @click="changeregister(false)" :class="registeractive?'':'active'">邮箱注册</div>
    </nav>
    <form class="registerform">
      <label>
        <i class="icon" :class="registeractive?'icon-zhanghuzhongxin':'icon-rs-mail'"></i>
        <input class="logininput" type="text" :placeholder="registeractive?'请输入手机号码':'请输入邮箱'">
      </label>
      <label>
        <i class="icon icon-mima"></i>
        <input class="logininput" type="password" placeholder="请输入密码">
      </label>
      <label>
        <i class="icon icon-mima"></i>
        <input class="logininput" type="password" placeholder="请再次输入密码">
      </label>
      <label>
        <i class="icon icon-weibiaoti-"></i>
        <input class="logininput" type="text" placeholder="邀请人(可选)">
      </label>
      <slider class="thislider"></slider>
      <label>
        <i class="icon icon-yuechimima"></i>
        <input class="logininput verification" type="text" placeholder="请输入验证码">
        <span class="verificationbtn">点击获取验证码</span>
      </label>
      <button class="registerbtn">确认注册</button>
    </form>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import slider from '@components/slider.vue'
export default {
  data(){
    return{
      registeractive:true
    }
  },
  components:{
    myheader,
    slider
  },
  methods:{
    changeregister(isnav){
      this.registeractive = isnav
    }
  }
}
</script>
