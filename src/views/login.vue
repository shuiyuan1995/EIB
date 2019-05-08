<style lang="stylus" scoped>
  .login-logo
    height 1.6rem
    text-align center
    margin 0.8rem 0 1.4rem
    cursor pointer
    img 
      height 100%
      margin 0 auto
  .loginform
    text-align center
    label
      display inline-block
      width 12.16rem
      margin-bottom 0.84rem
      position relative
      .icon
        margin-left 8px
  .logininput
    width 12.16rem
    height 1.18rem
    border solid 1px #404040
    font-family MicrosoftYaHei
    font-size 0.48rem
    color #303030
    padding-left 1.46rem
  .loginbtn
    width 12rem
    background-color #a1bedb
    border none 
    outline none
    border-radius 0.2rem
    font-family MicrosoftYaHei
    font-size 0.52rem
    color #ffffff
    margin 0 auto 0.4rem
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
  .validator
    position absolute
    font-size 12px
    left 41px
    bottom -18px
</style>

<template>
  <div class="login">
    <myheader left="prev" center="用户登录" right="注册"></myheader>
    <div class="login-logo" @click="$router.push('/')">
      <img src="../assets/logo.png" alt="">
    </div>
    <form class="loginform">
      <label>
        <cube-input v-model="num" placeholder="手机号码/邮箱号码">
          <template slot="prepend">
            <i class="icon icon-zhanghuzhongxin"></i>
          </template>
        </cube-input>
        <cube-validator ref="validator0" class="validator" v-model="valid[0]" :model="num" :rules="rules0" :messages="messages0"></cube-validator>
      </label>
      <label>
        <cube-input type="password" autocomplete="off" :eye="{open: false,reverse: false}" v-model="passworld" placeholder="请输入密码">
          <template slot="prepend">
            <i class="icon icon-mima"></i>
          </template>
        </cube-input>
        <cube-validator ref="validator1" class="validator" v-model="valid[1]" :model="passworld" :rules="rules0" :messages="messages1"></cube-validator>
      </label>
      <slider ref="slider"></slider>
      <cube-button class="loginbtn" @click="submit">确认登录</cube-button>
    </form>
    <div class="loginbotton">
      <router-link class="link" to="/securitysetting/2">忘记密码？</router-link>
      <p>还没账户吗？<router-link class="link" to="/register">立即注册</router-link></p>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import slider from '@components/slider.vue'
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {login} from "@common/js";
import {mapMutations} from 'vuex';
import {SET_USER_INFO} from "@store/mutation-types"
export default {
  data(){
    return{
      // 表单
      num:'',
      passworld:'',
      // 验证
      valid:['undefined','undefined'],
      rules0:{
        required: true,
      },
      messages0:{
        required:'账号不能为空',
      },
      messages1:{
        required:'密码不能为空'
      },
    }
  },
  components:{
    slider,
    myheader,
    myfooter
  },
  methods:{
    // 登录
    submit(){
      // 判断滑动
      if(!this.$refs.slider.$data.isSuccess) {
        this.$createToast({
          txt: '请先滑动验证',
          type: 'txt'
        }).show()
        return false
      }
      // 验证
      const p1 = this.$refs.validator0.validate()
      const p2 = this.$refs.validator1.validate()
      const data = {
        name:this.num,
        password:this.passworld
      }
      Promise.all([p1, p2]).then(() => {
        // 清空滑块
        this.$refs.slider.resetslider()
        // 判断验证
        if (this.valid.every(item => item)) {
          login(data)
        }
      })
    },
    ...mapMutations({
      SET_USER_INFO
    }),
  }
}
</script>
