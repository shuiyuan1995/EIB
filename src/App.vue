<style lang="stylus">
  #app
    padding-top 1.38rem
    max-width 400px
    margin 0 auto
    // position relative
  // 蒙版
  .mask
    position fixed
    top 0px
    width 100%
    max-width 400px
    height 100%
    background rgba(0,0,0,0.3)
  .pos
    position absolute
    width 100%
    background #fff
    margin 0 auto
    max-width 400px
    min-height 100vh
    top 0px
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
      <router-view class="pos" v-if="isRouterAlive"/>
    </transition>
  </div>
</template>

<script>
import {login} from "@common/js";
export default {
  created(){
    // 自动登录
    login();
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
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
  methods:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
      })
    }
  }
}
</script>
