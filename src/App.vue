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
  .pos
    position absolute
    width 100%
    top 0px
    left 0px
    padding-top 1.4rem
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    // transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    // transform: translate3d(-100%, 0, 0);
  }
</style>

<template>
  <div id="app" class="clearfix">
     <transition name="slide-left">
      <router-view class="pos"/>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
      direction () {
        const viewDir = this.$store.state.viewDirection
        let tranName = ''
        if (viewDir === 'left') {
          tranName = 'view-out'
        } else if (viewDir === 'right') {
          tranName = 'view-in'
        } else {
          tranName = 'fade'
        }
        return tranName
      },
    },
}
</script>
