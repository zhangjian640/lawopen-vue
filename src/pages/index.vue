<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../assets/images/index/slide1.png"/></div>
      <div class="swiper-slide"><img src="../assets/images/index/slide2.png"/></div>
      <div class="swiper-slide"><img src="../assets/images/index/slide3.png"/></div>
      <div class="swiper-slide"><img src="../assets/images/index/slide4.png"/></div>
      <div class="swiper-slide"><img src="../assets/images/index/slide5.png"/></div>
    </div>
    <div class="swiper-prev"><img src="../assets/images/index/icon_left.png"/></div>
    <div class="swiper-next"><img src="../assets/images/index/icon_right.png"/></div>
  </div>
</template>
<script>
  import swiper from '../assets/js/swiper.min.js'
  export default {
    mounted:function (){
      this.$nextTick(function(){
        setTimeout(function(){
          var swiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-next',
            prevButton: '.swiper-prev',
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            autoplayDisableOnInteraction : true,
            slidesPerView: 'auto',
            spaceBetween: 20,
            autoplay:1000,
            loop:true,
            coverflow: {
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1
            }
          });
        })
      },100)
    }
  }
</script>
<style lang="css" scoped>
  @import '../assets/css/swiper.min.css';
  .swiper-container {
    width: 1200px;
    height: 546px;
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    width: 250px;
    height: 546px;
  }
  .swiper-prev{
    width: 54px;
    height: 107px;
    position: absolute;
    left: 0;
    top:50%;
    z-index: 10;
    margin-top: -50px;
  }
  .swiper-next{
    width: 54px;
    height: 107px;
    position: absolute;
    right: 0;
    top:50%;
    z-index: 10;
    margin-top: -50px;
  }

</style>