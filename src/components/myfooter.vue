<style lang="stylus" scoped>
    // 底部
  footer
    margin-top 0.8rem
    p
      font-family MicrosoftYaHei
      font-size 0.5rem
      text-align center
      color #c4c4c4
      line-height 0.48rem
      margin-bottom 0.56rem
  .footnav
    text-align center
    .link
      color #000000
      font-size 0.5rem
      padding 0 0.48rem
      border-right 0.06rem solid #e5e5e5
      &:last-of-type
        border-right none
  .footerli
    text-align center
    span 
      font-size 0.52rem
      padding 0 0.48rem
      border-right 0.06rem solid #8c8c8c
      &:last-of-type
        border-right none
</style>

<template>
  <footer>
    <p>友情提示：网贷有风险，投资须谨慎</p>
    <nav class="footnav">
      <router-link class="link" to="/">首页</router-link>
      <router-link class="link" to="/">我要投资</router-link>
      <router-link class="link" to="/">我要融资</router-link>
      <router-link class="link" to="/">关于我们</router-link>
      <router-link class="link" to="/">帮助</router-link>
    </nav>
    <div class="footerli">
      <span>EIB</span>
      <span>渝ICP备14007328号-1</span>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>
