$(function () {
  const widthNum = 1920; //slide li 개별 너비, ul .column 너비를 계산할 수 있다
  const caInner = $("#mainbanner .inner");
  //li의 개수 가져오기
  let liLeng = $(".bn_img", caInner).length;
  // let liLeng = $("ul.column li",column).length;
  console.log(liLeng);
  //li의 개수로 ul.column의 너비를 설정
  $("#carousel-inner ul.column").css("width", widthNum * liLeng);

  //슬라이드 포지션 초기화 ul.column의 마지막 li를 ul.column의 첫번째 자식요소를 이동
  //ul.column의 초기 슬라이드 위치로 이동
  $("#carousel-inner ul.column li:last").prependTo("#carousel-inner ul.column");
  $("#carousel-inner").css("margin-left", -widthNum);

  function actionBtn(el) {
    el.click(function () {
      let caInMarginLeft = parseInt($(".inner").css("margin-left"));
      let isAni = $(".inner").is(":animated");
      if (el.hasClass("prev")) {
        console.log(caInMarginLeft);
        if(caInMarginLeft < 0){
          if (!isAni) {
            caInner.animate(
              { marginLeft: caInMarginLeft + widthNum },
              "slow",
              "swing",
              function () {});
          }
        }
      } else {
        if(caInMarginLeft > -(widthNum * (liLeng - 1))){  
          if (!isAni) {
            caInner.animate(
              { marginLeft: caInMarginLeft - widthNum },
              "slow",
              "swing",
              function () {});
          }
        }
      }
    });
  }
  $(".btn").each(function () {
    actionBtn($(this));
  });

  var mySwiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    width: 637.5,
  })
});
