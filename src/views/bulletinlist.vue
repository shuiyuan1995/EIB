<style lang="stylus" scoped>
  .bulletintitle
    padding 0 0.44rem
    border-bottom 0.08rem solid #e5e5e5
    color #000000
    font-size 0.6rem
    height 1.4rem
    line-height 1.4rem
    span
      display inline-block
      border-radius 50%
      width 0.36rem
      height 0.36rem
      background-color #526ca3
      margin-right 0.32rem
  .bulletintime
    display flex
    font-size 0.52rem
    padding 0 0.44rem
    border-bottom 0.06rem solid #e5e5e5
    align-items center
    height 1rem
    justify-content space-between
    span:first-of-type
      color #5670a7
  .bulletintop
    font-size 0.56rem
    padding 0 0.44rem
    border-bottom 0.06rem solid #e5e5e5
    height 1.2rem
    line-height 1.2rem
  .bulletinmain
    padding 0 0.44rem
    padding-top 0.8rem
    font-size 0.64rem
    line-height 0.8rem
</style>

<template>
  <div class="bulletinlist">
    <myheader left="prev" :center="title"></myheader>
    <div class="bulletintitle"><span></span>{{title}}公告</div>
    <div class="bulletintime">
      <span>{{type}}</span>
      <span>{{time}}</span>
    </div>
    <div class="bulletintop">{{abstract}}</div>
    <div class="bulletinmain" v-html="content"></div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {get} from '@api/index'
import {changedata} from '@common/js/index'
import {mapMutations} from 'vuex';
import {SET_LOADING} from "@store/mutation-types"
export default {
  activated(){
    const {id,title} = this.$route.params
    this.title = title
    this.SET_LOADING(true)
    get('/login/notice_info',{id:id}).then(json=>{
      this.SET_LOADING(false)
      const {type,time,abstract,content} = json.data
      this.type = type
      this.abstract = abstract
      this.content = content
      this.time = changedata(time*1000,'yyyy-MM-dd')
    })
  },
  data(){
    return{
      title:'',
      type:'',
      time:'',
      abstract:'',
      content:'',
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
