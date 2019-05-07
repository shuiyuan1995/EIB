<style lang="stylus" scoped>
  h2
    font-size 0.72rem
    padding 0.56rem 0.8rem
  .changemoney
    margin 0 0.8rem
    padding 0 0.4rem
    height 1.2rem
    background-color #e5e5e5
    font-size 0.56rem
    display flex
    align-items center
    color #8e8e8e
    span:first-of-type
      flex 1
      color #000000
  form
    padding 0 0.8rem
    margin-top 0.64rem
    .title
      font-size 0.56rem
      margin-bottom 0.16rem
    label
      margin-bottom 0.48rem
      display block
    .itemin
      display flex
      .cubeinput
        flex 1
      .btn
        flex 0 0 2.48rem
        padding-top 0.4rem
        padding-bottom 0.4rem
    .formtxt
      background #7eaad0
      font-size 0.48rem
      color #ffffff
      padding 0.4rem
      h3
        margin-bottom 10px
      p
        line-height 18px
    .lastmoney
      display flex
      font-size 0.56rem
      justify-content space-between
      margin 0.8rem 0
    .inputappend
      margin-right 0.32rem
    .btn
      background #9bb6d3
  .investmentgopay
    margin 0.56rem 0
    .passwordDiv
      display flex
      justify-content center
      align-items center
      width 12.64rem
      margin 0 auto
      .passtitle
        font-size 0.56rem
        margin-right 0.8rem
    .passwordLabel
      height 30px
      clear both
      li
        float left
        width 30px
        height 30px
        line-height 30px
        text-align center
        border 1px solid #dedede
        background #ffffff
        &.active
          border 1px solid #0081f7
    input 
      width 1px
      height 1px
      opacity 0
      border 0
  .red
    color #ab0000
</style>

<template>
  <div class="accountExtract">
    <myheader left="prev" center="EOS提币"></myheader>
    <h2>EOS提币</h2>
    <div class="changemoney">
      <span>{{thismoney}}</span>
      <span @click="showPicker">选择币种</span>
      <i class="icon icon-pagenext"></i>
    </div>
    <form action="">
      <label>
        <p class="title">可用</p>
        <cube-input :value="`${aoto[thismoney].money} ${thismoney}`" disabled></cube-input>
      </label>
      <label>
        <p class="title">提币地址</p>
        <cube-input :value="content.account" placeholder="输入或长按粘贴地址" disabled></cube-input>
      </label>
      <label>
        <p class="title">标签<span class="red">（填写错误可能导致资产损失，请仔细核对）</span></p>
        <cube-input v-model="lable" placeholder="输入或长按粘贴标签"></cube-input>
      </label>
      <label>
        <p class="title">数量</p>
        <div class="itemin">
          <cube-input type="Number" class="cubeinput" v-model="money" :placeholder="`最小提币数量${aoto[thismoney].withdraw}`">
            <template slot="append">
              <p class="inputappend">{{thismoney}}</p>
            </template>
          </cube-input>
          <cube-button class="btn" @click="money = aoto[thismoney].money">全部</cube-button>
        </div>
      </label>
      <label>
        <p class="title">手续费</p>
        <cube-input :value="money*content.fee" placeholder="0.1000" disabled>
          <template slot="append">
            <p class="inputappend">{{thismoney}}</p>
          </template>
        </cube-input>
      </label>
      <div class="formtxt">
        <h3>最小提币数量为：100 EOS。</h3>
        <p>1.请确认目标提币地址是否存在且被激活，否则将会导致提币失败，且资产不可找回。</p>
        <p>2.请务必仔细核对地址标签，否则将造成损失并不可找回。</p>
        <p>3.为保障资金安全，当您账户安全策略变更，密码修改，我们会对提币进行人工审核，请耐心等待工作人员电话或者邮件联系。</p>
        <p>4.请务必确认电脑及浏览器安全，防止信息被篡改或泄露。</p>
      </div>
      <p class="lastmoney"><span>到账数量</span><span>{{money-money*content.fee}}  {{thismoney}}</span></p>
      <div class="investmentgopay">
        <div class="passwordDiv">
          <span class="passtitle">支付密码</span>
          <label for="ipt" class="passwordLabel">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </label>
          <input @focus="onfocus" @input="oninput" @blur="onblur" v-model="value" type="password" id="ipt" maxlength="6" >
        </div>
      </div>
      <cube-button class="btn" @click="goto">确  定</cube-button>
    </form>
    <myfooter></myfooter>
    <validation @close="close" @send="send" :thisphone="false" v-show="onvalidation"></validation>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import validation from '@components/validation.vue'
import {mapGetters} from 'vuex';
import {post} from '@api/index'
import {getEles} from '@common/js'
import { posix } from 'path';
export default {
  created(){
    this.thismoney = Object.keys(this.aoto)[0]
  },
  data(){
    return{
      lable:'',
      money:'',
      thismoney:'',
      picker:'',
      onvalidation:false,
      // 支付密码
      value:'',
    }
  },
  components:{
    myheader,
    myfooter,
    validation
  },
  computed:{
    ...mapGetters([
      "aoto",
      "content"
    ]),
  },
  methods: {
    // 进入密码框焦点
    onfocus(){
      var list = getEles('.passwordDiv ul li')
      if(this.value.length<6){
        list[this.value.length].classList.add("active")
      }else{
        list[5].classList.add("active")
      }
    },
    // 输入密码
    oninput(){
      var number = 6;
      var list = getEles('.passwordDiv ul li')
      if(this.value.length<6){
        list[this.value.length].classList.add("active")
      }
      for(var i = 0; i < number; i++) {
        if(this.value[i]) {
          list[i].innerHTML = '•'
          if(this.value.length<number){
            list[i].classList.remove("active")
          }
        } else {
          list[i].innerHTML = ''
          if(i>this.value.length){
            list[i].classList.remove("active")
          }
        }
      }
    },
    // 出去密码框焦点
    onblur(){
      var list = getEles('.passwordDiv ul li')
      if(this.value.length<6){
        list[this.value.length].classList.remove("active")
      }else{
        list[5].classList.remove("active")
      }
    },
    showPicker() {
      if (!this.picker) {
        console.log(Object.keys(this.aoto))
        let column = Object.keys(this.aoto).map(val=>{
          return {
            text: val, 
            lable: val
          }
        })
        this.picker = this.$createPicker({
          title: '币种',
          data: [column],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.thismoney = selectedVal[0]
    },
    cancelHandle() {
    },
    goto(){
      if(!this.lable){
        this.$createToast({
          txt: `标签不能为空`,
          type: 'txt',
          time: 500,
        }).show()
        return false;
      }
      if(this.money<this.aoto[thismoney].withdraw||this.money>this.aoto[this.thismoney].money){
        this.$createToast({
          txt: `请填写正确金额`,
          type: 'txt',
          time: 500,
        }).show()
        return false;
      }
      if(!(this.value.length==6)){
        this.$createToast({
          txt: `请填写正确交易密码`,
          type: 'txt',
          time: 500,
        }).show()
        return false;
      }
      post('/security/ver_pay_pwd',{pay_pwd:this.value}).then(()=>{
        this.onvalidation = true;
      })
    },
    send(json){
      const that = this
      let data = {
        coin:this.thismoney,
        sum:Number(this.money),
        pay_pwd:this.value,
        email_code:json.email_code
      }
      post('/security/reflect',data).then(()=>{
        this.thevalidation = false;
        this.$createToast({
          txt: '提交成功，请等待审核',
          type: 'txt',
          time: 500,
          onTimeout(){
            that.$router.back(-1)
          }
        }).show()
      })
      // let that = this
      // let id = this.$route.params.type;
      // let data = {};
      // let url = ''
      // this.thevalidation = false;
    },
    close(bl){
      this.onvalidation = bl
    },
  }
}
</script>
