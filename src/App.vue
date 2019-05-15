<style lang="stylus">
#app {
  padding-top: 1.38rem;
  max-width: 400px;
  margin: 0 auto;
  // position relative
}

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
  width: 100%;
  background: #fff;
  margin: 0 auto;
  max-width: 400px;
  min-height: 100vh;
  top: 0px;
  padding-top: 1.4rem;
}

.slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
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

.loading {
  position: fixed;
  top: 0px;
  width: 100%;
  max-width: 400px;
  height: 100%;
  z-index: 9;
  background: rgba(0, 0, 0, 0.6);
  text-align center
  color #8cd0e5
  line-height 6.4rem
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
    <transition name="slide-left">
      <keep-alive>
        <router-view class="pos" v-if="isRouterAlive"/>
      </keep-alive>
    </transition>
    <transition name="showface">
      <div class="loading" v-show="showloading">
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
import {SET_INVITE} from "@store/mutation-types"
export default {
  created() {
    // 自动登录
    login();
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
      SET_INVITE
    }),
  }
};
</script>
