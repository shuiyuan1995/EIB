<style lang="stylus" scoped>
  h2
    font-size 0.72rem
    padding 0.56rem 0.8rem
    color #ffffff
  .changemoney
    margin 0 0.8rem
    padding 0 0.4rem
    height 1.2rem
    background $btn-background
    font-size 0.56rem
    display flex
    align-items center
    color #ffffff
    span:first-of-type
      flex 1
    span:last-of-type
      cursor pointer
  .main
    .img
      width 5.6rem
      height 5.6rem
      background-color #e5e5e5
      margin 1rem auto 0.56rem
    .save
      font-size 0.56rem
      color $font-active
      text-align center
      margin-bottom 1.08rem
      cursor pointer
    .title
      font-size 0.56rem
      margin-bottom 0.28rem
      text-align center
      color #ffffff
  .rechargeBottom
    background $bg-box
    color #ffffff
    border-radius 0.2rem
    margin 0.56rem
    font-size 0.48rem
    padding 0.4rem
    line-height 0.72rem
    h3
      font-size 0.56rem
      margin-bottom 0.16rem
</style>

<template>
  <div class="accountRecharge">
    <myheader left="prev" :center="type==0?'充币':'验证'"></myheader>
    <h2>{{type==0?'充币':'验证'}}</h2>
    <div class="changemoney">
      <span>{{type==1?'请向以下账户充值0.0001':''}}{{thismoney}}</span>
      <span v-show="type==0" @click="showPicker">选择币种</span>
      <i v-show="type==0" class="icon icon-pagenext"></i>
    </div>
    <div class="main">
      <div class="img">
        <img v-show="key==thismoney" v-for="(item,key,index) in img" :key="index" :src="item.img" alt="">
      </div>
      <p class="save" @click="downloadCodeImg">保存二维码</p>
      <p class="title">{{account}}</p>
      <p class="save" v-clipboard:copy="account"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">复制地址</p>
      <p class="title">{{tag}}</p>
      <p class="save" v-clipboard:copy="tag"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">复制Tag</p>
    </div>
    <div class="rechargeBottom">
      <h3>充值须知</h3>
      <p>1.请勿向上述地址充值任何非EOS资产，否则资产将不可找回。</p>
      <p>2.通过MEMO方式充值EOS时，需填写我们提供的数字形式的MEMO标签，非法MEMO充值会导致交易失败，请您谅解。</p>
      <p>3.EOS暂不支持lnline方式的转账充值，通过lnline方式的转账充值将不会上账，请您谅解。</p>
      <p>4.请务必填写并仔细核对地址标签，这是您账户的唯一标识，否则资产将不可找回。</p>
      <p>5.您充值至上述地址后，需要整个网络节点的确认，网络确认后到账，网络确认后可提币。</p>
      <p>6.最小充值金额: {{img[thismoney]?img[thismoney].min:1}} {{thismoney}}，小于最小金额的充值将不会上账且无法退回。</p>
      <p>7.您的充值地址不会经常，可以重复充值；如有更改，我们会尽量通过网站公告或邮件通知您。</p>
      <p>8.请务必确认电脑浏览器安全，防止信息被篡改或泄露。</p>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {get} from '@api/index'
import {mapGetters,mapMutations} from 'vuex';
import {SET_LOADING} from "@store/mutation-types"
export default {
  activated(){
    this.SET_LOADING(true)
    this.getdata()
    this.type = this.$route.params.type
  },
  data(){
    return{
      account:'',
      img:{},
      tag:'',
      thismoney:'',
      picker:'',
      imgindex:0,
      imgWrap:[],
      type:'',
    }
  },
  components:{
    myheader,
    myfooter
  },
  methods:{
    getdata(){
      get('/recharge').then(json=>{
        this.SET_LOADING(false)
        const {account,img,tag} = json.data;
        this.account = account;
        this.img = img;
        this.tag = tag;
        this.imgWrap = [];
        this.thismoney = Object.keys(img)[0]
      })
    },
    showPicker(){
      if (!this.picker) {
        let column = Object.keys(this.img).map(val=>{
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
      this.thismoney = selectedText[0]
      this.imgindex = selectedIndex[0]
    },
    cancelHandle() {
    },
    // 一键复制链接
    onCopy(){
      this.$createToast({
        txt: `复制成功`,
        type: 'txt',
        time: 500,
      }).show()
    },
    onError(){
      this.$createToast({
        txt: `复制失败,请重新复制`,
        type: 'txt',
        time: 500,
      }).show()
    },
    // 一键保存图片
    downloadCodeImg(){
      let a = document.createElement('a')
      a.download = name || 'pic'
      // 设置图片地址
      a.href = this.img;
      a.click();
    },
    ...mapMutations({
      SET_LOADING
    }),
  }
}
</script>
