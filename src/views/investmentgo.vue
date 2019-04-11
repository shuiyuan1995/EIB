<style lang="stylus" scoped>
  .investmentgomain
    font-size 0.6rem
    padding 0.8rem 1.2rem
    line-height 1.6rem
    p
      display flex
      &:last-of-type
        font-size 12px
        color #606060
    span:first-of-type
      flex 0 0 4rem
    .blue
      color #5570a6
    .red
      color #b50000
      font-size 0.8rem
  .investmentgopay
    .passwordDiv
      display flex
      justify-content flex-start
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
  .gobtn
    display block
    width 12.64rem
    height 1.2rem
    margin 0 auto
    background-color #9bb6d3
    text-align center
    font-size 15px
    color #ffffff
    line-height 1.2rem
    margin-top 0.8rem
    border none
</style>

<template>
  <div class="investmentgo">
    <myheader left="prev" center="确认投标"></myheader>
    <div class="investmentgomain">
      <p><span>借款标题</span><span>暖宝宝-EOS过冬理财计划</span></p>
      <p><span>借款用途</span><span class="blue">日常消费</span></p>
      <p><span>预期利率</span><span>0.0%</span></p>
      <p><span>还款期限</span><span>00天</span></p>
      <p><span>还款方式</span><span>等额本息</span></p>
      <p><span>融资金额</span><span>0000元</span></p>
      <p><span>保障方式</span><span>本金+利息</span></p>
      <p><span>投资金额</span><span class="red">000元</span></p>
      <p>如遇流标情况，投资金额将在流标后冻结。</p>
    </div>
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
      <button class="gobtn">确认</button>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import {getEles} from "@common/js";
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
export default {
  data(){
    return{
      value:''
    }
  },
  components:{
    myheader,
    myfooter
  },
  methods:{
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
    }
  }
}
</script>
