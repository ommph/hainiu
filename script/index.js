var index;
var mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  observer:true,
  observeParents:true,
  on:{
      init: function(){
        $("#bubble").show();
        $("#bubble").find("div").addClass("on");
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画        
        index = (this.activeIndex);
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); //动画只展现一次，去除ani类名
      } 
    }
});

var startScroll, touchStart, touchCurrent;
mySwiper.slides.on('touchstart', function (e) { 
  startScroll = this.scrollTop;
  touchStart = e.targetTouches[0].pageY;  
  console.log(touchStart);
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
mySwiper.on('slideChangeTransitionEnd', function () {  //slideChangeTransitionEnd切换结束时，告诉我现在是第几个slide
  if (this.activeIndex == (mySwiper.$wrapperEl[0].children.length - 1)) {    
    $('.swiper-arrow').hide();
  } else {
    $('.swiper-arrow').show();
   
  } 

  if(index==0){
    $("#bubble").show();
    $("#bubble").find("div").addClass("on");
    $(".f_95013number").hide(); 
    $(".f_95013number").removeClass("on");  
    $(".dialog1").hide();  
    $(".dialog1").removeClass("on");  
    $(".dialog2").hide();  
    $(".dialog2").removeClass("on");
    $(".dialog3").hide();  
    $(".dialog3").removeClass("on"); 
    $(".call_nine").hide();
    $(".call_nine").removeClass("on");
    $(".call_five").hide();
    $(".call_five").removeClass("on");
    $(".call_zero").hide();
    $(".call_zero").removeClass("on");
    $(".call_one").hide();
    $(".call_one").removeClass("on");
    $(".call_three").hide();
    $(".call_three").removeClass("on"); 
    $(".insert_number").find("span").eq(0).hide();
    $(".insert_number").find("span").eq(1).hide();
    $(".insert_number").find("span").eq(2).hide();
    $(".insert_number").find("span").eq(3).hide();
    $(".insert_number").find("span").eq(4).hide();
    $(".insert_number").find("span").eq(5).hide();
    $("#imgleft").hide(); 
    $("#imgright").hide(); 
    $("#calltel").hide();  
  }
  if(index==1){
    page2(); 
    $("#bubble").hide();
    $("#bubble").find("div").removeClass("on");

    $(".f_95013number").hide(); 
    $(".f_95013number").removeClass("on");  
    $(".dialog1").hide();  
    $(".dialog1").removeClass("on");  
    $(".dialog2").hide();  
    $(".dialog2").removeClass("on");
    $(".dialog3").hide();  
    $(".dialog3").removeClass("on"); 



    
  }

  if(index==2){
    page3();
    $("#bubble").hide();
    $("#bubble").find("div").removeClass("on");   
    
    $(".call_nine").hide();
    $(".call_nine").removeClass("on");
    $(".call_five").hide();
    $(".call_five").removeClass("on");
    $(".call_zero").hide();
    $(".call_zero").removeClass("on");
    $(".call_one").hide();
    $(".call_one").removeClass("on");
    $(".call_three").hide();
    $(".call_three").removeClass("on"); 
    $(".insert_number").find("span").eq(0).hide();
    $(".insert_number").find("span").eq(1).hide();
    $(".insert_number").find("span").eq(2).hide();
    $(".insert_number").find("span").eq(3).hide();
    $(".insert_number").find("span").eq(4).hide();
    $(".insert_number").find("span").eq(5).hide();
    $("#imgleft").hide(); 
    $("#imgright").hide(); 
    $("#calltel").hide();  
    
  }

})

function page2(){
  setTimeout(function(){
    $(".call_nine").show();
    $(".call_nine").addClass("on");
    $(".insert_number").find("span").eq(0).show();
  },1000)
  

  setTimeout(function(){
    $(".call_five").show();
    $(".call_five").addClass("on");
    $(".insert_number").find("span").eq(1).show();
  },1500)

  setTimeout(function(){
    $(".call_zero").show();
    $(".call_zero").addClass("on");
    $(".insert_number").find("span").eq(2).show();
  },2000)

  setTimeout(function(){
    $(".call_one").show();
    $(".call_one").addClass("on");
    $(".insert_number").find("span").eq(3).show();
  },2500)

  setTimeout(function(){
    $(".call_three").show();
    $(".call_three").addClass("on");
    $(".insert_number").find("span").eq(4).show();
    $(".insert_number").find("span").eq(5).show();     
    $("#imgleft").show();     
  },3000)

  setTimeout(function(){   
    $("#imgleft").show();     
  },3500)

  setTimeout(function(){   
    $("#imgright").show();     
  },4000)

  setTimeout(function(){   
    $("#calltel").show();     
  },4500)
 }

 function page3(){
  setTimeout(function(){   
    $(".f_95013number").show(); 
    $(".f_95013number").addClass("on");    
  },500)
  setTimeout(function(){   
    $(".dialog1").show();  
    $(".dialog1").addClass("on");     
  },1000)
  setTimeout(function(){   
    $(".dialog2").show(); 
    $(".dialog2").addClass("on");     
  },1500)
  setTimeout(function(){   
    $(".dialog3").show();
    $(".dialog3").addClass("on");      
  },2000)
 }

