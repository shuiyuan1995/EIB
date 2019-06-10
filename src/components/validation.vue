<style lang="stylus" scoped>
  .validation
    position fixed
    width 100%
    max-width 400px
    margin 0 auto
    height 100%
    top 0px
  .bg
    position fixed
    width 100%
    max-width 400px
    height 100%
    top 0px
    background rgba(0,0,0,0.1)
  .main
    position absolute
    width 100%
    padding 0 15px
    padding-bottom 25px
    bottom 0px
    background #ffffff
    &>p
      color #747474
      font-size 12px
      line-height 33px
      border-bottom 1px solid #e8edeb
    .title
      display flex
      justify-content space-between
      font-size 16px
      line-height 37px
      border-bottom 1px solid #e8edeb
      h2
        font-weight bold
    form
      label
        display block
        border-bottom 1px solid #e8edeb
        padding 10px 0
      p
        font-size 14px
        margin-top 10px
      .validationitem
        display flex
        margin-top 10px
        .cubeinput
          flex 1
        .btn
          flex 0 0 75px
          padding-top 10px
          padding-bottom 10px
      .btnok
        margin-top 15px
        background #e8edeb
        color #000000
  .showup-enter-active,
  .showup-leave-active
    transition all 0.5s
  .showup-enter,
  .showup-leave-to
    opacity 0
    transform translateY(100%)
  .showop-enter-active,
  .showop-leave-active
    transition all 0.5s
  .showop-enter,
  .showop-leave-to
    opacity 0
</style>

<template>
  <transition name="showop">
    <div class="validation">
      <transition name="showop">
      <div v-show="thevalidation" class="bg" @click="close"></div>
      </transition>
      <transition name="showup">
      <div v-show="thevalidation" class="main">
        <p>若为收到邮件，请检查邮箱垃圾箱</p>
        <div class="title">
          <h2>安全验证</h2>
          <p @click="close">取消</p>
        </div>
        <form action="">
          <label v-show="thisphone" for="">
            <p>短信验证:{{userInfo.phone}}</p>
            <div class="validationitem">
              <cube-input class="cubeinput" v-model="phone" placeholder="请输入验证码"></cube-input>
              <cube-button class="btn" @click="send('phone_code')">{{codetxt[0]}}</cube-button>
            </div>
          </label>
          <label for="">
            <p>邮箱验证:{{userInfo.email}}</p>
            <div class="validationitem">
              <cube-input class="cubeinput" v-model="email" placeholder="请输入验证码"></cube-input>
              <cube-button class="btn" @click="send('email_code')">{{codetxt[1]}}</cube-button>
            </div>
          </label>
          <cube-button class="btnok" @click="validation">确  认</cube-button>
        </form>
      </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex';
import {post} from '@api/index';
let inter = [null,null];
export default {
  props:{
    thisphone:{
      type:Boolean,
      default:true
    },
    thevalidation:{
      type:Boolean
    }
  },
  data(){
    return{
      phone:'',
      email:'',
      // 倒计时
      time:[60,60],
      codetxt:['点击获取验证码','点击获取验证码']
    }
  },
  computed:{
    ...mapGetters([
      "userInfo"
    ]),
  },
  methods:{
    close(){
      this.$emit('close',false)
    },
    send(url){
      
      let i = url=='phone_code'?0:1;
      // 判断点击间隙
      if(this.time[i] !== 60){
        return false
      }
      this.time[i]--;
      inter[i] = null
      post(`/${url}`).then(()=>{
        // 倒计时
        inter[i] = setInterval(()=>{
          this.$set(this.codetxt,i,`${this.time[i]}秒后可重新发送`)
          this.time[i]--;
          if(this.time[i]<=0){
            this.$set(this.codetxt,i,`点击获取验证码`)
            clearInterval(inter[i])
            this.time[i] = 60
          }
        },1000)
      })
    },
    validation(){
      if(this.phone==''&&this.thisphone||this.email==''){
        this.$createToast({
          type: 'correct',
          txt: '验证码不能为空',
          time: 500
        }).show()
        return false
      }
      this.$emit('send',{phone_code:this.phone,email_code:this.email})
      this.phone = '';
      this.email = '';
    }
    // 发送邮箱验证
  }
}
</script>
