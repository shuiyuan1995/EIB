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
        color #8c3eb3
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
      background #8c3eb3
      box-sizing border-box
      height 1.68rem
  .phoneaddress
    padding 11px 16px
    color #ffffff
  .phonenum
    margin-left 6px
    color #ffffff
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
          <p>1.请勿向上述地址充值任何非EOS资产，否则资产将不可找回。</p>
          <p>2.通过MEMO方式充值EOS时，需填写我们提供的数字形式的MEMO标签，非法MEMO充值会导致交易失败，请您谅解。</p>
          <p>3.EOS暂不支持lnline方式的转账充值，通过lnline方式的转账充值将不会上账，请您谅解。</p>
          <p>4.请务必填写并仔细核对地址标签，这是您账户的唯一标识，否则资产将不可找回。</p>
          <p>5.您充值至上述地址后，需要整个网络节点的确认，1次网络确认后到账，1次网络确认后可提币。</p>
          <p>6.最小充值金额: 0.0001EOS，小于最小金额的充值将不会上账且无法退回。</p>
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
          <cube-validator ref="validator1" class="validator" v-model="valid[1]" :model="newpass" :rules="rules1" :messages="messages1"></cube-validator>
        </label>
        <label>
          <cube-input type="password" v-model="pass" placeholder="再次输入新密码">
            <template slot="prepend">
              <i class="icon icon-mima"></i>
            </template>
          </cube-input>
          <cube-validator ref="validator2" class="validator" v-model="valid[2]" :model="pass" :rules="rules2" :messages="messages2"></cube-validator>
        </label>
      </div>
      <div v-if="$route.params.type==3">
        <label>
          <cube-input type="password" v-model="newpaypass" placeholder="输入交易密码">
            <template slot="prepend">
              <i class="icon icon-mima"></i>
            </template>
          </cube-input>
          <cube-validator ref="validator3" class="validator" v-model="valid[3]" :model="newpaypass" :rules="rules3" :messages="messages3"></cube-validator>
        </label>
        <label>
          <cube-input type="password" v-model="paypass" placeholder="再次输入交易密码">
            <template slot="prepend">
              <i class="icon icon-mima"></i>
            </template>
          </cube-input>
          <cube-validator ref="validator4" class="validator" v-model="valid[4]" :model="paypass" :rules="rules4" :messages="messages2"></cube-validator>
        </label>
      </div>
      <div v-if="$route.params.type==4">
        <label>
          <cube-input v-model="phone" placeholder="请输入手机号">
            <template slot="prepend">
              <i class="icon icon-shoujibangding"></i>
              <span class="phonenum">{{phonenum}} -</span>
            </template>
          </cube-input>
          <cube-validator ref="validator5" class="validator" v-model="valid[5]" :model="phone" :rules="rules5" :messages="messages5"></cube-validator>
        </label>
        <label>
          <cube-button class="phoneaddress" :outline="true" @click="changeaddress">手机通讯地址：{{phoneadd}}</cube-button>
        </label>
        <label>
          <div class="validationitem">
            <cube-input class="cubeinput" v-model="code" placeholder="请输入验证码"></cube-input>
            <cube-button class="btn" @click="getcode">{{codetxt}}</cube-button>
          </div>
          <cube-validator ref="validator6" class="validator" v-model="valid[6]" :model="code" :rules="rules0" :messages="messages4"></cube-validator>
        </label>
      </div>
      <div v-if="$route.params.type==5">
        <label>
          <cube-input v-model="email" placeholder="请输入邮箱">
            <template slot="prepend">
              <i class="icon icon-shoujibangding"></i>
            </template>
          </cube-input>
          <cube-validator ref="validator7" class="validator" v-model="valid[7]" :model="email" :rules="rules6" :messages="messages6"></cube-validator>
        </label>
        <label>
          <div class="validationitem">
            <cube-input class="cubeinput" v-model="code1" placeholder="请输入验证码"></cube-input>
            <cube-button class="btn" @click="getcode">{{codetxt1}}</cube-button>
          </div>
          <cube-validator ref="validator8" class="validator" v-model="valid[8]" :model="code1" :rules="rules0" :messages="messages4"></cube-validator>
        </label>
      </div>
      <cube-button class="settingbtn" @click="next">确认</cube-button>
    </div>
    <myfooter></myfooter>
    <validation @close="close" @send="send" v-show="thevalidation" :thevalidation="thevalidation"></validation>
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
  activated(){
    this.newname = '';
    this.newpass = '';
    this.pass = '';
    this.newpaypass = '';
    this.paypass = '';
    this.phone = '';
    this.email = '';
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
        max:15,
      },
      messages0:{
        required:'昵称不能为空',
        max:'最大为15个字符'
      },
      rules1:{
        required: true,
        pattern:/^(\w){6,16}$/
      },
      messages1:{
        required:'密码不能为空',
        pattern:'只能输入6-16个字母、数字、下划线'
      },
      rules2:{
        custom: () => {
          return this.newpass == this.pass
        }
      },
      rules4:{
        custom: () => {
          return this.newpaypass == this.paypass
        }
      },
      messages2:{
        custom:'密码不一致'
      },
      rules3:{
        required: true,
        pattern:/^\d{6}$/
      },
      messages3:{
        required:'交易密码不能为空',
        pattern:'只能输入6个数字交易密码'
      },
      rules5:{
        required: true,
        custom: (val) => {
          return this.reg.test(val)
        }
      },
      messages5:{
        required:'手机号不能为空',
        custom:'请输入正确的手机号'
      },
      rules6:{
        required: true,
        type: 'email',
      },
      messages6:{
        required:'邮箱不能为空',
        type:'请输入正确的邮箱号'
      },
      messages4:{
        required:'验证码不能为空',
      },
      // 重复点击判断
      repeat:false,
      phoneadd:'中国',
      phonenum:86,
      reg:/^(\+?0?86\-?)?1[345789]\d{9}$/
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
      "userInfo",
      "phoneaddress"
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
      this.valid = ['undefined','undefined','undefined','undefined','undefined','undefined','undefined'];
      switch (id) {
        case '0':
          ps = [this.$refs.validator0.validate()]
          url = 'nick';
          data = {
            name:this.newname
          }
          break;
        case '1':
          this.$router.push('/accountRecharge/1')
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
      post(`/${url}`,data).then(json=>{
        this.SET_LOADING(false)
        this.repeat = false;
        let that = this;
        let data = {};
        switch (id) {
          case '0':
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
            this.pass = '';
            this.newpass = '';
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
            this.paypass = '';
            this.newpaypass = '';
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
          post(`/edit_pe`,data).then(json=>{
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
          post(`/edit_pe`,data).then(json=>{
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
        let data = {
          phone:this.phone,
          phone_head:this.phonenum
        }
        post('/phone_code',data).then(json=>{
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
        post('/email_code',{email:this.email}).then(json=>{
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
    changeaddress(){
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: '号码归属地',
          data: [this.phoneaddress],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.phoneadd = selectedText[0];
      this.phonenum = selectedVal[0];
      if(this.phoneaddress[selectedIndex].reg){
        this.reg = this.phoneaddress[selectedIndex].reg
      }else{
        this.reg = /^011(999|998|997|996|995|994|993|992|991|990|979|978|977|976|975|974|973|972|971|970|969|968|967|966|965|964|963|962|961|960|899|898|897|896|895|894|893|892|891|890|889|888|887|886|885|884|883|882|881|880|879|878|877|876|875|874|873|872|871|870|859|858|857|856|855|854|853|852|851|850|839|838|837|836|835|834|833|832|831|830|809|808|807|806|805|804|803|802|801|800|699|698|697|696|695|694|693|692|691|690|689|688|687|686|685|684|683|682|681|680|679|678|677|676|675|674|673|672|671|670|599|598|597|596|595|594|593|592|591|590|509|508|507|506|505|504|503|502|501|500|429|428|427|426|425|424|423|422|421|420|389|388|387|386|385|384|383|382|381|380|379|378|377|376|375|374|373|372|371|370|359|358|357|356|355|354|353|352|351|350|299|298|297|296|295|294|293|292|291|290|289|288|287|286|285|284|283|282|281|280|269|268|267|266|265|264|263|262|261|260|259|258|257|256|255|254|253|252|251|250|249|248|247|246|245|244|243|242|241|240|239|238|237|236|235|234|233|232|231|230|229|228|227|226|225|224|223|222|221|220|219|218|217|216|215|214|213|212|211|210|98|95|94|93|92|91|90|86|84|82|81|66|65|64|63|62|61|60|58|57|56|55|54|53|52|51|49|48|47|46|45|44|43|41|40|39|36|34|33|32|31|30|27|20|7|1)[0-9]{0, 14}$/
      }
    },
    cancelHandle() {
    },
    ...mapMutations({
      SET_USER_INFO,
      SET_LOADING
    }),
  }
}
</script>
