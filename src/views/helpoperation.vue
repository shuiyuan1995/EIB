<style scoped>

</style>

<template>
  <div class="helpoperation">
    <myheader left="prev" center="投资流程"></myheader>
    <div class="helpoperationmain">
      <img :src="helpdata.operation" alt="" srcset="">
    </div>
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
