<style lang="stylus" scoped>
  .bulletin
    padding-top 1.76rem
  .tablenav
    position fixed
    top 1.4rem
    width 100%
    display flex
    height 1.6rem
    align-items center
    background #fefefe
    border-bottom 2px solid #bfbfbf
    span 
      flex 1
      text-align center
      line-height 1.6rem
      font-size 0.6rem
      color #010101
      &.active
        background #a1bedb
        color #fefefe
  .tablelist
    margin-top 34px
    li
      position relative
      border-bottom 0.06rem solid #dddada
      display flex
      align-items center
      height 1.6rem
      font-size 0.56rem
      padding-left 1.2rem
      padding-right 0.52rem
      justify-content space-between
      &:before
        position absolute
        left 0.6rem
        content ''
        width 0.24rem
        height 0.24rem
        background #526ca3
        border-radius 50%
      span:first-of-type
        width 7.52rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
  .tablelist1
    margin-top 34px
    &>div
      display flex
      height 2.4rem
      border-bottom 0.06rem solid #dddada
      align-items center
      padding 0 0.52rem
    .list1-l
      width 1.6rem
      height 1.6rem
      border solid 1px #526ca3
      border-radius 50%
      margin-right 0.8rem
      text-align center
      line-height 1.6rem
      .icon
        font-size 1.16rem
        color #5570a6
    .list1-c
      flex 1
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
        <div class="list1-l"></div>
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
import {SET_USER_DATA} from "@store/mutation-types"
export default {
  created(){
    get('/login/message').then(json=>{
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
      SET_USER_DATA
    }),
  }
}
</script>
