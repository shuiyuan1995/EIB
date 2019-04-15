<style lang="stylus" scoped>
  .settingform
    text-align center
    margin-top 0.8rem
    label
      display inline-block
      width 12.16rem
      margin-bottom 0.84rem
      position relative
      .icon
        position absolute
        left 0.56rem
        top 0.32rem
      .clickinput
        padding-left 0.4rem
      .clickgo
        position absolute
        font-size 0.48rem
        right 0rem
        top 0.32rem
        color #a1bedb
        border-left 0.04rem solid #a1bedb
        line-height 0.64rem
        padding 0 0.24rem
  .settinginput
    width 12.16rem
    height 1.18rem
    border solid 1px #404040
    font-family MicrosoftYaHei
    font-size 0.48rem
    color #303030
    padding-left 1.46rem
  .settingbtn
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
</style>

<template>
  <div class="securitysetting">
    <myheader left="prev" :center="title"></myheader>
    <div class="settingform">
      <div v-if="$route.params.type==0">
        <label>
          <i class="icon icon-idinput"></i>
          <input class="settinginput" type="test" placeholder="请输入新用户名">
        </label>
      </div>
      <div v-if="$route.params.type==1">
        <label>
          <i class="icon icon-xingming"></i>
          <input class="settinginput" type="test" placeholder="姓名">
        </label>
        <label>
          <i class="icon icon-shenfenzheng"></i>
          <input class="settinginput" type="test" placeholder="身份证号码">
        </label>
      </div>
      <div v-if="$route.params.type==2">
        <label>
          <i class="icon icon-mima"></i>
          <input class="settinginput" type="test" placeholder="输入当前登录密码">
        </label>
        <label>
          <i class="icon icon-mima"></i>
          <input class="settinginput" type="test" placeholder="新密码（6-16位字母，数字，字符）">
        </label>
        <label>
          <i class="icon icon-mima"></i>
          <input class="settinginput" type="test" placeholder="再次输入新密码">
        </label>
      </div>
      <div v-if="$route.params.type==3">
        <label>
          <i class="icon icon-mima"></i>
          <input class="settinginput" type="test" placeholder="输入当前交易密码">
        </label>
        <label>
          <i class="icon icon-mima"></i>
          <input class="settinginput" type="test" placeholder="新密码（6-16位字母，数字，字符）">
        </label>
        <label>
          <i class="icon icon-mima"></i>
          <input class="settinginput" type="test" placeholder="再次输入新交易密码">
        </label>
      </div>
      <div v-if="$route.params.type==4">
        <label>
          <i class="icon icon-shoujibangding"></i>
          <input class="settinginput" type="test" placeholder="请输入手机号">
        </label>
        <label>
          <input class="settinginput clickinput" type="test" placeholder="请输入验证码">
          <span class="clickgo">点击获取验证码</span>
        </label>
      </div>
      <div v-if="$route.params.type==5">
        <label>
          <i class="icon icon-youxiangbangding"></i>
          <input class="settinginput" type="test" placeholder="请输入邮箱">
        </label>
        <label>
          <input class="settinginput clickinput" type="test" placeholder="请输入验证码">
          <span class="clickgo">点击获取验证码</span>
        </label>
      </div>
      <button class="settingbtn" @click="next">确认</button>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
export default {
  mounted(){
  },
  components: {
    myheader,
    myfooter
  },
  computed:{
    title(){
      let title = '';
      switch (this.$route.params.type) {
        case '0':
          title = '用户名修改'
          break;
        case '1':
          title = '实名认证'
          break;
        case '2':
          title = '修改登录密码'
          break;
        case '3':
          title = '修改交易密码'
          break;
        case '4':
          title = '手机验证'
          break;
        case '5':
          title = '邮箱验证'
          break;
        default:
          break;
      }
      return title
    }
  },
  methods:{
    next(){
      this.$createDialog({
        type: 'alert',
        title: '温馨提示',
        content: '设置更改后，24小时内无法提币',
        icon: 'cubeic-alert'
      }).show()
    }
  }
}
</script>
