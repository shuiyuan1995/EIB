<style lang="stylus">
#app {
  padding-top: 1.8rem;
  max-width: 400px;
  margin: 0 auto;
}
// 底部菜单
.homenav
  position fixed
  display flex
  width 100%
  max-width: 400px;
  bottom 0px
  height 2.2rem
  background #000413
  font-size 12px
  text-align center
  align-items center
  justify-content space-around
  z-index 100
  .link
    color #ffffff
    &.router-link-exact-active
      color $font-active
  p
    margin-top 0.16rem

// 蒙版
.mask {
  position: fixed;
  top: 0px;
  width: 100%;
  max-width: 400px;
  height: 100%;
  z-index: 9;
  background: rgba(0, 0, 0, 0.3);
}

.pos {
  position: absolute;
  top 0px
  width: 100%;
  background #000000
  margin: 0 auto;
  max-width: 400px;
  min-height: 100vh;
  padding-bottom 4.6rem
  padding-top: 1.8rem;
}
// 动画

.thisloading
  position: fixed;
  top: 0px;
  width: 100%;
  max-width: 400px;
  height: 100%;
  z-index: 9;
  background: rgba(0, 0, 0, 0.6);
  text-align center
  color #8cd0e5
  line-height 6.4rem;

@keyframes lds-eclipse {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes lds-eclipse {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.lds-eclipse {
  -webkit-animation: lds-eclipse 1s linear infinite;
  animation: lds-eclipse 1s linear infinite;
  width: 6.4rem;
  height: 6.4rem;
  margin auto
  margin-top 50%
  border-radius: 50%;
  box-shadow: 0 0.16rem 0 0 #8cd0e5;
  -webkit-transform-origin: 3.2rem 3.28rem;
  transform-origin: 3.2rem 3.28rem;
}
.showface-enter-active,
.showface-leave-active
  transition all 0.5s
.showface-enter,
.showface-leave-to
  opacity 0
</style>

<template>
  <div id="app" class="clearfix">
    <keep-alive>
      <router-view class="pos" v-if="isRouterAlive"/>
    </keep-alive>
    <!-- 底部nav -->
    <nav class="homenav">
      <router-link class="link" to="/">
        <i class="icon icon-shouye1"></i>
        <p>首页</p>
      </router-link>
      <router-link class="link" to="/investment">
        <i class="icon icon-touzi"></i>
        <p>我要投资</p>
      </router-link>
      <router-link class="link" to="/account">
        <i class="icon icon-zhanghuzhongxin"></i>
        <p>账户中心</p>
      </router-link>
      <router-link class="link" to="/security">
        <i class="icon icon-anquan"></i>
        <p>安全</p>
      </router-link>
      <router-link class="link" to="/about">
        <i class="icon icon-women"></i>
        <p>关于我们</p>
      </router-link>
    </nav>
    <!-- loaeding -->
    <transition name="showface">
      <div class="thisloading" v-show="showloading">
        <div class="lds-eclipse">
        </div>
        loading...
      </div>
    </transition>
  </div>
</template>

<script>
import { login } from "@common/js";
import {mapGetters,mapMutations} from 'vuex';
import {SET_INVITE,SET_LOADING} from "@store/mutation-types"
export default {
  created() {
    // 自动登录
    this.SET_LOADING(true)
    login(false,()=>{
      this.SET_LOADING(false)
    });
    // 获取邀请人
    if(this.$route.query.invite){
      this.SET_INVITE(this.$route.query.invite)
    }
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true,
      mask: false
    };
  },
  computed: {
    direction() {
      const viewDir = this.$store.state.viewDirection;
      let tranName = "";
      if (viewDir === "left") {
        tranName = "view-out";
      } else if (viewDir === "right") {
        tranName = "view-in";
      } else {
        tranName = "fade";
      }
      return tranName;
    },
    ...mapGetters([
      "showloading"
    ]),
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    changemask() {
      this.mask = !this.mask;
    },
    ...mapMutations({
      SET_INVITE,
      SET_LOADING
    }),
  }
};
</script>
