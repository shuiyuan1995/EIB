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
  .red
    color #ab0000
</style>

<template>
  <div class="accountExtract">
    <myheader left="prev" center="EOS提币"></myheader>
    <h2>EOS提币</h2>
    <div class="changemoney">
      <span>EOS</span>
      <span>选择币种</span>
      <i class="icon icon-pagenext"></i>
    </div>
    <form action="">
      <label>
        <p class="title">可用</p>
        <cube-input value="0.0000 EOS" disabled></cube-input>
      </label>
      <label>
        <p class="title">提币地址</p>
        <cube-input v-model="value" placeholder="输入或长按粘贴地址"></cube-input>
      </label>
      <label>
        <p class="title">标签<span class="red">（填写错误可能导致资产损失，请仔细核对）</span></p>
        <cube-input v-model="value" placeholder="输入或长按粘贴标签"></cube-input>
      </label>
      <label>
        <p class="title">数量</p>
        <div class="itemin">
          <cube-input class="cubeinput" v-model="value" placeholder="最小提币数量100">
            <template slot="append">
              <p class="inputappend">EOS</p>
            </template>
          </cube-input>
          <cube-button class="btn">全部</cube-button>
        </div>
      </label>
      <label>
        <p class="title">手续费</p>
        <cube-input v-model="value" placeholder="0.1000" disabled>
          <template slot="append">
            <p class="inputappend">EOS</p>
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
      <p class="lastmoney"><span>到账数量</span><span>0.0000  EOS</span></p>
      <cube-button class="btn">确  定</cube-button>
    </form>
    <myfooter></myfooter>
    <validation></validation>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import validation from '@components/validation.vue'
export default {
  data(){
    return{
      value:''
    }
  },
  components:{
    myheader,
    myfooter,
    validation
  },
}
</script>
