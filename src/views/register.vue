<style lang="stylus" scoped>
  .registered
    color #ffffff
    &>span 
      padding 0 1.44rem
      font-size 0.56rem
  .registerform
    text-align center
    margin-top 1rem
    h1
      text-align left 
      padding 0 1.44rem 0.8rem
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
    background $btn-background
    font-family MicrosoftYaHei
    font-size 0.52rem
    color #ffffff
    margin 0 auto 0.48rem
    border-radius 0.2rem
  .validator
    position absolute
    font-size 12px
    left 41px
    bottom -18px
  .phoneaddress
    padding 11px 16px
    color #ffffff
  .phonenum
    margin-left 6px
</style>

<template>
  <div class="registered">
    <myheader left="prev" center="用户注册" right="登录"></myheader>
    <form class="registerform">
      <h1>{{registeractive?'手机注册':'邮箱注册'}}</h1>
      <label>
        <cube-input v-model="num" :placeholder="registeractive?'请输入手机号码':'请输入邮箱'">
          <template slot="prepend">
            <i class="icon" :class="registeractive?'icon-zhanghuzhongxin':'icon-rs-mail'"></i>
            <span v-show="registeractive" class="phonenum">{{phonenum}} -</span>
          </template>
        </cube-input>
        <cube-validator ref="validator0" class="validator" v-model="valid[0]" :model="num" :rules="registeractive?rules1:rules0" :messages="registeractive?messages1:messages0"></cube-validator>
      </label>
      <label v-show="registeractive">
        <cube-button class="phoneaddress" :outline="true" @click="changeaddress">手机通讯地址：{{phoneadd}}</cube-button>
      </label>
      <label>
        <cube-input type="password" :eye="{open: false,reverse: false}" v-model="passworld" placeholder="请输入密码(6-16个字母,数字,下划线)" autocomplete="off">
          <template slot="prepend">
            <i class="icon icon-mima"></i>
          </template>
        </cube-input>
        <cube-validator ref="validator1" class="validator" v-model="valid[1]" :model="passworld" :rules="rules2" :messages="messages2"></cube-validator>
      </label>
      <label>
        <cube-input type="password" v-model="repassworld" placeholder="请再次输入密码" autocomplete="off">
          <template slot="prepend">
            <i class="icon icon-mima"></i>
          </template>
        </cube-input>
        <cube-validator ref="validator2" class="validator" v-model="valid[2]" :model="repassworld" :rules="rules3" :messages="messages3"></cube-validator>
      </label>
      <label>
        <cube-input v-model="yaoqing" placeholder="请输入邀请人账号或者邀请码(可选)">
          <template slot="prepend">
            <i class="icon icon-weibiaoti-"></i>
          </template>
        </cube-input>
      </label>
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
        <cube-validator ref="validator3" class="validator" v-model="valid[3]" :model="yanzhengma" :rules="rules4" :messages="messages4"></cube-validator>
      </label>
      <cube-button class="registerbtn" @click="submit">确认注册</cube-button>
    </form>
    <span @click="changepage">{{registeractive?'邮箱注册':'手机注册'}}</span>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import slider from '@components/slider.vue'
import myfooter from '@components/myfooter.vue'
import {post} from '@api/index'
import {mapGetters,mapMutations} from 'vuex';
import {SET_LOADING} from "@store/mutation-types"
import { login } from "@common/js";
import { setInterval, clearInterval } from 'timers';
let inter = null;
export default {
  activated(){
    this.registeractive = this.$route.params.type=='email'?false:true
    if(this.invite) this.yaoqing = this.invite
    this.num = '';
    this.passworld = '';
    this.repassworld = '';
    this.yanzhengma = '';
    clearInterval(inter);
    this.time = 60;
  },
  inject:['reload'],
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
        type:'请输入正确的邮箱'
      },
      rules1:{
        required: true,
        custom: (val) => {
          return this.reg.test(val)
        }
      },
      rules4:{
        required: true,
      },
      messages1:{
        required:'账号不能为空',
        custom:'请输入正确的手机号'
      },
      passworld:'',
      rules2:{
        required: true,
        pattern:/^(\w){6,16}$/
      },
      messages2:{
        required:'密码不能为空',
        pattern:'只能输入6-16个字母、数字、下划线'
      },
      repassworld:'',
      rules3:{
        custom: () => {
          return this.passworld == this.repassworld
        }
      },
      messages3:{
        custom:'密码不一致'
      },
      messages4:{
        required:'验证码不能为空'
      },
      yaoqing:'',
      yanzhengma:'',
      timetxt:'点击获取验证码',
      time:60,
      registeractive:true,
      phoneadd:'中国',
      phonenum:86,
      reg:/^(\+?0?86\-?)?1[345789]\d{9}$/,
      // 多次点击
      onmore:false,
    }
  },
  components:{
    myheader,
    slider,
    myfooter
  },
  computed:{
    ...mapGetters([
      "phoneaddress",
      "invite"
    ]),
  },
  methods:{
    // 获取验证码
    getcode(){
      if(this.onmore) return false
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
      let data = {
        phone_head:this.registeractive?this.phonenum:'',
        name:this.num
      }
      this.onmore = true
      post('/get_code',data).then(json=>{
        this.onmore = false
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
      }).catch(()=>{
        this.onmore = false
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
        inviter:this.yaoqing,
        phone_head:this.registeractive?this.phonenum:'',
      }
      Promise.all([p1, p2, p3, p4]).then(() => {
        // 判断验证
        if (this.valid.every(item => item)) {
          this.SET_LOADING(true)
          post('/reg',data).then(()=>{
            let that = this
            const data = {
              name:this.num,
              password:this.passworld
            }
            this.SET_LOADING(false)
            this.$createToast({
              type: 'correct',
              txt: '注册成功',
              time: 1000,
              onTimeout(){
                login(data);
                that.$router.push('/')
              }
            }).show()
          }).catch(()=>{
          })
        }
      })
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
    // 切换注册
    changepage(){
      this.$router.push(`/register/${this.$route.params.type=='email'?'phone':'email'}`)
      this.reload()
    },
    ...mapMutations({
      SET_LOADING
    }),
  }
}
</script>
