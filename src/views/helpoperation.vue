<style>
  .helpoperationmain{
    padding: 0.6rem 1rem;
  }
  .helpoperationmain p{
    font-size: 0.6rem;
    line-height: 1.5em;
  }
  .helpoperationmain img{
    margin: 0.16rem 0;
  }
  .list-paddingleft-1{
    padding-left: 1em;
  }
  .list-num1-paddingleft-1{
    padding-left: 1em;
  }
</style>

<template>
  <div class="helpoperation">
    <myheader left="prev" :center="$route.params.title"></myheader>
    <div class="helpoperationmain" v-html="$route.params.data"></div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@components/myheader.vue'
import myfooter from '@components/myfooter.vue'
import {mapGetters} from 'vuex';
export default {
  components:{
    myheader,
    myfooter
  },
  computed:{
    ...mapGetters([
      "helpdata"
    ]),
  }
}
</script>
