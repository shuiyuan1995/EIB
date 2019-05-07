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
    margin-top 1rem
    label
      display inline-block
      width 12.16rem
      margin-bottom 0.84rem
      position relative
      .icon
        margin-left 0.56rem
  .logininput
    outline none
    width 12.16rem
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
    line-height 0.72rem
    border-left 1px solid #5570a6
    padding 0 0.64rem
  .registerbtn
    width 12rem
    background-color #a1bedb
    font-family MicrosoftYaHei
    font-size 0.52rem
    color #ffffff
    margin 0.88rem auto
    border-radius 0.2rem
  .validator
    position absolute
    font-size 12px
    left 41px
    bottom -18px
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
        <cube-input v-model="num" :placeholder="registeractive?'请输入手机号码':'请输入邮箱'">
          <template slot="prepend">
            <i class="icon" :class="registeractive?'icon-zhanghuzhongxin':'icon-rs-mail'"></i>
          </template>
        </cube-input>
        <cube-validator ref="validator0" class="validator" v-model="valid[0]" :model="num" :rules="registeractive?rules1:rules0" :messages="registeractive?messages1:messages0"></cube-validator>
      </label>
      <label>
        <cube-input type="password" :eye="{open: false,reverse: false}" v-model="passworld" placeholder="请输入密码">
          <template slot="prepend">
            <i class="icon icon-mima"></i>
          </template>
        </cube-input>
        <cube-validator ref="validator1" class="validator" v-model="valid[1]" :model="passworld" :rules="rules1" :messages="messages2"></cube-validator>
      </label>
      <label>
        <cube-input type="password" v-model="repassworld" placeholder="请再次输入密码">
          <template slot="prepend">
            <i class="icon icon-mima"></i>
          </template>
        </cube-input>
        <cube-validator ref="validator2" class="validator" v-model="valid[2]" :model="repassworld" :rules="rules3" :messages="messages3"></cube-validator>
      </label>
      <label>
        <cube-input v-model="yaoqing" placeholder="邀请人(可选)">
          <template slot="prepend">
            <i class="icon icon-weibiaoti-"></i>
          </template>
        </cube-input>
      </label>
      <!-- <label>
        <i class="icon" :class="registeractive?'icon-zhanghuzhongxin':'icon-rs-mail'"></i>
        <input class="logininput" type="text" :placeholder="registeractive?'请输入手机号码':'请输入邮箱'">
      </label> -->
      <slider ref="slider" class="thislider"></slider>
      <label>
        <cube-input v-model="yanzhengma" placeholder="请输入验证码">
          <template slot="prepend">
            <i class="icon icon-yuechimima"></i>
          </template>
          <template slot="append">
            <span class="verificationbtn" @click="getcode">{{timetxt}}</span>
          </template>
        </cube-input>
        <cube-validator ref="validator3" class="validator" v-model="valid[3]" :model="yanzhengma" :rules="rules1" :messages="messages4"></cube-validator>
      </label>
      <cube-button class="registerbtn" @click="submit">确认注册</cube-button>
    </form>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import slider from '@components/slider.vue'
import myfooter from '@components/myfooter.vue'
import {post} from '@api/index'
import { setInterval, clearInterval } from 'timers';
let inter = null;
export default {
  created(){
    if(inter) clearInterval(inter)
  },
  data(){
    return{
      // 表单样式与验证
      valid:['undefined','undefined','undefined','undefined'],
      num:'',
      rules0:{
        required: true,
        type: 'email',
      },
      messages0:{
        required:'账号不能为空',
        type:'请输入正确的账号'
      },
      rules1:{
        required: true,
      },
      messages1:{
        required:'账号不能为空',
      },
      passworld:'',
      messages2:{
        required:'密码不能为空'
      },
      repassworld:'',
      rules3:{
        custom: () => {
          return this.passworld == this.repassworld
        }
      },
      messages3:{
        custom:'账号不能同步'
      },
      messages4:{
        required:'验证码不能为空'
      },
      yaoqing:'',
      yanzhengma:'',
      timetxt:'点击获取验证码',
      time:60,
      registeractive:true
    }
  },
  components:{
    myheader,
    slider,
    myfooter
  },
  methods:{
    // 获取验证码
    getcode(){
      // 判断点击间隙
      if(this.time !== 60){
        return false
      }
      // 判断地址与滑块
      if(this.num==''){
        this.$createToast({
          txt: this.registeractive?'请先输入手机号':'请先输入邮箱地址',
          type: 'txt'
        }).show()
        return false
      }
      if(!this.$refs.slider.$data.isSuccess) {
        this.$createToast({
          txt: '请先滑动验证',
          type: 'txt'
        }).show()
        return false
      }
      // 倒计时
      inter = setInterval(()=>{
        this.timetxt = `${this.time}秒后可重新发送`;
        this.time--;
        if(this.time<=0){
          this.timetxt = '点击获取验证码';
          clearInterval(inter)
          this.time = 60
        }
      },1000)
      post('/login/get_code',{name:this.num}).then(json=>{
        this.$createToast({
          txt: String(json.data),
          type: 'txt',
          time: 10000
        }).show()
      }).catch(()=>{
      })
      // 清空滑块
      this.$refs.slider.resetslider()
    },
    // 注册
    submit(){
      const p1 = this.$refs.validator0.validate()
      const p2 = this.$refs.validator1.validate()
      const p3 = this.$refs.validator2.validate()
      const p4 = this.$refs.validator3.validate()
      const data = {
        name:this.num,
        password:this.passworld,
        code:this.yanzhengma,
        inviter:this.yaoqing
      }
      Promise.all([p1, p2, p3, p4]).then(() => {
        // 判断验证
        if (this.valid.every(item => item)) {
          post('/login/reg',data).then(()=>{
            let that = this
            this.$createToast({
              type: 'correct',
              txt: '注册成功',
              time: 1000,
              onTimeout(){
                that.$router.push('/login')
              }
            }).show()
          }).catch(()=>{
            this.$createToast({
              type: 'correct',
              txt: '注册失败，请重新注册',
              time: 1000
            }).show()
          })
        }
      })
    },
    changeregister(isnav){
      this.registeractive = isnav
    }
  }
}
</script>
