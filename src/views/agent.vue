<style lang="stylus" scoped>
  .agent
    color #ffffff
  form
    margin 0.8rem 0.8rem 0px
    label
      margin-bottom 0.4rem
      display block
    .er
      width 6.4rem
      height 6.4rem
      margin 0 auto
      img
        width 100%
        height 100%
    p
      font-size 12px
      text-align center
      margin 0.4rem 0
      &:last-of-type
        color #910000
        padding 0 0.88rem
        line-height 0.64rem
</style>

<template>
  <div class="agent">
    <myheader left="prev" center="超级代理人申请"></myheader>
    <form>
      <label>
        <cube-input v-model="name" placeholder="联系人姓名"></cube-input>
        <cube-validator ref="validator0" class="validator" v-model="valid[0]" :model="name" :rules="rules0" :messages="messages0"></cube-validator>
      </label>
      <label>
        <cube-input v-model="phone" placeholder="联系手机"></cube-input>
        <cube-validator ref="validator1" class="validator" v-model="valid[1]" :model="phone" :rules="rules0" :messages="messages1"></cube-validator>
      </label>
      <label>
        <cube-input v-model="email" placeholder="联系邮箱"></cube-input>
        <cube-validator ref="validator2" class="validator" v-model="valid[2]" :model="email" :rules="rules1" :messages="messages2"></cube-validator>
      </label>
      <label>
        <cube-input v-model="adress" placeholder="代理地区"></cube-input>
        <cube-validator ref="validator3" class="validator" v-model="valid[3]" :model="adress" :rules="rules0" :messages="messages3"></cube-validator>
      </label>
      <p>请向以下账号转300个EOS的代理费，请勿更改memo值。</p>
      <div class="er">
        <img src="https://admin.eosinvestmentbank.com/api/agent_img" alt="">
      </div>
      <p>注：若审核不通过，会将您的300个EOS返还,确认信息无误并转账后，同一地区最多两个代理人。</p>
      <cube-button class="registerbtn" @click="submit">确认提交</cube-button>
    </form>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {get,post} from '@api/index'
import {mapMutations} from 'vuex';
import {SET_LOADING} from "@store/mutation-types"
export default {
  data(){
    return{
      erimg:'',
      name:'',
      phone:'',
      email:'',
      adress:'',
      valid:['undefined','undefined','undefined','undefined'],
      rules0:{
        required: true,
      },
      rules1:{
        required: true,
        type: 'email',
      },
      messages0:{
        required:'姓名不能为空',
      },
      messages1:{
        required:'手机号不能为空',
      },
      messages2:{
        required:'邮箱不能为空',
        type:'请输入正确的邮箱'
      },
      messages3:{
        required:'代理地区不能为空',
      },
    }
  },
  components:{
    myheader,
    myfooter
  },
  methods:{
    // 上传数据
    submit(){
      const p1 = this.$refs.validator0.validate()
      const p2 = this.$refs.validator1.validate()
      const p3 = this.$refs.validator2.validate()
      const p4 = this.$refs.validator3.validate()
      Promise.all([p1, p2, p3, p4]).then(() => {
        if (this.valid.every(item => item)) {
          this.SET_LOADING(true)
          let data = {
            name:this.name,
            phone:this.phone,
            email:this.email,
            location:this.adress
          }
          post('/super_apply_add',data).then(()=>{
            this.SET_LOADING(false)
            this.name = '';
            this.phone = '';
            this.email = '';
            this.adress = '';
            this.$createToast({
              txt: '提交成功，请等待审核',
              type: 'txt',
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
