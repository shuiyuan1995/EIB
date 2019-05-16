<style lang="stylus" scoped>
  .securitylist
    .item
      display flex
      height 1.48rem
      border-bottom 1px solid #a6a6a6
      align-items center
      padding 0 0.64rem 0 0.76rem
      font-size 14px
      span:nth-of-type(1)
        font-size 0.88rem
        color #5570a6
        margin-right 10px
      span:nth-of-type(2)
        flex 1
      span:nth-of-type(4)
        color #a6a6a6
      span.icon-qianbao
        margin-right 0.12rem
    .nick
      max-width 4rem
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>

<template>
  <div class="security">
    <myheader left="prev" center="安全信息"></myheader>
    <div class="securitylist">
      <router-link class="item" to="/securitysetting/0">
        <span class="icon icon-idinput"></span>
        <span>用户名</span>
        <span class="nick">{{userInfo.nick}}</span>
        <span class="icon icon-pagenext"></span>
      </router-link>
      <div class="item" @click="goto(1)">
        <span class="icon icon-qianbao"></span>
        <span>钱包绑定</span>
        <span>{{userInfo.account?userInfo.account:'去绑定'}}</span>
        <span class="icon icon-pagenext"></span>
      </div>
      <router-link class="item" to="/securitysetting/2">
        <span class="icon icon-anquanyanzheng"></span>
        <span>登录密码</span>
        <span>去修改</span>
        <span class="icon icon-pagenext"></span>
      </router-link>
      <router-link class="item" to="/securitysetting/3">
        <span class="icon icon-jiaoyimima"></span>
        <span>交易密码</span>
        <span>{{userInfo.pay_password?'去修改':'去设置'}}</span>
        <span class="icon icon-pagenext"></span>
      </router-link>
      <router-link class="item" to="/securitysetting/4">
        <span class="icon icon-shoujibangding"></span>
        <span>手机绑定</span>
        <span>{{userInfo.phone?userInfo.phone:'去绑定'}}</span>
        <span class="icon icon-pagenext"></span>
      </router-link>
      <router-link class="item" to="/securitysetting/5">
        <span class="icon icon-youxiangbangding"></span>
        <span>邮箱绑定</span>
        <span>{{userInfo.email?userInfo.email:'去绑定'}}</span>
        <span class="icon icon-pagenext"></span>
      </router-link>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {mapGetters} from 'vuex';
export default {
  components: {
    myheader,
    myfooter
  },
  computed:{
    ...mapGetters([
      "userInfo"
    ]),
  },
  methods:{
    goto(id){
      if(this.userInfo.account){
        return false
      }else{
        this.$router.push('/securitysetting/1')
      }
    }
  }
}
</script>
