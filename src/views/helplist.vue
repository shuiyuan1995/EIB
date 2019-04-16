<style lang="stylus" scoped>
  .list
    border-bottom 1px solid #e8edeb
    &>p
      display flex
      align-items center
      font-size 0.6rem
      padding 0 1rem
      height 1.4rem
      span 
        flex 1
      .icon
        color #b5b5b5
</style>

<template>
  <div class="helplist">
    <myheader left="prev" center="账户问题"></myheader>
    <ul>
      <li class="list" v-for="(item,index) in thislist" :key="index" @click="$router.push(`/helpfinancial${item.url}`)">
        <p><span>{{item.txt}}</span><i class="icon icon-pagenext"></i></p>
      </li>
    </ul>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
export default {
  data(){
    return{
      data:{
        a:[
          {
            txt:'登录注册',
            url:'/b'
          },
          {
            txt:'账户密码',
            url:'/c'
          },
          {
            txt:'充值',
            url:'/d'
          },
          {
            txt:'提现',
            url:'/e'
          },
          {
            txt:'安全认证',
            url:'/f'
          },
          {
            txt:'消息中心',
            url:'/g'
          },
          {
            txt:'邀请奖励',
            url:'/h'
          }
        ],
        b:[
          {
            txt:'法律与政策保障',
            url:'/i'
          },
          {
            txt:'投资审核与风控',
            url:'/j'
          },
          {
            txt:'账户及隐私安全',
            url:'/k'
          },
          {
            txt:'用户的自我保护',
            url:'/l'
          },
          {
            txt:'网站相关协议',
            url:'/m'
          },
        ]
      }
    }
  },
  components:{
    myheader,
    myfooter
  },
  computed:{
    thislist(){
      return this.data[this.$route.params.page]
    }
  }
}
</script>
