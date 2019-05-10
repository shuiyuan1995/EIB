<style lang="stylus" scoped>
  .sliderbox
    position relative
    width 12rem
    height 1.6rem
    margin 0 auto
    margin-bottom 1.24rem
    background-color #e8e8e8
    box-shadow 1px 1px 5px rgba(0,0,0,0.2)
  .bgColor
    position  absolute
    left 0
    top 0
    width 1.6rem
    height  1.6rem
  .txt
    position  absolute
    width  100%
    height  1.6rem
    line-height  1.6rem
    font-size  0.48rem
    color  #000
    text-align  center
  .slider
    position  absolute
    left 0
    top 0
    width  1.6rem
    height  1.6rem
    border  1px solid #ccc
    background  #fff
    text-align  center
    cursor  move
    i 
      position  absolute
      top 50%
      left 50%
      transform  translate(-50%,-50%)
      &.active
        color green
</style>

<template>
  <div class="sliderbox">
    <div class="bgColor" :style="bgstyle"></div>
    <div class="txt" >{{txt}}</div>
    <div ref="slider" id="slider" class="slider" :style="slstyle"><i class="iconfont" :class="iconclass"></i></div>
  </div>
</template>

<script>
import {getEle} from "@common/js";
export default {
  mounted(){
    this.isSuccess = false
    // this.slider = getEle('.slider');
    this.slider = this.$refs.slider;
    let box = getEle(".sliderbox")
    // 鼠标需要移动距离
    this.successMoveDistance = box.offsetWidth- this.slider.offsetWidth;
    this.slider.addEventListener('touchstart', this.mousedownHandler, false);
    this.slider.addEventListener('mousedown', this.mousedownHandler, false);
  },
  data(){
    return{
      downX:0,
      bgstyle:{
        width:'0px',
        background:'lightblue'
      },
      slstyle:{
        left:'0px'
      },
      txt:'滑动验证',
      iconclass:'icon-double-right',
      isSuccess:false,
    }
  },
  methods:{
    // 手指点下
    mousedownHandler(e){
      e = e || window.event || e.which;
      this.downX = e.type=='mousedown'?e.clientX:e.changedTouches[0].clientX;
      this.bgstyle.transition = "";
      this.slstyle.transition = "";
      this.slider.addEventListener('touchmove', this.mousemoveHandler, false);
      document.addEventListener('mousemove', this.mousemoveHandler, false);
      this.slider.addEventListener('touchend', this.mouseupHandler, false);
      document.addEventListener('mouseup', this.mouseupHandler, false);
    },
    // 手指移动事件
    mousemoveHandler(e){
      e = e || window.event || e.which;
      let moveX = e.type=='mousemove'?e.clientX:e.changedTouches[0].clientX;
      let offsetX = this.getOffsetX(moveX - this.downX,0,this.successMoveDistance);
      this.bgstyle.width = offsetX + "px";
      this.slstyle.left = offsetX + "px";
      if(offsetX == this.successMoveDistance){
        this.success();
      }
      e.preventDefault();
    },
    // 手指放开事件
    mouseupHandler(){
      if(!this.isSuccess){
        this.bgstyle.width = 0 + "px";
        this.slstyle.left = 0 + "px";
        this.bgstyle.transition = "width 0.3s linear";
        this.slstyle.transition = "left 0.3s linear";
      }
      document.removeEventListener('mousemove', this.mousemoveHandler)
      document.removeEventListener('mouseup', this.mouseupHandler)
      this.slider.removeEventListener('touchmove', this.mousemoveHandler)
      this.slider.removeEventListener('touchend', this.mouseupHandler)
    },
    // 鼠标当前需要移动多少距离
    getOffsetX(offset,min,max){
      if(offset < min){
        offset = min;
      }else if(offset > max){
        offset = max;
      }
      return offset;
    },
    // 成功事件
    success(){
      this.isSuccess = true;
      this.txt = "解锁成功";
      this.bgstyle.background = 'lightgreen'
      this.slider.className = "slider active";
      this.iconclass = 'icon-xuanzhong'
      //滑动成功时，移除鼠标按下事件和鼠标移动事件
      document.removeEventListener('mousemove', this.mousemoveHandler)
      document.removeEventListener('mouseup', this.mouseupHandler)
      this.slider.removeEventListener('touchmove', this.mousemoveHandler)
      this.slider.removeEventListener('touchend', this.mouseupHandler)
    },
    // 重置滑块
    resetslider(){
      this.isSuccess = false
      this.bgstyle.width = 0 + "px";
      this.slstyle.left = 0 + "px";
      this.bgstyle.transition = "width 0.3s linear";
      this.slstyle.transition = "left 0.3s linear";
      this.txt = "滑动验证";
    }
  }
}
</script>
