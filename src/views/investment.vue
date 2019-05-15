<style lang="stylus" scoped>
.investment
  bottom 0px
.investmentnav {
  display: flex;
  height: 1.2rem;
  color: #7eaad0;
  font-family: MicrosoftYaHei;
  font-size: 0.8rem;
  align-items: center;
  border-bottom: 2px solid #dee3e1;
  justify-content: center;
  margin-top: 0.64rem;

  div {
    flex: 1;
    text-align: center;
    line-height: 1.2rem;

    &.active {
      color: #5570a6;
      border-bottom: 2px solid #546fa5;
    }
  }
}

.view-wrapper {
  position: absolute;
  width: 100%;
  top: 84px;
  bottom: 0px;
  height auto
}

.item {
  height: 4rem;
  min-width: 15rem;
  border-bottom: 4px solid #f4f2ea;
  padding: 0 0.32rem;
  box-sizing: border-box;

  .item-top {
    border-bottom: 1px solid #bfbfbf;
    font-family: MicrosoftYaHei;
    font-size: 0.48rem;
    display: flex;
    align-items: center;
    padding: 0.24rem 0 0.04rem 0;

    span {
      width: 0.56rem;
      height: 0.56rem;
      background: #7eaad0;
      text-align: center;
      line-height: 0.56rem;
      color: #ffffff;
    }

    p {
      margin-left: 0.2rem;
    }
  }

  .item-center {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.48rem;
    height: 2.1rem;

    .itemcenterlist {
      flex: 1;
      text-align: center;
      color: #000000;

      p:first-of-type {
        margin-bottom: 0.16rem;
        color: #474747;
      }
    }
  }

  .item-botton {
    display: flex;
    justify-content: space-between;
    padding: 0 0.68rem;

    .bar {
      display: flex;
      align-items: center;
      font-size: 0.48rem;

      span {
        margin-left: 0.12rem;
      }
    }

    .bar-box {
      position: relative;
      width: 6rem;
      height: 0.24rem;
      background: #bfbac1;
      border-radius: 0.12rem;
    }

    .bar-info {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 0.24rem;
      border-radius: 0.12rem;
      background: #d4a79e;
    }

    .tenderbtn {
      width: 2.24rem;
      height: 0.6rem;
      background-color: #d4a79e;
      border-radius: 0.1rem;
      color: #ffffff;
      font-size: 0.48rem;
      line-height: 0.6rem;
      text-align: center;

      &.old {
        background-color: #f4f2ea;
        color: #373737;
      }
    }
  }
}
</style>

<template>
  <div class="investment">
    <myheader left="prev" center="投资列表"></myheader>
    <nav class="investmentnav">
      <div v-for="(item,index) in thedata" :key="index" :class="thisindex==index?'active':''" @click="change(index)">{{item.title}}</div>
    </nav>
    <div class="view-wrapper">
      <cube-scroll ref="scroll" :data="thisitems" :options="options" @pulling-up="onPullingUp">
        <div class="item" v-for="(item,index) in thisitems" :key="index">
          <div class="item-top">
            <span>{{thistype}}</span>
            <p>{{item.title}}</p>
          </div>
          <div class="item-center">
            <div class="itemcenterlist">
              <p>总额（{{item.need_coin}}）</p>
              <p>{{item.total}}</p>
            </div>
            <div class="itemcenterlist">
              <p>预期年回报率</p>
              <p>{{item.profit}}%</p>
            </div>
            <div class="itemcenterlist">
              <p>借款期限（天）</p>
              <p>{{item.day}}</p>
            </div>
            <div class="itemcenterlist">
              <p>剩余金额</p>
              <p>{{item.surplus}} {{item.need_coin}}</p>
            </div>
          </div>
          <div class="item-botton">
            <div class="bar">
              <div class="bar-box">
                <div
                  class="bar-info"
                  :style="{width:`${100-Math.floor(item.surplus/item.total*100)}%`}"
                ></div>
              </div>
              <span>{{100-Math.floor(item.surplus/item.total*100)}}%</span>
            </div>
            <span
            @click="goto(item)"
            class="tenderbtn"
            :class="item.state=='募集中'?'':'old'"
            >{{item.state}}</span>
          </div>
        </div>
        <!-- <myfooter></myfooter> -->
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import { get } from "@api/index";
import myheader from "@components/myheader.vue";
import myfooter from "@components/myfooter.vue";
import {mapMutations} from 'vuex';
import {SET_THIS_BIAO,SET_LOADING} from "@store/mutation-types"
export default {
  activated() {
    this.SET_LOADING(true)
    this.getdata()
  },
  data() {
    return {
      thisindex:0,
      thisitems: [],
      thedata:[],
      options: {
        pullUpLoad: {
          threshold:0,
          txt:{
            more:'正在加载',
            nomore:'没有了哦'
          }
        },
        bounce:false,
        scrollbar: true
      }
    };
  },
  components: {
    myheader,
    myfooter
  },
  computed:{
    thistype(){
      return this.thedata[this.thisindex].title.substr(0,1)
    }
  },
  methods: {
    // 上拉加载
    onPullingUp() {
      console.log(111)
      console.log(this.thedata[this.thisindex].page,this.thedata[this.thisindex].max_page)
      if(this.thedata[this.thisindex].page<this.thedata[this.thisindex].max_page){
        this.getdata(this.thedata[this.thisindex].page+1)
      }else{
        this.$refs.scroll.forceUpdate(false);
      }
    },
    // 获取数据
    getdata(page){
      if(page){
        get('/bid_list',{page:page,type:this.thedata[this.thisindex].type}).then(json=>{
          this.thedata[this.thisindex].page = json.data.page
          this.thedata[this.thisindex].data = [
            ...this.thedata[this.thisindex].data,
            ...json.data.data
          ]
          this.thisitems = this.thedata[this.thisindex].data
        })
      }else{
        get('/bid_list').then(json=>{
          this.SET_LOADING(false)
          this.thedata = json.data
          this.thisitems = this.thedata[this.thisindex].data
        })
      }
      
    },
    goto(item){
      this.$router.push('/investmentinfo')
      let data = {
        type:this.thistype,
        item:item
      }
      this.SET_THIS_BIAO(data)
    },
    change(index){
      this.thisindex = index
      this.thisitems = this.thedata[index].data
    },
    ...mapMutations({
      SET_THIS_BIAO,
      SET_LOADING
    }),
  }
};
</script>
