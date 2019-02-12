var mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  centeredSlides: true,
  on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      } 
    }
});

var startScroll, touchStart, touchCurrent;
mySwiper.slides.on('touchstart', function (e) { 
  console.log(e);
  startScroll = this.scrollTop;
  touchStart = e.targetTouches[0].pageY;
}, true);
mySwiper.slides.on('touchmove', function (e) { 
  touchCurrent = e.targetTouches[0].pageY;
  var touchesDiff = touchCurrent - touchStart;
  var slide = this;
  var onlyScrolling =
    (slide.scrollHeight > slide.offsetHeight) &&
    (
      (touchesDiff < 0 && startScroll === 0) ||
      (touchesDiff > 0 && startScroll === (slide.scrollHeight - slide.offsetHeight)) ||
      (startScroll > 0 && startScroll < (slide.scrollHeight - slide.offsetHeight))
    );
  if (onlyScrolling) {
    e.stopPropagation();
  }
}, true);
mySwiper.on('slideChangeTransitionEnd', function () {
  if (this.activeIndex == (mySwiper.$wrapperEl[0].children.length - 1)) {
    $('.swiper-arrow').hide();
  } else {
    $('.swiper-arrow').show();
  }
})

$(function(){
        setTimeout(function(){
          $("#bubble").show();
        },1000)

        /*第二屏的效果*/
        setTimeout(function(){
          $(".call_nine").show();
          $(".insert_number").find("span").eq(0).show();
        },3500)
        

        setTimeout(function(){
          $(".call_five").show();
          $(".insert_number").find("span").eq(1).show();
        },4500)

        setTimeout(function(){
          $(".call_zero").show();
          $(".insert_number").find("span").eq(2).show();
        },5500)

        setTimeout(function(){
          $(".call_one").show();
          $(".insert_number").find("span").eq(3).show();
        },6500)

        setTimeout(function(){
          $(".call_three").show();
          $(".insert_number").find("span").eq(4).show();
          $(".insert_number").find("span").eq(5).show();     
          $("#imgleft").show();     
        },7500)

        setTimeout(function(){   
          $("#imgleft").show();     
        },8500)

        setTimeout(function(){   
          $("#imgright").show();     
        },9500)

        setTimeout(function(){   
          $("#calltel").slideDown();     
        },10000)

        /*第三屏动画 */

        setTimeout(function(){   
           $(".f_95013number").show();     
         },10500)
         setTimeout(function(){   
           $(".dialog1").show();     
         },10600)
         setTimeout(function(){   
           $(".dialog2").show();     
         },10700)
         setTimeout(function(){   
           $(".dialog3").show();     
         },10800)
})