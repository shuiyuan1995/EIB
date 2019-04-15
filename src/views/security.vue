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
        margin-right 0.4rem
      span:nth-of-type(2)
        flex 1
      span:nth-of-type(4)
        color #a6a6a6
</style>

<template>
  <div class="security">
    <myheader left="prev" center="安全信息"></myheader>
    <div class="securitylist">
      <router-link class="item" to="/securitysetting/0">
        <span class="icon icon-idinput"></span>
        <span>用户名修改</span>
        <span>已设置</span>
        <span class="icon icon-pagenext"></span>
      </router-link>
      <router-link class="item" to="/securitysetting/1">
        <span class="icon icon-shimingrenzheng"></span>
        <span>实名认证</span>
        <span>已设置</span>
        <span class="icon icon-pagenext"></span>
      </router-link>
      <router-link class="item" to="/securitysetting/2">
        <span class="icon icon-anquanyanzheng"></span>
        <span>登录密码</span>
        <span>已设置</span>
        <span class="icon icon-pagenext"></span>
      </router-link>
      <router-link class="item" to="/securitysetting/3">
        <span class="icon icon-jiaoyimima"></span>
        <span>交易密码</span>
        <span>已设置</span>
        <span class="icon icon-pagenext"></span>
      </router-link>
      <router-link class="item" to="/securitysetting/4">
        <span class="icon icon-shoujibangding"></span>
        <span>手机绑定</span>
        <span>已绑定</span>
        <span class="icon icon-pagenext"></span>
      </router-link>
      <router-link class="item" to="/securitysetting/5">
        <span class="icon icon-youxiangbangding"></span>
        <span>邮箱绑定</span>
        <span>已绑定</span>
        <span class="icon icon-pagenext"></span>
      </router-link>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
export default {
  components: {
    myheader,
    myfooter
  },
}
</script>
