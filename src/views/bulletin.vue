<style lang="stylus" scoped>
  .bulletin
    padding-top 44px
  .tablenav
    position fixed
    top 1.8rem
    width 100%
    max-width 400px
    display flex
    height 1.6rem
    align-items center
    border-bottom 2px solid #526ca3
    span 
      flex 1
      text-align center
      line-height 1.6rem
      font-size 0.6rem
      color #ffffff
      cursor pointer
      &.active
        color #8c3eb3
        border-bottom 2px solid #8c3eb3
  .tablelist
    margin-top 1.68rem
    li
      position relative
      border-bottom 0.06rem solid #526ca3
      display flex
      align-items center
      height 1.6rem
      font-size 0.56rem
      padding-left 1.2rem
      padding-right 0.52rem
      justify-content space-between
      cursor pointer
      color #ffffff
      &:before
        position absolute
        left 0.6rem
        content ''
        width 0.24rem
        height 0.24rem
        background #8c3eb3
        border-radius 50%
      span:first-of-type
        width 7.52rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
  .tablelist1
    margin-top 1.68rem
    &>div
      display flex
      height 2.4rem
      border-bottom 0.06rem solid #dddada
      align-items center
      padding 0 0.52rem
      cursor pointer
    .list1-l
      width 1.6rem
      height 1.6rem
      background #8c3eb3
      border-radius 50%
      margin-right 0.8rem
      text-align center
      line-height 1.6rem
      .icon
        font-size 1.16rem
        color #ffffff
    .list1-c
      flex 1
      color #ffffff
      p:first-of-type
        font-size 0.56rem
      p:last-of-type
        font-size 0.48rem
        margin-top 0.16rem
    .icon-pagenext
      font-size 1.04rem
      color #cccccc
</style>

<template>
  <div class="bulletin">
    <myheader left="prev" center="消息及公告"></myheader>
    <div class="tablenav">
      <span @click="changetable(false)" :class="thisbulletin?'':'active'">公告</span>
      <span @click="changetable(true)" :class="thisbulletin?'active':''">消息</span>
    </div>
    <ul class="tablelist" v-show="!thisbulletin">
      <li v-for="(item,index) in notice" :key="index" @click="go(item)">
        <span>{{item.title}}</span><span>{{item.time}}</span>
      </li>
    </ul>
    <div class="tablelist1" v-show="thisbulletin">
      <div @click="$router.push('/bulletinnotice/0')">
        <div class="list1-l">
          <i class="icon icon-touzi"></i>
        </div>
        <div class="list1-c">
          <p>通知</p>
          <p>查看站内通知</p>
        </div>
        <i class="icon icon-pagenext"></i>
      </div>
      <div @click="$router.push('/bulletinnotice/1')">
        <div class="list1-l">
          <i class="icon icon-yonghu"></i>
        </div>
        <div class="list1-c">
          <p>私信</p>
          <p>查看我的私信</p>
        </div>
        <i class="icon icon-pagenext"></i>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {get} from '@api/index'
import {changedata} from '@common/js/index'
import {mapMutations} from 'vuex';
import {SET_USER_DATA,SET_LOADING} from "@store/mutation-types"
export default {
  activated(){
    this.SET_LOADING(true)
    this.getdata()
  },
  components:{
    myheader,
    myfooter
  },
  data(){
    return{
      thisbulletin:false,
      notice:[],
    }
  },
  methods:{
    getdata(){
      get('/message').then(json=>{
        this.SET_LOADING(false)
        let {notice,user_data} = json.data
        this.notice = notice.map(val=>{
          return {
            ...val,
            time:changedata(val.time*1000,'yyyy-MM-dd')
          }
        })
        if(user_data.notify){
          user_data.notify = user_data.notify.map(val=>{
            return {
              ...val,
              time:changedata(val.time*1000,'MM-dd hh:mm')
            }
          })
        }
        if(user_data.message){
          user_data.message = user_data.message.map(val=>{
            return {
              ...val,
              time:changedata(val.time*1000,'MM-dd hh:mm')
            }
          })
        }
        this.SET_USER_DATA(user_data)
      })
    },
    changetable(b){
      this.thisbulletin = b
    },
    // 路由传参
    go(item){
      this.$router.push({
        name: 'bulletinlist',
        params: {
          id: item.id, title:item.title
        }
      })
    },
    ...mapMutations({
      SET_USER_DATA,
      SET_LOADING
    }),
  }
}
</script>
