<style lang="stylus" scoped>
  .rewardtop
    background #9bb6d5
    padding-bottom 2.48rem
    nav 
      margin 0 auto
      background #e8edeb
      border-radius 0 0 0.2rem 0.2rem
      align-items center
      width 4rem
      height 1.2rem
      display flex
      span 
        flex 1
        text-align center
        font-size 14px
        cursor pointer
        &:first-of-type
          border-right 1px solid #a6a6a6
        &.active
          color #5570a6
          font-weight bold
    .person
      float left
      display flex
      position relative
      margin-left 24px
      margin-top 4px
      .icon
        position absolute
        font-size 29px
        left -16px
        background #1296db
        color #ffffff
        border-radius 50%
        overflow hidden
      p
        background #ffffff
        font-size 12px
        padding 2px 10px 2px 16px
        border-radius 4px
        span:first-of-type
          color #bd1313
        span 
          display block
    .message
      text-align center
      margin-top 0.96rem
      color #ffffff
      .img
        width 1.16rem
        margin 0 auto
        img 
          width 100%
      p
        margin-top 0.16rem
      p:nth-of-type(1)
        font-size 0.48rem
      p:nth-of-type(2)
        font-size 0.52rem
      p:nth-of-type(3)
        font-size 0.72rem
    .messagebottom
      font-size 0.48rem
      color #ffffff
      padding-left 0.96rem
      line-height 0.72rem
    .btn
      float right
      span 
        display block
        background #526ca3
        color #ffffff
        font-size 0.48rem
        text-align center
        border-radius 0.12rem
        padding 0.16rem 0.4rem
        margin-bottom 0.4rem
        cursor pointer
  .rewardmain
    .rewarditem
      padding 0 0.5rem
      font-size 0.56rem
      display flex
      justify-content space-between
      align-items center
      height 1.2rem
      border-bottom 1px solid #d2d2d2
      font-weight bold
      &:last-of-type
        color #526ca3
        font-size 0.48rem
        font-weight normal
    .view-wrapper
      position fixed
      width 100%
      max-width 400px
      top 13.36rem
      bottom 0px
      padding 0 0.5rem
    .itemp
      display flex
      font-size 0.48rem
      height 1.2rem
      border-bottom 0.04rem solid #d2d2d2
      align-items center
      cursor pointer
      span:first-of-type
        flex 1
      .icon
        color #d2d2d2
        &.active
          transform rotate(90deg)
    .itemlist
      transition all 0.5s
      overflow hidden
      li 
        display flex
        font-size 0.48rem
        height 1.2rem
        border-bottom 0.04rem solid #d2d2d2
        align-items center
        justify-content space-between
        padding-right 0.6rem
</style>

<template>
  <div class="invitationreward">
    <myheader left="prev" center="VIP会员"></myheader>
    <div class="rewardtop">
      <nav>
        <span :class="change?'active':''" @click="change = true">总</span>
        <span :class="change?'':'active'" @click="change = false">月</span>
      </nav>
      <div class="person">
        <span class="icon icon-750-user"></span>
        <p>
          <span>{{is_super?'VIP':''}}会员</span>
          <span>{{userInfo.nick}}</span>
        </p>
      </div>
      <div class="message">
        <div class="img">
          <img src="../assets/images/medal.png" alt="">
        </div>
        <p>第{{thisdata.no}}名</p>
        <p>收益（EOS）</p>
        <p>{{thisdata.sum}}</p>
      </div>
      <div class="messagebottom">
        <p>1.直接邀请人收益X10%</p>
        <p>2.间接邀请人收益X5%</p>
      </div>
      <div class="btn">
        <span @click="$router.push('/account')">提现</span>
        <span @click="$router.push('/invitationpromote')">邀请好友</span>
      </div>
    </div>
    <div class="rewardmain">
      <p class="rewarditem"><span>我邀请的好友</span><span>{{firend.length}}人</span></p>
      <p class="rewarditem"><span>用户名</span><span>提供收益（EOS）</span></p>
      <div class="view-wrapper">
        <cube-scroll
          ref="scroll"
          :data="firend"
          :options="options"
          @pulling-up="onPullingUp">
          <div v-for="(data,index) in firend" :key="index" class="item">
            <p class="itemp" @click="opento(index)"><span>{{data.nick}}</span><span>{{data.sum}}/{{data.num}}笔</span><i class="icon icon-pagenext" :class="thisopen==index?'active':''"></i></p>
              <ul class="itemlist" :style="{height:thisopen==index?`${30*data.content.length}px`:'0px'}">
                <li v-for="(item,index) in data.content" :key="index">
                  <span>{{item.nick}} </span><span>{{item.sum}}/{{item.num}}笔</span>
                </li>
              </ul>
          </div>
        </cube-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import {get} from '@api/index'
import {mapGetters,mapMutations} from 'vuex';
import {SET_LOADING} from "@store/mutation-types"
export default {
  activated(){
    this.SET_LOADING(true)
    this.getdata(1)
  },
  data(){
    return{
      change:true,
      is_super:'',
      month:{},
      total:{},
      firend:[],
      options:{
        scrollbar: true,
        pullUpLoad:{
          more:'正在加载',
          noMore:'没有更多的了'
        }
      },
      page:1,
      max_page:1,
      thisopen:null,
    }
  },
  components:{
    myheader
  },
  computed:{
    ...mapGetters([
      "userInfo",
    ]),
    thisdata(){
      let data
      if(this.change){
        data = {
          no:this.total.no,
          sum:this.total.sum
        }
      }else{
        data = {
          no:this.month.no,
          sum:this.month.sum
        }
      }
      return data
    }
  },
  methods: {
    getdata(page){
      get('/inviation_friend_ranking',{page:page}).then(json=>{
        this.SET_LOADING(false)
        const {is_super,total,month,firend,page,max_page} = json.data;
        if(page==1){
          this.is_super = is_super
          this.total = total
          this.month = month
          this.firend = firend
        }else{
          this.firend.push(...firend)
        }
        this.page = page
        this.max_page = max_page
      })
    },
    onPullingUp() {
      if(this.page>=this.max_page){
        this.$refs.scroll.forceUpdate()
      }else{
        this.getdata(this.page)
      }
    },
    opento(id) {
      if(this.thisopen==id){
        this.thisopen = -1
      }else{
        this.thisopen = id
      }
    },
    ...mapMutations({
      SET_LOADING
    }),
  }
}
</script>
