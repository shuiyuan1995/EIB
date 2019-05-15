<style lang="stylus" scoped>
  .accounttable
    .tabletitle
      color #aeaeae
      font-size 12px
      margin-top 10px
      display flex
      justify-content space-between
      align-items center
      .cubecheckbox
        padding 0px
        color #aeaeae
    ul
      border-top 1px solid #e5e5e5
      li
        display flex
        border-bottom 1px solid #e5e5e5
        color #010101
        font-size 0.48rem
        height 0.88rem
        line-height 0.88rem
      span 
        flex 1
        &:last-of-type
          color #b6b6b6
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
        <span>{{value.money}}</span>
        <span>冻结 {{value.frozen}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { get } from "@api/index";
export default {
  created(){
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