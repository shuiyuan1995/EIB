<style lang="stylus" scoped>
  h2
    border-bottom 1px solid #e5e5e5
    height 1.76rem
    line-height 1.76rem
    font-size 0.64rem
    color #5570a6
    padding 0 0.44rem
    .icon
      display inline-block
      width 1.2rem
      height 1.2rem
      border 0.08rem solid #526ca3
      border-radius 50%
      text-align center
      line-height 1.2rem
      font-size 0.72rem
      margin-right 0.28rem
  h3,p
    padding 0 0.44rem
    font-size 0.52rem
    line-height 0.72rem
  h3
    margin-bottom 0.24rem
    margin-top 0.6rem
  .plast
    border-bottom 1px solid #e5e5e5
    padding-bottom 0.3rem
    margin-bottom 0.3rem
  form
    padding 0.4rem 0.44rem 0
    p
      font-size 12px
      color #b30303
  .cubeinput
    margin-bottom 0.4rem
  .btn
    margin-top 1rem
    background #9bb6d3
</style>

<template>
  <div class="cooperation">
    <myheader left="prev" center="招商合作"></myheader>
    <h2><i class="icon icon-hezuo-"></i>合作优势</h2>
    <h3>合作公司：</h3>
    <p>1.不用担心资金，当天即可完成</p>
    <p>2.降低风险，增加利润，解决资金链问题</p>
    <p class="plast">3.增加一项安全有利的业务</p>
    <h2><i class="icon icon-hezuo-"></i>合作申请</h2>
    <form>
      <cube-input class="cubeinput" v-model="value" placeholder="公司性质"></cube-input>
      <cube-input class="cubeinput" v-model="value1" placeholder="公司名称"></cube-input>
      <cube-input class="cubeinput" v-model="value2" placeholder="联系人"></cube-input>
      <cube-input class="cubeinput" v-model="value3" placeholder="联系电话或邮箱"></cube-input>
      <cube-input class="cubeinput" v-model="value4" placeholder="所在地区"></cube-input>
      <p>内容务必真实，我们将尽快电话回复您！</p>
      <cube-button class="btn" @click="goto">提交申请</cube-button>
    </form>
    <myfooter></myfooter>
  </div>
</template>

<script>
import {post} from '@api/index'
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      value:'',
      value1:'',
      value2:'',
      value3:'',
      value4:'',
    }
  },
  components:{
    myheader,
    myfooter
  },
  computed:{
    ...mapGetters([
      "userInfo"
    ]),
  },
  methods:{
    goto(){
      let that = this
      if(!this.userInfo.nick){
        this.$createToast({
          txt: `请先登录`,
          type: 'txt',
          time: 1000,
          onTimeout(){
            that.$router.push('/login')
          }
        }).show()
        return false
      }
      if(!this.value||!this.value1){
        this.$createToast({
          txt: `公司信息不能为空`,
          type: 'txt',
          time: 1000,
        }).show()
        return false;
      }
      if(!this.value2||!this.value3){
        this.$createToast({
          txt: `联系人与电话不能为空`,
          type: 'txt',
          time: 1000,
        }).show()
        return false;
      }
      let data = {
        nature:this.value,
        name:this.value1,
        people:this.value2,
        phone:this.value3,
        region:this.value4
      }
      post('/security/cooperation',data).then(()=>{
        this.$createToast({
          txt: `发送成功，我们将尽快联系您`,
          type: 'txt',
          time: 1000,
          onTimeout(){
            that.$router.push('/')
          }
        }).show()
      })
    }
  }
}
</script>
