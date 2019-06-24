<style lang="stylus" scoped>
  .accountsetting
    bottom 0rem
    color #ffffff
  .settingnav
    border-bottom 0.06rem solid #1a2879
    display flex
    font-size 0.64rem
    height 1.2rem
    align-items center
    margin-top 0.24rem
    span
      flex 1
      text-align center
      line-height 1.2rem
      cursor pointer
      &.active
        color #8c3eb3
        border-bottom 0.06rem solid #8c3eb3
  .settingitem
    .itemtop
      padding 0.48rem 0.84rem 0.4rem 0.64rem
      font-size 0.56rem
    p:not(.first)
      line-height 0.8rem
    .first
      display flex
      justify-content space-between
      align-items center
      i 
        color #b20202
      span:last-of-type
        background-color #8c3eb3
        border-radius 0.1rem
        color #ffffff
        padding 0.24rem 0.48rem
        cursor pointer
    .tablenav
      display flex
      font-size 0.56rem
      height 1.32rem
      align-items center
      border-bottom 1px solid #5570a6
      color #5570a6
      span 
        flex 1
        text-align center
        line-height 1.32rem
    .itemtable
      border-top 12px solid #8c3eb3
    .view-wrapper
      position absolute
      width 100%
      top 9.44rem
      bottom 0rem
      .item
        display flex
        font-size 12px
        height 30px
        border-bottom 1px solid #e5e5e5
        align-items center
        span 
          flex 1
          text-align center
        .blue
          color #5570a6
        .red
          color #b40000
  .settingitem1
    .item1top
      display flex
      justify-content space-between
      padding 0 1.12rem 0 0.76rem
      font-size 0.64rem
      align-items center
      height 2.4rem
      margin-top 0.4rem
      margin-bottom 0.8rem
      .icon
        color #ffffff
        &:before
          color #8c3eb3
          margin-right 0.24rem
      .topbtn
        font-size 0.56rem
        padding 0.24rem 0.56rem
        border-radius 0.84rem
        background #8c3eb3
        color #ffffff
        cursor pointer
    .item1table
      padding 0 0.68rem 0 0.6rem
    .item1title
      display flex
      align-items center
      background #8c3eb3
      font-size 0.56rem
      height 1.6rem
      span 
        flex 1
        text-align center
    .item1info
      display flex
      font-size 0.56rem
      align-items center
      border-bottom 0.04rem solid #526ca3
      padding 0.16rem 0
      span 
        flex 1
        text-align center
      .cubeswitch
        padding-left 1.2rem
  .investmentgopay
    margin 0.56rem 0
    .passwordDiv
      display flex
      justify-content center
      align-items center
      width 12.64rem
      margin 0 auto
      .passtitle
        font-size 0.56rem
        margin-right 0.8rem
    .passwordLabel
      height 30px
      clear both
      li
        float left
        width 30px
        height 30px
        line-height 30px
        text-align center
        border 1px solid #2440a8
        margin 0 0.16rem
        &.active
          border 1px solid #8c3eb3
    input 
      width 1px
      height 1px
      opacity 0
      border 0
  .btn
    width 90%
    margin 6px auto 0
    background #8c3eb3
</style>

<template>
  <div class="accountsetting">
    <myheader left="prev" center="投资管理"></myheader>
    <div class="settingnav">
      <span :class="thisactive?'active':''" @click="thisactive=true">投资记录</span>
      <span :class="thisactive?'':'active'" @click="thisactive=false">自动投标设置</span>
    </div>
    <div class="settingitem" v-show="thisactive">
      <div class="itemtop">
        <p class="first"><span>累计投资：<i>{{cumulative.num}}</i>笔/<i>{{cumulative.money}}</i> EOS</span><span @click="$router.push('/investment')">立即投资</span></p>
        <p>待收本金：{{collected.num}}笔/{{collected.money}} EOS</p>
        <p>发放利息：{{distribute.num}}笔/{{distribute.money}} EOS</p>
        <p>待收利息：{{coll_record.num}}笔/{{coll_record.money}} EOS</p>
      </div>
      <div class="itemtable">
        <div class="tablenav">
          <span>投资项目</span>
          <span>状态</span>
          <span>投资金额</span>
          <span>还款日期</span>
        </div>
        <div class="view-wrapper">
          <cube-scroll ref="scroll" :data="thisitems" 
            :options="options" 
            @pulling-up="onPullingUp">
            <div class="item" v-for="(item,index) in thisitems" :key="index" @click="goto(item.info)">
              <span>{{item.up}}</span>
              <span class="blue">{{item.state}}</span>
              <span>{{item.name}}</span>
              <span class="red">{{item.end}}</span>
            </div>
          </cube-scroll>
        </div>
      </div>
    </div>
    <div class="settingitem1" v-show="!thisactive">
      <div class="item1top">
        <span class="icon icon-set">委托投资（自动投资）</span>
        <span class="topbtn" @click="open">全部开启</span>
      </div>
      <ul class="item1table">
        <li class="item1title">
          <span>种类</span>
          <span>金额</span>
          <span>自动投资</span>
        </li>
        <li class="item1info" v-for="(item,key,index) in listval" :key="index">
          <span>{{key}}</span>
          <span>{{Math.floor(item.money*10000)/10000}}</span>
          <span><cube-switch :value="item.state" class="cubeswitch" v-model="item.state"></cube-switch></span>
        </li>
      </ul>
      <div class="investmentgopay">
        <div class="passwordDiv">
          <span class="passtitle">支付密码</span>
          <label for="ipt" class="passwordLabel">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </label>
          <input @focus="onfocus" @input="oninput" @blur="onblur" v-model="value" type="password" id="ipt" maxlength="6" >
        </div>
      </div>
      <cube-button class="btn" @click="gozidong">确定修改</cube-button>
    </div>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {mapGetters,mapMutations} from 'vuex';
import {get,post} from '@api/index'
import {changedata,getEles} from '@common/js'
import {SET_AOTO,SET_LOADING,SET_THIS_BIAO} from "@store/mutation-types"
export default {
  activated(){
    // 复制自动投资管理列表
    this.listval = JSON.parse(JSON.stringify(this.aoto));
    this.getdata(1)
  },
  data(){
    return{
      // 代收本金
      collected:'',
      // 累计投资
      cumulative:'',
      // 发放利息
      distribute:'',
      // 代收利息
      coll_record:'',
      // 货币比列
      proportion:'',
      // 自动投资管理列表
      listval:[],
      // 自动更新配置
      options: {
      pullUpLoad: true,
      scrollbar: true,
      bounce:{
        top:false
      }
      },
      // 投资记录
      thisitems:[],
      // 切换管理
      thisactive:true,
      // 请求页面
      page:1,
      lastlist:false,
      // 支付密码
      value:'',
    }
  },
  components:{
    myheader,
    myfooter
  },
  computed:{
    ...mapGetters([
      "aoto"
    ]),
    // thistype(){
    //   return this.thedata[this.thisindex].title.substr(0,1)
    // }
  },
  methods: {
    // 进入密码框焦点
    onfocus(){
      var list = getEles('.passwordDiv ul li')
      if(this.value.length<6){
        list[this.value.length].classList.add("active")
      }else{
        list[5].classList.add("active")
      }
    },
    // 输入密码
    oninput(){
      var number = 6;
      var list = getEles('.passwordDiv ul li')
      if(this.value.length<6){
        list[this.value.length].classList.add("active")
      }
      for(var i = 0; i < number; i++) {
        if(this.value[i]) {
          list[i].innerHTML = '•'
          if(this.value.length<number){
            list[i].classList.remove("active")
          }
        } else {
          list[i].innerHTML = ''
          if(i>this.value.length){
            list[i].classList.remove("active")
          }
        }
      }
    },
    // 出去密码框焦点
    onblur(){
      var list = getEles('.passwordDiv ul li')
      if(this.value.length<6){
        list[this.value.length].classList.remove("active")
      }else{
        list[5].classList.remove("active")
      }
    },
    // 开启全部投标
    open(){
      for(var i in this.listval) {
        this.listval[i] = {
          ...this.listval[i],
          state:true,
        }
      }
    },
    // 上拉加载
    onPullingUp() {
      if(this.lastlist){
        this.$refs.scroll.forceUpdate();
      }else{
        this.getdata(this.page)
      }
    },
    getdata(){
      get('/investment_record',{page:this.page}).then(json=>{
        let {log} = json.data
        if(this.page==1){
          const {collected,cumulative,distribute,coll_record,proportion} = json.data
          this.collected = collected
          this.cumulative = cumulative
          this.distribute = distribute
          this.coll_record = coll_record
          this.proportion = proportion
        }
        // 判断是否为最后一页
        if(log.length<20){
          this.lastlist = true
        }else{
          this.page++
        }
        // 处理时间
        log = log.map(val=>{
          return {
            ...val,
            // up:changedata(val.up*1000,'MM-dd hh:mm'),
            end:changedata(val.end*1000,'yyyy-MM-dd'),
          }
        })
        // 添加数据
        this.thisitems = this.page==1?log:[
          ...this.thisitems,
          ...log
        ]
      })
    },
    // 提交自动登录
    gozidong(){
      // 密码验证
      if(this.value==''||this.value.length!=6){
        this.$createToast({
          txt: `请输入正确支付密码`,
          type: 'txt',
          time: 500,
        }).show()
        return false
      }
      let data = {
        pay_pwd:this.value,
        name:JSON.stringify(this.listval)
      }
      this.SET_LOADING(true)
      post('/set_auto',data).then(()=>{
        this.SET_LOADING(false)
        this.$createToast({
          txt: `修改成功`,
          type: 'txt',
          time: 500,
        }).show()
        this.value = ''
        this.oninput()
      }).catch(()=>{
        this.value = ''
        this.oninput()
      })
      this.SET_AOTO(this.listval)
    },
    goto(item){
      this.$router.push(`/investmentinfo/${item.id}`)
      let data = {
        type:item.type.substr(0,1),
        item:item
      }
      this.SET_THIS_BIAO(data)
    },
    ...mapMutations({
      SET_AOTO,
      SET_LOADING,
      SET_THIS_BIAO
    }),
  }
}
</script>
