<style lang="stylus" scoped>
  .accounttable
    .tabletitle
      color #ffffff
      font-size 12px
      margin-top 10px
      display flex
      justify-content space-between
      align-items center
      .cubecheckbox
        padding 0px
        color #ffffff
    ul
      border-top 1px solid #526ca3
      li
        display flex
        border-bottom 1px solid #526ca3
        color #ffffff
        font-size 0.48rem
        height 0.88rem
        line-height 0.88rem
      span 
        flex 1
        &:last-of-type
          color #ffffff
</style>

<template>
  <div class="accounttable">
    <div class="tabletitle">
      <span>资产明细</span>
      <cube-checkbox v-model="checked" class="cubecheckbox">
        隐藏小额币种
      </cube-checkbox>
    </div>
    <ul>
      <li v-for="(value, key, index) in money" :key="index" v-show="!(value.small&&small)">
        <span>{{key}}</span>
        <span>{{Math.floor(value.money * 10000) / 10000}}</span>
        <span>冻结 {{value.frozen}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { get } from "@api/index";
export default {
  activated(){
    this.getdata()
  },
  data() {
    return {
      money:{},
      checked:false,
    }
  },
  computed:{
    small(){
      return this.checked
    }
  },
  methods:{
    getdata(){
      get('/per_order').then(json=>{
        this.money = json.data
      })
    },
  }
}
</script>