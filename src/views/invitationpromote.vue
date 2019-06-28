<style lang="stylus" scoped>
  .bg
    width 100%
    height 7.76rem
    background url('../assets/images/invitation.png') no-repeat center
    background-size 100%
    padding 10px
    p
      font-size 14px
  .title
    font-size 0.56rem
    padding 0.4rem
    line-height 0.72rem
    color #ffffff
  .copy
    display flex
    padding 0.4rem
    .btn
      flex 0 0 100px
      height 1.68rem
      padding-top 10px
      padding-bottom 10px
      background $btn-background
    .input
      flex 1
  .img
    width 104px
    height 104px
    background-color #e8edeb
    margin 0.8rem auto
  .savebtn
    width 90%
    margin 0 auto
    background $btn-background
</style>

<template>
  <div class="invitationpromote">
    <myheader left="prev" center="邀请好友"></myheader>
    <div class="bg"></div>
    <p class="title">方法二：复制下面的邀请链接发送给好友，邀请朋友加入EOS。</p>
    <div class="copy">
      <cube-input class="input" v-model="value" readonly></cube-input>
      <cube-button v-clipboard:copy="value"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError" class="btn">点击复制</cube-button>
    </div>
    <p class="title">方法三：邀请好友加入EOS，注册时输入您注册使用的手机号码。</p>
    <p class="title">方法四：通过自己的二维码邀请好友注册。</p>
    <div class="img">
      <img :src="img" alt="">
    </div>
    <cube-button @click="downloadCodeImg" class="savebtn">点击保存二维码</cube-button>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {mapGetters} from 'vuex';
export default {
  created(){
    this.value = this.url
  },
  data(){
    return{
      value:''
    }
  },
  components:{
    myheader,
    myfooter
  },
  computed:{
    ...mapGetters([
      "img",
      "url"
    ]),
  },
  methods:{
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
      console.log('下载图片')
      var a = document.createElement('a')
      a.download = name || 'pic'
      // 设置图片地址
      a.href = this.img;
      a.click();
    }
  }
}
</script>
