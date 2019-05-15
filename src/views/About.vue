 <style lang="stylus" scoped>
    .main
      padding 0 0.8rem
    h2
      font-size 16px
      margin 6px 0 10px
      padding 0 32px
    .img
      width 155px
      height 155px
      background-color #e8edeb
      margin 10px auto 20px
    p
      font-size 14px
      padding 0 32px
      line-height 22px
      a
        color #5570a6
</style>


<template>
  <div class="about">
    <myheader left="prev" center="关于我们"></myheader>
    <div class="main" v-html="data"></div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import {get} from '@api/index'
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {mapMutations} from 'vuex';
import {SET_LOADING} from "@store/mutation-types"
export default {
  created(){
    this.SET_LOADING(true)
    get('/about').then(val=>{
      this.SET_LOADING(false)
      this.data = val.data
    })
  },
  data(){
    return{
      data:''
    }
  },
  components:{
    myheader,
    myfooter
  },
  methods:{
    ...mapMutations({
      SET_LOADING
    }),
  }
}
</script>
