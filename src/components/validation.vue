<style lang="stylus" scoped>
  .validation
    position fixed
    width 100%
    height 100%
    top 0px
    left 0px
    background rgba(0,0,0,0.2)
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
</style>

<template>
  <div class="validation">
    <div class="main">
      <p>若为收到邮件，请检查邮箱垃圾箱</p>
      <div class="title">
        <h2>安全验证</h2>
        <p>取消</p>
      </div>
      <form action="">
        <label for="">
          <p>短信验证:131**********1233</p>
          <div class="validationitem">
            <cube-input class="cubeinput" v-model="value" placeholder="请输入验证码"></cube-input>
            <cube-button class="btn">发送</cube-button>
          </div>
        </label>
        <label for="">
          <p>邮箱验证:FGH**********SGDFD</p>
          <div class="validationitem">
            <cube-input class="cubeinput" v-model="value" placeholder="请输入验证码"></cube-input>
            <cube-button class="btn">发送</cube-button>
          </div>
        </label>
        <cube-button class="btnok">确  认</cube-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
