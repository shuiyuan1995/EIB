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
        margin-left 0.4rem
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
      .validator
        position absolute
        font-size 12px
        left 41px
        bottom -18px
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
    background-color #a1bedb
    border none 
    outline none
    border-radius 0.2rem
    font-family MicrosoftYaHei
    font-size 0.52rem
    color #ffffff
    margin 0 auto 0.4rem
  .rechargeBottom
    background-color #9bb6d3
    border-radius 0.2rem
    margin 0.56rem
    font-size 0.48rem
    padding 0.4rem
    line-height 0.72rem
    h3
      font-size 0.56rem
      margin-bottom 0.16rem
  .validationitem
    display flex
    margin-top 10px
    .cubeinput
      flex 1
    .btn
      flex 0 0 75px
      font-size 12px
      padding-top 10px
      padding-bottom 10px
      background #a1bedb
</style>

<template>
  <div class="securitysetting">
    <myheader left="prev" :center="title"></myheader>
    <div class="settingform">
      <div v-if="$route.params.type==0">
        <label>
          <cube-input v-model="newname" placeholder="请输入新用户名">
            <template slot="prepend">
              <i class="icon icon-idinput"></i>
            </template>
          </cube-input>
          <cube-validator ref="validator0" class="validator" v-model="valid[0]" :model="newname" :rules="rules0" :messages="messages0"></cube-validator>
        </label>
      </div>
      <div v-if="$route.params.type==1">
        <div class="rechargeBottom">
          <h3>充值须知</h3>
          <p>1.请勿向上述地址充值任何非EOS1资产，否则资产将不可找回。</p>
          <p>2.通过MEMO方式充值EOS1时，需填写我们提供的数字形式的MEMO标签，非法MEMO充值会导致交易失败，请您谅解。</p>
          <p>3.EOS暂不支持lnline方式的转账充值，通过lnline方式的转账充值将不会上账，请您谅解。</p>
          <p>4.请务必填写并仔细核对地址标签，这是您账户的唯一标识，否则资产将不可找回。</p>
          <p>5.您充值至上述地址后，需要整个网络节点的确认，1次网络确认后到账，1次网络确认后可提币。</p>
          <p>6.最小充值金额: 0.1EOS1，小于最小金额的充值将不会上账且无法退回。</p>
          <p>7.您的充值地址不会经常，可以重复充值；如有更改，我们会尽量通过网站公告或邮件通知您。</p>
          <p>8.请务必确认电脑浏览器安全，防止信息被篡改或泄露。</p>
        </div>
      </div>
      <div v-if="$route.params.type==2">
        <label>
          <cube-input type="password" v-model="newpass" placeholder="输入登录密码">
            <template slot="prepend">
              <i class="icon icon-mima"></i>
            </template>
          </cube-input>
          <cube-validator ref="validator1" class="validator" v-model="valid[1]" :model="newpass" :rules="rules0" :messages="messages0"></cube-validator>
        </label>
        <label>
          <cube-input type="password" v-model="pass" placeholder="再次输入新密码">
            <template slot="prepend">
              <i class="icon icon-mima"></i>
            </template>
          </cube-input>
          <cube-validator ref="validator2" class="validator" v-model="valid[2]" :model="pass" :rules="rules0" :messages="messages0"></cube-validator>
        </label>
      </div>
      <div v-if="$route.params.type==3">
        <label>
          <cube-input type="password" v-model="newpaypass" placeholder="输入交易密码">
            <template slot="prepend">
              <i class="icon icon-mima"></i>
            </template>
          </cube-input>
          <cube-validator ref="validator3" class="validator" v-model="valid[3]" :model="newpaypass" :rules="rules0" :messages="messages0"></cube-validator>
        </label>
        <label>
          <cube-input type="password" v-model="paypass" placeholder="再次输入交易密码">
            <template slot="prepend">
              <i class="icon icon-mima"></i>
            </template>
          </cube-input>
          <cube-validator ref="validator4" class="validator" v-model="valid[4]" :model="paypass" :rules="rules0" :messages="messages0"></cube-validator>
        </label>
      </div>
      <div v-if="$route.params.type==4">
        <label>
          <cube-input v-model="phone" placeholder="请输入手机号">
            <template slot="prepend">
              <i class="icon icon-shoujibangding"></i>
            </template>
          </cube-input>
          <cube-validator ref="validator5" class="validator" v-model="valid[5]" :model="phone" :rules="rules0" :messages="messages0"></cube-validator>
        </label>
        <label>
          <div class="validationitem">
            <cube-input class="cubeinput" v-model="code" placeholder="请输入验证码"></cube-input>
            <cube-button class="btn" @click="getcode">{{codetxt}}</cube-button>
          </div>
          <cube-validator ref="validator6" class="validator" v-model="valid[6]" :model="code" :rules="rules0" :messages="messages0"></cube-validator>
        </label>
      </div>
      <div v-if="$route.params.type==5">
        <label>
          <cube-input v-model="email" placeholder="请输入邮箱">
            <template slot="prepend">
              <i class="icon icon-shoujibangding"></i>
            </template>
          </cube-input>
          <cube-validator ref="validator7" class="validator" v-model="valid[7]" :model="email" :rules="rules0" :messages="messages0"></cube-validator>
        </label>
        <label>
          <div class="validationitem">
            <cube-input class="cubeinput" v-model="code1" placeholder="请输入验证码"></cube-input>
            <cube-button class="btn" @click="getcode">{{codetxt1}}</cube-button>
          </div>
          <cube-validator ref="validator8" class="validator" v-model="valid[8]" :model="code1" :rules="rules0" :messages="messages0"></cube-validator>
        </label>
      </div>
      <cube-button class="settingbtn" @click="next">确认</cube-button>
    </div>
    <myfooter></myfooter>
    <validation @close="close" @send="send" v-show="thevalidation"></validation>
  </div>
</template>

<script>
import {post,get} from '@api/index'
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import validation from '@components/validation.vue'
import {mapGetters,mapMutations} from 'vuex';
import {SET_USER_INFO,SET_LOADING} from "@store/mutation-types"
export default {
  mounted(){
  },
  components: {
    myheader,
    myfooter,
    validation
  },
  data(){
    return{
      // 验证组件控制
      thevalidation:false,
      // 输入框组
      newname:'',
      newpass:'',
      pass:'',
      newpaypass:'',
      paypass:'',
      phone:'',
      email:'',
      // 验证
      code:'',
      codetxt:'点击获取验证码',
      code1:'',
      codetxt1:'点击获取验证码',
      time:60,
      valid:['undefined','undefined','undefined','undefined','undefined','undefined','undefined'],
      rules0:{
        required: true,
      },
      messages0:{
        required:'昵称不能为空',
      },
      // 重复点击判断
      repeat:false,
    }
  },
  computed:{
    title(){
      let title = '';
      switch (this.$route.params.type) {
        case '0':
          title = '用户名修改'
          break;
        case '1':
          title = '钱包绑定'
          break;
        case '2':
          title = '修改登录密码'
          break;
        case '3':
          title = '修改交易密码'
          break;
        case '4':
          title = '手机绑定'
          break;
        case '5':
          title = '邮箱绑定'
          break;
        default:
          break;
      }
      return title
    },
    ...mapGetters([
      "userInfo"
    ]),
  },
  methods:{
    next(){
      // 判断重复点击
      if(this.repeat){
        return false
      }
      let id = this.$route.params.type;
      let that = this;
      let url = '';
      let data = {};
      let ps = [];
      switch (id) {
        case '0':
          ps = [this.$refs.validator0.validate()]
          url = 'nick';
          data = {
            name:this.newname
          }
          break;
        case '1':
          this.$router.push('/accountRecharge')
          return false;
        case '2':
          ps = [this.$refs.validator1.validate(),this.$refs.validator2.validate()]
          break;
        case '3':
          ps = [this.$refs.validator3.validate(),this.$refs.validator4.validate()]
          break;
        case '4':
          ps = [this.$refs.validator5.validate(),this.$refs.validator6.validate()]
          data = {
            name:this.phone,
            phone_code:this.code
          }
          url = 'edit_pe';
          break;
        case '5':
          ps = [this.$refs.validator7.validate(),this.$refs.validator8.validate()]
          data = {
            name:this.email,
            email_code:this.code1
          }
          url = 'edit_pe';
          break;
        default:
          break;
      }
      Promise.all(ps).then(() => {
        if (this.valid.every(item => item)) {
          if(Number(id)==0){
            this.gonext(id,url,data)
            return false
          }
          // 判断第一次绑定
          if(Number(id)==4&&!this.userInfo.phone||Number(id)==5&&!this.userInfo.email){
            this.gonext(id,url,data)
            return false
          }
          // 判断是否绑定邮箱
          if(!this.userInfo.email){
            this.$createToast({
              type: 'txt',
              txt: '请先绑定邮箱',
              time: 500,
              onTimeout(){
                that.$router.push('/securitysetting/5')
              }
            }).show()
            return false
          }
          // 判断是否绑定手机
          if(!this.userInfo.phone){
            this.$createToast({
              type: 'txt',
              txt: '请先绑定手机号',
              time: 500,
              onTimeout(){
                that.$router.push('/securitysetting/4')
              }
            }).show()
            return false
          }
          // 判断修改
          if(Number(id)==4||Number(id)==5){
            this.gonext(id,url,data)
            return false
          }
          if(Number(id)==2||Number(id)==3){
            this.thevalidation = true;
          }
        }
      })
    },
    // 提交数据
    gonext(id,url,data){
      this.repeat = true;
      this.SET_LOADING(true)
      post(`/security/${url}`,data).then(json=>{
        this.SET_LOADING(false)
        this.repeat = false;
        let that = this;
        let data = {};
        switch (id) {
          case '0':
            console.log(json)
            data = {
              ...this.userInfo,
              nick:json.data.nick
            }
            this.SET_USER_INFO(data)
            this.$createToast({
              type: 'correct',
              txt: '修改成功',
              time: 1000,
              onTimeout(){
                that.$router.back(-1)
              }
            }).show()
            break;
          case '2':
            this.$createToast({
              type: 'correct',
              txt: '设置成功',
              time: 1000,
              onTimeout(){
                that.$router.back(-1)
              }
            }).show()
            break;
          case '3':
            this.$createToast({
              type: 'correct',
              txt: '设置成功',
              time: 1000,
              onTimeout(){
                that.$router.back(-1)
              }
            }).show()
            break;
          case '4':
            if(this.userInfo.phone){
              this.thevalidation = true;
            }else{
              this.$createToast({
                type: 'correct',
                txt: '绑定成功',
                time: 1000,
                onTimeout(){
                  that.$router.back(-1)
                }
              }).show()
              data = {
                ...this.userInfo,
                phone:json.data.phone
              }
              this.SET_USER_INFO(data)
            }
            break;
          case '5':
            if(this.userInfo.email){
              this.thevalidation = true;
            }else{
              this.$createToast({
                type: 'correct',
                txt: '绑定成功',
                time: 1000,
                onTimeout(){
                  that.$router.back(-1)
                }
              }).show()
              data = {
                ...this.userInfo,
                email:json.data.email
              }
              this.SET_USER_INFO(data)
            }
            break;
          default:
            break;
        }
      }).catch(err=>{
        this.repeat = false;
      })
    },
    send(json){
      let that = this
      let id = this.$route.params.type;
      let data = {};
      let url = ''
      this.thevalidation = false;
      switch (id) {
        case '2':
          url = 'pwd';
          data = {
            ...json,
            new:this.newpass
          }
          this.gonext(id,url,data)
          break;
        case '3':
          url = 'set_repay_pwd';
          data = {
            ...json,
            new:this.newpaypass
          }
          this.gonext(id,url,data)
          break;
        case '4':
          data = {
            ...json,
            name:this.phone
          }
          this.SET_LOADING(true)
          post(`/security/edit_pe`,data).then(json=>{
            this.SET_LOADING(false)
            this.$createToast({
              type: 'correct',
              txt: '修改成功',
              time: 1000,
              onTimeout(){
                that.$router.back(-1)
              }
            }).show()
            data = {
              ...this.userInfo,
              phone:json.data.phone
            }
            this.SET_USER_INFO(data)
          })
          break;
        case '5':
          data = {
            ...json,
            name:this.email
          }
          this.SET_LOADING(true)
          post(`/security/edit_pe`,data).then(json=>{
            this.SET_LOADING(false)
            this.$createToast({
              type: 'correct',
              txt: '修改成功',
              time: 1000,
              onTimeout(){
                that.$router.back(-1)
              }
            }).show()
            data = {
              ...this.userInfo,
              email:json.data.email
            }
            this.SET_USER_INFO(data)
          })
          break;
        default:
          break;
      }
    },
    close(bl){
      this.thevalidation = bl
    },
    // 获取验证码
    getcode(){
      let inter = null;
      // 判断重复点击
      if(this.repeat){
        return false
      }
      // 判断点击间隙
      if(this.time !== 60){
        return false
      }
      // 判断验证类型
      if(this.$route.params.type=='4'){
        if(this.phone==''){
          this.$createToast({
            type: 'txt',
            txt: '请输入手机号',
            time: 500
          }).show()
          return false
        }
        this.repeat = true;
        post('/security/phone_code',{phone:this.phone}).then(json=>{
          this.$createToast({
            txt: json.data,
            type: 'txt',
            time: 10000
          }).show()
          this.repeat = false;
          // 倒计时
          inter = setInterval(()=>{
            this.codetxt = `${this.time}秒后可重新发送`;
            this.time--;
            if(this.time<=0){
              this.codetxt = '点击获取验证码';
              clearInterval(inter)
              this.time = 60
            }
          },1000)
        }).catch(err=>{
          this.repeat = false;
        })
      }else{
        if(this.email==''){
          this.$createToast({
            type: 'txt',
            txt: '请输入邮箱',
            time: 500
          }).show()
          return false
        }
        this.repeat = true;
        post('/security/email_code',{email:this.email}).then(json=>{
          this.$createToast({
            txt: json.data,
            type: 'txt',
            time: 10000
          }).show()
          this.repeat = false;
          // 倒计时
          inter = setInterval(()=>{
            this.codetxt1 = `${this.time}秒后可重新发送`;
            this.time--;
            if(this.time<=0){
              this.codetxt1 = '点击获取验证码';
              clearInterval(inter)
              this.time = 60
            }
          },1000)
        }).catch(err=>{
          this.repeat = false;
        })
      }
    },
    ...mapMutations({
      SET_USER_INFO,
      SET_LOADING
    }),
  }
}
</script>
