$(function() {
  $("mainbanner img").click(function(){
    let imgSrc = $(this).attr();
    let checkAni = $("#main img:last").is(":animated");
  })
  $("#main img:last").animate({
    opacity: 0
  }, {
    duration: 400,
    easing: "swing",
    start: function() {
      $("#main img").before(`<img src=${imgSrc}>`)
    },
    complete: function() {
      $(this).remove()
    }
});
const marginNumber = 600;
const pwElem = $(".inner .slider")
const pageLeng = $(".inner .slider .bn_img").length;
$(pwElem).width(marginNumber*pageLeng); //.page의 length 값을 가져와서 .page-wrap 초기 너비 값은 설정

function pagingBtnFunc(el) {
    el.click(function() {
    console.log(pageLeng);
    let marginLeftNum = parseInt(pwElem.css("margin-left"));
    let isAni = pwElem.is(":animated")
    console.log(isAni);
    if(isAni == false){ //부정어 표기 ! isAni 와 같은 의미
      if ($(el).hasClass("next") && marginLeftNum > -(marginNumber * (pageLeng-1))) {
        pwElem.animate({marginLeft: marginLeftNum - marginNumber},"fast");
      }else if ( $(el).hasClass("prev") && marginLeftNum < 0) {
        pwElem.animate({marginLeft: marginLeftNum + marginNumber},"fast");
      }else if (marginLeftNum == -(marginNumber * (pageLeng-1)) ||  marginLeftNum == 0){
      }
    }
  });
}

  $(".btn").each(function(){
    pagingBtnFunc($(this))
  });
  return false;
});
