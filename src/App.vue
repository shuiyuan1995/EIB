<style lang="stylus">
  #app
    padding-top 1.38rem
  // 蒙版
  .mask
    position fixed
    top 0px
    left 0px
    width 100%
    height 100%
    background rgba(0,0,0,0.3)
</style>

<template>
  <div id="app" class="clearfix">
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>
