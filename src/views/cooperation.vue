<style lang="stylus" scoped>
  h2
    border-bottom 1px solid $border-small
    height 1.76rem
    line-height 1.76rem
    font-size 0.64rem
    color #ffffff
    padding 0 0.44rem
    .icon
      display inline-block
      width 1.2rem
      height 1.2rem
      border 0.08rem solid #ffffff
      border-radius 50%
      text-align center
      line-height 1.2rem
      font-size 0.72rem
      margin-right 0.28rem
  h3,p
    padding 0 0.44rem
    font-size 0.52rem
    line-height 0.72rem
    color #ffffff
  h3
    margin-bottom 0.24rem
    margin-top 0.6rem
  .plast
    border-bottom 1px solid $border-small
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
    background $btn-background
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
      <cube-input class="cubeinput" v-model="name" placeholder="联系人"></cube-input>
      <cube-validator ref="validator0" class="validator" v-model="valid[0]" :model="name" :rules="rules" :messages="messages"></cube-validator>
      <cube-input class="cubeinput" v-model="adress" placeholder="所在地区"></cube-input>
      <cube-validator ref="validator1" class="validator" v-model="valid[1]" :model="adress" :rules="rules" :messages="messages1"></cube-validator>
      <cube-input class="cubeinput" v-model="phone" placeholder="联系电话"></cube-input>
      <cube-validator ref="validator2" class="validator" v-model="valid[2]" :model="phone" :rules="rules" :messages="messages2"></cube-validator>
      <cube-input class="cubeinput" v-model="email" placeholder="联系邮箱"></cube-input>
      <cube-validator ref="validator3" class="validator" v-model="valid[3]" :model="email" :rules="rules1" :messages="messages3"></cube-validator>
      <cube-input class="cubeinput" v-model="object" placeholder="项目名字"></cube-input>
      <cube-validator ref="validator4" class="validator" v-model="valid[4]" :model="object" :rules="rules" :messages="messages4"></cube-validator>
      <cube-input class="cubeinput" v-model="networkadress" placeholder="网站地址"></cube-input>
      <cube-validator ref="validator5" class="validator" v-model="valid[5]" :model="networkadress" :rules="rules" :messages="messages5"></cube-validator>
      <cube-input class="cubeinput" v-model="token" placeholder="代币token"></cube-input>
      <cube-validator ref="validator6" class="validator" v-model="valid[6]" :model="token" :rules="rules" :messages="messages6"></cube-validator>
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
import {mapGetters,mapMutations} from 'vuex';
import {SET_LOADING} from "@store/mutation-types"
export default {
  data(){
    return{
      name:'',
      adress:'',
      phone:'',
      email:'',
      object:'',
      networkadress:'',
      token:'',
      valid:['undefined','undefined','undefined','undefined','undefined','undefined','undefined'],
      rules:{
        required: true,
      },
      rules1:{
        required: true,
        type: 'email',
      },
      messages:{
        required:'姓名不能为空',
      },
      messages1:{
        required:'地区不能为空',
      },
      messages2:{
        required:'电话不能为空',
      },
      messages3:{
        required:'邮箱不能为空',
      },
      messages4:{
        required:'项目不能为空',
      },
      messages5:{
        required:'网站不能为空',
      },
      messages6:{
        required:'代币token不能为空',
      },
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
      const p1 = this.$refs.validator0.validate()
      const p2 = this.$refs.validator1.validate()
      const p3 = this.$refs.validator2.validate()
      const p4 = this.$refs.validator3.validate()
      const p5 = this.$refs.validator4.validate()
      const p6 = this.$refs.validator5.validate()
      const p7 = this.$refs.validator6.validate()
      Promise.all([p1, p2, p3, p4, p5, p6, p7]).then(() => {
        if (this.valid.every(item => item)) {
          let data = {
            name:this.name,
            location:this.adress,
            phone:this.phone,
            email:this.email,
            project:this.object,
            url:this.networkadress,
            token:this.token,
          }
          this.SET_LOADING(true)
          post('/cooperation',data).then(()=>{
            this.SET_LOADING(false)
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
      })
    },
    ...mapMutations({
      SET_LOADING
    }),
  }
}
</script>
